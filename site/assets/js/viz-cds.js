/* Common Data Set figures: C7 factor heatmap, admit-rate dumbbell, H6 aid small
   multiples, and a generic share bar chart. Data: window.ATLAS.viz.cds.
   Labels are local {zh,en} pairs; values, notes and sources come from data. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;

  var T = {
    VI: { zh: '非常重要', en: 'Very important' },
    I: { zh: '重要', en: 'Important' },
    C: { zh: '會考慮', en: 'Considered' },
    NC: { zh: '不考慮', en: 'Not considered' },
    notRetrieved: { zh: '未取得', en: 'Not retrieved' },
    noFigure: { zh: '沒有數字', en: 'No figure' },
    listOrder: { zh: '名單順序', en: 'List order' },
    byFactor: { zh: '依', en: 'By' },
    sortHint: { zh: '點一下依此排序（VI 在前）', en: 'Click to sort by this factor (VI first)' },
    all: { zh: '全部因素', en: 'All factors' },
    academic: { zh: '學業', en: 'Academic' },
    nonacademic: { zh: '非學業', en: 'Non-academic' },
    schools: { zh: '校', en: 'schools' },
    cSchool: { zh: '學校', en: 'School' }, cYear: { zh: 'CDS 年度', en: 'CDS year' }, cSrc: { zh: '來源', en: 'Sources' },
    year: { zh: 'CDS 年度', en: 'CDS year' },
    overall: { zh: '整體錄取率', en: 'Overall admit rate' },
    ed: { zh: 'ED 錄取率', en: 'ED admit rate' },
    modeEd: { zh: '整體與 ED', en: 'Overall and ED' },
    modeAll: { zh: '所有學校的整體錄取率', en: 'Overall, all schools' },
    applicants: { zh: '申請', en: 'applicants' }, admits: { zh: '錄取', en: 'admits' },
    edApplicants: { zh: 'ED 申請', en: 'ED applicants' }, edAdmits: { zh: 'ED 錄取', en: 'ED admits' },
    aided: { zh: '受助非居民人數', en: 'Nonresidents receiving institutional aid' },
    share: { zh: '平均補助占總花費', en: 'Average award as share of cost of attendance' },
    aidedShort: { zh: '受助非居民', en: 'nonresidents aided' },
    avgAward: { zh: '平均補助', en: 'average award' },
    coa: { zh: '總花費', en: 'cost of attendance' },
    shareShort: { zh: '占總花費', en: 'of cost' },
    notAvail: { zh: 'H6 勾選不提供', en: 'H6: aid not available' },
    noH6: { zh: '沒有 H6 數字', en: 'No H6 figure' },
    nonresidentShare: { zh: '非居民新生比例', en: 'Nonresident share of first-years' },
    satSubmitPct: { zh: '送 SAT 的入學新生比例', en: 'Enrolled first-years submitting SAT' },
    nonresidentFirstYear: { zh: '非居民新生', en: 'nonresident first-years' },
    enrolled: { zh: '入學新生', en: 'enrolled first-years' },
    sat: { zh: 'SAT 中間 50%', en: 'SAT middle 50%' }
  };
  // short column labels for the heatmap; full names come from data
  var SHORT = {
    rigor: { zh: '課程難度', en: 'Rigor' }, rank: { zh: '班排', en: 'Class rank' }, gpa: { zh: 'GPA', en: 'GPA' },
    test: { zh: '考試', en: 'Tests' }, essay: { zh: '文章', en: 'Essay' }, rec: { zh: '推薦信', en: 'Recs' },
    interview: { zh: '面試', en: 'Interview' }, ec: { zh: '課外', en: 'Activities' }, talent: { zh: '才能', en: 'Talent' },
    character: { zh: '品格', en: 'Character' }, firstgen: { zh: '第一代', en: 'First-gen' }, alumni: { zh: '校友', en: 'Alumni' },
    geo: { zh: '地區', en: 'Geography' }, state: { zh: '州籍', en: 'State res.' }, religion: { zh: '宗教', en: 'Religion' },
    volunteer: { zh: '志工', en: 'Volunteer' }, work: { zh: '工作', en: 'Work' }, interest: { zh: '意願', en: 'Interest' }
  };
  var RCOL = { VI: 'var(--s4)', I: 'var(--s3)', C: 'var(--s1)', NC: 'var(--s0)' };
  var RANK = { VI: 0, I: 1, C: 2, NC: 3 };

  var mctx = null;
  function measure(text, size, weight) {
    if (!mctx) mctx = document.createElement('canvas').getContext('2d');
    var fam = getComputedStyle(document.body).fontFamily || 'sans-serif';
    mctx.font = (weight || 500) + ' ' + (size || 12) + 'px ' + fam;
    return mctx.measureText(String(text)).width;
  }
  // horizontal bar: square at the baseline, 4px rounded data end
  function barPath(x0, y, w, h, r) {
    if (!(w > 0)) return 'M' + x0 + ' ' + y + 'Z';
    r = Math.min(r, w, h / 2);
    return 'M' + x0 + ' ' + y + 'H' + (x0 + w - r) + 'A' + r + ' ' + r + ' 0 0 1 ' + (x0 + w) + ' ' + (y + r) +
      'V' + (y + h - r) + 'A' + r + ' ' + r + ' 0 0 1 ' + (x0 + w - r) + ' ' + (y + h) + 'H' + x0 + 'Z';
  }
  function txt(V, parent, x, y, s, cls, anchor) {
    var t = V.svg('text', { x: x, y: y, 'class': cls || null, 'text-anchor': anchor || null }, parent);
    t.textContent = s; return t;
  }
  // gridlines + top tick labels for a 0–1 (or 0–max) axis
  function axis(V, s, x, ticks, top, bottom, f) {
    var g = V.svg('g', { 'class': 'vz-grid' }, s);
    ticks.forEach(function (v, i) {
      var xx = Math.round(x(v)) + 0.5;
      V.svg('line', { x1: xx, x2: xx, y1: top - 4, y2: bottom }, g);
      txt(V, s, xx, top - 10, f(v), null, i === 0 ? 'start' : (i === ticks.length - 1 && Math.abs(x(v) - x.range[1]) < 2 ? 'end' : 'middle'));
    });
  }
  function labW(V, names, el, cap) {
    var w = Math.max.apply(null, names.map(function (n) { return measure(n, 12.5, 500); }).concat([40])) + 14;
    return Math.min(w, cap || Math.max(84, el.clientWidth * 0.32));
  }
  function seg(V, parent, opts, cur, on) {
    var g = V.h('div', { 'class': 'vz-seg', role: 'group' }, null, parent);
    var btns = opts.map(function (o) {
      var b = V.h('button', { type: 'button', 'aria-pressed': String(cur === o[0]) }, V.L(o[1]), g);
      b.addEventListener('click', function () { on(o[0], b); });
      return b;
    });
    g.set = function (k) { btns.forEach(function (b, i) { b.setAttribute('aria-pressed', String(opts[i][0] === k)); }); };
    g.btns = btns;
    return g;
  }
  function D(V) { return V.data().cds; }
  function pct(V, v) { return V.fmt.pct(v, 1); }

  // =====================================================================
  // 1. C7 heatmap: schools × factors
  // =====================================================================
  ATLAS_VIZ.register('cds-heatmap', function (el, spec, V, ctx) {
    var C = D(V); if (!C) return;
    var L = V.L, zh = V.lang() === 'zh';
    var st = el._state || (el._state = { mode: 'list', factor: null, group: 'all' });
    var cols = C.factors.filter(function (f) { return st.group === 'all' || f.group === st.group; });
    if (st.factor && !cols.some(function (f) { return f.id === st.factor; })) { st.factor = null; st.mode = 'list'; }

    // controls
    var ctr = V.h('div', { 'class': 'vz-controls' }, null, el);
    function factorName(id) { var f = C.factors.filter(function (x) { return x.id === id; })[0]; return f ? L(SHORT[f.id] || f.label) : ''; }
    var sortSeg = seg(V, ctr, [['list', T.listOrder], ['factor', T.byFactor]], st.mode, function (k) {
      if (k === 'factor' && !st.factor) st.factor = cols[0].id;
      st.mode = k; apply();
    });
    function sortLabel() { sortSeg.btns[1].textContent = L(T.byFactor) + (zh ? '「' : ' ') + factorName(st.factor || cols[0].id) + (zh ? '」' : ''); }
    sortLabel();
    seg(V, ctr, [['all', T.all], ['academic', T.academic], ['nonacademic', T.nonacademic]], st.group, function (k) {
      if (k === st.group) return; st.group = k; ctx.redraw();
    });
    V.legend(['VI', 'I', 'C', 'NC'].map(function (k) {
      return { label: T[k], color: RCOL[k], border: k === 'NC' ? 'rgba(16,24,40,.14)' : null };
    }).concat([{ label: T.notRetrieved, shape: 'hatch' }]), ctr);

    // geometry
    var names = C.schools;
    var lw = Math.round(labW(V, names, el, el.clientWidth < 520 ? 104 : 140));
    var n = cols.length, gap = 2, ch = 24;
    var cw = Math.max(24, Math.min(44, Math.floor((el.clientWidth - lw - (zh ? 8 : 40)) / n) - gap));
    var pitchY = ch + gap;
    var longest = Math.max.apply(null, cols.map(function (f) { return zh ? L(SHORT[f.id]).length * 13 : measure(L(SHORT[f.id]), 11.5, 500); }));
    var hh = Math.round(zh ? longest + 18 : longest * Math.sin(Math.PI / 3) + 20);
    var innerW = lw + n * (cw + gap) + (zh ? 0 : Math.round(longest * 0.5));

    var root = V.h('div', { 'class': 'hm' + (zh ? ' zh' : '') }, null, el);
    var sc = V.h('div', { 'class': 'hm-scroll' }, null, root);
    var inner = V.h('div', { 'class': 'hm-in', style: 'width:' + innerW + 'px' }, null, sc);
    var head = V.h('div', { 'class': 'hm-head', style: 'height:' + hh + 'px' }, null, inner);
    V.h('div', { 'class': 'hm-corner', style: 'width:' + lw + 'px' }, null, head);

    var colCells = {}; cols.forEach(function (f) { colCells[f.id] = []; });
    var heads = {};
    function counts(fid) {
      var c = { VI: 0, I: 0, C: 0, NC: 0 }, tot = 0;
      names.forEach(function (s) { var r = C.c7[s]; if (r && r.v && c[r.v[fid]] != null) { c[r.v[fid]]++; tot++; } });
      c.tot = tot; return c;
    }
    cols.forEach(function (f) {
      var b = V.h('button', { 'class': 'hm-ch', type: 'button', style: 'width:' + cw + 'px', 'aria-label': L(f.label), 'aria-pressed': String(st.mode === 'factor' && st.factor === f.id) }, null, head);
      V.h('span', null, L(SHORT[f.id] || f.label), b);
      heads[f.id] = b;
      b.addEventListener('click', function () { st.factor = f.id; st.mode = 'factor'; apply(); });
      b.addEventListener('pointerenter', function () { hl(null, f.id); });
      b.addEventListener('pointerleave', function () { hl(null, null); });
      V.tip(b, function () {
        var c = counts(f.id);
        return {
          title: L(f.label),
          rows: ['VI', 'I', 'C', 'NC'].map(function (k) { return { value: c[k] + ' / ' + c.tot, label: L(T[k]), color: RCOL[k] }; })
            .concat([{ value: '', label: L(T.sortHint) }])
        };
      });
    });

    var body = V.h('div', { 'class': 'hm-rows', style: 'height:' + (names.length * pitchY) + 'px' }, null, inner);
    var rows = [], enter = [];
    names.forEach(function (s, idx) {
      var rec = C.c7[s] || {};
      var row = V.h('div', { 'class': 'hm-row', style: 'height:' + ch + 'px' }, null, body);
      var lab = V.h('div', { 'class': 'hm-lab', style: 'width:' + lw + 'px' }, s, row);
      var cells = V.h('div', { 'class': 'hm-cells' }, null, row);
      var R = { s: s, i: idx, rec: rec, row: row, lab: lab, marks: [] };
      if (!rec.v) {
        var na = V.h('div', { 'class': 'hm-na', style: 'width:' + (n * (cw + gap) - gap) + 'px', tabindex: '-1' }, L(T.notRetrieved), cells);
        V.tip(na, function () { return { title: s, rows: [{ value: L(T.notRetrieved), label: rec.note ? L(rec.note) : '', src: rec.src }] }; });
        R.marks.push(na);
      } else {
        cols.forEach(function (f) {
          var v = rec.v[f.id];
          var c = V.h('div', { 'class': 'hm-c' + (v === 'NC' ? ' nc' : ''), style: 'width:' + cw + 'px;background:' + (RCOL[v] || 'transparent'), tabindex: '-1', 'aria-label': s + ', ' + L(f.label) + ': ' + (T[v] ? L(T[v]) : '—') }, null, cells);
          V.tip(c, function () {
            return {
              title: s + ' · ' + L(f.label),
              rows: [{ value: T[v] ? L(T[v]) : '—', label: v ? '(' + v + ')' : '', color: RCOL[v] },
                { value: rec.year || '—', label: L(T.year), src: rec.src }]
            };
          });
          colCells[f.id].push(c);
          R.marks.push(c);
        });
      }
      lab.addEventListener('pointerenter', function () { hl(R, null); });
      lab.addEventListener('pointerleave', function () { hl(null, null); });
      rows.push(R); enter.push(cells);
    });
    if (rows[0] && rows[0].marks[0]) rows[0].marks[0].setAttribute('tabindex', '0');

    // highlight a row or a column
    var lit = [];
    function hl(R, fid) {
      lit.forEach(function (e) { e.classList.remove('on'); }); lit = [];
      if (!R && !fid) { root.classList.remove('dim'); return; }
      if (R) lit = R.marks.concat([R.lab]);
      if (fid) lit = colCells[fid].concat([heads[fid]]);
      lit.forEach(function (e) { e.classList.add('on'); });
      root.classList.add('dim');
    }

    var order = [];
    function apply() {
      sortSeg.set(st.mode); sortLabel();
      cols.forEach(function (f) { heads[f.id].setAttribute('aria-pressed', String(st.mode === 'factor' && st.factor === f.id)); });
      order = rows.slice();
      if (st.mode === 'factor') {
        var fid = st.factor;
        order.sort(function (a, b) {
          var ra = a.rec.v ? (RANK[a.rec.v[fid]] != null ? RANK[a.rec.v[fid]] : 4) : 5;
          var rb = b.rec.v ? (RANK[b.rec.v[fid]] != null ? RANK[b.rec.v[fid]] : 4) : 5;
          return ra - rb || a.i - b.i;
        });
      }
      order.forEach(function (R, i) { R.row.style.transform = 'translateY(' + (i * pitchY) + 'px)'; R.vi = i; });
      if (tbl) { var t2 = table(); tbl.cols = t2.cols; tbl.rows = t2.rows; }
    }
    var tbl = null;
    apply();

    // arrow-key navigation across the grid (one tab stop)
    body.addEventListener('keydown', function (e) {
      var k = e.key; if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].indexOf(k) < 0) return;
      var R = null, ci = 0;
      order.some(function (r) { var j = r.marks.indexOf(document.activeElement); if (j >= 0) { R = r; ci = j; return true; } return false; });
      if (!R) return;
      e.preventDefault();
      var ri = R.vi;
      if (k === 'ArrowUp') ri = Math.max(0, ri - 1);
      if (k === 'ArrowDown') ri = Math.min(order.length - 1, ri + 1);
      if (k === 'ArrowLeft') ci = Math.max(0, ci - 1);
      if (k === 'ArrowRight') ci++;
      if (k === 'Home') ci = 0;
      if (k === 'End') ci = 99;
      var T2 = order[ri], m = T2.marks[Math.min(ci, T2.marks.length - 1)];
      R.marks.forEach(function (x) { x.setAttribute('tabindex', '-1'); });
      rows.forEach(function (r) { r.marks.forEach(function (x) { x.setAttribute('tabindex', '-1'); }); });
      m.setAttribute('tabindex', '0'); m.focus();
    });

    if (ctx.first) V.stagger(enter, { from: 'translateX(-8px)', origin: 'left center', step: 14 });

    function table() {
      return {
        cols: [T.cSchool, T.cYear].concat(cols.map(function (f) { return SHORT[f.id] || f.label; })).concat([T.cSrc]),
        rows: order.map(function (R) {
          var r = R.rec;
          if (!r.v) return [R.s, '—', L(T.notRetrieved)].concat(cols.slice(1).map(function () { return ''; })).concat([{ html: V.cites(r.src || []) }]);
          return [R.s, r.year || '—'].concat(cols.map(function (f) { return r.v[f.id] || '—'; })).concat([{ html: V.cites(r.src || []) }]);
        })
      };
    }
    tbl = table();
    return { table: tbl };
  });

  // =====================================================================
  // shared: one-value horizontal bars on a 0–100% axis
  // items: [{label, v, tip:fn, empty:{text, dashed}}]
  // =====================================================================
  function shareBars(el, V, ctx, items, title) {
    var W = Math.max(el.clientWidth, 280);
    var lw = Math.round(labW(V, items.map(function (d) { return d.label; }), el, W < 520 ? 104 : null));
    var pitch = 26, top = 26, bh = 12;
    var H = top + items.length * pitch + 4;
    var x0 = lw + 6, x1 = W - 46;
    var x = V.scale(0, 1, x0, x1);
    var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': title }, el);
    axis(V, s, x, x1 - x0 < 300 ? [0, 0.5, 1] : [0, 0.25, 0.5, 0.75, 1], top, H - 4, function (v) { return Math.round(v * 100) + '%'; });
    var bars = [], fades = [];
    items.forEach(function (d, i) {
      var y = top + i * pitch;
      var g = V.svg('g', { 'class': 'vz-row', 'aria-label': d.label + ': ' + (d.v == null ? (d.empty ? d.empty.text : '—') : pct(V, d.v)) }, s);
      V.svg('rect', { x: 0, y: y + 1, width: W, height: pitch - 2, rx: 6, 'class': 'vz-rowbg' }, g);
      txt(V, g, lw - 8, y + pitch / 2 + 4, d.label, 'ink', 'end');
      if (d.v != null) {
        var w = x(d.v) - x0;
        bars.push(V.svg('path', { d: barPath(x0, y + (pitch - bh) / 2, w, bh, 4), fill: 'var(--c1)' }, g));
        fades.push(txt(V, g, x0 + w + 6, y + pitch / 2 + 4, pct(V, d.v), 'strong halo'));
      } else {
        V.svg('circle', { cx: x0 + 5, cy: y + pitch / 2, r: 4.5, fill: 'none', stroke: 'var(--viz-muted)', 'stroke-width': 1.5, 'stroke-dasharray': d.empty && d.empty.dashed ? '2 2' : null }, g);
        fades.push(txt(V, g, x0 + 16, y + pitch / 2 + 4, d.empty ? d.empty.text : '—', 'halo'));
      }
      V.tip(g, d.tip);
    });
    if (ctx.first) {
      V.stagger(bars, { from: 'scaleX(0)', origin: 'left center', step: 12 });
      V.stagger(fades, { from: 'translateX(-4px)', origin: 'left center', step: 12 });
    }
    return s;
  }

  // =====================================================================
  // 2. Admit rates: overall vs ED dumbbell; or overall for all schools
  // =====================================================================
  ATLAS_VIZ.register('admit-dumbbell', function (el, spec, V, ctx) {
    var C = D(V); if (!C) return;
    var L = V.L, fmt = V.fmt;
    var st = el._state || (el._state = { mode: spec.mode || 'ed' });
    var ctr = V.h('div', { 'class': 'vz-controls' }, null, el);
    seg(V, ctr, [['ed', T.modeEd], ['all', T.modeAll]], st.mode, function (k) { if (k !== st.mode) { st.mode = k; ctx.redraw(); } });
    var N = C.numbers;
    function tipFor(s) {
      return function () {
        var n = N[s], rows = [{ value: pct(V, n.admitRate), label: L(T.overall) + ' · ' + fmt.int(n.admits) + ' ' + L(T.admits) + ' / ' + fmt.int(n.applicants) + ' ' + L(T.applicants), color: 'var(--c1)' }];
        if (n.edRate != null) rows.push({ value: pct(V, n.edRate), label: L(T.ed) + ' · ' + fmt.int(n.edAdmits) + ' ' + L(T.edAdmits) + ' / ' + fmt.int(n.edApplicants) + ' ' + L(T.edApplicants), color: 'var(--c2)' });
        rows.push({ value: n.year || '—', label: L(T.year), src: n.src });
        return { title: s, rows: rows };
      };
    }
    var all = C.schools.filter(function (s) { return N[s] && N[s].admitRate != null; })
      .sort(function (a, b) { return N[a].admitRate - N[b].admitRate; });
    var tcols = [T.cSchool, T.overall, T.applicants, T.admits, T.ed, T.edApplicants, T.edAdmits, T.cYear, T.cSrc];
    function trow(s) { var n = N[s]; return [s, pct(V, n.admitRate), fmt.int(n.applicants), fmt.int(n.admits), n.edRate == null ? '—' : pct(V, n.edRate), fmt.int(n.edApplicants), fmt.int(n.edAdmits), n.year || '—', { html: V.cites(n.src || []) }]; }

    if (st.mode === 'all') {
      shareBars(el, V, ctx, all.map(function (s) { return { label: s, v: N[s].admitRate, tip: tipFor(s) }; }), L(spec.title));
      return { table: { cols: tcols, rows: all.map(trow) } };
    }

    var ed = all.filter(function (s) { return N[s].edRate != null; });
    V.legend([{ label: T.overall, shape: 'ring', border: 'var(--c1)' }, { label: T.ed, shape: 'dot', color: 'var(--c2)' }], ctr);
    var W = Math.max(el.clientWidth, 280);
    var lw = Math.round(labW(V, ed, el, W < 520 ? 104 : null));
    var pitch = 34, top = 26;
    var H = top + ed.length * pitch + 4;
    var x0 = lw + 38, x1 = W - 14;
    // 0–100% where there is room; on a narrow screen the same zero-based scale is cut at a labelled 25% step
    var maxV = Math.max.apply(null, ed.map(function (sc) { return Math.max(N[sc].edRate, N[sc].admitRate); }));
    var dmax = x1 - x0 >= 420 ? 1 : Math.min(1, Math.ceil((maxV + 0.03) / 0.25) * 0.25);
    var x = V.scale(0, dmax, x0, x1);
    var ticks = dmax === 1 ? (x1 - x0 < 300 ? [0, 0.5, 1] : [0, 0.25, 0.5, 0.75, 1]) : (dmax <= 0.25 ? [0, 0.1, 0.2] : V.scale(0, dmax, 0, 1).ticks(3));
    var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': L(spec.title) }, el);
    axis(V, s, x, ticks, top, H - 4, function (v) { return Math.round(v * 100) + '%'; });
    var lines = [], dots = [], labs = [];
    ed.forEach(function (sc, i) {
      var n = N[sc], y = top + i * pitch + pitch / 2;
      var xa = x(n.admitRate), xe = x(n.edRate);
      var g = V.svg('g', { 'class': 'vz-row', 'aria-label': sc + ': ' + L(T.overall) + ' ' + pct(V, n.admitRate) + ', ' + L(T.ed) + ' ' + pct(V, n.edRate) }, s);
      V.svg('rect', { x: 0, y: y - pitch / 2 + 2, width: W, height: pitch - 4, rx: 6, 'class': 'vz-rowbg' }, g);
      txt(V, g, lw - 8, y + 4, sc, 'ink', 'end');
      lines.push(V.svg('line', { x1: xa, x2: xe, y1: y, y2: y, stroke: 'var(--viz-base)', 'stroke-width': 2, 'stroke-linecap': 'round' }, g));
      dots.push(V.svg('circle', { cx: xa, cy: y, r: 5, fill: 'var(--viz-surface)', stroke: 'var(--c1)', 'stroke-width': 2.25 }, g));
      dots.push(V.svg('circle', { cx: xe, cy: y, r: 6, fill: 'var(--c2)', stroke: 'var(--viz-surface)', 'stroke-width': 2 }, g));
      labs.push(txt(V, g, xa - 10, y + 4, pct(V, n.admitRate), 'halo', 'end'));
      labs.push(txt(V, g, xe + 11, y + 4, pct(V, n.edRate), 'strong halo'));
      V.tip(g, tipFor(sc));
    });
    if (ctx.first) {
      V.stagger(lines, { from: 'scaleX(0)', origin: 'left center', step: 30 });
      V.stagger(dots, { from: 'scale(.3)', origin: 'center', step: 15 });
      V.stagger(labs, { from: 'translateY(3px)', origin: 'center', step: 15 });
    }
    return { table: { cols: tcols, rows: ed.map(trow) } };
  });

  // =====================================================================
  // 3. Aid: aided count and average award as share of cost (small multiples)
  // =====================================================================
  ATLAS_VIZ.register('aid-bars', function (el, spec, V, ctx) {
    var C = D(V); if (!C) return;
    var L = V.L, fmt = V.fmt, A = C.aid;
    function kind(s) { var a = A[s] || {}; return a.aidedNonresidents != null ? 0 : (a.available === false ? 1 : 2); }
    var list = C.schools.slice().sort(function (a, b) {
      var ka = kind(a), kb = kind(b);
      return ka - kb || (ka === 0 ? A[b].aidedNonresidents - A[a].aidedNonresidents : 0) || C.schools.indexOf(a) - C.schools.indexOf(b);
    });
    function emptyText(s) { return kind(s) === 1 ? L(T.notAvail) : L(T.noH6); }
    function tipFor(s) {
      return function () {
        var a = A[s] || {}, rows = [];
        if (kind(s) === 0) {
          rows.push({ value: fmt.int(a.aidedNonresidents), label: L(T.aidedShort) + (a.year ? ' · ' + a.year : ''), color: 'var(--c1)' });
          rows.push({ value: fmt.usd(a.avgAward), label: L(T.avgAward) + (a.year ? ' · ' + a.year : '') });
        } else rows.push({ value: emptyText(s), label: '' });
        if (a.coa != null) rows.push({ value: fmt.usd(a.coa), label: L(T.coa) + (a.coaYear ? ' · ' + a.coaYear : '') });
        if (a.avgShareOfCoa != null) rows.push({ value: pct(V, a.avgShareOfCoa), label: L(T.shareShort), color: 'var(--c1)' });
        rows.push({ value: '', label: a.note ? L(a.note) : '', src: a.src });
        return { title: s, rows: rows };
      };
    }
    var wrap = V.h('div', { 'class': 'vz-aid' }, null, el);
    var pA = V.h('div', null, null, wrap), pB = V.h('div', null, null, wrap);
    V.h('div', { 'class': 'vz-panel-h' }, L(T.aided), pA);
    V.h('div', { 'class': 'vz-panel-h' }, L(T.share), pB);
    var pitch = 26, top = 26, bh = 12;
    var H = top + list.length * pitch + 4;
    var bars = [], fades = [];

    function panel(p, isShare) {
      var W = Math.max(p.clientWidth, 260);
      var lw = Math.round(labW(V, list, p, Math.max(84, W * 0.36)));
      var x0 = lw + 6, x1 = W - (isShare ? 44 : 38);
      var max = Math.max.apply(null, list.filter(function (s) { return kind(s) === 0; }).map(function (s) { return A[s].aidedNonresidents; }));
      var sc0 = V.scale(0, max, 0, 1), tk = sc0.ticks(3);
      var dmax = isShare ? 1 : tk[tk.length - 1] < max ? tk[tk.length - 1] + (tk[1] - tk[0]) : tk[tk.length - 1];
      var x = V.scale(0, dmax, x0, x1);
      var ticks = isShare ? [0, 0.5, 1] : V.scale(0, dmax, 0, 1).ticks(3);
      var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': L(isShare ? T.share : T.aided) }, p);
      axis(V, s, x, ticks, top, H - 4, function (v) { return isShare ? Math.round(v * 100) + '%' : fmt.int(v); });
      list.forEach(function (sc, i) {
        var a = A[sc] || {}, y = top + i * pitch, cy = y + pitch / 2, k = kind(sc);
        var g = V.svg('g', { 'class': 'vz-row', 'aria-label': sc }, s);
        V.svg('rect', { x: 0, y: y + 1, width: W, height: pitch - 2, rx: 6, 'class': 'vz-rowbg' }, g);
        txt(V, g, lw - 8, cy + 4, sc, 'ink', 'end');
        if (k === 0 && !isShare) {
          var w = x(a.aidedNonresidents) - x0;
          bars.push(V.svg('path', { d: barPath(x0, cy - bh / 2, w, bh, 4), fill: 'var(--c1)' }, g));
          fades.push(txt(V, g, x0 + w + 6, cy + 4, fmt.int(a.aidedNonresidents), 'strong halo'));
        } else if (k === 0 && isShare && a.avgShareOfCoa != null) {
          V.svg('line', { x1: x0, x2: x1, y1: cy, y2: cy, stroke: 'var(--viz-grid)', 'stroke-width': 2, 'stroke-linecap': 'round' }, g);
          var xd = x(a.avgShareOfCoa);
          fades.push(V.svg('circle', { cx: xd, cy: cy, r: 5.5, fill: 'var(--c1)', stroke: 'var(--viz-surface)', 'stroke-width': 2 }, g));
          fades.push(txt(V, g, xd + 10, cy + 4, pct(V, a.avgShareOfCoa), 'strong halo'));
        } else {
          V.svg('circle', { cx: x0 + 5, cy: cy, r: 4.5, fill: 'none', stroke: 'var(--viz-muted)', 'stroke-width': 1.5, 'stroke-dasharray': k === 2 ? '2 2' : null }, g);
          fades.push(txt(V, g, x0 + 16, cy + 4, k === 0 ? '—' : emptyText(sc), 'halo'));
        }
        V.tip(g, tipFor(sc));
      });
    }
    panel(pA, false); panel(pB, true);
    if (ctx.first) {
      V.stagger(bars, { from: 'scaleX(0)', origin: 'left center', step: 12 });
      V.stagger(fades, { from: 'scale(.6)', origin: 'center', step: 8 });
    }
    return {
      table: {
        cols: [T.cSchool, T.aidedShort, T.avgAward, T.coa, T.shareShort, T.cYear, T.cSrc],
        rows: list.map(function (s) {
          var a = A[s] || {}, k = kind(s);
          return [s, k === 0 ? fmt.int(a.aidedNonresidents) : emptyText(s), fmt.usd(a.avgAward), a.coa != null ? fmt.usd(a.coa) + (a.coaYear ? ' (' + a.coaYear + ')' : '') : '—',
            a.avgShareOfCoa != null ? pct(V, a.avgShareOfCoa) : '—', a.year || '—', { html: V.cites(a.src || []) }];
        })
      }
    };
  });

  // =====================================================================
  // 4. Generic share bars: spec.metric = 'nonresidentShare' | 'satSubmitPct'
  // =====================================================================
  ATLAS_VIZ.register('share-bars', function (el, spec, V, ctx) {
    var C = D(V); if (!C) return;
    var L = V.L, fmt = V.fmt, N = C.numbers, m = spec.metric || 'nonresidentShare';
    var has = C.schools.filter(function (s) { return N[s] && N[s][m] != null; }).sort(function (a, b) { return N[b][m] - N[a][m]; });
    var none = C.schools.filter(function (s) { return !N[s] || N[s][m] == null; });
    function tipFor(s) {
      return function () {
        var n = N[s] || {}, rows = [];
        rows.push({ value: n[m] == null ? L(T.noFigure) : pct(V, n[m]), label: L(T[m]), color: n[m] == null ? null : 'var(--c1)' });
        if (m === 'nonresidentShare' && n.enrolled != null) rows.push({ value: fmt.int(n.nonresidentFirstYear) + ' / ' + fmt.int(n.enrolled), label: L(T.nonresidentFirstYear) + ' / ' + L(T.enrolled) });
        if (m === 'satSubmitPct' && n.sat25 != null) rows.push({ value: n.sat25 + '–' + n.sat75, label: L(T.sat) });
        rows.push({ value: n.year || '—', label: L(T.year) });
        if (n.note) rows.push({ value: '', label: L(n.note) });
        rows[rows.length - 1].src = n.src;
        return { title: s, rows: rows };
      };
    }
    var items = has.map(function (s) { return { label: s, v: N[s][m], tip: tipFor(s) }; })
      .concat(none.map(function (s) { return { label: s, v: null, tip: tipFor(s), empty: { text: L(T.noFigure), dashed: true } }; }));
    shareBars(el, V, ctx, items, L(spec.title));
    return {
      table: {
        cols: [T.cSchool, T[m], T.cYear, T.cSrc],
        rows: has.concat(none).map(function (s) { var n = N[s] || {}; return [s, n[m] == null ? L(T.noFigure) : pct(V, n[m]), n.year || '—', { html: V.cites(n.src || []) }]; })
      }
    };
  });
})();
