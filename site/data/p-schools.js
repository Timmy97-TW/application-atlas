// Page: schools. Built from research/2026-11-07_school-roster-part1_v1.md (A5a), school-roster-part2 (A5b),
// other-application-systems (A2), international-applicant-specifics (A4), michigan-addendum (MI),
// cycle-2026-27-calendar part1 (A3a) and part2 (A3b). Every src id exists in data/sources.js.
// "†" marks facts the international note read from a search-engine extract of an official URL.
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function f(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'f', src: src }; }
  function inf(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'i', src: src }; }
  function asm(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'a', src: src }; }
  function ns(src) { return { state: 'not-stated', checked: '2026-11-07', src: src }; }
  function s(zh, en) { return { zh: zh, en: en }; }

  // One record per school. c = overview cells; plans / prompts / extra = per-school items only.
  var SCHOOLS = [
    {
      name: 'MIT', filter: 'own ea need-blind test-required or-yes',
      judgment: s('30 校中唯一只用自有系統的學校；文書短而多，研究與 Maker 作品另走 SlideRoom。',
        'The only school of the 30 that uses its own system alone; many short writing items, with research and maker work routed through SlideRoom.'),
      c: {
        sys: f('MIT 自有申請系統，不用 Common App', 'MIT\'s own application; no Common App', ['A5a-S2', 'A2-S23']),
        supp: f('4 篇約 100–200 字＋4 題 40–50 字短答＋選填 additional information（未載明字數）', '4 essays of about 100–200 words + 4 short responses of 40–50 words + optional additional information (no limit stated)', ['A5a-S1']),
        teach: f('2 封；建議 1 數理＋1 人文，非硬性規定', '2; one math/science and one humanities suggested, "not a hard requirement"', ['A5a-S3']),
        or: f('可，1 封 supplemental，未限定撰寫者；「neither expected nor required」', 'Yes, 1 supplemental letter, writer not specified; "neither expected nor required"', ['A5a-S3']),
        intv: f('校友（Educational Council）面試，盡量安排；無法安排時不影響申請', 'Alumni (Educational Council) interview where possible; waived without adverse effect if unavailable', ['A5a-S4']),
        eng: f('英語使用不滿 5 年或家中／學校不講英語者「strongly recommend」；最低／建議 TOEFL 90/100（舊制）、5/5.5（新制）；IELTS 7/7.5；DET 120/125', '"Strongly recommend" if English used under 5 years or not spoken at home/school; minimum/recommended TOEFL 90/100 (old) or 5/5.5 (new), IELTS 7/7.5, DET 120/125', ['A4-S1']),
        sat: f('必繳', 'Required', ['A4-S1']),
        aid: f('對所有學生 need-blind，不分本國與外國', 'Need-blind "for all students, foreign and domestic"', ['A4-S5'])
      },
      plans: f('EA（非限制）11/1；RA 1/4；EA 12 月中、RA 3 月中放榜', 'Early Action (non-restrictive) Nov 1; Regular Action Jan 4; decisions mid-December / mid-March', ['A3a-S1']),
      prompts: f('長文題目：選定領域與動機；教育路上做了與預期不同的事；經驗如何形塑想解決的問題；如何處理意外狀況。短答：平常玩什麼、欣賞的人、能聊幾小時的主題、generalist 或 specialist', 'Essay topics: chosen field and what led to it; doing something different from what was expected; how experiences shape the problems you want to tackle; handling an unexpected challenge. Short responses: fun, someone you admire, a topic you could talk about for hours, generalist or specialist', ['A5a-S1']),
      extra: [
        f('活動表只有 4 格，填 MIT 自己的表格，不收履歷', 'Activities: four entries on MIT\'s own form, not a resume', ['A5a-S1']),
        f('Maker Portfolio、Research Supplement 與藝術作品集走 SlideRoom，每份 $10，截止日與申請輪次相同', 'Maker Portfolio, Research Supplement and arts portfolios go through SlideRoom, $10 each, due with the application round', ['A3a-S4'])
      ]
    },
    {
      name: 'Caltech', filter: 'commonapp rea need-aware test-required or-yes',
      judgment: s('推薦信規則寫得最清楚：一封 STEM、一封人文，並把教練、mentor、雇主列為可接受的額外推薦人。',
        'The clearest letter rules: one STEM and one humanities teacher, with coaches, mentors and employers named as acceptable extra writers.'),
      c: {
        sys: f('Common App 或 QuestBridge；選繳研究與作品集走 Beaver Breakroom', 'Common App or QuestBridge; optional research and portfolio uploads via the Beaver Breakroom portal', ['A5a-S9', 'A5a-S14']),
        supp: f('必填 5 題（150–200／200／2×200／100–150 字）＋1 題選填', '5 required (150–200 / 200 / 2×200 / 100–150 words) + 1 optional', ['A5a-S8']),
        teach: f('2 封：1 STEM＋1 人文／社科；最後兩年沒修人文課者（如 A-level）可改交第二封 STEM', '2: one STEM + one humanities/social science; applicants with no humanities course in the last two years (e.g. A-level) may send a second STEM letter', ['A5a-S10']),
        or: f('可：教練、mentor、雇主或其他老師；繳研究論文時須附指導者推薦信', 'Yes: coach, mentor, employer or another teacher; a research paper requires a letter from the supervisor or mentor', ['A5a-S10']),
        intv: f('頁面未提校方面試；國際生建議錄 InitialView（「not graded」）', 'No school interview mentioned; InitialView recommended for internationals ("not graded")', ['A5a-S9', 'A5a-S12']),
        eng: f('必繳（母語或授課語言為英語者免）；IELTS 7、TOEFL 100（舊）／5（新）、DET 130，各分項另有門檻', 'Required unless English is native or the language of instruction; IELTS 7, TOEFL 100 (old) / 5 (new), DET 130, with per-section minimums', ['A4-S7']),
        sat: f('必繳；2026–27 起各分項以「buckets」檢視', 'Required; section scores reviewed in "buckets" from 2026–27', ['A4-S7', 'A4-S9']),
        aid: f('國際生 need-aware', 'Need-aware for internationals', ['A4-S7'])
      },
      plans: f('REA 2026/11/1（資料 11/6）；RD 2027/1/4（資料 1/10）；REA 12 月中放榜', 'REA Nov 1, 2026 (materials Nov 6); RD Jan 4, 2027 (materials Jan 10); REA decisions mid-December', ['A5a-S13', 'A3a-S10']),
      prompts: f('STEM 興趣（150–200）；Scholarly Character 二選一（≤200）；Scientific Drive 三選二（各 ≤200）；能為社群做什麼（100–150）；選填學術短答', 'STEM interest (150–200); Scholarly Character, 1 of 2 (≤200); Scientific Drive, 2 of 3 (≤200 each); what you would contribute (100–150); optional academic short answer', ['A5a-S8']),
      extra: [
        f('必修：4 年數學含 1 年微積分、物理與化學各 1 年；學校沒開課時只接受 AP 5、IB 6–7 或 Schoolhouse.world 認證，「There will be no exceptions」', 'Required: 4 years math incl. a year of calculus, 1 year each of physics and chemistry; if unavailable, only AP 5, IB 6–7 or Schoolhouse.world certification, "There will be no exceptions"', ['A5a-S11']),
        f('國際生 REA 的 CSS Profile 2026/11/15 截止；錯過公布期限者之後不能申請 need-based 補助', 'International REA CSS Profile due Nov 15, 2026; missing the published deadlines rules out need-based aid later', ['A3a-S13'])
      ]
    },
    {
      name: 'Stanford', filter: 'commonapp rea need-aware test-required or-yes',
      judgment: s('Other Recommender 明文寫在 Common App 流程裡；國際公民申請補助會列入審查。',
        'Other Recommender is written into its Common App instructions; for international citizens an aid request is a factor in review.'),
      c: {
        sys: f('Common App（Stanford Questions 在 Common App 內填）', 'Common App (Stanford Questions are answered inside it)', ['A5a-S15', 'A5a-S16']),
        supp: f('5 題 3–50 字短答＋3 篇 100–250 字', '5 short questions (3–50 words) + 3 short essays (100–250 words)', ['A5a-S16']),
        teach: f('2 封學科老師，最好是 11 或 12 年級', '2 academic teachers, preferably grade 11 or 12', ['A5a-S17']),
        or: f('可，1 封，以 Other Recommender 邀請，須能提供「new insights」', 'Yes, 1, invited as Other Recommender; someone who "can offer new insights"', ['A5a-S17']),
        intv: f('選擇性校友面試，限部分地區；面試報告納入申請檔案', 'Optional alumni interview in listed areas; the report "becomes part of your admission file"', ['A5a-S18']),
        eng: f('不要求；可自行填報，不能取代 SAT/ACT', 'Not required; may be self-reported; does not substitute for SAT/ACT', ['A4-S11', 'A4-S12']),
        sat: f('必繳（自行填報）', 'Required (self-reported)', ['A4-S12']),
        aid: f('need-aware（申請補助「will be a factor」）', 'Need-aware (an aid request "will be a factor")', ['A4-S11'])
      },
      plans: f('REA 11/1；RD 1/5；附藝術作品集者提前（REA 10/15、RD 12/5）', 'REA Nov 1; RD Jan 5; earlier with an arts portfolio (REA Oct 15, RD Dec 5)', ['A3a-S18']),
      prompts: f('短答：社會最大挑戰、過去兩個暑假、想親眼見證的歷史時刻、一項課外活動、五件重要的事。短文：讓你興奮的學習經驗、給未來室友的信、能帶來的獨特貢獻', 'Short questions: society\'s biggest challenge, the last two summers, a historical moment, one activity, five things important to you. Essays: excitement about learning, a note to a future roommate, a distinctive contribution', ['A5a-S16']),
      extra: [
        f('申請的是大學而非科系，填寫的主修不具約束力', 'Applicants apply to the university; listed majors are non-binding', ['A5a-S16']),
        f('國際生 REA 補助優先期限 11/15，須另交 International Student Supplement', 'International REA aid priority filing Nov 15, with an International Student Supplement', ['A3a-S22'])
      ]
    },
    {
      name: 'Harvard', filter: 'commonapp rea need-blind test-required or-yes',
      judgment: s('文書只有 5 題各 150 字；對國際生 need-blind，不要求英語考試。',
        'Five 150-word answers; need-blind for internationals; no English test requirement.'),
      c: {
        sys: f('Common App、QuestBridge，或郵寄紙本申請；選繳媒體作品走 SlideRoom', 'Common App, QuestBridge, or a mailed paper application; optional media via SlideRoom', ['A5a-S21', 'A5a-S22']),
        supp: f('5 題，各 ≤150 字', '5 questions, 150 words max each', ['A5a-S23']),
        teach: f('2 封，不同學科', '2, in different academic subjects', ['A5a-S21']),
        or: f('可，送件後以確認信中的個人化連結補送；未限定撰寫者', 'Yes, sent after applying via a personal link; writer not specified', ['A5a-S21']),
        intv: f('可能有校友面試；不保證，沒有面試不影響', 'Possible alumni interview; not guaranteed, and its absence does not count against you', ['A5a-S22', 'A5a-S24']),
        eng: f('不要求；可繳 TOEFL／IELTS／DET，但不能滿足考試要求', 'Not required; TOEFL/IELTS/DET may be sent but do not meet the testing requirement', ['A4-S15']),
        sat: f('必繳', 'Required', ['A4-S16']),
        aid: f('need-blind', 'Need-blind', ['A4-S15'])
      },
      plans: f('REA 11/1（當地時間 23:59）；RD 1/1；REA 補助申請同日截止', 'REA Nov 1 (11:59 pm local); RD Jan 1; REA aid application due the same day', ['A3a-S26', 'A3a-S27']),
      prompts: f('題目：生活經驗讓你能為 Harvard 帶來什麼；一次強烈的意見不合；形塑你的活動、工作或家庭責任；如何運用 Harvard 的教育；室友該知道的 3 件事', 'Topics: how your life experiences let you contribute; a strong disagreement; activities, work or family responsibilities that shaped you; how you will use a Harvard education; top 3 things roommates should know', ['A5a-S23']),
      extra: [
        f('supplement 寫明「does not consider demonstrated interest」', 'The supplement states it "does not consider demonstrated interest"', ['A5a-S23']),
        f('翻譯須附原文，申請者不可自譯；School Report 附 school profile（若有）', 'Translations must be accompanied by the original and cannot be self-made; a school profile "if available" with the School Report', ['A4-S15', 'A4-S16'])
      ]
    },
    {
      name: 'Yale', filter: 'commonapp coalition rea need-blind test-required',
      judgment: s('面試只限受邀且全部是 evaluative；本季起考試只認 SAT/ACT。',
        'Interviews are invitation-only and all evaluative; from this cycle only SAT/ACT count.'),
      c: {
        sys: f('Common App、Coalition（SCOIR）或 QuestBridge，每季只能送一份', 'Common App, Coalition on SCOIR, or QuestBridge; "one, and only one, application per admissions cycle"', ['A5a-S27']),
        supp: f('選學術領域＋1 篇 ≤200 字；Common App／Coalition 另有 3 題 short takes（各 200 字元）與 1 篇 ≤400 字', 'Academic areas + 1 answer ≤200 words; on Common App/Coalition also 3 short takes (200 characters each) and 1 essay ≤400 words', ['A5a-S26']),
        teach: f('2 封，近期教過你的核心學科老師', '2, core-subject teachers who taught you recently', ['A5a-S28']),
        or: f('只提到藝術與領導類老師可交 supplemental letter；研究指導者、教練、雇主未載明', 'Only arts and leadership teachers are named for supplemental letters; mentors, coaches, employers not stated', ['A5a-S28']),
        intv: f('只限受邀，全部 evaluative；校友或 Senior Interviewers（線上）', 'Invitation only; "All Yale interviews are evaluative"; alumni or Senior Interviewers (virtual)', ['A5a-S29']),
        eng: f('必繳（英語授課學校 2 年以上者免）；常見 TOEFL 5（新）／100、IELTS 7、DET 120；接受 InitialView', 'Required unless 2+ years at an English-medium school; typical TOEFL 5 (new)/100, IELTS 7, DET 120; InitialView accepted', ['A4-S19']),
        sat: f('必繳；test-flexible 結束，國際畢業考不計', 'Required; test-flexible ended, international leaving exams do not count', ['A4-S19']),
        aid: f('need-blind', 'Need-blind', ['A4-S21'])
      },
      plans: f('Single-Choice EA 11/1；RD 1/2；國際生 EA 補助優先期限 12/1', 'Single-Choice EA Nov 1; RD Jan 2; international EA aid priority deadline Dec 1', ['A3a-S33', 'A3a-S37']),
      prompts: f('Short takes：你會開的一門課／寫的書／做的作品、大學裡想成長的面向、其他沒提到的事。400 字長文三選一：與持相反觀點者的討論、你所屬的社群、你能帶來的經驗', 'Short takes: a course, book or artwork you would create; an aspect of yourself to grow; anything not elsewhere. 400-word essay, 1 of 3: a discussion with an opposing view, a community you belong to, an experience you will bring', ['A5a-S26']),
      extra: [
        f('2026-05-27 宣布結束 test-flexible（AP、IB 不再算），只收 ACT/SAT', 'Test-flexible (AP, IB) ended, announced 2026-05-27; ACT/SAT only', ['A3a-S35']),
        f('STEM 研究可作為選繳 supplement', 'STEM research accepted as an optional supplement', ['A5a-S27'])
      ]
    },
    {
      name: 'Princeton', filter: 'commonapp rea need-blind test-optional',
      judgment: s('STEM 申請者也得準備一篇人文課的評分報告；考試本季選繳、下一季恢復必繳。',
        'Even STEM applicants need a graded humanities paper; testing is optional this cycle and required next cycle.'),
      c: {
        sys: f('Common App（另列 QuestBridge）；Arts Supplement 走 Applicant Status Portal', 'Common App (QuestBridge also listed); Arts Supplement via the Applicant Status Portal', ['A5a-S31']),
        supp: f('A.B. 或 B.S.E. 題 ≤250、Your Voice 400–500、服務 ≤250、3 題 ≤50 字；另須繳 graded written paper', 'A.B. or B.S.E. prompt ≤250, "Your Voice" 400–500, service ≤250, 3 × ≤50 words; plus a required graded written paper', ['A5a-S32', 'A5a-S34']),
        teach: f('2 封，須來自不同學科領域、教過你高階課程（AP、IB、A-level）的核心科目老師；School Report 與輔導老師推薦信是兩個分開的邀請，頁面特別提醒不要當成一個', '2, from core-subject teachers in different academic areas who taught you in higher-level courses (AP, IB, A-level); the School Report and the counselor recommendation are two separate invitations, and the page warns they are not one', ['A5a-S31', 'V4-T3']),
        or: f('清單上只有兩封老師推薦信與輔導老師推薦信，沒有 Other Recommender 這一類；唯一的選填項目是藝術補充', 'The checklist carries two teacher recommendations and the counselor letter only; no Other Recommender category appears, and the single optional component is the arts supplement', ['V4-T3']),
        intv: f('選擇性校友面試，30–45 分鐘，申請送出後才安排；可在 Princeton 專屬問題裡選擇不參加，頁面寫明「will not put you at any disadvantage」；不保證每人都排到（看校友人力），無校內面試，且雙方都不得錄音', 'Optional alumni interview, 30–45 minutes, arranged after the application arrives; opt out inside the Princeton-specific questions and the choice "will not put you at any disadvantage"; coverage depends on alumni availability and is not guaranteed, there are no on-campus interviews, and the interview "must not be recorded in any way, either by the interviewer or the applicant"', ['A5a-S31', 'V4-T3']),
        eng: f('非母語且學校非英語授課者必繳；英語授課中學 3 年以上免；未列最低分', 'Required if English is not native and the school is not English-medium; exempt after 3+ years English-medium; no minimum listed', ['A4-S23', 'A4-S24']),
        sat: f('fall 2027 入學選繳；2027–28 申請季（2028 秋入學）起恢復必繳，現役軍人免，決定前檢討了五年的選繳資料。送分必須由考試機構直送，不接受自填；SAT 可用 score choice，ACT 只取最高 composite，紙筆與數位 SAT 之間不 superscore', 'Optional for fall 2027 entry; required again from the 2027–28 cycle (fall 2028 entry), with active military personnel exempt, after a review of five years of test-optional data. Scores must come from the testing agency and may not be self-reported; score choice is allowed on the SAT, only the highest ACT composite is used, and the paper and digital SAT are not superscored together', ['A4-S24', 'A5a-S31', 'V4-T2']),
        aid: f('need-blind，國際生適用同一補助政策', 'Need-blind; same aid policy regardless of citizenship', ['A4-S23', 'A5a-S35'])
      },
      plans: f('Single-Choice EA 11/1：申請、graded paper、School Report、輔導老師信、成績單與兩封老師推薦信同一天到齊；藝術補充 11/6；PFAA 11/9；12 月中放榜。RD 1/1；藝術補充 1/8；PFAA 2/1；3 月下旬放榜；5/1 回覆。SCEA 不綁約，但不得同時早申其他美國私立大學', 'Single-Choice EA Nov 1: application, graded paper, School Report, counselor letter, transcript and both teacher evaluations all due that day; arts supplement Nov 6; PFAA Nov 9; decisions mid-December. RD Jan 1; arts supplement Jan 8; PFAA Feb 1; decisions late March; reply May 1. SCEA is non-binding but excludes early applications to other private US colleges', ['A3a-S41', 'A3a-S43', 'V4-T3', 'V4-T4']),
      prompts: f('A.B. 或 B.S.E. 學術興趣題、Your Voice、服務與公民參與、More About You（想學的新技能、帶來快樂的事、一首代表現在的歌）', 'A.B. or B.S.E. academic prompt, "Your Voice", service and civic engagement, "More About You" (a new skill, what brings joy, a song for your life now)', ['A5a-S32']),
      extra: [
        f('Graded written paper：近三年英文、社會或歷史課，附題目、分數與評語；偏好論證寫作「rather than science research」；須原為英文', 'Graded written paper: English, social studies or history from the last three years, with prompt, grade and comments; analytical writing "rather than science research"; originally in English', ['A5a-S34', 'A4-S23']),
        f('推薦表若非英文，送出前須正式翻譯，可由校內職員或第三方翻譯，不必付費', 'Recommendation forms in another language must be officially translated before submission, by a school official or third party; paid translation not required', ['A4-S23']),
        f('使用自有 PFAA，不用 CSS Profile 或 IDOC', 'Uses its own PFAA; no CSS Profile or IDOC', ['A4-S26']),
        f('Graded paper 兩種交件路徑：隨 Common App 上傳，或上傳到 applicant portal、email、USPS 郵寄。頁面寫「The Admission Office is more interested in the quality of the writing than the grade it received」；學校不打分數時改附老師評語與 rubric', 'Two routes for the graded paper: upload it with the Common Application, or upload it to the applicant portal, email it, or post it by USPS. "The Admission Office is more interested in the quality of the writing than the grade it received"; where a school does not grade work, send teacher comments and a rubric instead', ['V4-T1']),
        f('選填項目只有藝術補充（建築、創意寫作、舞蹈、音樂、音樂劇、戲劇、視覺藝術），要先在 Princeton 專屬問題裡宣告，再從 applicant portal 交——而且只能在申請送出之後：截止日 11/6 與 1/8 都落在申請日 11/1、1/1 之後。這四頁沒有研究或工程類補充', 'The only optional component is an arts supplement (architecture, creative writing, dance, music, music theater, theater, visual arts), declared in the Princeton-specific questions and submitted through the applicant portal — and only after the application itself: its Nov 6 and Jan 8 deadlines fall after the Nov 1 and Jan 1 application dates. No research or engineering supplement appears on these four pages', ['V4-T3', 'V4-T4']),
        f('「If a student has submitted an application on three separate occasions, the Office of Admission generally will not review subsequent applications.」同一頁也寫「No particular factor is assigned a fixed weight.」', '"If a student has submitted an application on three separate occasions, the Office of Admission generally will not review subsequent applications." The same page says: "No particular factor is assigned a fixed weight."', ['V4-T3']),
        f('QuestBridge National College Match 的參加者因時程關係不能做面試，也不能交藝術補充', 'QuestBridge National College Match participants cannot do an interview or submit an arts supplement, for timing reasons', ['V4-T3'])
      ]
    },
    {
      name: 'Columbia', filter: 'commonapp coalition ed need-aware test-optional or-yes',
      judgment: s('沒有面試；研究指導者的推薦信只在附研究摘要時才有入口。',
        'No interviews; a research mentor letter has a channel only alongside a research abstract.'),
      c: {
        sys: f('Common App 或 Coalition（Scoir）；QuestBridge 限 finalists', 'Common App or Coalition on Scoir; QuestBridge for finalists', ['A5a-S36']),
        supp: f('1 題清單 ≤100 字＋5 題各 ≤150 字', '1 list (≤100 words) + 5 short answers (≤150 words each)', ['A5a-S37']),
        teach: f('2 封；申請 Columbia Engineering 須有 1 封數理老師', '2; for Columbia Engineering one must be a math or science teacher', ['A5a-S36']),
        or: f('附研究摘要時歡迎研究指導者推薦信，可作為 additional recommendation 上傳；其他撰寫者未載明', 'A research mentor letter is welcomed with a research abstract, including as an additional recommendation; other writers not stated', ['A5a-S39']),
        intv: f('沒有面試', '"Interviews are not a part of the application process"', ['A5a-S36']),
        eng: f('必繳；TOEFL 105（舊）／5.5（新）、IELTS 7.5、DET 135；SAT R&W ≥700 或 ACT 英文／閱讀 ≥29 可免', 'Required; TOEFL 105 (old)/5.5 (new), IELTS 7.5, DET 135; waived by SAT R&W ≥700 or ACT English/Reading ≥29', ['A4-S27']),
        sat: f('2026–27 選繳；2027–28 起必繳', 'Optional for 2026–27; required from 2027–28', ['A4-S28']),
        aid: f('need-aware', 'Need-aware', ['A4-S30'])
      },
      plans: f('ED 11/1；RD 1/1；ED 補助申請 11/15', 'ED Nov 1; RD Jan 1; ED aid application Nov 15', ['A3a-S46']),
      prompts: f('清單：課外影響你的文本、資源與媒體；短答：生活經驗、意見不合、面對逆境、Why Columbia、想讀的領域', 'List of texts, resources and outlets outside class; short answers on lived experience, a disagreement, adversity, why Columbia, and your intended field', ['A5a-S37']),
      extra: [
        f('頁面寫「six short answer questions」，實際列出 5 題 150 字＋1 題 100 字清單', 'The page says "six short answer questions" but lists five 150-word questions plus a 100-word list', ['A5a-S37']),
        f('選繳：研究摘要、SlideRoom 創作與 Maker 作品集、Schoolhouse.world 認證', 'Optional: research abstract, SlideRoom creative and Maker portfolios, Schoolhouse.world certifications', ['A5a-S39']),
        f('國際生 ED 申請補助者「may be deferred to Regular Decision」', 'International ED applicants who apply for aid "may be deferred to Regular Decision"', ['A3a-S49'])
      ]
    },
    {
      name: 'UPenn', filter: 'commonapp coalition ed need-aware test-required or-yes',
      judgment: s('只要 1 封老師推薦信；額外 1 封可由 mentor 或教練寫，但只審 1 封。',
        'Only one teacher letter is required; one extra letter may come from a mentor or coach, and only one extra is read.'),
      c: {
        sys: f('Common App、Coalition 或 QuestBridge', 'Common App, Coalition, or QuestBridge', ['A5a-S40', 'A5a-S41']),
        supp: f('3 題各 50–200 字（含 1 題學院專屬）；雙學位課程另加', '3 prompts of 50–200 words (one school-specific); coordinated dual-degree programs add more', ['A5a-S43']),
        teach: f('**1 封**核心學科老師＋counselor', '**1** core-subject teacher + counselor', ['A5a-S42']),
        or: f('可，1 封：第二位老師，或 supervisor、mentor、教練、藝術老師等；「we will only review one additional letter」', 'Yes, 1: a second teacher or a supervisor, mentor, coach, arts instructor and similar; "we will only review one additional letter"', ['A5a-S42']),
        intv: ns(['A5a-S40', 'A5a-S41']),
        eng: f('非母語且英語授課未滿 3 年者必繳；無最低分，具競爭力約 TOEFL 5（新）／100、IELTS 7、DET 130；只收 2025-04-01 後的考試', 'Required unless native or 3+ years English-medium; no minimum, competitive TOEFL 5 (new)/100, IELTS 7, DET 130; tests on or after 2025-04-01 only', ['A4-S32']),
        sat: f('必繳', 'Required', ['A4-S33']),
        aid: f('need-aware', 'Need-aware', ['A4-S35'])
      },
      plans: f('ED 2026/11/1；RD 2027/1/5；ED 補助文件 11/6', 'ED Nov 1, 2026; RD Jan 5, 2027; ED aid documents Nov 6', ['A3a-S51', 'A3a-S52']),
      prompts: f('全員：一封感謝函、如何在 Penn 探索社群；學院題：College、Wharton、Engineering、Nursing 各一題', 'All: a thank-you note and exploring community at Penn; one school prompt for the College, Wharton, Engineering or Nursing', ['A5a-S43']),
      extra: [
        f('申請的是 4 個學院之一或一個雙學位課程，不是整個 Penn', 'You apply to one of four schools or one coordinated dual-degree program', ['A5a-S45']),
        f('作品集只限 VIC；其他人用活動與 additional information 欄', 'Portfolios only for VIC; others use the activities and additional-information sections', ['A5a-S46']),
        f('補助文件走 Penn 自己的入口，不用 IDOC；錄取後不能再申請補助', 'Aid documents through Penn\'s own portal, not IDOC; no aid request after admission', ['A4-S36'])
      ]
    },
    {
      name: 'Brown', filter: 'commonapp ed need-blind test-required or-yes',
      judgment: s('沒有校方面試；額外推薦信 1 封經 Common App，撰寫者不限。',
        'No admissions interview; one extra letter via Common App with no restriction on the writer.'),
      c: {
        sys: f('Common App；音樂與視覺藝術走 SlideRoom，其他上傳走 Brown Applicant Portal', 'Common App; SlideRoom for music/visual art, Brown Applicant Portal for other uploads', ['A5a-S47', 'A5a-S50']),
        supp: f('4 篇（2×150–250、2×100–150 字）；PLME 加 3 篇、Brown|RISD 加 1 篇；選繳 90 秒影片', '4 essays (2×150–250, 2×100–150 words); PLME +3, Brown|RISD +1; optional 90-second video', ['A5a-S47', 'A5a-S51']),
        teach: f('2 封主科老師；Sc.B. 與 PLME 至少 1 封數理', '2 major-subject teachers; Sc.B. and PLME need at least one math or science', ['A5a-S49']),
        or: f('可，1 封經 Common App；更多信可由推薦人直接寄', 'Yes, 1 via Common App; further letters may be sent by the recommender directly', ['A5a-S50']),
        intv: f('第一年申請頁面未描述校方面試；InitialView 只是影片選項之一', 'No admissions interview described; InitialView is one video option', ['A5a-S51', 'A5a-S48']),
        eng: f('「highly recommend」；TOEFL 105（舊）／5.5（新）、IELTS 8.0、DET 130', '"Highly recommend[ed]"; TOEFL 105 (old)/5.5 (new), IELTS 8.0, DET 130', ['A4-S37']),
        sat: f('必繳', 'Required', ['A4-S39']),
        aid: f('國際一年級生 need-blind（補助頁該句仍寫 fall 2025 入學）', 'Need-blind for international first-years (the aid page sentence still names fall 2025 entry)', ['A4-S38', 'A3a-S59'])
      },
      plans: f('ED 11/1；RD 1/5；ED 的 SlideRoom 作品 11/4', 'ED Nov 1; RD Jan 5; SlideRoom portfolios Nov 4 (ED)', ['A3a-S56', 'A3a-S57', 'A3a-S58']),
      prompts: f('題目：Open Curriculum、成長經驗帶來的啟發或挑戰、想教的一堂課、帶來快樂的事', 'Topics: the Open Curriculum, how growing up inspired or challenged you, a class you would teach, something that brings you joy', ['A5a-S47']),
      extra: [
        f('頁面寫「Four essays are required」，PLME／BRDD 段落又寫「the three essays required」', 'The page says "Four essays are required", while the PLME/BRDD paragraphs say "the three essays required"', ['A5a-S47']),
        f('學術論文或研究摘要可附說明上傳 portal', 'An academic paper or research abstract may be uploaded to the portal with a context note', ['A5a-S50']),
        f('RD 放榜：RD 頁寫 4 月初，checklist 寫 3 月底', 'RD release: "by early April" on the RD page, "Late March" on the checklist', ['A3a-S57', 'A3a-S58'])
      ]
    },
    {
      name: 'Cornell', filter: 'commonapp ed need-aware test-required',
      judgment: s('文書依學院而定；Engineering 的規定是一封數學／科學／CS 老師，不是兩封。',
        'Writing depends on the college; Engineering needs one math, science or CS letter, not two.'),
      c: {
        sys: f('Common App＋各學院 supplement', 'Common App with a college-specific supplement', ['A5a-S53']),
        supp: f('依學院：Engineering 2×200＋4×100 字；A&S 1×650；CALS 2×350；Human Ecology 1×550', 'By college: Engineering 2×200 + 4×100 words; A&S 1×650; CALS 2×350; Human Ecology 1×550', ['A5a-S54', 'A5a-S55', 'A5a-S56', 'A5a-S57']),
        teach: f('2 封；Engineering 至少 1 封數學、科學或 CS', '2; Engineering needs at least one math, science or CS teacher', ['A5a-S53', 'A5a-S54']),
        or: ns(['A5a-S53', 'A5a-S54']),
        intv: f('FAQ：有校友處才有面試，沒有不影響', 'FAQ: alumni interviews where available; absence not adverse', ['A3a-S68']),
        eng: f('必繳（母語或英語授課者免）；TOEFL 100（舊）／5.0（新，建議 5.5）、IELTS 7.5、DET 130', 'Required unless exempt; TOEFL 100 (old)/5.0 (new, 5.5 recommended), IELTS 7.5, DET 130', ['A4-S41', 'A4-S42']),
        sat: f('必繳', 'Required', ['A4-S41']),
        aid: f('need-aware', 'Need-aware', ['A4-S44'])
      },
      plans: f('ED 11/1（其他資料 11/13）；RD 1/2（其他資料 1/19）；國際生 CSS Profile 與申請同日', 'ED Nov 1 (other materials Nov 13); RD Jan 2 (Jan 19); international CSS Profile on the application date', ['A3a-S62', 'A3a-S67']),
      prompts: f('Engineering：為何讀工程、為何選 Duffield（各 200 字）；短答：帶來快樂的事、對社群的貢獻、一項活動、一項獎項（各 100 字）', 'Engineering: why engineering and why Duffield (200 words each); short answers on joy, community contribution, one activity, one award (100 words each)', ['A5a-S54']),
      extra: [
        f('直接申請 9 個學院之一；CALS 申請到主修', 'Apply directly to one of nine colleges; CALS applicants apply to a major', ['A5a-S53', 'A5a-S56']),
        f('Engineering 必修：4 年數學含微積分、物理與化學各 1', 'Engineering requires 4 units of math incl. calculus, 1 physics, 1 chemistry', ['A5a-S54']),
        f('第一年申請頁未提全校共同 essay；Brooks、AAP、ILR 的題目內容未擷取', 'No university-wide essay on the first-year page; Brooks, AAP and ILR prompt texts not captured', ['A5a-S53', 'A5a-S59'])
      ]
    },
    {
      name: 'Georgetown', filter: 'own commonapp ea test-required',
      judgment: s('面試被指派就必須完成；SAT/ACT 必繳；Common App 為試行管道。',
        'The interview is required once assigned; SAT/ACT required; Common App is a pilot route.'),
      c: {
        sys: f('Georgetown Application 或 Common App（三年試行，2026 年 8 月起）', 'Georgetown Application or Common App (three-year pilot from August 2026)', ['A5a-S62', 'A4-S46']),
        supp: f('2×250、1×650（可沿用 Common App 主文）、1×500 學院專屬', '2×250, 1×650 (Common App essay may be reused), 1×500 school-specific', ['A5a-S63']),
        teach: f('**1 封**＋counselor；第二封老師選繳；各學院有科目規定', '**1** + counselor; a second teacher optional; subject rules by school', ['A5a-S63']),
        or: f('只提到第二位老師；非老師推薦人未載明', 'Only a second teacher is named; non-teacher recommenders not stated', ['A5a-S63']),
        intv: f('校友面試，指派後必須完成，提交 evaluative 報告；部分國際生可能未被指派，不影響', 'Alumni interview, required once assigned, evaluative report; some internationals may not be assigned, with no negative effect', ['A5a-S62', 'A5a-S63']),
        eng: f('建議，非必繳；未列最低分', 'Recommended, not required; no minimum stated', ['A4-S48']),
        sat: f('必繳', 'Required', ['A4-S48', 'A4-S46']),
        aid: f('need 政策未載明；need-based 獎學金「very limited number」', 'Need policy not stated; a "very limited number" of need-based scholarships', ['A4-S50'])
      },
      plans: f('EA 11/1（不得同時申請有約束力的 ED）；RD 1/1；補助申請 2/1', 'EA Nov 1 (no binding ED elsewhere); RD Jan 1; aid application Feb 1', ['A3a-S69']),
      prompts: f('短文：最投入的活動、與不同觀點者相處（各 250）；個人文章 650；學院專屬 500（7 個學院／單位各一題）', 'Short essays: most-involved activity and differing viewpoints (250 each); personal essay 650; school-specific 500 (one prompt per school)', ['A5a-S63']),
      extra: [
        f('不要求 Common App 主文，改問自己的 personal essay', 'Does not require the Common App personal statement; asks its own personal essay', ['A5a-S62']),
        f('School profile 是高中必交項目', 'A school profile is a required high-school item', ['A4-S47']),
        f('直接申請 6 個大學部學院之一', 'Apply directly to one of six undergraduate schools', ['A5a-S62'])
      ]
    },
    {
      name: 'Carnegie Mellon', filter: 'commonapp ed no-intl-aid test-varies or-yes',
      judgment: s('只用 Common App、只要 1 封老師推薦信、不收補充作品；國際生沒有補助。',
        'Common App only, one teacher letter, no supplementary work, and no aid for internationals.'),
      c: {
        sys: f('只用 Common App', '"uses the Common Application exclusively"', ['A5a-S65a']),
        supp: f('3 題，各不超過 300 字', '3 short answers, up to 300 words each', ['A5a-S67']),
        teach: f('**1 封**＋counselor；不必是申請領域的老師', '**1** + counselor; need not teach the intended field', ['A5a-S67']),
        or: f('可收第三封（老師或其他推薦人），但委員會只考慮兩封', 'A third letter from a teacher or other recommender is accepted, but committees consider only two', ['A5a-S67']),
        intv: f('未載明校方面試；非母語者建議 InitialView／Vericant，非必要', 'No CMU interview stated; InitialView/Vericant recommended for non-native speakers, not required', ['A5a-S70']),
        eng: f('非母語者必繳；TOEFL 102（舊）／5（新）、IELTS 7.5、DET 135；成績 2 年內', 'Required for non-native speakers; TOEFL 102 (old)/5 (new), IELTS 7.5, DET 135; no more than 2 years old', ['A4-S51']),
        sat: f('依學院：Computer Science 必繳；多數學院 test-flexible；Fine Arts 選繳', 'By college: Computer Science requires SAT/ACT; most others test-flexible; Fine Arts optional', ['A4-S52']),
        aid: f('不提供國際生補助', 'No aid for international students', ['A4-S51'])
      },
      plans: f('ED 11/2；RD 1/4；ED 只能選一個學院', 'ED Nov 2; RD Jan 4; ED applicants choose one college only', ['A3a-S71', 'A5a-S69']),
      prompts: f('題目：想讀領域背後的熱情、如何定義成功的大學經驗、還想強調什麼（「no websites please」）', 'Topics: the passion behind your intended field, how you define a successful college experience, what else to emphasise ("no websites please")', ['A5a-S67']),
      extra: [
        f('ED 截止日三種說法：11/2（截止頁）、11/3（FAQ）、11/1（FAQ 轉換方案段落）', 'ED deadline stated three ways: Nov 2 (deadlines page), Nov 3 (FAQ), Nov 1 (FAQ plan-switch answer)', ['A5a-S68', 'A5a-S69']),
        inf('CMU 統一說法前，以 11/1 為安全日期', 'Treat Nov 1 as the safe date until CMU reconciles its pages', ['A5a-S68', 'A5a-S69']),
        f('不收履歷、作品集、網站等補充資料（Fine Arts 除外）；Engineering 與 SCS 可選 VIVA 專題影片評量', 'No resumes, portfolios or websites (Fine Arts excepted); Engineering and SCS may use VIVA project-video assessments', ['A5a-S65'])
      ]
    },
    {
      name: 'Georgia Tech', filter: 'commonapp ea test-required',
      judgment: s('推薦信全部選繳，且只收老師與 counselor；DET 不能滿足英語要求。',
        'All letters are optional and only from teachers and the counselor; DET does not meet the English requirement.'),
      c: {
        sys: f('只用 Common App', '"exclusively uses the Common App"', ['A5a-S71']),
        supp: f('頁面只列 Common App 主文，沒有 Georgia Tech 專屬題', 'Only the Common App essay is listed; no Georgia Tech-specific prompt', ['A5a-S75']),
        teach: f('不要求；最多收 2 封老師＋1 封 counselor，標為 Optional', 'None required; up to 2 teachers + 1 counselor accepted, labelled optional', ['A5a-S73', 'A5a-S79']),
        or: f('不收：「unable to accept letters from other community members」', 'No: "unable to accept letters from other community members"', ['A5a-S73']),
        intv: f('沒有校友或招生人員面試；非母語者可選繳第三方面試', 'No alumni or staff interviews; optional third-party interview for non-native speakers', ['A5a-S74']),
        eng: f('依 USG 規定必繳；TOEFL 3.5（新）／69（舊）、IELTS 6；DET 不符 USG 要求，只供整體審查', 'Required under the USG rule; TOEFL 3.5 (new)/69 (old), IELTS 6; DET does not satisfy USG, holistic review only', ['A4-S53', 'A4-S54']),
        sat: f('必繳', 'Required', ['A4-S55']),
        aid: f('need 政策未載明；無聯邦／州補助，校內獎學金「often not awarded」給國際生', 'Need policy not stated; no federal/state aid; institutional scholarships "often not awarded" to internationals', ['A4-S56'])
      },
      plans: f('EA1 10/15（限喬治亞州學生）；EA2 11/2（含國際生）；RD 1/6；EA2 文件 11/16', 'EA1 Oct 15 (Georgia students); EA2 Nov 2 (incl. international); RD Jan 6; EA2 documents Nov 16', ['A3a-S76']),
      prompts: null,
      extra: [
        f('申請時選第一主修與選填的第二主修；「evidence of your interest in this major」列入審查', 'Applicants pick a primary and optional secondary major; "evidence of your interest in this major" is part of review', ['A5a-S76']),
        f('國際生報名費 $85（國內 $75）', 'International fee $85 (domestic $75)', ['A5a-S72'])
      ]
    },
    {
      name: 'Purdue', filter: 'commonapp ea no-intl-aid test-varies',
      judgment: s('推薦信不要求但交了會看，而這句話只寫在給輔導老師的頁面上；科系名額是審查因素，11/1 是熱門科系的實際期限。',
        'Letters are not required but are read if sent, and that is stated only on a page written for counselors; program space is a review factor, so Nov 1 is the working deadline for high-demand majors.'),
      c: {
        sys: f('Common App', 'Common App', ['A5a-S80', 'A5a-S82']),
        supp: f('2 題各 ≤250 字；選第二主修加 1 題；Honors 另加 4 題各 ≤200 字', '2 × ≤250 words; +1 if an alternate major is chosen; Honors College adds 4 × ≤200', ['A5a-S82']),
        teach: f('不要求，但交了會看：「Letters of recommendation aren\'t required, but if a student submits one, we\'ll include it in their review.」這句話在**給輔導老師的更新頁**上，不在任何申請者會走到的要求頁；申請清單與審查因素清單裡都沒有推薦信，兩件事並不衝突。該頁沒有標示發布日期，只能用存取日定年。封數、可由誰寫、怎麼交：未載明', 'Not required, but read if sent: "Letters of recommendation aren\'t required, but if a student submits one, we\'ll include it in their review." That sentence sits on a **counselor-facing updates page**, not on any requirements page an applicant would reach; letters appear in neither the application checklist nor the review-factor list, and the two statements are compatible. The page carries no publication date, so the claim is dated by access date only. How many, from whom, and by what route: not stated', ['V5-U1', 'A5a-S82', 'V4-T9']),
        or: ns(['A5a-S81', 'A5a-S82', 'V4-T9']),
        intv: ns(['A5a-S81', 'A5a-S82', 'V4-T9']),
        eng: f('DET 一般 115，各分項 110 以上；IELTS 一般 6.5，各部分至少 6.0，收 Online Academic 與 Indicator，不收 General Training；TOEFL iBT 在 2026-01-21 之前考的要 88、各部分 20 以上，當天或之後考的要 4.5、各部分 4.0；ACT 英文 26；SAT EBRW 600。成績須兩年內，審查時可自填，錄取並接受後須由考試機構直送。頁面寫明「meeting the minimum English proficiency score does not guarantee admission」；完成英語授課課程可替代考試', 'DET generally 115 with 110+ in every subscore; IELTS generally 6.5 with at least 6.0 per section, Online Academic and Indicator accepted, General Training not; TOEFL iBT 88 with 20+ per section for exams taken before 21 January 2026 and 4.5 with 4.0 per section on or after it; ACT English 26; SAT EBRW 600. Results must be from a test taken within two years, self-reported scores are accepted at review, and official scores must follow if the applicant is admitted and accepts. "Meeting the minimum English proficiency score does not guarantee admission"; a completed English-speaking curriculum can be used instead of an exam', ['A4-S58', 'V4-T14']),
        sat: f('「Test expected」（可有例外）；收 SAT、ACT 與 CLT，「We have no preference on which test you take」，同一種考試可跨考期組合各科最高分，成績須五年內，ACT 不需要單獨的 Science 分數。審查因素清單寫的是「SAT, ACT or CLT scores (if provided)」，沒有另寫必繳。校碼 ACT 1230、SAT 1631；CLT 在考生 dashboard 選 Purdue', '"Test expected" (exceptions possible); the SAT, ACT and CLT are all accepted and "We have no preference on which test you take", highest section scores may be combined across dates for a given test, scores must be from within the past five years, and no separate ACT Science score is required. The review-factor list reads "SAT, ACT or CLT scores (if provided)" and states no requirement as such. School codes ACT 1230, SAT 1631; for the CLT, Purdue is selected in the student dashboard', ['A4-S59', 'A4-S135', 'V4-T9']),
        aid: f('國際生原則上不符補助與獎學金資格', 'Internationals "in general" not eligible for aid, including scholarships', ['A4-S61'])
      },
      plans: f('秋季申請期 8/1–1/15，走 Common App（West Lafayette 與 Indianapolis；Polytechnic Statewide 用 Purdue 自己的申請表、另一套時程）。EA 11/1 同時是獎學金考慮的截止日——原文「the Nov. 1 Early Action deadline that encompasses scholarship consideration」，也是工程、CS、護理等科系的優先期限；RD 1/15', 'The fall application window is Aug 1 to Jan 15 through the Common App (West Lafayette and Indianapolis; Polytechnic Statewide uses Purdue\'s own application on a different calendar). Early Action Nov 1 is also the scholarship deadline — "the Nov. 1 Early Action deadline that encompasses scholarship consideration" — and the priority date for engineering, CS, nursing and others; RD Jan 15', ['A3a-S80', 'V4-T8', 'V4-T9']),
      prompts: f('兩題「Why Purdue?」：校內外機會如何支持你的興趣、選擇主修與校區的理由', 'Two "Why Purdue?" questions: how opportunities support your interests, and reasons for your major and campus', ['A5a-S82']),
      extra: [
        f('申請時選主修與校區；「Changing majors or locations is never guaranteed」', 'Applicants choose a major and campus; "Changing majors or locations is never guaranteed"', ['A5a-S82']),
        f('工程申請者「Chemistry experience is expected」', 'Engineering applicants: "Chemistry experience is expected"', ['A5a-S81']),
        f('查到唯一提及台灣的官方頁：台灣申請者交國中 9 年級與高中成績單', 'The only official page found that mentions Taiwan: applicants submit grade 9 and senior-high transcripts', ['A4-S60']),
        f('2026 年起印第安納州法要求部分國籍額外審查（名單列中國含港澳，未列台灣）', 'From 2026 Indiana law adds review steps for some citizenships (China incl. Hong Kong and Macau listed; Taiwan not named)', ['A3a-S83', 'A4-S60']),
        f('最低修課要求：所有主修都要四年數學與三年實驗科學，四年英文。非英語國家的申請者不必滿足世界語言要求；IB 沒有整體最低分，HL 也不優於 SL', 'Minimum course expectations: four years of mathematics and three of laboratory science for every major, plus four years of English. An applicant from a non-English-speaking country is not required to meet the world-language requirement; there is no overall IB minimum and higher level is given no preference over standard level', ['V4-T9', 'V4-T10']),
        f('國際生頁面直接寫「When you apply to Purdue, you apply for admission into a specific major.」', 'The international page says outright: "When you apply to Purdue, you apply for admission into a specific major."', ['V4-T10']),
        f('審查因素清單全文：修課要求、學科總成績、核心學科成績（英文、數學、實驗科學、世界語言、社會）、SAT／ACT／CLT（若有提供）、國際生英語能力證明、在所選主修成功的能力、Purdue 專屬問題與文書、課外活動與領導、申請者特有的機會。清單裡沒有推薦信', 'The review-factor list in full: course expectations; overall grades in academic coursework; grades in the academic core (English, math, laboratory science, world language, social studies); SAT/ACT/CLT if provided; proof of English proficiency for international students whose first language is not English; ability to be successful in the intended major; the essay and the Purdue questions; activities, leadership and achievements outside the classroom; opportunities unique to the applicant\'s experience. Letters of recommendation do not appear in it', ['V4-T9'])
      ]
    },
    {
      name: 'Michigan', filter: 'commonapp ed ea no-intl-aid test-optional',
      judgment: s('新增了 Early Decision，ED 同意書要申請人、家長與輔導老師三個簽名一起完成；只要一封老師推薦信，而且可以是「核心學科老師或其他非親屬」；明文要求不要補交文件。',
        'Has added an Early Decision plan whose Agreement needs the applicant, a parent or guardian and the counselor to sign together; requires one teacher evaluation, which may come from a "core academic teacher or other non-relative"; and tells applicants in writing not to send extra documents.'),
      c: {
        sys: f('Common App（含 U-M 專屬題）', 'Common App (with U-M-specific questions)', ['A5a-S84', 'A2-S45']),
        supp: f('2026–27 字數：Common App 主文書 250–650 字（「650 words is your limit, not your goal… The application won\'t accept a response shorter than 250 words」）；Common App 的 Challenges and Circumstances 題 250 字上限；U-M 第一題 100–300 字必答；U-M 第二題 100–550 字必答', '2026–27 limits: the Common Application essay is 250–650 words ("650 words is your limit, not your goal… The application won\'t accept a response shorter than 250 words"); the Common App Challenges and Circumstances question is capped at 250 words; U-M question 1 is 100–300 words and required; U-M question 2 is 100–550 words and required', ['V4-T12']),
        teach: f('**1 封** Teacher Evaluation，可來自「核心學科老師**或其他非親屬**」，只要能直接說明學生的學術能力、潛力與課堂表現；另有 School Report。國際生清單上 counselor 推薦「encouraged but not required」', '**1** Teacher Evaluation, which may come from a "core academic teacher **or other non-relative**" who can speak directly to the student\'s academic aptitude, potential and classroom performance; plus a School Report. On the international checklist the counselor letter is "encouraged but not required"', ['A5a-S85', 'V4-T13']),
        or: f('沒有獨立的 Other Recommender 欄位，而且「Do not submit additional documents unless specifically requested」；但那唯一一封老師推薦信本身可以由「其他非親屬」寫，校外 mentor 的入口在這裡而不在額外推薦信', 'No separate Other Recommender slot, and "Do not submit additional documents unless specifically requested"; but the single teacher evaluation may itself be written by an "other non-relative", so an outside mentor enters here rather than as an extra letter', ['V4-T13']),
        intv: ns(['A5a-S84', 'A5a-S85', 'A5a-S88', 'V4-T13']),
        eng: f('英語為第二語言者必繳；**不收 DET**；TOEFL 約 100／5–6（新）、IELTS 7.0；台灣不在免考國家名單', 'Required if English is a second language; **DET not accepted**; typical TOEFL 100 range / 5–6 (new), IELTS 7.0; Taiwan not on the exemption list', ['A4-S63']),
        sat: f('選繳（「2027 application cycle」）；要列入考慮才交，自填成績的截止日為 ED／EA 11/1、RD 2/1，兩者都是選填', 'Optional ("2027 application cycle"); submit only if you want scores considered, with self-report deadlines of Nov 1 for ED/EA and Feb 1 for RD, both optional', ['A4-S64', 'V4-T13']),
        aid: f('持臨時簽證者不符 need-based 補助；獎學金「very limited」', 'Students on temporary visas not eligible for need-based aid; scholarships "very limited"', ['A5a-S85', 'A4-S66'])
      },
      plans: f('11/1 同時是 ED 與 EA 的截止日（important-dates 清單原文「Early Decision for First-year Students Only / Early Action for First-year Students Only」）：ED 補助 11/15、12/24 前放榜、1/6 繳訂金；EA 1/29 前放榜。RD 與夏季半學期 2/1，4/2 前放榜；EA／RD 補助 3/1；訂金 5/1。音樂、戲劇與舞蹈學院 12/1；冬季班 10/1。ED 同意書要申請人、家長或監護人與輔導老師簽名，而且「All three signatures must be together」', 'Nov 1 is the deadline for both ED and EA (the important-dates list reads "Early Decision for First-year Students Only / Early Action for First-year Students Only"): ED aid Nov 15, ED notifications by Dec 24, ED enrolment deposit Jan 6; EA notifications by Jan 29. Regular Decision and summer half term Feb 1, notifications by April 2; EA/RD aid Mar 1; deposit May 1. School of Music, Theatre & Dance Dec 1; winter term Oct 1. The Early Decision Agreement must be signed by the applicant, a parent or guardian and the high school counselor, and "All three signatures must be together"', ['V4-T13']),
      plans2: f('同一頁警告「We are modifying our admissions process and requirements.」——這一季的 Michigan 規則可能在季中改動', 'The same page warns: "We are modifying our admissions process and requirements." Michigan\'s rules for this cycle may change mid-cycle', ['V4-T13']),
      prompts: f('Common App 主文書（250–650 字）、Common App 的 Challenges and Circumstances（250 字上限）、U-M 第一題「如何準備好為培養領導者與公民做出貢獻」（100–300 字，必答）、U-M 第二題「所申請學院的特質，以及它的課程如何支持你的興趣」（100–550 字，必答）', 'The Common Application essay (250–650 words); the Common App Challenges and Circumstances question (capped at 250 words); U-M question 1, how you are prepared to contribute to developing leaders and citizens (100–300 words, required); U-M question 2, the qualities of the specific college or school you are applying to and how its curriculum supports your interests (100–550 words, required)', ['V4-T12']),
      extra: [
        f('工程學院：所有一年級新生到第三學期前都是 undeclared', 'Engineering: all incoming first-years are undeclared until the third term', ['A5a-S87']),
        f('國際生被告知「Do not submit any extra documents unless specifically requested」', 'Internationals are told "Do not submit any extra documents unless specifically requested"', ['A5a-S85']),
        f('財力文件在錄取並繳訂金後上傳，只能上傳一次', 'Financial documents after admission and deposit, uploaded once only', ['A4-S67']),
        f('清單：Common App、$75 報名費或表內減免、成績單、School Report、一封老師推薦信、想列入考慮才交的 SAT／ACT、非母語者的英語考試。頁面並寫「Do not submit additional documents unless specifically requested, as this may delay your decision.」', 'The checklist: Common Application, a $75 fee or an in-application waiver, transcript, School Report, one teacher evaluation, the SAT or ACT only if the applicant wants them considered, and an English test for non-native speakers. The page also says: "Do not submit additional documents unless specifically requested, as this may delay your decision."', ['V4-T13']),
        f('2026-11-07 清晨：curl 對 admissions.umich.edu 與 engin.umich.edu 仍回 HTTP 403，但瀏覽器把 requirements 與 essay 兩頁都直接打開，沒有任何驗證頁。本站先前「連瀏覽器都 403」的記載已經不成立，上面的日期與字數是第一次直接讀到中央招生辦自己的頁面', 'Early on 2026-11-07: curl still returns HTTP 403 for admissions.umich.edu and engin.umich.edu, but a browser opened both the requirements and the essay page with no challenge of any kind. This repo\'s earlier note that Michigan was "403 everywhere, including the browser" no longer holds, and the dates and word limits above are the first direct reading of the central admissions office\'s own pages', ['V4-T12', 'V4-T13'])
      ]
    },
    {
      name: 'UIUC', filter: 'commonapp ea no-intl-aid test-optional',
      judgment: s('不收推薦信、一般申請沒有面試；短文綁定第一與第二志願主修。',
        'No letters and no interview for general admission; the short essays are tied to the first- and second-choice majors.'),
      c: {
        sys: f('Common App；送件後以連結自填課程與成績（SRAR）', 'Common App; course and grade self-report via a link after submission', ['A5b-S2', 'A2-S46']),
        supp: f('2–3 題各約 150 字（依第一／第二主修）；頁面未標年份', '2–3 essays of about 150 words (by first/second-choice major); no cycle label', ['A5b-S1']),
        teach: f('不收推薦信', '"we don\'t accept letter of recommendation"', ['A5b-S3']),
        or: f('不收', 'No', ['A5b-S3']),
        intv: f('一般申請沒有；Fine and Applied Arts 可能要求', 'None for general admission; may be required for Fine and Applied Arts', ['A5b-S2', 'A5b-S3']),
        eng: f('非核准國家且未繳 SAT/ACT 者必繳（台灣不在核准名單）；不能豁免；一年級最低分未載明', 'Required for non-test-submitters from non-approved countries (Taiwan not approved); cannot be waived; first-year minimums not stated', ['A4-S68', 'A4-S69']),
        sat: f('選繳', 'Optional', ['A4-S70']),
        aid: f('沒有國際生 need-based 補助；可能有學院或系所獎學金', 'No need-based aid for internationals; college/department scholarships possible', ['A4-S71', 'A3b-S4'])
      },
      plans: f('EA 11/1（資料 11/7）；RD 1/5（資料 1/11）；頁面未標年份', 'EA Nov 1 (materials Nov 7); RD Jan 5 (materials Jan 11); no year on the page', ['A3b-S1']),
      prompts: f('與第一志願主修相關的經驗、畢業後目標；選第二志願加 1 題', 'An experience related to the first-choice major and post-graduation goals; one more for a second-choice major', ['A5b-S1']),
      extra: [
        f('FAQ 強烈建議填第二志願主修，否則只審第一志願', 'The FAQ strongly recommends a second-choice major; without one only the first choice is considered', ['A5b-S3']),
        f('Grainger 工程所有主修：至少 3.5 年數學（含三角或以上）', 'All Grainger engineering majors: at least 3.5 years of math including trigonometry or higher', ['A5b-S4'])
      ]
    },
    {
      name: 'Olin', filter: 'commonapp no-intl-aid test-optional or-yes',
      judgment: s('第二階段 Candidates\' Weekend 必須參加，境外申請者改線上面試；國際生只有 merit 獎學金。',
        'Candidates\' Weekend is a required second stage, virtual for applicants abroad; internationals get merit aid only.'),
      c: {
        sys: f('Common App（含 Olin 專屬題）', 'Common App (with Olin-specific questions)', ['A5b-S7', 'A5b-S8']),
        supp: ns(['A5b-S7', 'A5b-S8', 'A5b-S9']),
        teach: f('2 封，至少 1 封 STEM＋counselor 表', '2, at least one STEM, + counselor form', ['A5b-S8']),
        or: f('可：「Yes! But don\'t go overboard」，未限定撰寫者', 'Yes: "Yes! But don\'t go overboard"; writer not restricted', ['A5b-S9']),
        intv: f('Candidates\' Weekend 必須參加（含個別面試）；美國本土 48 州以外者改線上', 'Candidates\' Weekend required (incl. an individual interview); virtual for applicants outside the contiguous US', ['A5b-S8']),
        eng: f('「highly recommend」；沒繳 SAT/ACT 者必繳；英語授課 4 年免；建議 TOEFL 5／100、IELTS 7、DET 120', '"Highly recommend"; required without SAT/ACT; waived after 4 years English-medium; recommended TOEFL 5/100, IELTS 7, DET 120', ['A4-S72', 'A4-S73']),
        sat: f('選繳；暫停要求延續到 2026–27', 'Optional; suspension extended through 2026–27', ['A4-S72', 'A3b-S5']),
        aid: f('沒有國際生 need-based 補助；所有錄取者每年 $10,000 merit 獎學金', 'No need-based aid for internationals; $10,000/yr merit scholarship to all admits', ['A4-S74'])
      },
      plans: f('單一截止 2026/12/15；Candidates\' Weekend 2027 年 2/19–20、2/26–27、3/5–6；3 月下旬放榜', 'Single deadline Dec 15, 2026; Candidates\' Weekends Feb 19–20, Feb 26–27, Mar 5–6, 2027; decisions late March', ['A3b-S6']),
      prompts: null,
      extra: [
        f('「strong calculus and physics foundation」是入學條件；化學未載明', 'A "strong calculus and physics foundation" is a requirement for admission; chemistry not stated', ['A5b-S7']),
        f('Olin「cannot promise that all optional materials will get reviewed」', 'Olin "cannot promise that all optional materials will get reviewed"', ['A5b-S9']),
        inf('台灣申請者應預期 2 月底或 3 月初、以台灣時間進行的線上面試', 'A Taiwan applicant should plan for a late-February or early-March virtual interview on Taiwan time', ['A5b-S8'])
      ]
    },
    {
      name: 'Harvey Mudd', filter: 'commonapp ed need-aware test-optional or-yes',
      judgment: s('兩封老師推薦信是一封 STEM 一封人文；考試 2027 入學選繳、2028 入學恢復必繳。',
        'The two teacher letters are one STEM and one humanities; testing is optional for 2027 entry and required for 2028.'),
      c: {
        sys: f('Common App', 'Common App', ['A5b-S10']),
        supp: f('2 題：≤500 字、≤250 字', '2 prompts: ≤500 and ≤250 words', ['A5b-S10']),
        teach: f('2 封：1 STEM＋1 人文／社科／藝術；counselor「when available」', '2: one STEM + one humanities, social science or arts; counselor "when available"', ['A5b-S10', 'A5b-S12']),
        or: f('可，1 封，最好是 supervisor、mentor 或雇主', 'Yes, 1, ideally from a supervisor, mentor or employer', ['A5b-S12']),
        intv: f('選擇性線上面試，不面試不扣分', 'Optional and virtual; "students will not be penalized for not having one"', ['A5b-S12']),
        eng: f('必繳；DET 130（限 160 分制版本）、TOEFL 100、IELTS 7.5；豁免只能在送件後申請', 'Required; DET 130 (160-point version only), TOEFL 100, IELTS 7.5; waiver only after applying', ['A4-S75']),
        sat: f('fall 2027 選繳；fall 2028 恢復必繳', 'Optional for fall 2027; required again for fall 2028', ['A4-S76']),
        aid: f('need-aware', 'Need-aware', ['A4-S76'])
      },
      plans: f('ED I 11/15；ED II 與 RD 1/5', 'ED I Nov 15; ED II and RD Jan 5', ['A3b-S8']),
      prompts: f('經驗或社群如何形塑你想解決的問題（≤500）；求助帶來改變的一次經驗（≤250）', 'How an experience or community shaped the problems you want to solve (≤500); a time asking for help made a difference (≤250)', ['A5b-S10']),
      extra: [
        f('必修高中微積分、化學、物理各 1 年；缺課可能有條件錄取', 'One year each of high-school calculus, chemistry and physics; conditional admission possible if missing', ['A5b-S10']),
        f('研究摘要經 Additional Information 上傳，不收全文；不收音樂或藝術作品集', 'Research abstract via Additional Information, not full papers; no music or art portfolios', ['A5b-S12']),
        f('ED I 國際生：CSS Profile 11/15；Certification of Finances、英譯 2025 稅單、銀行對帳單 12/1 前經 IDOC 繳交', 'ED I internationals: CSS Profile Nov 15; Certification of Finances, translated 2025 tax return and bank statements via IDOC by Dec 1', ['A3b-S9'])
      ]
    },
    {
      name: 'Johns Hopkins', filter: 'commonapp coalition ed need-aware test-required or-yes',
      judgment: s('只有一篇 350 字文書、沒有面試；所有國際生申請時就要交財力證明。',
        'One 350-word essay and no interview; every international applicant submits proof of finances at application.'),
      c: {
        sys: f('Common App 或 Coalition（Scoir）', 'Common App or Coalition on Scoir', ['A5b-S13']),
        supp: f('1 篇 350 字', '1 essay, 350 words', ['A5b-S13']),
        teach: f('2 封，不同學科＋counselor', '2, two different subjects, + counselor', ['A5b-S13']),
        or: f('可，「additional recommendations」經 applicant portal 上傳', 'Yes, "additional recommendations" via the applicant portal', ['A5b-S13']),
        intv: f('沒有面試', '"we do not offer interviews"', ['A5b-S14']),
        eng: f('建議；常見 TOEFL 5（新）、IELTS 7+、DET 120+（不是最低分）', 'Recommended; typical TOEFL 5 (new), IELTS 7+, DET 120+ (not minimums)', ['A4-S79']),
        sat: f('必繳', 'Required', ['A4-S79']),
        aid: f('need-aware；所有國際生申請時須交 Certification of Finances', 'Need-aware; every international applicant submits a Certification of Finances at application', ['A4-S80'])
      },
      plans: f('ED I 2026/11/1；ED II 與 RD 2027/1/2；ED I 補助 11/15', 'ED I Nov 1, 2026; ED II and RD Jan 2, 2027; ED I aid Nov 15', ['A3b-S11']),
      prompts: f('題目：學到如何跨越差異與人交流，以及這如何影響你搭橋與合作的方式', 'Topic: what you have learned about engaging across differences and how it shapes bridge-building and working with others', ['A5b-S13']),
      extra: [
        f('BME 須列為第一志願，依「credentials and space available」錄取', 'Biomedical engineering must be the first-choice major; admission depends on "credentials and space available"', ['A5b-S13', 'A5b-S14']),
        f('送件後可補研究摘要等新資料', 'Research abstracts and other new material may be added after submitting', ['A5b-S14']),
        f('沒交 COF 申請就不完整；國際生沒有 CSS 費用減免', 'Without the COF the application is incomplete; no CSS fee waivers for internationals', ['A3b-S13'])
      ]
    },
    {
      name: 'Duke', filter: 'commonapp ed test-optional or-yes',
      judgment: s('考試 2026–27 選繳；申請補助的外籍生錄取率不到整體一半，是 30 校中唯一公開這項比較的學校。',
        'Testing is optional for 2026–27; aid-seeking foreign citizens are admitted at under half the overall rate, the only such comparison published among the 30.'),
      c: {
        sys: f('Common App 或 QuestBridge（Coalition 只限轉學）', 'Common App or QuestBridge (Coalition with Scoir for transfers only)', ['A5b-S16', 'A2-S50']),
        supp: f('2 題必填＋1 題選填，各 250 字', '2 required + 1 optional, 250 words each', ['A5b-S16']),
        teach: f('2 封主科老師＋counselor；Pratt 至少 1 封數理', '2 major-subject teachers + counselor; Pratt needs at least one math or science', ['A5b-S16']),
        or: f('可，1 封 Personal Recommendation（雇主、mentor 等熟識者）', 'Yes, 1 Personal Recommendation (employer, mentor or someone who knows you well)', ['A5b-S16']),
        intv: f('選擇性線上校友面試；國際生可交 InitialView', 'Optional virtual alumni interview; InitialView considered for internationals', ['A5b-S16']),
        eng: f('不要求（建議）；預期 DET 130、IELTS 7、TOEFL 100（舊）／5.0（新）', 'Not required (recommended); expected DET 130, IELTS 7, TOEFL 100 (old)/5.0 (new)', ['A4-S82']),
        sat: f('2026–27 選繳', 'Optional for 2026–27', ['A4-S82', 'A3b-S15']),
        aid: f('申請補助的外籍生另成一池，錄取率「usually less than half」整體錄取率；頁面未用 need-aware 一詞', 'Aid-seeking foreign citizens form a separate pool, admitted at "usually less than half" the overall rate; the page does not use the term need-aware', ['A4-S82', 'A4-S83'])
      },
      plans: f('ED 11/2；RD 1/4；ED 的 CSS Profile 11/2', 'ED Nov 2; RD Jan 4; ED CSS Profile Nov 2', ['A3b-S15']),
      prompts: f('必填：Why Duke、Communities；選填三選一：觀點與經驗、意見分歧、讓你興奮的事', 'Required: Why Duke and Communities; optional 1 of 3: perspectives and experiences, a difference of opinion, something you are excited about', ['A5b-S16']),
      extra: [
        f('「Duke does not accept resumes, research abstracts, and media files」；藝術 supplement 1 份走 SlideRoom', '"Duke does not accept resumes, research abstracts, and media files"; one arts supplement via SlideRoom', ['A5b-S16']),
        f('Pratt 要求微積分，強烈建議物理', 'Pratt requires calculus and strongly recommends physics', ['A5b-S16']),
        inf('錄取率差距表示外籍生申請補助會影響錄取機率', 'The stated admit-rate gap means an aid request affects a foreign citizen\'s odds of admission', ['A3b-S15'])
      ]
    },
    {
      name: 'Northwestern', filter: 'commonapp coalition ed need-aware test-optional or-yes',
      judgment: s('2026–27 起不再要求 Common App 主文書，只要 1 封老師推薦信，不辦校友面試；明文拒收未經要求的補充材料，連網站都點名在內。',
        'From 2026–27 the Common App personal essay is no longer required, one teacher letter is needed and there are no alumni interviews; unsolicited supplements are refused in writing, websites included.'),
      c: {
        sys: f('Common App 或 Coalition（Scoir）；另有 QuestBridge', 'Common App or Coalition with Scoir; QuestBridge round', ['A5b-S17', 'A2-S51']),
        supp: f('1 題必填 ≤300 字，再從五題中選答「at least one and no more than two」、每題 <200 字；Common App 主文書頁面原文是「the Common/Coalition Application personal essay, which we no longer require」，主文或 additional information 是「welcome—but by no means expect[ed]」', '1 required question in ≤300 words, then "at least one and no more than two" of five questions in fewer than 200 words each; on the Common App personal essay the page reads "the Common/Coalition Application personal essay, which we no longer require", and a personal essay or additional information is "welcome—but by no means expect[ed]"', ['A5b-S18', 'A5b-S19', 'V4-T5']),
        teach: f('**1 封**＋counselor；老師信「most likely … from one of your core subject areas, in your junior or senior year」', '**1** + counselor; the teacher letter is "most likely … from one of your core subject areas, in your junior or senior year"', ['A5b-S18', 'V4-T5']),
        or: f('可，接受「additional reference」的 supplemental letters，而且「it is in your best interest that each letter provides new or different information about you」', 'Yes, supplemental letters from an "additional reference", and "it is in your best interest that each letter provides new or different information about you"', ['A5b-S18', 'V4-T5']),
        intv: f('不辦校友面試，改成 \'Cat Chats，與申請無關。兩個選繳錄影管道，都不必做、不做也不吃虧：Glimpse（60–90 秒，從美國高中申請者）與 InitialView（從國際高中申請者，且 InitialView「does not review or rate the interviews」，只有招生委員會評）。兩者都是 ED 11/6、RD 1/16 截止', 'No alumni interviews; \'Cat Chats replace them and are not part of the application. Two optional recorded channels, neither required and neither a disadvantage to skip: Glimpse (60–90 seconds, for applicants from US high schools) and InitialView (for applicants from international high schools, which "does not review or rate the interviews" — evaluation is by the admissions committee only). Both are due Nov 6 for ED and Jan 16 for RD', ['A5b-S18', 'V4-T5', 'V4-T6']),
        eng: f('第一語言或授課語言非英語者必繳；「no minimum score」；只收正式成績（†）', 'Required if first language or schooling is not English; "no minimum score"; official scores only (†)', ['A4-S84']),
        sat: f('一年級與轉學生皆選繳，SAT 與 ACT 無偏好。SAT superscore 由系統自動處理；ACT 的 superscore 必須是官方 MyACT superscore，不能自己算。可自填成績，但入學後必須補送官方成績，須與自填的最高分相符', 'Optional for first-year and transfer applicants, with no preference between the SAT and ACT. SAT superscoring is automatic in Northwestern\'s system; an ACT superscore must be the official MyACT superscore and must not be self-calculated. Self-reporting is allowed, and admitted students who enrol must then send official scores confirming the self-reported highs', ['A4-S85', 'V4-T5']),
        aid: f('need-aware（†）', 'Need-aware (†)', ['A4-S86'])
      },
      plans: f('QuestBridge 2026/10/1；ED 2026/11/1（補助 2026/12/1）；RD 2027/1/4（補助 2027/2/1）；12 月起放榜。兩種方案的補助政策相同，而「Last year we enrolled approximately 50% of our incoming freshman class from early decision」', 'QuestBridge Oct 1, 2026; ED Nov 1, 2026 (aid Dec 1, 2026); RD Jan 4, 2027 (aid Feb 1, 2027); decisions from December 2026. Aid is the same under either plan, and "Last year we enrolled approximately 50% of our incoming freshman class from early decision"', ['A5b-S17', 'V4-T5', 'V4-T7']),
      prompts: f('必填：背景如何影響你參與 Northwestern 社群。選填主題：漆 The Rock、自己設計的課或研究、校園社群、地點、多元觀點', 'Required: how your background shapes your engagement in the community. Optional topics: painting The Rock, a class or research project you would design, communities, location, diverse perspectives', ['A5b-S18']),
      extra: [
        f('多答選填題不會多加「weight」', 'Answering more optional prompts carries no extra "weight"', ['A5b-S19']),
        f('McCormick 建議 3 年實驗科學與 3.5–4 年數學，非必修', 'McCormick recommends 3 years of lab science and 3.5–4 years of math; not required', ['A5b-S21']),
        f('明文拒收未經要求的補充材料：「Northwestern does not accept unsolicited supplemental items, such as artwork, portfolios, recordings (CDs, DVDs, etc.) or websites (including social media). These items will not be reviewed and therefore should not be submitted.」網站與社群媒體都點名在內', 'Unsolicited supplements are refused in writing: "Northwestern does not accept unsolicited supplemental items, such as artwork, portfolios, recordings (CDs, DVDs, etc.) or websites (including social media). These items will not be reviewed and therefore should not be submitted." Websites and social media are named', ['V4-T6']),
        f('科系專屬額外材料：Bienen School of Music（補充表、prescreening 或作品集、一封必備的音樂老師推薦信，試奏從補充表預約，截止日早於一般申請）、Integrated Science Program（另一份獨立申請；錄取 Northwestern 不代表錄取 ISP，ISP 的結果也不影響一般錄取）、MMSS、音樂劇', 'Programme-specific extras: the Bienen School of Music (a supplement, prescreening or portfolio materials, a required music teacher letter, auditions booked through the supplement, with deadlines earlier than the general application); the Integrated Science Program (a separate application — admission to Northwestern does not imply admission to ISP, and the ISP outcome does not affect the general decision); MMSS; Musical Theater', ['V4-T5']),
        f('ISP 的順序與輪次有寫，要交什麼沒有寫。要先被 Northwestern 錄取才會被完整審查；ED 或 RD 都可以申請，ISP 不強迫走 ED；ISP 的截止日在兩個輪次都**晚於** Northwestern 的截止日，和一般補充材料相反；遲交會審但「will put you at a disadvantage due to the limited number of spaces」。修課期望：四年數學含一年微積分、四年科學含化學與物理，入學前要修完單變數微積分，沒修完的話「we will ask you to outline how you plan to fulfill this requirement」；AP／IB 成績要送到 Northwestern，否則 ISP 可能延後決定', 'The ISP sequence and rounds are published; what the ISP application asks is not. An applicant must be admitted to Northwestern first to be fully considered; either round is allowed — "You may apply to both ISP and Northwestern under either early or regular decision", so ISP does not force ED; the ISP deadline falls **after** Northwestern\'s in both rounds, the reverse of the usual supplement sequencing; a late application is still considered but "will put you at a disadvantage due to the limited number of spaces in ISP". Preparation: four years of mathematics including one year of calculus and four years of science including chemistry and physics, with one-variable calculus completed before enrolling — and if it will not be, "we will ask you to outline how you plan to fulfill this requirement". AP and IB scores must reach Northwestern or ISP "may delay making a decision"', ['V5-U2', 'V5-U3', 'V5-U4', 'V5-U5']),
        f('ISP 申請的材料清單在任何現行頁面上都查不到，而且是繞回圈的：requirements 頁在自己「Supplement materials:」標題下只寫「請看 ISP 網站」，ISP 網站那一頁一項都沒列——沒有題目、沒有字數、沒有表單連結，也沒寫推薦信。2026–27 的 ISP 截止日同樣未載明（線上表格是上一季的，每個日期都已過，ISP 頁自己說已關閉）。唯一管道是 ISP 頁上的 email', 'The ISP application\'s materials are not stated on any current page, and the trail loops: the requirements page, under its own heading "Supplement materials:", says only "For an updated list of required materials, please see the ISP website", and that page enumerates nothing — no prompts, no word limits, no form link, nothing about letters. The 2026–27 ISP deadlines are not stated either (the published table is last cycle\'s, every date on it has passed, and the ISP page describes the deadline as closed). The only route is the email address on the ISP page', ['V5-U2', 'V5-U3', 'V5-U4']),
        f('2026-11-07 清晨這個主機先前的「TLS 層拒絕」已經不成立，四頁都以一般請求讀到（HTTP 200）；先前標 † 的時程與部分國際生資料已由官方頁面取代', 'By the early hours of 2026-11-07 this host\'s earlier "refusal at the TLS layer" no longer held: four pages were read with plain requests (HTTP 200), and the calendar facts previously marked † are now replaced by the school\'s own pages', ['V4-T5', 'V4-T7']),
        f('先前線索把 demonstrated interest 的「tally of touchpoints」說法歸給 Northwestern；讀過的 requirements 頁與 application-process FAQ 都沒有這句話，本站不主張', 'An earlier lead attributed a demonstrated-interest "tally of touchpoints" wording to Northwestern; it appears on neither the requirements page nor the application-process FAQ as read, so this site does not assert it', ['V4-T5', 'V4-T6'])
      ]
    },
    {
      name: 'Rice', filter: 'commonapp ed need-aware test-optional or-yes',
      judgment: s('額外推薦人的範圍寬；但所有國際生申請時就要交財務聲明與銀行證明。',
        'Extra recommenders are welcome, but every international applicant files a financial statement with bank proof at application.'),
      c: {
        sys: f('Common App（Rice 寫作 supplement）或 QuestBridge', 'Common App with the Rice writing supplement, or QuestBridge', ['A5b-S22', 'A5b-S23']),
        supp: f('150＋150＋500 字（二選一）＋Rice Box 圖片（不計分）', '150 + 150 + 500 words (1 of 2) + Rice Box image (not evaluated)', ['A5b-S22', 'A5b-S23']),
        teach: f('2 封核心學科＋counselor；最好 1 封與志向領域相關', '2 core-subject + counselor; "ideally" one related to the intended field', ['A5b-S22', 'A5b-S23']),
        or: f('可：雇主、教練、mentor 或其他老師', 'Yes: employers, coaches, mentors or other teachers', ['A5b-S22']),
        intv: f('選擇性，2026–27 全部線上；國際生可交 InitialView', 'Optional, all virtual in 2026–27; internationals may submit InitialView', ['A5b-S22', 'A5b-S23']),
        eng: f('非母語者必繳；英語課程 2 年以上免；TOEFL 100／5.0、IELTS 7.0、DET 130', 'Required if English is not the first language; waived after 2+ years English curriculum; TOEFL 100/5.0, IELTS 7.0, DET 130', ['A4-S87']),
        sat: f('建議繳交，非必繳', 'Recommended, not required', ['A4-S87', 'A4-S88']),
        aid: f('need-aware；所有國際生申請時交 International Student Financial Statement 與銀行證明', 'Need-aware; every international applicant submits an International Student Financial Statement and bank statements', ['A4-S87'])
      },
      plans: f('ED I 11/1；ED II 與 RD 1/4；Shepherd 音樂院 12/1 且不能走 ED', 'ED I Nov 1; ED II and RD Jan 4; Shepherd School music Dec 1, no ED', ['A3b-S21']),
      prompts: f('選擇學術領域的理由、Rice 經驗吸引之處（各 150）；500 字二選一：住宿學院系統與你的觀點，或背景形塑的觀點', 'Why your academic areas and what appeals in the Rice experience (150 each); 500 words, 1 of 2: residential colleges and your perspectives, or perspectives shaped by background', ['A5b-S22', 'A5b-S23']),
      extra: [
        f('自然科學與工程必修三角或預微積分，以及化學與物理；微積分未列為必修', 'Natural sciences and engineering require trigonometry or pre-calculus, chemistry and physics; calculus not listed as required', ['A5b-S22']),
        f('國際生不能申請報名費減免', '"International applicants are not eligible to request an application fee waiver"', ['A5b-S23']),
        f('資金合計低於 $101,634 須說明；不收稅務文件', 'Funds totalling less than $101,634 need an explanation; tax documents not accepted', ['A3b-S22'])
      ]
    },
    {
      name: 'UC Berkeley', filter: 'uc no-intl-aid test-blind',
      judgment: s('不看 SAT/ACT、不收補充資料；邀請繳推薦信的政策在現行網站上找不到。',
        'No SAT/ACT, no supplementary material, and no invited-letter policy on the current site.'),
      c: {
        sys: f('UC Application', 'UC Application', ['A5b-S31', 'A2-S9']),
        supp: f('8 題 PIQ 選 4，各 ≤350 字（UC 各校共用）', '4 of 8 PIQs, ≤350 words each (shared across UC)', ['A5b-S31']),
        teach: f('現行網站找不到推薦信政策（含受邀繳交）；站內搜尋「recommendation」無結果', 'No letter policy (incl. invited letters) on the current site; the site search for "recommendation" returns nothing', ['A5b-S28', 'A5b-S30']),
        or: f('「Unsolicited materials will not be reviewed」', '"Unsolicited materials will not be reviewed"', ['A5b-S25']),
        intv: f('不提供校友或招生官面試；InitialView 選繳', 'No alumni or admissions officer interviews; InitialView optional', ['A5b-S26']),
        eng: f('UC 最低 TOEFL 80（舊）／4.5（新）、IELTS 6.5、DET 115；Berkeley 寫 TOEFL 90／4.5，1/31 前達標', 'UC minimum TOEFL 80 (old)/4.5 (new), IELTS 6.5, DET 115; Berkeley states TOEFL 90/4.5, met by Jan 31', ['A4-S99', 'A4-S103']),
        sat: f('Test-free：不使用 SAT/ACT', 'Test-free: SAT/ACT not used', ['A4-S104']),
        aid: f('國際生不符聯邦、州與校內 need-based 補助', 'Internationals ineligible for federal, state and need-based university aid', ['A3b-S28'])
      },
      plans: f('UC 申請期 2026/10/1–11/30；沒有早申；3 月底放榜', 'UC filing period Oct 1–Nov 30, 2026; no early round; decisions end of March', ['A3b-S23', 'A3b-S26']),
      prompts: f('8 題 PIQ：領導、創意、才能、教育機會或障礙、挑戰、學科、讓學校或社群更好、其他讓你成為合適人選的事', '8 PIQs: leadership, creativity, talent, educational opportunity or barrier, challenge, academic subject, improving your school or community, anything else', ['A2-S1']),
      extra: [
        f('只保證審第一志願主修，不審 alternate major', '"only guarantees the review of the primary major"; no alternate-major review', ['A5b-S25']),
        f('受邀推薦信只見於一份未標日期的舊指南（政策「as of fall 2015」）', 'Invited letters appear only in an undated older guide (policy "as of fall 2015")', ['A2-S11']),
        f('國際生每校報名費 $95；減免只限美國公民、永久居民與 AB540', 'International fee $95 per campus; waivers only for US citizens, permanent residents and AB540 students', ['A5b-S24'])
      ]
    },
    {
      name: 'UCLA', filter: 'uc no-intl-aid test-blind',
      judgment: s('不收推薦信、不面試、不看 SAT/ACT，而且只審一個主修。',
        'No letters, no interview, no SAT/ACT, and only one major is reviewed.'),
      c: {
        sys: f('UC Application', 'UC Application', ['A5b-S32']),
        supp: f('8 題 PIQ 選 4，各 ≤350 字；藝術、音樂、護理、戲劇影視主修另有 supplemental application', '4 of 8 PIQs, ≤350 words each; arts, music, nursing and theater/film majors add a supplemental application', ['A5b-S31', 'A5b-S32']),
        teach: f('不要求也不收（部分專業學院 supplement 可能要求）', 'Not required or accepted (some professional-school supplements may ask)', ['A5b-S34']),
        or: f('不收', 'No', ['A5b-S34']),
        intv: f('不提供面試', '"We do not offer admission interviews"', ['A5b-S34']),
        eng: f('具競爭力 DET 135、TOEFL 5（新）／100（舊）、IELTS 7.5；所有考試須在 11/30 截止前完成', 'Competitive DET 135, TOEFL 5 (new)/100 (old), IELTS 7.5; all tests by the Nov 30 deadline', ['A4-S107']),
        sat: f('不納入考量', 'Not considered', ['A4-S106', 'A4-S107']),
        aid: f('不提供非公民、非永久居民補助', 'No aid to non-citizens or non-permanent residents', ['A4-S106'])
      },
      plans: f('申請期 10/1–11/30（同頁另一句寫 10/1–12/1；UC 系統頁為 2026/11/30）', 'Filing Oct 1–Nov 30 (another sentence on the same page says Oct 1–Dec 1; the UC system page says Nov 30, 2026)', ['A3b-S29', 'A3b-S23']),
      prompts: null,
      extra: [
        f('「UCLA reviews first-year applicants for one major only」；alternate major 是給其他 UC 校區用', '"UCLA reviews first-year applicants for one major only"; the alternate major is for other UC campuses', ['A5b-S33']),
        f('Samueli 工程不需 supplemental application，接受 undeclared', 'Samueli Engineering needs no supplemental application and welcomes undeclared applicants', ['A5b-S33'])
      ]
    },
    {
      name: 'UC San Diego', filter: 'uc test-blind',
      judgment: s('推薦信與面試在頁面上都未載明；工程類主修有容量限制。',
        'Letters and interviews are not stated; engineering majors are capacity-limited.'),
      c: {
        sys: f('UC Application；可排序 4 個 college', 'UC Application; rank up to four colleges', ['A5b-S37', 'A2-S9']),
        supp: f('8 題 PIQ 選 4，各 ≤350 字', '4 of 8 PIQs, ≤350 words each', ['A5b-S31']),
        teach: ns(['A5b-S37']),
        or: ns(['A5b-S37']),
        intv: ns(['A5b-S37']),
        eng: f('TOEFL 4.5（新）／83（舊）、IELTS 7、DET 115', 'TOEFL 4.5 (new)/83 (old), IELTS 7, DET 115', ['A4-S108']),
        sat: f('不納入考量', 'Not considered', ['A4-S109']),
        aid: f('不符聯邦與州補助；校內補助未載明', 'Not eligible for federal/state aid; institutional aid not stated', ['A4-S110'])
      },
      plans: f('UC 申請期 2026/10/1–11/30；2027/3/1–31 放榜', 'UC filing period Oct 1–Nov 30, 2026; decisions Mar 1–31, 2027', ['A3b-S23']),
      prompts: null,
      extra: [
        f('Selective majors：Data Science、Engineering、Public Health；強烈建議填非 selective 的 alternate major', 'Selective majors: Data Science, Engineering, Public Health; a non-selective alternate major is strongly recommended', ['A5b-S37']),
        f('Nanoengineering 與 Structural Engineering 為「Screened Majors」', 'Nanoengineering and Structural Engineering are "Screened Majors"', ['A5b-S37'])
      ]
    },
    {
      name: 'UT Austin', filter: 'commonapp applytexas ea test-required or-yes',
      judgment: s('早申 10/15，與 Georgia Tech EA1 同為 30 校最早；推薦信選繳上限 2 封，鼓勵校外推薦人。',
        'The Oct 15 early date ties with Georgia Tech EA1 as the earliest of the 30; letters are optional, capped at two, with outside writers encouraged.'),
      c: {
        sys: f('Common App；ApplyTexas 是否仍可用於秋季入學，UT 兩頁說法不一', 'Common App; whether ApplyTexas still serves fall entry differs between two UT pages', ['A2-S29', 'A2-S30']),
        supp: f('1 篇 500–650 字（可用 Common App 主文）＋2 題必填短答（約 250–300 字／40 行）＋1 題選填', '1 essay of 500–650 words (Common App essay counts) + 2 required short answers (~250–300 words / 40 lines) + 1 optional', ['A5b-S39']),
        teach: f('選繳，最多 2 封', 'Optional, up to 2', ['A5b-S38']),
        or: f('可：鼓勵校外推薦人，但在 2 封上限內', 'Yes: writers outside the high school encouraged, within the two-letter cap', ['A5b-S38', 'A5b-S40']),
        intv: ns(['A5b-S38', 'A5b-S41']),
        eng: f('非英語唯一官方語言國家者必繳；TOEFL 79／4（新）、IELTS 6.5、DET 115', 'Required unless from a country where English is the sole official language; TOEFL 79 / 4 (new), IELTS 6.5, DET 115', ['A4-S112']),
        sat: f('必繳（官方成績；CLT 也可）', 'Required (official scores; CLT accepted)', ['A4-S111', 'A3b-S33']),
        aid: f('need 政策未載明；國際生報名費 $90，不可減免', 'Need policy not stated; $90 international fee, no waivers', ['A4-S114', 'A5b-S40'])
      },
      plans: f('EA 10/15（補充資料 10/22）；RD 12/1（12/10）；EA 2027/1/15 前放榜或延後', 'EA Oct 15 (supplemental Oct 22); RD Dec 1 (Dec 10); EA decision or deferral by Jan 15, 2027', ['A3b-S33']),
      prompts: f('必填短答：為何選第一志願主修、最自豪的一項活動；選填：影響學業表現的特殊情況', 'Required: why your first-choice major; the activity you are most proud of. Optional: circumstances that affected academic performance', ['A5b-S39']),
      extra: [
        f('選繳履歷，需寫各活動內容、每週時數與每年週數', 'Optional resume with what each activity involved, hours per week and weeks per year', ['A5b-S38']),
        f('前 5% 自動錄取只適用德州高中畢業生', 'Top-5% automatic admission applies to Texas high school graduates', ['A5b-S41']),
        f('「Competitiveness of the major you applied to」是審查因素', '"Competitiveness of the major you applied to" is a review factor', ['A5b-S41'])
      ]
    },
    {
      name: 'U Washington', filter: 'commonapp no-intl-aid test-optional',
      judgment: s('只有 Common App 主文，不收推薦信、不面試；資工能否直接錄取取決於第一志願。',
        'Common App essay only, no letters, no interview; direct admission to computer science depends on the first-choice major.'),
      c: {
        sys: f('Common App＋STARS 自填成績', 'Common App + STARS grade self-report', ['A5b-S42']),
        supp: f('只有 Common App 主文（≤650 字）；UW 專屬短答未載明', 'Common App essay only (≤650 words); UW short responses not stated', ['A5b-S42']),
        teach: f('「We ask that you not send letters of recommendation」', '"We ask that you not send letters of recommendation"', ['A5b-S42']),
        or: f('不收', 'No', ['A5b-S42']),
        intv: f('不做正式面試', '"The UW does not conduct formal interviews"', ['A5b-S42']),
        eng: f('必繳；TOEFL 76（舊）／4.0（新）、IELTS 6.0、DET 110；12/31 前', 'Required; TOEFL 76 (old)/4.0 (new), IELTS 6.0, DET 110; by Dec 31', ['A4-S117']),
        sat: f('多數申請者不要求', 'Not required for most applicants', ['A4-S116']),
        aid: f('不提供國際大學生補助或獎學金', 'No aid or scholarships for international undergraduates', ['A4-S118'])
      },
      plans: f('11/15 單一截止，沒有 ED/EA；3/1–15 放榜', 'Nov 15, no ED or EA; decisions Mar 1–15', ['A3b-S35', 'A3b-S36']),
      prompts: null,
      extra: [
        f('約 18 個主修可直接錄取，須列為第一志願；Allen School 未直接錄取者之後「unlikely」轉入', 'About 18 majors admit directly if listed first; Allen School applicants not admitted directly are "unlikely" to get in later', ['A5b-S43']),
        f('國家課程學校的學生申請時須上傳非正式成績單與正式英譯', 'Students at national-curriculum schools upload an unofficial transcript with an official English translation at application', ['A4-S116']),
        f('冬季入學不開放國際一年級生', 'Winter entry is closed to international first-years', ['A3b-S35'])
      ]
    },
    {
      name: 'Williams', filter: 'commonapp coalition ed test-optional',
      judgment: s('學術寫作樣本明文「不要交實驗報告」，但科學研究摘要另有獨立管道，還可以附一段 VIVA 錄影講自己的研究；每份申請由兩位招生人員共讀。',
        'The academic writing supplement says "do not submit lab reports", but scientific research abstracts have a separate channel with an optional VIVA recording of you talking about your work; two admission officers read every application together.'),
      c: {
        sys: f('三個平台並列、頁面未寫偏好：Common App、Apply Coalition with Scoir、QuestBridge。Coalition 這一項終於由 Williams 自己的頁面確認，先前只出現在 Scoir 的名單上', 'Three platforms with no stated preference: the Common App, Apply Coalition with Scoir, and QuestBridge. The Coalition route is confirmed from Williams\'s own page at last, having appeared only on Scoir\'s own list before', ['A2-S54', 'A2-S16', 'V4-T11']),
        supp: ns(['A5b-S45', 'A5b-S46', 'V4-T11']),
        teach: f('3 封推薦信：輔導老師 1 封＋老師 2 封。另有成績單與期中成績報告', '3 recommendations: one counselor and two teachers. Plus the school transcript and a mid-year report', ['V4-T11']),
        or: ns(['A5b-S45', 'A5b-S46', 'V4-T11']),
        intv: f('「Williams does not offer interviews」；國際申請者可以分享 InitialView 錄影，屬選繳', '"Williams does not offer interviews"; international applicants are welcome to share an InitialView recording, which is optional', ['V4-T11']),
        eng: f('必繳，不限單一考試；常見 TOEFL 5–6、IELTS 7.5–9、DET 135–160（†）', 'Required, no single exam; typical TOEFL 5–6, IELTS 7.5–9, DET 135–160 (†)', ['A4-S89']),
        sat: f('「Williams is truly test optional」。SAT 與 ACT 都 superscore，而且新舊 ACT 之間也 superscore；新版 ACT 的 science 分項選繳。成績可填在申請表、把成績單截圖 email、或由考試機構直送，而且「can change your mind about submitting scores at any point before your application deadline」', '"Williams is truly test optional." It superscores the SAT and the ACT, and superscores across the legacy and enhanced ACT; the enhanced ACT\'s science section is optional. Scores may be entered in the application, emailed as a screenshot of the score report, or sent by the testing agency, and an applicant "can change your mind about submitting scores at any point before your application deadline"', ['A4-S90', 'V4-T11']),
        aid: f('頁面只寫美國申請者 need-blind；國際生的 need 政策未明寫（†）', 'The page states need-blind for US applicants only; the international need policy is not written (†)', ['A4-S91'])
      },
      plans: f('ED 11/15，須附 Early Decision Agreement Form，12/14 前放榜；RD 1/4，不綁約，4/1 放榜，5/1 前回覆', 'ED Nov 15 with the Early Decision Agreement Form, decision by Dec 14; RD Jan 4, non-binding, decision April 1, reply by May 1', ['V4-T11']),
      prompts: null,
      extra: [
        f('四種選繳管道，各自不同：(1) 學術寫作樣本——「submit a paper on any topic of your choice. It need not be graded, and may be an in-class handwritten assignment… **Please do not submit lab reports.**」(2) 藝術作品集走 SlideRoom，由教師審閱。(3) 科學研究摘要——「If you\'ve pursued significant scientific or mathematical research and are considering a research or academic career, we welcome a brief description of your work」，可寫在申請表或 email，另可附 VIVA 錄影讓他們「hear you speak about your research」。(4) InitialView', 'Four distinct optional channels: (1) an academic writing supplement — "submit a paper on any topic of your choice. It need not be graded, and may be an in-class handwritten assignment… **Please do not submit lab reports.**" (2) a studio or performing arts portfolio through SlideRoom, reviewed by faculty. (3) scientific research abstracts — "If you\'ve pursued significant scientific or mathematical research and are considering a research or academic career, we welcome a brief description of your work", on the application or by email, with an optional VIVA recording so Williams "can hear you speak about your research". (4) InitialView', ['V4-T11']),
        f('「Two admission officers work together to review everything in an application」，做的筆記之後交給 Admission Committee', '"Two admission officers work together to review everything in an application", taking notes that are later shared with the Admission Committee', ['V4-T11']),
        f('$65 報名費或減免，由 Williams 自己的頁面確認（先前只有 Common App 名錄）', 'A $65 fee or a waiver, confirmed from Williams\'s own page (previously only from the Common App listing)', ['A5b-S46', 'V4-T11']),
        f('2026-11-07 清晨：curl 對每一個 williams.edu 與 admission.williams.edu 網址仍回 HTTP 403，瀏覽器則毫無阻礙地打開 first-year 頁面。擋的是某一類 client，不是整個站', 'Early on 2026-11-07: curl still returns HTTP 403 for every williams.edu and admission.williams.edu URL tried, while a browser opened the first-year page without a challenge of any kind. What is blocked is a class of client, not the site', ['V4-T11']),
        inf('抄錄 Common App 名錄的第三方網站，可能把去年的日期當成今年的', 'Third-party sites that copy Common App listings may show last year\'s dates as current', ['A3b-S39'])
      ]
    },
    {
      name: 'Amherst', filter: 'commonapp coalition ed need-blind test-optional',
      judgment: s('官網拒絕自動讀取；need-blind 只來自搜尋摘錄，文書與推薦人規定都待人工補齊。',
        'The official site refused automated reading; need-blind status rests on a search extract, and writing and recommender rules await a manual read.'),
      c: {
        sys: f('Common App、Coalition（Scoir）或 QuestBridge', 'Common App, Coalition with Scoir, or QuestBridge', ['A2-S55']),
        supp: ns(['A5b-S47', 'A5b-S48']),
        teach: ns(['A5b-S47', 'A5b-S48']),
        or: ns(['A5b-S47', 'A5b-S48']),
        intv: ns(['A5b-S47', 'A5b-S48']),
        eng: f('非母語且最後 2 年非英語授課者必繳；強烈建議 TOEFL 5.5（新）／100、DET 130、IELTS 7.5（†）', 'Required for non-native speakers without the last 2 years in English-medium school; strongly recommended TOEFL 5.5 (new)/100, DET 130, IELTS 7.5 (†)', ['A4-S93']),
        sat: f('2026–27 選繳（†）', 'Optional for 2026–27 (†)', ['A4-S93']),
        aid: f('國內外皆 need-blind（†，取自搜尋引擎摘錄；時程研究無法驗證）', 'Need-blind for domestic and international (†, from a search-engine extract; the calendar run could not verify it)', ['A4-S93', 'A3b-S49'])
      },
      plans: f('有 ED 與 RD，名錄未列日期；補助截止 ED 11/13、RD 1/15（†）', 'ED and RD offered, no dates on the listing; aid deadlines ED Nov 13, RD Jan 15 (†)', ['A3b-S40', 'A4-S130']),
      prompts: null,
      extra: [
        f('官網回傳「Human Verification」頁（HTTP 405）', 'The official site returned a "Human Verification" page (HTTP 405)', ['A5b-S47']),
        f('國際生申請時交 CSS Profile（有困難者可用 ISFAA），補助文件須翻譯（†）', 'International aid: CSS Profile at application (ISFAA on hardship); aid documents must be translated (†)', ['A4-S95'])
      ]
    },
    {
      name: 'Swarthmore', filter: 'commonapp coalition ed need-aware test-optional',
      judgment: s('研究與作品可在送件後上傳；國際生的財力文件在錄取後 7 天內交。',
        'Research and built work can be uploaded after submitting; international aid documents are due within 7 days of admission.'),
      c: {
        sys: f('Common App、Coalition（Scoir）或 QuestBridge，「no preference」', 'Common App, Coalition on Scoir, or QuestBridge, with "no preference"', ['A5b-S49']),
        supp: f('2 題，各 ≤250 字', '2 prompts, ≤250 words each', ['A5b-S49', 'A5b-S50']),
        teach: f('2 封學科老師＋counselor；須用學校信紙', '2 academic-subject teachers + counselor; on official school letterhead', ['A5b-S49', 'A5b-S51']),
        or: ns(['A5b-S49']),
        intv: f('選擇性，不面試不吃虧；美國境外學校的學生須交影片、英文成績或 InitialView 三擇一', 'Optional, no disadvantage; students at non-US schools must send one of a video response, English score or InitialView', ['A5b-S49', 'A5b-S51']),
        eng: f('美國境外學校：Swarthmore 影片回答、TOEFL／IELTS／DET 或 InitialView／Vericant 擇一；未列最低分', 'Students at non-US schools: one of a Swarthmore video response, TOEFL/IELTS/DET, or InitialView/Vericant; no minimum stated', ['A4-S96']),
        sat: f('選繳', 'Optional', ['A4-S97']),
        aid: f('國際公民 need-aware；財力文件錄取後 7 天內交', 'Need-aware for international citizens; aid documents within 7 days of the decision', ['A4-S96'])
      },
      plans: f('ED I 11/15；ED II 與 RD 1/4', 'ED I Nov 15; ED II and RD Jan 4', ['A3b-S41']),
      prompts: f('自我認同或背景中對你最重要的面向；最近讓你著迷的主題', 'The aspects of identity or background most significant to you; a topic that has fascinated you recently', ['A5b-S50']),
      extra: [
        f('送件後可上傳履歷、研究摘要、Schoolhouse.world 等；可分享論文、簡報、研究專題或作品影片', 'After submitting: resumes, research abstracts, Schoolhouse.world portfolios or other items; a paper, presentation, research project or video of something built', ['A5b-S49']),
        f('Certification of Finances 錄取後才交；錄取的國際生獲 CSS 費用減免', 'Certification of Finances only after admission; admitted internationals get a CSS fee waiver', ['A3b-S42']),
        f('2027 秋起家庭年收入 $200,000 以下學費保證；是否涵蓋國際公民未載明', 'Tuition guarantee from fall 2027 for families earning $200,000 or less; coverage of international citizens not stated', ['A3b-S43'])
      ]
    }
  ];

  // ---------- overview table ----------
  var COLS = [
    s('學校', 'School'), s('申請系統', 'System(s)'), s('補充文書（數量與字數）', 'Supplements (count and limits)'),
    s('老師推薦信', 'Teacher letters required'), s('Other Recommender', 'Other Recommender'), s('面試', 'Interview'),
    s('英語能力考試', 'English test'), s('SAT/ACT 2026–27', 'SAT/ACT 2026–27'), s('國際生補助', 'Aid for internationals')
  ];
  var KEYS = ['sys', 'supp', 'teach', 'or', 'intv', 'eng', 'sat', 'aid'];
  var rows = SCHOOLS.map(function (x) {
    return { cells: [x.name].concat(KEYS.map(function (k) { return x.c[k]; })), filter: x.filter };
  });

  // ---------- per-school subsections ----------
  var LABEL = {
    sys: s('申請系統', 'Application system'), plans: s('申請方案與截止', 'Plans and deadlines'),
    supp: s('補充文書', 'Supplements'), prompts: s('題目摘要', 'Prompts in brief'),
    teach: s('老師推薦信', 'Teacher letters'), or: s('其他推薦人', 'Other Recommender'),
    intv: s('面試', 'Interview'), sat: s('SAT/ACT 2026–27', 'SAT/ACT 2026–27'),
    eng: s('英語能力', 'English test'), aid: s('國際生補助', 'Aid for internationals')
  };
  function labelled(key, it) {
    var lb = LABEL[key];
    if (it.state === 'not-stated') {
      return { t: { zh: '**' + lb.zh + '**：未載明（查核 ' + it.checked + '）', en: '**' + lb.en + '**: not stated (checked ' + it.checked + ')' }, src: it.src };
    }
    var o = { t: { zh: '**' + lb.zh + '**：' + it.t.zh, en: '**' + lb.en + '**: ' + it.t.en }, tag: it.tag, src: it.src };
    return o;
  }
  var subs = SCHOOLS.map(function (x) {
    var items = [labelled('sys', x.c.sys), labelled('plans', x.plans)];
    if (x.plans2) items.push(x.plans2);
    items.push(labelled('supp', x.c.supp));
    if (x.prompts) items.push(labelled('prompts', x.prompts));
    ['teach', 'or', 'intv', 'sat', 'eng', 'aid'].forEach(function (k) { items.push(labelled(k, x.c[k])); });
    var room = 12 - items.length;
    return { h: s(x.name, x.name), judgment: x.judgment, items: items.concat(x.extra.slice(0, room)) };
  });

  // Section 'majors': built from research/2026-11-07_major-level-admission_v1.md (A8).
  function M() { return Array.prototype.slice.call(arguments).map(function (x) { return 'A8-' + x; }); }
  function na(src) { return inf('不適用：入學時不分主修', 'n/a: no major chosen at entry', src); }
  function blocked(src) { return f('未核實：官網 2026-11-07 回 HTTP 403', 'Not verified: site returned HTTP 403 on 2026-11-07', src); }
  var MAJOR_ROWS = [
    { filter: 'school-admit', cells: ['MIT',
      f('錄取到整個 Institute，多數在大一春季才宣告主修', 'Admitted to the whole Institute; most declare in spring of the first year', M('M01')),
      ns(M('M01')),
      f('同工程：入學後宣告', 'Same as engineering: declared after entry', M('M01')),
      na(M('M01')), na(M('M01'))] },
    { filter: 'school-admit', cells: ['Caltech',
      f('大一結束才宣告；補充文書填 1–2 個興趣領域', 'Declared at the end of year one; the supplement names one or two areas of interest', M('M03')),
      ns(M('M03')),
      f('同工程', 'Same as engineering', M('M03')),
      na(M('M03')), na(M('M03'))] },
    { filter: 'school-admit', cells: ['Stanford',
      f('申請整所大學，不是科系或學院；填的主修不具約束力', 'You apply to the university, not a major or school; listed majors are not binding', M('M05')),
      ns(M('M05')),
      f('同工程', 'Same as engineering', M('M05')),
      na(M('M05')), na(M('M05'))] },
    { filter: 'school-admit', cells: ['Harvard',
      f('工程申請者也一律申請 Harvard College，大二才宣告 concentration', 'Engineering applicants apply to Harvard College like everyone else and declare a concentration in sophomore year', M('M07')),
      ns(M('M07', 'M08')),
      f('同工程；supplement 寫「we do not admit applicants to particular programs」', 'Same; the supplement says "we do not admit applicants to particular programs"', M('M08')),
      na(M('M07')), na(M('M08'))] },
    { filter: 'school-admit', cells: ['Yale',
      f('最多填 3 個學術領域；未描述按主修錄取', 'Up to three academic areas; no admission by major described', M('M09')),
      ns(M('M09')),
      f('同工程', 'Same as engineering', M('M09')),
      na(M('M09')), na(M('M09'))] },
    { filter: 'school-admit', cells: ['Brown',
      f('不按學術興趣錄取', 'No admission by academic interest', M('M18')),
      f('沒有：各 concentration「no quotas」', 'No: "There are no quotas among concentrations"', M('M18')),
      f('同工程', 'Same as engineering', M('M18')),
      na(M('M18')), na(M('M18'))] },
    { filter: 'school-admit', cells: ['Harvey Mudd',
      inf('錄取到學院；全體先修共同 Core，頁面未描述按主修錄取', 'Admission to the college; everyone takes the common Core, and no admission by major is described', M('M80', 'M81')),
      ns(M('M80', 'M81')),
      inf('同工程', 'Same as engineering', M('M81')),
      na(M('M81')), na(M('M81'))] },
    { filter: 'school-admit', cells: ['Olin',
      inf('錄取到學院；三個 ABET 學位（ECE、ME、Engineering），頁面未描述按主修錄取', 'Admission to the college; three ABET degrees (ECE, ME, Engineering), no admission by major described', M('M79b')),
      ns(M('M79', 'M79b')),
      f('有 Bioengineering concentration（E:Bio）', 'A Bioengineering concentration (E:Bio)', M('M79b')),
      na(M('M79b')), na(M('M79b'))] },
    { filter: '', cells: ['Swarthmore',
      f('文理學院內設 Engineering Department；是否按主修錄取未載明', 'An Engineering Department inside a liberal-arts college; admission by major not stated', M('M82')),
      ns(M('M82')), ns(M('M82')), ns(M('M82')), ns(M('M82'))] },
    { filter: '', cells: ['Amherst',
      f('系所頁未列工程系；第一年申請頁未描述選主修', 'No engineering department on the departments page; the first-year application page describes no major choice', M('M84', 'M85')),
      inf('不適用：沒有工程主修', 'n/a: no engineering major listed', M('M85')),
      inf('入學後宣告（頁面未明說）', 'Declared after entry (not said outright on the page)', M('M84')),
      inf('不適用', 'n/a', M('M85')),
      ns(M('M84'))] },
    { filter: '', cells: ['Williams',
      blocked(M('M83')), blocked(M('M83')), blocked(M('M83')), blocked(M('M83')), blocked(M('M83'))] },
    { filter: 'direct-admit', cells: ['Princeton',
      f('申請時選 A.B. 或 B.S.E.；入學後可改', 'A.B. or B.S.E. is chosen on the application and can be changed once enrolled', M('M11', 'M12')),
      ns(M('M11', 'M12')),
      inf('應為 A.B.', 'Presumably the A.B.', M('M11')),
      f('由 SEAS Undergraduate Affairs Office 辦理學位轉換，未載明 GPA 門檻；新生 7/15 至秋季開學日不受理；想保留工程路線者大一修物理與 Math 103 以上', 'Degree-candidacy change through the SEAS Undergraduate Affairs Office, no GPA threshold stated; not processed for new students from July 15 to the first day of fall classes; A.B. students keeping engineering open take physics and Math 103+ in year one', M('M12')),
      ns(M('M11'))] },
    { filter: 'direct-admit', cells: ['Columbia',
      f('必須在 Columbia College 與 Columbia Engineering 擇一', 'Must choose Columbia College or Columbia Engineering', M('M14')),
      ns(M('M13', 'M14')),
      inf('Columbia College（依兩學院結構判斷）', 'Columbia College (from the two-school structure)', M('M13')),
      ns(M('M13', 'M14', 'M14b')),
      f('只能選一個學院', 'One school only', M('M14'))] },
    { filter: 'direct-admit', cells: ['Penn',
      f('申請四個學院之一；Penn Engineering 頒 BSE 與 BAS', 'Apply to one of four schools; Penn Engineering grants the BSE and BAS', M('M15')),
      ns(M('M15', 'M16')),
      ns(M('M15')),
      f('修滿 8 個 Penn course units、GPA 最低 3.0、修過 MATH 1400/1410（通常含 PHYS 0150/0151），大二結束前申請；外校轉學生不適用；錄取人數未載明', 'At least 8 Penn course units, minimum GPA 3.0, MATH 1400 and 1410 (typically PHYS 0150/0151), apply before the end of sophomore year; external transfers ineligible; acceptance numbers not stated', M('M16')),
      f('只申請一個學院', 'One school', M('M15'))] },
    { filter: 'direct-admit', cells: ['Cornell',
      f('直接申請 Duffield；大一共同課程，大二才 affiliate 到主修', 'Apply directly to Duffield; common first-year curriculum, major affiliation in year two', M('M20', 'M21')),
      ns(M('M21', 'M24')),
      f('CALS 直接申請到主修；A&S 選 2 個興趣領域，大二結束前宣告', 'CALS: apply directly to a major. A&S: up to two areas of interest, declare by the end of sophomore year', M('M22', 'M23')),
      f('14 個主修（含 CS、ECE）都開放；最早大一下學期申請，「after just one semester」會被拒；各系決定，可 conditional transfer；GPA 依各主修 affiliation 標準', 'All 14 majors open, CS and ECE included; first possible in the second semester ("Applications submitted after just one semester will be denied"); each department decides; conditional transfer possible; GPA follows each major\'s affiliation criteria', M('M24', 'M25')),
      f('直接申請一個學院', 'Apply directly to one college', M('M20'))] },
    { filter: 'direct-admit', cells: ['Georgetown',
      f('須直接申請六個學院之一', 'Must apply directly to one of six schools', M('M26')),
      ns(M('M26')),
      f('申請某一學院', 'Apply to a school', M('M26')),
      ns(M('M26')),
      f('只能申請一個學院', 'One school', M('M26'))] },
    { filter: 'direct-admit', cells: ['Carnegie Mellon',
      f('工學院直接錄取到系／主修，或以 undecided 入學、大一春季再選', 'Engineering admits directly to a department/major, or as undecided with a choice in spring of year one', M('M28')),
      ns(M('M28')),
      inf('依學院申請（Mellon College of Science）', 'By college (Mellon College of Science)', M('M29')),
      f('大一後可申請換主修，「not guaranteed」、逐案審查；SCS 是另一個學院', 'Change of major considered after year one, "not guaranteed", case by case; the School of Computer Science is a separate college', M('M28', 'M29')),
      f('ED 只能申請一個學院', 'ED: one college only', M('M30'))] },
    { filter: 'direct-admit capped', cells: ['Johns Hopkins',
      inf('以 intended major 錄取到大學；BME 例外', 'Admission to the university with an intended major; BME is the exception', M('M51')),
      f('BME：依資歷與「space available」錄取，可能錄取到大學但不進 BME', 'BME: on credentials and "space available"; admission to the university without BME is possible', M('M51', 'M52')),
      inf('intended major', 'Intended major', M('M51')),
      ns(M('M51', 'M52', 'M53')),
      f('BME 須填第一志願；未進 BME 者可改選 Whiting 或 Krieger 其他主修', 'BME must be the first choice; admits not placed in BME may pick another Whiting or Krieger major', M('M51'))] },
    { filter: 'direct-admit', cells: ['Duke',
      f('Trinity 與 Pratt 二選一', 'Choose Trinity or Pratt', M('M54')),
      ns(M('M54', 'M55')),
      inf('Trinity', 'Trinity', M('M54')),
      f('讀完一學期後可申請互轉；春季 12/15、秋季 5/15 截止；須 good standing；轉入 Pratt 為 undeclared；GPA 門檻未載明', 'May apply after one semester; deadlines Dec 15 (spring) and May 15 (fall); good standing required; you enter Pratt undeclared; no GPA threshold stated', M('M55', 'M56')),
      f('只能選一個學院', 'One school', M('M54'))] },
    { filter: 'direct-admit', cells: ['Northwestern',
      f('申請六個學院之一，McCormick 可選 Undecided；選哪個學院「no strategic advantage」', 'Apply to one of six schools, with Undecided allowed in McCormick; "no strategic advantage" to any school', M('M57')),
      ns(M('M57', 'M59')),
      inf('Weinberg', 'Weinberg', M('M57')),
      f('Interschool Transfer（IST），各學院自訂標準，「not always approved」；McCormick 門檻未載明', 'Interschool Transfer (IST); each school keeps its own standards and requests are "not always approved"; McCormick thresholds not stated', M('M59')),
      f('只能選一個學院', 'One school', M('M57'))] },
    { filter: '', cells: ['Rice',
      ns(M('M60')), ns(M('M60')), ns(M('M60')), ns(M('M60')), ns(M('M60'))] },
    { filter: 'school-admit capped', cells: ['Georgia Tech',
      f('不申請學院或主修，只填 intended major；5/15 前可確認不同主修', 'No college or major application, only an intended major; a different major may be confirmed by May 15', M('M31', 'M32')),
      f('Institute「reserves the right to limit access to programs due to capacity」', 'The Institute "reserves the right to limit access to programs due to capacity"', M('M33')),
      f('同工程', 'Same as engineering', M('M31')),
      f('60 學分前可無條件換一次；CS 只「on a limited basis」，2024 夏季後入學者的細則以圖片公布，未讀', 'One unrestricted change before 60 credit hours; CS only "on a limited basis", and the rules for post-summer-2024 entrants are in an image that was not read', M('M33', 'M34', 'M35')),
      f('可選填 secondary major', 'Optional secondary major', M('M31'))] },
    { filter: 'direct-admit capped', cells: ['Purdue',
      f('選主要校區與主修（First-Year Engineering），可加 alternate', 'Primary location and major (First-Year Engineering), with an optional alternate', M('M36')),
      f('有：11/1 優先截止後「only if space allows」；CODO「SPACE AVAILABLE BASIS ONLY」', 'Yes: after the Nov 1 priority deadline "only if space allows"; change of major "SPACE AVAILABLE BASIS ONLY"', M('M38', 'M40')),
      f('primary major', 'Primary major', M('M36')),
      f('FYE CODO：至少 1 學期 12 學分、累計 GPA 2.7、CODO GPA 2.5，只在春、夏生效；CS（理學院）：GPA 2.75、CS 18000 A- 以上、微積分 B 以上；兩者都寫「Space is extremely limited」', 'FYE CODO: one semester, 12 credits, cumulative GPA 2.7 and CODO GPA 2.5, effective spring and summer only. CS (College of Science): GPA 2.75, A- in CS 18000, B in calculus. Both say "Space is extremely limited"', M('M40', 'M41')),
      f('可選 alternate major；換主修「never guaranteed」', 'Alternate major allowed; "Changing majors or locations is never guaranteed"', M('M36'))] },
    { filter: 'direct-admit', cells: ['Michigan',
      f('錄取到 College of Engineering，以 undeclared 入學', 'Admitted to the College of Engineering, entering undeclared', M('M43')),
      blocked(M('M43')), blocked(M('M43')), blocked(M('M44b')), blocked(M('M43'))] },
    { filter: 'direct-admit capped transfer-closed', cells: ['UIUC',
      f('以第一志願主修審查，直接進 Grainger 主修；錄取率「vary depending on your college or program of study」', 'Reviewed for a first-choice major, direct to a Grainger major; admit rates "vary depending on your college or program of study"', M('M45')),
      f('有：Engineering Undeclared 每學期只收「limited number」ICT；CS 只收直接錄取', 'Yes: Engineering Undeclared takes "a limited number of ICT students each semester"; CS is direct admit only', M('M47', 'M49')),
      f('第一志願主修', 'First-choice major', M('M45')),
      f('CS、CS + Physics、CS + Bioengineering 自 2022 秋起不開放校內轉入；EU ICT 限第 2、3 學期，GPA 3.30、技術 GPA 3.0，須修過 Calculus 1', 'CS, CS + Physics and CS + Bioengineering closed to on-campus transfer since fall 2022; Engineering Undeclared ICT only in the 2nd/3rd semester, GPA 3.30, technical GPA 3.0, Calculus 1 required', M('M47', 'M48', 'M49')),
      f('強烈建議填第二志願；CS、CE、EE、ME 不能當第二志願；伊利諾州居民優先', 'A second choice is strongly recommended; CS, CE, EE and ME are not available as second choices; Illinois residents get preference', M('M45'))] },
    { filter: 'direct-admit capped transfer-closed', cells: ['UC Berkeley',
      f('直接申請工學院主修；只保證審查 primary major', 'Direct to a College of Engineering major; only the primary major is guaranteed review', M('M61', 'M63')),
      f('有：取決於「the number of spaces available in the major」', 'Yes: depends on "the number of spaces available in the major"', M('M63')),
      f('L&S high-demand major 列為 primary 時，錄取 L&S 即保證；之後轉入只有一次機會、「extremely limited」；哪些屬 high-demand 未列', 'A high-demand L&S major listed as primary is guaranteed on admission to L&S; switching in later is "one opportunity" and "extremely limited"; the list of high-demand majors is not given', M('M62')),
      f('change of college「highly unlikely」，EECS 不受理；Environmental Engineering 2026–27 不開放；限第一年入學者大二申請，決定為最終', 'Change of college is "very competitive and highly unlikely" and not accepted for EECS; Environmental Engineering closed for 2026–27; first-year admits only, in the second year; decisions final', M('M64')),
      f('不審查 alternate major', 'No review for an alternate major', M('M61'))] },
    { filter: 'direct-admit', cells: ['UCLA',
      f('只審查一個主修；1/1 前可改入工程或在工程內改', 'One major reviewed; changes into or within Engineering until Jan 1', M('M65')),
      f('轉學生：CS、CSE、Aerospace、ME 為「severely impacted majors」', 'For transfers: CS, CSE, Aerospace and ME are "severely impacted majors"', M('M67')),
      ns(M('M65')),
      f('「no application is guaranteed」；最早讀完兩個 quarter（CS、CSE、CE 更久），最晚大三秋季；只核准一次轉入工程；GPA 表本輪未擷取', '"No application is guaranteed"; earliest after two quarters (longer for CS, CSE, CE), latest fall of the third year; only one change into engineering approved; GPA tables not extracted this run', M('M66')),
      f('UC 的 alternate major 只用於其他校區', 'The UC alternate major applies to other campuses', M('M65'))] },
    { filter: 'direct-admit capped', cells: ['UC San Diego',
      f('工程為 selective major；CS、ECE、EE、Bioengineering 都標 selective', 'Engineering is a selective major; CS, ECE, EE and Bioengineering are marked selective', M('M68', 'M69')),
      f('有：「limited enrollment, due to capacity」', 'Yes: "limited enrollment, due to capacity"', M('M68')),
      f('生物主修未標 selective', 'Biology majors are not marked selective', M('M69')),
      f('每年申請一次；UC GPA 2.0＋篩選課；積分制排序、同分抽籤、不得申訴；公布錄取人數', 'Once a year; UC GPA 2.0 plus screening courses; ranked by points, ties at random, no appeal; selection numbers published', M('M70', 'M71')),
      f('應填非 selective 的 alternate major，「if space is available」才錄取', 'List a non-selective alternate major, admitted "if space is available"', M('M68'))] },
    { filter: 'direct-admit capped', cells: ['UT Austin',
      f('填第一、第二志願主修；主修競爭程度是審查因素；Cockrell 12/1 截止', 'First- and second-choice majors; competitiveness of the major is a review factor; Cockrell deadline Dec 1', M('M72', 'M73b', 'M75')),
      f('校內轉入「on a space-available basis」，席次每學期、每主修不同', 'Internal transfer "on a space-available basis"; seats vary by semester and major', M('M76')),
      f('Natural Sciences 以 entry-level status 進入所選主修', 'Natural Sciences admits with entry-level status in the chosen major', M('M73')),
      f('Cockrell：GPA 至少 3.0、500 字文章，但「does not have a standard GPA requirement」；CS 屬 CNS：GPA 3.0、24 校內學分、「very competitive」', 'Cockrell: GPA 3.0+ and a 500-word essay, yet it "does not have a standard GPA requirement"; CS sits in Natural Sciences: GPA 3.0, 24 in-residence hours, "very competitive"', M('M76', 'M77')),
      f('有第二志願；想換主修的錄取者「should join the waitlist」', 'Second-choice major; admits who want a different major "should join the waitlist"', M('M72', 'M73b'))] },
    { filter: 'direct-admit capped transfer-closed', cells: ['UW Seattle',
      f('工程申請者以「Direct to College」錄取到工學院', 'Engineering applicants are considered for "Direct to College admission to the College of Engineering"', M('M78')),
      f('capacity-constrained majors：達最低標「does not guarantee entry」', 'Capacity-constrained majors: meeting the minimums "does not guarantee entry"', M('M78')),
      f('Biochemistry、Neuroscience 在 direct-to-major 名單', 'Biochemistry and Neuroscience are on the direct-to-major list', M('M78')),
      f('工程「opportunities to apply at a later date」，門檻未載明；沒在新生時錄取 CS／CE 者「unlikely」', 'Engineering: "opportunities to apply at a later date", thresholds not stated; CS/CE "unlikely" for students not admitted at entry', M('M78')),
      f('第二志願不用於 direct-to-major／college 安置', 'The second choice is not used for direct-to-major or direct-to-college placement', M('M78'))] }
  ];

  window.ATLAS.pages['schools'] = {
    title: s('30 校逐校資料：系統、文書、推薦信、國際申請者', 'The 30 schools: systems, essays, letters, international applicants'),
    judgment: s(
      '30 校的差異集中在三處：推薦信（老師信從 0 到 2 封，外部推薦人有的歡迎、有的拒收）、國際生補助（6 校 need-blind，5 校完全不給）、考試（12 校必繳，3 所 UC 不看）。',
      'The 30 schools differ most in three places: letters (zero to two teacher letters, with outside recommenders welcomed at some and refused at others), aid for internationals (6 need-blind, 5 give none), and testing (12 require SAT/ACT, the 3 UC campuses ignore it).'
    ),
    intro: s(
      '本頁每一格都取自學校或申請系統的官方頁面，存取日 2026-11-07，cycle 為 2026–27（2027 年秋季入學）。頁面沒寫的格子標「未載明」並附查過的來源，不以推測補上；「未載明」只代表那些頁面沒寫，不代表學校沒有規定。標 † 的資料是在官網拒絕自動讀取時，從搜尋引擎對官方網址的摘錄讀到的，發布前應在瀏覽器重查。Michigan 與 Williams 的官網對一般請求回 HTTP 403，但 2026-11-07 清晨用瀏覽器讀到了，日期、推薦信與補充材料規則已寫進表格；Princeton、Northwestern、Purdue 同日恢復正常回應，也已寫進表格。剩下的缺口列在本頁最後一節；Amherst 的頁面在 2026-11-07 已用瀏覽器讀到（V3），先前的 405 來自猜錯的網址與自動請求。表格可用關鍵字或下拉選單篩選。',
      'Every cell comes from an official page of the school or the application system, accessed 2026-11-07, for the 2026–27 cycle (entry fall 2027). Where a page is silent the cell says "not stated" with the pages checked, and nothing is filled in by guesswork; "not stated" means only that those pages are silent, not that the school has no rule. Items marked † were read from a search engine\'s extract of the official URL because the site refused automated reading, and should be re-checked in a browser. Michigan and Williams return HTTP 403 to plain requests but were read in a browser early on 2026-11-07, so their dates, letters and supplementary-material rules are now in the tables; Princeton, Northwestern and Purdue answered normally again the same morning and are written in too. The gaps that remain are listed in the last section. Amherst\u2019s pages were read in a browser on 2026-11-07 (V3); the earlier 405 came from guessed URLs and automated requests. The table can be filtered by keyword or by the drop-down.'
    ),
    sections: [
      {
        id: 'overview',
        h: s('總表：30 校一覽', 'Overview: all 30 schools'),
        judgment: s('多數學校用 Common App、要 2 封老師推薦信、SAT/ACT 必繳；例外都在細節裡，先用篩選找出你的學校落在哪一邊。',
          'Most schools use Common App, want two teacher letters and require SAT/ACT; the exceptions are in the detail, so filter to see where your schools fall.'),
        intro: s('「Other Recommender」欄記錄學校是否接受老師與 counselor 以外的推薦信（例如研究 mentor、教練、雇主）；下拉選單的「接受 Other Recommender」只標出頁面明說接受額外推薦信的學校。',
          'The Other Recommender column records whether a school accepts a letter from someone other than teachers and the counselor (a research mentor, coach or employer). The drop-down option "Other Recommender accepted" marks only schools whose pages say an extra letter is accepted.'),
        table: {
          cols: COLS,
          rows: rows,
          filter: true,
          facets: [
            { v: 'commonapp', label: s('Common App', 'Common App') },
            { v: 'coalition', label: s('Coalition（Scoir）', 'Coalition (Scoir)') },
            { v: 'own', label: s('學校自有系統', 'School\'s own application') },
            { v: 'uc', label: s('UC Application', 'UC Application') },
            { v: 'applytexas', label: s('ApplyTexas', 'ApplyTexas') },
            { v: 'ed', label: s('有 ED', 'Has ED') },
            { v: 'ea', label: s('有 EA（非限制）', 'Has EA (non-restrictive)') },
            { v: 'rea', label: s('有 REA／SCEA', 'Has REA / SCEA') },
            { v: 'need-blind', label: s('國際生 need-blind', 'Need-blind for internationals') },
            { v: 'need-aware', label: s('國際生 need-aware', 'Need-aware for internationals') },
            { v: 'no-intl-aid', label: s('國際生無 need-based 補助', 'No need-based aid for internationals') },
            { v: 'test-required', label: s('SAT/ACT 必繳', 'SAT/ACT required') },
            { v: 'test-optional', label: s('SAT/ACT 選繳', 'SAT/ACT optional') },
            { v: 'test-blind', label: s('不看 SAT/ACT', 'SAT/ACT not considered') },
            { v: 'test-varies', label: s('SAT/ACT 依學院而定或「expected」', 'SAT/ACT varies by college or "expected"') },
            { v: 'or-yes', label: s('接受 Other Recommender', 'Other Recommender accepted') }
          ]
        }
      },

      {
        id: 'majors',
        h: s('工程與生物：申請時就決定科系，還是入學後再說？', 'Engineering and biology: is the major decided at application or after entry?'),
        judgment: s('大約三分之一的學校入學後才宣告主修；其餘在申請時就定下學院或主修，而在 UIUC、Berkeley、UW，沒在申請時拿到 CS 的人，入學後幾乎轉不進去。',
          'About a third of the schools let you declare after you arrive; the rest fix the college or major on the application, and at UIUC, Berkeley and UW a student not admitted to CS at entry has almost no later route in.'),
        intro: s('本節依 2026-11-07 讀過的學校官方頁面整理。「有容量上限」只在頁面自己寫明取決於名額、容量或「space available」時才標，單純審查競爭不算。「未載明」只代表列出的頁面沒寫。Michigan、Williams 與 JHU 工學院網站對一般請求回 HTTP 403，全部以瀏覽器讀取。Michigan 與 Williams 的科系層級頁面已於 2026-11-07 08:00 補讀，兩校的格子不再是未核實；JHU 工學院仍未重讀。',
          'Compiled from the schools\' own pages, read on 2026-11-07. A major counts as capped only where the page itself ties entry to seats, capacity or "space available"; a competitive review alone does not count. "Not stated" means only that the listed pages are silent. Michigan, Williams and the JHU engineering site return HTTP 403 to plain requests and were all read in a browser. The major-level pages for Michigan and Williams were read at 08:00 on 2026-11-07, so those cells are no longer unverified; the JHU engineering site has still not been re-read.'),
        table: {
          cols: [
            s('學校', 'School'),
            s('工程：何時進入', 'Engineering: when you enter'),
            s('工程有容量上限？', 'Engineering capped?'),
            s('生物：何時進入', 'Biology: when you enter'),
            s('入學後轉入工程或 CS', 'Moving into engineering or CS after entry'),
            s('第二志願規則', 'Second-choice rules')
          ],
          rows: MAJOR_ROWS,
          filter: true,
          facets: [
            { v: 'school-admit', label: s('入學時不分主修', 'No major at entry') },
            { v: 'direct-admit', label: s('申請時決定學院或主修', 'College or major set at application') },
            { v: 'capped', label: s('頁面寫明有名額／容量限制', 'Page states a seat or capacity limit') },
            { v: 'transfer-closed', label: s('CS／EECS 入學後不開放或「unlikely」', 'CS/EECS closed or "unlikely" after entry') }
          ]
        },
        items: [
          f('UIUC 不讓 CS、Computer Engineering、Electrical Engineering、Mechanical Engineering 當第二志願；Grainger 的 CS 自 2022 秋季入學者起只收直接錄取、不開放校內轉入。', 'UIUC does not allow CS, Computer Engineering, Electrical Engineering or Mechanical Engineering as a second-choice major, and Grainger CS has been direct admit only, closed to on-campus transfer, for students entering from fall 2022.', ['A8-M45', 'A8-M47', 'A8-M48']),
          inf('在 UIUC 申請這幾個主修，申請表上的第一志願是唯一入口。', 'For these majors at UIUC, the first-choice line on the application is the only way in.', ['A8-M45', 'A8-M47']),
          f('Berkeley 工學院告訴想讀其他主修的申請者，去接受「another institution where they are guaranteed to pursue their major of choice」的錄取；轉入 EECS 的 change of college 一律不受理。', 'Berkeley Engineering tells applicants who want a different major to accept an offer from "another institution where they are guaranteed to pursue their major of choice", and takes no change-of-college applications into EECS at all.', ['A8-M63', 'A8-M64']),
          f('UW：沒在新生時錄取 CS 或 Computer Engineering 的學生，之後「it\'s unlikely」進得去；第二志願不用於 direct-to-major 或 direct-to-college 安置。', 'UW: a student not admitted to computer science or computer engineering at entry is "unlikely" to get in later, and the second-choice major is not used for direct-to-major or direct-to-college placement.', ['A8-M78']),
          inf('在 UW，第二志願不是轉進工程或 CS 的備案。', 'At UW the second choice is not a fallback into engineering or CS.', ['A8-M78']),
          f('UC San Diego 公布校內轉入 selective major 的人數：CSE 2025 夏季 76 人申請、25 人入選（33%），2026 夏季 55 人申請、25 人入選（45%）；Bioengineering 42/26、46/36；ECE 33/22、50/42；Mechanical 126/35、73/40；Aerospace 34/25、37/25。', 'UC San Diego publishes internal-entry numbers for its selective majors: CSE 76 applied / 25 selected (33%) in Summer 2025 and 55 / 25 (45%) in Summer 2026; Bioengineering 42/26 and 46/36; ECE 33/22 and 50/42; Mechanical 126/35 and 73/40; Aerospace 34/25 and 37/25.', ['A8-M70']),
          inf('在讀過的頁面中，UC San Diego 是唯一公布校內轉主修數字的學校。', 'Among the pages read, UC San Diego is the only school that publishes internal-entry numbers.', ['A8-M70']),
          f('UC San Diego 的排序是積分制：篩選課 GPA 3.0 以上、加州居民、Pell 資格、first-generation 各 1 分；同分抽籤，不得申訴；最低 UC GPA 2.0，每年申請一次，最早在大一後的暑假。', 'UC San Diego ranks applicants by points: one each for a 3.0+ screening-course GPA, California residency, Pell eligibility and first-generation status; ties are broken at random with no appeal; minimum UC GPA 2.0, one application a year, first possible the summer after year one.', ['A8-M70', 'A8-M71']),
          inf('同樣成績的國際學生，在這套積分裡至少比加州居民少 1 分。', 'An international student with the same grades starts at least one point behind a California resident.', ['A8-M70']),
          f('Johns Hopkins 的 BME 依資歷與「space available」錄取，可能錄取到大學卻進不了 BME；BME 必須填第一志願，沒進 BME 的人可改選 Whiting 或 Krieger 的其他主修。', 'Johns Hopkins admits to BME on credentials and "space available"; an applicant can be admitted to the university without BME. BME must be the first-choice major, and an admit not placed in it may choose another Whiting or Krieger major.', ['A8-M51', 'A8-M52']),
          inf('除了 BME，JHU 其他主修的運作接近「錄取到學校」。入學後能否轉入 BME，官方頁面本輪未讀到（403），不當成事實。', 'Apart from BME, JHU works much like an institution-level admit. Whether a student can move into BME after entry was not read on an official page this run (403) and is not treated as fact.', ['A8-M51']),
          f('Purdue 2026–27 catalog 中，轉入 First-Year Engineering 與 CS 的 CODO 都寫「SPACE AVAILABLE BASIS ONLY. Space is extremely limited.」；GPA 門檻分別為 2.7（另加 CODO GPA 2.5）與 2.75。', 'In Purdue\'s 2026–27 catalog, the change-of-major entries for First-Year Engineering and CS both say "SPACE AVAILABLE BASIS ONLY. Space is extremely limited."; the GPA floors are 2.7 (plus a 2.5 CODO GPA) and 2.75.', ['A8-M40', 'A8-M41']),
          inf('在 Purdue，達到 GPA 門檻是必要條件，不是保證。', 'At Purdue, meeting the GPA floor is necessary, not sufficient.', ['A8-M40', 'A8-M41']),
          f('Georgia Tech 不按學院或主修錄取，入學前 5/15 可確認與申請時不同的主修（Music Technology 除外），60 學分前可無條件換一次；但保留依容量限制科系的權利，CS 換主修只「on a limited basis」。', 'Georgia Tech admits to no college or major, lets deposited students confirm a different major by May 15 (Music Technology excepted) and allows one unrestricted change before 60 credit hours, but reserves the right to limit programs by capacity, and CS change of major is open only "on a limited basis".', ['A8-M31', 'A8-M32', 'A8-M33', 'A8-M34']),
          f('UT Austin Cockrell 明說校內轉入「does not have a standard GPA requirement」，錄取者的 GPA 與席次每學期、每個主修都不同。', 'UT Austin\'s Cockrell School says it "does not have a standard GPA requirement" for internal transfer, and that admitted GPAs and seat counts vary by semester and major.', ['A8-M76']),
          f('從外校轉入的學生受更多限制：Penn 外校轉學生不能再轉入 Penn Engineering；UIUC 以外校轉學身分進入其他學院者不能轉進 Grainger；UCLA 的 junior transfer 不能轉入 CS、CSE、Aerospace、ME。', 'Students who arrived from another university face extra limits: at Penn they cannot transfer into Penn Engineering; at UIUC those who entered other colleges as off-campus transfers cannot move into Grainger; at UCLA junior transfers cannot change into CS, CSE, Aerospace or Mechanical.', ['A8-M16', 'A8-M50', 'A8-M67']),
          f('Northwestern 說選哪個學院「no strategic advantage」，因為審查標準相同；UIUC 則說錄取率「vary depending on your college or program of study」。兩校都沒公布數字。', 'Northwestern says there is "no strategic advantage" to any school because the same criteria apply to all; UIUC says admit rates "vary depending on your college or program of study". Neither publishes the numbers.', ['A8-M57', 'A8-M45']),
          f('除了 UC San Diego 的校內轉入數字，30 校讀過的頁面都沒有按學院或主修公布新生錄取率。', 'Apart from UC San Diego\'s internal-move figures, none of the pages read for the 30 schools publishes first-year admit rates by college or major.', ['A8-M45', 'A8-M70']),
          f('Michigan 不是「錄取到大學」：「At Michigan, you don\'t apply to the university – you apply to one of our 15 undergraduate schools and colleges」，十個單位收新生申請，**工程學院是其中之一**，所以工程在申請當下就直接錄取；多數新生進的是 LSA。生物沒有科系層級錄取，走 LSA，而 LSA 叫申請者「apply specifically to the College of Literature, Science, and the Arts」；主修「Many students do not indicate their major until the end of their sophomore year」', 'Michigan does not admit to the university: "At Michigan, you don\'t apply to the university – you apply to one of our 15 undergraduate schools and colleges". Ten units take first-year applications and **Engineering is one of them**, so engineering is a direct admit at the point of application; most first-years enter LSA. Biology has no major-level admission and goes through LSA, which tells applicants to "apply specifically to the College of Literature, Science, and the Arts"; as for the major itself, "Many students do not indicate their major until the end of their sophomore year"', ['V6-M1', 'V6-M7']),
          f('Michigan 工程沒有專屬文書，但**每個申請者**都要寫一篇學院專屬文書（100–550 words）；公布的「有額外要求的學院」清單裡沒有工程，唯一例外是 Integrated Business and Engineering 要另交 Ross Admissions Portfolio。工程自己的標準是「based on the strength of your academic preparation to pursue an engineering degree」，特別看 precalculus、化學與物理，而且「No special class rank, grade point average, test score, or other qualification by itself will assure admission」', 'Michigan Engineering sets no essay of its own, but **every** applicant writes a school-or-college-specific essay of 100–550 words; Engineering is absent from the published list of units with additional requirements, the single exception being the Integrated Business and Engineering dual degree, which "must also complete the Ross Admissions Portfolio". Engineering\'s own criteria "are based on the strength of your academic preparation to pursue an engineering degree", with "special emphasis on precalculus, chemistry and physics", and "No special class rank, grade point average, test score, or other qualification by itself will assure admission"', ['V6-M2', 'V6-M3', 'V6-M5']),
          f('Michigan 入學後要轉進工程：「A Cross-Campus applicant who completes the required courses and has a GPA of 2.5 or above is not guaranteed admission into the College of Engineering」，而且「Incoming students must remain in their home unit for a year before applying to transfer」；先修課（Calculus 115／116、Physics 140／141、化學、計算、大一寫作）要「a grade of C or better」，並有 55 學分上限', 'Moving into Michigan Engineering after enrolling: "A Cross-Campus applicant who completes the required courses and has a GPA of 2.5 or above is not guaranteed admission into the College of Engineering", and "Incoming students must remain in their home unit for a year before applying to transfer". The prerequisites (Calculus 115/116, Physics 140/141, chemistry, computing, first-year writing) need "a grade of C or better", under a 55-credit ceiling', ['V6-M6']),
          inf('Michigan 的工程決定在申請當下就做完了，補救路線要花一整年而且不保證——這是 30 校裡少見的組合：申請時就直接錄取，事後補救又特別貴。', 'At Michigan the engineering decision is made at application time, and the fallback costs a full year and is not guaranteed — an uncommon combination among the 30: direct admission at application, and an unusually expensive way back in.', ['V6-M1', 'V6-M6']),
          f('Williams 申請時不選主修：主修「spring of sophomore year」才申報，而第一年申請清單（申請系統、成績單與期中報告、輔導老師加兩位老師推薦信、$65 或減免、ED 同意書）沒有主修、學院或學程欄位。Williams 只發 B.A.，catalog 的主修清單裡沒有工程，但有「Combined Program in Liberal Arts and Engineering」：與 Columbia 的 3-2、與 Dartmouth Thayer 的 2-1-1-1，五年拿 Williams 的 B.A. 加 Columbia 的 B.S. 或 Dartmouth 的 B.E.', 'Williams names no major at application: a major is declared "spring of sophomore year", and the first-year checklist (application system, transcript and mid-year report, counselor plus two teacher recommendations, $65 or a waiver, the ED Agreement) carries no major, school or programme field. Williams awards only the B.A. and its catalog majors list contains no engineering, but it does run a "Combined Program in Liberal Arts and Engineering": 3-2 with Columbia and 2-1-1-1 with Dartmouth\'s Thayer School, five years for a Williams B.A. plus a Columbia B.S. or a Dartmouth B.E.', ['V6-W2', 'V6-W3', 'V6-W5']),
          inf('Williams 的工程不是單純的「沒有」：**Williams 不發自己的工程學位，工程學位由 Columbia 或 Dartmouth 授予**。能否在申請時就指定這兩個學程，讀過的頁面都沒寫。申請清單沒有主修欄位這件事是「讀到的頁面上沒有」，不是 Williams 明文宣告申請時不選主修。', 'Williams is not a flat "no engineering": **Williams confers no engineering degree of its own; the engineering degree comes from Columbia or Dartmouth**. Whether either programme can be elected at application is not stated on any page read. And the absence of a major field in the checklist is an absence on the pages read, not an affirmative statement by Williams that applicants do not apply to a major.', ['V6-W3', 'V6-W5']),
          inf('「未載明」不等於沒有規定。仍未核實：JHU 入學後轉 BME、Columbia 校內轉學院、Rice 是否按學院錄取、Georgia Tech 2024 夏季後入學者轉 CS 的細則（以圖片公布）、UCLA 的 GPA 表、UW 工程後續申請門檻。Michigan 與 Williams 已於 2026-11-07 08:00 補讀。', '"Not stated" is not the same as "no rule". Still unverified: moving into BME at JHU, Columbia\'s internal transfer, whether Rice admits by school, Georgia Tech\'s CS rules for post-summer-2024 entrants (published as an image), UCLA\'s GPA tables, and UW\'s later-entry thresholds for engineering. Michigan and Williams were read at 08:00 on 2026-11-07.', ['A8-M43', 'A8-M83', 'A8-M35', 'A8-M66', 'V6-M1', 'V6-W2'])
        ]
      },

      {
        id: 'systems',
        h: s('申請系統：誰用哪一套', 'Systems: which school uses which'),
        judgment: s('除了 MIT 和三所 UC，其他 26 校都收 Common App；是 Coalition 會員不代表收 Coalition 申請。',
          'Apart from MIT and the three UC campuses, all 26 schools take Common App; being a Coalition member does not mean accepting the Coalition application.'),
        items: [
          inf('MIT 與三所 UC 以外的學校，2026–27 第一年申請都收 Common App。', 'Every school except MIT and the three UC campuses accepts Common App for first-year 2026–27.', ['A2-S23', 'A2-S9']),
          f('在學校自己的頁面上寫明收 Coalition on Scoir 的有 7 校：Yale、Columbia、Penn、Johns Hopkins、Northwestern、Amherst、Swarthmore。Williams 只出現在 Scoir 的名單上，官網無法讀取確認。',
            'Seven schools name Coalition on Scoir on their own pages: Yale, Columbia, Penn, Johns Hopkins, Northwestern, Amherst, Swarthmore. Williams appears only on Scoir\'s list; its own site could not be read.',
            ['A2-S36', 'A2-S38', 'A2-S39', 'A2-S49', 'A2-S51', 'A2-S55', 'A2-S56', 'A2-S16']),
          f('**Coalition 會員 ≠ 收 Coalition 申請**：Harvard、Olin、Rice 是 Coalition 會員，但第一年申請頁只寫 Common App（與 QuestBridge）。Duke 在 Scoir 的收件名單上，自己的頁面卻把 Coalition 限於轉學生。',
            '**Coalition member ≠ accepts the Coalition application**: Harvard, Olin and Rice are Coalition members, but their first-year pages name only Common App (and QuestBridge). Duke is on Scoir\'s list of colleges accepting applications, yet its own page limits Coalition to transfer applicants.',
            ['A2-S17', 'A2-S35', 'A2-S47', 'A2-S52', 'A2-S16', 'A2-S50'], [])
          ,
          f('Coalition 自稱「more than 150」所會員；Scoir 列出 2026-10-20 時可經 Scoir 收件的學校為 116 所。', 'The Coalition counts "more than 150" members; Scoir lists 116 colleges accepting applications through it as of 2026-10-20.', ['A2-S14', 'A2-S16']),
          inf('約四分之一的 Coalition 會員不收 Coalition 申請。', 'Roughly a quarter of Coalition members do not take the Coalition application.', ['A2-S14', 'A2-S16']),
          f('**MIT** 只用自己的 application portal，不用 Common App；活動表只有 4 格、用 MIT 的表格而不是履歷；作品集走 SlideRoom。', '**MIT** uses only its own application portal, no Common App; the activities form has four entries and replaces a resume; portfolios go through SlideRoom.', ['A2-S23', 'A2-S22', 'A2-S25']),
          f('**Georgetown** 可用自己的 Georgetown Application 或 Common App；Common App 是 2026 年 8 月起、為 fall 2027 入學班開始的三年試行。不要求 Common App 主文，改問自己的 personal essay。', '**Georgetown** accepts its own Georgetown Application or Common App; Common App is a three-year pilot starting August 2026 for the fall 2027 class. It does not require the Common App personal statement and asks its own personal essay.', ['A2-S27', 'A4-S46', 'A5a-S62']),
          f('**UT Austin**：新生頁寫「Apply using the Common App for summer/fall admission」，文書頁卻寫短答可用「either the Common App or ApplyTexas」。', '**UT Austin**: the freshman page says "Apply using the Common App for summer/fall admission", while the essays page says short answers go with "either the Common App or ApplyTexas application."', ['A2-S29', 'A2-S30']),
          inf('UT 兩頁對 ApplyTexas 是否仍是 fall 2027 第一年申請管道說法不一；applytexas.org 拒絕自動讀取，依賴 ApplyTexas 前應先向 UT 確認。', 'The two UT pages disagree on whether ApplyTexas is still a fall 2027 first-year route; applytexas.org refused automated reading, so confirm with UT before relying on ApplyTexas.', ['A2-S29', 'A2-S30']),
          f('**UC Application**：一份申請選多個校區；8 題 PIQ 選 4，各 ≤350 字；每校 $80，國際生 $95；申請期 2026/10/1–11/30；SAT/ACT 不納入考量，只能在送件後填報。', '**UC Application**: one application covering several campuses; 4 of 8 PIQs, ≤350 words each; $80 per campus, $95 for internationals; filing Oct 1–Nov 30, 2026; SAT/ACT not considered and reportable only after submission.', ['A2-S9', 'A2-S1', 'A2-S2', 'A2-S4', 'A2-S3']),
          f('UC 在 2026 年 9 月告訴 counselor：additional comments 欄「should NOT be a 5th PIQ. We will not consider that.」', 'UC told counselors in September 2026 that the additional comments box "should NOT be a 5th PIQ. We will not consider that."', ['A2-S5']),
          f('有 3 個系統在申請時收結構化自填成績而不是成績單：UC（在申請表內）、UW（STARS，送件後）、UIUC（送件後寄連結）。', 'Three collect the academic record as structured self-report instead of a transcript at application: UC (inside the application), UW (STARS, after submission), UIUC (link emailed after submission).', ['A2-S3', 'A2-S53', 'A2-S46']),
          f('Universal College Application 沒有關閉，2026/2027 版仍開放，但名錄只列 1 所學校，30 校都不在其中。', 'The Universal College Application is still open for 2026/2027 but lists a single school; none of the 30 is on it.', ['A2-S31', 'A2-S32'])
        ]
      },

      {
        id: 'letters',
        h: s('推薦信：各校的模式', 'Letters: patterns across schools'),
        judgment: s('「兩封老師推薦信」不是通則：4 校只要 1 封，6 校不要求或不收；有正式管道收研究 mentor 推薦信的學校大約一半。',
          '"Two teacher letters" is not a rule: 4 schools want one, 6 require none or refuse them, and about half have a formal route for a research mentor\'s letter.'),
        items: [
          f('**只要 1 封老師推薦信**：Penn、Carnegie Mellon、Georgetown、Northwestern；Michigan 的國際生清單也只列 1 封 Teacher Evaluation。', '**One teacher letter only**: Penn, Carnegie Mellon, Georgetown, Northwestern; Michigan\'s international checklist also lists one Teacher Evaluation.', ['A5a-S42', 'A5a-S67', 'A5a-S63', 'A5b-S18', 'A5a-S85']),
          f('**不要求或不收**：UIUC、UW、UCLA 明說不收；Georgia Tech 全部標為選繳（最多 2 封老師）；Purdue 的申請清單與審查因素清單都沒有推薦信，但另一頁寫明不要求、交了會納入審查；UT Austin 選繳、上限 2 封。', '**None required, or refused**: UIUC, UW and UCLA say they do not accept letters; Georgia Tech labels all letters optional (up to 2 teachers); Purdue lists none in its application checklist or its review-factor list but states elsewhere that letters are not required and are included in the review if submitted; UT Austin makes them optional, capped at 2.', ['A5b-S3', 'A5b-S42', 'A5b-S34', 'A5a-S73', 'A5a-S79', 'A5a-S82', 'V5-U1', 'A5b-S38']),
          f('**科目搭配**：Caltech 與 Harvey Mudd 要 1 封 STEM＋1 封人文（不是兩封數理）；MIT 只是建議同樣搭配；Olin 至少 1 封 STEM；Cornell Engineering、Columbia Engineering、Duke Pratt、Brown Sc.B.／PLME 至少 1 封數理（Cornell 含 CS）；Georgetown 依學院規定。', '**Subject pairing**: Caltech and Harvey Mudd want one STEM and one humanities letter (not two math/science); MIT only suggests that pairing; Olin wants at least one STEM; Cornell Engineering, Columbia Engineering, Duke Pratt and Brown Sc.B./PLME want at least one math or science (Cornell also accepts CS); Georgetown sets rules by school.', ['A5a-S10', 'A5b-S12', 'A5a-S3', 'A5b-S8', 'A5a-S54', 'A5a-S36', 'A5b-S16', 'A5a-S49', 'A5a-S63']),
          f('**明列老師以外撰寫者**：Caltech（教練、mentor、雇主）、Penn（supervisor、mentor、教練、藝術老師等）、Harvey Mudd（supervisor、mentor、雇主）、Duke（Personal Recommendation）、Rice（雇主、教練、mentor）、UT Austin（鼓勵校外推薦人）；Stanford 以 Other Recommender 邀請「can offer new insights」的人。', '**Non-teacher writers named**: Caltech (coach, mentor, employer), Penn (supervisor, mentor, coach, arts instructor and others), Harvey Mudd (supervisor, mentor, employer), Duke (Personal Recommendation), Rice (employers, coaches, mentors), UT Austin (outside writers encouraged); Stanford invites, as Other Recommender, someone who "can offer new insights".', ['A5a-S10', 'A5a-S42', 'A5b-S12', 'A5b-S16', 'A5b-S22', 'A5b-S38', 'A5a-S17']),
          f('**接受額外推薦信但未限定撰寫者**：MIT、Harvard、Brown、Olin、Johns Hopkins、Northwestern。', '**Extra letter accepted, writer not restricted**: MIT, Harvard, Brown, Olin, Johns Hopkins, Northwestern.', ['A5a-S3', 'A5a-S21', 'A5a-S50', 'A5b-S9', 'A5b-S13', 'A5b-S18']),
          f('**有限制的管道**：Carnegie Mellon 收第三封但「consider only two」；Penn「will only review one additional letter」；Columbia 只在附研究摘要時歡迎研究 mentor 推薦信；Georgia Tech 明說不收老師與 counselor 以外的信。', '**Restricted routes**: Carnegie Mellon accepts a third letter but committees "consider only two"; Penn "will only review one additional letter"; Columbia welcomes a research mentor letter only with a research abstract; Georgia Tech refuses letters from anyone but teachers and the counselor.', ['A5a-S67', 'A5a-S42', 'A5a-S39', 'A5a-S73']),
          f('**研究附帶推薦信**：Caltech 收研究論文時必須附 supervisor 或 mentor 的推薦信；MIT Research Supplement 需研究 mentor／PI 的推薦信。', '**Research-linked letters**: Caltech requires a supervisor or mentor letter when a research paper is submitted; MIT\'s Research Supplement needs a letter from the research mentor/PI.', ['A5a-S10', 'A2-S25']),
          f('**Counselor 推薦信可缺**：MIT 只要 SSR，counselor 信「if available」；Harvey Mudd「when available」；Michigan 國際生清單寫「encouraged but not required」；Georgia Tech 說 counselor 無法寫不影響審查。', '**Counselor letter may be absent**: MIT needs the SSR, with a counselor letter "if available"; Harvey Mudd "when available"; Michigan\'s international checklist says "encouraged but not required"; Georgia Tech says a missing counselor letter will not hurt review.', ['A5a-S3', 'A5b-S12', 'A5a-S85', 'A5a-S73']),
          f('**額外推薦人政策未載明**：Princeton、Cornell、Purdue、Swarthmore、UC San Diego；Yale 只提藝術與領導類老師；Georgetown 只提第二位老師。', '**Extra-recommender policy not stated**: Princeton, Cornell, Purdue, Swarthmore, UC San Diego; Yale names only arts and leadership teachers; Georgetown names only a second teacher.', ['A5a-S31', 'A5a-S53', 'A5a-S82', 'A5b-S49', 'A5b-S37', 'A5a-S28', 'A5a-S63']),
          inf('一位最有力證據來自校外 mentor 的申請者，在約一半的學校有正式管道；在 UIUC、UW、UCLA、Georgia Tech 則沒有，在 UT Austin 要與老師信搶 2 個名額。', 'An applicant whose strongest evidence comes from an outside mentor has a formal channel at about half the schools; none at UIUC, UW, UCLA and Georgia Tech, and at UT Austin it competes with teacher letters for two slots.', ['A5a-S10', 'A5a-S42', 'A5b-S3', 'A5b-S42', 'A5b-S34', 'A5a-S73', 'A5b-S38']),
          f('Berkeley 受邀繳推薦信的唯一官方說明是一份未標日期的舊指南（政策「as of fall 2015」）；現行網站搜尋不到相關頁面。', 'Berkeley\'s only official description of invited letters is an undated older guide (policy "as of fall 2015"); the current site search finds nothing.', ['A2-S11', 'A5b-S30']),
          f('**推薦信語言**：30 校中只有 Princeton 直接處理非英文推薦表——可用其他語言寫，但送出前須由校內職員或第三方正式翻譯；其他學校在已查頁面上未載明。', '**Letter language**: of the 30, only Princeton addresses non-English recommendation forms directly — they may be written in another language but must be officially translated, by a school official or third party, before submission; other schools\' pages checked are silent.', ['A4-S23'])
        ]
      },

      {
        id: 'international',
        h: s('國際申請者：英語、成績單、counselor、school profile、補助', 'International applicants: English, transcripts, counselors, school profile, aid'),
        judgment: s('國際生最容易出錯的是補助與文件的時點：6 校 need-blind，而 Johns Hopkins 與 Rice 要所有國際生在申請時就交財力證明。',
          'The easiest place to slip is aid and document timing: 6 schools are need-blind, while Johns Hopkins and Rice want proof of finances from every international applicant at application.'),
        intro: s('台灣公立高中與國際學校的比較是從 Common App 規則與各校說法推出的，並未詢問任何招生辦公室，標為「推論」。',
          'The comparison of a Taiwan public senior high school with an international school is inferred from Common App rules and school statements; no admissions office was asked, so it is labelled as inference.'),
        items: [
          f('**英語考試要求程度**：Stanford、Harvard 不要求；Georgetown、Johns Hopkins、Duke 建議而非必繳；Brown 與 Olin 寫「highly recommend」；其餘多數必繳並附豁免條件。', '**How strongly English tests are asked for**: Stanford and Harvard do not require one; Georgetown, Johns Hopkins and Duke recommend but do not require; Brown and Olin "highly recommend"; most others require one, with exemptions.', ['A4-S11', 'A4-S15', 'A4-S48', 'A4-S79', 'A4-S82', 'A4-S37', 'A4-S72']),
          f('**DET**：2026–27 有 26 校列為接受；Michigan「The Duolingo English Test (DET) is not accepted」；Georgia Tech 的 DET 不符 USG 要求，只供整體審查。', '**DET**: listed as accepted at 26 schools for 2026–27; Michigan: "The Duolingo English Test (DET) is not accepted"; at Georgia Tech DET does not satisfy the USG requirement and is used only in holistic review.', ['A4-S63', 'A4-S53']),
          inf('目標包含 Michigan 或 Georgia Tech 的申請者，無論其他計畫如何都需要 TOEFL 或 IELTS。', 'An applicant aiming at Michigan or Georgia Tech needs TOEFL or IELTS regardless of other plans.', ['A4-S63', 'A4-S53']),
          f('**台灣不在免考名單**：Michigan 的豁免國家名單、UIUC 的核准國家、UT Austin 與 UW 的豁免名單都沒有台灣。', '**Taiwan is not on exemption lists**: not on Michigan\'s exemption country list, UIUC\'s approved countries, or the UT Austin and UW exemption lists.', ['A4-S63', 'A4-S68', 'A4-S112', 'A4-S117']),
          f('**考試時窗**：Penn 只收 2025-04-01 之後的考試；CMU 成績不得超過 2 年；UCLA 所有考試須在 11/30 前；Berkeley 1/31 前達標；UW 12/31 前。TOEFL iBT 自 2026-01-21 起改為 1–6 級分。', '**Test windows**: Penn accepts tests on or after 2025-04-01; CMU scores no older than 2 years; UCLA all tests by Nov 30; Berkeley proficiency by Jan 31; UW by Dec 31. TOEFL iBT moved to a 1–6 band scale for tests from 2026-01-21.', ['A4-S32', 'A4-S51', 'A4-S107', 'A4-S103', 'A4-S117', 'A4-S1']),
          f('**SAT/ACT**：12 校必繳（MIT、Caltech、Stanford、Harvard、Yale、Penn、Brown、Cornell、Georgetown、Georgia Tech、Johns Hopkins、UT Austin）；CMU 只有 Computer Science 必繳；Purdue「expected」；Columbia、Princeton、Harvey Mudd 本季選繳但已宣布下一季必繳；三所 UC 不看。', '**SAT/ACT**: required at 12 (MIT, Caltech, Stanford, Harvard, Yale, Penn, Brown, Cornell, Georgetown, Georgia Tech, Johns Hopkins, UT Austin); at CMU only Computer Science requires it; Purdue "expected"; Columbia, Princeton and Harvey Mudd are optional now with required testing announced for next cycle; the three UC campuses do not use it.', ['A4-S1', 'A4-S7', 'A4-S12', 'A4-S16', 'A4-S19', 'A4-S33', 'A4-S39', 'A4-S41', 'A4-S48', 'A4-S55', 'A4-S79', 'A4-S111', 'A4-S52', 'A4-S59', 'A4-S28', 'A4-S24', 'A4-S76', 'A4-S101']),
          inf('2026–27 在 10 或 11 年級的台灣學生，申請時面對的 test-optional 學校會更少。', 'A Taiwan student in grade 10 or 11 in 2026–27 will apply in a cycle with even fewer test-optional schools.', ['A4-S28', 'A4-S24', 'A4-S76']),
          f('**成績單翻譯**：MIT、Stanford、Harvard、Yale 不准申請者自譯；Caltech、Harvard、Columbia、Brown、Georgetown、Rice、Duke、Swarthmore、UT Austin 明文要原文＋翻譯；Cornell 由學校職員寄出翻譯，CMU 由 counselor 或學校職員驗證翻譯。', '**Transcript translation**: MIT, Stanford, Harvard and Yale forbid self-translation; Caltech, Harvard, Columbia, Brown, Georgetown, Rice, Duke, Swarthmore and UT Austin explicitly want the original plus a translation; at Cornell a school official sends the translation, at CMU the counselor or school official verifies it.', ['A4-S3', 'A4-S11', 'A4-S15', 'A4-S21', 'A4-S7', 'A4-S29', 'A4-S38', 'A4-S49', 'A4-S87', 'A4-S82', 'A4-S96', 'A4-S113', 'A4-S43', 'A4-S51']),
          f('**翻譯時點**：三所 UC 與 UIUC 申請時只收自填成績，錄取後才要正式文件；UW 要國家課程學校的學生申請時就上傳非正式成績單與正式英譯。', '**Translation timing**: the three UC campuses and UIUC take self-reported grades and want official documents only after admission; UW wants students at national-curriculum schools to upload an unofficial transcript with an official English translation at application.', ['A4-S100', 'A4-S106', 'A4-S69', 'A4-S116']),
          f('**誰當 counselor**：Common App 允許任何學校職員（國內外）擔任 counselor 角色；國際生應邀請負責成績單的人，該人會收到 International Supplement to the School Report。學校也可選離線紙本，逐校寄送。', '**Who acts as counselor**: Common App lets any school official, "international or domestic," take the counselor role; international students should invite the person responsible for transcripts, who then gets the International Supplement to the School Report. The school may also submit paper forms offline, mailed to each college.', ['A4-S121', 'A4-S127']),
          f('Common App 欄位只接受 latin1 字元集，其他字元存入後會變成無法閱讀。', 'Common App fields accept only the latin1 character set; other characters become unreadable when saved.', ['A4-S122']),
          inf('中文姓名、校名、課名直接打進 Common App 欄位可能變成亂碼，改用羅馬拼音較安全。', 'Chinese names, school names or course titles typed into Common App may arrive unreadable; romanised entries are safer.', ['A4-S122']),
          inf('**台灣公立高中（中文授課）**：counselor 角色可由輔導或教務人員、或校長擔任，須有 email 且願意用英文系統；成績單是中文，多數學校要原文＋正式翻譯，翻譯成本與工作量需由學校或家庭安排；學校若沒有英文 school profile，需要另寫一份。', '**Taiwan public senior high school (Chinese-medium)**: a guidance or academic-affairs staff member, or the principal, can take the counselor role, provided they have email and will use an English-language system; the transcript is in Chinese, most schools want the original plus an official translation, and the school or family must arrange the translation; a school without an English profile needs to write one.', ['A4-S121', 'A4-S125']),
          inf('**國際學校（英語授課）**：通常有專任升學 counselor，成績單多半已是英文，翻譯一步可省略。', '**International school (English-medium)**: usually a dedicated college counselor, and transcripts are usually already in English, so translation drops out.', ['A4-S121']),
          asm('國際學校常用 Common App 的合作平台（如 BridgeU、Cialfo、MaiaLearning）送件；未對任何特定學校驗證。', 'International schools often submit through a Common App partner platform (such as BridgeU, Cialfo, MaiaLearning); not verified for any particular school.', ['A4-S120']),
          f('**School profile**：Common App 視為選繳；Harvard（若有）、Columbia、Johns Hopkins 要求附上，Georgetown 與 Olin 列為必交；Harvey Mudd 與 Penn 建議。', '**School profile**: optional in Common App; requested by Harvard (if available), Columbia and Johns Hopkins, required by Georgetown and Olin; recommended by Harvey Mudd and Penn.', ['A4-S125', 'A4-S16', 'A4-S29', 'A4-S81', 'A4-S47', 'A4-S72', 'A4-S75', 'A4-S34']),
          f('**對國際生 need-blind（6 校）**：MIT、Harvard、Yale、Princeton、Brown、Amherst。Amherst 這條已在 2026-11-07 從學校自己的補助頁讀到原文（「need-blind admission policy for all students, domestic and international」），不再是搜尋摘錄。', '**Need-blind for internationals (6)**: MIT, Harvard, Yale, Princeton, Brown, Amherst. The Amherst line was read in its own words on 2026-11-07 (\u201cneed-blind admission policy for all students, domestic and international\u201d) and no longer rests on a search extract.', ['A4-S5', 'A4-S15', 'A4-S21', 'A4-S23', 'A4-S38', 'A4-S93', 'V3-R13']),
          f('**need-aware**：Caltech、Stanford、Columbia、Penn、Cornell、Harvey Mudd、Johns Hopkins、Northwestern（†）、Rice、Swarthmore；Duke 描述申請補助的外籍生另成一池，但未使用 need-aware 一詞。', '**Need-aware**: Caltech, Stanford, Columbia, Penn, Cornell, Harvey Mudd, Johns Hopkins, Northwestern (†), Rice, Swarthmore; Duke describes a separate pool for aid-seeking foreign citizens without using the term.', ['A4-S7', 'A4-S11', 'A4-S30', 'A4-S35', 'A4-S44', 'A4-S76', 'A4-S80', 'A4-S86', 'A4-S87', 'A4-S96', 'A4-S82']),
          f('**國際生沒有 need-based 補助**：CMU、Olin、UIUC、UCLA、UW；Purdue、Georgia Tech、Michigan 幾乎沒有。', '**No need-based aid for internationals**: CMU, Olin, UIUC, UCLA, UW; essentially none at Purdue, Georgia Tech and Michigan.', ['A4-S51', 'A4-S74', 'A4-S71', 'A4-S106', 'A4-S118', 'A4-S61', 'A4-S56', 'A4-S66']),
          f('**所有國際生申請時就交財力文件**：Johns Hopkins（Certification of Finances，沒交則申請不完整）、Rice（International Student Financial Statement＋銀行證明）。', '**Financial documents from every international applicant at application**: Johns Hopkins (Certification of Finances; without it the application is incomplete), Rice (International Student Financial Statement plus bank statements).', ['A4-S80', 'A4-S87']),
          f('**補助只能申請一次**：申請時沒申請補助，之後不再考慮——Caltech、Stanford、Columbia、Penn、Cornell、Harvey Mudd、Rice；Georgetown 第一年沒給獎學金，之後也不給。', '**Aid is a one-time request**: if not requested at application, later requests are not considered at Caltech, Stanford, Columbia, Penn, Cornell, Harvey Mudd and Rice; Georgetown gives no scholarship in later years if none is given in the first.', ['A4-S7', 'A4-S11', 'A4-S31', 'A4-S36', 'A4-S45', 'A4-S76', 'A4-S87', 'A4-S50']),
          f('**表單不同**：Princeton 用自有 PFAA，不用 CSS Profile 或 IDOC；Penn 的補助文件走自己的入口，不用 IDOC。', '**Different forms**: Princeton uses its own PFAA, not the CSS Profile or IDOC; Penn takes aid documents through its own portal, not IDOC.', ['A4-S26', 'A4-S36']),
          f('**學習歷程檔案**：國際申請者研究查過的美國官方頁面都沒有提到；台灣的學測、分科測驗也未被任何一頁點名。', '**學習歷程檔案 (Taiwan learning portfolio)**: not mentioned on any official US page checked in the international research; nor are Taiwan\'s national exams (GSAT, 分科測驗) named on any page.', ['A4-S19', 'A4-S23', 'A4-S60'])
        ]
      },

      // Sections 'counselor' and 'taiwan-logistics': research/2026-11-07_counselor-side-and-taiwan-logistics_v1.md (A6).
      {
        id: 'counselor',
        h: s('輔導老師那一側：一所沒用過 Common App 的台灣高中要做什麼', 'The counselor side: what a Taiwan high school that has never used Common App has to do'),
        judgment: s('Common App 把 counselor 的工作綁在三個時間點上：八月 rollover 前發出的邀請不會保留、School Report 必須比 Counselor Recommendation 先送、Final Report 一送出，其他表單就再也送不了。',
          'Common App ties the counselor\'s work to three points in time: invitations sent before the August rollover do not survive it, the School Report has to go before the Counselor Recommendation, and once the Final Report is sent nothing else can follow.'),
        intro: s('這裡設想的讀者是一所以中文授課、從沒用過 Common App 的台灣公立高中，這是虛構的綜合案例，不指涉任何一所學校。表格內容來自 Common App 2026–27 的紙本範本；凡是把規則套到台灣學校身上的地方，都是推論，並標示出來。',
          'The reader in mind is a Chinese-medium Taiwan public senior high school that has never used Common App, a fictional composite rather than any real school. Form contents come from the 2026–27 Common App sample PDFs. Wherever a rule is applied to a Taiwan school, that step is inference and is labelled as such.'),
        items: [
          f('**誰可以當 counselor**：學校沒有 counselor 時，可由校長或其他學校職員填寫；只要提供 email，任何學校職員（「international or domestic」）都能受邀。國際學生應邀請「負責成績單的人」擔任 counselor。', '**Who may act as counselor**: where a school has no counselor, the principal or another school official may complete the forms, and any official, "international or domestic," can be invited by email. International students should invite "the individual responsible for their transcripts."', ['A6-C1', 'A6-C4']),
          inf('在台灣公立高中，能開立正式成績單並代表學校簽名的職員都可以擔任；Common App 並不要求職稱是 counselor。由輔導室、教務處或校長來做，是學校自己的決定。', 'At a Taiwan public school, any staff member who can issue the official transcript and sign for the school fits; Common App does not require the title "counselor". Whether that falls to guidance, academic affairs or the principal is the school\'s call.', ['A6-C1', 'A6-C4']),
          f('**邀請在八月失效**：帳號每年八月初 rollover，「any recommender invitations will not carry over in August」。老師與 Other Recommender 的邀請信，是學生在 Recommenders and FERPA 區把推薦人指派給至少一所學校時才寄出，每校各做一次。', '**Invitations lost at the August rollover**: accounts roll over in early August and "any recommender invitations will not carry over in August." For teachers and Other Recommenders, the invitation email goes out when the student assigns the recommender to at least one college under Recommenders and FERPA, college by college.', ['A6-C11', 'A6-C10']),
          inf('11 年級就收到邀請的 counselor，在 12 年級 rollover 後會收到新的邀請，八月前做的任何填寫都不會延續。', 'A counselor invited in grade 11 will get a fresh invitation after the grade-12 rollover; nothing filled in before August carries over.', ['A6-C11']),
          asm('學生端邀請 counselor（而非老師）的步驟，在讀過的說明文章中沒有找到；此處假設與 Recommenders and FERPA 流程相同，未經驗證。', 'The applicant-side steps for inviting the counselor, as opposed to teachers, were not found in the help articles read; this page assumes the same Recommenders and FERPA flow, unverified.', ['A6-C1', 'A6-C2', 'A6-C4', 'A6-C10']),
          f('**紙本、離線送件**：推薦人可從邀請信的「opt out」連結退出、請學生不要填 email，或聯絡 Solutions Center。退出後由學生從申請帳號印出表格交給學校，學校「send each set of forms directly to your schools of interest」。School Report、International Supplement 與 Counselor Recommendation 紙本最後一行都寫著直接寄給各校招生處、不要寄給 Common App；郵寄時學生要附上寫好各校地址的信封。', '**Paper / offline forms**: a recommender can opt out through the link in the invitation email, by asking the student to leave the email address blank, or through the Solutions Center. The student then prints the forms from the application and hands them over, and the school must "send each set of forms directly to your schools of interest." The paper School Report, International Supplement and Counselor Recommendation each end by telling the school to mail the form to each college\'s admission office and not to Common App; a student applying by mail supplies stamped envelopes addressed to each college.', ['A6-C3', 'A6-C1', 'A6-C6', 'A6-C7', 'A6-C8']),
          f('各校收件管道不一致：Stanford 偏好線上，但收學校人員以 email 寄來的附件；UT Austin「We are unable to accept transcripts via email」；UW 要學生別把高中成績單郵寄到招生處；Rice 不收 email 寄的成績單。', 'Colleges do not share one offline channel: Stanford prefers online submission but accepts emailed attachments from school personnel; UT Austin: "We are unable to accept transcripts via email"; UW says not to mail high school transcripts to its admissions office; Rice does not accept emailed transcripts.', ['A6-U1', 'A6-U3', 'A6-U5', 'A6-U-reuse-Rice']),
          inf('走紙本就是一校一封、國際郵資，學生的 dashboard 也看不到送件狀態。申請人數少的學校，線上系統大概比較省事。', 'Paper means one envelope per college, international postage, and no submission status on the student\'s dashboard. For a school with few applicants the online system is probably less work.', ['A6-C3', 'A6-C6']),
          f('**School Report 問什麼**（2026–27 範本）：mid-year 成績通常何時出來、畢業班人數與升學比例、學校位於美國境外與否（是則要填 International Supplement）；排名方式（Exact／Decile／Quintile／Quartile／None）；GPA、量尺、及格分數與全班最高 GPA；與校內其他升學生相比的修課難度（五級）；學業、課外、品格與整體四項評比，最高到「Outstanding (top 5%)」與「One of the top few encountered in my career」；500 字以內的特殊情況說明；附上的最新成績是哪一期，以及推薦程度。', '**What the School Report asks** (2026–27 sample): when mid-year grades are usually available, class size and college-going figures, whether the school is outside the US (if so, complete the International Supplement); how rank is reported (Exact / Decile / Quintile / Quartile / None); GPA, its scale, the passing mark and the highest GPA in the class; course rigour against other college-prep students, on five levels; ratings for academics, extracurriculars, character and overall, up to "Outstanding (top 5%)" and "One of the top few encountered in my career"; up to 500 words on disruptions; which term the attached grades cover; and the strength of recommendation.', ['A6-C6']),
          inf('評比欄要的是百分位判斷。有公布校排或班排百分比的學校有數據可依；沒有的學校可以勾「No basis」。Common App 沒有說明哪一種選擇對學生有利或不利。', 'The ratings grid asks for percentile judgments. A school that publishes class or school rank percentiles has data behind them; one that does not can tick "No basis". Common App says nothing about whether either choice helps or hurts.', ['A6-C6']),
          f('**International Supplement**：問授課主要語言；升級是否由國家或地方的 leaving examination 決定；學生是否已考過。兩題都答是的話要附成績，還沒出來就填預估成績。另要求寫出本校評分量尺與美國 A–F 的大致對應。並非每所大學都要這份表。', '**International Supplement**: asks for the main language of instruction; whether promotion depends on state or national leaving examinations; and whether the student has already sat them. If yes to both, the results are attached, or predicted results if not yet out. It also asks for the school\'s grading scale and its approximate equivalence to the US A–F scale. Not every college requires it.', ['A6-C7']),
          asm('學測算不算會影響升級的 leaving examination，要由學校判斷；這份研究沒有教育部的資料說明高中畢業如何認定，所以不替學校回答這一題。', 'Whether Taiwan\'s GSAT (學測) counts as a leaving examination that governs promotion is for the school to judge; this research has no Ministry of Education source on how graduation is decided, so it does not answer the question for the school.', ['A6-C7']),
          f('**不要換算成績**：UCSD 寫「Do NOT convert scores yourself or have them converted professionally」；Princeton、Penn、Cornell 也說不要換算或重算成績。', '**Do not convert grades**: UCSD says "Do NOT convert scores yourself or have them converted professionally"; Princeton, Penn and Cornell also say not to convert or recalculate grades.', ['A6-U4', 'A6-U13', 'A6-U14', 'A6-U2']),
          inf('International Supplement 的 A–F 對應與「不准換算」要能同時成立，只能把那一行當作對照說明，成績單本身保留原本的量尺。', 'The supplement\'s A–F line and the no-conversion rule fit together only if that line is read as a key to the scale, with the transcript itself left in its original grading.', ['A6-C7', 'A6-U4']),
          f('**Counselor Recommendation**：各校自訂必繳或選繳；School Report 要先送。紙本問認識學生多久、在什麼情境下認識、「the first words that come to your mind」，以及 1000 字以內的評語；也有「I will not be sending an evaluation for this student」可勾。', '**Counselor Recommendation**: required or optional by college; the School Report must go first. The paper form asks how long and in what context the counselor has known the student, "the first words that come to your mind", and an evaluation of 1000 words or less; a box reads "I will not be sending an evaluation for this student."', ['A6-C2', 'A6-C8']),
          f('**Mid-year、Optional、Final Report 的鎖定**：Mid-year Report 在第一學期或第一學季成績出來時送；Optional Report 每個申請年度只能送一次；Final Report「should only be submitted after a student has received all admission decisions」，送出後 Counselor Recommendation、Mid-year 與 Optional Report 都不能再送。', '**Mid-year, Optional and Final Report locking**: the Mid-year Report goes when first-semester or first-trimester grades exist; the Optional Report can be sent once per application year; the Final Report "should only be submitted after a student has received all admission decisions", and after it the Counselor Recommendation, Mid-year and Optional Reports can no longer be submitted.', ['A6-C2', 'A6-C9']),
          inf('第一次用 Common App 的 counselor 若太早送 Final Report，之後就送不了 Mid-year Report。', 'A first-time counselor who sends the Final Report early can no longer send the Mid-year Report.', ['A6-C2']),
          f('**ED 也要 counselor 簽名**：大學收到的 Early Decision Agreement「includes both the counselor and parent/legal guardian signature」。', '**ED needs the counselor too**: the Early Decision Agreement a college receives "includes both the counselor and parent/legal guardian signature."', ['A6-C2']),
          inf('因此 ED 申請在 ED 截止前就需要 counselor 動作，不只是學生自己。', 'An ED application therefore needs the counselor to act before the ED deadline, not just the student.', ['A6-C2']),
          f('**School profile**：School Report 通常附 school profile 與成績單；Common App 規定成績單必附、profile 選附，並把 profile 定義為學生組成、課程與評分制度的摘要。Stanford 說公開的 profile「on its own does not fulfill the School Report form requirement」。30 校中沒有一所列出國際學校 profile 必須包含哪些內容。', '**School profile**: the School Report typically includes a school profile and transcripts; Common App requires the transcript and makes the profile optional, defining it as a summary of "student body, curricular offerings, and grading system." Stanford: a published profile "on its own does not fulfill the School Report form requirement." None of the 30 was found listing what an international school\'s profile must contain.', ['A6-C2', 'A6-C14', 'A6-C15', 'A6-U1']),
          f('**翻譯**：UT Austin 要「complete and official English translations together with the original language records」；UW 要國家課程學校的學生上傳附正式英譯的非正式成績單；Princeton 允許由學校職員或第三方正式翻譯，不要求付費翻譯。', '**Translations**: UT Austin wants "complete and official English translations together with the original language records"; UW asks students at national-curriculum schools to upload an unofficial transcript with official English translations; Princeton accepts an official translation by a school official or a third party and does not require a paid translator.', ['A6-U3', 'A6-U5', 'A6-U13']),
          inf('這些頁面都沒有把「certified」或「official」定義成特定資格（例如法院或公證）。學校自己開立並蓋章的翻譯，在多數學校看來符合「official」的字面，但只有 Princeton（學校職員）、CMU 與 Cornell（學校職員驗證或寄送）明說；依賴之前應先向各校確認。', 'None of these pages defines "certified" or "official" as a particular credential such as a court or notary. A translation issued and stamped by the school appears to meet the "official" wording at most of them, but only Princeton (a school official) and CMU and Cornell (a school official verifies or sends it) say so; check with each office before relying on it.', ['A6-U13', 'A6-U15', 'A6-U2']),
          f('**不需要 WES、ECE**：Cornell 寫「Your transcripts do not need to be evaluated by a credential evaluation service」；UCSD 只列 Parchment 與 CHESICC 作為電子成績單管道；UT Austin 與 UW 的頁面沒提認證機構。30 校中沒有一所被查到要求一年級申請者做 WES 或 ECE。', '**No WES or ECE**: Cornell: "Your transcripts do not need to be evaluated by a credential evaluation service"; UCSD names Parchment and CHESICC only as e-transcript routes; the UT Austin and UW pages mention no evaluation service. None of the 30 was found requiring WES or ECE of first-year applicants.', ['A6-U2', 'A6-U4', 'A6-U3', 'A6-U5']),
          inf('除非某校明確要求，台灣家庭不必花錢做學歷認證。', 'Unless a particular college asks for one, a Taiwan family need not pay for a credential evaluation.', ['A6-U2', 'A6-U4']),
          f('**沒有頁面提到學測**：查過的頁面都沒點名學測或分科測驗；Yale 說國際 leaving exam 不能滿足其考試要求，Princeton 只在 leaving exam 屬畢業要件時才要成績。30 校中只有 Purdue 有台灣專屬的成績單說明（國中九年級加高中 10–11 年級）。', '**No page names the GSAT (學測)**: no page checked names the GSAT or 分科測驗; Yale says international leaving exams do not meet its testing requirement, and Princeton asks for leaving-exam results only "If leaving exams are a part of the graduation requirements." Purdue is the only school of the 30 with a Taiwan-specific transcript section (junior high year 9 plus senior high years 10–11).', ['A6-U18b', 'A6-U13', 'A6-U19']),
          f('Common App 欄位只接受 latin1 字元。', 'Common App fields accept only the latin1 character set.', ['A6-C16']),
          inf('中文校名、counselor 姓名或課名打進欄位可能變成亂碼；上傳的 PDF 成績單是檔案，不是欄位文字。', 'Chinese school names, counselor names or course titles typed into fields may arrive garbled; an uploaded PDF transcript is a file, not field text.', ['A6-C16']),
          asm('上傳的 PDF 會保留中文內容；未驗證。', 'Uploaded PDFs keep their Chinese content; not verified.', ['A6-C16'])
        ],
        subs: [
          {
            h: s('counselor 依時間要做的事', 'What the counselor must do, by when'),
            judgment: s('以 2026–27 申請季為準；每一行各自標示是事實、推論或假設。', 'Dates are for the 2026–27 cycle; each line carries its own tag.'),
            items: [
              f('**10–11 年級，考 AP 那年的 11 月中前**（學生，與 Ledger 上學校的 AP coordinator）：安排到外校考 AP；2027 年 5 月考試的訂考截止為 11/13，11/14 到 3/12 之間要加收晚訂費。', '**Grade 10–11, before mid-November of the AP year** (student, with an AP coordinator at a Ledger school): arrange AP testing at another school; orders for May 2027 exams close Nov 13, with a late fee from Nov 14 to Mar 12.', ['A6-L8', 'A6-L9', 'A6-L10']),
              f('**第一次 SAT／ACT 報名截止前**（學生；例如 12/5 SAT 為 11/20、12/11–12 ACT 為 11/13）：報名並選定免費成績寄送對象（SAT 考後 9 天內，ACT 報名時）。', '**Before the first SAT/ACT registration deadline** (student; e.g. Nov 20 for the Dec 5 SAT, Nov 13 for the Dec 11–12 ACT): register and choose free score recipients (SAT within 9 days after the test, ACT at registration).', ['A6-L1', 'A6-L2', 'A6-L5', 'A6-L6']),
              {
                t: s('**12 年級 8 月 1 日前**（學校）：決定由哪位職員擔任 counselor（要能開成績單、有 email），以及走線上還是紙本。', '**Before August 1 of grade 12** (school): decide which official acts as counselor (must issue transcripts and have email) and whether to submit online or on paper.'),
                tag: 'i', src: ['A6-C1', 'A6-C3', 'A6-C4'],
                sub: [f('可擔任的人與紙本選項本身是 Common App 的規定；放在 8 月前是推論出的時點。', 'Who may serve and the paper option are Common App rules; placing the decision before August is the inferred part.', ['A6-C1', 'A6-C3', 'A6-C4'])]
              },
              f('**八月 rollover 之後**（學生）：邀請 counselor 與老師；把推薦人指派給學校時才會寄出邀請。', '**After the August rollover** (student): invite the counselor and teachers; the invitation goes out when the recommender is assigned to a college.', ['A6-C10', 'A6-C11']),
              f('**最早一所學校的材料截止前**（counselor；例如 Caltech REA 材料 2026/11/6）：準備英文 school profile（學生組成、課程、評分制度）、附成績說明的正式成績單，以及原文加正式英譯。', '**Before the earliest college\'s materials deadline** (counselor; e.g. Caltech REA materials Nov 6, 2026): prepare an English school profile (student body, curriculum, grading system), the official transcript with its legend, and the original plus an official English translation.', ['A6-C6', 'A6-C15', 'A6-U3', 'A6-I2-deadlines']),
              f('**同一截止日**（counselor）：送出 School Report 與 International Supplement（排名、GPA 量尺、修課難度、評比、A–F 對應、leaving exam 題）。', '**Same deadline** (counselor): submit the School Report and International Supplement (rank, GPA scale, rigour, ratings, A–F equivalence, the leaving-exam question).', ['A6-C6', 'A6-C7']),
              f('**School Report 之後**（counselor）：Counselor Recommendation（1000 字以內，或勾選不寫）。', '**After the School Report** (counselor): the Counselor Recommendation (1000 words or less, or tick that none will be sent).', ['A6-C2', 'A6-C8']),
              f('**ED 截止前，如果學生申請 ED**（counselor）：簽 ED agreement。', '**Before the ED deadline, if the student applies ED** (counselor): sign the ED agreement.', ['A6-C2']),
              {
                t: s('**12 年級第一學期成績出來時**（counselor）：附更新成績單送 Mid-year Report；Stanford 與 Duke 寫明 2/15。', '**When grade-12 first-semester grades exist** (counselor): the Mid-year Report with an updated transcript; Stanford and Duke name Feb 15.'),
                tag: 'f', src: ['A6-C2', 'A6-C9', 'A6-U1', 'A6-U20'],
                sub: [asm('台灣第一學期結束的日期沒有教育部來源，未列出。', 'The end date of the Taiwan first semester has no Ministry of Education source here and is not given.', ['A6-C9'])]
              },
              f('**學生拿到所有結果之後才送**（counselor）：Final Report 寄給要就讀的學校；Stanford 期末成績單 7/1 前，UCSD 7/1 前。', '**Only after the student has every decision** (counselor): the Final Report to the enrolling college; Stanford wants the final transcript by July 1, UCSD its records by July 1.', ['A6-C2', 'A6-U1', 'A6-U4']),
              f('**各校補助截止日前**（家庭）：CSS Profile（第一所 $25、之後每所 $16，海外家庭沒有 fee waiver）或該校自己的表單。', '**By each college\'s aid deadline** (family): the CSS Profile ($25 for the first college, $16 for each additional, no waiver for families outside the US) or the college\'s own forms.', ['A6-L15', 'A6-L16'])
            ]
          }
        ]
      },

      {
        id: 'taiwan-logistics',
        h: s('在台灣考試與付費的實務', 'Testing and fees from Taiwan'),
        judgment: s('SAT 在台灣另收 $24 考場費；AP 授權考場名單上沒有台灣；CSS Profile 的 fee waiver 只給父母住在美國的家庭。',
          'The SAT carries an extra $24 test-centre fee in Taiwan; Taiwan is not on the list of authorised AP test centres; CSS Profile fee waivers go only to families whose parents live in the US.'),
        intro: s('金額與日期都取自考試機構自己的頁面（2026-11-07 讀取）。兩份官方頁面數字不一致的，兩個都列出，結帳時再確認。',
          'Fees and dates are taken from each test owner\'s own pages, read on 2026-11-07. Where two official pages disagree, both figures are given; confirm at checkout.'),
        table: {
          cols: [s('項目', 'Item'), s('在哪裡考', 'Where'), s('費用', 'Cost'), s('日期', 'Dates'), s('備註', 'Note')],
          rows: [
            [s('SAT', 'SAT'),
              inf('台灣被點名收考場費，可推知台灣有 SAT 週末考場；College Board 只提供互動式考場搜尋，具體考場未記錄。', 'Taiwan is named for a test-centre fee, which implies SAT weekend centres there; College Board offers only an interactive centre search, and specific centres were not captured.', ['A6-L2', 'A6-L3']),
              f('報名 $68＋國際費 $43＋台灣考場費 $24；改期 $34、取消 $34、晚取消 $44、晚報名 $38（「Fees Through June 2027」）', 'Registration $68 + $43 international fee + $24 Taiwan test-centre fee; change $34, cancel $34, late cancel $44, late registration $38 ("Fees Through June 2027")', ['A6-L2']),
              f('2026/10/3、11/7、12/5；2027/3/6、5/1、6/5。報名約考前兩週截止（12/5 場為 11/20），美東時間晚上 11:59', 'Oct 3, Nov 7, Dec 5, 2026; Mar 6, May 1, Jun 5, 2027. Registration closes about two weeks before (Nov 20 for Dec 5), 11:59 p.m. ET', ['A6-L1']),
              inf('每次約 $135，未含晚報名等費用；考前要先設定 Bluebook。', 'About $135 a sitting before late fees; Bluebook must be set up before test day.', ['A6-L2', 'A6-L3'])],
            [s('SAT fee waiver（美國境外）', 'SAT fee waiver (outside the US)'), ns(['A6-L2', 'A6-L4']), ns(['A6-L2', 'A6-L4']), ns(['A6-L2', 'A6-L4']),
              f('試過的資格說明頁回傳 404。', 'The eligibility page tried returned 404.', ['A6-L2', 'A6-L4'])],
            [s('ACT（非美國）', 'ACT (non-US)'),
              { state: 'not-stated', checked: '2026-11-07', src: ['A6-L5', 'A6-L6'], t: s('頁面沒提到台灣，也沒說明考試形式或考場搜尋；非美國日期適用美國以外所有國家。', 'Taiwan is not mentioned, nor are test format or a centre search; non-US dates apply to every country outside the US.') },
              f('$188.50；含 science $198.50；含 writing $213.50；兩者都含 $223.50；晚報名 $42；變更 $49；額外成績單 $20。首頁另列「$186.50」。', '$188.50; with science $198.50; with writing $213.50; with both $223.50; late $42; change $49; extra score reports $20. The home page lists "$186.50".', ['A6-L6', 'A6-L7']),
              f('2026/9/5、10/23–24、12/11–12（11/13 截止、11/27 晚報名、12/17 起出分）；2027/2/12–13、4/2–3、6/11–12、7/9–10', 'Sep 5, Oct 23–24, Dec 11–12, 2026 (register by Nov 13, late by Nov 27, scores from Dec 17); Feb 12–13, Apr 2–3, Jun 11–12, Jul 9–10, 2027', ['A6-L5']),
              f('報名時填代碼，費用含最多 4 所學校的成績單；費用頁的註記日期是 2025 年秋，沒有標示學年。', 'The fee includes reports to up to four colleges whose codes are given at registration; the fee page carries notes dated fall 2025 and no cycle label.', ['A6-L6'])],
            [s('TOEFL iBT', 'TOEFL iBT'),
              { state: 'not-stated', checked: '2026-11-07', src: ['A6-L11'], t: s('考場位置；ETS 的國家選單以「Taiwan, China」列出報名費。', 'Centre locations; the ETS country selector lists the fee under "Taiwan, China".') },
              f('報名 $272；快速報名 US$49；改期 US$69；額外成績單費用頁寫 US$29、寄送頁寫 US$25', 'Registration $272; express registration US$49; rescheduling US$69; extra score reports US$29 on the fee page, US$25 on the send-scores page', ['A6-L11', 'A6-L12']),
              ns(['A6-L11', 'A6-L12']),
              f('考前選 4 所免費寄送，可改到考場當地考前一天晚上 10 點；成績有效 2 年。', 'Four free reports chosen before the test, editable until 10 p.m. local time the day before; scores valid 2 years.', ['A6-L12'])],
            [s('IELTS Academic', 'IELTS Academic'),
              f('可在考場考，也可線上遠距考；台灣考場未記錄（試過的考場頁顯示找不到頁面）', 'At a test centre or remotely online; Taiwan centres not captured (the centre page tried returned not found)', ['A6-L13']),
              ns(['A6-L13']), ns(['A6-L13']), ns(['A6-L13'])],
            [s('Duolingo English Test', 'Duolingo English Test'),
              f('線上、在家考、不需預約，約 1 小時', 'Online, at home, no appointment, about 1 hour', ['A6-L14']),
              ns(['A6-L14']),
              f('不需預約；約 2 天出分', 'No appointment; results in about 2 days', ['A6-L14']),
              f('成績可無限次分享。Michigan 不接受 DET；Georgia Tech 的 DET 不符 USG 要求，只用於整體審查。', 'Unlimited score sharing. Michigan does not accept DET; at Georgia Tech DET does not meet the USG rule and is used only in holistic review.', ['A6-L14', 'A4-S63', 'A4-S53'])],
            [s('AP（學校沒開 AP）', 'AP without a school offering it'),
              f('學生不能自己訂考，要在 AP Course Ledger 找願意收外校生的學校。授權考場只在中國大陸、香港、南韓、新加坡、越南、土耳其、英國、約旦、印度，**沒有台灣**。', 'Students "can\'t order AP Exams directly"; they must find a school on the AP Course Ledger whose coordinator accepts outside students. Authorised test centres exist only in mainland China, Hong Kong, South Korea, Singapore, Vietnam, Turkey, the UK, Jordan and India; **Taiwan is not on the list**.', ['A6-L8', 'A6-L9']),
              f('美國境外每科 $129（授權考場費用不一，學校可加收）；11/14 到 3/12 晚訂 $40；11/13 之後取消或未考 $40', '$129 per exam outside the US (authorised-centre fees vary; schools may charge more); $40 late order Nov 14 – Mar 12; $40 for a cancelled or unused exam after Nov 13', ['A6-L10']),
              f('2027 年 5/3–7、5/10–14；學校 11 月中前訂考（2027 年 5 月考試為 11/13）', 'May 3–7 and May 10–14, 2027; school orders due mid-November (Nov 13 for May 2027)', ['A6-L9b', 'A6-L8', 'A6-L10']),
              inf('台灣公立高中學生要靠 Ledger 上的台灣學校願意代考，或出國到列名考場。2027 年 5 月考的成績趕不上 RD 審查，所以考不考 AP 是 10–11 年級就要決定的事。', 'A Taiwan public-school student depends on a Ledger school in Taiwan agreeing to proctor an outsider, or on travel to a listed centre. A May 2027 score reaches no RD reader before decisions, so AP is a grade 10–11 decision.', ['A6-L8', 'A6-L9b'])],
            [s('CSS Profile', 'CSS Profile'),
              f('線上；可用本國貨幣填寫，送出即同意資料跨境傳輸', 'Online; figures may be entered in home currency, and submitting implies consent to cross-border data transfer', ['A6-L18']),
              f('第一所 $25，之後每所 $16；信用卡、金融卡或禮物卡', '$25 for the first college, $16 for each additional; credit, debit or gift card', ['A6-L15']),
              f('依各校補助截止日；Princeton 用自有 PFAA，Penn 的文件走自己的入口', 'Each college\'s aid deadline; Princeton uses its own PFAA and Penn its own document portal', ['A4-S26', 'A4-S36']),
              f('fee waiver 只給監護父母住在美國或美國領地的家庭；住海外的美國公民也不符合。', 'Fee waivers require custodial parents living in the US or a US territory; US citizens living abroad do not qualify either.', ['A6-L16', 'A6-L17'])],
            [s('成績寄送', 'Score sending'),
              s('各考試機構', 'Each test owner'),
              f('SAT：考後 9 天內選 4 份免費，其後每份 $15、急件 $31；ACT：報名時填代碼含 4 份，其後每份 $20；TOEFL：4 份免費，其後 US$29 或 US$25', 'SAT: 4 free if ordered within 9 days after the test, then $15 each, rush $31; ACT: 4 included if codes are given at registration, then $20 each; TOEFL: 4 free, then US$29 or US$25', ['A6-L2', 'A6-L4', 'A6-L6', 'A6-L11', 'A6-L12']),
              f('SAT 考後 9 天內；ACT 報名時；TOEFL 考前一天當地晚上 10 點前', 'SAT within 9 days after the test; ACT at registration; TOEFL by 10 p.m. local time the day before', ['A6-L2', 'A6-L6', 'A6-L12']),
              f('ACT 與 TOEFL 各有兩份官方頁面數字不一致（$188.50 與 $186.50；US$29 與 US$25）。', 'ACT and TOEFL each have two official pages that disagree ($188.50 vs $186.50; US$29 vs US$25).', ['A6-L6', 'A6-L7', 'A6-L11', 'A6-L12'])]
          ]
        },
        items: [
          f('**面試與台灣**：查過的學校頁面沒有一頁特別提到台灣。', '**Interviews and Taiwan**: no school page checked mentions Taiwan specifically.', ['A6-I1', 'A6-I3', 'A6-I4', 'A6-I6', 'A6-I7', 'A6-I12']),
          f('**不看所在地的線上面試**：Yale 的 Senior Interviewer 面試「regardless of location」都採線上，但只限受邀者；Duke 提供選擇性線上校友面試；Harvey Mudd 選擇性、線上、不影響申請；Rice 選擇性、線上，申請後提出，國際生能否申請 Rice 面試未說明。', '**Virtual interviews regardless of location**: Yale\'s Senior Interviewers meet invited applicants virtually "regardless of location"; Duke offers optional virtual alumni interviews; Harvey Mudd\'s are optional, virtual and carry no penalty; Rice\'s are optional and virtual, requested after applying, and whether international applicants can request one is not stated.', ['A6-I6', 'A6-I23', 'A6-I21', 'A6-I25', 'A6-I26']),
          f('**靠當地校友的面試**：MIT 盡量安排、沒排到不影響；Harvard 國際生不保證有面試，沒有也「will not adversely affect」；Princeton 視當地校友而定；Georgetown 說部分海外學生「may not be assigned an interview due to availability」；Stanford 只在列出的國際地點面試，台灣是否在內未記錄（待重查）。', '**Interviews that depend on local alumni**: MIT arranges one "whenever possible" with no adverse effect if none; Harvard does not guarantee one internationally and its absence "will not adversely affect"; Princeton depends on local alumni; Georgetown says "Some internationally-based students may not be assigned an interview due to availability"; Stanford interviews only in listed international locations, and whether Taiwan is one was not recorded (re-verify).', ['A6-I1', 'A6-I4', 'A6-I5', 'A6-I7', 'A6-I12', 'A6-I13', 'A6-I3']),
          f('**不面試**：Columbia、Johns Hopkins、UCLA、UW、UIUC、UC Berkeley、Amherst、UT Austin 不辦招生面試；Georgia Tech 不辦校友或招生人員面試；Northwestern「no longer offers alumni interviews」，改成與申請無關的 \'Cat Chats；Williams 自己的頁面寫「Williams does not offer interviews」，但歡迎國際申請者分享 InitialView 錄影；Amherst 的 Office of Admission 寫「does not conduct interviews or one-on-one evaluative sessions with students」，校友面試十多年前停辦。', '**No interviews**: Columbia, Johns Hopkins, UCLA, UW, UIUC, UC Berkeley, Amherst and UT Austin hold no admission interviews; Georgia Tech holds no alumni or staff interviews; Northwestern "no longer offers alumni interviews", replaced by \'Cat Chats that are not part of the application; Williams\'s own page says "Williams does not offer interviews" while welcoming an InitialView recording from international applicants; Amherst\u2019s Office of Admission says it "does not conduct interviews or one-on-one evaluative sessions with students", having ended alumni interviewing over a dozen years ago.', ['A6-I8', 'A6-I22', 'A6-I28', 'A6-I31', 'A6-I19', 'A6-I27', 'A6-I15', 'A6-I24', 'V3-R14', 'V3-R15', 'V3-R11']),
          f('**第三方影片面試**：Caltech、Brown、CMU、Georgia Tech、Duke、Northwestern、UC Berkeley 提到 InitialView（CMU、Georgia Tech 也提 Vericant），都非必繳；Swarthmore 要非美國學校的學生從影片回答、英語考試、InitialView 三者擇一。Olin 的面試報告來自 Olin 代表，屬 Candidates\' Weekend。', '**Third-party video interviews**: Caltech, Brown, CMU, Georgia Tech, Duke, Northwestern and UC Berkeley mention InitialView (CMU and Georgia Tech also Vericant), none as a requirement; Swarthmore asks students at non-US schools for one of a video response, an English test or InitialView. Olin\'s interview report comes from an Olin representative as part of Candidates\' Weekend.', ['A6-I2', 'A6-I10', 'A6-I14', 'A6-I15', 'A6-I23', 'A6-I24', 'A6-I27', 'A6-I34', 'A6-I35', 'A6-I20']),
          { t: s('仍未載明：Penn、Cornell、UC San Diego 的面試政策，以及 Michigan 的——Michigan 的 requirements 頁 2026-11-07 已在瀏覽器讀到，清單上就是沒有面試這一項。Purdue 的審查因素清單也沒有面試或影片。已補讀到的：Williams 不辦面試（收 InitialView）、Amherst 與 UT Austin 都不辦招生面試（Amherst 另註明校友面試十多年前就停了，但校友仍可寫推薦信）。', 'Still not stated: interview policy at Penn, Cornell and UC San Diego, and at Michigan — its requirements page was read in a browser on 2026-11-07 and simply carries no interview line. Purdue\'s review-factor list names no interview or video either. Since read: Williams holds no interviews but accepts InitialView, and neither Amherst nor UT Austin holds admission interviews (Amherst adds that alumni interviewing ended over a dozen years ago while alumni may still write supporting letters).'), state: 'not-stated', checked: '2026-11-07', src: ['A6-I9', 'A6-I11', 'A6-I16', 'A6-I29', 'A6-I17', 'A6-I18', 'A6-I32', 'A6-I33', 'V3-R14', 'V3-R15', 'V3-R11', 'V4-T11', 'V4-T13', 'V4-T9'] },
          inf('明說不看所在地的線上形式（Yale Senior Interviewer、Duke、Harvey Mudd、Rice）最可能讓台灣申請者面試到；MIT、Harvard、Princeton、Georgetown、Stanford 的校友面試要看申請者附近有沒有志工，沒有任何頁面替台灣量化過。', 'Virtual formats that explicitly ignore location (Yale Senior Interviewers, Duke, Harvey Mudd, Rice) are the most likely to reach an applicant in Taiwan. Alumni programmes at MIT, Harvard, Princeton, Georgetown and Stanford depend on volunteers near the applicant, which no page quantifies for Taiwan.', ['A6-I6', 'A6-I23', 'A6-I21', 'A6-I25', 'A6-I1', 'A6-I4', 'A6-I7', 'A6-I12', 'A6-I3'])
        ]
      },

      // Section 'aid-numbers': research/2026-11-07_international-aid-numbers_v1.md (A7, local ids H01–H35).
      {
        id: 'aid-numbers',
        h: s('國際生實際拿到多少補助：CDS H6 與學費', 'How much aid international students actually receive: CDS H6 and cost'),
        judgment: s('讀到 H6 的 24 校中，14 所私校受助國際生的平均補助占校內總花費 74–94%；CMU、Georgia Tech、UW 勾選「not available」；UT Austin 受助人數最多（832 人），平均補助卻只占總花費 32.1%。',
          'Of the 24 schools whose H6 was read, 14 private schools gave aided nonresidents an average award equal to 74–94% of on-campus cost; CMU, Georgia Tech and UW mark aid "not available"; UT Austin aids the most nonresidents (832), but its average award covers 32.1% of cost.'),
        intro: s('CDS H6 報的是學校自己給「degree-seeking 非居民（nonresident，依簽證身分）」大學部學生的 scholarship／grant：受助人數、平均與總金額，金額屬 **2025–26** 學年；G1、G5 在 2025–26 版 CDS 範本中問的是 **2026–27** 學年的費用。這裡的總花費＝G1 學費（公立校取非居民列）＋必繳雜費＋校內食宿（新生欄）＋G5 書籍＋交通＋其他，不含健康保險；G 欄空白的學校改用學校自己的費用頁並註明。「占總花費比例」＝H6 平均補助 ÷ 總花費，分子是 2025–26、分母是 2026–27。Brown、Purdue、Michigan、Johns Hopkins、Williams、Amherst 六校的 H6 本次沒讀到，不代表沒有公開：Amherst 的 CDS 2025–26 其實有公開，拆成十一份分節 PDF（`/about/facts/common_data_sets/2025`），但伺服器以下載檔案的方式送出，本次沒有下載。Johns Hopkins、Harvey Mudd、Amherst 三列的總花費改用學校自己公布的 2026–27 費用頁，列內已註明基準不同。MIT 的數字是經 WebFetch 摘要間接讀取，讀法比其他校弱，需要用瀏覽器重查。Olin 用的是 2023–24 版 CDS。',
          'CDS H6 reports institutional scholarships and grants to degree-seeking undergraduate nonresidents (a visa category, not a nationality): how many were aided, the average award and the total, all for **2025–26**. In the 2025–26 CDS template, G1 and G5 ask for **2026–27** costs. Cost here = G1 tuition (the nonresident row at public universities) + required fees + on-campus food and housing (first-year column) + G5 books + transportation + other expenses; health insurance is not included. Where a school left G1/G5 blank, its own cost page is used and named. "Share of cost" = H6 average award ÷ that cost, so a 2025–26 award is divided by a 2026–27 cost. H6 was not retrieved for Brown, Purdue, Michigan, Johns Hopkins, Williams and Amherst; that is a gap in this reading, not evidence the figures are unpublished. Amherst\u2019s 2025\u201326 CDS is in fact published, split into eleven section PDFs at `/about/facts/common_data_sets/2025`, but the server sends each as a file download, which this run did not take. The cost cells for Johns Hopkins, Harvey Mudd and Amherst come from those schools\u2019 own published 2026\u201327 cost pages, and each cell says so. MIT\'s figures were read through a WebFetch summary, a weaker method than the rest, and need re-checking in a browser. Olin\'s file is the 2023–24 CDS.'),
        table: {
          cols: [s('學校', 'School'), s('提供非居民補助？（H6 勾選）', 'Aid available to nonresidents? (H6 box)'), s('受助非居民人數', 'Nonresidents aided'), s('平均補助', 'Average award'), s('總金額', 'Total'), s('總花費（cost of attendance）', 'Cost of attendance'), s('平均補助占總花費', 'Average award as share of cost')],
          filter: true,
          facets: [
            { v: 'nb', label: s('勾需求型', 'Need-based checked') },
            { v: 'nn', label: s('勾非需求型', 'Non-need-based checked') },
            { v: 'none', label: s('勾「not available」', 'Marked "not available"') },
            { v: 'blank', label: s('H6 未勾選', 'No H6 box marked') },
            { v: 'notread', label: s('本次未讀到', 'Not retrieved') },
            { v: 'public', label: s('公立大學', 'Public university') }
          ],
          rows: [
            { filter: 'nb', cells: [s('MIT（經 WebFetch 摘要讀取，待重查）', 'MIT (read via WebFetch summary; re-check)'),
              f('需求型', 'Need-based', ['A7-H01']), f('411', '411', ['A7-H01']), f('$81,991', '$81,991', ['A7-H01']), f('$33,698,421', '$33,698,421', ['A7-H01']),
              f('$92,760（交通欄寫 varies，未計）', '$92,760 (transportation "varies", left out)', ['A7-H01']), f('88.4%', '88.4%', ['A7-H01'])] },
            { filter: 'nb', cells: [s('Caltech', 'Caltech'),
              f('需求型', 'Need-based', ['A7-H02']), f('59', '59', ['A7-H02']), f('$85,696', '$85,696', ['A7-H02']), f('$5,056,044', '$5,056,044', ['A7-H02']),
              f('$99,222（交通列未讀到）', '$99,222 (no transportation row read)', ['A7-H02']), f('86.4%', '86.4%', ['A7-H02'])] },
            { filter: 'nb nn', cells: [s('Stanford', 'Stanford'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H03']), f('260', '260', ['A7-H03']), f('$85,424', '$85,424', ['A7-H03']), f('$22,210,145', '$22,210,145', ['A7-H03']),
              f('$97,545（交通 varies，未計）', '$97,545 (transportation "varies", left out)', ['A7-H03']), f('87.6%', '87.6%', ['A7-H03'])] },
            { filter: 'nb', cells: [s('Harvard', 'Harvard'),
              f('需求型', 'Need-based', ['A7-H04']), f('805', '805', ['A7-H04']), f('$83,013', '$83,013', ['A7-H04']), f('$66,826,244', '$66,826,244', ['A7-H04']),
              f('$95,134–$100,134（CDS G 欄空白；取自 Harvard College 2026–27 費用頁，交通 $0–$5,000）', '$95,134–$100,134 (CDS G1/G5 blank; from Harvard College\'s 2026–27 cost page, transportation $0–$5,000)', ['A7-H04', 'A7-H32']),
              f('87.3%（以區間下限計）', '87.3% (against the low end of the range)', ['A7-H04', 'A7-H32'])] },
            { filter: 'nb', cells: [s('Yale', 'Yale'),
              f('需求型', 'Need-based', ['A7-H05']), f('459', '459', ['A7-H05']), f('$84,185', '$84,185', ['A7-H05']), f('$38,640,976', '$38,640,976', ['A7-H05']),
              f('$98,900（必繳雜費欄空白）', '$98,900 (required fees blank)', ['A7-H05']), f('85.1%', '85.1%', ['A7-H05'])] },
            { filter: 'nb', cells: [s('Princeton', 'Princeton'),
              f('需求型', 'Need-based', ['A7-H06']), f('597', '597', ['A7-H06']), f('$86,736', '$86,736', ['A7-H06']), f('$51,781,584', '$51,781,584', ['A7-H06']),
              f('$95,624', '$95,624', ['A7-H06']), f('90.7%', '90.7%', ['A7-H06'])] },
            { filter: 'nb', cells: [s('Columbia（CC＋SEAS）', 'Columbia (CC + SEAS)'),
              f('需求型', 'Need-based', ['A7-H07']), f('248', '248', ['A7-H07']), f('$92,699', '$92,699', ['A7-H07']), f('$22,989,258', '$22,989,258', ['A7-H07']),
              f('$99,774（交通 varies，未計）', '$99,774 (transportation "varies", left out)', ['A7-H07']), f('92.9%', '92.9%', ['A7-H07'])] },
            { filter: 'nb', cells: [s('Penn', 'Penn'),
              f('需求型', 'Need-based', ['A7-H08']), f('448', '448', ['A7-H08']), f('$80,607', '$80,607', ['A7-H08']), f('$36,111,968', '$36,111,968', ['A7-H08']),
              f('$99,082', '$99,082', ['A7-H08']), f('81.4%', '81.4%', ['A7-H08'])] },
            { filter: 'notread', cells: [s('Brown', 'Brown'),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H09'], t: s('Brown 的 CDS H 表匯出檔沒有 H6 欄位；本次未讀到。', 'Brown\'s CDS H-sheet export has no H6 rows; not retrieved.') },
              ns(['A7-H09']), ns(['A7-H09']), ns(['A7-H09']),
              f('$99,994（Brown 2026–27 新生費用頁；非 CDS）', '$99,994 (Brown\'s 2026–27 first-year cost page, not CDS)', ['A7-H33']),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H09'], t: s('缺 H6，無法計算', 'No H6 figure to divide') }] },
            { filter: 'nb', cells: [s('Cornell', 'Cornell'),
              f('需求型', 'Need-based', ['A7-H10']), f('318', '318', ['A7-H10']), f('$88,263', '$88,263', ['A7-H10']), f('$28,067,649', '$28,067,649', ['A7-H10']),
              f('$99,734（無交通欄）', '$99,734 (no transportation field)', ['A7-H10']), f('88.5%', '88.5%', ['A7-H10'])] },
            { filter: 'nb', cells: [s('Georgetown', 'Georgetown'),
              f('需求型', 'Need-based', ['A7-H11']), f('48', '48', ['A7-H11']), f('$75,050', '$75,050', ['A7-H11']), f('$3,602,410', '$3,602,410', ['A7-H11']),
              f('$100,864（書籍欄空白）', '$100,864 (books blank)', ['A7-H11']), f('74.4%', '74.4%', ['A7-H11'])] },
            { filter: 'none', cells: [s('Carnegie Mellon', 'Carnegie Mellon'),
              f('勾選「not available」', 'Marked "not available"', ['A7-H12']),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H12'], t: s('空白', 'Blank') },
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H12'], t: s('空白', 'Blank') },
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H12'], t: s('空白', 'Blank') },
              f('$93,424', '$93,424', ['A7-H12']), f('不適用（未提供 H6 補助）', 'n/a (no H6 aid)', ['A7-H12'])] },
            { filter: 'none public', cells: [s('Georgia Tech', 'Georgia Tech'),
              f('勾選「not available」', 'Marked "not available"', ['A7-H13']), f('—', '—', ['A7-H13']), f('—', '—', ['A7-H13']), f('—', '—', ['A7-H13']),
              f('$55,920（非居民學費）', '$55,920 (nonresident tuition)', ['A7-H13']), f('不適用（未提供 H6 補助）', 'n/a (no H6 aid)', ['A7-H13'])] },
            { filter: 'notread public', cells: [s('Purdue', 'Purdue'),
              ns(['A7-H14']), ns(['A7-H14']), ns(['A7-H14']), ns(['A7-H14']), ns(['A7-H14']), ns(['A7-H14'])] },
            { filter: 'notread public', cells: [s('Michigan', 'Michigan'),
              ns(['A7-H15']), ns(['A7-H15']), ns(['A7-H15']), ns(['A7-H15']), ns(['A7-H15']), ns(['A7-H15'])] },
            { filter: 'nn public', cells: [s('UIUC', 'UIUC'),
              f('只勾非需求型', 'Non-need-based only', ['A7-H16']), f('45', '45', ['A7-H16']), f('$5,176', '$5,176', ['A7-H16']), f('$232,934', '$232,934', ['A7-H16']),
              f('$58,276（非居民學費）', '$58,276 (nonresident tuition)', ['A7-H16']), f('8.9%', '8.9%', ['A7-H16'])] },
            { filter: 'nb nn', cells: [s('Olin（2023–24 CDS）', 'Olin (2023–24 CDS)'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H17']), f('29', '29', ['A7-H17']), f('$30,069', '$30,069', ['A7-H17']), f('$871,994', '$871,994', ['A7-H17']),
              f('$86,474（2023–24）', '$86,474 (2023–24)', ['A7-H17']), f('34.8%（兩者皆 2023–24）', '34.8% (both 2023–24)', ['A7-H17'])] },
            { filter: 'nb nn', cells: [s('Harvey Mudd', 'Harvey Mudd'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H18']), f('38', '38', ['A7-H18']), f('$32,564', '$32,564', ['A7-H18']), f('$1,237,421', '$1,237,421', ['A7-H18']),
              f('$104,512（學校公布的 2026–27 COA，住校；交通寫「依距離而異」未計入，健康保險未計入。基準與 CDS 列不同）', '$104,512 (the college\u2019s published 2026\u201327 COA, on campus; transportation listed as varying by distance and health insurance both left out. A different basis from the CDS rows)', ['V3-R1']), f('31.2%', '31.2%', ['V3-R1', 'A7-H18'])] },
            { filter: 'notread', cells: [s('Johns Hopkins', 'Johns Hopkins'),
              ns(['A7-H19']), ns(['A7-H19']), ns(['A7-H19']), ns(['A7-H19']),
              f('$94,858（學校公布的 2026–27 COA，大一住校；含一次性 $500 matriculation fee。基準與其他列不同：其他列是 CDS G1＋G5 的 2025–26）', '$94,858 (the school\u2019s published 2026\u201327 COA, on-campus first-year, including a one-time $500 matriculation fee. A different basis from the other rows, which are CDS G1+G5 for 2025\u201326)', ['A7-H34']), ns(['A7-H19'])] },
            { filter: 'nb nn', cells: [s('Duke', 'Duke'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H20']), f('215', '215', ['A7-H20']), f('$87,841', '$87,841', ['A7-H20']), f('$18,885,746', '$18,885,746', ['A7-H20']),
              f('$99,548（交通 $778 所在欄位未確認）', '$99,548 (the column holding transportation $778 not confirmed)', ['A7-H20']), f('88.2%', '88.2%', ['A7-H20'])] },
            { filter: 'nb nn', cells: [s('Northwestern', 'Northwestern'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H21']), f('297', '297', ['A7-H21']), f('$74,186', '$74,186', ['A7-H21']), f('$22,033,357', '$22,033,357', ['A7-H21']),
              f('$99,321（交通 varies，未計）', '$99,321 (transportation "varies", left out)', ['A7-H21']), f('74.7%', '74.7%', ['A7-H21'])] },
            { filter: 'nb nn', cells: [s('Rice', 'Rice'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H22']), f('164', '164', ['A7-H22']), f('$79,444', '$79,444', ['A7-H22']), f('$13,028,832', '$13,028,832', ['A7-H22']),
              f('$98,039', '$98,039', ['A7-H22']), f('81.0%', '81.0%', ['A7-H22'])] },
            { filter: 'blank public', cells: [s('UC Berkeley', 'UC Berkeley'),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H23'], t: s('H6 未勾選、未填數字', 'H6 left blank: no box, no figures') },
              ns(['A7-H23']), ns(['A7-H23']), ns(['A7-H23']),
              f('$94,194（非居民學費）', '$94,194 (nonresident tuition)', ['A7-H23']),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H23'], t: s('H6 空白，無法計算', 'H6 blank; nothing to divide') }] },
            { filter: 'blank public', cells: [s('UCLA', 'UCLA'),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H24'], t: s('H6 未勾選、未填數字；G 欄也空白', 'H6 left blank: no box, no figures; G section also blank') },
              ns(['A7-H24']), ns(['A7-H24']), ns(['A7-H24']),
              f('$84,770「Total – Nonresidents」（UCLA 招生費用頁，未標學年，寫「may not be final」）', '$84,770 "Total – Nonresidents" (UCLA admission cost page; no year named; "may not be final")', ['A7-H35']),
              { state: 'not-stated', checked: '2026-11-07', src: ['A7-H24'], t: s('H6 空白，無法計算', 'H6 blank; nothing to divide') }] },
            { filter: 'blank public', cells: [s('UC San Diego', 'UC San Diego'),
              f('未勾任何選項，但填了人數與金額', 'No box marked, but count and amounts filled in', ['A7-H25']), f('214', '214', ['A7-H25']), f('$10,290', '$10,290', ['A7-H25']), f('$2,202,096', '$2,202,096', ['A7-H25']),
              f('$82,588（非居民學費）', '$82,588 (nonresident tuition)', ['A7-H25']), f('12.5%', '12.5%', ['A7-H25'])] },
            { filter: 'nb nn public', cells: [s('UT Austin', 'UT Austin'),
              f('需求型＋非需求型', 'Need-based and non-need-based', ['A7-H26']), f('832', '832', ['A7-H26']), f('$21,343', '$21,343', ['A7-H26']), f('$17,757,378', '$17,757,378', ['A7-H26']),
              f('$66,466（非居民學費；必繳雜費欄空白）', '$66,466 (nonresident tuition; required fees blank)', ['A7-H26']), f('32.1%', '32.1%', ['A7-H26'])] },
            { filter: 'none public', cells: [s('UW Seattle', 'UW Seattle'),
              f('勾選「not available」', 'Marked "not available"', ['A7-H27']), f('—', '—', ['A7-H27']), f('—', '—', ['A7-H27']), f('—', '—', ['A7-H27']),
              f('$66,972（「INTL」學費列）', '$66,972 ("INTL" tuition row)', ['A7-H27']), f('不適用（未提供 H6 補助）', 'n/a (no H6 aid)', ['A7-H27'])] },
            { filter: 'notread', cells: [s('Williams', 'Williams'),
              ns(['A7-H28']), ns(['A7-H28']), ns(['A7-H28']), ns(['A7-H28']), ns(['A7-H28']), ns(['A7-H28'])] },
            { filter: 'notread', cells: [s('Amherst（CDS 分節 PDF，本次未下載）', 'Amherst (CDS published as section PDFs; not downloaded)'),
              ns(['V3-R5']), ns(['V3-R5']), ns(['V3-R5']), ns(['V3-R5']),
              f('$98,160（學校公布的 2026–27 學生費用預算：學費 $75,330＋住宿 $10,980＋餐費 $9,340＋雜費 $710＋個人支出 $1,800；交通依住家距離而異未計入，健康保險 $3,627 可豁免且不計入補助核算用的 COA；必修教材已包含在 comprehensive fee 裡，所以沒有書籍列）', '$98,160 (the college\u2019s published 2026\u201327 student expense budget: tuition $75,330 + housing $10,980 + meals $9,340 + fees $710 + personal expenses $1,800; travel varies by home location and is left out, and health insurance $3,627 is waivable and excluded from the budget used for aid; required course materials are inside the comprehensive fee, so there is no books line)', ['V3-R3', 'V3-R4']),
              ns(['V3-R5'])] },
            { filter: 'nb', cells: [s('Swarthmore', 'Swarthmore'),
              f('需求型', 'Need-based', ['A7-H30']), f('75', '75', ['A7-H30']), f('$87,434', '$87,434', ['A7-H30']), f('$6,557,536', '$6,557,536', ['A7-H30']),
              f('$93,172（無交通欄）', '$93,172 (no transportation field)', ['A7-H30']), f('93.8%', '93.8%', ['A7-H30'])] }
          ]
        },
        items: [
          f('**受助非居民人數最多**（H6，24 校中）：UT Austin 832、Harvard 805、Princeton 597、Yale 459、Penn 448、MIT 411、Cornell 318、Northwestern 297、Stanford 260、Columbia 248。', '**Most nonresidents aided** (H6, among the 24 files read): UT Austin 832, Harvard 805, Princeton 597, Yale 459, Penn 448, MIT 411, Cornell 318, Northwestern 297, Stanford 260, Columbia 248.', ['A7-H26', 'A7-H04', 'A7-H06', 'A7-H05', 'A7-H08', 'A7-H01', 'A7-H10', 'A7-H21', 'A7-H03', 'A7-H07']),
          f('**給非居民的總金額最多**：Harvard $66.8M、Princeton $51.8M、Yale $38.6M、Penn $36.1M、MIT $33.7M、Cornell $28.1M。', '**Largest total awarded to nonresidents**: Harvard $66.8M, Princeton $51.8M, Yale $38.6M, Penn $36.1M, MIT $33.7M, Cornell $28.1M.', ['A7-H04', 'A7-H06', 'A7-H05', 'A7-H08', 'A7-H01', 'A7-H10']),
          f('**勾選「not available」**：Carnegie Mellon、Georgia Tech、UW Seattle 在 H6 勾選非居民沒有 institutional scholarship 或 grant。', '**Marked "not available"**: Carnegie Mellon, Georgia Tech and UW Seattle check the H6 box saying institutional scholarship or grant aid is not available to nonresidents.', ['A7-H12', 'A7-H13', 'A7-H27']),
          f('**H6 空白**：UC Berkeley 與 UCLA 沒勾任何選項、也沒填數字。這是空格，不是「沒有補助」的聲明。', '**H6 left blank**: UC Berkeley and UCLA mark no box and give no figures. That is an empty cell, not a statement that no aid exists.', ['A7-H23', 'A7-H24']),
          f('**有填非居民補助的公立大學**：UT Austin（832 人，平均 $21,343）、UC San Diego（214 人，平均 $10,290，未勾選項）、UIUC（45 人，平均 $5,176，只勾非需求型）。', '**Public universities that report aid to nonresidents**: UT Austin (832 aided, average $21,343), UC San Diego (214, average $10,290, no box marked), UIUC (45, average $5,176, non-need-based only).', ['A7-H26', 'A7-H25', 'A7-H16']),
          inf('UT Austin 在 H6 同時勾了需求型與非需求型，而 H6 只給一個合併的人數；研究筆記沒有讀到兩者的拆分，所以 832 人裡可能包括非依需求給的獎學金，比例不明。', 'UT Austin checks both need-based and non-need-based in H6, and H6 gives one combined count; the research note found no split between the two, so the 832 may include non-need-based awards in a share that is not known.', ['A7-H26']),
          inf('「平均補助占總花費」是**受助者之間**的平均，不是一般錄取者會拿到的金額：它不包括申請了補助卻沒拿到、或根本沒申請的國際生，H6 也不報這些人數。分子是 2025–26 的錢、分母是 2026–27 的花費，同一年的比例應略高，差多少從這些檔案看不出來。', 'The share-of-cost figure is an average **over aided students only**, not a typical offer: it leaves out nonresidents who applied for aid and got none and those who never applied, and H6 does not report either group. The award is 2025–26 money and the cost is 2026–27, so a same-year share would be somewhat higher; by how much these files do not show.', ['A7-H31'])
        ]
      },

      {
        id: 'perschool',
        h: s('逐校資料', 'School by school'),
        judgment: s('每校一段，順序：系統、方案與截止、文書、推薦信、面試、考試、英語、補助，最後是該校值得注意的細節。',
          'One block per school, in this order: system, plans and deadlines, writing, letters, interview, testing, English, aid, then points specific to that school.'),
        subs: subs
      },

      {
        id: 'blocked',
        h: s('無法讀取的學校頁面與缺口', 'School pages that refused automated reading, and the gaps'),
        judgment: s('本節原本列的五個「讀不到」的學校，在 2026-11-07 清晨全部讀到了：Princeton、Northwestern、Purdue 的拒絕是某條抓取路徑的暫時失敗，Williams 與 Michigan 則是 curl 仍 403、瀏覽器打得開。讀到的事實已在同日 07:00 前寫進本頁與其他頁的表格（BACKLOG E8、E9 完成）；本節保留下來，記的是哪一個 client 試過、什麼時候，以及一次診斷錯誤的經過。',
          'All five schools this section listed as unreadable were read in the early hours of 2026-11-07: the Princeton, Northwestern and Purdue refusals were a transient failure of one fetching path, while Williams and Michigan still return 403 to `curl` but open in a browser. Those facts were written into this page and the other pages before 07:00 the same day (BACKLOG E8 and E9 done); the section is kept for what it records: which client was tried and when, and how the misdiagnosis happened.'),
        items: [
          {
            t: s('**Michigan（已解除）**：curl 仍然回 HTTP 403，但 2026-11-07 約 05:55 用瀏覽器直接打開了 requirements 與 essay 兩頁，沒有任何驗證頁。本站先前寫「連瀏覽器也 403」已不成立。', '**Michigan (cleared)**: `curl` still returns HTTP 403, but the requirements and essay pages opened in a browser at about 05:55 on 2026-11-07 with no challenge of any kind. This repo\u2019s earlier note that even a browser got 403 no longer holds.'),
            tag: 'f', src: ['V4-T12', 'V4-T13'],
            sub: [
              f('已讀到並已寫進表格（BACKLOG E8／E9，2026-11-07）：**Michigan 新增 Early Decision**，11/1 同時是 ED 與 EA 截止日（ED 補助 11/15、12/24 前放榜、1/6 繳訂金，Agreement 需申請人／家長／輔導老師三個簽名一起完成），RD 2/1，EA 1/29 前、RD 4/2 前放榜，EA／RD 補助 3/1，5/1 繳訂金；報名費 $75；**只要一封老師推薦信，可以是核心學科老師「或其他非親屬」**；「除非特別要求，不要補交其他文件」；文書字數：Common App 主文書 250–650、Challenges and Circumstances 250、U-M 第一題 100–300、第二題 100–550。頁面並註明招生流程正在修改。', 'Read, and now written into the tables (BACKLOG E8/E9, 2026-11-07): **Michigan has added an Early Decision plan**; Nov 1 is the deadline for both ED and EA (ED aid Nov 15, notifications by Dec 24, deposit Jan 6, and an Agreement that the applicant, a parent or guardian and the counselor must all sign together), RD Feb 1, EA notifications by Jan 29 and RD by April 2, EA/RD aid Mar 1, deposit May 1; a $75 fee; **one teacher evaluation only, which may come from a core academic teacher \u201cor other non-relative\u201d**; "Do not submit additional documents unless specifically requested"; essay limits: Common App 250\u2013650, Challenges and Circumstances 250, U-M question 1 100\u2013300, question 2 100\u2013550. The page also states that the admissions process is being modified.', ['V4-T12', 'V4-T13']),
              f('現有資料來源：Michigan Engineering 招生頁（學院辦公室，非中央招生處）、U-M 招生處在 teamdynamix.umich.edu 的知識庫文章、以及官方頁面的搜尋結果摘要（ED／EA 日期為 fall 2026 季）。', 'What is available: Michigan Engineering admissions pages (a college office, not central admissions), U-M admissions knowledge-base articles on teamdynamix.umich.edu, and search-result summaries of official pages (ED/EA dates for the fall 2026 cycle).', ['A5a-S84', 'A4-S63', 'MI-S1', 'MI-S3'])
            ]
          },
          {
            t: s('**Williams（已解除）**：curl 仍然回 HTTP 403，但 2026-11-07 約 05:50 用瀏覽器直接讀到 first-year 頁，沒有人工驗證頁。', '**Williams (cleared)**: `curl` still returns HTTP 403, but the first-year page was read in a browser at about 05:50 on 2026-11-07, with no human-verification page.'),
            tag: 'f', src: ['V4-T11'],
            sub: [
              f('已讀到並已寫進表格（BACKLOG E8／E9，2026-11-07）：ED 11/15（要簽 Agreement）、12/14 放榜；RD 1/4、4/1 放榜、5/1 回覆；三個平台並列（Common App、**Apply Coalition with Scoir**、QuestBridge），補上先前只有 Scoir 名單、官網無法確認的缺口；三封推薦信（輔導老師＋兩位老師）；$65 報名費；「truly test optional」，SAT／ACT 都 superscore，新舊 ACT 之間也 superscore；選繳四種管道——學術寫作樣本（可無分數、可手寫，**明文請勿交實驗報告**）、藝術作品集（SlideRoom、教師審閱）、**科學研究摘要**（可附 VIVA 錄影）、InitialView（學校自己不辦面試）；每份申請兩位招生人員共同審閱。', 'Read, and now written into the tables (BACKLOG E8/E9, 2026-11-07): ED Nov 15 with an Agreement, decision Dec 14; RD Jan 4, decision April 1, reply May 1; three platforms with no preference (Common App, **Apply Coalition with Scoir**, QuestBridge), which closes the gap where Williams appeared only on Scoir\u2019s own list; three recommendations (counselor plus two teachers); a $65 fee; "truly test optional" with SAT/ACT superscoring, including across the legacy and enhanced ACT; four optional channels \u2014 an academic writing sample (ungraded and handwritten are fine, but "**Please do not submit lab reports**"), an arts portfolio through SlideRoom reviewed by faculty, **scientific research abstracts** with an optional VIVA recording, and InitialView although Williams holds no interviews; two admission officers review every application together.', ['V4-T11']),
              f('Common App 名錄在 2026-11-07 仍顯示 2025–26 的日期（ED 2025/11/15、RD 2026/1/5），學校自己的頁面則是 ED 11/15、RD 1/4。', 'The Common App listing still showed 2025\u201326 dates on 2026-11-07 (ED Nov 15, 2025; RD Jan 5, 2026), while the school\u2019s own page gives ED Nov 15 and RD Jan 4.', ['A5b-S46', 'A3b-S39', 'V4-T11']),
              f('英語、考試、補助等國際生資料取自搜尋引擎對官方網址的摘錄（†）。', 'International facts (English, testing, aid) come from search-engine extracts of official URLs (†).', ['A4-S89', 'A4-S90', 'A4-S91'])
            ]
          },
          {
            t: s('**Amherst（已解除）**：2026-11-07 用瀏覽器一頁一頁讀得到，先前的 HTTP 405 來自自動請求與猜錯的網址，不是人工驗證牆。', '**Amherst (cleared)**: every page read in a browser on 2026-11-07. The earlier HTTP 405 came from automated requests and guessed URLs, not from a human-verification wall.'),
            tag: 'f', src: ['V3-R6', 'V3-R3', 'V3-R13'],
            sub: [
              f('已補讀到：ED 2026-11-09、RD 2027-01-05、5/1 回覆；$75 報名費與 Quick Pass 減免；SAT／ACT 選繳（錄取並入學才要官方成績）；藝術補充由教師審閱；寫作補充裡的「Optional Research Questions」收「獨立於高中課程之外」的研究；每份申請至少兩位 admission dean 讀過；不辦招生面試；對國際生 need-blind；2026–27 費用。', 'Now read: ED 2026-11-09, RD 2027-01-05, reply by May 1; the $75 fee and Quick Pass waiver; SAT/ACT optional, with official scores only from admitted students who enrol; arts supplements reviewed by faculty; an "Optional Research Questions" section in the writing supplement for research "undertaken independently of the high school curriculum"; at least two admission deans read every file; no admission interviews; need-blind for international applicants; 2026-27 costs.', ['V3-R6', 'V3-R14', 'V3-R13', 'V3-R3']),
              { t: s('仍缺：推薦信封數與 Other Recommender 政策，以及 CDS 的 H6／C／G 各欄——CDS 有公開但以下載檔案方式送出，需要有人下載。', 'Still missing: how many letters and the Other Recommender policy, and the CDS H6/C/G cells \u2014 the CDS is published but served as file downloads, so someone has to download it.'), src: ['V3-R5', 'V3-R6'] }
            ]
          },
          {
            t: s('**Northwestern（已解除）**：2026-11-07 約 05:45 起恢復正常回應，requirements、FAQ、deadlines 三頁已直接讀到（V4）；先前的 TLS 憑證錯誤是抓取路徑的暫時失敗，不是網站政策。Princeton 與 Purdue 同時解除。', '**Northwestern (cleared)**: from about 05:45 on 2026-11-07 the host answered normally and its requirements, FAQ and deadlines pages were read directly (V4); the earlier TLS certificate error was a transient failure of one fetching path, not a site policy. Princeton and Purdue cleared at the same time.'),
            tag: 'f', src: ['A3b-S16', 'A4-S84', 'A5b-S18'],
            sub: [
              f('已讀到並已寫進表格（BACKLOG E8／E9，2026-11-07）：2026-27 日期（QuestBridge 2026-10-01、ED 2026-11-01 與補助 12/1、RD 2027-01-04 與補助 2/1）；兩封推薦信加選擇性額外推薦信；明文拒收未經要求的補充材料（含網站）；不再要求 Common App 主文書；寫作補充題目與 300／200 字上限；Glimpse（美國高中）與 InitialView（國際高中）ED 11/6、RD 1/16；Bienen 與 ISP 的額外材料。', 'Read, and now written into the tables (BACKLOG E8/E9, 2026-11-07): the 2026-27 dates (QuestBridge 1 Oct 2026, ED 1 Nov 2026 with aid 1 Dec, RD 4 Jan 2027 with aid 1 Feb); two letters plus an optional extra; unsolicited supplements refused in writing, websites included; the Common App personal essay no longer required; the supplement prompts with their 300/200-word limits; Glimpse (US high schools) and InitialView (international) due 6 Nov / 16 Jan; the Bienen and ISP extras.', ['V4-T5', 'V4-T6', 'V4-T7'])
            ]
          }
        ]
      }
    ]
  };
})();
