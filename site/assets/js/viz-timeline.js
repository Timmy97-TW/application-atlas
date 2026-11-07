/* Year timeline with swimlanes, school filter, zoom and a today marker;
   plus a deadline-density strip. Data: window.ATLAS.viz.deadlines. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  var T = {
    all: { zh: '全部學校', en: 'All schools' },
    fit: { zh: '整年', en: 'Year' },
    season: { zh: '申請季', en: 'Season' },
    today: { zh: '今天', en: 'Today' },
    schools: { zh: '所', en: 'schools' },
    events: { zh: '件', en: 'items' },
    approx: { zh: '大約時間（來源只給出區間）', en: 'Approximate (source gives a window)' },
    noYear: { zh: '頁面沒有印出年份', en: 'Page printed no year' },
    cDate: { zh: '日期', en: 'Date' }, cSchool: { zh: '學校', en: 'School' }, cEvent: { zh: '事項', en: 'Item' }, cSrc: { zh: '來源', en: 'Sources' },
    shared: { zh: '各校通用', en: 'All schools' },
    peak: { zh: '當天截止', en: 'due that day' }
  };

  ATLAS_VIZ.register('timeline', function (el, spec, V, ctx) {
    var D = V.data().deadlines; if (!D) return;
    var L = V.L, fmt = V.fmt;
    var state = el._state || (el._state = { pick: [], zoom: spec.zoom || 'fit' });
    var from = V.dateNum(spec.from || '2026-08-01'), to = V.dateNum(spec.to || '2027-07-31');
    var lanes = D.lanes;
    var evs = D.events.concat((D.shared || []).map(function (e) { var c = Object.assign({}, e); c.school = null; return c; }))
      .filter(function (e) { var s = V.dateNum(e.start); return s >= from && s <= to; });

    // controls: zoom segmented + school chips
    var ctr = V.h('div', { 'class': 'vz-controls' }, null, el);
    var seg = V.h('div', { 'class': 'vz-seg', role: 'group' }, null, ctr);
    [['fit', T.fit], ['season', T.season]].forEach(function (z) {
      var b = V.h('button', { type: 'button', 'aria-pressed': String(state.zoom === z[0]) }, L(z[1]), seg);
      b.addEventListener('click', function () { state.zoom = z[0]; redraw(); });
    });
    var chips = V.h('div', { 'class': 'vz-chips vz-scroll', style: 'flex:1 1 320px;margin:0;flex-wrap:nowrap;padding:2px 8px' }, null, ctr);
    var allB = V.h('button', { 'class': 'vz-chip', type: 'button', 'aria-pressed': String(!state.pick.length) }, L(T.all), chips);
    allB.addEventListener('click', function () { state.pick = []; redraw(); });
    D.schools.forEach(function (s) {
      var b = V.h('button', { 'class': 'vz-chip', type: 'button', 'aria-pressed': String(state.pick.indexOf(s) >= 0), style: 'white-space:nowrap' }, s, chips);
      b.addEventListener('click', function () {
        var i = state.pick.indexOf(s); if (i >= 0) state.pick.splice(i, 1); else state.pick.push(s);
        redraw();
      });
    });

    var frame = V.h('div', { 'class': 'vz-tl' }, null, el);
    var labels = V.h('div', { 'class': 'vz-tl-labels' }, null, frame);
    var scroller = V.h('div', { 'class': 'vz-scroll vz-tl-scroll' }, null, frame);

    var laneH = 46, top = 34, bottom = 10;
    var days = (to - from) / V.day;
    var viewW = Math.max(scroller.clientWidth || el.clientWidth - 120, 280);
    var W = state.zoom === 'fit' ? Math.max(viewW, 560) : Math.max(viewW * 2.6, 1400);
    var H = top + lanes.length * laneH + bottom;
    var x = V.scale(from, to, 16, W - 16);
    var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': L(spec.title) }, scroller);

    // lane bands + labels
    lanes.forEach(function (ln, i) {
      V.svg('rect', { x: 0, y: top + i * laneH, width: W, height: laneH, fill: i % 2 ? 'transparent' : 'rgba(16,24,40,.025)' }, s);
      var lb = V.h('div', { 'class': 'vz-tl-lab', style: 'top:' + (top + i * laneH) + 'px;height:' + laneH + 'px' }, null, labels);
      var sw = V.h('span', { 'class': 'vz-sw dot' }, null, lb); sw.style.background = V.color(i);
      V.h('span', null, L(ln.label), lb);
    });
    labels.style.height = H + 'px';

    // month grid
    var g = V.svg('g', { 'class': 'vz-grid' }, s);
    var d0 = new Date(from);
    for (var m = 0; m < 13; m++) {
      var md = Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + m, 1);
      if (md > to) break;
      var xx = Math.round(x(md)) + 0.5;
      V.svg('line', { x1: xx, x2: xx, y1: top - 6, y2: H - bottom }, g);
      var mo = new Date(md).getUTCMonth();
      var t = V.svg('text', { x: xx + 6, y: top - 12, 'class': mo === 0 ? 'strong' : null }, s);
      t.textContent = fmt.month(mo) + (mo === 0 ? ' ' + new Date(md).getUTCFullYear() : '');
    }

    // today
    var today = V.dateNum(D.today || new Date().toISOString().slice(0, 10));
    if (today >= from && today <= to) {
      var tx = Math.round(x(today)) + 0.5;
      V.svg('line', { x1: tx, x2: tx, y1: top - 4, y2: H - bottom, stroke: 'var(--accent)', 'stroke-width': 1.5, 'stroke-dasharray': '3 3' }, s);
      var tl = V.svg('text', { x: tx, y: H - 1, 'text-anchor': 'middle', fill: 'var(--accent)', style: 'fill:var(--accent);font-weight:600' }, s);
      tl.textContent = L(T.today);
    }

    // group events per lane/day
    var groups = {};
    evs.forEach(function (e) {
      var k = e.lane + '|' + e.start + '|' + (e.end || '');
      (groups[k] = groups[k] || []).push(e);
    });
    var marks = [];
    var lastX = {}, dodge = {};
    var picked = state.pick;
    Object.keys(groups).sort(function (a, b) { return a.split('|')[1] < b.split('|')[1] ? -1 : 1; }).forEach(function (k) {
      var list = groups[k], e = list[0];
      var li = lanes.findIndex(function (l) { return l.id === e.lane; }); if (li < 0) return;
      var cy = top + li * laneH + laneH / 2;
      // dodge: a point mark within 12px of the previous point in its lane steps up or down
      if (!e.end) {
        var px0 = x(V.dateNum(e.start)), last = lastX[li];
        if (last != null && px0 - last.x < 12) { dodge[li] = (dodge[li] || 0) + 1; cy += [0, -11, 11][dodge[li] % 3]; } else dodge[li] = 0;
        lastX[li] = { x: px0 };
      }
      var on = !picked.length || list.some(function (v) { return v.school == null || picked.indexOf(v.school) >= 0; });
      var gg = V.svg('g', { 'class': 'vz-tl-mark' + (on ? ' vz-on' : ''), 'aria-label': fmt.date(e.start) }, s);
      var col = V.color(li);
      var x0 = x(V.dateNum(e.start));
      if (e.end) {
        var x1 = Math.max(x(V.dateNum(e.end)), x0 + 6);
        V.svg('rect', { x: x0 - 2, y: cy - 12, width: x1 - x0 + 4, height: 24, fill: 'transparent' }, gg);
        V.svg('rect', { x: x0, y: cy - 3, width: x1 - x0, height: 6, rx: 3, fill: col, opacity: e.approx ? 0.32 : 0.8 }, gg);
      } else {
        V.svg('circle', { cx: x0, cy: cy, r: 13, fill: 'transparent' }, gg);
        var n = list.length;
        var r = n > 1 ? Math.min(5 + Math.sqrt(n) * 2.2, 13) : 5;
        V.svg('circle', { cx: x0, cy: cy, r: r, fill: col, stroke: 'var(--viz-surface)', 'stroke-width': 2, opacity: e.approx ? 0.55 : 1 }, gg);
        if (n > 2) { var tt = V.svg('text', { x: x0, y: cy + 3.5, 'text-anchor': 'middle', style: 'fill:#fff;font-size:10px;font-weight:700' }, gg); tt.textContent = n; }
      }
      V.tip(gg, function () {
        var rows = list.filter(function (v) { return !picked.length || v.school == null || picked.indexOf(v.school) >= 0; }).slice(0, 12).map(function (v) {
          return { value: v.school || L(T.shared), label: L(v.label) + (v.approx ? ' · ' + L(T.approx) : '') + (v.noYear ? ' · ' + L(T.noYear) : ''), color: col, src: v.src };
        });
        var more = list.length - rows.length;
        if (more > 0) rows.push({ value: '+' + more, label: '' });
        return { title: fmt.date(e.start) + (e.end ? ' – ' + fmt.date(e.end) : '') + ' · ' + L(lanes[li].label), rows: rows };
      });
      marks.push(gg);
    });
    if (picked.length) s.classList.add('vz-dim');
    if (ctx.first) V.stagger(marks, { from: 'scale(.4)', origin: 'center', step: 6 });

    // scroll to today in season zoom
    if (state.zoom === 'season') requestAnimationFrame(function () { scroller.scrollLeft = Math.max(0, x(today) - viewW * 0.25); });

    function redraw() { ctx.redraw(); }

    // table view rows
    var rows = evs.slice().sort(function (a, b) { return a.start < b.start ? -1 : 1; }).map(function (e) {
      return [e.start + (e.end ? ' – ' + e.end : ''), e.school || L(T.shared), L(e.label), { html: V.cites(e.src || []) }];
    });
    return { table: { cols: [T.cDate, T.cSchool, T.cEvent, T.cSrc], rows: rows } };
  });

  // Deadline density: how many application deadlines fall on each day
  ATLAS_VIZ.register('density', function (el, spec, V, ctx) {
    var D = V.data().deadlines; if (!D) return;
    var L = V.L, fmt = V.fmt;
    var from = V.dateNum(spec.from || '2026-10-01'), to = V.dateNum(spec.to || '2027-01-31');
    var kinds = spec.kinds || ['ED', 'EA', 'REA', 'SCEA', 'EDII', 'RD', 'UC', 'priority'];
    var counts = {};
    D.events.forEach(function (e) {
      if (e.lane !== 'apply' || kinds.indexOf(e.kind) < 0 || e.approx) return;
      // a filing window counts on its closing day, not its opening day
      var dd = e.end || e.start;
      var t = V.dateNum(dd); if (t < from || t > to) return;
      (counts[dd] = counts[dd] || []).push(e);
    });
    var keys = Object.keys(counts).sort();
    var W = Math.max(el.clientWidth, 300), H = 190, top = 28, bot = 26;
    var max = Math.max.apply(null, keys.map(function (k) { return counts[k].length; }).concat([1]));
    var x = V.scale(from, to, 4, W - 4), y = V.scale(0, max, H - bot, top);
    var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': L(spec.title) }, el);
    var g = V.svg('g', { 'class': 'vz-grid' }, s);
    var d0 = new Date(from);
    for (var m = 0; m < 6; m++) {
      var md = Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + m, 1); if (md > to) break;
      var xx = Math.round(x(md)) + 0.5;
      V.svg('line', { x1: xx, x2: xx, y1: top - 8, y2: H - bot }, g);
      var t = V.svg('text', { x: xx + 5, y: H - 8 }, s); t.textContent = fmt.month(new Date(md).getUTCMonth());
    }
    V.svg('line', { x1: 0, x2: W, y1: H - bot + 0.5, y2: H - bot + 0.5, 'class': 'vz-base' }, s);
    var bw = Math.max(3, Math.min(10, (W - 8) / ((to - from) / V.day) - 1));
    var bars = [];
    var placed = [];
    var top3 = keys.slice().sort(function (a, b) { return counts[b].length - counts[a].length; }).slice(0, spec.labels || 4);
    keys.slice().sort(function (a, b) { return counts[b].length - counts[a].length; }).forEach(function (k) {
      var n = counts[k].length, cx = x(V.dateNum(k));
      var gg = V.svg('g', null, s);
      V.svg('rect', { x: cx - 8, y: top, width: 16, height: H - bot - top, fill: 'transparent' }, gg);
      var bar = V.svg('rect', { x: cx - bw / 2, y: y(n), width: bw, height: H - bot - y(n), rx: Math.min(4, bw / 2), fill: 'var(--c1)' }, gg);
      bars.push(bar);
      if (top3.indexOf(k) >= 0 && placed.every(function (px) { return Math.abs(px - cx) > 64; })) {
        placed.push(cx);
        var lab = V.svg('text', { x: cx, y: y(n) - 7, 'text-anchor': 'middle', 'class': 'strong' }, gg);
        lab.textContent = fmt.date(k) + ' · ' + n;
      }
      V.tip(gg, function () {
        return { title: fmt.date(k) + ' · ' + n + ' ' + L(T.peak), rows: counts[k].map(function (e) { return { value: e.school, label: L(e.label), color: 'var(--c1)', src: e.src }; }) };
      });
    });
    if (ctx.first) V.stagger(bars, { from: 'scaleY(0)', origin: 'center bottom', step: 10 });
    return { table: { cols: [T.cDate, T.cSchool, T.cEvent], rows: keys.map(function (k) { return [k, counts[k].map(function (e) { return e.school; }).join(', '), String(counts[k].length)]; }) } };
  });

})();

/* Year ribbon for the overview: a track from August to July that fills up to
   today, with milestone pins labelled above and below. spec.points carries the
   milestones as {date, end?, label:{zh,en}, sub:{zh,en}, src}. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  ATLAS_VIZ.register('ribbon', function (el, spec, V, ctx) {
    var L = V.L, fmt = V.fmt;
    var D = V.data().deadlines || {};
    var from = V.dateNum(spec.from || '2026-08-01'), to = V.dateNum(spec.to || '2027-06-30');
    var W = Math.max(el.clientWidth, 300), narrow = W < 560;
    var H = narrow ? 210 : 176, ty = H / 2;
    var x = V.scale(from, to, 14, W - 14);
    var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': L(spec.title) }, el);
    var defs = V.svg('defs', null, s);
    var gr = V.svg('linearGradient', { id: 'vzRib', x1: '0', x2: '1', y1: '0', y2: '0' }, defs);
    V.svg('stop', { offset: '0', 'stop-color': '#9ec5f4' }, gr);
    V.svg('stop', { offset: '1', 'stop-color': '#1f5fbf' }, gr);
    // track
    V.svg('rect', { x: x(from), y: ty - 5, width: x(to) - x(from), height: 10, rx: 5, fill: '#eceef2' }, s);
    var today = V.dateNum(D.today || new Date().toISOString().slice(0, 10));
    var fillW = Math.max(0, Math.min(x(today), x(to)) - x(from));
    var fill = V.svg('rect', { x: x(from), y: ty - 5, width: fillW, height: 10, rx: 5, fill: 'url(#vzRib)' }, s);
    if (ctx.first && !V.reduced) {
      fill.setAttribute('width', 0);
      requestAnimationFrame(function () { fill.style.transition = 'width 900ms ' + V.ease; fill.setAttribute('width', fillW); });
    }
    // months
    var d0 = new Date(from);
    for (var m = 0; m < 12; m++) {
      var md = Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + m, 1); if (md > to) break;
      if (narrow && m % 2) continue;
      var t = V.svg('text', { x: x(md), y: ty + 26 + (narrow ? 0 : 0), 'text-anchor': 'middle', style: 'font-size:11px' }, s);
      t.textContent = fmt.month(new Date(md).getUTCMonth());
    }
    // today knob
    if (today >= from && today <= to) {
      V.svg('circle', { cx: x(today), cy: ty, r: 9, fill: '#fff', stroke: 'var(--accent)', 'stroke-width': 3 }, s);
    }
    // pins, alternating above / below; on narrow screens labels shorten to dates
    var pins = [];
    (spec.points || []).forEach(function (p, i) {
      var px = x(V.dateNum(p.date)), up = i % 2 === 0;
      var g = V.svg('g', null, s);
      var y1 = up ? ty - 12 : ty + 12, y2 = up ? ty - 40 : ty + 46;
      V.svg('line', { x1: px, x2: px, y1: y1, y2: y2, stroke: 'var(--viz-base)', 'stroke-width': 1 }, g);
      if (p.end) V.svg('rect', { x: px, y: ty - 2, width: Math.max(4, x(V.dateNum(p.end)) - px), height: 4, rx: 2, fill: '#fff', opacity: .9 }, g);
      V.svg('circle', { cx: px, cy: ty, r: 5, fill: V.dateNum(p.date) <= today ? 'var(--accent)' : '#fff', stroke: 'var(--accent)', 'stroke-width': 2 }, g);
      V.svg('rect', { x: px - 36, y: Math.min(y1, y2) - 30, width: 72, height: Math.abs(y2 - y1) + 44, fill: 'transparent' }, g);
      var anchor = px < 60 ? 'start' : (px > W - 60 ? 'end' : 'middle');
      var lt = V.svg('text', { x: px, y: up ? y2 - 18 : y2 + 14, 'text-anchor': anchor, 'class': 'strong', style: 'font-size:13px' }, g);
      lt.textContent = L(p.big || { zh: fmt.date(p.date), en: fmt.date(p.date) });
      if (!narrow) {
        var st = V.svg('text', { x: px, y: up ? y2 - 4 : y2 + 28, 'text-anchor': anchor, style: 'font-size:11.5px' }, g);
        st.textContent = L(p.label);
      }
      V.tip(g, function () { return { title: L(p.label), rows: [{ value: fmt.date(p.date) + (p.end ? ' – ' + fmt.date(p.end) : ''), label: L(p.sub || ''), src: p.src }] }; });
      pins.push(g);
    });
    if (ctx.first) V.stagger(pins, { from: 'translateY(4px)', step: 70 });
    return { table: { cols: [{ zh: '日期', en: 'Date' }, { zh: '事項', en: 'Milestone' }, { zh: '來源', en: 'Sources' }], rows: (spec.points || []).map(function (p) { return [p.date + (p.end ? ' – ' + p.end : ''), L(p.label), { html: V.cites(p.src || []) }]; }) } };
  });
})();

/* Upcoming: the next application deadlines after today, as countdown cards.
   Stats: headline numbers from status.js with a short count-up. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  var T = {
    days: { zh: '天後', en: 'days' }, today: { zh: '今天', en: 'today' }, tomorrow: { zh: '明天', en: 'tomorrow' },
    more: { zh: '所學校', en: 'schools' }, none: { zh: '本季已無申請截止', en: 'No application deadlines left this cycle' }
  };
  ATLAS_VIZ.register('upcoming', function (el, spec, V, ctx) {
    var D = V.data().deadlines; if (!D) return;
    var L = V.L, fmt = V.fmt;
    var today = V.dateNum(D.today || new Date().toISOString().slice(0, 10));
    var lanes = spec.lanes || ['apply'];
    var byDay = {};
    D.events.forEach(function (e) {
      if (lanes.indexOf(e.lane) < 0 || e.approx) return;
      var d = e.end || e.start, t = V.dateNum(d);
      if (t < today) return;
      (byDay[d] = byDay[d] || []).push(e);
    });
    var days = Object.keys(byDay).sort().slice(0, spec.count || 4);
    var row = V.h('div', { 'class': 'vz-up' }, null, el);
    if (!days.length) { V.h('p', { 'class': 'vz-sub' }, L(T.none), el); return; }
    var cards = days.map(function (d) {
      var list = byDay[d], n = Math.round((V.dateNum(d) - today) / V.day);
      var c = V.h('div', { 'class': 'vz-up-card', tabindex: '0' }, null, row);
      var top = V.h('div', { 'class': 'vz-up-n' }, null, c);
      V.h('span', { 'class': 'vz-up-big' }, n === 0 ? L(T.today) : n === 1 ? L(T.tomorrow) : String(n), top);
      if (n > 1) V.h('span', { 'class': 'vz-up-unit' }, L(T.days), top);
      V.h('div', { 'class': 'vz-up-date' }, fmt.date(d), c);
      var names = list.map(function (e) { return e.school; }).filter(Boolean);
      var uniq = names.filter(function (s, i) { return names.indexOf(s) === i; });
      V.h('div', { 'class': 'vz-up-who' }, uniq.slice(0, 4).join(' · ') + (uniq.length > 4 ? ' +' + (uniq.length - 4) : ''), c);
      V.tip(c, function () { return { title: fmt.date(d), rows: list.map(function (e) { return { value: e.school, label: L(e.label), color: 'var(--c1)', src: e.src }; }) }; });
      return c;
    });
    if (ctx.first) V.stagger(cards, { from: 'translateY(10px)', step: 80 });
    return { table: { cols: [{ zh: '日期', en: 'Date' }, { zh: '學校', en: 'Schools' }], rows: days.map(function (d) { return [d, byDay[d].map(function (e) { return e.school + ' (' + L(e.label) + ')'; }).join('; ')]; }) } };
  });

  ATLAS_VIZ.register('stats', function (el, spec, V, ctx) {
    var st = (window.ATLAS || {}).status; if (!st) return;
    var L = V.L;
    var items = [
      { v: 30, l: { zh: '所美國學校（完整深度）', en: 'US schools at full depth' } },
      { v: st.sources.total, l: { zh: '筆引用來源', en: 'cited sources' } },
      { v: Math.round(100 * st.sources.official / Math.max(st.sources.total, 1)), suffix: '%', l: { zh: '來自官方', en: 'from official pages' } },
      { v: st.notes, l: { zh: '份研究筆記', en: 'research notes' } }
    ];
    var row = V.h('div', { 'class': 'vz-stats' }, null, el);
    items.forEach(function (it) {
      var c = V.h('div', { 'class': 'vz-stat' }, null, row);
      var big = V.h('div', { 'class': 'vz-stat-v' }, (ctx.first && !V.reduced ? '0' : it.v.toLocaleString('en-US')) + (it.suffix || ''), c);
      V.h('div', { 'class': 'vz-stat-l' }, L(it.l), c);
      if (ctx.first && !V.reduced) {
        var t0 = null, dur = 900;
        (function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          big.textContent = Math.round(it.v * e).toLocaleString('en-US') + (it.suffix || '');
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      }
    });
  });
})();

/* School mini strip: one school's dated items on a compact Aug–Jul line,
   coloured by swimlane, with today. spec.school = short name in viz.deadlines. */
