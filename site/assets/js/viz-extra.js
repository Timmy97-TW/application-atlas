/* Generic comparison grid ('feature-matrix') and inline-data waffle ('waffle-inline').
   feature-matrix spec:
     { rows:[{label:{zh,en}, sub?:{zh,en}}], cols:[{label:{zh,en}}],
       cells:[[{v:'yes'|'partial'|'no'|'ns'|'blocked', t:{zh,en}, src:[…]}…]…],
       legend?:{yes,partial,no,ns,blocked → {zh,en}}, corner?:{zh,en} }
     Glyphs match the materials matrix: filled / half / hollow-slash / dashed / hatched.
     Hover or focus a cell: tooltip with t + sources, and its column is highlighted.
     Below 640px the rows become cards that show every value as text.
   waffle-inline spec:
     { groups:[{v, label:{zh,en}, items:[{name, t?:{zh,en}, src:[…]}]}], unit?:{zh,en} }
     One square per item; group colour follows group order (v 'ns' draws a dashed square).
   Styles: site.css, block "Extra figures (viz-extra.js)". No page text lives here. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  function s(zh, en) { return { zh: zh, en: en }; }
  var T = {
    yes: s('是', 'Yes'),
    partial: s('部分／附條件', 'Partly / with conditions'),
    no: s('否', 'No'),
    ns: s('未載明', 'Not stated'),
    blocked: s('網頁拒絕自動讀取，未讀到', 'Page refused automated reading; not read'),
    item: s('項目', 'Item'),
    group: s('類別', 'Group'), count: s('數量', 'Count'), which: s('名單', 'Which'),
    of: s('{n}／{t}', '{n} of {t}')
  };
  var ORDER = ['yes', 'partial', 'no', 'ns', 'blocked'];
  function fmtT(x, o) { var t = window.ATLAS_UTIL.L(x); for (var k in o) t = t.split('{' + k + '}').join(o[k]); return t; }
  function esc(x) { return window.ATLAS_UTIL.esc(x == null ? '' : x); }
  function srcCls(ids) {
    var S = (window.ATLAS || {}).sources || {}, c = (ids || []).map(function (i) { return S[i] && S[i].cls; });
    return c.indexOf('official') >= 0 ? 'official' : (c.indexOf('secondary') >= 0 ? 'secondary' : '');
  }

  var hatchDone = false;
  function ensureHatch(V) {
    if (hatchDone) return; hatchDone = true;
    var sv = V.svg('svg', { width: 0, height: 0, 'aria-hidden': 'true', style: 'position:absolute;width:0;height:0' });
    sv.innerHTML = '<defs><pattern id="vzx-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="4" fill="#eef0f3"/><line x1="0" y1="0" x2="0" y2="4" stroke="#bfc4cb" stroke-width="1.6"/></pattern></defs>';
    document.body.appendChild(sv);
  }
  function glyph(v) {
    var p;
    if (v === 'yes') p = '<circle cx="10" cy="10" r="6" fill="var(--s4)"/>';
    else if (v === 'partial') p = '<circle cx="10" cy="10" r="5.4" fill="var(--viz-surface)" stroke="var(--s4)" stroke-width="1.5"/><path d="M10 4.6 A5.4 5.4 0 0 0 10 15.4 Z" fill="var(--s4)"/>';
    else if (v === 'no') p = '<circle cx="10" cy="10" r="4" fill="none" stroke="var(--viz-muted)" stroke-width="1.3"/><line x1="7" y1="13" x2="13" y2="7" stroke="var(--viz-muted)" stroke-width="1.3" stroke-linecap="round"/>';
    else if (v === 'blocked') p = '<rect x="4" y="4" width="12" height="12" rx="3" fill="url(#vzx-hatch)" stroke="#c9cdd3" stroke-width="1"/>';
    else p = '<circle cx="10" cy="10" r="5.4" fill="none" stroke="var(--viz-muted)" stroke-width="1.3" stroke-dasharray="2.1 2.1"/>';
    return '<svg class="fm-gl" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">' + p + '</svg>';
  }

  // =====================================================================
  // 1. feature-matrix
  // =====================================================================
  ATLAS_VIZ.register('feature-matrix', function (el, spec, V, ctx) {
    var L = V.L, rows = spec.rows || [], cols = spec.cols || [], cells = spec.cells || [];
    if (!rows.length || !cols.length) return;
    ensureHatch(V);
    var lg = spec.legend || {};
    function vLabel(v) { return L(lg[v] || T[v] || T.ns); }
    function cellAt(i, j) { return (cells[i] || [])[j] || { v: 'ns', src: [] }; }
    var present = {};
    rows.forEach(function (r, i) { cols.forEach(function (c, j) { present[cellAt(i, j).v] = 1; }); });
    var mobile = el.clientWidth < 640;
    var marks = [];

    if (!mobile) {
      var root = V.h('div', { 'class': 'fm', role: 'table', 'aria-label': L(spec.title) }, null, el);
      root.style.setProperty('--fm-n', cols.length);
      var colEls = cols.map(function () { return []; });
      function hl(j) {
        colEls.forEach(function (list, k) { list.forEach(function (e) { e.classList.toggle('on', k === j); }); });
        root.classList.toggle('hl', j != null);
      }
      var head = V.h('div', { 'class': 'fm-r fm-head', role: 'row' }, null, root);
      V.h('div', { 'class': 'fm-corner', role: 'columnheader' }, spec.corner ? L(spec.corner) : '', head);
      cols.forEach(function (c, j) {
        var yes = 0, part = 0;
        rows.forEach(function (r, i) { var v = cellAt(i, j).v; if (v === 'yes') yes++; else if (v === 'partial') part++; });
        var tally = fmtT(T.of, { n: yes, t: rows.length });
        var hc = V.h('div', { 'class': 'fm-ch', role: 'columnheader', 'aria-label': L(c.label) + ' · ' + vLabel('yes') + ' ' + tally }, null, head);
        V.h('div', { 'class': 'fm-cl' }, L(c.label), hc);
        var bar = V.h('div', { 'class': 'fm-bar', 'aria-hidden': 'true' }, null, hc);
        var b1 = V.h('i', { 'class': 'y' }, null, bar); b1.style.width = (yes / rows.length * 100) + '%';
        var b2 = V.h('i', { 'class': 'p' }, null, bar); b2.style.width = (part / rows.length * 100) + '%';
        V.h('div', { 'class': 'fm-tally', 'aria-hidden': 'true' }, tally, hc);
        if (ctx.first && !V.reduced) [b1, b2].forEach(function (b) { var w = b.style.width; b.style.width = '0'; requestAnimationFrame(function () { requestAnimationFrame(function () { b.style.width = w; }); }); });
        hc.addEventListener('pointerenter', function () { hl(j); });
        hc.addEventListener('pointerleave', function () { hl(null); });
        colEls[j].push(hc);
      });
      rows.forEach(function (r, i) {
        var row = V.h('div', { 'class': 'fm-r', role: 'row' }, null, root);
        var lab = V.h('div', { 'class': 'fm-lab', role: 'rowheader' }, null, row);
        V.h('span', { 'class': 'fm-name' }, L(r.label), lab);
        if (r.sub) V.h('span', { 'class': 'fm-sub' }, L(r.sub), lab);
        cols.forEach(function (c, j) {
          var cv = cellAt(i, j);
          var cd = V.h('div', { 'class': 'fm-c', role: 'cell' }, null, row);
          var g = V.h('span', { 'class': 'fm-g', 'aria-label': L(r.label) + ' · ' + L(c.label) + ' · ' + vLabel(cv.v) + (cv.t ? ' — ' + L(cv.t) : '') }, null, cd);
          if (srcCls(cv.src) === 'secondary') g.setAttribute('data-cls', 'secondary');
          g.innerHTML = glyph(cv.v);
          V.tip(g, function () {
            var txt = cv.t ? L(cv.t) : '';
            if (txt.length > 300) txt = txt.slice(0, 298) + '…';
            return { title: L(r.label) + ' · ' + L(c.label), rows: [{ value: vLabel(cv.v), label: '' }, { value: '', label: txt, src: cv.src }] };
          });
          g.addEventListener('pointerenter', function () { hl(j); });
          g.addEventListener('focus', function () { hl(j); });
          g.addEventListener('pointerleave', function () { hl(null); });
          g.addEventListener('blur', function () { hl(null); });
          colEls[j].push(cd);
          marks.push(g);
        });
      });
    } else {
      var list = V.h('div', { 'class': 'fm-cards', role: 'list' }, null, el);
      rows.forEach(function (r, i) {
        var cd = V.h('article', { 'class': 'fm-card', role: 'listitem' }, null, list);
        var hd = V.h('div', { 'class': 'fm-card-h' }, null, cd);
        V.h('span', { 'class': 'fm-name' }, L(r.label), hd);
        if (r.sub) V.h('span', { 'class': 'fm-sub' }, L(r.sub), hd);
        cols.forEach(function (c, j) {
          var cv = cellAt(i, j);
          var it = V.h('div', { 'class': 'fm-ci' + (cv.v === 'ns' || cv.v === 'blocked' ? ' ns' : '') }, null, cd);
          if (srcCls(cv.src) === 'secondary') it.setAttribute('data-cls', 'secondary');
          var gl = V.h('span', { 'class': 'fm-ci-g' }, null, it); gl.innerHTML = glyph(cv.v);
          var body = V.h('div', { 'class': 'fm-ci-b' }, null, it);
          var top = V.h('div', { 'class': 'fm-ci-top' }, null, body);
          V.h('span', { 'class': 'fm-ci-l' }, L(c.label), top);
          V.h('span', { 'class': 'fm-ci-v' }, vLabel(cv.v), top);
          if (cv.t) { var p = V.h('p', { 'class': 'fm-ci-t' }, null, body); p.innerHTML = esc(L(cv.t)) + ' ' + V.cites(cv.src || []); }
        });
        marks.push(cd);
      });
    }
    // legend: every glyph the grid uses, in a fixed order
    var lgEl = V.h('div', { 'class': 'vz-legend fm-legend' }, null, el);
    ORDER.forEach(function (v) {
      if (!present[v]) return;
      var sp = V.h('span', { 'class': 'vz-lg' }, null, lgEl);
      sp.innerHTML = glyph(v) + '<span>' + esc(vLabel(v)) + '</span>';
    });
    if (ctx.first) {
      if (mobile) V.stagger(marks.slice(0, 8), { step: 40 });
      else V.stagger(marks, { from: 'scale(.4)', origin: 'center', step: 6 });
    }
    return {
      table: {
        cols: [spec.corner || T.item].concat(cols.map(function (c) { return c.label; })),
        rows: rows.map(function (r, i) {
          return [L(r.label) + (r.sub ? ' (' + L(r.sub) + ')' : '')].concat(cols.map(function (c, j) {
            var cv = cellAt(i, j);
            return { html: '<strong>' + esc(vLabel(cv.v)) + '</strong>' + (cv.t ? ' — ' + esc(L(cv.t)) : '') + ' ' + V.cites(cv.src || []) };
          }));
        })
      }
    };
  });

  // =====================================================================
  // 2. waffle-inline
  // =====================================================================
  ATLAS_VIZ.register('waffle-inline', function (el, spec, V, ctx) {
    var L = V.L, groups = spec.groups || [];
    if (!groups.length) return;
    var wrap = V.h('div', { 'class': 'wf wfi', role: 'list' }, null, el);
    var marks = [], ci = 0;
    groups.forEach(function (g) {
      var unk = g.v === 'ns';
      var color = unk ? null : V.color(g.color != null ? g.color : ci++);
      var items = g.items || [];
      var gr = V.h('div', { 'class': 'wf-g' + (items.length ? '' : ' empty'), role: 'listitem' }, null, wrap);
      var hd = V.h('div', { 'class': 'wf-hd' }, null, gr);
      V.h('span', { 'class': 'wf-n' }, String(items.length), hd);
      V.h('span', { 'class': 'wf-lab' }, L(g.label), hd);
      if (!items.length) { V.h('div', { 'class': 'wfi-zero', 'aria-hidden': 'true' }, null, gr); return; }
      var grid = V.h('div', { 'class': 'wf-sq', style: 'grid-template-columns:repeat(' + Math.min(items.length, 6) + ',var(--wf-s))' }, null, gr);
      items.forEach(function (it) {
        var sq = V.h('span', { 'class': 'wf-c' + (unk ? ' unk' : ''), 'aria-label': it.name + ' · ' + L(g.label) + (it.t ? ' — ' + L(it.t) : '') }, null, grid);
        if (color) sq.style.background = color;
        if (srcCls(it.src) === 'secondary') sq.setAttribute('data-cls', 'secondary');
        V.tip(sq, function () {
          var rws = [{ value: L(g.label), label: '', color: color }];
          rws.push({ value: '', label: it.t ? L(it.t) : '', src: it.src || [] });
          return { title: it.name, rows: rws };
        });
        marks.push(sq);
      });
    });
    if (ctx.first) V.stagger(marks, { from: 'scale(.5)', origin: 'center', step: 14 });
    return {
      table: {
        cols: [T.group, T.count, T.which],
        rows: groups.map(function (g) {
          var its = g.items || [];
          return [L(g.label), String(its.length), { html: its.length ? its.map(function (it) { return esc(it.name) + V.cites(it.src || []); }).join(', ') : '—' }];
        })
      }
    };
  });
})();
