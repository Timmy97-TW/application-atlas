/* Column flow diagram ('flow') and field-budget bars ('budget').
   flow spec:   { title, subtitle, columns:[{label}], nodes:[{id, col, label, sub?, src?, tone}],
                  links:[{from, to, label?, src?, dashed?, tone?}], legend?:[{label, shape, color}] }
     node tone: person | container | system | college | muted
     link tone (optional): yes | no | muted — colours the line by outcome; explained by spec.legend.
   budget spec: { groups:[{label, unit:'chars'|'words', items:[{label, value, src, note?}]}] }
     Each group gets its own linear axis: characters and words are different units.
   No text lives here beyond unit words and table headers. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  var T = {
    link: { zh: '路徑', en: 'Path' },
    src: { zh: '來源', en: 'Sources' },
    group: { zh: '組別', en: 'Group' },
    field: { zh: '欄位', en: 'Field' },
    limit: { zh: '上限', en: 'Limit' },
    note: { zh: '說明', en: 'Note' },
    chars: { zh: '字元', en: 'chars' },
    words: { zh: '字', en: 'words' },
    charsAxis: { zh: '單位：字元', en: 'unit: characters' },
    wordsAxis: { zh: '單位：英文字數', en: 'unit: words' }
  };
  var LINK_TONE = { yes: 'var(--c3)', no: 'var(--c2)', muted: 'var(--viz-muted)' };

  // one document listener clears pinned highlights when tapping elsewhere
  var flows = [];
  document.addEventListener('pointerdown', function (e) {
    flows.forEach(function (f) { if (f.el.isConnected && !f.el.contains(e.target)) f.clear(true); });
  }, true);

  ATLAS_VIZ.register('flow', function (el, spec, V, ctx) {
    var L = V.L;
    var cols = spec.columns || [], n = cols.length;
    if (!n || !spec.nodes) return;
    var byId = {};
    spec.nodes.forEach(function (nd) { byId[nd.id] = nd; });
    var links = (spec.links || []).filter(function (l) { return byId[l.from] && byId[l.to]; })
      .map(function (l, i) { return { i: i, l: l, from: l.from, to: l.to }; });

    // ---- horizontal geometry
    var W = Math.max(el.clientWidth, 280);
    var narrow = W < 560;
    var GAPMIN = narrow ? 60 : 64;
    var MAXW = n <= 2 ? 250 : 210, MINW = narrow ? 118 : 140;
    var cw = Math.min(MAXW, Math.floor((W - (n - 1) * GAPMIN) / n));
    var scroll = false;
    if (cw < MINW) { cw = MINW; scroll = true; }
    var gap = n > 1 ? (scroll ? GAPMIN : Math.min(300, (W - n * cw) / (n - 1))) : 0;
    var inner = n * cw + (n - 1) * gap;
    var TW = scroll ? inner + 2 : W;
    var x0 = scroll ? 1 : Math.max(0, (W - inner) / 2);
    var xs = cols.map(function (c, i) { return x0 + i * (cw + gap); });

    var wrap = V.h('div', { 'class': 'vz-fl-wrap' + (scroll ? ' vz-scroll' : '') }, null, el);
    var box = V.h('div', { 'class': 'vz-fl' + (narrow ? ' narrow' : ''), role: 'group', 'aria-label': spec.title ? L(spec.title) : null }, null, wrap);
    box.style.width = TW + 'px';
    var s = V.svg('svg', { 'class': 'vz-fl-svg', 'aria-hidden': 'true' }, box);
    var HEAD = 28;
    cols.forEach(function (c, i) {
      var d = V.h('div', { 'class': 'vz-fl-col' }, L(c.label), box);
      d.style.left = xs[i] + 'px'; d.style.width = cw + 'px';
    });

    // ---- cards (HTML over the SVG link layer), measured before vertical layout
    var cards = {}, cardList = [];
    spec.nodes.forEach(function (nd) {
      var c = V.h('div', { 'class': 'vz-fl-node tone-' + (nd.tone || 'container'), 'aria-label': L(nd.label) + (nd.sub ? '. ' + L(nd.sub) : '') }, null, box);
      V.h('span', { 'class': 'vz-fl-lab' }, L(nd.label), c);
      c.style.width = cw + 'px';
      c.style.left = (xs[nd.col] || 0) + 'px';
      cards[nd.id] = c; cardList.push(c);
    });
    var VG = narrow ? 8 : 10, MAXG = 36;
    var P = {};
    var perCol = cols.map(function () { return []; });
    spec.nodes.forEach(function (nd) { if (perCol[nd.col]) perCol[nd.col].push(nd); P[nd.id] = { x: xs[nd.col] || 0, w: cw, h: cards[nd.id].offsetHeight }; });
    var H = 0;
    perCol.forEach(function (list) {
      var sum = list.reduce(function (a, nd) { return a + P[nd.id].h; }, 0) + Math.max(list.length - 1, 0) * VG;
      H = Math.max(H, sum);
    });
    perCol.forEach(function (list) {
      var k = list.length; if (!k) return;
      var sum = list.reduce(function (a, nd) { return a + P[nd.id].h; }, 0);
      var g = k > 1 ? Math.min(MAXG, (H - sum) / (k - 1)) : 0;
      var y = HEAD + (H - (sum + g * (k - 1))) / 2;
      list.forEach(function (nd) { P[nd.id].y = Math.round(y); cards[nd.id].style.top = Math.round(y) + 'px'; y += P[nd.id].h + g; });
    });
    var TH = HEAD + H + 6;
    box.style.height = TH + 'px';
    s.setAttribute('width', TW); s.setAttribute('height', TH);
    s.setAttribute('viewBox', '0 0 ' + TW + ' ' + TH);

    // ---- ports: spread a card's links along its edge, ordered by the other end
    var outs = {}, ins = {};
    links.forEach(function (k) { (outs[k.from] = outs[k.from] || []).push(k); (ins[k.to] = ins[k.to] || []).push(k); });
    function mid(id) { return P[id].y + P[id].h / 2; }
    function spread(map, other, key) {
      Object.keys(map).forEach(function (id) {
        var list = map[id].slice().sort(function (a, b) { return mid(a[other]) - mid(b[other]); });
        var m = list.length, step = m > 1 ? Math.min(7, (P[id].h - 16) / (m - 1)) : 0;
        list.forEach(function (k, j) { k[key] = mid(id) + (j - (m - 1) / 2) * step; });
      });
    }
    spread(outs, 'to', 'y0'); spread(ins, 'from', 'y1');

    // ---- links
    var lineEls = [], arrowEls = [];
    links.forEach(function (k) {
      var a = P[k.from], b = P[k.to];
      var X0 = a.x + a.w, X1 = b.x - 5, Y0 = k.y0, Y1 = k.y1;
      var c = Math.max(20, (X1 - X0) * 0.5);
      var d = 'M' + X0 + ',' + Y0 + ' C' + (X0 + c) + ',' + Y0 + ' ' + (X1 - c) + ',' + Y1 + ' ' + X1 + ',' + Y1;
      var g = V.svg('g', { 'class': 'vz-fl-link', tabindex: '-1', 'data-tone': k.l.tone || null }, s);
      if (k.l.tone && LINK_TONE[k.l.tone]) g.style.color = LINK_TONE[k.l.tone];
      var dash = k.l.dashed ? '4 4' : (k.l.tone === 'muted' ? '1.5 4' : null);
      var line = V.svg('path', { 'class': 'vz-fl-line', d: d, 'stroke-dasharray': dash }, g);
      var arr = V.svg('path', { 'class': 'vz-fl-arrow', d: 'M' + (X1 - 1) + ',' + (Y1 - 3.5) + ' L' + (X1 + 5) + ',' + Y1 + ' L' + (X1 - 1) + ',' + (Y1 + 3.5) + ' Z' }, g);
      V.svg('path', { 'class': 'vz-fl-hitp', d: d }, g);
      k.g = g; line._dashed = !!dash;
      lineEls.push(line); arrowEls.push(arr);
      V.tip(g, function () {
        return { title: L(byId[k.from].label) + ' → ' + L(byId[k.to].label), rows: [{ value: '', label: k.l.label ? L(k.l.label) : '', color: g.style.color || null, src: k.l.src }] };
      });
      g.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch' && !pinned) apply({ links: [k], nodes: [k.from, k.to] }); });
      g.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'touch' && !pinned) clear(); });
    });

    // ---- highlight every path through a node
    function through(id) {
      var on = [], nodes = [id];
      function walk(start, map, next) {
        var q = [start];
        while (q.length) {
          var cur = q.shift();
          (map[cur] || []).forEach(function (k) {
            if (on.indexOf(k) >= 0) return;
            on.push(k);
            if (nodes.indexOf(k[next]) < 0) nodes.push(k[next]);
            q.push(k[next]);
          });
        }
      }
      walk(id, outs, 'to'); walk(id, ins, 'from');
      return { links: on, nodes: nodes };
    }
    var pinned = null;
    function apply(sel) {
      box.classList.add('hl');
      links.forEach(function (k) { k.g.classList.toggle('on', sel.links.indexOf(k) >= 0); });
      spec.nodes.forEach(function (nd) { cards[nd.id].classList.toggle('on', sel.nodes.indexOf(nd.id) >= 0); });
    }
    function clear(force) {
      if (force) pinned = null;
      if (pinned) return;
      box.classList.remove('hl');
      links.forEach(function (k) { k.g.classList.remove('on'); });
      cardList.forEach(function (c) { c.classList.remove('on'); });
    }
    flows = flows.filter(function (f) { return f.el !== el && f.el.isConnected; });
    flows.push({ el: el, clear: clear });

    function nodeTip(nd) {
      var rows = [];
      if (nd.sub || nd.src) rows.push({ value: '', label: nd.sub ? L(nd.sub) : '', src: nd.src });
      var list = outs[nd.id] && outs[nd.id].length ? outs[nd.id] : (ins[nd.id] || []);
      var isOut = !!(outs[nd.id] && outs[nd.id].length);
      list.slice(0, 8).forEach(function (k) {
        var other = byId[isOut ? k.to : k.from];
        rows.push({ value: isOut ? '→' : '←', label: L(other.label) + (k.l.label ? ' · ' + L(k.l.label) : ''), color: k.l.tone ? LINK_TONE[k.l.tone] : null, src: k.l.src });
      });
      return { title: L(nd.label), rows: rows };
    }
    spec.nodes.forEach(function (nd) {
      var c = cards[nd.id];
      V.tip(c, function () { return nodeTip(nd); });
      c.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch' && !pinned) apply(through(nd.id)); });
      c.addEventListener('pointerleave', function (e) { if (e.pointerType !== 'touch' && !pinned) clear(); });
      c.addEventListener('focus', function () { if (!pinned) apply(through(nd.id)); });
      c.addEventListener('blur', function () { if (!pinned) clear(); });
      c.addEventListener('click', function () {
        if (pinned === nd.id) { clear(true); return; }
        pinned = nd.id; apply(through(nd.id));
      });
    });

    // ---- legend
    if (spec.legend) V.legend(spec.legend, el);

    // ---- enter: cards fade up, then links draw in
    if (ctx.first && !V.reduced) {
      V.stagger(cardList, { from: 'translateY(8px)', step: 24 });
      lineEls.forEach(function (p) {
        if (p._dashed) { p.style.opacity = '0'; return; }
        var len = p.getTotalLength();
        p.style.strokeDasharray = len + ' ' + len;
        p.style.strokeDashoffset = String(len);
      });
      arrowEls.forEach(function (a) { a.style.opacity = '0'; });
      setTimeout(function () {
        requestAnimationFrame(function () {
          var step = Math.min(14, 300 / Math.max(lineEls.length, 1));
          lineEls.forEach(function (p, i) {
            var dl = Math.round(i * step) + 'ms';
            if (p._dashed) { p.style.transition = 'opacity 600ms ' + V.ease + ' ' + dl; p.style.opacity = ''; return; }
            p.style.transition = 'stroke-dashoffset 600ms ' + V.ease + ' ' + dl;
            p.style.strokeDashoffset = '0';
            p.addEventListener('transitionend', function () { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; p.style.transition = ''; }, { once: true });
          });
          arrowEls.forEach(function (a, i) { a.style.transition = 'opacity 200ms ' + V.ease + ' ' + (520 + Math.round(i * step)) + 'ms'; a.style.opacity = ''; });
        });
      }, 200);
    }

    var rows = links.map(function (k) {
      return [L(byId[k.from].label) + ' → ' + L(byId[k.to].label) + (k.l.label ? '（' + L(k.l.label) + '）' : ''), { html: V.cites(k.l.src || []) }];
    });
    if (V.lang() === 'en') rows.forEach(function (r, i) { var k = links[i]; r[0] = L(byId[k.from].label) + ' → ' + L(byId[k.to].label) + (k.l.label ? ' (' + L(k.l.label) + ')' : ''); });
    return { table: { cols: [T.link, T.src], rows: rows } };
  });

  // Field budgets: one group per unit, each with its own linear axis.
  ATLAS_VIZ.register('budget', function (el, spec, V, ctx) {
    var L = V.L, tableRows = [], bars = [], vals = [];
    function pos(f) { return 'calc((100% - 96px) * ' + f.toFixed(4) + ')'; }
    function fmtVal(v, unit) {
      var u = L(unit === 'words' ? T.words : T.chars);
      return V.fmt.int(v) + (V.lang() === 'zh' ? ' ' : ' ') + u;
    }
    (spec.groups || []).forEach(function (g) {
      var items = g.items || []; if (!items.length) return;
      var max = Math.max.apply(null, items.map(function (it) { return it.value; }));
      var ticks = V.scale(0, max, 0, 1).ticks(4);
      var step = ticks.length > 1 ? ticks[1] - ticks[0] : max;
      var top = ticks[ticks.length - 1];
      while (top < max) { top += step; ticks.push(top); }
      var grp = V.h('div', { 'class': 'vz-bd-group' }, null, el);
      var hd = V.h('div', { 'class': 'vz-bd-head' }, null, grp);
      V.h('span', { 'class': 'vz-bd-gl' }, L(g.label), hd);
      V.h('span', { 'class': 'vz-bd-gu' }, L(g.unit === 'words' ? T.wordsAxis : T.charsAxis), hd);
      var list = V.h('div', { 'class': 'vz-bd-list' }, null, grp);
      items.forEach(function (it) {
        var row = V.h('div', { 'class': 'vz-bd-row', 'aria-label': L(it.label) + ': ' + fmtVal(it.value, g.unit) }, null, list);
        V.h('div', { 'class': 'vz-bd-lab' }, L(it.label), row);
        var tr = V.h('div', { 'class': 'vz-bd-track' }, null, row);
        ticks.forEach(function (t) { var gl = V.h('span', { 'class': 'vz-bd-grid' + (t === 0 ? ' base' : '') }, null, tr); gl.style.left = pos(t / top); });
        var bar = V.h('span', { 'class': 'vz-bd-bar' }, null, tr);
        bar.style.width = pos(it.value / top);
        var val = V.h('span', { 'class': 'vz-bd-val' }, fmtVal(it.value, g.unit), tr);
        val.style.left = 'calc(' + pos(it.value / top) + ' + 8px)';
        bars.push(bar); vals.push(val);
        V.tip(row, function () {
          return { title: L(it.label), rows: [{ value: fmtVal(it.value, g.unit), label: it.note ? L(it.note) : '', color: 'var(--c1)', src: it.src }] };
        });
        tableRows.push([L(g.label), L(it.label), fmtVal(it.value, g.unit), it.note ? L(it.note) : '—', { html: V.cites(it.src || []) }]);
      });
      var tk = V.h('div', { 'class': 'vz-bd-row vz-bd-ticks', 'aria-hidden': 'true' }, null, list);
      V.h('div', { 'class': 'vz-bd-lab' }, null, tk);
      var tt = V.h('div', { 'class': 'vz-bd-track' }, null, tk);
      ticks.forEach(function (t) { var sp = V.h('span', null, V.fmt.int(t), tt); sp.style.left = pos(t / top); });
    });
    if (ctx.first && !V.reduced) {
      V.stagger(bars, { from: 'scaleX(0)', origin: 'left center', step: 50 });
      vals.forEach(function (v, i) {
        v.style.opacity = '0';
        requestAnimationFrame(function () { v.style.transition = 'opacity 300ms ' + V.ease + ' ' + (360 + i * 50) + 'ms'; v.style.opacity = ''; });
      });
    }
    return { table: { cols: [T.group, T.field, T.limit, T.note, T.src], rows: tableRows } };
  });
})();