(function () {
  'use strict';
  if (!window.ATLAS_VIZ) return;
  ATLAS_VIZ.register('school-mini', function (el, spec, V, ctx) {
    var D = V.data().deadlines; if (!D) return;
    var L = V.L, fmt = V.fmt;
    var evs = D.events.filter(function (e) { return e.school === spec.school; });
    if (!evs.length) { V.h('p', { 'class': 'vz-sub' }, L({ zh: '沒有讀到這所學校的日期。', en: 'No dates were read for this school.' }), el); return; }
    var from = V.dateNum('2026-08-01'), to = V.dateNum('2027-06-30');
    var W = Math.max(el.clientWidth, 280), H = 58, cy = 22;
    var x = V.scale(from, to, 10, W - 10);
    var s = V.svg('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': spec.school }, el);
    V.svg('line', { x1: x(from), x2: x(to), y1: cy + .5, y2: cy + .5, 'class': 'vz-base' }, s);
    var d0 = new Date(from);
    for (var m = 0; m < 11; m++) {
      var md = Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + m, 1);
      V.svg('line', { x1: x(md), x2: x(md), y1: cy - 3, y2: cy + 3, stroke: 'var(--viz-base)' }, s);
      if (m % (W < 460 ? 2 : 1) === 0) { var t = V.svg('text', { x: x(md), y: H - 6, 'text-anchor': 'middle', style: 'font-size:10.5px' }, s); t.textContent = fmt.month(new Date(md).getUTCMonth()); }
    }
    var today = V.dateNum(D.today);
    V.svg('line', { x1: x(today), x2: x(today), y1: cy - 12, y2: cy + 12, stroke: 'var(--accent)', 'stroke-width': 1.5, 'stroke-dasharray': '2 2' }, s);
    var marks = [];
    var li = function (id) { return D.lanes.findIndex(function (l) { return l.id === id; }); };
    evs.sort(function (a, b) { return a.start < b.start ? -1 : 1; }).forEach(function (e) {
      var i = li(e.lane), c = V.color(i < 0 ? 0 : i), x0 = x(V.dateNum(e.start));
      var g = V.svg('g', null, s);
      V.svg('rect', { x: x0 - 9, y: cy - 12, width: 18 + (e.end ? x(V.dateNum(e.end)) - x0 : 0), height: 24, fill: 'transparent' }, g);
      if (e.end) V.svg('rect', { x: x0, y: cy - 2.5, width: Math.max(4, x(V.dateNum(e.end)) - x0), height: 5, rx: 2.5, fill: c, opacity: e.approx ? .35 : .8 }, g);
      else V.svg('circle', { cx: x0, cy: cy, r: 4.5, fill: c, stroke: 'var(--viz-surface)', 'stroke-width': 1.5, opacity: e.approx ? .55 : 1 }, g);
      V.tip(g, function () { return { title: fmt.date(e.start) + (e.end ? ' – ' + fmt.date(e.end) : ''), rows: [{ value: L(D.lanes[i].label), label: L(e.label), color: c, src: e.src }] }; });
      marks.push(g);
    });
    if (ctx.first) V.stagger(marks, { from: 'scale(.3)', origin: 'center', step: 25 });
    return { table: { cols: [{ zh: '日期', en: 'Date' }, { zh: '事項', en: 'Item' }, { zh: '來源', en: 'Sources' }], rows: evs.map(function (e) { return [e.start + (e.end ? ' – ' + e.end : ''), L(e.label), { html: V.cites(e.src || []) }]; }) } };
  });
})();
