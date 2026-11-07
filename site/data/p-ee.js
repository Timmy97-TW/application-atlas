window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  // Item helpers. f = [事實] (must carry src), i = [推論], a = [假設]. Untagged items are the persona's own fictional content.
  function F(zh, en, src, sub) { var o = { t: { zh: zh, en: en }, tag: "f", src: src }; if (sub) o.sub = sub; return o; }
  function I(zh, en, src, sub) { var o = { t: { zh: zh, en: en }, tag: "i" }; if (src) o.src = src; if (sub) o.sub = sub; return o; }
  function A(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "a" }; if (src) o.src = src; return o; }
  function P(zh, en) { return { t: { zh: zh, en: en } }; }
  function L(zh, en) { return { zh: zh, en: en }; }
  function C(s, max) {
    if (s.length > max) throw new Error("over " + max + " chars: " + s);
    return s + "  [" + s.length + "/" + max + "]";
  }

  // ── MIT Maker Portfolio plan: ≤25 attachments, ≤2 min video in total (B3-S1) ──
  // [no, content zh, content en, kind, status, video seconds]
  var MP = [
    [1, "Rev C 板子裝在植物架上的全景照", "Rev C board installed on the plant shelf, overview photo", "image", "done", 0],
    [2, "自己畫的系統方塊圖", "System block diagram (own drawing)", "image", "done", 0],
    [3, "Rev C 電路圖（電源與驅動級）", "Rev C schematic, power and driver stages", "PDF", "done", 0],
    [4, "Rev C 電路圖（MCU 與 I2C）", "Rev C schematic, MCU and I2C", "PDF", "done", 0],
    [5, "Rev A 與 Rev C 的 PCB layout 並排", "Rev A and Rev C PCB layouts side by side", "image", "done", 0],
    [6, "Rev A 燒毀的 MOSFET 與原因分析", "Rev A burnt MOSFET and what caused it", "image", "done", 0],
    [7, "Rev B 閘極振鈴的示波器截圖", "Rev B oscilloscope capture of gate ringing", "image", "done", 0],
    [8, "Rev C 的修正：閘極電阻與走線改動", "Rev C fix: gate resistor and routing change", "image", "done", 0],
    [9, "電流精度測試架設照", "Current-accuracy test setup", "image", "done", 0],
    [10, "8 通道電流誤差圖（350 mA 設定）", "Current error across 8 channels at 350 mA set-point", "image", "done", 0],
    [11, "效率對負載曲線", "Efficiency versus load", "image", "done", 0],
    [12, "滿載熱影像", "Thermal image at full load", "image", "done", 0],
    [13, "Firmware 架構圖", "Firmware architecture diagram", "image", "done", 0],
    [14, "Codebase 說明 PDF：repository 網址、目錄結構、commit 歷史摘要", "Codebase PDF: repository URL, folder layout, commit-history summary", "PDF", "done", 0],
    [15, "Demo 影片：以 I2C 指令逐通道調光（旁白）", "Demo video: per-channel dimming over I2C, with voiceover", "video", "done", 60],
    [16, "Demo 影片：短路保護觸發與恢復", "Demo video: short-circuit protection trip and recovery", "video", "done", 45],
    [17, "BOM 與成本表", "Bill of materials and cost", "PDF", "done", 0],
    [18, "Build log 節錄（附日期的 12 頁）", "Build-log excerpt, 12 dated pages", "PDF", "done", 0],
    [19, "Rev D（進行中，標示為 in progress）", "Rev D, marked in progress", "image", "in progress", 0]
  ];
  var vidSec = MP.reduce(function (s, r) { return s + r[5]; }, 0);
  if (MP.length > 25 || vidSec > 120) throw new Error("Maker Portfolio plan over MIT limits");
  var mpRows = MP.map(function (r) {
    return [String(r[0]), L(r[1], r[2]), r[3], r[4] === "done" ? L("完成", "completed") : L("進行中（不會被審）", "in progress (not reviewed)"), r[5] ? r[5] + " s" : "—"];
  });

  // ── Common App activity entry (A1-S6, A1-S31) and a UC variant (A2-S6) ──
  var ROLE = "Designer and builder";
  var ORG = "Independent project, self-directed";
  var DESC = "Designed an 8-channel LED driver over 3 board revisions; wrote C firmware; measured 2% current match and 90% efficiency; kept a 140-entry build log.";
  var UCD = "Designed and built an 8-channel constant-current LED driver for a classroom plant shelf over 3 board revisions (2.5 years). Wrote the C firmware for PWM dimming over I2C. Bench-tested each revision: channel currents within 2% of set-point, 88-91% efficiency, thermal checks at full load. Every change is recorded in a 140-entry dated build log.";
  if (UCD.length > 350) throw new Error("UC description over 350");

  window.ATLAS.pages["ee"] = {
    persona: true,
    title: { zh: "電機系申請者（虛構）", en: "EE applicant (fictional)" },
    judgment: {
      zh: "一個有設計檔、firmware 和測試數據的硬體專案，只有在 MIT 的 Maker Portfolio 能完整送出；在 Stanford 和 Berkeley，它只能壓縮成活動欄的 150 或 350 字元與一段文字。",
      en: "A hardware project with design files, firmware and test data can be submitted whole only through MIT's Maker Portfolio; at Stanford and Berkeley it shrinks to a 150- or 350-character activity line and some prose."
    },
    intro: {
      zh: "**這是虛構人物。** E 同學由幾種常見情境組合而成，不是任何真實學生，學校與任何比賽、課程都不指名。他在台灣讀高三，想念電機，目標是 MIT、Stanford、UC Berkeley。專案內容是我們寫的示範；每一處學校規定都附來源，字元數由頁面程式計算，標 [推論] 的是我們的判斷，不是招生辦公室的說法。",
      en: "**This persona is fictional.** Applicant E is a composite of common situations, not a real student; no school, competition or programme is named. He is in his final year of senior high in Taiwan, intends to study electrical engineering, and applies to MIT, Stanford and UC Berkeley. The project is our illustration; every school rule is cited, character counts are computed by the page, and anything tagged as inference is our reasoning, not an admissions office's."
    },
    sections: [
      {
        id: "project",
        h: { zh: "專案速寫", en: "The project" },
        judgment: {
          zh: "兩年半、三版電路板、一份 140 筆的 build log：一個 8 通道定電流 LED driver。",
          en: "Two and a half years, three board revisions, a 140-entry build log: an 8-channel constant-current LED driver."
        },
        items: [
          A("E 同學（虛構）高一時想替教室的植物架做可調光的照明，發現現成的燈條無法逐層控制，於是自己設計一塊 8 通道定電流 LED driver。Rev A 在第一次滿載時燒了 MOSFET；Rev B 改了驅動級，但示波器上看到閘極振鈴；Rev C 加閘極電阻、重新走線後穩定。他用 KiCad 畫板，用 C 寫 microcontroller firmware（PWM 調光、I2C 指令、短路保護），每一版都量過電流精度（各通道與設定值差 2% 以內）、效率（88–91%）與溫度。所有改動記在一份附日期的 build log（140 筆）和一個 git repository 裡。Rev D 正在做。",
            "Applicant E (fictional) wanted dimmable lighting for his classroom's plant shelf in grade 10 and found that off-the-shelf strips could not be controlled shelf by shelf, so he designed an 8-channel constant-current LED driver. Rev A burnt a MOSFET at its first full-load test; Rev B changed the driver stage but showed gate ringing on the oscilloscope; Rev C added gate resistors and new routing and has been stable since. He drew the boards in KiCad and wrote the microcontroller firmware in C (PWM dimming, I2C commands, short-circuit protection). Each revision was bench-tested for current accuracy (every channel within 2% of set-point), efficiency (88–91%) and temperature. Every change is in a dated build log (140 entries) and a git repository. Rev D is in progress.")
        ]
      },
      {
        id: "maker",
        h: { zh: "MIT Maker Portfolio", en: "MIT Maker Portfolio" },
        judgment: {
          zh: "19 個附件、影片共 105 秒，在 MIT 的 25 件與 2 分鐘上限內；firmware 是程式，所以 codebase 和可運作的 demo 都得附。",
          en: "19 attachments and 105 seconds of video, inside MIT's 25-item and 2-minute limits; the firmware is code, so both the codebase and a working demo must be included."
        },
        items: [
          F("透過 SlideRoom 繳交，每份 10 美元，可申請免費；每位申請者只能交一份 Maker Portfolio；截止日與申請相同（EA 11/1、RA 1/4）。",
            "Submitted in SlideRoom, $10 per portfolio, fee waiver available; one Maker Portfolio per applicant; due with the application (EA Nov 1, RA Jan 4).", ["B3-S1", "B3-S2"]),
          F("先填問卷（做什麼、怎麼做、為什麼做），MIT 用它把作品集配給最合適的評審。", "It starts with a questionnaire on what, how and why you make, which MIT uses to match the portfolio to a reviewer.", ["B3-S1"]),
          F("最多 25 個媒體附件，每個都要有清楚說明；標明完成或進行中，只審完成的作品。", "Up to 25 media attachments, each with a clear explanation; mark completed versus in-progress work; only completed work is reviewed.", ["B3-S1"]),
          F("整份作品集影片合計 2 分鐘；有活動零件的專案必須附影片。", "Video is capped at 2 minutes across the whole portfolio and is required for projects with moving parts.", ["B3-S1"]),
          F("程式專案必須附 codebase（最好有版本控制）與可運作的 demo；MIT 說無法開啟 demo 就無法審。", "Code projects must include the codebase (ideally version-controlled) and a working demo; MIT says it cannot review a project whose demo it cannot access.", ["B3-S1"]),
          F("MIT 說比起成品更重視製作過程；缺乏製作過程證據的專案無法審。", "MIT says it is more interested in the build process than in end results; projects without enough build-process evidence cannot be reviewed.", ["B3-S1"]),
          F("審閱者是一個由有大量 maker 經驗的 MIT 教職員與校友組成的委員會。", "Reviewers are a board of MIT faculty and alumni with extensive maker experience.", ["B3-S1", "B3-S4"]),
          F("2021 年一位負責作品集的 MIT 招生官寫道，多數學生只交標準申請就最合適。", "In 2021 an MIT admissions officer overseeing portfolios wrote that most students are best served by the standard application alone.", ["B3-S6"]),
          F("說明欄的字數限制未載明；問卷欄位只在 SlideRoom 內看得到。", "Word limits for descriptions are not stated; the questionnaire's fields are visible only inside SlideRoom.", ["B3-S1"]),
          I("LED driver 沒有活動零件，影片不是硬性規定；但 firmware 讓它成為程式專案，所以第 15、16 項影片就是 MIT 要的「working demo」。", "An LED driver has no moving parts, so video is not mandatory on that ground; the firmware makes it a code project, so items 15 and 16 serve as the required working demo.", ["B3-S1"]),
          I("Rev A、B 的失敗（第 6、7 項）是最直接的製作過程證據，比成品照更符合 MIT 的說法。", "The Rev A and B failures (items 6 and 7) are the most direct build-process evidence, closer to what MIT asks for than a finished-product photo.", ["B3-S1"]),
          P("影片合計 " + vidSec + " 秒（頁面計算）。", "Video total: " + vidSec + " s (computed by the page).")
        ],
        table: {
          cols: [L("#", "#"), L("內容", "Content"), L("檔案類型", "File type"), L("狀態", "Status"), L("影片長度", "Video")],
          rows: mpRows
        }
      },
      {
        id: "slideroom",
        h: { zh: "SlideRoom", en: "SlideRoom" },
        judgment: {
          zh: "三校中只有 MIT 用 SlideRoom，而且就是上面的 Maker Portfolio；Stanford 的作品集只收藝術、走自己的 portal，Berkeley 不收作品集。",
          en: "Of the three schools only MIT uses SlideRoom, and the SlideRoom entry is the Maker Portfolio above; Stanford's portfolio is arts-only through its own portal, and Berkeley takes no portfolios."
        },
        items: [
          F("MIT 的作品集全部經 SlideRoom，各校有自己的 SlideRoom 子網域。", "All MIT portfolios go through SlideRoom; each school runs its own SlideRoom subdomain.", ["B1-P7", "B3-S1"]),
          F("Stanford：只有 Optional Arts Portfolio（Art Practice、Dance、Music、Theater and Performance Studies），經 Stanford 自己的 portal，不收其他平台；工程不在其中。", "Stanford: only the Optional Arts Portfolio (Art Practice, Dance, Music, Theater and Performance Studies), through Stanford's own portal, no other platform; engineering is not among them.", ["B3-S20", "B1-P13"]),
          F("UC Berkeley：「unable to accept portfolios」，主動寄送的材料不會被審閱。", "UC Berkeley: \"unable to accept portfolios\"; unsolicited materials will not be reviewed.", ["A5b-S25", "B3-S38"]),
          F("SlideRoom 平台預設：圖片 <5 MB、影片 <250 MB、PDF <10 MB（學校可另訂）；數量上限由學校設定。", "SlideRoom platform defaults: images under 5 MB, video under 250 MB, PDF under 10 MB unless the school says otherwise; item counts are set by the school.", ["B1-P2"]),
          F("「Link to Media」只接受 YouTube、Vimeo、SoundCloud、Sketchfab 的單一公開項目；一般網站連結不是 SlideRoom 的媒體類型。", "\"Link to Media\" accepts a single public item from YouTube, Vimeo, SoundCloud or Sketchfab; a general website link is not a SlideRoom media type.", ["B1-P2"]),
          F("送出後就不能再修改，要改得由學校退回。", "After submission the applicant can no longer edit; changes require the school to unsubmit.", ["B1-P3"]),
          I("因此 repository 網址不能當成一個「媒體項目」上傳；E 同學把它寫進第 14 項的 PDF 和該項說明文字裡。", "So the repository URL cannot be uploaded as a media item; Applicant E puts it inside the item-14 PDF and that item's explanation text.", ["B1-P2", "B3-S1"]),
          P("檔案準備：兩支影片各輸出成 1080p MP4，各約 60–90 MB；電路圖與 build log 匯出成 PDF 並確認小於 10 MB；示波器與熱影像截圖轉 PNG 並縮到 5 MB 以下。", "File prep: both videos exported as 1080p MP4 at about 60–90 MB each; schematics and build log exported to PDF and checked under 10 MB; oscilloscope and thermal captures saved as PNG under 5 MB.")
        ]
      },
      {
        id: "activity-line",
        h: { zh: "一行活動描述", en: "The activity line" },
        judgment: {
          zh: "Common App 的 150 字元只夠寫「做了什麼、幾版、量到什麼」；UC 若依校區工作表的 350 字元，多出 200 字元，能放進目的與時間跨度。",
          en: "Common App's 150 characters hold what he built, how many revisions, and what he measured; UC's 350 characters, if the campus worksheet figure holds, add purpose and time span."
        },
        items: [
          F("Common App：角色 50 字元、組織 100 字元、描述 150 字元。", "Common App: role 50 characters, organization 100, description 150.", ["A1-S6", "A1-S31"]),
          F("MIT 的活動表只有四項，字元上限未載明。", "MIT's activities form has four entries; character limits are not stated.", ["A2-S22"]),
          F("UC Activities & Awards 的描述 350 字元出自一個校區的工作表，系統層級頁面沒寫。", "The UC Activities & Awards 350-character description comes from one campus worksheet; the systemwide page states no limit.", ["A2-S6", "A2-S3"]),
          P("Common App（送 Stanford）— Type: Computer or technology", "Common App (for Stanford) — Type: Computer or technology"),
          P("Role: " + C(ROLE, 50), "Role: " + C(ROLE, 50)),
          P("Organization: " + C(ORG, 100), "Organization: " + C(ORG, 100)),
          P("Description: " + C(DESC, 150), "Description: " + C(DESC, 150)),
          P("Grades 10, 11, 12 · 6 h/wk · 40 wk/yr", "Grades 10, 11, 12 · 6 h/wk · 40 wk/yr"),
          P("UC（送 Berkeley）描述：" + C(UCD, 350), "UC (for Berkeley) description: " + C(UCD, 350))
        ],
        viz: {
          type: "char-meter",
          title: L("同一個專案，在 Common App 用掉 150 字元裡的大部分，在 UC 有 350 字元可用", "The same project uses most of Common App's 150 characters and has 350 to work with at UC"),
          subtitle: L("細條是已用字元／上限，由頁面即時計算；UC 的 350 出自一個校區的工作表。", "Each bar is characters used / limit, counted by the page; UC's 350 comes from one campus worksheet."),
          items: [
            { label: L("Common App · Role", "Common App · Role"), text: ROLE, limit: 50, unit: "chars", src: ["A1-S6", "A1-S31"] },
            { label: L("Common App · Organization", "Common App · Organization"), text: ORG, limit: 100, unit: "chars", src: ["A1-S6", "A1-S31"] },
            { label: L("Common App · Description", "Common App · Description"), text: DESC, limit: 150, unit: "chars", src: ["A1-S6", "A1-S31"] },
            { label: L("UC Activities & Awards · 描述", "UC Activities & Awards · Description"), text: UCD, limit: 350, unit: "chars", src: ["A2-S6"] }
          ]
        }
      },
      {
        id: "github",
        h: { zh: "GitHub 網址可以放在哪裡", en: "Where the GitHub URL can go" },
        judgment: {
          zh: "三個系統都沒有專門的 URL 欄位；只有 MIT 的 Maker Portfolio 明確要求可存取的 codebase，Stanford 說不保證看連結，Berkeley 不審主動寄送的材料。",
          en: "None of the three systems has a dedicated URL field. Only MIT's Maker Portfolio explicitly requires a reachable codebase; Stanford says there is no guarantee readers will open links, and Berkeley does not review unsolicited material."
        },
        table: {
          cols: [L("系統（學校）", "System (school)"), L("網址可放的位置", "Where the URL can go"), L("學校對開啟連結的說法", "What the school says about opening links")],
          rows: [
            ["MIT application (MIT)",
              F("申請表本身沒有連結欄位，活動與短文頁面沒提網址；Maker Portfolio 的程式專案必須附 codebase。", "No link field is documented in the application, and the essays and activities page does not mention URLs; Maker Portfolio code projects must include the codebase.", ["B3-S3", "B3-S1"]),
              F("「If we are not able to access your demo, we cannot review your project.」", "\"If we are not able to access your demo, we cannot review your project.\"", ["B3-S1"])],
            ["Common App (Stanford)",
              F("Additional information（300 字）可以放網址；Common App 說明中心沒有關於連結的說明。", "Additional information (300 words) can carry a URL; Common App's help center has no statement about links.", ["A1-S6", "B3-S40"]),
              F("Stanford：不保證讀者會看這些連結；Stanford 也不收補充材料。", "Stanford: there is no guarantee that readers will review these links; Stanford also accepts no supplementary materials.", ["B3-S21"])],
            ["UC application (Berkeley)",
              F("UC 頁面沒有記載 URL 欄位；有兩個 Additional Comments 欄。", "No URL field is documented on UC pages; there are two Additional Comments boxes.", ["B3-S36", "B3-S39"]),
              F("Berkeley：主動寄送的材料不會被審閱。", "Berkeley: unsolicited materials will not be reviewed.", ["B3-S38"])]
          ]
        },
        items: [
          I("E 同學的做法：MIT 放在 Maker Portfolio 第 14 項；Stanford 放在 Additional information 最後一行，但正文先把數據寫完，不依賴連結；Berkeley 不放，改在 PIQ 寫專案。", "Applicant E's plan: for MIT, in Maker Portfolio item 14; for Stanford, on the last line of Additional information, with the numbers already stated in the text so nothing depends on the link; for Berkeley, no link, the project goes into a PIQ instead.", ["B3-S1", "B3-S21", "B3-S38"]),
          I("三校都沒有把 GitHub 稱為繳交管道；repository 網址只是一個指標，不是送件。", "None of the three schools calls GitHub a submission channel; a repository URL is a pointer, not a submission.", ["B3-S1", "B3-S21", "B3-S38"])
        ]
      },
      {
        id: "record",
        h: { zh: "多年 build log 能進到哪裡", en: "Where the multi-year build log can go" },
        judgment: {
          zh: "Build log 只有在 MIT Maker Portfolio 能以原件送出；其他地方只能拆成時數、一行描述、300 字說明，或由第三方在推薦信裡證實。",
          en: "The build log can travel as a document only in MIT's Maker Portfolio; everywhere else it breaks down into hour fields, a one-line description, a 300-word note, or a third party vouching for it in a letter."
        },
        items: [
          F("MIT Maker Portfolio：問卷加最多 25 個附件、影片共 2 分鐘、程式需 codebase 與 demo、每人一份。", "MIT Maker Portfolio: questionnaire plus up to 25 attachments, 2 minutes of video in total, codebase and demo for code, one per applicant.", ["C1-S32"]),
          I("MIT 說缺乏製作過程證據就無法審，build log 正是這種證據，所以附件 18 放節錄。", "MIT says projects without build-process evidence cannot be reviewed, and the build log is exactly that evidence, so attachment 18 carries an excerpt.", ["B3-S1"]),
          F("Common App Activities：每週時數與每年週數兩個欄位能帶出總時數；角色 50、描述 150 字元。", "Common App Activities: the hours-per-week and weeks-per-year fields carry the total time; role 50 and description 150 characters.", ["C1-S33", "A1-S6"]),
          F("Common App Additional information：最多 300 字。", "Common App Additional information: up to 300 words.", ["A1-S6", "A1-S12"]),
          F("Common App Other Recommender 有八種類型，由各校決定接受哪些；Stanford 接受一封額外推薦信。", "Common App's Other Recommender has eight types and each college decides which it accepts; Stanford allows one additional letter.", ["C1-S35", "C1-S36", "A5a-S17"]),
          F("UC Activities & Awards 最多 20 項、六個類別；UC 要求填寫的內容「true and verifiable by an independent party」。", "UC Activities & Awards: up to 20 entries in six categories; UC requires entries to be \"true and verifiable by an independent party\".", ["C1-S39", "C1-S41"]),
          I("文字欄位（Activities、Additional information、UC Activities & Awards）只帶申請者自己的說法；能替紀錄作證的只有具名寫信的人，例如讓他借用儀器量測的工程師以 Other Recommender 身份寫給 Stanford。", "Text fields (Activities, Additional information, UC Activities & Awards) carry only the applicant's own statement; a named letter writer is the only container that brings a verifier, for example an engineer who lent him test equipment, writing to Stanford as an Other Recommender.", ["C1-S35", "C1-S41"]),
          I("git commit 歷史是公開且有時間戳記的紀錄，但三校都沒說會去讀它；它的用處是讓 build log 的日期經得起查證。", "Git commit history is public and timestamped, but none of the three schools says it will read it; its use is to make the build log's dates checkable.", ["B3-S1", "B3-S21", "B3-S38"])
        ]
      }
    ]
  };
})();
