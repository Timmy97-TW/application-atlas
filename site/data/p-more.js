// Page: more (US schools 31–50, roster and matrix depth).
// Built from research/2026-11-07_us-schools-31-50-part1_v1.md (ids G1-Sxx)
// and research/2026-11-07_us-schools-31-50-part2_v1.md (ids G2-Sx).
// Every src id exists in data/sources.js. Does NOT touch window.ATLAS.matrix
// (that belongs to the top-30 portfolios page).
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function s(zh, en) { return { zh: zh, en: en }; }
  function f(zh, en, src) { return { t: { zh: zh, en: en }, tag: "f", src: src }; }
  function inf(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "i" }; if (src) o.src = src; return o; }
  function ns(src) { return { state: "not-stated", checked: "2026-11-07", src: src }; }
  var UVA = s("未查核：UVA 官網 2026-11-07 拒絕自動讀取（HTTP 403），格子留空待人工重查。",
    "Not verified: UVA's own site refused automated reading on 2026-11-07 (HTTP 403). Left open for a manual re-check.");

  // ---------------- roster: 20 schools x 9 fields ----------------
  // cells: system, plans, tests, english, aid, supplements, teachers, OR, interview
  var RO = [];
  function ro(school, filter, cells) { RO.push({ cells: [school].concat(cells), filter: filter }); }

  ro("University of Chicago", "ea ed test-optional or-yes", [
    f("Coalition（Scoir）或 Common App；另有 QuestBridge 管道。", "Coalition (Scoir) or Common App; a QuestBridge route is also described.", ["G1-S01", "G1-S03"]),
    f("EA（不具約束）與 ED I：2026-11-02；ED II 與 RD：2027-01-04，申請者當地時間 23:59。", "EA (non-binding) and ED I: 2026-11-02; ED II and RD: 2027-01-04, 11:59 p.m. applicant's local time.", ["G1-S03"]),
    f("SAT/ACT 可選，採 “No Harm”：送了只在有利時採用，國際生同樣適用。", "SAT/ACT optional under a “No Harm” policy: a score is used only if it helps; applies to internationals too.", ["G1-S01"]),
    f("無固定考試要求；「歡迎」提交任何英語能力考試，申請中已能證明英文程度者可免；接受自報分數。", "No fixed exam requirement; applicants are invited to send any English test; not required if English mastery shows elsewhere; self-reported scores accepted.", ["G1-S06"]),
    f("滿足國際生 100% 已證明需求；須於申請時就申請助學金。對國際生是否 need-blind：頁面未載明。", "Meets 100% of internationals' demonstrated need; aid must be requested at application. Whether admission is need-blind for internationals: not stated.", ["G1-S02", "G1-S07"]),
    f("一篇 extended essay（從題目清單選）＋一篇 “Why UChicago”；無嚴格字數，FAQ 建議約 500–700 字與 300–600 字。", "One extended essay chosen from a prompt list plus one “Why UChicago” essay; no strict limits, FAQ suggests roughly 500–700 and 300–600 words.", ["G1-S01", "G1-S04", "G1-S05"]),
    f("兩封，學科老師。", "Two, from teachers of academic subjects.", ["G1-S01"]),
    f("可：一封選填補充推薦（老師、雇主、良師、青年領袖或朋友），“not an expectation”。", "Yes: one optional supplemental letter (teacher, employer, role model, youth leader or friend); “not an expectation”.", ["G1-S01"]),
    f("不面試；以選填的兩分鐘影片自介代替，Glimpse 或 InitialView 亦可。", "No interviews; an optional two-minute video profile instead; Glimpse or InitialView accepted in its place.", ["G1-S02", "G1-S05"])
  ]);

  ro("Dartmouth College", "ed test-required need-blind or-yes", [
    f("一般申請者只收 Common App；QuestBridge finalist 可用 QuestBridge。", "Common App only for first-year applicants; QuestBridge finalists may use QuestBridge.", ["G1-S08"]),
    f("ED（具約束）11/1；RD 1/1。同一頁 QuestBridge 段落寫 RD 為 1/2，兩者並記，不替學校選。", "ED (binding) Nov 1; RD Jan 1. The QuestBridge block on the same page says Jan 2; both are recorded, we do not choose.", ["G1-S08", "G1-S16"]),
    f("美國高中生必須交 SAT 或 ACT；美國境外可改交三科 AP、IB、A-Level 或全國考試。自 Class of 2029 起恢復。", "SAT or ACT required for students at US high schools; students outside the US may use three APs, IB, A-Level or national exams. Reactivated from the Class of 2029.", ["G1-S09", "G1-S10"]),
    f("母語非英語且英語授課未滿兩年者必交：TOEFL、IELTS、Duolingo 或 Cambridge；無最低分，但公布錄取者常見分數（如 IELTS >7、DET >135）。", "Required if English is not the first language and English-medium schooling is under two years: TOEFL, IELTS, Duolingo or Cambridge; no minimums, typical admitted scores published (e.g. IELTS >7, DET >135).", ["G1-S11"]),
    f("對所有國際生 need-blind（自 Class of 2026 起）。", "Need-blind for all international citizens (from the Class of 2026).", ["G1-S12"]),
    f("三題：Why Dartmouth ≤100 字；兩題選一 ≤250 字；六題選一 ≤250 字。", "Three: Why Dartmouth ≤100 words; one of two prompts ≤250 words; one of six prompts ≤250 words.", ["G1-S13"]),
    f("兩封老師評估。", "Two teacher evaluations.", ["G1-S08", "G1-S14"]),
    f("可：強烈鼓勵一封 peer recommendation；另可經 Common App Other Recommender 或 portal 加一封；藝術申請者請藝術老師以 Other Recommender 寄。", "Yes: a peer recommendation is strongly encouraged; an extra letter may come via Common App Other Recommender or the portal; arts applicants ask an arts instructor to use Other Recommender.", ["G1-S08", "G1-S14", "G1-S15"]),
    f("選擇性校友面試，申請後安排、不保證每人都有；“informative and evaluative”，報告放入檔案。", "Optional alumni interviews after applying, not offered to everyone; “informative and evaluative”; a report is added to the file.", ["G1-S19"])
  ]);

  ro("Vanderbilt University", "ed test-optional need-aware", [
    f("Coalition（Scoir）、Common App 或 QuestBridge，擇一送出；學校表示不偏好任何一種。", "Coalition (Scoir), Common App or QuestBridge; submit through one; the school states no preference.", ["G1-S20"]),
    f("ED I 2026-11-01；ED II 2027-01-01；RD 2027-01-01。", "ED I 2026-11-01; ED II 2027-01-01; RD 2027-01-01.", ["G1-S20"]),
    f("2027、2028 秋季入學可選；2029 秋季入學起要求。", "Optional for fall 2027 and fall 2028 entry; required from fall 2029 entry.", ["G1-S22"]),
    f("TOEFL iBT（含 Home／Paper）、TOEFL Essentials、IELTS、Cambridge C1/C2、LanguageCert 或 Duolingo；母語或授課語言為英語、ACT English >26 或 SAT EBRW >630 可免。", "TOEFL iBT (incl. Home/Paper), TOEFL Essentials, IELTS, Cambridge C1/C2, LanguageCert or Duolingo; waived for English first language or medium, ACT English >26 or SAT EBRW >630.", ["G1-S21"]),
    f("對國際生 need-aware；對美國公民與符合資格的非公民 need-blind。", "Need-aware for international students; need-blind for US citizens and eligible non-citizens.", ["G1-S21"]),
    f("一題約 250 字短答（校訓 Crescere aude 與身分、文化、背景如何促成成長）；Peabody 教育主修多一題。", "One short answer of about 250 words (the motto Crescere aude and how identity, culture or background shaped growth); Peabody education majors answer one more.", ["G1-S21", "G1-S23"]),
    f("兩封學科老師推薦，加輔導老師推薦。", "Two academic teacher letters plus a counselor letter.", ["G1-S21"]),
    ns(["G1-S21"]),
    f("招生處不面試；可選 Glimpse 影片（美國高中）或 InitialView（國際生）。", "No admissions-office interviews; optional Glimpse video (US high schools) or InitialView (international).", ["G1-S21"])
  ]);

  ro("Washington University in St. Louis", "ea ed test-optional", [
    f("Common App 或 Coalition App。", "Common App or Coalition App.", ["G1-S24", "G1-S25"]),
    f("EA 與 ED I：11/2；ED II 與 RD：1/4。日期旁未印年份，頁面說明適用 fall 2027 入學。", "EA and ED I: Nov 2; ED II and RD: Jan 4. No year printed beside the dates; the page says they are for the class entering fall 2027.", ["G1-S24"]),
    f("考試可選；接受自報分數。美國境外可改交 IB、A-Level、三科 AP、三科 IB HL 或全國考試。", "Test-optional; self-reported scores accepted. Applicants outside the US may submit IB, A-Level, three APs, three IB HL or national exams instead.", ["G1-S24", "G1-S25", "G1-S30"]),
    f("母語非英語的國際生需 TOEFL、IELTS 或 Duolingo；自 fall 2027 申請者起不再以 SAT/ACT 代替；英語授課 3 年以上可申請豁免。", "TOEFL, IELTS or Duolingo for internationals whose first language is not English; from fall 2027 applicants SAT/ACT no longer substitute; exemption possible after 3+ years of English-medium study.", ["G1-S26"]),
    f("need-blind 只適用美國公民與永久居民的大一申請者；頁面明說國際申請者不在此計畫內。", "Need-blind covers first-year US citizens and permanent residents only; the page says international applicants are not included.", ["G1-S27"]),
    f("一題 250 字：想在大學讀什麼、為什麼。", "One 250-word response on what you want to study and why.", ["G1-S24", "G1-S25"]),
    f("輔導老師推薦＋一封老師評估。", "Counselor recommendation plus one teacher evaluation.", ["G1-S24"]),
    ns(["G1-S24", "G1-S25"]),
    f("不辦評估性面試；強烈鼓勵以第三方面試（如 InitialView）作為英語能力證明。", "No evaluative interviews; third-party interviews (e.g. InitialView) strongly encouraged as English-proficiency evidence.", ["G1-S26"])
  ]);

  ro("University of Notre Dame", "rea test-optional need-blind", [
    f("Common App（附 Notre Dame Writing Supplement）或 Coalition。", "Common App (with the Notre Dame Writing Supplement) or Coalition.", ["G1-S31"]),
    f("REA 11/1（不具約束；不得同時申請他校 ED I，可申請他校 ED II）；RD 1/4。", "REA Nov 1 (non-binding; no ED I elsewhere, ED II elsewhere allowed); RD Jan 4.", ["G1-S31", "G1-S32"]),
    f("2026–27 週期可選；2027–28 週期（fall 2028 入學）起恢復要求。美國境外可以 IB、A-Level 或 French Bac 預估成績代替。", "Optional through 2026–27; required again from the 2027–28 cycle (fall 2028 entry). Outside the US, predicted IB, A-Level or French Bac may replace SAT/ACT.", ["G1-S31", "G1-S33", "G1-S64"]),
    f("TOEFL、IELTS、DET 或 PTE Academic；可豁免情形如 ACT English/Reading ≥26；不收 TOEFL Home Edition。", "TOEFL, IELTS, DET or PTE Academic; waivers e.g. ACT English/Reading ≥26; TOEFL Home Edition not accepted.", ["G1-S34"]),
    f("對所有學生 need-blind，含國際生。", "Need-blind for all students, including internationals.", ["G1-S34", "G1-S36"]),
    f("一篇必答 ≤150 字＋三題選二，各 50–100 字。", "One required essay ≤150 words plus two of three short answers, 50–100 words each.", ["G1-S31"]),
    f("一封核心學科老師；FAQ 明說只送一封老師推薦。", "One core academic teacher; the FAQ says send only one teacher letter.", ["G1-S33", "G1-S35"]),
    f("只在沒有輔導老師推薦時代替，或給 homeschool 申請者。", "Only as a substitute when no counselor letter is available, or for homeschoolers.", ["G1-S33", "G1-S35"]),
    f("不面試；可選 Glimpse（美國）或 InitialView（國際）60–90 秒影片。", "No interviews; optional Glimpse (US) or InitialView (international) 60–90 s video.", ["G1-S33"])
  ]);

  ro("Emory University", "ed test-optional", [
    f("Common App；另有 QuestBridge。", "Common App; QuestBridge also.", ["G1-S37", "G1-S38", "G1-S39"]),
    f("ED I 11/1；ED II 1/1；RD 1/1；Scholar Programs 11/15。", "ED I Nov 1; ED II Jan 1; RD Jan 1; Scholar Programs Nov 15.", ["G1-S37"]),
    f("考試頁：2026–27 週期（fall 2027 入學）可選。FAQ 另寫 fall 2028 入學不要求；兩頁年份不一致。", "Exams page: optional for the 2026–27 cycle (fall 2027 starters). The FAQ instead names fall 2028 entry; the two pages disagree on the year.", ["G1-S39", "G1-S40"]),
    f("清單上 TOEFL 或 IELTS 標為「建議」；考試頁接受 TOEFL、IELTS、DET 或四年英語授課；新制 TOEFL 建議 ≥5.5。", "Checklist marks TOEFL or IELTS as recommended; exams page accepts TOEFL, IELTS, DET or four years of English-medium schooling; recommended new-scale TOEFL ≥5.5.", ["G1-S38", "G1-S39"]),
    f("對「一部分」國際生提供需求助學金；申請助學金的國際生須走 RD。need-blind 與否未載明。", "Need-based aid “to a select group of international students”; international aid applicants must apply RD. Need-blind status not stated.", ["G1-S42", "G1-S43"]),
    f("必答學術興趣（建議 200 字）＋四題選一，150 字。", "Required academic-interest answer (200 words recommended) plus one of four prompts, 150 words.", ["G1-S41"]),
    f("兩封，10–12 年級核心學科老師（含技能型視覺／表演藝術）。", "Two, from core academic teachers in grades 10–12 (skill-based visual/performing arts count).", ["G1-S38"]),
    ns(["G1-S38", "G1-S40"]),
    f("不與招生人員或校友做評估性面試；國際生可交 InitialView，中國大陸申請者強烈建議。", "No evaluative interviews with staff or alumni; internationals may send InitialView, strongly recommended for Mainland China.", ["G1-S40", "G1-S42"])
  ]);

  ro("University of Southern California", "ed ea test-optional", [
    f("Common App。", "Common App.", ["G1-S44"]),
    f("ED（具約束，多數主修）與 EA（不具約束）皆 11/1；RD：表演藝術 12/1，其餘 1/10。獎學金考量須在 11/1（表演藝術 12/1）前送出。", "ED (binding, most majors) and EA (non-binding) both Nov 1; RD Dec 1 for performing arts, Jan 10 for most majors. Merit consideration needs the Nov 1 (or Dec 1) deadline.", ["G1-S44", "G1-S46"]),
    f("2027–28 入學考試可選；只收正式成績，不收自報。", "Test-optional for 2027–28 entry; official scores only, no self-report.", ["G1-S45", "G1-S46"]),
    f("非母語者必交，無豁免：TOEFL（舊制 100／新制 5，含單項門檻）、IELTS、PTE、C1 Advanced ≥185；DET（≥130）只在無法參加認可考試時使用，入學時另考。", "Required for non-native speakers, no waivers: TOEFL (100 old / 5 new, with section minimums), IELTS, PTE, C1 Advanced ≥185; DET (≥130) only if an approved exam is unavailable, then an on-arrival exam.", ["G1-S45"]),
    f("不提供國際生需求助學金，可有 merit 獎學金；need-blind 只對本國學生。", "No need-based aid for international applicants; merit scholarships possible; need-blind is stated for domestic students.", ["G1-S45", "G1-S47"]),
    f("有 USC Supplemental Questions 與 “Quick Takes”，但讀到的 USC 頁面未列題目與字數。", "USC Supplemental Questions and “Quick Takes” exist; their text and limits are not on the USC pages read.", ["G1-S44", "G1-S48"]),
    f("一封，輔導老師或老師皆可；部分學程要求更多。", "One letter, from a counselor or a teacher; some programs need more.", ["G1-S44"]),
    f("Viterbi：不收；“we don't want more than the Teacher/Counselor Report”。其他主修除學程要求外未載明。", "Viterbi: no; “we don't want more than the Teacher/Counselor Report”. Other majors not stated beyond program requirements.", ["G1-S44", "G1-S48"]),
    f("不面試；Duolingo、InitialView、Vericant 只作英語能力證明，“not evaluative in nature”。", "No interviews; Duolingo, InitialView and Vericant only as English evidence, “not evaluative in nature”.", ["G1-S44", "G1-S45"])
  ]);

  ro("University of Virginia", "test-optional", [
    f("Common App 列出 UVA 收大一申請；是否也收 Coalition 未查核。", "Common App lists UVA as taking first-year applications; whether Coalition is also accepted is not verified.", ["G1-S50"]),
    UVA,
    f("Common App 的 UVA 頁標示 “Test Optional/Flexible” 與接受自報分數；未經 UVA 官網確認。", "Common App's UVA page carries “Test Optional/Flexible” and self-reported-score tags; not confirmed on UVA's own site.", ["G1-S50"]),
    UVA, UVA, UVA, UVA, UVA, UVA
  ]);

  ro("New York University", "ed test-optional or-yes", [
    f("Common App，紐約、阿布達比、上海三校區皆同。", "Common App, for all three campuses (New York, Abu Dhabi, Shanghai).", ["G1-S51"]),
    f("ED I 11/1；ED II 1/1；RD 1/5；當地時間 23:59。", "ED I Nov 1; ED II Jan 1; RD Jan 5; 11:59 p.m. local time.", ["G1-S51"]),
    f("考試可選至 2027–28 週期；若交只交一種（SAT、ACT、3 科 AP、IB、A-Level、全國考試）；A-Level 學生無論如何都要交預估或結果。", "Test-optional through the 2027–28 cycle; if submitting, one form only (SAT, ACT, 3 APs, IB, A-Level, national exams); A-Level students submit predictions or results regardless.", ["G1-S52"]),
    f("母語非英語且近三年有非英語授課者通常需交：TOEFL iBT、DET、IELTS Academic、PTE Academic、C1/C2；SAT/ACT/AP/IB/A-Level 不能代替。", "Generally required if English is not the first language and recent schooling was not fully in English: TOEFL iBT, DET, IELTS Academic, PTE Academic, C1/C2; SAT/ACT/AP/IB/A-Level do not waive it.", ["G1-S53"]),
    f("非美國大一申請者可經 CSS Profile 申請需求型獎學金；need-blind 與否未載明。", "Need-based scholarships are available to non-US first-years via CSS Profile; need-blind status not stated.", ["G1-S54"]),
    f("大一申請頁未列任何 NYU 自己的補充題。", "No school-specific prompt listed on the first-year page.", ["G1-S51"]),
    f("必交一封，推薦人可為老師、輔導老師、教練、主管或其他有權威的人；最多三封。", "One required, from a teacher, counselor, coach, supervisor or anyone in a position of authority; up to three.", ["G1-S51"]),
    f("可，依同一規則。", "Yes, by the same rule.", ["G1-S51"]),
    f("“NYU does not offer interviews to any candidates.”", "“NYU does not offer interviews to any candidates.”", ["G1-S53"])
  ]);

  ro("Tufts University", "ed test-optional", [
    f("Common App、Coalition（Scoir）或 QuestBridge；學校表示無偏好。", "Common App, Coalition via Scoir or QuestBridge; the school states no preference.", ["G1-S61"]),
    f("ED I 2026-11-02；ED II 2027-01-04；RD 2027-01-04。學校文件與推薦信分別於 11/20、1/11、1/17 截止。", "ED I 2026-11-02; ED II 2027-01-04; RD 2027-01-04. School reports and letters due Nov 20, Jan 11, Jan 17.", ["G1-S55"]),
    f("所有大學部申請者考試可選；SAT ≥1300／ACT ≥28 者被鼓勵提交。", "Test-optional for all undergraduates; SAT ≥1300 / ACT ≥28 are encouraged to submit.", ["G1-S57"]),
    f("主要語言非英語者必交，英語授課 3 年以上可免：TOEFL、IELTS、PTE、Duolingo；不 superscore、不收 MyBest。", "Required if the primary language is not English, unless 3+ years in English-medium school: TOEFL, IELTS, PTE, Duolingo; no superscoring or MyBest.", ["G1-S58", "G1-S62"]),
    f("不論國籍滿足 100% 已證明需求；須在申請時提出；申請需求助學金的國際生免申請費。need-blind 與否未載明。", "Meets 100% of demonstrated need regardless of citizenship; aid only if requested at application; fee waived for internationals seeking aid. Need-blind status not stated.", ["G1-S59"]),
    f("兩題：#1 與 Tufts 的接觸，75–150 字；#2 依學院 100–200 字，工程學院問你參與建造或設計的專案與角色。", "Two: #1 engagement with Tufts, 75–150 words; #2 by school, 100–200 words; Engineering asks about a project you helped build or design and your role.", ["G1-S56"]),
    f("一封核心學科老師（BFA 可用視覺藝術老師）＋輔導老師。", "One core academic teacher (BFA may use a visual art teacher) plus counselor.", ["G1-S55"]),
    ns(["G1-S55", "G1-S62"]),
    f("讀到的頁面未提供面試；InitialView 或 Duolingo 面試只用來證明英語能力。", "No interview offered on pages read; InitialView or Duolingo interviews accepted only to show English skills.", ["G1-S58"])
  ]);

  ro("UNC Chapel Hill", "ea or-yes", [
    f("只列 Common App。", "Common App; no other system listed.", ["G2-S1", "G2-S2"]),
    f("EA（不具約束）10/15，補件與成績 11/7；RD 1/15，補件 2/21。無 ED。國際生同日期。", "EA (non-binding) Oct 15, materials and scores Nov 7; RD Jan 15, materials Feb 21. No ED. Internationals use the same dates.", ["G2-S1", "G2-S2"]),
    f("UNC System 規則（2026–27 起）：加權 GPA ≥2.8 不需交分數；低於 2.8 需 ACT 17+ 或 SAT 930+。採自報分數並 superscore。", "UNC System rule (2026–27 on): weighted GPA ≥2.8 need not submit; below 2.8 needs ACT 17+ or SAT 930+. Self-reported scores used and superscored.", ["G2-S1", "G2-S12"]),
    f("母語非英語的非公民必交：TOEFL、IELTS、Duolingo、C1、C2；公布「強申請者通常」分數（如新制 TOEFL 5+），並說明不是最低分；SAT/ACT 不能代替。", "Required for non-citizens whose first language is not English: TOEFL, IELTS, Duolingo, C1, C2; publishes what strong applicants typically score (e.g. new TOEFL 5+), stated as not minimums; SAT/ACT do not count.", ["G2-S3", "G2-S4"]),
    f("非公民不能領需求型助學金；need-blind 與否未載明。", "Non-citizens are not eligible for need-based aid; need-blind status not stated.", ["G2-S3"]),
    f("2026–27 題目頁只列 Common App 主文 250–650 字；UNC 自己的短答題未列。", "The 2026–27 prompts page lists only the Common App essay, 250–650 words; no UNC short answers listed.", ["G2-S10"]),
    f("一封，核心學科老師。", "One, from a core academic teacher.", ["G2-S1", "G2-S2"]),
    f("可：學校表示樂意收額外推薦，Common App 以外可 email。", "Yes: an additional letter is welcome; may be emailed if not sent via Common App.", ["G2-S7"]),
    f("審查不使用面試。", "Interviews are not used in review.", ["G2-S8"])
  ]);

  ro("University of Wisconsin–Madison", "ea test-optional or-yes direct-admit", [
    f("Common App 或 Universities of Wisconsin Application，擇一。", "Common App or the Universities of Wisconsin Application; use one.", ["G2-S13"]),
    f("EA（不具約束）11/1，補件 11/9；RD 1/15，補件 1/22；太平洋時間 23:59。無 ED。頁面未印年份。", "EA (non-binding) Nov 1, materials Nov 9; RD Jan 15, materials Jan 22; 11:59 p.m. Pacific. No ED. No year printed.", ["G2-S13", "G2-S14"]),
    f("可選至 spring 2028 學期；只看最高總分，不 superscore。", "Optional through the spring 2028 term; top composite only, no superscoring.", ["G2-S13", "G2-S16"]),
    f("最低：DET 115、IELTS 6.5、TOEFL 80（2026-01-20 前）或 4.5（之後）；四年英語授課可免；AP、IB、SAT、ACT 不能代替。", "Minimums: DET 115, IELTS 6.5, TOEFL 80 (to 2026-01-20) or 4.5 (from 2026-01-21); waived after four English-medium years; AP, IB, SAT, ACT cannot waive it.", ["G2-S13", "G2-S17"]),
    f("F-1/J-1 學生錄取後才交一年財力證明；need-blind 與否未載明。", "F-1/J-1 students show one year of funding after admission; need-blind status not stated.", ["G2-S17"]),
    f("兩篇，各 ≤650 字（建議 300–500）：個人陳述，以及為何選 UW–Madison 與該主修。", "Two essays, ≤650 words each (300–500 suggested): personal statement, and why UW–Madison and the chosen major.", ["G2-S15"]),
    f("一封，能談學業能力者（老師、輔導老師或教職員）；工程申請者建議數學或科學老師。", "One, from someone who can speak to academics (teacher, counselor or faculty); engineering applicants encouraged to use math or science.", ["G2-S13", "G2-S16"]),
    f("可：選填第二封，例如雇主、教練、“research mentor”、社區領袖。", "Yes: an optional second letter, e.g. employer, coach, “research mentor”, community leader.", ["G2-S13"]),
    ns(["G2-S13", "G2-S16"])
  ]);

  ro("University of Rochester", "ed test-optional need-aware or-yes", [
    f("Common App 或 Coalition（Scoir）；Eastman 音樂學士用 Eastman 自己的申請。", "Common App or Coalition (Scoir); Eastman BM applicants use Eastman's own application.", ["G2-S19"]),
    f("ED I 11/1；ED II 1/5；RD 1/5；獎學金優先 12/1。頁面未印年份。", "ED I Nov 1; ED II Jan 5; RD Jan 5; priority scholarship Dec 1. No year printed.", ["G2-S20"]),
    f("考試可選，未交者不會處於不利；適用年份未載明。", "Test-optional; non-submitters not disadvantaged; years covered not stated.", ["G2-S19", "G2-S21"]),
    f("建議（非最低）：DET 130、IELTS 7.5、TOEFL 100 或新制 5；不 superscore、不收 MyBest；母語或 3 年以上英語授課可免。", "Recommended (not minimum): DET 130, IELTS 7.5, TOEFL 100 or new-scale 5; no superscoring or MyBest; waived for native speakers or 3+ English-medium years.", ["G2-S22"]),
    f("國際生 need-aware：財務需求是考量因素之一；不申請助學金者須交 IFSF。", "Need-aware for internationals: financial need is a contributing factor; non-aid applicants file the IFSF.", ["G2-S22"]),
    f("要一篇學校專屬補充短文；題目、篇數、字數在學校頁面上未載明。", "A school-specific supplemental essay is required; prompt, count and limit not stated on the school's pages.", ["G2-S19", "G2-S20"]),
    f("必交一封，最多收三封。", "One required; up to three accepted.", ["G2-S19"]),
    f("可：選填 Family/Peer Recommendation Form（家人、朋友、教練、雇主、社區領袖）。", "Yes: optional Family/Peer Recommendation Form (family, friend, coach, employer, community leader).", ["G2-S19"]),
    f("“strongly recommended”，且在審查中同等考量；Zoom、校友、美國場次或 InitialView；ED I 須在 11/15 前，ED II/RD 在 1/5 前完成。", "“strongly recommended” and “considered equally” in review; Zoom, alumni, US events or InitialView; done by Nov 15 (ED I) or Jan 5 (ED II/RD).", ["G2-S23"])
  ]);

  ro("Case Western Reserve University", "ea ed test-optional or-yes", [
    f("Common App 或 Coalition（Scoir）。", "Common App or Coalition with Scoir.", ["G2-S24"]),
    f("EA 與 ED I 11/1；Pre-Professional Scholars 12/1；ED II 與 RD 1/15。頁面未印年份。", "EA and ED I Nov 1; Pre-Professional Scholars Dec 1; ED II and RD Jan 15. No year printed.", ["G2-S24", "G2-S26"]),
    f("考試可選，100+ 個學程都不要求；放榜前兩週仍可改選擇。適用年份未載明。", "Test-optional; no testing required for any of 100+ programs; choice can change until two weeks before decisions. Years covered not stated.", ["G2-S27"]),
    f("最低：DET 115、IELTS 7、PTE 61、新制 TOEFL 4.5；接受自報；兩年英語授課、SAT EBRW 630+ 或 ACT English 26+ 自動豁免。", "Minimums: DET 115, IELTS 7, PTE 61, new-scale TOEFL 4.5; self-report accepted; auto waiver for two English-medium years, SAT EBRW 630+ or ACT English 26+.", ["G2-S28"]),
    f("非美國籍申請助學金者只交 CSS Profile；need-blind 與否未載明。", "Non-US aid applicants file only the CSS Profile; need-blind status not stated.", ["G2-S25", "G2-S28"]),
    f("一篇 Common App／Coalition 主文；Pre-Professional Scholars 多兩篇；一般校方專屬題目未載明。", "One main Common App/Coalition essay; Pre-Professional Scholars write two more; a general school-specific prompt is not stated.", ["G2-S25", "G2-S26"]),
    f("兩封老師推薦＋輔導老師推薦。", "Two teacher recommendations plus counselor.", ["G2-S25"]),
    f("可：額外推薦信列在 portal 可上傳的補充材料中。", "Yes: additional letters are listed among portal additional materials.", ["G2-S29"]),
    f("只有 Pre-Professional Scholars 決選者面試；一般申請者未載明。", "Only Pre-Professional Scholars finalists are interviewed; general applicants not stated.", ["G2-S25"])
  ]);

  ro("Northeastern University", "ed ea test-optional or-yes", [
    f("Common App 或 Coalition；申請費 $75。", "Common App or Coalition; $75 fee.", ["G2-S31", "G2-S33"]),
    f("ED I 11/1；EA 11/1；ED II 1/1；RD 1/1。頁面未印年份。", "ED I Nov 1; EA Nov 1; ED II Jan 1; RD Jan 1. No year printed.", ["G2-S32"]),
    f("考試可選，未交者不受影響；採 superscore。", "Test-optional; non-submitters not penalized; superscored.", ["G2-S31", "G2-S33"]),
    f("不論國籍皆需（可豁免）；學校說沒有最低分，公布中間 50%（如 TOEFL 新制 5.0–5.5）。", "Required regardless of citizenship unless waived; no minimum scores; middle-50% ranges published (e.g. new TOEFL 5.0–5.5).", ["G2-S34"]),
    f("國際生不能申請需求型助學金，可申請 merit 獎學金；need-blind 與否未載明。", "Internationals are not eligible for need-based aid; merit scholarships open; need-blind status not stated.", ["G2-S34", "G2-S36"]),
    ns(["G2-S31", "G2-S33", "G2-S36"]),
    f("一封老師＋一封輔導老師。", "One teacher plus one counselor.", ["G2-S31", "G2-S33"]),
    f("可：可加 1–2 封，不保證都會被考量。", "Yes: 1–2 additional letters; not all may be considered.", ["G2-S33"]),
    f("不辦校友或校園面試；InitialView、Vericant 第三方影片面試在期限前送達會被考量。", "No alumni or on-campus interviews; InitialView or Vericant video interviews are considered if in by the plan's deadline.", ["G2-S33", "G2-S34"])
  ]);

  ro("University of Maryland, College Park", "ea test-optional direct-admit", [
    f("Common App 或 ApplyWeb。", "Common App or ApplyWeb.", ["G2-S37"]),
    f("EA（不具約束）11/1；Regular 1/20。", "EA (non-binding) Nov 1; Regular Jan 20.", ["G2-S37", "G2-S38"]),
    f("考試可選至 Spring 與 Fall 2027 申請週期。", "Test-optional through the Spring and Fall 2027 cycles.", ["G2-S37"]),
    f("DET 120、IELTS 7、TOEFL 5（新制）或 95；在美國高中四年等情形可免，學校亦可裁量豁免。", "DET 120, IELTS 7, TOEFL 5 (new) or 95; waivers include four years at a US high school; may also be waived at the office's discretion.", ["G2-S41", "G2-S42"]),
    ns(["G2-S41"]),
    f("一篇個人短文 ≤650 字，七題選一（與 Common App 題目相同）；是 23 項審查因素之一。短答題未載明。", "One personal essay ≤650 words from seven prompts (the Common App set); one of 23 review factors. Short answers not stated.", ["G2-S39"]),
    f("兩封：一封輔導老師、一封老師。", "Two letters: one counselor, one teacher.", ["G2-S37"]),
    ns(["G2-S37", "G2-S40"]),
    ns(["G2-S37"])
  ]);

  ro("UC Davis", "", [
    f("UC Application；收件期 10/1–11/30，8/1 開放。", "UC Application; filing period Oct 1–Nov 30, opens Aug 1.", ["G2-S43", "G2-S47", "G2-S50"]),
    f("無提前方案，只有 UC 統一收件期。", "No early plan; the single UC filing window.", ["G2-S43", "G2-S47"]),
    f("錄取與獎學金都不再考慮 SAT/ACT。", "SAT/ACT not considered for admission or scholarships.", ["G2-S46"]),
    f("UC 最低：IELTS 6.5、TOEFL 4.5（2026 年 1 月起；之前 80）、DET 115，各校可再提高；在美就學未滿三年且先前非英語授課者需證明。UC Davis 自己的門檻未載明。", "UC minimums: IELTS 6.5, TOEFL 4.5 (from Jan 2026; 80 before), DET 115; campuses may set higher. Proof needed if under three years of US study with prior non-English instruction. Davis-specific minimums not stated.", ["G2-S45", "G2-S49"]),
    ns(["G2-S49", "G2-S50"]),
    f("UC PIQ：八題選四，每題 ≤350 字；另有 additional comments 欄位。", "UC PIQs: 4 of 8, ≤350 words each; an additional comments field.", ["G2-S44"]),
    f("不收：學校明說不會審閱推薦信。", "Not accepted: the school says it will not review letters of recommendation.", ["G2-S48"]),
    f("不收（同一規則）。", "No (same rule).", ["G2-S48"]),
    ns(["G2-S46", "G2-S48"])
  ]);

  ro("UC Santa Barbara", "direct-admit", [
    f("UC Application（College of Creative Studies 另有 portal）。", "UC Application (the College of Creative Studies has its own portal).", ["G2-S51", "G2-S55"]),
    f("fall 2027 入學：10/1–11/30 送 UC Application；無提前方案。CCS 優先截止 2027-01-05。", "Fall 2027: submit the UC Application Oct 1–Nov 30; no early plan. CCS priority deadline 2027-01-05.", ["G2-S51", "G2-S55"]),
    f("錄取與獎學金都不使用 SAT/ACT。", "SAT/ACT not used for admission or scholarships.", ["G2-S52", "G2-S53"]),
    f("英語授課高中三年以上可免；否則 Duolingo ≥115，UC 最低 IELTS 6.5、TOEFL 4.5／80；申請時自報，接受入學後才交正式成績。", "Not needed after 3+ English-medium high-school years; otherwise Duolingo ≥115, UC minimums IELTS 6.5, TOEFL 4.5 / 80; self-reported, official scores after accepting the offer.", ["G2-S45", "G2-S53", "G2-S54"]),
    f("國際生的助學金與獎學金「非常有限」；need-blind 與否未載明。", "Aid and scholarships for internationals are “very limited”; need-blind status not stated.", ["G2-S54"]),
    f("UC PIQ：八題選四，每題 350 字。", "UC PIQs: 4 of 8, 350 words each.", ["G2-S44"]),
    f("一般錄取不審推薦信；CCS 例外。", "Not reviewed for general admission; the CCS is the exception.", ["G2-S53", "G2-S55"]),
    f("一般錄取：不收。CCS 收推薦信（Biology、Chemistry、CS、Physics 必交）。", "General admission: no. The CCS takes letters (required for Biology, Chemistry, CS, Physics).", ["G2-S53", "G2-S55"]),
    ns(["G2-S53"])
  ]);

  ro("Rensselaer Polytechnic Institute", "ed ea test-optional", [
    f("Common App 或 The RPI Application。", "Common App or The RPI Application.", ["G2-S56"]),
    f("fall 2027：ED I 延至 11/6；EA 12/1；ED II 1/6；RD 1/15；B.S./M.D. 11/1。", "Fall 2027: ED I extended to Nov 6; EA Dec 1; ED II Jan 6; RD Jan 15; B.S./M.D. Nov 1.", ["G2-S56"]),
    f("可自行決定是否交 SAT/ACT；B.S./M.D. 必交正式成績。", "Applicants choose whether to submit SAT/ACT; B.S./M.D. must send official scores.", ["G2-S56"]),
    f("TOEFL 88、IELTS 6.5、DET 115、PTE 59；只收正式成績，不收自報；SAT EBRW 640+、ACT English 22+、IB English A HL 6+ 等可免。", "TOEFL 88, IELTS 6.5, DET 115, PTE 59; official scores only, no self-report; waivers include SAT EBRW 640+, ACT English 22+, IB English A HL 6+.", ["G2-S57"]),
    f("國際生 merit 獎學金最高每年 $20,000，須能負擔全額費用；need-blind 與否未載明。", "Merit scholarships for internationals up to $20,000 a year; internationals must be ready to cover full cost; need-blind status not stated.", ["G2-S57"]),
    f("Common App 主文即滿足 RPI 要求；B.S./M.D.（為何學醫）與建築（為何建築）例外；字數未印。", "The general essay satisfies RPI, except B.S./M.D. (why medicine) and Architecture (why architecture); limits not printed.", ["G2-S56"]),
    f("一封，輔導老師或老師，偏好數學或科學老師。", "One, from a counselor or teacher, preferably math or science.", ["G2-S56"]),
    ns(["G2-S56", "G2-S58"]),
    f("“RPI does not conduct interviews.” 可選 GLIMPSE 影片（美國學生，60–90 秒）或 InitialView（國際）。", "“RPI does not conduct interviews.” Optional GLIMPSE video (US students, 60–90 s) or InitialView (international).", ["G2-S56", "G2-S57"])
  ]);

  ro("Pomona College", "ed test-optional need-aware or-yes", [
    f("Common App、Coalition（Scoir）或 QuestBridge，無偏好。", "Common App, Coalition on Scoir or QuestBridge; no preference.", ["G2-S60"]),
    f("ED I 11/8；ED II 1/8；RD 1/8。", "ED I Nov 8; ED II Jan 8; RD Jan 8.", ["G2-S60"]),
    f("考試可選；交 ACT 須含 Science 部分。適用年份未載明。", "Test-optional; ACT submitters must include Science. Years covered not stated.", ["G2-S60"]),
    f("英語非主要授課語言者必交；最低 TOEFL 100、IELTS 7、DET 130。豁免條件未載明。", "Required if English is not the main language of instruction; minimums TOEFL 100, IELTS 7, DET 130. Waiver not stated.", ["G2-S62"]),
    f("對國際生 need-aware。", "Need-aware for international applicants.", ["G2-S62"]),
    f("兩題：Academic Interest Statement 150 字；三題選一短答 250 字。", "Two: Academic Interest Statement, 150 words; one of three short responses, 250 words.", ["G2-S60"]),
    f("兩封，核心學科老師。", "Two, from core academic teachers.", ["G2-S60"]),
    f("可：選填，選修課老師、教練、雇主或其他人。", "Yes, optional: elective teacher, coach, employer or another person.", ["G2-S60", "G2-S63"]),
    f("不要求面試；Duolingo、Vericant、InitialView 可選，但不能取代英語考試。Pomona 自辦面試未載明。", "Interviews not required; Duolingo, Vericant or InitialView optional and do not replace English tests. Pomona-run interviews not stated.", ["G2-S62"])
  ]);

  // ---------------- matrix: 20 schools x 5 materials ----------------
  var MX = [];
  function mx(school, cells) { MX.push({ cells: [school].concat(cells) }); }

  mx("University of Chicago", [
    f("收：音樂、舞蹈、視覺藝術、戲劇作品，經 UChicago Account 自行上傳；FAQ 建議 1–2 分鐘錄音錄影或 2–3 張作品。原話：“None of these are required”", "Yes: music, dance, visual art, theater highlights, self-uploaded in the UChicago Account; FAQ suggests 1–2 min of recording or 2–3 prints. “None of these are required”", ["G1-S02", "G1-S05"]),
    f("未明列此類別；清單上有 “other work of note” 與 business plans，經 UChicago Account。", "Not named; “other work of note” and business plans are listed, via the UChicago Account.", ["G1-S02", "G1-S05"]),
    f("收：研究專題；FAQ 建議交 “an abstract of original research”，而非全文。", "Yes: research projects; the FAQ suggests “an abstract of original research”, not a full paper.", ["G1-S02", "G1-S05"]),
    f("收：兩分鐘影片自介，在 Portfolio 下上傳或貼連結；建議 11/6（EA/ED I）或 1/10（ED II/RD）前。“not required but is highly recommended”", "Yes: two-minute video profile, file or link under Portfolio; recommended by Nov 6 (EA/ED I) or Jan 10 (ED II/RD). “not required but is highly recommended”", ["G1-S02", "G1-S05"]),
    f("影片自介可用連結；其他材料是否收連結未載明。", "A link is accepted for the video profile; not stated for other material.", ["G1-S02"])
  ]);
  mx("Dartmouth College", [
    f("收：舞蹈、戲劇、Studio Art、音樂，最多兩項；Common App 送出後在 portal 的 Portfolios 頁上傳；ED 截止後 1 週、RD 後 2 週。Studio Art ≤5 張或 3 段影片。", "Yes: Dance, Theater, Studio Art, Music, up to two; portal Portfolios tab after Common App; due 1 week after ED, 2 weeks after RD. Studio Art ≤5 images or 3 videos.", ["G1-S16", "G1-S17"]),
    ns(["G1-S18"]),
    f("只收一頁摘要：“Please do not submit full research papers”；portal 上傳或 email。", "Single-page abstracts only: “Please do not submit full research papers”; portal upload or email.", ["G1-S18"]),
    f("只在藝術作品集內（表演影片）。", "Inside arts portfolios only (performance video).", ["G1-S17"]),
    f("Studio Art 網站作品不收連結或 HTML，改做影片。", "Studio Art: no links or HTML for website work; make a video instead.", ["G1-S17"])
  ]);
  mx("Vanderbilt University", [
    f("只限 Blair 音樂學院（預審影片、履歷、曲目、藝術推薦），在 MyAppVU 內的 Blair 申請。", "Blair School of Music only (prescreening video, resume, repertoire, artistic rec), via the Blair application in MyAppVU.", ["G1-S20", "G1-S21"]),
    ns(["G1-S21"]),
    ns(["G1-S21"]),
    f("收：Glimpse 60–90 秒（美國高中）或 InitialView（國際）。", "Yes: Glimpse 60–90 s (US high schools) or InitialView (international).", ["G1-S21"]),
    ns(["G1-S21"])
  ]);
  mx("Washington University in St. Louis", [
    f("College of Art 必交、建築強烈鼓勵；SlideRoom，10–20 件，圖檔 ≤5 MB。", "Required for the College of Art, strongly encouraged for Architecture; SlideRoom, 10–20 pieces, images ≤5 MB.", ["G1-S29"]),
    ns(["G1-S24", "G1-S25"]),
    ns(["G1-S24", "G1-S25"]),
    f("收：一段 90 秒選填影片，WashU Pathway 或 Glimpse；11/9（EA/ED I）或 1/13（ED II/RD）截止。“It is an optional video (and we mean optional).”", "Yes: one optional 90-second video via WashU Pathway or Glimpse; due Nov 9 (EA/ED I) or Jan 13 (ED II/RD). “It is an optional video (and we mean optional).”", ["G1-S28"]),
    ns(["G1-S25"])
  ]);
  mx("University of Notre Dame", [
    f("收：藝術、藝術史與設計、建築；音樂作品任何人可交；經 Common App／Coalition 的 SlideRoom，不收實體。", "Yes: Art, Art History & Design, Architecture; music samples open to anyone; SlideRoom via Common App/Coalition; no physical submissions.", ["G1-S33", "G1-S35"]),
    f("補充材料只鼓勵藝術、音樂、建築申請者。", "Supplementary material encouraged only for art, music and architecture.", ["G1-S35"]),
    ns(["G1-S35"]),
    f("Glimpse／InitialView 60–90 秒（需付費）。", "Glimpse/InitialView 60–90 s (fee applies).", ["G1-S33"]),
    ns(["G1-S33", "G1-S35"])
  ]);
  mx("Emory University", [
    f("收：digital portfolio、arts supplements，經 applicant portal 以 PDF 上傳；不收大型或裝訂郵寄、CD、USB。", "Yes: digital portfolio and arts supplements, PDF via the applicant portal; no large or bound mail, CDs or USB.", ["G1-S40"]),
    f("未明列；portal 一般性接受 digital portfolio（PDF）。", "Not named; the portal accepts a digital portfolio (PDF) generically.", ["G1-S40"]),
    f("未明列；任何可存成 PDF 的文件都可上傳。", "Not named; any document that can be saved as PDF.", ["G1-S40"]),
    f("可附 YouTube 頁面連結。", "A link to a YouTube page is accepted.", ["G1-S40"]),
    f("收：YouTube 連結；材料會 “added to your application for review”。", "Yes: YouTube link; material is “added to your application for review”.", ["G1-S40"])
  ]);
  mx("University of Southern California", [
    f("主修要求才交（Iovine and Young、建築、Roski、電影、舞蹈、戲劇、Thornton 等），依各學院指示。", "Yes where the major requires it (Iovine and Young, Architecture, Roski, Cinematic Arts, Dance, Dramatic Arts, Thornton and others), per each school.", ["G1-S44"]),
    f("Viterbi 不收：“we do not accept anything that we do not ask for”。", "No for Viterbi: “we do not accept anything that we do not ask for”.", ["G1-S48"]),
    f("Viterbi 不收（同一規則）。", "No for Viterbi (same rule).", ["G1-S48"]),
    f("一般申請者不收；第三方面試只作英語證明，“not evaluative in nature”。", "Not for general applicants; third-party interviews only as English evidence, “not evaluative in nature”.", ["G1-S45"]),
    f("Viterbi 不收（同一規則）。", "No for Viterbi (same rule).", ["G1-S48"])
  ]);
  mx("University of Virginia", [UVA, UVA, UVA, UVA, UVA]);
  mx("New York University", [
    f("Steinhardt 音樂、Studio Art 與所有 Tisch 學程必交作品集或試演，並取代考試；Common App 約提早一個月送。", "Required for Steinhardt Music, Studio Art and all Tisch programs, replacing testing; submit Common App about a month early.", ["G1-S51"]),
    ns(["G1-S51"]),
    ns(["G1-S51"]),
    f("除藝術試演外未載明。", "Not stated beyond arts auditions.", ["G1-S51"]),
    ns(["G1-S51"])
  ]);
  mx("Tufts University", [
    f("BFA 與 BFA+BA/BS 必交；Applicant Status Page 的 Digital Portfolio 頁（不用 SlideRoom）；過去兩年 12–20 件；影片合計 ≤10 分鐘、每段 ≤2 分鐘；不收生成式 AI 作品。", "Required for BFA and BFA+BA/BS; Applicant Status Page, Digital Portfolio tab (not SlideRoom); 12–20 pieces from the past 2 years; video ≤10 min total, clips ≤2 min; no generative-AI art.", ["G1-S55", "G1-S60"]),
    f("未載明另設上傳；清單上唯一選填項是考試。工程學院的必答短文問你做過的專案。", "No separate upload stated; the only optional item listed is testing. The Engineering short answer asks about a project you built.", ["G1-S55", "G1-S56", "G1-S63"]),
    ns(["G1-S55", "G1-S62"]),
    ns(["G1-S55"]),
    ns(["G1-S55", "G1-S62"])
  ]);
  mx("UNC Chapel Hill", [
    f("錄取不收：招生委員會 “unable to review art or music supplements”；戲劇、音樂、寫作獎學金另有甄選。", "Not for admission: the committee is “unable to review art or music supplements”; drama, music and writing scholarships run separately.", ["G2-S6"]),
    ns(["G2-S1", "G2-S9"]),
    f("未列為類別；清單以外的文件可 email 至 uncsubmit@。", "Not named as a category; documents beyond the listed items can be emailed to uncsubmit@.", ["G2-S9"]),
    ns(["G2-S1", "G2-S9"]),
    ns(["G2-S1", "G2-S9"])
  ]);
  mx("University of Wisconsin–Madison", [
    f("未載明一般作品集；舞蹈、音樂 direct entry 走另外的申請與試演。", "General portfolio not stated; Dance and Music direct entry use a separate application and audition.", ["G2-S13", "G2-S16"]),
    ns(["G2-S13", "G2-S15", "G2-S16"]),
    ns(["G2-S16"]),
    ns(["G2-S16"]),
    ns(["G2-S16"])
  ]);
  mx("University of Rochester", [
    f("收：送出申請後在 MyROC 上傳 media links、藝術作品集等；檔案上限 4 MB。", "Yes: media links, art portfolios and more via MyROC after submitting; 4 MB file limit.", ["G2-S19"]),
    f("未列為類別；MyROC 的媒體上傳是一般性的。", "Not named as a category; the MyROC media upload is generic.", ["G2-S19"]),
    ns(["G2-S19"]),
    f("收：影片，經 MyROC，4 MB。", "Yes: videos via MyROC, 4 MB.", ["G2-S19"]),
    f("收：media links，經 MyROC。", "Yes: media links via MyROC.", ["G2-S19"])
  ]);
  mx("Case Western Reserve University", [
    f("收：Arts Supplement（音樂、音樂教育必交，其他選填；截止後 15 天）；美術獎學金 24 件 PowerPoint；舞蹈影片 90 秒–3 分鐘。", "Yes: Arts Supplement (required for music and music education, optional otherwise; 15 days after deadline); art scholarship 24-piece PowerPoint; dance video 90 s–3 min.", ["G2-S25", "G2-S26"]),
    f("收：作為 additional materials（PDF、文件、照片），portal 表單。“share videos, web links, PDFs, documents, photos and more”", "Yes, as additional materials (PDFs, documents, photos) via a portal form. “share videos, web links, PDFs, documents, photos and more”", ["G2-S29"]),
    f("收：清單明列 research abstracts，portal 表單。", "Yes: research abstracts are listed, via the portal form.", ["G2-S29"]),
    f("收：portal 表單。", "Yes: via the portal form.", ["G2-S29"]),
    f("收：web links，portal 表單。", "Yes: web links via the portal form.", ["G2-S29"])
  ]);
  mx("Northeastern University", [
    f("只限 CAMD 申請者，申請後在 Application Status Check 上傳；個人陳述 500 字。“Additional submissions will not be reviewed.”", "CAMD applicants only, via Application Status Check after applying; 500-word statement. “Additional submissions will not be reviewed.”", ["G2-S31", "G2-S33"]),
    ns(["G2-S33", "G2-S36"]),
    ns(["G2-S33", "G2-S36"]),
    f("只有第三方面試影片（InitialView／Vericant）與 CAMD Media Uploads。", "Only third-party interview video (InitialView/Vericant) and CAMD Media Uploads.", ["G2-S33"]),
    ns(["G2-S33"])
  ]);
  mx("University of Maryland, College Park", [
    f("一般作品集未載明；School of Music 補充與試演只用來判斷音樂資格。", "General portfolio not stated; School of Music supplement and audition used only for Music eligibility.", ["G2-S37"]),
    ns(["G2-S37", "G2-S39"]),
    ns(["G2-S37"]),
    ns(["G2-S37"]),
    ns(["G2-S37"])
  ]);
  mx("UC Davis", [
    f("不收：學術或創作作品樣本 “We will not review them, nor will we return them”。", "No: academic or creative work samples. “We will not review them, nor will we return them”", ["G2-S48"]),
    f("不收（同一規則）。", "No (same rule).", ["G2-S48"]),
    f("不收（同一規則）。", "No (same rule).", ["G2-S48"]),
    ns(["G2-S48"]),
    ns(["G2-S48"])
  ]);
  mx("UC Santa Barbara", [
    f("一般錄取不審主動寄來的補充材料。CCS Art：收作品集與 letter of intent，CCS portal，由 Creative Studies 教師審閱。", "General admission: unsolicited material not reviewed. CCS Art: portfolio plus letter of intent via the CCS portal, “reviewed by Creative Studies faculty”.", ["G2-S52", "G2-S53", "G2-S55"]),
    f("一般錄取不收；CCS 的 CS、Physics、Chemistry 可選交補充材料。", "General admission: no. CCS Computer Science, Physics, Chemistry: optional supplemental materials.", ["G2-S53", "G2-S55"]),
    f("一般錄取不收；CCS Biology 可選交，Marine Science “highly encouraged”。", "General admission: no. CCS Biology optional; Marine Science “highly encouraged”.", ["G2-S55"]),
    f("一般錄取不收；舞蹈、音樂需試演。", "General admission: no; Dance and Music require auditions.", ["G2-S53"]),
    ns(["G2-S53", "G2-S55"])
  ]);
  mx("Rensselaer Polytechnic Institute", [
    f("只限 B.Arch（必交）；SlideRoom，$10，建議約 10–20 張，截止後 10 天內。其他主修：“does not require or recommend” 作品集。", "B.Arch only (required); SlideRoom, $10, about 10–20 images, within 10 days of the deadline. Other majors: “does not require or recommend” a portfolio.", ["G2-S56", "G2-S58", "G2-S59"]),
    f("不收：作品集只接受建築申請者。", "No: portfolios accepted only from Architecture applicants.", ["G2-S58"]),
    f("未列為類別；portal 可選交履歷，補充資訊可 email 至 adm_updates@rpi.edu。", "Not named; optional résumé via the portal; extra information may be emailed to adm_updates@rpi.edu.", ["G2-S56", "G2-S58"]),
    f("可選 GLIMPSE 60–90 秒影片（美國學生）。", "Optional GLIMPSE 60–90 s video (US students).", ["G2-S56"]),
    ns(["G2-S56", "G2-S58"])
  ]);
  mx("Pomona College", [
    f("只限 Pomona 開課的表演藝術（舞蹈、音樂、戲劇，含劇場技術／設計作品集），申請後在網站表單上傳；ED I 11/11、其他 1/15。“not an application to a specific major or department”", "Performing arts taught at Pomona only (dance, music, theatre, incl. theatre tech/design), via a site form after applying; due Nov 11 (ED I) / Jan 15. “not an application to a specific major or department”", ["G2-S61"]),
    ns(["G2-S61", "G2-S63"]),
    ns(["G2-S61", "G2-S63"]),
    f("只在表演藝術補充內；第三方面試影片可選。", "Only inside performing-arts supplements; third-party interview videos optional.", ["G2-S61", "G2-S62"]),
    ns(["G2-S61", "G2-S63"])
  ]);

  window.ATLAS.pages["more"] = {
    title: s("美國第 31–50 校：基本資料與補充材料", "US schools 31–50: roster and supplementary materials"),
    judgment: s(
      "20 校中查核了 19 校（UVA 官網拒絕讀取）。只有 Case Western 在自己的頁面上明列研究摘要、連結與影片都能上傳；USC Viterbi、RPI（建築以外）、UC Davis 與 UCSB 一般錄取明說不收額外作品。",
      "19 of the 20 schools were verified (UVA's site refused reading). Only Case Western's own pages name research abstracts, links and video as uploadable; USC Viterbi, RPI outside architecture, UC Davis and UCSB general admission say they take no unrequested work."
    ),
    intro: s(
      "這 20 校是在 2026-11-07（unit G1）選出來的：從美國全國大學排名約第 15–50 名之間、且不在前 30 校名單裡的學校中挑選，偏向工程或生物系所較強者，兼顧私立、公立，另加兩所 UC 分校與一所文理學院（Pomona）。這是可以改的選擇，見 QUESTIONS Q005。深度只到兩層：基本資料（申請系統、方案與截止日、考試、英語、國際生助學金、補充題、推薦信、面試）與補充材料矩陣，不像前 30 校那樣逐校展開。所有資料來自學校官方頁面，存取日 2026-11-07；「未載明」表示我們讀了該頁、頁面沒寫，不代表「沒有」。不少截止日頁面沒有印年份，歸入 2026–27 週期是依存取日判斷。",
      "These 20 were chosen on 2026-11-07 (unit G1): national universities ranked roughly 15–50 that are not already in the top 30, favouring strong engineering or biology programmes, mixing private and public, with two more UC campuses and one liberal-arts college (Pomona). The choice can be changed; see QUESTIONS Q005. Depth is two layers only: a roster (system, plans and deadlines, testing, English, aid for internationals, supplements, letters, interview) and a supplementary-materials matrix, not the school-by-school depth of the top 30. Every cell comes from the school's own pages, accessed 2026-11-07. “Not stated” means we read the page and it is silent; it does not mean “no”. Many deadline pages print no year; placing those dates in the 2026–27 cycle follows from the access date."
    ),
    sections: [
      {
        id: "roster",
        viz: [
          {
            type: "waffle", dataset: "more", field: "testPolicy",
            title: s("20 校中 16 校 2026–27 的 SAT/ACT 選繳，只有 Dartmouth 必繳", "16 of the 20 leave SAT/ACT optional for 2026–27; only Dartmouth requires it"),
            subtitle: s("一格一校。兩所 UC 不看分數；UNC 依 GPA 決定要不要繳；UVA 的「選繳」取自 Common App 的 UVA 頁，未經 UVA 官網確認。", "One square per school. The two UCs do not consider scores; UNC's rule depends on GPA; UVA's “optional” comes from Common App's UVA page, not confirmed on UVA's own site.")
          },
          {
            type: "waffle", dataset: "more", field: "needPolicy",
            title: s("只有 8 校對國際生明寫 need 政策：2 校 need-blind、3 校 need-aware、3 校沒有 need-based 補助", "Only 8 of the 20 state an international need policy outright: 2 need-blind, 3 need-aware, 3 with no need-based aid"),
            subtitle: s("灰格是讀到的頁面沒寫。WashU 說它的 need-blind 不含國際生，但沒寫國際生改用什麼方式。", "Grey squares: the pages read do not say. WashU says its need-blind policy excludes internationals without naming what applies instead.")
          }
        ],
        h: s("基本資料：20 校", "Roster: 20 schools"),
        judgment: s(
          "提前方案從 UNC 的 10/15 到 Pomona 的 11/8 不等；只有 Dartmouth 要求考試；推薦信從 UC 的「不收」到 NYU 的「任何有權威的人，最多三封」。",
          "Early deadlines run from UNC's Oct 15 to Pomona's Nov 8; only Dartmouth requires testing; letter rules run from the UCs' “not reviewed” to NYU's “anyone in a position of authority, up to three”."
        ),
        intro: s(
          "篩選選單依學校頁面明文分類：need-blind／need-aware 只標學校對國際生明說的；Other Recommender 只標明說可交額外推薦者；direct-admit 只標明說錄取即進工程（或 LEP）者。UNC 的考試規則依 GPA 而定、UC 不看考試，兩者都不標 test-optional。",
          "Filters follow what each page states: need-blind / need-aware only where the school says so for internationals; Other Recommender only where an extra letter is explicitly welcome; direct-admit only where entry to engineering (or an LEP) at admission is stated. UNC's GPA-based rule and the UCs' no-test policy are not tagged test-optional."
        ),
        table: {
          filter: true,
          facets: [
            { v: "ed", label: s("有 ED", "Has ED") },
            { v: "ea", label: s("有 EA", "Has EA") },
            { v: "rea", label: s("有 REA", "Has REA") },
            { v: "test-required", label: s("要求考試", "Testing required") },
            { v: "test-optional", label: s("考試可選", "Test-optional") },
            { v: "need-blind", label: s("對國際生 need-blind", "Need-blind for internationals") },
            { v: "need-aware", label: s("對國際生 need-aware", "Need-aware for internationals") },
            { v: "or-yes", label: s("可交 Other Recommender", "Takes an Other Recommender") },
            { v: "direct-admit", label: s("工程直接錄取", "Direct admit to engineering") }
          ],
          cols: [
            s("學校", "School"),
            s("申請系統", "Application system"),
            s("方案與截止日", "Plans and deadlines"),
            s("考試政策", "Test policy"),
            s("英語考試", "English test"),
            s("國際生助學金", "Aid for internationals"),
            s("補充題", "Supplements"),
            s("老師推薦信", "Teacher letters"),
            s("Other Recommender", "Other Recommender"),
            s("面試", "Interview")
          ],
          rows: RO
        }
      },

      {
        id: "matrix",
        viz: {
          type: "matrix-grid", dataset: "more",
          title: s("Maker 作品：1 校明白邀請、5 校只能走通用或間接管道、4 校不收、9 校沒寫", "Maker work: 1 school invites it outright, 5 only through a generic or indirect channel, 4 refuse it, 9 are silent"),
          subtitle: s("每列一校、每欄一種材料。滑過符號看該校說法與來源，點一列展開五格；斜線格是 UVA，官網拒絕自動讀取。下方表格保留完整文字。", "One row per school, one column per material. Hover a glyph for the school's wording and source; click a row to open all five. Hatched cells are UVA, whose site refused automated reading. The full-text table below stays as the reference.")
        },
        h: s("補充材料：20 校 × 5 種材料", "Supplementary materials: 20 schools × 5 kinds of material"),
        judgment: s(
          "maker／工程作品在 20 校中沒有一校設專屬類別；研究成果有明文管道的只有 UChicago（摘要）、Dartmouth（一頁摘要）、Case Western（摘要）與 UCSB 的 CCS。",
          "None of the 20 names a dedicated maker or engineering portfolio; research has a stated channel only at UChicago (abstract), Dartmouth (one-page abstract), Case Western (abstracts) and UCSB's CCS."
        ),
        intro: s(
          "每格依序是：收不收、走哪個管道、上限、學校自己的說法（引文 15 字以內）。灰格為未載明。",
          "Each cell reads: accepted or not, channel, limits, and the school's own words (quotes of 15 words or fewer). Grey cells are not stated."
        ),
        table: {
          filter: true,
          cols: [
            s("學校", "School"),
            s("藝術作品集", "Arts portfolio"),
            s("Maker／工程作品", "Maker or engineering work"),
            s("研究論文或摘要", "Research paper or abstract"),
            s("影片", "Video"),
            s("外部連結", "External links")
          ],
          rows: MX
        }
      },

      {
        id: "engineering",
        viz: {
          type: "entry-strip", dataset: "more",
          title: s("20 校中只有 5 校寫明工程怎麼進：3 校申請時就定學院，2 校先錄取到學校", "Only 5 of the 20 state how engineering entry works: 3 set it at application, 2 admit to the school first"),
          subtitle: s("第二部分的十校逐校查了這一項，第一部分沒有，所以灰色占了大半。Maryland 走的是 Limited Enrollment Program；RPI 與 UC Davis 只有推論，不計入。", "Part 2's ten schools were checked for this field and part 1's were not, so grey fills most of the bar. Maryland's route is its Limited Enrollment Program; RPI and UC Davis are inferences only and are not counted.")
        },
        h: s("工程：入學即錄取，還是之後再申請", "Engineering: admitted at entry, or declared later"),
        judgment: s(
          "明說入學即進工程的有 UW–Madison、UCSB 與 Maryland（LEP）；UNC 明說之後再申請；Case Western 錄取的是整個大學。",
          "UW–Madison, UCSB and Maryland (via its LEP) state entry to engineering at admission; UNC states a later application; Case Western admits to the university as a whole."
        ),
        intro: s(
          "第二部分的十校逐校查了工程入學方式；第一部分的十校沒有逐校查這一項，只列出頁面上順帶寫到的。",
          "The ten schools in part 2 were each checked for engineering entry; the ten in part 1 were not checked for this field, so only what their pages happened to say is listed."
        ),
        items: [
          f("UW–Madison：工程是 direct entry，申請者把工程列第一志願，且必須把工程學院以外的主修列為第二志願。", "UW–Madison: engineering is direct entry; applicants list it first and must list a major outside the College of Engineering as second choice.", ["G2-S18"]),
          f("UCSB：College of Engineering 主修有選擇性，學校不考慮工程內的替代主修；Letters & Science 申請者不直接錄取到主修。", "UCSB: College of Engineering majors are selective and alternate engineering majors are not considered; Letters & Science applicants are not admitted directly to a major.", ["G2-S52", "G2-S53"]),
          f("Maryland：工程是 Limited Enrollment Program（LEP），由學程一起審；錄取但未進 LEP 的學生放在 Letters & Sciences 修 gateway 課程。", "Maryland: engineering is a Limited Enrollment Program (LEP) also reviewed by the program; admitted students not placed in their LEP go to Letters & Sciences to meet gateway requirements.", ["G2-S37", "G2-S40"]),
          f("UNC Chapel Hill：所有學生從 College of Arts and Sciences 開始，Biomedical Engineering 與 Computer Science 要在大二結束前另外申請；申請時填的主修不影響錄取。", "UNC Chapel Hill: everyone starts in the College of Arts and Sciences and applies to Biomedical Engineering or Computer Science by the end of the second year; the intended major does not affect admission.", ["G2-S5"]),
          f("Case Western：錄取的是大學，不是單一領域；何時宣告主修未載明。", "Case Western: admission is to the university, not a single area of study; declaration timing not stated.", ["G2-S30"]),
          f("Northeastern：工程申請者必須修過物理、化學與 precalculus；所有大一學程都可 undeclared。錄取是否進到學院未載明。", "Northeastern: engineering applicants must have taken physics, chemistry and precalculus; undeclared is allowed in all first-year programs. Whether admission is to the college is not stated.", ["G2-S36"]),
          f("RPI：申請者選主修，或「某學院的 undeclared」，例如 undeclared engineering。", "RPI: applicants choose a major or undeclared within a school, such as undeclared engineering.", ["G2-S58"]),
          inf("由此推論 RPI 的錄取是進到申請時選的學院或主修；頁面沒有直接這樣寫。", "From this we infer RPI admits into the school or major chosen; the page does not say so directly.", ["G2-S58"]),
          f("UC Davis：建議申請者填一個替代主修，以防第一志願未錄取。", "UC Davis: applicants are advised to list an alternate major in case they are not admitted to their first choice.", ["G2-S48"]),
          inf("這個說法暗示 UC Davis 是錄取到主修；工程的選擇性未載明。", "That wording implies UC Davis admits to a major; engineering-specific selectivity is not stated.", ["G2-S48"]),
          f("Tufts：工程申請者走同一套流程，但補充短文 #2 問自己建造或設計過的專案與角色。", "Tufts: engineering applicants follow the same process, but short answer #2 asks about a project they built or designed and their role.", ["G1-S56", "G1-S63"]),
          f("Rochester 的工程入學方式未載明；Pomona 的主修宣告時間未載明。", "Rochester's engineering entry is not stated; Pomona's major-declaration timing is not stated.", ["G2-S19", "G2-S63"]),
          inf("兩所採 direct admit 的公立學校，對「沒進工程怎麼辦」的處理相反：UW–Madison 要你先填非工程第二志願，UCSB 則不看任何工程替代主修。", "The two direct-admit public schools handle the fallback in opposite ways: UW–Madison requires a non-engineering second choice, UCSB ignores alternate engineering majors.", ["G2-S18", "G2-S52"])
        ]
      },

      {
        id: "findings",
        h: s("不明顯的發現", "Non-obvious findings"),
        judgment: s(
          "研究成果能進申請的格式，明文寫出的都是「摘要」而不是全文；而一個在校外累積多年的工程紀錄，在多數學校只能透過活動欄與短文進來。",
          "Where a format for research is written down, it is an abstract, not a full paper; and a multi-year engineering record built outside school can enter most of these schools only through the activities list and essays."
        ),
        items: [
          f("研究成果：UChicago 邀請交 “an abstract of original research”；Dartmouth 收一頁摘要並說 “Please do not submit full research papers”；Case Western 明列 research abstracts；Emory 收任何 PDF 但未提研究。", "Research: UChicago invites “an abstract of original research”; Dartmouth takes one-page abstracts and says “Please do not submit full research papers”; Case Western lists research abstracts; Emory takes any PDF without naming research.", ["G1-S05", "G1-S18", "G2-S29", "G1-S40"]),
          inf("對生物申請者而言，這幾校明文說法共同指向一頁摘要的格式。", "For a biology applicant, the explicit statements at these schools converge on a one-page abstract.", ["G1-S05", "G1-S18", "G2-S29"]),
          f("USC Viterbi 拒收一切未要求的材料，包含履歷、CV、作品集與額外推薦信。", "USC Viterbi refuses anything it does not ask for, including resume, CV, portfolio and extra letters.", ["G1-S48"]),
          inf("因此工程申請者的專案紀錄只能經活動欄與短答進 USC。", "So an engineering applicant's project record can enter USC only through the activities list and written answers.", ["G1-S48"]),
          f("RPI 是以工程為主的學校，但說其流程 “does not require or recommend” 作品集，只收建築申請者的作品集。", "RPI, an engineering-focused school, says it “does not require or recommend” a portfolio and accepts portfolios only from Architecture applicants.", ["G2-S56", "G2-S58"]),
          inf("maker 作品集在 RPI 除了履歷或寄信到 updates 信箱，沒有明文管道。", "A maker portfolio has no stated channel at RPI beyond a résumé or an email to the updates address.", ["G2-S56", "G2-S58"]),
          f("Tufts 把 maker 作品放進必答短文：工程申請者以 100–200 字描述自己建造或設計的專案與角色，而沒有另設上傳。", "Tufts puts the maker portfolio inside a required essay: engineering applicants describe a project they built or designed in 100–200 words, with no separate upload listed.", ["G1-S55", "G1-S56"]),
          f("兩所 UC 都拒收主動寄來的推薦信與作品；UCSB 的 College of Creative Studies 是例外，另有 portal 收推薦信與補充材料，fall 2027 優先截止 2027-01-05，晚於 UC 收件期結束。", "Both UC campuses refuse unsolicited letters and work samples; UCSB's College of Creative Studies is the exception, with its own portal for letters and supplements and a 2027-01-05 priority deadline, after the UC filing window closes.", ["G2-S48", "G2-S53", "G2-S55"]),
          f("只要一封老師推薦的有 WashU、Notre Dame、Tufts、UNC、UW–Madison、Rochester、Northeastern；USC 與 RPI 一封可來自輔導老師或老師；NYU 一封可來自任何有權威的人，最多三封。", "One teacher letter only: WashU, Notre Dame, Tufts, UNC, UW–Madison, Rochester, Northeastern; at USC and RPI the one letter may be from a counselor or teacher; at NYU from anyone in a position of authority, up to three.", ["G1-S24", "G1-S33", "G1-S55", "G2-S1", "G2-S13", "G2-S19", "G2-S31", "G1-S44", "G2-S56", "G1-S51"]),
          f("UW–Madison 的選填第二封推薦可來自 “research mentor”。", "UW–Madison's optional second letter may come from a “research mentor”.", ["G2-S13"]),
          inf("在 UW–Madison，校外研究紀錄唯一明文的管道是這封推薦信，而不是上傳。", "At UW–Madison an outside research record has a stated channel only through that letter, not an upload.", ["G2-S13"]),
          f("Dartmouth 是這批唯一要求同儕推薦的學校，列為 “Recommended” 而非選填，可在截止後約十天內送達。", "Dartmouth is the only school here asking for a peer letter, listed as “Recommended” rather than optional, and it may arrive up to about ten days after the deadline.", ["G1-S08", "G1-S15"]),
          f("UNC 的 EA 是 10/15，補件 11/7，比其他校常見的 11/1 早兩週以上。", "UNC's EA deadline is Oct 15, with materials due Nov 7, more than two weeks before the Nov 1 used elsewhere.", ["G2-S1"]),
          inf("同時申請 UNC EA 與 11/1 截止學校的人，需要更早請老師寫推薦信。", "An applicant pairing UNC EA with Nov 1 deadlines needs to ask for the teacher letter earlier.", ["G2-S1"]),
          f("考試方向因校、因年而異：Dartmouth 已要求（自 Class of 2029）；Notre Dame 自 2027–28 週期、Vanderbilt 自 fall 2029 入學起要求；NYU 可選至 2027–28 週期。", "Testing direction differs by school and year: Dartmouth requires it (from the Class of 2029); Notre Dame from the 2027–28 cycle and Vanderbilt from fall 2029 entry; NYU optional through 2027–28.", ["G1-S10", "G1-S31", "G1-S22", "G1-S52"]),
          inf("2026–27 年讀十年級、2027 年秋天申請 Notre Dame 的學生，會遇到考試要求。", "A student in G10 in 2026–27 who applies to Notre Dame in autumn 2027 would face a testing requirement.", ["G1-S31"]),
          f("Rochester 說面試 “will be considered equally in our application review process”；UNC 與 RPI 說不面試；Northeastern 只收第三方影片面試。", "Rochester says its interview “will be considered equally in our application review process”; UNC and RPI say they do not interview; Northeastern takes only third-party video interviews.", ["G2-S23", "G2-S8", "G2-S56", "G2-S33"]),
          f("以影片代替面試的有 UChicago（兩分鐘，“highly recommended”）與 WashU（90 秒，“we mean optional”）；USC 與 Tufts 的第三方面試只當英語證明。", "Video stands in for an interview at UChicago (two minutes, “highly recommended”) and WashU (90 s, “we mean optional”); USC and Tufts accept third-party interviews only as English evidence.", ["G1-S05", "G1-S28", "G1-S45", "G1-S58"]),
          f("對國際生明說政策的：need-blind 有 Dartmouth、Notre Dame；need-aware 有 Vanderbilt、Rochester、Pomona；不提供需求型助學金的有 USC、UNC、Northeastern；WashU 的 need-blind 不含國際生。其餘未載明。", "Explicit international need policy: need-blind at Dartmouth and Notre Dame; need-aware at Vanderbilt, Rochester and Pomona; no need-based aid at USC, UNC and Northeastern; WashU's need-blind excludes internationals. The rest do not say.", ["G1-S12", "G1-S34", "G1-S21", "G2-S22", "G2-S62", "G1-S45", "G2-S3", "G2-S34", "G1-S27"]),
          f("Emory 要求申請助學金的國際生走 RD。", "Emory tells international aid applicants to apply Regular Decision.", ["G1-S43"]),
          inf("因此需要助學金的國際生在 Emory 不能走 ED。", "So ED is not the route at Emory for an international student who needs aid.", ["G1-S43"]),
          f("新制 TOEFL（1–6 分，2026-01-21 起）已寫進多校門檻：UC 與 UW–Madison 4.5、Case Western 4.5、Maryland 5、Rochester 建議 5、UNC「強申請者通常」5、Northeastern 中間 50% 為 5.0–5.5、USC 5、Emory 建議 ≥5.5。", "The new 1–6 TOEFL scale (tests from 2026-01-21) now appears in thresholds: UC and UW–Madison 4.5, Case Western 4.5, Maryland 5, Rochester recommended 5, UNC “strong applicants typically” 5, Northeastern middle 50% 5.0–5.5, USC 5, Emory recommended ≥5.5.", ["G2-S45", "G2-S13", "G2-S28", "G2-S42", "G2-S22", "G2-S4", "G2-S34", "G1-S45", "G1-S39"]),
          f("連結的處理相反：Dartmouth Studio Art 說不要交網站連結或 HTML，改做影片；Emory 接受 YouTube 頁面連結；Rochester 與 Case Western 收 media／web links。", "Links point both ways: Dartmouth Studio Art says not to submit website links or HTML, make a video instead; Emory accepts a YouTube link; Rochester and Case Western take media or web links.", ["G1-S17", "G1-S40", "G2-S19", "G2-S29"]),
          f("Tufts BFA 作品集不用 SlideRoom，而是上傳到 Applicant Status Page；WashU、Notre Dame 與 RPI（B.Arch）用 SlideRoom。", "Tufts BFA portfolios skip SlideRoom and go to the Applicant Status Page; WashU, Notre Dame and RPI (B.Arch) use SlideRoom.", ["G1-S60", "G1-S29", "G1-S33", "G2-S58"]),
          f("Pomona 要求交 ACT 者必須含 Science 部分。", "Pomona requires ACT submitters to include the Science section.", ["G2-S60"])
        ]
      },

      {
        id: "blocked",
        h: s("未查核與待補", "Not verified and still open"),
        judgment: s(
          "UVA 全部欄位未查核；另有多校的補充題只在 Common App 內、國際生 need 政策未寫，這些格子留空，不以推測補上。",
          "Every UVA field is unverified; several schools' supplement prompts live only inside the Common App and their international need policy is unstated. Those cells stay open; nothing is filled by guesswork."
        ),
        intro: s(
          "UVA 的 admission.virginia.edu、engineering.virginia.edu 與 sfs.virginia.edu 在 2026-11-07 對自動讀取回傳 HTTP 403，瀏覽器面板也無法載入。這是工具限制，不是對 UVA 政策的判斷。UNC 的網站同樣擋自動讀取，但以一般瀏覽器開啟讀到了，沒有經過任何 CAPTCHA。",
          "UVA's admission.virginia.edu, engineering.virginia.edu and sfs.virginia.edu returned HTTP 403 to automated reading on 2026-11-07 and would not load in the browser pane. That is a tool failure, not a finding about UVA. UNC's site also blocked the automated fetcher but was read in an ordinary browser session, with no CAPTCHA involved."
        ),
        items: [
          f("UVA：唯一讀到的是 Common App 的 UVA 頁，只確認收 Common App、標示考試可選與接受自報分數；截止日、英語、助學金、補充題、推薦信、面試與五種補充材料都未查核。", "UVA: only Common App's UVA page could be read, confirming Common App, a test-optional tag and a self-report tag; deadlines, English, aid, supplements, letters, interview and all five materials are unverified.", ["G1-S50"]),
          f("USC 補充題（Supplemental Questions 與 Quick Takes）的題目與字數不在讀到的 USC 頁面上。", "USC's Supplemental Questions and Quick Takes: text and limits are not on the USC pages read.", ["G1-S44", "G1-S48"]),
          f("NYU 大一申請頁未列任何學校專屬補充題；2026–27 是否有，頁面沒說。", "NYU's first-year page lists no school-specific prompt; whether one exists for 2026–27 is not stated.", ["G1-S51"]),
          f("UNC、Rochester、Case Western、Northeastern、Maryland 的校方專屬補充題沒有寫在學校自己的頁面上；本輪未進 Common App 內查看。", "UNC, Rochester, Case Western, Northeastern and Maryland: school-specific prompts are not on the schools' own pages; this run did not look inside the Common App.", ["G2-S10", "G2-S19", "G2-S26", "G2-S33", "G2-S39"]),
          f("對國際生 need-blind 或 need-aware 未載明：UChicago、Emory、NYU、Tufts、UW–Madison、Case Western、Maryland、UC Davis、UCSB、RPI、Northeastern、UNC。", "International need-blind / need-aware not stated: UChicago, Emory, NYU, Tufts, UW–Madison, Case Western, Maryland, UC Davis, UCSB, RPI, Northeastern, UNC.", ["G1-S07", "G1-S43", "G1-S54", "G1-S59", "G2-S17", "G2-S28", "G2-S41", "G2-S49", "G2-S54", "G2-S57", "G2-S34", "G2-S3"]),
          f("Emory 兩頁對考試可選的入學年份說法不一（考試頁 fall 2027、FAQ fall 2028），發布前需重查。", "Emory's two pages disagree on the entry year of test-optional (fall 2027 on the exams page, fall 2028 in the FAQ); re-check before relying on it.", ["G1-S39", "G1-S40"]),
          f("Dartmouth 同一頁寫了兩個 RD 日期（1/1 與 QuestBridge 段落的 1/2），兩者並記。", "Dartmouth's page gives two RD dates (Jan 1, and Jan 2 in the QuestBridge block); both are recorded.", ["G1-S08"]),
          f("UCSB CCS 頁在 fall 2027 截止日旁，Physics 優先日期寫的是 “January 21, 2026”。", "UCSB's CCS page shows a Physics priority date of “January 21, 2026” beside the fall 2027 deadline.", ["G2-S55"]),
          inf("這個 Physics 日期看起來是舊資料，應重查。", "That Physics date looks stale and should be re-checked.", ["G2-S55"]),
          f("Rochester、Case Western、Pomona 的考試可選政策適用哪幾年未載明；UNC 外州名額的具體比例未載明。", "Years covered by test-optional at Rochester, Case Western and Pomona are not stated; UNC's numeric out-of-state share is not stated.", ["G2-S21", "G2-S27", "G2-S60", "G2-S11"]),
          f("UC Davis 工程的選擇性、Northeastern 是否錄取到學院、Rochester 工程入學方式、Pomona 自辦面試與主修宣告時間：未載明。", "UC Davis engineering selectivity, whether Northeastern admits to a college, Rochester engineering entry, Pomona-run interviews and declaration timing: not stated.", ["G2-S64", "G2-S36", "G2-S19", "G2-S63"])
        ]
      }
    ]
  };
})();
