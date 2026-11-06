window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  // Item helpers. f = [事實] (must carry src), i = [推論], a = [假設].
  function F(zh, en, src, sub) { var o = { t: { zh: zh, en: en }, tag: "f", src: src }; if (sub) o.sub = sub; return o; }
  function I(zh, en, src, sub) { var o = { t: { zh: zh, en: en }, tag: "i" }; if (src) o.src = src; if (sub) o.sub = sub; return o; }
  function A(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "a" }; if (src) o.src = src; return o; }
  function NS(src) { return { state: "not-stated", checked: "2026-11-07", src: src }; }
  function L(zh, en) { return { zh: zh, en: en }; }

  // Stated-policy labels for the AI table.
  var Y = L("有（官方頁直接讀到）", "Yes (read on official page)");
  var YS = L("有（僅第三方轉述）", "Yes (secondary reporting only)");
  var N = L("官方頁無 AI 文字", "No AI text on official pages checked");
  var NS2 = L("查無（僅第三方紀錄，官方頁無法讀取）", "None found (secondary only; official page unreadable)");
  var UCY = L("有（UC 系統層級）", "Yes (UC system-wide)");
  var UNK = L("未取得", "Not retrieved");

  window.ATLAS.pages["record"] = {
    title: { zh: "校外多年紀錄如何進入申請", en: "How a multi-year record built outside school enters the application" },
    judgment: {
      zh: "30 校的官方頁沒有一所說明會把 badge、CLR 或 outside programme 的紀錄當正式文件收；校外紀錄實際能走的，是既有欄位加上具名的第三方證明人，而不是一種新的成績單格式。",
      en: "None of the 30 schools' official pages says it accepts badges, CLRs or an outside programme's record as a formal document; in practice an outside record enters through existing fields plus a named third party who can vouch for it, not through a new transcript format."
    },
    intro: {
      zh: "這頁處理一個具體問題：學生在學校以外、跨好幾年累積的紀錄（實驗時數、作品、比賽、口頭答辯），在美國大學一年級申請裡到底放得進哪裡、有多少字元、誰能替它作證。資料來自兩份 research note（C1–C3 與 C4），存取日期都是 2026-11-07。文中說的「outside programme」泛指任何非學校的課程或計畫，本頁不點名任何一個。標 [推論] 的段落是我們從事實推出來的，不是任何招生辦公室說過的話；維護者沒有招生辦公室的工作經驗。",
      en: "This page answers one practical question: when a student builds a record outside school over several years (lab hours, built work, competitions, oral defences), where in a US first-year application can it go, how many characters does that field allow, and who can vouch for it? It draws on two research notes (C1–C3 and C4), all accessed 2026-11-07. \"An outside programme\" means any non-school programme; none is named here. Anything tagged as inference is our reasoning from the facts, not something an admissions office said, and the maintainer has no admissions-office experience."
    },
    sections: [
      // ───────────────────────── C1 frameworks
      {
        id: "frameworks",
        h: { zh: "現有的紀錄框架", en: "Existing record frameworks" },
        judgment: {
          zh: "Mastery Transcript 只能由會員高中簽發，CLR 與 Open Badges 是登記與職場格式，Coalition Locker 已隨平台更換消失；沒有一個是 outside programme 能直接送進申請的管道。",
          en: "A Mastery Transcript can only be issued by a member high school, CLR and Open Badges are registrar and workforce formats, and the Coalition Locker went away with the platform change; none is a channel an outside programme can use to send a record into an application."
        },
        subs: [
          {
            h: { zh: "Mastery Transcript（MTC，現為 Mastery.org）", en: "Mastery Transcript (MTC, now Mastery.org)" },
            judgment: {
              zh: "「MT Ready」是 MTC 自己的標記，定義寬到「參加過一次培訓」就算；UC 的官方政策對無 GPA 的 mastery transcript 只給 admission by exception。",
              en: "\"MT Ready\" is MTC's own label, and its definition is loose enough that attending one training session qualifies; UC's official policy sends GPA-less mastery transcripts to admission by exception only."
            },
            items: [
              F("構想始於 2014 年一所會員高中；2017 年以 54 所創始學校成立，2024 年併入 ETS，2026 年換新東家並改以 Mastery.org 對外。",
                "The idea started at a member high school in 2014. The consortium launched in 2017 with 54 founding schools, joined ETS in 2024, and came under new ownership in 2026, now trading as Mastery.org.", ["C1-S1"]),
              F("2026-07-23 的 GlobeNewswire 新聞稿：自稱「AI-native education assessment platform」的 Legend.org 向 ETS 收購 MTC，以 Mastery.org 營運，近期重點是「continuity」。兩年內第二次換東家。",
                "A GlobeNewswire release dated 2026-07-23 says Legend.org, which calls itself an \"AI-native education assessment platform\", bought MTC from ETS and will run it as Mastery.org, with \"continuity\" as the immediate focus. That is the second change of owner in about two years.", ["C1-S6", "C1-S5", "C1-S1"]),
              F("兩種產品：Mastery Transcript 以學校定義的 competencies 取代分數、可獨立使用；MTC Learning Record 則是附在傳統成績單旁邊寄出。Competencies 由會員學校定義並認證，紀錄仍是「official school record」。",
                "Two products. The Mastery Transcript replaces grades with school-defined competencies and stands on its own; the MTC Learning Record travels alongside a traditional transcript. Competencies are defined and certified by member schools, and the record remains an official school record.", ["C1-S4"]),
              F("寄送方式：招生閱讀者從「single link」開啟，上層供快速瀏覽、證據在下一層。查過的頁面沒有說明走 Common App、Scoir 還是 PDF。MTC 說會主動聯絡學生申請的每一所大學。",
                "Delivery: the reader opens the record from a single link, with a scannable top layer and evidence one click down. The pages checked do not say whether it travels via Common App, Scoir or PDF. MTC says it contacts every college a student applies to.", ["C1-S3", "C1-S4"]),
              F("MTC 自己的數字對不上：2026-07-22 信件寫「over 800 colleges」，acceptances 頁與 higher-education 頁寫 1,017；以 acceptances 頁內嵌資料計算 mtReady: true 的不重複網域，2026-11-07 得 997（我們自己計算）。",
                "MTC's own counts disagree: \"over 800 colleges\" in the 2026-07-22 letter, 1,017 on the acceptances and higher-education pages, and 997 unique domains flagged mtReady: true in the acceptances page's embedded data on 2026-11-07 (our count).", ["C1-S5", "C1-S2", "C1-S3"]),
              F("MT Ready 的定義（MTC FAQ）：錄取過持有其紀錄的學生，**或**參加過其 transcript reader training，兩者擇一即可。對大學免費。30 所目標學校在該頁資料中全部標為 mtReady: true。",
                "MTC's FAQ defines a college as Mastery Transcript Ready if it has admitted a student with an MTC record **or** taken part in reader training. Listing is free for colleges. All 30 target schools are flagged mtReady: true in that page's data.", ["C1-S2"]),
              I("因此 MT Ready 只能讀成「MTC 回報有過接觸」，不能讀成「該校把 mastery transcript 視為與一般成績單等同」。這是供應商的說法，不是學校的政策。",
                "So the flag should be read as \"MTC reports some contact\", not as \"this college treats mastery transcripts as equivalent to graded ones\". It is a vendor's claim, not a college policy.", ["C1-S2"]),
              F("目標學校中唯一找到的官方立場來自 UC：UCOP 2023-01-05 備忘錄引用 BOARS 指引，無法以 GPA 成績單支持 A-G 課程的學生「只能」以 Admission by Exception 審查，並強烈建議學校繼續發 GPA 成績單。",
                "The only official college-side statement found is UC's. A UCOP memo dated 2023-01-05, citing BOARS guidance, says students who cannot support A-G coursework with a GPA-based transcript can only be considered for Admission by Exception, and strongly encourages schools to keep issuing GPA-based transcripts.", ["C1-S7", "C1-S8"]),
              I("MTC 把 Berkeley、UCLA、UCSD 列為 MT Ready，和 UC 的官方政策只有在「Ready」指「錄取過（可能是 by exception）或受過訓」時才說得通。兩者衝突時，以官方的 UCOP 備忘錄為準。",
                "MTC's listing of Berkeley, UCLA and UCSD as MT Ready fits UC's official policy only if \"Ready\" means \"admitted someone, possibly by exception, or trained\". Where the two conflict, weight the official UCOP memo over the vendor page.", ["C1-S7", "C1-S2"]),
              F("可取得的目標學校招生 sitemap（23 個 host、約 19,600 個 URL）中，沒有任何網址含 mastery、badge、competency 或 credential。MIT 的成績單頁要求由 counselor 或學校人員寄送，沒有提到非傳統或 mastery 成績單。",
                "In the admissions sitemaps that could be retrieved (23 hosts, about 19,600 URLs), no URL contains \"mastery\", \"badge\", \"competency\" or \"credential\". MIT's transcripts page requires transcripts sent by a counselor or school official and says nothing about non-traditional or mastery transcripts.", ["C1-S28"]),
              I("Outside programme 本身不能簽發 Mastery Transcript，因為 competencies 必須由會員學校認證。最多是會員學校的學生把校外作品當成學校紀錄內的證據；會員學校是否這樣做，查過的頁面沒有說。",
                "An outside programme cannot issue a Mastery Transcript, because member schools certify the competencies. At most, a student at a member school might have outside work entered as evidence inside the school's record; whether member schools do this is not stated on the pages checked.", ["C1-S4"])
            ]
          },
          {
            h: { zh: "1EdTech Comprehensive Learner Record（CLR）2.0", en: "1EdTech Comprehensive Learner Record (CLR) 2.0" },
            judgment: { zh: "CLR 是技術標準，不是招生管道；30 校的招生頁都沒提到它。", en: "CLR is a technical standard, not an admissions channel; none of the 30 schools' admissions pages mention it." },
            items: [
              F("CLR Standard 2.0 於 2025-03-04 經 1EdTech 社群投票後公開，與 Open Badges 3.0 對齊，以 W3C Verifiable Credentials 建構，經密碼學簽章、不可竄改；AACRAO 推薦此標準。發布文章沒有描述任何招生用途。",
                "CLR Standard 2.0 became public on 2025-03-04 after a 1EdTech community vote. It aligns with Open Badges 3.0, is built on W3C Verifiable Credentials, and is cryptographically signed and tamper-evident; AACRAO recommends it. The release article describes no admissions use.", ["C1-S9"]),
              I("在這 30 校，CLR 目前是註冊組與職場用的格式，不是一年級申請的管道（依上述 sitemap 掃描，2026-11-07）。",
                "At these 30 schools, CLR is for now a registrar and workforce format, not a route into a first-year application (sitemap scan, 2026-11-07).", ["C1-S9"])
            ]
          },
          {
            h: { zh: "Open Badges 3.0 與 W3C Verifiable Credentials", en: "Open Badges 3.0 and W3C Verifiable Credentials" },
            judgment: { zh: "簽章證明「誰發的、有沒有被改過」，不證明評量嚴不嚴謹。", en: "A signature proves who issued a badge and that it was not altered; it does not prove the assessment was rigorous." },
            items: [
              F("Open Badges 3.0 是 Final Release，目前文件版本日期 2026-06-29，遵循 Verifiable Credentials Data Model v2.0 的慣例。VC Data Model 2.0 於 2025-05-15 成為 W3C Recommendation。",
                "Open Badges 3.0 is a Final Release, with the current document dated 2026-06-29; it follows the conventions of the Verifiable Credentials Data Model v2.0, which became a W3C Recommendation on 15 May 2025.", ["C1-S10", "C1-S11"]),
              F("OB 3.0 的 issuer 可以是組織，也可以是個人；規格包含 self-assertion 用例。Evidence 定義為支持主張的資訊，例如指向學習者作品的 URL。",
                "In OB 3.0 the issuer can be an organisation or an individual, and the spec includes a self-assertion use case. Evidence is defined as information supporting a claim, such as a URL to something the learner made.", ["C1-S10"]),
              I("所以 outside programme 發的 badge，分量只等於閱讀者對這個 programme 的了解。",
                "A badge from an outside programme therefore carries only as much weight as the reader's knowledge of that programme.", ["C1-S10"])
            ]
          },
          {
            h: { zh: "Credly 類型的 badge", en: "Credly-type badges" },
            judgment: { zh: "可以寫成一行 Honors 文字，但沒有跡象顯示任何目標學校會點進去驗證。", en: "It can appear as a line of Honors text, but nothing indicates any target school will click through and check it." },
            items: [
              F("品牌為「Credly by Pearson」，發證者是認證、評量與訓練機構及雇主，頁面稱有超過 3,700 個發證組織；頁面沒有說明驗證機制，也沒提到 Open Badges。",
                "The service is branded \"Credly by Pearson\"; issuers are certification, assessment and training providers and employers, and the page reports more than 3,700 issuing organisations. It does not describe a verification mechanism or mention Open Badges.", ["C1-S12"]),
              I("30 校的頁面都沒提到 Credly 或 digital badge（sitemap 掃描，2026-11-07）。Badge 仍可以文字形式出現，例如在 Honors 寫上發證機構名稱。",
                "None of the 30 schools' pages mention Credly or digital badges (sitemap scan, 2026-11-07). A badge can still appear as text, for example an Honors entry that names the issuer.", ["C1-S12"])
            ]
          },
          {
            h: { zh: "Coalition「Locker」", en: "The Coalition \"Locker\"" },
            judgment: { zh: "曾是最接近「多年作品庫」的申請系統功能，但 Coalition 改用 Scoir 後官方頁已不再提及。", en: "It was the closest thing an application system had to a multi-year work archive, but since the Coalition moved to Scoir its official pages no longer mention it." },
            items: [
              F("Coalition 2015 年的規劃包含一個存放學生資料的「locker」（第三方報導）。", "The Coalition's 2015 plan included a \"locker\" for student materials (secondary report).", ["C1-S15"]),
              F("一份第三方指南（最後更新 2024-08-28）描述：學生可從 9 年級開始上傳，預設私密，大學只看得到學生附加到申請的項目。",
                "A secondary guide (last updated 2024-08-28) describes it: students could upload from 9th grade, items were private by default, and colleges saw only items attached to an application.", ["C1-S17"]),
              F("2022 年 1 月 Coalition 宣布整合進 Scoir；現行官方頁說學生「apply Coalition via the Scoir platform」，並已停用先前的技術平台。兩頁都沒有提到 Locker、作品集或附件。",
                "In January 2022 the Coalition announced its move into Scoir. Its current pages say students apply via the Scoir platform and that the previous technology platform has been discontinued. Neither page mentions the Locker, portfolios or file attachments.", ["C1-S16", "C1-S13", "C1-S14"])
            ]
          },
          {
            h: { zh: "學校自己的說法：homeschool 頁是最接近的官方先例", en: "What schools themselves say: homeschool pages as the nearest official precedent" },
            judgment: { zh: "沒有學校發布 competency-based 成績單的專頁；homeschool 頁已在要 syllabus、實驗紀錄、研究論文與外部推薦人，是「無分數紀錄怎麼被讀」最強的官方線索。", en: "No school publishes a page on competency-based transcripts; homeschool pages already ask for syllabi, lab work, research papers and outside recommenders, which makes them the strongest official signal of how an ungraded record is read." },
            intro: { zh: "以下 10 校逐頁讀過；其餘 20 校在本單元未逐頁查核。", en: "The ten schools below were read page by page; the other 20 were not checked individually in this unit." },
            table: {
              cols: [L("學校", "School"), L("頁面要求", "What the page asks for"), L("誰可以作證", "Who may vouch")],
              rows: [
                ["MIT", F("無額外要求；校外課程成績單與 homeschool portfolio 的評估「很有幫助」", "No separate requirements; outside-course transcripts and an evaluation of the homeschool portfolio are called helpful", ["C1-S18"]), F("Counselor + 2 位老師；可加 mentor 或工作主管的信；總數 ≤4 封", "Counselor + 2 teachers; extra letters from mentors or job supervisors; 4 letters at most", ["C1-S18"])],
                ["Stanford", F("成績單；鼓勵附詳細課程說明", "Transcript; a detailed curriculum description is encouraged", ["C1-S19"]), F("兩封老師信，最好來自校外授課者；家長可代 counselor（較不理想）", "Two teacher letters, preferably from outside instructors; a parent may stand in for the counselor (less preferred)", ["C1-S19"])],
                ["Caltech", F("家長可自製成績單；校外課程需正式成績；有 Homeschool SSR 範本", "A parent-made transcript is allowed; outside courses need official grades; a Homeschool SSR template exists", ["C1-S20"]), F("STEM 與人文各一封；若授課者全是家長，需多一封", "One STEM and one humanities letter; one more if every instructor was a parent", ["C1-S20"])],
                ["Penn", F("整合成績單；syllabi、實驗、閱讀清單；說明學生如何「demonstrate mastery」", "A consolidated transcript; syllabi, lab work, reading lists; how the student demonstrated mastery across the curriculum", ["C1-S21"]), F("盡可能找校外授課者；SSR 可由家人填", "Outside instructors if possible; family may complete the SSR", ["C1-S21"])],
                ["Brown", F("自行設計的四年紀錄與資源；詳細 syllabus；校外成績單", "A self-designed four-year record with resources; a detailed syllabus; outside transcripts", ["C1-S22"]), F("偏好傳統課堂的授課者；可多一封選填信，不能來自親屬或付費家教", "Instructors from traditional classrooms preferred; one optional extra letter, not from a relative or paid tutor", ["C1-S22"])],
                ["Georgetown", F("若無傳統成績單，需詳細課程大綱；校外課程需正式成績單", "A detailed curriculum outline if there is no traditional transcript; official transcripts for outside courses", ["C1-S23"]), F("家長可擔任 counselor；老師信最好來自非家長", "A parent may act as counselor; teacher letters best from non-parents", ["C1-S23"])],
                ["UW", F("在申請中詳述修課內容；除非有一年大學課程，否則需 SAT/ACT", "A detailed account of coursework in the application; SAT/ACT required unless there is a year of college coursework", ["C1-S24"]), NS(["C1-S24"])],
                ["Swarthmore", F("描述性課程清單；研究計畫與論文範例；實習證明；獎項的日期與來源", "Descriptive course listings; examples of research projects and papers; documentation of internships; dates and sources of awards", ["C1-S25"]), F("至少 3 封；偏好有學術接觸的成人", "At least 3 letters; adults with academic contact preferred", ["C1-S25"])],
                ["UC", F("非認證課程或無正式成績單 → admission by exception", "Non-accredited curriculum or no official transcript → admission by exception", ["C1-S26", "C1-S7"]), NS(["C1-S26"])],
                ["UT Austin", F("非傳統中學教育 → 指定 percentile rank（SB 1543）；homeschool 成績單由負責成人簽署", "Non-traditional secondary education → an assigned percentile rank (SB 1543); homeschool transcript signed by the responsible adult", ["C1-S27"]), NS(["C1-S27"])]
              ]
            },
            items: [
              I("Penn 提到 mastery、Swarthmore 要研究論文與獎項來源、MIT 提到 portfolio 評估：這些是目前「無分數紀錄如何被閱讀」最有力的官方先例。",
                "Penn's mention of mastery, Swarthmore's request for research papers and award sources, and MIT's reference to a portfolio evaluation are the strongest official precedent for how an ungraded record is read.", ["C1-S21", "C1-S25", "C1-S18"])
            ]
          }
        ]
      },

      // ───────────────────────── C2 map
      {
        id: "map",
        h: { zh: "紀錄 → 欄位對照表", en: "Record-to-field map" },
        judgment: {
          zh: "會自帶證明人的欄位只有三種（MIT Research Supplement、Caltech 研究信、Other Recommender）；其餘文字欄位只承載申請者自己的陳述，而 UC 的 Academic history 補充說明只有 550 個字元（不是字）。",
          en: "Only three kinds of field bring their own verifier (MIT Research Supplement, the Caltech research letter, Other Recommender); every other text field carries only the applicant's word, and UC's Academic history comments box holds 550 characters, not words."
        },
        intro: {
          zh: "每列是一種 outside programme 可能產生的證據，配上一個放得下它的欄位。字元與字數上限只列官方頁查得到的；流傳但查不到官方出處的數字，以「未說明」標示並附查核日期。「是否合適」與「誰能證明」多屬 [推論]，各格自行標記。",
          en: "Each row pairs one kind of evidence an outside programme can produce with a field that can hold it. Character and word budgets are shown only where an official page states them; figures that circulate without an official source are marked not stated, with the date checked. Fit and verifier entries are mostly inference and each cell is tagged."
        },
        table: {
          filter: true,
          facets: [
            { v: "commonapp", label: L("Common App", "Common App") },
            { v: "uc", label: L("UC", "UC") },
            { v: "mit", label: L("MIT", "MIT") },
            { v: "caltech", label: L("Caltech", "Caltech") }
          ],
          cols: [L("證據類型", "Evidence type"), L("欄位", "Field"), L("字元／字數上限", "Character or word budget"), L("誰能證明", "Who can verify")],
          rows: [
            { filter: "commonapp", cells: [
              L("有時間戳的實驗時數", "Timestamped lab hours"),
              F("Common App Activities（最多 10 項）", "Common App Activities (up to 10)", ["C1-S33", "C1-S34"]),
              F("Position 50、Organization 100、Description 150 字元；另有每週時數與每年週數欄", "Position 50, Organization 100, Description 150 characters; plus hours/week and weeks/year fields", ["C1-S33"]),
              F("指導的成人；ISEF Form 2C 由指導成人（不是學生）填寫，說明學生的獨立工作與角色，是現成的作證範本", "The supervising adult; ISEF Form 2C is completed by the supervising adult, not the student, and describes the student's independent work and role, an existing template for this kind of attestation", ["C1-S45"])
            ]},
            { filter: "mit", cells: [
              L("有時間戳的實驗時數", "Timestamped lab hours"),
              F("MIT Research Supplement（SlideRoom，每人一份）", "MIT Research Supplement (SlideRoom, one per applicant)", ["C1-S32"]),
              F("問卷 + abstract 或 poster PDF + mentor 信", "Questionnaire + abstract or poster PDF + mentor letter", ["C1-S32"]),
              F("研究 mentor，信件在 SlideRoom 內提交", "The research mentor, whose letter is submitted inside SlideRoom", ["C1-S32"])
            ]},
            { filter: "caltech", cells: [
              L("有時間戳的實驗時數", "Timestamped lab hours"),
              F("Caltech 研究上傳（Beaver Breakroom）＋ Research Description Form", "Caltech research upload (Beaver Breakroom) + Research Description Form", ["C1-S29"]),
              NS(["C1-S29"]),
              F("研究場所的推薦信，必須談到學生的具體貢獻", "A letter from the research site that must speak to the student's specific contributions", ["C1-S29"])
            ]},
            { filter: "commonapp", cells: [
              L("數字化的技能認證（分數、等級）", "Numeric skill certification (score, level)"),
              F("Common App Honors（最多 5 項：名稱、年級、層級）", "Common App Honors (up to 5: title, grade level, recognition level)", ["C1-S34"]),
              NS(["C1-S34", "C1-S38"]),
              I("發證機構；OB 3.0 簽章只證明來源，不證明嚴謹度", "The issuing body; an OB 3.0 signature proves origin, not rigor", ["C1-S10"])
            ]},
            { filter: "uc", cells: [
              L("數字化的技能認證（分數、等級）", "Numeric skill certification (score, level)"),
              F("UC Activities & Awards（最多 20 項、6 類，含「Award or honor」）", "UC Activities & Awards (up to 20 entries in 6 categories, including \"Award or honor\")", ["C1-S39", "C1-S40"]),
              NS(["C1-S39", "C1-S40"]),
              F("UC 要求內容「verifiable by an independent party」並定期抽查；UC 頁面沒有提到推薦信", "UC requires entries to be verifiable by an independent party and runs regular screenings; the UC pages checked do not mention letters", ["C1-S41", "C1-S40"])
            ]},
            { filter: "commonapp", cells: [
              L("公開貢獻紀錄（commit、wiki 編輯）", "Public contribution record (commits, wiki edits)"),
              F("Common App Additional Information（Common App 指向此處補充活動細節）", "Common App Additional Information (Common App points here for more activity detail)", ["C1-S33", "C1-S50"]),
              NS(["C1-S33", "C1-S38", "C1-S50"]),
              F("團隊競賽的公開 Wiki 在截止時凍結並永久存檔，Attributions Form 列出「隊員做了什麼、他人做了什麼」", "In a team competition, the public Wiki freezes at the deadline and is permanently archived, and an Attributions Form lists what team members did and what others did", ["C1-S42", "C1-S43"])
            ]},
            { filter: "mit", cells: [
              L("公開貢獻紀錄（程式碼）", "Public contribution record (code)"),
              F("MIT Maker Portfolio（SlideRoom，US$10）", "MIT Maker Portfolio (SlideRoom, US$10)", ["C1-S32"]),
              F("問卷 + 最多 25 個媒體檔；影片總長 ≤2 分鐘；程式專案需附 codebase 與可運作的 demo", "Questionnaire + up to 25 media items; video ≤2 minutes in total; code projects need the codebase and a working demo", ["C1-S32"]),
              I("欄位本身沒有指定證明人；公開、帶時間戳的平台歷史是作品自己的證據", "The field names no verifier; public, timestamped platform history is the work's own evidence")
            ]},
            { filter: "caltech", cells: [
              L("前測／後測差異", "Pre/post test deltas"),
              F("Caltech portfolio（選填，Beaver Breakroom）", "Caltech portfolio (optional, Beaver Breakroom)", ["C1-S30"]),
              F("項目數不設限；媒體 ≤5 GB；文件 ≤75 頁；接受連結；團體作品須說明個人角色", "No item cap; media ≤5 GB; documents ≤75 pages; links accepted; group work must state the individual's role", ["C1-S30"]),
              I("只有測驗是外部或標準化時才有獨立證明人；否則沒有", "Only if the test is external or standardised; otherwise there is no independent verifier")
            ]},
            { filter: "commonapp", cells: [
              L("重現實驗（replication）紀錄", "Replication record"),
              F("Common App Other Recommender（類型含 employer、college access counselor、other 等；各校自定是否接受）", "Common App Other Recommender (types include employer, college access counselor, other; each college sets its own acceptance)", ["C1-S35", "C1-S36"]),
              NS(["C1-S35", "C1-S36"]),
              I("原作者或 mentor；若重現結果已發表，則為期刊", "The original authors or a mentor; a journal if the replication is published")
            ]},
            { filter: "caltech", cells: [
              L("口頭答辯紀錄（錄影的問答）", "Oral-defence record (recorded Q&A)"),
              F("Caltech portfolio（接受影片）", "Caltech portfolio (video accepted)", ["C1-S30"]),
              F("媒體 ≤5 GB", "Media ≤5 GB", ["C1-S30"]),
              F("競賽評審團；例如一項國際團隊競賽的 25 分鐘評審場次會錄影", "Competition judging panels; for example, one international team competition records its 25-minute judging session", ["C1-S43"])
            ]},
            { filter: "mit", cells: [
              L("論文發表", "Publication"),
              F("MIT Research Supplement（abstract／poster PDF；已發表則附引用）", "MIT Research Supplement (abstract/poster PDF; citation if published)", ["C1-S32"]),
              F("每位申請者只能提交一份", "One per applicant", ["C1-S32"]),
              F("期刊審的是稿件；ICMJE 明言判定作者資格不是期刊編輯的職責，學生的份量要靠 mentor 信或 CRediT 的 14 種角色說明", "The journal vouches for the manuscript; ICMJE says it is not editors' role to decide authorship, so the student's share needs a mentor letter or a CRediT statement (14 roles)", ["C1-S47", "C1-S48"])
            ]},
            { filter: "caltech", cells: [
              L("論文發表", "Publication"),
              F("Caltech 研究上傳（強烈偏好全文）", "Caltech research upload (full paper strongly preferred)", ["C1-S29"]),
              NS(["C1-S29"]),
              F("研究場所推薦信，須談具體貢獻；有 embargo 需說明", "Research-site letter that speaks to specific contributions; any embargo must be explained", ["C1-S29"])
            ]},
            { filter: "uc", cells: [
              L("任何校外紀錄的學業脈絡", "Academic context for any outside record"),
              F("UC Additional comments（Academic history 區）", "UC Additional comments (Academic history section)", ["C1-S39"]),
              F("**550 字元**（不是 550 字）", "**550 characters** (not words)", ["C1-S39"]),
              I("只適合學業脈絡，放不下證據本身", "Suited to academic context only; too small for the evidence itself", ["C1-S39"])
            ]},
            { filter: "uc", cells: [
              L("任何校外紀錄的補充說明", "Further explanation of any outside record"),
              F("UC Additional comments（一般，PIQ 步驟）；UC 說「shouldn't be an essay」", "UC Additional comments (general, PIQ step); UC says it \"shouldn't be an essay\"", ["C1-S40"]),
              NS(["C1-S40"]),
              F("同上：須可由獨立第三方驗證", "As above: must be verifiable by an independent party", ["C1-S41"])
            ]},
            { filter: "uc", cells: [
              L("多年紀錄的敘事", "Narrative of a multi-year record"),
              F("UC PIQ（8 題選 4）", "UC PIQ (4 of 8)", ["C1-S39"]),
              F("每題 350 字（words）", "350 words each", ["C1-S39"]),
              F("UC 可要求驗證內容或文字是否出自學生本人", "UC may request authentication that the content or writing is the student's", ["C4-S5"])
            ]}
          ]
        },
        subs: [
          {
            h: { zh: "流傳但查不到官方出處的上限", en: "Limits that circulate but were not found on an official page" },
            judgment: { zh: "下列數字常被引用，但本次在官方公開頁上找不到；網站不採用。", en: "These figures are widely quoted but were not found on an official public page this run; the site does not use them." },
            items: [
              F("Common App Honors 每項 100 字元：官方公開頁查無（2026-11-07）。", "Common App Honors 100 characters per entry: not found on an official public page (2026-11-07).", ["C1-S34", "C1-S38"]),
              F("Common App Additional Information 650 字：官方公開頁查無；help center 為前端渲染，無法讀取（2026-11-07）。", "Common App Additional Information 650 words: not found on an official public page; the help centre is client-rendered and could not be read (2026-11-07).", ["C1-S33", "C1-S38", "C1-S50"]),
              F("UC Activities & Awards 描述 350 字元、UC 一般 Additional comments 550 字：查過的 UC 頁面都沒寫。唯一查得到的 550 是 Academic history 區的 550 **字元**。",
                "UC Activities & Awards 350-character descriptions and a 550-word general Additional comments box: not stated on the UC pages checked. The only 550 that could be verified is the 550-**character** Academic history comments box.", ["C1-S39", "C1-S40"]),
              F("SlideRoom 平台層級的上限：由各校自訂，平台頁沒有統一上限。", "SlideRoom platform-wide limits: each institution sets its own; the platform page states none.", ["C1-S49"])
            ]
          }
        ]
      },

      // ───────────────────────── C3 anchors
      {
        id: "anchors",
        h: { zh: "獨立驗證的錨點", en: "Independent verification anchors" },
        judgment: {
          zh: "每個錨點都只能證明它親眼看過的那一段：競賽證明一年內的作品、期刊證明稿件、mentor 證明他指導的部分；outside programme 的主辦方不獨立於自己的 programme。",
          en: "Each anchor can vouch only for the part it saw: a competition for one year's work, a journal for a manuscript, a mentor for what they supervised; an outside programme's organiser is not independent of its own programme."
        },
        items: [
          F("**科展型競賽（ISEF 規則）**：250 字 abstract 必須描述學生自己做的研究，不是指導成人的；Form 2C 由指導成人填寫，不是學生。延續性專題需 Form 7 與每年的 IRB/SRC 審查。",
            "**Science-fair competition (ISEF rules)**: the 250-word abstract must describe research done by the student, not the supervising adult; Form 2C is completed by the supervising adult, not the student. Continuation projects need Form 7 and annual IRB/SRC review.", ["C1-S44", "C1-S45", "C1-S46"], [
              F("不能證明：一個 12 個月窗口以外的工作（2026–27 週期為 2026 年 1 月以前）。團隊專題最多 3 人，以相同標準評審。", "Cannot attest: work outside one 12-month window (before January 2026 for the 2026–27 cycle). Team projects have at most 3 members and are judged on the same criteria.", ["C1-S44"]),
              I("進入申請的路徑：Honors（獎項）、Activities、讓 mentor 寫推薦信。", "Route into the application: Honors (award), Activities, the mentor as a letter writer.")
            ]),
          F("**國際團隊競賽（iGEM 規則）**：獎牌依固定標準頒發、數量不設限；Bronze 要求 Attributions Form；評審每題 1–6 分，Gold 在 2026 年改用新流程；Wiki 截止時凍結並永久公開存檔；25 分鐘評審場次會錄影。",
            "**International team competition (iGEM rules)**: medals are awarded against fixed criteria with no cap on numbers; Bronze requires the Attributions Form; judges score 1–6 per question, and Gold is judged by a new process in 2026; the Wiki freezes at the deadline and stays as a permanent public archive; the 25-minute judging session is recorded.", ["C1-S42", "C1-S43"], [
              I("不能證明：獎牌是團隊結果，不是個人排名；個人貢獻只看得到 Attributions Form 寫的部分。", "Cannot attest: a medal is a team outcome, not an individual ranking; individual contribution shows only through the Attributions Form."),
              F("進入申請的路徑：Honors（獎牌）、Additional Information（Wiki 與 attributions 網址）；Caltech portfolio 接受連結。", "Route into the application: Honors (medal), Additional Information (Wiki and attributions URLs); Caltech's portfolio accepts links.", ["C1-S30"])
            ]),
          F("**期刊同儕審查**：ICMJE 的四項作者資格之一是同意為研究負責；但判定誰有作者資格「不是期刊編輯的職責」。CRediT（ANSI/NISO Z39.104-2022）有 14 種貢獻角色，可用來說明份量。",
            "**Journal peer review**: one of ICMJE's four authorship criteria is agreeing to be accountable for the work, but deciding who qualifies is not the editors' role. CRediT (ANSI/NISO Z39.104-2022) defines 14 contributor roles that can state a share.", ["C1-S47", "C1-S48"], [
              I("不能證明：同儕審查不認證學生在論文中的份量；這要靠 mentor 信或 CRediT 陳述。", "Cannot attest: peer review does not certify the student's share; a mentor letter or CRediT statement does that work."),
              F("進入申請的路徑：MIT Research Supplement（引用）；Caltech 全文 + 須談具體貢獻的推薦信。", "Route into the application: MIT Research Supplement (citation); Caltech full paper plus a letter that must speak to contributions.", ["C1-S29", "C1-S32"])
            ]),
          F("**Outside programme 的主辦方**：可以 Other Recommender 身分寫信；Common App 的類型包含 college access counselor、employer、other。各校是否接受 Other Recommender 不同，學生需逐校確認。",
            "**An outside programme's organiser**: can write as an Other Recommender; Common App's types include college access counselor, employer and other. Colleges differ on whether they accept Other Recommenders, and the student must check each one.", ["C1-S35", "C1-S36"], [
              I("不能證明：主辦方不獨立於自己的 programme，替自家 programme 的品質作證份量有限。", "Cannot attest: the organiser is not independent of its own programme, so it cannot vouch for that programme's quality with much weight.")
            ]),
          F("**學校 counselor**：從「整個畢業班與學校社群」的角度提供脈絡，包括獎項與特殊情況；Optional Report 是一份「just in case」表格。幾所學校的 homeschool SSR 可由家長或主導課程的成人填寫。",
            "**School counselor**: gives context within the entire graduating class and school community, including awards and unusual circumstances; the Optional Report is a \"just in case\" form. At several schools the homeschool SSR may be completed by a parent or the adult guiding the curriculum.", ["C1-S37", "C1-S35", "C1-S20", "C1-S21", "C1-S22", "C1-S23"], [
              I("不能證明：除非學生或 programme 告知，counselor 看不到校外工作；Optional Report 沒有被描述為校外紀錄的管道。", "Cannot attest: a counselor has no first-hand view of out-of-school work unless the student or programme tells them; the Optional Report is not described as a channel for outside records.", ["C1-S35"])
            ]),
          F("**校外教授／研究 mentor**：MIT 接受 mentor、暑期計畫 mentor 與工作主管寫信，總數 ≤4 封；Stanford 對 homeschool 申請者偏好校外授課者；Caltech 研究信必須談具體貢獻、embargo 須說明；Brown 允許多一封信。",
            "**Outside professor or research mentor**: MIT accepts letters from mentors, summer-programme mentors and job supervisors, 4 letters at most; Stanford prefers outside instructors for homeschoolers; Caltech's research letter must address specific contributions and explain any embargo; Brown allows one extra letter.", ["C1-S18", "C1-S19", "C1-S29", "C1-S22", "C1-S32"], [
              I("不能證明：只能證明自己指導過的部分。", "Cannot attest: only what they supervised.")
            ]),
          F("**UC（不收推薦信）**：活動與獎項必須「true and verifiable by an independent party」，UC 會定期抽查；查過的 UC 頁面沒有提到推薦信。",
            "**UC (no letters)**: activities and awards must be true and verifiable by an independent party, and UC runs regular screenings; the UC pages checked do not mention letters.", ["C1-S41", "C1-S40"], [
              I("所以在 UC，第三方作證只會在 UC 提出要求時才發生。", "So at UC, third-party attestation happens only when UC asks for it.")
            ])
        ]
      },

      // ───────────────────────── C4 AI policy
      {
        id: "ai",
        h: { zh: "AI 使用政策", en: "AI policy" },
        judgment: {
          zh: "多數政策劃的線是「內容與最終文字是不是你的」，不是「有沒有碰過 AI」；30 校中 17 校的 AI 說明在官方頁直接讀到，Purdue 未能取得。",
          en: "Most policies draw the line at whether the content and final text are yours, not at whether AI was touched; 17 of the 30 schools have an AI statement read directly on an official page, and Purdue could not be retrieved."
        },
        subs: [
          {
            h: { zh: "Common App", en: "Common App" },
            judgment: { zh: "Fraud Policy 本文在 commonapp.org 上讀不到，AI 條款是經 Brown 與 Harvard 官方頁引述取得。", en: "The Fraud Policy body could not be read on commonapp.org; the AI clause comes via Brown's and Harvard's official pages, which quote it." },
            items: [
              F("Fraud Policy 有網頁版與 PDF，但 2026-11-07 只擷取得到章節標題，本文無法讀取。", "The Fraud Policy exists as a page and a PDF, but on 2026-11-07 only the section headings could be extracted; the body text could not.", ["C4-S3", "C4-S4"]),
              F("Brown 引述的定義：故意把 AI 平台、技術或演算法的「substantive content or output」當成自己的原創作品，屬於 fraud。Harvard 引述相同條款。", "Brown quotes the definition: fraud includes intentionally presenting as one's own original work the substantive content or output of an artificial intelligence platform, technology or algorithm. Harvard quotes the same clause.", ["C4-S1", "C4-S2"]),
              F("申請者簽署的聲明（經 Brown、Harvard 引述）：所提交資料都是「my own work, factually true, and honestly presented」；若不實，可能撤銷錄取、開除或撤銷學位。", "The affirmation applicants sign, as quoted by Brown and Harvard: everything submitted is their own work, factually true and honestly presented; a false certification can lead to revoked admission, expulsion or a revoked degree.", ["C4-S1", "C4-S2"]),
              F("AI 條款何時加入：官方頁沒寫；一份第三方說 2023 年 8 月但無出處，日期未驗證。Common App 是否自行使用 AI 偵測：官方未說明。", "When the AI clause was added: not stated officially; one secondary source says August 2023 without a document, so the date is unverified. Whether Common App runs AI detection itself: not stated.", ["C4-S3", "C4-S43"]),
              F("MIT 不使用 Common App，所以 Common App 的聲明不適用於 MIT 申請者（第三方確認）。", "MIT does not use Common App, so the Common App affirmation does not apply to MIT applicants (secondary confirmation).", ["C4-S35", "C4-S17"])
            ]
          },
          {
            h: { zh: "UC", en: "UC" },
            judgment: { zh: "UC 明文允許用 generative AI 改善 readability，但內容與最終文字必須是學生的，且 UC 可要求驗證。", en: "UC explicitly permits generative AI to help with readability, but content and final text must be the student's, and UC may ask for authentication." },
            items: [
              F("Statement of Application Integrity（最後更新 2023 年 8 月）：PIQ 須由學生獨立寫成並反映自己的寫作風格；可使用 generative AI「to assist with readability」，但「content and final written text must be their own」。", "Statement of Application Integrity (last updated August 2023): PIQs must be written independently by the student in their own style; generative AI may be used to assist with readability, but content and final written text must be the student's own.", ["C4-S5"]),
              F("UC 可要求驗證內容或文字出自學生本人，並定期抽查；活動與獎項須可由獨立第三方驗證；罰則最重到撤銷學位。", "UC may request authentication of the content or writing and runs regular screenings; activities and awards must be verifiable by an independent party; penalties go up to degree revocation.", ["C4-S5"]),
              F("PIQ 頁要求「written by you alone」，沒有 AI 專屬文字。2025-10-23 的 UC 新聞中，UC Davis 招生主管說 AI 是可以用的工具，但交出去的必須是自己的作品。", "The PIQ page asks for answers written by you alone and has no AI-specific text. In a UC news piece dated 2025-10-23, UC Davis's undergraduate admissions director calls AI a tool you can use, provided the submission is your own creation.", ["C4-S6", "C4-S7"]),
              F("UC 表示審查申請時不使用 AI，並把完全由 AI 生成的回答視同學術不誠實。", "UC says it does not use AI in application review and treats a fully AI-generated answer as academic dishonesty.", ["C4-S8"]),
              F("以上是系統層級規定；本次沒找到 Berkeley、UCLA、UCSD 各自的大學部 AI 政策（第三方交叉比對）。", "These rules are system-wide; no separate undergraduate AI policy was found for Berkeley, UCLA or UCSD (secondary cross-check).", ["C4-S35", "C4-S44"])
            ]
          },
          {
            h: { zh: "Coalition on Scoir", en: "Coalition on Scoir" },
            judgment: { zh: "沒有讀到 Coalition 自己的 AI 或 fraud 文字。", en: "No Coalition AI or fraud text was found." },
            items: [
              F("Coalition on Scoir 的 AI 條款：任何讀過的來源都沒寫；一份第三方宣稱有「substantively similar」條款但無出處。Swarthmore 提醒申請者各平台「may have their own」AI 規定。", "Coalition on Scoir's AI language: not stated in any source read; one secondary source claims substantively similar fraud language without citation. Swarthmore reminds applicants that each platform may have its own AI rules.", ["C4-S43", "C4-S14"])
            ]
          },
          {
            h: { zh: "30 校逐校一覽", en: "The 30 schools, one by one" },
            judgment: { zh: "官方頁直接讀到 17 校、僅第三方 5 校、官方頁無 AI 文字 4 校、僅第三方「查無」3 校、未取得 1 校。", en: "Read on an official page: 17; secondary reporting only: 5; no AI text on official pages: 4; secondary \"none found\" only: 3; not retrieved: 1." },
            table: {
              filter: true,
              facets: [
                { v: "y", label: L("官方頁有政策", "Official statement") },
                { v: "ysec", label: L("僅第三方", "Secondary only") },
                { v: "n", label: L("無 AI 文字／查無", "No AI text / none found") },
                { v: "unk", label: L("未取得", "Not retrieved") }
              ],
              cols: [L("學校", "School"), L("有明文政策？", "Stated policy?"), L("摘要", "Summary"), L("來源", "Source")],
              rows: [
                { filter: "n", cells: ["MIT", L("申請者：官方頁無 AI 文字；校方閱讀：有", "Applicants: no AI text; own reading: yes"), F("Essays 頁沒有申請者 AI 規定；2023 年寫作教師文章已封存、不代表現行政策。MIT 招生表示「no plans to adopt」generative AI 閱讀申請，資訊保護政策也不允許（2026-08-25）。", "No applicant AI rule on the essays page; the 2023 writing-faculty post is archived and not current policy. MIT Admissions has no plans to adopt generative AI in reading, and its information-protection policies would not permit it (2026-08-25).", ["C4-S15", "C4-S16", "C4-S17"]), "C4-S15, S16, S17"] },
                { filter: "y", cells: ["Caltech", Y, F("允許：完成後的文法拼字檢查、產生腦力激盪問題、研究申請流程。禁止：複製貼上、靠 AI 列大綱或起草、取代自己的聲音、翻譯文章。違反可能撤銷錄取。指引頁標 Fall 2026、essays 頁標 Fall 2027。", "Allowed: grammar and spelling checks on finished essays, generating brainstorming questions, researching the process. Prohibited: copy-paste, relying on AI to outline or draft, replacing your voice, translating an essay. Non-compliance may lead to rescission. The guidelines page says Fall 2026; the essays page says Fall 2027.", ["C4-S9", "C4-S10"]), "C4-S9, S10, S36"] },
                { filter: "n", cells: ["Stanford", N, F("申請與 essays 頁、admission policies 頁都沒有 AI 文字；essays 頁要求「your own words」。", "No AI text on the application/essays page or the admission policies page; the essays page asks for your own words.", ["C4-S31", "C4-S32"]), "C4-S31, S32"] },
                { filter: "y", cells: ["Harvard", Y, F("文章須反映學生自己的內容、風格與英文程度；以工具造假違反 Common App 標準與 Honor Code；委員會可能就真實性聯絡申請者；學位可被撤銷。", "Essays must reflect the student's own content, style and English proficiency; using tools to fabricate essays breaks Common App standards and the Honor Code; the committee may contact applicants about authenticity; degrees can be rescinded.", ["C4-S2"]), "C4-S2"] },
                { filter: "y", cells: ["Yale", Y, F("文法拼字檢查、一開始的一般建議或題目提示不算 fraud；提交由文字生成軟體寫成的回答屬 fraud，可能撤銷錄取或開除。", "Grammar and spelling review, or general advice and topic suggestions at the start, is not fraud; submitting responses composed by text-generating software is fraud and may lead to revoked admission or expulsion.", ["C4-S11"]), "C4-S11"] },
                { filter: "ysec", cells: ["Princeton", YS, F("官方部落格無法讀取（憑證錯誤）。第三方：無正式政策；招生 Dean 2025-08-18 的部落格提醒勿在申請中使用 AI。", "Official blog unreadable (certificate error). Secondary: no formal policy; the Dean of Admission's blog (2025-08-18) cautions against AI in the application.", ["C4-S36", "C4-S38"]), "C4-S36, S38"] },
                { filter: "ysec", cells: ["Columbia", YS, F("官方頁回傳 403。第三方：一年級頁要求材料是申請者自己的原創，並指向 Honor Code 與 Generative AI Policy。", "Official pages returned 403. Secondary: the first-year page requires original work and points to the Honor Code and a Generative AI Policy.", ["C4-S37"]), "C4-S37"] },
                { filter: "y", cells: ["Penn", Y, F("可用工具（含 AI）整理想法或檢查文法；禁止 AI 生成回答。檢驗：若無法在面談或對話中說明你怎麼寫出來，就還沒準備好。Penn 自己只把 AI 用於行政工作（如轉學分預審），由人員確認。", "Tools, including AI, may help organise thoughts or check grammar; AI-generated responses are prohibited. The test: if you could not explain in an interview or conversation how you got there, it is not ready. Penn uses AI only for administrative tasks (such as preliminary transfer-credit review), with staff confirming outcomes.", ["C4-S12"]), "C4-S12"] },
                { filter: "y", cells: ["Brown", Y, F("除拼字文法檢查外，申請內容「不得在任何情況下」使用 AI。Brown 會透過 counselor 對隨機抽樣的入學新生查核資歷（5 月發出、7/1 截止）。", "AI is not permitted under any circumstances with application content, except spelling and grammar review. Brown verifies credentials for a random sample of enrolling admits through counselors (requests in May, due 1 July).", ["C4-S1"]), "C4-S1"] },
                { filter: "y", cells: ["Cornell", Y, F("允許：研究學校、建立清單。禁止：AI 列大綱、起草或撰寫、翻譯，以及為必交 portfolio 創作作品。", "Allowed: researching colleges and building a list. Prohibited: AI outlining, drafting or writing, translating responses, and creating works for a required portfolio.", ["C4-S13"]), "C4-S13"] },
                { filter: "ysec", cells: ["Georgetown", YS, F("官方一年級頁無 AI 文字，有校友面談。第三方：需登入的申請入口寫明申請任何部分使用 AI 都被禁止。", "The official first-year page has no AI text and describes alumni interviews. Secondary: the login-only portal says AI use for any part of the application is prohibited.", ["C4-S23", "C4-S24"]), "C4-S23, S24"] },
                { filter: "y", cells: ["Carnegie Mellon", Y, F("AI 只能是輔助工具；輕度校對與結構、用字建議可接受；提醒可能無意間抄襲。", "AI should only be a supplementary tool; light proofreading and structure or word-choice suggestions are acceptable; warns of unintentional plagiarism.", ["C4-S18"]), "C4-S18"] },
                { filter: "y", cells: ["Georgia Tech", Y, F("可用 AI 腦力激盪、編輯與修整想法，但不要貼上不是你寫的內容；把 AI 描述為缺乏其他協助者的可能合作者。立場最早於 2023-07-27 發布。", "Use AI to brainstorm, edit and refine ideas, but do not paste content you did not create; AI is framed as a possible collaborator for applicants without other help. First posted 2023-07-27.", ["C4-S21", "C4-S22"]), "C4-S21, S22"] },
                { filter: "unk", cells: ["Purdue", UNK, L("admissions.purdue.edu 於 2026-11-07 出現憑證錯誤，也沒找到第三方紀錄；空白。", "admissions.purdue.edu returned a certificate error on 2026-11-07 and no secondary record was found; left empty."), "—"] },
                { filter: "ysec", cells: ["Michigan", YS, F("官方頁回傳 403。第三方：essay-questions 頁允許腦力激盪、列大綱、校對；不要複製貼上 AI 生成的文字。", "Official page returned 403. Secondary: the essay-questions page allows brainstorming, outlining and proofreading; do not copy and paste AI-generated text.", ["C4-S40"]), "C4-S40"] },
                { filter: "n", cells: ["UIUC", N, F("Essays 頁無 AI 文字，提示是「Be yourself」。", "The essays page has no AI text; its tip is \"Be yourself\".", ["C4-S26", "C4-S46"]), "C4-S26, S46"] },
                { filter: "y", cells: ["Olin", Y, F("不得直接從 AI 生成器複製貼上；文法拼字工具與腦力激盪可以。必須參加 Candidates' Weekend（設計挑戰、個人面試、團體活動），美國本土以外申請者改為線上面試。", "Copying and pasting directly from an AI generator is not permitted; grammar and spelling tools and brainstorming are fine. Candidates' Weekend is required (design challenge, individual interview, group exercise); applicants outside the contiguous US get a virtual interview.", ["C4-S30"]), "C4-S30"] },
                { filter: "y", cells: ["Harvey Mudd", L("有（非正式）", "Yes (informal)"), F("HMC 沒有正式政策；AI 可幫忙腦力激盪，但文章本身應完全是你的。有選填面試。", "HMC has no formal policy; AI may help brainstorm, but the essay itself should be all yours. Optional interview.", ["C4-S28", "C4-S29"]), "C4-S28, S29"] },
                { filter: "y", cells: ["Johns Hopkins", Y, F("允許：寫作前腦力激盪或修整想法、校對自己的文字。其餘 AI 生成的實質內容視為申請 fraud；遵守 Common App 聲明。", "Allowed: brainstorming or refining ideas before writing, and basic proofreading of your own writing. Other AI-generated substantive content counts as application fraud; follows the Common App affirmation.", ["C4-S19"]), "C4-S19"] },
                { filter: "n", cells: ["Duke", NS2, F("第三方查無 Duke 官方大學部 AI 文字；本次未讀 Duke 官方頁。Duke 曾停止為文章給數字評分，招生主管以 AI 生成文字為主要原因之一（第三方，2024-02-21）。", "A secondary source found no official Duke undergraduate AI text; Duke's own pages were not fetched this run. Duke stopped giving essays numeric ratings, with the dean citing AI-generated writing as a main reason (secondary, 2024-02-21).", ["C4-S33", "C4-S34"]), "C4-S33, S34"] },
                { filter: "ysec", cells: ["Northwestern", YS, F("官方 AI 頁憑證錯誤。第三方：該頁 2025-09-23 更新；完成後的文章可做文法拼字檢查；不要請 AI 寫文章。", "Official AI page had a certificate error. Secondary: the page was updated 2025-09-23; grammar and spelling review of finished essays is allowed; do not ask AI to write essays.", ["C4-S35", "C4-S39"]), "C4-S35, S39"] },
                { filter: "y", cells: ["Rice", Y, F("AI 可協助腦力激盪與整理想法，但「should not create content for you」。", "AI may help brainstorm and organise ideas, but resources should not create content for you.", ["C4-S20"]), "C4-S20"] },
                { filter: "y", cells: ["UC Berkeley", UCY, F("適用 UC Statement of Application Integrity；UC 表示審查不用 AI。", "The UC Statement of Application Integrity applies; UC says it does not use AI in review.", ["C4-S5", "C4-S8"]), "C4-S5, S8"] },
                { filter: "y", cells: ["UCLA", UCY, F("同 UC Berkeley。", "Same as UC Berkeley.", ["C4-S5", "C4-S8"]), "C4-S5, S8"] },
                { filter: "y", cells: ["UC San Diego", UCY, F("同 UC Berkeley；第三方所稱校區抄襲偵測軟體無法從可引用來源證實。", "Same as UC Berkeley; secondary claims of campus plagiarism-detection software could not be verified from a quotable source.", ["C4-S5", "C4-S8", "C4-S44"]), "C4-S5, S8, S44"] },
                { filter: "n", cells: ["UT Austin", N, F("Essays 頁無 AI 文字。", "The essays page has no AI text.", ["C4-S25", "C4-S45"]), "C4-S25, S45"] },
                { filter: "y", cells: ["University of Washington", Y, F("所有文字必須是你自己的原創；由人或「AI tool」審閱都須負責且合乎倫理；罰則未說明。", "All writing must be your own original work; review by a person or an AI tool must be responsible and ethical; consequences not stated.", ["C4-S27"]), "C4-S27"] },
                { filter: "n", cells: ["Williams", NS2, F("官方網站回傳 403。第三方：查無 AI 專屬招生政策，適用 Common App 規定。", "Official site returned 403. Secondary: no AI-specific admissions policy found; Common App rules apply.", ["C4-S41"]), "C4-S41"] },
                { filter: "n", cells: ["Amherst", NS2, F("官方網站回傳 405。第三方：查無 AI 專屬招生政策；寫作補充題要求「original, personal responses」。", "Official site returned 405. Secondary: no AI-specific admissions policy; the writing supplement asks for original, personal responses.", ["C4-S42"]), "C4-S42"] },
                { filter: "y", cells: ["Swarthmore", Y, F("AI 可用於研究、摘要申請要求、腦力激盪，以及寫作過程「開頭或結尾」的協助。禁止：大部分由 AI 產生的作品、AI 列大綱或起草、AI 改變語氣；部分藝術補充欄位完全禁用 AI。使用 AI 生成的內容須註明。Swarthmore 決定錄取時不用 AI。", "AI may help with research, summarising requirements, brainstorming, and help at the beginning or end of the writing process. Prohibited: work substantially created by AI, AI outlining or drafting, AI changing tone; some art supplement fields ban AI entirely. AI-generated content must be acknowledged or cited. Swarthmore does not use AI tools in admissions decisions.", ["C4-S14"]), "C4-S14"] }
              ]
            }
          },
          {
            h: { zh: "學校自己用不用 AI 閱讀；官方文字中的現場或口頭步驟", en: "Schools' own use of AI in reading; live or oral steps named in official text" },
            judgment: { zh: "明說不用 AI 審查的只有 UC、Swarthmore、MIT；Penn 只用於行政；其餘 26 校沒說。", en: "Only UC, Swarthmore and MIT say they do not use AI to review; Penn uses it for administration only; the other 26 do not say." },
            items: [
              F("明說不在審查中使用 AI：UC 系統、Swarthmore、MIT（無計畫；政策不允許）。Penn：僅行政用途，由人員確認。其餘 26 校在讀過的官方頁未說明。", "Stated no AI in review or decisions: the UC system, Swarthmore, MIT (no plans; policy would not permit it). Penn: administrative use only, confirmed by staff. The other 26: not stated on the official pages read.", ["C4-S8", "C4-S14", "C4-S15", "C4-S12"]),
              F("Caltech「AI 面試試辦」：本次讀過的官方或第三方來源都沒提到；Caltech 讀過的頁面沒有提到面試。", "A Caltech \"AI interview pilot\": not mentioned in any official or secondary source read this run; the Caltech pages read do not mention interviews.", ["C4-S9", "C4-S10"]),
              F("官方文字中提到的現場、口頭或查核步驟：Olin 必須參加的 Candidates' Weekend；Penn 的「能否在對話中說明」自我檢驗（是標準，不是程序）；UC 可要求驗證；Harvard 可能就真實性聯絡申請者；Brown 入學後隨機查核；Georgetown 校友面談與 Harvey Mudd 選填面試存在，但兩頁都沒有把面談與 AI 連結。", "Live, oral or checking steps named in official text: Olin's required Candidates' Weekend; Penn's explain-in-conversation self-check (a stated test, not a procedure); UC's right to request authentication; Harvard's possible contact about authenticity; Brown's random post-admission verification; Georgetown alumni interviews and Harvey Mudd's optional interview exist, but neither page links them to AI.", ["C4-S30", "C4-S12", "C4-S5", "C4-S2", "C4-S1", "C4-S23", "C4-S29"])
            ]
          },
          {
            h: { zh: "[推論] 這些政策對「過程型、有時間戳、可口頭答辯的證據」與「打磨過的書面成品」意味著什麼", en: "[Inference] What these policies imply for process-based, timestamped, orally defended evidence versus polished written artifacts" },
            judgment: { zh: "以下全是我們從上面事實推出的推論，不是任何招生辦公室的說法；沒有學校說它會要求或偏好這類紀錄。", en: "Everything here is our inference from the facts above, not a statement by any admissions office; no school says it asks for or prefers such records." },
            items: [
              I("多數政策劃的線是內容與最終文字的來源（Common App「substantive content」、UC「content and final written text」、Caltech／Cornell／Swarthmore 禁止 AI 列大綱或起草）。所以一份書面成品自帶一個它本身答不了的作者問題。", "Most policies draw the line at the source of content and final text (Common App's \"substantive content\", UC's \"content and final written text\", Caltech, Cornell and Swarthmore banning AI outlining or drafting). A written artifact therefore carries an authorship question it cannot answer by itself.", ["C4-S1", "C4-S5", "C4-S9", "C4-S13", "C4-S14"]),
              I("三段官方文字指向在文章之外檢查作者身分的方式：UC 可要求驗證、Harvard 可能聯絡、Penn 的「能否在對話中說明」。申請者能重建並解說的證據（草稿、實驗記錄本、commit 歷史、有日期的日誌、口頭說明）比成品更直接對應這些檢查。這是「對得上」，不是任何學校說過的偏好。", "Three official texts point to ways authorship gets checked outside the essay: UC's authentication request, Harvard's contact, Penn's explain-in-conversation test. Evidence the applicant can reconstruct and explain (drafts, lab notebooks, commit history, dated logs, an oral account) fits these checks more directly than a finished text does. This is a fit, not a stated preference.", ["C4-S5", "C4-S2", "C4-S12"]),
              I("UC 要求活動「可由獨立第三方驗證」、Brown 透過 counselor 查核，顯示綁定具名第三方（評審、主辦者、指導者）的主張，正是這些辦公室已有程序處理的那類紀錄；這和上方「驗證錨點」一節相連。", "UC's requirement that activities be verifiable by an independent party, and Brown's counselor verification, suggest that claims tied to a named third party (judge, organiser, supervisor) are the kind of record these offices already have a procedure for; this links to the anchors section above.", ["C4-S5", "C4-S1"]),
              I("Cornell 禁止 AI 創作 portfolio 作品，代表 portfolio 也在同一條作者規則內；作品的過程紀錄若被質疑，就是申請者自己的作者證據。Cornell 沒有說它會要求這些紀錄。", "Cornell's ban on AI creating portfolio works puts portfolios under the same authorship rule as essays; process records for a piece would be the applicant's own evidence of authorship if questioned. Cornell does not say it asks for them.", ["C4-S13"]),
              I("Olin 必須參加的面試、團體活動與設計挑戰，是 30 校中唯一把現場觀察當作固定評估環節的官方例子；其他 29 校，口頭答辯只在剛好有面試（選填或校友面談）或學校主動聯絡時才會發生。", "Olin's required interview, group exercise and design challenge are the only official example among the 30 of live observation as a standing part of evaluation; at the other 29, an oral defence happens only where an interview happens to exist (optional or alumni-run) or the school makes contact.", ["C4-S30"]),
              I("Caltech 與 Cornell 禁止用 AI 翻譯文章。英文不是母語的申請者，若紀錄原本以其他語言寫成，需要自己重寫，而不是機器翻譯，才不會踩線。", "Caltech and Cornell prohibit AI translation of essays. For an applicant whose first language is not English, a record first written in another language would need to be rewritten by the applicant, not machine-translated, to stay inside these rules.", ["C4-S9", "C4-S13"]),
              I("Duke 停止為文章給數字評分、以 AI 為原因之一，是一所學校、一份第三方報導，不代表趨勢。", "Duke dropping numeric essay ratings, with AI cited as a reason, is one school and one secondary report; it does not show a trend.", ["C4-S33"]),
              A("「有時間戳的紀錄會被某位閱讀者視為比文章更強的證據」是假設；沒有任何讀過的來源這樣說。", "That a timestamped record would be read as stronger evidence than an essay by any particular reader is an assumption; no source read says so.")
            ]
          }
        ]
      },

      // ───────────────────────── gaps
      {
        id: "gaps",
        h: { zh: "尚未驗證", en: "Still unverified" },
        intro: { zh: "本次研究的範圍限制：30 校中有 20 校的 homeschool 或非傳統紀錄頁沒有逐頁讀；網路搜尋額度在中途用完，因此 30 校以外據稱用 AI 閱讀申請的學校，以及任何 Caltech 面試試辦，都沒有驗證、不收錄。", en: "Limits of this run: homeschool or non-traditional-record pages for 20 of the 30 schools were not read individually, and the web-search budget ran out part-way, so schools outside the 30 reported to use AI in reading, and any Caltech interview pilot, were not verified and are not included." },
        judgment: { zh: "幾個最常被引用的字數上限，以及 Common App 與 Coalition 的 AI 條款本文，本次都無法在官方頁讀到。", en: "Several of the most-quoted length limits, and the body text of the Common App and Coalition AI rules, could not be read on an official page this run." },
        items: [
          F("Common App Honors 字元上限、Additional Information 字數上限、Other Recommender 長度：help center 為前端渲染無法讀取；本次看到的樣本表單 PDF 沒有可公開引用的網址，因此不引用。", "Common App Honors character limit, Additional Information word limit and Other Recommender length: the help centre is client-rendered and could not be read; the sample form PDFs seen had no citable public URL, so they are not cited.", ["C1-S38"]),
          F("UC Activities & Awards 描述上限與一般 Additional comments 上限：查過的 UC 頁面沒寫。", "UC Activities & Awards description limit and the general Additional comments limit: not stated on the UC pages checked.", ["C1-S39", "C1-S40"]),
          F("Coalition Locker 何時停用、資料是否轉移：沒有官方說明。", "When the Coalition Locker was retired and whether its contents migrated: no official statement found.", ["C1-S13", "C1-S14"]),
          F("Common App Fraud Policy 本文與 AI 條款加入日期：commonapp.org 上無法擷取。Coalition on Scoir 的 AI／fraud 文字：未找到。", "Common App Fraud Policy body text and the date the AI clause was added: not extractable from commonapp.org. Coalition on Scoir AI or fraud text: not found.", ["C4-S3", "C4-S4", "C4-S43"]),
          F("Purdue 未取得；Michigan、Columbia、Williams（403）、Amherst（405）、Princeton、Northwestern（憑證錯誤）官方頁沒讀到，只有第三方；Duke 官方頁本次未讀。", "Purdue not retrieved; official pages for Michigan, Columbia, Williams (403), Amherst (405), Princeton and Northwestern (certificate errors) not read, secondary only; Duke's official pages not fetched this run.", ["C4-S40", "C4-S37", "C4-S41", "C4-S42", "C4-S38", "C4-S39", "C4-S34"]),
        ]
      }
    ]
  };
})();
