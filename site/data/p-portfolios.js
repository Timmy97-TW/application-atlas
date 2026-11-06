// Page: portfolios. Built from research/2026-11-07_portal-taxonomy_v1.md (B1),
// research/2026-11-07_supplementary-materials-matrix_v1.md (B2, B4) and
// research/2026-11-07_engineering-portfolios_v1.md (B3). Every src id exists in data/sources.js.
// Also sets window.ATLAS.matrix (30 schools x 5 materials), counted by scripts/build-log.js.
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function s(zh, en) { return { zh: zh, en: en }; }
  function f(zh, en, src) { return { t: { zh: zh, en: en }, tag: "f", src: src }; }
  function inf(zh, en, src) { return { t: { zh: zh, en: en }, tag: "i", src: src }; }
  function asm(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "a" }; if (src) o.src = src; return o; }
  function ns(src) { return { state: "not-stated", checked: "2026-11-07", src: src }; }
  function blocked(why, src) {
    return f(
      "官方頁面拒絕自動讀取（2026-11-07，" + why + "），未能查核；待人工以瀏覽器確認。這是工具限制，不代表學校沒有政策。",
      "The official page refused automated reading on 2026-11-07 (" + why + "). Not verified; needs a manual browser check. This is a tool failure, not a finding about the school.",
      src
    );
  }
  function five(c) { return [c, c, c, c, c]; }

  // ---- 30 schools x 5 materials: arts / maker / research / video / links ----
  var R = [];
  function row(school, filter, cells) { R.push({ school: school, filter: filter, cells: cells }); }

  row("MIT", "arts maker research video", [
    f("接受：Music & Theater Arts 與 Visual Art & Architecture 各可交一份。SlideRoom，每份 $10。音樂 2 段錄音合計 10 分鐘；視覺藝術最多 10 張圖。截止同申請（EA 11/1、RA 1/4）。由 MIT 相關科系的專業教職員審閱。原話：“Creative portfolios are truly optional”",
      "Yes: one Music & Theater Arts and one Visual Art & Architecture portfolio allowed. SlideRoom, $10 each. Music: 2 recordings, 10 min combined; visual art: up to 10 images. Due with the application (EA Nov 1, RA Jan 4). Reviewed by MIT faculty and staff in the field. “Creative portfolios are truly optional”",
      ["B2-S1", "B2-S2"]),
    f("接受：Maker Portfolio。SlideRoom，$10。最多 25 個附件；整份影片合計 2 分鐘；程式專案須附 codebase 與可運作的 demo。截止同申請。審閱者：“a board of MIT faculty and alumni with prolific maker experience”",
      "Yes: Maker Portfolio. SlideRoom, $10. Up to 25 media attachments; 2 min of video for the whole portfolio; code projects need the codebase and a working demo. Due with the application. Reviewed by “a board of MIT faculty and alumni with prolific maker experience”",
      ["B2-S1"]),
    f("接受：Research Supplement。SlideRoom。每人一份、一個專題；簡短問卷；有摘要或海報 PDF 就附上；已發表者附 citation；由指導者透過 SlideRoom 寫推薦。截止同申請。研究專屬審閱者未載明。",
      "Yes: Research Supplement. SlideRoom. One per applicant, one project; short questionnaire; abstract or poster PDF if available; citation if published; mentor recommendation requested through SlideRoom. Due with the application. Research-specific reviewer not stated.",
      ["B2-S1"]),
    f("只在作品集內：Maker 影片整份合計 2 分鐘，有活動零件的專案必須附影片。原話：“There is no bonus for submitting a video reel”",
      "Inside portfolios only: Maker video is capped at 2 min for the whole portfolio and is required for projects with moving parts. “There is no bonus for submitting a video reel”",
      ["B2-S1"]),
    ns(["B2-S1", "B2-S3"])
  ]);

  row("Caltech", "arts maker research video links", [
    f("接受：一份作品集可放 STEM 與非 STEM 作品。送出申請後寄來的 applicant portal（Beaver Breakroom）。影音 ≤5 GB、文件 ≤75 頁，不限件數。補件截止 2026-11-06（REA）／2027-01-10（RD）。原話：“A portfolio is not a required part of your application”",
      "Yes: one portfolio for STEM and non-STEM work. Applicant portal (Beaver Breakroom), link sent after submission. Media ≤5 GB, documents ≤75 pages, no item cap. Materials due Nov 6, 2026 (REA) / Jan 10, 2027 (RD). “A portfolio is not a required part of your application”",
      ["B2-S6", "B2-S7", "B3-S10"]),
    f("接受：同一份作品集，例如程式與機器人專題、電路圖、工程筆記、工作坊影片導覽；團隊專題須說明個人負責的部分。管道、上限、截止同左。",
      "Yes: the same portfolio, e.g. coding and robotics projects, schematics, notebooks, workshop video tours; group projects must describe the applicant's own part. Channel, limits and deadlines as for arts.",
      ["B2-S6", "B3-S11"]),
    f("接受：Research Papers and Publications。限大學或研究機構實驗室的研究，且論文已發表、已投稿或撰寫中；全文“strongly preferred”，否則交摘要或海報；需指導者推薦信與說明表。portal，截止同左。審閱者未載明。",
      "Yes: Research Papers and Publications. Only for work in a university or research-affiliated lab with a paper published, submitted or in preparation; full paper “strongly preferred”, else abstract or poster; supervisor letter and description form. Portal; deadlines as above. Reviewer not stated.",
      ["B2-S5", "B2-S7", "B3-S12"]),
    f("接受：作為作品集媒體，≤5 GB；長度上限未載明。",
      "Yes, as portfolio media, ≤5 GB; no length limit stated.",
      ["B2-S6"]),
    f("接受：作品集明列 “Links and URLs” 為可用格式。是否每個連結都會被點開，頁面未說明。",
      "Yes: the portfolio lists “Links and URLs” as an accepted format. Whether every link is opened is not stated.",
      ["B2-S6", "B3-S11"])
  ]);

  row("Stanford", "arts video", [
    f("接受：Optional Arts Portfolio（Art Practice、Dance、Music、Theater and Performance Studies，擇一）。只用 Stanford 自己的 portal，不收郵寄、email 或其他平台。Art Practice 恰好 10 件；Music 建議 ≤10 分鐘；Dance ≤7 分鐘。REA 10/20、RD 12/10，Common App 須提早在 10/15／12/5 送出。由招生辦公室與藝術系教職員審閱。",
      "Yes: Optional Arts Portfolio (one of Art Practice, Dance, Music, Theater and Performance Studies). Stanford's own portal only; no mail, email or other platform. Art Practice exactly 10 items; Music ≤10 min suggested; Dance ≤7 min. REA Oct 20, RD Dec 10, with the Common App filed early, by Oct 15 / Dec 5. Reviewed by the admission office with fine-arts faculty.",
      ["B2-S8", "B2-S9", "B2-S10", "B2-S11", "B3-S22"]),
    f("不收：Stanford 寫明不接受補充材料；工程作品不在四個藝術領域內。",
      "No: Stanford states it accepts no supplementary material, and engineering work is not one of the four arts areas.",
      ["B3-S21", "B3-S20"]),
    f("不收：Stanford 寫明不會把研究論文加入申請檔案。",
      "No: Stanford states it does not add research papers to the file.",
      ["B3-S21"]),
    f("只在藝術作品集內。", "Inside the arts portfolio only.", ["B2-S8"]),
    f("Art Practice：“Links and URLs will not be reviewed.”；更新表單可打連結，但 “no guarantee that readers will review these links”。",
      "Art Practice: “Links and URLs will not be reviewed.” The update form takes typed links, with “no guarantee that readers will review these links”.",
      ["B2-S9", "B3-S21"])
  ]);

  row("Harvard", "arts research video links", [
    f("接受：美術、舞蹈／編舞、音樂演奏／作曲。SlideRoom（harvard.slideroom.com），小額費用可減免。件數上限在 SlideRoom 內，本次未讀到。無獨立截止，請“as soon as possible”送出。由委員會決定是否請教職員評估。原話：“These materials are entirely optional.”",
      "Yes: art, dance/choreography, musical performance/composition. SlideRoom (harvard.slideroom.com), small waivable fee. Item limits sit inside SlideRoom and were not read. No separate deadline; submit “as soon as possible”. The committee may ask faculty to evaluate. “These materials are entirely optional.”",
      ["B2-S14", "B2-S13"]),
    f("未設 maker 類別；補充文件說作品可展現“in academics or in one or more of the arts”的能力。",
      "No maker category; the supplement says portfolios can show talent “in academics or in one or more of the arts”.",
      ["B2-S13"]),
    f("接受：Applicant Portal 的「Upload Materials」。需列出合作者、指導者與本人貢獻。審閱者未載明。原話：“supplementary materials are neither expected nor required.”",
      "Yes: Applicant Portal, “Upload Materials”. List collaborators, the sponsor or mentor, and your own contribution. Reviewer not stated. “supplementary materials are neither expected nor required.”",
      ["B2-S14", "B2-S13"]),
    f("接受：經 SlideRoom；若 SlideRoom 出問題，改在 portal 上傳一份列有 YouTube 連結的文件。",
      "Yes, through SlideRoom; if SlideRoom fails, upload a document of YouTube links through the portal.",
      ["B2-S14"]),
    f("只有一個欄位：補充文件請申請者為所列榮譽獎項附連結，“if available”。",
      "One field only: the supplement asks for a link to each listed honor or award, “if available”.",
      ["B2-S13"])
  ]);

  row("Yale", "arts research video", [
    f("接受：音樂、視覺藝術、電影、舞蹈。Yale Admissions Status Portal 的 Arts Portfolio Submission Tool 加 Arts Supplement Questionnaire。視覺藝術 5–8 件；舞蹈 ≤15 分鐘。截止 QuestBridge 11/1、EA 11/8、RD 1/9。“Selected portfolios are reviewed by Yale School of Art faculty.” 另見：“Most successful Yale applicants submit only the required application materials.”",
      "Yes: music, visual art, film, dance. Yale Admissions Status Portal: Arts Portfolio Submission Tool plus Arts Supplement Questionnaire. Visual art 5–8 pieces; dance ≤15 min. Due QuestBridge Nov 1, EA Nov 8, RD Jan 9. “Selected portfolios are reviewed by Yale School of Art faculty.” Also: “Most successful Yale applicants submit only the required application materials.”",
      ["B2-S15", "B1-P10"]),
    ns(["B2-S15"]),
    f("接受：STEM Research Supplement 表單，Status Portal。論文、摘要或海報；系統以電子方式邀請指導者寫信。截止同左。原話：“Full research papers are generally the most helpful.”",
      "Yes: STEM Research Supplement form, Status Portal. Paper, abstract or poster; the mentor is invited electronically to write a letter. Deadlines as above. “Full research papers are generally the most helpful.”",
      ["B2-S15"]),
    f("在舞蹈、音樂、電影作品集內；舞蹈 ≤15 分鐘。“Selected videos are reviewed by Yale faculty.”（舞蹈）",
      "Inside dance, music and film portfolios; dance ≤15 min. “Selected videos are reviewed by Yale faculty.” (dance)",
      ["B2-S15"]),
    ns(["B2-S15"])
  ]);

  row("Princeton", "", five(blocked("certificate rejected", ["B2-S16"])));
  row("Columbia", "", five(blocked("HTTP 403", ["B2-S18"])));

  row("UPenn", "arts video links", [
    f("只限 VIC（Visual and Interactive Computing）申請者，建議交。平台未載明。“5-12 pieces, or a maximum of 5 minutes of video”；文件 ≤75 頁、影音 ≤5 GB。原話：“Most students who apply to Penn do not submit any supplemental materials.”",
      "VIC (Visual and Interactive Computing) applicants only; recommended. Platform not stated. “5-12 pieces, or a maximum of 5 minutes of video”; documents ≤75 pages, media ≤5 GB. “Most students who apply to Penn do not submit any supplemental materials.”",
      ["B2-S19", "B2-S21"]),
    ns(["B2-S19"]),
    f("未設研究類別；請寫在“the activities section or additional information sections”，簡短更新走 Penn Portal。",
      "No research category; use “the activities section or additional information sections”; brief updates go through the Penn Portal.",
      ["B2-S19"]),
    f("只在 VIC 作品集內。", "VIC portfolio only.", ["B2-S19"]),
    f("部分接受：作品集格式有“Upload Link or URL”，但不處理 Google Docs、Box 或檔案儲存空間的連結。原話：“we cannot guarantee that additional materials will be reviewed”",
      "Partly: “Upload Link or URL” is a portfolio format, but links to Google Docs, Box or file-storage systems are not processed. “we cannot guarantee that additional materials will be reviewed”",
      ["B2-S19", "B2-S20"])
  ]);

  row("Brown", "arts research video links", [
    f("只收音樂與視覺藝術。SlideRoom（brown.slideroom.com），由 Common App 連過去。件數上限在另一頁，本次未讀。ED 11/4、RD 1/7。舞蹈與戲劇：“auditions and portfolios are neither required nor reviewed”",
      "Music and visual art only. SlideRoom (brown.slideroom.com), linked from the Common App. Item limits are on separate pages not read. ED Nov 4, RD Jan 7. Dance and theatre: “auditions and portfolios are neither required nor reviewed”",
      ["B2-S22"]),
    ns(["B2-S22"]),
    f("接受：Brown Applicant Portal 的「Academic Paper/Research」類別；論文或摘要，附簡短背景說明。原話：“Applicants are neither required nor expected to provide additional materials.”",
      "Yes: Brown Applicant Portal, category “Academic Paper/Research”; paper or abstract with a short context note. “Applicants are neither required nor expected to provide additional materials.”",
      ["B2-S22"]),
    f("接受：Video Introduction ≤90 秒，Applicant Portal（或付費的 Glimpse／InitialView）。截止 11/4／1/7。“Videos will not be evaluated for production quality.”",
      "Yes: Video Introduction ≤90 s, Applicant Portal (or paid Glimpse / InitialView). Due Nov 4 / Jan 7. “Videos will not be evaluated for production quality.”",
      ["B2-S23"]),
    f("接受：YouTube 或個人線上頁面的連結，放在 Common App 的 Brown University Questions 區。",
      "Yes: a YouTube or online-presence link, in the Brown University Questions section of the Common App.",
      ["B2-S22"])
  ]);

  row("Cornell", "arts video links", [
    f("AAP（Architecture、Fine Arts）與 Human Ecology 設計類主修「必交」，各用學院自己的 SlideRoom；ED 11/1、RD 1/2；AAP 由教職員審閱；“We will not accept any portfolios submitted after these deadlines.” 音樂錄音選交：Applicant Portal，2–3 段 ≤10 分鐘，ED 2026-11-06／RD 2027-01-07，由音樂系審閱。",
      "Required for AAP (Architecture, Fine Arts) and Human Ecology design majors, each through its college's SlideRoom; ED Nov 1, RD Jan 2; AAP reviewed by faculty. “We will not accept any portfolios submitted after these deadlines.” Optional music recordings: Applicant Portal, 2–3 selections ≤10 min, ED Nov 6, 2026 / RD Jan 7, 2027, reviewed by the Department of Music.",
      ["B2-S24", "B2-S25", "B2-S27"]),
    f("未設工程作品集；Duffield Engineering 要求 6 題補充短文（2×200 字、4×100 字）。",
      "No engineering portfolio is named; Duffield Engineering requires six supplemental essays (2×200 and 4×100 words).",
      ["B2-S26", "B3-S30"]),
    f("未設研究類別；Applicant Portal 可“upload supplemental materials to your application.”",
      "No research category; the Applicant Portal lets applicants “upload supplemental materials to your application.”",
      ["B2-S28"]),
    f("只限音樂錄音（偏好 YouTube URL）。", "Music recordings only (YouTube URLs preferred).", ["B2-S27"]),
    f("只在音樂表單內；其他情況未載明。", "Inside the music form only; otherwise not stated.", ["B2-S27", "B2-S28"])
  ]);

  row("Georgetown", "", five(ns(["B2-S29"])));

  row("Carnegie Mellon", "arts video links", [
    f("只限 College of Fine Arts，且必交：SlideRoom（建築 10 件；藝術 10–20 件；設計 10–19 張投影片，含 90 秒影片）與 Acceptd（戲劇、音樂）。ED 11/2；RD 申請 1/4、作品集 1/11；戲劇／音樂 12/1。由該系教職員審閱。",
      "College of Fine Arts only, and required: SlideRoom (Architecture 10 works; Art 10–20; Design 10–19 slides incl. a 90 s video) and Acceptd (Drama, Music). ED Nov 2; RD application Jan 4, portfolio Jan 11; Drama/Music Dec 1. Reviewed by faculty in the program.",
      ["B2-S31"]),
    f("一般申請者不收：“doesn't accept supplemental submissions, such as resumes, artwork, portfolios, recording or websites”",
      "Not for general applicants: “doesn't accept supplemental submissions, such as resumes, artwork, portfolios, recording or websites”",
      ["B2-S30"]),
    f("不收上傳；工學院與 SCS 申請者可用 VIVA（InitialView）錄影介紹研究或專題。",
      "No upload; College of Engineering and SCS applicants may present a research or special project through a VIVA (InitialView) video.",
      ["B2-S30"]),
    f("VIVA（只限工學院與 SCS）；CFA 作品集內的影片。", "VIVA (Engineering and SCS only); media inside CFA portfolios.", ["B2-S30", "B2-S31"]),
    f("只有 CMU 題目裡的 Schoolhouse.world 作品集 URL 欄位；其他網站不收。",
      "Only a Schoolhouse.world portfolio URL field in the CMU questions; other websites are not accepted.",
      ["B2-S30"])
  ]);

  row("Georgia Tech", "", [ns(["B2-S32", "B2-S33"]), ns(["B2-S32", "B2-S33", "B3-S24"]), ns(["B2-S32", "B2-S33"]), ns(["B2-S32", "B2-S33"]), ns(["B2-S32", "B2-S33"])]);

  row("Purdue", "", five(f(
    "B2 查的頁面拒絕自動讀取（2026-11-07，certificate rejected）；B3 讀到的 first-year 頁面只有截止日，未提作品集或連結。待人工查核。",
    "The page checked for B2 refused automated reading on 2026-11-07 (certificate rejected); the first-year page read for B3 gives deadlines only and says nothing on portfolios or links. Needs a manual check.",
    ["B2-S34", "B3-S34"])));

  row("Michigan", "", five(blocked("HTTP 403", ["B2-S35", "B3-S44"])));

  row("UIUC", "arts", [
    f("只在有要求時：“An audition, portfolio, or interview may be required for Fine and Applied Arts applicants.” 管道、上限、截止未載明。",
      "Only where required: “An audition, portfolio, or interview may be required for Fine and Applied Arts applicants.” Channel, limits and deadlines not stated.",
      ["B2-S36"])
  ].concat(five(f(
    "UIUC 寫明不收推薦信或“other unsolicited materials”，並在審閱前移除；頁面沒有為此類材料另設管道。",
    "UIUC states it does not accept recommendation letters or “other unsolicited materials” and removes them before review; no channel for this material is named.",
    ["B2-S36", "B3-S35"])).slice(0, 4)));

  row("Olin", "arts maker links", [
    f("歡迎；器樂作品集可交，但不能用 email 寄，送出申請後寫信到 info@olin.edu 索取上傳方式。原話：“we cannot promise that all optional materials will get reviewed”",
      "Welcome; instrumental music portfolios accepted but not by email; after submitting, write to info@olin.edu for upload instructions. “we cannot promise that all optional materials will get reviewed”",
      ["B2-S38"]),
    f("歡迎“art or engineering portfolio”：放在網站或部落格，於 Additional Information 附連結，或 email 到 info@olin.edu。申請截止 2026-12-15。同樣不保證審閱。",
      "Welcome (“art or engineering portfolio”): host it on a website or blog and link it in Additional Information, or email info@olin.edu. Application due Dec 15, 2026. Review is not promised.",
      ["B2-S37", "B2-S38", "B3-S16"]),
    ns(["B2-S38"]),
    f("“We are unable to receive videos via email.”；其他管道未載明。", "“We are unable to receive videos via email.” Other channels not stated.", ["B2-S38"]),
    f("接受：放在 Additional Information（內容控制在 1–2 頁）。", "Yes: in Additional Information (keep it to one or two pages).", ["B2-S38"])
  ]);

  row("Harvey Mudd", "maker research", [
    f("不收：“does not accept separate submissions of music or artwork”，請列在 Activities。",
      "No: “does not accept separate submissions of music or artwork”; list it in Activities.",
      ["B2-S40"]),
    f("可附“brief profile of projects”，常見形式是照片或簡短說明，用 Common App 的附加資訊上傳選項。",
      "A “brief profile of projects”, often photos or brief descriptions, through the Common App additional-information upload option.",
      ["B3-S18"]),
    f("只收摘要，經 Common App 附加資訊上傳：“we ask that students do not upload entire research papers”；不交額外材料也不會吃虧。",
      "Abstract only, through the Common App additional-information upload: “we ask that students do not upload entire research papers”. No disadvantage if nothing extra is sent.",
      ["B2-S40"]),
    ns(["B2-S40"]),
    ns(["B2-S40"])
  ]);

  row("Johns Hopkins", "arts research", [
    f("可作為選交材料（以藝術作品照片為例）；applicant portal，不收郵寄紙本。上限、截止、審閱者未載明。材料應“contribute in a substantive way or provide new information”",
      "Yes, as optional material (pictures of art given as an example); applicant portal, no hard copy by mail. Limits, deadline and reviewer not stated. Materials should “contribute in a substantive way or provide new information”",
      ["B2-S42"]),
    ns(["B2-S41", "B2-S42"]),
    f("接受（以 research abstract 為例）；applicant portal，送出申請後也可上傳。",
      "Yes (research abstracts given as an example); applicant portal, also after submission.",
      ["B2-S42", "B1-P22"]),
    ns(["B2-S41", "B2-S42"]),
    ns(["B2-S41", "B2-S42"])
  ]);

  row("Duke", "arts video", [
    f("接受一份藝術補充（電影、舞蹈、音樂、攝影、戲劇、視覺藝術）。SlideRoom（duke.slideroom.com），Forms 可附履歷／創作自述。ED 11/2、RD 1/4。由該科系一位教職員審閱。看的是“level of commitment that goes beyond typical high school experiences”",
      "Yes, one arts supplement (cinematic arts, dance, music, photography, theater, visual arts). SlideRoom (duke.slideroom.com), optional résumé or artist statement in Forms. ED Nov 2, RD Jan 4. Reviewed by a faculty member in that program. Looks for a “level of commitment that goes beyond typical high school experiences”",
      ["B2-S43"]),
    f("不收：“Duke does not accept resumes, research abstracts, and media files.”", "No: “Duke does not accept resumes, research abstracts, and media files.”", ["B2-S43"]),
    f("不收（同一句話點名 research abstracts）。", "No (the same sentence names research abstracts).", ["B2-S43"]),
    f("Glimpse 60–90 秒，只限美國高中學生；ED 11/9、RD 1/11。", "Glimpse, 60–90 s, US high-school students only; ED Nov 9, RD Jan 11.", ["B2-S43"]),
    f("未設連結欄位；額外資訊請放 Additional Information。", "No link field stated; extra information goes in Additional Information.", ["B2-S43", "B1-P17"])
  ]);

  row("Northwestern", "", five(blocked("certificate rejected", ["B2-S44"])));

  row("Rice", "arts video links", [
    f("Architecture 作品集必交（PDF ≤15 MB，≤10 頁加封面）；Art 作品集選交（≤10 個檔案、每個 10 MB，動態影像合計 ≤5 分鐘，不收 PDF）。Rice Admission Student Portal。截止跟申請（ED I 11/1；RD／ED II 1/4）；Shepherd 音樂 12/1。“PDF documents should not be submitted and will not be reviewed”（Art）",
      "Architecture portfolio required (PDF ≤15 MB, ≤10 pages plus title page); Art portfolio optional (≤10 files at 10 MB each, moving images ≤5 min total, no PDFs). Rice Admission Student Portal. Follows the application deadline (ED I Nov 1; RD/ED II Jan 4); Shepherd music Dec 1. Art: “PDF documents should not be submitted and will not be reviewed”",
      ["B2-S45"]),
    f("未設類別；其他材料可 email 到 riceapps@rice.edu。原話：“additional materials are not required or expected”",
      "No category; additional materials may be emailed to riceapps@rice.edu. “additional materials are not required or expected”",
      ["B2-S46"]),
    ns(["B2-S45", "B2-S46"]),
    f("Glimpse 60–90 秒（美國國內申請者），ED I 11/10、RD 1/12；“Glimpse videos are optional.”",
      "Glimpse, 60–90 s (domestic applicants), ED I Nov 10, RD Jan 12. “Glimpse videos are optional.”",
      ["B2-S45"]),
    f("只在 Art 作品集內放 YouTube／Vimeo URL；指向多件作品的網站連結“will not be reviewed”。",
      "YouTube/Vimeo URLs inside the Art portfolio only; links to websites of multiple works “will not be reviewed”.",
      ["B2-S45", "B1-P20"])
  ]);

  row("UC Berkeley", "", five(f(
    "不收：“we are unable to accept portfolios, senior-year grades, or other supplemental materials.”；寄來的東西不會被審閱。",
    "No: “we are unable to accept portfolios, senior-year grades, or other supplemental materials.” Unsolicited material is not reviewed.",
    ["B2-S47", "B2-S48"])));

  row("UCLA", "arts", [
    f("只限列出的主修，且必交，直接交給系所：Arts & Architecture 2026-12-15 或 2027-01-20；TFT 2026-12-07；Music 2026-12-04。管道寫在各系頁面，本次未讀。",
      "Required for listed majors only, sent “directly to the department”: Arts & Architecture Dec 15, 2026 or Jan 20, 2027; TFT Dec 7, 2026; Music Dec 4, 2026. The channel is named on department pages not read.",
      ["B2-S49"]),
    ns(["B2-S50"]), ns(["B2-S50"]), ns(["B2-S50"]), ns(["B2-S50"])
  ]);

  row("UC San Diego", "arts", [
    f("Music、Theatre & Dance、Visual Arts 主修選交。SlideRoom，須先完成 UC 申請。主修一份。2026-10-01 開放、12-08 截止。“reviewed by department faculty, who share evaluations with admissions”",
      "Optional for Music, Theatre & Dance and Visual Arts majors. SlideRoom, after the UC application. One portfolio for the primary major. Opens Oct 1, closes Dec 8, 2026. “reviewed by department faculty, who share evaluations with admissions”",
      ["B2-S51", "B2-S52"]),
    ns(["B2-S51"]), ns(["B2-S51"]), ns(["B2-S51"]), ns(["B2-S51"])
  ]);

  row("UT Austin", "", [
    f("“Certain majors may require specific items”；細節在各學院頁面，本頁未載明。", "“Certain majors may require specific items”; details are on college pages, not on this page.", ["B2-S53"]),
    f("沒有專屬管道；選交履歷（成就、活動、領導），Common App 上傳或 MyStatus，格式長度不限。補件 EA 10/22、一般 12/10。“The optional items below are NOT required for admission consideration.”",
      "No dedicated channel; an optional résumé (achievements, activities, leadership) through Common App upload or MyStatus, no set format or length. Materials due Oct 22 (EA) / Dec 10. “The optional items below are NOT required for admission consideration.”",
      ["B2-S53", "B2-S54"]),
    f("沒有專屬管道；同左，只有選交履歷。", "No dedicated channel; as for maker, the optional résumé only.", ["B2-S53", "B2-S54"]),
    ns(["B2-S53", "B2-S54"]),
    ns(["B2-S53", "B2-S54"])
  ]);

  row("University of Washington", "", five(f(
    "不收：請申請者不要寄“supplemental materials such as drawings, links to websites”。",
    "No: applicants are asked not to send “supplemental materials such as drawings, links to websites”.",
    ["B2-S55"])));

  row("Williams", "", five(blocked("HTTP 403", ["B2-S56"])));
  row("Amherst", "", five(blocked("HTTP 405", ["B2-S57"])));

  row("Swarthmore", "arts research video", [
    f("接受：創意寫作、舞蹈、音樂、戲劇、視覺藝術。Swarthmore portal，免費。送出申請後上傳（FED 11/15；WED／RD 1/4）。提到教職員審閱。原話：“we cannot guarantee all works will be evaluated”",
      "Yes: creative writing, dance, music, theater, visual arts. Swarthmore portal, free. Upload after applying (FED Nov 15; WED/RD Jan 4). Faculty review is referenced. “we cannot guarantee all works will be evaluated”",
      ["B2-S58"]),
    f("未設類別；VIVA（InitialView）可介紹“a paper, presentation, research project”。", "No category; VIVA (InitialView) can present “a paper, presentation, research project”.", ["B2-S58"]),
    f("接受：research abstracts，送出申請後經 portal 上傳。", "Yes: research abstracts, through the portal after submission.", ["B2-S58"]),
    f("接受：“All students have the option to submit a video response”，經 portal。", "Yes: “All students have the option to submit a video response”, through the portal.", ["B2-S58"]),
    ns(["B2-S58"])
  ]);

  window.ATLAS.matrix = {
    cols: ["arts", "maker", "research", "video", "links"],
    rows: R.map(function (r) { return { school: r.school, cells: r.cells }; })
  };

  window.ATLAS.pages["portfolios"] = {
    title: s("作品集與補充材料：30 校 × 5 種材料", "Portfolios and supplementary materials: 30 schools × 5 kinds of material"),
    judgment: s(
      "30 校中，明文設 maker／工程作品集類別的只有 MIT 與 Caltech，設研究管道的有 8 校；UC Berkeley、UW、UIUC 一律不收補充材料；另有 7 校網站拒絕自動讀取，格子留空待查。",
      "Of the 30 schools, only MIT and Caltech name a maker or engineering portfolio, and 8 name a research channel. UC Berkeley, UW and UIUC take no supplementary material at all. Seven schools' sites refused automated reading, so their cells are open."
    ),
    intro: s(
      "每一格都來自學校官方頁面，存取日 2026-11-07。格子裡的順序是：收不收、走哪個管道、上限、截止、誰審、學校自己怎麼說（引文 15 字以內）。頁面沒寫就標「未載明」，不以推測補上。引文是以自動擷取的文字抄錄，上線前應對照原頁再確認。「網站拒絕自動讀取」是工具限制，不是對該校政策的判斷。",
      "Every cell comes from the school's own pages, accessed 2026-11-07. Each cell reads: accepted or not, channel, limits, deadline, reviewer, and the school's own words (quotes of 15 words or fewer). Where a page is silent the cell says “not stated”; nothing is filled by guesswork. Quotes were captured from extracted page text and should be checked against the live page. “Refused automated reading” is a tool failure, not a finding about the school."
    ),
    sections: [
      {
        id: "matrix",
        h: s("30 校 × 5 種材料", "30 schools × 5 kinds of material"),
        judgment: s(
          "同一種材料，學校的指示可能相反：Yale 說研究全文“generally the most helpful”，Harvey Mudd 請學生不要上傳全文；Olin 請你在 Additional Information 放連結，UW 請你不要寄網站連結。",
          "Instructions for the same material can run in opposite directions: Yale calls full research papers “generally the most helpful”, Harvey Mudd asks students not to upload them; Olin invites a link in Additional Information, UW asks for no website links."
        ),
        intro: s(
          "篩選選單的意思是「該校接受這種材料」（含只限特定主修或只在作品集內）。色點標示來源類別，灰格為未載明。",
          "The filter menu means “the school accepts this material” (including major-specific or inside-a-portfolio cases). Dots mark the source class; grey cells are not stated."
        ),
        table: {
          filter: true,
          facets: [
            { v: "arts", label: s("收藝術作品集", "Takes an arts portfolio") },
            { v: "maker", label: s("收 maker／工程作品", "Takes maker / engineering work") },
            { v: "research", label: s("收研究論文或摘要", "Takes a research paper or abstract") },
            { v: "video", label: s("收影片", "Takes video") },
            { v: "links", label: s("有放連結的地方", "Has a place for links") }
          ],
          cols: [
            s("學校", "School"),
            s("藝術作品集", "Arts portfolio"),
            s("Maker／工程作品集", "Maker or engineering portfolio"),
            s("研究論文或摘要", "Research paper or abstract"),
            s("影片", "Video"),
            s("外部連結", "External links")
          ],
          rows: R.map(function (r) { return { cells: [r.school].concat(r.cells), filter: r.filter }; })
        }
      },

      {
        id: "portals",
        h: s("材料實際送到哪裡：五種管道", "Where material physically goes: five channels"),
        judgment: s(
          "沒有一個通用的「作品集入口」：SlideRoom、Acceptd、InitialView 與各校自己的 portal 並存，多數學校的 portal 要送出申請後才開；email 是例外，不是預設。",
          "There is no single portfolio portal: SlideRoom, Acceptd, InitialView and each school's own portal coexist, most school portals open only after submission, and email is the exception, not the default."
        ),
        subs: [
          {
            h: s("SlideRoom", "SlideRoom"),
            judgment: s("平台給的是預設檔案上限；件數、費用、截止都由各校自己設。", "The platform sets default file limits; item counts, fees and deadlines are set by each school."),
            items: [
              f("SlideRoom 的申請者說明中心在 Liaison 的網域下；support.slideroom.com 會 301 轉址過去。各校各自開一個子網域，例如 mitadmissions、harvard、brown、duke、cornellaap、cornellche。",
                "SlideRoom's applicant help center sits on a Liaison domain; support.slideroom.com 301-redirects there. Each school runs its own subdomain, e.g. mitadmissions, harvard, brown, duke, cornellaap, cornellche.",
                ["B1-P1", "B1-P7", "B1-P8", "B1-P12", "B1-P17"]),
              f("平台預設上限：圖片 <5 MB（超過 1280×1280 會縮圖）、影片 <250 MB、音訊 <30 MB、PDF <10 MB（除非學校另訂）。件數由學校決定，平台頁未給。",
                "Platform defaults: images <5 MB (resized above 1280×1280), video <250 MB, audio <30 MB, PDF <10 MB unless the school says otherwise. Item counts are set by the school; the platform page gives none.",
                ["B1-P2"]),
              f("「Link to Media」只收 YouTube、Vimeo、SoundCloud、Sketchfab 的單一公開項目，不收播放清單或合集；YouTube 影片須允許嵌入。這是說明頁唯一提到的 URL 選項。",
                "“Link to Media” takes a single public item from YouTube, Vimeo, SoundCloud or Sketchfab, not playlists or collections; YouTube videos must allow embedding. It is the only URL option the help page documents.",
                ["B1-P2"]),
              f("費用由學校設定：有費用時，按 Submit 後才出現付款頁。MIT 每份 $10；Harvard 為小額可減免；Swarthmore 用自家 portal，免費。",
                "Fees are a school setting: if one applies, the payment page appears after Submit. MIT charges $10 per portfolio; Harvard a small waivable fee; Swarthmore uses its own portal, free.",
                ["B1-P3", "B1-P7", "B1-P8", "B1-P23"]),
              f("送出後就不能再修改，要改須由學校退回（unsubmit）。",
                "After submission the applicant can no longer edit; changes need the school to unsubmit.",
                ["B1-P3"]),
              f("SlideRoom 說明頁沒寫申請者如何從 Common App 進入 SlideRoom；只有 Brown 明說連結放在 Common App 裡。UC San Diego 要先完成 UC 申請才拿得到 SlideRoom 需要的 ID。",
                "SlideRoom's pages do not say how applicants reach it from the Common App; only Brown states its SlideRoom is linked from the Common App. UC San Diego requires the UC application first, for the ID SlideRoom asks for.",
                ["B1-P4", "B1-P12", "B1-P30"]),
              inf("申請者應到各校自己的招生頁或該校的 Common App 區找 SlideRoom 連結，不要期待 Common App 有統一入口。",
                "Applicants should look for the SlideRoom link on each school's own page or in that school's Common App section, not expect a Common App-wide entry point.",
                ["B1-P4", "B1-P7", "B1-P12"])
            ]
          },
          {
            h: s("各校自己的 portal（多為送件後的狀態頁）", "School-run portals (mostly post-submission status portals)"),
            judgment: s("研究論文與更新多半走這條路，而且要先送出申請才拿得到入口。", "Research papers and updates mostly travel this way, and the portal opens only after the application is in."),
            table: {
              cols: [s("學校", "School"), s("portal 名稱（依學校用語）", "Portal (school's wording)"), s("收什麼", "What it takes")],
              rows: [
                ["Yale", "Yale Admissions Status Portal", f("Arts Portfolio Submission Tool、STEM Research Supplement 表單、更新表單。", "Arts Portfolio Submission Tool, STEM Research Supplement form, update form.", ["B1-P10"])],
                ["Harvard", "Applicant Portal · Upload Materials", f("文章、研究、創意寫作，須列合作者與本人貢獻；SlideRoom 失效時的 YouTube 連結文件。", "Articles, research, creative writing, with collaborators and own contribution; fallback document of YouTube links if SlideRoom fails.", ["B1-P8"])],
                ["Caltech", "applicant portal (Beaver Breakroom)", f("作品集與研究論文；影音 ≤5 GB，文件 ≤75 頁，不限件數；連結於送件後寄出。", "Portfolio and research papers; media ≤5 GB, documents ≤75 pages, no item cap; link sent after submission.", ["B1-P11", "B3-S10"])],
                ["Brown", "Brown Applicant Portal", f("「Academic Paper/Research」類別；Video Introduction ≤90 秒。", "“Academic Paper/Research” category; Video Introduction ≤90 s.", ["B1-P12"])],
                ["Stanford", "Stanford portal · Optional Arts Portfolio", f("只收藝術作品集；不收郵寄、email 或其他平台。", "Arts portfolios only; no mail, email or other platform.", ["B1-P13"])],
                ["Penn", "Penn Portal · Update My Application", f("簡短更新；VIC 作品集。", "Brief updates; VIC portfolio.", ["B1-P16"])],
                ["Cornell", "Applicant Portal", f("可上傳補充材料；音樂錄音。", "Supplemental-material upload; music recordings.", ["B1-P32", "B2-S27"])],
                ["Johns Hopkins", "applicant portal", f("選交材料，例如履歷、Schoolhouse PDF、研究摘要、藝術作品照片。", "Optional material, e.g. résumé, Schoolhouse PDF, research abstracts, art images.", ["B1-P22"])],
                ["Swarthmore", "Swarthmore portal", f("10 月中前開通；藝術作品、履歷、研究摘要、影片回應。", "Opens by mid-October; arts samples, résumés, research abstracts, video response.", ["B1-P23"])],
                ["Rice", "Rice Admission Student Portal", f("建築作品集（必交）、藝術作品集（選交）、The Box。", "Architecture portfolio (required), Art portfolio (optional), The Box.", ["B1-P20"])],
                ["Harvey Mudd", "HMC Applicant Hub", f("Application Update 表單；“do not submit attachments”。", "Application Update form; “do not submit attachments”.", ["B1-P19"])],
                ["UT Austin", "MyStatus", f("ApplyTexas 申請者的文件；履歷、推薦信。", "Documents for ApplyTexas applicants; résumé, letters.", ["B1-P24"])],
                ["Georgia Tech", "student admission portal", f("成績單、居留身分文件、考試成績；未提補充材料。", "Transcripts, residency documents, test scores; no supplemental materials stated.", ["B1-P33"])]
              ]
            },
            items: [
              f("UIUC 的 myIllini 可送變更表單，但活動、榮譽與作文欄位送出後就鎖住。", "UIUC's myIllini takes change forms, but activities, honors and writing are locked after submission.", ["B1-P31"]),
              inf("上表多個 portal 名稱是各校對自家招生系統的命名；各校頁面沒說是否為同一套系統，本頁不作此主張。", "Several names above are schools' own brandings of their admissions systems; the pages do not say which vendor runs each, and this page does not assert one.", ["B1-P10", "B1-P19", "B1-P24"])
            ]
          },
          {
            h: s("其他第三方平台", "Other third-party platforms"),
            judgment: s("同一所學校可能同時用兩個平台。", "One school may use two platforms at once."),
            items: [
              f("CMU 的戲劇與音樂學院用 Acceptd，另一份申請，12/1 截止；建築、藝術、設計用 SlideRoom。", "CMU Drama and Music use Acceptd, a separate application due Dec 1; Architecture, Art and Design use SlideRoom.", ["B1-P29"]),
              f("Duke、Rice、Swarthmore 提到 InitialView 的影片產品（Glimpse、VIVA）作為選交影片；CMU 讓工學院與 CS 申請者用 VIVA 介紹研究或專題。", "Duke, Rice and Swarthmore name InitialView video products (Glimpse, VIVA) as optional; CMU names VIVA for engineering and CS applicants to present a research or special project.", ["B1-P17", "B1-P20", "B1-P23", "B1-P28"])
            ]
          },
          {
            h: s("Email 政策", "Email policies"),
            judgment: s("多數學校明文不收申請者自己 email 的材料；預設做法是用學校點名的 portal。", "Most schools that address it refuse applicant email; default to the portal the school names."),
            items: [
              f("收：Rice（riceapps@rice.edu）；Olin（info@olin.edu，但不收影片與音樂作品集）；JHU 被延後的 ED 申請者可寫信到 applyhelp@jhu.edu。", "Accepted: Rice (riceapps@rice.edu); Olin (info@olin.edu, but not videos or music portfolios); JHU deferred ED applicants may email applyhelp@jhu.edu.", ["B1-P21", "B1-P18", "B1-P22"]),
              f("不收或不審：Stanford 藝術作品集；Duke（“only materials submitted via SlideRoom will be reviewed”）；UT Austin；Penn（email 須來自學校人員或推薦人）；Harvey Mudd（更新走 Hub，不用 email）。", "Not accepted or not reviewed: Stanford arts; Duke (“only materials submitted via SlideRoom will be reviewed”); UT Austin; Penn (email must come from a school official or recommender); Harvey Mudd (updates via the Hub, not email).", ["B1-P13", "B1-P17", "B1-P24", "B1-P15", "B1-P19"]),
              f("只給學校人員寄文件用：Georgia Tech 的 appdocs 信箱；Brown 給推薦人用的 documents@brown.edu。", "For school officials' documents only: Georgia Tech's appdocs address; Brown's documents@brown.edu for recommenders.", ["B1-P33", "B1-P12"]),
              inf("Email 是例外，不是預設管道。", "Email is the exception, not the default channel.", ["B1-P13", "B1-P17", "B1-P24", "B1-P15"])
            ]
          },
          {
            h: s("申請表裡的 URL 欄位", "URL fields inside applications"),
            judgment: s("官方點名的連結欄位很少，而且各校對連結的態度相反。", "Officially named link fields are few, and schools treat links in opposite ways."),
            items: [
              f("Harvard 補充文件：所列榮譽“provide a link to the honor/award if available.”", "Harvard's supplement: for listed honors, “provide a link to the honor/award if available.”", ["B1-P9"]),
              f("Brown：YouTube 或線上頁面連結放在 Common App 的 Brown University Questions。", "Brown: a YouTube or online-presence link goes in the Brown University Questions on the Common App.", ["B1-P12"]),
              f("CMU：只有 Schoolhouse.world 作品集 URL 欄位，其他網站不收。", "CMU: a Schoolhouse.world portfolio URL field only; other websites are not accepted.", ["B1-P28"]),
              f("Penn：作品集格式有“Upload Link or URL”，但不處理 Google Docs、Box 或檔案儲存空間連結。", "Penn: “Upload Link or URL” is a portfolio format, but links to Google Docs, Box or file storage are not processed.", ["B1-P15", "B1-P16"]),
              f("Caltech 作品集接受“Links and URLs”；Rice Art 作品集內的 YouTube／Vimeo URL 可用，多件作品的網站連結不審。", "Caltech's portfolio accepts “Links and URLs”; Rice Art accepts YouTube/Vimeo URLs inside the portfolio but does not review websites of multiple works.", ["B1-P11", "B1-P20"]),
              f("Stanford Art Practice：“Links and URLs will not be reviewed.”；UW 請申請者不要寄網站連結。", "Stanford Art Practice: “Links and URLs will not be reviewed.” UW asks applicants not to send links to websites.", ["B1-P14", "B1-P25"])
            ]
          },
          {
            h: s("Additional Information 當作容器", "Additional Information as a container"),
            judgment: s("這是每所 Common App 學校都會收到的欄位，所以是連到「沒有補充管道」學校的唯一路徑；但它會不會被點開，只有少數學校說過。", "It is the one field every Common App school receives, so it is the only route to schools with no supplementary channel; whether a link there is opened is stated by only a few schools."),
            items: [
              f("Common App 的 first-year 總覽頁沒有描述 Additional Information；欄位字數上限屬 A1 單元，本頁不主張。", "Common App's first-year overview does not describe Additional Information; its limits belong to unit A1 and are not asserted here.", ["B1-P5"]),
              f("點名使用它的學校：Duke（額外資訊放這裡）；Olin（作品放網站並在此附連結，控制在 1–2 頁）；Penn（“the activities section or additional information sections”）；Harvey Mudd（研究摘要，不要全文）。", "Schools that name it: Duke (extra information goes here); Olin (host work on a site and link it here, one to two pages); Penn (“the activities section or additional information sections”); Harvey Mudd (abstract, not the full paper).", ["B1-P17", "B1-P18", "B1-P16", "B1-P19"]),
              f("UC 申請的對應欄位 Additional comments：“This shouldn't be an essay, but rather a place to note unusual circumstances.”", "The UC equivalent, Additional comments: “This shouldn't be an essay, but rather a place to note unusual circumstances.”", ["B1-P27"]),
              inf("Additional Information 能送到所有 Common App 學校；放在這裡的連結會不會被打開，Olin 說可以放，Stanford 藝術與 UW 說不審或不要寄，其餘學校沒說。", "Additional Information reaches every Common App school. Olin invites a link there, Stanford arts and UW say links are not reviewed or not wanted, and the rest are silent.", ["B1-P18", "B1-P14", "B1-P25"])
            ]
          },
          {
            h: s("Common App 本身沒有作品集欄位", "The Common App itself has no portfolio field"),
            judgment: s("觀察到的藝術作品集全部走 SlideRoom、Acceptd 或學校 portal。", "Every arts portfolio observed goes to SlideRoom, Acceptd or a school portal."),
            items: [
              f("Common App first-year 總覽頁提到寫作補充、Activities、Honors，沒有提作品集、SlideRoom 或藝術補充。", "Common App's first-year overview names writing supplements, Activities and Honors; it does not mention portfolios, SlideRoom or an arts supplement.", ["B1-P5"]),
              f("2026–27 Requirements Grid PDF 存在，但本次無法擷取欄位文字，是否有作品集欄未查證。", "The 2026–27 Requirements Grid PDF exists, but its column text could not be extracted, so whether it has a portfolio column is not verified.", ["B1-P6"]),
              asm("Common App 已不再自行提供藝術補充表單。這與上述頁面一致，但沒有任何一頁明說；交由 A1 查核。", "The Common App no longer runs its own arts supplement form. This fits the pages above but no page states it; flagged for A1.", ["B1-P5"])
            ]
          }
        ]
      },

      {
        id: "mit",
        h: s("MIT Maker Portfolio：規格與招生辦公室說過的話", "MIT Maker Portfolio: the specification and what MIT admissions staff have said"),
        judgment: s(
          "MIT 是唯一把 maker 作品集規格寫到「整份影片 2 分鐘、25 個附件、程式要附 codebase 與 demo」的學校；官方現行頁面沒有任何「權重」說法，關於權重的話都來自已封存的舊文。",
          "MIT is the only school that specifies a maker portfolio down to 2 minutes of video, 25 attachments, and codebase plus demo for code; the current page says nothing about weight, and every statement on weight comes from archived posts."
        ),
        subs: [
          {
            h: s("2026–27 規格", "2026–27 specification"),
            judgment: s("看的是製作過程，不是成品；沒有過程證據的專案無法審閱。", "MIT reviews the build process, not the end result; projects without process evidence cannot be reviewed."),
            items: [
              f("平台 SlideRoom，每份 $10；費用減免須在截止前至少 3 天寄信給 SlideRoom 作品集團隊，主旨寫“SlideRoom Fee Waiver”，且作品集須已開始。每人只能交一份 Maker Portfolio。", "SlideRoom, $10 per portfolio; fee waivers by email to the SlideRoom portfolio team with subject “SlideRoom Fee Waiver”, at least 3 days before the deadline, portfolio already started. “only one Maker Portfolio is permitted per applicant”.", ["B3-S1"]),
              f("範圍：自己設計與製作、“substantial, original, and technically creative”的工程或手作專案；手作也用與 MIT 工程作品相同的批判思考標準看。", "Scope: engineering or crafting projects of your own design that are “substantial, original, and technically creative”; crafts are held to the same critical-thinking standards as MIT engineering work.", ["B3-S1"]),
              f("先填問卷（做什麼、怎麼做、為什麼做），用來把作品集分派給“the reviewer best equipped to take a first look”。", "A questionnaire comes first (what, how and why you make), used to match the portfolio to “the reviewer best equipped to take a first look”.", ["B3-S1"]),
              f("最多 25 個附件，每個都要有清楚說明；標出已完成與進行中，只審已完成的部分。原話：“We are more interested in your build process than your end results.”", "Up to 25 media attachments, each with a clear explanation; mark completed versus in-progress work; only completed work is reviewed. “We are more interested in your build process than your end results.”", ["B3-S1"]),
              f("影片：整份作品集合計 2 分鐘；有活動零件的專案必須附；建議配旁白或文字。“There is no bonus for submitting a video reel or showing yourself on camera.”", "Video: 2 minutes for the whole portfolio; required for projects with moving parts; voiceover or text overlays suggested. “There is no bonus for submitting a video reel or showing yourself on camera.”", ["B3-S1"]),
              f("程式專案“must include your codebase (ideally version-controlled) AND a working demonstration”；“If we are not able to access your demo, we cannot review your project.”", "Code projects “must include your codebase (ideally version-controlled) AND a working demonstration”; “If we are not able to access your demo, we cannot review your project.”", ["B3-S1"]),
              inf("沒有獨立的圖片上限；圖片算在 25 個附件內。", "There is no separate image cap; images count toward the 25 attachments.", ["B3-S1"]),
              f("問卷與各附件說明的字數上限：未載明（查核 2026-11-07）；這些上限只在 SlideRoom 內可見，本次未開啟。", "Word limits for the questionnaire and attachment descriptions: not stated (checked 2026-11-07); they are visible only inside SlideRoom, which was not opened.", ["B3-S1"]),
              f("截止同申請：EA 11/1、RA 1/4。審閱者：“a board of MIT faculty and alumni with prolific maker experience”；FAQ 稱之為 Engineering Advisory Board。", "Due with the application: EA Nov 1, RA Jan 4. Reviewers: “a board of MIT faculty and alumni with prolific maker experience”; the FAQ calls it the Engineering Advisory Board.", ["B3-S1", "B3-S2", "B3-S4"]),
              f("其他作品集：Research Supplement（簡短問卷、可附摘要或海報 PDF、已發表附 citation、由指導者透過 SlideRoom 寫推薦、一個專題）；Music & Theater Arts；Visual Art & Architecture（≤10 張圖）。MIT 目前沒有創意寫作作品集。全部“truly optional”，截止同申請。", "Other portfolios: Research Supplement (short questionnaire, optional abstract or poster PDF, citation if published, recommendation from a mentor via SlideRoom, one project); Music & Theater Arts; Visual Art & Architecture (≤10 images). MIT has no creative-writing portfolio. All are “truly optional” and share the application deadline.", ["B3-S1", "B3-S2"])
            ]
          },
          {
            h: s("MIT 招生辦公室人員寫過的話（皆為封存或有日期的舊文）", "What MIT admissions staff have written (all archived or dated)"),
            judgment: s("這些是當時的說法，不是現行規則；MIT 對程式碼的指示已經改過一次。", "These record what MIT said at the time, not current rules; MIT's instruction on code has already changed once."),
            items: [
              f("2013 年一位招生辦公室部落客寫的 FAQ（2018 年 10 月更新、已封存）：把作品集當成“elevator pitch”；評審“have a limited amount of time to review the materials.”", "A 2013 FAQ by an MIT admissions staff blogger (updated October 2018, archived): treat the portfolio as an “elevator pitch”; reviewers “have a limited amount of time to review the materials.”", ["B3-S5"]),
              f("同一篇 FAQ 回答「怎麼寄原始碼或網站」時，叫申請者寫摘要、不要寄程式碼；現行頁面則要求程式專案附 codebase 與 demo。", "The same FAQ, asked how to send source code or a website, told applicants to summarize rather than send code; the current page requires codebase and demo.", ["B3-S5", "B3-S1"]),
              inf("MIT 對程式碼的指示自 2013 年後已改變；從舊文或論壇抄來的建議可能過期。", "MIT's guidance on code has changed since 2013; advice copied from older posts or forums may be out of date.", ["B3-S5", "B3-S1"]),
              f("2021 年，一位負責創意作品集與其評審的招生官寫道：“most students are best served by completing only the standard MIT application”，並請申請者“focus on quality over quantity”；機器人隊成員不被期待交 maker 作品集。", "In 2021 an admissions officer overseeing the creative portfolios and their reviewers wrote that “most students are best served by completing only the standard MIT application”, asked for “quality over quantity”, and said a robotics-team member is not expected to submit a maker portfolio.", ["B3-S6"]),
              f("2015 年 MIT Faculty Newsletter（以招生辦公室口吻）：每份至少由一位 Advisory Board 成員審閱一次，評語“added to the applicant's folder”；提交“neither necessary nor sufficient”；出色的作品集“can provide a compelling reason to admit an otherwise qualified candidate”。", "The 2015 MIT Faculty Newsletter, in the Admissions Office's voice: each portfolio is reviewed “at least once” by an Advisory Board member, evaluations are “added to the applicant's folder”, submitting is “neither necessary nor sufficient”, and an outstanding portfolio “can provide a compelling reason to admit an otherwise qualified candidate”.", ["B3-S7"]),
              inf("2015 年的描述是否仍適用，現行頁面沒說。", "Whether the 2015 description still holds is not stated on any current page.", ["B3-S1", "B3-S7"]),
              f("2015 年資料：男性申請者 7.4%、女性 2.8% 交 Maker Portfolio；有意讀工程者為 8.5%（9,531 人中 812 人）與 3.8%（3,414 人中 130 人）。2016 年追蹤：差距只縮小 0.6 個百分點。", "2015 data: 7.4% of male and 2.8% of female applicants submitted a Maker Portfolio; among engineering-interested applicants, 8.5% (812 of 9,531) and 3.8% (130 of 3,414). The 2016 follow-up: the gap narrowed by 0.6 points.", ["B3-S7", "B3-S8"]),
              f("一位 MIT 學生部落客（不是職員）2019 年寫：“I did not submit any kind of portfolio, but I got in.”", "An MIT student blogger (not staff) wrote in 2019: “I did not submit any kind of portfolio, but I got in.”", ["B3-S9"]),
              f("本次未找到 2025–26 或 2026–27 年由招生辦公室人員寫的 maker 作品集評審文章（查核 2026-11-07）。", "No current (2025–26 or 2026–27) post by MIT admissions staff on how maker portfolios are evaluated was found (checked 2026-11-07).", ["B3-S4", "B3-S6"])
            ]
          }
        ]
      },

      {
        id: "engineering",
        h: s("其他工程類學校", "The other engineering schools"),
        judgment: s(
          "MIT 之外，只有 Caltech 有完整的工程作品管道；Olin 歡迎但不保證審閱，Harvey Mudd 只要摘要，CMU 只能靠 VIVA 影片，Stanford、Georgia Tech、UIUC、UC Berkeley 不收。",
          "Beyond MIT, only Caltech has a full channel for engineering work. Olin welcomes it but does not promise review, Harvey Mudd wants an abstract, CMU offers only a VIVA video, and Stanford, Georgia Tech, UIUC and UC Berkeley take none."
        ),
        table: {
          cols: [s("學校", "School"), s("工程／maker 作品", "Engineering / maker work"), s("研究", "Research"), s("連結", "Link"), s("學校自己怎麼說", "The school's own words")],
          rows: [
            ["Caltech",
              f("接受：Beaver Breakroom，送件後寄連結；文件 ≤75 頁、影音 ≤5 GB；補件 11/6、1/10。", "Yes: Beaver Breakroom, link sent after submission; documents ≤75 pages, media ≤5 GB; materials due Nov 6 / Jan 10.", ["B3-S10", "B3-S11", "B3-S13"]),
              f("限實驗室研究且有論文；課堂專題與實習改放作品集。", "Lab research with a paper only; class projects and internships go in the portfolio.", ["B3-S12"]),
              f("“Links and URLs”為可用格式。", "“Links and URLs” is an accepted format.", ["B3-S11"]),
              f("補充材料“not required to prove scientific interest or potential.”", "Supplemental materials are “not required to prove scientific interest or potential.”", ["B3-S14"])],
            ["Olin",
              f("歡迎“art or engineering portfolio”，放網站並在 Additional Information 附連結，或 email；申請截止 2026-12-15。", "Welcome (“art or engineering portfolio”): link a hosted site in Additional Information, or email; application due Dec 15, 2026.", ["B3-S16", "B3-S17"]),
              ns(["B3-S16"]),
              f("Additional Information 的超連結（1–2 頁）。", "A hyperlink in Additional Information (one to two pages).", ["B3-S16"]),
              f("“we cannot promise that all optional materials will get reviewed”", "“we cannot promise that all optional materials will get reviewed”", ["B3-S16"])],
            ["Harvey Mudd",
              f("“brief profile of projects”，照片或簡短說明。", "A “brief profile of projects”, photos or brief descriptions.", ["B3-S18"]),
              f("只要摘要：“do not upload entire research papers”。", "Abstract only: “do not upload entire research papers”.", ["B3-S18"]),
              ns(["B3-S18"]),
              f("沒交額外材料也不會吃虧；更新表單的附件常無法開啟，文字摘要即可。", "No disadvantage if nothing extra is sent; attachments in the update form often cannot be opened, so a short written summary is enough.", ["B3-S18"])],
            ["Stanford",
              f("不收；只有藝術作品集。", "No; arts portfolio only.", ["B3-S20", "B3-S21"]),
              f("不把研究論文加入檔案。", "Research papers are not added to the file.", ["B3-S21"]),
              f("“no guarantee that readers will review these links”", "“no guarantee that readers will review these links”", ["B3-S21"]),
              f("藝術作品集選交，勾選後也沒有義務一定要交。", "The arts portfolio is optional, with no obligation once indicated.", ["B3-S20"])],
            ["Carnegie Mellon",
              f("建築、藝術、設計以外不收。", "No, outside Architecture, Art and Design.", ["B3-S23"]),
              f("只有 VIVA 影片，限工學院與 SCS。", "Via VIVA video only, for Engineering and SCS applicants.", ["B3-S23"]),
              f("Schoolhouse.world URL 欄位；其他網站不收。", "Schoolhouse.world URL field; other websites not accepted.", ["B3-S23"]),
              f("“Carnegie Mellon doesn't accept supplemental submissions, such as resumes, artwork, portfolios, recording or websites.”", "“Carnegie Mellon doesn't accept supplemental submissions, such as resumes, artwork, portfolios, recording or websites.”", ["B3-S23"])],
            ["Cornell Engineering",
              f("沒有工程作品集；Duffield 要 6 題補充短文。", "No engineering portfolio; Duffield requires six supplemental essays.", ["B3-S30"]),
              ns(["B3-S30", "B3-S31"]),
              ns(["B3-S30", "B3-S31"]),
              f("Applicant Portal 收“supplemental information”，例如非教師推薦信或新榮譽；其他材料 11/13、1/19。", "The Applicant Portal takes “supplemental information” such as a non-teacher letter or a new honor; other materials Nov 13 / Jan 19.", ["B3-S31", "B3-S32", "B3-S33"])],
            ["Georgia Tech",
              ns(["B3-S24", "B3-S26", "B3-S28"]),
              ns(["B3-S24", "B3-S26", "B3-S28"]),
              ns(["B3-S24", "B3-S26", "B3-S28"]),
              f("“we do not accept separate resumes”；推薦信最多 3 封（輔導老師與教師）；2026–27 取消補充作文。", "“we do not accept separate resumes”; up to 3 optional letters (counselor and teachers); supplemental essay dropped for 2026–27.", ["B3-S24", "B3-S25", "B3-S27"])],
            ["Purdue",
              ns(["B3-S34"]), ns(["B3-S34"]), ns(["B3-S34"]),
              f("讀到的頁面只有截止：EA 11/1（工程優先截止）、RD 1/15。", "The page read gives deadlines only: EA Nov 1 (engineering priority), RD Jan 15.", ["B3-S34"])],
            ["Michigan",
              blocked("HTTP 403", ["B3-S44"]), blocked("HTTP 403", ["B3-S44"]), blocked("HTTP 403", ["B3-S44"]), blocked("HTTP 403", ["B3-S44"])],
            ["UIUC",
              f("不收：“we don't accept letter of recommendation or other unsolicited materials”。", "No: “we don't accept letter of recommendation or other unsolicited materials”.", ["B3-S35"]),
              inf("同一條規則應適用於研究材料（頁面未特別點名）。", "The same rule would cover research material (the page does not name it).", ["B3-S35"]),
              ns(["B3-S35"]),
              f("未要求的材料會在“before reviewing your application”就移除。", "Unsolicited materials are removed “before reviewing your application”.", ["B3-S35"])],
            ["UC Berkeley (EECS)",
              f("不收：“we are unable to accept portfolios”。", "No: “we are unable to accept portfolios”.", ["B3-S38"]),
              f("不收。", "No.", ["B3-S38"]),
              f("UC 頁面沒有 URL 欄位；有兩個 Additional Comments 欄。", "No URL field documented on UC pages; two Additional Comments boxes exist.", ["B3-S36", "B3-S39"]),
              f("“Unsolicited materials will not be reviewed”；延伸的課外活動寫在 PIQ 區的 Additional Comments。", "“Unsolicited materials will not be reviewed”; Berkeley's tips point extended extracurriculars to the PIQ Additional Comments box.", ["B3-S38", "B3-S39"])]
          ]
        },
        items: [
          f("Caltech 寫明教職員會讀申請，且“every student admitted to Caltech receives a positive review from a professor.”", "Caltech says faculty read applications and “every student admitted to Caltech receives a positive review from a professor.”", ["B3-S15"]),
          inf("該頁沒說教職員是否會打開作品集檔案。", "That page does not say whether faculty open portfolio files.", ["B3-S15"]),
          f("VIVA 是 InitialView 的第三方付費工具，與 Caltech 無隸屬；Caltech 鼓勵研究申請者使用但不提供費用減免。", "VIVA is a paid third-party tool from InitialView, not affiliated with Caltech; Caltech encourages it for research and offers no fee waiver of its own.", ["B3-S12"]),
          inf("在 CMU，工程申請者要在作文之外介紹某個專題，唯一官方途徑是 VIVA。", "At CMU, VIVA is the only official route for an engineering applicant to describe a specific project beyond the essays.", ["B3-S23"]),
          f("Stanford 的藝術作品集會讓 Common App 截止提前（REA 10/15、RD 12/5）；工程作品不在四個藝術領域內。", "Stanford's arts portfolio moves the Common App deadline earlier (Oct 15 REA, Dec 5 RD); engineering work is not among the four arts areas.", ["B3-S22", "B3-S20"]),
          f("Georgia Tech 招生部落格作者頁（2024-05-27 至 2026-10-20）的文章標題沒有一篇談作品集、連結或補充材料；內文本次未讀（查核 2026-11-07）。", "The Georgia Tech admission blog author index (posts 2024-05-27 to 2026-10-20) has no title on portfolios, links or supplemental materials; post bodies were not read (checked 2026-11-07).", ["B3-S29"])
        ]
      },

      {
        id: "github",
        h: s("GitHub 是入口嗎？", "Is GitHub a portal?"),
        judgment: s(
          "不是。沒有任何一所學校把 GitHub 當成送件管道；repository 連結只是指標，要放進學校指定的欄位，而且多數學校不保證會點開。",
          "No. No school checked treats GitHub as a submission channel; a repository link is a pointer that must sit in a field the school names, and most schools do not promise to open it."
        ),
        table: {
          cols: [s("系統", "System"), s("URL 可以放在哪裡", "Where a URL can go"), s("官方對「讀者會不會點開」的說法", "Official word on whether readers open links")],
          rows: [
            ["Common App",
              f("Additional Information（Olin 點名）；部分學校題目有 URL 欄位（CMU：Schoolhouse.world）。", "Additional Information (Olin names it); some member questions have a URL field (CMU: Schoolhouse.world).", ["B3-S16", "B3-S23"]),
              f("Common App 自己的說明中心本次未找到相關說法；學校層級：Olin“cannot promise”，Stanford“no guarantee”。", "Nothing found in Common App's own help center this run; at school level, Olin “cannot promise” review and Stanford gives “no guarantee”.", ["B3-S40", "B3-S41", "B3-S16", "B3-S21"])],
            ["UC application",
              f("沒有 URL 欄位；有兩個 Additional Comments 欄。", "No URL field documented; two Additional Comments boxes.", ["B3-S36", "B3-S39"]),
              f("Berkeley：未要求的材料“will not be reviewed”。", "Berkeley: unsolicited materials “will not be reviewed”.", ["B3-S38"])],
            ["Coalition on Scoir",
              ns(["B3-S43"]),
              ns(["B3-S43"])],
            ["MIT",
              f("申請表沒有連結欄位；Maker Portfolio（SlideRoom）要求程式專案附 codebase 與 demo。", "No link field in the application; the Maker Portfolio (SlideRoom) requires codebase and demo for code projects.", ["B3-S1", "B3-S3"]),
              f("“If we are not able to access your demo, we cannot review your project.”", "“If we are not able to access your demo, we cannot review your project.”", ["B3-S1"])],
            ["Caltech Beaver Breakroom",
              f("作品集接受“Links and URLs”。", "The portfolio accepts “Links and URLs”.", ["B3-S11"]),
              inf("是否每個連結都會被打開，頁面沒說。", "Whether every link is opened is not stated.", ["B3-S11"])],
            ["Stanford portal",
              f("更新表單可打連結。", "Links may be typed in the update form.", ["B3-S21"]),
              f("“there's no guarantee that readers will review these links”", "“there's no guarantee that readers will review these links”", ["B3-S21"])]
          ]
        },
        items: [
          f("MIT 申請表的活動欄是 MIT 自己的表格，四格，“Please use our form, not a resume.”；另有一個開放式 additional-information 文字框，未給長度；頁面沒提 URL。", "MIT's activities section is its own four-slot form: “Please use our form, not a resume.” There is one open additional-information text box with no stated length; the page does not mention URLs.", ["B3-S3"]),
          inf("MIT 唯一明確期待看到 repository 的地方是 Maker Portfolio：程式專案要附 codebase（最好有版本控制）與可連上的 demo。把 GitHub 連結放在 SlideRoom 內符合這條規則，但 MIT 沒有點名 GitHub。", "The only place MIT documents a repository is the Maker Portfolio: a code project includes its codebase, ideally version-controlled, and a reachable demo. A GitHub link inside SlideRoom fits that rule, but MIT does not name GitHub.", ["B3-S1"]),
          inf("凡有說到連結的學校，不是要求材料要能連上且有說明（MIT、Caltech），就是不保證審閱（Stanford、Olin）。", "Where a school says anything about links, it either requires the material to be reachable and documented (MIT, Caltech) or declines to promise review (Stanford, Olin).", ["B3-S1", "B3-S11", "B3-S16", "B3-S21"]),
          inf("在禁止未要求材料的學校（Berkeley、UIUC、CMU，以及 Georgia Tech 對履歷），指向作品網站的連結應落在同一條規則下；但這些頁面都沒點名 GitHub。", "Where a school forbids unsolicited material (Berkeley, UIUC, CMU, and Georgia Tech for résumés), a link to a portfolio site would fall under that rule, though none of those pages names GitHub.", ["B3-S23", "B3-S24", "B3-S35", "B3-S38"]),
          f("Common App 與 Coalition 的欄位字數（Additional Information、活動描述）本次未能從官方頁面確認。", "Common App and Coalition field limits (Additional Information, activity descriptions) were not confirmed from an official page this run.", ["B3-S40", "B3-S42", "B3-S43"])
        ]
      },

      {
        id: "research",
        h: s("研究成果怎麼進申請：論文、摘要、海報、獎牌", "How research enters the application: papers, abstracts, posters, medals"),
        judgment: s(
          "研究有三種形狀：附指導者推薦的結構化表單（MIT、Caltech、Yale）、附說明的自由上傳（Harvard、Brown、JHU、Swarthmore）、只收摘要（Harvey Mudd）；Duke 點名不收研究摘要。讀到的 23 校頁面沒有一所提到 Regeneron STS 或 ISEF。",
          "Research comes in three shapes: a structured form with a mentor letter (MIT, Caltech, Yale), a free upload with attribution notes (Harvard, Brown, JHU, Swarthmore), or abstract only (Harvey Mudd); Duke names research abstracts as not accepted. None of the 23 school pages read mentions Regeneron STS or ISEF."
        ),
        subs: [
          {
            h: s("各校送件方式", "Submission route by school"),
            judgment: s("同一份研究無法只準備一個版本：有的學校要全文，有的只要摘要，有的完全不收。", "One research artefact cannot be prepared in a single form: some schools want the full paper, some only the abstract, some nothing."),
            table: {
              filter: true,
              cols: [s("學校", "School"), s("管道", "Route"), s("要什麼", "What is asked")],
              rows: [
                ["MIT", "Research Supplement · SlideRoom", f("問卷；有摘要或海報就附；已發表附 citation；指導者推薦。", "Questionnaire; abstract or poster if available; citation if published; mentor nominated.", ["B2-S1"])],
                ["Caltech", "Research Papers and Publications · portal", f("全文優先，否則摘要或海報；指導者推薦信；說明表；限實驗室研究。", "Full paper preferred, else abstract or poster; supervisor letter; form; lab-affiliated work only.", ["B2-S5"])],
                ["Yale", "STEM Research Supplement · Status Portal", f("論文、摘要或海報；指導者推薦信。", "Paper, abstract or poster; mentor letter.", ["B2-S15"])],
                ["Harvard", "Applicant Portal · Upload Materials", f("作品本身，加上合作者、指導者、本人貢獻。", "The work, plus collaborators, mentor and own contribution.", ["B2-S14"])],
                ["Brown", "Applicant Portal · Academic Paper/Research", f("論文或摘要，加背景說明。", "Paper or abstract plus a context note.", ["B2-S22"])],
                ["Johns Hopkins", "applicant portal", f("以研究摘要為選交材料的例子。", "Research abstract given as an example of optional material.", ["B2-S42"])],
                ["Swarthmore", "portal", f("研究摘要；或用 VIVA 影片介紹研究專題。", "Research abstracts; or a VIVA video on a research project.", ["B2-S58"])],
                ["Harvey Mudd", "Common App upload", f("只要摘要，不要全文。", "Abstract only, not the full paper.", ["B2-S40"])],
                ["Carnegie Mellon", "VIVA", f("只有影片（工學院與 CS），不收上傳。", "Video only (Engineering and CS); no upload.", ["B2-S30"])],
                ["Penn", "Activities / Additional Information", f("寫在活動或附加資訊欄。", "Use the activities or additional information sections.", ["B2-S19"])],
                ["Duke", "—", f("不收（點名 research abstracts）。", "Not accepted (names research abstracts).", ["B2-S43"])],
                ["UC Berkeley, UW, UIUC", "—", f("不收任何補充或未要求的材料。", "No supplemental or unsolicited material accepted.", ["B2-S47", "B2-S55", "B2-S36"])],
                ["Stanford, Cornell, Georgetown, Georgia Tech, Olin, Rice, UCLA, UC San Diego, UT Austin", "—", ns(["B2-S12", "B2-S28", "B2-S29", "B2-S32", "B2-S38", "B2-S46", "B2-S50", "B2-S51", "B2-S54"])],
                ["Princeton, Columbia, Purdue, Michigan, Northwestern, Williams, Amherst", "—", blocked("certificate rejected / HTTP 403 / 405", ["B2-S16", "B2-S17", "B2-S18", "B2-S34", "B2-S35", "B2-S44", "B2-S56", "B2-S57"])]
              ]
            },
            items: [
              f("Yale 說研究全文“generally the most helpful”；Harvey Mudd 請學生不要上傳全文。同一份東西，指示相反。", "Yale calls full research papers “generally the most helpful”; Harvey Mudd asks students not to upload them. Same artefact, opposite instruction.", ["B2-S15", "B2-S40"]),
              f("Caltech 的研究管道以實驗室隸屬與論文狀態為門檻；獨立研究改走 STEM 作品集。", "Caltech's research channel is gated on lab affiliation and paper status; independent work goes to the STEM portfolio.", ["B2-S5"]),
              asm("Princeton 的 graded written paper 是學校課業的寫作樣本，與研究論文不同；頁面本次無法讀取，未查證，先不放進研究欄。", "Princeton's graded written paper is a school-coursework writing sample, not a research paper; its page could not be read, so this is unverified and kept out of the research column.", ["B2-S17"]),
              inf("讀到的學校沒有一所點名「實驗紀錄」（筆記本、原始數據）；被點名的是論文、摘要、海報與指導者推薦。實驗紀錄須整理成其中一種才放得進現有管道。", "No school read names a lab record (notebook, raw data); the named artefacts are paper, abstract, poster and mentor letter. A lab record has to be condensed into one of those to fit a stated channel.", ["B2-S1", "B2-S5", "B2-S15", "B2-S22"])
            ]
          },
          {
            h: s("外部錨點：Regeneron STS 與 ISEF", "External anchors: Regeneron STS and ISEF"),
            judgment: s("STS 的 Top 40 公布日（2027-01-21）晚於本表所有 RD 截止，所以 STS 結果多半只能當成「更新」送出。", "The STS Top 40 date (Jan 21, 2027) falls after every RD deadline in this matrix, so an STS result usually travels as an update."),
            items: [
              f("Regeneron STS 自稱是最老的高中科學研究競賽，始於 1942 年；2026 年約 2,600 人申請；選出 Top 300 scholars 與 Top 40 finalists；每年約 $3.1 million，第一名 $250,000。", "Regeneron STS describes itself as the oldest science research competition for high-school students, begun in 1942; about 2,600 applied for 2026; it names Top 300 scholars and Top 40 finalists; about $3.1 million a year, first place $250,000.", ["B2-S59"]),
              f("STS 2027 時程：申請 2026-06-01 至 11-05；Top 300 於 2027-01-07 公布；Top 40 於 01-21；決賽 03-11 至 03-17。參賽資格與報告長度在該頁未載明。", "STS 2027 timeline: applications Jun 1–Nov 5, 2026; Top 300 announced Jan 7, 2027; Top 40 Jan 21; finals Mar 11–17. Eligibility and report length are not stated on that page.", ["B2-S59"]),
              f("Regeneron ISEF：須先贏得 Society 附屬的地方、區域、州或國家科展；2026 年決賽者來自 365 個附屬科展、60 多個國家與地區；22 個類別；網站同時寫了兩個獎金總額（“more than $9 million”與“over $7 million”）。", "Regeneron ISEF: entry by winning a Society-affiliated local, regional, state or national fair; 2026 finalists came from 365 affiliated fairs in more than 60 countries, regions and territories; 22 categories; the site gives two award totals (“more than $9 million” and “over $7 million”).", ["B2-S60"]),
              f("讀到的 23 校頁面沒有一所提到 Regeneron STS 或 ISEF。", "None of the 23 school pages read mentions Regeneron STS or ISEF.", ["B2-S1", "B2-S5", "B2-S15", "B2-S22", "B2-S43"]),
              inf("STS Top 300 公布日（2027-01-07）在多數 EA／ED 放榜之後、接近 RD 截止；Top 40（01-21）在本表所有 RD 截止之後。因此 STS 結果通常只能透過接受更新的 portal（如 Penn、JHU、Harvey Mudd Hub）送出，而不是寫在原本的 Honors 裡。", "The STS Top 300 date (Jan 7, 2027) falls after most EA/ED decisions and near RD deadlines; Top 40 (Jan 21) falls after every RD deadline here. An STS result can usually be reported only through a portal that takes updates (e.g. Penn, JHU, Harvey Mudd Hub), not in the original Honors section.", ["B2-S59", "B2-S19", "B2-S42", "B1-P19"])
            ]
          },
          {
            h: s("發表與作者身分", "Publications and authorship"),
            judgment: s("只有 Harvard 明說要列出合作者與本人貢獻；沒有學校提到 CRediT。", "Only Harvard asks applicants to list collaborators and their own contribution; no school names CRediT."),
            items: [
              f("MIT：已發表就附 citation。Caltech：接受“published, submitted or in preparation”的論文。Harvard：上傳研究須列合作者、指導者與本人貢獻。", "MIT asks for a citation if published. Caltech accepts papers “published, submitted or in preparation”. Harvard asks uploaders to list collaborators, the sponsor or mentor, and their own contribution.", ["B2-S1", "B2-S5", "B2-S14"]),
              f("Common App first-year 頁面說 Honors 是給“academic honors and achievements”，沒有提到專門的發表欄位。", "The Common App first-year page frames Honors as “academic honors and achievements” and mentions no dedicated publications field.", ["B2-S61"]),
              inf("Harvard 的「合作者／貢獻」要求是本次觀察到最接近 CRediT 式作者貢獻的官方做法。", "Harvard's collaborators-and-contribution request is the closest official analogue to CRediT-style attribution observed in this run.", ["B2-S14"]),
              inf("沒有研究管道時，一篇發表可以寫成 Honor（若屬於一種肯定）、Activity（研究本身）或放在 Additional Information（citation）；學校偏好哪一種，讀到的頁面都沒說。", "Without a research channel, a publication can go in Honors (if it is a recognition), Activities (the research itself) or Additional Information (the citation); which a school prefers is not stated on the pages read.", ["B2-S61"])
            ]
          },
          {
            h: s("競賽獎牌：Honors 還是 Activities", "Competition medals: Honors or Activities"),
            judgment: s("同一場競賽可以出現兩次：獎項寫在 Honors，專題寫在 Activities；沒有學校頁面禁止或贊成這種寫法。", "One competition can appear twice: the medal in Honors, the project in Activities; no school page read forbids or endorses this."),
            items: [
              f("Common App：Honors 給學術榮譽與成就；Activities 給“work, hobbies, clubs, and community engagement”。", "Common App: Honors are for academic honors and achievements; Activities for “work, hobbies, clubs, and community engagement”.", ["B2-S61"]),
              f("Harvard 請申請者為所列獎項附連結，“if available”。", "Harvard asks for a link to any listed honor or award, “if available”.", ["B2-S13"]),
              f("UC 申請：活動與獎項同一張清單，六個類別之一是“award or honor”；頁面沒寫件數上限。", "UC application: activities and awards share one list with six categories, one being “award or honor”; no count limit is stated on the page.", ["B2-S62"]),
              asm("Common App Honors 有 5 格，每格標層級（校級／州或區域／全國／國際）。這來自任務說明，本次未從 Common App 官方頁面查證；交由 A1。", "The Common App Honors section has 5 entries, each tagged school / state-regional / national / international. This comes from the task brief and was not verified against an official Common App page; deferred to A1."),
              inf("同一場競賽可寫兩次：獎項放 Honors（結果、層級），專題放 Activities（時數、角色）。", "One competition can appear twice: the medal as an Honor (result, level) and the project as an Activity (hours, role).", ["B2-S61"])
            ]
          }
        ]
      }
    ]
  };
})();
