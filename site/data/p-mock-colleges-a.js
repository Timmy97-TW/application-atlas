/* Practice walkthrough data, "My Colleges" part A: schools 1–2 and 5–9 and 11 and 13–15 of the
   roster (MIT, Caltech, Yale, Princeton, Columbia, UPenn, Brown, Georgetown, Georgia Tech, Purdue,
   Michigan). Read by site/assets/js/mock.js through window.ATLAS.mock.colleges.
   Every fact cites a source id that exists in data/sources.js:
   A5a (2026-11-07_school-roster-part1), A3a (2026-11-07_cycle-2026-27-calendar-part1),
   A2 (other application systems), A4 (international specifics), MI (michigan-addendum),
   V4/V5/V6 (browser-verified pages). Prompts are paraphrased unless the intro says otherwise.
   Rule 9: practice mock, no system name in the page title, nothing leaves the browser. */
window.ATLAS = window.ATLAS || {};
(function () {
  'use strict';
  function z(zh, en) { return { zh: zh, en: en }; }
  function o(v, zh, en) { return { v: v, label: z(zh, en) }; }
  var YN = [o('yes', '是', 'Yes'), o('no', '否', 'No')];
  function F(id, label, type, extra) {
    var f = { id: id, label: label, type: type };
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }
  function plan(opts, src) { return F('plan', z('申請方案', 'Admission plan'), 'radio', { required: true, options: opts, src: src }); }
  // Word-limited prompt. min = 0 means the page states only a maximum.
  function sq(id, zhL, enL, max, min, src, extra) {
    var f = F(id, z(zhL, enL), 'textarea', { required: true, wide: true, rows: max > 200 ? 8 : 4, limit: min ? { words: max, minWords: min } : { words: max }, src: src });
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }
  // Character-limited prompt (Yale's short takes count characters, not words).
  function sqc(id, zhL, enL, chars, src, extra) {
    var f = F(id, z(zhL, enL), 'textarea', { required: true, wide: true, rows: 3, limit: { chars: chars }, src: src });
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }
  // Prompt whose page states no limit.
  var NOLIMIT = z('字數上限：未載明（checked 2026-11-07）。', 'Word limit: not stated (checked 2026-11-07).');
  function sqn(id, zhL, enL, src, extra) {
    var f = F(id, z(zhL, enL), 'textarea', { wide: true, rows: 6, src: src, help: NOLIMIT });
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }
  function path(col, field) { return 'col.' + col + '.questions.general.' + field; }
  var NS = z('未載明（checked 2026-11-07）。', 'Not stated (checked 2026-11-07).');

  var LIST = [
    // ---- MIT
    { id: 'mit', name: z('MIT', 'MIT'),
      blurb: z('MIT 自有申請系統，不用 Common App；EA／RA；$75；4 篇約 100–200 words＋4 題 40–50 words 短答＋不限字數的 additional information；兩位老師；活動表只有 4 格。', 'MIT’s own application, not Common App; EA/RA; $75; four essays of about 100–200 words, four short responses of 40–50 words and an open additional-information box; two teachers; four activity slots.'),
      src: ['A5a-S2', 'A5a-S1'],
      facts: [
        { t: z('申請走 MIT 自己的第一年申請表（基本資料、文書、活動、學業、推薦人、考試成績）；頁面沒有提到 Common App。', 'Applications go through MIT’s own first-year form (biographical information, essays, activities, academics, recommenders, test scores); the page does not name Common App.'), tag: 'f', src: ['A5a-S2', 'A2-S23'] },
        { t: z('報名費 $75 或 fee waiver；「本國與國際申請者都可申請減免」，在申請表的 Fee Waiver Request 區段提出；MIT 自述 need-blind，申請減免不影響審查。', 'Fee $75 or a fee waiver; "available for both domestic and international applicants", requested in the application’s Fee Waiver Request section; MIT says it is need-blind, so a waiver request has no admissions effect.'), tag: 'f', src: ['A5a-S2', 'A5a-S6'] },
        { t: z('文書頁明確標示為 2026–2027 申請季。', 'The essays page is labelled for the 2026–2027 application.'), tag: 'f', src: ['A5a-S1'] },
        { t: z('活動表是 MIT 自己的格式，只有 4 格，不收履歷；自填課程表只給美國學校的申請者，國際學校申請者改交成績單。', 'Activities: four entries on MIT’s own form, not a resume; the self-reported coursework form is for U.S. school applicants only, international school applicants submit a transcript instead.'), tag: 'f', src: ['A5a-S1'] },
        { t: z('2026–27 需繳 SAT 或 ACT；EA 須在 11-30 前、RA 在 12-31 前考完。', 'SAT or ACT required for 2026–27; tests before Nov 30 for EA and before Dec 31 for RA.'), tag: 'f', src: ['A3a-S2', 'A3a-S1'] },
        { t: z('校友（Educational Council）面試「盡可能」安排，約一小時，EA 多在 11 月、RA 多在 1 月；排不到時「不會對申請造成不利」。', 'Alumni (Educational Council) interviews are offered "whenever possible", about an hour, mostly November for EA and January for RA; if none is available "your application will not be adversely affected".'), tag: 'f', src: ['A5a-S4'] },
        { t: z('Research Supplement、Maker Portfolio 與藝術作品集走 SlideRoom，每份 $10，截止日與該輪申請相同。', 'Research Supplement, Maker Portfolio and arts portfolios go through SlideRoom, $10 each, due with the application round.'), tag: 'f', src: ['A3a-S4'] },
        { t: z('第一篇文書要從下拉選單選一個領域；讀到的頁面沒有描述任何按主修錄取的規則。本站推論：MIT 錄取到學院整體，不分系。', 'Essay 1 asks for a field of interest from a drop-down; no admission by major is described on the pages read. Inference: MIT admits to the institute, not to a department.'), tag: 'i', src: ['A5a-S1'] }
      ],
      deadlines: [
        { plan: 'EA', date: z('2026-11-01（SlideRoom 作品集同日）', '2026-11-01 (SlideRoom portfolios the same day)'), src: ['A3a-S1', 'A3a-S4'] },
        { plan: 'RA', date: z('2027-01-04（SlideRoom 作品集同日）', '2027-01-04 (SlideRoom portfolios the same day)'), src: ['A3a-S1', 'A3a-S4'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EA', 'Early Action（非限制性）', 'Early Action (non-restrictive)'), o('RA', 'Regular Action（RA）', 'Regular Action (RA)')], ['A3a-S1']),
          F('field', z('目前最感興趣的領域', 'Field of study you are currently most interested in'), 'text', { required: true, src: ['A5a-S1'], help: z('實際表單是 MIT 自己的下拉選單，選項本頁未重現；這個選擇是第一篇文書的起點（A5a-S1）。', 'The real form is MIT’s own drop-down, not reproduced here; the choice is the starting point of essay 1 (A5a-S1).') })
        ] },
        { id: 'activities', label: z('活動（MIT 自己的表格，最多 4 項）', 'Activities (MIT’s own form, up to four)'), src: ['A5a-S1'],
          intro: z('MIT 的活動表只有四格，不收履歷（A5a-S1）。每格的字數上限：未載明（checked 2026-11-07）。', 'MIT’s activities form has four entries and takes no resume (A5a-S1). Per-entry length limit: not stated (checked 2026-11-07).'),
          repeat: { max: 4, min: 1, itemLabel: z('活動', 'Activity') }, fields: [
            F('name', z('活動名稱', 'Activity'), 'text', { required: true }),
            F('desc', z('你做了什麼', 'What you did'), 'textarea', { required: true, wide: true, rows: 3 })
          ] }
      ],
      supplementIntro: z('2026–2027 申請季版本（A5a-S1）。MIT 寫的是「約 100–200 words」，這裡以 100–200 words 計；短答為 40–50 words；additional information 未載明字數。第 2、4 題接近原文，其餘為本站轉述。', '2026–2027 version (A5a-S1). MIT says "about 100–200 words"; this mock counts 100–200. Short responses are 40–50 words; the additional-information box states no limit. Prompts 2 and 4 are close to the original wording, the rest are paraphrased.'),
      supplement: [
        { id: 'essays', label: z('文書（各約 100–200 words）', 'Essays (about 100–200 words each)'), src: ['A5a-S1'], fields: [
          sq('fieldWhy', '你在上面選的領域，是什麼讓你對它產生興趣？', 'What led you to the field of study you selected above?', 200, 100, ['A5a-S1']),
          sq('different', '在你的教育歷程中，你曾以什麼方式做了與預期不同的事？', 'In what ways have you done something different than what was expected in your educational journey?', 200, 100, ['A5a-S1']),
          sq('problems', '你的個人與學業經驗，如何形塑你想用 MIT 的教育去處理的問題？你希望對哪個社群造成什麼影響？', 'How do your personal and academic experiences shape the problems you want to tackle with an MIT education, and what impact do you hope to have on your community?', 200, 100, ['A5a-S1']),
          sq('unexpected', '你如何處理一個意料之外的狀況或挑戰？從中學到什麼？', 'How did you manage a situation or challenge that you didn’t expect? What did you learn from it?', 200, 100, ['A5a-S1'])
        ] },
        { id: 'short', label: z('短答（各 40–50 words）', 'Short responses (40–50 words each)'), src: ['A5a-S1'], fields: [
          sq('fun', '你平常做什麼找樂子？', 'What do you do for fun?', 50, 40, ['A5a-S1']),
          sq('admire', '你欣賞的一個人，以及原因。', 'Someone you admire, and why.', 50, 40, ['A5a-S1']),
          sq('hours', '一個你可以聊上好幾個小時的主題。', 'A topic you could talk about for hours.', 50, 40, ['A5a-S1']),
          sq('generalist', '你是 generalist 還是 specialist？為什麼？', 'Are you a "generalist" or a "specialist", and why?', 50, 40, ['A5a-S1'])
        ] },
        { id: 'addl', label: z('Additional information（選填）', 'Additional information (optional)'), src: ['A5a-S1'], fields: [
          sqn('addl', '其他你想讓 MIT 知道的事。', 'Anything else you want MIT to know.', ['A5a-S1'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S3', 'A5a-S2'], note: z('Secondary School Report（SSR）與成績單必繳；輔導老師的推薦信本身是選填（「may」、「if available」）。要能送出申請，仍必須新增一位「School Counselor / Secondary School Report」推薦人（A5a-S3、S2）。', 'The Secondary School Report (SSR) and transcript are required; the counselor letter itself is optional ("may", "if available"). To submit, you must still add a "School Counselor / Secondary School Report" recommender (A5a-S3, S2).') },
        teacher: { min: 2, max: 2, src: ['A5a-S3'], note: z('兩位老師。MIT 建議一位數學／科學、一位人文／社會／語言，並寫明「這個組合不是硬性規定」（A5a-S3）。', 'Two teachers. MIT recommends one math/science and one humanities/social science/language teacher and states "this exact combination is not a hard requirement" (A5a-S3).') },
        other: { min: 0, max: 1, src: ['A5a-S3'], note: z('可加一位 supplemental recommender，「既非預期也非必要」，用途是提供「不同或額外的脈絡」；頁面沒有指定是誰（mentor、教練、雇主皆未點名），並說多數申請者與錄取者都沒有交。這在 MIT 自己的系統內邀請，不是 Common App 的 Other Recommender（A5a-S3）。', 'One supplemental recommender allowed, "neither expected nor required", for "different or additional context"; the page does not say who (mentor, coach, employer are not named) and says most applicants and admitted students do not submit one. Invited inside MIT’s own system, not as a Common App Other Recommender (A5a-S3).') }
      } },

    // ---- Caltech
    { id: 'caltech', name: z('Caltech', 'Caltech'),
      blurb: z('Common App 或 QuestBridge；REA／RD；$85；5 題必答（150–200／≤200／2×≤200／100–150 words）＋1 題選填；一位 STEM 老師加一位人文老師。', 'Common App or QuestBridge; REA/RD; $85; five required prompts (150–200 / up to 200 / 2 × up to 200 / 100–150 words) plus one optional; one STEM and one humanities teacher.'),
      src: ['A5a-S9', 'A5a-S8'],
      facts: [
        { t: z('Common App 或 QuestBridge；選繳的研究與作品集在送出申請後，透過 Caltech 自己的「Beaver Breakroom」入口上傳。', 'Common App or QuestBridge; optional research and portfolio materials are uploaded through Caltech’s own "Beaver Breakroom" portal after the application is submitted.'), tag: 'f', src: ['A5a-S9', 'A5a-S14'] },
        { t: z('報名費 $85 或 fee waiver；國際頁寫：「若你申請助學金，而且報名費是負擔」就提供減免。對國際申請者 need-aware。', 'Fee $85 or a fee waiver; the international page offers waivers "if you are applying for financial aid and the application fee presents a hardship". Need-aware for international applicants.'), tag: 'f', src: ['A5a-S9', 'A5a-S12'] },
        { t: z('文書頁標示 Fall 2027；Fall 2027 申請者送出補充文書前必須先讀 Caltech 的 AI 指引。', 'The essays page is labelled Fall 2027; Fall 2027 applicants must review Caltech’s AI guidelines before submitting the supplemental essays.'), tag: 'f', src: ['A5a-S8'] },
        { t: z('必修：4 年數學含 1 年微積分、1 年物理、1 年化學、4 年英文、2 年歷史／社會。學校沒開課時只接受 AP 5、IB HL/SL 6–7 或 Schoolhouse.world 認證，頁面寫「There will be no exceptions」。', 'Required: 4 years of math including a year of calculus, 1 year each of physics and chemistry, 4 years of English, 2 years of history/social science. If calculus, chemistry or physics was unavailable, the only substitutes are AP 5, IB HL/SL 6–7 or a Schoolhouse.world certification; "There will be no exceptions".'), tag: 'f', src: ['A5a-S11'] },
        { t: z('2026–27 需繳 SAT 或 ACT；REA 須在 2026-11-30 前、RD 在 2026-12-31 前考完。', 'SAT or ACT required for 2026–27; tests before Nov 30, 2026 for REA and before Dec 31, 2026 for RD.'), tag: 'f', src: ['A3a-S11'] },
        { t: z('要求、推薦信與補充資料三頁都沒提到校方面試；國際頁建議錄一段選擇性的 InitialView 對話與寫作樣本，「not graded」。', 'No admissions interview is mentioned on the requirements, letters or supplemental-materials pages; the international page recommends an optional InitialView conversation and writing sample, "not graded".'), tag: 'f', src: ['A5a-S9', 'A5a-S10', 'A5a-S12'] },
        { t: z('交研究論文時必須附一封督導者、mentor、成年合作者或行政人員的推薦信：申請者填表留下對方 email，Caltech 寄上傳連結。', 'A research-paper submission requires a letter from a supervisor, mentor, adult collaborator or administrator: the applicant files a form with the recommender’s email and Caltech sends the upload link.'), tag: 'f', src: ['A5a-S10', 'A5a-S9'] },
        { t: z('截止日頁面寫的是「Fall 2026 entry」，但日期（2026-11-01、2027-01-04、2027-05-01 回覆）對應 2026–27 申請季。本站推論標籤過期。', 'The deadlines page says "Fall 2026 entry" while giving Nov 1, 2026, Jan 4, 2027 and a May 1, 2027 reply date, which match the 2026–27 cycle. Inference: the label is stale.'), tag: 'i', src: ['A5a-S13', 'A3a-S10'] }
      ],
      deadlines: [
        { plan: 'REA', date: z('2026-11-01（其他資料 11-06）', '2026-11-01 (materials Nov 6)'), src: ['A5a-S13', 'A3a-S10'] },
        { plan: 'RD', date: z('2027-01-04（其他資料 01-10）', '2027-01-04 (materials Jan 10)'), src: ['A5a-S13', 'A3a-S10'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('REA', 'Restrictive Early Action（REA）', 'Restrictive Early Action (REA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S10']),
          F('area1', z('STEM 興趣領域 1', 'STEM area of interest 1'), 'text', { required: true, src: ['A5a-S8'], help: z('選一或兩個領域；頁面沒有描述按領域錄取（A5a-S8）。', 'Pick one or two areas; no admission by area is described (A5a-S8).') }),
          F('area2', z('STEM 興趣領域 2（選填）', 'STEM area of interest 2 (optional)'), 'text', { src: ['A5a-S8'] })
        ] }
      ],
      supplementIntro: z('Fall 2027 版（A5a-S8）。Scholarly Character 二選一、Scientific Drive 三選二，這裡用單選鈕記錄你選了哪題。Fun Question 接近原文，其餘為本站轉述。', 'Fall 2027 version (A5a-S8). Scholarly Character is 1 of 2 and Scientific Drive is 2 of 3; radios record which prompt you chose. The Fun Question is close to the original wording, the rest are paraphrased.'),
      supplement: [
        { id: 'interest', label: z('STEM Academic Interest（150–200 words）', 'STEM Academic Interest (150–200 words)'), src: ['A5a-S8'], fields: [
          sq('why', '你為什麼選擇上面那個領域？', 'Why did you choose your proposed area of interest?', 200, 150, ['A5a-S8'])
        ] },
        { id: 'character', label: z('Scholarly Character（二選一，≤200 words）', 'Scholarly Character (1 of 2, up to 200 words)'), src: ['A5a-S8'], fields: [
          F('pick', z('選題', 'Prompt chosen'), 'radio', { required: true, src: ['A5a-S8'], options: [
            o('collab', 'Collaboration：一次你的 STEM 學習被另一個人或群體形塑的經驗', 'Collaboration: a time your STEM learning was shaped by another person or group'),
            o('process', 'Process：一次你處理 STEM 問題的方法和結果一樣重要的經驗', 'Process: a time your approach to a STEM problem mattered as much as the outcome')] }),
          sq('essay', '你的回答', 'Your response', 200, 0, ['A5a-S8'])
        ] },
        { id: 'drive', label: z('Scientific Drive（三選二，各 ≤200 words）', 'Scientific Drive (2 of 3, up to 200 words each)'), src: ['A5a-S8'], fields: [
          F('pick1', z('第一題選題', 'First prompt chosen'), 'radio', { required: true, src: ['A5a-S8'], options: [
            o('learning', 'Learning：一個你掉進去的 STEM「兔子洞」', 'Learning: a STEM "rabbit hole"'),
            o('pursuing', 'Pursuing：一個長期抓住你注意力的 STEM 問題或專題', 'Pursuing: a STEM question or project that has held your attention over time'),
            o('making', 'Making：你創造、測試、修理、建模、寫程式、建造或重新設計的東西', 'Making: something you created, tested, repaired, modeled, coded, built or redesigned')] }),
          sq('essay1', '第一題回答', 'First response', 200, 0, ['A5a-S8']),
          F('pick2', z('第二題選題（與第一題不同）', 'Second prompt chosen (different from the first)'), 'radio', { required: true, src: ['A5a-S8'], options: [
            o('learning', 'Learning', 'Learning'), o('pursuing', 'Pursuing', 'Pursuing'), o('making', 'Making', 'Making')] }),
          sq('essay2', '第二題回答', 'Second response', 200, 0, ['A5a-S8'])
        ] },
        { id: 'fun', label: z('Fun Question（100–150 words）', 'Fun Question (100–150 words)'), src: ['A5a-S8'], fields: [
          sq('fun', '在 Caltech 社群裡，有什麼事是你會興奮地去做、分享、教、製作、發起或貢獻的？', 'What is something you would be excited to do, share, teach, make, start, or contribute as part of the Caltech community?', 150, 100, ['A5a-S8'])
        ] },
        { id: 'optional', label: z('Academic Short Answer（選填）', 'Academic Short Answer (optional)'), src: ['A5a-S8'], fields: [
          sqn('context', '關於你的學業準備、學校環境或學習經驗，有什麼想補充的。', 'Anything about your academic preparation, school context or learning experiences.', ['A5a-S8'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S9'], note: z('School Report 由輔導老師填；輔導老師「可以在 School Report 之外再交一封推薦信」（A5a-S9）。', 'The School Report is completed by the counselor, who "can submit a letter of recommendation in addition to the School Report" (A5a-S9).') },
        teacher: { min: 2, max: 2, src: ['A5a-S9', 'A5a-S10'], note: z('兩封，來自高中最後兩年：一封 STEM（Calculus 或更高、Chemistry、Physics、Biology），一封人文／社會（English、History、Government、Economics，寫作量大的課）。最後兩年沒修人文／社會課者（如 A-level）可改交第二封 STEM（A5a-S10）。', 'Two letters from the last two years of high school: one STEM ("Calculus (or beyond), Chemistry, Physics, or Biology") and one humanities/social science ("English, History, Government, or Economics", from a writing-heavy class). Applicants with no humanities/social science course in their last two years (e.g. A-level) may substitute a second STEM letter (A5a-S10).') },
        other: { min: 0, max: null, src: ['A5a-S10'], note: z('接受教練、mentor 或雇主的額外推薦信，前提是能提供明顯不同的評價；也接受多修的 STEM 課或任何非必修科目的老師／教授。上限未載明。交研究論文時，督導者或 mentor 的信是必要的（A5a-S10）。', 'Additional letters accepted from "a coach, mentor, or employer" if they give a significantly different evaluation, or from another teacher/professor in an extra STEM course or any non-required subject; no maximum stated. A research-paper submission makes the supervisor or mentor letter required (A5a-S10).') }
      } },

    // ---- Yale
    { id: 'yale', name: z('Yale University', 'Yale University'),
      blurb: z('Common App、Coalition（SCOIR）或 QuestBridge；SCEA／RD；報名費金額未載明；1 題 ≤200 words＋3 題 short takes（各 200 字元）＋1 篇 ≤400 words；兩位核心學科老師。', 'Common App, Coalition on SCOIR or QuestBridge; SCEA/RD; fee amount not stated; one answer up to 200 words, three 200-character short takes and one essay up to 400 words; two core-subject teachers.'),
      src: ['A5a-S27', 'A5a-S26'],
      facts: [
        { t: z('三種平台擇一，「每個申請季只能送一份、也只有一份申請」。', 'One of three platforms; "one, and only one, application per admissions cycle".'), tag: 'f', src: ['A5a-S27'] },
        { t: z('報名費金額：未載明（checked 2026-11-07）。「Yale 不核發自己的 fee waiver」，減免依 Common App 或 Coalition 的標準；QuestBridge 申請免費。國際生的減免規則未載明。', 'Fee amount: not stated (checked 2026-11-07). "Yale does not issue its own fee waivers"; waivers follow Common App or Coalition criteria; QuestBridge applications are free. International waiver rule: not stated.'), tag: 'f', src: ['A5a-S27', 'A5a-S28'] },
        { t: z('2026–27 需繳 ACT 或 SAT；AP／IB 不再滿足考試要求（2026-05-27 宣布）。', 'ACT or SAT required for 2026–27; AP/IB no longer satisfy the requirement (announced 2026-05-27).'), tag: 'f', src: ['A3a-S34', 'A3a-S35'] },
        { t: z('面試「只限受邀」，不能主動要求；「所有 Yale 面試都是 evaluative」；由校友或線上的 Senior Interviewers 進行；沒被面試不是負面訊號。', 'Interviews are "by invitation only" and cannot be requested; "All Yale interviews are evaluative"; conducted by alumni or by Senior Interviewers virtually; not being interviewed is not a negative signal.'), tag: 'f', src: ['A5a-S29'] },
        { t: z('對所有申請者 need-blind；國際 EA 申請者的助學金優先截止為 2026-12-01。', 'Need-blind for all applicants; international EA aid priority deadline Dec 1, 2026.'), tag: 'f', src: ['A3a-S38', 'A3a-S37'] },
        { t: z('「Yale 不規定一組必修的中學課程。」STEM 研究可作為選繳的補充資料。', '"Yale does not prescribe a set of secondary school courses that are required for admission." STEM research is accepted as an optional supplement.'), tag: 'f', src: ['A5a-S30', 'A5a-S27'] },
        { t: z('QuestBridge 申請者只答兩題短答；short takes 與 400 words 文章是 Common App 與 Coalition 申請者才有。', 'QuestBridge applicants answer only the two short answers; the short takes and the 400-word essay are for Common App and Coalition applicants.'), tag: 'f', src: ['A5a-S26'] }
      ],
      deadlines: [
        { plan: 'SCEA', date: z('2026-11-01', '2026-11-01'), src: ['A3a-S33'] },
        { plan: 'RD', date: z('2027-01-02', '2027-01-02'), src: ['A3a-S33'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('SCEA', 'Single-Choice Early Action（SCEA）', 'Single-Choice Early Action (SCEA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S33']),
          F('area1', z('學術領域 1', 'Academic area 1'), 'text', { required: true, src: ['A5a-S26'], help: z('最多選三個學術領域；頁面沒有描述按主修錄取（A5a-S26）。', 'Select up to three academic areas; no admission by major is described (A5a-S26).') }),
          F('area2', z('學術領域 2（選填）', 'Academic area 2 (optional)'), 'text', { src: ['A5a-S26'] }),
          F('area3', z('學術領域 3（選填）', 'Academic area 3 (optional)'), 'text', { src: ['A5a-S26'] })
        ] }
      ],
      supplementIntro: z('2026–27 版，頁面有標註（A5a-S26）。Short takes 以字元計（200 字元，約 35 words），不是以字數計。400 words 的文章三選一，這裡用單選鈕記錄你選了哪題。第一題接近原文，其餘為本站轉述。', '2026–27 version, labelled on the page (A5a-S26). Short takes are counted in characters (200 characters, about 35 words), not words. The 400-word essay is 1 of 3; a radio records your choice. The first prompt is close to the original wording, the rest are paraphrased.'),
      supplement: [
        { id: 'short', label: z('短答（≤200 words）', 'Short answer (up to 200 words)'), src: ['A5a-S26'], fields: [
          sq('topic', '談一個讓你興奮、而且與你上面選的一或多個學術領域相關的主題或想法。你為什麼被它吸引？', 'Tell us about a topic or idea that excites you and is related to one or more academic areas you selected above. Why are you drawn to it?', 200, 0, ['A5a-S26'])
        ] },
        { id: 'takes', label: z('Short takes（各 200 字元）', 'Short takes (200 characters each)'), src: ['A5a-S26'], fields: [
          sqc('create', '你想開的一門大學課、想寫的一本書或想做的一件作品。', 'A college course, book or artwork you would create.', 200, ['A5a-S26']),
          sqc('grow', '你希望在大學裡成長的一個面向。', 'An aspect of yourself you hope to grow in college.', 200, ['A5a-S26']),
          sqc('elsewhere', '關於你、而申請表其他地方沒提到的一件事。', 'Something about you not found elsewhere in the application.', 200, ['A5a-S26'])
        ] },
        { id: 'essay', label: z('Yale essay（三選一，≤400 words）', 'Yale essay (1 of 3, up to 400 words)'), src: ['A5a-S26'], fields: [
          F('pick', z('選題', 'Prompt chosen'), 'radio', { required: true, src: ['A5a-S26'], options: [
            o('discuss', '一次與持相反觀點的人的討論', 'A discussion with someone holding an opposing view'),
            o('community', '你感到歸屬的一個社群', 'Membership in a community you feel connected to'),
            o('experience', '個人經驗中會讓大學更豐富的一個元素', 'An element of personal experience that will enrich the college')] }),
          sq('essay', '你的回答', 'Your response', 400, 0, ['A5a-S26'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S28'], note: z('輔導老師推薦信必繳；沒有輔導老師時由行政人員寫（A5a-S28）。', 'Counselor letter required; an administrator writes it if there is no counselor (A5a-S28).') },
        teacher: { min: 2, max: 2, src: ['A5a-S28'], note: z('兩位近期教過你核心學科的老師（語言、數學、科學、社會；這些領域的選修如資訊科學也算）（A5a-S28）。', 'Two teachers who taught you recently in core subjects (languages, math, sciences, social studies; electives in those areas such as computer science count) (A5a-S28).') },
        other: { min: 0, max: null, src: ['A5a-S28'], note: z('表演藝術、工作室藝術與領導類老師不符合老師推薦信的要求，但「可作為 supplemental letters 送出」；上限未載明。研究 mentor、教練、雇主的信：未載明（checked 2026-11-07）（A5a-S28）。', 'Performing arts, studio art and leadership teachers do not meet the teacher requirement but "may be submitted as supplemental letters"; no cap stated. Letters from research mentors, coaches or employers: not stated (checked 2026-11-07) (A5a-S28).') }
      } },

    // ---- Princeton
    { id: 'princeton', name: z('Princeton University', 'Princeton University'),
      blurb: z('Common App；SCEA／RD；報名費金額未載明；A.B. 或 B.S.E. 題 ≤250＋Your Voice 400–500＋服務題 ≤250＋3 題 ≤50 words；另須交一篇評分過的書面報告；兩位不同領域的老師。', 'Common App; SCEA/RD; fee amount not stated; A.B. or B.S.E. prompt up to 250, "Your Voice" 400–500, service prompt up to 250 and three prompts up to 50 words; a graded written paper is also required; two teachers in different areas.'),
      src: ['A5a-S31', 'A5a-S32'],
      facts: [
        { t: z('申請表「必須」透過 Common App 線上送出；apply 頁另列 QuestBridge。藝術補充與其他上傳在送出後走 Applicant Status Portal。', 'The checklist says the application "must" be submitted online through Common App; QuestBridge is also listed. The arts supplement and other uploads go through the Applicant Status Portal after submission.'), tag: 'f', src: ['A5a-S31'] },
        { t: z('報名費金額：未載明（checked 2026-11-07）。「所有低收入學生都符合 Princeton 專屬 fee waiver」，不需輔導老師核准；也接受 Common App、ACT、College Board、NACAC 的減免。', 'Fee amount: not stated (checked 2026-11-07). "All low-income students are eligible for the Princeton-specific fee waiver", which needs no counselor approval; Common App, ACT, College Board and NACAC waivers also accepted.'), tag: 'f', src: ['A5a-S31'] },
        { t: z('必交評分過的書面報告：近三年的英文、社會或歷史課，至少一頁，附題目、分數與老師評語；要「論說、有論點的分析寫作，而不是科學研究」；原文須為英文。可隨 Common App 上傳，或之後上傳 portal、email 或郵寄。', 'A graded written paper is required: from English, social studies or history in the last three years, at least one page, with the prompt, grade and teacher comments; "expository, thesis-driven analytical writing rather than science research"; originally in English. Upload it with the Common App, or later via the portal, email or post.'), tag: 'f', src: ['A5a-S34', 'V4-T1'] },
        { t: z('Fall 2027 入學考試選繳；2027–28 申請季（fall 2028 入學）起恢復必繳。', 'Test-optional for fall 2027 entry; testing required again from the 2027–28 cycle (fall 2028 entry).'), tag: 'f', src: ['A5a-S31', 'V4-T2'] },
        { t: z('選擇性校友面試，30–45 分鐘的「非正式對話」，申請送出後才安排；可在 Princeton 專屬題裡選擇不參加，不會不利；不保證排得到；不得錄音。是否 evaluative：未載明。', 'Optional alumni interview, a 30–45 minute "informal conversation" arranged after the application arrives; you may opt out in the Princeton-specific questions with no disadvantage; not guaranteed; must not be recorded. Evaluative status: not stated.'), tag: 'f', src: ['A5a-S31'] },
        { t: z('Need-blind，助學金政策不分國籍。', 'Need-blind; the aid policy is the same regardless of citizenship.'), tag: 'f', src: ['A5a-S35'] },
        { t: z('SCEA 11-01 當天：申請、評分報告、School Report、輔導老師信、成績單與兩封老師推薦信全部到齊；藝術補充 11-06、PFAA 11-09。「若已申請三次，招生辦通常不再審查之後的申請。」', 'SCEA Nov 1: application, graded paper, School Report, counselor letter, transcript and both teacher evaluations all due that day; arts supplement Nov 6; PFAA Nov 9. "If a student has submitted an application on three separate occasions, the Office of Admission generally will not review subsequent applications."'), tag: 'f', src: ['V4-T3', 'V4-T4'] },
        { t: z('題目頁沒有申請季標註；本站視為 2026–27，因為 2026-11-07 仍在線上。', 'The questions page carries no cycle label; taken as 2026–27 because live on 2026-11-07.'), tag: 'a', src: ['A5a-S32'] }
      ],
      deadlines: [
        { plan: 'SCEA', date: z('2026-11-01（評分報告同日；藝術補充 11-06）', '2026-11-01 (graded paper the same day; arts supplement Nov 6)'), src: ['A3a-S41', 'V4-T4'] },
        { plan: 'RD', date: z('2027-01-01（藝術補充 01-08）', '2027-01-01 (arts supplement Jan 8)'), src: ['A3a-S41', 'V4-T4'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('SCEA', 'Single-Choice Early Action（SCEA）', 'Single-Choice Early Action (SCEA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S41']),
          F('degree', z('學位', 'Degree'), 'radio', { required: true, src: ['A5a-S32', 'A5a-S33'], options: [
            o('ab', 'A.B.（或尚未決定）', 'A.B. (or undecided)'),
            o('bse', 'B.S.E.', 'B.S.E.')], help: z('你答的是 A.B. 題或 B.S.E. 題，由這個選擇決定（A5a-S32）。', 'This choice decides whether you answer the A.B. or the B.S.E. prompt (A5a-S32).') }),
          F('interview', z('校友面試', 'Alumni interview'), 'radio', { required: true, src: ['A5a-S31'], options: [
            o('yes', '願意接受安排', 'Willing to be interviewed'),
            o('optout', '選擇不參加（頁面寫明不會不利）', 'Opt out (the page says this brings no disadvantage)')] }),
          F('paperSubject', z('評分報告：課程與科目', 'Graded paper: course and subject'), 'text', { required: true, src: ['A5a-S34'], help: z('英文、社會或歷史課，近三年內，至少一頁，附題目、分數與評語（A5a-S34）。', 'English, social studies or history, within the last three years, at least one page, with prompt, grade and comments (A5a-S34).') }),
          F('paperRoute', z('評分報告的交件方式', 'How you will submit the graded paper'), 'radio', { required: true, src: ['V4-T1'], options: [
            o('commonapp', '隨 Common App 上傳', 'Upload with the Common App'),
            o('later', '送出後：applicant portal、email 或郵寄', 'After submitting: applicant portal, email or post')] })
        ] }
      ],
      supplementIntro: z('題目頁無申請季標註（A5a-S32）。只會顯示你在「學校題目」選的學位對應的那一題。題目為本站轉述。', 'The questions page carries no cycle label (A5a-S32). Only the prompt for the degree chosen under Questions is shown. Prompts are paraphrased.'),
      supplement: [
        { id: 'academic', label: z('學術題（≤250 words）', 'Academic prompt (up to 250 words)'), src: ['A5a-S32'], fields: [
          sq('ab', 'A.B. 或未定：哪些學術領域引起你的好奇，Princeton 的課程如何適合它們？', 'A.B. or undecided: the academic areas that pique your curiosity and how Princeton’s programs suit them.', 250, 0, ['A5a-S32'], { showIf: { path: path('princeton', 'degree'), equals: 'ab' } }),
          sq('bse', 'B.S.E.：你為什麼想在 Princeton 讀工程？你有過哪些工程方面的經驗或接觸，課程如何適合你的興趣？', 'B.S.E.: why study engineering at Princeton, your experiences in or exposure to engineering, and how the programs suit your interests.', 250, 0, ['A5a-S32'], { showIf: { path: path('princeton', 'degree'), equals: 'bse' } })
        ] },
        { id: 'voice', label: z('Your Voice（400–500 words）', 'Your Voice (400–500 words)'), src: ['A5a-S32'], fields: [
          sq('voice', '你的生活經驗會如何形塑你在校園裡參與的對話？', 'How your lived experience will shape the conversations you take part in on campus.', 500, 400, ['A5a-S32'])
        ] },
        { id: 'service', label: z('服務與公民參與（≤250 words）', 'Service and civic engagement (up to 250 words)'), src: ['A5a-S32'], fields: [
          sq('service', '你的故事如何與服務和公民參與的理念交會？', 'How your story intersects with the ideals of service and civic engagement.', 250, 0, ['A5a-S32'])
        ] },
        { id: 'more', label: z('More About You（各 ≤50 words）', 'More About You (up to 50 words each)'), src: ['A5a-S32'], fields: [
          sq('skill', '你想在大學學會的一項新技能。', 'A new skill you want to learn in college.', 50, 0, ['A5a-S32']),
          sq('joy', '什麼帶給你快樂？', 'What brings you joy?', 50, 0, ['A5a-S32']),
          sq('song', '一首代表你現在人生的歌。', 'A song that represents your life right now.', 50, 0, ['A5a-S32'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S31', 'V4-T3'], note: z('School Report 與 Counselor Recommendation 是兩個分開的項目；清單特別提醒不要當成同一件事（A5a-S31、V4-T3）。', 'The School Report and the Counselor Recommendation are separate items; the checklist warns not to treat them as one (A5a-S31, V4-T3).') },
        teacher: { min: 2, max: 2, src: ['A5a-S31'], note: z('兩位在高階課程（AP、IB HL/SL、A-level）教過你的核心科目老師，須來自「不同學術領域」（英文、語言、人文、社會、自然科學、數學）（A5a-S31）。', 'Two teachers who taught you in higher-level courses (AP, IB HL/SL, A-level) "in different academic areas", core subjects (English, language, humanities, social sciences, natural sciences, math) (A5a-S31).') },
        other: { min: 0, max: null, src: ['A5a-S31', 'V4-T3'], note: z('選填的額外推薦信：未載明（checked 2026-11-07）。清單上只有兩封老師推薦信與輔導老師推薦信，沒有 Other Recommender 這一類；唯一的選填項目是藝術補充（A5a-S31、V4-T3）。', 'Optional additional letters: not stated (checked 2026-11-07). The checklist carries two teacher letters and the counselor letter only, with no Other Recommender category; the single optional component is the arts supplement (A5a-S31, V4-T3).') }
      } },

    // ---- Columbia
    { id: 'columbia', name: z('Columbia University', 'Columbia University'),
      blurb: z('Common App、Coalition（Scoir）或 QuestBridge；ED／RD；$85；1 題清單 ≤100 words＋5 題各 ≤150 words；申請 Columbia College 或 Columbia Engineering；兩位老師；沒有面試。', 'Common App, Coalition on Scoir or QuestBridge; ED/RD; $85; one list up to 100 words and five answers up to 150 words each; apply to Columbia College or Columbia Engineering; two teachers; no interviews.'),
      src: ['A5a-S36', 'A5a-S37'],
      facts: [
        { t: z('報名費 $85，不退；若報名費「對家庭是重大的經濟負擔」可在申請表內申請「自動 fee waiver」，條件例子包括家庭收入低於 $66,000 美元。沒有另訂國際生規則。', 'Fee $85, nonrefundable; an "automatic fee waiver" is requested in the application if the fee is "a significant financial burden", with examples including household income below $66,000 USD. No separate international rule is stated.'), tag: 'f', src: ['A5a-S38'] },
        { t: z('申請 Columbia College 或 Columbia Engineering 其中之一。Engineering「強烈建議」4 年數學到微積分、4 年實驗科學含 1 年化學與 1 年物理。', 'You apply to Columbia College or Columbia Engineering. Engineering "strongly advises" 4 years of math through calculus and 4 years of lab science including a year each of chemistry and physics.'), tag: 'f', src: ['A5a-S36'] },
        { t: z('「面試不是申請流程的一部分。」（2023-05-18 公告）', '"Interviews are not a part of the application process" (announcement dated May 18, 2023).'), tag: 'f', src: ['A5a-S36'] },
        { t: z('Fall 2027 入學考試選繳；2027–28 申請季起需繳 SAT／ACT。', 'Test-optional for Fall 2027 entry; SAT/ACT required from the 2027–28 cycle.'), tag: 'f', src: ['A5a-S36', 'A3a-S47'] },
        { t: z('對國際生 need-aware；申請助學金的國際 ED 申請者「可能被延到 Regular Decision」。', 'Need-aware for international applicants; international ED applicants who apply for aid "may be deferred to Regular Decision".'), tag: 'f', src: ['A3a-S50', 'A3a-S49'] },
        { t: z('選繳：約一頁的研究摘要（加上角色、時間長度與 mentor 聯絡方式的短題）、SlideRoom 的創作與 Maker 作品集、Schoolhouse.world 認證。', 'Optional: a research abstract of about one page (plus short questions on role, duration and mentor contact), creative and Maker portfolios via SlideRoom, Schoolhouse.world certifications.'), tag: 'f', src: ['A5a-S39'] },
        { t: z('題目頁標示「2026-2027 Columbia-Specific Questions」，2026-07-28 更新。說明寫「六題各 150 words」，實際列出五題 150 words 加一題 100 words 清單。本站推論：六題把清單算進去了，以各題標示的字數為準。', 'The questions page is labelled "2026-2027 Columbia-Specific Questions", updated July 28, 2026. The instructions say "each of the six short answer questions" at 150 words, but five 150-word questions plus a 100-word list are listed. Inference: the count includes the list; the per-question limits are the operative ones.'), tag: 'i', src: ['A5a-S37'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-01（SlideRoom 補充同日；ED 助學金 11-15）', '2026-11-01 (SlideRoom supplements the same day; ED aid Nov 15)'), src: ['A3a-S46', 'A3a-S48'] },
        { plan: 'RD', date: z('2027-01-01（SlideRoom 補充同日）', '2027-01-01 (SlideRoom supplements the same day)'), src: ['A3a-S46', 'A3a-S48'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S46']),
          F('school', z('申請的學院', 'School'), 'radio', { required: true, src: ['A5a-S36'], options: [
            o('cc', 'Columbia College', 'Columbia College'),
            o('seas', 'Columbia Engineering', 'Columbia Engineering')] }),
          F('areas', z('偏好的學習領域（選填）', 'Preferred areas of study (optional)'), 'text', { src: ['A5a-S37'], help: z('第五題會問你為什麼被所選學院的這些領域吸引（A5a-S37）。', 'Question 5 asks what attracts you to these areas at the school you chose (A5a-S37).') })
        ] }
      ],
      supplementIntro: z('2026–27 版，頁面有標註（A5a-S37）。清單題用逗號或分號分隔，不寫作者名。題目為本站轉述。', '2026–27 version, labelled on the page (A5a-S37). The list is comma- or semicolon-separated, without author names. Prompts are paraphrased.'),
      supplement: [
        { id: 'list', label: z('清單（≤100 words）', 'List (up to 100 words)'), src: ['A5a-S37'], fields: [
          sq('texts', '列出課堂之外，對你的智識發展有貢獻的文本、資源與媒體。', 'A list of texts, resources and outlets that contributed to your intellectual development outside your courses.', 100, 0, ['A5a-S37'])
        ] },
        { id: 'short', label: z('短答（各 ≤150 words）', 'Short answers (up to 150 words each)'), src: ['A5a-S37'], fields: [
          sq('lived', '你生活經驗的一個面向，以及它如何形塑你的學習與貢獻。', 'An aspect of your lived experience and how it shapes your learning and contribution.', 150, 0, ['A5a-S37']),
          sq('disagree', '一次你與人意見不同的經驗，以及你如何與對方互動。', 'A time you disagreed with someone and how you engaged.', 150, 0, ['A5a-S37']),
          sq('adversity', '你如何面對逆境，以及你因此有什麼改變。', 'Navigating adversity and how you changed.', 150, 0, ['A5a-S37']),
          sq('why', '為什麼是 Columbia？', 'Why Columbia?', 150, 0, ['A5a-S37']),
          sq('areas', '你偏好的領域在 Columbia College 或 Columbia Engineering 有什麼吸引你？', 'What attracts you to your preferred areas of study at Columbia College or Columbia Engineering?', 150, 0, ['A5a-S37'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S36'], note: z('輔導老師推薦信包含在 Secondary School Report 裡（A5a-S36）。', 'The counselor recommendation is part of the Secondary School Report (A5a-S36).') },
        teacher: { min: 2, max: 2, src: ['A5a-S36'], note: z('兩位學科老師；申請 Columbia Engineering 時「其中一封必須來自數學或科學老師」（A5a-S36）。', 'Two teachers from academic disciplines; for Columbia Engineering "one of the teacher recommendations must come from a math or science teacher" (A5a-S36).') },
        other: { min: 0, max: null, src: ['A5a-S39', 'A5a-S36'], note: z('交研究摘要的申請者，歡迎附研究 mentor 的信，可用 email、郵寄，或「透過申請平台作為 additional recommendation letter」。其他額外推薦人（教練、雇主）：未載明（checked 2026-11-07）（A5a-S39、S36）。', 'For applicants submitting a research abstract, a research mentor letter is welcomed, by email, mail, or "through the application platform as an additional recommendation letter". Other additional recommenders (coach, employer): not stated (checked 2026-11-07) (A5a-S39, S36).') }
      } },

    // ---- UPenn
    { id: 'penn', name: z('University of Pennsylvania', 'University of Pennsylvania'),
      blurb: z('Common App、Coalition 或 QuestBridge；ED／RD；$75；3 題各 50–200 words（含 1 題學院專屬）；只要一位老師加輔導老師；申請四個學院之一。', 'Common App, Coalition or QuestBridge; ED/RD; $75; three prompts of 50–200 words (one school-specific); one teacher plus the counselor; apply to one of four schools.'),
      src: ['A5a-S41', 'A5a-S43'],
      facts: [
        { t: z('報名費 $75，在 Common App 或 Coalition 的 fee-waiver 區段申請減免。國際生的減免規則未載明（checked 2026-11-07）。', 'Fee $75; waivers requested in the Common App or Coalition fee-waiver section. International waiver rule: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5a-S41'] },
        { t: z('「嚴格說你申請的不是 Penn，而是四個大學部學院之一」，或一個 coordinated dual-degree program。', '"You don’t technically apply to Penn, you apply to one of our four undergraduate schools", or one coordinated dual-degree program.'), tag: 'f', src: ['A5a-S45', 'A5a-S40'] },
        { t: z('「第一年申請者需要兩封推薦信」：一封輔導老師，一封核心科目老師。', '"We require two letters of recommendation for first-year applicants": one counselor and one core-subject teacher.'), tag: 'f', src: ['A5a-S42', 'A5a-S41'] },
        { t: z('面試政策：未載明（checked 2026-11-07）。', 'Interview policy: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5a-S40', 'A5a-S41'] },
        { t: z('補充資料：多數申請者不交；只有 VIC 申請者可交作品集，其他人用活動與 additional information 欄。', 'Supplementary materials: most applicants submit none; only VIC applicants may submit portfolios, others use the activities and additional-information sections.'), tag: 'f', src: ['A5a-S46'] },
        { t: z('2026–27 需繳 SAT 或 ACT；對國際生 need-aware；ED 的助學金文件 11-06。', 'SAT or ACT required for 2026–27; need-aware for international applicants; ED aid documents due Nov 6.'), tag: 'f', src: ['A3a-S53', 'A4-S35', 'A3a-S52'] },
        { t: z('課程準備依學院：Engineering 看物理與數學「尤其是微積分」；Nursing 看化學與生物；Wharton 看數學含微積分。', 'Course preparation by school: Engineering wants physics and mathematics "particularly calculus"; Nursing chemistry and biology; Wharton mathematics including calculus.'), tag: 'f', src: ['A5a-S44'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-01（助學金文件 11-06）', '2026-11-01 (aid documents Nov 6)'), src: ['A3a-S51', 'A3a-S52'] },
        { plan: 'RD', date: z('2027-01-05', '2027-01-05'), src: ['A3a-S51'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S51']),
          F('school', z('申請的學院', 'School'), 'radio', { required: true, src: ['A5a-S45', 'A5a-S43'], options: [
            o('cas', 'College of Arts and Sciences', 'College of Arts and Sciences'),
            o('wharton', 'Wharton School', 'Wharton School'),
            o('seas', 'Penn Engineering', 'Penn Engineering'),
            o('nursing', 'Penn Nursing', 'Penn Nursing')] }),
          F('major', z('預計主修', 'Intended major'), 'text', { src: ['A5a-S43'], help: z('Engineering 的題目會問到「你選的預計主修」（A5a-S43）。', 'The Engineering prompt refers to "the intended major you selected" (A5a-S43).') }),
          F('dual', z('Coordinated dual-degree program（選填）', 'Coordinated dual-degree program (optional)'), 'text', { src: ['A5a-S43'], help: z('Huntsman、LSM、M&T、NHCM、VIPER、VIC 各有額外文書（50–200 或 50–400 words），筆記只有摘要，本頁未逐題模擬（A5a-S43）。', 'Huntsman, LSM, M&T, NHCM, VIPER and VIC add essays (50–200 or 50–400 words); the note holds only a summary, so they are not modelled here (A5a-S43).') })
        ] }
      ],
      supplementIntro: z('2026–27 版，頁面有標註（A5a-S43）。學院題只會顯示你在「學校題目」選的那一個學院。題目為本站轉述。', '2026–27 version, labelled on the page (A5a-S43). Only the school prompt for the school chosen under Questions is shown. Prompts are paraphrased.'),
      supplement: [
        { id: 'all', label: z('全員必答（各 50–200 words）', 'All applicants (50–200 words each)'), src: ['A5a-S43'], fields: [
          sq('thanks', '寫一封短的感謝信給一個你還沒謝過的人。', 'A thank-you note to someone you have not yet thanked.', 200, 50, ['A5a-S43']),
          sq('community', '你會如何在 Penn 探索社群？', 'How will you explore community at Penn?', 200, 50, ['A5a-S43'])
        ] },
        { id: 'school', label: z('學院題（50–200 words）', 'School-specific prompt (50–200 words)'), src: ['A5a-S43'], fields: [
          sq('cas', 'College：你對什麼感到好奇，會如何在 College 裡追求它？', 'College: something you are curious about and how you would pursue it in the College.', 200, 50, ['A5a-S43'], { showIf: { path: path('penn', 'school'), equals: 'cas' } }),
          sq('wharton', 'Wharton：一個當前的議題，以及 Wharton 的教育會如何幫你探索它。', 'Wharton: a current issue and how a Wharton education would help you explore it.', 200, 50, ['A5a-S43'], { showIf: { path: path('penn', 'school'), equals: 'wharton' } }),
          sq('seas', 'Engineering：你打算如何追求工程方面的興趣，尤其在你選的預計主修裡。', 'Engineering: how you plan to pursue your engineering interests, "particularly within the intended major you selected".', 200, 50, ['A5a-S43'], { showIf: { path: path('penn', 'school'), equals: 'seas' } }),
          sq('nursing', 'Nursing：為什麼是 Nursing？你想成為什麼樣的專業人員？會如何促進醫療照護的公平？', 'Nursing: why Nursing, your future professional self, and your contribution to equity in healthcare.', 200, 50, ['A5a-S43'], { showIf: { path: path('penn', 'school'), equals: 'nursing' } })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S42', 'A5a-S41'] },
        teacher: { min: 1, max: 2, src: ['A5a-S42'], note: z('必繳一位核心科目（數學、科學、歷史、英文、外語）老師，最好是 11 或 12 年級；沒有學院別的科目規定。第二位老師（不同科目）會占用唯一的額外推薦信名額（A5a-S42）。', 'One required teacher in a core subject (math, science, history, English, foreign language), preferably junior or senior year; no school-specific subject rule. A second teacher (different subject area) uses the single additional-letter slot (A5a-S42).') },
        other: { min: 0, max: 1, src: ['A5a-S42'], note: z('選填一封額外推薦信：第二位老師，或非學科的推薦人「例如 supervisor、mentor、教練、藝術或音樂老師、宗教或文化領袖」；「我們只會審閱一封額外推薦信」；不建議家人或親近的家庭友人（A5a-S42）。', 'One optional additional letter: a second teacher or a non-academic recommender "such as a supervisor, mentor, coach, arts or music instructor, spiritual leader, or cultural leader"; "we will only review one additional letter"; family members and close family friends discouraged (A5a-S42).') }
      } },

    // ---- Brown
    { id: 'brown', name: z('Brown University', 'Brown University'),
      blurb: z('Common App 加 Brown Member section；ED／RD；$80；4 篇（2×150–250、2×100–150 words）；PLME 加 3 篇、Brown|RISD 加 1 篇；兩位主科老師；選繳 90 秒影片。', 'Common App plus the Brown Member section; ED/RD; $80; four essays (2 × 150–250, 2 × 100–150 words); PLME adds three, Brown|RISD adds one; two major-subject teachers; optional 90-second video.'),
      src: ['A5a-S47', 'A5a-S49'],
      facts: [
        { t: z('Common App 加 Brown Member section；音樂與視覺藝術走 SlideRoom，其他上傳走 Brown Applicant Portal。', 'Common App plus the Brown Member section; SlideRoom for music and visual art, the Brown Applicant Portal for other uploads.'), tag: 'f', src: ['A5a-S47', 'A5a-S48', 'A5a-S50'] },
        { t: z('報名費 $80，不退。FRPL、低收入計畫參與者、社區型升學機構、STARS@Brown 與所有 Providence 公立高中畢業生自動減免；其他人可用 College Board 或 NACAC 表格，或由輔導老師寄信申請。國際生專屬規則未載明。', 'Fee $80, non-refundable. Automatic waivers for FRPL, low-income program participants, community-based access organizations, STARS@Brown and all Providence public school seniors; others may request via College Board or NACAC forms or a counselor email. International-specific rule: not stated.'), tag: 'f', src: ['A5a-S47'] },
        { t: z('申請者列出志願 concentration；「我們不按學術興趣錄取」。PLME 與 Brown|RISD 是另外的學程申請，有額外文書。', 'Applicants list top concentration choices; "we do not admit students by academic interest". PLME and Brown|RISD are separate program applications with extra essays.'), tag: 'f', src: ['A5a-S52', 'A5a-S47'] },
        { t: z('選繳 90 秒以內的影片自介：Brown Applicant Portal、Glimpse（限美國高中／QuestBridge）或 InitialView 面試（國際或非傳統申請者）。第一年申請頁面沒有描述校方面試。', 'Optional video introduction of no more than 90 seconds via the Brown Applicant Portal, Glimpse (U.S. high schools/QuestBridge only) or an InitialView interview (international or non-traditional applicants). No admissions interview is described on the first-year pages.'), tag: 'f', src: ['A5a-S51', 'A5a-S48'] },
        { t: z('2026–27 需繳 SAT 或 ACT；對國際一年級申請者 need-blind。', 'SAT or ACT required for 2026–27; need-blind for international first-year applicants.'), tag: 'f', src: ['A3a-S60', 'A3a-S59'] },
        { t: z('學術論文或研究摘要可附一段說明上傳 portal。', 'An academic paper or research abstract may be uploaded to the portal with a context note.'), tag: 'f', src: ['A5a-S50'] },
        { t: z('頁面寫「所有第一年與轉學申請者都要寫四篇」，PLME 與 BRDD 段落卻寫「除了所有第一年申請者必寫的三篇之外」。本站推論：頁面內部不一致，四篇清單是現行版本。', 'The page says "Four essays are required for all first-year and transfer applicants", while the PLME and BRDD paragraphs say "in addition to the three essays required of all first-year applicants". Inference: an internal inconsistency; the four-essay list is the current one.'), tag: 'i', src: ['A5a-S47'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-01（SlideRoom 11-04）', '2026-11-01 (SlideRoom Nov 4)'), src: ['A3a-S56', 'A3a-S58'] },
        { plan: 'RD', date: z('2027-01-05（SlideRoom 01-07）', '2027-01-05 (SlideRoom Jan 7)'), src: ['A3a-S57', 'A3a-S58'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S56']),
          F('program', z('學程', 'Program'), 'radio', { required: true, src: ['A5a-S47'], options: [
            o('std', '一般第一年申請', 'Standard first-year application'),
            o('plme', 'Program in Liberal Medical Education（PLME）', 'Program in Liberal Medical Education (PLME)'),
            o('brdd', 'Brown|RISD Dual Degree（BRDD）', 'Brown|RISD Dual Degree (BRDD)')] }),
          F('conc1', z('志願 concentration 1', 'Concentration choice 1'), 'text', { required: true, src: ['A5a-S52'], help: z('不按學術興趣錄取（A5a-S52）。', 'Not admitted by academic interest (A5a-S52).') }),
          F('conc2', z('志願 concentration 2（選填）', 'Concentration choice 2 (optional)'), 'text', { src: ['A5a-S52'] }),
          F('conc3', z('志願 concentration 3（選填）', 'Concentration choice 3 (optional)'), 'text', { src: ['A5a-S52'] })
        ] }
      ],
      supplementIntro: z('2026–27 版，頁面有標註（A5a-S47）。PLME 與 BRDD 的題目只在「學校題目」選了該學程時顯示。第三題接近原文，其餘為本站轉述；第一題所引用的 2025 年開學典禮段落本頁未重現。', '2026–27 version, labelled on the page (A5a-S47). PLME and BRDD prompts appear only when that program is chosen under Questions. The third prompt is close to the original wording, the rest are paraphrased; the 2025 Convocation passage quoted in prompt 1 is not reproduced here.'),
      supplement: [
        { id: 'essays', label: z('四篇文書', 'Four essays'), src: ['A5a-S47'], fields: [
          sq('open', '你會如何運用頁面引用的 2025 年開學典禮段落中的特質（或其他特質），形塑你面對 Open Curriculum 的方式？（150–250 words）', 'How you will use the characteristics in the quoted 2025 Convocation passage (or others) to shape your approach to the Open Curriculum (150–250 words).', 250, 150, ['A5a-S47']),
          sq('growing', '成長過程中的一個面向如何啟發或挑戰了你，這讓你能做出什麼貢獻？（150–250 words）', 'How an aspect of your growing up inspired or challenged you, and what contributions this allows (150–250 words).', 250, 150, ['A5a-S47']),
          sq('teach', '如果你可以教一門任何主題的課，不論學術與否，會是什麼？（100–150 words）', 'If you could teach a class on any one thing, whether academic or otherwise, what would it be? (100–150 words)', 150, 100, ['A5a-S47']),
          sq('joy', '一件帶給你快樂的事。（100–150 words）', 'Something that brings you joy (100–150 words).', 150, 100, ['A5a-S47'])
        ] },
        { id: 'plme', label: z('PLME（3 篇，各 250 words）', 'PLME (three essays, 250 words each)'), src: ['A5a-S47'], fields: [
          sq('medicine', '為什麼是醫學？', 'Why medicine?', 250, 0, ['A5a-S47'], { showIf: { path: path('brown', 'program'), equals: 'plme' } }),
          sq('whyplme', '為什麼是 PLME？', 'Why PLME?', 250, 0, ['A5a-S47'], { showIf: { path: path('brown', 'program'), equals: 'plme' } }),
          sq('beyond', '醫學之外，什麼會讓你成為一位好醫師？', 'Something beyond medicine that will make you a good doctor.', 250, 0, ['A5a-S47'], { showIf: { path: path('brown', 'program'), equals: 'plme' } })
        ] },
        { id: 'brdd', label: z('Brown|RISD Dual Degree（1 篇，650 words）', 'Brown|RISD Dual Degree (one essay, 650 words)'), src: ['A5a-S47'], fields: [
          sq('brdd', 'BRDD 文書（題目全文未收錄，筆記只記錄 650 words 上限）。', 'BRDD essay (prompt text not captured; the note records only the 650-word limit).', 650, 0, ['A5a-S47'], { showIf: { path: path('brown', 'program'), equals: 'brdd' } })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S48', 'A5a-S49'], note: z('Counselor Recommendation 與 School Report 是分開的項目（A5a-S48、S49）。', 'The Counselor Recommendation is separate from the School Report (A5a-S48, S49).') },
        teacher: { min: 2, max: 2, src: ['A5a-S49'], note: z('兩位主要學科（科學、社會、數學、外語、英文）老師；Sc.B. 與 PLME 申請者「至少一封應來自數學或科學老師」（A5a-S49）。', 'Two teachers in major academic subjects (science, social studies, math, foreign language, English); Sc.B. and PLME candidates: "at least one of your recommendations should come from a math or science teacher" (A5a-S49).') },
        other: { min: 0, max: 1, src: ['A5a-S50'], note: z('「可透過 Common Application 邀請並送出一封選填的推薦信」，頁面不限制撰寫者；更多的補充信由推薦人直接 email 或傳真（A5a-S50）。', '"One optional letter of recommendation may be requested and submitted through the Common Application"; the page does not restrict who writes it. Further supplementary letters may be emailed or faxed directly by the recommender (A5a-S50).') }
      } },

    // ---- Georgetown
    { id: 'georgetown', name: z('Georgetown University', 'Georgetown University'),
      blurb: z('Georgetown Application 或 Common App；EA／RD；報名費金額未載明；2 篇 250＋1 篇 650＋1 篇 500 words 學院題；一位老師加輔導老師；面試被指派就必須完成。', 'Georgetown Application or Common App; EA/RD; fee amount not stated; two 250-word essays, one 650-word essay and one 500-word school essay; one teacher plus the counselor; the interview is required once assigned.'),
      src: ['A5a-S62', 'A5a-S63'],
      facts: [
        { t: z('Georgetown Application（6 月 1 日開放）或 Common Application（8 月 1 日開放）；Common App 管道是 2026 年 8 月起的三年試行。', 'Georgetown Application (opens June 1) or Common Application (opens August 1); the Common App route is a three-year pilot from August 2026.'), tag: 'f', src: ['A5a-S62', 'A4-S46'] },
        { t: z('不要求 Common App 的 personal statement，改問自己的 personal essay；若內容合適，Common App 主文可沿用。', 'Does not require the Common App personal statement; asks its own personal essay, and the Common App essay may be reused if it fits.'), tag: 'f', src: ['A5a-S62', 'A5a-S63'] },
        { t: z('報名費金額：未載明（checked 2026-11-07）。', 'Fee amount: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5a-S62', 'A5a-S63', 'A5a-S64'] },
        { t: z('直接申請六個大學部學院之一。課程準備：全員 4 年英文、社會／語言／數學各至少 2 年、1 年自然科學；理科／數學主修與 Nursing／Health 要 4 年數學、至少 3 年科學；商學院至少 3 年數學到進階代數與三角，「因為微積分是全體必修」。', 'Apply directly to one of six undergraduate schools. Preparation: all applicants 4 years English, at least 2 each of social studies, language and math, 1 natural science; science/math majors and Nursing/Health 4 years math and at least 3 years science; Business at least 3 years math through advanced algebra and trigonometry, "as calculus is required of all students in the program".'), tag: 'f', src: ['A5a-S62', 'A5a-S64'] },
        { t: z('校友面試是流程「關鍵的一部分」，送出申請第一部分後指派，9 月開始；「學生被指派後必須完成面試」，面試官會交「evaluative report」。「部分海外學生可能因人力而未被指派，這不會有負面影響。」', 'Alumni interviews are "a key part" of the process, assigned once the first part of the application is submitted, from September; "Students are required to complete their interview when assigned" and "An evaluative report will be submitted". "Some internationally-based students may not be assigned an interview due to availability. This will have no negative effect."'), tag: 'f', src: ['A5a-S62', 'A5a-S63'] },
        { t: z('2026–27 需繳 SAT 或 ACT，並送正式成績。EA 不綁約，但 EA 申請者「不得同時申請任何有約束力的 Early Decision」。', 'SAT or ACT required for 2026–27, with official scores. EA is non-binding, but EA applicants "may not apply to any binding Early Decision programs".'), tag: 'f', src: ['A3a-S69', 'A3a-S70'] },
        { t: z('國際生只有「極少數」need-based 獎學金，須在申請表上表明並交 CSS Profile；need-blind／need-aware 的說法未載明。', 'Internationals are considered for "a very limited number" of need-based scholarships, must indicate intent on the application and submit the CSS Profile; need-blind or need-aware wording: not stated.'), tag: 'f', src: ['A3a-S70'] },
        { t: z('文書頁沒有申請季標註；本站視為 2026–27，因為 2026-11-07 仍在線上。', 'The essays page carries no cycle label; taken as 2026–27 because live on 2026-11-07.'), tag: 'a', src: ['A5a-S63'] }
      ],
      deadlines: [
        { plan: 'EA', date: z('2026-11-01', '2026-11-01'), src: ['A3a-S69'] },
        { plan: 'RD', date: z('2027-01-01', '2027-01-01'), src: ['A3a-S69'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EA', 'Early Action（EA，不綁約）', 'Early Action (EA, non-binding)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S69']),
          F('school', z('申請的學院', 'School'), 'radio', { required: true, src: ['A5a-S62', 'A5a-S63'], options: [
            o('cas', 'College of Arts & Sciences', 'College of Arts & Sciences'),
            o('mccourt', 'McCourt School of Public Policy', 'McCourt School of Public Policy'),
            o('earth', 'Earth Commons Institute（與 College 合辦）', 'Earth Commons Institute (joint with the College)'),
            o('nursing', 'Berkley School of Nursing', 'Berkley School of Nursing'),
            o('health', 'School of Health', 'School of Health'),
            o('sfs', 'Walsh School of Foreign Service', 'Walsh School of Foreign Service'),
            o('msb', 'McDonough School of Business', 'McDonough School of Business')], help: z('第一年頁面說有六個大學部學院；文書頁給了七個單位各一題（Earth Commons 與 College 合辦）。這裡列文書頁的七個選項（A5a-S62、S63）。', 'The first-year page counts six undergraduate schools; the essays page gives one prompt for each of seven units (Earth Commons is joint with the College). The seven options from the essays page are listed here (A5a-S62, S63).') })
        ] }
      ],
      supplementIntro: z('文書頁無申請季標註（A5a-S63）。學院題每個學院各一題、500 words，筆記沒有收錄各題文字，這裡只用一個 500 words 的欄位。其餘題目為本站轉述。', 'The essays page carries no cycle label (A5a-S63). The school essay is one 500-word prompt per school; the note did not capture the prompt texts, so a single 500-word field stands in. Other prompts are paraphrased.'),
      supplement: [
        { id: 'short', label: z('短文（各 250 words）', 'Short essays (250 words each)'), src: ['A5a-S63'], fields: [
          sq('activity', '你最投入的校內或暑期活動，對你有什麼意義？', 'The significance of the school or summer activity you were most involved in.', 250, 0, ['A5a-S63']),
          sq('viewpoints', '一次與持不同觀點的人相處的經驗，你學到什麼？', 'An event with people holding different viewpoints, and what you learned.', 250, 0, ['A5a-S63'])
        ] },
        { id: 'personal', label: z('Personal essay（650 words）', 'Personal essay (650 words)'), src: ['A5a-S63'], fields: [
          sq('personal', '一篇關於你的背景、經驗、技能或才能的個人或創意文章；Common App 主文若合適可沿用。', 'A personal or creative essay on your background, experiences, skills or talents; the Common App personal statement may be reused if it fits.', 650, 0, ['A5a-S63'])
        ] },
        { id: 'school', label: z('學院題（500 words）', 'School-specific essay (500 words)'), src: ['A5a-S63'], fields: [
          sq('school', '你所申請學院的專屬題（各學院題目文字未收錄；上限 500 words）。', 'The prompt for the school you are applying to (prompt text not captured; 500-word limit).', 500, 0, ['A5a-S63'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S63'] },
        teacher: { min: 1, max: 2, src: ['A5a-S63'], note: z('必繳一位核心科目老師，最好是最後兩年；「Georgetown 也歡迎第二封（選填）老師推薦信」。科目規定：McDonough 至少一位數學或社會老師；理科、健康或數學學程至少一位科學或數學老師；語言學程至少一位外語老師（A5a-S63）。', 'One required core-subject teacher, preferably from the last two years; "Georgetown also welcomes a second (optional) teacher recommendation". Subject rules: McDonough at least one math or social studies teacher; science, health or math programs at least one science or math teacher; language programs at least one world-language teacher (A5a-S63).') },
        other: { min: 0, max: null, src: ['A5a-S63'], note: z('非老師的推薦人：未載明（checked 2026-11-07）（A5a-S63）。', 'Non-teacher recommenders: not stated (checked 2026-11-07) (A5a-S63).') }
      } },

    // ---- Georgia Tech
    { id: 'gatech', name: z('Georgia Tech', 'Georgia Tech'),
      blurb: z('只用 Common App；EA1／EA2／RD；$75，國際生 $85；文書頁只列 Common App 主文，沒有 Georgia Tech 專屬題；推薦信全部選繳，最多 1 位輔導老師＋2 位老師；不收其他人的信。', 'Common App only; EA1/EA2/RD; $75, $85 for international applicants; the essays page lists only the Common App essay, no Georgia Tech-specific prompt; all letters optional, at most one counselor and two teachers; no letters from anyone else.'),
      src: ['A5a-S71', 'A5a-S75'],
      facts: [
        { t: z('「Georgia Tech 的第一年申請只用 Common App。」', '"Georgia Tech exclusively uses the Common App for first-year admission."'), tag: 'f', src: ['A5a-S71', 'A5a-S78'] },
        { t: z('報名費 $75，國際申請者 $85。減免走 Common App 的 fee-waiver 題，列出的條件都是美國的計畫（FRPL、USDA、TRIO、FEMA 災區）。本站推論：國際申請者除了 Common App 一般標準之外沒有列出的管道。', 'Fee $75; $85 for international applicants. Waivers via the Common App fee-waiver questions; the listed criteria are U.S. programs (FRPL, USDA guidelines, TRIO, FEMA disaster areas). Inference: an international applicant has no listed route beyond the general Common App criteria.'), tag: 'i', src: ['A5a-S72'] },
        { t: z('文書頁標示「2026-27 applications」，只列一篇：從七個 Common App 題目中選一。頁面上沒有 Georgia Tech 專屬題（checked 2026-11-07）。Common App 內部是否另有 Georgia Tech 的題目，本站無法查核。', 'The essays page, labelled for "2026-27 applications", lists one essay: choose one of the seven Common App prompts. No Georgia Tech-specific prompt appears on it (checked 2026-11-07). Whether Georgia Tech-specific questions exist inside Common App could not be checked here.'), tag: 'f', src: ['A5a-S75'] },
        { t: z('不申請學院或主修，但要選一個第一主修與選填的第二主修；「你對這個主修的興趣證據」是審查的一部分。Music Technology 要作品集與文書；College of Design 部分主修建議作品集。', 'You do not apply to a college or major but choose an intended primary major and an optional secondary major; "evidence of your interest in this major" is part of the review. Music Technology requires a portfolio and essay; some College of Design majors recommend a portfolio.'), tag: 'f', src: ['A5a-S76'] },
        { t: z('「我們不進行校友或招生人員面試。」非母語者可在文件截止日前選繳 InitialView 或 Vericant 的第三方面試。', '"We do not conduct alumni or admission staff interviews." Non-native English speakers may submit an optional InitialView or Vericant interview by the document deadline.'), tag: 'f', src: ['A5a-S74'] },
        { t: z('2026–27 至少需繳一次 SAT 或 ACT。文件截止 10-30／11-16／01-22；自填成績截止 11-16／12-08／01-22。', 'At least one SAT and/or ACT required for 2026–27. Document deadlines Oct 30 / Nov 16 / Jan 22; self-reported score deadlines Nov 16 / Dec 8 / Jan 22.'), tag: 'f', src: ['A3a-S77', 'A3a-S76'] },
        { t: z('University System of Georgia 最低修課：4 英文、4 數學、4 科學、3 社會、2 外語／ASL／資訊。工程科目專屬先修：未載明。', 'University System of Georgia minimum: 4 English, 4 math, 4 science, 3 social science, 2 foreign language/ASL/CS. Course-specific engineering prerequisites: not stated.'), tag: 'f', src: ['A5a-S77'] }
      ],
      deadlines: [
        { plan: 'EA1', date: z('2026-10-15（限 Georgia 學生；文件 10-30）', '2026-10-15 (Georgia students only; documents Oct 30)'), src: ['A3a-S76'] },
        { plan: 'EA2', date: z('2026-11-02（非 Georgia，含國際生；文件 11-16）', '2026-11-02 (non-Georgia, including international; documents Nov 16)'), src: ['A3a-S76'] },
        { plan: 'RD', date: z('2027-01-06（文件 01-22）', '2027-01-06 (documents Jan 22)'), src: ['A3a-S76'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EA1', 'Early Action 1（限 Georgia 學生）', 'Early Action 1 (Georgia students only)'), o('EA2', 'Early Action 2（非 Georgia，含國際生）', 'Early Action 2 (non-Georgia, including international)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S76']),
          F('major1', z('第一主修', 'Primary major'), 'text', { required: true, src: ['A5a-S76'], help: z('「你對這個主修的興趣證據」列入審查（A5a-S76）。', '"Evidence of your interest in this major" is part of the review (A5a-S76).') }),
          F('major2', z('第二主修（選填）', 'Secondary major (optional)'), 'text', { src: ['A5a-S76'] })
        ] }
      ],
      supplementIntro: z('文書頁只列 Common App 主文；沒有 Georgia Tech 專屬題可模擬（A5a-S75）。', 'The essays page lists only the Common App essay; there is no Georgia Tech-specific prompt to model (A5a-S75).'),
      supplement: [],
      recs: {
        counselor: { min: 0, max: 1, src: ['A5a-S73', 'A5a-S79'], note: z('文件頁把推薦信標為「Optional Recommendations for First-year applicants」；輔導老師不能寫時「不會對審查造成負面影響」（A5a-S79、S73）。', 'The documents page labels recommendations "Optional Recommendations for First-year applicants"; if the counselor cannot write, "it will not negatively impact your application review" (A5a-S79, S73).') },
        teacher: { min: 0, max: 2, src: ['A5a-S73'], note: z('「每位申請者最多只收三封推薦信」：最多一位輔導老師、最多兩位老師（建議核心科目）（A5a-S73）。', '"We can only accept up to three recommendations per applicant": up to one counselor and up to two teachers (core subject suggested) (A5a-S73).') },
        other: { min: 0, max: 0, src: ['A5a-S73'], note: z('「我們無法接受其他社區成員的推薦信。」（A5a-S73）', '"We are unable to accept letters from other community members." (A5a-S73)') }
      } },

    // ---- Purdue
    { id: 'purdue', name: z('Purdue University', 'Purdue University'),
      blurb: z('Common App（West Lafayette 與 Indianapolis）；EA／RD；$60；2 題「Why Purdue?」各 ≤250 words，選了第二主修加 1 題，Honors College 加 4 題各 ≤200 words；申請清單裡沒有推薦信；錄取到特定主修。', 'Common App (West Lafayette and Indianapolis); EA/RD; $60; two "Why Purdue?" questions up to 250 words, one more if an alternate major is chosen, four more up to 200 words for the Honors College; no letters in the application checklist; admission is to a specific major.'),
      src: ['A5a-S82', 'A5a-S80'],
      facts: [
        { t: z('West Lafayette 與 Indianapolis 的第一年申請走 Common App；Polytechnic Statewide 用 Purdue 自己的申請表、另一套時程。', 'First-year applicants to West Lafayette and Indianapolis apply through Common App; Polytechnic Statewide uses Purdue’s own application on a different calendar.'), tag: 'f', src: ['A5a-S80', 'A5a-S82', 'V4-T8'] },
        { t: z('「不退還的報名費是 $60。」減免條件與國際生報名費：未載明（checked 2026-11-07）。', '"The nonrefundable application fee is $60." Waiver criteria and an international fee: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5a-S80', 'A5a-S82', 'A5a-S81'] },
        { t: z('「申請 Purdue，就是申請進入一個特定主修。」要選第一校區與第一主修，可選第二校區與第二主修；「換主修或校區從來不保證」。「所選科系的名額」是列出的審查因素。', '"When you apply to Purdue, you apply for admission into a specific major." You pick a primary campus and major and may pick an alternate campus and major; "Changing majors or locations is never guaranteed". "Space availability in the desired program" is a listed review factor.'), tag: 'f', src: ['V4-T10', 'A5a-S82', 'A5a-S81'] },
        { t: z('11-01 的 EA 同時是獎學金考慮的截止日，也是工程、資訊科學、護理等科系的優先期限，之後「只有名額允許時」才收件。', 'The Nov 1 EA deadline also "encompasses scholarship consideration" and is the priority deadline for engineering, computer science, nursing and others, after which applications are accepted "only if space allows".'), tag: 'f', src: ['A5a-S80', 'V4-T9'] },
        { t: z('完整申請的清單（申請表與文書、Purdue 題目、自填成績、自填考試成績、報名費）裡沒有推薦信；審查因素清單裡也沒有。給輔導老師的更新頁寫：「推薦信不是必要的，但若學生交了，我們會納入審查。」封數、撰寫者、交件方式：未載明。', 'The complete-application list (application with essay, Purdue questions, self-reported grades, self-reported test scores, fee) contains no recommendation letters, and neither does the review-factor list. A counselor-facing updates page says: "Letters of recommendation aren’t required, but if a student submits one, we’ll include it in their review." How many, from whom, by what route: not stated.'), tag: 'f', src: ['A5a-S82', 'V4-T9', 'V5-U1'] },
        { t: z('收 SAT、ACT 與 CLT，「對考哪一種沒有偏好」；審查因素寫「SAT、ACT 或 CLT 成績（若有提供）」。面試政策：未載明。', 'SAT, ACT and CLT accepted, "We have no preference on which test you take"; the factor list reads "SAT, ACT or CLT scores (if provided)". Interview policy: not stated.'), tag: 'f', src: ['V4-T9', 'A5a-S81', 'A5a-S82'] },
        { t: z('最低修課：4 數學、4 英文、3 實驗科學、3 社會、2 外語；「工程申請者：預期有化學經驗」。國際生「原則上」不符補助資格。', 'Minimum: 4 math, 4 English, 3 lab science, 3 social studies, 2 world language; "Engineering applicants: Chemistry experience is expected". Internationals "in general" not eligible for aid.'), tag: 'f', src: ['A5a-S81', 'A5a-S83', 'A4-S61'] },
        { t: z('申請指南頁沒有申請季標註；本站視為 2026–27，因為 2026-11-07 仍在線上。', 'The application guide page carries no cycle label; taken as 2026–27 because live on 2026-11-07.'), tag: 'a', src: ['A5a-S82'] }
      ],
      deadlines: [
        { plan: 'EA', date: z('2026-11-01（獎學金與熱門科系優先日同日）', '2026-11-01 (also the scholarship and competitive-major priority date)'), src: ['A3a-S80', 'V4-T9'] },
        { plan: 'RD', date: z('2027-01-15', '2027-01-15'), src: ['A3a-S80', 'V4-T8'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EA', 'Early Action（EA）', 'Early Action (EA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S80']),
          F('campus', z('第一校區', 'Primary campus'), 'radio', { required: true, src: ['A5a-S82', 'V4-T8'], options: [
            o('wl', 'West Lafayette', 'West Lafayette'),
            o('indy', 'Indianapolis', 'Indianapolis')] }),
          F('major1', z('第一主修', 'Primary major'), 'text', { required: true, src: ['A5a-S82', 'V4-T10'] }),
          F('altCampus', z('第二校區（選填）', 'Alternate campus (optional)'), 'text', { src: ['A5a-S82'] }),
          F('altMajor', z('第二主修（選填）', 'Alternate major (optional)'), 'text', { src: ['A5a-S82'], help: z('選了第二主修，補充題會多一題（A5a-S82）。', 'Choosing an alternate major adds a third question (A5a-S82).') }),
          F('honors', z('是否申請 Honors College？', 'Applying to the Honors College?'), 'radio', { required: true, src: ['A5a-S82'], options: YN, help: z('Honors College 申請者多答四題，各 ≤200 words（A5a-S82）。', 'Honors College applicants answer four more prompts, up to 200 words each (A5a-S82).') })
        ] }
      ],
      supplementIntro: z('申請指南頁無申請季標註（A5a-S82）。第二主修題與 Honors College 題只在「學校題目」選了對應項目時顯示；Honors 四題的題目文字與第二主修題的字數筆記未收錄。題目為本站轉述。', 'The guide page carries no cycle label (A5a-S82). The alternate-major question and the Honors College prompts appear only when chosen under Questions; the texts of the four Honors prompts and the limit of the alternate-major question were not captured. Prompts are paraphrased.'),
      supplement: [
        { id: 'why', label: z('「Why Purdue?」（各 ≤250 words）', '"Why Purdue?" (up to 250 words each)'), src: ['A5a-S82'], fields: [
          sq('opportunities', 'Purdue 的機會如何支持你課內外的興趣？', 'How Purdue’s opportunities support your interests in and out of the classroom.', 250, 0, ['A5a-S82']),
          sq('majorWhy', '你選擇這個主修與校區的理由。', 'Your reasons for choosing your major and campus location.', 250, 0, ['A5a-S82'])
        ] },
        { id: 'alt', label: z('第二主修題', 'Alternate-major question'), src: ['A5a-S82'], fields: [
          sqn('alt', '關於你選的第二主修（選了第二主修才出現）。', 'About the alternate major you selected (appears only when an alternate major is chosen).', ['A5a-S82'], { required: true, showIf: { path: path('purdue', 'altMajor'), any: true } })
        ] },
        { id: 'honors', label: z('Honors College（4 題，各 ≤200 words）', 'Honors College (four prompts, up to 200 words each)'), src: ['A5a-S82'], fields: [
          sq('h1', 'Honors College 第 1 題（題目文字未收錄）。', 'Honors College prompt 1 (text not captured).', 200, 0, ['A5a-S82'], { showIf: { path: path('purdue', 'honors'), equals: 'yes' } }),
          sq('h2', 'Honors College 第 2 題（題目文字未收錄）。', 'Honors College prompt 2 (text not captured).', 200, 0, ['A5a-S82'], { showIf: { path: path('purdue', 'honors'), equals: 'yes' } }),
          sq('h3', 'Honors College 第 3 題（題目文字未收錄）。', 'Honors College prompt 3 (text not captured).', 200, 0, ['A5a-S82'], { showIf: { path: path('purdue', 'honors'), equals: 'yes' } }),
          sq('h4', 'Honors College 第 4 題（題目文字未收錄）。', 'Honors College prompt 4 (text not captured).', 200, 0, ['A5a-S82'], { showIf: { path: path('purdue', 'honors'), equals: 'yes' } })
        ] }
      ],
      recs: {
        counselor: { min: 0, max: null, src: ['A5a-S82', 'V5-U1'], note: z('完整申請的清單裡沒有推薦信；給輔導老師的頁面說不是必要、但交了會納入審查。封數與交件方式未載明（A5a-S82、V5-U1）。', 'The complete-application list has no letters; the counselor-facing page says they are not required but are included if submitted. Count and route: not stated (A5a-S82, V5-U1).') },
        teacher: { min: 0, max: null, src: ['A5a-S82', 'V5-U1'], note: z('同上：不是必要，交了會看；可由誰寫未載明（A5a-S82、V5-U1）。', 'As above: not required, read if sent; who may write is not stated (A5a-S82, V5-U1).') },
        other: { min: 0, max: null, src: ['A5a-S81', 'A5a-S82', 'V5-U1'], note: z('是否接受非老師的推薦信：未載明（checked 2026-11-07）（A5a-S81、S82、V5-U1）。', 'Whether non-teacher letters are accepted: not stated (checked 2026-11-07) (A5a-S81, S82, V5-U1).') }
      } },

    // ---- Michigan
    { id: 'michigan', name: z('University of Michigan', 'University of Michigan'),
      blurb: z('Common App 含 U-M 專屬題；ED／EA／RD；$75；U-M 第一題 100–300 words＋第二題 100–550 words，皆必答；只要一封老師推薦信（可由「其他非親屬」寫）；申請的是 15 個學院之一。', 'Common App with U-M-specific questions; ED/EA/RD; $75; U-M question 1 at 100–300 words and question 2 at 100–550 words, both required; one teacher evaluation, which an "other non-relative" may write; you apply to one of 15 schools and colleges.'),
      src: ['V4-T13', 'V4-T12'],
      facts: [
        { t: z('「在 Michigan，你申請的不是大學，而是 15 個大學部學院之一」；其中十個收第一年申請，Engineering 是其中之一；生物在 LSA。多數學生到大二結束才定主修。', '"At Michigan, you don’t apply to the university – you apply to one of our 15 undergraduate schools and colleges"; ten take first-year applications, Engineering among them; biology sits in LSA. Many students do not indicate a major until the end of sophomore year.'), tag: 'f', src: ['V6-M1', 'V6-M7'] },
        { t: z('2025 年 7 月宣布新增具約束力的 Early Decision，從 fall 2026 入學季開始。2026–27 的 Early Decision Agreement 要申請人、家長或監護人與輔導老師簽名，「三個簽名必須一起」。', 'A binding Early Decision plan was announced in July 2025, starting with the fall 2026 entry cycle. The 2026–27 Early Decision Agreement must be signed by the applicant, a parent or guardian and the counselor, and "All three signatures must be together".'), tag: 'f', src: ['MI-S2', 'MI-S4', 'V4-T13'] },
        { t: z('報名費 $75 或表內減免。清單：Common App、成績單、School Report、一封老師推薦信、想列入考慮才交的 SAT／ACT、非母語者的英語考試。「除非特別要求，不要補交其他文件，否則可能延後決定。」', 'Fee $75 or an in-application waiver. Checklist: Common App, transcript, School Report, one teacher evaluation, SAT or ACT only if you want them considered, an English test for non-native speakers. "Do not submit additional documents unless specifically requested, as this may delay your decision."'), tag: 'f', src: ['V4-T13', 'A5a-S85'] },
        { t: z('考試選繳；自填成績的截止日 ED／EA 11-01、RD 02-01。不收 DET。', 'Test-optional; self-report deadlines Nov 1 for ED/EA and Feb 1 for RD. DET is not accepted.'), tag: 'f', src: ['V4-T13', 'A4-S64', 'A4-S63'] },
        { t: z('持臨時簽證的國際生不符 need-based 補助資格。', 'International students on temporary visas "are not eligible for U-M need-based financial aid".'), tag: 'f', src: ['A5a-S85'] },
        { t: z('Engineering：審查「特別看 precalculus、化學與物理」；所有一年級新生到第三學期前都是 undeclared；Integrated Business and Engineering 雙學位另須完成 Ross Admissions Portfolio。', 'Engineering: review places "special emphasis on precalculus, chemistry and physics"; all incoming first-years are undeclared until the third term; the Integrated Business and Engineering dual degree also requires the Ross Admissions Portfolio.'), tag: 'f', src: ['A5a-S84', 'A5a-S87'] },
        { t: z('面試：讀到的頁面未載明（checked 2026-11-07）。同一頁警告「我們正在修改招生流程與要求」，本季規則可能季中改動。', 'Interview: not stated on the pages read (checked 2026-11-07). The requirements page warns "We are modifying our admissions process and requirements", so this cycle’s rules may change mid-cycle.'), tag: 'f', src: ['A5a-S84', 'A5a-S85', 'V4-T13'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-01（ED 補助 11-15；12-24 前放榜）', '2026-11-01 (ED aid Nov 15; decisions by Dec 24)'), src: ['V4-T13'] },
        { plan: 'EA', date: z('2026-11-01（01-29 前放榜）', '2026-11-01 (decisions by Jan 29)'), src: ['V4-T13'] },
        { plan: 'RD', date: z('2027-02-01（04-02 前放榜）', '2027-02-01 (decisions by Apr 2)'), src: ['V4-T13'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED，綁約）', 'Early Decision (ED, binding)'), o('EA', 'Early Action（EA）', 'Early Action (EA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['V4-T13']),
          F('college', z('申請的學院', 'School or college'), 'text', { required: true, src: ['V6-M1', 'V6-M3'], help: z('15 個學院中有十個收第一年申請（例如 LSA、Engineering）；完整清單本頁未重現。Ross、Taubman（建築）、Stamps、SMTD 與教育學程另有額外要求，Engineering 不在該清單上（V6-M1、V6-M3）。', 'Ten of the 15 schools and colleges take first-year applications (for example LSA and Engineering); the full list is not reproduced here. Ross, Taubman (Architecture), Stamps, SMTD and the Education programs have additional requirements; Engineering is not on that list (V6-M1, V6-M3).') })
        ] }
      ],
      supplementIntro: z('2026–27 版，瀏覽器直接讀到的中央招生辦頁面（V4-T12、V6-M2）。Common App 主文（250–650 words）與 Challenges and Circumstances（≤250 words）屬於共同部分，不在這裡重複。題目為本站轉述。', '2026–27 version, read directly from the central admissions office’s page in a browser (V4-T12, V6-M2). The Common App essay (250–650 words) and Challenges and Circumstances (up to 250 words) belong to the common part and are not repeated here. Prompts are paraphrased.'),
      supplement: [
        { id: 'um', label: z('U-M 專屬題（皆必答）', 'U-M-specific questions (both required)'), src: ['V4-T12'], fields: [
          sq('leaders', '你如何準備好為培養領導者與公民做出貢獻？（100–300 words）', 'How you are prepared to contribute to developing leaders and citizens (100–300 words).', 300, 100, ['V4-T12']),
          sq('college', '你所申請的學院有哪些特質吸引你？它的課程會如何支持你的興趣？（100–550 words）', 'The qualities that attract you to the specific college or school you are applying to, and how its curriculum would support your interests (100–550 words).', 550, 100, ['V4-T12', 'V6-M2'])
        ] }
      ],
      recs: {
        counselor: { min: 0, max: 1, src: ['A5a-S85', 'V4-T13'], note: z('School Report 必繳；國際生清單上的 Counselor Recommendation 是「鼓勵但不要求」（A5a-S85、V4-T13）。', 'The School Report is required; on the international checklist the Counselor Recommendation is "encouraged but not required" (A5a-S85, V4-T13).') },
        teacher: { min: 1, max: 1, src: ['V4-T13', 'A5a-S85'], note: z('一封 Teacher Evaluation，可來自「核心學科老師或其他非親屬」，只要能直接說明學生的學術能力、潛力與課堂表現（V4-T13）。', 'One Teacher Evaluation, from a "core academic teacher or other non-relative who can speak directly to the student’s academic aptitude, potential, and classroom performance" (V4-T13).') },
        other: { min: 0, max: 0, src: ['V4-T13'], note: z('沒有獨立的額外推薦信欄位，而且「除非特別要求，不要補交其他文件」。校外 mentor 的入口是那唯一一封老師推薦信可由「其他非親屬」寫（V4-T13）。', 'No separate additional-letter slot, and "Do not submit additional documents unless specifically requested". An outside mentor enters through the single teacher evaluation, which an "other non-relative" may write (V4-T13).') }
      } }
  ];

  // Attach. In the browser this file loads after p-mock.js, so window.ATLAS.mock already exists
  // and the entries are pushed at once. scripts/check-data.js loads site/data/*.js alphabetically,
  // where this file comes before p-mock.js; in that case the entries are pushed the moment
  // p-mock.js assigns window.ATLAS.mock. A sibling file that uses the same hook is chained.
  var A = window.ATLAS;
  function attach(M) { if (M && M.colleges) M.colleges.push.apply(M.colleges, LIST); }
  if (A.mock && A.mock.colleges) {
    attach(A.mock);
  } else {
    var prev = Object.getOwnPropertyDescriptor(A, 'mock');
    Object.defineProperty(A, 'mock', {
      configurable: true, enumerable: true,
      get: function () { return undefined; },
      set: function (M) {
        if (prev && prev.set) prev.set.call(A, M); else { delete A.mock; A.mock = M; }
        attach(M);
      }
    });
  }
})();
