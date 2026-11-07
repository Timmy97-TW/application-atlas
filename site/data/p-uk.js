// Page: uk (UCAS, 2027 entry). Built from research/2026-11-07_ucas-system-and-tests_v1.md (F1-*)
// and research/2026-11-07_uk-universities-engineering-biology_v1.md (F3-*). Every src id exists in data/sources.js.
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function s(zh, en) { return { zh: zh, en: en }; }
  function f(zh, en, src, sub) { var o = { t: s(zh, en), tag: "f", src: src }; if (sub) o.sub = sub; return o; }
  function inf(zh, en, src) { var o = { t: s(zh, en), tag: "i" }; if (src) o.src = src; return o; }
  function ns(src) { return { state: "not-stated", checked: "2026-11-07", src: src }; }
  function ev(date, zh, en, src, who) { var o = { date: date, t: s(zh, en), tag: "f", src: src }; if (who) o.who = who; return o; }

  var UCAS = s("UCAS", "UCAS");
  var CAM = s("Cambridge", "Cambridge");
  var UAT = s("UAT-UK", "UAT-UK");
  var LNAT = s("LNAT", "LNAT");
  var UCATW = s("UCAT（Cambridge 頁面）", "UCAT (Cambridge page)");
  var OXB = s("Oxford Biology", "Oxford Biology");

  window.ATLAS.pages["uk"] = {
    title: s("英國申請（UCAS）：2027 年入學", "UK applications (UCAS): entry 2027"),
    judgment: s(
      "UCAS 是一張表、五個志願、一份三題合計 4,000 characters 的 personal statement；對台灣申請者，卡關點在學歷：本次讀得到的各校頁面，沒有一頁提到學測或分科測驗。",
      "UCAS is one form, five choices and a three-question personal statement capped at 4,000 characters. For a Taiwan-based applicant the hard part is the qualification: none of the university pages that could be read mentions the GSAT or the Advanced Subjects Test."
    ),
    intro: s(
      "這一頁在美國 30 校之後加入，範圍是：UCAS 申請系統本身、2027 年入學會用到的入學考試，以及十所英國大學各一個工程與一個生物科系（St Andrews 沒有工程學位）。視角是人在台灣、讀台灣高中的申請者。所有資料在 2026-11-07 讀取官方頁面；ox.ac.uk、ucl.ac.uk 與 ucat.ac.uk 當天拒絕自動讀取（HTTP 403），相關欄位標為 not stated，不以記憶補寫。時間一律為英國時間。",
      "This page was added after the US top-30 work. It covers the UCAS application system, the admissions tests used for 2027 entry, and one engineering and one biology course at each of ten UK universities (St Andrews has no engineering degree). The reader is assumed to be at school in Taiwan. Every value comes from an official page read on 2026-11-07. ox.ac.uk, ucl.ac.uk and ucat.ac.uk refused automated access (HTTP 403) that day, so cells that depend on them say not stated rather than being filled from memory. All times are UK time."
    ),
    sections: [
      // ---------------------------------------------------------------- UCAS
      {
        id: "ucas",
        h: s("UCAS 申請表：欄位、志願、personal statement、reference、費用", "The UCAS application: sections, choices, personal statement, reference, fee"),
        judgment: s(
          "一份申請送五個志願，費用 £34.50；personal statement 改為三題、合計 4,000 characters、每題至少 350；reference 三段、合計 4,000 characters。",
          "One application covers five choices for £34.50. The personal statement is three questions sharing 4,000 characters, at least 350 each. The reference is three sections sharing 4,000 characters."
        ),
        items: [
          f("UCAS 表單依序為：personal details、nationality details、where you live（近三年地址，用來判定學費身分）、contact details、supporting information、finance and funding、diversity and inclusion（送出時可不填）、more about you（僅限英國地址）、education、employment、extra activities、personal statement、references。",
            "UCAS lists these sections in order: personal details; nationality details; where you live (addresses for the previous three years, used for fee status); contact details; supporting information; finance and funding; diversity and inclusion (optional for submission); more about you (UK addresses only); education; employment; extra activities; personal statement; references.",
            ["F1-S2"]),
          f("Employment 只收有薪工作，志工不放這裡；extra activities 收 summer school、taster course 等。頁面未寫 extra activities 的字數上限。",
            "Employment is for paid work only; voluntary work goes elsewhere. Extra activities covers summer schools, taster courses and similar. UCAS states no character limit for extra activities.",
            ["F1-S2"]),
          f("志願：最多 5 個，可同校同科或不同校不同科。Medicine、dentistry、veterinary medicine／science 合計最多 4 個。",
            "Choices: up to five, same or different courses and providers. Medicine, dentistry, veterinary medicine and veterinary science together may take at most four of the five.",
            ["F1-S2"]),
          f("Oxford 與 Cambridge 通常只能二選一、選一個科系；例外是 Cambridge 學士後醫學 A101，可與 Cambridge A100 及 Oxford A101 並列。",
            "Oxford and Cambridge: usually one course at one of the two. The exception is Cambridge graduate medicine (A101), which can sit alongside Cambridge A100 and Oxford A101.",
            ["F1-S2"]),
          f("報名費（2027 入學）：£34.50，涵蓋最多 5 個志願；所有欄位完成且 reference 加入後才付款。",
            "Application fee for 2027 entry: £34.50 for up to five choices, paid once every section is complete and the reference has been added.",
            ["F1-S2"]),
          f("Personal statement 自 2026 年入學起改為三題，2027 年入學沿用。題目原文：",
            "From 2026 entry onward the personal statement is three questions, so it applies to 2027 entry. The wording is:",
            ["F1-S3", "F1-S4"],
            [
              f("Q1：\"Why do you want to study this course or subject?\"", "Q1: \"Why do you want to study this course or subject?\"", ["F1-S3", "F1-S4"]),
              f("Q2：\"How have your qualifications and studies helped you to prepare for this course or subject?\"", "Q2: \"How have your qualifications and studies helped you to prepare for this course or subject?\"", ["F1-S3", "F1-S4"]),
              f("Q3：\"What else have you done to prepare outside of education, and why are these experiences useful?\"", "Q3: \"What else have you done to prepare outside of education, and why are these experiences useful?\"", ["F1-S3", "F1-S4"])
            ]),
          f("長度：三題合計 4,000 characters（含空格），每題至少 350 characters；題目本身不計入。行數上限頁面未寫。",
            "Length: 4,000 characters including spaces across all three answers, with at least 350 characters per answer. The questions themselves do not count. No line limit is stated.",
            ["F1-S3", "F1-S4"]),
          f("UCAS 給國際生的建議：Q3 適合說明為什麼要來英國讀書；Q2 不要重複別處已列的成績，可提短期線上大學課程。",
            "UCAS's tips for international students: Q3 is a good place to say why you want to study in the UK; Q2 should not repeat grades shown elsewhere and may mention a short online university course.",
            ["F1-S6"]),
          f("Reference：必須一份，由推薦人線上填寫，不可是家人、朋友或伴侶；待考科目的 predicted grades 由推薦人填。",
            "Reference: one is required. The referee writes it online; it cannot come from family, friends or a partner. Predicted grades for pending qualifications are entered by the referee.",
            ["F1-S7"]),
          f("Centre-linked reference 分三段：Establishment details、Extenuating circumstances、Other supportive information；合計 4,000 characters（含標題與換行），建議 3,800 以內，各段無個別上限，第 2、3 段可標「no information to enter」，不支援粗體、斜體、項目符號。",
            "A centre-linked reference has three sections: Establishment details, Extenuating circumstances, Other supportive information. They share 4,000 characters including headings and line breaks; UCAS advises staying under 3,800 and sets no per-section limit. Sections 2 and 3 can be marked \"no information to enter\". No bold, italics, underline or bullets.",
            ["F1-S8"]),
          f("沒有 reference 就不能送出申請；自學或已離校者可請原學校以 buzzword 連結，或請雇主寫學術型推薦。",
            "The application cannot be sent until the reference is in. Independent applicants can ask a former school to link the application with its buzzword, or ask an employer for an academic-style reference.",
            ["F1-S7", "F1-S9"]),
          inf("因為 reference 是送出的前提，10-15 截止日實際上也是推薦人的截止日；學校可能另訂更早的內部期限（UCAS 頁面未寫任何內部日期）。",
            "Because the reference must be in before sending, 15 October is in practice also the referee's deadline, and a school may set an earlier internal date. UCAS pages state no internal date.",
            ["F1-S9"]),
          f("Cambridge 另有 My Cambridge Application：UCAS 送出後 48 小時內寄出連結，2026-10-22 18:00 截止；要成績單、照片、英文成績、需要時的 SAT／AP 成績，可選填 1,200 characters 的 Cambridge 專屬陳述，多數英國、愛爾蘭以外的申請者另付 £60。Cambridge 不看上傳到 UCAS 的附加文件。",
            "Cambridge adds My Cambridge Application. The link arrives within 48 hours of UCAS submission and the deadline is 22 October 2026 at 18:00. It asks for a transcript, a photo, English test scores, SAT or AP results where required, and an optional 1,200-character Cambridge statement. Most applicants from outside the UK and Ireland pay a £60 fee. Cambridge will not review additional documents uploaded to UCAS.",
            ["F1-S23", "F1-S24", "F1-S16"]),
          inf("對 Cambridge 申請者，英文成績證明等文件要經 UCAS 與 My Cambridge Application 兩條管道各送一次。",
            "An applicant to Cambridge has to send documents such as the English test certificate through two channels, UCAS and My Cambridge Application.",
            ["F1-S2", "F1-S23"])
        ]
      },
      // ---------------------------------------------------------------- DATES
      {
        id: 'dates',
      viz: {
        type: 'ribbon', from: '2026-05-01', to: '2027-07-31',
        title: { zh: '英國申請年度：牛津劍橋與醫學在 10 月 15 日，其他多數科系在 1 月 13 日', en: 'The UK year: Oxford, Cambridge and medicine close on 15 October; most other courses on 13 January' },
        subtitle: { zh: '截止時間都是英國時間 18:00。換算成台灣時間（本站自行換算，非來源原文）：10 月中英國夏令時間為隔天 01:00，1 月為隔天 02:00。', en: 'Deadlines are 18:00 UK time. In Taiwan time (our own time-zone arithmetic, not the source\'s words): 01:00 the next day in mid-October (British Summer Time), 02:00 the next day in January.' },
        points: [
          { date: '2026-05-12', big: { zh: '5/12', en: 'May 12' }, label: { zh: 'UCAS 開放', en: 'UCAS opens' }, sub: { zh: '在 UCAS Hub 註冊並開始填寫', en: 'Register and start in UCAS Hub' }, src: ['F1-S1', 'F1-S9'] },
          { date: '2026-10-12', end: '2026-10-16', big: { zh: '10/12–16', en: 'Oct 12–16' }, label: { zh: 'ESAT／TMUA 主考期', en: 'Main ESAT/TMUA sitting' }, sub: { zh: '工程與自然科學常用的入學考試', en: 'Admissions tests used for engineering and natural sciences' }, src: ['F1-S27'] },
          { date: '2026-10-15', big: { zh: '10/15', en: 'Oct 15' }, label: { zh: '牛津、劍橋、醫學截止', en: 'Oxford, Cambridge, medicine' }, sub: { zh: '英國時間 18:00', en: '18:00 UK time' }, src: ['F1-S1', 'F1-S9', 'F1-S39'] },
          { date: '2026-12-07', end: '2026-12-18', big: { zh: '12 月', en: 'Dec' }, label: { zh: '劍橋面試期', en: 'Cambridge interviews' }, sub: { zh: '各學院自訂形式', en: 'Each College sets the format' }, src: ['F1-S22'] },
          { date: '2027-01-13', big: { zh: '1/13', en: 'Jan 13' }, label: { zh: '多數科系截止', en: 'Most other courses' }, sub: { zh: '是 13 日，不是 14 日；英國時間 18:00', en: 'The 13th, not the 14th; 18:00 UK time' }, src: ['F1-S1', 'F1-S9', 'F3-S50'] },
          { date: '2027-05-05', big: { zh: '5/5', en: 'May 5' }, label: { zh: '回覆截止（第一批）', en: 'First reply deadline' }, sub: { zh: '若 3 月 31 日前收齊所有決定', en: 'If all decisions arrived by 31 March' }, src: ['F1-S9', 'F1-S10'] },
          { date: '2027-07-02', big: { zh: '7/2', en: 'Jul 2' }, label: { zh: 'Clearing 開放', en: 'Clearing opens' }, sub: { zh: '還有名額的課程開放申請', en: 'Courses with places left open to applicants' }, src: ['F1-S1', 'F1-S9'] }
        ]
      },
        h: s("2026–27 UCAS 年度時程（2027 年入學）", "The 2026–27 UCAS year (2027 entry)"),
        judgment: s(
          "牛劍與多數醫科在 2026-10-15 18:00 截止，其餘多數課程在 2027-01-13 18:00；ESAT／TMUA 成績 11-16 才出來，晚於 10 月截止日。",
          "Oxford, Cambridge and most medicine close on 15 October 2026 at 18:00; most other courses on 13 January 2027 at 18:00. ESAT and TMUA results arrive on 16 November, after the October deadline."
        ),
        intro: s(
          "日期皆為英國時間。ESAT 報名開放日 UAT-UK 與 Cambridge 的說法不同，下表依考試主辦方 UAT-UK，差異列在「缺口」一節。",
          "All times are UK time. UAT-UK and Cambridge give different ESAT booking dates; the table follows the test owner, UAT-UK, and the difference is listed under Gaps."
        ),
        timeline: [
          ev("2026-04-28", "UCAS search 開始顯示 2027 年入學課程。", "UCAS search shows 2027-entry courses.", ["F1-S9"], UCAS),
          ev("2026-05-12", "UCAS 申請開放：可在 UCAS Hub 註冊並開始填寫。", "Applications open: register and start in UCAS Hub.", ["F1-S1", "F1-S9"], UCAS),
          ev("2026-06-01", "ESAT／TMUA 開放預約（Pearson 系統）。", "ESAT and TMUA booking opens (Pearson system).", ["F1-S27"], UAT),
          ev("2026-07-13", "UCAT 考試期間開始（Cambridge 頁面所寫）。", "UCAT testing window opens (as stated by Cambridge).", ["F1-S20"], UCATW),
          ev("2026-08-01", "LNAT 開放註冊。", "LNAT registration opens.", ["F1-S39"], LNAT),
          ev("2026-09-01", "完成的申請可以送出（須先有 reference）；LNAT 開始施測。", "Completed applications can be sent (a reference is needed first). LNAT testing starts.", ["F1-S1", "F1-S39"], UCAS),
          ev("2026-09-15", "LNAT：申請 Oxford／Cambridge 者須在此日前預約。", "LNAT: Oxford and Cambridge applicants must book by this date.", ["F1-S39"], LNAT),
          ev("2026-09-16", "UCAT（Cambridge A100／A101）註冊截止。", "UCAT registration deadline for Cambridge A100/A101.", ["F1-S20"], UCATW),
          ev("2026-09-24", "UCAT（Cambridge）最後應考日。", "Last UCAT sitting date for Cambridge.", ["F1-S20"], UCATW),
          ev("2026-09-28", "ESAT／TMUA 預約截止。", "ESAT and TMUA booking closes.", ["F1-S27", "F3-S5"], UAT),
          ev(s("2026-10-12 至 10-16", "12–16 Oct 2026"), "ESAT／TMUA 主要場次；中國、香港、澳門考場固定為 ESAT 10-12～13、TMUA 10-15～16（台灣未被列入此規定）。每個申請年度只能考一次。", "Main ESAT and TMUA sitting. Centres in China, Hong Kong and Macau have fixed days: ESAT 12–13 Oct, TMUA 15–16 Oct (Taiwan is not named in that rule). One sitting per admissions cycle.", ["F1-S27"], UAT),
          ev(s("2026-10-15 18:00", "15 Oct 2026, 18:00"), "Equal consideration 截止：Oxford、Cambridge、多數 medicine、dentistry、veterinary。LNAT 申請牛劍者最後應考日。", "Equal-consideration deadline for Oxford, Cambridge and most medicine, dentistry and veterinary courses. Last LNAT sitting for Oxford and Cambridge applicants.", ["F1-S1", "F1-S9", "F1-S39"], UCAS),
          ev(s("2026-10-22 18:00", "22 Oct 2026, 18:00"), "My Cambridge Application 與成績單截止。", "My Cambridge Application and transcript deadline.", ["F1-S16", "F1-S23"], CAM),
          ev(s("2026 年 11 月", "November 2026"), "Cambridge 面試邀請多數在 11 月寄出。", "Cambridge sends most interview invitations.", ["F1-S22"], CAM),
          ev("2026-11-16", "ESAT／TMUA 成績公布。", "ESAT and TMUA results released.", ["F1-S27"], UAT),
          ev(s("2026-12-07 至 12-18", "7–18 Dec 2026"), "Cambridge 主要面試期；形式（線上或現場）由 College 決定，許多 College 對海外申請者採線上。", "Cambridge main interview period. Each College sets the format; many interview applicants based overseas online.", ["F1-S22"], CAM),
          ev(s("2026 年 12 月", "December 2026"), "Oxford Biology 線上面試，一定會被兩個 college 面試。Oxford 其他科系的面試日期未能讀取（ox.ac.uk 403）。", "Oxford Biology holds online interviews, always at two colleges. Other Oxford interview dates could not be read (ox.ac.uk 403).", ["F3-S10", "F1-S43"], OXB),
          ev("2026-12-31", "LNAT：申請 KCL、LSE、UCL 者最後應考日。", "LNAT: last sitting for KCL, LSE and UCL applicants.", ["F1-S39"], LNAT),
          ev(s("2027-01-04 至 01-08", "4–8 Jan 2027"), "ESAT／TMUA 一月場，只開放給 Cambridge mature college 或 Oxford Foundation Year 的一月申請者。", "January ESAT/TMUA sitting, only for Cambridge mature-college or Oxford Foundation Year January applicants.", ["F1-S27"], UAT),
          ev(s("2027-01-13 18:00", "13 Jan 2027, 18:00"), "Equal consideration 截止：其餘多數大學部課程（是 13 日，不是 14 日）。", "Equal-consideration deadline for most other undergraduate courses (the 13th, not the 14th).", ["F1-S1", "F1-S9", "F3-S50"], UCAS),
          ev(s("2027 年 1 月中下旬", "Mid to late Jan 2027"), "Cambridge winter pool。", "Cambridge winter pool.", ["F1-S22", "F1-S26"], CAM),
          ev("2027-01-20", "LNAT 其他學校預約截止（01-25 前應考）；Cambridge mature 一月申請者的 My Cambridge Application 截止。", "LNAT booking deadline for most other universities (sit by 25 Jan). My Cambridge Application deadline for mature January applicants.", ["F1-S39", "F1-S16"], LNAT),
          ev("2027-01-27", "Cambridge 公布 12 月面試者的結果。", "Cambridge outcomes for December interviewees.", ["F1-S16"], CAM),
          ev("2027-02-08", "ESAT／TMUA 一月場成績公布。", "Results of the January ESAT/TMUA sitting.", ["F1-S27"], UAT),
          ev("2027-02-25", "Extra 開放：五個志願用完且沒有 offer 者，一次加一個課程。", "Extra opens: applicants who used all five choices and hold no offers can add one course at a time.", ["F1-S1", "F1-S11"], UCAS),
          ev("2027-03-31", "學校應盡量在此日前決定 01-13 前收到的申請。", "Providers should aim to decide on all applications received by 13 January.", ["F1-S9"], UCAS),
          ev("2027-05-05", "回覆期限（所有決定在 03-31 前收到者，不含 Extra）。", "Reply deadline if all decisions arrived by 31 March (not Extra).", ["F1-S9", "F1-S10"], UCAS),
          ev("2027-05-12", "01-13 前送出的申請，學校未決定者視為拒絕。", "Reject-by-default for applications submitted by 13 January.", ["F1-S9"], UCAS),
          ev("2027-06-02", "回覆期限（所有決定在 05-12 前收到者，不含 Extra）。", "Reply deadline if all decisions arrived by 12 May (not Extra).", ["F1-S9", "F1-S10"], UCAS),
          ev(s("2027-06-30 18:00", "30 Jun 2027, 18:00"), "申請送到學校的最後時間；之後的申請直接進 Clearing。", "Last time for applications to go to providers; later ones go straight into Clearing.", ["F1-S1", "F1-S9"], UCAS),
          ev("2027-07-01", "加 Extra 志願的最後一天。", "Last day to add an Extra choice.", ["F1-S1", "F1-S11"], UCAS),
          ev("2027-07-02", "Clearing 開放。", "Clearing opens.", ["F1-S1", "F1-S9"], UCAS),
          ev("2027-07-14", "06-30 前送出的申請，學校未決定者視為拒絕。", "Reject-by-default for applications submitted by 30 June.", ["F1-S9"], UCAS),
          ev("2027-07-21", "回覆期限（所有決定在 07-14 前收到者，含 Extra）。", "Reply deadline if all decisions arrived by 14 July (includes Extra).", ["F1-S9", "F1-S10"], UCAS),
          ev(s("2027-07-22 18:00", "22 Jul 2027, 18:00"), "最後一次 reply swap。", "Last reply swap.", ["F1-S1", "F1-S10"], UCAS),
          ev(s("2027-09-23 18:00", "23 Sep 2027, 18:00"), "2027 年入學申請最後期限。", "Final date for 2027-entry applications.", ["F1-S1"], UCAS),
          ev("2027-10-18", "加 Clearing 志願的最後一天。", "Last date to add a Clearing choice.", ["F1-S1", "F1-S9"], UCAS)
        ]
      },
      // ---------------------------------------------------------------- TESTS
      {
        id: "tests",
        h: s("入學考試（2027 年入學）", "Admissions tests (2027 entry)"),
        judgment: s(
          "工程與部分生物科系要考 ESAT，數學與資工類考 TMUA，兩者都由 UAT-UK 在 Pearson 考場辦，英國以外考場 £133；BMAT 與 Oxford MAT 已不再使用。",
          "ESAT covers engineering and some biology courses, TMUA covers maths and computing. Both are run by UAT-UK at Pearson centres, £133 outside the UK and Ireland. BMAT and the Oxford MAT are no longer used."
        ),
        table: {
          cols: [s("考試", "Test"), s("主辦／施測", "Owner / delivery"), s("採用學校與科系", "Used by"), s("日期", "Dates"), s("費用", "Fee")],
          rows: [
            ["ESAT",
              f("UAT-UK（Imperial 與 Cambridge 合作），在 Pearson 考場預約", "UAT-UK (Imperial and Cambridge collaboration); booked at Pearson test centres", ["F1-S28", "F1-S31"]),
              f("Cambridge：Chemical Eng & Biotechnology、Engineering、Natural Sciences、Veterinary Medicine。Oxford：Engineering Science 及分列的各工程學位、Physics、Physics & Philosophy、Biomedical Sciences。Imperial：多個工程系，以及 Biochemistry、Biological Sciences、Biotechnology、Ecology、Microbiology、Physics。UCL：Electronic & Electrical Engineering。",
                "Cambridge: Chemical Eng & Biotechnology, Engineering, Natural Sciences, Veterinary Medicine. Oxford: Engineering Science and the separately listed engineering degrees, Physics, Physics & Philosophy, Biomedical Sciences. Imperial: most engineering departments, plus Biochemistry, Biological Sciences, Biotechnology, Ecology, Microbiology, Physics. UCL: Electronic & Electrical Engineering.",
                ["F1-S32", "F1-S38", "F1-S18"]),
              f("預約 06-01～09-28；考試 2026-10-12～16；成績 11-16。一月場 2027-01-04～08（限特定一月申請者）。", "Booking 1 Jun–28 Sep 2026; sitting 12–16 Oct 2026; results 16 Nov 2026. January sitting 4–8 Jan 2027 for specific January applicants only.", ["F1-S27"]),
              f("英國／愛爾蘭考場 £78；其他地區 £133（依考場所在地，不依國籍）", "£78 at UK/Ireland centres; £133 elsewhere (by centre location, not nationality)", ["F1-S27", "F1-S30"])
            ],
            ["TMUA",
              f("UAT-UK，Pearson 考場", "UAT-UK; Pearson test centres", ["F1-S29"]),
              f("Cambridge：CS、Economics、Mathematics。Oxford：Mathematics、Maths & CS、CS 等（取代 MAT）。Imperial：Computing、Mathematics、EFDS。LSE、Warwick：部分科系必考、其他建議。Durham：Maths 建議。UCL：Economics。",
                "Cambridge: CS, Economics, Mathematics. Oxford: Mathematics, Maths & CS, CS and joint schools (replacing the MAT). Imperial: Computing, Mathematics, EFDS. LSE and Warwick: compulsory for some courses, recommended for others. Durham: recommended for Maths. UCL: Economics.",
                ["F1-S32", "F1-S34", "F1-S19"]),
              f("同 ESAT；成績 2026-11-16", "As ESAT; results 16 Nov 2026", ["F1-S27"]),
              f("£78／£133", "£78 / £133", ["F1-S27"])
            ],
            ["TARA",
              s("UAT-UK", "UAT-UK"),
              f("Oxford：Economics & Management、Experimental Psychology、PPE、Human Sciences 等。UCL：Computer Science、CS & Maths、Mechanical Engineering、Robotics & AI。",
                "Oxford: Economics & Management, Experimental Psychology, PPE, Human Sciences and others. UCL: Computer Science, CS & Maths, Mechanical Engineering, Robotics & AI.",
                ["F1-S32"]),
              ns(["F1-S27"]),
              ns(["F1-S27"])
            ],
            ["UCAT",
              s("UCAT Consortium", "UCAT Consortium"),
              f("Cambridge Medicine A100、A101（2027 只用 cognitive subtests，不用 SJT，無最低分）；Imperial Medicine。Oxford Medicine 未能確認（403）。",
                "Cambridge Medicine A100 and A101 (cognitive subtests only for 2027, no SJT, no minimum); Imperial Medicine. Oxford Medicine could not be confirmed (403).",
                ["F1-S20", "F1-S21", "F1-S38", "F1-S46"]),
              f("Cambridge：09-16 前註冊；考試期間 2026-07-13～09-24", "Cambridge: register by 16 Sep 2026; window 13 Jul–24 Sep 2026", ["F1-S20"]),
              ns(["F1-S45"])
            ],
            ["LNAT",
              s("LNAT consortium（Pearson VUE 預約）", "LNAT consortium (Pearson VUE scheduling)"),
              f("Oxford、Cambridge、UCL、KCL、LSE、Bristol、Durham 等（法律）", "Oxford, Cambridge, UCL, KCL, LSE, Bristol, Durham and others (law)", ["F1-S39", "F1-S14"]),
              f("08-01 起註冊、09-01 起施測；牛劍 09-15 前預約、10-15 前應考；KCL／LSE／UCL 12-31 前應考；其他 2027-01-20 預約、01-25 應考", "Register from 1 Aug, test from 1 Sep 2026. Oxford/Cambridge: book by 15 Sep, sit by 15 Oct. KCL/LSE/UCL: sit by 31 Dec. Most others: book by 20 Jan, sit by 25 Jan 2027.", ["F1-S39"]),
              f("£75 英國／歐盟；£120 歐盟以外（頁面標題仍是上一輪）", "£75 UK/EU; £120 outside the EU (shown under the previous cycle's heading)", ["F1-S40"])
            ],
            ["BMAT",
              s("原 Cambridge Assessment Admissions Testing", "Formerly Cambridge Assessment Admissions Testing"),
              f("本次讀到的 2027 入學頁面都沒有使用 BMAT（UCAS、Cambridge、Imperial）；原主辦單位表示已不再辦理任何考試。", "No 2027-entry user found on the pages read (UCAS, Cambridge, Imperial). The former owner says it no longer delivers any tests.", ["F1-S33", "F1-S14", "F1-S17", "F1-S38"]),
              "—", "—"
            ],
            ["MAT (Oxford)",
              s("Oxford", "Oxford"),
              f("停辦：自 2026 起 Oxford 改用 TMUA。", "Not running: from 2026 Oxford uses the TMUA.", ["F1-S34"]),
              "—", "—"
            ],
            ["PAT (Oxford)",
              s("Oxford", "Oxford"),
              f("Oxford 工程系標題仍寫 PAT 的頁面，內容描述的是 ESAT；UAT-UK 2027 名單把 Oxford Physics 與 Engineering 列在 ESAT。", "The Oxford Engineering page titled PAT describes the ESAT; the UAT-UK 2027 list puts Oxford Physics and Engineering on the ESAT.", ["F1-S36", "F1-S32"]),
              "—", "—"
            ],
            ["CSAT",
              s("外部（openclimb.io）", "External (openclimb.io)"),
              f("只有 Cambridge Computer Science 的 Peterhouse 與 Trinity。", "Cambridge Computer Science at Peterhouse and Trinity only.", ["F1-S17"]),
              ns(["F1-S17"]),
              ns(["F1-S17"])
            ]
          ]
        },
        items: [
          f("ESAT 每個 module 40 分鐘、選擇題、連續作答；Mathematics 1 必考；沒有及格線、答錯不倒扣。Module 組合由科系決定：工程與物理多為 Maths 1 + Maths 2 + Physics；Imperial 生物類為 Maths 1 + Chemistry + Biology；Cambridge NatSci 與 Oxford Biomedical Sciences 為 Maths 1 加任兩科。預約後 module 不能更改或增加，只能取消重訂。",
            "Each ESAT module is 40 minutes, multiple choice, taken back to back. Mathematics 1 is compulsory; there is no pass mark and no penalty for wrong answers. The course sets the modules: engineering and physics mostly Maths 1 + Maths 2 + Physics; Imperial's biology courses Maths 1 + Chemistry + Biology; Cambridge Natural Sciences and Oxford Biomedical Sciences Maths 1 plus any two. Modules cannot be changed or added after booking; a change means cancelling and rebooking.",
            ["F1-S18", "F1-S32"]),
          f("UAT-UK 帳號的 email 必須與 UCAS 帳號相同，姓名須與身分證件一致。台灣是否有 Pearson 考場提供 ESAT／TMUA，頁面未寫，考場只在預約時顯示。",
            "The UAT-UK account must use the same email as the UCAS account and a name that matches the ID. Whether a Pearson centre in Taiwan offers ESAT or TMUA is not stated; centres appear only during booking.",
            ["F1-S30", "F1-S28"]),
          inf("ESAT／TMUA 成績在 UCAS 10 月截止後一個月才公布，申請 Oxford、Cambridge 或要考 ESAT 的 Imperial 科系者，是在不知道分數的情況下決定五個志願。",
            "ESAT and TMUA results come a month after the October UCAS deadline, so applicants to Oxford, Cambridge or ESAT courses at Imperial choose their five UCAS choices without knowing their score.",
            ["F1-S27", "F1-S1"]),
          inf("在台灣考 ESAT／TMUA 或 LNAT，適用英國以外的較高費用。",
            "An applicant sitting in Taiwan pays the higher, outside-UK fee for ESAT, TMUA and LNAT.",
            ["F1-S30", "F1-S40"]),
          inf("UCL Mechanical Engineering 考 TARA，UCL Electronic & Electrical Engineering 與 Imperial、Oxford 工程考 ESAT；同時申請這些科系可能要考兩種 UAT-UK 考試。",
            "UCL Mechanical Engineering uses the TARA, while UCL Electronic & Electrical Engineering and Imperial and Oxford engineering use the ESAT. An applicant to both may need two different UAT-UK tests.",
            ["F1-S32"])
        ]
      },
      // ---------------------------------------------------------------- UNIS
      {
        id: "unis",
        h: s("十校工程與生物科系", "Ten universities: engineering and biology courses"),
        judgment: s(
          "要考試、要面試的集中在 Cambridge、Oxford、Imperial；其他學校多半只看成績與英文。AP 要求從「3 科 4 分」到「5 科 5 分」都有。",
          "Tests and interviews cluster at Cambridge, Oxford and Imperial; the others mostly assess grades and English. AP requirements range from three at 4+ to five at 5."
        ),
        intro: s(
          "每列一個科系。可用篩選切換工程／生物，或只看需要入學考試、會面試的科系。截止日：Oxford、Cambridge 為 2026-10-15，其餘八校依 UCAS「most undergraduate courses」為 2027-01-13（本次讀到的科系頁沒有寫個別截止日，屬推論）。IELTS 寫法為「總分／各項」。",
          "One row per course. Use the filter to switch between engineering and biology, or to show only courses with a test or an interview. Deadlines: 15 October 2026 for Oxford and Cambridge; for the other eight, 13 January 2027 under UCAS's \"most undergraduate courses\" wording (an inference: the course pages read give no course-specific date). IELTS is shown as overall / each component."
        ),
        table: {
          filter: true,
          facets: [
            { v: "eng", label: s("工程", "Engineering") },
            { v: "bio", label: s("生物", "Biology") },
            { v: "test", label: s("需入學考試", "Admissions test") },
            { v: "interview", label: s("有面試", "Interview") }
          ],
          cols: [s("大學", "University"), s("科系", "Course"), s("UCAS code", "UCAS code"), s("入學考試", "Admissions test"), s("面試", "Interview"), s("AP／SAT 路徑", "AP / SAT route"), s("台灣學歷路徑", "Taiwan qualification route"), s("英文", "English")],
          rows: [
            { filter: "eng test interview", cells: [
              "Cambridge", s("Engineering", "Engineering"), "H100",
              f("ESAT：Maths 1 + Maths 2 + Physics", "ESAT: Maths 1 + Maths 2 + Physics", ["F3-S1", "F3-S5"]),
              f("有；拿到 offer 者都面試過，形式由 College 決定", "Yes; everyone offered a place is interviewed; College sets the format", ["F3-S4"]),
              f("5 科相關 AP 5 分；理科 SAT 1500（數學 750+）或 ACT 33", "Five related APs at 5; science courses SAT 1500 (Maths 750+) or ACT 33", ["F3-S3"]),
              f("台灣有列；高中畢業證書「單獨不具競爭力」，需另有 5 科以上 AP 5 分；未提學測、分科", "Taiwan listed; Senior High certificate alone \"will not be competitive\"; add 5+ APs at 5; GSAT/AST not mentioned", ["F3-S3"]),
              f("IELTS 7.5／7.0", "IELTS 7.5 / 7.0", ["F3-S6"])
            ]},
            { filter: "bio test interview", cells: [
              "Cambridge", s("Natural Sciences（Biological）", "Natural Sciences (Biological)"), "BCF0",
              f("ESAT（課程頁未列 module；UAT-UK 名單：Maths 1 加任兩科）", "ESAT (course page lists no modules; UAT-UK list: Maths 1 plus any two)", ["F3-S2", "F1-S32"]),
              f("有，同 Engineering", "Yes, as Engineering", ["F3-S4"]),
              f("同 Engineering", "As Engineering", ["F3-S3"]),
              f("同 Engineering", "As Engineering", ["F3-S3"]),
              f("IELTS 7.5／7.0", "IELTS 7.5 / 7.0", ["F3-S6"])
            ]},
            { filter: "eng test interview", cells: [
              "Oxford", s("Engineering Science", "Engineering Science"),
              f("UAT-UK 名單為 H100；Oxford 官方頁未能讀取", "H100 on the UAT-UK list; Oxford's own page unreadable", ["F1-S32", "F3-S11"]),
              f("ESAT", "ESAT", ["F3-S8", "F3-S9"]),
              f("入圍者線上面試；同一天兩場、兩個 college", "Shortlisted candidates interviewed online; two interviews on one day at two colleges", ["F3-S8", "F3-S9"]),
              ns(["F3-S11"]),
              ns(["F3-S11"]),
              ns(["F3-S11"])
            ]},
            { filter: "bio interview", cells: [
              "Oxford", s("Biology（MBiol）", "Biology (MBiol)"),
              ns(["F3-S11"]),
              ns(["F3-S11", "F1-S44"]),
              f("12 月線上面試，一定在兩個 college", "Online in December, always at two colleges", ["F3-S10"]),
              ns(["F3-S11"]),
              ns(["F3-S11"]),
              ns(["F3-S11"])
            ]},
            { filter: "eng test interview", cells: [
              "Imperial", s("Mechanical Engineering MEng", "Mechanical Engineering MEng"), "H301",
              f("ESAT：Maths 1 + Maths 2 + Physics", "ESAT: Maths 1 + Maths 2 + Physics", ["F3-S12"]),
              f("有；線上 25–30 分鐘，11 月至 3 月週三下午", "Yes; online, 25–30 min, Wednesday afternoons Nov–Mar", ["F3-S12"]),
              f("一般：AP 5,5,5,4,4，或 AP 5,5,4 + 高中文憑 + SAT 1460／ACT 31；本科系：含 Calculus BC 與 Physics C (Mechanics) 5 分，SAT 1480 或 ACT 33", "General: APs 5,5,5,4,4, or 5,5,4 + diploma + SAT 1460 / ACT 31. This course: 5s incl. Calculus BC and Physics C (Mechanics); SAT 1480 or ACT 33", ["F3-S12", "F3-S14"]),
              f("台灣高中畢業證書列於「not accepted for entry」；需讀認可的 foundation 或外部認可學歷", "Taiwan Senior High School Graduation Certificate listed as \"not accepted for entry\"; route is an accepted foundation or external qualification", ["F3-S15", "F3-S14"]),
              f("IELTS 6.5／6.0（standard）", "IELTS 6.5 / 6.0 (standard)", ["F3-S12", "F3-S16"])
            ]},
            { filter: "bio test", cells: [
              "Imperial", s("Biological Sciences BSc", "Biological Sciences BSc"), "C100",
              f("ESAT：Maths 1 + Chemistry + Biology", "ESAT: Maths 1 + Chemistry + Biology", ["F3-S13"]),
              f("一般不面試", "Generally no interviews", ["F3-S13"]),
              f("一般路徑：AP 5,5,5,4,4，或 AP 5,5,4 + 高中文憑 + SAT 1460／ACT 31", "General route: APs 5,5,5,4,4, or 5,5,4 + diploma + SAT 1460 / ACT 31", ["F3-S14"]),
              f("同 Mechanical Engineering", "As Mechanical Engineering", ["F3-S15"]),
              f("IELTS 7.0／6.5（higher）", "IELTS 7.0 / 6.5 (higher)", ["F3-S13", "F3-S16"])
            ]},
            { filter: "eng test", cells: [
              "UCL", s("Electronic & Electrical Engineering", "Electronic & Electrical Engineering"),
              ns(["F3-S17"]),
              f("ESAT（UAT-UK 2027 名單；UCL 官網未能讀取）", "ESAT (UAT-UK 2027 list; UCL site unreadable)", ["F1-S32"]),
              ns(["F3-S17"]), ns(["F3-S17"]), ns(["F3-S17"]), ns(["F3-S17"])
            ]},
            { filter: "bio", cells: [
              "UCL", s("Biological Sciences", "Biological Sciences"),
              ns(["F3-S17"]), ns(["F3-S17"]), ns(["F3-S17"]), ns(["F3-S17"]), ns(["F3-S17"]), ns(["F3-S17"])
            ]},
            { filter: "eng", cells: [
              "Edinburgh", s("Electronics and Electrical Engineering BEng", "Electronics and Electrical Engineering BEng"),
              f("H600（MEng H601）", "H600 (MEng H601)", ["F3-S19"]),
              ns(["F3-S18"]),
              ns(["F3-S18"]),
              f("三項不同科目的標準化成績，例：3 科 AP 4+，或 ACT 27 + 2 科 AP 4+；SAT 可 superscore，ACT 不行", "Three standardised tests in different subjects, e.g. three APs at 4+, or ACT 27 plus two APs at 4+; SAT superscored, ACT not", ["F3-S23"]),
              f("高中畢業證書「通常不符合最低要求」；自家 IFP 也不直接接受；理工學院 selection test 為有限例外，將逐步取消", "Senior High diploma \"does not normally meet\" the minimum; Edinburgh's own IFP does not accept it for direct entry; a limited College of Science & Engineering selection test, to be phased out", ["F3-S22", "F3-S24"]),
              f("IELTS 6.5／5.5", "IELTS 6.5 / 5.5", ["F3-S18"])
            ]},
            { filter: "bio", cells: [
              "Edinburgh", s("Biological Sciences BSc", "Biological Sciences BSc"),
              f("C100", "C100", ["F3-S20"]),
              ns(["F3-S21"]),
              ns(["F3-S21"]),
              f("同 EEE", "As EEE", ["F3-S23"]),
              f("同 EEE", "As EEE", ["F3-S22"]),
              f("IELTS 6.5／5.5", "IELTS 6.5 / 5.5", ["F3-S21"])
            ]},
            { filter: "eng", cells: [
              "KCL", s("General Engineering BEng", "General Engineering BEng"),
              f("H100", "H100", ["F3-S25"]),
              ns(["F3-S25"]),
              ns(["F3-S25"]),
              f("AAA 課程：3 科 AP 5 + ACT 28，或 3 門 Honors／雙學籍課 A/A- + SAT 1380；或 5 科 AP 5,5,5,4,4；不採 superscore", "AAA courses: three APs at 5 + ACT 28, or three Honors/Dual Enrolment classes at A/A- + SAT 1380; or five APs 5,5,5,4,4; no superscores", ["F3-S27"]),
              f("一般入學頁未見台灣說明；King's 不接受非英國的 foundation 課程", "No Taiwan entry on the general page; King's \"cannot accept Non-UK Foundation courses\"", ["F3-S27"]),
              ns(["F3-S25", "F3-S28"])
            ]},
            { filter: "bio", cells: [
              "KCL", s("Biomedical Science BSc", "Biomedical Science BSc"),
              f("BC99", "BC99", ["F3-S26"]),
              ns(["F3-S26"]),
              ns(["F3-S26"]),
              f("同 Engineering（AAA 課程）", "As Engineering (AAA courses)", ["F3-S27"]),
              f("同 Engineering", "As Engineering", ["F3-S27"]),
              ns(["F3-S26", "F3-S28"])
            ]},
            { filter: "eng", cells: [
              "Manchester", s("Electrical and Electronic Engineering MEng", "Electrical and Electronic Engineering MEng"),
              f("H605", "H605", ["F3-S31"]),
              ns(["F3-S31"]),
              ns(["F3-S31"]),
              f("高中文憑（GPA 3.0+）+ 3 科 AP；A*AA = 5,5,5；SAT 1290／ACT 27 當作 GCSE 等級", "Diploma (GPA 3.0+) plus three APs; A*AA = 5,5,5; SAT 1290 / ACT 27 accepted as GCSE equivalents", ["F3-S30"]),
              f("高中文憑持有者須完成學校認可的 foundation；理工整合預科需總平均與數學、物理各 80% 以上", "Diploma holders must complete a University-recognised foundation; the integrated foundation year needs 80%+ overall and in Maths and Physics", ["F3-S29"]),
              f("IELTS 7.0（Writing 7.0）／其他 6.5", "IELTS 7.0 (Writing 7.0) / 6.5 other skills", ["F3-S31"])
            ]},
            { filter: "bio interview", cells: [
              "Manchester", s("Biology BSc", "Biology BSc"),
              f("C100", "C100", ["F3-S32"]),
              ns(["F3-S32"]),
              f("部分申請者可能線上或電話面試，或另寫 alternative admissions statement", "Some candidates may be interviewed online or by phone, or asked for an alternative admissions statement", ["F3-S32"]),
              f("高中文憑 + 3 科 AP；AAB = 5,5,4", "Diploma plus three APs; AAB = 5,5,4", ["F3-S30"]),
              f("須讀 foundation；生物類個案審查", "Foundation required; biosciences case by case", ["F3-S29"]),
              f("IELTS 6.5，各項不低於 6.5", "IELTS 6.5, no component below 6.5", ["F3-S32"])
            ]},
            { filter: "eng", cells: [
              "Bristol", s("Electrical and Electronic Engineering MEng", "Electrical and Electronic Engineering MEng"),
              f("H606", "H606", ["F3-S35"]),
              ns(["F3-S35"]),
              ns(["F3-S35"]),
              f("高中文憑 GPA 3.2（競爭科系 3.4）+ 三項額外成績（如 SAT EBRW 650+、ACT 28、AP 4+）；數學類科系需 AP Calculus BC 5", "Diploma GPA 3.2 (3.4 for competitive courses) plus three further qualifications (e.g. SAT EBRW 650+, ACT 28, APs at 4+); maths courses need AP Calculus BC at 5", ["F3-S34"]),
              f("台灣頁只寫完成台灣大學一年級，或五專畢業平均 80%；未提高中畢業證書、學測、分科；可走 IFP（Kaplan）", "Taiwan page covers one completed year at a Taiwanese university or a five-year junior college diploma at 80%; Senior High diploma, GSAT, AST not mentioned; IFP (Kaplan) route", ["F3-S33"]),
              f("IELTS 6.5／6.0（Profile E）", "IELTS 6.5 / 6.0 (Profile E)", ["F3-S35"])
            ]},
            { filter: "bio", cells: [
              "Bristol", s("Biology BSc", "Biology BSc"),
              f("C100", "C100", ["F3-S36"]),
              ns(["F3-S36"]),
              ns(["F3-S36"]),
              f("同 EEE", "As EEE", ["F3-S34"]),
              f("同 EEE", "As EEE", ["F3-S33"]),
              f("IELTS 6.5／6.0（Profile E）", "IELTS 6.5 / 6.0 (Profile E)", ["F3-S36"])
            ]},
            { filter: "eng", cells: [
              "Warwick", s("Engineering MEng", "Engineering MEng"),
              f("H102（BEng H100）", "H102 (BEng H100)", ["F3-S39", "F3-S43"]),
              f("未列考試；TMUA 只用於 CS 與 Mathematics", "No test listed; TMUA applies to CS and Mathematics only", ["F3-S39", "F3-S42"]),
              f("通常不面試", "\"Warwick does not typically interview applicants\"", ["F3-S39"]),
              f("（僅限 2027 入學）有文憑：3 科 AP，A*AA = GPA 3.3+ 與 5,5,5；無文憑：4–5 科 AP；工程需 AP Calculus BC 5（不收 AB）與物理 AP 5；SAT 1340／ACT 28–29 當作 GCSE 等級", "(2027 entry only) With diploma: three APs, A*AA = GPA 3.3+ and 5,5,5; without: four or five APs. Engineering: AP Calculus BC at 5 (AB not accepted) and a Physics AP at 5. SAT 1340 / ACT 28–29 as GCSE equivalents", ["F3-S38"]),
              f("「Warwick IFP required」，或改以 IB、A-level、歐美學制申請", "\"Warwick IFP required\"; alternatively IB, A Levels or a European or North American system", ["F3-S37"]),
              f("IELTS 6.0／5.5（Band A）", "IELTS 6.0 / 5.5 (Band A)", ["F3-S41"])
            ]},
            { filter: "bio", cells: [
              "Warwick", s("Biological Sciences BSc", "Biological Sciences BSc"),
              f("C100", "C100", ["F3-S40"]),
              f("未列考試", "No test listed", ["F3-S40"]),
              f("通常不面試", "Not typically", ["F3-S40", "F3-S41"]),
              f("（僅限 2027 入學）有文憑 3 科 AP，或無文憑 4–5 科 AP", "(2027 entry only) Three APs with diploma, or four or five without", ["F3-S38"]),
              f("同 Engineering", "As Engineering", ["F3-S37"]),
              f("IELTS 6.0／5.5（Band A）", "IELTS 6.0 / 5.5 (Band A)", ["F3-S41"])
            ]},
            { filter: "eng", cells: [
              "St Andrews",
              f("沒有工程學位（48 個學科領域中沒有 Engineering）", "No engineering degree (not among the 48 subject areas listed)", ["F3-S44"]),
              "—", "—", "—", "—", "—", "—"
            ]},
            { filter: "bio", cells: [
              "St Andrews", s("Biology BSc（四年制）", "Biology BSc (four years)"),
              f("C100", "C100", ["F3-S45"]),
              ns(["F3-S45"]),
              f("多數申請者不需面試", "\"Most students who apply ... will not be required to attend an interview\"", ["F3-S49"]),
              f("3 科 AP 4+；SAT 1320+／ACT 28+，2026–27 與 2027–28 兩輪 test optional", "Three APs at 4+; SAT 1320+ / ACT 28+, test optional for the 2026–27 and 2027–28 cycles", ["F3-S47"]),
              f("台灣有列；持高中畢業證書者需另有 foundation、美式課程、IB 36–38、A-level AAB–A*A*A 或 SQA Highers；未提學測、分科", "Taiwan listed; school-leaving certificate holders need a foundation, a US curriculum profile, IB 36–38, A-levels AAB–A*A*A or SQA Highers; GSAT/AST not mentioned", ["F3-S46"]),
              f("IELTS 6.5／6.0（Profile 7-D）", "IELTS 6.5 / 6.0 (Profile 7-D)", ["F3-S48"])
            ]}
          ]
        },
        items: [
          f("St Andrews 除了 UCAS 也接受 Common App 與直接申請；海外申請者用這兩種管道仍算五個英國志願之一。十校中只有它的頁面寫明非 UCAS 管道。",
            "St Andrews accepts the Common App and direct applications as well as UCAS; an overseas applicant using either still uses one of the five UK choices. It is the only one of the ten whose page states a non-UCAS route.",
            ["F3-S49"]),
          f("Imperial Biological Sciences 要考 ESAT（Maths 1、Chemistry、Biology），Cambridge Natural Sciences（Biological）現在要求數學；沒修數學的生物申請者兩校都不符合。",
            "Imperial Biological Sciences requires the ESAT (Maths 1, Chemistry, Biology), and Cambridge Natural Sciences (Biological) now requires Mathematics. A biology applicant without maths is excluded from both.",
            ["F3-S13", "F3-S2"]),
          f("同一所學校內英文門檻也可能不同：Imperial 機械 6.5／6.0、生物 7.0／6.5；Manchester 電機寫作要 7.0，高於生物。",
            "English thresholds vary inside one university: Imperial Mechanical 6.5/6.0 against Biological Sciences 7.0/6.5; Manchester EEE asks 7.0 in Writing, above its Biology course.",
            ["F3-S12", "F3-S13", "F3-S16", "F3-S31", "F3-S32"]),
          inf("Warwick 的美式成績頁註明只適用 2027 入學，AP／SAT 組合每一輪都要重查。",
            "Warwick's US page says it applies to 2027 entry only, so its AP/SAT combinations need re-checking each cycle.",
            ["F3-S38"])
        ]
      },
      // ---------------------------------------------------------------- TAIWAN
      {
        id: "taiwan",
        h: s("台灣學歷在英國申請中的位置", "How Taiwan qualifications are treated"),
        viz: {
          type: "flow",
          title: s("只拿台灣高中畢業證書，讀得到的各校都沒有直接入學的路", "With the Taiwan diploma alone, no university page that could be read offers direct entry"),
          subtitle: s("左邊是學歷路徑，右邊是各校頁面怎麼說；只畫各校頁面寫到的組合。Oxford、UCL 的頁面拒絕自動讀取。", "Routes on the left, what each university page says on the right; only combinations a page states are drawn. The Oxford and UCL pages refused automated reading."),
          columns: [{ label: s("學歷路徑", "Route") }, { label: s("大學", "University") }],
          nodes: [
            { id: "dip", col: 0, tone: "person", label: s("台灣高中畢業證書（單獨）", "Taiwan senior high diploma alone"), sub: s("各頁都沒有提到學測或分科測驗。", "None of the pages mentions the GSAT or the Advanced Subjects Test."), src: ["F3-S3", "F3-S15", "F3-S22", "F3-S27", "F3-S29", "F3-S33", "F3-S37", "F3-S46"] },
            { id: "ap", col: 0, tone: "person", label: s("＋AP", "+ AP") },
            { id: "ib", col: 0, tone: "person", label: s("IB", "IB") },
            { id: "alevel", col: 0, tone: "person", label: s("A-level", "A-level") },
            { id: "found", col: 0, tone: "person", label: s("Foundation year", "Foundation year") },
            { id: "imperial", col: 1, tone: "college", label: s("Imperial", "Imperial"), src: ["F3-S15", "F3-S14"] },
            { id: "cambridge", col: 1, tone: "college", label: s("Cambridge", "Cambridge"), src: ["F3-S3"] },
            { id: "warwick", col: 1, tone: "college", label: s("Warwick", "Warwick"), src: ["F3-S37"] },
            { id: "edinburgh", col: 1, tone: "college", label: s("Edinburgh", "Edinburgh"), sub: s("理工學院的 selection test 是有限的例外，將逐步取消。", "A College of Science & Engineering selection test is a limited exception being phased out."), src: ["F3-S22", "F3-S24"] },
            { id: "manchester", col: 1, tone: "college", label: s("Manchester", "Manchester"), src: ["F3-S29"] },
            { id: "bristol", col: 1, tone: "college", label: s("Bristol", "Bristol"), src: ["F3-S33"] },
            { id: "standrews", col: 1, tone: "college", label: s("St Andrews", "St Andrews"), src: ["F3-S46"] },
            { id: "kcl", col: 1, tone: "college", label: s("KCL", "KCL"), src: ["F3-S27"] },
            { id: "oxford", col: 1, tone: "muted", label: s("Oxford（頁面無法讀取）", "Oxford (page unreadable)"), sub: s("ox.ac.uk 回傳 HTTP 403。", "ox.ac.uk returned HTTP 403."), src: ["F3-S11"] },
            { id: "ucl", col: 1, tone: "muted", label: s("UCL（頁面無法讀取）", "UCL (page unreadable)"), sub: s("ucl.ac.uk 回傳 HTTP 403。", "ucl.ac.uk returned HTTP 403."), src: ["F3-S17"] }
          ],
          links: [
            { from: "dip", to: "imperial", tone: "no", label: s("列在「Qualifications that are not accepted for entry」", "Listed under \"Qualifications that are not accepted for entry\""), src: ["F3-S15"] },
            { from: "dip", to: "cambridge", tone: "no", label: s("單獨「不具競爭力」", "Alone \"will not be competitive\""), src: ["F3-S3"] },
            { from: "dip", to: "warwick", tone: "no", label: s("「Warwick IFP required」", "\"Warwick IFP required\""), src: ["F3-S37"] },
            { from: "dip", to: "edinburgh", tone: "no", label: s("「通常不符合最低入學要求」", "\"Does not normally meet\" the minimum"), src: ["F3-S22"] },
            { from: "dip", to: "manchester", tone: "no", label: s("須先完成學校認可的 foundation", "Must complete a University-recognised foundation first"), src: ["F3-S29"] },
            { from: "dip", to: "standrews", tone: "no", label: s("需另有 foundation、美式課程、IB、A-level 或 SQA", "Expected to hold a foundation, US curriculum profile, IB, A-levels or SQA Highers as well"), src: ["F3-S46"] },
            { from: "dip", to: "bristol", tone: "muted", label: s("未提到；台灣頁只寫大學一年級或五專畢業", "Not mentioned; the Taiwan page covers a university year or a junior-college diploma"), src: ["F3-S33"] },
            { from: "dip", to: "kcl", tone: "muted", label: s("一般入學頁沒有台灣說明", "No Taiwan entry on the general page"), src: ["F3-S27"] },
            { from: "ap", to: "cambridge", tone: "yes", label: s("5 科以上 AP 5 分，與畢業證書併用", "Five or more APs at 5, alongside the diploma"), src: ["F3-S3", "F1-S25"] },
            { from: "ib", to: "cambridge", tone: "yes", label: s("建議另有 IB", "IB suggested alongside"), src: ["F3-S3"] },
            { from: "ib", to: "warwick", tone: "yes", label: s("會考慮", "Will be considered"), src: ["F3-S37"] },
            { from: "ib", to: "standrews", tone: "yes", src: ["F3-S46"] },
            { from: "alevel", to: "cambridge", tone: "yes", label: s("建議另有 A Levels", "A Levels suggested alongside"), src: ["F3-S3"] },
            { from: "alevel", to: "warwick", tone: "yes", label: s("會考慮", "Will be considered"), src: ["F3-S37"] },
            { from: "alevel", to: "standrews", tone: "yes", src: ["F3-S46"] },
            { from: "found", to: "imperial", tone: "yes", label: s("認可的 foundation 課程", "An accepted foundation programme"), src: ["F3-S15", "F3-S14"] },
            { from: "found", to: "warwick", tone: "yes", label: s("Warwick IFP", "Warwick IFP"), src: ["F3-S37"] },
            { from: "found", to: "edinburgh", tone: "no", label: s("自家 IFP 目前不接受此學歷直接入讀", "Its own IFP does not currently accept the diploma for direct entry"), src: ["F3-S22", "F3-S24"] },
            { from: "found", to: "manchester", tone: "yes", label: s("理工整合預科：總平均與數學、物理各 80% 以上", "Integrated foundation year: 80%+ overall and in Maths and Physics"), src: ["F3-S29"] },
            { from: "found", to: "bristol", tone: "yes", label: s("IFP（Kaplan）路徑", "IFP (Kaplan) route"), src: ["F3-S33"] },
            { from: "found", to: "standrews", tone: "yes", label: s("foundation certificate", "Foundation certificate"), src: ["F3-S46"] },
            { from: "found", to: "kcl", tone: "no", label: s("不接受非英國的 foundation 課程", "\"Cannot accept Non-UK Foundation courses\""), src: ["F3-S27"] }
          ],
          legend: [
            { label: s("頁面寫可以或會考慮", "Page says accepted or considered"), shape: "line", color: "var(--c3)" },
            { label: s("不接受或單獨不夠", "Not accepted, or not enough alone"), shape: "line", color: "var(--c2)" },
            { label: s("頁面未說明", "Not stated on the page"), shape: "dash" }
          ]
        },
        judgment: s(
          "本次讀到的台灣相關頁面，沒有一頁提到學測或分科測驗；各校只評估高中畢業證書，且都認為不足以直接入學，或沒有涵蓋。",
          "None of the Taiwan-related pages read mentions the GSAT or the Advanced Subjects Test. Each assesses the senior high diploma alone and treats it as insufficient for direct entry, or does not cover it."
        ),
        items: [
          f("UCAS 的學歷欄：先搜尋學歷名稱，找不到就輸入「other」手動填寫；一律使用證書上的實際名稱與成績，不換算成英國等級。",
            "UCAS education section: search for the qualification first; if it is not listed, type \"other\" and enter it by hand. Always use the actual name and grade on the certificate; do not convert to a UK equivalent.",
            ["F1-S2"]),
          f("UCAS 的學歷清單是否列有台灣高中畢業證書、學測或 AP：公開頁面未寫，清單只在登入後的 Hub 內，本次未進入。",
            "Whether UCAS's list includes the Taiwan senior high diploma, the GSAT or AP is not stated on the public page; the list sits inside the logged-in Hub, which was not accessed.",
            ["F1-S2"]),
          f("Imperial：東亞頁把「Taiwan Senior High School Graduation Certificate」列在「Qualifications that are not accepted for entry」；提供的路徑是認可的 foundation，或在外部機構取得認可學歷。",
            "Imperial: the East Asia page lists the \"Taiwan Senior High School Graduation Certificate\" under \"Qualifications that are not accepted for entry\". The route offered is an accepted foundation programme or an accepted qualification from an external provider.",
            ["F3-S15", "F3-S14"]),
          f("Cambridge：台灣有列，但高中畢業證書「單獨不具競爭力」；建議另有 A Levels、IB，或 5 科以上 AP 5 分。",
            "Cambridge: Taiwan is listed, but the senior high certificate alone \"will not be competitive\"; it suggests A Levels, the IB, or five or more APs at 5 alongside it.",
            ["F3-S3", "F1-S25"]),
          f("Warwick：「Warwick IFP required」，或改以 IB、A Levels、其他歐洲或北美學制申請。",
            "Warwick: \"Warwick IFP required\"; alternatively IB, A Levels or another European or North American system will be considered.",
            ["F3-S37"]),
          f("Edinburgh：高中畢業證書「通常不符合最低入學要求」，多數科系需進一步學習；自家 International Foundation Programme 目前也不接受此學歷直接入讀；理工學院 selection test 是有限的例外，將逐步取消（例：工程需數學 80%、物理 60%）。",
            "Edinburgh: the diploma \"does not normally meet\" the minimum and most subjects need further study. Edinburgh's own International Foundation Programme does not currently accept it for direct entry. A College of Science & Engineering selection test is a limited exception being phased out (Engineering pass marks: Maths 80%, Physics 60%).",
            ["F3-S22", "F3-S24"]),
          f("Manchester：高中文憑持有者須完成學校認可的 foundation；理工整合預科需總平均與數學、物理各 80% 以上；生物類個案審查。",
            "Manchester: diploma holders must complete a University-recognised foundation programme. The integrated foundation year needs 80%+ overall and in Maths and Physics; biosciences are case by case.",
            ["F3-S29"]),
          f("Bristol：台灣頁只寫完成台灣大學一年級，或五專畢業平均 80%；未提高中畢業證書；另有 IFP（Kaplan）路徑。",
            "Bristol: the Taiwan page covers one completed year of a Taiwanese university degree or a five-year junior college diploma at 80%; the senior high diploma is not mentioned. An IFP (Kaplan) route exists.",
            ["F3-S33"]),
          f("St Andrews：台灣有列；持國家高中畢業證書者需另有 foundation、美式課程、IB、A-level 或 SQA 成績。",
            "St Andrews: Taiwan is listed; national school-leaving certificate holders are expected to have a foundation certificate, a US curriculum profile, the IB, A-levels or SQA Highers.",
            ["F3-S46"]),
          f("KCL：一般入學頁未見台灣說明；KCL 明寫不接受非英國的 foundation 課程。Oxford、UCL 的國際學歷頁本次無法讀取（403）。",
            "KCL: no Taiwan entry on the general page, and King's \"cannot accept Non-UK Foundation courses\". The Oxford and UCL international pages could not be read (403).",
            ["F3-S27", "F3-S11", "F3-S17"]),
          f("上述各頁都沒有提到學測（GSAT）或分科測驗（AST）。",
            "None of these pages mentions the GSAT (學測) or the Advanced Subjects Test (分科測驗).",
            ["F3-S3", "F3-S15", "F3-S22", "F3-S27", "F3-S29", "F3-S33", "F3-S37", "F3-S46"]),
          inf("對讀台灣公立高中、只有高中文憑與學測／分科成績的申請者，依上列頁面，這十校中沒有一條可確認的直接入學路徑；可行的方向是另外取得 AP（必要時加 SAT／ACT）、IB 或 A-level，或先讀一年 foundation。KCL 不收非英國 foundation，Edinburgh 自家 IFP 不收此學歷，所以 foundation 也要逐校確認。Oxford、UCL 因網頁無法讀取，未納入此判斷。",
            "For a Taiwan public-school applicant holding only the senior high diploma and GSAT/AST results, the pages above show no confirmed direct-entry route at these universities. The workable directions are adding AP (with SAT/ACT where asked), the IB or A-levels, or a foundation year first. KCL refuses non-UK foundations and Edinburgh's own IFP does not take the diploma, so the foundation route also has to be checked school by school. Oxford and UCL are left out of this judgement because their pages could not be read.",
            ["F3-S3", "F3-S15", "F3-S22", "F3-S27", "F3-S29", "F3-S33", "F3-S37", "F3-S46"]),
          inf("AP 或 A-level 要在申請前就有成績，代表學歷路徑必須在 G11 結束前規劃好。",
            "AP or A-level results need to exist before applying, so the qualification route has to be planned before the end of G11.",
            ["F1-S25", "F3-S3"])
        ]
      },
      // ---------------------------------------------------------------- GAPS
      {
        id: "gaps",
        h: s("未能確認的項目", "What stayed unverified"),
        judgment: s(
          "Oxford、UCL、UCAT 官網拒絕自動讀取，相關欄位留白；另有數項官方頁面沒寫或彼此矛盾。",
          "Oxford, UCL and UCAT sites refused automated access, so those cells are empty; several other points are unstated or contradict each other on official pages."
        ),
        items: [
          f("ox.ac.uk 回傳 HTTP 403：Oxford 的 UCAS code、IB offer、Biology 與 Medicine 的考試、AP／SAT 與台灣路徑、IELTS、面試日期、放榜日都未能確認。",
            "ox.ac.uk returned HTTP 403: Oxford UCAS codes, IB offers, the Biology and Medicine tests, AP/SAT and Taiwan routes, IELTS, interview dates and decision date are all unconfirmed.",
            ["F1-S43", "F1-S44", "F1-S46", "F3-S11"]),
          inf("Oxford Biology 不在 UAT-UK 2027 名單上，可能沒有 UAT-UK 考試，但是否有其他考試未確認。",
            "Oxford Biology is absent from the UAT-UK 2027 list, so it probably has no UAT-UK test; whether it has any test is unconfirmed.",
            ["F1-S32", "F1-S44"]),
          inf("UAT-UK 名單把 Oxford 工程分列為 Engineering Science 與多個獨立 UCAS code 的工程學位，但 Oxford 工程系 FAQ 仍描述單一學位；Oxford 可能在 2027 入學改了 code，需在 ox.ac.uk 確認。",
            "The UAT-UK list splits Oxford engineering into Engineering Science plus separately coded engineering degrees, while the department FAQ still describes a single degree. Oxford may have new UCAS codes for 2027 entry; this needs checking on ox.ac.uk.",
            ["F1-S32", "F1-S37"]),
          f("ucl.ac.uk 全站回傳 HTTP 403：UCL 兩個科系的所有欄位（除 UAT-UK 名單上的 EEE 考試外）未能確認。",
            "ucl.ac.uk returned HTTP 403 throughout: every UCL cell except the EEE test from the UAT-UK list is unconfirmed.",
            ["F3-S17"]),
          f("ucat.ac.uk 回傳 HTTP 403：UCAT 2026 費用、日期與採用學校未能從主辦方確認。",
            "ucat.ac.uk returned HTTP 403: UCAT 2026 fees, dates and member universities could not be confirmed from the test owner.",
            ["F1-S45"]),
          f("ESAT 日期兩方說法不一：Cambridge 寫 07-20 開放報名、09-14 特殊安排截止、09-21 補助截止；UAT-UK 寫 06-01 開放、07-20 特殊安排、09-14 補助。本頁依 UAT-UK。",
            "ESAT dates disagree: Cambridge says registration opens 20 July with access arrangements due 14 September and bursaries 21 September; UAT-UK says booking opened 1 June, access arrangements 20 July, bursaries 14 September. This page follows UAT-UK.",
            ["F1-S16", "F1-S18", "F1-S27"]),
          f("BMAT 停辦的確切年份：沒有官方頁面寫明。", "BMAT end date: no official page read states it.", ["F1-S33"]),
          f("Adjustment：2027 年度的 UCAS 頁面都沒有提到，也沒有說明停辦。", "Adjustment: not mentioned on any 2027-cycle UCAS page read, and no statement that it was withdrawn.", ["F1-S9", "F1-S12", "F1-S13"]),
          f("2027 年 A-level 放榜日：本次未讀到。", "2027 results-day dates: not read this run.", ["F1-S1", "F1-S9"]),
          f("台灣是否有 Pearson 考場提供 ESAT／TMUA：頁面未寫。", "Whether a Pearson centre in Taiwan offers ESAT or TMUA: not stated.", ["F1-S28", "F1-S30"]),
          f("LNAT 2026–27 費用：頁面仍掛上一輪的標題。", "LNAT 2026–27 fee: the page still shows the previous cycle's heading.", ["F1-S40"]),
          f("COPA：Cambridge 各頁都沒提到，是否正式由 My Cambridge Application 取代未說明。", "COPA: not mentioned on any Cambridge page read; whether My Cambridge Application formally replaced it is not stated.", ["F1-S24"]),
          f("KCL 兩個科系頁只顯示 A-level 一行：IB、科目要求、英文 band、面試、考試、台灣路徑未能確認。", "KCL course pages render only the A-level line: IB, subject requirements, English band, interview, test and Taiwan route are unconfirmed.", ["F3-S25", "F3-S26", "F3-S27"]),
          f("Imperial EEE 科系頁未能經由連結找到，改用 Mechanical Engineering；Bristol Biology 的 Admissions Statement PDF 未讀；Edinburgh、Bristol、Manchester EEE 頁面未寫面試政策。", "Imperial's EEE page could not be reached by following links, so Mechanical Engineering is used. Bristol Biology's Admissions Statement PDF was not read. Edinburgh, Bristol and Manchester EEE pages state no interview policy.", ["F3-S12", "F3-S36", "F3-S18", "F3-S35", "F3-S31"])
        ]
      }
    ]
  };
})();
