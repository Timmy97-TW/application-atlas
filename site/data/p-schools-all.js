// Page: schools (1–50). Composed from three page objects that stay intact in their own files:
//   pages.schools  (data/p-schools.js, the 30 at full depth)      -> replaced here by the composed page
//   pages.more     (data/p-more.js, schools 31–50 at roster and matrix depth)
//   pages.compare  (data/p-compare.js, the side-by-side comparator; its figure reads dataset 'all')
// Load order: after p-schools.js, p-more.js and p-compare.js. No facts live here: every section object is
// reused, only the page frame (title, judgment, intro, two block headings, the quick-jump row) is new.
// scripts/make-pages.js picks chart datasets by regex over the page's data text:
// needs dataset: 'more' and dataset: 'schools'
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  var A = window.ATLAS, P = A.pages;
  var S30 = P.schools, S50 = P.more, CMP = P.compare;
  if (!S30 || !S50 || !CMP) return;
  function s(zh, en) { return { zh: zh, en: en }; }
  function copy(o, patch) { var r = {}; for (var k in o) r[k] = o[k]; for (var q in patch) r[q] = patch[q]; return r; }

  // keep the 30-school page object reachable under its own key for anything that still reads it
  P['schools-30'] = S30;

  // the comparator section, with the compare page's own intro as the section intro
  var cmpSec = copy(CMP.sections[0], { intro: CMP.intro });

  // 31–50 sections: ids that collide with a 30-school section get a 'more-' prefix
  var used = {};
  S30.sections.forEach(function (x) { if (x.id) used[x.id] = 1; });
  used[cmpSec.id] = 1; used['top30'] = 1; used['more'] = 1;
  var moreSecs = S50.sections.map(function (x) {
    return x.id && used[x.id] ? copy(x, { id: 'more-' + x.id }) : x;
  });

  var UI = {
    jump: s('快速跳到某校', 'Jump to a school'),
    jump30: s('1–30', '1–30'),
    jump50: s('31–50', '31–50')
  };

  P['schools'] = {
    title: s('學校 1–50', 'Schools 1–50'),
    judgment: s(
      '前 30 校逐校展開；第 31–50 校只有基本資料與補充材料矩陣兩層。最上方的比較工具可以在 50 校裡任選三所並排；31–50 校沒查到的項目會標成「此深度未涵蓋」，不當作差異。',
      'The first 30 schools are opened up one by one; schools 31–50 have two layers only, a roster and a supplementary-materials matrix. The comparator at the top lines up any three of the 50; a row not researched for a school in 31–50 reads "not covered at this depth" and is not counted as a difference.'
    ),
    intro: s(
      '本頁把原本分開的三頁合成一頁：比較工具在前，因為它是用來查的；接著是前 30 校的完整資料，最後是第 31–50 校。兩個區塊各自的深度寫在區塊開頭。下方一排校名可以直接跳到該校的段落（前 30 校）或基本資料表中的那一列（31–50 校）；右側或底部的段落目錄則跳到各節。每一格都來自學校或申請系統的官方頁面並附查閱日；「未載明」只代表讀過的頁面沒寫。',
      'Three pages that used to stand apart are now one: the comparator comes first because it is the tool you use to look things up, then the full material on the first 30 schools, then schools 31–50. Each block states its own depth at its head. The row of school names below jumps straight to a school\'s own block (the first 30) or to its row in the roster table (31–50); the section index at the side or foot jumps between sections. Every cell comes from an official page of the school or the application system and carries its access date; "not stated" means only that the pages read are silent.'
    ),
    sections: [cmpSec]
      .concat([{
        id: 'top30',
        h: s('第 1–30 校：完整深度', 'Schools 1–30: full depth'),
        judgment: s(
          '這 30 校是研究的主體（DECISIONS 2026-11-07）：總表、工程與生物的主修進入方式、申請系統、推薦信、國際申請者、counselor 與台灣端的作業、補助數字，然後逐校一段，最後是還沒讀到的頁面與缺口。',
          'These 30 are the core of the research (DECISIONS, 2026-11-07): the overview table, how engineering and biology majors are entered, application systems, letters, international applicants, the counselor and Taiwan-side logistics, aid figures, then one block per school, and finally the pages not yet read and the gaps.'
        )
      }])
      .concat(S30.sections)
      .concat([{
        id: 'more',
        h: s('第 31–50 校：基本資料與矩陣深度', 'Schools 31–50: roster and matrix depth'),
        judgment: s(
          '這 20 校只做兩層（DECISIONS 2026-11-07）：基本資料表（申請系統、方案與截止日、考試、英語、國際生補助、補充題、推薦信、面試）與補充材料矩陣，另加工程進入方式與幾項發現；沒有逐校段落，比較工具裡前 30 校才有的列對這些學校標「此深度未涵蓋」。',
          'These 20 get two layers only (DECISIONS, 2026-11-07): a roster (system, plans and deadlines, testing, English, aid for internationals, supplements, letters, interview) and a supplementary-materials matrix, plus engineering entry and a few findings. There is no block per school, and in the comparator the rows that exist only for the first 30 read "not covered at this depth" for them.'
        )
      }])
      .concat(moreSecs)
  };

  // After render: give the 30 per-school blocks and the 20 roster rows stable ids, then add the quick-jump row
  // (layout only; every label comes from the page objects above). Styles: assets/css/schools.css.
  if (typeof document === 'undefined' || !document.body || document.body.getAttribute('data-page') !== 'schools') return;
  function slug(t) { return 'school-' + String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  window.ATLAS_PAGE_HOOK = function (main, U) {
    var L = U.L, el = U.el;
    var chips = [];
    // 1–30: one h3 per sub inside #perschool, in order
    var per = S30.sections.filter(function (x) { return x.id === 'perschool'; })[0];
    var perEl = main.querySelector('#perschool');
    if (per && perEl) {
      var h3s = perEl.querySelectorAll(':scope > h3');
      per.subs.forEach(function (sub, i) {
        var h = h3s[i]; if (!h) return;
        var name = L(sub.h);
        h.id = slug(sub.h.en || name);
        chips.push({ id: h.id, label: name, group: 0 });
      });
    }
    // 31–50: one table row per roster entry, in order; chip labels use the chart dataset's short names when present
    var ros = S50.sections.filter(function (x) { return x.id === 'roster'; })[0];
    var rosEl = main.querySelector('#roster, #more-roster');
    var more = (A.viz || {}).more;
    if (ros && ros.table && rosEl) {
      var trs = rosEl.querySelectorAll('tbody tr');
      ros.table.rows.forEach(function (row, i) {
        var tr = trs[i]; if (!tr) return;
        var cells = row.cells || row, full = typeof cells[0] === 'string' ? cells[0] : L(cells[0]);
        tr.id = slug(full);
        var short = more && more.order && more.order.length === ros.table.rows.length ? more.order[i] : full;
        chips.push({ id: tr.id, label: short, group: 1, title: full });
      });
    }
    if (!chips.length) return;
    var nav = el('nav', { 'class': 'sch-jump', 'aria-label': L(UI.jump) });
    [0, 1].forEach(function (g) {
      var row = el('div', { 'class': 'sch-jump-row' });
      row.appendChild(el('span', { 'class': 'sch-jump-k' }, U.esc(L(g ? UI.jump50 : UI.jump30))));
      chips.filter(function (c) { return c.group === g; }).forEach(function (c) {
        var a = el('a', { 'class': 'sch-chip' + (g ? ' lite' : ''), href: '#' + c.id, title: c.title || null }, U.esc(c.label));
        a.addEventListener('click', function (e) {
          var t = document.getElementById(c.id); if (!t) return;
          e.preventDefault();
          t.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
          history.replaceState(null, '', '#' + c.id);
          // :target styling does not follow replaceState, so mark the target by hand for a moment
          t.classList.add('sch-hit'); setTimeout(function () { t.classList.remove('sch-hit'); }, 1600);
        });
        row.appendChild(a);
      });
      nav.appendChild(row);
    });
    var first = main.querySelector('section');
    if (first) main.insertBefore(nav, first); else main.appendChild(nav);
  };
})();
