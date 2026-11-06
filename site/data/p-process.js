// Page: process (timeline). Built from research/2026-11-07_cycle-2026-27-calendar-part1_v1.md (A3a)
// and research/2026-11-07_cycle-2026-27-calendar-part2_v1.md (A3b). Every src id exists in data/sources.js.
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function f(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'f', src: src }; }
  function inf(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'i', src: src }; }
  function ns(src) { return { state: 'not-stated', checked: '2026-11-07', src: src }; }
  function s(zh, en) { return { zh: zh, en: en }; }

  window.ATLAS.pages['process'] = {
    title: s('申請時程：2026–27 申請季（2027 年秋季入學）', 'Timeline: the 2026–27 cycle (entry fall 2027)'),
    judgment: s(
      '11 月 1 日前後是整年最擠的時段：30 校中有 19 校的早申截止落在 11/1–11/2；國際生的財務補助截止從與申請同日到晚一個月都有，各校差異大到不能只記一個日期。',
      'The busiest point of the year is 1–2 November, when 19 of the 30 schools close an early round. International aid deadlines run from the same day as the application to about a month later, so no single rule covers them.'
    ),
    intro: s(
      '本頁的日期全部取自各校官方頁面，存取日 2026-11-07；頁面沒寫的就標「未載明」，不以推測補上。讀者設定為人在台灣（UTC+8）的國際申請者：截止時間是「申請者當地時間」還是「學校所在地時間」，只在頁面有寫的學校註明（見下方「年度時程」的說明條目）。Michigan 的官方網域於存取當日回傳 HTTP 403，整列留空。',
      'Every date on this page comes from the school\'s own pages, accessed 2026-11-07; where a page is silent the cell says "not stated" instead of guessing. The reader is assumed to be an international applicant based in Taiwan (UTC+8). Whether a deadline runs on the applicant\'s local clock or the school\'s clock is given only for schools whose pages say so (see the notes under the G12 timeline). Michigan\'s official domains returned HTTP 403 on the access date, so its row is empty.'
    ),
    sections: [
      {
        id: 'leadin',
        h: s('G9–G11：12 年級 8 月 1 日之前必須存在的東西', 'G9–G11: what must exist before 1 August of G12'),
        pending: true
      },

      {
        id: 'year',
        h: s('12 年級這一年：跨校里程碑', 'The G12 year: milestones across schools'),
        judgment: s(
          '同一天截止的學校併成一列；國際生要多盯三條線：財務補助文件（多在申請截止之後）、期中成績（多在 2 月中）、錄取後的 I-20 與簽證。',
          'Schools with the same deadline share one entry. An international applicant tracks three extra lines: aid documents (usually after the application deadline), mid-year grades (mostly mid-February), and the I-20 and visa steps after admission.'
        ),
        intro: s(
          '有些學校頁面只寫月日、沒印年份；這些日期依頁面為 2026-11-07 當下有效版本推定為本申請季（屬推論），各列的「who」與下方說明會指出。相對時段（「12 月中」）照原文放在該時段。',
          'Some school pages print a month and day but no year. Those dates are placed in this cycle because the page was the live version on 2026-11-07; that placement is an inference, flagged in the entries and in the notes below. Relative windows ("mid-December") are kept as the school words them.'
        ),
        timeline: [
          {
            date: '2026-08-01',
            t: s('UC 申請系統開放（2027 秋季入學）；UT Austin 申請開放（頁面未印年份）。', 'UC application opens for fall 2027; UT Austin application opens (year not printed on the page).'),
            tag: 'f', src: ['A3b-S23', 'A3b-S33'],
            who: s('UC（Berkeley、UCLA、UC San Diego）、UT Austin', 'UC (Berkeley, UCLA, UC San Diego), UT Austin')
          },
          {
            date: s('2026-08-15、09-01', '2026-08-15, 09-01'),
            t: s('UW 申請開放（8/15）；UIUC 申請開放（9/1）。兩校頁面都未印年份。', 'UW opens (15 Aug); UIUC opens (1 Sep). Neither page prints a year.'),
            tag: 'f', src: ['A3b-S36', 'A3b-S1'],
            who: s('UW、UIUC', 'UW, UIUC')
          },
          {
            date: '2026-10-01',
            t: s('UC 開始收件（filing period 10/1–11/30）；Stanford 的 CSS Profile／IDOC 開放；Princeton 2027–28 PFAA 開放。', 'UC filing period opens (1 Oct–30 Nov); CSS Profile/IDOC opens for Stanford; Princeton\'s 2027–28 PFAA becomes available.'),
            tag: 'f', src: ['A3b-S23', 'A3a-S22', 'A3a-S23', 'A3a-S43'],
            who: s('UC、Stanford、Princeton', 'UC, Stanford, Princeton')
          },
          {
            date: '2026-10-15',
            t: s('最早的一批早申：UT Austin EA（補充資料 10/22）；Georgia Tech EA1（僅限 Georgia 學生）；Stanford REA 附藝術作品集者須在此日先交 Common App（作品 10/20）。', 'The first early dates: UT Austin EA (supplemental materials 22 Oct); Georgia Tech EA1 (Georgia students only); Stanford REA applicants with an arts portfolio file the Common App by this date (arts materials 20 Oct).'),
            tag: 'f', src: ['A3b-S33', 'A3a-S76', 'A3a-S18'],
            who: s('UT Austin、Georgia Tech、Stanford（藝術作品集）', 'UT Austin, Georgia Tech, Stanford (arts portfolio)')
          },
          {
            date: '2026-11-01',
            t: s('早申主截止日。Harvard 的 REA 財務補助申請、Cornell 國際生 CSS Profile 也在同一天到期；MIT、Columbia 的作品集（SlideRoom）與申請同日截止。', 'The main early deadline. Harvard\'s REA aid application and Cornell\'s international CSS Profile are due the same day; MIT and Columbia portfolios (SlideRoom) share the application deadline.'),
            tag: 'f',
            src: ['A3a-S1', 'A3a-S4', 'A3a-S10', 'A3a-S18', 'A3a-S26', 'A3a-S27', 'A3a-S33', 'A3a-S41', 'A3a-S46', 'A3a-S48', 'A3a-S51', 'A3a-S56', 'A3a-S62', 'A3a-S67', 'A3a-S69', 'A3a-S80', 'A3b-S11', 'A3b-S16', 'A3b-S21', 'A3b-S1'],
            who: s(
              'EA：MIT、Georgetown（不得同時申請他校 ED）、Purdue、UIUC（未印年份）｜REA／SCEA：Caltech、Stanford、Harvard、Yale、Princeton｜ED：Columbia、Penn、Brown、Cornell、Johns Hopkins（ED I）、Northwestern（搜尋節錄）、Rice（ED I）',
              'EA: MIT, Georgetown (no binding ED elsewhere), Purdue, UIUC (year not printed) | REA/SCEA: Caltech, Stanford, Harvard, Yale, Princeton | ED: Columbia, Penn, Brown, Cornell, Johns Hopkins (ED I), Northwestern (search snippet), Rice (ED I)'
            )
          },
          {
            date: '2026-11-02',
            t: s('第二批早申：CMU ED、Georgia Tech EA2（非 Georgia 學生，含國際生，唯一可走的 EA）、Duke ED（CSS Profile 同日到期）；Brown ED 國際生 CSS Profile 截止。', 'Second early wave: CMU ED, Georgia Tech EA2 (non-Georgia students including international, the only EA open to them), Duke ED (CSS Profile due the same day); Brown ED international CSS Profile due.'),
            tag: 'f', src: ['A3a-S71', 'A3a-S76', 'A3b-S15', 'A3a-S59'],
            who: s('CMU、Georgia Tech、Duke、Brown', 'CMU, Georgia Tech, Duke, Brown')
          },
          {
            date: s('2026-11-04 至 11-09', '2026-11-04 to 11-09'),
            t: s('申請截止「之後」才到期的項目：Brown SlideRoom 作品集 11/4；Princeton 藝術補充、Cornell 音樂補充、Penn ED 財務文件 11/6；UIUC EA 全部資料 11/7；Princeton SCEA 的 PFAA 11/9。', 'Items due after the application itself: Brown SlideRoom portfolios 4 Nov; Princeton arts supplement, Cornell music supplement and Penn ED aid documents 6 Nov; UIUC EA required materials 7 Nov; Princeton SCEA PFAA 9 Nov.'),
            tag: 'f', src: ['A3a-S58', 'A3a-S41', 'A3a-S62', 'A3a-S52', 'A3b-S1', 'A3a-S43'],
            who: s('Brown、Princeton、Cornell、Penn、UIUC', 'Brown, Princeton, Cornell, Penn, UIUC')
          },
          {
            date: '2026-11-15',
            t: s('申請截止：Harvey Mudd ED I、Swarthmore ED I、UW（UW 只有這一個截止日，沒有 ED／EA）。', 'Application deadlines: Harvey Mudd ED I, Swarthmore ED I, and UW (UW\'s only deadline; it has no ED or EA).'),
            tag: 'f', src: ['A3b-S8', 'A3b-S41', 'A3b-S35', 'A3b-S36'],
            who: s('Harvey Mudd、Swarthmore、UW', 'Harvey Mudd, Swarthmore, UW')
          },
          {
            date: '2026-11-15',
            t: s('早申財務補助：Caltech REA 國際生 CSS Profile、Stanford REA 優先申請、Columbia ED、Johns Hopkins ED I、Harvey Mudd ED I（CSS Profile）、Duke ED 其他文件（如稅單）。Columbia ED 的 InitialView／Vericant 也在此日。', 'Early-round aid: Caltech REA international CSS Profile, Stanford REA priority filing, Columbia ED, Johns Hopkins ED I, Harvey Mudd ED I (CSS Profile), Duke ED other documents such as taxes. Columbia\'s ED InitialView/Vericant deadline is the same day.'),
            tag: 'f', src: ['A3a-S13', 'A3a-S22', 'A3a-S46', 'A3a-S49', 'A3b-S11', 'A3b-S8', 'A3b-S9', 'A3b-S15'],
            who: s('Caltech、Stanford、Columbia、Johns Hopkins、Harvey Mudd、Duke', 'Caltech, Stanford, Columbia, Johns Hopkins, Harvey Mudd, Duke')
          },
          {
            date: '2026-11-30',
            t: s('UC 收件截止（2026-11-30）。MIT EA 財務補助（CSS Profile + IDOC）到期；MIT EA 與 Caltech REA 的考試須在此日前完成。', 'UC filing period closes (30 Nov 2026). MIT EA aid (CSS Profile + IDOC) is due; tests for MIT EA and Caltech REA must be taken before this date.'),
            tag: 'f', src: ['A3b-S23', 'A3a-S1', 'A3a-S6', 'A3a-S11'],
            who: s('UC（Berkeley、UCLA、UC San Diego）、MIT、Caltech', 'UC (Berkeley, UCLA, UC San Diego), MIT, Caltech')
          },
          {
            date: '2026-12-01',
            t: s('UT Austin Regular 截止（補充資料 12/10）；CMU Drama／Music 與 Rice Shepherd 音樂院截止；Yale 國際生 EA 財務補助優先截止；Harvey Mudd ED I 經 IDOC 交 International Student Certification of Finances 等文件。', 'UT Austin regular deadline (supplemental materials 10 Dec); CMU Drama/Music and Rice Shepherd School of Music close; Yale international EA aid priority deadline; Harvey Mudd ED I IDOC file, including the International Student Certification of Finances.'),
            tag: 'f', src: ['A3b-S33', 'A3a-S71', 'A3a-S72', 'A3b-S21', 'A3a-S37', 'A3b-S9'],
            who: s('UT Austin、CMU、Rice、Yale、Harvey Mudd', 'UT Austin, CMU, Rice, Yale, Harvey Mudd')
          },
          {
            date: s('2026 年 12 月（多數在 12 月中）', 'December 2026 (mostly mid-month)'),
            t: s('早申放榜。有確切日期的：Johns Hopkins ED I 12/11；Georgetown、CMU「12/15 前」；Harvey Mudd ED I 12/15；Georgia Tech EA1 12 月初。其他學校寫「12 月中」或「12 月」。', 'Early-round decisions. Exact dates: Johns Hopkins ED I 11 Dec; Georgetown and CMU "by 15 December"; Harvey Mudd ED I 15 Dec; Georgia Tech EA1 early December. The others say "mid-December" or "December".'),
            tag: 'f',
            src: ['A3a-S1', 'A3a-S10', 'A3a-S18', 'A3a-S26', 'A3a-S33', 'A3a-S41', 'A3a-S46', 'A3a-S51', 'A3a-S56', 'A3a-S62', 'A3a-S69', 'A3a-S71', 'A3a-S76', 'A3b-S11', 'A3b-S8', 'A3b-S15', 'A3b-S16', 'A3b-S21', 'A3b-S41'],
            who: s(
              'MIT、Caltech、Stanford、Harvard、Yale、Princeton、Columbia、Penn、Brown、Cornell、Georgetown、CMU、Georgia Tech（EA1）、Johns Hopkins、Harvey Mudd、Duke、Northwestern、Rice、Swarthmore',
              'MIT, Caltech, Stanford, Harvard, Yale, Princeton, Columbia, Penn, Brown, Cornell, Georgetown, CMU, Georgia Tech (EA1), Johns Hopkins, Harvey Mudd, Duke, Northwestern, Rice, Swarthmore'
            )
          },
          {
            date: '2026-12-15',
            t: s('Olin 唯一截止日（申請者當地時間 11:59 p.m.）；Caltech REA 國際生 Parents\' Non-Tax Filer\'s Statement（錄取決定後交）與財務補助優先截止。', 'Olin\'s single deadline (11:59 p.m. applicant\'s local time); Caltech REA international Parents\' Non-Tax Filer\'s Statement (submitted after the admission decision) and aid priority deadline.'),
            tag: 'f', src: ['A3b-S6', 'A3a-S13'],
            who: s('Olin、Caltech', 'Olin, Caltech')
          },
          {
            date: '2027-01-01',
            t: s('RD 截止（Columbia 的 SlideRoom 作品集同日）。', 'RD deadline (Columbia SlideRoom portfolios the same day).'),
            tag: 'f', src: ['A3a-S26', 'A3a-S41', 'A3a-S46', 'A3a-S48', 'A3a-S69'],
            who: s('Harvard、Princeton、Columbia、Georgetown', 'Harvard, Princeton, Columbia, Georgetown')
          },
          {
            date: '2027-01-02',
            t: s('RD 截止；Cornell 的 AAP 作品集與國際生 CSS Profile 同日；Johns Hopkins 的 ED II 也在此日。', 'RD deadline; Cornell AAP portfolios and international CSS Profile the same day; Johns Hopkins ED II also closes.'),
            tag: 'f', src: ['A3a-S33', 'A3a-S62', 'A3a-S65', 'A3a-S67', 'A3b-S11'],
            who: s('Yale、Cornell、Johns Hopkins（ED II／RD）', 'Yale, Cornell, Johns Hopkins (ED II/RD)')
          },
          {
            date: '2027-01-04',
            t: s('RD 截止（MIT 稱 Regular Action）；Rice、Swarthmore 的 ED II 同日；Duke 藝術補充同日。', 'RD deadline (MIT calls it Regular Action); Rice and Swarthmore ED II the same day; Duke arts supplement the same day.'),
            tag: 'f', src: ['A3a-S1', 'A3a-S10', 'A3a-S16', 'A3a-S71', 'A3b-S15', 'A3b-S16', 'A3b-S21', 'A3b-S41'],
            who: s('MIT、Caltech、CMU、Duke、Northwestern、Rice、Swarthmore', 'MIT, Caltech, CMU, Duke, Northwestern, Rice, Swarthmore')
          },
          {
            date: '2027-01-05',
            t: s('RD 截止；Harvey Mudd 的 ED II 與 ED II CSS Profile 同日。UIUC 頁面未印年份。', 'RD deadline; Harvey Mudd ED II and its ED II CSS Profile the same day. UIUC\'s page prints no year.'),
            tag: 'f', src: ['A3a-S18', 'A3a-S51', 'A3a-S57', 'A3b-S8', 'A3b-S1'],
            who: s('Stanford、Penn、Brown、Harvey Mudd、UIUC', 'Stanford, Penn, Brown, Harvey Mudd, UIUC')
          },
          {
            date: '2027-01-06',
            t: s('Georgia Tech RD 截止（文件與自填成績 1/22）。', 'Georgia Tech RD deadline (documents and self-reported scores 22 Jan).'),
            tag: 'f', src: ['A3a-S76'],
            who: s('Georgia Tech', 'Georgia Tech')
          },
          {
            date: s('2027-01-07 至 01-11', '2027-01-07 to 01-11'),
            t: s('RD 截止之後才到期的作品集：Brown SlideRoom、Cornell 音樂 1/7；Princeton 藝術 1/8；CMU 建築／藝術／設計 1/11。', 'RD portfolios due after the application: Brown SlideRoom and Cornell music 7 Jan; Princeton arts 8 Jan; CMU architecture/art/design 11 Jan.'),
            tag: 'f', src: ['A3a-S58', 'A3a-S62', 'A3a-S41', 'A3a-S72'],
            who: s('Brown、Cornell、Princeton、CMU', 'Brown, Cornell, Princeton, CMU')
          },
          {
            date: '2027-01-15',
            t: s('Purdue RD 截止，同日公布 Purdue EA 結果；UT Austin EA 結果（錄取或延後）；Johns Hopkins ED II／RD 財務補助截止。', 'Purdue RD deadline, and Purdue EA decisions released the same day; UT Austin EA decisions or deferral; Johns Hopkins ED II/RD aid deadline.'),
            tag: 'f', src: ['A3a-S80', 'A3b-S33', 'A3b-S11'],
            who: s('Purdue、UT Austin、Johns Hopkins', 'Purdue, UT Austin, Johns Hopkins')
          },
          {
            date: s('2027 年 1–2 月', 'January–February 2027'),
            t: s('ED 錄取者的回覆期限遠早於 5/1：Rice ED I 訂金 1/4；Harvey Mudd ED I 1/8；Johns Hopkins ED I 1/15；Columbia ED「1 月中」；CMU ED 須於 2/1 前註冊；Harvey Mudd、Johns Hopkins ED II 2/26。', 'ED admits reply well before 1 May: Rice ED I deposit 4 Jan; Harvey Mudd ED I 8 Jan; Johns Hopkins ED I 15 Jan; Columbia ED "mid-January"; CMU ED enrol by 1 Feb; Harvey Mudd and Johns Hopkins ED II 26 Feb.'),
            tag: 'f', src: ['A3b-S21', 'A3b-S8', 'A3b-S11', 'A3a-S46', 'A3a-S71'],
            who: s('Rice、Harvey Mudd、Johns Hopkins、Columbia、CMU', 'Rice, Harvey Mudd, Johns Hopkins, Columbia, CMU')
          },
          {
            date: s('2027 年 1 月中至 1 月底', 'Mid to late January 2027'),
            t: s('MIT EA 財務補助結果（比錄取結果晚約一個月）；Georgia Tech EA2、Rice ED II 放榜；UIUC EA 通知 1/29；Olin 公布 Candidates\' Weekend 入選名單。', 'MIT EA aid offers (about a month after the admission decision); Georgia Tech EA2 and Rice ED II decisions; UIUC EA notification 29 Jan; Olin announces candidate status.'),
            tag: 'f', src: ['A3a-S6', 'A3a-S76', 'A3b-S21', 'A3b-S1', 'A3b-S6'],
            who: s('MIT、Georgia Tech、Rice、UIUC、Olin', 'MIT, Georgia Tech, Rice, UIUC, Olin')
          },
          {
            date: '2027-02-01',
            t: s('RD 財務補助截止：Harvard、Princeton（PFAA）、Penn、Brown（國際生 CSS Profile）、Georgetown（EA 與 RD 都是這天）、Duke（CSS Profile）、Harvey Mudd（RD CSS Profile 與 merit 獎學金）。', 'RD aid deadlines: Harvard, Princeton (PFAA), Penn, Brown (international CSS Profile), Georgetown (both rounds), Duke (CSS Profile), Harvey Mudd (RD CSS Profile and merit scholarship).'),
            tag: 'f', src: ['A3a-S26', 'A3a-S41', 'A3a-S43', 'A3a-S52', 'A3a-S59', 'A3a-S69', 'A3b-S15', 'A3b-S8'],
            who: s('Harvard、Princeton、Penn、Brown、Georgetown、Duke、Harvey Mudd', 'Harvard, Princeton, Penn, Brown, Georgetown, Duke, Harvey Mudd')
          },
          {
            date: '2027-02-15',
            t: s('RD 財務補助截止：MIT、Caltech（國際生 CSS Profile）、Stanford（優先）、Yale（優先）、Columbia；Harvey Mudd RD 的 IDOC 文件。', 'RD aid deadlines: MIT, Caltech (international CSS Profile), Stanford (priority), Yale (priority), Columbia; Harvey Mudd RD IDOC documents.'),
            tag: 'f', src: ['A3a-S6', 'A3a-S14', 'A3a-S23', 'A3a-S37', 'A3a-S46', 'A3b-S8'],
            who: s('MIT、Caltech、Stanford、Yale、Columbia、Harvey Mudd', 'MIT, Caltech, Stanford, Yale, Columbia, Harvey Mudd')
          },
          {
            date: s('2027 年 2 月中', 'Mid-February 2027'),
            t: s('期中成績：Stanford、Duke、Penn（延後的 ED 申請者）2/15；MIT（FUN Form）、Harvard（Midyear School Report）、Johns Hopkins「2 月中」。Princeton、Cornell、Brown、Rice（RD）、Swarthmore 寫「有成績時」；Georgia Tech 要求 RD 與延後者補交含 12 年級上學期成績的成績單。', 'Mid-year grades: Stanford, Duke and Penn (deferred ED) by 15 Feb; MIT (FUN Form), Harvard (Midyear School Report) and Johns Hopkins "mid-February". Princeton, Cornell, Brown, Rice (RD) and Swarthmore say "when available"; Georgia Tech asks RD and deferred applicants for an updated transcript with fall senior grades.'),
            tag: 'f', src: ['A3a-S18', 'A3b-S15', 'A3a-S52', 'A3a-S1', 'A3a-S26', 'A3b-S11', 'A3a-S44', 'A3a-S62', 'A3a-S58', 'A3b-S21', 'A3b-S41', 'A3a-S76'],
            who: s('Stanford、Duke、Penn、MIT、Harvard、Johns Hopkins、Princeton、Cornell、Brown、Rice、Swarthmore、Georgia Tech', 'Stanford, Duke, Penn, MIT, Harvard, Johns Hopkins, Princeton, Cornell, Brown, Rice, Swarthmore, Georgia Tech')
          },
          {
            date: s('2027 年 2 月', 'February 2027'),
            t: s('ED II 與部分 RD 放榜：Johns Hopkins ED II 2/12；Harvey Mudd ED II、UT Austin Regular 2/15；Swarthmore ED II「2 月中」；UIUC Regular 2/26。Olin Candidates\' Weekend 2/19–20、2/26–27（第三場 3/5–6），美國本土以外的申請者改為線上面試。', 'ED II and some RD decisions: Johns Hopkins ED II 12 Feb; Harvey Mudd ED II and UT Austin regular 15 Feb; Swarthmore ED II "mid-February"; UIUC regular 26 Feb. Olin Candidates\' Weekends 19–20 and 26–27 Feb (third 5–6 Mar); applicants outside the contiguous US interview online instead.'),
            tag: 'f', src: ['A3b-S11', 'A3b-S8', 'A3b-S33', 'A3b-S41', 'A3b-S1', 'A3b-S6'],
            who: s('Johns Hopkins、Harvey Mudd、UT Austin、Swarthmore、UIUC、Olin', 'Johns Hopkins, Harvey Mudd, UT Austin, Swarthmore, UIUC, Olin')
          },
          {
            date: s('2027 年 3 月', 'March 2027'),
            t: s('RD 放榜主月：UC 3/1–31；UW 3/1–15；MIT、Caltech、Georgia Tech「3 月中」；Caltech RD 國際生 Non-Tax Filer\'s Statement 3/16；Johns Hopkins 3/24；Harvard、Yale、Princeton、Columbia、Cornell、Olin、UCLA、Berkeley「3 月下旬／月底」；Northwestern「3 月」；Purdue「3/31 前」。', 'Main RD release month: UC 1–31 Mar; UW 1–15 Mar; MIT, Caltech, Georgia Tech "mid-March"; Caltech RD international Non-Tax Filer\'s Statement 16 Mar; Johns Hopkins 24 Mar; Harvard, Yale, Princeton, Columbia, Cornell, Olin, UCLA, Berkeley "late/end of March"; Northwestern "March"; Purdue "by 31 March".'),
            tag: 'f', src: ['A3b-S23', 'A3b-S35', 'A3a-S1', 'A3a-S10', 'A3a-S76', 'A3a-S14', 'A3b-S11', 'A3a-S26', 'A3a-S33', 'A3a-S41', 'A3a-S46', 'A3a-S62', 'A3b-S6', 'A3b-S29', 'A3b-S26', 'A3b-S16', 'A3a-S80'],
            who: s('UC、UW、MIT、Caltech、Georgia Tech、Johns Hopkins、Harvard、Yale、Princeton、Columbia、Cornell、Olin、Northwestern、Purdue', 'UC, UW, MIT, Caltech, Georgia Tech, Johns Hopkins, Harvard, Yale, Princeton, Columbia, Cornell, Olin, Northwestern, Purdue')
          },
          {
            date: s('2027 年 4 月初', 'Early April 2027'),
            t: s('其餘 RD 放榜：Georgetown、CMU、Rice、Swarthmore「4/1 前」；Harvey Mudd 4/1；Stanford、Brown「4 月初」；Penn「4 月」；Duke「3 月底／4 月初」。Georgetown 財務補助通知在 4 月第一週。', 'Remaining RD releases: Georgetown, CMU, Rice, Swarthmore "by 1 April"; Harvey Mudd 1 Apr; Stanford and Brown "early April"; Penn "April"; Duke "late March/early April". Georgetown aid notices arrive in the first week of April.'),
            tag: 'f', src: ['A3a-S69', 'A3a-S71', 'A3b-S21', 'A3b-S41', 'A3b-S8', 'A3a-S18', 'A3a-S57', 'A3a-S51', 'A3b-S15', 'A3a-S70'],
            who: s('Georgetown、CMU、Rice、Swarthmore、Harvey Mudd、Stanford、Brown、Penn、Duke', 'Georgetown, CMU, Rice, Swarthmore, Harvey Mudd, Stanford, Brown, Penn, Duke')
          },
          {
            date: '2027-05-01',
            t: s('RD 錄取者回覆／訂金截止（UC 稱 SIR）。Harvard 時程寫「5 月初」，REA 說明寫「5/1 前」。UW 的個別期限以錄取信為準。', 'Reply/deposit deadline for RD admits (UC calls it the SIR). Harvard\'s timeline says "early May" while its REA text says "until May 1". UW\'s individual deadline is in the offer letter.'),
            tag: 'f',
            src: ['A3a-S1', 'A3a-S12', 'A3a-S18', 'A3a-S33', 'A3a-S41', 'A3a-S46', 'A3a-S57', 'A3a-S69', 'A3a-S71', 'A3a-S76', 'A3a-S26', 'A3b-S11', 'A3b-S6', 'A3b-S23', 'A3b-S8', 'A3b-S21', 'A3b-S1', 'A3b-S36', 'A3b-S26'],
            who: s(
              'MIT、Caltech、Stanford、Yale、Princeton、Columbia、Brown、Georgetown、CMU、Georgia Tech、Harvard、Johns Hopkins、Olin、UC、Harvey Mudd、Rice、UIUC、UW',
              'MIT, Caltech, Stanford, Yale, Princeton, Columbia, Brown, Georgetown, CMU, Georgia Tech, Harvard, Johns Hopkins, Olin, UC, Harvey Mudd, Rice, UIUC, UW'
            )
          },
          {
            date: s('錄取後', 'After admission'),
            t: s('向學校證明財力：UCLA 錄取後才寄說明、現在不要寄；Swarthmore 錄取前不收 Certificate of Finances，錄取後 7 天內須完成財務文件。Rice 與 Johns Hopkins 則是隨申請就要交財力文件／COF。', 'Proof of funds to the school: UCLA sends instructions after admission and asks applicants not to send anything now; Swarthmore does not take the Certificate of Finances before admission and wants aid documents within 7 days of the decision. Rice and Johns Hopkins collect the financial statement/COF with the application instead.'),
            tag: 'f', src: ['A3b-S30', 'A3b-S42', 'A3b-S22', 'A3b-S13'],
            who: s('UCLA、Swarthmore、Rice、Johns Hopkins', 'UCLA, Swarthmore, Rice, Johns Hopkins')
          },
          {
            date: s('錄取後', 'After admission'),
            t: s('Form I-20：由學校的 Designated School Official（DSO）在錄取後簽發，學生與 DSO 都要簽名。', 'Form I-20: issued after acceptance by the school\'s Designated School Official (DSO); both the student and the DSO sign it.'),
            tag: 'f', src: ['A3b-S45'],
            who: s('所有 SEVP 認證學校', 'Any SEVP-certified school')
          },
          {
            date: s('簽證核發前', 'Before the visa is issued'),
            t: s('SEVIS I-901 費：所有非移民學生都要繳，F／M 類 $350，與簽證費分開；必須在美國國務院核發簽證前繳清。', 'SEVIS I-901 fee: required of every nonimmigrant student, $350 for F/M, separate from visa fees; it must be paid before the Department of State can issue a visa.'),
            tag: 'f', src: ['A3b-S44', 'A3b-S45'],
            who: s('F-1 申請者', 'F-1 applicants')
          },
          {
            date: s('簽證申請', 'Visa application'),
            t: s('在台協會（AIT）的 F-1 簽證面談：travel.state.gov 與 ait.org.tw 於 2026-11-07 回傳 HTTP 403，未讀到內容；本頁不陳述面談政策、免面談或排程。', 'F-1 visa interview at AIT Taipei: travel.state.gov and ait.org.tw returned HTTP 403 on 2026-11-07 and were not read; this page makes no statement about interview policy, waivers or scheduling.'),
            tag: 'f', src: ['A3b-S46', 'A3b-S47'],
            who: s('人在台灣的申請者', 'Applicants based in Taiwan')
          },
          {
            date: '2027-07-01 / 07-15',
            t: s('UC 最終正式成績單 7/1 前寄出或電子送達；AP／IB 成績 7/15。Caltech 國際生的 2025 年度報稅資料與 Scholarship Data Form 7/15（入學後交）。其他學校的最終成績單日期在已讀頁面上未載明。', 'UC final official transcripts postmarked or submitted by 1 July; AP/IB results by 15 July. Caltech international 2025 tax return and Scholarship Data Form by 15 July (after matriculation). Other schools\' final-transcript dates are not stated on the pages read.'),
            tag: 'f', src: ['A3b-S23', 'A3a-S13', 'A3a-S14'],
            who: s('UC、Caltech', 'UC, Caltech')
          },
          {
            date: s('開學前', 'Before the start date'),
            t: s('最早可在 I-20 上的課程開始日前 30 天入境。', 'Arrival is allowed up to 30 days before the program start date on the I-20.'),
            tag: 'f', src: ['A3b-S45'],
            who: s('F-1 學生', 'F-1 students')
          }
        ],
        items: [
          f('截止時間的時區，只有部分頁面有寫：Harvard REA 與 Brown RD 為 11:59 pm「local」；Olin 為「applicant\'s local time」11:59 p.m.；UIUC 為 11:59 p.m. CT（學校所在地時間）。其他學校在已讀頁面上未寫明時區。',
            'Only some pages state the clock: Harvard REA and Brown RD say 11:59 pm "local"; Olin says 11:59 p.m. "applicant\'s local time"; UIUC says 11:59 p.m. CT, the school\'s time. The other pages read do not name a time zone.',
            ['A3a-S26', 'A3a-S57', 'A3b-S6', 'A3b-S1']),
          inf('對人在台灣（UTC+8）的申請者：寫「當地時間」的學校，就是台灣時間 11:59 pm；寫美國時區（如 UIUC 的 CT）的學校，截止時刻在台灣已是隔天。未寫時區的學校，應以較早的解讀（台灣當地 11:59 pm）來準備。',
            'For an applicant in Taiwan (UTC+8): where a page says "local", the deadline is 11:59 pm Taiwan time; where it names a US zone (UIUC\'s CT), the cut-off falls on the next calendar day in Taiwan. Where a page names no zone, plan to the earlier reading, 11:59 pm Taiwan time.',
            ['A3a-S26', 'A3b-S6', 'A3b-S1']),
          f('沒有印年份、只寫月日的頁面包括：MIT、Stanford（申請頁）、Harvard（時程頁）、Yale（時程頁）、Princeton（日期頁）、Brown（申請頁）、Georgetown、CMU、Purdue、UIUC、Harvey Mudd（日期本身）、Rice、Duke、UW、UT Austin（部分日期）。',
            'Pages that print month and day but no year: MIT, Stanford (admission pages), Harvard (timeline), Yale (timeline), Princeton (dates page), Brown (admission pages), Georgetown, CMU, Purdue, UIUC, Harvey Mudd (the dates themselves), Rice, Duke, UW, UT Austin (some dates).',
            ['A3a-S1', 'A3a-S18', 'A3a-S26', 'A3a-S33', 'A3a-S41', 'A3a-S56', 'A3a-S69', 'A3a-S71', 'A3a-S80', 'A3b-S1', 'A3b-S8', 'A3b-S21', 'A3b-S15', 'A3b-S36', 'A3b-S33']),
          inf('上述日期放在 2026–27 申請季，是因為該頁是 2026-11-07 當下的有效版本；頁面本身沒有說。UIUC 的日期尤其未確認。',
            'Those dates are placed in the 2026–27 cycle because each page was the live version on 2026-11-07; the pages do not say so themselves. UIUC\'s dates in particular are unconfirmed.',
            ['A3a-S1', 'A3b-S1']),
          inf('錄取後的順序：錄取 → 訂金 → 向學校證明財力 → I-20 → I-901 → 在 AIT 申請簽證 → 開學前 30 天內入境。錄取到簽證的先後依 DHS／ICE 頁面推得；訂金與 I-20 之間各校的時間未載明。',
            'Order after admission: admit → deposit → proof of funds to the school → I-20 → I-901 → visa application at AIT → arrival within 30 days of the start date. The admission-to-visa order follows from the DHS/ICE pages; each school\'s gap between deposit and I-20 is not stated.',
            ['A3b-S44', 'A3b-S45'])
        ]
      },

      {
        id: 'byschool',
        h: s('逐校一覽：30 校的計畫、截止與政策', 'School by school: plans, deadlines and policies for all 30'),
        judgment: s(
          '同樣叫「早申」，約束力差很多：ED 有約束力，REA／SCEA 限制你在他校的早申，Georgetown 的 EA 不能同時申請 ED；UC 與 UW 根本沒有早申。',
          'Early rounds differ in what they bind you to: ED is binding, REA/SCEA restrict other early applications, Georgetown\'s EA bars binding ED elsewhere, and UC and UW have no early round at all.'
        ),
        intro: s(
          '日期照頁面原樣寫：頁面有印年份才寫年份。用上方選單可只看某一種計畫（ED、EA、REA／SCEA、ED II、RD、UC）。Michigan、Williams、Amherst 的官方網站當日拒絕自動擷取，相關格子標「未載明」並附來源；Northwestern 的資料來自搜尋引擎對官方頁面的節錄，需以瀏覽器重查。',
          'Dates are written as the page prints them, with a year only where the page gives one. Use the selector to show one plan type (ED, EA, REA/SCEA, ED II, RD, UC). Michigan, Williams and Amherst refused automated retrieval on the access date, so their cells say "not stated" with the source attached; Northwestern\'s rows come from a search engine\'s rendering of the official pages and need a browser re-check.'
        ),
        table: {
          filter: true,
          facets: [
            { v: 'ED', label: s('ED（有約束力）', 'ED (binding)') },
            { v: 'EA', label: s('EA', 'EA') },
            { v: 'REA', label: s('REA／SCEA', 'REA / SCEA') },
            { v: 'EDII', label: s('ED II', 'ED II') },
            { v: 'RD', label: s('RD', 'RD') },
            { v: 'UC', label: s('UC 系統', 'UC system') }
          ],
          cols: [
            s('學校', 'School'),
            s('早申計畫與截止', 'Early plan & deadline'),
            s('RD 截止', 'RD deadline'),
            s('放榜', 'Decision release'),
            s('國際生財務補助截止與 need 政策', 'International aid deadline & need policy'),
            s('2026–27 考試政策', 'Test policy 2026–27'),
            s('相較 2025–26 的變更', 'Changes vs 2025–26')
          ],
          rows: [
            { filter: 'EA RD', cells: [
              'MIT',
              f('EA（非限制性）11/1', 'Early Action (non-restrictive), Nov 1', ['A3a-S1']),
              f('Regular Action 1/4', 'Regular Action, Jan 4', ['A3a-S1']),
              f('EA 12 月中；RA 3 月中', 'EA mid-December; RA mid-March', ['A3a-S1']),
              f('CSS Profile + IDOC：EA 11/30、RA 2/15，國際生與本地生同一截止。MIT 自稱「need-blind and full-need」，身分不影響補助。（推論：need-blind 及於國際生，但該句未點名國際生。）', 'CSS Profile + IDOC: Nov 30 (EA) / Feb 15 (RA), same for domestic and international. MIT calls itself "need-blind and full-need"; status does not affect the aid offered. (Inference: need-blind extends to internationals; that sentence does not name them.)', ['A3a-S6', 'A3a-S7', 'A3a-S8', 'A3a-S9']),
              f('SAT 或 ACT 必繳（2022-03-28 宣布恢復）', 'SAT or ACT required (reinstated, announced 2022-03-28)', ['A3a-S2', 'A3a-S3']),
              ns(['A3a-S1'])
            ] },
            { filter: 'REA RD', cells: [
              'Caltech',
              f('REA 2026/11/1', 'Restrictive Early Action, Nov 1, 2026', ['A3a-S10', 'A3a-S12']),
              f('2027/1/4', 'Jan 4, 2027', ['A3a-S10', 'A3a-S16']),
              f('REA 2026 年 12 月中；RD 2027 年 3 月中；延後者 3 月中只會錄取或拒絕，無候補', 'REA mid-December 2026; RD mid-March 2027; deferred REA applicants get admit or deny in mid-March, no waitlist', ['A3a-S10', 'A3a-S12']),
              f('國際生 CSS Profile：REA 2026/11/15、RD 2027/2/15；Non-Tax Filer\'s Statement 2026/12/15、2027/3/16；稅單 2027/7/15。逾期不得再申請 need-based aid。「need-aware for international students」。', 'International CSS Profile: Nov 15, 2026 (REA) / Feb 15, 2027 (RD); Non-Tax Filer\'s Statement Dec 15, 2026 / Mar 16, 2027; tax return Jul 15, 2027. Missing the deadlines rules out need-based aid later. "We are need-aware for international students."', ['A3a-S13', 'A3a-S14', 'A3a-S12']),
              f('SAT 或 ACT 必繳，分科以「buckets」審閱', 'SAT or ACT required; sections reviewed in "buckets"', ['A3a-S11']),
              f('RD 從 2026/1/5（2025–26 目錄）改為 2027/1/4', 'RD moved from Jan 5, 2026 (2025–26 catalog) to Jan 4, 2027', ['A3a-S15', 'A3a-S16'])
            ] },
            { filter: 'REA RD', cells: [
              'Stanford',
              f('REA 11/1；附藝術作品集者 Common App 10/15、作品 10/20', 'REA Nov 1; with arts portfolio, Common App Oct 15 and arts materials Oct 20', ['A3a-S18']),
              f('1/5；附藝術作品集者 Common App 12/5、作品 12/10', 'Jan 5; with arts portfolio, Common App Dec 5 and arts materials Dec 10', ['A3a-S18']),
              f('REA 12 月中前；RD 4 月初前', 'REA by mid-December; RD by early April', ['A3a-S18']),
              f('CSS Profile／IDOC 優先截止：REA 11/15、RD 2/15。國際公民申請補助「will be a factor」（need-aware），錄取者補足全額需求。', 'CSS Profile/IDOC priority filing: Nov 15 (REA) / Feb 15 (RD). For international citizens an aid request "will be a factor" (need-aware); full need met for admits.', ['A3a-S22', 'A3a-S23', 'A3a-S24']),
              f('ACT 或 SAT 必繳；Class of 2029 時曾為選考', 'ACT or SAT required; scores were optional for the Class of 2029', ['A3a-S19']),
              inf('頁面未列變更；必考自 2025–26 申請季開始，本季並非新規定（推論）', 'No change listed; the requirement began with the 2025–26 cycle, so it is not new this cycle (inference)', ['A3a-S19'])
            ] },
            { filter: 'REA RD', cells: [
              'Harvard',
              f('REA 11/1，當地時間 11:59 pm', 'Restrictive Early Action, Nov 1, 11:59 pm local', ['A3a-S26']),
              f('1/1', 'Jan 1', ['A3a-S26']),
              f('REA 12 月中；RD 3 月底', 'REA mid-December; RD end of March', ['A3a-S26']),
              f('CSS Profile + IDOC，不分國籍：REA 11/1、RD 2/1。Need-blind，國際生可得同樣補助。', 'CSS Profile + IDOC regardless of citizenship: Nov 1 (REA) / Feb 1 (RD). Need-blind; international students eligible for the same aid.', ['A3a-S26', 'A3a-S27', 'A3a-S30', 'A3a-S31']),
              f('SAT 或 ACT 必繳（例外情況可用 AP／IB／A-Level／各國考試）；自 Class of 2029 恢復', 'SAT or ACT required (AP/IB/A-Level/national exams in exceptional cases); reinstated from the Class of 2029', ['A3a-S28', 'A3a-S29']),
              ns(['A3a-S26'])
            ] },
            { filter: 'REA RD', cells: [
              'Yale',
              f('SCEA 11/1', 'Single-Choice Early Action, Nov 1', ['A3a-S33']),
              f('1/2', 'Jan 2', ['A3a-S33']),
              f('SCEA 12 月中；RD 3 月下旬', 'SCEA mid-December; RD late March', ['A3a-S33']),
              f('國際生優先截止：EA 2026/12/1、RD 2027/2/15；EA 國際生自 11 月中起由財務處聯繫。對所有申請者 need-blind。', 'International priority deadlines: Dec 1, 2026 (EA) / Feb 15, 2027 (RD); international EA applicants contacted from mid-November. Need-blind for all applicants.', ['A3a-S37', 'A3a-S39', 'A3a-S38']),
              f('只接受 ACT 或 SAT；AP／IB 不再能滿足要求', 'ACT or SAT required; AP/IB no longer satisfy it', ['A3a-S34', 'A3a-S35']),
              f('test-flexible（ACT、AP、IB、SAT）改為只收 ACT／SAT，2026-05-27 宣布；招生 podcast 說「starting with this cycle」', 'Test-flexible (ACT, AP, IB, SAT) replaced by ACT/SAT only, announced 2026-05-27; admissions podcast says "starting with this cycle"', ['A3a-S35', 'A3a-S36'])
            ] },
            { filter: 'REA RD', cells: [
              'Princeton',
              f('SCEA 11/1（藝術補充 11/6）', 'Single-Choice Early Action, Nov 1 (arts supplement Nov 6)', ['A3a-S41']),
              f('1/1（藝術補充 1/8）', 'Jan 1 (arts supplement Jan 8)', ['A3a-S41']),
              f('SCEA 12 月中；RD 3 月下旬', 'SCEA mid-December; RD late March', ['A3a-S41']),
              f('PFAA：EA 11/9、RD 2/1。「Princeton admission is need-blind」，錄取國際生補足全額需求。', 'PFAA: Nov 9 (EA) / Feb 1 (RD). "Princeton admission is need-blind"; full need met for admitted international students.', ['A3a-S41', 'A3a-S43', 'A3a-S45']),
              f('2027 秋季入學為 test optional；2028 秋季入學（2027–28 申請季）恢復必考', 'Test optional for fall 2027 entry; SAT/ACT required for fall 2028 entry (2027–28 cycle)', ['A3a-S42']),
              f('本季無；下一季恢復必考', 'None this cycle; testing required from the next cycle', ['A3a-S42'])
            ] },
            { filter: 'ED RD', cells: [
              'Columbia',
              f('ED 11/1（SlideRoom 同日）', 'Early Decision, Nov 1 (SlideRoom the same day)', ['A3a-S46', 'A3a-S48']),
              f('1/1', 'Jan 1', ['A3a-S46']),
              f('ED 12 月中（錄取者 1 月中回覆）；RD 3 月下旬', 'ED mid-December (admits reply mid-January); RD late March', ['A3a-S46']),
              f('財務補助：ED 11/15、RD 2/15；須在申請時勾選。國際生「need-aware」；申請補助的國際 ED 申請者「may be deferred」至 RD。', 'Aid: Nov 15 (ED) / Feb 15 (RD); must be indicated at application. Internationals evaluated "need-aware"; international ED applicants who apply for aid "may be deferred" to RD.', ['A3a-S46', 'A3a-S50', 'A3a-S49']),
              f('Test optional；ED 收到 2026 年 11 月、RD 收到 2027 年 2 月的成績；2027 年 8 月起恢復必考', 'Test optional; scores accepted through November 2026 (ED) / February 2027 (RD); required again from August 2027', ['A3a-S47']),
              f('本季無；已宣布下一季恢復必考', 'None this cycle; reinstatement announced for the next', ['A3a-S47'])
            ] },
            { filter: 'ED RD', cells: [
              'Penn',
              f('ED 2026/11/1', 'Early Decision, Nov 1, 2026', ['A3a-S51']),
              f('2027/1/5', 'Jan 5, 2027', ['A3a-S51']),
              f('ED「12 月」；RD「4 月」；確切時間至少提前一週公布', 'ED "in December"; RD "in April"; exact time announced at least a week ahead', ['A3a-S51']),
              f('CSS Profile 與稅單：ED 11/6、RD 2/1；錄取後不能再申請。國際生「need-aware」。', 'CSS Profile and tax return/earnings statement: Nov 6 (ED) / Feb 1 (RD); aid cannot be requested after admission. "Penn is need-aware for international applicants."', ['A3a-S52', 'A3a-S54']),
              f('SAT 或 ACT 必繳（可申請 hardship waiver）；ED 最晚 2026 年 10 月 ACT／11 月 SAT，RD 2026 年 12 月', 'SAT or ACT required, hardship waiver available; latest ED sittings October 2026 (ACT) / November 2026 (SAT), RD December 2026', ['A3a-S52', 'A3a-S53']),
              ns(['A3a-S51'])
            ] },
            { filter: 'ED RD', cells: [
              'Brown',
              f('ED 11/1（SlideRoom 11/4）', 'Early Decision, Nov 1 (SlideRoom Nov 4)', ['A3a-S56', 'A3a-S58']),
              f('1/5，當地時間 11:59 pm（SlideRoom 1/7）', 'Jan 5, 11:59 pm local (SlideRoom Jan 7)', ['A3a-S57', 'A3a-S58']),
              f('ED 12 月中；RD 在 RD 頁寫「4 月初前」、在 checklist 寫「3 月下旬」', 'ED mid-December; RD "by early April" on the RD page but "Late March" on the checklist', ['A3a-S56', 'A3a-S57', 'A3a-S58']),
              f('CSS Profile（不收 ISFAA）：ED 2026/11/2、RD 2027/2/1。need-blind 那句話寫的是「applying to enter in the fall of 2025」，本季狀態頁面本身未確認。', 'CSS Profile (no ISFAA): Nov 2, 2026 (ED) / Feb 1, 2027 (RD). The need-blind sentence names applicants "applying to enter in the fall of 2025"; this cycle\'s status is not confirmed by the page\'s own wording.', ['A3a-S59']),
              f('SAT 或 ACT 必繳，自 2024–25 申請季起（2024-03-05 宣布）', 'SAT or ACT required since the 2024–25 cycle (announced 2024-03-05)', ['A3a-S60', 'A3a-S61']),
              ns(['A3a-S58'])
            ] },
            { filter: 'ED RD', cells: [
              'Cornell',
              f('ED 11/1（申請、AAP 作品集），其他資料 11/13', 'Early Decision, Nov 1 (application, AAP portfolio); other materials Nov 13', ['A3a-S62', 'A3a-S63', 'A3a-S65']),
              f('1/2，其他資料 1/19', 'Jan 2; other materials Jan 19', ['A3a-S62', 'A3a-S63']),
              f('ED 12 月中；RD 申請頁寫「3 月下旬」，FAQ 寫「4 月初」', 'ED mid-December; RD "late March" on the admissions pages, "early April" in the FAQ', ['A3a-S62', 'A3a-S63', 'A3a-S64']),
              f('國際生 CSS Profile：ED 2026/11/1、RD 2027/1/2（與申請同日；本地生優先日為 11/15、2/15）。國際生「need-aware」。', 'International CSS Profile: Nov 1, 2026 (ED) / Jan 2, 2027 (RD), the same day as the application (domestic priority dates Nov 15 / Feb 15). International admission is "need-aware".', ['A3a-S62', 'A3a-S67']),
              f('SAT 或 ACT 必繳', 'SAT or ACT required', ['A3a-S66']),
              ns(['A3a-S62'])
            ] },
            { filter: 'EA RD', cells: [
              'Georgetown',
              f('EA 11/1（不具約束力，但不得同時申請任何具約束力的 ED）', 'Early Action, Nov 1 (non-binding, but no binding ED elsewhere)', ['A3a-S69']),
              f('1/1', 'Jan 1', ['A3a-S69']),
              f('EA「12/15 前」；RD「4/1 前」', 'EA "by December 15"; RD "by April 1"', ['A3a-S69']),
              f('財務補助申請 2/1（兩輪相同），須在申請表表明並交 CSS Profile；國際生只有「very limited number」的 need-based 獎學金。need-blind／aware 字樣頁面未寫。', 'Aid application Feb 1 for both rounds; intent must be shown on the application, with a CSS Profile. Internationals are considered for "a very limited number" of need-based scholarships. The page does not use need-blind or need-aware.', ['A3a-S69', 'A3a-S70']),
              f('SAT 或 ACT 必繳，須正式成績', 'SAT or ACT required; official scores required', ['A3a-S69', 'A3a-S70']),
              ns(['A3a-S69'])
            ] },
            { filter: 'ED RD', cells: [
              'Carnegie Mellon',
              f('ED（單一輪）11/2；Drama、BXA Design、Music 不開放 ED；RD 改 ED 須在 11/1 前寄信', 'Early Decision (single round), Nov 2; not open to Drama, BXA Design, Music; RD-to-ED switch by email by Nov 1', ['A3a-S71']),
              f('1/4；Drama／Music 12/1；建築／藝術／設計作品集 1/11', 'Jan 4; Drama/Music Dec 1; architecture/art/design portfolio Jan 11', ['A3a-S71', 'A3a-S72']),
              f('ED 12/15 前（2/1 前註冊）；RD 最晚 4/1', 'ED by Dec 15 (enrol by Feb 1); RD no later than April 1', ['A3a-S71']),
              f('「Carnegie Mellon doesn\'t offer financial aid to international students」', '"Carnegie Mellon doesn\'t offer financial aid to international students"', ['A3a-S74', 'A3a-S75']),
              f('依學院而異：資工（SCS）必繳 SAT／ACT；工學院等為 test flexible（SAT、ACT、IB、AP、A-Level、French Bac）；CFA test optional', 'By college: Computer Science (SCS) requires SAT or ACT; Engineering and others are test flexible (SAT, ACT, IB, AP, A-Level, French Bac); CFA test optional', ['A3a-S73']),
              ns(['A3a-S71'])
            ] },
            { filter: 'EA RD', cells: [
              'Georgia Tech',
              f('EA1 10/15（僅 Georgia 學生）；EA2 11/2（非 Georgia，含國際生）', 'EA1 Oct 15 (Georgia students only); EA2 Nov 2 (non-Georgia, including international)', ['A3a-S76']),
              f('1/6（文件 1/22）', 'Jan 6 (documents Jan 22)', ['A3a-S76']),
              f('EA1 12 月初；EA2 1 月下旬；RD 3 月中', 'EA1 early December; EA2 late January; RD mid-March', ['A3a-S76']),
              ns(['A3a-S76']),
              f('至少一次 SAT 及／或 ACT 必繳', 'At least one SAT and/or ACT required', ['A3a-S77']),
              ns(['A3a-S76'])
            ] },
            { filter: 'EA RD', cells: [
              'Purdue',
              f('EA 11/1（同時是 merit 獎學金、Honors College 與工程、資工等熱門科系的優先截止）', 'Early Action, Nov 1 (also merit/Honors College deadline and priority date for engineering, computer science and other competitive majors)', ['A3a-S80']),
              f('1/15', 'Jan 15', ['A3a-S80']),
              f('EA 1/15 公布；RD 3/31 前', 'EA decisions Jan 15; RD by Mar 31', ['A3a-S80']),
              ns(['A3a-S81', 'A3a-S83']),
              f('「accepts SAT, ACT and CLT scores」，審查因素寫「(if provided)」；是否必繳頁面未寫', '"accepts SAT, ACT and CLT scores"; the factor list says "(if provided)"; whether tests are required is not stated', ['A3a-S82']),
              f('「Beginning in 2026」印第安納州法要求對持特定國籍者（含中國、香港、澳門）增加審查步驟', '"Beginning in 2026, Indiana law requires additional review steps" for holders of listed citizenships, including China (with Hong Kong and Macau)', ['A3a-S83'])
            ] },
            { filter: '', cells: [
              f('Michigan（Ann Arbor）：官方網域於 2026-11-07 回傳 HTTP 403，未讀到內容，所有欄位留空、不推測', 'Michigan (Ann Arbor): official domains returned HTTP 403 on 2026-11-07; nothing was read, so every cell is left empty and nothing is inferred', ['A3a-S84', 'A3a-S85']),
              ns(['A3a-S84']),
              ns(['A3a-S84']),
              ns(['A3a-S84']),
              ns(['A3a-S85']),
              ns(['A3a-S84']),
              ns(['A3a-S84'])
            ] },
            { filter: 'EA RD', cells: [
              'UIUC',
              f('EA 11/1，資料 11/7，11:59 p.m. CT（頁面未印年份）', 'Early Action, Nov 1; materials Nov 7; 11:59 p.m. CT (no year on page)', ['A3b-S1', 'A3b-S2']),
              f('1/5，資料 1/11', 'Jan 5; materials Jan 11', ['A3b-S1']),
              f('EA 1/29；RD 2/26；榮譽與獎學金 4/1', 'EA Jan 29; RD Feb 26; honors & scholarships Apr 1', ['A3b-S1']),
              f('國際生不能申請聯邦或州政府補助，可能獲學院或系所獎學金；need-blind／aware 未寫', 'Not eligible for federal or state aid; may be considered for college/department scholarships; need-blind/aware not stated', ['A3b-S4', 'A3b-S3']),
              f('SAT／ACT 選繳（「If you choose to have your SAT/ACT considered」）；英語能力證明不可免', 'SAT/ACT optional ("If you choose to have your SAT/ACT considered"); English proficiency cannot be waived', ['A3b-S3']),
              ns(['A3b-S1'])
            ] },
            { filter: 'RD', cells: [
              'Olin',
              f('無早申；單一截止', 'No early plan; single deadline', ['A3b-S5', 'A3b-S6']),
              f('2026/12/15，申請者當地時間 11:59 p.m.', 'Dec 15, 2026, 11:59 p.m. applicant\'s local time', ['A3b-S6']),
              f('1 月下旬公布入圍；必須參加 Candidates\' Weekend（美國本土以外者線上面試）；2027 年 3 月下旬放榜', 'Candidate status late January; Candidates\' Weekend required (virtual interview outside the contiguous US); decisions late March 2027', ['A3b-S6']),
              f('國際生「generally eligible only for merit-based aid」（2026–27 目錄）；need 政策未寫', 'International students "generally eligible only for merit-based aid" (2026–27 catalog); need policy not stated', ['A3b-S7']),
              f('暫停考試要求，延長至 2026–27 申請季', 'Test requirement suspension extended through the 2026–27 cycle', ['A3b-S5']),
              f('暫停考試要求「延長」，與上一季相同', 'Test suspension "extended", so the same status as before', ['A3b-S5'])
            ] },
            { filter: 'ED EDII RD', cells: [
              'Harvey Mudd',
              f('ED I 11/15；ED II 1/5', 'ED I Nov 15; ED II Jan 5', ['A3b-S8']),
              f('1/5', 'Jan 5', ['A3b-S8']),
              f('ED I 12/15；ED II 2/15；RD 4/1', 'ED I Dec 15; ED II Feb 15; RD Apr 1', ['A3b-S8']),
              f('ED I 國際生：CSS Profile 2026/11/15；IDOC（含 International Student Certification of Finances、2025 年稅單英譯、至 2026/10/31 的銀行對帳單）2026/12/1。RD：CSS 2/1、IDOC 2/15。國際生申請補助為 need-aware。', 'ED I international: CSS Profile Nov 15, 2026; IDOC (International Student Certification of Finances, translated 2025 tax return, bank statements to Oct 31, 2026) Dec 1, 2026. RD: CSS Feb 1, IDOC Feb 15. Need-aware for international aid applicants.', ['A3b-S8', 'A3b-S9', 'A3b-S10']),
              f('2027 秋季入學 test-optional；2028 秋季入學恢復必考', 'Test-optional for fall 2027; required again for fall 2028', ['A3b-S8', 'A3b-S10']),
              f('已宣布 2028 秋季入學起恢復必考', 'Required testing announced from fall 2028 entry', ['A3b-S8'])
            ] },
            { filter: 'ED EDII RD', cells: [
              'Johns Hopkins',
              f('ED I 2026/11/1；ED II 2027/1/2', 'ED I Nov 1, 2026; ED II Jan 2, 2027', ['A3b-S11']),
              f('2027/1/2', 'Jan 2, 2027', ['A3b-S11']),
              f('ED I 2026/12/11；ED II 2027/2/12；RD 2027/3/24', 'ED I Dec 11, 2026; ED II Feb 12, 2027; RD Mar 24, 2027', ['A3b-S11']),
              f('補助截止：ED I 2026/11/15、ED II／RD 2027/1/15。所有國際公民都須交 COF，否則申請不完整；國際生無 CSS 費用減免。國際生「need-aware」，錄取者補足 100% 需求。', 'Aid: Nov 15, 2026 (ED I) / Jan 15, 2027 (ED II, RD). Every international citizen submits a COF or the application is incomplete; no CSS fee waivers for international applicants. "Need-aware for international students"; 100% of need met for admits.', ['A3b-S11', 'A3b-S13']),
              f('SAT 或 ACT 必繳', 'SAT or ACT required', ['A3b-S12', 'A3b-S14']),
              inf('必考自 2026 秋季入學開始，本季是第二個必考季；未列其他變更（推論）', 'The requirement began with fall 2026 entry, so this is the second required cycle; no other change listed (inference)', ['A3b-S12', 'A3b-S14'])
            ] },
            { filter: 'ED RD', cells: [
              'Duke',
              f('ED 11/2（藝術補充同日）', 'Early Decision, Nov 2 (arts supplement the same day)', ['A3b-S15']),
              f('1/4（藝術補充同日）', 'Jan 4 (arts supplement the same day)', ['A3b-S15']),
              f('ED 12 月中；RD 3 月底／4 月初', 'ED mid-December; RD late March/early April', ['A3b-S15']),
              f('CSS Profile：ED 11/2（其他文件 11/15）、RD 2/1。外國公民須在原始申請時申請 need-based aid；申請補助者的錄取率「usually less than half of the overall admit rate」。頁面未用 need-aware 一詞。', 'CSS Profile: Nov 2 (ED; other documents Nov 15) / Feb 1 (RD). Foreign citizens must request need-based aid in the original application; their admit rate is "usually less than half of the overall admit rate". The page does not use the term need-aware.', ['A3b-S15']),
              f('2026–27 申請季 test-optional', 'Test-optional in the 2026–27 cycle', ['A3b-S15']),
              ns(['A3b-S15'])
            ] },
            { filter: 'ED RD', cells: [
              'Northwestern',
              f('ED 2026/11/1（搜尋節錄，待重查）', 'Early Decision, Nov 1, 2026 (search snippet; re-check)', ['A3b-S16']),
              f('2027/1/4（搜尋節錄）', 'Jan 4, 2027 (search snippet)', ['A3b-S16']),
              f('ED 2026 年 12 月；RD 2027 年 3 月（搜尋節錄）', 'ED December 2026; RD March 2027 (search snippet)', ['A3b-S16']),
              f('國際生 need-aware，須在申請表勾選；CSS Profile（code 1565）或 ISAFA。補助截止日未在官方頁驗證（搜尋節錄）。', 'Need-aware for international aid applicants, opt-in on the application; CSS Profile (code 1565) or ISAFA. Aid deadlines not verified on an official page (search snippet).', ['A3b-S19']),
              f('不要求 ACT／SAT（搜尋節錄）', 'ACT/SAT not required (search snippet)', ['A3b-S17', 'A3b-S18']),
              f('2026 冬季 counselor update 表示 test-optional 延續（搜尋節錄）', 'Winter 2026 counselor update says test-optional continues (search snippet)', ['A3b-S18'])
            ] },
            { filter: 'ED EDII RD', cells: [
              'Rice',
              f('ED I 11/1；ED II 1/4；Shepherd 音樂院 12/1 且不開放 ED', 'ED I Nov 1; ED II Jan 4; Shepherd School of Music Dec 1 and not open to ED', ['A3b-S21']),
              f('1/4', 'Jan 4', ['A3b-S21']),
              f('ED I 12 月中前；ED II 1 月下旬前；RD 4/1 前', 'ED I by mid-December; ED II by late January; RD by April 1', ['A3b-S21']),
              f('International Student Financial Statement 隨申請於各輪截止日交；資金低於 $101,634 須說明；不收稅單作財力證明。國際生「need-aware」。', 'International Student Financial Statement due with the application on each plan deadline; an explanation is required if funds total less than $101,634; tax documents not accepted. International applicants considered "on a need-aware basis".', ['A3b-S22']),
              f('「Rice recommends」SAT／ACT，但不繳也完整審查', '"Rice recommends" SAT/ACT; applicants without scores get full consideration', ['A3b-S21']),
              ns(['A3b-S21'])
            ] },
            { filter: 'UC', cells: [
              'UC Berkeley',
              f('無早申（UC 系統）', 'No early plan (UC system)', ['A3b-S23']),
              f('收件期 10/1–11/30（UC 系統頁：2026-11-30）；Berkeley 必填表格 1/31', 'Filing Oct 1–Nov 30 (UC system page: Nov 30, 2026); Berkeley mandatory forms Jan 31', ['A3b-S26', 'A3b-S23']),
              f('3 月底；UC 系統窗口 2027/3/1–31', 'End of March; UC system window Mar 1–31, 2027', ['A3b-S26', 'A3b-S23']),
              f('國際生不能申請聯邦、州與校方 need-based 補助', 'International students ineligible for federal, state and need-based university aid', ['A3b-S28']),
              f('「test-free」：申請任何環節都不使用 SAT／ACT', '"Test-free": SAT/ACT not used in any part of the application', ['A3b-S27', 'A3b-S25']),
              ns(['A3b-S26'])
            ] },
            { filter: 'UC', cells: [
              'UCLA',
              f('無早申（UC 系統）', 'No early plan (UC system)', ['A3b-S23']),
              f('表格寫 10/1–11/30，同頁另一句寫「October 1-December 1」；UC 系統頁為 2026-11-30', 'Table says Oct 1–Nov 30; a sentence on the same page says "October 1-December 1"; the UC system page says Nov 30, 2026', ['A3b-S29', 'A3b-S23']),
              f('3 月下旬', 'Late March', ['A3b-S29']),
              f('不提供非美國公民或永久居民的大學部獎學金或補助；財力證明說明於錄取後寄送', 'No scholarships or aid for undergraduates who are not US citizens or permanent residents; proof-of-funds instructions come after admission', ['A3b-S30']),
              f('SAT／ACT 不納入錄取或獎學金考量（test-free）', 'SAT/ACT not considered for admission or scholarships (test-free)', ['A3b-S30']),
              ns(['A3b-S29'])
            ] },
            { filter: 'UC', cells: [
              'UC San Diego',
              f('無早申（UC 系統）', 'No early plan (UC system)', ['A3b-S23']),
              f('UC 系統收件期 2026/10/1–11/30', 'UC system filing period Oct 1–Nov 30, 2026', ['A3b-S23']),
              f('校方頁未寫；UC 系統窗口 2027/3/1–31', 'Not on the campus page; UC system window Mar 1–31, 2027', ['A3b-S23']),
              ns(['A3b-S31', 'A3b-S32']),
              f('SAT／ACT 不列入錄取考量', 'SAT/ACT not considered in admission', ['A3b-S31']),
              f('TOEFL 最低分自 2026 年 1 月改用新分數尺度（TOEFL 的變更，非 UCSD 政策變更）', 'TOEFL minimum restated on the new score scale from January 2026 (a TOEFL change, not a UCSD policy change)', ['A3b-S31'])
            ] },
            { filter: 'EA RD', cells: [
              'UT Austin',
              f('Early Action 10/15，補充資料 10/22', 'Early Action, Oct 15; supplemental materials Oct 22', ['A3b-S33']),
              f('12/1，補充資料 12/10', 'Dec 1; supplemental materials Dec 10', ['A3b-S33']),
              f('EA 2027/1/15 前錄取或延後；Regular 2/15；榮譽 3/1', 'EA admit or defer by Jan 15, 2027; regular Feb 15; honors Mar 1', ['A3b-S33']),
              ns(['A3b-S33', 'A3b-S34']),
              f('至少一份正式 SAT 或 ACT（也收 CLT）', 'At least one official SAT or ACT score (CLT also accepted)', ['A3b-S33', 'A3b-S34']),
              ns(['A3b-S33'])
            ] },
            { filter: 'RD', cells: [
              'University of Washington',
              f('「does not participate in early decision or early action」', '"The UW does not participate in early decision or early action admission."', ['A3b-S35']),
              f('11/15（頁面未印年份）；考試成績 12/31', 'Nov 15 (no year on page); test scores Dec 31', ['A3b-S35', 'A3b-S36']),
              f('3/1–15', 'Mar 1–15', ['A3b-S35', 'A3b-S36']),
              f('「does not provide financial aid to undergraduate international students」', '"The UW does not provide financial aid to undergraduate international students."', ['A3b-S38']),
              f('已取消 SAT／ACT 要求（2020-06-11 宣布）', 'SAT/ACT requirement removed (announced 2020-06-11)', ['A3b-S37']),
              ns(['A3b-S35'])
            ] },
            { filter: '', cells: [
              f('Williams：官方網站於 2026-11-07 回傳 HTTP 403；Common App 頁面仍顯示 2025–26 日期（ED 2025/11/15、RD 2026/1/5）', 'Williams: official site returned HTTP 403 on 2026-11-07; its Common App listing still showed 2025–26 dates (ED Nov 15, 2025; RD Jan 5, 2026)', ['A3b-S48', 'A3b-S39']),
              ns(['A3b-S39', 'A3b-S48']),
              ns(['A3b-S39', 'A3b-S48']),
              ns(['A3b-S39', 'A3b-S48']),
              f('Common App 頁面：提供國際生補助；need 政策與文件未寫', 'Common App listing: offers aid for international students; need policy and documents not stated', ['A3b-S39']),
              f('Common App 頁面：「Test Optional/Flexible」（該頁可能未更新至 2026–27）', 'Common App listing: "Test Optional/Flexible" (the listing may not be updated for 2026–27)', ['A3b-S39']),
              ns(['A3b-S48'])
            ] },
            { filter: 'ED RD', cells: [
              f('Amherst：官方網站於 2026-11-07 回傳 HTTP 405，未讀到內容', 'Amherst: official site returned HTTP 405 on 2026-11-07; nothing read', ['A3b-S49']),
              f('Common App 頁面：有 ED 與 RD，未列日期', 'Common App listing: ED and RD offered, no dates', ['A3b-S40']),
              ns(['A3b-S40', 'A3b-S49']),
              ns(['A3b-S40', 'A3b-S49']),
              f('Common App 頁面：提供 need-based 補助與國際生補助。國際生 need-blind 與否本次未能以官方來源驗證。', 'Common App listing: offers need-based aid and aid for international students. Whether it is need-blind for internationals could not be verified from an official page this run.', ['A3b-S40', 'A3b-S49']),
              f('Common App 頁面：Test Optional/Flexible', 'Common App listing: Test Optional/Flexible', ['A3b-S40']),
              ns(['A3b-S49'])
            ] },
            { filter: 'ED EDII RD', cells: [
              'Swarthmore',
              f('Fall ED（ED I）11/15；Winter ED（ED II）1/4', 'Fall ED (ED I) Nov 15; Winter ED (ED II) Jan 4', ['A3b-S41']),
              f('1/4', 'Jan 4', ['A3b-S41']),
              f('ED I 12 月中；ED II 2 月中；RD 4/1 前', 'ED I mid-December; ED II mid-February; RD by April 1', ['A3b-S41']),
              f('錄取前不交 Certificate of Finances 與銀行對帳單；收到決定後 7 天內完成補助文件；錄取的國際生可免 CSS 費用。國際公民「need-aware」。', 'No Certificate of Finances or bank statements unless admitted; aid documents within 7 days of the decision; CSS fee waiver for admitted international students. Admission is "need-aware for international citizens".', ['A3b-S42']),
              f('選繳，不繳無不利', 'Optional; no penalty', ['A3b-S41']),
              f('2027 秋季起，家庭年收入 $200,000 以下學費保證；是否涵蓋國際公民未寫', 'Tuition guarantee from fall 2027 for families earning $200,000 or less; whether it covers international citizens is not stated', ['A3b-S43'])
            ] }
          ]
        }
      },

      {
        id: 'tests',
        h: s('2026–27 考試政策：必繳、選繳、建議、不採計', 'Testing in 2026–27: required, optional, recommended, not used'),
        judgment: s(
          '30 校中有 12 校明確要求 SAT／ACT，CMU 依學院而定；仍為選繳的幾所裡，Princeton、Columbia、Harvey Mudd 已宣布下一季恢復必考，所以晚一屆的申請者面對的是另一套規則。',
          '12 of the 30 clearly require SAT/ACT, and CMU requires it for one college. Of the schools still optional, Princeton, Columbia and Harvey Mudd have announced required testing from the next cycle, so applicants one year behind face different rules.'
        ),
        items: [
          f('**必繳 SAT／ACT**：MIT、Caltech、Stanford、Harvard、Yale、Penn、Brown、Cornell、Georgetown、Georgia Tech、Johns Hopkins、UT Austin（也收 CLT）。',
            '**SAT/ACT required**: MIT, Caltech, Stanford, Harvard, Yale, Penn, Brown, Cornell, Georgetown, Georgia Tech, Johns Hopkins, UT Austin (CLT also accepted).',
            ['A3a-S2', 'A3a-S11', 'A3a-S19', 'A3a-S28', 'A3a-S34', 'A3a-S53', 'A3a-S60', 'A3a-S66', 'A3a-S69', 'A3a-S77', 'A3b-S12', 'A3b-S33']),
          f('**本季唯一有來源的考試變更**：Yale 從 test-flexible（ACT、AP、IB、SAT）改為只收 ACT／SAT，AP 與 IB 不再能滿足要求。',
            '**The only sourced testing change this cycle**: Yale moved from test-flexible (ACT, AP, IB, SAT) to ACT/SAT only; AP and IB no longer satisfy the requirement.',
            ['A3a-S35', 'A3a-S36']),
          f('**依學院而異**：CMU 資工（SCS）必繳 SAT／ACT；工學院、Dietrich、Heinz IS、MCS、Tepper 為 test flexible；CFA 為 test optional。',
            '**Varies by college**: CMU Computer Science (SCS) requires SAT or ACT; Engineering, Dietrich, Heinz IS, MCS and Tepper are test flexible; CFA is test optional.',
            ['A3a-S73']),
          f('**本季選繳、下一季恢復必考**：Princeton（2028 秋季入學起）、Columbia（2027 年 8 月起，即 2027–28 申請季）、Harvey Mudd（2028 秋季入學起）。',
            '**Optional now, required from the next cycle**: Princeton (from fall 2028 entry), Columbia (from August 2027, the 2027–28 cycle), Harvey Mudd (from fall 2028 entry).',
            ['A3a-S42', 'A3a-S47', 'A3b-S8']),
          inf('在 2026-11-07 時讀 11 年級的台灣學生，申請 Princeton、Columbia、Harvey Mudd 時要面對必考。',
            'A Taiwan student in G11 on 2026-11-07 will face required testing at Princeton, Columbia and Harvey Mudd.',
            ['A3a-S42', 'A3a-S47', 'A3b-S8']),
          f('**選繳**：Duke（2026–27 申請季）、Northwestern（搜尋節錄）、Swarthmore、UIUC、Olin（暫停考試要求延長至 2026–27）。',
            '**Optional**: Duke (2026–27 cycle), Northwestern (search snippet), Swarthmore, UIUC, Olin (suspension extended through 2026–27).',
            ['A3b-S15', 'A3b-S17', 'A3b-S18', 'A3b-S41', 'A3b-S3', 'A3b-S5']),
          f('**建議但不必繳**：Rice「recommends」SAT／ACT，不繳者也完整審查。',
            '**Recommended, not required**: Rice "recommends" SAT/ACT; applicants without scores get full consideration.',
            ['A3b-S21']),
          f('**不採計（test-free／blind）**：UC Berkeley、UCLA、UC San Diego 不在錄取中使用 SAT／ACT（UC Regents 2020 年決定，2020 年 8 月擴及非加州居民）。UW 於 2020 年取消要求，但仍設 12/31 成績截止。',
            '**Not used (test-free/blind)**: UC Berkeley, UCLA and UC San Diego do not use SAT/ACT in admission (UC Regents 2020 decision, extended to nonresidents in August 2020). UW removed its requirement in 2020 but still lists a Dec 31 score deadline.',
            ['A3b-S27', 'A3b-S30', 'A3b-S31', 'A3b-S25', 'A3b-S37', 'A3b-S36']),
          inf('UW 的 12/31 成績截止，適用於選擇提交成績的申請者。', 'UW\'s Dec 31 score deadline applies to applicants who choose to report scores.', ['A3b-S36', 'A3b-S37']),
          f('**頁面未說清楚**：Purdue 說「accepts SAT, ACT and CLT scores」，審查因素寫「(if provided)」，未寫是否必繳。Williams、Amherst 只有 Common App 頁面的「Test Optional/Flexible」。Michigan 未讀到。',
            '**Unclear on the page**: Purdue "accepts SAT, ACT and CLT scores" and lists them "(if provided)" without saying whether they are required. Williams and Amherst have only the Common App listing\'s "Test Optional/Flexible". Michigan was not read.',
            ['A3a-S82', 'A3b-S39', 'A3b-S40', 'A3a-S84'])
        ]
      },

      {
        id: 'contradictions',
        h: s('官方頁面互相矛盾之處', 'Where official pages contradict themselves'),
        judgment: s(
          '至少六處官方頁面同一件事寫了兩個日期；（推論）遇到時以較晚的那個當作放榜預期、較早的那個當作截止準備。',
          'At least six official pages give two dates for the same thing. (Inference) When that happens, expect the later one for decisions and prepare to the earlier one for deadlines.'
        ),
        items: [
          f('Brown RD 放榜：RD 頁寫「by early April」，申請 checklist 寫「Late March」。', 'Brown RD release: "by early April" on the RD page, "Late March" on the application checklist.', ['A3a-S57', 'A3a-S58']),
          f('Cornell RD 放榜：申請頁與部落格寫「late March」，FAQ 寫「early April」。', 'Cornell RD release: "late March" on the admissions page and blog, "early April" in the FAQ.', ['A3a-S62', 'A3a-S63', 'A3a-S64']),
          f('Harvard REA 成績期限：同一頁同時出現「by the end of November」與「by the end of October」。', 'Harvard REA score deadline: the same page says both "by the end of November" and "by the end of October".', ['A3a-S26']),
          f('Harvard 回覆日：時程寫「Early May」，REA 說明寫「until May 1」。', 'Harvard reply date: the timeline says "Early May", the REA text says "until May 1".', ['A3a-S26']),
          f('Princeton 財務補助頁標題為 2027–28（用 2025 年稅務資料），但截止表列的是「Parents\' 2024 federal income tax return」。', 'Princeton\'s aid page is headed 2027–28 (2025 tax data), but its deadline table lists "Parents\' 2024 federal income tax return".', ['A3a-S43']),
          f('UCLA 收件截止：表格寫 10/1–11/30，同頁另一句寫「October 1-December 1」；UC 系統頁寫 2026-11-30。', 'UCLA filing end: the table says Oct 1–Nov 30, a sentence on the same page says "October 1-December 1"; the UC system page says Nov 30, 2026.', ['A3b-S29', 'A3b-S23']),
          f('過期的措辭：Brown 的 need-blind 句子寫的是 2025 秋季入學者；Williams 的 Common App 頁面在 2026-11-07 仍顯示 2025–26 日期。', 'Stale wording: Brown\'s need-blind sentence names fall 2025 entrants; Williams\' Common App listing still showed 2025–26 dates on 2026-11-07.', ['A3a-S59', 'A3b-S39']),
          inf('放榜日遇到兩個說法時，以較晚者為預期；截止日（如 UCLA）以較早者（11/30）準備。複製 Common App 資料的第三方網站可能把去年的日期當成今年的。', 'Where a page gives two decision dates, expect the later one; where it gives two deadlines (UCLA), prepare to the earlier one (Nov 30). Third-party sites that copy Common App listings may show last year\'s dates as current.', ['A3a-S57', 'A3a-S64', 'A3b-S29', 'A3b-S23', 'A3b-S39'])
        ]
      }
    ]
  };
})();
