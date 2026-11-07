window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  // Item helpers. f = [事實] (must carry src), i = [推論], a = [假設]. Untagged items are the persona's own fictional content.
  function F(zh, en, src, sub) { var o = { t: { zh: zh, en: en }, tag: "f", src: src }; if (sub) o.sub = sub; return o; }
  function I(zh, en, src, sub) { var o = { t: { zh: zh, en: en }, tag: "i" }; if (src) o.src = src; if (sub) o.sub = sub; return o; }
  function A(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "a" }; if (src) o.src = src; return o; }
  function P(zh, en) { return { t: { zh: zh, en: en } }; }
  function NS(src, zh, en) { var o = { state: "not-stated", checked: "2026-11-07", src: src }; if (zh) o.t = { zh: zh, en: en }; return o; }
  function L(zh, en) { return { zh: zh, en: en }; }
  // Character-limited cell: text plus its own count. Throws (and so fails check-data) if over the limit.
  function C(s, max) {
    if (s.length > max) throw new Error("over " + max + " chars: " + s);
    return s ? s + "  [" + s.length + "/" + max + "]" : "—  [0/" + max + "]";
  }
  function words(s) { return s.trim().split(/\s+/).length; }

  // ── Common App Activities: limits 50 / 100 / 150 (A1-S6, A1-S31) ──
  var ACTS = [
    ["Research", "Student researcher, river-water microbiology", "University microbiology lab outside my school (weekend placement)", "Sampled 6 river sites monthly for 20 months; ran qPCR for 3 antibiotic-resistance genes; wrote the sample log and R analysis scripts myself.", "10, 11, 12", "8 h/wk · 40 wk/yr"],
    ["Science or math", "Founder and lead", "School biology research club", "Started the club in grade 10; 14 members; wrote our lab safety checklist and ran 9 sessions on microscopy and culture technique.", "10, 11, 12", "2 h/wk · 30 wk/yr"],
    ["Community service or volunteer work", "Organizer", "Neighborhood river clean-up and water-testing days", "Ran 4 public testing days; 60+ residents tested tap and river water with kits; posted the results on a shared community map.", "11, 12", "3 h/wk · 10 wk/yr"],
    ["Academic", "Self-directed learner", "Online courses in statistics and R programming", "Finished 2 online courses (intro statistics, R); used mixed-effects models in my river project; course notes kept in a public repository.", "11", "4 h/wk · 20 wk/yr"],
    ["Journalism or publishing", "Writer and editor", "School science newsletter", "Wrote 11 articles explaining local health and science news; edited 3 issues; read by about 400 students and staff.", "10, 11", "2 h/wk · 25 wk/yr"],
    ["Family responsibilities", "", "", "Cook dinner and supervise homework for my 2 younger brothers 4 evenings a week while both parents work late shifts.", "10, 11, 12", "10 h/wk · 52 wk/yr"],
    ["Music", "Second violin", "School string orchestra", "Rehearse 3 hours a week; 2 concerts a year; help new members learn to read orchestral parts.", "10, 11, 12", "3 h/wk · 36 wk/yr"],
    ["Employment or work (paid)", "Tutor", "Private tutoring, self-arranged", "Paid tutor for 3 junior-high students in biology and English; built practice sets from past exam papers.", "11, 12", "3 h/wk · 40 wk/yr"],
    ["Athletics (other)", "Member", "Weekend trail-running group", "Run 20-30 km a week; finished 2 half marathons; use long runs to scout new river sampling sites.", "10, 11, 12", "4 h/wk · 45 wk/yr"],
    ["Foreign language", "Self-taught learner", "Self-study of Japanese", "3 years of self-study so I can read river-ecology papers written in Japanese; passed a mid-level proficiency test in grade 11.", "10, 11, 12", "2 h/wk · 40 wk/yr"]
  ];
  var actRows = ACTS.map(function (a, i) {
    return [String(i + 1), a[0], C(a[1], 50), C(a[2], 100), C(a[3], 150), a[4], a[5]];
  });

  // ── Common App Honors: up to 5, title 100 chars, level tag (A1-S6, A1-S12) ──
  var HON = [
    ["National high school science fair, microbiology category, 3rd place", "11", "National"],
    ["Regional high school science fair, life sciences division, 1st place", "11", "State/Regional"],
    ["National biology olympiad, first round, top 10% of entrants", "11", "National"],
    ["School research elective, best project of the year", "10", "School"],
    ["Regional English essay contest, 2nd place", "10", "State/Regional"]
  ];
  var honRows = HON.map(function (h, i) { return [String(i + 1), C(h[0], 100), h[1], h[2]]; });

  // ── Additional information: 1–300 words (A1-S6, A1-S12) ──
  var ADD = "From grade 10 to grade 12 I worked on a river-water project at a university microbiology lab outside my school. My school has no equipment for molecular work, so my biology teacher introduced me to a postdoctoral researcher who agreed to supervise me on Saturdays. " +
    "What I did: I chose the six sampling sites, collected and filtered samples every month for 20 months, extracted DNA, and ran qPCR for three antibiotic-resistance genes under supervision. I wrote the sample log and the R scripts for the analysis. " +
    "What others did: my supervisor designed the primer panel, checked every qPCR plate before results were recorded, and taught me the statistics. A lab technician maintained the equipment. " +
    "Result: levels of two of the three genes were higher downstream of two wastewater outfalls than upstream in 17 of 20 months. The result is preliminary and has not been published. A two-page summary and the full sample log are at [project link], and my supervisor has agreed to describe my role in a letter. " +
    "My school reports grades on a 100-point scale and does not rank students; the school profile sent by my counselor explains the scale.";
  if (words(ADD) > 300) throw new Error("Additional information over 300 words");
  var ADDN = words(ADD);

  window.ATLAS.pages["bio"] = {
    persona: true,
    title: { zh: "生物系申請者（虛構）", en: "Biology applicant (fictional)" },
    judgment: {
      zh: "同一個校外研究，在 MIT 有專屬的 Research Supplement，在 Stanford 只能拆進 Activities、Honors、Additional information 和一封 Other Recommender 信，在 Berkeley 則只剩 Activities & Awards 和 PIQ。",
      en: "The same outside research project has its own container at MIT (the Research Supplement); at Stanford it has to be split across Activities, Honors, Additional information and one Other Recommender letter; at Berkeley only Activities & Awards and the PIQs remain."
    },
    intro: {
      zh: "**這是虛構人物。** B 同學由幾種常見情境組合而成，不是任何真實學生，就讀的學校、研究室與比賽都不指名。她在台灣一所公立高中讀高三，想申請生物相關科系，目標是 MIT、Stanford、UC Berkeley 三校。人物內容（活動、獎項、文字）是我們寫的示範，不需要來源；但每一格都遵守有出處的欄位限制，字元數與字數由頁面程式自行計算。凡是學校規定都附來源；標 [推論] 的是我們的判斷，不是招生辦公室說過的話。申請表以英文填寫，所以表格內的申請內容保留英文。",
      en: "**This persona is fictional.** Applicant B is a composite of common situations, not a real student, and no school, lab or competition she is linked to is named. She is in her final year at a public senior high school in Taiwan, intends to study biology, and applies to MIT, Stanford and UC Berkeley. Her activities, honors and text are our own illustrations and need no source, but every entry respects a cited field limit, and character and word counts are computed by the page itself. Every statement about a school's rule is cited; anything tagged as inference is our reasoning, not something an admissions office said."
    },
    sections: [
      {
        id: "profile",
        h: { zh: "人物速寫", en: "Profile" },
        judgment: {
          zh: "核心經歷是一個在校外大學實驗室做了 20 個月的河川抗藥性基因研究，學校本身沒有分子生物設備。",
          en: "Her central experience is a 20-month river-water study of antibiotic-resistance genes in a university lab outside school, because her own school has no molecular-biology equipment."
        },
        items: [
          A("B 同學（虛構）就讀台灣一所公立高中，高一時由生物老師引介，每週六到一所大學的微生物實驗室，在一位博士後研究員指導下做河川水樣的抗藥性基因 qPCR。她自己選採樣點、每月採樣、寫樣本紀錄與 R 分析程式；引子設計與每一盤 qPCR 的檢查由指導者負責。校內她創了生物研究社，高二起辦社區驗水日；家裡父母都上晚班，她每週四個晚上照顧兩個弟弟。成績以百分制呈現、學校不排名。研究成果尚未發表。",
            "Applicant B (fictional) attends a public senior high school in Taiwan. In grade 10 her biology teacher introduced her to a university microbiology lab, where on Saturdays a postdoctoral researcher supervises her qPCR work on antibiotic-resistance genes in river water. She chose the sampling sites, samples monthly, and wrote the sample log and the R analysis scripts; her supervisor designed the primers and checks every qPCR plate. At school she founded a biology research club, and since grade 11 she has run community water-testing days. Both parents work late shifts, so four evenings a week she looks after her two younger brothers. Her school grades on a 100-point scale and does not rank. The research is unpublished.")
        ]
      },
      {
        id: "activities",
        h: { zh: "Common App Activities（10 項）", en: "Common App Activities (10 entries)" },
        judgment: {
          zh: "10 項全用滿、每格都在 50／100／150 字元內；但這張表只會送到 Stanford，MIT 和 UC 各有自己的活動表。",
          en: "All 10 slots are used and every cell is within 50 / 100 / 150 characters, but this list reaches only Stanford: MIT and UC each have their own activity forms."
        },
        intro: {
          zh: "方括號內是該格字元數／上限，由頁面程式計算。Grades 用台灣高中的 10–12 年級對應。",
          en: "Brackets show characters used / limit, computed by the page. Grades map Taiwan senior high to grades 10–12."
        },
        items: [
          F("Common App 最多 10 項活動；「What was your role?」50 字元、組織名 100 字元、描述 150 字元；2026–27 年職位欄改為選填，字元上限不變。",
            "Common App allows up to 10 activities; \"What was your role?\" is 50 characters, the organization 100, the description 150. For 2026–27 the position field became optional and the limits did not change.", ["A1-S6", "A1-S31", "A1-S1"]),
          F("Stanford 用 Common Application。", "Stanford uses the Common Application.", ["A5a-S15", "A2-S34"]),
          F("MIT 用自己的申請系統，活動表只有四項，要求用 MIT 的表格而不是履歷；字元上限未載明。",
            "MIT uses its own application; its activities form has room for four entries and asks for its form, not a resume. Character limits are not stated.", ["A2-S22", "A2-S23"]),
          F("同一畫面還有兩組必答的 Responsibilities and circumstances 勾選題；第一組問每週 4 小時以上的責任，包括照顧家中年幼成員。",
            "The same screen has two required Responsibilities and circumstances checklists; the first asks about responsibilities of 4+ hours a week, including caring for younger family members.", ["A1-S6", "A1-S32"]),
          P("B 同學會在第一組勾「caring for younger members」，並在第 6 項活動寫出時數；兩處不衝突。",
            "Applicant B would tick \"caring for younger members\" in the first checklist and also give the hours in activity 6; the two do not conflict.")
        ],
        table: {
          cols: [L("#", "#"), L("類型", "Type"), L("角色（≤50）", "Role (≤50)"), L("組織（≤100）", "Organization (≤100)"), L("描述（≤150）", "Description (≤150)"), L("年級", "Grades"), L("時數", "Time")],
          rows: actRows
        },
        viz: {
          type: "char-meter",
          title: (function () {
            var mx = Math.max.apply(null, ACTS.map(function (a) { return a[3].length; }));
            var mn = Math.min.apply(null, ACTS.map(function (a) { return a[3].length; }));
            return L("10 段描述都在 150 字元內：最長 " + mx + "、最短 " + mn, "All 10 descriptions fit in 150 characters: longest " + mx + ", shortest " + mn);
          })(),
          subtitle: L("每條下方的細條是已用字元／上限，由頁面即時計算。", "The thin bar under each entry is characters used / limit, counted by the page."),
          items: ACTS.map(function (a, i) {
            return { label: L("第 " + (i + 1) + " 項 · " + a[0], "#" + (i + 1) + " · " + a[0]), text: a[3], limit: 150, unit: "chars", src: ["A1-S6", "A1-S31"] };
          })
        }
      },
      {
        id: "honors",
        h: { zh: "Common App Honors（5 項）", en: "Common App Honors (5 entries)" },
        judgment: {
          zh: "五個獎項名稱都在 100 字元內，並各標一個等級；比賽本身不指名，只寫層級與名次。",
          en: "All five titles fit in 100 characters and each carries one level tag; no competition is named, only its scope and placing."
        },
        items: [
          F("最多 5 項；每項名稱 100 字元；年級 9／10／11／12／PG；等級為 School、State/Regional、National、International 四選一。",
            "Up to 5 honors; title 100 characters; grade 9 / 10 / 11 / 12 / PG; level School, State/Regional, National or International.", ["A1-S6", "A1-S12"]),
          I("同一場科展可同時出現在 Honors（名次）與 Activities（研究本身）；查過的學校頁面沒有禁止，也沒有鼓勵。",
            "One science fair can appear both as an Honor (the placing) and as an Activity (the research itself); no school page checked forbids or endorses this.")
        ],
        table: {
          cols: [L("#", "#"), L("名稱（≤100）", "Title (≤100)"), L("年級", "Grade"), L("等級", "Level")],
          rows: honRows
        }
      },
      {
        id: "additional",
        h: { zh: "Additional information 與 Challenges", en: "Additional information and Challenges" },
        judgment: {
          zh: "Additional information 上限是 300 字（不是舊版的 650）；B 同學用它交代研究分工與學校評分制度，不使用 Challenges and circumstances。",
          en: "Additional information is capped at 300 words (not the older 650); Applicant B uses it to say who did what in the research and to explain her school's grading. She leaves Challenges and circumstances unused."
        },
        items: [
          F("Additional information：1–300 字；Challenges and circumstances：1–250 字；兩題前面各有一個必答的是／否問題。",
            "Additional information: 1–300 words. Challenges and circumstances: 1–250 words. Each sits behind a required yes/no question.", ["A1-S6", "A1-S12"]),
          F("650 字的版本是 2024–25 年的欄位；2025–26 起改為 300 字。", "The 650-word field belonged to 2024–25; from 2025–26 it is 300 words.", ["A1-S8", "A1-S10"]),
          F("Stanford 說無法保證讀者會打開申請中的連結。", "Stanford says there is no guarantee readers will review links in an application.", ["B3-S21"]),
          P("B 同學的 Additional information（英文原文，" + ADDN + "／300 字，頁面計算）：",
            "Applicant B's Additional information (" + ADDN + "/300 words, counted by the page):", null),
          { t: { zh: "「" + ADD + "」", en: "\u201C" + ADD + "\u201D" } },
          I("文中的連結只是附帶；分工的說明寫在正文裡，即使沒人點開連結，讀者也看得到她做了什麼。",
            "The link is secondary: the split of work is stated in the text itself, so a reader who never opens the link still sees what she did.", ["B3-S21"]),
          P("Challenges and circumstances：她回答「否」。照顧弟弟已在勾選題與活動第 6 項呈現，不需要第三次。",
            "Challenges and circumstances: she answers \"no\". Looking after her brothers already appears in the checklist and in activity 6; it does not need a third mention.")
        ]
      },
      {
        id: "other-recommender",
        h: { zh: "校外研究指導者的推薦信", en: "Letter from the outside research mentor" },
        judgment: {
          zh: "三校對這封信的接受方式都不同：MIT 透過 Research Supplement 在 SlideRoom 收，Stanford 收一封 Other Recommender，UC 申請時不收推薦信。",
          en: "Each school takes this letter differently: MIT through the Research Supplement in SlideRoom, Stanford as one Other Recommender letter, and UC takes no letters with the application."
        },
        subs: [
          {
            h: { zh: "信的內容大綱（由指導者撰寫）", en: "What the letter would cover (written by the mentor)" },
            intro: {
              zh: "以下是 B 同學可以交給指導者參考的事實清單，信本身由指導者寫，學生不代寫。",
              en: "This is a fact sheet Applicant B could hand her mentor; the mentor writes the letter, not the student."
            },
            items: [
              P("關係與期間：在哪個實驗室、以什麼身份督導、從哪個月到哪個月、每週幾小時。", "Relationship and span: which lab, in what supervisory role, from which month to which month, how many hours a week."),
              P("分工：哪些步驟由學生獨立完成（採樣點選擇、採樣、DNA 萃取、R 分析），哪些由指導者或技術員負責（引子設計、qPCR 檢查、儀器維護）。", "Division of work: which steps the student did alone (site choice, sampling, DNA extraction, R analysis) and which the mentor or technician did (primer design, qPCR checks, equipment)."),
              P("一個具體事件：例如第 9 個月 qPCR 標準曲線異常時，她如何追查到樣本保存溫度。", "One concrete episode, for example how in month 9 she traced an abnormal qPCR standard curve back to sample storage temperature."),
              P("成果的狀態：初步、未發表，以及指導者對結果可信度的看法。", "Status of the result: preliminary, unpublished, and the mentor's view of how solid it is."),
              P("與同齡或大學部學生相比的觀察（若指導者願意寫）。", "How she compares with other students the mentor has supervised, if the mentor is willing to say.")
            ]
          },
          {
            h: { zh: "各校是否接受", en: "Whether each school accepts it" },
            items: [
              F("Common App 的 Other Recommender 類型只有 Arts Teacher、Clergy、Coach、College Access Counselor、Employer、Family Member、Peer、Other；沒有「research mentor」。",
                "Common App's Other Recommender types are Arts Teacher, Clergy, Coach, College Access Counselor, Employer, Family Member, Peer and Other; \"research mentor\" is not one of them.", ["A1-S20", "A1-S21"]),
              F("只有在學校接受至少一種 Other Recommender、且接受被邀請的那一種時，才能把這位推薦人指派給該校。",
                "An Other Recommender can be assigned to a college only if it accepts at least one type and accepts the type invited.", ["A1-S22"]),
              F("Other evaluation 的 PDF 指引寫「1000 words or less」；同一封信送給所有被指派的學校，送出後不能修改。",
                "The Other evaluation PDF guidance says \"1000 words or less\"; one letter goes to every assigned college and cannot be changed after submission.", ["A1-S15", "A1-S20"]),
              F("Stanford：除了兩位老師與 counselor，可再加一封來自「能提供新觀點」者的信，在 Common App 以 Other Recommender 邀請。",
                "Stanford: besides two teachers and the counselor, one more letter from someone who can offer new insights is allowed, invited as an Other Recommender in Common App.", ["A5a-S17"]),
              F("MIT：Research Supplement 包含由研究指導者／PI 寫的推薦信，在 SlideRoom 內提名；另有一封選填的 supplemental 推薦信，MIT 說「neither expected nor required」。",
                "MIT: the Research Supplement includes a letter from the research advisor, mentor or PI, nominated inside SlideRoom. MIT also allows one optional supplemental letter that is \"neither expected nor required\".", ["B3-S1", "A5a-S3"]),
              F("UC：國際申請者頁面說不要隨 UC 申請送推薦信；部分校區之後可能另行要求。",
                "UC: the international applicants page says not to send letters with the UC application; some campuses may request them later.", ["A2-S8"]),
              { t: L("Berkeley 目前是否以邀請方式收推薦信", "Whether Berkeley currently invites letters"), state: "not-stated", checked: "2026-11-07", src: ["A5b-S28", "A5b-S29", "A5b-S30"] },
              I("因為 MIT 不用 Common App，同一位指導者要寫兩次：一次在 MIT 的 SlideRoom，一次在 Common App（只指派給 Stanford）。在 Common App 她會以「Other」類型邀請，先確認 Stanford 接受此類型。",
                "Because MIT does not use Common App, the mentor writes twice: once in MIT's SlideRoom and once in Common App (assigned only to Stanford). In Common App she would invite the mentor as type \"Other\", after checking that Stanford accepts that type.", ["A1-S22", "A2-S23"])
            ]
          }
        ]
      },
      {
        id: "materials",
        h: { zh: "補充材料：三校各送什麼", en: "Supplementary materials, school by school" },
        judgment: {
          zh: "只有 MIT 有正式的研究管道；Stanford 不收研究論文，Berkeley 不收任何補充材料。",
          en: "Only MIT has a formal research channel; Stanford does not add research papers to the file, and Berkeley accepts no supplementary material at all."
        },
        table: {
          cols: [L("學校", "School"), L("材料", "Material"), L("規則", "Rule"), L("B 同學的做法", "What Applicant B sends")],
          rows: [
            ["MIT", L("Research Supplement", "Research Supplement"),
              F("SlideRoom；簡短問卷、摘要或海報 PDF（如有）、已發表則附引用、在 SlideRoom 提名指導者；每人一份；與申請同一截止日（EA 11/1、RA 1/4）。", "SlideRoom; short questionnaire, abstract or poster PDF if available, citation if published, mentor nominated in SlideRoom; one per applicant; due with the application (EA Nov 1, RA Jan 4).", ["B3-S1", "B2-S1"]),
              L("問卷、一頁英文摘要 PDF、提名指導者。", "Questionnaire, a one-page abstract PDF, mentor nominated.")],
            ["MIT", L("Maker／藝術作品集", "Maker / arts portfolios"),
              F("皆為選填；Maker 限自行設計製作的工程或手作專案。", "All optional; the Maker Portfolio is for engineering or crafting projects of the applicant's own design.", ["B3-S1"]),
              L("不送。", "None.")],
            ["Stanford", L("研究論文或摘要", "Research paper or abstract"),
              F("不把研究論文加入申請檔案。", "Does not add research papers to the file.", ["B3-S21"]),
              L("不送；研究寫進 Activities 第 1 項、Honors 與 Additional information。", "None; the research goes into activity 1, Honors and Additional information.")],
            ["Stanford", L("作品集", "Portfolio"),
              F("只有 Optional Arts Portfolio，四個藝術領域，經 Stanford 自己的 portal。", "Only the Optional Arts Portfolio, in four arts areas, through Stanford's own portal.", ["B3-S20"]),
              L("不適用。", "Not applicable.")],
            ["Stanford", L("額外推薦信", "Additional letter"),
              F("可加一封，以 Other Recommender 邀請。", "One allowed, invited as Other Recommender.", ["A5a-S17"]),
              L("研究指導者一封。", "One, from the research mentor.")],
            ["UC Berkeley", L("作品集與補充材料", "Portfolios and supplementary materials"),
              F("「unable to accept portfolios… or other supplemental materials」；主動寄送的材料不會被審閱。", "\"Unable to accept portfolios… or other supplemental materials\"; unsolicited materials will not be reviewed.", ["A5b-S25", "B2-S47"]),
              L("不送。", "None.")],
            ["UC Berkeley", L("推薦信", "Letters"),
              F("不隨 UC 申請送推薦信。", "No letters with the UC application.", ["A2-S8"]),
              L("不送，除非事後收到邀請。", "None, unless invited later.")]
          ]
        }
      },
      {
        id: "uc",
        h: { zh: "UC：選哪 4 題 PIQ", en: "UC: which 4 of the 8 PIQs" },
        judgment: {
          zh: "她選 6、4、7、1：研究興趣、校外取得設備、社區驗水、創社；每題 350 字以內。",
          en: "She picks 6, 4, 7 and 1: the subject that drives her, getting lab access outside school, community water testing, and founding the club; each within 350 words."
        },
        items: [
          F("8 題選 4 題作答，每題最多 350 字；UC 說「All questions are equal」。", "Answer 4 of 8 questions, up to 350 words each; UC says \"All questions are equal.\"", ["A2-S1", "A5b-S31"]),
          F("八題主題：領導、創意、最大才能、教育機會或障礙、重大挑戰、啟發你的學科、讓學校或社區更好、其餘申請沒呈現的你。", "The eight cover: leadership; creativity; greatest talent or skill; educational opportunity or barrier; significant challenge; an inspiring academic subject; making your school or community better; what makes you a strong candidate beyond the rest of the application.", ["A2-S1"]),
          F("UC 的 Activities & Awards 最多 20 項、六個類別；描述 350 字元出自一個校區的工作表，不是系統層級頁面。", "UC Activities & Awards allows up to 20 entries in six categories; the 350-character description limit comes from one campus worksheet, not the systemwide page.", ["A2-S7", "A2-S6", "A2-S3"]),
          F("UC 的 Additional comments「不應是第五篇 PIQ」；Berkeley 建議用 PIQ 區的 Additional Comments 補充課外活動。", "UC says Additional comments should not be a fifth PIQ; Berkeley's tips point to the PIQ-step Additional Comments box for expanding on extracurriculars.", ["A2-S5", "B3-S39"]),
          I("第 6 題（學科）：寫河川抗藥性基因怎麼把她從課本帶到實驗台，這是全申請最核心的一段。", "PIQ 6 (academic subject): how resistance genes in river water took her from textbook to bench; the core of her file.", ["A2-S1"]),
          I("第 4 題（教育機會或障礙）：學校沒有分子設備，她如何透過老師引介取得校外實驗室的時間；UC 沒有推薦信，這是唯一讓她自己交代這個安排的地方。", "PIQ 4 (educational opportunity or barrier): her school had no molecular equipment and she reached an outside lab through a teacher. With no letters at UC, this is the only place she explains that arrangement herself.", ["A2-S1", "A2-S8"]),
          I("第 7 題（讓社區更好）：四次社區驗水日，把研究方法交給居民。", "PIQ 7 (community): four public water-testing days that handed her method to residents.", ["A2-S1"]),
          I("第 1 題（領導）：創立生物研究社並寫安全守則。不選第 5 題，因為照顧弟弟的事已在活動中呈現，重大挑戰題會與第 4 題重疊。", "PIQ 1 (leadership): founding the club and writing its safety checklist. She skips PIQ 5 because caring for her brothers is already in Activities and a challenge essay would overlap PIQ 4.", ["A2-S1"])
        ]
      }
    ]
  };
})();
