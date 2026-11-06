/* Prerequisite graph for the process page's lead-in section. Layout only:
   nodes, edges, column labels and caption come from
   window.ATLAS.pages.process.sections[id=leadin].graph (site/data/p-process.js).
   Our own inline SVG; no libraries. Hidden in brief mode via class "detail". */
(function () {
  'use strict';
  if (window.ATLAS_PAGE_HOOK) return;
  window.ATLAS_PAGE_HOOK = function (main, U) {
    var P = ((window.ATLAS || {}).pages || {}).process;
    if (!P || document.body.getAttribute('data-page') !== 'process') return;
    var sec = (P.sections || []).filter(function (x) { return x.id === 'leadin'; })[0];
    var G = sec && sec.graph;
    var host = document.getElementById('leadin');
    if (!G || !host) return;
    var UT = window.ATLAS_UTIL || U;
    var L = UT.L, esc = UT.esc;
    var lang = typeof UT.lang === 'function' ? UT.lang() : UT.lang;

    // geometry
    var NODE_W = 168, COL_W = 214, PAD = 8, HEAD = 34, GAP = 12, LINE = 16, FONT = 13, INNER = NODE_W - 18;
    var ncols = (G.cols || []).length || 4;

    // rough text width: CJK and full-width ~1 em, Latin ~0.56 em
    function cw(ch) { return /[⺀-鿿豈-﫿＀-￯　-〿]/.test(ch) ? FONT : (/[A-Z0-9]/.test(ch) ? FONT * 0.64 : FONT * 0.54); }
    function width(s) { var w = 0; for (var i = 0; i < s.length; i++) w += cw(s[i]); return w; }
    function wrap(text) {
      var toks = text.match(/[⺀-鿿豈-﫿＀-￯　-〿]|[^\s⺀-鿿豈-﫿＀-￯　-〿]+|\s+/g) || [];
      var lines = [], cur = '';
      toks.forEach(function (t) {
        if (/^\s+$/.test(t)) { if (cur) cur += ' '; return; }
        if (cur && width(cur + t) > INNER) { lines.push(cur.trim()); cur = ''; }
        cur += t;
      });
      if (cur.trim()) lines.push(cur.trim());
      return lines;
    }

    // place nodes column by column, each column centred vertically
    var byId = {}, cols = [];
    for (var c = 0; c < ncols; c++) cols.push([]);
    G.nodes.forEach(function (n) {
      var lines = wrap(L(n.label));
      var o = { n: n, lines: lines, h: 14 + lines.length * LINE };
      byId[n.id] = o; (cols[n.col] = cols[n.col] || []).push(o);
    });
    var colH = cols.map(function (list) { return list.reduce(function (a, o) { return a + o.h + GAP; }, -GAP); });
    var maxH = Math.max.apply(null, colH);
    cols.forEach(function (list, ci) {
      var y = HEAD + (maxH - colH[ci]) / 2;
      list.forEach(function (o) { o.x = PAD + ci * COL_W; o.y = y; y += o.h + GAP; });
    });
    var W = PAD * 2 + (ncols - 1) * COL_W + NODE_W, H = HEAD + maxH + PAD;

    var out = [];
    var tid = 'leadin-graph-title';
    out.push('<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="' + tid + '" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" style="display:block;font:' + FONT + 'px var(--font, sans-serif)">');
    out.push('<title id="' + tid + '">' + esc(L(G.caption)) + '</title>');
    out.push('<defs><marker id="lg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--accent)"/></marker></defs>');

    // column headers and guides
    (G.cols || []).forEach(function (lab, ci) {
      var x = PAD + ci * COL_W;
      out.push('<text x="' + (x + NODE_W / 2) + '" y="18" text-anchor="middle" style="fill:var(--muted);font-weight:600">' + esc(L(lab)) + '</text>');
      out.push('<line x1="' + (x + 4) + '" y1="26" x2="' + (x + NODE_W - 4) + '" y2="26" style="stroke:var(--line);stroke-width:2"/>');
    });

    // edges first, under the nodes
    (G.edges || []).forEach(function (e) {
      var a = byId[e[0]], b = byId[e[1]];
      if (!a || !b) return;
      var x1 = a.x + NODE_W, y1 = a.y + a.h / 2, x2 = b.x - 2, y2 = b.y + b.h / 2, dx = Math.max(30, (x2 - x1) / 2);
      out.push('<path class="lg-edge" data-from="' + esc(e[0]) + '" data-to="' + esc(e[1]) + '" d="M' + x1 + ',' + y1 + ' C' + (x1 + dx) + ',' + y1 + ' ' + (x2 - dx) + ',' + y2 + ' ' + x2 + ',' + y2 + '" marker-end="url(#lg-arrow)" style="fill:none;stroke:var(--accent);stroke-opacity:.38;stroke-width:1.4"/>');
    });

    // nodes
    G.nodes.forEach(function (n) {
      var o = byId[n.id], last = n.col === ncols - 1;
      out.push('<g class="lg-node" data-id="' + esc(n.id) + '" tabindex="0">');
      out.push('<title>' + esc(L(n.label)) + (n.src && n.src.length ? ' · ' + esc(n.src.join(', ')) : '') + '</title>');
      out.push('<rect x="' + o.x + '" y="' + o.y + '" width="' + NODE_W + '" height="' + o.h + '" rx="8" ry="8" style="fill:' + (last ? 'var(--accent-soft, var(--bg))' : 'var(--bg)') + ';stroke:' + (last ? 'var(--accent)' : 'var(--line)') + ';stroke-width:1.5"/>');
      o.lines.forEach(function (ln, i) {
        out.push('<text x="' + (o.x + 9) + '" y="' + (o.y + 7 + LINE * (i + 1) - 3) + '" style="fill:var(--fg)">' + esc(ln) + '</text>');
      });
      out.push('</g>');
    });
    out.push('</svg>');

    var wrapEl = document.createElement('div');
    wrapEl.className = 'detail';
    wrapEl.setAttribute('lang', lang === 'zh' ? 'zh-Hant-TW' : 'en');
    wrapEl.style.cssText = 'overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--line);border-radius:var(--radius, 10px);padding:10px;margin:10px 0 18px;background:var(--bg)';
    wrapEl.innerHTML = out.join('');
    var cap = document.createElement('p');
    cap.className = 'detail';
    cap.style.cssText = 'font-size:13px;color:var(--muted);margin:-10px 0 16px';
    cap.textContent = L(G.caption);

    var j = host.querySelector('.judgment');
    var after = j ? j.nextSibling : host.firstChild;
    host.insertBefore(wrapEl, after);
    host.insertBefore(cap, wrapEl.nextSibling);

    // highlight a node's edges on hover or focus
    var edges = wrapEl.querySelectorAll('.lg-edge');
    function mark(id, on) {
      [].forEach.call(edges, function (p) {
        var hit = p.getAttribute('data-from') === id || p.getAttribute('data-to') === id;
        p.style.strokeOpacity = on ? (hit ? '1' : '.12') : '.38';
        p.style.strokeWidth = on && hit ? '2.2' : '1.4';
      });
    }
    [].forEach.call(wrapEl.querySelectorAll('.lg-node'), function (g) {
      var id = g.getAttribute('data-id');
      g.addEventListener('mouseenter', function () { mark(id, true); });
      g.addEventListener('mouseleave', function () { mark(id, false); });
      g.addEventListener('focus', function () { mark(id, true); });
      g.addEventListener('blur', function () { mark(id, false); });
    });
  };
})();
