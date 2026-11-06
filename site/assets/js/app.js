/* Application Atlas — renderer. Layout only: every visible string comes from
   window.ATLAS (site/data/*.js) as {zh, en}. */
(function () {
  'use strict';
  var A = window.ATLAS || {};
  var body = document.body;
  var ROOT = body.getAttribute('data-root') || '';
  var PAGE = body.getAttribute('data-page') || 'index';
  var REVERIFY_DAYS = 90;

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }
  var lang = store('atlas.lang') || ((navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');

  function L(x) {
    if (x == null) return '';
    if (typeof x === 'string' || typeof x === 'number') return String(x);
    return x[lang] != null ? x[lang] : (x.en != null ? x.en : (x.zh || ''));
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  // light inline markup in data: **bold**, `code`, [text](url)
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+|[\w./#-]+)\)/g, function (_, t, u) {
        var href = /^https?:/.test(u) ? u : ROOT + u;
        return '<a href="' + href + '"' + (/^https?:/.test(u) ? ' rel="noopener" target="_blank"' : '') + '>' + t + '</a>';
      });
  }
  function ui(k) { return L((A.ui || {})[k]) || k; }
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }

  var today = new Date();
  function daysSince(d) { var t = Date.parse(d); return isNaN(t) ? 0 : (today - t) / 864e5; }
  function srcOf(id) { return (A.sources || {})[id]; }
  function clsOf(ids) {
    if (!ids || !ids.length) return '';
    var c = ids.map(function (i) { var s = srcOf(i); return s && s.cls; });
    if (c.indexOf('official') >= 0) return 'official';
    if (c.indexOf('secondary') >= 0) return 'secondary';
    return '';
  }
  function cites(ids) {
    if (!ids || !ids.length) return '';
    var stale = false;
    var links = ids.map(function (id) {
      var s = srcOf(id);
      if (s && daysSince(s.accessed) > REVERIFY_DAYS) stale = true;
      var cls = s ? s.cls : '';
      var title = s ? (L(s.title) + ' · ' + s.accessed + ' · ' + cls) : id;
      return '<a href="' + ROOT + 'sources.html#' + encodeURIComponent(id) + '" title="' + esc(title) + '"><span class="dot ' + cls + '"></span>' + esc(id) + '</a>';
    }).join(' ');
    return '<sup class="cite">' + links + (stale ? '<span class="reverify">' + esc(ui('reverify')) + '</span>' : '') + '</sup>';
  }
  var TAGS = { f: 'tagFact', i: 'tagInference', a: 'tagAssumption' };
  function tagHtml(t) { return t && TAGS[t] ? '<span class="tag tag-' + t + '">' + esc(ui(TAGS[t])) + '</span>' : ''; }

  // A content item: {t:{zh,en}, tag:'f'|'i'|'a', src:[ids]} or a plain {zh,en}
  function itemHtml(it) {
    if (it == null) return '';
    if (it.state === 'not-stated') {
      return '<span class="ns">' + esc(ui('notStated')) + (it.checked ? ' (' + esc(ui('checked')) + ' ' + esc(it.checked) + ')' : '') + '</span>' +
        (it.t ? ' ' + md(L(it.t)) : '') + cites(it.src);
    }
    if (typeof it === 'string' || it.zh != null || it.en != null) return md(L(it));
    return tagHtml(it.tag) + md(L(it.t)) + cites(it.src);
  }
  function itemCls(it) { return it && it.src ? clsOf(it.src) : ''; }

  function renderItems(items) {
    var ul = el('ul', { 'class': 'items' });
    items.forEach(function (it) {
      var li = el('li', { 'data-cls': itemCls(it) || null }, itemHtml(it));
      if (it.sub) {
        var inner = renderItems(it.sub); inner.style.margin = '6px 0 0';
        li.appendChild(inner);
      }
      ul.appendChild(li);
    });
    return ul;
  }

  function renderTable(tb) {
    var wrap = el('div', { 'class': 'tablewrap' });
    var t = el('table');
    var thead = el('thead'); var tr = el('tr');
    tb.cols.forEach(function (c) { tr.appendChild(el('th', null, esc(L(c)))); });
    thead.appendChild(tr); t.appendChild(thead);
    var tbody = el('tbody');
    tb.rows.forEach(function (row) {
      var r = el('tr');
      var cells = row.cells || row;
      var rowCls = [];
      cells.forEach(function (c) {
        var cls = '';
        if (c && c.state === 'not-stated') cls = 'c-ns';
        else if (c && c.src) { var k = clsOf(c.src); cls = k ? 'c-' + k : ''; rowCls.push(k); }
        r.appendChild(el('td', { 'class': cls || null }, itemHtml(c)));
      });
      if (row.filter) r.setAttribute('data-filter', row.filter);
      if (rowCls.length && rowCls.every(function (k) { return k === 'secondary'; })) r.setAttribute('data-cls', 'secondary');
      tbody.appendChild(r);
    });
    t.appendChild(tbody); wrap.appendChild(t);
    if (!tb.filter) return wrap;
    // filterable: text box + optional select over row.filter tokens
    var box = el('div');
    var f = el('div', { 'class': 'filters' });
    var inp = el('input', { type: 'search', placeholder: ui('filterPlaceholder'), 'aria-label': ui('filterPlaceholder') });
    f.appendChild(inp);
    var sel = null;
    if (tb.facets) {
      sel = el('select', { 'aria-label': ui('filterFacet') });
      sel.appendChild(el('option', { value: '' }, esc(ui('all'))));
      tb.facets.forEach(function (fc) { sel.appendChild(el('option', { value: fc.v }, esc(L(fc.label)))); });
      f.appendChild(sel);
    }
    function apply() {
      var q = inp.value.trim().toLowerCase(), v = sel ? sel.value : '';
      [].forEach.call(tbody.rows, function (r) {
        var okQ = !q || r.textContent.toLowerCase().indexOf(q) >= 0;
        var okV = !v || (' ' + (r.getAttribute('data-filter') || '') + ' ').indexOf(' ' + v + ' ') >= 0;
        r.style.display = okQ && okV ? '' : 'none';
      });
    }
    inp.addEventListener('input', apply);
    if (sel) sel.addEventListener('change', apply);
    box.appendChild(f); box.appendChild(wrap);
    return box;
  }

  function renderTimeline(list) {
    var tl = el('div', { 'class': 'timeline' });
    tl.appendChild(el('div', { 'class': 'fill' }));
    list.forEach(function (ev) {
      var d = el('div', { 'class': 'tl-item reveal', 'data-cls': ev.src ? clsOf(ev.src) || null : null });
      d.innerHTML = '<div class="tl-date">' + esc(L(ev.date)) + '</div>' +
        '<div>' + tagHtml(ev.tag) + md(L(ev.t)) + cites(ev.src) + '</div>' +
        (ev.who ? '<div class="tl-who">' + esc(L(ev.who)) + '</div>' : '');
      tl.appendChild(d);
    });
    return tl;
  }

  function renderCards(cards) {
    var g = el('div', { 'class': 'grid' });
    cards.forEach(function (c) {
      var d = el(c.href ? 'a' : 'div', { 'class': 'card reveal', href: c.href ? ROOT + c.href : null });
      if (c.href) d.style.color = 'inherit';
      d.innerHTML = (c.big ? '<div class="big">' + esc(L(c.big)) + '</div>' : '') +
        '<h3>' + esc(L(c.h)) + '</h3><p>' + md(L(c.p)) + '</p>' + (c.src ? cites(c.src) : '');
      g.appendChild(d);
    });
    return g;
  }

  function renderSection(s, into) {
    var sec = el('section', { id: s.id || null, 'class': 'reveal' });
    if (s.h) sec.appendChild(el('h2', null, esc(L(s.h))));
    if (s.judgment) sec.appendChild(el('p', { 'class': 'judgment' }, md(L(s.judgment))));
    if (s.intro) sec.appendChild(el('p', { 'class': 'lead' }, md(L(s.intro))));
    if (s.pending) sec.appendChild(el('p', { 'class': 'notice' }, esc(ui('notYetWritten'))));
    if (s.cards) sec.appendChild(renderCards(s.cards));
    if (s.timeline) sec.appendChild(renderTimeline(s.timeline));
    if (s.items) sec.appendChild(renderItems(s.items));
    if (s.table) sec.appendChild(renderTable(s.table));
    if (s.subs) s.subs.forEach(function (x) {
      var h = el('h3', null, esc(L(x.h))); sec.appendChild(h);
      if (x.judgment) sec.appendChild(el('p', { 'class': 'judgment' }, md(L(x.judgment))));
      if (x.intro) sec.appendChild(el('p', { 'class': 'lead' }, md(L(x.intro))));
      if (x.items) sec.appendChild(renderItems(x.items));
      if (x.table) sec.appendChild(renderTable(x.table));
    });
    into.appendChild(sec);
  }

  // ---------- page-specific blocks ----------
  function statusStrip(into) {
    var st = A.status; if (!st) return;
    var strip = el('div', { 'class': 'strip' });
    function stat(k, v, extra) { var d = el('div', { 'class': 'stat' }, '<div class="k">' + esc(ui(k)) + '</div><div class="v">' + esc(v) + '</div>' + (extra || '')); strip.appendChild(d); }
    var c = st.cells, tot = c.official + c.secondary + c.notStated;
    function pct(n) { return tot ? (100 * n / tot).toFixed(1) + '%' : '0'; }
    stat('stUnits', st.units.done + ' / ' + st.units.total, '<div class="bar"><i style="width:' + (st.units.total ? 100 * st.units.done / st.units.total : 0) + '%;background:var(--accent)"></i></div>');
    stat('stCells', String(tot), '<div class="bar"><i style="width:' + pct(c.official) + ';background:var(--official)"></i><i style="width:' + pct(c.secondary) + ';background:var(--secondary)"></i><i style="width:' + pct(c.notStated) + ';background:var(--notstated)"></i></div>');
    stat('stSources', st.sources.total + ' (' + st.sources.official + ' ' + ui('officialShort') + ')');
    stat('stOldest', st.oldestAccess || '—');
    stat('stOpenQ', String(st.openQuestions));
    stat('stNotes', String(st.notes));
    into.appendChild(strip);
  }
  function logEntries(into, n) {
    var lg = A.log; if (!lg) return;
    var list = n ? lg.entries.slice(0, n) : lg.entries;
    if (!list.length) { into.appendChild(el('p', { 'class': 'notice' }, esc(ui('noLog')))); return; }
    list.forEach(function (e) {
      var d = el('div', { 'class': 'card reveal' });
      var title = lang === 'zh' ? (e.title_zh || e.title_en) : (e.title_en || e.title_zh);
      d.innerHTML = '<div class="tl-who">' + esc(e.date) + ' · ' + esc(e.unit) + ' · ' + esc(e.status) + '</div><h3>' + esc(title || e.file) + '</h3>' +
        (n ? '' : (e.done.length ? '<p><strong>' + esc(ui('done')) + '</strong></p><ul>' + e.done.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '') +
          (e.notDone.length ? '<p><strong>' + esc(ui('notDone')) + '</strong></p><ul>' + e.notDone.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '')) +
        '<p><a href="https://github.com/Timmy97-TW/application-atlas/blob/main/' + esc(e.file) + '" target="_blank" rel="noopener">' + esc(e.file) + '</a></p>';
      d.style.marginBottom = '10px';
      into.appendChild(d);
    });
  }
  function questions(into) {
    var lg = A.log; if (!lg) return;
    var tb = { cols: [ui('qId'), ui('qDate'), ui('qState'), ui('qText'), ui('qAnswer')], rows: lg.questions.map(function (q) { return [q.id, q.date + ' · ' + q.unit, q.state + (q.stateNote ? ' ' + q.stateNote : ''), q.q, q.a || '—']; }) };
    into.appendChild(renderTable(tb));
  }
  function sourcesList(into) {
    var s = A.sources || {};
    var groups = {};
    Object.keys(s).sort().forEach(function (id) { var g = s[id].group || 'other'; (groups[g] = groups[g] || []).push(id); });
    var gl = A.sourceGroups || {};
    Object.keys(groups).sort().forEach(function (g) {
      into.appendChild(el('h2', { id: 'g-' + g }, esc(L(gl[g]) || g) + ' (' + groups[g].length + ')'));
      groups[g].forEach(function (id) {
        var x = s[id];
        var d = el('div', { 'class': 'src', id: id, 'data-cls': x.cls });
        var stale = daysSince(x.accessed) > REVERIFY_DAYS;
        d.innerHTML = '<span class="id">' + esc(id) + '</span><span class="dot ' + esc(x.cls) + '"></span>' +
          '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(L(x.title) || x.url) + '</a> · ' +
          esc(ui('accessed')) + ' ' + esc(x.accessed) + ' · ' + esc(ui(x.cls === 'official' ? 'official' : 'secondary')) +
          (stale ? ' <span class="reverify">' + esc(ui('reverify')) + '</span>' : '') +
          (x.note ? '<div class="tl-who">' + md(L(x.note)) + '</div>' : '');
        into.appendChild(d);
      });
    });
  }

  // ---------- chrome ----------
  function header() {
    var top = el('header', { 'class': 'top' });
    var inner = el('div', { 'class': 'top-in' });
    inner.appendChild(el('a', { 'class': 'brand', href: ROOT + 'index.html' }, esc(ui('brand'))));
    var nav = el('nav', { 'class': 'nav', 'aria-label': ui('navLabel') });
    (A.nav || []).forEach(function (n) {
      nav.appendChild(el('a', { href: ROOT + n.href, 'class': n.page === PAGE ? 'on' : null }, esc(L(n.label))));
    });
    inner.appendChild(nav);
    var tg = el('div', { 'class': 'toggles' });
    function toggle(key, label, cls) {
      var on = store(key) === '1';
      var b = el('button', { 'class': 'tg', 'aria-pressed': String(on), type: 'button' }, esc(ui(label)));
      if (on) body.classList.add(cls);
      b.addEventListener('click', function () {
        on = !on; store(key, on ? '1' : '0'); b.setAttribute('aria-pressed', String(on)); body.classList.toggle(cls, on);
      });
      tg.appendChild(b);
    }
    toggle('atlas.official', 'officialOnly', 'official-only');
    toggle('atlas.brief', 'briefMode', 'brief');
    var lb = el('button', { 'class': 'tg', type: 'button', 'aria-label': ui('langLabel') }, lang === 'zh' ? 'EN' : '中文');
    lb.addEventListener('click', function () { store('atlas.lang', lang === 'zh' ? 'en' : 'zh'); location.reload(); });
    tg.appendChild(lb);
    inner.appendChild(tg);
    top.appendChild(inner);
    body.insertBefore(top, body.firstChild);
  }
  function footer() {
    var f = el('footer');
    f.innerHTML = '<div class="legend"><span><span class="dot official"></span>' + esc(ui('official')) + '</span><span><span class="dot secondary"></span>' + esc(ui('secondary')) + '</span><span><span class="dot"></span>' + esc(ui('notStated')) + '</span>' +
      '<span>' + tagHtml('f') + tagHtml('i') + tagHtml('a') + '</span></div><p>' + md(ui('footer')) + '</p>';
    body.appendChild(f);
  }

  function render() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant-TW' : 'en';
    header();
    var main = document.getElementById('main');
    var P = (A.pages || {})[PAGE];
    if (P) {
      document.title = L(P.title) + ' · ' + ui('brand');
      if (P.mock) main.appendChild(el('p', { 'class': 'mocklabel' }, esc(ui('mockLabel'))));
      if (P.persona) main.appendChild(el('p', { 'class': 'mocklabel' }, esc(ui('personaLabel'))));
      main.appendChild(el('h1', null, esc(L(P.title))));
      if (P.judgment) main.appendChild(el('p', { 'class': 'judgment' }, md(L(P.judgment))));
      if (P.intro) main.appendChild(el('p', { 'class': 'lead' }, md(L(P.intro))));
      if (P.pending) main.appendChild(el('p', { 'class': 'notice' }, esc(ui('notYetWritten'))));
    }
    if (PAGE === 'index') {
      var sh = el('section', { 'class': 'reveal' }); sh.appendChild(el('h2', null, esc(ui('statusH')))); statusStrip(sh); main.appendChild(sh);
    }
    if (P && P.sections) P.sections.forEach(function (s) { renderSection(s, main); });
    if (PAGE === 'index') {
      var lh = el('section', { 'class': 'reveal' }); lh.appendChild(el('h2', null, esc(ui('recentLog')))); logEntries(lh, 3); main.appendChild(lh);
    }
    if (PAGE === 'log') {
      var a = el('section'); a.appendChild(el('h2', null, esc(ui('runs')))); logEntries(a); main.appendChild(a);
      var b = el('section'); b.appendChild(el('h2', null, esc(ui('questionsH')))); questions(b); main.appendChild(b);
    }
    if (PAGE === 'sources') sourcesList(main);
    if (window.ATLAS_PAGE_HOOK) window.ATLAS_PAGE_HOOK(main, { L: L, ui: ui, md: md, esc: esc, cites: cites, el: el, lang: lang, store: store });
    footer();
    motion();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  }

  function motion() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) { [].forEach.call(els, function (e) { e.classList.add('in'); }); }
    else {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -5% 0px' });
      [].forEach.call(els, function (e) { io.observe(e); });
    }
    var tls = document.querySelectorAll('.timeline');
    if (!tls.length) return;
    function fill() {
      var vh = window.innerHeight;
      [].forEach.call(tls, function (tl) {
        var r = tl.getBoundingClientRect();
        var h = Math.max(0, Math.min(r.height, vh * 0.6 - r.top));
        tl.querySelector('.fill').style.height = (reduce ? r.height : h) + 'px';
      });
    }
    window.addEventListener('scroll', fill, { passive: true });
    window.addEventListener('resize', fill);
    fill();
  }

  window.ATLAS_UTIL = { L: L, md: md, esc: esc, cites: cites, ui: ui, el: el, lang: function () { return lang; }, store: store, itemHtml: itemHtml, renderTable: renderTable, renderItems: renderItems };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
