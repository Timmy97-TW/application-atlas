/* Field-level figures for containers.html (styles: assets/css/fields.css).
   'form-map'            the whole student-filled form as one strip: one block per section, sized by its
                         field count, each field a small cell printing its limit.
     spec: { blocks:[{ id (section id to scroll to), label, sub?, src?,
                       fields:[{ label, kind:'chars'|'words'|'count'|'choice'|'other'|'ns', limit?:{zh,en},
                                 req?:'req'|'opt'|'cond'|'college'|'ns', q?: official wording, src }] }] }
   'field-card'          a mini replica of a form entry: rows drawn as the input types they are, text inputs
                         sized by their limit, with a live counter as the reader types (nothing is stored).
     spec: { cards:[{ label, sub?, count?:{ n, label, src }, src?,
                      rows:[{ label, kind:'text'|'num'|'words'|'radio'|'check'|'select'|'date'|'slots'|'ns',
                              limit?, options?:[{zh,en}|string], n?, range?, q?, req?, note?, src }] }] }
   'budget-stack'        total writing room per section: segments = fields, width = limit × entries;
                         characters and words are different units and get separate groups and axes.
     spec: { groups:[{ unit:'chars'|'words', label, bars:[{ label, src?, ns?:true,
                      segs:[{ label, value, times?, outside?, cond?, note?, src }] }] }] }
   'recommender-matrix'  roles × what each form asks; a big number where the cell is a count.
     spec: { roles:[{label, sub?, src?}], cols:[{label}], cells:[[{ n?, t, kind?:'none'|'ns', src }]] }
   Only unit words, state labels and table headers live here; every page string comes from data. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  function s(zh, en) { return { zh: zh, en: en }; }
  var T = {
    chars: s('字元', 'chars'), words: s('字', 'words'),
    charsAxis: s('單位：字元', 'unit: characters'), wordsAxis: s('單位：英文字數', 'unit: words'),
    kinds: {
      chars: s('以字元計', 'Counted in characters'), words: s('以英文字數計', 'Counted in words'),
      count: s('數量上限', 'A count limit'), choice: s('選項題', 'A choice'),
      other: s('其他類型', 'Other type'), ns: s('上限未載明', 'Limit not stated')
    },
    req: {
      req: s('必填', 'Required'), opt: s('選填', 'Optional'), cond: s('條件題', 'Conditional'),
      college: s('各校自訂', 'Set by each college'), ns: s('是否必填未載明', 'Required: not stated')
    },
    reqMark: s('必填（表單上是紅色星號）', 'Required (a red asterisk on the form)'),
    fields: s('{n} 個欄位', '{n} fields'),
    goto: s('前往本區', 'Go to this section'),
    section: s('區', 'Section'), field: s('欄位', 'Field'), type: s('類型', 'Type'), limit: s('上限', 'Limit'),
    required: s('必填', 'Required'), src: s('來源', 'Sources'), wording: s('官方題目文字', 'Official wording'),
    note: s('說明', 'Note'), card: s('項目', 'Entry'), options: s('{n} 個選項', '{n} options'),
    entries: s('最多 {n} 筆', 'Up to {n} entries'), slots: s('{n} 格', '{n} slots'),
    typeHere: s('試打看看', 'Type here'),
    used: s('已用', 'used'), left: s('剩餘', 'left'), over: s('超過', 'over'),
    ns: s('未載明', 'Not stated'), month: s('月／年', 'Month / year'),
    kindName: {
      text: s('短文字', 'Short text'), num: s('數字', 'Number'), words: s('長文字', 'Long text'),
      radio: s('單選', 'Single choice'), check: s('多選', 'Checkboxes'), select: s('下拉選單', 'Dropdown'),
      date: s('日期', 'Date'), slots: s('筆數', 'Count'), ns: s('未載明', 'Not stated')
    },
    perItem: s('每格上限', 'Per box'), times: s('格數', 'Boxes'), total: s('合計', 'Total'),
    outside: s('依本頁推論，校外做的事能寫進去的欄位', 'Where, by this page\'s inference, work done outside school can be described'),
    cond: s('條件題：答「是」才出現', 'Conditional: appears only after a "yes"'),
    plain: s('其他欄位', 'Other fields'),
    nsBar: s('上限未載明，畫不出長度', 'Limit not stated, so no length is drawn'),
    role: s('角色', 'Role'), none: s('無', 'None'), item: s('項目', 'Item')
  };
  var KCOL = { chars: 'var(--c1)', words: 'var(--c2)', count: 'var(--c3)', choice: 'var(--c4)', other: 'var(--viz-muted)', ns: 'transparent' };
  function fill(x, n) { return window.ATLAS_UTIL.L(x).split('{n}').join(n); }
  function reduced() { return window.ATLAS_VIZ.V.reduced; }
  function go(id) {
    var t = document.getElementById(id); if (!t) return;
    t.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    try { history.replaceState(null, '', '#' + id); } catch (e) { /* file:// */ }
  }
  function unitWord(unit) { return window.ATLAS_UTIL.L(unit === 'words' ? T.words : T.chars); }
  function countText(text, unit) {
    var t = text || '';
    if (unit === 'words') { t = t.trim(); return t ? t.split(/\s+/).length : 0; }
    return t.length;
  }

  // =====================================================================
  // 1. form-map
  // =====================================================================
  ATLAS_VIZ.register('form-map', function (el, spec, V, ctx) {
    var L = V.L, blocks = spec.blocks || [], rows = [], marks = [], kindsSeen = {}, anyReq = false;
    var strip = V.h('div', { 'class': 'fd-map' }, null, el);
    blocks.forEach(function (b) {
      var fields = b.fields || [], n = fields.length;
      var blk = V.h('div', { 'class': 'fd-blk' }, null, strip);
      blk.style.setProperty('--fd-grow', String(n)); blk.style.setProperty('--fd-basis', Math.round(n * 30 + 130) + 'px');
      var hd = V.h('button', { 'class': 'fd-blk-h', type: 'button', title: L(T.goto) }, null, blk);
      V.h('span', { 'class': 'fd-blk-t' }, L(b.label), hd);
      V.h('span', { 'class': 'fd-blk-n' }, fill(T.fields, n), hd);
      hd.addEventListener('click', function () { go(b.id); });
      if (b.sub) V.h('p', { 'class': 'fd-blk-s' }, L(b.sub), blk);
      var list = V.h('div', { 'class': 'fd-cells' }, null, blk);
      fields.forEach(function (f) {
        var k = f.kind || 'other'; kindsSeen[k] = true;
        var isReq = f.req === 'req'; if (isReq) anyReq = true;
        var c = V.h('div', { 'class': 'fd-cell k-' + k + (isReq ? ' req' : '') }, null, list);
        V.h('span', { 'class': 'fd-cell-l' }, L(f.label), c);
        V.h('span', { 'class': 'fd-cell-v' }, f.limit != null ? L(f.limit) : L(T.ns), c);
        V.tip(c, function () {
          var r = [{ value: f.limit != null ? L(f.limit) : L(T.ns), label: L(T.kinds[k] || T.kinds.other), color: k === 'ns' ? 'var(--viz-base)' : KCOL[k], src: f.src }];
          if (f.req) r.push({ value: L(T.req[f.req] || T.req.ns) });
          if (f.q) r.push({ value: '', label: L(T.wording) + ': "' + L(f.q) + '"' });
          return { title: L(b.label) + ' · ' + L(f.label), rows: r };
        });
        marks.push(c);
        rows.push([L(b.label), L(f.label), L(T.kinds[k] || T.kinds.other), f.limit != null ? L(f.limit) : L(T.ns), L(f.req ? (T.req[f.req] || T.req.ns) : T.req.ns), { html: V.cites(f.src || []) }]);
      });
    });
    var lg = [];
    ['chars', 'words', 'count', 'choice', 'other'].forEach(function (k) { if (kindsSeen[k]) lg.push({ label: T.kinds[k], color: KCOL[k] }); });
    if (kindsSeen.ns) lg.push({ label: T.kinds.ns, shape: 'dash' });
    if (anyReq) lg.push({ label: T.reqMark, shape: 'star' });
    V.legend(lg, el);
    if (ctx.first && !reduced()) V.stagger(marks, { step: 8, from: 'translateY(4px)' });
    return { table: { cols: [T.section, T.field, T.type, T.limit, T.required, T.src], rows: rows } };
  });

  // =====================================================================
  // 2. field-card
  // =====================================================================
  function drawOptions(V, body, r, L) {
    var wrap = V.h('div', { 'class': 'fd-opts' }, null, body);
    var opts = r.options || [];
    if (!opts.length && r.n) { V.h('span', { 'class': 'fd-opt more' }, fill(T.options, r.n), wrap); return; }
    opts.forEach(function (o) {
      var op = V.h('span', { 'class': 'fd-opt' }, null, wrap);
      V.h('i', { 'class': 'fd-gl ' + (r.kind === 'check' ? 'sq' : 'ci'), 'aria-hidden': 'true' }, null, op);
      V.h('span', null, L(o), op);
    });
    if (r.n && r.n > opts.length) V.h('span', { 'class': 'fd-opt more' }, fill(T.options, r.n), wrap);
  }
  function drawSlots(V, body, r, L) {
    var wrap = V.h('div', { 'class': 'fd-slots' }, null, body);
    var n = Math.max(0, Math.min(40, r.n || 0));
    for (var i = 0; i < n; i++) V.h('i', { 'aria-hidden': 'true' }, null, wrap);
    V.h('span', { 'class': 'fd-slots-n' }, fill(T.slots, V.fmt.int(r.n || 0)), wrap);
    return wrap;
  }
  function drawInput(V, body, r, L, maxLim) {
    var unit = r.kind === 'words' ? 'words' : 'chars', lim = r.limit || 0;
    var wrap = V.h('div', { 'class': 'fd-in k-' + r.kind }, null, body);
    if (r.kind !== 'words' && lim && maxLim) wrap.style.width = Math.max(34, Math.round(lim / maxLim * 100)) + '%';
    var inp = r.kind === 'words' ? V.h('textarea', { rows: '2' }, null, wrap) : V.h('input', { type: 'text' }, null, wrap);
    inp.className = 'fd-field';
    inp.setAttribute('aria-label', L(r.label));
    inp.setAttribute('placeholder', L(T.typeHere));
    inp.setAttribute('autocomplete', 'off'); inp.setAttribute('spellcheck', 'false');
    if (r.kind !== 'words' && lim) inp.setAttribute('maxlength', String(lim));
    if (r.kind === 'num') inp.setAttribute('inputmode', 'decimal');
    var meter = V.h('div', { 'class': 'fd-meter' }, null, wrap);
    var track = V.h('span', { 'class': 'fd-track' }, null, meter);
    var fl = V.h('span', { 'class': 'fd-fill' }, null, track);
    var cnt = V.h('span', { 'class': 'fd-cnt' }, null, meter);
    var b = V.h('b', null, '0', cnt);
    V.h('span', null, lim ? ' / ' + V.fmt.int(lim) + ' ' + unitWord(unit) : ' ' + unitWord(unit), cnt);
    function update() {
      var n = countText(inp.value, unit), f = lim ? Math.min(1, n / lim) : 0;
      b.textContent = String(n);
      fl.style.width = (f * 100).toFixed(1) + '%';
      wrap.classList.toggle('hot', !!lim && n / lim >= 0.95 && n <= lim);
      wrap.classList.toggle('over', !!lim && n > lim);
    }
    inp.addEventListener('input', update);
    return { wrap: wrap, fill: fl };
  }
  ATLAS_VIZ.register('field-card', function (el, spec, V, ctx) {
    var L = V.L, cards = spec.cards || [], rows = [], marks = [];
    var grid = V.h('div', { 'class': 'fd-cards' + (cards.length > 1 ? ' multi' : '') }, null, el);
    cards.forEach(function (card) {
      var c = V.h('div', { 'class': 'fd-card' }, null, grid);
      marks.push(c);
      var hd = V.h('div', { 'class': 'fd-card-h' }, null, c);
      V.h('span', { 'class': 'fd-card-t' }, L(card.label), hd);
      if (card.count) {
        var cb = V.h('span', { 'class': 'fd-card-c' }, L(card.count.label), hd);
        V.tip(cb, function () { return { title: L(card.label), rows: [{ value: L(card.count.label), src: card.count.src || card.src }] }; });
        rows.push([L(card.label), L(card.count.label), L(T.kindName.slots), String(card.count.n), '—', { html: V.cites(card.count.src || card.src || []) }]);
      }
      if (card.sub) V.h('p', { 'class': 'fd-card-s' }, L(card.sub), c);
      if (card.count && card.count.n) drawSlots(V, c, { n: card.count.n }, L).classList.add('top');
      var maxLim = 0;
      (card.rows || []).forEach(function (r) { if ((r.kind === 'text' || r.kind === 'num') && r.limit > maxLim) maxLim = r.limit; });
      (card.rows || []).forEach(function (r) {
        var k = r.kind || 'text';
        var row = V.h('div', { 'class': 'fd-row k-' + k }, null, c);
        var lab = V.h('div', { 'class': 'fd-lab' }, null, row);
        V.h('span', { 'class': 'fd-lab-t' + (r.req === 'req' ? ' req' : '') }, L(r.label), lab);
        if (r.q) V.h('span', { 'class': 'fd-lab-q', lang: 'en' }, '"' + L(r.q) + '"', lab);
        var body = V.h('div', { 'class': 'fd-body' }, null, row);
        var limText;
        if (k === 'text' || k === 'num' || k === 'words') {
          drawInput(V, body, r, L, maxLim);
          limText = r.limit ? V.fmt.int(r.limit) + ' ' + unitWord(k === 'words' ? 'words' : 'chars') : L(T.ns);
        } else if (k === 'radio' || k === 'check' || k === 'select') {
          drawOptions(V, body, r, L);
          limText = r.n ? fill(T.options, r.n) : (r.options ? fill(T.options, r.options.length) : L(T.ns));
        } else if (k === 'date') {
          var d = V.h('span', { 'class': 'fd-date' }, null, body);
          V.h('span', null, L(T.month), d);
          if (r.range) V.h('b', null, L(r.range), d);
          limText = r.range ? L(r.range) : L(T.ns);
        } else if (k === 'slots') {
          drawSlots(V, body, r, L);
          limText = fill(T.entries, V.fmt.int(r.n || 0));
        } else {
          V.h('span', { 'class': 'fd-nsbox' }, L(T.ns), body);
          limText = L(T.ns);
        }
        var meta = V.h('div', { 'class': 'fd-meta' }, null, row);
        V.h('span', { 'class': 'fd-pill k-' + k }, limText, meta);
        if (r.req) V.h('span', { 'class': 'fd-pill req-' + r.req }, L(T.req[r.req] || T.req.ns), meta);
        V.tip(lab, function () {
          var out = [{ value: limText, label: L(T.kindName[k] || T.kindName.text), color: k === 'ns' ? 'var(--viz-base)' : 'var(--accent)', src: r.src }];
          if (r.req) out.push({ value: L(T.req[r.req] || T.req.ns) });
          if (r.note) out.push({ value: '', label: L(r.note) });
          return { title: L(card.label) + ' · ' + L(r.label), rows: out };
        });
        rows.push([L(card.label), L(r.label) + (r.q ? ' "' + L(r.q) + '"' : ''), L(T.kindName[k] || T.kindName.text), limText, L(r.req ? (T.req[r.req] || T.req.ns) : T.req.ns), { html: V.cites(r.src || []) }]);
      });
    });
    if (ctx.first && !reduced()) V.stagger(marks, { step: 40, from: 'translateY(8px)' });
    return { table: { cols: [T.card, T.field, T.type, T.limit, T.required, T.src], rows: rows } };
  });

  // =====================================================================
  // 3. budget-stack
  // =====================================================================
  ATLAS_VIZ.register('budget-stack', function (el, spec, V, ctx) {
    var L = V.L, rows = [], segsAll = [], anyOutside = false, anyCond = false, anyNs = false;
    (spec.groups || []).forEach(function (g) {
      var bars = g.bars || [], unit = g.unit || 'chars';
      var totals = bars.map(function (b) { return (b.segs || []).reduce(function (a, x) { return a + x.value * (x.times || 1); }, 0); });
      var max = Math.max.apply(null, totals.concat([1]));
      var sc = V.scale(0, max, 0, 1), ticks = sc.ticks(4);
      var step = ticks.length > 1 ? ticks[1] - ticks[0] : max, top = ticks[ticks.length - 1];
      while (top < max) { top += step; ticks.push(top); }
      var grp = V.h('div', { 'class': 'fd-bs-group' }, null, el);
      var hd = V.h('div', { 'class': 'fd-bs-head' }, null, grp);
      V.h('span', { 'class': 'fd-bs-gl' }, L(g.label), hd);
      V.h('span', { 'class': 'fd-bs-gu' }, L(unit === 'words' ? T.wordsAxis : T.charsAxis), hd);
      bars.forEach(function (b, bi) {
        var row = V.h('div', { 'class': 'fd-bs-row' }, null, grp);
        V.h('div', { 'class': 'fd-bs-lab' }, L(b.label), row);
        var tr = V.h('div', { 'class': 'fd-bs-track' }, null, row);
        ticks.forEach(function (t) { var gl = V.h('span', { 'class': 'fd-bs-grid' + (t === 0 ? ' base' : '') }, null, tr); gl.style.left = (t / top * 100).toFixed(3) + '%'; });
        if (b.ns) {
          anyNs = true;
          var nsb = V.h('span', { 'class': 'fd-bs-ns' }, L(T.ns), tr);
          V.tip(nsb, function () { return { title: L(b.label), rows: [{ value: L(T.ns), label: L(T.nsBar), color: 'var(--viz-base)', src: b.src }] }; });
          rows.push([L(g.label), L(b.label), '—', L(T.ns), '—', L(T.ns), '—', { html: V.cites(b.src || []) }]);
          return;
        }
        var stack = V.h('span', { 'class': 'fd-bs-stack' }, null, tr);
        stack.style.width = (totals[bi] / top * 100).toFixed(3) + '%';
        var acc = 0;
        (b.segs || []).forEach(function (sg) {
          var v = sg.value * (sg.times || 1);
          var seg = V.h('span', { 'class': 'fd-seg' + (sg.outside ? ' outside' : '') + (sg.cond ? ' cond' : '') }, null, stack);
          seg.style.width = (v / totals[bi] * 100).toFixed(3) + '%';
          var txt = V.h('span', { 'class': 'fd-seg-t' }, null, seg);
          V.h('b', null, V.fmt.int(v), txt);
          V.h('span', null, (sg.times || 1) > 1 ? ' = ' + V.fmt.int(sg.value) + ' × ' + sg.times : '', txt);
          if (sg.outside) anyOutside = true; if (sg.cond) anyCond = true;
          V.tip(seg, function () {
            var r = [{ value: V.fmt.int(v) + ' ' + unitWord(unit), label: (sg.times || 1) > 1 ? V.fmt.int(sg.value) + ' × ' + sg.times : '', color: sg.outside ? 'var(--c2)' : 'var(--s3)', src: sg.src }];
            if (sg.cond) r.push({ value: '', label: L(T.cond) });
            if (sg.outside) r.push({ value: '', label: L(T.outside) });
            if (sg.note) r.push({ value: '', label: L(sg.note) });
            return { title: L(b.label) + ' · ' + L(sg.label), rows: r };
          });
          segsAll.push(seg); acc += v;
          rows.push([L(g.label), L(b.label), L(sg.label), V.fmt.int(sg.value) + ' ' + unitWord(unit), String(sg.times || 1), V.fmt.int(v) + ' ' + unitWord(unit),
            [sg.cond ? L(T.cond) : '', sg.outside ? L(T.outside) : '', sg.note ? L(sg.note) : ''].filter(Boolean).join('; ') || '—', { html: V.cites(sg.src || []) }]);
        });
        var tot = V.h('span', { 'class': 'fd-bs-total' }, V.fmt.int(totals[bi]) + ' ' + unitWord(unit), tr);
        tot.style.left = 'calc(' + (totals[bi] / top * 100).toFixed(3) + '% + 8px)';
      });
      var tk = V.h('div', { 'class': 'fd-bs-row ticks', 'aria-hidden': 'true' }, null, grp);
      V.h('div', { 'class': 'fd-bs-lab' }, null, tk);
      var tt = V.h('div', { 'class': 'fd-bs-track' }, null, tk);
      ticks.forEach(function (t) { var sp = V.h('span', null, V.fmt.int(t), tt); sp.style.left = (t / top * 100).toFixed(3) + '%'; });
    });
    var lg = [{ label: T.plain, color: 'var(--s3)' }];
    if (anyOutside) lg.push({ label: T.outside, color: 'var(--c2)' });
    if (anyCond) lg.push({ label: T.cond, shape: 'dash' });
    if (anyNs) lg.push({ label: T.nsBar, shape: 'dash' });
    V.legend(lg, el);
    if (ctx.first && !reduced()) V.stagger(segsAll, { from: 'scaleX(0)', origin: 'left center', step: 40 });
    return { table: { cols: [T.section, T.item, T.field, T.perItem, T.times, T.total, T.note, T.src], rows: rows } };
  });

  // =====================================================================
  // 4. recommender-matrix
  // =====================================================================
  ATLAS_VIZ.register('recommender-matrix', function (el, spec, V, ctx) {
    var L = V.L, roles = spec.roles || [], cols = spec.cols || [], cells = spec.cells || [], rows = [], marks = [];
    var g = V.h('div', { 'class': 'fd-rm', role: 'table' }, null, el);
    g.style.setProperty('--n', String(cols.length));
    var hr = V.h('div', { 'class': 'fd-rm-hr', role: 'row' }, null, g);
    V.h('div', { 'class': 'fd-rm-hc corner', role: 'columnheader' }, L(T.role), hr);
    cols.forEach(function (c) { V.h('div', { 'class': 'fd-rm-hc', role: 'columnheader' }, L(c.label), hr); });
    roles.forEach(function (r, ri) {
      var row = V.h('div', { 'class': 'fd-rm-r', role: 'row' }, null, g);
      var rc = V.h('div', { 'class': 'fd-rm-role', role: 'rowheader' }, null, row);
      V.h('span', { 'class': 'fd-rm-rt' }, L(r.label), rc);
      if (r.sub) V.h('span', { 'class': 'fd-rm-rs' }, L(r.sub), rc);
      if (r.src) { var cs = V.h('span', { 'class': 'fd-rm-cite' }, null, rc); cs.innerHTML = V.cites(r.src); }
      var tr = [L(r.label)];
      cols.forEach(function (c, ci) {
        var x = (cells[ri] || [])[ci] || { kind: 'ns' };
        var kind = x.kind || (x.n != null ? 'num' : 'text');
        var cell = V.h('div', { 'class': 'fd-rm-c k-' + kind + (x.n === 0 ? ' zero' : ''), role: 'cell' }, null, row);
        V.h('span', { 'class': 'fd-rm-cl' }, L(c.label), cell);
        if (x.n != null) V.h('span', { 'class': 'fd-rm-n' }, V.fmt.int(x.n), cell);
        else if (kind === 'none') V.h('span', { 'class': 'fd-rm-none', 'aria-hidden': 'true' }, '—', cell);
        var txt = kind === 'ns' && !x.t ? L(T.ns) : (x.t ? L(x.t) : '');
        if (txt) V.h('span', { 'class': 'fd-rm-t' }, txt, cell);
        V.tip(cell, function () {
          return { title: L(r.label) + ' · ' + L(c.label), rows: [{ value: x.n != null ? V.fmt.int(x.n) : (kind === 'none' ? L(T.none) : (kind === 'ns' ? L(T.ns) : '')), label: txt, color: kind === 'ns' ? 'var(--viz-base)' : (x.n === 0 || kind === 'none' ? 'var(--viz-muted)' : 'var(--s3)'), src: x.src }] };
        });
        marks.push(cell);
        tr.push({ html: (x.n != null ? '<b>' + V.fmt.int(x.n) + '</b> ' : (kind === 'none' ? L(T.none) + ' ' : '')) + window.ATLAS_UTIL.esc(txt) + V.cites(x.src || []) });
      });
      rows.push(tr);
    });
    if (ctx.first && !reduced()) V.stagger(marks, { step: 10, from: 'translateY(4px)' });
    return { table: { cols: [T.role].concat(cols.map(function (c) { return c.label; })), rows: rows } };
  });
})();
