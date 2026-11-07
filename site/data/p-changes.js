window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  // Item helpers. f = [事實] (must carry src), i = [推論], a = [假設].
  function F(zh, en, src) { return { t: { zh: zh, en: en }, tag: "f", src: src }; }
  function I(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "i" }; if (src) o.src = src; return o; }
  function A(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "a" }; if (src) o.src = src; return o; }
  function NS(src) { return { state: "not-stated", checked: "2026-11-07", src: src }; }
  function L(zh, en) { return { zh: zh, en: en }; }

  // Every note behind this page was written on 2026-11-07, so "found" is that date for every row.
  var FOUND = "2026-11-07";
  function row(eff, item, filter) { return { cells: [eff, item, FOUND], filter: filter }; }

  // Effective-cycle labels.
  var C2526 = L("2025–26（2026 秋入學）", "2025–26 (fall 2026 entry)");
  var C2627 = L("2026–27（2027 秋入學）", "2026–27 (fall 2027 entry)");
  var C2728 = L("2027–28（2028 秋入學）", "2027–28 (fall 2028 entry)");

  var COLS = [
    L("生效申請季", "Takes effect"),
    L("變更內容（含來源）", "Change (with source)"),
    L("本站查到日期", "Found")
  ];

  window.ATLAS.pages["changes"] = {
    title: { zh: "年度變更：2025–26 → 2026–27 → 2027–28", en: "Cycle changes: 2025–26 → 2026–27 → 2027–28" },
    judgment: {
      zh: "2026–27 最大的變動在考試：Yale 不再收 AP/IB 代替 SAT/ACT；Princeton、Columbia、Notre Dame、Harvey Mudd 都已公告 2027–28 恢復要求考試。Common App 表格本季只改欄位，Additional information 300 字是 2025–26 就改的。",
      en: "The largest 2026–27 shifts are in testing: Yale no longer lets AP/IB stand in for SAT/ACT, and Princeton, Columbia, Notre Dame and Harvey Mudd have announced required testing for 2027–28. Common App changed fields this year; the 300-word Additional information limit dates from 2025–26."
    },
    intro: {
      zh: "每一列寫明兩個日期：變更從哪一個申請季開始生效，以及本站在哪一天從來源讀到它。這樣到 2027–28 申請季時，這頁仍能直接使用：生效季已過的列是現況，還沒到的列是待查清單。本站所有研究筆記都寫於 2026-11-07，所以「查到日期」目前都是同一天；之後重查會更新。逐校時程筆記裡，大多數學校的「與 2025–26 相比」欄寫的是「未找到有來源的變更」，這頁只列有來源的變更，沒有列出不代表確定沒變。",
      en: "Each row carries two dates: the application cycle in which the change takes effect, and the day we read it in a source. That keeps the page usable into the 2027–28 cycle: rows whose cycle has arrived describe the present, rows still ahead are a re-check list. Every research note behind this site was written on 2026-11-07, so the Found column currently shows one date; later re-checks will update it. For most schools the calendar notes record \"no sourced change vs 2025–26\". This page lists only sourced changes; absence here does not mean nothing changed."
    },
    sections: [
      // ───────────────────────── systems
      {
        id: "systems",
        h: L("申請系統", "Application systems"),
        judgment: L(
          "Common App 2026–27 改的是欄位（Activities 改名、職位欄變選填、Family 流程），作文題目沒變；字數上限的改動發生在前一季。",
          "Common App's 2026–27 changes are to fields (Activities renamed, position made optional, a new Family flow); the essay prompts did not change, and the word-limit changes happened a cycle earlier."
        ),
        table: {
          cols: COLS,
          filter: true,
          facets: [
            { v: "commonapp", label: L("Common App", "Common App") },
            { v: "uc", label: L("UC", "UC") },
            { v: "coalition", label: L("Coalition／Scoir", "Coalition / Scoir") },
            { v: "mtc", label: L("Mastery Transcript", "Mastery Transcript") }
          ],
          rows: [
            row(C2526, F(
              "Common App：Additional information 從 2024–25 的 650 字降為 300 字；2026–27 維持 300 字。仍寫 650 字的指南描述的是舊欄位。",
              "Common App: Additional information went from 650 words (2024–25) to 300 words; 2026–27 keeps 300. Guides that still say 650 describe the old field.",
              ["A1-S10", "A1-S9", "A1-S8", "A1-S6"]), "commonapp"),
            row(C2526, F(
              "Common App：2024–25 那題點名 COVID-19 與天災的 community disruption 問題（250 字）被移除，改為「Challenges and circumstances」（250 字）。輔導老師端的 School Report 仍保留 500 字的 community disruption 欄。",
              "Common App: the 2024–25 community-disruption question naming COVID-19 and natural disasters (250 words) was removed and replaced by \"Challenges and circumstances\" (250 words). The counselor's school report still has a 500-word community-disruption box.",
              ["A1-S10", "A1-S9", "A1-S14"]), "commonapp"),
            row(C2627, F(
              "Common App：Activities 改名為「Activities and experiences」；position／leadership 改為選填（先問是否有角色，再問「What was your role?」）；高中後的經驗可填起訖日期；新增活動類型「Hobby」；50／100／150 字元上限不變。",
              "Common App: Activities renamed \"Activities and experiences\"; position/leadership is now optional (a yes/no gate before \"What was your role?\"); post-high-school experiences get start and end dates; new activity type \"Hobby\"; the 50/100/150-character limits are unchanged.",
              ["A1-S1", "A1-S4", "A1-S6", "A1-S7"]), "commonapp"),
            row(C2627, F(
              "Common App：Challenges and circumstances 範例用字從「care-taking」改為「caregiving」；250／300 字上限不變。",
              "Common App: the Challenges and circumstances examples now say \"caregiving\" instead of \"care-taking\"; the 250/300-word limits are unchanged.",
              ["A1-S1", "A1-S12", "A1-S6"]), "commonapp"),
            row(C2627, F(
              "Common App：Family 區新增獨立申請者流程（23 歲以上或自認符合 FAFSA 定義者不再回答父母與手足題）；手足欄位 5 → 10；新增法定監護人區塊。",
              "Common App: a new independent-learner route in Family (applicants 23+ or self-identified as FAFSA-independent skip the parent and sibling questions); sibling slots 5 → 10; a new legal-guardian block.",
              ["A1-S1", "A1-S4", "A1-S7"]), "commonapp"),
            row(C2627, F(
              "Common App：公民身分選項「U.S. resident」改名為「U.S. resident with other status」。",
              "Common App: the citizenship option \"U.S. resident\" is renamed \"U.S. resident with other status\".",
              ["A1-S1", "A1-S7"]), "commonapp"),
            row(C2627, F(
              "Common App：Testing 區更新 Duolingo（總分與分項）、PTE（Academic 與 Express）、TOEFL iBT（加入 1–6 級分）欄位；AP 新增 Business with Personal Finance、Cybersecurity、Networking 三科。",
              "Common App: Testing fields updated for Duolingo (overall and subscores), PTE (Academic and Express) and TOEFL iBT (1–6 band scores added); three new AP subjects: Business with Personal Finance, Cybersecurity, Networking.",
              ["A1-S1", "A1-S7"]), "commonapp"),
            row(C2627, F(
              "Common App：Mid-year report 新增 250 字的「Describe the changes or updates」文字框，可取代或搭配上傳檔案。",
              "Common App: the mid-year report gains a 250-word \"Describe the changes or updates\" text box, in place of or alongside an upload.",
              ["A1-S1", "A1-S6"]), "commonapp"),
            row(C2627, F(
              "Common App：新帳號建立或更改 email 時要驗證 email；既有帳號不重新驗證。",
              "Common App: email verification at account creation or email change; existing accounts are not re-verified.",
              ["A1-S1", "A1-S35"]), "commonapp"),
            row(C2627, F(
              "Common App：個人陳述題目與 2025–26 相同（沒有變更）。",
              "Common App: the personal-essay prompts are the same as in 2025–26 (no change).",
              ["A1-S1", "A1-S3"]), "commonapp"),
            row(C2526, F(
              "Scoir 與 Common App 從 2025–26 學年開始整合；只同步大學清單並讓輔導老師從 Scoir 送文件，學生仍在 Common App 用另一組帳號填寫送出。",
              "Scoir and Common App integrated from the 2025–26 year; the link syncs college lists and lets counselors send forms from Scoir, while students still complete and submit in Common App with a separate login.",
              ["A2-S16", "A2-S20"]), "coalition"),
            row(L("2022-08-01", "2022-08-01"), F(
              "Coalition 停用自己的申請平台（MyCoalition），改在 Scoir 上申請，從 2022-08-01 開始。常見的「2023 年」說法早了一年記錯。",
              "The Coalition retired its standalone portal (MyCoalition); Coalition applications moved to Scoir from 2022-08-01. The often-repeated \"2023\" is a year late.",
              ["A2-S19", "A2-S15"]), "coalition"),
            row(C2627, F(
              "UC Application：本季新增勾選欄，可申報非 UC 的申請費減免（NACAC、College Board）；減免仍以四個校區為上限。",
              "UC Application: new this cycle, a checkbox to declare non-UC fee waivers (NACAC, College Board); waivers still cover at most four campuses.",
              ["A2-S4"]), "uc"),
            row(C2627, F(
              "UC Application：UCOP 2026 年 9 月簡報列出截止日為 2026-11-30（週一），並把「CCGI integration」列為 2026 年更新；整合傳送哪些資料未說明。",
              "UC Application: UCOP's September 2026 deck gives the deadline as Monday 2026-11-30 and lists \"CCGI integration\" among 2026 updates; what the integration transfers is not stated.",
              ["A2-S4"]), "uc"),
            row(C2526, F(
              "UC Application：一篇顧問部落格說 UC 在 2026 秋入學那一季把截止日延到 12 月 1 日；本站未在官方頁面找到證實，只當未證實的說法。",
              "UC Application: a consultant blog says UC extended the fall 2026 deadline to 1 December; no official page confirming it was found, so treat it as unverified.",
              ["A2-S58"]), "uc"),
            row(L("2026-07（2026–27 季中）", "July 2026 (during 2026–27)"), F(
              "Mastery Transcript Consortium 由 Legend.org 從 ETS 收購，改以 Mastery.org 營運，聲明「immediate focus will be continuity」。兩年內第二次換主：2024 年併入 ETS。",
              "The Mastery Transcript Consortium was acquired from ETS by Legend.org and now operates as Mastery.org, stating that its \"immediate focus will be continuity\". This is its second change of owner in about two years; it joined ETS in 2024.",
              ["C1-S6", "C1-S5", "C1-S1"]), "mtc")
          ]
        }
      },

      // ───────────────────────── tests
      {
        id: "tests",
        h: L("考試政策", "Testing policy"),
        judgment: L(
          "要求考試的學校在增加：2026–27 Yale 收緊為只認 SAT/ACT；2027–28 Princeton、Columbia、Notre Dame、Harvey Mudd 恢復要求；Vanderbilt 從 2029 秋入學開始。",
          "The number of schools requiring tests is rising: Yale narrowed to SAT/ACT only for 2026–27; Princeton, Columbia, Notre Dame and Harvey Mudd return to required testing in 2027–28; Vanderbilt from fall 2029 entry."
        ),
        table: {
          cols: COLS,
          filter: true,
          facets: [
            { v: "reinstated", label: L("恢復要求", "Requirement returns") },
            { v: "optional", label: L("維持選考", "Optional continues") },
            { v: "english", label: L("英語檢定", "English tests") }
          ],
          rows: [
            row(C2627, F(
              "Yale：取消 test-flexible（ACT、AP、IB、SAT 任選），改為只收 ACT 或 SAT；AP／IB 不再能代替。2026-05-27 公告「Beginning with the next admissions cycle」，招生 podcast 說「Starting with this cycle」。",
              "Yale: the test-flexible policy (ACT, AP, IB or SAT) is replaced by ACT or SAT only; AP and IB no longer satisfy the requirement. Announced 2026-05-27 (\"Beginning with the next admissions cycle\"); the admissions podcast says \"Starting with this cycle\".",
              ["A3a-S35", "A3a-S36", "A3a-S34"]), "reinstated"),
            row(C2627, F(
              "Caltech：SAT／ACT 照舊必繳，但從 2026–27 起分數依分科以「buckets」方式審閱。",
              "Caltech: SAT/ACT still required; from 2026–27 scores are reviewed in section-by-section \"buckets\".",
              ["A4-S9", "A3a-S11"]), "reinstated"),
            row(C2627, F(
              "Olin：暫停考試要求的措施延長到 2026–27 季（狀態與前一季相同）。",
              "Olin: the temporary suspension of its test requirement is extended through the 2026–27 cycle (same status as before).",
              ["A3b-S5"]), "optional"),
            row(C2627, F(
              "Northwestern：2026 冬季給輔導老師的更新說 test-optional 繼續（本站只讀到搜尋摘要）。",
              "Northwestern: the winter 2026 counselor update says test-optional continues (read as a search snippet only).",
              ["A3b-S18"]), "optional"),
            row(C2627, F(
              "UC：2027 秋入學的入學要求不變，不看 SAT/ACT；BOARS 正在檢討考試的用途，報告 2027 年 2 月提出，Regents 2027 年 6 月收到建議；2028 秋以後未定。",
              "UC: no change for fall 2027 entry, SAT/ACT not considered; BOARS is reviewing testing, with a report due February 2027 and recommendations to the Regents by June 2027; fall 2028 onward is undecided.",
              ["A2-S4"]), "optional"),
            row(C2627, F(
              "UNC System 規定：從 2026–27 學年起，加權 GPA 2.8 以上（4.0 制）不必繳分數；低於 2.8 需 ACT 17+ 或 SAT 930+。",
              "UNC System rule: from the 2026–27 academic year, applicants with a weighted GPA of 2.8 or above (4.0 scale) need not submit a score; below 2.8, ACT 17+ or SAT 930+ is required.",
              ["G2-S1", "G2-S12"]), "optional"),
            row(C2627, F(
              "WashU：從 2027 秋入學的申請者開始，SAT/ACT 不再能代替英語能力檢定。",
              "WashU: from fall 2027 applicants, SAT/ACT is no longer accepted in place of an English-proficiency test.",
              ["G1-S26"]), "english"),
            row(L("2026-01-21 起考的 TOEFL", "TOEFL tests from 2026-01-21"), F(
              "TOEFL iBT 改用 1–6 級分後，學校門檻開始用新分數表示，例如 UC San Diego 4.5（2026 年 1 月起生效，舊制 83）、UNC「強的申請者通常」5 以上。Purdue 把兩套標準並列在同一頁：2026-01-21 之前考的要 iBT 88、各部分 20 以上；之後考的要 4.5、各部分 4.0。跨過這個日期考試的人要先確認學校講的是哪一套。這是 TOEFL 的變更，不是學校政策變更。",
              "After TOEFL iBT moved to a 1–6 band scale, schools restate thresholds on it, e.g. UC San Diego 4.5 (effective January 2026; 83 on the old scale) and UNC \"strong applicants typically\" 5+. Purdue prints both standards on one page: iBT 88 with 20 per section for tests taken before 2026-01-21, and 4.5 with 4.0 per section for tests taken on or after it. Anyone testing across that date has to check which scale a school is quoting. This is a TOEFL change, not a school policy change.",
              ["A3b-S31", "G2-S4", "V4-T14"]), "english"),
            row(C2728, F(
              "Princeton：2027 秋入學仍 test-optional；2027–28 季（2028 秋入學）起要求 SAT/ACT。學校自己的頁面已在 2026-11-07 直接讀到（先前只有搜尋摘錄），並載明現役軍人不受新規定限制，以及這個決定來自對五年 test-optional 資料的檢視。",
              "Princeton: test-optional for fall 2027 entry; SAT/ACT required from the 2027–28 cycle (fall 2028 entry). Read directly from the school\u2019s own page on 2026-11-07 (previously a search extract only), which adds that active military personnel are exempt from the new requirement and that the decision followed a review of five years of test-optional data.",
              ["A3a-S42", "A4-S24", "V4-T2"]), "reinstated"),
            row(C2728, F(
              "Columbia：2026–27 test-optional（ED 收到 2026 年 11 月、RD 收到 2027 年 2 月的考試）；2027–28 起恢復要求，2027 年 8 月生效。",
              "Columbia: test-optional in 2026–27 (tests through November 2026 for ED, February 2027 for RD); requirement returns for 2027–28, effective August 2027.",
              ["A3a-S47", "A4-S28"]), "reinstated"),
            row(C2728, F(
              "Notre Dame：test-optional「through 2026-2027」；2027–28 季（2028 秋入學）起恢復要求考試。",
              "Notre Dame: test-optional \"through 2026-2027\"; testing reinstated from the 2027–28 cycle (fall 2028 entrants).",
              ["G1-S31", "G1-S33"]), "reinstated"),
            row(C2728, F(
              "Harvey Mudd：2027 秋入學 test-optional；2028 秋入學那一季恢復要求考試。",
              "Harvey Mudd: test-optional for fall 2027; required testing returns for the fall 2028 cycle.",
              ["A3b-S8", "A3b-S10", "A4-S76"]), "reinstated"),
            row(L("2028–29（2029 秋入學）", "2028–29 (fall 2029 entry)"), F(
              "Vanderbilt：2027 與 2028 秋入學 SAT/ACT 選考；2029 秋入學起必繳。",
              "Vanderbilt: SAT/ACT optional for fall 2027 and fall 2028 entry; required for fall 2029 entry.",
              ["G1-S22"]), "reinstated"),
            row(C2526, F(
              "Johns Hopkins：2024-08-16 公告，SAT/ACT 從 2026 秋入學（2025–26 季）起必繳（本站只讀到公告的搜尋摘要）；2026–27 是第二個要求季。",
              "Johns Hopkins: announced 2024-08-16 that SAT/ACT is required from fall 2026 entry (the 2025–26 cycle; announcement read as a snippet only); 2026–27 is the second required cycle.",
              ["A3b-S14", "A3b-S12"]), "reinstated"),
            row(C2526, I(
              "Stanford：頁面說「ACT and SAT scores were optional for the Class of 2029」，由此推得必繳從 2025–26 季開始，不是本季新規定。",
              "Stanford: the page says \"ACT and SAT scores were optional for the Class of 2029\", from which we infer the requirement began in the 2025–26 cycle and is not new this cycle.",
              ["A3a-S19"]), "reinstated"),
            row(L("Class of 2029", "Class of 2029"), F(
              "Harvard（2024 年 4 月公告）與 Dartmouth 都從 Class of 2029 起恢復要求考試；兩校都允許部分國際申請者用 AP／IB／A-Level 等代替。",
              "Harvard (announced April 2024) and Dartmouth both reinstated testing from the Class of 2029; both let some applicants outside the US use AP, IB, A-Level or similar instead.",
              ["A3a-S29", "A3a-S28", "G1-S10"]), "reinstated"),
            row(L("Class of 2027", "Class of 2027"), F(
              "MIT：2022-03-28 公告，從 Class of 2027 起恢復 SAT/ACT 要求。Caltech 2024-04-11 公告恢復，2025–26 目錄已列為 2026 秋入學的要求。",
              "MIT: announced 2022-03-28 that SAT/ACT is required again from the Class of 2027. Caltech announced its return on 2024-04-11; its 2025–26 catalog already lists the requirement for fall 2026 applicants.",
              ["A3a-S3", "A4-S8", "A3a-S15"]), "reinstated")
          ]
        }
      },

      // ───────────────────────── plans
      {
        id: "plans",
        h: L("申請方案、截止日與助學金", "Plans, deadlines and aid"),
        judgment: L(
          "有來源的方案變更很少：Michigan 從 2025–26 起加入有約束力的 ED；Caltech RD 截止日從 1 月 5 日移到 1 月 4 日。其他學校的時程筆記多數寫「未找到有來源的變更」。",
          "Sourced plan changes are few: Michigan added binding ED from 2025–26, and Caltech's RD deadline moved from 5 January to 4 January. For most other schools the calendar notes record no sourced change."
        ),
        table: {
          cols: COLS,
          filter: true,
          rows: [
            row(C2526, F(
              "Michigan：2025 年 7 月宣布為一年級申請者新增有約束力的 Early Decision，從 2026 秋入學那一季開始。官方頁的搜尋摘要列出 ED 11/1、助學金 11/15、12/24 前放榜、1/6 前確認（頁面本身回傳 403，未能打開）。",
              "Michigan: announced in July 2025 a binding Early Decision plan for first-year applicants, starting with the fall 2026 entry cycle. A search summary of the official page lists ED Nov 1, aid Nov 15, decision by Dec 24, commitment by Jan 6 (the page itself returned 403).",
              ["MI-S2", "MI-S4", "MI-S5", "MI-S1"]), "michigan"),
            row(C2627, I(
              "Michigan：ED、EA、RD 三種方案很可能延續到 2027 秋入學，但 2026–27 的頁面無法讀取，未證實。",
              "Michigan: the three-plan structure (ED, EA, RD) most likely continues for fall 2027 entry, but no 2026–27 page could be read to confirm it.",
              ["MI-S1"]), "michigan"),
            row(C2627, F(
              "Caltech：RD 截止日從 2026-01-05（2025–26 目錄）移到 2027-01-04（現行目錄）；REA 在 2025–26 就已實施。",
              "Caltech: RD deadline moved from 2026-01-05 (2025–26 catalog) to 2027-01-04 (current catalog); REA was already in place in 2025–26.",
              ["A3a-S15", "A3a-S16"]), "caltech"),
            row(L("2026 年起", "From 2026"), F(
              "Purdue：「Beginning in 2026」Indiana 州法要求對持有特定國籍（中國含香港與澳門、俄羅斯、北韓、伊朗、委內瑞拉、古巴）的申請者加做審查步驟。",
              "Purdue: \"Beginning in 2026, Indiana law requires additional review steps\" for applicants holding citizenship of listed countries (China incl. Hong Kong and Macau, Russia, North Korea, Iran, Venezuela, Cuba).",
              ["A3a-S83"]), "purdue"),
            row(C2627, F(
              "Swarthmore：2027 秋起，家庭年收入 20 萬美元以下保證免學費；是否適用國際生未說明（checked 2026-11-07）。",
              "Swarthmore: a tuition guarantee from fall 2027 for families earning $200,000 or less; whether it covers international citizens is not stated (checked 2026-11-07).",
              ["A3b-S43"]), "swarthmore"),
            row(NS(["A2-S27"]), F(
              "Georgetown：現在除了自己的申請表，也收 Common App；從哪一季開始未說明。",
              "Georgetown: now accepts Common App alongside its own application; the starting cycle is not stated.",
              ["A2-S27"]), "georgetown")
          ]
        }
      },

      // ───────────────────────── uk
      {
        id: "uk",
        h: L("英國（UCAS 與入學考試）", "UK (UCAS and admissions tests)"),
        judgment: L(
          "UCAS 個人陳述從 2026 入學起改為三題；Oxford、Cambridge、Imperial 的理工科改用 UAT-UK 的 ESAT／TMUA，MAT 停辦，BMAT 在 2027 入學已找不到使用者。",
          "The UCAS personal statement became three questions from 2026 entry; Oxford, Cambridge and Imperial science and engineering courses now use UAT-UK's ESAT and TMUA, the MAT has stopped, and no university read uses BMAT for 2027 entry."
        ),
        table: {
          cols: COLS,
          filter: true,
          facets: [
            { v: "ucas", label: L("UCAS", "UCAS") },
            { v: "tests", label: L("入學考試", "Admissions tests") },
            { v: "cambridge", label: L("Cambridge", "Cambridge") }
          ],
          rows: [
            row(L("2026 入學起", "2026 entry onward"), F(
              "UCAS 個人陳述改為三題（為什麼想讀這個科系；學業如何幫你準備；課外做了什麼準備、為何有用），三題共用 4,000 字元（含空白，題目不計），每題至少 350 字元。",
              "UCAS personal statement: three questions (why this course; how your studies prepared you; what else you did outside education and why it helps), sharing 4,000 characters including spaces (questions not counted), at least 350 characters each.",
              ["F1-S4", "F1-S3"]), "ucas"),
            row(NS(["F1-S8"]), F(
              "UCAS 推薦信（centre-linked）分三段固定標題：Establishment details、Extenuating circumstances、Other supportive information，共 4,000 字元。哪一年開始用這格式頁面沒寫；頁面提到「reference template 2024」與 2025 季的檢討。",
              "UCAS reference (centre-linked): three fixed sections, \"Establishment details\", \"Extenuating circumstances\" and \"Other supportive information\", 4,000 characters in total. The start year of this format is not stated; the page mentions a \"reference template 2024\" and a review in the 2025 cycle.",
              ["F1-S8"]), "ucas"),
            row(L("2026 年起", "From 2026"), F(
              "Oxford：數學、電腦科學及其聯合學位改用 TMUA；MAT 不再舉辦（「From 2026, Oxford will use the TMUA」）。",
              "Oxford: Mathematics, Computer Science and their joint honours use the TMUA; the MAT will not take place (\"From 2026, Oxford will use the TMUA\").",
              ["F1-S34", "F1-S32"]), "tests"),
            row(L("2027 入學（觀察到）", "2027 entry (as observed)"), F(
              "Oxford：Engineering Science 用 ESAT；標題仍是「Physics Aptitude Test」的頁面內容已改寫成 ESAT；UAT-UK 2027 清單把 Oxford Physics 與 Biomedical Sciences 也列在 ESAT。",
              "Oxford: Engineering Science uses the ESAT; the page still titled \"Physics Aptitude Test\" now describes the ESAT; the UAT-UK 2027 list also puts Oxford Physics and Biomedical Sciences on the ESAT.",
              ["F1-S35", "F1-S36", "F1-S32"]), "tests"),
            row(L("2024 年起", "From 2024"), F(
              "原考試單位（Cambridge Assessment Admissions Testing）已「no longer delivering any tests」；ENGAA、NSAA 由 ESAT 取代，TMUA 從 2024 年移到 UAT-UK。",
              "The former test owner (Cambridge Assessment Admissions Testing) is \"no longer delivering any tests\"; ENGAA and NSAA were replaced by the ESAT, and the TMUA moved to UAT-UK from 2024.",
              ["F1-S33"]), "tests"),
            row(NS(["F1-S33"]), F(
              "BMAT：UCAS 考試清單、Cambridge 2027 入學考試清單、Cambridge Medicine 與 Imperial 考試頁都沒有 BMAT；兩校醫學系都用 UCAT。BMAT 從哪一屆停用未能在官方頁確認。",
              "BMAT: absent from UCAS's list of admissions tests, Cambridge's 2027-entry assessment list, Cambridge Medicine and Imperial's tests page; both medical schools use the UCAT. The year BMAT ended could not be confirmed on an official page.",
              ["F1-S14", "F1-S17", "F1-S21", "F1-S38"]), "tests"),
            row(L("2027 入學（觀察到）", "2027 entry (as observed)"), F(
              "Cambridge：流程是登記考試 → 送 UCAS → 填 My Cambridge Application（UCAS 送出後 48 小時內寄出，2026-10-22 18:00 截止，附 1,200 字元選填陳述）。讀到的 Cambridge 頁面都沒有提到 COPA。",
              "Cambridge: the steps are register for any assessment → submit UCAS → complete My Cambridge Application (emailed within 48 hours of UCAS submission, due 2026-10-22 18:00, with an optional 1,200-character statement). None of the Cambridge pages read mentions COPA.",
              ["F1-S15", "F1-S23"]), "cambridge"),
            row(NS(["F1-S15", "F1-S23"]), I(
              "Cambridge：My Cambridge Application 看起來是國際申請者唯一的附加表格；它是否正式取代 SAQ 與 COPA，頁面沒有說。",
              "Cambridge: My Cambridge Application appears to be the single additional form for international applicants; whether it formally replaced the SAQ and COPA is not stated.",
              ["F1-S15", "F1-S23"]), "cambridge"),
            row(L("2027 入學（觀察到）", "2027 entry (as observed)"), F(
              "Cambridge Natural Sciences 生物路線：頁面說「Mathematics is now a required subject」且「two sciences are now a requirement」。Imperial Biological Sciences 2027 入學要求 ESAT（Mathematics 1、Chemistry、Biology）。",
              "Cambridge Natural Sciences, biological route: the page says \"Mathematics is now a required subject\" and \"two sciences are now a requirement\". Imperial Biological Sciences requires the ESAT (Mathematics 1, Chemistry, Biology) for 2027 entry.",
              ["F3-S2", "F3-S13"]), "cambridge"),
            row(NS(["F1-S9", "F1-S13"]), I(
              "UCAS Adjustment：讀到的 UCAS 頁面都沒提到，2027 入學的顧問時程表也沒有，這與 Adjustment 已不再提供一致；何時或是否停辦未證實。",
              "UCAS Adjustment: no UCAS page read mentions it, and it is absent from the 2027-entry adviser timeline, which is consistent with Adjustment no longer being offered; when or whether it was withdrawn is not confirmed.",
              ["F1-S9", "F1-S13"]), "ucas")
          ]
        }
      },

      // ───────────────────────── watch
      {
        id: "watch-2027-28",
        h: L("2027–28 待查清單", "To re-check for 2027–28"),
        judgment: L(
          "明年春天起要重查的是：公告恢復考試的四校細節、UC 考試檢討結果、Common App 2027–28 的變更，以及這次讀不到的 Michigan、Oxford 頁面。",
          "From next spring, re-check: the details at the four schools returning to required testing, the outcome of UC's testing review, Common App's 2027–28 changes, and the Michigan and Oxford pages that could not be read this time."
        ),
        intro: L(
          "以下每一條都是推論或假設，不是事實；只寫來源給的日期，沒有日期的就寫沒有日期。",
          "Every item below is an inference or an assumption, not a fact. Dates appear only where a source gives them; where none exists, we say so."
        ),
        items: [
          I("Princeton、Columbia、Notre Dame、Harvey Mudd 在 2027–28 恢復要求考試。要查：是否接受國際考試代替、送分期限、是否收自報分數。這些細節目前頁面沒有寫。",
            "Princeton, Columbia, Notre Dame and Harvey Mudd require testing again in 2027–28. Re-check: whether international exams can substitute, score deadlines, and whether self-reported scores are accepted. Current pages do not give these details.",
            ["A3a-S42", "A3a-S47", "G1-S33", "A3b-S8"]),
          I("UC：BOARS 報告預定 2027 年 2 月、Regents 2027 年 6 月收到建議；2028 秋入學（2027–28 季）的考試政策要等那之後才知道。",
            "UC: the BOARS report is due February 2027 and the Regents receive recommendations by June 2027; testing policy for fall 2028 entry (the 2027–28 cycle) will be known only after that.",
            ["A2-S4"]),
          I("NYU 選考「through the 2027-2028 application cycle」、UW–Madison 選考「through the spring 2028 term」、Olin 的暫停措施只寫到 2026–27：這些期限之後的政策都還沒公告。",
            "NYU is optional \"through the 2027-2028 application cycle\", UW–Madison \"through the spring 2028 term\", and Olin's suspension is stated only through 2026–27; policy after each of these has not been announced.",
            ["G1-S52", "G2-S13", "A3b-S5"]),
          I("Emory 兩個頁面寫的入學年不一致（考試頁寫 2027 秋，FAQ 寫 2028 秋）；2027–28 之前要重讀。",
            "Emory's two pages name different entry years for test-optional (fall 2027 on the exams page, fall 2028 in the FAQ); re-read before 2027–28.",
            ["G1-S39", "G1-S40"]),
          A("Common App 2027–28 的變更會像本季一樣，在給輔導老師的「What's New」簡報裡公告；公告日期目前未知。2026–27 申請表是 2026-08-01 開放的。",
            "Common App's 2027–28 changes will be announced, as this year, in a counselor \"What's New\" deck; no date is known. The 2026–27 application opened on 2026-08-01.",
            ["A1-S1", "A1-S4"]),
          I("Michigan：admissions.umich.edu 在 2026-11-07 對自動讀取回傳 403。ED 是否延續、RD 截止日、考試政策，都要有人用一般瀏覽器開頁確認。",
            "Michigan: admissions.umich.edu returned 403 to automated reads on 2026-11-07. Whether ED continues, the RD deadline and testing policy all need a person to open the pages in an ordinary browser.",
            ["MI-S1", "MI-S2"]),
          I("Oxford：ox.ac.uk 在 2026-11-07 回傳 403，2027 入學的面試日期、放榜日、考試登記日都未取得；2028 入學也要重查。",
            "Oxford: ox.ac.uk returned 403 on 2026-11-07, so interview dates, decision dates and test-registration dates for 2027 entry were not obtained; re-check for 2028 entry.",
            ["F1-S34"]),
          I("Mastery.org 換主後說重點是「continuity」；交付方式（是否經 Common App、Scoir 或 PDF）與合作大學名單是否改變，2027–28 前要重查。",
            "Mastery.org says its focus after the change of owner is \"continuity\"; whether its delivery channel (Common App, Scoir or PDF) or its college list changes should be re-checked before 2027–28.",
            ["C1-S6", "C1-S1"]),
          A("Coalition 的 Locker 是 MyCoalition 平台的一部分，隨平台一起結束；目前沒有官方來源證實。",
            "The Coalition Locker was part of the MyCoalition platform and ended with it; no official source confirms this yet.",
            ["A2-S14", "A2-S15"]),
          I("UCAS：推薦信三段格式的起始年、Adjustment 是否停辦、BMAT 停用的屆別，三者都沒有在官方頁確認，2028 入學前再查。",
            "UCAS: the start year of the three-section reference, whether Adjustment was withdrawn, and the year BMAT ended are all unconfirmed on official pages; re-check before 2028 entry.",
            ["F1-S8", "F1-S13", "F1-S33"])
        ]
      }
    ]
  };

  // ───────────────────────── board (built from the tables above, so the two never disagree)
  (function () {
    var P = window.ATLAS.pages["changes"];
    var CANON = { "2025–26 (fall 2026 entry)": "c2526", "2026–27 (fall 2027 entry)": "c2627", "2027–28 (fall 2028 entry)": "c2728" };
    // Non-canonical effective labels, placed by the cycle they first touch.
    function cycleOf(cell) {
      if (cell && cell.state === "not-stated") return "c2627";
      var en = cell.en;
      if (CANON[en]) return CANON[en];
      if (/^(2022|Class of 2027|Class of 2029|From 2024|2026 entry onward)/.test(en)) return "c2526";
      if (/^(2028–29)/.test(en)) return "c2728";
      return "c2627";
    }
    var cards = [];
    P.sections.forEach(function (s) {
      if (!s.table) return;
      s.table.rows.forEach(function (r) {
        var eff = r.cells[0], it = r.cells[1];
        var c = { cycle: cycleOf(eff), cat: s.id, t: it.t, tag: it.tag, src: it.src };
        if (eff.state === "not-stated") c.when = L("起始時間未說明", "Start not stated");
        else if (!CANON[eff.en]) c.when = eff;
        cards.push(c);
      });
    });
    var WATCH_CAT = ["tests", "tests", "tests", "tests", "systems", "plans", "uk", "systems", "systems", "uk"];
    P.sections[P.sections.length - 1].items.forEach(function (it, i) {
      cards.push({ cycle: "c2728", cat: WATCH_CAT[i] || "systems", t: it.t, tag: it.tag, src: it.src, watch: true });
    });
    P.sections.unshift({
      id: "board",
      h: L("三個申請季一覽", "Three cycles at a glance"),
      judgment: L(
        "已生效的變更集中在 Common App 欄位與考試；2027–28 那一欄大多是待查項目，其中已公告的事實只有各校恢復要求考試。",
        "Changes already in force cluster in Common App fields and testing; the 2027–28 column is mostly items to re-check, and its only announced facts are schools returning to required testing."
      ),
      viz: {
        type: "changes-board",
        title: L("每一張卡是一項變更，依生效申請季排列", "Each card is one change, placed by the cycle it takes effect"),
        subtitle: L("用類別篩選；虛線卡是 2027–28 待查的推論或假設，不是事實。", "Filter by category. Dashed cards are inferences or assumptions to re-check for 2027–28, not facts."),
        columns: [
          { id: "c2526", label: L("2025–26 與更早", "2025–26 and earlier"), sub: L("2026 秋入學以前", "Fall 2026 entry and before") },
          { id: "c2627", label: L("2026–27", "2026–27"), sub: L("2027 秋入學 · 本季", "Fall 2027 entry · this cycle") },
          { id: "c2728", label: L("2027–28 與待查", "2027–28 and to watch"), sub: L("2028 秋入學以後", "Fall 2028 entry onward") }
        ],
        cats: [
          { v: "systems", label: L("申請系統", "Systems") },
          { v: "tests", label: L("考試", "Tests") },
          { v: "plans", label: L("方案與補助", "Plans and aid") },
          { v: "uk", label: L("英國", "UK") }
        ],
        cards: cards
      }
    });
  })();
})();
