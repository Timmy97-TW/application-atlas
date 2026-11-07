/* School figures: comparator ('compare'), enum waffle ('waffle'), supplementary-materials
   glyph matrix ('matrix-grid') and major-entry strip ('entry-strip').
   Data: window.ATLAS.viz.schools; full cell text for the matrix: window.ATLAS.matrix.
   Styles: site.css, block "School figures (viz-schools.js)". */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  function s(zh, en) { return { zh: zh, en: en }; }
  var T = {
    none: s('— 選擇學校 —', '— Choose a school —'),
    slot: s('第 {n} 欄學校', 'School in column {n}'),
    diffOnly: s('只看不同的列', 'Show differences only'),
    differ: s('{n}／{t} 列不同', '{n} of {t} rows differ'),
    pickTwo: s('選兩所以上學校才能比較差異', 'Pick two or more schools to see differences'),
    allSame: s('目前選的學校在每一列都相同', 'The schools picked agree on every row'),
    field: s('項目', 'Item'),
    notStated: s('未載明', 'not stated'),
    swipe: s('左右滑動切換學校', 'Swipe to move between schools'),
    groups: {
      apply: s('申請方式', 'How you apply'), letters: s('推薦信與面試', 'Letters and interview'),
      tests: s('考試', 'Tests'), intl: s('國際生補助', 'Aid for international students'),
      majors: s('主修', 'Majors'), materials: s('補充材料', 'Supplementary materials'), ai: s('AI', 'AI')
    },
    schools: s('所', 'schools'), school1: s('所', 'school'),
    cGroup: s('類別', 'Group'), cCount: s('校數', 'Schools'), cList: s('學校', 'Which'), cSrc: s('來源', 'Sources'),
    unknown: s('未載明', 'Not stated'),
    matCols: [s('藝術', 'Arts'), s('Maker', 'Maker'), s('研究', 'Research'), s('影片', 'Video'), s('連結', 'Links')],
    accept: s('所接受', 'accept'),
    limitedN: s('另 {n} 所有限制', '+{n} limited'),
    acceptSentence: s('{n} 所學校接受{what}；另 {m} 所只限特定主修或管道', '{n} schools accept {what}; {m} more only for some majors or channels'),
    open: s('點一下列可展開五格全文', 'Click a row to open all five cells in full'),
    eng: s('工程', 'Engineering'), bio: s('生物', 'Biology'),
    capNote: s('其中 {n} 所的工程頁面寫明有名額或容量限制', '{n} engineering pages state a seat or capacity limit'),
    entryUnknown: s('頁面未載明', 'Not stated on the pages read'),
    cField: s('主修', 'Major'), cEntry: s('何時進入', 'When you enter')
  };
  function fmtT(x, o) { var t = window.ATLAS_UTIL.L(x); for (var k in o) t = t.split('{' + k + '}').join(o[k]); return t; }
  function esc(x) { return window.ATLAS_UTIL.esc(x == null ? '' : x); }
  function D() { return ((window.ATLAS || {}).viz || {}).schools; }
  function srcCls(ids) {
    var S = (window.ATLAS || {}).sources || {}, c = (ids || []).map(function (i) { return S[i] && S[i].cls; });
    return c.indexOf('official') >= 0 ? 'official' : (c.indexOf('secondary') >= 0 ? 'secondary' : '');
  }
  function get(rec, id) { return id.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, rec); }
  function fieldOf(id) { var d = D(); for (var i = 0; i < d.fields.length; i++) if (d.fields[i].id === id) return d.fields[i]; return null; }
  function enumLabel(f, v) {
    var d = D(), E = f.enum ? d.enums[f.enum] : null;
    return E && E[String(v)] ? E[String(v)] : String(v);
  }
  var NS_KEYS = { ns: 1, unclear: 1 };
  // one value as {text, key, ns, src, cls}
  function cell(school, f, L) {
    var rec = D().data[school]; if (!rec) return null;
    var v = get(rec, f.id), src = (rec.src || {})[f.id] || [];
    var out = { src: src, cls: srcCls(src), ns: false, key: '' };
    if (v == null || v === '') { out.ns = true; out.text = L(T.notStated); out.key = 'null'; return out; }
    if (f.type === 'enum') {
      var arr = [].concat(v);
      out.text = arr.map(function (x) { return L(enumLabel(f, x)); }).join(' · ');
      out.key = arr.map(String).sort().join('+');
      if (arr.length === 1 && NS_KEYS[arr[0]]) out.ns = true;
      if (arr.length === 1 && arr[0] === 'blocked') out.blocked = true;
    } else if (f.type === 'number') { out.text = String(v); out.key = String(v); }
    else { out.text = L(v); out.key = (v && v.en) || out.text; }
    return out;
  }
  function citeHtml(V, src) {
    if (!src || !src.length) return '';
    return V.cites(src.slice(0, 2)) + (src.length > 2 ? '<span class="cmp-more">+' + (src.length - 2) + '</span>' : '');
  }
  var hdrTop = function () { var t = document.querySelector('.top'); return t ? t.offsetHeight : 0; };
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } return null; }

  // =====================================================================
  // 1. compare
  // =====================================================================
  var KEY = 'atlas.compare.v1';
  function compare(el, spec, V, ctx) {
    var d = D(); if (!d) return;
    var L = V.L;
    var st = el._state;
    if (!st) {
      var saved = null;
      try { saved = JSON.parse(store(KEY) || 'null'); } catch (e) { saved = null; }
      var picks = (Array.isArray(saved) && saved.length === 3 ? saved : (spec.defaults || d.order.slice(0, 3)))
        .slice(0, 3).map(function (k) { return d.order.indexOf(k) >= 0 ? k : ''; });
      while (picks.length < 3) picks.push('');
      st = el._state = { picks: picks, diff: false };
    }
    var groups = [];
    d.fields.forEach(function (f) {
      var g = groups[groups.length - 1];
      if (!g || g.id !== f.group) groups.push(g = { id: f.group, fields: [] });
      g.fields.push(f);
    });
    var mobile = el.clientWidth < 640;
    el.style.setProperty('--vz-top', hdrTop() + 'px');

    // controls
    var ctr = V.h('div', { 'class': 'vz-controls cmp-ctr' }, null, el);
    var tgl = V.h('button', { 'class': 'vz-chip cmp-tgl', type: 'button', 'aria-pressed': String(st.diff) }, L(T.diffOnly), ctr);
    var count = V.h('span', { 'class': 'cmp-count', 'aria-live': 'polite' }, '', ctr);

    function selectFor(i, parent) {
      var wrap = V.h('label', { 'class': 'cmp-sel' }, null, parent);
      V.h('span', { 'class': 'cmp-sr' }, fmtT(T.slot, { n: i + 1 }), wrap);
      var sel = V.h('select', { 'data-slot': i }, null, wrap);
      V.h('option', { value: '' }, L(T.none), sel);
      d.order.forEach(function (k) {
        var o = V.h('option', { value: k }, V.lang() === 'zh' ? L(d.data[k].name) : k, sel);
        if (st.picks[i] === k) o.selected = true;
      });
      sel.addEventListener('change', function () { pick(i, sel.value); });
      return sel;
    }

    var root, rows = [], heads = [], cards = null;
    function valueHtml(c) {
      if (!c) return '<span class="cmp-empty">—</span>';
      var dot = c.cls ? '<span class="dot ' + c.cls + '"></span>' : '';
      var body = '<span class="cmp-v' + (c.ns ? ' ns' : '') + (c.blocked ? ' blk' : '') + '"' + (c.cls === 'secondary' ? ' data-cls="secondary"' : '') + '>' + dot + esc(c.text) + citeHtml(V, c.src) + '</span>';
      return body;
    }
    function nameHtml(k) {
      if (!k) return '';
      return '<span class="cmp-name">' + esc(L(d.data[k].name)) + '</span>';
    }

    if (!mobile) {
      root = V.h('div', { 'class': 'cmp', role: 'table', 'aria-label': L(spec.title) }, null, el);
      var head = V.h('div', { 'class': 'cmp-head', role: 'row' }, null, root);
      V.h('div', { 'class': 'cmp-corner', role: 'columnheader' }, L(T.field), head);
      for (var i = 0; i < 3; i++) {
        var hc = V.h('div', { 'class': 'cmp-h', role: 'columnheader', 'data-col': i }, null, head);
        selectFor(i, hc);
        var nm = V.h('div', { 'class': 'cmp-hn', 'data-col': i }, null, hc); nm.innerHTML = nameHtml(st.picks[i]);
        heads.push(nm);
      }
      groups.forEach(function (g) {
        var gh = V.h('div', { 'class': 'cmp-gh', role: 'row', 'data-g': g.id }, null, root);
        V.h('span', { role: 'rowheader' }, L(T.groups[g.id] || g.id), gh);
        g.fields.forEach(function (f) {
          var r = V.h('div', { 'class': 'cmp-r', role: 'row', 'data-g': g.id }, null, root);
          V.h('div', { 'class': 'cmp-l', role: 'rowheader' }, L(f.label), r);
          var cs = [];
          for (var j = 0; j < 3; j++) {
            var c = V.h('div', { 'class': 'cmp-c', role: 'cell', 'data-col': j }, null, r);
            c.innerHTML = st.picks[j] ? valueHtml(cell(st.picks[j], f, L)) : '';
            cs.push(c);
          }
          rows.push({ f: f, el: r, cells: cs, gh: gh });
        });
      });
      requestAnimationFrame(function () { root.style.setProperty('--cmp-head', head.offsetHeight + 'px'); });
    } else {
      var pk = V.h('div', { 'class': 'cmp-pickers' }, null, el);
      for (var m = 0; m < 3; m++) selectFor(m, pk);
      cards = V.h('div', { 'class': 'cmp-cards', role: 'list', 'aria-label': L(T.swipe) }, null, el);
      var dots = V.h('div', { 'class': 'cmp-dots', 'aria-hidden': 'true' }, null, el);
      buildCards();
      cards.addEventListener('scroll', function () {
        var w = cards.firstChild ? cards.firstChild.offsetWidth : 1;
        var idx = Math.round(cards.scrollLeft / (w + 12));
        [].forEach.call(dots.children, function (dd, k) { dd.classList.toggle('on', k === idx); });
      }, { passive: true });
    }
    function buildCards(animIdx) {
      cards.innerHTML = '';
      var dotsEl = cards.nextSibling; dotsEl.innerHTML = '';
      rows = [];
      st.picks.forEach(function (k, ci) {
        if (!k) return;
        var cd = V.h('article', { 'class': 'cmp-card', role: 'listitem', 'data-col': ci }, null, cards);
        V.h('h3', { 'class': 'cmp-card-h' }, L(d.data[k].name), cd);
        groups.forEach(function (g) {
          var gh = V.h('div', { 'class': 'cmp-gh' }, L(T.groups[g.id] || g.id), cd);
          g.fields.forEach(function (f) {
            var r = V.h('div', { 'class': 'cmp-r' }, null, cd);
            V.h('div', { 'class': 'cmp-l' }, L(f.label), r);
            var c = V.h('div', { 'class': 'cmp-c' }, null, r); c.innerHTML = valueHtml(cell(k, f, L));
            rows.push({ f: f, el: r, cells: [], gh: gh, col: ci });
          });
        });
        V.h('span', null, null, dotsEl);
        if (animIdx === ci && !V.reduced) { cd.classList.add('cmp-enter'); requestAnimationFrame(function () { requestAnimationFrame(function () { cd.classList.remove('cmp-enter'); }); }); }
      });
      if (dotsEl.firstChild) dotsEl.firstChild.classList.add('on');
      if (!cards.children.length) V.h('p', { 'class': 'cmp-emptycard' }, L(T.none), cards);
    }

    // differences
    function diffKeys(f) {
      var ks = st.picks.filter(Boolean).map(function (k) { return cell(k, f, L).key; });
      return ks.length >= 2 && ks.some(function (x) { return x !== ks[0]; });
    }
    function applyDiff() {
      var n = st.picks.filter(Boolean).length, nd = 0, seen = {};
      d.fields.forEach(function (f) { if (diffKeys(f)) { nd++; seen[f.id] = 1; } });
      var shown = {};
      rows.forEach(function (r) {
        var isD = !!seen[r.f.id];
        r.el.classList.toggle('diff', isD && n >= 2);
        var hide = st.diff && n >= 2 && !isD;
        r.el.hidden = hide;
        if (!hide) shown[r.gh ? r.gh.textContent + '|' + (r.col || 0) : ''] = 1;
      });
      rows.forEach(function (r) { if (r.gh) r.gh.hidden = !shown[r.gh.textContent + '|' + (r.col || 0)]; });
      tgl.setAttribute('aria-pressed', String(st.diff));
      tgl.disabled = n < 2;
      count.textContent = n < 2 ? L(T.pickTwo) : (nd ? fmtT(T.differ, { n: nd, t: d.fields.length }) : L(T.allSame));
      compare.lastTable = table();
    }
    tgl.addEventListener('click', function () { st.diff = !st.diff; applyDiff(); });

    function pick(i, k) {
      st.picks[i] = k;
      store(KEY, JSON.stringify(st.picks));
      if (mobile) { buildCards(i); applyDiff(); if (k) { var c = cards.querySelector('[data-col="' + i + '"]'); if (c) cards.scrollTo({ left: c.offsetLeft - cards.offsetLeft, behavior: V.reduced ? 'auto' : 'smooth' }); } return; }
      var targets = [heads[i]].concat(rows.map(function (r) { return r.cells[i]; }));
      function fill() {
        heads[i].innerHTML = nameHtml(k);
        rows.forEach(function (r) { r.cells[i].innerHTML = k ? valueHtml(cell(k, r.f, L)) : ''; });
        applyDiff();
      }
      if (V.reduced) { fill(); return; }
      targets.forEach(function (t) { t.style.transition = 'opacity 140ms ' + V.ease + ', transform 140ms ' + V.ease; t.style.opacity = '0'; t.style.transform = 'translateX(-10px)'; });
      setTimeout(function () {
        fill();
        targets.forEach(function (t) { t.style.transition = 'none'; t.style.transform = 'translateX(12px)'; });
        requestAnimationFrame(function () { requestAnimationFrame(function () {
          targets.forEach(function (t) { t.style.transition = 'opacity 300ms ' + V.ease + ', transform 300ms ' + V.ease; t.style.opacity = ''; t.style.transform = ''; });
        }); });
      }, 150);
    }

    function table() {
      var cols = [T.field].concat(st.picks.filter(Boolean).map(function (k) { return d.data[k].name; }));
      var rowsT = d.fields.map(function (f) {
        return [L(f.label)].concat(st.picks.filter(Boolean).map(function (k) {
          var c = cell(k, f, L); return { html: esc(c.text) + ' ' + V.cites(c.src) };
        }));
      });
      return { cols: cols, rows: rowsT };
    }
    applyDiff();
    if (ctx.first && !mobile) V.stagger(rows.slice(0, 14).map(function (r) { return r.el; }), { step: 18 });
    return { table: table() };
  }
  ATLAS_VIZ.register('compare', compare);

  // =====================================================================
  // 2. waffle
  // =====================================================================
  ATLAS_VIZ.register('waffle', function (el, spec, V, ctx) {
    var d = D(); if (!d) return;
    var L = V.L, f = fieldOf(spec.field); if (!f) return;
    var E = d.enums[f.enum] || {}, keys = Object.keys(E);
    var groups = {}, gOrder = [];
    d.order.forEach(function (k) {
      var v = get(d.data[k], f.id);
      var gk = v == null ? '__null' : [].concat(v).map(String).join('+');
      if (!groups[gk]) { groups[gk] = []; gOrder.push(gk); }
      groups[gk].push(k);
    });
    function rank(gk) {
      if (gk === '__null') return 1e6;
      var p = gk.split('+'); return keys.indexOf(p[0]) * 100 + p.length + (NS_KEYS[p[0]] ? 1e5 : 0);
    }
    gOrder.sort(function (a, b) { return rank(a) - rank(b); });
    var colorIdx = {}, ci = 0;
    gOrder.forEach(function (gk) { if (gk !== '__null' && !NS_KEYS[gk]) colorIdx[gk] = f.multi ? (ci++ % 5) : (keys.indexOf(gk) % 5); });
    function gLabel(gk) { return gk === '__null' ? L(T.unknown) : gk.split('+').map(function (x) { return L(enumLabel(f, x)); }).join(' + '); }

    var wrap = V.h('div', { 'class': 'wf', role: 'list' }, null, el);
    var marks = [];
    gOrder.forEach(function (gk) {
      var list = groups[gk];
      var g = V.h('div', { 'class': 'wf-g', role: 'listitem' }, null, wrap);
      var hd = V.h('div', { 'class': 'wf-hd' }, null, g);
      V.h('span', { 'class': 'wf-n' }, String(list.length), hd);
      V.h('span', { 'class': 'wf-lab' }, gLabel(gk), hd);
      var grid = V.h('div', { 'class': 'wf-sq', style: 'grid-template-columns:repeat(' + Math.min(list.length, 6) + ',var(--wf-s))' }, null, g);
      list.forEach(function (k) {
        var unk = !(gk in colorIdx);
        var sq = V.h('span', { 'class': 'wf-c' + (unk ? ' unk' : ''), 'aria-label': k + ' · ' + gLabel(gk) }, null, grid);
        if (!unk) sq.style.background = V.color(colorIdx[gk]);
        V.tip(sq, function () {
          return { title: L(d.data[k].name), rows: [{ value: gLabel(gk), label: '', color: unk ? null : V.color(colorIdx[gk]), src: (d.data[k].src || {})[f.id] }] };
        });
        marks.push(sq);
      });
    });
    if (ctx.first) V.stagger(marks, { from: 'scale(.5)', origin: 'center', step: 14 });
    return {
      table: {
        cols: [f.label, T.cCount, T.cList],
        rows: gOrder.map(function (gk) { return [gLabel(gk), String(groups[gk].length), { html: groups[gk].map(function (k) { return esc(k) + V.cites((d.data[k].src || {})[f.id] || []); }).join(', ') }]; })
      }
    };
  });

  // =====================================================================
  // 3. matrix-grid
  // =====================================================================
  var hatchDone = false;
  function ensureHatch(V) {
    if (hatchDone) return; hatchDone = true;
    var sv = V.svg('svg', { width: 0, height: 0, 'aria-hidden': 'true', style: 'position:absolute;width:0;height:0' });
    sv.innerHTML = '<defs><pattern id="vzs-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="4" fill="#eef0f3"/><line x1="0" y1="0" x2="0" y2="4" stroke="#bfc4cb" stroke-width="1.6"/></pattern></defs>';
    document.body.appendChild(sv);
  }
  function glyph(v) {
    var c = 10, p = '';
    if (v === 'yes') p = '<circle cx="10" cy="10" r="6" fill="var(--s4)"/>';
    else if (v === 'limited') p = '<circle cx="10" cy="10" r="5.4" fill="var(--viz-surface)" stroke="var(--s4)" stroke-width="1.5"/><path d="M10 4.6 A5.4 5.4 0 0 0 10 15.4 Z" fill="var(--s4)"/>';
    else if (v === 'no') p = '<circle cx="10" cy="10" r="4" fill="none" stroke="var(--viz-muted)" stroke-width="1.3"/><line x1="7" y1="13" x2="13" y2="7" stroke="var(--viz-muted)" stroke-width="1.3" stroke-linecap="round"/>';
    else if (v === 'blocked') p = '<rect x="4" y="4" width="12" height="12" rx="3" fill="url(#vzs-hatch)" stroke="#c9cdd3" stroke-width="1"/>';
    else p = '<circle cx="10" cy="10" r="5.4" fill="none" stroke="var(--viz-muted)" stroke-width="1.3" stroke-dasharray="2.1 2.1"/>';
    return '<svg class="mg-gl" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">' + p + '</svg>';
  }
  function matrixText(i, j, L) {
    var M = (window.ATLAS || {}).matrix; if (!M || !M.rows[i]) return null;
    var c = M.rows[i].cells[j]; if (!c) return null;
    if (c.state === 'not-stated') return { text: L(T.notStated) + ' (' + (c.checked || '') + ')', src: c.src || [], ns: true };
    return { text: L(c.t), src: c.src || [] };
  }
  ATLAS_VIZ.register('matrix-grid', function (el, spec, V, ctx) {
    var d = D(); if (!d) return;
    var L = V.L; ensureHatch(V);
    var cols = ['arts', 'maker', 'research', 'video', 'links'];
    var fs = cols.map(function (c) { return fieldOf('materials.' + c); });
    var M = (window.ATLAS || {}).matrix || { rows: [] };
    // matrix rows follow the same order as viz-schools order; map by index, fall back to name
    function mIndex(k, i) {
      if (M.rows[i] && (M.rows[i].school === k || M.rows.length === d.order.length)) return i;
      for (var q = 0; q < M.rows.length; q++) if (M.rows[q].school === k) return q;
      return -1;
    }
    var root = V.h('div', { 'class': 'mg' }, null, el);
    var head = V.h('div', { 'class': 'mg-head' }, null, root);
    V.h('div', { 'class': 'mg-corner' }, '', head);
    cols.forEach(function (c, j) {
      var yes = 0, lim = 0;
      d.order.forEach(function (k) { var v = d.data[k].materials[c]; if (v === 'yes') yes++; else if (v === 'limited') lim++; });
      var what = L(fs[j].label); what = V.lang() === 'en' ? what.charAt(0).toLowerCase() + what.slice(1) : what;
      var sentence = fmtT(T.acceptSentence, { n: yes, m: lim, what: V.lang() === 'en' ? 'a ' + what.replace(/^external links$/, 'external link') : what });
      if (V.lang() === 'en' && c === 'links') sentence = fmtT(T.acceptSentence, { n: yes, m: lim, what: 'external links' });
      if (V.lang() === 'en' && c === 'research') sentence = fmtT(T.acceptSentence, { n: yes, m: lim, what: 'a research paper or abstract' });
      if (V.lang() === 'en' && c === 'video') sentence = fmtT(T.acceptSentence, { n: yes, m: lim, what: 'a video' });
      var h = V.h('div', { 'class': 'mg-ch', title: sentence, 'aria-label': sentence }, null, head);
      var top = V.h('div', { 'class': 'mg-tot' }, null, h);
      V.h('span', { 'class': 'mg-num' }, String(yes), top);
      V.h('span', { 'class': 'mg-acc' }, L(T.accept), top);
      var bar = V.h('div', { 'class': 'mg-bar' }, null, h);
      var b1 = V.h('i', { 'class': 'y' }, null, bar); b1.style.width = (yes / d.order.length * 100) + '%';
      var b2 = V.h('i', { 'class': 'l' }, null, bar); b2.style.width = (lim / d.order.length * 100) + '%';
      V.h('div', { 'class': 'mg-lim' }, lim ? fmtT(T.limitedN, { n: lim }) : ' ', h);
      V.h('div', { 'class': 'mg-cl' }, L(T.matCols[j]), h);
      if (ctx.first && !V.reduced) [b1, b2].forEach(function (b) { var w = b.style.width; b.style.width = '0'; requestAnimationFrame(function () { requestAnimationFrame(function () { b.style.width = w; }); }); });
    });
    var body = V.h('div', { 'class': 'mg-body' }, null, root);
    var marks = [], openRow = null;
    d.order.forEach(function (k, i) {
      var rec = d.data[k], mi = mIndex(k, i);
      var row = V.h('div', { 'class': 'mg-row', role: 'button', tabindex: '0', 'aria-expanded': 'false' }, null, body);
      V.h('div', { 'class': 'mg-lab' }, k, row);
      cols.forEach(function (c, j) {
        var v = rec.materials[c];
        var g = V.h('div', { 'class': 'mg-c' }, null, row);
        var sp = V.h('span', { 'class': 'mg-g', 'aria-label': k + ' · ' + L(fs[j].label) + ' · ' + L(enumLabel(fs[j], v)) }, null, g);
        sp.innerHTML = glyph(v);
        sp.setAttribute('tabindex', '-1');
        V.tip(sp, function () {
          var mt = matrixText(mi, j, L);
          var txt = mt ? mt.text : '';
          if (txt.length > 280) txt = txt.slice(0, 278) + '…';
          return { title: k + ' · ' + L(fs[j].label), rows: [{ value: L(enumLabel(fs[j], v)), label: '' }, { value: '', label: txt, src: (mt && mt.src.length ? mt.src : (rec.src || {})['materials.' + c]) }] };
        });
        sp.setAttribute('tabindex', '-1');
        marks.push(sp);
      });
      var dr = V.h('div', { 'class': 'mg-drawer', 'aria-hidden': 'true' }, null, body);
      var inner = V.h('div', { 'class': 'mg-din' }, null, dr);
      function fillDrawer() {
        if (inner.childNodes.length) return;
        cols.forEach(function (c, j) {
          var mt = matrixText(mi, j, L) || { text: '', src: [] };
          var b = V.h('div', { 'class': 'mg-dc' }, null, inner);
          var h = V.h('div', { 'class': 'mg-dh' }, null, b);
          h.innerHTML = glyph(rec.materials[c]) + '<span>' + esc(L(fs[j].label)) + '</span><span class="mg-dv">' + esc(L(enumLabel(fs[j], rec.materials[c]))) + '</span>';
          var p = V.h('p', { 'class': mt.ns ? 'ns' : null }, null, b);
          var cls = srcCls(mt.src);
          if (cls === 'secondary') p.setAttribute('data-cls', 'secondary');
          p.innerHTML = esc(mt.text) + ' ' + V.cites(mt.src);
        });
      }
      function setOpen(on) {
        row.setAttribute('aria-expanded', String(on));
        dr.setAttribute('aria-hidden', String(!on));
        if (on) fillDrawer();
        if (V.reduced) { dr.style.height = on ? 'auto' : '0px'; return; }
        var hNow = dr.offsetHeight;
        dr.style.height = hNow + 'px';
        requestAnimationFrame(function () {
          dr.style.height = on ? inner.offsetHeight + 'px' : '0px';
        });
        dr.addEventListener('transitionend', function te(e) {
          if (e.propertyName !== 'height') return;
          dr.removeEventListener('transitionend', te);
          if (row.getAttribute('aria-expanded') === 'true') dr.style.height = 'auto';
        });
      }
      function toggle() {
        var on = row.getAttribute('aria-expanded') !== 'true';
        if (on && openRow && openRow !== setOpen) openRow(false);
        setOpen(on); openRow = on ? setOpen : null;
      }
      row.addEventListener('click', toggle);
      row.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    });
    // legend (all five glyphs)
    var lg = V.h('div', { 'class': 'vz-legend mg-legend' }, null, el);
    ['yes', 'limited', 'no', 'ns', 'blocked'].forEach(function (v) {
      var sp = V.h('span', { 'class': 'vz-lg' }, null, lg);
      sp.innerHTML = glyph(v) + '<span>' + esc(L(d.enums.material[v])) + '</span>';
    });
    V.h('span', { 'class': 'vz-lg mg-hint' }, L(T.open), lg);
    if (ctx.first) V.stagger(marks, { from: 'scale(.4)', origin: 'center', step: 3 });
    return {
      table: {
        cols: [T.cList].concat(fs.map(function (f) { return f.label; })),
        rows: d.order.map(function (k) {
          return [k].concat(cols.map(function (c) { return { html: esc(L(enumLabel(fieldOf('materials.' + c), d.data[k].materials[c]))) + V.cites((d.data[k].src || {})['materials.' + c] || []) }; }));
        })
      }
    };
  });

  // =====================================================================
  // 4. entry-strip
  // =====================================================================
  ATLAS_VIZ.register('entry-strip', function (el, spec, V, ctx) {
    var d = D(); if (!d) return;
    var L = V.L;
    var segs = ['school', 'direct', 'capped', null];
    var bars = [{ id: 'engEntry', label: T.eng }, { id: 'bioEntry', label: T.bio }];
    var root = V.h('div', { 'class': 'es' }, null, el);
    var marks = [], tableRows = [];
    var n = d.order.length;
    bars.forEach(function (b) {
      var f = fieldOf(b.id);
      var row = V.h('div', { 'class': 'es-row' }, null, root);
      V.h('div', { 'class': 'es-lab' }, L(b.label), row);
      var bar = V.h('div', { 'class': 'es-bar', role: 'img', 'aria-label': L(b.label) }, null, row);
      var aria = [];
      segs.forEach(function (sk, si) {
        var list = d.order.filter(function (k) { var v = d.data[k][b.id]; return sk == null ? v == null : v === sk; });
        if (!list.length) return;
        var lab = sk == null ? L(T.entryUnknown) : L(enumLabel(f, sk));
        aria.push(lab + ' ' + list.length);
        var sg = V.h('div', { 'class': 'es-seg' + (sk == null ? ' unk' : ''), 'aria-label': lab + ': ' + list.length + ' ' + L(T.schools) }, null, bar);
        sg.style.flexGrow = list.length;
        if (sk != null) sg.style.background = V.color(si);
        var wide = list.length / n > 0.12;
        V.h('span', { 'class': 'es-n' }, String(list.length), sg);
        if (wide) V.h('span', { 'class': 'es-t' }, lab, sg);
        V.tip(sg, function () {
          var src = []; list.forEach(function (k) { ((d.data[k].src || {})[b.id] || []).forEach(function (x) { if (src.indexOf(x) < 0) src.push(x); }); });
          return { title: L(b.label) + ' · ' + lab + ' · ' + list.length + ' ' + L(T.schools), rows: [{ value: '', label: list.join(', '), color: null, src: src }] };
        });
        marks.push(sg);
        tableRows.push([L(b.label), lab, String(list.length), { html: list.map(function (k) { return esc(k) + V.cites((d.data[k].src || {})[b.id] || []); }).join(', ') }]);
      });
      bar.setAttribute('aria-label', L(b.label) + ': ' + aria.join(', '));
      if (b.id === 'engEntry') {
        var capped = d.order.filter(function (k) { return d.data[k].engCapped === true; });
        if (capped.length) V.h('div', { 'class': 'es-note' }, fmtT(T.capNote, { n: capped.length }) + ' (' + capped.join(', ') + ')', row);
      }
    });
    // legend: all four entry kinds, including any with zero schools
    V.legend(segs.map(function (sk, si) {
      return sk == null ? { label: T.entryUnknown, shape: 'dash' } : { label: enumLabel(fieldOf('engEntry'), sk), color: V.color(si) };
    }), el);
    if (ctx.first) V.stagger(marks, { from: 'scaleX(.2)', origin: 'left center', step: 60 });
    return { table: { cols: [T.cField, T.cEntry, T.cCount, T.cList], rows: tableRows } };
  });
})();
