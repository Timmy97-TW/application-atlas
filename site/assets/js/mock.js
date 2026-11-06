/* Practice walkthrough engine. Structure, labels and limits come from
   window.ATLAS.mock (site/data/p-mock.js). Everything stays in localStorage. */
(function () {
  'use strict';
  window.ATLAS_PAGE_HOOK = function (main, U) {
    var M = (window.ATLAS || {}).mock;
    if (!M) return;
    var L = U.L, esc = U.esc, md = U.md, el = U.el, cites = U.cites, ui = U.ui;
    var KEY = 'atlas.mock.v1';
    var S = load();
    function load() {
      try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch (e) { return fresh(); }
    }
    function fresh() { return { v: {}, colleges: [], annotate: false, submitted: {} }; }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private mode: state lives in memory */ } }
    function t(k) { return L((M.ui || {})[k]) || k; }

    // ---------- counting ----------
    function words(s) { s = (s || '').trim(); return s ? s.split(/\s+/).length : 0; }
    function count(f, val) {
      if (!f.limit) return null;
      var n = f.limit.words ? words(val) : (val || '').length;
      var max = f.limit.words || f.limit.chars;
      var min = f.limit.minWords || 0;
      return { n: n, max: max, min: min, unit: f.limit.words ? 'words' : 'chars', over: n > max, under: min && n > 0 && n < min };
    }
    function filled(f, val) {
      if (f.type === 'checks') return val && val.length > 0;
      return val != null && String(val).trim() !== '';
    }
    function shown(f, ctx) {
      if (!f.showIf) return true;
      var v = S.v[ctx + f.showIf.field];
      if (f.showIf.equals != null) return v === f.showIf.equals;
      if (f.showIf.any) return filled({}, v);
      return true;
    }

    // ---------- layout ----------
    var app = el('div', { 'class': 'mk' });
    var side = el('nav', { 'class': 'mk-side', 'aria-label': t('navLabel') });
    var view = el('div', { 'class': 'mk-view' });
    var bar = el('div', { 'class': 'mk-bar' });
    app.appendChild(side); app.appendChild(view);
    main.appendChild(bar); main.appendChild(app);
    if (M.intro) main.insertBefore(el('p', { 'class': 'lead' }, md(L(M.intro))), bar);

    function toolbar() {
      bar.innerHTML = '';
      var ann = el('label', { 'class': 'mk-switch' }, '<input type="checkbox"' + (S.annotate ? ' checked' : '') + '> ' + esc(t('annotate')));
      ann.querySelector('input').addEventListener('change', function (e) { S.annotate = e.target.checked; save(); route(); });
      var pre = el('button', { 'class': 'tg', type: 'button' }, esc(t('prefill')));
      pre.addEventListener('click', function () {
        if (!confirm(t('prefillConfirm'))) return;
        S = fresh(); S.annotate = true;
        var P = M.persona || {};
        for (var k in P.values) S.v[k] = P.values[k];
        S.colleges = (P.colleges || []).slice();
        save(); location.hash = '#/dashboard'; route();
      });
      var clr = el('button', { 'class': 'tg', type: 'button' }, esc(t('clear')));
      clr.addEventListener('click', function () { if (confirm(t('clearConfirm'))) { S = fresh(); save(); location.hash = '#/dashboard'; route(); } });
      bar.appendChild(ann); bar.appendChild(pre); bar.appendChild(clr);
    }

    // ---------- completion ----------
    function groupDone(sec, g) {
      var reps = g.repeat ? repCount(sec.id + '.' + g.id) : 1;
      if (g.repeat && reps === 0) return !g.repeat.min;
      for (var i = 0; i < reps; i++) {
        var ctx = sec.id + '.' + g.id + (g.repeat ? '[' + i + ']' : '') + '.';
        for (var j = 0; j < g.fields.length; j++) {
          var f = g.fields[j];
          if (!shown(f, ctx)) continue;
          var v = S.v[ctx + f.id];
          if (f.required && !filled(f, v)) return false;
          var c = count(f, v);
          if (c && (c.over || c.under)) return false;
        }
      }
      return true;
    }
    function sectionDone(sec) { return sec.groups.every(function (g) { return groupDone(sec, g); }); }
    function repCount(path) { return S.v[path + '#n'] || 0; }
    function collegeById(id) { return (M.colleges || []).filter(function (c) { return c.id === id; })[0]; }
    function collegeDone(c, part) {
      var sec = { id: 'col.' + c.id + '.' + part, groups: c[part] || [] };
      return sectionDone(sec);
    }

    // ---------- side nav ----------
    function sidebar(cur) {
      side.innerHTML = '';
      function link(href, label, done, depth) {
        var a = el('a', { href: href, 'class': (cur === href ? 'on ' : '') + (depth ? 'd' + depth : '') }, (done == null ? '' : '<span class="mk-tick' + (done ? ' ok' : '') + '">' + (done ? '✓' : '') + '</span>') + esc(label));
        side.appendChild(a);
      }
      link('#/dashboard', t('dashboard'));
      link('#/colleges', t('myColleges') + ' (' + S.colleges.length + ')');
      S.colleges.forEach(function (id) {
        var c = collegeById(id); if (!c) return;
        link('#/college/' + id, L(c.name), null, 1);
        ['questions', 'supplement'].forEach(function (part) { if (c[part] && c[part].length) link('#/college/' + id + '/' + part, t(part), collegeDone(c, part), 2); });
        link('#/college/' + id + '/recommenders', t('recommenders'), recsDone(c), 2);
        link('#/college/' + id + '/review', t('review'), !!S.submitted[id], 2);
      });
      side.appendChild(el('div', { 'class': 'mk-h' }, esc(t('commonTab'))));
      M.sections.forEach(function (sec) { link('#/app/' + sec.id, L(sec.label), sectionDone(sec), 1); });
      if (M.uc) { side.appendChild(el('div', { 'class': 'mk-h' }, esc(L(M.uc.tab)))); link('#/uc', L(M.uc.label), ucDone(), 1); }
    }

    // ---------- field rendering ----------
    function fieldEl(f, ctx) {
      var path = ctx + f.id;
      var val = S.v[path];
      var w = el('div', { 'class': 'mk-f' + (f.wide ? ' wide' : '') });
      var lab = el('label', { 'for': 'f-' + path }, esc(L(f.label)) + (f.required ? ' <span class="mk-req" title="' + esc(t('required')) + '">*</span>' : '') + (f.src ? cites(f.src) : ''));
      w.appendChild(lab);
      if (f.help) w.appendChild(el('div', { 'class': 'mk-help' }, md(L(f.help))));
      var input;
      if (f.type === 'textarea') {
        input = el('textarea', { id: 'f-' + path, rows: f.rows || (f.limit && f.limit.words ? 10 : 3) });
        input.value = val || '';
      } else if (f.type === 'select') {
        input = el('select', { id: 'f-' + path });
        input.appendChild(el('option', { value: '' }, esc(t('choose'))));
        (f.options || []).forEach(function (o) {
          var v = typeof o === 'string' ? o : o.v;
          var opt = el('option', { value: v }, esc(typeof o === 'string' ? o : L(o.label || o.v)));
          if (val === v) opt.selected = true;
          input.appendChild(opt);
        });
      } else if (f.type === 'radio' || f.type === 'checks') {
        input = el('div', { 'class': 'mk-opts', id: 'f-' + path, role: f.type === 'radio' ? 'radiogroup' : 'group' });
        (f.options || []).forEach(function (o, i) {
          var v = typeof o === 'string' ? o : o.v;
          var on = f.type === 'radio' ? val === v : (val || []).indexOf(v) >= 0;
          var l = el('label', { 'class': 'mk-opt' }, '<input type="' + (f.type === 'radio' ? 'radio' : 'checkbox') + '" name="r-' + esc(path) + '" value="' + esc(v) + '"' + (on ? ' checked' : '') + '> ' + md(typeof o === 'string' ? o : L(o.label || o.v)));
          input.appendChild(l);
        });
      } else {
        input = el('input', { id: 'f-' + path, type: f.type === 'number' ? 'number' : (f.type === 'date' ? 'date' : 'text'), maxlength: f.hardMax ? (f.limit && f.limit.chars) : null });
        input.value = val || '';
      }
      w.appendChild(input);
      var meta = el('div', { 'class': 'mk-meta' });
      w.appendChild(meta);
      function upd() {
        var v = S.v[path], c = count(f, v);
        var bits = [];
        if (c) {
          var unitT = t(c.unit);
          bits.push('<span class="' + (c.over || c.under ? 'bad' : '') + '">' + c.n + ' / ' + (c.min ? c.min + '–' : '') + c.max + ' ' + esc(unitT) + '</span>');
          if (c.over) bits.push('<span class="bad">' + esc(t('over')) + '</span>');
          if (c.under) bits.push('<span class="bad">' + esc(t('under')) + '</span>');
        }
        meta.innerHTML = bits.join(' · ');
      }
      function set(v) { S.v[path] = v; save(); upd(); refreshTicks(); }
      if (f.type === 'radio') input.addEventListener('change', function (e) { set(e.target.value); route(true); });
      else if (f.type === 'checks') input.addEventListener('change', function () {
        set([].map.call(input.querySelectorAll('input:checked'), function (x) { return x.value; }));
      });
      else if (f.type === 'select') input.addEventListener('change', function () { set(input.value); route(true); });
      else input.addEventListener('input', function () { set(input.value); });
      upd();
      if (S.annotate && f.outside) w.appendChild(el('div', { 'class': 'mk-out' }, '<b>' + esc(t('outsideLabel')) + '</b> ' + md(L(f.outside))));
      return w;
    }
    function refreshTicks() { var cur = location.hash || '#/dashboard'; sidebar(cur.replace(/\/$/, '')); }

    function groupEl(sec, g, base) {
      var box = el('section', { 'class': 'mk-g' });
      box.appendChild(el('h3', null, esc(L(g.label)) + (groupDone(sec, g) ? ' <span class="mk-tick ok">✓</span>' : '')));
      if (g.intro) box.appendChild(el('p', { 'class': 'mk-help' }, md(L(g.intro)) + (g.src ? cites(g.src) : '')));
      if (S.annotate && g.outside) box.appendChild(el('div', { 'class': 'mk-out' }, '<b>' + esc(t('outsideLabel')) + '</b> ' + md(L(g.outside))));
      var p = base + g.id;
      if (!g.repeat) {
        var grid = el('div', { 'class': 'mk-grid' });
        g.fields.forEach(function (f) { if (shown(f, p + '.')) grid.appendChild(fieldEl(f, p + '.')); });
        box.appendChild(grid);
        return box;
      }
      var n = repCount(p);
      for (var i = 0; i < n; i++) {
        var item = el('div', { 'class': 'mk-rep' });
        item.appendChild(el('h4', null, esc(L(g.repeat.itemLabel)) + ' ' + (i + 1)));
        var gr = el('div', { 'class': 'mk-grid' });
        var ctx = p + '[' + i + '].';
        g.fields.forEach(function (f) { if (shown(f, ctx)) gr.appendChild(fieldEl(f, ctx)); });
        item.appendChild(gr);
        if (i === n - 1) {
          var rm = el('button', { 'class': 'tg', type: 'button' }, esc(t('remove')));
          rm.addEventListener('click', (function (idx) { return function () {
            g.fields.forEach(function (f) { delete S.v[p + '[' + idx + '].' + f.id]; });
            S.v[p + '#n'] = idx; save(); route(true);
          }; })(i));
          item.appendChild(rm);
        }
        box.appendChild(item);
      }
      if (n < g.repeat.max) {
        var add = el('button', { 'class': 'tg mk-add', type: 'button' }, '+ ' + esc(t('add')) + ' ' + esc(L(g.repeat.itemLabel)) + ' (' + n + ' / ' + g.repeat.max + ')');
        add.addEventListener('click', function () { S.v[p + '#n'] = n + 1; save(); route(true); });
        box.appendChild(add);
      } else box.appendChild(el('p', { 'class': 'mk-help' }, esc(t('maxReached')) + ' ' + g.repeat.max));
      return box;
    }

    // ---------- views ----------
    function vDashboard() {
      view.appendChild(el('h2', null, esc(t('dashboard'))));
      view.appendChild(el('p', { 'class': 'mk-help' }, md(L(M.dashboardIntro))));
      var tb = el('table', { 'class': 'mk-table' });
      tb.innerHTML = '<thead><tr><th>' + esc(t('college')) + '</th><th>' + esc(t('plan')) + '</th><th>' + esc(t('deadline')) + '</th><th>' + esc(t('commonTab')) + '</th><th>' + esc(t('questions')) + '</th><th>' + esc(t('supplement')) + '</th><th>' + esc(t('recommenders')) + '</th><th>' + esc(t('status')) + '</th></tr></thead>';
      var body = el('tbody');
      var commonOK = M.sections.every(sectionDone);
      if (!S.colleges.length) body.appendChild(el('tr', null, '<td colspan="8">' + md(t('noColleges')) + '</td>'));
      S.colleges.forEach(function (id) {
        var c = collegeById(id); if (!c) return;
        var plan = S.v['col.' + id + '.questions.general.plan'] || '—';
        var dl = (c.deadlines || []).filter(function (d) { return d.plan === plan; })[0];
        function mark(b) { return b == null ? '—' : (b ? '<span class="mk-tick ok">✓</span>' : '<span class="mk-tick"></span>'); }
        body.appendChild(el('tr', null, '<td><a href="#/college/' + id + '">' + esc(L(c.name)) + '</a></td><td>' + esc(plan) + '</td><td>' + (dl ? esc(L(dl.date)) + cites(dl.src) : '—') + '</td><td>' + mark(commonOK) + '</td><td>' + mark(c.questions && c.questions.length ? collegeDone(c, 'questions') : null) + '</td><td>' + mark(c.supplement && c.supplement.length ? collegeDone(c, 'supplement') : null) + '</td><td>' + mark(recsDone(c)) + '</td><td>' + esc(S.submitted[id] ? t('submittedMock') + ' ' + S.submitted[id] : t('inProgress')) + '</td></tr>'));
      });
      tb.appendChild(body);
      var w = el('div', { 'class': 'tablewrap' }); w.appendChild(tb); view.appendChild(w);
      var prog = el('div', { 'class': 'grid' });
      M.sections.forEach(function (sec) {
        var a = el('a', { 'class': 'card', href: '#/app/' + sec.id }, '<h3>' + (sectionDone(sec) ? '<span class="mk-tick ok">✓</span>' : '<span class="mk-tick"></span>') + esc(L(sec.label)) + '</h3><p>' + md(L(sec.blurb || '')) + '</p>');
        a.style.color = 'inherit'; prog.appendChild(a);
      });
      view.appendChild(el('h3', null, esc(t('commonTab'))));
      view.appendChild(prog);
    }
    function vColleges() {
      view.appendChild(el('h2', null, esc(t('myColleges'))));
      view.appendChild(el('p', { 'class': 'mk-help' }, md(L(M.collegesIntro))));
      var list = el('div', { 'class': 'grid' });
      (M.colleges || []).forEach(function (c) {
        var on = S.colleges.indexOf(c.id) >= 0;
        var card = el('div', { 'class': 'card' }, '<h3>' + esc(L(c.name)) + '</h3><p>' + md(L(c.blurb || '')) + (c.src ? cites(c.src) : '') + '</p>');
        var b = el('button', { 'class': 'tg', type: 'button', 'aria-pressed': String(on) }, esc(on ? t('removeCollege') : t('addCollege')));
        b.addEventListener('click', function () {
          if (on) S.colleges = S.colleges.filter(function (x) { return x !== c.id; }); else S.colleges.push(c.id);
          save(); route(true);
        });
        b.style.marginTop = '10px';
        card.appendChild(b); list.appendChild(card);
      });
      view.appendChild(list);
    }
    function vSection(id) {
      var sec = M.sections.filter(function (s) { return s.id === id; })[0];
      if (!sec) return vDashboard();
      view.appendChild(el('h2', null, esc(L(sec.label))));
      if (sec.intro) view.appendChild(el('p', { 'class': 'mk-help' }, md(L(sec.intro)) + (sec.src ? cites(sec.src) : '')));
      sec.groups.forEach(function (g) { view.appendChild(groupEl(sec, g, sec.id + '.')); });
      pager(M.sections.map(function (s) { return '#/app/' + s.id; }), '#/app/' + id);
    }
    function vCollege(id, part) {
      var c = collegeById(id);
      if (!c) return vColleges();
      view.appendChild(el('h2', null, esc(L(c.name))));
      if (!part) {
        view.appendChild(el('p', { 'class': 'mk-help' }, md(L(c.blurb || '')) + (c.src ? cites(c.src) : '')));
        var ul = el('ul', { 'class': 'items' });
        (c.facts || []).forEach(function (x) { ul.appendChild(el('li', null, U.itemHtml ? window.ATLAS_UTIL.itemHtml(x) : '')); });
        view.appendChild(ul);
        var nav = el('div', { 'class': 'grid' });
        ['questions', 'supplement', 'recommenders', 'review'].forEach(function (p) {
          if ((p === 'questions' || p === 'supplement') && !(c[p] && c[p].length)) return;
          var a = el('a', { 'class': 'card', href: '#/college/' + id + '/' + p }, '<h3>' + esc(t(p)) + '</h3>'); a.style.color = 'inherit'; nav.appendChild(a);
        });
        view.appendChild(nav);
        return;
      }
      view.appendChild(el('h3', null, esc(t(part))));
      if (part === 'questions' || part === 'supplement') {
        var sec = { id: 'col.' + id + '.' + part, groups: c[part] };
        if (c[part + 'Intro']) view.appendChild(el('p', { 'class': 'mk-help' }, md(L(c[part + 'Intro']))));
        c[part].forEach(function (g) { view.appendChild(groupEl(sec, g, sec.id + '.')); });
      } else if (part === 'recommenders') vRecs(c);
      else if (part === 'review') vReview(c);
    }
    function recsDone(c) {
      var r = S.v['rec.' + c.id] || {};
      var need = (M.recommenders && M.recommenders.roles) || [];
      return need.every(function (role) {
        var min = (c.recs && c.recs[role.id] && c.recs[role.id].min) || 0;
        return (r[role.id] || []).length >= min;
      }) && !!S.v['ferpa'];
    }
    function vRecs(c) {
      var R = M.recommenders;
      view.appendChild(el('p', { 'class': 'mk-help' }, md(L(R.intro)) + (R.src ? cites(R.src) : '')));
      // FERPA
      var fb = el('section', { 'class': 'mk-g' });
      fb.appendChild(el('h3', null, esc(L(R.ferpa.label)) + (S.v['ferpa'] ? ' <span class="mk-tick ok">✓</span>' : '')));
      fb.appendChild(el('p', { 'class': 'mk-help' }, md(L(R.ferpa.text)) + cites(R.ferpa.src)));
      fb.appendChild(fieldEl({ id: 'ferpa', label: R.ferpa.choice, type: 'radio', required: true, options: R.ferpa.options }, ''));
      view.appendChild(fb);
      var r = S.v['rec.' + c.id] || {};
      R.roles.forEach(function (role) {
        var lim = (c.recs && c.recs[role.id]) || {};
        var box = el('section', { 'class': 'mk-g' });
        var list = r[role.id] || [];
        box.appendChild(el('h3', null, esc(L(role.label)) + ' <span class="mk-help">(' + esc(t('min')) + ' ' + (lim.min || 0) + ' · ' + esc(t('max')) + ' ' + (lim.max != null ? lim.max : '—') + ')</span>' + (lim.src ? cites(lim.src) : '')));
        if (role.help) box.appendChild(el('p', { 'class': 'mk-help' }, md(L(role.help))));
        if (lim.note) box.appendChild(el('p', { 'class': 'mk-help' }, md(L(lim.note))));
        if (S.annotate && role.outside) box.appendChild(el('div', { 'class': 'mk-out' }, '<b>' + esc(t('outsideLabel')) + '</b> ' + md(L(role.outside))));
        list.forEach(function (p, i) {
          var row = el('div', { 'class': 'mk-rep' }, '<b>' + esc(p.name) + '</b> · ' + esc(p.email) + (p.subject ? ' · ' + esc(p.subject) : '') + ' · <span class="mk-help">' + esc(t('invitedMock')) + '</span> ');
          var x = el('button', { 'class': 'tg', type: 'button' }, esc(t('remove')));
          x.addEventListener('click', function () { list.splice(i, 1); r[role.id] = list; S.v['rec.' + c.id] = r; save(); route(true); });
          row.appendChild(x); box.appendChild(row);
        });
        if (lim.max == null || list.length < lim.max) {
          var form = el('div', { 'class': 'mk-grid' });
          var nm = el('input', { type: 'text', placeholder: t('recName'), 'aria-label': t('recName') });
          var em = el('input', { type: 'text', placeholder: t('recEmail'), 'aria-label': t('recEmail') });
          var sj = el('input', { type: 'text', placeholder: t('recSubject'), 'aria-label': t('recSubject') });
          var b = el('button', { 'class': 'tg', type: 'button' }, '+ ' + esc(t('invite')));
          b.addEventListener('click', function () {
            if (!nm.value.trim()) return;
            list.push({ name: nm.value.trim(), email: em.value.trim(), subject: sj.value.trim() });
            r[role.id] = list; S.v['rec.' + c.id] = r; save(); route(true);
          });
          [nm, em, sj, b].forEach(function (x) { var w = el('div', { 'class': 'mk-f' }); w.appendChild(x); form.appendChild(w); });
          box.appendChild(form);
        }
        view.appendChild(box);
      });
    }
    function vReview(c) {
      var Rv = M.review;
      view.appendChild(el('p', { 'class': 'mk-help' }, md(L(Rv.intro)) + (Rv.src ? cites(Rv.src) : '')));
      var steps = el('ol', { 'class': 'mk-steps' });
      var checks = [];
      M.sections.forEach(function (s) { checks.push([L(s.label), sectionDone(s), '#/app/' + s.id]); });
      ['questions', 'supplement'].forEach(function (p) { if (c[p] && c[p].length) checks.push([t(p), collegeDone(c, p), '#/college/' + c.id + '/' + p]); });
      checks.push([t('recommenders'), recsDone(c), '#/college/' + c.id + '/recommenders']);
      checks.forEach(function (x) { steps.appendChild(el('li', null, (x[1] ? '<span class="mk-tick ok">✓</span>' : '<span class="mk-tick"></span>') + '<a href="' + x[2] + '">' + esc(x[0]) + '</a>')); });
      view.appendChild(steps);
      var ready = checks.every(function (x) { return x[1]; });
      // preview
      var pv = el('details', { 'class': 'mk-g' });
      pv.appendChild(el('summary', null, esc(t('preview'))));
      var pre = el('div', { 'class': 'mk-preview' });
      M.sections.forEach(function (s) {
        pre.appendChild(el('h4', null, esc(L(s.label))));
        var dl = el('dl');
        Object.keys(S.v).filter(function (k) { return k.indexOf(s.id + '.') === 0 && k.indexOf('#n') < 0; }).sort().forEach(function (k) {
          var v = S.v[k]; if (!filled({}, v)) return;
          dl.appendChild(el('dt', null, esc(k.slice(s.id.length + 1))));
          dl.appendChild(el('dd', null, esc(Array.isArray(v) ? v.join(', ') : v)));
        });
        pre.appendChild(dl);
      });
      pv.appendChild(pre); view.appendChild(pv);
      // payment + affirmation
      var pay = el('section', { 'class': 'mk-g' });
      pay.appendChild(el('h3', null, esc(L(Rv.payment.label))));
      pay.appendChild(el('p', { 'class': 'mk-help' }, md(L(Rv.payment.text)) + cites(Rv.payment.src)));
      pay.appendChild(fieldEl({ id: 'pay', label: Rv.payment.choice, type: 'radio', required: true, options: Rv.payment.options }, 'col.' + c.id + '.review.'));
      view.appendChild(pay);
      var aff = el('section', { 'class': 'mk-g' });
      aff.appendChild(el('h3', null, esc(L(Rv.affirm.label))));
      aff.appendChild(el('p', { 'class': 'mk-help' }, md(L(Rv.affirm.text)) + cites(Rv.affirm.src)));
      aff.appendChild(fieldEl({ id: 'sign', label: Rv.affirm.signLabel, type: 'text', required: true }, 'col.' + c.id + '.review.'));
      view.appendChild(aff);
      var ok = ready && S.v['col.' + c.id + '.review.pay'] && S.v['col.' + c.id + '.review.sign'];
      var sub = el('button', { 'class': 'tg mk-submit', type: 'button' }, esc(t('submitMock')));
      if (!ok) { sub.disabled = true; view.appendChild(el('p', { 'class': 'mk-help' }, esc(t('notReady')))); }
      sub.addEventListener('click', function () { S.submitted[c.id] = new Date().toISOString().slice(0, 10); save(); route(true); });
      view.appendChild(sub);
      if (S.submitted[c.id]) view.appendChild(el('p', { 'class': 'judgment' }, esc(t('submittedNote')) + ' ' + esc(S.submitted[c.id])));
    }
    function ucDone() { var u = M.uc; return u ? sectionDone({ id: 'uc', groups: u.groups }) && ucPiqCount() === u.choose : true; }
    function ucPiqCount() { var u = M.uc; return u.piqs.filter(function (p) { return filled({}, S.v['uc.piq.' + p.id]); }).length; }
    function vUC() {
      var u = M.uc;
      view.appendChild(el('h2', null, esc(L(u.label))));
      view.appendChild(el('p', { 'class': 'mk-help' }, md(L(u.intro)) + (u.src ? cites(u.src) : '')));
      var n = ucPiqCount();
      view.appendChild(el('p', { 'class': 'judgment' }, esc(t('piqChosen')) + ' ' + n + ' / ' + u.choose + (n > u.choose ? ' · ' + esc(t('piqTooMany')) : '')));
      u.piqs.forEach(function (p) {
        var f = { id: p.id, label: p.prompt, type: 'textarea', limit: { words: u.maxWords }, src: p.src || u.src, outside: p.outside, rows: 7 };
        var box = el('section', { 'class': 'mk-g' });
        box.appendChild(el('h3', null, 'PIQ ' + esc(p.n)));
        box.appendChild(fieldEl(f, 'uc.piq.'));
        view.appendChild(box);
      });
      var sec = { id: 'uc', groups: u.groups || [] };
      (u.groups || []).forEach(function (g) { view.appendChild(groupEl(sec, g, 'uc.')); });
    }
    function pager(list, cur) {
      var i = list.indexOf(cur);
      var p = el('div', { 'class': 'mk-pager' });
      if (i > 0) p.appendChild(el('a', { 'class': 'tg', href: list[i - 1] }, '← ' + esc(t('prev'))));
      p.appendChild(el('a', { 'class': 'tg', href: '#/dashboard' }, esc(t('dashboard'))));
      if (i >= 0 && i < list.length - 1) p.appendChild(el('a', { 'class': 'tg', href: list[i + 1] }, esc(t('next')) + ' →'));
      view.appendChild(p);
    }

    function route(keepScroll) {
      var h = (location.hash || '#/dashboard').replace(/\/$/, '');
      var y = window.scrollY;
      view.innerHTML = '';
      sidebar(h);
      var m;
      if ((m = h.match(/^#\/app\/([\w-]+)$/))) vSection(m[1]);
      else if ((m = h.match(/^#\/college\/([\w-]+)(?:\/(\w+))?$/))) vCollege(m[1], m[2]);
      else if (h === '#/colleges') vColleges();
      else if (h === '#/uc' && M.uc) vUC();
      else vDashboard();
      toolbar();
      if (keepScroll === true) window.scrollTo(0, y); else if (keepScroll !== false) app.scrollIntoView({ block: 'start' });
    }
    window.addEventListener('hashchange', function () { route(); });
    route(false);
  };
})();
