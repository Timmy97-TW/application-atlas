/* Shared core for visual components. Components register with
   ATLAS_VIZ.register(type, render); app.js calls ATLAS_VIZ.mount(section, spec).
   See docs/design-system.md. No text lives here: labels come from data. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var reg = {};
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.2,.7,.2,1)';

  function U() { return window.ATLAS_UTIL; }
  function L(x) { return U().L(x); }
  function lang() { return U().lang(); }
  function data() { return (window.ATLAS || {}).viz || {}; }

  function svg(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function h(tag, attrs, text, parent) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  // linear scale with nice-ish ticks
  function scale(d0, d1, r0, r1) {
    var f = function (v) { return r0 + (v - d0) / ((d1 - d0) || 1) * (r1 - r0); };
    f.ticks = function (n) {
      var span = d1 - d0, step = Math.pow(10, Math.floor(Math.log10(span / (n || 5))));
      [1, 2, 2.5, 5, 10].some(function (m) { if (span / (step * m) <= (n || 5)) { step *= m; return true; } return false; });
      var out = [], v = Math.ceil(d0 / step) * step;
      for (; v <= d1 + 1e-9; v += step) out.push(+v.toFixed(10));
      return out;
    };
    f.domain = [d0, d1]; f.range = [r0, r1];
    return f;
  }
  function band(keys, r0, r1, pad) {
    var n = keys.length, step = (r1 - r0) / Math.max(n, 1), p = pad == null ? 0.2 : pad;
    var f = function (k) { return r0 + keys.indexOf(k) * step + step * p / 2; };
    f.bw = step * (1 - p); f.step = step;
    return f;
  }
  var day = 864e5;
  function dateNum(s) { return Date.parse(s + 'T00:00:00Z'); }
  var fmt = {
    pct: function (v, d) { return v == null ? '—' : (v * 100).toFixed(d == null ? 1 : d) + '%'; },
    int: function (v) { return v == null ? '—' : Math.round(v).toLocaleString('en-US'); },
    usd: function (v) { return v == null ? '—' : '$' + Math.round(v).toLocaleString('en-US'); },
    date: function (s) {
      if (!s) return '—';
      var d = new Date(dateNum(s));
      var m = d.getUTCMonth() + 1, dd = d.getUTCDate();
      return lang() === 'zh' ? m + '/' + dd : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1] + ' ' + dd;
    },
    month: function (i) { return lang() === 'zh' ? (i + 1) + '月' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]; }
  };

  // ---------- one shared tooltip ----------
  var tipEl = null, tipOwner = null;
  function ensureTip() {
    if (tipEl) return tipEl;
    tipEl = h('div', { 'class': 'vz-tip', role: 'tooltip', 'aria-hidden': 'true' }, null, document.body);
    document.addEventListener('pointerdown', function (e) { if (tipOwner && !tipOwner.contains(e.target)) hideTip(); }, true);
    window.addEventListener('scroll', function () { if (tipEl && tipEl.dataset.sticky !== '1') hideTip(); }, { passive: true });
    return tipEl;
  }
  // rows: [{value, label, color, src}] ; title: string
  function showTip(target, title, rows, x, y, sticky) {
    var t = ensureTip();
    t.innerHTML = '';
    if (title) h('div', { 'class': 'vz-tip-t' }, title, t);
    (rows || []).forEach(function (r) {
      var row = h('div', { 'class': 'vz-tip-r' }, null, t);
      if (r.color) { var k = h('span', { 'class': 'vz-key' }, null, row); k.style.background = r.color; }
      h('span', { 'class': 'vz-tip-v' }, r.value == null ? '' : String(r.value), row);
      if (r.label) h('span', { 'class': 'vz-tip-l' }, r.label, row);
    });
    var srcs = [];
    (rows || []).forEach(function (r) { (r.src || []).forEach(function (s) { if (srcs.indexOf(s) < 0) srcs.push(s); }); });
    if (srcs.length) { var c = h('div', { 'class': 'vz-tip-s' }, null, t); c.innerHTML = U().cites(srcs.slice(0, 6)); }
    t.dataset.sticky = sticky ? '1' : '0';
    t.classList.add('on');
    t.setAttribute('aria-hidden', 'false');
    tipOwner = target;
    var r = target.getBoundingClientRect ? target.getBoundingClientRect() : null;
    var px = x != null ? x : (r ? r.left + r.width / 2 : 0);
    var py = y != null ? y : (r ? r.top : 0);
    var w = t.offsetWidth, hh = t.offsetHeight, vw = document.documentElement.clientWidth;
    var left = Math.max(8, Math.min(vw - w - 8, px - w / 2));
    var top = py - hh - 12;
    if (top < 8) top = py + 18;
    t.style.transform = 'translate(' + Math.round(left) + 'px,' + Math.round(top + window.scrollY) + 'px)';
  }
  function hideTip() { if (!tipEl) return; tipEl.classList.remove('on'); tipEl.setAttribute('aria-hidden', 'true'); tipOwner = null; }
  // bind hover + focus + tap on a mark
  function tip(mark, getContent) {
    if (!mark.hasAttribute('tabindex')) mark.setAttribute('tabindex', '0');
    mark.classList.add('vz-hit');
    function open(e, sticky) {
      var c = getContent();
      var kb = e && e.type === 'click' && e.detail === 0; // keyboard/programmatic click: anchor to the mark
      var x = e && !kb && e.clientX != null && e.pointerType !== 'touch' ? e.clientX : null;
      var y = e && !kb && e.clientY != null && e.pointerType !== 'touch' ? e.clientY : null;
      showTip(mark, c.title, c.rows, x, y, sticky);
    }
    mark.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') open(e); });
    mark.addEventListener('pointermove', function (e) { if (e.pointerType !== 'touch') open(e); });
    mark.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'touch') hideTip(); });
    mark.addEventListener('focus', function () { open(null); });
    mark.addEventListener('blur', hideTip);
    mark.addEventListener('click', function (e) { if (e.pointerType === 'touch' || e.detail === 0) open(e, true); });
    mark.addEventListener('keydown', function (e) { if (e.key === 'Escape') { hideTip(); mark.blur(); } });
  }

  // ---------- legend ----------
  function legend(items, parent, shape) {
    var lg = h('div', { 'class': 'vz-legend' }, null, parent);
    items.forEach(function (it) {
      var s = h('span', { 'class': 'vz-lg' }, null, lg);
      var k = h('span', { 'class': 'vz-sw ' + (it.shape || shape || 'box') }, null, s);
      if (it.color) k.style.background = it.color;
      if (it.border) k.style.borderColor = it.border;
      h('span', null, L(it.label), s);
    });
    return lg;
  }

  // ---------- enter animation ----------
  function onEnter(el, fn) {
    if (reduced || !('IntersectionObserver' in window)) { fn(true); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); fn(false); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
  }
  // animate a list of elements in: opacity + translate, staggered
  function stagger(els, opts) {
    opts = opts || {};
    var step = Math.min(opts.step || 12, 500 / Math.max(els.length, 1));
    els.forEach(function (e, i) {
      if (reduced) return;
      e.style.opacity = '0';
      e.style.transform = opts.from || 'translateY(6px)';
      e.style.transformBox = 'fill-box';
      e.style.transformOrigin = opts.origin || 'center bottom';
      requestAnimationFrame(function () {
        e.style.transition = 'opacity 480ms ' + EASE + ' ' + Math.round(i * step) + 'ms, transform 560ms ' + EASE + ' ' + Math.round(i * step) + 'ms';
        e.style.opacity = '';
        e.style.transform = '';
      });
    });
  }

  // ---------- table view ----------
  function tableView(rows, cols) {
    var wrap = h('div', { 'class': 'tablewrap vz-table' });
    var t = h('table', null, null, wrap);
    var tr = h('tr', null, null, h('thead', null, null, t));
    cols.forEach(function (c) { h('th', null, L(c), tr); });
    var tb = h('tbody', null, null, t);
    rows.forEach(function (r) {
      var row = h('tr', null, null, tb);
      r.forEach(function (c, i) {
        var td = h('td', null, null, row);
        if (c && typeof c === 'object' && c.html) td.innerHTML = c.html;
        else td.textContent = c == null ? '—' : (typeof c === 'object' ? L(c) : String(c));
      });
    });
    return wrap;
  }

  // ---------- mount ----------
  var mounted = [];
  function mount(into, spec) {
    var R = reg[spec.type];
    if (!R) return;
    var fig = h('figure', { 'class': 'viz detail vz-' + spec.type + (spec.wide ? ' wide' : '') }, null, into);
    if (spec.title) h('figcaption', { 'class': 'vz-title' }, L(spec.title), fig);
    if (spec.subtitle) h('p', { 'class': 'vz-sub' }, L(spec.subtitle), fig);
    var stage = h('div', { 'class': 'vz-stage' }, null, fig);
    var foot = h('div', { 'class': 'vz-foot' }, null, fig);
    var tb = null, tableBtn = null;
    function draw(first) {
      stage.innerHTML = '';
      var out = R(stage, spec, V, { first: first, foot: foot, redraw: function () { draw(false); } }) || {};
      if (out.table && !tableBtn) {
        tableBtn = h('button', { 'class': 'vz-btn', type: 'button', 'aria-expanded': 'false' }, L(UI.table), foot);
        tableBtn.addEventListener('click', function () {
          var open = tableBtn.getAttribute('aria-expanded') === 'true';
          tableBtn.setAttribute('aria-expanded', String(!open));
          tableBtn.textContent = L(open ? UI.table : UI.hideTable);
          if (open) { if (tb) tb.remove(); tb = null; }
          else { var o = R.lastTable || out.table; tb = tableView(o.rows, o.cols); fig.appendChild(tb); }
        });
      }
      R.lastTable = out.table;
      if (spec.note) { var n = fig.querySelector('.vz-note') || h('p', { 'class': 'vz-note' }, null, fig); n.innerHTML = U().md(L(spec.note)); }
      return out;
    }
    var w0 = 0;
    onEnter(fig, function (instant) { fig.classList.add('in'); draw(!instant); w0 = stage.clientWidth; });
    if ('ResizeObserver' in window) {
      var t = null;
      new ResizeObserver(function () {
        if (!fig.classList.contains('in')) return;
        if (Math.abs(stage.clientWidth - w0) < 24) return;
        clearTimeout(t); t = setTimeout(function () { w0 = stage.clientWidth; draw(false); }, 120);
      }).observe(stage);
    }
    mounted.push(fig);
    return fig;
  }

  var UI = {
    table: { zh: '顯示表格', en: 'Show table' },
    hideTable: { zh: '收起表格', en: 'Hide table' },
    notStated: { zh: '未說明', en: 'Not stated' },
    blocked: { zh: '網頁拒絕自動讀取', en: 'Page refused automated reading' },
    sources: { zh: '來源', en: 'Sources' }
  };

  var V = {
    svg: svg, h: h, scale: scale, band: band, tip: tip, showTip: showTip, hideTip: hideTip, legend: legend,
    onEnter: onEnter, stagger: stagger, tableView: tableView, reduced: reduced, fmt: fmt, dateNum: dateNum, day: day,
    L: L, lang: lang, data: data, ui: UI, ease: EASE,
    // the reader's local date, so the today marker and countdowns stay current
    todayISO: function () { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); },
    cites: function (s) { return U().cites(s); }, md: function (s) { return U().md(s); },
    color: function (i) { return 'var(--c' + ((i % 5) + 1) + ')'; }
  };
  window.ATLAS_VIZ = {
    register: function (type, fn) { reg[type] = fn; },
    mount: mount, V: V, has: function (t) { return !!reg[t]; }
  };
})();
