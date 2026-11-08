/* Practice walkthrough data, part B: fourteen more entries for the "My Colleges" list.
   Loads after p-mock.js and appends to window.ATLAS.mock.colleges. Structure, labels and
   limits come from research notes A5b (school roster part 2), A3b (calendar part 2),
   A2 (other application systems), A4 (international specifics) and the V4 browser pass.
   Rule 4: where a page does not state a limit, no limit is set and the help text says so.
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
  function sq(id, zhL, enL, max, min, src, extra) {
    var f = F(id, z(zhL, enL), 'textarea', { required: true, wide: true, rows: max > 200 ? 8 : 4, limit: min ? { words: max, minWords: min } : { words: max }, src: src });
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }
  var DROPDOWN = z('實際表單是下拉選單；選項清單在 data catalog（A1-S6）中，本頁未逐項重現，這裡改用文字欄。', 'The real form uses a dropdown; its choice list is in the data catalog (A1-S6) and is not reproduced here, so this mock uses a text box.');
  var NOLIMIT = z('字數上限未載明（checked 2026-11-07），所以這裡不設計數器。', 'Word limit not stated (checked 2026-11-07), so no counter is set here.');
  var UC_PLAN = [o('UC', 'UC 申請單一收件期（UC 沒有早申）', 'Single UC filing period (UC has no early round)')];
  var UC_DL = { plan: 'UC', date: z('2026-10-01 至 2026-11-30', '2026-10-01 to 2026-11-30'), src: ['A3b-S23'] };
  var UC_SUPP_INTRO = z('三所 UC 校區共用一份 UC Application，PIQ（八題選四、各 350 words）與 Activities & Awards 只填一次，在這個模擬頁左側的「UC 申請」分頁（A5b-S31、A2-S1）。這裡只放校區自己的項目。', 'The three UC campuses share one UC application. The PIQs (4 of 8, 350 words each) and Activities & Awards are filled once, in the "UC application" tab in this mock’s sidebar (A5b-S31, A2-S1). Only campus-specific items appear here.');
  var UC_RECS = {
    counselor: { min: 0, max: 0, src: ['A2-S8'], note: z('UC 申請不附推薦信；UC 國際生頁說「有些校區可能在補充審查時事後邀請」（A2-S8）。這個模擬頁的 Counselor 角色在 UC 校區不適用。', 'No letters go with the UC application; the UC international page says some campuses may request them later during supplemental review (A2-S8). The counselor role in this mock does not apply at UC campuses.') },
    teacher: { min: 0, max: 0, src: ['A2-S8'] },
    other: { min: 0, max: 0, src: ['A2-S8'] }
  };
  function ucGeneral(id, extraFields, src) {
    var fields = [plan(UC_PLAN, ['A3b-S23'])].concat(extraFields);
    return [{ id: 'general', label: z('一般', 'General'), src: src, fields: fields }];
  }
  function ucSupp(id, zhNote, enNote, src) {
    return [{ id: 'piq', label: z('PIQ（在 UC 分頁填寫）', 'PIQs (filled in the UC tab)'), src: src,
      intro: z('四題 PIQ 與 Activities & Awards 在左側「UC 申請」分頁，不在這裡重複。' + zhNote, 'The four PIQs and Activities & Awards live in the "UC application" tab in the sidebar and are not repeated here. ' + enNote), fields: [] }];
  }

  var ENTRIES = [
    // ---- UIUC
    { id: 'uiuc', name: z('University of Illinois Urbana-Champaign', 'University of Illinois Urbana-Champaign'),
      blurb: z('EA／RD；$75；2–3 篇各約 150 words，綁定第一與第二志願主修；不收推薦信；一般申請沒有面試。', 'EA/RD; $75; two or three essays of about 150 words each, tied to the first- and second-choice majors; no letters; no interview for general admission.'),
      src: ['A5b-S1', 'A5b-S2', 'A5b-S3'],
      facts: [
        { t: z('用 Common App 申請；送出後「幾天內」會建立 myIllini 帳號，課程與成績在那裡自填（SRAR）。', 'Apply through the Common App; a myIllini account is created "a few days after you submit", and courses and grades are self-reported there (SRAR).'), tag: 'f', src: ['A5b-S2', 'A2-S46'] },
        { t: z('報名費 $75；fee waiver 須由輔導老師或學校人員提出。國際生的費用或減免規則未載明（checked 2026-11-07）。', 'Fee $75; waivers must come from a counselor or other school official. International fee or waiver: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5b-S2', 'A5b-S3'] },
        { t: z('「我們不收推薦信或其他未經要求的資料。」Common App 名錄也標示 first-year 不需推薦信。', '"No, we don’t accept letter of recommendation or other unsolicited materials." The Common App listing also shows no letter required for first-years.'), tag: 'f', src: ['A5b-S3', 'A5b-S6'] },
        { t: z('FAQ「強烈建議」填第二志願主修；沒填的話只審第一志願。', 'The FAQ "strongly recommend[s]" a second-choice major; without one you are considered for the first choice only.'), tag: 'f', src: ['A5b-S3'] },
        { t: z('Grainger 工程所有主修（以及化學、生化、化工等部分 LAS 主修）至少 3.5 年數學，含三角或以上；實驗科學 2 年必修、4 年建議。', 'Every Grainger engineering major (and some LAS majors such as chemistry, biochemistry and chemical engineering) needs at least 3.5 years of math including trigonometry or higher; lab science 2 years required, 4 recommended.'), tag: 'f', src: ['A5b-S4'] },
        { t: z('一般申請沒有面試；Fine and Applied Arts 可能要求試演、作品集或面試。', 'No interview for general admission; Fine and Applied Arts may require an audition, portfolio or interview.'), tag: 'f', src: ['A5b-S2', 'A5b-S3'] },
        { t: z('國際大學生不符聯邦與州補助；可能有學院或系所獎學金。', 'International undergraduates are not eligible for federal or state aid; college or department scholarships are possible.'), tag: 'f', src: ['A3b-S4'] },
        { t: z('文書頁與日期頁都沒有標申請季；本站因 2026-11-07 仍在線上而視為 2026–27。', 'Neither the essay page nor the dates page carries a cycle label; taken as 2026–27 because live on 2026-11-07.'), tag: 'a', src: ['A5b-S1', 'A3b-S1'] }
      ],
      deadlines: [
        { plan: 'EA', date: z('2026-11-01（必交資料 11-07）', '2026-11-01 (required materials by 11-07)'), src: ['A3b-S1'] },
        { plan: 'RD', date: z('2027-01-05（必交資料 01-11）', '2027-01-05 (required materials by 01-11)'), src: ['A3b-S1'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EA', 'Early Action（EA，非綁約）', 'Early Action (EA, non-binding)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3b-S1']),
          F('major1', z('第一志願主修', 'First-choice major'), 'text', { required: true, src: ['A5b-S1', 'A5b-S3'], help: DROPDOWN }),
          F('major2', z('第二志願主修（FAQ 強烈建議填）', 'Second-choice major (the FAQ strongly recommends one)'), 'text', { src: ['A5b-S3'], help: z('填了之後下方補充文章會多一題（A5b-S1）。', 'Filling this adds one more prompt under Supplement (A5b-S1).') })
        ] }
      ],
      supplementIntro: z('UIUC 說 first-year 寫 2–3 篇、各約 150 words，加上 Common App 主文。第一志願的兩題題目為本站轉述（A5b-S1）。Undeclared 申請者改答兩題替代題，第二志願主修加一題；這三題的原文筆記未取得，所以替代題沒有收錄、第二志願題只留欄位。頁面沒有標申請季。', 'UIUC says first-years write two or three essays of about 150 words each plus the Common App essay. The two first-choice prompts are paraphrased here (A5b-S1). Undeclared applicants answer two alternate prompts instead, and a second-choice major adds one prompt; the wording of those three was not captured, so the alternates are not modelled and the second-choice prompt is a labelled box only. The page carries no cycle label.'),
      supplement: [
        { id: 'first', label: z('第一志願主修（2 題，各約 150 words）', 'First-choice major (two prompts, about 150 words each)'), src: ['A5b-S1'], fields: [
          sq('exp', '過去三到四年中，一段與你第一志願主修相關的經驗。', 'An experience from the past three or four years related to your first-choice major.', 150, 0, ['A5b-S1'], { help: z('頁面寫「約 150 words」，計數器以 150 為上限（A5b-S1）。', 'The page says "about 150 words"; the counter uses 150 (A5b-S1).') }),
          sq('goals', '畢業後的個人或職涯目標，以及這個主修如何幫你達成。', 'Your personal or career goals after graduation, and how this major helps you reach them.', 150, 0, ['A5b-S1'], { help: z('頁面寫「約 150 words」，計數器以 150 為上限（A5b-S1）。', 'The page says "about 150 words"; the counter uses 150 (A5b-S1).') })
        ] },
        { id: 'second', label: z('第二志願主修（1 題，約 150 words）', 'Second-choice major (one prompt, about 150 words)'), src: ['A5b-S1'],
          intro: z('只在「一般」填了第二志願主修時出現。題目原文筆記未取得。', 'Shown only when a second-choice major is entered under General. The prompt wording was not captured.'), fields: [
          sq('second', '第二志願主修的題目（原文未取得）', 'Second-choice major prompt (wording not captured)', 150, 0, ['A5b-S1'], { showIf: { path: 'col.uiuc.questions.general.major2', any: true }, help: z('UIUC 只說「選第二志願主修會多一題」，約 150 words（A5b-S1）。', 'UIUC says only that a second-choice major "adds one prompt", about 150 words (A5b-S1).') })
        ] }
      ],
      recs: {
        counselor: { min: 0, max: 0, src: ['A5b-S3'], note: z('UIUC 不收推薦信（A5b-S3）。School report 以外，這個模擬頁的三種推薦人角色在 UIUC 都不適用。', 'UIUC accepts no letters (A5b-S3). None of the three recommender roles in this mock applies at UIUC.') },
        teacher: { min: 0, max: 0, src: ['A5b-S3'] },
        other: { min: 0, max: 0, src: ['A5b-S3'], note: z('Other Recommender：不收（A5b-S3）。', 'Other Recommender: not accepted (A5b-S3).') }
      } },

    // ---- Olin
    { id: 'olin', name: z('Olin College of Engineering', 'Olin College of Engineering'),
      blurb: z('單一截止 2026-12-15；$85；一篇 Olin 專屬文書（題目與字數未公開）；兩位老師（至少一位 STEM）加 counselor 表；第二階段 Candidates’ Weekend 必須參加。', 'Single deadline 2026-12-15; $85; one Olin-specific essay (prompt and limit not published); two teachers (at least one STEM) plus a counselor form; Candidates’ Weekend is a required second stage.'),
      src: ['A5b-S7', 'A5b-S8', 'A5b-S9'],
      facts: [
        { t: z('Common App 加 Olin 專屬題；「沒有針對國際學生的另一種申請類型」。', 'Common App with Olin-specific questions; "no separate application type for international students".'), tag: 'f', src: ['A5b-S7', 'A5b-S8', 'A5b-S9'] },
        { t: z('報名費 $85，可在 Common App 申請 fee waiver。國際生減免規則未載明（checked 2026-11-07）。', 'Fee $85; a waiver can be requested through the Common App. International waiver rule: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5b-S8', 'A5b-S9'] },
        { t: z('兩階段：申請，然後 Candidates’ Weekend（CW）。「參加 CW 是繼續被考慮錄取的必要條件。」2027 年場次 2/19–20、2/26–27、3/5–6；入圍通知在 1 月下旬。', 'Two stages: the application, then Candidates’ Weekend (CW). "Participation in CW is required to continue to be considered for admission." 2027 dates Feb 19–20, Feb 26–27, Mar 5–6; candidate status announced late January.'), tag: 'f', src: ['A5b-S8', 'A3b-S6'] },
        { t: z('CW 週六上午 Design Challenge，下午個別面試與團體活動；「住在美國本土 48 州以外的學生改為線上面試」。', 'CW Saturday: a Design Challenge in the morning, then an individual interview and a group exercise. "Students living outside the contiguous United States will have a virtual interview."'), tag: 'f', src: ['A5b-S8'] },
        { t: z('在台灣的申請者應預留 2 月底或 3 月初、以台灣時間進行的線上面試。', 'An applicant in Taiwan should plan for a late-February or early-March virtual interview on Taiwan time.'), tag: 'i', src: ['A5b-S8'] },
        { t: z('「扎實的微積分與物理基礎……因此是入學條件。」化學未載明。', '"A strong calculus and physics foundation … is therefore a requirement for admission." Chemistry: not stated.'), tag: 'f', src: ['A5b-S7'] },
        { t: z('申請時要附第一季或第一學期的成績報告（由輔導老師上傳或 email）。', 'A first-quarter or first-semester progress report must be submitted with the application (counselor upload or email).'), tag: 'f', src: ['A3b-S6'] },
        { t: z('可 email Schoolhouse.world 作品集；Olin「不能保證所有選交資料都會被審閱」。', 'A Schoolhouse.world portfolio may be emailed; Olin "cannot promise that all optional materials will get reviewed".'), tag: 'f', src: ['A5b-S8', 'A5b-S9'] },
        { t: z('國際生與非公民「一般只符合 merit-based aid」；所有錄取者每年 $10,000 merit 獎學金。', 'International students and non-citizens are "generally eligible only for merit-based aid"; every admit receives a $10,000 per year merit scholarship.'), tag: 'f', src: ['A3b-S7', 'A4-S74'] }
      ],
      deadlines: [
        { plan: 'RD', date: z('2026-12-15（申請者當地時間 23:59）', '2026-12-15 (11:59 p.m. applicant’s local time)'), src: ['A3b-S6', 'A5b-S7'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('RD', '單一截止 12-15（沒有 ED／EA）', 'Single deadline Dec 15 (no ED or EA)')], ['A3b-S6']),
          F('major', z('預計主修（Olin 頁面未要求在申請時選）', 'Intended major (Olin’s pages do not ask you to choose one at application)'), 'text', { src: ['A5b-S7'], help: z('Olin 的申請頁沒有提到選主修；這一欄只是讓你記錄方向，非必填（checked 2026-11-07）。', 'Olin’s application pages do not mention choosing a major; this box is for your own notes and is optional (checked 2026-11-07).') })
        ] }
      ],
      supplementIntro: z('FAQ 提到「the Olin specific essay」，但 olin.edu 上讀到的頁面都沒有寫出題目與字數（A5b-S7、S8、S9；checked 2026-11-07）。下方只留一個沒有計數器的欄位。', 'The FAQ refers to "the Olin specific essay", but none of the olin.edu pages read states the prompt or the limit (A5b-S7, S8, S9; checked 2026-11-07). One box without a counter is left below.'),
      supplement: [
        { id: 'essay', label: z('Olin 專屬文書（題目與字數未公開）', 'Olin-specific essay (prompt and limit not published)'), src: ['A5b-S9'], fields: [
          F('olin', z('Olin 專屬文書', 'Olin-specific essay'), 'textarea', { required: true, wide: true, rows: 8, src: ['A5b-S9'], help: z('題目原文與字數上限都未載明（checked 2026-11-07，A5b-S7、S8、S9）；實際題目要在 Common App 的 Olin 頁面才看得到。', 'Prompt and word limit both not stated (checked 2026-11-07, A5b-S7, S8, S9); the real prompt is visible only inside the Common App member screen.') })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S8'], note: z('必交 Counselor Recommendation Form（A5b-S8）。', 'A Counselor Recommendation Form is required (A5b-S8).') },
        teacher: { min: 2, max: 2, src: ['A5b-S8'], note: z('兩位老師；其中一位必須是 STEM 老師（例如微積分、物理、資訊），另一位不限科目（A5b-S8）。', 'Two teachers; one must be a STEM teacher (for example calculus, physics or computer science), the other may teach any subject (A5b-S8).') },
        other: { min: 0, max: null, src: ['A5b-S9'], note: z('額外推薦信：「Yes! But don’t go overboard」；FAQ 沒有限制撰寫者（A5b-S9）。另有選交的 Olin 代表 Interview Report（A5b-S8）。', 'Additional letters: "Yes! But don’t go overboard"; the FAQ does not restrict who may write (A5b-S9). An optional Interview Report from an Olin representative also exists (A5b-S8).') }
      } },

    // ---- Harvey Mudd
    { id: 'hmc', name: z('Harvey Mudd College', 'Harvey Mudd College'),
      blurb: z('ED I／ED II／RD；$70；兩題（≤500、≤250 words）；兩位老師，一位 STEM、一位人文／社科／藝術；入學前須修完高中微積分、化學、物理各一年。', 'ED I / ED II / RD; $70; two prompts (≤500 and ≤250 words); two teachers, one STEM and one humanities, social science or arts; one year each of high-school calculus, chemistry and physics required.'),
      src: ['A5b-S10', 'A5b-S12'],
      facts: [
        { t: z('「$70 Application Fee or Fee Waiver」；可在 Common App 申請，HMC 也有自己的 fee-waiver 題。國際生減免未載明；國際頁說國際生「依照相同的申請程序」。', '"$70 Application Fee or Fee Waiver"; request it through the Common App, and HMC has its own fee-waiver question. International waiver: not stated; the international page says internationals "follow the same application procedures".'), tag: 'f', src: ['A5b-S10', 'A5b-S11', 'A5b-S12'] },
        { t: z('必修高中微積分、化學、物理各一年；缺少時可能是有條件錄取，須修完一學期大學課程並取得 B 以上。', 'One year each of high-school calculus, chemistry and physics; if missing, conditional admission may require a one-semester college course passed with a B or better.'), tag: 'f', src: ['A5b-S10'] },
        { t: z('選擇性線上面試：「不面試的學生不會被扣分。」ED I 的面試截止 11-15，ED II／RD 為 12-15。', 'Optional virtual interview: "students will not be penalized for not having one." Interview deadlines Nov 15 (ED I) and Dec 15 (ED II / RD).'), tag: 'f', src: ['A5b-S12', 'A3b-S8'] },
        { t: z('研究摘要可透過 Common App 的 Additional Information 上傳；不要上傳全文。不收音樂或藝術作品集。', 'A research abstract may go in the Common App Additional Information upload; full papers should not be uploaded. No music or art portfolios.'), tag: 'f', src: ['A5b-S12'] },
        { t: z('Fall 2027 入學 test-optional；Fall 2028 恢復必繳。', 'Test-optional for Fall 2027 entry; testing required again for Fall 2028.'), tag: 'f', src: ['A3b-S8', 'A4-S76'] },
        { t: z('國際生申請助學金為 need-aware；補助給「少數」國際生。ED I 國際生：CSS Profile 11-15，Certification of Finances 等文件 12-01 前經 IDOC 繳交。', 'Need-aware for international aid applicants; aid goes to "a small number". ED I internationals: CSS Profile by Nov 15, Certification of Finances and other documents via IDOC by Dec 1.'), tag: 'f', src: ['A5b-S11', 'A3b-S9', 'A3b-S10'] },
        { t: z('題目沒有標年度；同一頁的測驗段落寫的是 Fall 2027 申請季。', 'The prompts are not year-labelled; the testing note on the same page refers to the Fall 2027 cycle.'), tag: 'f', src: ['A5b-S10'] }
      ],
      deadlines: [
        { plan: 'EDI', date: z('2026-11-15', '2026-11-15'), src: ['A3b-S8', 'A5b-S10'] },
        { plan: 'EDII', date: z('2027-01-05', '2027-01-05'), src: ['A3b-S8', 'A5b-S10'] },
        { plan: 'RD', date: z('2027-01-05', '2027-01-05'), src: ['A3b-S8'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EDI', 'Early Decision I', 'Early Decision I'), o('EDII', 'Early Decision II', 'Early Decision II'), o('RD', 'Regular Decision', 'Regular Decision')], ['A3b-S8']),
          F('stemOnly', z('過去兩年課表全是 STEM 課程？', 'Fully enrolled in STEM courses for the last two years?'), 'radio', { options: YN, src: ['A5b-S12'], help: z('是的話，可以申請豁免，改交第二封 STEM 老師推薦信（A5b-S12）。', 'If yes, you may request a waiver to send a second STEM letter instead of the humanities letter (A5b-S12).') })
        ] }
      ],
      supplementIntro: z('兩題必答，題目為本站轉述（A5b-S10）。', 'Two required prompts, paraphrased here (A5b-S10).'),
      supplement: [
        { id: 'essays', label: z('補充文章（≤500 與 ≤250 words）', 'Supplement essays (≤500 and ≤250 words)'), src: ['A5b-S10'], fields: [
          sq('problems', '一段經驗或一個社群，如何形塑你想解決的問題的類型。', 'How an experience or a community has shaped the kinds of problems you want to solve.', 500, 0, ['A5b-S10']),
          sq('help', '一次「開口求助」帶來改變的經驗。', 'A time when asking for help made a difference.', 250, 0, ['A5b-S10'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S10', 'A5b-S12'], note: z('HMC 說「需要三封推薦信」，其中 counselor 一封標示為「when available」（A5b-S10、S12）。', 'HMC "requires three letters of recommendation"; the counselor letter is labelled "when available" (A5b-S10, S12).') },
        teacher: { min: 2, max: 2, src: ['A5b-S10', 'A5b-S12'], note: z('兩封學科推薦信：一位 STEM 老師、一位人文／社會科學／藝術老師。過去兩年全修 STEM 課者可申請改交第二封 STEM 信。推薦信由推薦人直接 email（A5b-S12）。', 'Two academic letters: one STEM teacher and one humanities, social science or arts teacher. Students fully enrolled in STEM for two years may request a second STEM letter instead. Letters are emailed by the recommender directly (A5b-S12).') },
        other: { min: 0, max: 1, src: ['A5b-S12'], note: z('可多一封，最好來自以不同身分認識你的人，例如主管、mentor 或雇主（A5b-S12）。', 'One additional letter, ideally from someone who knows you in a different context, such as a supervisor, mentor or employer (A5b-S12).') }
      } },

    // ---- Duke
    { id: 'duke', name: z('Duke University', 'Duke University'),
      blurb: z('ED／RD；$85；兩題必答各 250 words，另有一題選答（三選一，250 words）；兩位主科老師；不收履歷、研究摘要與媒體檔案。', 'ED/RD; $85; two required 250-word prompts plus one optional (choose one of three, 250 words); two major-subject teachers; no resumes, research abstracts or media files.'),
      src: ['A5b-S16'],
      facts: [
        { t: z('First-year 用 Common App 或 QuestBridge。報名費 $85 不退；「高經濟需求的學生」可經 Common App 加輔導老師背書申請減免。國際 first-year 的減免規則未載明（checked 2026-11-07）。', 'First-years use the Common App or QuestBridge. Fee $85, nonrefundable; waived "for students with high financial need" via the Common App with counselor endorsement. International first-year waiver: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5b-S16', 'A2-S50'] },
        { t: z('「Duke 不收履歷、研究摘要與媒體檔案。」選交的藝術 supplement 一份走 SlideRoom。', '"Duke does not accept resumes, research abstracts, and media files." One optional arts supplement goes through SlideRoom.'), tag: 'f', src: ['A5b-S16'] },
        { t: z('Pratt：「我們要求修過微積分，並強烈建議物理。」化學未載明。', 'Pratt: "we require coursework in calculus and strongly recommend physics." Chemistry: not stated.'), tag: 'f', src: ['A5b-S16'] },
        { t: z('校友面試選擇性且線上；國際生的 InitialView 會納入考量；Glimpse 影片（$22）只給美國高中。', 'Alumni interviews are optional and virtual; InitialView is considered for internationals; the Glimpse video ($22) is for US high schools only.'), tag: 'f', src: ['A5b-S16'] },
        { t: z('2026–27 first-year 與轉學都 test-optional。', 'Test-optional for first-year and transfer applicants in 2026–27.'), tag: 'f', src: ['A3b-S15', 'A4-S82'] },
        { t: z('外籍生要在原始 first-year 申請中申請 need-based aid；申請補助的外籍生錄取率「通常不到整體錄取率的一半」。頁面沒有用 need-aware 這個詞。', 'Foreign citizens must apply for need-based aid in the original first-year application; the admit rate for aid-seeking foreign citizens is "usually less than half of the overall admit rate". The page does not use the term need-aware.'), tag: 'f', src: ['A3b-S15', 'A4-S82', 'A4-S83'] },
        { t: z('這個錄取率差距表示外籍生申請補助會影響錄取機率。', 'The stated admit-rate gap means an aid request affects a foreign citizen’s odds of admission.'), tag: 'i', src: ['A3b-S15'] },
        { t: z('所有申請者 2027-02-15 前交期中成績。', 'Midyear grades from every applicant by 2027-02-15 or when available.'), tag: 'f', src: ['A3b-S15'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-02（CSS Profile 與 FAFSA 同日；藝術 supplement 同日）', '2026-11-02 (CSS Profile and FAFSA the same day; arts supplement the same day)'), src: ['A3b-S15', 'A5b-S16'] },
        { plan: 'RD', date: z('2027-01-04（CSS Profile 02-01）', '2027-01-04 (CSS Profile by 02-01)'), src: ['A3b-S15', 'A5b-S16'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3b-S15']),
          F('pratt', z('申請 Pratt School of Engineering？', 'Applying to the Pratt School of Engineering?'), 'radio', { required: true, options: YN, src: ['A5b-S16'], help: z('Pratt 要求微積分、至少一封數理老師推薦信（A5b-S16）。', 'Pratt requires calculus and at least one math or science teacher letter (A5b-S16).') }),
          F('optChoice', z('選答題：要寫哪一題？', 'Optional prompt: which one, if any?'), 'radio', { src: ['A5b-S16'], options: [
            o('none', '不寫選答題', 'Skip the optional prompt'),
            o('views', '觀點與經驗', 'Viewpoints and experiences'),
            o('disagree', '一次意見分歧', 'A difference of opinion'),
            o('excited', '讓你興奮的事', 'Something you are excited about')] })
        ] }
      ],
      supplementIntro: z('2026–27 版：兩題必答各 250 words；選答一題（三選一）250 words，只會顯示你在「一般」選的那題。題目為本站轉述（A5b-S16）。', '2026–27: two required prompts of 250 words each; one optional prompt (choose one of three), 250 words, shown only for the option picked under General. Prompts paraphrased (A5b-S16).'),
      supplement: [
        { id: 'required', label: z('必答（各 250 words）', 'Required (250 words each)'), src: ['A5b-S16'], fields: [
          sq('why', 'Why Duke：你為什麼認為 Duke 適合你？', 'Why Duke: why do you consider Duke a good match for you?', 250, 0, ['A5b-S16']),
          sq('communities', 'Communities：你所屬的社群，以及它如何形塑你。', 'Communities: a community you belong to and how it has shaped you.', 250, 0, ['A5b-S16'])
        ] },
        { id: 'optional', label: z('選答（三選一，250 words）', 'Optional (one of three, 250 words)'), src: ['A5b-S16'], fields: [
          sq('views', '你的觀點與經驗如何為 Duke 帶來不同。', 'How your viewpoints and experiences would add to Duke.', 250, 0, ['A5b-S16'], { showIf: { path: 'col.duke.questions.general.optChoice', equals: 'views' } }),
          sq('disagree', '一次你與人意見分歧的經驗。', 'A time you held a difference of opinion with someone.', 250, 0, ['A5b-S16'], { showIf: { path: 'col.duke.questions.general.optChoice', equals: 'disagree' } }),
          sq('excited', '一件讓你興奮的事。', 'Something you are excited about.', 250, 0, ['A5b-S16'], { showIf: { path: 'col.duke.questions.general.optChoice', equals: 'excited' } })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S16'] },
        teacher: { min: 2, max: 2, src: ['A5b-S16'], note: z('兩位「教過你主要學科課程」的老師，最好是最近兩年；Pratt「至少一封來自數學或科學老師」（A5b-S16）。', 'Two teachers "who have taught you in major academic courses", preferably from the last two years; Pratt: "at least one recommendation should be from a math or science teacher" (A5b-S16).') },
        other: { min: 0, max: 1, src: ['A5b-S16'], note: z('選交一封 Personal Recommendation，來自雇主、mentor 或其他熟識你的人（A5b-S16）。', 'One optional Personal Recommendation from an employer, mentor or someone else who knows you well (A5b-S16).') }
      } },

    // ---- Northwestern
    { id: 'northwestern', name: z('Northwestern University', 'Northwestern University'),
      blurb: z('ED／RD；$75；一題必答 ≤300 words，再從五題中選答、各不到 200 words；Common App 主文 2026–27 起不再要求；一位老師加 counselor；不辦校友面試。', 'ED/RD; $75; one required prompt of 300 words or fewer, then a choice from five optional prompts of fewer than 200 words each; the Common App personal essay is no longer required from 2026–27; one teacher plus the counselor; no alumni interviews.'),
      src: ['A5b-S17', 'A5b-S18', 'A5b-S19'],
      facts: [
        { t: z('Common App 或 Apply Coalition with Scoir；另有 QuestBridge 輪（10-01）。「不退的 $75 報名費或 fee waiver」。', 'Common App or Apply Coalition with Scoir; a QuestBridge round (Oct 1). "Non-refundable $75 application fee or fee waiver".'), tag: 'f', src: ['A5b-S17', 'A2-S51', 'V4-T7'] },
        { t: z('減免類別包括「與美國或國際 Community Based Organization 有關」，以及任何覺得費用「仍構成經濟困難」的申請者。', 'Waiver categories include affiliation "with a U.S. or international Community Based Organization" and any applicant for whom the fee "nevertheless poses a financial hardship".'), tag: 'f', src: ['A5b-S20'] },
        { t: z('所列類別都不要求美國公民身分，所以國際生看來符合；頁面沒有明說。', 'None of the listed categories requires US citizenship, so internationals appear eligible; the page does not say so in so many words.'), tag: 'i', src: ['A5b-S20'] },
        { t: z('Common App 主文「我們不再要求」，有交仍會審閱；多答選答題不會多加「weight」。', 'The Common App personal essay is one "we no longer require", though it is reviewed if submitted; answering more optional prompts carries no extra "weight".'), tag: 'f', src: ['A5b-S18', 'A5b-S19', 'V4-T5'] },
        { t: z('「Northwestern 不再提供校友面試。」選交錄影：Glimpse（美國高中）或 InitialView（國際高中），ED 11-06、RD 01-16 截止。', '"Northwestern no longer offers alumni interviews." Optional recordings: Glimpse (US high schools) or InitialView (international high schools), due Nov 6 (ED) or Jan 16 (RD).'), tag: 'f', src: ['A5b-S18', 'V4-T5'] },
        { t: z('明文不收未經要求的補充材料：作品、作品集、錄音錄影、網站（含社群媒體）都點名在內，「不會被審閱」。', 'Unsolicited supplements are refused in writing: artwork, portfolios, recordings and websites (social media included) are named and "will not be reviewed".'), tag: 'f', src: ['V4-T6'] },
        { t: z('McCormick「建議」至少 3 年實驗科學（化學與物理為佳）與 3.5–4 年數學（有微積分為佳），非必修。', 'McCormick "recommends" at least 3 years of lab science (chemistry and physics preferred) and 3.5–4 years of math (calculus preferred); not required.'), tag: 'f', src: ['A5b-S21'] },
        { t: z('國際生申請助學金為 need-aware，要在申請表上勾選；CSS Profile（code 1565）或 ISAFA。', 'Need-aware for international aid; opt in on the application; CSS Profile (code 1565) or ISAFA.'), tag: 'f', src: ['A3b-S19', 'A4-S86'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-01（補助 12-01；錄影 11-06）', '2026-11-01 (aid by 12-01; recording by 11-06)'), src: ['V4-T7', 'A3b-S16', 'V4-T5'] },
        { plan: 'RD', date: z('2027-01-04（補助 02-01；錄影 01-16）', '2027-01-04 (aid by 02-01; recording by 01-16)'), src: ['V4-T7', 'A3b-S16', 'V4-T5'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['V4-T7', 'A3b-S16']),
          F('school', z('申請的學院', 'School or college'), 'text', { src: ['A5b-S21', 'V4-T5'], help: z('Northwestern 的頁面提到 McCormick（工程）、Bienen（音樂，另有補充表與試奏）與 ISP（另一份獨立申請）；完整學院清單本站未重現（A5b-S21、V4-T5）。', 'Northwestern’s pages mention McCormick (engineering), Bienen (music, with its own supplement and auditions) and ISP (a separate application); the full list of schools is not reproduced here (A5b-S21, V4-T5).') })
        ] }
      ],
      supplementIntro: z('2026–27 版。一題必答，300 words 以內。選答題五選：A5b-S18／S19 的讀法是「0–2 題」，瀏覽器讀到的 requirements 頁則寫「至少一題、最多兩題」（V4-T5），每題「不到 200 words」，計數器以 200 為上限。題目為本站轉述。', '2026–27. One required prompt of 300 words or fewer. Five optional prompts: A5b-S18/S19 read as "0–2", while the requirements page as read in the browser says "at least one and no more than two" (V4-T5); each is "fewer than 200 words", so the counter uses 200. Prompts paraphrased.'),
      supplement: [
        { id: 'required', label: z('必答（≤300 words）', 'Required (300 words or fewer)'), src: ['A5b-S18'], fields: [
          sq('background', '你的背景中，哪些面向最影響你想像自己如何參與 Northwestern 的社群？', 'Which aspects of your background have most shaped how you see yourself engaging in Northwestern’s community?', 300, 0, ['A5b-S18'])
        ] },
        { id: 'optional', label: z('選答（五題，各不到 200 words）', 'Optional (five prompts, fewer than 200 words each)'), src: ['A5b-S18', 'A5b-S19', 'V4-T5'],
          intro: z('寫一到兩題即可，其餘留白；多寫不加分（A5b-S19）。', 'Answer one or two and leave the rest blank; more answers earn no extra weight (A5b-S19).'), fields: [
          F('rock', z('如果你能在 The Rock 上畫什麼？', 'What would you paint on The Rock?'), 'textarea', { wide: true, rows: 4, limit: { words: 200 }, src: ['A5b-S18'] }),
          F('design', z('你會設計什麼課程或研究專題？', 'A class or research project you would design.'), 'textarea', { wide: true, rows: 4, limit: { words: 200 }, src: ['A5b-S18'] }),
          F('communities', z('你想加入校園裡的哪些社群？', 'Communities on campus you would join.'), 'textarea', { wide: true, rows: 4, limit: { words: 200 }, src: ['A5b-S18'] }),
          F('location', z('地點：芝加哥與 Evanston 對你意味著什麼？', 'The location: what Evanston and Chicago mean to you.'), 'textarea', { wide: true, rows: 4, limit: { words: 200 }, src: ['A5b-S18'] }),
          F('perspectives', z('你如何為多元觀點做出貢獻？', 'How you would contribute to a diversity of perspectives.'), 'textarea', { wide: true, rows: 4, limit: { words: 200 }, src: ['A5b-S18'] })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S18'] },
        teacher: { min: 1, max: 1, src: ['A5b-S18', 'V4-T5'], note: z('「我們要求兩封推薦信」：counselor 一封、老師一封，「最可能是……你 11 或 12 年級核心科目的老師」（A5b-S18、V4-T5）。', '"We require two letters of recommendation": one counselor, one teacher, "most likely … from one of your core subject areas, in your junior or senior year" (A5b-S18, V4-T5).') },
        other: { min: 0, max: null, src: ['A5b-S18', 'V4-T5'], note: z('接受「additional reference」的 supplemental letters，「每封信最好都提供關於你的新資訊或不同資訊」（A5b-S18、V4-T5）。', 'Supplemental letters from an "additional reference" are accepted, and "it is in your best interest that each letter provides new or different information about you" (A5b-S18, V4-T5).') }
      } },

    // ---- Rice
    { id: 'rice', name: z('Rice University', 'Rice University'),
      blurb: z('ED I／ED II／RD；$75；150＋150 words，再加 500 words 二選一；Rice Box 圖片一張（不計分）；兩位核心學科老師；國際生不能申請報名費減免。', 'ED I / ED II / RD; $75; 150 + 150 words plus one 500-word essay (choose one of two); one Rice Box image (not evaluated); two core-subject teachers; no application-fee waiver for internationals.'),
      src: ['A5b-S22', 'A5b-S23'],
      facts: [
        { t: z('Common App 加 Rice 寫作 supplement，或 QuestBridge。作品集與 Rice Box 上傳到 Rice Admission Student Portal。', 'Common App with the Rice writing supplement, or QuestBridge. Portfolios and the Rice Box are uploaded to the Rice Admission Student Portal.'), tag: 'f', src: ['A5b-S22', 'A5b-S23'] },
        { t: z('報名費 $75 不退；「國際申請者不符合申請報名費減免的資格。」', 'Fee $75, nonrefundable; "International applicants are not eligible to request an application fee waiver."'), tag: 'f', src: ['A5b-S22', 'A5b-S23'] },
        { t: z('Rice Box 要一張圖片，「不用於評分」。', 'The Rice Box asks for one image and "is not used for evaluative purposes".'), tag: 'f', src: ['A5b-S23'] },
        { t: z('自然科學與工程「要求三角或預微積分，以及化學與物理」；第二年化學或生物可代替物理。微積分未列為必修。', 'Natural sciences and engineering "require trigonometry or pre-calculus, and both chemistry and physics"; a second year of chemistry or biology may substitute for physics. Calculus is not listed as required.'), tag: 'f', src: ['A5b-S22', 'A5b-S23'] },
        { t: z('面試選擇性，送件後在 portal 申請；2026–27 全部線上，由校友或在校生進行。國際生「可交 InitialView」；國際生能否另約 Rice 校友面試未載明。', 'Interviews are optional, requested through the portal after applying; all virtual in 2026–27, by alumni or current students. Internationals "may submit interviews from InitialView"; whether they may also request a Rice alumni interview: not stated.'), tag: 'f', src: ['A5b-S22', 'A5b-S23'] },
        { t: z('SAT／ACT「建議」繳交，非必繳。', 'SAT/ACT "recommended", not required.'), tag: 'f', src: ['A3b-S21', 'A4-S87'] },
        { t: z('國際生 need-aware；need-based aid 給「少數」國際 first-year。沒申請補助而錄取的國際生之後不能再申請。所有國際生申請時交 International Student Financial Statement 與銀行證明。', 'Need-aware for internationals; need-based aid for "a limited number" of international first-years. Internationals admitted without an aid request cannot apply later. Every international applicant files an International Student Financial Statement with bank proof at application.'), tag: 'f', src: ['A5b-S23', 'A3b-S22', 'A4-S87'] },
        { t: z('Shepherd 音樂院全部資料 12-01 截止，音樂申請者不能走 ED I／ED II。', 'Shepherd School music materials are due Dec 1, and music applicants may not use ED I or ED II.'), tag: 'f', src: ['A3b-S21'] }
      ],
      deadlines: [
        { plan: 'EDI', date: z('2026-11-01（面試申請 11-03；InitialView 11-10）', '2026-11-01 (interview request by 11-03; InitialView by 11-10)'), src: ['A3b-S21', 'A3b-S22'] },
        { plan: 'EDII', date: z('2027-01-04（面試申請 01-06；InitialView 01-12）', '2027-01-04 (interview request by 01-06; InitialView by 01-12)'), src: ['A3b-S21', 'A3b-S22'] },
        { plan: 'RD', date: z('2027-01-04（面試優先申請 12-16；InitialView 01-12）', '2027-01-04 (priority interview request by 12-16; InitialView by 01-12)'), src: ['A3b-S21', 'A3b-S22'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EDI', 'Early Decision I', 'Early Decision I'), o('EDII', 'Early Decision II', 'Early Decision II'), o('RD', 'Regular Decision', 'Regular Decision')], ['A3b-S21']),
          F('areas', z('選定的學術領域', 'Selected academic areas'), 'text', { required: true, src: ['A5b-S22'], help: z('第一題會問你為什麼被這些領域吸引（A5b-S22）。實際表單的清單本站未重現。', 'Prompt 1 asks what draws you to these areas (A5b-S22). The real form’s list is not reproduced here.') }),
          F('p3choice', z('500 words 題目：選哪一題？', '500-word essay: which prompt?'), 'radio', { required: true, src: ['A5b-S22', 'A5b-S23'], options: [
            o('college', '住宿學院系統與你的觀點', 'The residential college system and your perspectives'),
            o('background', '背景形塑的觀點', 'Perspectives shaped by your background')] })
        ] }
      ],
      supplementIntro: z('2026–27 版。兩題 150 words，加一題 500 words 二選一（只顯示你在「一般」選的那題）。Rice Box 的圖片上傳在這個模擬頁無法重現，只留描述欄。題目為本站轉述（A5b-S22、S23）。', '2026–27. Two 150-word prompts plus one 500-word essay, one of two (only the option picked under General is shown). The Rice Box image upload cannot be reproduced in this mock; a description box stands in. Prompts paraphrased (A5b-S22, S23).'),
      supplement: [
        { id: 'short', label: z('短答（各 150 words）', 'Short answers (150 words each)'), src: ['A5b-S22', 'A5b-S23'], fields: [
          sq('areas', '是什麼吸引你選擇這些學術領域？', 'What draws you to the academic areas you selected?', 150, 0, ['A5b-S22', 'A5b-S23']),
          sq('experience', 'Rice 經驗中的哪些元素吸引你？', 'Which elements of the Rice experience appeal to you?', 150, 0, ['A5b-S22', 'A5b-S23'])
        ] },
        { id: 'essay', label: z('長文（500 words，二選一）', 'Essay (500 words, one of two)'), src: ['A5b-S22', 'A5b-S23'], fields: [
          sq('college', '住宿學院系統，以及你會帶進來的觀點。', 'The residential college system and the perspectives you would bring to it.', 500, 0, ['A5b-S22', 'A5b-S23'], { showIf: { path: 'col.rice.questions.general.p3choice', equals: 'college' } }),
          sq('background', '你的背景如何形塑你的觀點。', 'How your background has shaped your perspectives.', 500, 0, ['A5b-S22', 'A5b-S23'], { showIf: { path: 'col.rice.questions.general.p3choice', equals: 'background' } })
        ] },
        { id: 'box', label: z('Rice Box（一張圖片，不計分）', 'Rice Box (one image, not evaluated)'), src: ['A5b-S23'], fields: [
          F('box', z('你會放哪一張圖？（這裡只能描述，不能上傳）', 'Which image would you upload? (describe only; no upload here)'), 'text', { src: ['A5b-S23'], help: z('Rice 說這張圖「不用於評分」；實際是在 Rice 的 portal 上傳（A5b-S22、S23）。', 'Rice says the image "is not used for evaluative purposes"; the real upload is in Rice’s portal (A5b-S22, S23).') })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S22', 'A5b-S23'], note: z('counselor、校長或 headmaster 一封（A5b-S22）。', 'One letter from the counselor, principal or headmaster (A5b-S22).') },
        teacher: { min: 2, max: 2, src: ['A5b-S22', 'A5b-S23'], note: z('兩位核心學科老師；「最好」有一位與你想讀的領域相關（A5b-S22、S23）。', 'Two teachers of core academic subjects; "ideally" one relates to your intended area of study (A5b-S22, S23).') },
        other: { min: 0, max: null, src: ['A5b-S22'], note: z('選交的 supplemental recommendations，例如雇主、教練、mentor 或其他老師，經申請平台或 email 寄給 Rice（A5b-S22）。', 'Optional supplemental recommendations, for example from employers, coaches, mentors or other teachers, through the application platform or by email to Rice (A5b-S22).') }
      } },

    // ---- UC Berkeley
    { id: 'ucb', name: z('UC Berkeley', 'UC Berkeley'),
      blurb: z('UC Application，收件期 10-01 至 11-30；國際生每校 $95，不能減免；四題 PIQ 各 350 words 在 UC 分頁；只保證審第一志願主修；不收補充資料，沒有面試；受邀繳推薦信的政策在現行網站找不到。', 'UC application, filing Oct 1 to Nov 30; $95 per campus for internationals, no waiver; four 350-word PIQs in the UC tab; only the primary major is guaranteed a review; no supplementary materials, no interviews; the invited-letter policy cannot be found on the current site.'),
      src: ['A5b-S24', 'A5b-S25', 'A5b-S31'],
      facts: [
        { t: z('「每個 UC 校區 $80（國際與非移民申請者 $95）。」減免只限美國公民、永久居民與 AB540 學生。', '"$80 for each UC campus ($95 for international and non-immigrant applicants)." Waivers are limited to US citizens, permanent residents and AB540-eligible students.'), tag: 'f', src: ['A5b-S24', 'A2-S9'] },
        { t: z('Berkeley「只保證審第一志願主修，不會以 alternate major 審查」。可經聯絡表單申請改主修或學院，「1 月之後不再考慮新的主修變更」。', 'Berkeley "only guarantees the review of the primary major and will not review students for an alternate major". A change of major or college can be requested through the contact form; "No new major changes will be considered after January."'), tag: 'f', src: ['A5b-S25'] },
        { t: z('L&S 熱門主修政策：以熱門主修為第一志願且錄取 L&S 者，在條件下保證該主修；之後才宣告要經審查，而且「只有一次機會」。哪些主修算熱門，該頁沒列。', 'L&S high-demand majors: listing one as the primary major guarantees a place in it if admitted to L&S, subject to conditions; declaring later requires a review and "one opportunity". Which majors count is not listed on that page.'), tag: 'f', src: ['A5b-S27'] },
        { t: z('Berkeley「不向申請者索取成績單、作品集或其他佐證文件」；「無法接受作品集、12 年級成績或其他補充資料」，「未經要求的資料不會被審閱」。', 'Berkeley does "not ask applicants for transcripts, portfolios, or other supporting documents" and is "unable to accept portfolios, senior-year grades, or other supplemental materials"; "Unsolicited materials will not be reviewed."'), tag: 'f', src: ['A5b-S52', 'A5b-S25'] },
        { t: z('推薦信（受邀才繳）的政策：現行 freshman requirements、checklist、FAQ 頁都沒提，站內搜尋「recommendation」沒有結果。只有一份未標日期的舊指南描述「as of fall 2015」的受邀流程。', 'Invited letters of recommendation: not mentioned on the current freshman requirements, checklist or FAQ pages, and the site search for "recommendation" returns nothing. Only an undated older guide describes the invitation process "as of fall 2015".'), tag: 'f', src: ['A5b-S28', 'A5b-S29', 'A5b-S30', 'A2-S11'] },
        { t: z('這項政策可能已撤除或移出招生網站；重查前本站維持「not stated」。', 'The policy may have been withdrawn or moved off the admissions site; until re-verified this site keeps "not stated".'), tag: 'i', src: ['A5b-S28', 'A5b-S30'] },
        { t: z('「UC Berkeley 不提供校友或招生官面試。」InitialView 選繳。Test-free：SAT／ACT 不用於申請任何環節。', '"UC Berkeley does not offer alumni or admissions officer interviews." InitialView optional. Test-free: SAT/ACT are not used in any part of the application.'), tag: 'f', src: ['A5b-S26', 'A4-S104'] },
        { t: z('MET 與部分商學學程要經 MAP@Berkeley 交補充表。Berkeley 必填表格截止 2027-01-31。', 'The MET program and some business programs require supplemental forms via MAP@Berkeley. Berkeley’s mandatory forms are due 2027-01-31.'), tag: 'f', src: ['A5b-S29', 'A3b-S26'] },
        { t: z('非居民最低 GPA 3.4（10–11 年級 A–G 課程）；國際生不符聯邦、州與校內 need-based 補助。', 'Minimum GPA 3.4 for non-residents (grades 10–11 A–G courses); internationals are ineligible for federal, state and need-based university aid.'), tag: 'f', src: ['A5b-S28', 'A3b-S28'] }
      ],
      deadlines: [UC_DL],
      questions: ucGeneral('ucb', [
        F('major1', z('第一志願主修（唯一保證審查的主修）', 'Primary major (the only one guaranteed a review)'), 'text', { required: true, src: ['A5b-S25'], help: z('Berkeley 不審 alternate major（A5b-S25）；L&S 熱門主修只保證給以它為第一志願的人（A5b-S27）。', 'Berkeley does not review the alternate major (A5b-S25); an L&S high-demand major is guaranteed only when it is the primary major (A5b-S27).') }),
        F('college', z('申請的學院', 'College'), 'text', { src: ['A5b-S25'], help: z('改學院或主修要經聯絡表單，1 月之後不再考慮（A5b-S25）。', 'Changing college or major goes through the contact form and is not considered after January (A5b-S25).') })
      ], ['A5b-S25']),
      supplementIntro: UC_SUPP_INTRO,
      supplement: ucSupp('ucb', 'Berkeley 沒有校區自己的文書題；不收任何補充資料（A5b-S25、S52）。', 'Berkeley has no campus essay of its own and accepts no supplementary materials (A5b-S25, S52).', ['A5b-S25', 'A5b-S52', 'A5b-S31']),
      recs: {
        counselor: UC_RECS.counselor,
        teacher: { min: 0, max: 0, src: ['A5b-S28', 'A5b-S30', 'A2-S11'], note: z('受邀繳信的政策在現行網站找不到（A5b-S28、S30）；舊指南說受邀者最多兩封、其中一封來自學科老師、直接寄給 Berkeley、未受邀的信不會加入檔案（A2-S11，未標日期）。', 'The invited-letter policy cannot be found on the current site (A5b-S28, S30); the older guide said invitees could send up to two letters, one from an academic teacher, directly to Berkeley, and uninvited letters are not added (A2-S11, undated).') },
        other: UC_RECS.other
      } },

    // ---- UCLA
    { id: 'ucla', name: z('UCLA', 'UCLA'),
      blurb: z('UC Application，收件期 10-01 至 11-30；四題 PIQ 在 UC 分頁；「只審一個主修」；不要求也不收推薦信；沒有面試；不看 SAT／ACT。', 'UC application, filing Oct 1 to Nov 30; four PIQs in the UC tab; "one major only"; letters neither required nor accepted; no interviews; SAT/ACT not considered.'),
      src: ['A5b-S32', 'A5b-S33', 'A5b-S34'],
      facts: [
        { t: z('「UCLA 只以一個主修審查 first-year 申請者。」UC 表單上的 alternate major 是給其他 UC 校區用的。', '"UCLA reviews first-year applicants for one major only." The alternate major on the UC application is for use by other UC campuses.'), tag: 'f', src: ['A5b-S33'] },
        { t: z('Arts and Architecture、Music、Nursing、Theater, Film and Television 的主修要另交 supplemental application，而且必須列為第一志願。截止日未載明（checked 2026-11-07）。', 'Majors in Arts and Architecture, Music, Nursing, and Theater, Film and Television require a supplemental application and must be listed as first choice. Deadlines: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5b-S32', 'A3b-S29'] },
        { t: z('Samueli 工程不需 supplemental application；「所有學院分部與工學院都歡迎 undeclared」。工學院內改主修可到 1 月 1 日。', 'The Samueli School of Engineering needs no supplemental application; "Undeclared majors are welcome in all divisions of the College along with the School of Engineering." Changes within Engineering are allowed until January 1.'), tag: 'f', src: ['A5b-S33'] },
        { t: z('Samueli 學生事務頁說轉學生不能轉入 CS、CSE、航太、機械，因為是「severely impacted majors」；first-year 是否同樣受限未載明。', 'Samueli’s student-affairs page says transfer students cannot change into CS, CSE, Aerospace or Mechanical Engineering because they are "severely impacted majors"; whether first-years face the same rule: not stated.'), tag: 'f', src: ['A5b-S35', 'A5b-S33'] },
        { t: z('UCLA「不要求也不收推薦信」；部分專業學院的 supplement 可能要求。「我們不提供入學面試。」', 'UCLA does "not require or accept letters of recommendation"; some professional-school supplements may ask. "We do not offer admission interviews."'), tag: 'f', src: ['A5b-S34'] },
        { t: z('收件期表格寫 10-01 至 11-30，同頁另一句寫「10 月 1 日至 12 月 1 日」；UC 系統頁為 2026-11-30。本站以 11-30 為準。', 'The filing-period table says Oct 1 to Nov 30, while another sentence on the same page says "October 1-December 1"; the UC system page says Nov 30, 2026. This site uses Nov 30.'), tag: 'f', src: ['A3b-S29', 'A3b-S23'] },
        { t: z('不提供補助或獎學金給非美國公民、非永久居民的大學生；財力證明在錄取後才交。SAT／ACT 不納入考量。', 'No aid or scholarships for undergraduates who are not US citizens or permanent residents; proof of funds only after admission. SAT/ACT not considered.'), tag: 'f', src: ['A4-S106', 'A4-S107'] }
      ],
      deadlines: [UC_DL],
      questions: ucGeneral('ucla', [
        F('major1', z('主修（UCLA 只審這一個）', 'Major (the only one UCLA reviews)'), 'text', { required: true, src: ['A5b-S33'], help: z('工學院接受 undeclared；藝術、音樂、護理、戲劇影視主修必須列第一志願並另交 supplemental application（A5b-S32、S33）。', 'Engineering accepts undeclared; arts, music, nursing and theater/film majors must be first choice and add a supplemental application (A5b-S32, S33).') }),
        F('suppApp', z('這個主修需要 supplemental application？', 'Does this major require a supplemental application?'), 'radio', { options: YN, src: ['A5b-S32'], help: z('只有 Arts and Architecture、Music、Nursing、Theater, Film and Television（A5b-S32）。', 'Only Arts and Architecture, Music, Nursing, and Theater, Film and Television (A5b-S32).') })
      ], ['A5b-S32', 'A5b-S33']),
      supplementIntro: UC_SUPP_INTRO,
      supplement: ucSupp('ucla', 'UCLA 沒有校區自己的文書題；藝術、音樂、護理、戲劇影視的 supplemental application 內容本站未取得（A5b-S32）。', 'UCLA has no campus essay of its own; the content of the arts, music, nursing and theater/film supplemental applications was not captured (A5b-S32).', ['A5b-S31', 'A5b-S32']),
      recs: {
        counselor: UC_RECS.counselor,
        teacher: { min: 0, max: 0, src: ['A5b-S34'], note: z('UCLA「不要求也不收推薦信」（A5b-S34）。', 'UCLA does "not require or accept letters of recommendation" (A5b-S34).') },
        other: { min: 0, max: 0, src: ['A5b-S34'] }
      } },

    // ---- UC San Diego
    { id: 'ucsd', name: z('UC San Diego', 'UC San Diego'),
      blurb: z('UC Application，收件期 10-01 至 11-30；四題 PIQ 在 UC 分頁；可排序四個 undergraduate college；Data Science、Engineering、Public Health 為 selective majors，強烈建議填非 selective 的 alternate major；推薦信與面試未載明。', 'UC application, filing Oct 1 to Nov 30; four PIQs in the UC tab; rank your top four undergraduate colleges; Data Science, Engineering and Public Health are selective majors, so a non-selective alternate major is strongly recommended; letters and interviews not stated.'),
      src: ['A5b-S36', 'A5b-S37', 'A5b-S31'],
      facts: [
        { t: z('申請者可排序前四個 undergraduate college。', 'Applicants can rank their top four undergraduate colleges.'), tag: 'f', src: ['A5b-S37'] },
        { t: z('「Selective major 是因為容量而限制名額的主修。」Selective majors 為 Data Science、Engineering、Public Health；Nanoengineering 與 Structural Engineering 是「Screened Majors」。', '"A selective major is one with limited enrollment, due to capacity." The selective majors are Data Science, Engineering and Public Health; Nanoengineering and Structural Engineering are "Screened Majors".'), tag: 'f', src: ['A5b-S37'] },
        { t: z('主修頁以星號標示的主修包括 Computer Science、Computer Engineering、Electrical Engineering、Bioengineering（含三個選項）、Mechanical and Aerospace Engineering、Chemical Engineering、Data Science、Artificial Intelligence B.S.、Public Health。', 'The majors page asterisks majors including Computer Science, Computer Engineering, Electrical Engineering, Bioengineering (and its three options), Mechanical and Aerospace Engineering, Chemical Engineering, Data Science, Artificial Intelligence B.S. and Public Health.'), tag: 'f', src: ['A5b-S36'] },
        { t: z('UCSD「強烈建議」填非 selective 的 alternate major；第一志願落選者「若有名額，可能錄取到 alternate major」。', 'UCSD "strongly recommend[s]" a non-selective alternate major; an applicant not admitted to a selective first choice "may be admitted to your alternate major if space is available".'), tag: 'f', src: ['A5b-S37'] },
        { t: z('Music、Theatre & Dance、Visual Arts 可選交作品集或試演。', 'An optional portfolio or audition is offered for Music, Theatre & Dance and Visual Arts.'), tag: 'f', src: ['A5b-S37'] },
        { t: z('推薦信、面試、先修課程：UCSD 的申請要求頁都未載明（checked 2026-11-07）。', 'Letters, interviews and prerequisites: not stated on UCSD’s requirements page (checked 2026-11-07).'), tag: 'f', src: ['A5b-S37'] },
        { t: z('SAT／ACT 不納入考量。錄取後：最終成績單 2027-07-01、IB 成績 2027-07-15。國際生不符聯邦與州補助；校內補助未載明。', 'SAT/ACT not considered. After admission: final transcripts by 2027-07-01, IB results by 2027-07-15. Internationals are ineligible for federal and state aid; institutional aid: not stated.'), tag: 'f', src: ['A4-S109', 'A3b-S31', 'A4-S110'] }
      ],
      deadlines: [UC_DL],
      questions: ucGeneral('ucsd', [
        F('major1', z('第一志願主修', 'First-choice major'), 'text', { required: true, src: ['A5b-S37'], help: z('Data Science、Engineering、Public Health 為 selective；Nanoengineering 與 Structural Engineering 為 screened（A5b-S37）。', 'Data Science, Engineering and Public Health are selective; Nanoengineering and Structural Engineering are screened (A5b-S37).') }),
        F('major2', z('Alternate major（強烈建議填非 selective 的主修）', 'Alternate major (a non-selective one is strongly recommended)'), 'text', { src: ['A5b-S37'] }),
        F('college1', z('College 排序 1', 'College rank 1'), 'text', { src: ['A5b-S37'], help: z('UCSD 的 undergraduate college 清單本站未重現；可排前四個（A5b-S37）。', 'UCSD’s list of undergraduate colleges is not reproduced here; you rank your top four (A5b-S37).') }),
        F('college2', z('College 排序 2', 'College rank 2'), 'text', { src: ['A5b-S37'] }),
        F('college3', z('College 排序 3', 'College rank 3'), 'text', { src: ['A5b-S37'] }),
        F('college4', z('College 排序 4', 'College rank 4'), 'text', { src: ['A5b-S37'] })
      ], ['A5b-S37']),
      supplementIntro: UC_SUPP_INTRO,
      supplement: ucSupp('ucsd', 'UCSD 沒有校區自己的文書題；Music、Theatre & Dance、Visual Arts 的選交作品集或試演在這個模擬頁無法重現（A5b-S37）。', 'UCSD has no campus essay of its own; the optional portfolio or audition for Music, Theatre & Dance and Visual Arts cannot be reproduced in this mock (A5b-S37).', ['A5b-S31', 'A5b-S37']),
      recs: {
        counselor: UC_RECS.counselor,
        teacher: { min: 0, max: 0, src: ['A5b-S37'], note: z('UCSD 的要求頁沒有提到推薦信（not stated，checked 2026-11-07，A5b-S37）；UC 系統不隨申請收信（A2-S8）。', 'UCSD’s requirements page does not mention letters (not stated, checked 2026-11-07, A5b-S37); the UC system takes none with the application (A2-S8).') },
        other: { min: 0, max: 0, src: ['A5b-S37', 'A2-S8'] }
      } },

    // ---- UT Austin
    { id: 'utaustin', name: z('University of Texas at Austin', 'University of Texas at Austin'),
      blurb: z('EA 10-15／RD 12-01；國際生 $90、不能減免；一篇 500–650 words（Common App 主文可抵）＋兩題必答短答（40 行內，約 250–300 words）＋一題選答；推薦信選交、最多兩封、鼓勵校外人士。', 'EA Oct 15 / RD Dec 1; $90 for internationals, no waiver; one 500–650-word essay (the Common App essay counts) plus two required short answers (within 40 lines, about 250–300 words) and one optional; letters optional, up to two, outside writers encouraged.'),
      src: ['A5b-S38', 'A5b-S39', 'A5b-S40'],
      facts: [
        { t: z('Freshman 頁說「夏／秋季入學用 Common App 申請」；文書頁說短答隨「Common App 或 ApplyTexas」送出。兩頁對 ApplyTexas 是否仍可用於秋季 first-year 入學說法不一；applytexas.org 本身 2026-11-07 回 HTTP 403。', 'The freshman page says "Apply using the Common App for summer/fall admission"; the essays page says short answers go with "either the Common App or ApplyTexas application". The two pages disagree on whether ApplyTexas still serves fall first-year entry; applytexas.org itself returned HTTP 403 on 2026-11-07.'), tag: 'f', src: ['A2-S29', 'A2-S30', 'A5b-S38'] },
        { t: z('國際生報名費 $90（freshman 頁寫 $75）；「國際學生無法申請費用減免。」', 'International fee $90 (the freshman page lists $75); "Fee waivers are not available for international students."'), tag: 'f', src: ['A5b-S40', 'A5b-S38'] },
        { t: z('非美國申請者適用國際生的金額；以申請系統內顯示為準。', 'The international figure applies to a non-US applicant; confirm inside the application itself.'), tag: 'i', src: ['A5b-S40', 'A5b-S38'] },
        { t: z('選第一與第二志願主修；部分主修要求額外項目。「所申請主修的競爭程度」是審查因素。', 'Pick a first- and a second-choice major; some majors ask for extra items. "Competitiveness of the major you applied to" is a review factor.'), tag: 'f', src: ['A5b-S38', 'A5b-S40', 'A5b-S41'] },
        { t: z('履歷選交；交的話要寫「每項活動的具體內容」、每週時數與每年週數。', 'The resume is optional; if submitted it should give "Details about what each activity involved", with hours per week and weeks per year.'), tag: 'f', src: ['A5b-S38', 'A5b-S41'] },
        { t: z('前 5% 自動錄取只適用德州高中畢業生（Summer/Fall 2027）；德州以外學校的國際申請者不在範圍內，頁面沒有點名國際生。', 'Top-5% automatic admission applies to Texas high school graduates (Summer/Fall 2027); an international applicant at a school outside Texas is not covered, though the page does not name internationals.'), tag: 'i', src: ['A5b-S41'] },
        { t: z('至少一份官方 SAT 或 ACT 成績（CLT 亦可）；面試與先修課程未載明（checked 2026-11-07）。', 'At least one official SAT or ACT score (CLT also accepted); interviews and prerequisites: not stated (checked 2026-11-07).'), tag: 'f', src: ['A3b-S33', 'A5b-S38', 'A5b-S41'] },
        { t: z('EA 2027-01-15 前放榜或延後；RD 02-15；榮譽學程 03-01。', 'EA decision or deferral by 2027-01-15; RD Feb 15; honors Mar 1.'), tag: 'f', src: ['A3b-S33'] }
      ],
      deadlines: [
        { plan: 'EA', date: z('2026-10-15（補充資料 10-22）', '2026-10-15 (supplemental materials by 10-22)'), src: ['A3b-S33', 'A5b-S38'] },
        { plan: 'RD', date: z('2026-12-01（補充資料 12-10）', '2026-12-01 (supplemental materials by 12-10)'), src: ['A3b-S33', 'A5b-S38'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EA', 'Early Action（EA）', 'Early Action (EA)'), o('RD', 'Regular（RD）', 'Regular (RD)')], ['A3b-S33']),
          F('system', z('用哪個系統送件？', 'Which system are you filing through?'), 'radio', { required: true, src: ['A2-S29', 'A2-S30'], options: [o('commonapp', 'Common App', 'Common App'), o('applytexas', 'ApplyTexas（兩頁說法不一，見上方事實）', 'ApplyTexas (the two UT pages disagree; see facts above)')] }),
          F('major1', z('第一志願主修', 'First-choice major'), 'text', { required: true, src: ['A5b-S38'], help: z('短答第一題會問你為什麼選它；「主修競爭程度」是審查因素（A5b-S39、S41）。', 'Short answer 1 asks why you chose it; "competitiveness of the major" is a review factor (A5b-S39, S41).') }),
          F('major2', z('第二志願主修', 'Second-choice major'), 'text', { required: true, src: ['A5b-S38'] }),
          F('resume', z('要交選交的履歷？', 'Submitting the optional resume?'), 'radio', { options: YN, src: ['A5b-S38'], help: z('要寫每項活動的內容、每週時數、每年週數（A5b-S38）。', 'Give what each activity involved, hours per week and weeks per year (A5b-S38).') })
        ] }
      ],
      supplementIntro: z('文書頁沒有標申請季。一篇主題不限的文章 500–650 words，Common App 主文可抵，所以用 Common App 送件時這格可留白。短答上限是「不超過 40 行」、約 250–300 words：這個模擬頁無法數行，計數器以 UT 自己估計的上限 300 words 代替。題目為本站轉述（A5b-S39）。', 'The essays page carries no cycle label. One essay on any topic, 500–650 words; the Common App personal essay satisfies it, so this box may stay blank when filing through the Common App. Short answers are limited to "no more than 40 lines", roughly 250–300 words: this mock cannot count lines, so the counter uses UT’s own upper estimate of 300 words. Prompts paraphrased (A5b-S39).'),
      supplement: [
        { id: 'essay', label: z('文章（500–650 words；Common App 主文可抵）', 'Essay (500–650 words; the Common App essay counts)'), src: ['A5b-S39'], fields: [
          F('topic', z('主題不限的文章（若用 Common App 主文可留白）', 'Essay on a topic of your choice (leave blank if your Common App essay stands in)'), 'textarea', { wide: true, rows: 10, limit: { words: 650, minWords: 500 }, src: ['A5b-S39'] })
        ] },
        { id: 'short', label: z('短答（各不超過 40 行，約 250–300 words）', 'Short answers (no more than 40 lines each, about 250–300 words)'), src: ['A5b-S39'], fields: [
          sq('whyMajor', '你為什麼對第一志願主修有興趣？', 'Why are you interested in your first-choice major?', 300, 0, ['A5b-S39'], { help: z('實際上限是 40 行；300 words 是 UT 自己的估計值（A5b-S39）。', 'The real limit is 40 lines; 300 words is UT’s own estimate (A5b-S39).') }),
          sq('proud', '校內或校外，你最自豪的一項活動是什麼？為什麼？', 'Which activity, in or out of school, are you most proud of, and why?', 300, 0, ['A5b-S39'], { help: z('實際上限是 40 行；300 words 是 UT 自己的估計值（A5b-S39）。', 'The real limit is 40 lines; 300 words is UT’s own estimate (A5b-S39).') }),
          F('circumstances', z('選答：影響你學業表現的特殊情況', 'Optional: special circumstances that affected your academic performance'), 'textarea', { wide: true, rows: 8, limit: { words: 300 }, src: ['A5b-S39'], help: z('選答。實際上限是 40 行（A5b-S39）。', 'Optional. The real limit is 40 lines (A5b-S39).') })
        ] }
      ],
      recs: {
        counselor: { min: 0, max: 1, src: ['A5b-S38'], note: z('推薦信全部選交，合計最多兩封，不能用 email 寄（A5b-S38、S40）。這裡三種角色共用兩封的上限。', 'All letters are optional, two in total, and cannot be emailed (A5b-S38, S40). The three roles here share that two-letter cap.') },
        teacher: { min: 0, max: 2, src: ['A5b-S38'] },
        other: { min: 0, max: 2, src: ['A5b-S38', 'A5b-S40'], note: z('UT「鼓勵」來自高中以外的推薦信；研究 mentor 這類 Other Recommender 的信可放在兩封上限內（A5b-S38；後半為本站推論）。', 'UT "encourages" letters from sources outside the high school; an Other-Recommender letter such as a research mentor fits within the two-letter cap (A5b-S38; the second clause is this site’s inference).') }
      } },

    // ---- University of Washington
    { id: 'uw', name: z('University of Washington (Seattle)', 'University of Washington (Seattle)'),
      blurb: z('單一截止 11-15，沒有 ED／EA；國際生 $95、不能減免；只有 Common App 主文（≤650 words），UW 專屬短答未載明；「請不要寄推薦信」；不做正式面試。', 'Single deadline Nov 15, no ED or EA; $95 for internationals, no waiver; Common App essay only (650 words max), UW-specific short responses not stated; "we ask that you not send letters of recommendation"; no formal interviews.'),
      src: ['A5b-S42', 'A5b-S43', 'A5b-S44'],
      facts: [
        { t: z('Common App；課程與成績透過 STARS 自填。', 'Common App; courses and grades are self-reported through STARS.'), tag: 'f', src: ['A5b-S42', 'A2-S53'] },
        { t: z('報名費美國申請者 $85、國際申請者 $95；國際生「沒有 fee waiver」。', 'Fee $85 for US applicants and $95 for internationals; for internationals, "Fee waivers not available."'), tag: 'f', src: ['A5b-S42'] },
        { t: z('「UW 不參加 early decision 或 early action。」秋季入學 11-15 截止；冬季入學不開放國際 first-year。', '"The UW does not participate in early decision or early action admission." Autumn entry due Nov 15; winter entry is closed to international first-years.'), tag: 'f', src: ['A3b-S35', 'A5b-S44'] },
        { t: z('UW 把主修分成三類：open、minimum requirements、capacity-constrained；後者「有選拔性且有額外要求」。「有些主修直接錄取 first-year」，必須列為第一志願；約 18 個，含 computer science、computer engineering、informatics、statistics、neuroscience、biochemistry 與所有工學院主修。', 'UW defines three kinds of major: open, minimum requirements and capacity-constrained, the last being "selective" with "extra requirements". "Some majors admit students directly as first-year students" and must be listed as first choice; about 18, including computer science, computer engineering, informatics, statistics, neuroscience, biochemistry and every College of Engineering major.'), tag: 'f', src: ['A5b-S43'] },
        { t: z('沒有直接錄取的 Allen School（CS／CE）申請者，之後進入這些主修「不太可能」。工程申請者以「engineering undeclared」審 Direct to College，符合要求者保證分發到工程主修（computer engineering 除外）。', 'An Allen School (CS/CE) applicant not admitted directly is "unlikely" to be admitted to those majors later. Engineering applicants are considered for Direct to College admission as "engineering undeclared", with guaranteed placement into an engineering major (computer engineering excluded) if they meet the requirements.'), tag: 'f', src: ['A5b-S43'] },
        { t: z('「我們請你不要寄推薦信。」「UW 不做正式面試。」', '"We ask that you not send letters of recommendation." "The UW does not conduct formal interviews."'), tag: 'f', src: ['A5b-S42'] },
        { t: z('UW 專屬短答：admit.washington.edu 的 how-to-apply、freshman 與 holistic-review 頁都沒寫（not stated，checked 2026-11-07）。', 'UW-specific short responses: not stated on the how-to-apply, freshman and holistic-review pages of admit.washington.edu (checked 2026-11-07).'), tag: 'f', src: ['A5b-S42', 'A5b-S44'] },
        { t: z('多數申請者不要求 SAT／ACT；成績截止 12-31。「UW 不提供國際大學生助學金。」', 'SAT/ACT not required for most applicants; score deadline Dec 31. "The UW does not provide financial aid to undergraduate international students."'), tag: 'f', src: ['A4-S116', 'A3b-S36', 'A3b-S38'] }
      ],
      deadlines: [
        { plan: 'RD', date: z('2026-11-15（考試成績 12-31）', '2026-11-15 (test scores by 12-31)'), src: ['A3b-S35', 'A3b-S36'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('RD', '單一截止 11-15（沒有 ED／EA）', 'Single deadline Nov 15 (no ED or EA)')], ['A3b-S35']),
          F('major1', z('第一志願主修（直接錄取的主修必須放這裡）', 'First-choice major (a direct-to-major option must go here)'), 'text', { required: true, src: ['A5b-S43'], help: z('約 18 個主修可直接錄取；Allen School 未直接錄取者之後「不太可能」轉入（A5b-S43）。', 'About 18 majors admit directly; Allen School applicants not admitted directly are "unlikely" to get in later (A5b-S43).') }),
          F('direct', z('這是 direct-to-major 或 Direct to College（工程）的申請？', 'Is this a direct-to-major or Direct to College (engineering) application?'), 'radio', { options: YN, src: ['A5b-S43'] })
        ] }
      ],
      supplementIntro: z('UW 的寫作要求只有 Common App 主文（650 words 以內），在左側「共同」分頁填。UW 專屬短答在讀過的頁面上都沒有寫（not stated，checked 2026-11-07，A5b-S42、S44）。這個模擬頁因此不放任何 UW 文書欄；若 Common App 的 UW 頁面有題目，以那裡為準。', 'UW’s stated writing requirement is the Common App essay (650 words max), filled in the common tab in the sidebar. UW-specific short responses are not stated on any page read (checked 2026-11-07, A5b-S42, S44). This mock therefore sets no UW essay box; if the UW member screen in the Common App shows a prompt, that governs.'),
      supplement: [
        { id: 'none', label: z('UW 專屬文書：未載明', 'UW-specific writing: not stated'), src: ['A5b-S42', 'A5b-S44'],
          intro: z('只有 Common App 主文（≤650 words）。UW 短答：not stated（checked 2026-11-07）。', 'Common App essay only (650 words max). UW short responses: not stated (checked 2026-11-07).'), fields: [] }
      ],
      recs: {
        counselor: { min: 0, max: 0, src: ['A5b-S42'], note: z('「我們請你不要寄推薦信。」（A5b-S42）這個模擬頁的三種推薦人角色在 UW 都不適用。', '"We ask that you not send letters of recommendation." (A5b-S42) None of the three recommender roles in this mock applies at UW.') },
        teacher: { min: 0, max: 0, src: ['A5b-S42'] },
        other: { min: 0, max: 0, src: ['A5b-S42'] }
      } },

    // ---- Williams
    { id: 'williams', name: z('Williams College', 'Williams College'),
      blurb: z('ED 11-15／RD 01-04；$65；三封推薦信（counselor 一、老師二）；不辦面試；文書題目未取得：admission.williams.edu 對自動讀取回 HTTP 403，瀏覽器讀到的 first-year 頁列出的是日期、平台、推薦信與選交材料，沒有寫作題。', 'ED Nov 15 / RD Jan 4; $65; three recommendations (one counselor, two teachers); no interviews; essay prompts not captured: admission.williams.edu returned HTTP 403 to automated reading, and the first-year page read in a browser lists dates, platforms, letters and optional materials but no writing prompts.'),
      src: ['V4-T11', 'A5b-S45', 'A5b-S46'],
      facts: [
        { t: z('三個平台並列、未寫偏好：Common App、Apply Coalition with Scoir、QuestBridge。', 'Three platforms with no stated preference: Common App, Apply Coalition with Scoir and QuestBridge.'), tag: 'f', src: ['V4-T11', 'A2-S54'] },
        { t: z('$65 報名費或減免。國際生減免規則未載明（checked 2026-11-07）。', 'A $65 fee or a waiver. International waiver rule: not stated (checked 2026-11-07).'), tag: 'f', src: ['V4-T11', 'A5b-S46'] },
        { t: z('ED 要附 Early Decision Agreement Form，12-14 前放榜；RD 不綁約，04-01 放榜，05-01 前回覆。', 'ED requires the Early Decision Agreement Form, with decisions by Dec 14; RD is non-binding, decisions April 1, reply by May 1.'), tag: 'f', src: ['V4-T11'] },
        { t: z('「Williams 不提供面試」；國際申請者可分享 InitialView 錄影，屬選交。', '"Williams does not offer interviews"; international applicants are welcome to share an InitialView recording, which is optional.'), tag: 'f', src: ['V4-T11'] },
        { t: z('四種選交管道：學術寫作樣本（「任何主題的一篇作業，不必有分數，可以是課堂手寫作業……請不要交實驗報告」）；藝術作品集走 SlideRoom；科學研究摘要（「做過重要科學或數學研究並考慮研究或學術生涯者，歡迎簡述你的工作」，可寫在申請表或 email，另可附 VIVA 錄影）；InitialView。', 'Four optional channels: an academic writing supplement ("a paper on any topic of your choice. It need not be graded, and may be an in-class handwritten assignment… Please do not submit lab reports."); an arts portfolio via SlideRoom; scientific research abstracts ("If you’ve pursued significant scientific or mathematical research and are considering a research or academic career, we welcome a brief description of your work", on the application or by email, with an optional VIVA recording); and InitialView.'), tag: 'f', src: ['V4-T11'] },
        { t: z('「Williams is truly test optional」；SAT 與 ACT 都 superscore，截止前可隨時改變是否送成績的決定。', '"Williams is truly test optional"; SAT and ACT are both superscored, and you may change your mind about sending scores at any point before the deadline.'), tag: 'f', src: ['V4-T11', 'A4-S90'] },
        { t: z('「兩位招生人員一起審閱一份申請的所有內容」，筆記之後交給 Admission Committee。', '"Two admission officers work together to review everything in an application", and their notes go to the Admission Committee.'), tag: 'f', src: ['V4-T11'] },
        { t: z('頁面只寫美國申請者 need-blind；國際生的 need 政策未明寫。Common App 名錄標示「提供國際學生補助」。', 'The page states need-blind for US applicants only; the international need policy is not written. The Common App listing says Williams offers aid for international students.'), tag: 'f', src: ['A4-S91', 'A5b-S46'] },
        { t: z('2026-11-07：curl 對 williams.edu 與 admission.williams.edu 的每個網址都回 HTTP 403，瀏覽器則直接打開 first-year 頁。Common App 名錄上的日期仍是 2025–26（ED 2025-11-15、RD 2026-01-05），未採用。', 'On 2026-11-07 curl returned HTTP 403 for every williams.edu and admission.williams.edu URL, while a browser opened the first-year page directly. The Common App listing still shows 2025–26 dates (ED 2025-11-15, RD 2026-01-05), which are not used.'), tag: 'f', src: ['V4-T11', 'A5b-S45', 'A5b-S46', 'A3b-S39'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-15（附 Early Decision Agreement Form）', '2026-11-15 (with the Early Decision Agreement Form)'), src: ['V4-T11'] },
        { plan: 'RD', date: z('2027-01-04', '2027-01-04'), src: ['V4-T11'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['V4-T11']),
          F('writingSample', z('要交選交的學術寫作樣本？', 'Submitting the optional academic writing supplement?'), 'radio', { options: YN, src: ['V4-T11'], help: z('任何主題、不必有分數、可手寫；「請不要交實驗報告」（V4-T11）。', 'Any topic, need not be graded, may be handwritten; "Please do not submit lab reports" (V4-T11).') })
        ] }
      ],
      supplementIntro: z('Williams 自己的 first-year 頁（瀏覽器讀取）沒有列出任何寫作題；admission.williams.edu 的申請頁回 HTTP 403。Common App 內是否有 Williams 專屬題：not stated（checked 2026-11-07，V4-T11、A5b-S45、S46）。下方只放頁面明確歡迎的「科學研究簡述」，字數未載明。', 'Williams’s own first-year page (read in a browser) lists no writing prompts, and the application page on admission.williams.edu returned HTTP 403. Whether the Common App member screen has a Williams prompt: not stated (checked 2026-11-07, V4-T11, A5b-S45, S46). Below is only the "brief description" of research that the page explicitly welcomes; its length is not stated.'),
      supplement: [
        { id: 'research', label: z('科學研究簡述（選交，字數未載明）', 'Brief description of scientific research (optional, length not stated)'), src: ['V4-T11'],
          intro: z('「做過重要科學或數學研究並考慮研究或學術生涯者，歡迎簡述你的工作」，可寫在申請表或 email；另可附 VIVA 錄影（V4-T11）。', '"If you’ve pursued significant scientific or mathematical research and are considering a research or academic career, we welcome a brief description of your work", on the application or by email; a VIVA recording may be added (V4-T11).'), fields: [
          F('abstract', z('研究簡述', 'Description of your research'), 'textarea', { wide: true, rows: 6, src: ['V4-T11'], help: NOLIMIT })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['V4-T11'] },
        teacher: { min: 2, max: 2, src: ['V4-T11'], note: z('三封推薦信：counselor 一封、老師兩封；科目規定未載明（V4-T11）。', 'Three recommendations: one counselor and two teachers; subject rules not stated (V4-T11).') },
        other: { min: 0, max: null, src: ['V4-T11', 'A5b-S45'], note: z('額外推薦信或 Other Recommender：not stated（checked 2026-11-07，V4-T11、A5b-S45）。', 'Additional letters or Other Recommender: not stated (checked 2026-11-07, V4-T11, A5b-S45).') }
      } },

    // ---- Amherst
    { id: 'amherst', name: z('Amherst College', 'Amherst College'),
      blurb: z('ED／RD（日期未取得）；Common App、Coalition with Scoir 或 QuestBridge；官網 2026-11-07 回「Human Verification」頁（HTTP 405），Common App 名錄沒有報名費、日期與推薦人資料。文書題、推薦信、面試、報名費在這個條目裡都是「未載明」。', 'ED/RD (dates not captured); Common App, Coalition with Scoir or QuestBridge; the official site returned a "Human Verification" page (HTTP 405) on 2026-11-07, and the Common App listing gives no fee, dates or recommender data. Prompts, letters, interviews and fee are all "not stated" in this entry.'),
      src: ['A5b-S47', 'A5b-S48', 'A2-S55'],
      facts: [
        { t: z('Common App、Coalition with Scoir 或 QuestBridge。', 'Common App, Coalition with Scoir, or QuestBridge.'), tag: 'f', src: ['A2-S55'] },
        { t: z('amherst.edu/admission 對自動讀取回「Human Verification」頁（HTTP 405）。Common App 名錄只寫「Test Optional/Flexible」與「提供國際學生補助」，沒有報名費、日期或推薦人資料。', 'amherst.edu/admission returned a "Human Verification" page (HTTP 405) to automated reading. The Common App listing says only "Test Optional/Flexible" and "Offers aid for international students", with no fee, deadlines or recommender data.'), tag: 'f', src: ['A5b-S47', 'A5b-S48'] },
        { t: z('有 ED 與 RD，名錄未列日期。補助截止 ED 11-13、RD 01-15（取自搜尋引擎對官方頁的摘錄）。', 'ED and RD are offered; the listing gives no dates. Aid deadlines ED Nov 13 and RD Jan 15 (from a search-engine extract of an official page).'), tag: 'f', src: ['A3b-S40', 'A4-S130'] },
        { t: z('Amherst 在 Common App 的 Courses & Grades 名單上。', 'Amherst is on Common App’s Courses & Grades list.'), tag: 'f', src: ['A1-S30'] },
        { t: z('國內外皆 need-blind：取自搜尋引擎摘錄，時程研究無法在官方頁上驗證；重查前視為假設。', 'Need-blind for domestic and international applicants: from a search-engine extract that the calendar run could not verify on an official page; treated as an assumption until re-checked.'), tag: 'a', src: ['A4-S93', 'A3b-S49'] },
        { t: z('補充文書、推薦信、Other Recommender、面試、報名費：not stated（checked 2026-11-07，A5b-S47 被擋、A5b-S48）。', 'Supplements, letters, Other Recommender, interviews and fee: not stated (checked 2026-11-07, A5b-S47 blocked, A5b-S48).'), tag: 'f', src: ['A5b-S47', 'A5b-S48'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('未載明（名錄無日期；官網 2026-11-07 無法讀取）', 'Not stated (no date on the listing; official site unreadable on 2026-11-07)'), src: ['A3b-S40', 'A5b-S47'] },
        { plan: 'RD', date: z('未載明（名錄無日期；官網 2026-11-07 無法讀取）', 'Not stated (no date on the listing; official site unreadable on 2026-11-07)'), src: ['A3b-S40', 'A5b-S47'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3b-S40']),
          F('major', z('學術興趣（Amherst 是否在申請時問主修：未載明）', 'Academic interest (whether Amherst asks for a major at application: not stated)'), 'text', { src: ['A5b-S47'], help: z('官網無法讀取（A5b-S47）；這一欄只是讓你記錄方向，非必填。', 'The official site could not be read (A5b-S47); this box is for your own notes and is optional.') })
        ] }
      ],
      supplementIntro: z('Amherst 的寫作補充：not stated（checked 2026-11-07）。官網被擋（A5b-S47），Common App 名錄不列題目（A5b-S48）。這個條目不放任何文書欄，等人工讀取官網後再補。', 'Amherst’s writing supplement: not stated (checked 2026-11-07). The official site was blocked (A5b-S47) and the Common App listing carries no prompts (A5b-S48). This entry sets no essay box; it waits for a manual read of the site.'),
      supplement: [
        { id: 'none', label: z('寫作補充：未載明', 'Writing supplement: not stated'), src: ['A5b-S47', 'A5b-S48'],
          intro: z('not stated（checked 2026-11-07，A5b-S47 被擋、A5b-S48）。', 'Not stated (checked 2026-11-07, A5b-S47 blocked, A5b-S48).'), fields: [] }
      ],
      recs: {
        counselor: { min: 0, max: null, src: ['A5b-S47', 'A5b-S48'], note: z('推薦信規定 not stated（checked 2026-11-07）；這裡不設最低數，不代表 Amherst 不要求。', 'Letter rules not stated (checked 2026-11-07); no minimum is set here, which does not mean Amherst requires none.') },
        teacher: { min: 0, max: null, src: ['A5b-S47', 'A5b-S48'], note: z('not stated（checked 2026-11-07）。', 'Not stated (checked 2026-11-07).') },
        other: { min: 0, max: null, src: ['A5b-S47', 'A5b-S48'], note: z('not stated（checked 2026-11-07）。', 'Not stated (checked 2026-11-07).') }
      } },

    // ---- Swarthmore
    { id: 'swarthmore', name: z('Swarthmore College', 'Swarthmore College'),
      blurb: z('ED I 11-15／ED II 與 RD 01-04；$60；兩題各不超過 250 words；兩位學科老師加 counselor；非美國學校的學生須交影片回答、英文檢定或 InitialView 三擇一；送件後可上傳研究摘要與作品。', 'ED I Nov 15 / ED II and RD Jan 4; $60; two prompts of no more than 250 words each; two academic teachers plus the counselor; students at non-US schools must send one of a video response, an English test or InitialView; research abstracts and built work can be uploaded after submitting.'),
      src: ['A5b-S49', 'A5b-S50', 'A5b-S51'],
      facts: [
        { t: z('Common App、Coalition on Scoir 或 QuestBridge，「沒有偏好」。', 'Common App, Coalition on Scoir, or QuestBridge, with "no preference".'), tag: 'f', src: ['A5b-S49', 'A2-S56'] },
        { t: z('「$60 報名費或 fee waiver」，資格以「SwatPass」檢核。國際生減免規則未載明（checked 2026-11-07）。', '"$60 application fee or fee waiver"; eligibility is checked via "SwatPass". International waiver rule: not stated (checked 2026-11-07).'), tag: 'f', src: ['A5b-S49', 'A5b-S51'] },
        { t: z('面試選擇性：「不面試的申請者不會處於劣勢。」美國境外學校的學生必須交 Swarthmore Video Response、英語能力成績或 InitialView／Vericant 影片面試三擇一。', 'Interviews are optional: "Applicants who do not interview are not at a disadvantage." Students at schools outside the US must submit one of a Swarthmore Video Response, an English proficiency result, or an InitialView/Vericant video interview.'), tag: 'f', src: ['A5b-S49', 'A5b-S51', 'A4-S96'] },
        { t: z('送件後可上傳「履歷、研究摘要、Schoolhouse.world 作品集或其他項目」；可分享「一篇論文、一份簡報、一個研究專題、一段你做出來的東西的影片」。', 'After submitting, applicants may upload "resumes, research abstracts, Schoolhouse.world portfolios, or other items" and may share "a paper, presentation, research project, video of something you’ve built".'), tag: 'f', src: ['A5b-S49'] },
        { t: z('推薦信須用學校正式信紙。', 'Letters should be on official school letterhead.'), tag: 'f', src: ['A5b-S51'] },
        { t: z('國際公民 need-aware；Certification of Finances 錄取後才交，補助文件在收到錄取決定後 7 天內完成；錄取的國際生獲 CSS Profile 費用減免。', 'Need-aware for international citizens; the Certification of Finances is submitted only after admission, aid documents within 7 days of the decision; admitted internationals receive a CSS Profile fee waiver.'), tag: 'f', src: ['A5b-S51', 'A3b-S42'] },
        { t: z('2027 秋起家庭年收入 $200,000 以下學費保證；是否涵蓋國際公民未載明。', 'Tuition guarantee from fall 2027 for families earning $200,000 or less; whether it covers international citizens is not stated.'), tag: 'f', src: ['A3b-S43'] },
        { t: z('工程先修課程未載明（checked 2026-11-07）。考試選繳。', 'Engineering prerequisites: not stated (checked 2026-11-07). Testing optional.'), tag: 'f', src: ['A5b-S49', 'A4-S97'] }
      ],
      deadlines: [
        { plan: 'EDI', date: z('2026-11-15', '2026-11-15'), src: ['A3b-S41', 'A5b-S49'] },
        { plan: 'EDII', date: z('2027-01-04', '2027-01-04'), src: ['A3b-S41', 'A5b-S49'] },
        { plan: 'RD', date: z('2027-01-04', '2027-01-04'), src: ['A3b-S41', 'A5b-S49'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EDI', 'Early Decision I（Fall ED）', 'Early Decision I (Fall ED)'), o('EDII', 'Early Decision II（Winter ED）', 'Early Decision II (Winter ED)'), o('RD', 'Regular Decision', 'Regular Decision')], ['A3b-S41']),
          F('intlItem', z('就讀美國境外學校者：交哪一項？', 'At a school outside the US: which item will you send?'), 'radio', { src: ['A5b-S49', 'A5b-S51'], options: [
            o('video', 'Swarthmore Video Response（免費，在 portal 內）', 'Swarthmore Video Response (free, in the portal)'),
            o('english', '英語能力成績（TOEFL／IELTS／DET）', 'English proficiency result (TOEFL/IELTS/DET)'),
            o('initialview', 'InitialView／Vericant 影片面試', 'InitialView/Vericant video interview')], help: z('三擇一為必交；在美國學校就讀者可略過（A5b-S49、S51）。', 'One of the three is required; applicants at US schools may skip (A5b-S49, S51).') }),
          F('major', z('學術興趣', 'Academic interest'), 'text', { src: ['A5b-S49'], help: DROPDOWN })
        ] }
      ],
      supplementIntro: z('2026–27 版：兩題必答，各「不超過 250 words」。題目為本站轉述（A5b-S50）。', '2026–27: two required prompts, each "no more than 250 words". Prompts paraphrased (A5b-S50).'),
      supplement: [
        { id: 'essays', label: z('短答（各 ≤250 words）', 'Short answers (250 words or fewer each)'), src: ['A5b-S49', 'A5b-S50'], fields: [
          sq('identity', '你的自我認同或個人背景中，對你最重要的面向。', 'The aspects of your self-identity or personal background that are most significant to you.', 250, 0, ['A5b-S50']),
          sq('fascination', '最近讓你著迷的一個主題，課堂內或課堂外。', 'A topic that has fascinated you recently, inside or outside the classroom.', 250, 0, ['A5b-S50'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S49'] },
        teacher: { min: 2, max: 2, src: ['A5b-S49', 'A5b-S51'], note: z('「兩封學科老師的推薦／評量」，用學校正式信紙（A5b-S49、S51）。', '"Two academic-subject teacher recommendations/evaluations", on official school letterhead (A5b-S49, S51).') },
        other: { min: 0, max: null, src: ['A5b-S49'], note: z('額外推薦信或 Other Recommender：not stated（checked 2026-11-07，A5b-S49）。送件後可上傳履歷、研究摘要等資料（A5b-S49）。', 'Additional letters or Other Recommender: not stated (checked 2026-11-07, A5b-S49). Resumes, research abstracts and other items may be uploaded after submitting (A5b-S49).') }
      } }
  ];

  // Append to the mock's college list. In the browser this file loads after p-mock.js,
  // so the list already exists. scripts/check-data.js loads data files in name order,
  // which puts this file before p-mock.js; in that case wait for the assignment.
  function install(M) { ENTRIES.forEach(function (e) { M.colleges.push(e); }); }
  var A = window.ATLAS;
  if (A.mock && A.mock.colleges) { install(A.mock); return; }
  var prev = Object.getOwnPropertyDescriptor(A, 'mock');
  var held = prev && !prev.get ? prev.value : undefined;
  Object.defineProperty(A, 'mock', {
    configurable: true, enumerable: true,
    get: function () { return prev && prev.get ? prev.get.call(A) : held; },
    set: function (v) { if (prev && prev.set) prev.set.call(A, v); else held = v; if (v && v.colleges) install(v); }
  });
})();
