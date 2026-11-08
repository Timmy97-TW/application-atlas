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
      zh: "這頁處理一個具體問題：學生在學校以外、跨好幾年累積的紀錄（實驗時數、作品、比賽、口頭答辯），在美國大學一年級申請裡到底放得進哪裡、有多少字元、誰能替它作證。資料來自三份 research note（L，2026-11-08；C1–C3 與 C4，2026-11-07）。文中說的「outside programme」泛指任何非學校的課程或計畫，本頁不點名任何一個。標 [推論] 的段落是我們從事實推出來的，不是任何招生辦公室說過的話；維護者沒有招生辦公室的工作經驗。",
      en: "This page answers one practical question: when a student builds a record outside school over several years (lab hours, built work, competitions, oral defences), where in a US first-year application can it go, how many characters does that field allow, and who can vouch for it? It draws on three research notes (L, accessed 2026-11-08; C1–C3 and C4, accessed 2026-11-07). \"An outside programme\" means any non-school programme; none is named here. Anything tagged as inference is our reasoning from the facts, not something an admissions office said, and the maintainer has no admissions-office experience."
    },
    sections: [
      // ───────────────────────── L: a three-year outside lab record, the whole answer
      {
        id: "lab",
        h: { zh: "三年校外實驗室訓練，能交出什麼證明", en: "Three years of lab training outside school: what proof can reach the application" },
        judgment: {
          zh: "申請表收的是「成品加一個能為你的份量作證的人」，不是訓練紀錄本身：30 校中有研究管道的學校都只點名論文、摘要、海報與 mentor 的信；時數、技術清單與實驗記錄本沒有任何一校列為收件項目（Caltech portfolio 列「Personal notebooks」是唯一例外）。所以 programme 能做的，是把三年紀錄整理成那幾樣東西，並讓 mentor 可被聯絡。",
          en: "The application receives an artefact plus a person who can speak to your share, not the training record itself: every school among the 30 with a research channel names papers, abstracts, posters and a mentor's letter; none lists hours, a techniques log or a lab notebook as a thing it receives (Caltech's portfolio item \"Personal notebooks\" is the one exception). What a programme can do is condense three years into those objects and make the mentor reachable."
        },
        intro: {
          zh: "本節回答一個具體的問題：一位學生在校外、非學校課程的獨立分子生物學訓練計畫裡做了三年實驗，這個 programme 能提供哪些證明與紀錄，而 Common App 與這 30 校的申請系統實際收得下？四張圖依序回答：證據按「誰能查核」排序；三年紀錄在什麼時候進哪個欄位、各欄位的字數；30 校各自讓研究紀錄走哪條路；最後是一份虛構範例，把同一段紀錄寫進每個欄位的上限。事實與推論在圖中以實線與虛線區分。研究筆記 L（2026-11-08）。",
          en: "This section answers one concrete question: a student has spent three years in an independent molecular-biology training programme outside school (not a school course, not a university post). What proof and record can that programme produce that Common App and these 30 schools' systems can actually receive? Four figures answer in order: the evidence ranked by who can check it; when each record item enters which container and the container's budget; which route each of the 30 schools gives a research record; and a fictional worked example that writes the same record into every container at its limit. Facts and inferences are drawn as solid and dashed. Research note L (2026-11-08)."
        },
        viz: {
          type: "evidence-ladder",
          title: L("六階證據裡，只有第 4 階以上有申請者以外的人保存紀錄；前三階全靠學生與 mentor 的說法", "Of six rungs of proof, only rung 4 and above leave a record someone other than the applicant holds; the first three rest on the student's and the mentor's word"),
          subtitle: L("由弱到強，依「誰能查核」排序。每階列出能為它作證的人、是否存在獨立保存的紀錄，以及它能進入的欄位。實線標籤＝官方頁寫明該欄位收這種東西；虛線＝我們的推論。滑過或點一下看出處。", "Weakest to strongest, ranked by who can check it. Each rung names who can vouch, whether a record exists outside the applicant's hands, and the containers it can enter. Solid chips: an official page says the container takes this; dashed: our inference. Hover or tap for sources."),
          legend: [
            { label: L("官方頁寫明收此物的欄位", "Container named on an official page"), shape: "box", color: "#fff", border: "#2a78d6" },
            { label: L("推論的欄位", "Inferred container"), shape: "dash" },
            { label: L("獨立紀錄：公開或第三方保存", "Independent record: public or held by a third party"), shape: "dot", color: "#184f95" },
            { label: L("獨立紀錄：programme 自己保存", "Independent record: held by the programme"), shape: "dot", color: "#6da7ec" }
          ],
          rungs: [
            {
              label: L("學生自己寫的文字", "The applicant's own text"),
              sub: L("Activities 150 字元、Honors 一行、Additional Information 300 字。UC 要求這類陳述「true and verifiable by an independent party」，但只在抽查時才會去問。", "An Activities entry (150 characters), an Honors line, Additional Information (300 words). UC requires such statements to be \"true and verifiable by an independent party\", but asks only on a screening."),
              verifier: L("沒有人；UC 抽查時才向第三方查證", "No one; UC checks with a third party only on a screening"),
              independent: "no", tag: "f", src: ["L01", "L02", "A1-S6", "C1-S41"],
              containers: [
                { label: L("Activities（10 × 150 字元）", "Activities (10 × 150 chars)"), src: ["L01"] },
                { label: L("Honors（5 × 100 字元）", "Honors (5 × 100 chars)"), src: ["L02", "A1-S6"] },
                { label: L("Additional Information（300 字）", "Additional Information (300 words)"), src: ["A1-S6", "A1-S12", "L12"] }
              ]
            },
            {
              label: L("Mentor 的推薦信", "The mentor's letter"),
              sub: L("Common App 的 Other Recommender 類型沒有「research mentor」；mentor 以 employer 或 other 身分受邀，學校要接受那個類型才送得到。MIT、Yale、Caltech 的研究表單都另外向 mentor 的 email 直接索信。", "Common App's Other Recommender types do not include \"research mentor\"; a mentor is invited as employer or other, and the letter arrives only where the college accepts that type. MIT's, Yale's and Caltech's research forms each request the letter directly from the mentor's email."),
              verifier: L("Mentor 本人，透過學生填入的 email 可聯絡", "The mentor, reachable at the email the student enters"),
              independent: "no", tag: "f", src: ["L03", "L06", "L09", "L11", "A1-S15"],
              containers: [
                { label: L("Other Recommender（≤1000 字，PDF 指引）", "Other Recommender (≤1000 words, PDF guidance)"), src: ["L03", "A1-S15"] },
                { label: L("MIT Research Supplement 內的信", "Letter inside MIT's Research Supplement"), src: ["L09"] },
                { label: L("Yale STEM Research Supplement 內的信", "Letter inside Yale's STEM Research Supplement"), src: ["L11"] },
                { label: L("Caltech 研究場所的信（必須談具體貢獻）", "Caltech research-site letter (must speak to specific contributions)"), src: ["L06"] },
                { label: L("Brown／Harvard：申請後另寄的信", "Brown / Harvard: extra letter sent after applying"), src: ["L13", "L14"] }
              ]
            },
            {
              label: L("有日期、簽名、見證的實驗記錄本與時數技術紀錄", "A dated, signed, witnessed notebook and an hours-and-techniques record"),
              sub: L("NIH 的紀錄標準：每筆「Dated」、「Signed or assigned to a particular person」、定期由非共同發明人「witnessed with a signature and date」、連續頁碼，且第三者「should be able to reconstruct the experiment」。Caltech portfolio 列「Personal notebooks」為可交項目（每份文件 ≤75 頁）；其他學校沒有一所把記錄本列為收件項目。", "NIH's record standard: entries \"Dated\", \"Signed or assigned to a particular person\", periodically \"witnessed with a signature and date\" by someone who is not a co-inventor, consecutive pages, and a third party \"should be able to reconstruct the experiment\". Caltech's portfolio lists \"Personal notebooks\" as an item (documents ≤75 pages); no other school lists a notebook as something it receives."),
              verifier: L("Programme 與見證人；記錄本由 programme 保存", "The programme and the witness; the notebook stays with the programme"),
              independent: "held", tag: "f", src: ["L24", "L08"],
              containers: [
                { label: L("Caltech Portfolio：「Personal notebooks」", "Caltech Portfolio: \"Personal notebooks\""), src: ["L08"] },
                { label: L("Additional Information 內的摘要（時數、技術、見證）", "Summary inside Additional Information (hours, techniques, witness)"), inferred: true, src: ["A1-S6", "L12"] },
                { label: L("由 mentor 的信轉述", "Described in the mentor's letter"), inferred: true, src: ["L03"] }
              ]
            },
            {
              label: L("競賽文件：事前研究計畫、指導成人的事後表格、評審", "Competition paperwork: a research plan written beforehand, the supervising adult's after-the-fact form, judges"),
              sub: L("ISEF：Research Plan「written BEFORE experimentation」，要分開寫學生做的步驟與指導成人做的步驟；Form 2C「To be completed by the Supervising Adult in the Setting (NOT the Student(s)) after experimentation」，勾選學生是「Mentored」、「Worked as a sub-set of our ongoing research」或「Had an independent project」；250 字摘要「must describe research conducted by the student(s), not by the supervising adult(s)」；一件作品最多 12 個月。Regeneron STS：20 頁論文、老師與 mentor 的推薦、須揭露付費 programme 與親屬關係。", "ISEF: the Research Plan is \"written BEFORE experimentation\" and separates the student's steps from the supervising adult's; Form 2C is \"To be completed by the Supervising Adult in the Setting (NOT the Student(s)) after experimentation\" and ticks whether the student was \"Mentored\", \"Worked as a sub-set of our ongoing research\" or \"Had an independent project\"; the 250-word abstract \"must describe research conducted by the student(s), not by the supervising adult(s)\"; one project covers at most 12 months. Regeneron STS: a 20-page paper, teacher and mentor recommendations, disclosure of paid programmes and family relationships."),
              verifier: L("科展的 SRC／IRB 與評審；Form 2C 上的指導成人；STS 的博士級評審", "The fair's SRC/IRB and judges; the supervising adult on Form 2C; STS's PhD-level evaluators"),
              independent: "yes", tag: "f", src: ["L17", "L18", "L19", "L20"],
              containers: [
                { label: L("Honors（名次、層級）", "Honors (placement, level)"), src: ["L02"] },
                { label: L("Activities（專題本身）", "Activities (the project itself)"), src: ["L01"] },
                { label: L("Additional Information（摘要、表格可提供）", "Additional Information (abstract; forms available on request)"), inferred: true, src: ["A1-S6"] },
                { label: L("Caltech Portfolio：「Research posters」", "Caltech Portfolio: \"Research posters\""), src: ["L08"] }
              ]
            },
            {
              label: L("公開且有時間戳的成果：具名會議的海報或口頭報告、有 DOI 的預印本、ORCID 紀錄", "A public, timestamped artefact: a poster or talk at a named meeting, a preprint with a DOI, an ORCID record"),
              sub: L("bioRxiv：「Manuscripts posted on bioRxiv receive DOI's」、送出時「screened … for plagiarism, non-scientific content」、「not certified by scientific peer review」、「papers cannot be removed」、送件人須「confirm you have approval from all co-authors」。ORCID 的項目標示「Validated – Added by a trusted ORCID member organization」或「Self asserted – Added directly by the author」。", "bioRxiv: \"Manuscripts posted on bioRxiv receive DOI's\", are \"screened … for plagiarism, non-scientific content\", are \"not certified by scientific peer review\", \"papers cannot be removed\", and the submitter must \"confirm you have approval from all co-authors\". ORCID items read \"Validated – Added by a trusted ORCID member organization\" or \"Self asserted – Added directly by the author\"."),
              verifier: L("會議的議程；預印本伺服器（只篩查，不同儕審查）；ORCID 只標示來源", "The meeting's programme; the preprint server (screening, not peer review); ORCID marks provenance only"),
              independent: "yes", tag: "f", src: ["L21", "L22", "L23", "L09", "L11", "L06"],
              containers: [
                { label: L("MIT Research Supplement（海報 PDF；已發表附 citation）", "MIT Research Supplement (poster PDF; citation if published)"), src: ["L09"] },
                { label: L("Yale STEM supplement（論文、摘要或海報）", "Yale STEM supplement (paper, abstract or poster)"), src: ["L11"] },
                { label: L("Harvard Upload Materials（須列合作者與本人貢獻）", "Harvard Upload Materials (list collaborators and own contribution)"), src: ["L14"] },
                { label: L("Brown／JHU／Harvey Mudd：摘要", "Brown / JHU / Harvey Mudd: abstract"), src: ["L13", "L15", "L16"] },
                { label: L("Additional Information：一行 DOI", "Additional Information: one DOI line"), inferred: true, src: ["A1-S6"] }
              ]
            },
            {
              label: L("同儕審查過、學生列為作者的論文", "A peer-reviewed paper with the student as an author"),
              sub: L("期刊為稿件作證，不為學生的份量作證：ICMJE 說判定作者資格「is not the role of journal editors」。Caltech 的研究管道要求論文「published, submitted, or in preparation」，並且仍要研究場所的信談具體貢獻。", "The journal vouches for the manuscript, not the student's share: ICMJE says deciding authorship \"is not the role of journal editors\". Caltech's research channel requires a paper \"published, submitted, or in preparation\" and still requires the research-site letter on specific contributions."),
              verifier: L("期刊（稿件）＋ mentor（份量）", "The journal (manuscript) plus the mentor (share)"),
              independent: "yes", tag: "f", src: ["C1-S47", "L06"],
              containers: [
                { label: L("Caltech Research Papers and Publications（全文 strongly preferred）", "Caltech Research Papers and Publications (full paper strongly preferred)"), src: ["L06"] },
                { label: L("MIT／Yale／Harvard 同上", "MIT / Yale / Harvard as above"), src: ["L09", "L11", "L14"] }
              ]
            }
          ]
        },
        items: [
          F("Caltech 把「研究」定義為三個條件同時成立：在「a university or research-affiliated organization」的實驗室、「reported to a senior researcher within the lab」、成果「resulted in a paper or publication that was published, submitted, or in preparation」。不符合的，包括「independent research」與「summer internship」，一律改交 Portfolio。",
            "Caltech defines research as three conditions met together: a lab in \"a university or research-affiliated organization\", having \"reported to a senior researcher within the lab\", and work that \"resulted in a paper or publication that was published, submitted, or in preparation\". Anything else, including \"independent research\" and a \"summer internship\", goes to the Portfolio instead.", ["L06"]),
          I("因此一個非大學附屬的校外訓練 programme，即使有三年紀錄，在 Caltech 走的是 Portfolio（海報、記錄本、影片、連結，文件 ≤75 頁），不是研究管道；除非成果已寫成投稿中的論文且該 programme 能被視為 research-affiliated。頁面沒有定義 research-affiliated。",
            "So a training programme outside school that is not university-affiliated enters Caltech through the Portfolio (posters, notebooks, video, links; documents ≤75 pages), not the research channel, unless the work has become a submitted paper and the programme counts as research-affiliated. The page does not define research-affiliated.", ["L06", "L08"]),
          F("MIT 的 Research Supplement 收的是「a significant research project outside of high school classes」，一人一份、一個專題：簡短問卷、「PDF of your abstract or research poster, if available」、已發表附 citation，並「Nominate your research advisor, mentor, or principal investigator to submit a letter of recommendation directly through the SlideRoom portfolio」。US$10，截止同申請。問卷內容不在公開頁上。",
            "MIT's Research Supplement takes \"a significant research project outside of high school classes\", one per applicant, one project: a brief questionnaire, a \"PDF of your abstract or research poster, if available\", a citation if published, and \"Nominate your research advisor, mentor, or principal investigator to submit a letter of recommendation directly through the SlideRoom portfolio\". US$10, due with the application. The questionnaire's questions are not on the public page.", ["L09"]),
          F("Yale 的 STEM Research Supplement Form 只在申請者於 Common App 表示要交補充材料時才出現在 Status Portal；「attach a research paper, abstract, or poster」、「Full research papers are generally the most helpful」、可「invite a research mentor to submit a letter of recommendation electronically」。同頁：「Most successful Yale applicants submit only the required application materials」。",
            "Yale's STEM Research Supplement Form appears on the Status Portal only if the applicant indicated intent on the Common App; \"attach a research paper, abstract, or poster\", \"Full research papers are generally the most helpful\", and the applicant may \"invite a research mentor to submit a letter of recommendation electronically\". Same page: \"Most successful Yale applicants submit only the required application materials\".", ["L11"]),
          F("Harvard 是 30 校中唯一在頁面上明說要「a list of any individuals with whom you collaborated」並「provide a short description of your particular contribution to the work」的學校；補充材料「may be reviewed by faculty」。",
            "Harvard is the only one of the 30 whose page asks in so many words for \"a list of any individuals with whom you collaborated\" and \"a short description of your particular contribution to the work\"; supplements \"may be reviewed by faculty\".", ["L14"]),
          F("官方頁面對「付費研究」唯一的句子來自 MIT 的暑期活動頁：「Most summer programs admit all or most students who can pay the (often high) tuition」。這句談的是暑期活動整體，不是研究 programme。30 校的官方部落格、FAQ 與 podcast 中，沒有找到「pay-to-play」、「ghost-written」或「paid research」字樣（2026-11-08 搜尋 mitadmissions.org、Georgia Tech admission blog、admissions.yale.edu、apply.jhu.edu）。",
            "The only official sentence found that names paying for a programme is on MIT's summer page: \"Most summer programs admit all or most students who can pay the (often high) tuition\". It is about summer programmes in general, not research. No official blog, FAQ or podcast among the 30 was found using \"pay-to-play\", \"ghost-written\" or \"paid research\" (searched 2026-11-08 on mitadmissions.org, the Georgia Tech admission blog, admissions.yale.edu, apply.jhu.edu).", ["L10"]),
          F("白紙黑字要求揭露付費 programme 的是競賽，不是大學：Regeneron STS「entrants AND mentors must disclose participation in paid programs」，並要求「obtain permission from their mentors before submitting their research」、學生與推薦人都要揭露「any prior familial or personal relationship」。",
            "The body that requires disclosure of paid programmes in writing is a competition, not a university: Regeneron STS says \"entrants AND mentors must disclose participation in paid programs\", requires entrants to \"obtain permission from their mentors before submitting their research\", and requires both students and recommenders to disclose \"any prior familial or personal relationship\".", ["L20"]),
          I("把上面幾條放在一起：有研究管道的學校都在收同樣兩樣東西，一件成品（論文、摘要或海報）加一位能談學生自己份量的 mentor。沒有一校說它收訓練紀錄、技術清單或時數表；Caltech 的「Personal notebooks」是唯一把記錄本列為可交項目的官方文字。這是欄位的事實；學校怎麼讀，沒有來源說。",
            "Read together, the schools with a research channel all take the same two objects: an artefact (paper, abstract or poster) and a mentor who can speak to the student's own share. No school says it receives a training record, a techniques list or an hours table; Caltech's \"Personal notebooks\" is the only official text that lists a notebook as an item. That is a fact about the fields; how a school reads them is not stated anywhere.", ["L06", "L08", "L09", "L11", "L13", "L14", "L15", "L16"]),
          A("「見證過的記錄本比沒有見證的更有說服力」是假設，沒有任何招生辦公室這樣說；NIH 的見證標準是為研究與智慧財產紀錄寫的，不是為申請寫的。",
            "That a witnessed notebook persuades more than an unwitnessed one is an assumption; no admissions office says so, and NIH's witnessing standard was written for research and intellectual-property records, not for applications.", ["L24"])
        ]
      },

      // ───────────────────────── L: three years → containers, with budgets
      {
        id: "lab-timeline",
        h: { zh: "三年紀錄在什麼時候進哪個欄位", en: "When each record item enters which container" },
        judgment: {
          zh: "三年累積的東西，最後進申請表的窗口只有 G12 上學期的幾個月：Activities 與 Honors 在送出時凍結，Additional Information 300 字裝下整個結構，mentor 的信在送出後也還能到；只有 Caltech 的 portal 在送出後才開。",
          en: "Three years of accumulation enter the application in one window of a few months in the autumn of G12: Activities and Honors freeze at submission, Additional Information's 300 words hold the whole structure, the mentor's letter can still arrive after submission, and Caltech's portal opens only after submission."
        },
        viz: {
          type: "record-to-form", wide: true,
          title: L("五種紀錄項目、六個欄位：150 字元與 300 字之外，能裝下細節的只有 mentor 的信與三所學校的研究表單", "Five record items, six containers: beyond 150 characters and 300 words, only the mentor's letter and three schools' research forms hold detail"),
          subtitle: L("上方：訓練的三年（G9–G11）與申請窗口（G12 上學期）。每條橫桿是 programme 能持續產生的一種紀錄；下方是申請表的欄位與官方上限。連線從紀錄成形的時間點落到它進入的欄位。虛線＝我們推論的路徑。左右滑動可看全圖。", "Top: the three training years (G9–G11) and the application window (autumn of G12). Each bar is a record the programme can keep producing; below are the application's containers with their official budgets. A line drops from the point in time a record is ready to the container it enters. Dashed: a path we infer. Scroll sideways for the full width."),
          years: [
            { label: L("第 1 年（G9）", "Year 1 (G9)"), sub: L("基本技術", "Basic techniques") },
            { label: L("第 2 年（G10）", "Year 2 (G10)"), sub: L("方法與重現", "Methods and replication") },
            { label: L("第 3 年（G11）", "Year 3 (G11)"), sub: L("自己的專題", "Own project") },
            { label: L("申請窗口（G12 秋）", "Application (autumn G12)"), sub: L("8/1 開放 → 1 月初", "Aug 1 → early Jan") }
          ],
          items: [
            { id: "log", label: L("時數與技術紀錄", "Hours-and-techniques log"), from: 0, to: 3.4, sub: L("programme 逐年保存；申請表沒有欄位直接收", "Kept by the programme year by year; no field receives it directly"), src: ["L24"] },
            { id: "nb", label: L("見證過的實驗記錄本", "Witnessed lab notebook"), from: 0, to: 3.4, sub: L("NIH 標準：有日期、簽名、定期見證、連續頁碼", "NIH standard: dated, signed, periodically witnessed, consecutive pages"), src: ["L24"] },
            { id: "mentor", label: L("Mentor 關係", "Mentor relationship"), from: 0.3, to: 3.9, sub: L("Other Recommender 類型沒有 research mentor；以 employer 或 other 受邀", "No research-mentor type among Other Recommenders; invited as employer or other"), src: ["L03"] },
            { id: "proj", label: L("第 3 年專題（摘要）", "Year-3 project (abstract)"), from: 2.0, to: 3.2, sub: L("ISEF：計畫寫在實驗前；一件作品 ≤12 個月", "ISEF: plan written before experimenting; one project ≤12 months"), src: ["L17", "L18"] },
            { id: "poster", label: L("海報／科展／預印本", "Poster, fair entry or preprint"), from: 2.6, to: 3.3, sub: L("公開、有日期的成果；預印本有 DOI 但未同儕審查", "A public, dated artefact; a preprint has a DOI but no peer review"), src: ["L17", "L21"] }
          ],
          containers: [
            { id: "act", label: L("Activities", "Activities"), budget: { n: 150, unit: "chars" }, sub: L("10 項；position 50、organization 100；時數／週 × 週／年", "10 entries; position 50, organization 100; hours/week × weeks/year"), src: ["L01"] },
            { id: "hon", label: L("Honors", "Honors"), budget: { n: 100, unit: "chars" }, sub: L("5 項；年級與層級", "5 entries; grade and level"), src: ["L02", "A1-S6"] },
            { id: "addl", label: L("Additional Information", "Additional Information"), budget: { n: 300, unit: "words" }, sub: L("2025–26 起由 650 減為 300；「not a space for another essay」", "Cut from 650 to 300 from 2025–26; \"not a space for another essay\""), src: ["A1-S6", "A1-S12", "L12"] },
            { id: "oe", label: L("Other Recommender 信", "Other Recommender letter"), budget: { n: 1000, unit: "words" }, sub: L("PDF 指引「1000 words or less」；學校須接受該類型", "PDF guidance \"1000 words or less\"; the college must accept the type"), src: ["A1-S15", "L03"] },
            { id: "sr", label: L("School Report（counselor）", "School Report (counselor)"), budget: null, sub: L("成績單與 school profile；是否能附校外紀錄：未載明", "Transcript and school profile; whether an outside record may be attached: not stated"), src: ["A1-S14", "L05"] },
            { id: "res", label: L("學校研究表單", "School research form"), budget: { n: 1, unit: "file", text: L("份（MIT／Yale／Caltech）", "form (MIT / Yale / Caltech)") }, sub: L("摘要或海報 PDF＋mentor 的信；Caltech 全文 preferred，portal 送出後開", "Abstract or poster PDF plus the mentor's letter; Caltech prefers the full paper, portal opens after submission"), src: ["L09", "L11", "L06"] }
          ],
          links: [
            { from: "log", to: "act", at: 3.1, label: L("總時數進 hours/week × weeks/year；150 字元寫角色與技術", "Total hours go into hours/week × weeks/year; 150 characters for role and techniques"), src: ["L01"] },
            { from: "log", to: "addl", at: 3.2, label: L("逐年時數與技術清單，以條列寫", "Hours and techniques by year, as bullets"), dashed: true, src: ["A1-S6", "L12"] },
            { from: "nb", to: "res", at: 3.3, label: L("只有 Caltech Portfolio 列「Personal notebooks」", "Only Caltech's Portfolio lists \"Personal notebooks\""), src: ["L08"] },
            { from: "nb", to: "oe", at: 3.2, label: L("見證人即 mentor，在信中說明", "The witness is the mentor and says so in the letter"), dashed: true, src: ["L24", "L03"] },
            { from: "mentor", to: "oe", at: 3.5, label: L("送出後仍可送達；20 字元關係、20 字元認識多久", "May arrive after submission; 20-character relationship, 20-character length known"), src: ["A1-S15", "L03"] },
            { from: "mentor", to: "res", at: 3.6, label: L("MIT 由 SlideRoom 直接索信；Yale 由表單邀請；Caltech 由表單填 email", "MIT requests it through SlideRoom; Yale invites through the form; Caltech takes the email on its form"), src: ["L09", "L11", "L06"] },
            { from: "mentor", to: "sr", at: 3.0, label: L("counselor 只能轉述；是否附文件未載明", "The counselor can only relay; attaching documents is not stated"), dashed: true, src: ["L05", "A1-S14"] },
            { from: "proj", to: "addl", at: 3.2, label: L("專題一段：問題、自己做的、mentor 做的", "One paragraph: question, what you did, what the mentor did"), dashed: true, src: ["L18", "A1-S6"] },
            { from: "proj", to: "res", at: 3.2, label: L("摘要或海報 PDF", "Abstract or poster PDF"), src: ["L09", "L11"] },
            { from: "poster", to: "hon", at: 3.1, label: L("名次或獎項才算 honor", "Only a placement or award counts as an honor"), src: ["L02"] },
            { from: "poster", to: "res", at: 3.3, label: L("MIT 海報 PDF；Caltech Portfolio「Research posters」", "MIT poster PDF; Caltech Portfolio \"Research posters\""), src: ["L09", "L08"] }
          ],
          legend: [
            { label: L("官方頁寫明的路徑", "Path stated on an official page"), shape: "line", color: "#b2b7bf" },
            { label: L("推論的路徑", "Inferred path"), shape: "dash" }
          ]
        },
        items: [
          F("Common App 的活動說明單自己示範把 256 字元的描述刪成 141 字元，並刪掉時數「because that information is reported elsewhere in the section」：每項活動另有 hours/week 與 weeks/year 欄位。",
            "Common App's own activities handout cuts a 256-character description to 141 and drops the time spent \"because that information is reported elsewhere in the section\": each activity has its own hours/week and weeks/year fields.", ["L01"]),
          F("Yale 的招生官在 2025-07-31 的 podcast 裡說明 Additional Information 由 650 字減為 300 字，並說「It's not a space for another essay」、「It doesn't have to be well-written prose」（條列可以）、沒有東西就「leave it blank」。",
            "Yale's officers, in the podcast dated 2025-07-31, describe the Additional Information cut from 650 to 300 words and say \"It's not a space for another essay\", \"It doesn't have to be well-written prose\" (bullets are fine), and if there is nothing to add, \"leave it blank\".", ["L12"]),
          F("Courses & Grades 只收「appearing on your high school transcript」的課程；沒有高中學分的大學課程「do not need to report」。校外 programme 的課不在這裡。Common App 的輔導老師簡報把「college courses taken」的清單指向 Writing → Additional Information。",
            "Courses & Grades takes only courses \"appearing on your high school transcript\"; college courses without high-school credit \"do not need to report\". An outside programme's courses have no place here. Common App's counselor deck points a list of \"college courses taken\" to Writing → Additional Information.", ["L04"]),
          F("Counselor 的角色（Common App 寫作指引）：從「an entire graduating class」的角度，提供「Context for and rationale behind specific awards and honors」。School Report 的欄位是成績單、school profile、評分與 500 字的 disruption 欄。counselor 能否附上或簽署校外 programme 的紀錄：未載明（2026-11-08 查核）。",
            "The counselor's role (Common App writing guide): from the view of \"an entire graduating class\", give \"Context for and rationale behind specific awards and honors\". The School Report's fields are the transcript, the school profile, ratings and a 500-word disruption box. Whether a counselor may attach or countersign an outside programme's record: not stated (checked 2026-11-08).", ["L05", "A1-S14"]),
          I("因此 counselor 能幫上的，是在知情的情況下，把校外獎項與 mentor 的存在寫進自己的信裡作為脈絡；沒有任何官方文字說 counselor 會為校外紀錄的真實性背書。",
            "So what a counselor can do, if told, is place the outside award and the mentor's existence in their own letter as context; no official text says a counselor vouches for an outside record's truth.", ["L05"])
        ]
      },

      // ───────────────────────── L: 30 schools, where a research record lands
      {
        id: "lab-routes",
        h: { zh: "30 校各自讓研究紀錄走哪條路", en: "Where a research record lands at each of the 30 schools" },
        judgment: {
          zh: "有結構化研究表單（附 mentor 信）的只有 MIT、Yale、Caltech 三校；另有 Harvard、Brown、JHU、Swarthmore 收自由上傳或摘要；8 校明寫不收或沒有管道；其餘不是只剩 Common App 欄位，就是頁面沒寫。",
          en: "Only MIT, Yale and Caltech have a structured research form with a mentor letter; Harvard, Brown, JHU and Swarthmore take a free upload or an abstract; eight schools say in writing they refuse or have no channel; the rest either leave only the Common App fields or say nothing."
        },
        viz: {
          type: "school-research-routes", dataset: "schools",
          title: L("30 校中 3 校有附 mentor 信的研究表單，8 校明寫不收；每校只接受一種形狀的研究紀錄", "Three of 30 schools have a research form with a mentor letter and eight refuse in writing; each school takes one shape of research record"),
          subtitle: L("每列一校。四欄：是否收研究論文或摘要（來自 portfolios 矩陣）、研究紀錄能走的管道（本次分類）、是否接受 mentor 另寫一封信、是否接受 Common App 的 Other Recommender（來自學校資料）。虛線圈＝頁面未載明；斜紋＝網頁拒絕自動讀取。滑過或點一下看該格全文與出處。", "One row per school. Four columns: whether a research paper or abstract is accepted (from the portfolios matrix), the route a research record can take (classified in this note), whether a mentor's extra letter is accepted, and whether Common App's Other Recommender is accepted (from the school data). Dashed ring: not stated on the pages read; hatched: page refused automated reading. Hover or tap a cell for the full text and sources."),
          legend: [
            { label: L("接受", "Accepted"), shape: "dot", color: "#184f95" },
            { label: L("有限或有條件", "Limited or conditional"), shape: "ring" },
            { label: L("不收", "Refused"), shape: "ring", border: "#898781" },
            { label: L("未載明", "Not stated"), shape: "dash" },
            { label: L("網頁拒絕自動讀取", "Page refused automated reading"), shape: "hatch" },
            { label: L("管道：SlideRoom 研究補充", "Route: SlideRoom research supplement"), shape: "box", color: "#184f95" },
            { label: L("管道：學校 portal 上傳", "Route: school portal upload"), shape: "box", color: "#2a78d6" },
            { label: L("管道：只走 Common App 欄位", "Route: Common App fields only"), shape: "box", color: "#b7d3f6", border: "#2a78d6" }
          ],
          rows: [
            { school: "MIT", route: "slideroom", mentor: "yes", note: L("Research Supplement：問卷、摘要或海報 PDF、citation；mentor 經 SlideRoom 寫信。", "Research Supplement: questionnaire, abstract or poster PDF, citation; the mentor's letter comes through SlideRoom."), src: ["L09", "B2-S1"], mentorSrc: ["L09", "B7-O06"] },
            { school: "Caltech", route: "portal", mentor: "yes", note: L("Research Papers and Publications（限大學或 research-affiliated 實驗室且有論文）；否則 Portfolio。Beaver Breakroom 送出後開。", "Research Papers and Publications (lab in a university or research-affiliated organization, with a paper); otherwise the Portfolio. Beaver Breakroom opens after submission."), src: ["L06", "L08"], mentorSrc: ["L06"], mentorNote: L("研究場所的信為必要，須談具體貢獻", "Research-site letter required; must speak to specific contributions") },
            { school: "Stanford", route: "refused", mentor: "limited", note: L("「we do not offer an option for applicants to upload supplementary materials」；研究論文不加入檔案。", "\"we do not offer an option for applicants to upload supplementary materials\"; research papers are not added to the file."), src: ["B7-O50"], mentorSrc: ["B7-O49"], mentorNote: L("一位 Other Recommender，須能「provide new insights」", "One Other Recommender who can \"provide new insights\"") },
            { school: "Harvard", route: "portal", mentor: "yes", note: L("Applicant Portal「Upload Materials」；須列合作者、mentor 與本人貢獻。", "Applicant Portal \"Upload Materials\"; list collaborators, the mentor and your own contribution."), src: ["L14"], mentorSrc: ["L14"] },
            { school: "Yale", route: "portal", mentor: "yes", note: L("STEM Research Supplement Form（Status Portal，需事先表示意願）；論文、摘要或海報；邀請 mentor 寫信。", "STEM Research Supplement Form (Status Portal, intent indicated beforehand); paper, abstract or poster; invite the mentor to write."), src: ["L11"], mentorSrc: ["L11"] },
            { school: "Princeton", route: "refused", mentor: "ns", note: L("沒有研究管道；選填項目只有藝術補充。", "No research channel; the arts supplement is the only optional component."), src: ["V4-T1", "V4-T3"] },
            { school: "Columbia", route: "blocked", mentor: "limited", note: L("FAQ 頁 2026-11-08 仍回 HTTP 403；2026-11-07 的搜尋摘錄說額外的信只考慮 research supervisor 或大學課程教師。", "The FAQ returned HTTP 403 again on 2026-11-08; a 2026-11-07 search excerpt said extra letters are considered only from a research supervisor or college-course instructor."), src: ["L26", "B7-O73"], mentorSrc: ["B7-O73"], mentorNote: L("只有摘錄，未讀到頁面本文", "Excerpt only; page body not read") },
            { school: "Penn", route: "commonapp", mentor: "ns", note: L("請寫在 Activities 或 Additional Information。", "Use the Activities or Additional Information sections."), src: ["B2-S19"] },
            { school: "Brown", route: "portal", mentor: "yes", note: L("Brown Applicant Portal：研究摘要；不收 email 更新。", "Brown Applicant Portal: research abstract; no updates by email."), src: ["L13"], mentorSrc: ["L13"], mentorNote: L("一封選填的信走 Common App；其他由推薦人直接寄", "One optional letter via Common App; further letters sent directly by the recommender") },
            { school: "Cornell", route: "limited", mentor: "ns", note: L("未設研究類別；Applicant Portal 可「upload supplemental materials to your application」。", "No research category; the Applicant Portal lets applicants \"upload supplemental materials to your application\"."), src: ["B2-S28"] },
            { school: "Georgetown", route: "ns", mentor: "ns", src: ["B2-S29"] },
            { school: "CMU", route: "limited", mentor: "ns", note: L("不收上傳；工學院與 CS 只有 VIVA 影片。", "No uploads; Engineering and CS take a VIVA video only."), src: ["B2-S30"] },
            { school: "Georgia Tech", route: "ns", mentor: "ns", src: ["B2-S32"] },
            { school: "Purdue", route: "ns", mentor: "ns", src: ["V4-T8"] },
            { school: "Michigan", route: "refused", mentor: "no", note: L("「Do not submit additional documents unless specifically requested.」", "\"Do not submit additional documents unless specifically requested.\""), src: ["V4-T13"], mentorSrc: ["V4-T13"] },
            { school: "UIUC", route: "refused", mentor: "no", note: L("不收任何未經要求的材料；未經要求的信在審查前移除。", "No unsolicited material; unsolicited letters are removed before review."), src: ["B2-S36", "B7-O86"], mentorSrc: ["B7-O86"] },
            { school: "Olin", route: "ns", mentor: "ns", src: ["B2-S38"] },
            { school: "Harvey Mudd", route: "commonapp", mentor: "limited", note: L("Common App 上傳；只要摘要，不要全文。", "Common App upload; abstract only, not the full paper."), src: ["L16"], mentorSrc: ["L16"], mentorNote: L("只多收一封，最好來自 supervisor、mentor 或 employer", "Only one additional letter, ideally from a supervisor, mentor or employer") },
            { school: "Johns Hopkins", route: "portal", mentor: "yes", note: L("applicant portal 上傳；以研究摘要為例；須「contribute in a substantive way」。", "Applicant portal upload; research abstracts given as an example; must \"contribute in a substantive way\"."), src: ["L15"], mentorSrc: ["L15"], mentorNote: L("可作為選交材料上傳；候補名單階段不要再寄", "May be uploaded as optional material; not during the waitlist") },
            { school: "Duke", route: "refused", mentor: "limited", note: L("點名不收 research abstracts。", "Names research abstracts as not accepted."), src: ["B2-S43"], mentorSrc: ["B7-O43"], mentorNote: L("接受一封額外推薦信", "Accepts one additional letter") },
            { school: "Northwestern", route: "refused", mentor: "ns", note: L("不收未經要求的補充材料。", "Unsolicited supplements are refused."), src: ["V4-T6"] },
            { school: "Rice", route: "ns", mentor: "limited", src: ["B2-S46"], mentorSrc: ["B7-O68"], mentorNote: L("「A supplemental letter is not required or expected.」", "\"A supplemental letter is not required or expected.\"") },
            { school: "UC Berkeley", route: "refused", mentor: "no", note: L("UC 不收補充材料；活動須「true and verifiable by an independent party」，抽查時才查。", "UC takes no supplementary material; activities must be \"true and verifiable by an independent party\", checked on screening."), src: ["B2-S47", "C1-S41"], mentorSrc: ["C1-S40", "C1-S41"], mentorNote: L("UC 頁面未提推薦信", "UC pages do not mention letters") },
            { school: "UCLA", route: "ns", mentor: "no", src: ["B2-S50"], mentorSrc: ["C1-S40"] },
            { school: "UC San Diego", route: "ns", mentor: "no", src: ["B2-S51"], mentorSrc: ["C1-S40"] },
            { school: "UT Austin", route: "ns", mentor: "limited", src: ["B2-S54"], mentorSrc: ["B7-O84", "B7-O85"], mentorNote: L("推薦信「although not required」會看；最多兩封（摘錄）", "Letters reviewed \"although not required\"; up to two (excerpt)") },
            { school: "UW", route: "refused", mentor: "ns", note: L("不收補充材料，也請勿寄網站連結。", "No supplementary material; no website links."), src: ["B2-S55"] },
            { school: "Williams", route: "limited", mentor: "ns", note: L("「we welcome a brief description of your work」；可另附 VIVA。", "\"we welcome a brief description of your work\"; optional VIVA."), src: ["V4-T11"] },
            { school: "Amherst", route: "blocked", mentor: "blocked", src: ["B2-S57"] },
            { school: "Swarthmore", route: "portal", mentor: "ns", note: L("portal：研究摘要，或 VIVA 影片介紹研究。", "Portal: research abstracts, or a VIVA video about the research."), src: ["B2-S58"] }
          ]
        },
        items: [
          F("Harvey Mudd：「do not upload entire research papers but instead include an abstract」；Yale：「Full research papers are generally the most helpful」。同一份東西，兩校要的形狀相反；因此同一段三年紀錄至少要備妥摘要與全文兩種版本。",
            "Harvey Mudd: \"do not upload entire research papers but instead include an abstract\"; Yale: \"Full research papers are generally the most helpful\". The same artefact in opposite shapes, so one three-year record needs at least an abstract and a full-length version ready.", ["L16", "L11"]),
          F("Brown 只收 portal 上傳、「We are not able to accept updates via email」；JHU 的 ED 延後者「may email the link to or document of your supplemental materials」。送件方式逐校不同。",
            "Brown takes portal uploads only and says \"We are not able to accept updates via email\"; JHU's deferred ED applicants \"may email the link to or document of your supplemental materials\". The delivery route differs school by school.", ["L13", "L15"]),
          I("「接受 mentor 的信」一欄中，標為「有限」的學校多半是只多收一封信的學校（Harvey Mudd、Duke、Stanford）：這一封若給了 lab mentor，就不能再給別人。這是欄位規則的推論，不是任何學校的建議。",
            "In the mentor-letter column, most schools marked limited take exactly one extra letter (Harvey Mudd, Duke, Stanford): if that letter goes to the lab mentor it cannot go to anyone else. This is an inference from the field rules, not any school's advice.", ["L16", "B7-O43", "B7-O49"])
        ]
      },

      // ───────────────────────── L: worked, fictional example
      {
        id: "lab-example",
        h: { zh: "虛構範例：同一段三年紀錄，寫進每個欄位的上限", en: "A fictional example: the same three-year record written into each container at its limit" },
        judgment: {
          zh: "150 字元只放得下角色、技術清單與一個成果；300 字放得下整個結構；真正能說清「哪些是學生自己做的」的，只有 mentor 那封最多 1000 字的信。",
          en: "150 characters hold a role, a techniques list and one output; 300 words hold the whole structure; the only place that can say which parts the student did alone is the mentor's letter of at most 1000 words."
        },
        intro: {
          zh: "以下是虛構的合成範例，沒有真實人物、機構或資料；數字（時數、名次）為示意。英文是表單實際會填的文字（Common App 表單為英文）；中文為說明。字元數與字數由頁面即時計算。",
          en: "A fictional composite follows: no real person, institution or data; the numbers (hours, placement) are illustrative. The English is what the form would actually receive (Common App forms are in English); the Chinese is a gloss. Character and word counts are computed live on the page."
        },
        viz: {
          type: "filled-fields",
          title: L("同一段紀錄的四種長度：45、137、76 字元與約 300 字的結構", "One record at four lengths: 45, 137 and 76 characters, and a structure of about 300 words"),
          subtitle: L("虛構範例。每個欄位上方的計數器是該文字對照官方上限的用量；超過會以橘色標出。", "Fictional. The counter above each field shows the text's use of the official budget; an overrun turns orange."),
          fictional: L("虛構範例 · 合成人物 · 無真實姓名、機構或資料", "Fictional example · composite persona · no real names, institutions or data"),
          blocks: [
            {
              label: L("Activities：Position / Leadership description（50 字元）", "Activities: Position / Leadership description (50 chars)"),
              limit: { n: 50, unit: "chars" },
              text: { en: "Student researcher, molecular biology (3 yrs)", zh: "學生研究員，分子生物學（三年）" },
              src: ["L01"]
            },
            {
              label: L("Activities：Organization name（100 字元）", "Activities: Organization name (100 chars)"),
              limit: { n: 100, unit: "chars" },
              text: { en: "Independent molecular-biology training lab (outside school)", zh: "獨立的分子生物學訓練實驗室（校外）。不寫任何機構名稱；本站不點名。" },
              src: ["L01"]
            },
            {
              label: L("Activities：Description（150 字元）；另填 hours/week 6、weeks/year 40、年級 9–11", "Activities: Description (150 chars); plus hours/week 6, weeks/year 40, grades 9–11"),
              limit: { n: 150, unit: "chars" },
              text: { en: "720 h/3 yrs: PCR, cloning, Western, qPCR. Yr 3: own project on promoter variants in E. coli; poster at regional fair. Witnessed notebook.", zh: "三年 720 小時：PCR、選殖、Western、qPCR。第三年：自己的 E. coli 啟動子變異專題；地區科展海報。有見證的實驗記錄本。" },
              note: L("時數不寫進描述，因為另有欄位；Common App 自己的範例也這樣刪。", "Hours stay out of the description because the section has its own fields; Common App's own example makes the same cut."),
              src: ["L01"]
            },
            {
              label: L("Honors：title（100 字元）；另選年級 11、層級 State/Regional", "Honors: title (100 chars); plus grade 11, level State/Regional"),
              limit: { n: 100, unit: "chars" },
              text: { en: "2nd place, Cellular & Molecular Biology, ISEF-affiliated regional fair (G11)", zh: "ISEF 附屬地區科展，細胞與分子生物學類第二名（11 年級）。只有名次或獎項能寫在這裡；時數與技術不是 honor。" },
              src: ["L02", "A1-S6"]
            },
            {
              label: L("Additional Information（300 字）：結構大綱，不是全文", "Additional Information (300 words): an outline of the structure, not the full text"),
              limit: { n: 300, unit: "words" },
              lines: [
                { en: "What it is: an independent molecular-biology training lab outside school, not a school course; supervised by a named mentor (email given); G9–G11.", zh: "是什麼：校外的獨立分子生物學訓練實驗室，不是學校課程；由具名 mentor 指導（附 email）；G9–G11。", n: 45 },
                { en: "Record kept: dated, witnessed lab notebook (N pages); hours by year, 180 / 240 / 300.", zh: "留下的紀錄：有日期、有見證的實驗記錄本（N 頁）；逐年時數 180／240／300。", n: 35 },
                { en: "Techniques by year: Y1 sterile technique, pipetting, PCR, gel; Y2 plasmid prep, restriction cloning, transformation, replication of two published results; Y3 qPCR, Western blot, own project.", zh: "逐年技術：第一年無菌操作、移液、PCR、電泳；第二年質體製備、限制酶選殖、轉形、重現兩篇已發表結果；第三年 qPCR、Western blot、自己的專題。", n: 60 },
                { en: "Year-3 project in one paragraph: question; what I designed and did myself; what the mentor did (strain, safety review, troubleshooting), in the manner of ISEF Form 2C.", zh: "第三年專題一段：問題；我自己設計與做的；mentor 做的（菌株、安全審查、除錯），仿 ISEF Form 2C 的寫法。", n: 70 },
                { en: "Checkable anchors: poster at the regional fair (date, category); abstract available; notebook available on request; mentor writes as Other Recommender where accepted.", zh: "可查核的錨點：地區科展海報（日期、類別）；摘要可提供；記錄本可應要求提供；mentor 在接受的學校以 Other Recommender 身分寫信。", n: 50 },
                { en: "What is not claimed: no publication; no authorship; nothing beyond the above.", zh: "不主張的：沒有發表；沒有作者身分；沒有上述以外的東西。", n: 25 }
              ],
              note: L("Yale 的招生官說這一欄「doesn't have to be well-written prose」，條列可以；也說它「not a space for another essay」。六條合計約 285 字。", "Yale's officers say this box \"doesn't have to be well-written prose\" and bullets are fine, and that it is \"not a space for another essay\". The six bullets total about 285 words."),
              src: ["A1-S6", "L12", "L18"]
            },
            {
              label: L("Other Recommender：mentor 需要的簡報（信由 mentor 寫，上限 1000 字；關係 20 字元；認識多久 20 字元）", "Other Recommender: the brief the mentor needs (the mentor writes the letter, ≤1000 words; relationship 20 chars; length known 20 chars)"),
              limit: null,
              lines: [
                { en: "Relationship field (20 chars): \"Lab mentor\". How long known (20 chars): \"3 years\".", zh: "關係欄（20 字元）：「Lab mentor」。認識多久（20 字元）：「3 years」。" },
                { en: "Which Other Recommender type the student invited you under (employer or other), and which colleges accept it; the letter goes only to those.", zh: "學生以哪個 Other Recommender 類型邀請你（employer 或 other），哪些學校接受；信只會送到那些學校。" },
                { en: "Dates and hours you observed, by year; which techniques the student now performs unaided and which not yet.", zh: "你親眼看到的日期與時數，逐年；哪些技術學生已能獨立完成、哪些還不能。" },
                { en: "The year-3 project in Form 2C terms: mentored / sub-set of ongoing work / independent; what the student decided and did; what you did.", zh: "第三年專題，以 Form 2C 的語言：受指導／屬於實驗室進行中工作的一部分／獨立專題；學生決定與做了什麼；你做了什麼。" },
                { en: "One specific episode (a failed cloning and how the student troubleshot it), not adjectives.", zh: "一個具體事件（一次失敗的選殖與學生怎麼除錯），不要形容詞。" },
                { en: "That you witnessed the notebook, how often, and that it can be produced on request; a letterhead and an email an office can reply to.", zh: "你見證了記錄本、多常見證、可應要求提供；有信頭，並附招生辦公室能回覆的 email。" },
                { en: "For Caltech, Yale or MIT: the same letter is requested again through their own form; Caltech's must \"speak to your specific contributions\".", zh: "對 Caltech、Yale 或 MIT：同一封信會再經它們自己的表單索取；Caltech 的信「must speak to your specific contributions」。" }
              ],
              note: L("Common App 的 Other evaluation 沒有評分格，只有關係、認識多久與一份上傳的信。沒有官方文字要求信上有信頭或可回覆的 email；那兩項是推論，來自 Caltech、MIT、Yale 表單都向 mentor 的 email 索信這個事實。", "Common App's Other evaluation has no rating grid: relationship, length known and one uploaded letter. No official text requires a letterhead or a reply-able email; those two items are an inference from the fact that Caltech's, MIT's and Yale's forms all request the letter at the mentor's email."),
              src: ["A1-S15", "L03", "L06", "L09", "L11", "L18"]
            }
          ]
        },
        items: [
          I("這份範例刻意不寫發表：三年訓練 programme 最常見的終點是技術熟練與一個自己的小專題，不是論文；寫成有論文的樣子，就會撞上 Caltech「published, submitted, or in preparation」與 Harvard「your particular contribution」這類會被追問的條件。",
            "The example deliberately claims no publication: the usual end point of a three-year training programme is technical fluency and one small project of the student's own, not a paper; dressing it as a paper runs into conditions that invite follow-up, such as Caltech's \"published, submitted, or in preparation\" and Harvard's \"your particular contribution\".", ["L06", "L14"]),
          I("Programme 自己最值得先做的一件事，是把 ISEF Form 2C 的五個勾選項（用了設備／接觸很少／受指導／屬於進行中工作的一部分／獨立專題）逐年填好並由指導成人簽名。它不會直接進任何欄位，但它是 mentor 信、Additional Information 與任何研究表單共同的底稿。",
            "The single most useful thing the programme itself can do is fill in ISEF Form 2C's five boxes (used equipment / minimal interaction / mentored / sub-set of ongoing work / independent project) for each year, signed by the supervising adult. It enters no field directly, but it is the shared draft under the mentor's letter, the Additional Information bullets and any research form.", ["L18"]),
          A("範例中 mentor 以 Other Recommender 身分寫信的前提，是該校接受 employer 或 other 類型；本站未逐校讀取 Common App 內的接受設定，這是假設。",
            "The example assumes the college accepts the employer or other type so the mentor can write as an Other Recommender; the per-college settings inside Common App were not read, so this is an assumption.", ["L03"])
        ]
      },

      // ───────────────────────── C1 frameworks
      {
        id: "frameworks",
        h: { zh: "現有的紀錄框架", en: "Existing record frameworks" },
        judgment: {
          zh: "Mastery Transcript 只能由會員高中簽發，CLR 與 Open Badges 是登記與職場格式，Coalition Locker 已隨平台更換消失；沒有一個是 outside programme 能直接送進申請的管道。",
          en: "A Mastery Transcript can only be issued by a member high school, CLR and Open Badges are registrar and workforce formats, and the Coalition Locker went away with the platform change; none is a channel an outside programme can use to send a record into an application."
        },
        viz: {
          type: "feature-matrix",
          title: L("五種框架，沒有一種有目標學校書面表示接受；唯一的表態來自 UC：mastery transcript 只能走 admission by exception", "None of the five frameworks is accepted in writing by a target school; the one statement, UC's, admits mastery transcripts only by exception"),
          subtitle: L("每列一種紀錄格式，每欄一個問題。實心＝是，半實心＝部分或有條件，空心斜線＝否，虛線＝查過的來源沒有說明（C1 研究筆記，2026-11-07）。欄頂數字是「是」的數量。滑過或點一下符號可看原文與出處。", "One record format per row, one question per column. Filled = yes, half = partly or with conditions, hollow with a slash = no, dashed = not stated in the sources read (C1 research note, accessed 2026-11-07). The count under each heading is the number of yeses. Hover or tap a mark for the wording and its source."),
          corner: L("框架", "Framework"),
          legend: { yes: L("是", "Yes"), partial: L("部分／有條件", "Partly / with conditions"), no: L("否", "No"), ns: L("查過的來源未說明", "Not stated in the sources read") },
          cols: [
            { label: L("Outside programme 能簽發", "An outside programme can issue it") },
            { label: L("目標學校書面表示接受", "A target college states it accepts it") },
            { label: L("可用密碼學驗證", "Cryptographically verifiable") },
            { label: L("可附證據連結", "Can carry evidence links") },
            { label: L("2026 年仍在運作", "Still operating in 2026") }
          ],
          rows: [
            { label: L("Mastery Transcript", "Mastery Transcript"), sub: L("MTC，現為 Mastery.org", "MTC, now Mastery.org") },
            { label: L("1EdTech CLR 2.0", "1EdTech CLR 2.0"), sub: L("Comprehensive Learner Record", "Comprehensive Learner Record") },
            { label: L("Open Badges 3.0／VC", "Open Badges 3.0 / VC"), sub: L("W3C Verifiable Credentials", "W3C Verifiable Credentials") },
            { label: L("Credly 類型的 badge", "Credly-type badges"), sub: L("Credly by Pearson", "Credly by Pearson") },
            { label: L("Coalition Locker", "Coalition Locker"), sub: L("Coalition 申請系統內的作品庫", "Archive inside the Coalition application") }
          ],
          cells: [
            [
              { v: "no", t: L("只有會員高中能簽發；competencies 由會員學校定義並認證。", "Member high schools only; they define and certify the competencies."), src: ["C1-S4"] },
              { v: "partial", t: L("只有 UC 表態：無 GPA 的 mastery transcript 只能走 admission by exception。MTC 的「MT Ready」名單（30 校全列）是供應商自己的說法。", "Only UC states a position: GPA-less mastery transcripts go to admission by exception only. MTC's \"MT Ready\" list, which flags all 30, is the vendor's own claim."), src: ["C1-S7", "C1-S2"] },
              { v: "ns", t: L("查過的頁面沒有說明；以單一連結寄送給閱讀者。", "Not described on the pages read; the reader opens it from a single link."), src: ["C1-S3"] },
              { v: "yes", t: L("上層供快速瀏覽，證據在下一層。", "A scannable top layer, with evidence one click down."), src: ["C1-S3"] },
              { v: "yes", t: L("2026 年 7 月起由 Legend.org 以 Mastery.org 營運；約兩年內第二次換東家。", "Run as Mastery.org by Legend.org since July 2026; the second change of owner in about two years."), src: ["C1-S6", "C1-S5"] }
            ],
            [
              { v: "ns", t: L("查過的來源沒有說明誰可以簽發。", "The sources read do not say who may issue one."), src: ["C1-S9"] },
              { v: "ns", t: L("30 校的招生頁都沒提到 CLR（sitemap 掃描，2026-11-07）。", "None of the 30 schools' admissions pages mentions CLR (sitemap scan, 2026-11-07)."), src: ["C1-S9"] },
              { v: "yes", t: L("以 W3C Verifiable Credentials 建構，經密碼學簽章、不可竄改。", "Built as W3C Verifiable Credentials; cryptographically signed and tamper-evident."), src: ["C1-S9"] },
              { v: "ns", t: L("發布文章沒有說明。", "Not described in the release article."), src: ["C1-S9"] },
              { v: "yes", t: L("CLR 2.0 於 2025-03-04 公開。", "CLR 2.0 public since 2025-03-04."), src: ["C1-S9"] }
            ],
            [
              { v: "yes", t: L("Issuer 可以是組織，也可以是個人；規格包含 self-assertion 用例。", "The issuer can be an organisation or an individual; the spec includes a self-assertion use case."), src: ["C1-S10"] },
              { v: "ns", t: L("30 校的頁面都沒提到 digital badge（sitemap 掃描，2026-11-07）。", "None of the 30 schools' pages mentions digital badges (sitemap scan, 2026-11-07)."), src: ["C1-S12"] },
              { v: "yes", t: L("遵循 W3C Verifiable Credentials Data Model 2.0（2025-05-15 成為 W3C Recommendation）。", "Follows the W3C Verifiable Credentials Data Model 2.0, a W3C Recommendation since 15 May 2025."), src: ["C1-S10", "C1-S11"] },
              { v: "yes", t: L("Evidence 定義為支持主張的資訊，例如指向學習者作品的 URL。", "Evidence is information supporting a claim, such as a URL to something the learner made."), src: ["C1-S10"] },
              { v: "yes", t: L("Final Release，目前文件版本日期 2026-06-29。", "Final Release; the current document is dated 2026-06-29."), src: ["C1-S10"] }
            ],
            [
              { v: "partial", t: L("發證者是認證、評量與訓練機構及雇主（頁面稱超過 3,700 個組織）。", "Issuers are certification, assessment and training providers and employers (the page reports more than 3,700)."), src: ["C1-S12"] },
              { v: "ns", t: L("30 校的頁面都沒提到 Credly（sitemap 掃描，2026-11-07）。", "None of the 30 schools' pages mentions Credly (sitemap scan, 2026-11-07)."), src: ["C1-S12"] },
              { v: "ns", t: L("頁面沒有說明驗證機制，也沒提到 Open Badges。", "The page describes no verification mechanism and does not mention Open Badges."), src: ["C1-S12"] },
              { v: "ns", t: L("頁面沒有說明。", "Not described on the page."), src: ["C1-S12"] },
              { v: "yes", t: L("以「Credly by Pearson」營運。", "Operating as \"Credly by Pearson\"."), src: ["C1-S12"] }
            ],
            [
              { v: "ns", t: L("學生自己上傳項目；沒有描述第三方簽發（第三方指南，2024）。", "Students uploaded their own items; no third-party issuer is described (secondary guide, 2024)."), src: ["C1-S17"] },
              { v: "ns", t: L("Coalition 現行官方頁沒有提到 Locker。", "The Coalition's current pages do not mention the Locker."), src: ["C1-S13", "C1-S14"] },
              { v: "ns", t: L("沒有說明。", "Not described."), src: ["C1-S17"] },
              { v: "partial", t: L("存放上傳的項目；大學只看得到學生附加到申請的那些（第三方指南）。", "Held uploaded items; colleges saw only those a student attached to an application (secondary guide)."), src: ["C1-S17"] },
              { v: "no", t: L("Coalition 2022 年宣布改用 Scoir，並已停用先前的技術平台。", "The Coalition announced its move to Scoir in 2022 and has discontinued its previous platform."), src: ["C1-S16", "C1-S13", "C1-S14"] }
            ]
          ]
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
        viz: {
          type: "flow", wide: true,
          title: L("七種證據、七個欄位，只有少數路徑接得到證明人", "Seven kinds of evidence, seven fields, and few paths that reach someone who can vouch"),
          subtitle: L("連線只畫下表與研究筆記有出處的對應。欄位右側沒有連線，表示該欄位本身沒有指定證明人。虛線：學校接受 Other Recommender 那個類型才行。", "Lines show only pairings that the table below and the research note give a source for. A field with no line on its right names no verifier of its own. Dashed: only where the college accepts that Other Recommender type."),
          columns: [{ label: L("證據", "Evidence") }, { label: L("欄位", "Field") }, { label: L("誰能證明", "Who can vouch") }],
          nodes: [
            { id: "lab", col: 0, tone: "system", label: L("有時間戳的實驗時數", "Timestamped lab hours") },
            { id: "cert", col: 0, tone: "system", label: L("技能認證（分數、等級）", "Skill certifications (score, level)") },
            { id: "contrib", col: 0, tone: "system", label: L("公開貢獻紀錄（commit、wiki）", "Public contribution record (commits, wiki)") },
            { id: "prepost", col: 0, tone: "system", label: L("前測／後測差異", "Pre/post test deltas") },
            { id: "repl", col: 0, tone: "system", label: L("重現實驗紀錄", "Replication records") },
            { id: "oral", col: 0, tone: "system", label: L("口頭答辯紀錄（錄影問答）", "Oral-defence records (recorded Q&A)") },
            { id: "pub", col: 0, tone: "system", label: L("論文發表", "Publications") },
            { id: "act", col: 1, tone: "container", label: L("Common App Activities（150 字元）", "Common App Activities (150 chars)"), sub: L("Position 50、Organization 100、Description 150 字元，最多 10 項。", "Position 50, Organization 100, Description 150 characters; up to 10 entries."), src: ["C1-S33", "C1-S34"] },
            { id: "honors", col: 1, tone: "container", label: L("Common App Honors", "Common App Honors"), sub: L("最多 5 項：名稱、年級、層級。", "Up to 5: title, grade level, recognition level."), src: ["C1-S34"] },
            { id: "addl", col: 1, tone: "container", label: L("Additional information（300 字）", "Additional information (300 words)"), sub: L("Common App 指向此處補充活動細節。", "Common App points here for more activity detail."), src: ["C1-S33", "C1-S50", "A1-S6", "A1-S12"] },
            { id: "oe", col: 1, tone: "container", label: L("Other Recommender 推薦信", "Other Recommender letter"), sub: L("類型含 employer、college access counselor、other；各校自定是否接受。", "Types include employer, college access counselor, other; each college sets its own acceptance."), src: ["C1-S35", "C1-S36"] },
            { id: "maker", col: 1, tone: "container", label: L("MIT Maker Portfolio", "MIT Maker Portfolio"), sub: L("SlideRoom，US$10；最多 25 個媒體檔；程式專案需附 codebase 與 demo。", "SlideRoom, US$10; up to 25 media items; code projects need the codebase and a working demo."), src: ["C1-S32"] },
            { id: "portal", col: 1, tone: "container", label: L("SlideRoom／學校入口（MIT Research Supplement、Caltech 上傳）", "SlideRoom / college portal (MIT Research Supplement, Caltech uploads)"), src: ["C1-S32", "C1-S29", "C1-S30"] },
            { id: "ucaa", col: 1, tone: "container", label: L("UC Activities & Awards", "UC Activities & Awards"), sub: L("最多 20 項、6 類；UC 要求內容可由獨立第三方驗證，但沒有指定是誰。", "Up to 20 entries in 6 categories; UC requires entries to be verifiable by an independent party but names no one."), src: ["C1-S39", "C1-S40", "C1-S41"] },
            { id: "counselor", col: 2, tone: "person", label: L("學校輔導老師", "School counselor"), sub: L("從整個畢業班的角度寫，包括獎項。", "Writes from the view of the whole graduating class, including awards."), src: ["C1-S37"] },
            { id: "mentor", col: 2, tone: "person", label: L("研究 mentor／校外教授", "Research mentor / outside professor"), src: ["C1-S32", "C1-S29"] },
            { id: "judges", col: 2, tone: "person", label: L("競賽評審", "Competition judges"), src: ["C1-S43"] },
            { id: "journal", col: 2, tone: "person", label: L("期刊", "Journal"), sub: L("審的是稿件；判定作者資格不是期刊編輯的職責。", "Vouches for the manuscript; deciding authorship is not the editors\' role."), src: ["C1-S47", "C1-S48"] },
            { id: "organiser", col: 2, tone: "person", label: L("課程或競賽主辦方", "Programme or competition organiser"), src: ["C1-S35", "C1-S36", "C1-S42"] }
          ],
          links: [
            { from: "lab", to: "act", src: ["C1-S33", "C1-S34"] },
            { from: "lab", to: "portal", label: L("MIT Research Supplement；Caltech 研究上傳", "MIT Research Supplement; Caltech research upload"), src: ["C1-S32", "C1-S29"] },
            { from: "cert", to: "honors", src: ["C1-S34"] },
            { from: "cert", to: "ucaa", label: L("含「Award or honor」類", "Includes the \"Award or honor\" category"), src: ["C1-S39", "C1-S40"] },
            { from: "contrib", to: "addl", src: ["C1-S33", "C1-S50"] },
            { from: "contrib", to: "maker", src: ["C1-S32"] },
            { from: "prepost", to: "portal", label: L("Caltech portfolio（選填）", "Caltech portfolio (optional)"), src: ["C1-S30"] },
            { from: "repl", to: "oe", src: ["C1-S35", "C1-S36"] },
            { from: "oral", to: "portal", label: L("Caltech portfolio 接受影片", "Caltech portfolio accepts video"), src: ["C1-S30"] },
            { from: "pub", to: "portal", label: L("MIT abstract／poster；Caltech 偏好全文", "MIT abstract/poster; Caltech prefers the full paper"), src: ["C1-S32", "C1-S29"] },
            { from: "act", to: "mentor", label: L("指導的成人；ISEF Form 2C 由指導成人填寫，是現成範本", "The supervising adult; ISEF Form 2C, filled by that adult, is an existing template"), src: ["C1-S45"] },
            { from: "honors", to: "counselor", label: L("輔導老師信從全班角度提供脈絡，包括獎項", "The counselor letter gives class-wide context, including awards"), src: ["C1-S37"] },
            { from: "addl", to: "organiser", label: L("團隊競賽：截止時凍結的公開 Wiki 與 Attributions Form", "Team competition: the public Wiki frozen at the deadline and the Attributions Form"), src: ["C1-S42", "C1-S43"] },
            { from: "oe", to: "mentor", dashed: true, label: L("寫信的人；學校接受那個類型才行", "The letter writer; only where the college accepts the type"), src: ["C1-S35", "C1-S36"] },
            { from: "oe", to: "organiser", dashed: true, label: L("主辦方可用 Other Recommender 身分寫信", "An organiser may write as an Other Recommender"), src: ["C1-S35", "C1-S36"] },
            { from: "portal", to: "mentor", label: L("MIT：mentor 信在 SlideRoom 內提交；Caltech：研究場所的信須談具體貢獻", "MIT: mentor letter submitted inside SlideRoom; Caltech: research-site letter on specific contributions"), src: ["C1-S32", "C1-S29"] },
            { from: "portal", to: "judges", label: L("錄影的評審場次", "A recorded judging session"), src: ["C1-S43", "C1-S30"] },
            { from: "portal", to: "journal", label: L("期刊審稿件，不審作者份量", "The journal vouches for the manuscript, not the student\'s share"), src: ["C1-S47", "C1-S48"] }
          ],
          legend: [
            { label: L("有出處的對應", "Sourced pairing"), shape: "line", color: "#b2b7bf" },
            { label: L("學校接受才行", "Only if the college accepts it"), shape: "dash" }
          ]
        },
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
        viz: {
          type: "waffle", field: "aiPolicy",
          title: { zh: "30 校中 17 校在官方頁面寫了 AI 使用說明，4 校沒有，9 校只有次級來源或未讀到", en: "17 of the 30 schools state an AI policy on their own pages, 4 do not, and 9 rest on secondary reports or were not read" },
          subtitle: { zh: "每一格是一所學校；停在格子上看學校與來源。虛線格代表官方頁面沒讀到明確說法。", en: "Each square is one school; hover a square for the school and its source. Dashed squares mean no clear statement was read on an official page." }
        },
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
