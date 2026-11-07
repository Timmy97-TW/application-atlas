/* Page-specific figures.
   'changes-board' (changes.html): cycle columns × change cards, category chips with a FLIP re-layout.
     spec: { columns:[{id, label, sub?}], cats:[{v, label}], cards:[{cycle, cat, t, tag, src, when?, watch?}] }
   'char-meter' (persona pages): each entry's text with a meter of used / limit, counted live.
     spec: { items:[{label, text, limit, unit:'chars'|'words', src}] }
   'source-mix' (sources.html): official vs secondary citations per source group, from ATLAS.sources.
   'run-timeline' (log.html): the briefs in ATLAS.log.entries as a vertical, expandable timeline.
   No content lives here: only unit words, control labels and table headers. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  var EASE = 'cubic-bezier(.2,.7,.2,1)';
  var T = {
    all: { zh: '全部', en: 'All' },
    more: { zh: '展開', en: 'More' },
    less: { zh: '收合', en: 'Less' },
    none: { zh: '這個類別在此欄沒有項目', en: 'Nothing in this column for this category' },
    watch: { zh: '待查', en: 'To watch' },
    cycle: { zh: '申請季', en: 'Cycle' }, cat: { zh: '類別', en: 'Category' }, change: { zh: '變更', en: 'Change' },
    when: { zh: '來源寫的時間', en: 'As the source dates it' }, src: { zh: '來源', en: 'Sources' },
    chars: { zh: '字元', en: 'chars' }, words: { zh: '字', en: 'words' },
    left: { zh: '剩餘', en: 'left' }, over: { zh: '超過', en: 'over' },
    field: { zh: '欄位', en: 'Field' }, used: { zh: '已用', en: 'Used' }, limit: { zh: '上限', en: 'Limit' },
    under: { zh: '上限的 95% 以內', en: 'Within 95% of the limit' }, near: { zh: '超過上限的 95%', en: 'Above 95% of the limit' },
    official: { zh: '官方', en: 'Official' }, secondary: { zh: '次級', en: 'Secondary' }, total: { zh: '合計', en: 'Total' },
    group: { zh: '來源組別', en: 'Source group' }, share: { zh: '官方占比', en: 'official share' },
    cited: { zh: '筆引用來源', en: 'cited sources' }, fromOfficial: { zh: '來自官方頁面', en: 'from official pages' },
    showAll: { zh: '顯示全部 {n} 組', en: 'Show all {n} groups' }, showLess: { zh: '只顯示前 {n} 組', en: 'Show top {n}' },
    done: { zh: '完成', en: 'done' }, notDone: { zh: '未完成', en: 'not done' },
    doneH: { zh: '做完的', en: 'Done' }, notDoneH: { zh: '沒做的', en: 'Not done' },
    details: { zh: '看細節', en: 'Details' }, hide: { zh: '收起', en: 'Hide' },
    date: { zh: '日期', en: 'Date' }, run: { zh: '執行', en: 'Run' }, unit: { zh: '單元', en: 'Units' }, status: { zh: '狀態', en: 'Status' }
  };
  function U() { return window.ATLAS_UTIL; }
  function clsOf(ids) {
    var S = (window.ATLAS || {}).sources || {};
    var c = (ids || []).map(function (i) { return S[i] && S[i].cls; });
    return c.indexOf('official') >= 0 ? 'official' : (c.indexOf('secondary') >= 0 ? 'secondary' : null);
  }
  function fill(s, n) { return s.replace('{n}', n); }
  // Animate height from its current value to the content's height (or to 0), ending at auto.
  function slide(el, open) {
    if (window.ATLAS_VIZ.V.reduced) { el.hidden = !open; el.style.height = ''; return; }
    var from = el.hidden ? 0 : el.offsetHeight;
    el.hidden = false;
    var to = open ? el.scrollHeight : 0;
    el.style.overflow = 'hidden';
    el.style.height = from + 'px';
    el.style.opacity = open ? '0' : '1';
    void el.offsetHeight;
    el.style.transition = 'height 420ms ' + EASE + ', opacity 320ms ' + EASE;
    el.style.height = to + 'px';
    el.style.opacity = open ? '1' : '0';
    var done = function (e) {
      if (e && e.propertyName !== 'height') return;
      el.removeEventListener('transitionend', done);
      el.style.transition = ''; el.style.height = ''; el.style.overflow = ''; el.style.opacity = '';
      if (!open) el.hidden = true;
    };
    el.addEventListener('transitionend', done);
  }

  // ───────────────────────── changes-board
  ATLAS_VIZ.register('changes-board', function (el, spec, V, ctx) {
    var L = V.L, cols = spec.columns || [], cats = spec.cats || [], all = spec.cards || [];
    var state = el._state || (el._state = { cat: 'all', open: {} });
    var catIdx = {}; cats.forEach(function (c, i) { catIdx[c.v] = i; });
    function catLabel(v) { var c = cats[catIdx[v]]; return c ? L(c.label) : v; }

    var chips = V.h('div', { 'class': 'vz-chips', role: 'group' }, null, el);
    var chipEls = [];
    [{ v: 'all', label: T.all }].concat(cats).forEach(function (c) {
      var b = V.h('button', { 'class': 'vz-chip', type: 'button', 'aria-pressed': String(state.cat === c.v) }, null, chips);
      if (c.v !== 'all') { var k = V.h('span', { 'class': 'vz-cb-dot' }, null, b); k.style.background = V.color(catIdx[c.v]); }
      V.h('span', null, L(c.label), b);
      var n = c.v === 'all' ? all.length : all.filter(function (x) { return x.cat === c.v; }).length;
      V.h('span', { 'class': 'vz-cb-cn' }, String(n), b);
      b.addEventListener('click', function () { if (state.cat === c.v) return; state.cat = c.v; apply(true); });
      chipEls.push({ v: c.v, el: b });
    });

    var board = V.h('div', { 'class': 'vz-cb' }, null, el);
    var colEls = {}, cards = [];
    cols.forEach(function (c) {
      var col = V.h('section', { 'class': 'vz-cb-col', 'aria-label': L(c.label) }, null, board);
      var hd = V.h('header', { 'class': 'vz-cb-hd' }, null, col);
      var ht = V.h('div', { 'class': 'vz-cb-ht' }, null, hd);
      V.h('span', { 'class': 'vz-cb-hl' }, L(c.label), ht);
      var cnt = V.h('span', { 'class': 'vz-cb-hn' }, '', ht);
      if (c.sub) V.h('div', { 'class': 'vz-cb-hs' }, L(c.sub), hd);
      var list = V.h('div', { 'class': 'vz-cb-list' }, null, col);
      var empty = V.h('p', { 'class': 'vz-cb-empty' }, L(T.none), list);
      colEls[c.id] = { list: list, cnt: cnt, empty: empty };
    });
    all.forEach(function (d, i) {
      var C = colEls[d.cycle]; if (!C) return;
      var card = V.h('article', { 'class': 'vz-cb-card' + (d.watch ? ' watch' : ''), 'data-cls': clsOf(d.src) }, null, C.list);
      card.style.setProperty('--cat', V.color(catIdx[d.cat] || 0));
      var meta = V.h('div', { 'class': 'vz-cb-meta' }, null, card);
      V.h('span', { 'class': 'vz-cb-dot' }, null, meta).style.background = V.color(catIdx[d.cat] || 0);
      V.h('span', null, catLabel(d.cat), meta);
      if (d.watch) V.h('span', { 'class': 'vz-cb-w' }, L(T.watch), meta);
      if (d.when) V.h('span', { 'class': 'vz-cb-when' }, L(d.when), meta);
      var t = V.h('div', { 'class': 'vz-cb-t' }, null, card);
      t.innerHTML = (d.tag ? U().itemHtml({ t: { zh: '', en: '' }, tag: d.tag }) : '') + V.md(L(d.t));
      var foot = V.h('div', { 'class': 'vz-cb-f' }, null, card);
      var cite = V.h('span', { 'class': 'vz-cb-src' }, null, foot);
      cite.innerHTML = V.cites(d.src || []);
      var c = { d: d, i: i, el: card, t: t, foot: foot, btn: null, measured: false };
      if (state.open[i]) card.classList.add('open');
      cards.push(c);
    });

    function measure() {
      cards.forEach(function (c) {
        if (c.measured || c.el.hidden) return;
        c.measured = true;
        var open = c.el.classList.contains('open');
        if (open) c.el.classList.remove('open');
        var over = c.t.scrollHeight > c.t.clientHeight + 2;
        if (open) c.el.classList.add('open');
        if (!over) return;
        c.btn = V.h('button', { 'class': 'vz-btn vz-cb-more', type: 'button', 'aria-expanded': String(open) }, L(open ? T.less : T.more), c.foot);
        c.btn.addEventListener('click', function () {
          flip(function () {
            var o = !c.el.classList.contains('open');
            c.el.classList.toggle('open', o);
            state.open[c.i] = o;
            c.btn.setAttribute('aria-expanded', String(o));
            c.btn.textContent = L(o ? T.less : T.more);
          });
        });
      });
    }
    // FLIP: record positions, mutate, then play every visible card from its old place to its new one.
    function flip(mutate) {
      var first = new Map();
      cards.forEach(function (c) { if (!c.el.hidden) first.set(c.el, c.el.getBoundingClientRect()); });
      mutate();
      if (V.reduced) return;
      var moved = [];
      cards.forEach(function (c) {
        if (c.el.hidden) return;
        var r = c.el.getBoundingClientRect(), f = first.get(c.el), s = c.el.style;
        s.transition = 'none';
        if (f) {
          var dx = f.left - r.left, dy = f.top - r.top;
          if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
          s.transform = 'translate(' + dx + 'px,' + dy + 'px)';
        } else { s.opacity = '0'; s.transform = 'translateY(8px) scale(.98)'; }
        moved.push(c.el);
      });
      if (!moved.length) return;
      void board.offsetHeight;
      requestAnimationFrame(function () {
        moved.forEach(function (e, k) {
          var dl = first.has(e) ? 0 : Math.min(k * 14, 240);
          e.style.transition = 'transform 520ms ' + EASE + ' ' + dl + 'ms, opacity 420ms ' + EASE + ' ' + dl + 'ms';
          e.style.transform = ''; e.style.opacity = '';
        });
      });
    }
    function apply(animate) {
      var run = function () {
        chipEls.forEach(function (c) { c.el.setAttribute('aria-pressed', String(c.v === state.cat)); });
        var per = {};
        cards.forEach(function (c) {
          var on = state.cat === 'all' || c.d.cat === state.cat;
          c.el.hidden = !on;
          if (on) per[c.d.cycle] = (per[c.d.cycle] || 0) + 1;
        });
        Object.keys(colEls).forEach(function (k) { colEls[k].cnt.textContent = String(per[k] || 0); colEls[k].empty.hidden = !!per[k]; });
        measure();
      };
      if (animate) flip(run); else run();
    }
    apply(false);
    if (ctx.first) V.stagger(cards.filter(function (c) { return !c.el.hidden; }).map(function (c) { return c.el; }), { from: 'translateY(10px)', step: 18 });

    var colLabel = {}; cols.forEach(function (c) { colLabel[c.id] = L(c.label); });
    return {
      table: {
        cols: [T.cycle, T.cat, T.change, T.when, T.src],
        rows: all.map(function (d) {
          return [colLabel[d.cycle] + (d.watch ? ' · ' + L(T.watch) : ''), catLabel(d.cat), { html: U().itemHtml({ t: d.t, tag: d.tag }) }, d.when ? L(d.when) : '—', { html: V.cites(d.src || []) }];
        })
      }
    };
  });

  // ───────────────────────── char-meter
  function count(text, unit) {
    var s = text || '';
    if (unit === 'words') { s = s.trim(); return s ? s.split(/\s+/).length : 0; }
    return s.length;
  }
  ATLAS_VIZ.register('char-meter', function (el, spec, V, ctx) {
    var L = V.L, items = spec.items || [];
    var grid = V.h('div', { 'class': 'vz-cm' + (items.length > 1 ? ' multi' : '') }, null, el);
    var fills = [], nums = [], rows = [];
    items.forEach(function (it) {
      var text = L(it.text), n = count(text, it.unit), lim = it.limit || 1, f = Math.min(1, n / lim);
      var u = L(it.unit === 'words' ? T.words : T.chars);
      var hot = n / lim > 0.95;
      var row = V.h('div', { 'class': 'vz-cm-row' + (hot ? ' hot' : ''), 'aria-label': L(it.label) + ': ' + n + ' / ' + lim + ' ' + u }, null, grid);
      var hd = V.h('div', { 'class': 'vz-cm-hd' }, null, row);
      V.h('span', { 'class': 'vz-cm-lab' }, L(it.label), hd);
      var nb = V.h('span', { 'class': 'vz-cm-n' }, null, hd);
      var num = V.h('b', null, String(n), nb);
      V.h('span', null, ' / ' + V.fmt.int(lim) + ' ' + u, nb);
      V.h('p', { 'class': 'vz-cm-text', lang: 'en' }, text, row);
      var tr = V.h('div', { 'class': 'vz-cm-track' }, null, row);
      var fl = V.h('span', { 'class': 'vz-cm-fill' }, null, tr);
      fl.style.width = (f * 100).toFixed(2) + '%';
      fills.push(fl); nums.push({ el: num, n: n });
      V.tip(row, function () {
        var rest = lim - n;
        return { title: L(it.label), rows: [{ value: n + ' / ' + V.fmt.int(lim), label: u, color: hot ? 'var(--c2)' : 'var(--accent)' },
          { value: String(Math.abs(rest)), label: L(rest >= 0 ? T.left : T.over), src: it.src }] };
      });
      rows.push([L(it.label), n + ' ' + u, V.fmt.int(lim) + ' ' + u, String(lim - n), { html: V.cites(it.src || []) }]);
    });
    if (items.some(function (it) { return count(L(it.text), it.unit) / (it.limit || 1) > 0.95; }))
      V.legend([{ label: T.under, color: 'var(--accent)' }, { label: T.near, color: 'var(--c2)' }], el);
    if (ctx.first && !V.reduced) {
      fills.forEach(function (f, i) {
        f.style.transform = 'scaleX(0)';
        requestAnimationFrame(function () { f.style.transition = 'transform 560ms ' + EASE + ' ' + Math.min(i * 40, 240) + 'ms'; f.style.transform = ''; });
      });
      nums.forEach(function (o, i) {
        var t0 = null, dur = 560, delay = Math.min(i * 40, 240);
        o.el.textContent = '0';
        (function step(ts) {
          if (!t0) t0 = ts + delay;
          var p = Math.max(0, Math.min(1, (ts - t0) / dur)), e = 1 - Math.pow(1 - p, 3);
          o.el.textContent = String(Math.round(o.n * e));
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      });
    }
    return { table: { cols: [T.field, T.used, T.limit, T.left, T.src], rows: rows } };
  });

  // ───────────────────────── source-mix
  ATLAS_VIZ.register('source-mix', function (el, spec, V, ctx) {
    var L = V.L, A = window.ATLAS || {}, S = A.sources || {}, GL = A.sourceGroups || {};
    var state = el._state || (el._state = { all: false });
    var G = {};
    Object.keys(S).forEach(function (id) {
      var g = S[id].group || 'other', o = G[g] || (G[g] = { g: g, o: 0, s: 0 });
      if (S[id].cls === 'official') o.o++; else o.s++;
    });
    var list = Object.keys(G).map(function (k) { var o = G[k]; o.n = o.o + o.s; return o; })
      .sort(function (a, b) { return b.n - a.n || (a.g < b.g ? -1 : 1); });
    var tot = list.reduce(function (a, o) { return a + o.n; }, 0), off = list.reduce(function (a, o) { return a + o.o; }, 0);
    var share = tot ? off / tot : 0;

    var head = V.h('div', { 'class': 'vz-sm-head' }, null, el);
    var h1 = V.h('div', { 'class': 'vz-sm-h' }, null, head);
    V.h('span', { 'class': 'vz-sm-big' }, V.fmt.int(tot), h1);
    V.h('span', { 'class': 'vz-sm-hl' }, L(T.cited), h1);
    var h2 = V.h('div', { 'class': 'vz-sm-h' }, null, head);
    V.h('span', { 'class': 'vz-sm-big' }, V.fmt.pct(share, 1), h2);
    V.h('span', { 'class': 'vz-sm-hl' }, L(T.fromOfficial), h2);

    V.legend([{ label: { zh: T.official.zh + ' ' + off, en: T.official.en + ' ' + off }, color: 'var(--official)' },
      { label: { zh: T.secondary.zh + ' ' + (tot - off), en: T.secondary.en + ' ' + (tot - off) }, color: 'var(--secondary)' }], el);

    var TOP = spec.top || 12;
    var max = list.length ? list[0].n : 1;
    function pos(f) { return 'calc((100% - 44px) * ' + f.toFixed(4) + ')'; }
    var wrap = V.h('div', { 'class': 'vz-sm' }, null, el);
    var bars = [], extra = [];
    list.forEach(function (o, i) {
      var name = L(GL[o.g]) || o.g;
      var row = V.h('div', { 'class': 'vz-sm-row', 'aria-label': name + ': ' + o.o + ' ' + L(T.official) + ', ' + o.s + ' ' + L(T.secondary) }, null, wrap);
      var lab = V.h('a', { 'class': 'vz-sm-lab', href: '#g-' + encodeURIComponent(o.g), tabindex: '-1' }, name, row);
      lab.addEventListener('click', function (e) { e.stopPropagation(); });
      var tr = V.h('div', { 'class': 'vz-sm-track' }, null, row);
      var bar = V.h('span', { 'class': 'vz-sm-bar' }, null, tr);
      bar.style.width = pos(o.n / max);
      if (o.o) V.h('span', { 'class': 'vz-sm-seg off' }, null, bar).style.flexGrow = o.o;
      if (o.s) V.h('span', { 'class': 'vz-sm-seg sec' }, null, bar).style.flexGrow = Math.max(o.s, o.n * 0.004);
      var v = V.h('span', { 'class': 'vz-sm-val' }, String(o.n), tr);
      v.style.left = 'calc(' + pos(o.n / max) + ' + 8px)';
      V.tip(row, function () {
        return { title: name, rows: [
          { value: String(o.o), label: L(T.official), color: 'var(--official)' },
          { value: String(o.s), label: L(T.secondary), color: 'var(--secondary)' },
          { value: V.fmt.pct(o.n ? o.o / o.n : 0, 0), label: L(T.share) }] };
      });
      if (i >= TOP) { extra.push(row); row.hidden = !state.all; }
      if (i < TOP || state.all) bars.push(bar);
    });
    if (extra.length) {
      var more = V.h('div', { 'class': 'vz-sm-more', hidden: state.all ? null : '' }, null, wrap);
      extra.forEach(function (r) { r.hidden = false; more.appendChild(r); });
      var btn = V.h('button', { 'class': 'vz-btn', type: 'button', 'aria-expanded': String(state.all) }, fill(L(state.all ? T.showLess : T.showAll), state.all ? TOP : list.length), el);
      btn.addEventListener('click', function () {
        state.all = !state.all;
        btn.setAttribute('aria-expanded', String(state.all));
        btn.textContent = fill(L(state.all ? T.showLess : T.showAll), state.all ? TOP : list.length);
        slide(more, state.all);
      });
    }
    if (ctx.first) V.stagger(bars, { from: 'scaleX(0)', origin: 'left center', step: 30 });
    return { table: { cols: [T.group, T.official, T.secondary, T.total], rows: list.map(function (o) { return [L(GL[o.g]) || o.g, String(o.o), String(o.s), String(o.n)]; }) } };
  });

  // ───────────────────────── run-timeline
  ATLAS_VIZ.register('run-timeline', function (el, spec, V, ctx) {
    var L = V.L, lg = (window.ATLAS || {}).log; if (!lg || !lg.entries) return;
    var state = el._state || (el._state = { open: {} });
    var wrapEl = V.h('div', { 'class': 'vz-rt-wrap' }, null, el);
    var rail = V.h('span', { 'class': 'vz-rt-rail', 'aria-hidden': 'true' }, null, wrapEl);
    var tl = V.h('ol', { 'class': 'vz-rt' }, null, wrapEl);
    var items = [];
    lg.entries.forEach(function (e, i) {
      var title = V.lang() === 'zh' ? (e.title_zh || e.title_en) : (e.title_en || e.title_zh);
      var li = V.h('li', { 'class': 'vz-rt-i' }, null, tl);
      V.h('span', { 'class': 'vz-rt-dot', 'aria-hidden': 'true' }, null, li);
      var meta = V.h('div', { 'class': 'vz-rt-meta' }, null, li);
      V.h('time', { datetime: e.date }, e.date, meta);
      V.h('h3', { 'class': 'vz-rt-t' }, title || e.file, li);
      if (e.unit || e.status) V.h('div', { 'class': 'vz-rt-u', lang: 'en' }, [e.unit, e.status].filter(Boolean).join(' · '), li);
      var bd = V.h('div', { 'class': 'vz-rt-b' }, null, li);
      var nd = (e.done || []).length, nn = (e.notDone || []).length;
      V.h('span', { 'class': 'vz-rt-badge done' + (nd ? '' : ' zero') }, nd + ' ' + L(T.done), bd);
      V.h('span', { 'class': 'vz-rt-badge nd' + (nn ? '' : ' zero') }, nn + ' ' + L(T.notDone), bd);
      if (nd || nn) {
        var open = !!state.open[i];
        var btn = V.h('button', { 'class': 'vz-btn vz-rt-btn', type: 'button', 'aria-expanded': String(open) }, L(open ? T.hide : T.details), bd);
        var body = V.h('div', { 'class': 'vz-rt-body', hidden: open ? null : '' }, null, li);
        [[e.done, T.doneH], [e.notDone, T.notDoneH]].forEach(function (p) {
          if (!p[0] || !p[0].length) return;
          V.h('div', { 'class': 'vz-rt-bh' }, L(p[1]), body);
          var ul = V.h('ul', { lang: 'en' }, null, body);
          p[0].forEach(function (x) { V.h('li', null, null, ul).innerHTML = V.md(x); });
        });
        btn.addEventListener('click', function () {
          var o = btn.getAttribute('aria-expanded') !== 'true';
          state.open[i] = o;
          btn.setAttribute('aria-expanded', String(o));
          btn.textContent = L(o ? T.hide : T.details);
          slide(body, o);
        });
      }
      items.push(li);
    });
    if (ctx.first && !V.reduced) {
      rail.style.transform = 'scaleY(0)';
      requestAnimationFrame(function () { rail.style.transition = 'transform 600ms ' + EASE; rail.style.transform = ''; });
      V.stagger(items, { from: 'translateY(8px)', step: 80 });
    }
    return {
      table: {
        cols: [T.date, T.run, T.unit, T.status, T.done, T.notDone],
        rows: lg.entries.map(function (e) {
          return [e.date, V.lang() === 'zh' ? (e.title_zh || e.title_en) : (e.title_en || e.title_zh), e.unit || '—', e.status || '—', String((e.done || []).length), String((e.notDone || []).length)];
        })
      }
    };
  });
})();
