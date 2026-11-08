/* Figures for record.html and portfolios.html: how an outside lab record enters the application.
   Components (all registered on ATLAS_VIZ):
     evidence-ladder        rungs ranked by who can verify; fact chips solid, inference chips dashed
     record-to-form         three training years above the application's containers, with budgets
     school-research-routes 30 schools × (artefact accepted, route, mentor letter, Other Recommender)
     filled-fields          a fictional record written into each container, with live character / word counts
   Data lives in the page spec (site/data/p-record.js, p-portfolios.js); the routes figure also reads
   window.ATLAS.viz.schools when the page loads it. Styles: site/assets/css/record.css.
   No visible text lives here beyond unit words, glyph names and table headers. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  function s(zh, en) { return { zh: zh, en: en }; }
  var T = {
    rung: s('階', 'Rung'), proof: s('證據', 'Proof'), verifier: s('誰能作證', 'Who vouches'), indep: s('獨立紀錄', 'Independent record'),
    containers: s('可進入的欄位', 'Containers'), src: s('來源', 'Sources'), fact: s('事實', 'Fact'), inf: s('推論', 'Inference'),
    yes: s('有，公開或由第三方保存', 'Yes, public or held by a third party'), held: s('有，但由 programme 自己保存', 'Yes, but held by the programme'), none: s('沒有', 'None'),
    item: s('紀錄項目', 'Record item'), when: s('時間', 'When'), to: s('進入', 'Enters'), budget: s('額度', 'Budget'),
    chars: s('字元', 'chars'), words: s('字', 'words'), entries: s('項', 'entries'), letter: s('封', 'letter'), file: s('份', 'file'),
    school: s('學校', 'School'), artefact: s('收研究論文或摘要', 'Research paper or abstract'), route: s('紀錄能走的管道', 'Route for a research record'),
    mentor: s('接受 mentor 的信', 'Mentor letter accepted'), other: s('接受 Other Recommender', 'Other Recommender accepted'), note: s('說明', 'Note'),
    routes: {
      slideroom: s('SlideRoom 研究補充', 'SlideRoom research supplement'),
      portal: s('學校 portal 上傳', 'School portal upload'),
      commonapp: s('只走 Common App 欄位', 'Common App fields only'),
      limited: s('有限管道（影片或簡述）', 'Narrow channel (video or brief description)'),
      refused: s('不收', 'Refused'),
      ns: s('未載明', 'Not stated'),
      blocked: s('網頁拒絕自動讀取', 'Page refused automated reading')
    },
    tri: { yes: s('接受', 'Accepted'), limited: s('有限（一封或有條件）', 'Limited (one letter or conditional)'), no: s('不收', 'Not accepted'), ns: s('未載明', 'Not stated'), blocked: s('網頁拒絕自動讀取', 'Page refused automated reading') },
    mat: { yes: s('接受', 'Accepted'), limited: s('限特定主修或管道', 'Only some majors or channels'), no: s('不收或沒有管道', 'Refused or no channel'), ns: s('未載明', 'Not stated'), blocked: s('網頁拒絕自動讀取', 'Site refused automated reading') },
    count: s('{n} 所', '{n} schools'),
    field: s('欄位', 'Field'), limit: s('上限', 'Limit'), used: s('已用', 'Used'), over: s('超過上限', 'Over the limit'), text: s('內容', 'Text'),
    fictional: s('虛構範例', 'Fictional example'), gloss: s('中文說明', 'Gloss')
  };
  function fmtT(x, o) { var t = window.ATLAS_UTIL.L(x); for (var k in o) t = t.split('{' + k + '}').join(o[k]); return t; }
  function esc(x) { return window.ATLAS_UTIL.esc(x == null ? '' : x); }
  function unitWord(V, u) { return V.L(u === 'words' ? T.words : u === 'entries' ? T.entries : u === 'letter' ? T.letter : u === 'file' ? T.file : T.chars); }

  var hatchDone = false;
  function ensureHatch(V) {
    if (hatchDone || document.getElementById('vzr-hatch')) { hatchDone = true; return; }
    hatchDone = true;
    var sv = V.svg('svg', { width: 0, height: 0, 'aria-hidden': 'true', style: 'position:absolute;width:0;height:0' });
    sv.innerHTML = '<defs><pattern id="vzr-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="4" fill="#eef0f3"/><line x1="0" y1="0" x2="0" y2="4" stroke="#bfc4cb" stroke-width="1.6"/></pattern></defs>';
    document.body.appendChild(sv);
  }
  // glyphs shared by the routes matrix: yes / limited / no / ns (dashed) / blocked (hatched)
  function glyph(v) {
    var p;
    if (v === 'yes') p = '<circle cx="10" cy="10" r="6" fill="var(--s4)"/>';
    else if (v === 'limited') p = '<circle cx="10" cy="10" r="5.4" fill="var(--viz-surface)" stroke="var(--s4)" stroke-width="1.5"/><path d="M10 4.6 A5.4 5.4 0 0 0 10 15.4 Z" fill="var(--s4)"/>';
    else if (v === 'no') p = '<circle cx="10" cy="10" r="4" fill="none" stroke="var(--viz-muted)" stroke-width="1.3"/><line x1="7" y1="13" x2="13" y2="7" stroke="var(--viz-muted)" stroke-width="1.3" stroke-linecap="round"/>';
    else if (v === 'blocked') p = '<rect x="4" y="4" width="12" height="12" rx="3" fill="url(#vzr-hatch)" stroke="#c9cdd3" stroke-width="1"/>';
    else p = '<circle cx="10" cy="10" r="5.4" fill="none" stroke="var(--viz-muted)" stroke-width="1.3" stroke-dasharray="2.1 2.1"/>';
    return '<svg class="rr-gl" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">' + p + '</svg>';
  }
  // route glyphs: one shape per route so the column reads at a glance
  function routeGlyph(r) {
    var p;
    if (r === 'slideroom') p = '<rect x="4" y="4" width="12" height="12" rx="2" fill="var(--s4)"/>';
    else if (r === 'portal') p = '<rect x="4" y="4" width="12" height="12" rx="2" fill="var(--s3)"/>';
    else if (r === 'commonapp') p = '<rect x="4" y="4" width="12" height="12" rx="2" fill="var(--s1)" stroke="var(--s3)" stroke-width="1.2"/>';
    else if (r === 'limited') p = '<rect x="4" y="4" width="12" height="12" rx="2" fill="var(--viz-surface)" stroke="var(--s3)" stroke-width="1.5"/><path d="M4 16 L16 4 L16 16 Z" fill="var(--s3)"/>';
    else if (r === 'refused') p = '<rect x="4.5" y="4.5" width="11" height="11" rx="2" fill="none" stroke="var(--viz-muted)" stroke-width="1.3"/><line x1="7" y1="13" x2="13" y2="7" stroke="var(--viz-muted)" stroke-width="1.3" stroke-linecap="round"/>';
    else if (r === 'blocked') p = '<rect x="4" y="4" width="12" height="12" rx="3" fill="url(#vzr-hatch)" stroke="#c9cdd3" stroke-width="1"/>';
    else p = '<rect x="4.5" y="4.5" width="11" height="11" rx="2" fill="none" stroke="var(--viz-muted)" stroke-width="1.3" stroke-dasharray="2.1 2.1"/>';
    return '<svg class="rr-gl" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">' + p + '</svg>';
  }

  // =====================================================================
  // 1. evidence-ladder
  //   spec.rungs: [{ label, sub?, verifier, independent:'yes'|'held'|'no', tag:'f'|'i', src,
  //                  containers:[{ label, src?, inferred?:true }] }]  weakest first
  // =====================================================================
  ATLAS_VIZ.register('evidence-ladder', function (el, spec, V, ctx) {
    var L = V.L, rungs = spec.rungs || [], n = rungs.length;
    if (!n) return;
    var root = V.h('div', { 'class': 'el', role: 'list' }, null, el);
    var marks = [], rows = [];
    // strongest at the top: iterate from the last rung
    rungs.slice().reverse().forEach(function (r, k) {
      var rank = n - k; // 1 = weakest
      var row = V.h('div', { 'class': 'el-row', role: 'listitem', 'aria-label': L(r.label) }, null, root);
      var step = V.h('div', { 'class': 'el-step' }, null, row);
      var bar = V.h('div', { 'class': 'el-bar' }, null, step);
      bar.style.width = (28 + (rank - 1) / Math.max(n - 1, 1) * 72) + '%';
      bar.style.background = 'var(--s' + Math.min(4, 1 + Math.floor((rank - 1) / Math.max(n - 1, 1) * 3.999)) + ')';
      V.h('span', { 'class': 'el-num' }, String(rank), bar);
      marks.push(bar);
      var body = V.h('div', { 'class': 'el-body' }, null, row);
      var head = V.h('div', { 'class': 'el-head' }, null, body);
      V.h('span', { 'class': 'el-tag ' + (r.tag === 'i' ? 'inf' : 'fact') }, L(r.tag === 'i' ? T.inf : T.fact), head);
      V.h('span', { 'class': 'el-lab' }, L(r.label), head);
      if (r.sub) V.h('div', { 'class': 'el-sub' }, L(r.sub), body);
      var meta = V.h('div', { 'class': 'el-meta' }, null, body);
      var v = V.h('span', { 'class': 'el-ver' }, null, meta);
      V.h('b', null, L(T.verifier) + ': ', v); V.h('span', null, L(r.verifier), v);
      var ind = V.h('span', { 'class': 'el-ind ind-' + (r.independent || 'no') }, null, meta);
      V.h('i', null, null, ind); V.h('span', null, L(T.indep) + ': ' + L(r.independent === 'yes' ? T.yes : r.independent === 'held' ? T.held : T.none), ind);
      var chips = V.h('div', { 'class': 'el-chips' }, null, body);
      (r.containers || []).forEach(function (c) {
        var ch = V.h('span', { 'class': 'el-chip' + (c.inferred ? ' inf' : '') }, L(c.label), chips);
        V.tip(ch, function () { return { title: L(c.label), rows: [{ value: '', label: L(c.inferred ? T.inf : T.fact) + (c.note ? ' · ' + L(c.note) : ''), src: c.src || r.src }] }; });
      });
      V.tip(step, function () {
        return { title: String(rank) + ' · ' + L(r.label), rows: [{ value: '', label: L(T.verifier) + ': ' + L(r.verifier), src: r.src }] };
      });
      rows.push([String(rank), L(r.label), L(r.verifier), L(r.independent === 'yes' ? T.yes : r.independent === 'held' ? T.held : T.none),
        (r.containers || []).map(function (c) { return L(c.label) + (c.inferred ? ' (' + L(T.inf) + ')' : ''); }).join('; '),
        L(r.tag === 'i' ? T.inf : T.fact), { html: V.cites(r.src || []) }]);
    });
    if (spec.legend) V.legend(spec.legend, el);
    if (ctx.first && !V.reduced) V.stagger(marks, { from: 'scaleX(0)', origin: 'left center', step: 60 });
    return { table: { cols: [T.rung, T.proof, T.verifier, T.indep, T.containers, s('標記', 'Tag'), T.src], rows: rows } };
  });

  // =====================================================================
  // 2. record-to-form
  //   spec.years: [{label, sub?}]  (columns, in order; the last is the application window)
  //   spec.items: [{id, label, from, to, src}]  from/to in column units (0..years.length), e.g. 0 → 3
  //   spec.containers: [{id, label, budget:{n, unit}|null, sub?, src}]
  //   spec.links: [{from:itemId, to:containerId, at, label?, src, dashed?}]  at = column position
  // =====================================================================
  ATLAS_VIZ.register('record-to-form', function (el, spec, V, ctx) {
    var L = V.L, years = spec.years || [], items = spec.items || [], conts = spec.containers || [], links = spec.links || [];
    var nY = years.length, nC = conts.length;
    if (!nY || !items.length || !nC) return;
    var W = Math.max(el.clientWidth, 280), narrow = W < 640;
    // label column: measured from the longest item label so nothing is clipped on narrow screens
    var meas = V.svg('svg', { 'class': 'rf-svg', width: 10, height: 10, style: 'position:absolute;visibility:hidden' }, el), labMax = 0;
    items.forEach(function (it) { var t = V.svg('text', { 'class': 'ink' }, meas); t.textContent = L(it.label); labMax = Math.max(labMax, t.getBBox().width); });
    meas.remove();
    var LABW = Math.min(narrow ? 170 : 200, Math.max(96, Math.ceil(labMax) + 16));
    var minW = LABW + nY * (narrow ? 120 : 150);
    var scroll = W < minW;
    var TW = scroll ? minW : W;
    var wrap = V.h('div', { 'class': 'rf-wrap' + (scroll ? ' vz-scroll' : '') }, null, el);
    var box = V.h('div', { 'class': 'rf' + (narrow ? ' narrow' : '') }, null, wrap);
    box.style.width = TW + 'px';
    var svg = V.svg('svg', { 'class': 'rf-svg', 'aria-hidden': 'true' }, box);
    var HEAD = 30, ROW = narrow ? 26 : 28, GAP = 6;
    var tlTop = HEAD, tlH = items.length * (ROW + GAP);
    var midGap = narrow ? 70 : 84;
    var cTop = tlTop + tlH + midGap;
    var x0 = LABW, colW = (TW - LABW) / nY;
    function xOf(pos) { return x0 + pos * colW; }
    // year columns
    years.forEach(function (y, i) {
      var g = V.svg('g', null, svg);
      V.svg('rect', { x: xOf(i), y: 0, width: colW, height: tlTop + tlH + 8, fill: i % 2 ? 'rgba(16,24,40,.025)' : 'transparent' }, g);
      V.svg('line', { x1: xOf(i), x2: xOf(i), y1: 0, y2: tlTop + tlH + 8, stroke: 'var(--viz-grid)' }, g);
      var t = V.svg('text', { x: xOf(i) + colW / 2, y: 13, 'text-anchor': 'middle', 'class': 'strong' }, g); t.textContent = L(y.label);
      if (y.sub) { var t2 = V.svg('text', { x: xOf(i) + colW / 2, y: 26, 'text-anchor': 'middle' }, g); t2.textContent = L(y.sub); }
    });
    V.svg('line', { x1: xOf(nY), x2: xOf(nY), y1: 0, y2: tlTop + tlH + 8, stroke: 'var(--viz-grid)' }, svg);
    // items as bars
    var bars = [], P = {};
    items.forEach(function (it, i) {
      var y = tlTop + i * (ROW + GAP) + GAP / 2;
      var g = V.svg('g', { 'class': 'rf-item', tabindex: '0' }, svg);
      var lab = V.svg('text', { x: LABW - 10, y: y + ROW / 2 + 4, 'text-anchor': 'end', 'class': 'ink' }, g); lab.textContent = L(it.label);
      var xa = xOf(it.from), xb = xOf(it.to);
      var r = V.svg('rect', { x: xa, y: y, width: Math.max(6, xb - xa), height: ROW, rx: 6, fill: V.color(i), opacity: .85 }, g);
      bars.push(r);
      P[it.id] = { y: y, h: ROW, color: V.color(i), it: it };
      V.tip(g, function () { return { title: L(it.label), rows: [{ value: '', label: it.sub ? L(it.sub) : '', color: V.color(i), src: it.src }] }; });
    });
    // container boxes (HTML, measured)
    var cw = (TW - 12) / nC, CH = 0, cEls = {};
    conts.forEach(function (c, j) {
      var d = V.h('div', { 'class': 'rf-cont', tabindex: '0', 'aria-label': L(c.label) }, null, box);
      d.style.left = (6 + j * cw + 3) + 'px'; d.style.width = (cw - 6) + 'px'; d.style.top = cTop + 'px';
      V.h('div', { 'class': 'rf-cl' }, L(c.label), d);
      if (c.budget) V.h('div', { 'class': 'rf-cb' }, (c.budget.n != null ? V.fmt.int(c.budget.n) + ' ' : '') + (c.budget.text ? L(c.budget.text) : unitWord(V, c.budget.unit)), d);
      else V.h('div', { 'class': 'rf-cb ns' }, L(V.ui.notStated), d);
      if (c.sub && !narrow) V.h('div', { 'class': 'rf-cs' }, L(c.sub), d);
      cEls[c.id] = d;
      V.tip(d, function () { return { title: L(c.label), rows: [{ value: c.budget && c.budget.n != null ? V.fmt.int(c.budget.n) + ' ' + (c.budget.text ? L(c.budget.text) : unitWord(V, c.budget.unit)) : L(V.ui.notStated), label: c.sub ? L(c.sub) : '', src: c.src }] }; });
    });
    conts.forEach(function (c) { CH = Math.max(CH, cEls[c.id].offsetHeight); });
    var TH = cTop + CH + 8;
    box.style.height = TH + 'px';
    svg.setAttribute('width', TW); svg.setAttribute('height', TH); svg.setAttribute('viewBox', '0 0 ' + TW + ' ' + TH);
    // links: from the item bar at time `at` down to the container's top edge
    var inCount = {}, lineEls = [], rows = [];
    links.forEach(function (k) { inCount[k.to] = (inCount[k.to] || 0) + 1; });
    var seen = {};
    links.forEach(function (k) {
      var a = P[k.from], ci = -1; conts.forEach(function (c, j) { if (c.id === k.to) ci = j; });
      if (!a || ci < 0) return;
      seen[k.to] = (seen[k.to] || 0) + 1;
      var X0 = xOf(k.at), Y0 = a.y + a.h;
      var m = inCount[k.to], j = seen[k.to];
      var X1 = 6 + ci * cw + 3 + (cw - 6) * (j / (m + 1)), Y1 = cTop;
      var d = 'M' + X0 + ',' + Y0 + ' C' + X0 + ',' + (Y0 + (Y1 - Y0) * .55) + ' ' + X1 + ',' + (Y1 - (Y1 - Y0) * .45) + ' ' + X1 + ',' + (Y1 - 4);
      var g = V.svg('g', { 'class': 'rf-link', tabindex: '0' }, svg);
      g.style.color = a.color;
      var p = V.svg('path', { d: d, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.6, 'stroke-dasharray': k.dashed ? '4 4' : null, opacity: .75 }, g);
      V.svg('path', { d: 'M' + (X1 - 3.5) + ',' + (Y1 - 8) + ' L' + X1 + ',' + (Y1 - 2) + ' L' + (X1 + 3.5) + ',' + (Y1 - 8) + ' Z', fill: 'currentColor' }, g);
      V.svg('path', { d: d, fill: 'none', stroke: 'transparent', 'stroke-width': 14 }, g);
      V.svg('circle', { cx: X0, cy: Y0, r: 3, fill: 'currentColor' }, g);
      p._dashed = !!k.dashed; lineEls.push(p);
      var cont = conts[ci];
      V.tip(g, function () {
        return { title: L(a.it.label) + ' → ' + L(cont.label), rows: [{ value: '', label: (k.label ? L(k.label) + ' · ' : '') + L(years[Math.min(nY - 1, Math.floor(k.at))].label), color: a.color, src: k.src }] };
      });
      rows.push([L(a.it.label), L(years[Math.min(nY - 1, Math.floor(k.at))].label), L(cont.label), cont.budget && cont.budget.n != null ? V.fmt.int(cont.budget.n) + ' ' + (cont.budget.text ? L(cont.budget.text) : unitWord(V, cont.budget.unit)) : L(V.ui.notStated), k.label ? L(k.label) : '—', { html: V.cites(k.src || []) }]);
    });
    if (spec.legend) V.legend(spec.legend, el);
    if (ctx.first && !V.reduced) {
      V.stagger(bars, { from: 'scaleX(0)', origin: 'left center', step: 40 });
      lineEls.forEach(function (p, i) {
        if (p._dashed) { p.style.opacity = '0'; requestAnimationFrame(function () { p.style.transition = 'opacity 500ms ' + V.ease + ' ' + (300 + i * 20) + 'ms'; p.style.opacity = ''; }); return; }
        var len = p.getTotalLength(); p.style.strokeDasharray = len + ' ' + len; p.style.strokeDashoffset = String(len);
        requestAnimationFrame(function () { p.style.transition = 'stroke-dashoffset 600ms ' + V.ease + ' ' + (300 + i * 20) + 'ms'; p.style.strokeDashoffset = '0';
          p.addEventListener('transitionend', function () { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; p.style.transition = ''; }, { once: true }); });
      });
    }
    return { table: { cols: [T.item, T.when, T.to, T.budget, T.note, T.src], rows: rows } };
  });

  // =====================================================================
  // 3. school-research-routes
  //   spec.rows: [{school, route, mentor, note?, src}]; artefact and Other Recommender from the schools dataset
  // =====================================================================
  ATLAS_VIZ.register('school-research-routes', function (el, spec, V, ctx) {
    var L = V.L; ensureHatch(V);
    var d = ((window.ATLAS || {}).viz || {})[spec.dataset || 'schools'];
    var rows = spec.rows || [];
    if (!rows.length) return;
    var root = V.h('div', { 'class': 'rr' }, null, el);
    // header with counts
    var counts = { art: {}, route: {}, mentor: {}, or: {} };
    rows.forEach(function (r) {
      var rec = d && d.data[r.school];
      var art = rec ? (rec.materials.research || 'ns') : 'ns';
      var or = rec ? (rec.otherRecommender === true ? 'yes' : rec.otherRecommender === false ? 'no' : 'ns') : 'ns';
      r._art = art; r._or = or; r._orSrc = rec ? (rec.src || {}).otherRecommender || [] : []; r._artSrc = rec ? (rec.src || {})['materials.research'] || [] : [];
      counts.art[art] = (counts.art[art] || 0) + 1; counts.route[r.route] = (counts.route[r.route] || 0) + 1;
      counts.mentor[r.mentor] = (counts.mentor[r.mentor] || 0) + 1; counts.or[or] = (counts.or[or] || 0) + 1;
    });
    var head = V.h('div', { 'class': 'rr-row rr-head' }, null, root);
    V.h('div', { 'class': 'rr-lab' }, '', head);
    [[T.artefact, counts.art.yes || 0], [T.route, (counts.route.slideroom || 0) + (counts.route.portal || 0)], [T.mentor, counts.mentor.yes || 0], [T.other, counts.or.yes || 0]].forEach(function (c) {
      var h = V.h('div', { 'class': 'rr-ch' }, null, head);
      V.h('span', { 'class': 'rr-num' }, String(c[1]), h);
      V.h('span', { 'class': 'rr-cl' }, L(c[0]), h);
    });
    var body = V.h('div', { 'class': 'rr-body' }, null, root);
    var marks = [], tableRows = [];
    rows.forEach(function (r) {
      var row = V.h('div', { 'class': 'rr-row' }, null, body);
      V.h('div', { 'class': 'rr-lab', title: r.school }, r.school, row);
      function cell(html, text, srcs, cls) {
        var c = V.h('div', { 'class': 'rr-c' + (cls ? ' ' + cls : '') }, null, row);
        c.innerHTML = html;
        marks.push(c);
        V.tip(c, function () { return { title: r.school, rows: [{ value: '', label: text, src: srcs }] }; });
      }
      cell(glyph(r._art), L(T.artefact) + ': ' + L(T.mat[r._art] || T.mat.ns), r._artSrc);
      cell(routeGlyph(r.route) + '<span class="rr-rt">' + esc(L(T.routes[r.route] || T.routes.ns)) + '</span>', L(T.route) + ': ' + L(T.routes[r.route] || T.routes.ns) + (r.note ? ' · ' + L(r.note) : ''), r.src, 'rr-route');
      cell(glyph(r.mentor), L(T.mentor) + ': ' + L(T.tri[r.mentor] || T.tri.ns) + (r.mentorNote ? ' · ' + L(r.mentorNote) : ''), r.mentorSrc || r.src);
      cell(glyph(r._or), L(T.other) + ': ' + L(T.tri[r._or] || T.tri.ns), r._orSrc);
      tableRows.push([r.school, L(T.mat[r._art] || T.mat.ns), L(T.routes[r.route] || T.routes.ns), L(T.tri[r.mentor] || T.tri.ns), L(T.tri[r._or] || T.tri.ns), r.note ? L(r.note) : '—', { html: V.cites([].concat(r.src || [], r.mentorSrc || [], r._artSrc, r._orSrc).filter(function (x, i, a) { return a.indexOf(x) === i; }).slice(0, 6)) }]);
    });
    if (spec.legend) V.legend(spec.legend, el);
    if (ctx.first && !V.reduced) V.stagger(marks, { from: 'translateY(4px)', step: 6 });
    return { table: { cols: [T.school, T.artefact, T.route, T.mentor, T.other, T.note, T.src], rows: tableRows } };
  });

  // =====================================================================
  // 4. filled-fields (worked example; text, not a chart)
  //   spec.blocks: [{ label, limit:{n, unit:'chars'|'words'}|null, text:{en, zh?}, lines?:[{en, zh?, n?}], note?, src }]
  //   The form text is English (the forms are English); `zh` is a gloss shown in zh mode.
  // =====================================================================
  function countWords(t) { var m = String(t || '').trim().match(/\S+/g); return m ? m.length : 0; }
  ATLAS_VIZ.register('filled-fields', function (el, spec, V, ctx) {
    var L = V.L, zh = V.lang() === 'zh';
    var root = V.h('div', { 'class': 'ff' }, null, el);
    if (spec.fictional) V.h('div', { 'class': 'ff-fict' }, L(spec.fictional), root);
    var rows = [], meters = [];
    (spec.blocks || []).forEach(function (b) {
      var blk = V.h('div', { 'class': 'ff-blk' }, null, root);
      var head = V.h('div', { 'class': 'ff-head' }, null, blk);
      V.h('span', { 'class': 'ff-lab' }, L(b.label), head);
      var used = 0, limitTxt = '';
      var textEn = b.text ? (b.text.en || '') : (b.lines || []).map(function (l) { return l.en; }).join('\n');
      if (b.limit) {
        // an outline carries per-line estimates (n); the counter sums those, since the bullets are a plan, not the text
        var est = (b.lines || []).reduce(function (a, l) { return l.n != null ? a + l.n : a; }, 0);
        used = est ? est : (b.limit.unit === 'words' ? countWords(textEn) : textEn.length);
        limitTxt = V.fmt.int(used) + ' / ' + V.fmt.int(b.limit.n) + ' ' + unitWord(V, b.limit.unit);
        var cnt = V.h('span', { 'class': 'ff-cnt' + (used > b.limit.n ? ' over' : '') }, limitTxt, head);
        if (used > b.limit.n) cnt.title = L(T.over);
        var meter = V.h('div', { 'class': 'ff-meter' }, null, blk);
        var fill = V.h('i', null, null, meter); fill.style.width = Math.min(100, used / b.limit.n * 100) + '%';
        meters.push(fill);
      }
      if (b.text) {
        var pre = V.h('div', { 'class': 'ff-text', lang: 'en' }, b.text.en, blk);
        if (zh && b.text.zh) V.h('div', { 'class': 'ff-gloss' }, b.text.zh, blk);
      }
      if (b.lines) {
        var ul = V.h('ul', { 'class': 'ff-lines' }, null, blk);
        b.lines.forEach(function (l) {
          var li = V.h('li', null, null, ul);
          V.h('span', { lang: 'en' }, l.en, li);
          if (l.n != null) V.h('span', { 'class': 'ff-ln' }, '≈ ' + l.n + ' ' + unitWord(V, b.limit ? b.limit.unit : 'words'), li);
          if (zh && l.zh) V.h('div', { 'class': 'ff-gloss' }, l.zh, li);
        });
      }
      if (b.note) { var nt = V.h('div', { 'class': 'ff-note' }, null, blk); nt.innerHTML = V.md(L(b.note)) + V.cites(b.src || []); }
      else if (b.src) { var c = V.h('div', { 'class': 'ff-note' }, null, blk); c.innerHTML = V.cites(b.src); }
      rows.push([L(b.label), b.limit ? V.fmt.int(b.limit.n) + ' ' + unitWord(V, b.limit.unit) : '—', b.limit ? V.fmt.int(used) + ' ' + unitWord(V, b.limit.unit) : '—', textEn, { html: V.cites(b.src || []) }]);
    });
    if (ctx.first && !V.reduced) V.stagger(meters, { from: 'scaleX(0)', origin: 'left center', step: 80 });
    return { table: { cols: [T.field, T.limit, T.used, T.text, T.src], rows: rows } };
  });
})();
