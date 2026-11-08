// Chart data: every dated item of the 2026–27 cycle (entry fall 2027), per school.
// Built from research/2026-11-07_cycle-2026-27-calendar-part1_v1.md (A3a-),
// research/2026-11-07_cycle-2026-27-calendar-part2_v1.md (A3b-),
// research/2026-11-07_common-app-first-year-anatomy_v1.md (A1-) and the already-integrated
// rows of data/p-process.js (V4- browser-verified pages for Michigan, Northwestern, Williams,
// Princeton, Purdue). Every src id exists in data/sources.js.
//
// Rules used here:
// - No date is invented. When a page prints a month-day with no year, the year follows the
//   cycle (Aug–Dec = 2026, Jan–Jul = 2027) and noYear is true.
// - approx:true marks a stated window ("mid-December" = 11–20, "early" = 1–10,
//   "late"/"end of" = 21–last day, a bare month = the whole month); start/end bound it.
// - end is set without approx only when the page itself gives a range (UC filing, UW decisions).
// - kind: EA/ED/REA/SCEA/EDII/RD/UC = application plans; priority = other dated deadlines
//   (document deadlines, interview requests, Candidates' Weekends, scholarship priority);
//   portfolio = portfolios and arts/music supplements; test = test, English-proficiency or
//   video-interview deadlines; aid = financial-aid documents and aid notifications;
//   midyear = mid-year / final school reports; decision; reply = reply, deposit or enrolment;
//   open = an application or form opens.
// - Michigan: the MI- addendum describes the fall 2026 cycle (last cycle) from search summaries,
//   so it is not used; Michigan rows come from the browser-read page V4-T13.
// - Amherst: no official page with dates was read (A3b-S49 HTTP 405; the Common App listing
//   A3b-S40 has no dates), so Amherst has no events.
// - Williams' Common App listing (A3b-S39) shows 2025–26 dates; those are skipped and the
//   school's own page V4-T11 is used.
// - Post-admission visa steps carry no dates on any page read; they are listed in
//   undatedSteps, in order, instead of being given invented dates.
window.ATLAS = window.ATLAS || {};
window.ATLAS.viz = window.ATLAS.viz || {};
(function () {
  // row: [id, lane, kind, start, end, approx, zh, en, src, noYear]
  var bySchool = {
    'MIT': [
      ['mit-ea', 'apply', 'EA', '2026-11-01', null, 0, 'MIT EA 截止', 'MIT Early Action deadline', ['A3a-S1'], 1],
      ['mit-ra', 'apply', 'RD', '2027-01-04', null, 0, 'MIT Regular Action 截止', 'MIT Regular Action deadline', ['A3a-S1'], 1],
      ['mit-port-ea', 'materials', 'portfolio', '2026-11-01', null, 0, 'MIT 創作作品集（EA）', 'MIT creative portfolios (EA)', ['A3a-S4'], 1],
      ['mit-port-ra', 'materials', 'portfolio', '2027-01-04', null, 0, 'MIT 創作作品集（RA）', 'MIT creative portfolios (RA)', ['A3a-S4'], 1],
      ['mit-test-ea', 'materials', 'test', '2026-11-30', null, 0, 'MIT EA 考試須在此日前完成', 'MIT EA: tests taken before this date', ['A3a-S1'], 1],
      ['mit-test-ra', 'materials', 'test', '2026-12-31', null, 0, 'MIT RA 考試須在此日前完成', 'MIT RA: tests taken before this date', ['A3a-S1'], 1],
      ['mit-eng-ra', 'materials', 'test', '2027-01-31', null, 0, 'MIT RA 英語能力考試期限', 'MIT RA: English-proficiency tests before this date', ['A3a-S1'], 1],
      ['mit-aid-ea', 'aid', 'aid', '2026-11-30', null, 0, 'MIT EA 補助：CSS Profile + IDOC', 'MIT EA aid: CSS Profile + IDOC', ['A3a-S6', 'A3a-S7'], 1],
      ['mit-aid-ra', 'aid', 'aid', '2027-02-15', null, 0, 'MIT RA 補助：CSS Profile + IDOC', 'MIT RA aid: CSS Profile + IDOC', ['A3a-S6', 'A3a-S7'], 1],
      ['mit-aidoffer-ea', 'aid', 'aid', '2027-01-11', '2027-01-20', 1, 'MIT EA 補助方案發布（1 月中）', 'MIT EA aid offers released (mid-January)', ['A3a-S6'], 1],
      ['mit-aidoffer-ra', 'aid', 'aid', '2027-03-11', '2027-03-20', 1, 'MIT RA 補助方案發布（3 月中）', 'MIT RA aid offers released (mid-March)', ['A3a-S6'], 1],
      ['mit-fun', 'materials', 'midyear', '2027-02-11', '2027-02-20', 1, 'MIT FUN 表與期中成績（2 月中）', 'MIT FUN form with midyear grades (mid-February)', ['A3a-S1'], 1],
      ['mit-dec-ea', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'MIT EA 放榜（12 月中）', 'MIT EA decisions (mid-December)', ['A3a-S1'], 1],
      ['mit-dec-ra', 'decision', 'decision', '2027-03-11', '2027-03-20', 1, 'MIT RA 放榜（3 月中）', 'MIT RA decisions (mid-March)', ['A3a-S1'], 1],
      ['mit-reply', 'decision', 'reply', '2027-05-01', null, 0, 'MIT 回覆日', 'MIT reply date', ['A3a-S1'], 1]
    ],
    'Caltech': [
      ['cal-rea', 'apply', 'REA', '2026-11-01', null, 0, 'Caltech REA 截止', 'Caltech Restrictive Early Action deadline', ['A3a-S10', 'A3a-S12'], 0],
      ['cal-rd', 'apply', 'RD', '2027-01-04', null, 0, 'Caltech RD 截止', 'Caltech Regular Decision deadline', ['A3a-S10', 'A3a-S16'], 0],
      ['cal-test-qb', 'materials', 'test', '2026-10-31', null, 0, 'Caltech QuestBridge 考試須在此日前', 'Caltech QuestBridge: tests before this date', ['A3a-S11'], 0],
      ['cal-test-rea', 'materials', 'test', '2026-11-30', null, 0, 'Caltech REA：成績須在此日前送達 Caltech', 'Caltech REA: scores must reach Caltech before this date', ['A3a-S11', 'N28'], 0],
      ['cal-test-rd', 'materials', 'test', '2026-12-31', null, 0, 'Caltech RD 考試須在此日前', 'Caltech RD: tests before this date', ['A3a-S11'], 0],
      ['cal-css-rea', 'aid', 'aid', '2026-11-15', null, 0, 'Caltech REA 國際生 CSS Profile', 'Caltech REA international CSS Profile', ['A3a-S13'], 0],
      ['cal-ntf-rea', 'aid', 'aid', '2026-12-15', null, 0, 'Caltech REA Non-Tax Filer\'s Statement（決定後交）；補助優先截止', 'Caltech REA Non-Tax Filer\'s Statement (after decision); aid priority deadline', ['A3a-S13'], 0],
      ['cal-css-rd', 'aid', 'aid', '2027-02-15', null, 0, 'Caltech RD 國際生 CSS Profile', 'Caltech RD international CSS Profile', ['A3a-S14'], 0],
      ['cal-ntf-rd', 'aid', 'aid', '2027-03-16', null, 0, 'Caltech RD Non-Tax Filer\'s Statement；補助優先截止', 'Caltech RD Non-Tax Filer\'s Statement; aid priority deadline', ['A3a-S14'], 0],
      ['cal-tax', 'after', 'aid', '2027-07-15', null, 0, 'Caltech 國際生 2025 年稅單與 Scholarship Data Form（入學後交）', 'Caltech international 2025 tax return and Scholarship Data Form (after matriculation)', ['A3a-S13', 'A3a-S14'], 0],
      ['cal-dec-rea', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Caltech REA 放榜（12 月中）', 'Caltech REA decisions (mid-December)', ['A3a-S10', 'A3a-S12'], 0],
      ['cal-dec-rd', 'decision', 'decision', '2027-03-11', '2027-03-20', 1, 'Caltech RD 放榜（3 月中）', 'Caltech RD decisions (mid-March)', ['A3a-S10', 'A3a-S12'], 0],
      ['cal-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Caltech 回覆日', 'Caltech reply date', ['A3a-S12'], 0]
    ],
    'Stanford': [
      ['stan-aid-open', 'aid', 'open', '2026-10-01', null, 0, 'Stanford CSS Profile／IDOC 開放', 'Stanford CSS Profile / IDOC opens', ['A3a-S22', 'A3a-S23'], 1],
      ['stan-rea-arts-app', 'apply', 'REA', '2026-10-15', null, 0, 'Stanford REA（附藝術作品集）Common App 截止', 'Stanford REA with arts portfolio: Common App due', ['A3a-S18'], 1],
      ['stan-rea-arts', 'materials', 'portfolio', '2026-10-20', null, 0, 'Stanford REA 藝術作品集', 'Stanford REA arts portfolio materials', ['A3a-S18', 'A3a-S21'], 1],
      ['stan-rea', 'apply', 'REA', '2026-11-01', null, 0, 'Stanford REA 截止', 'Stanford Restrictive Early Action deadline', ['A3a-S18'], 1],
      ['stan-aid-rea', 'aid', 'aid', '2026-11-15', null, 0, 'Stanford REA 補助優先截止', 'Stanford REA aid priority filing', ['A3a-S22'], 1],
      ['stan-rd-arts-app', 'apply', 'RD', '2026-12-05', null, 0, 'Stanford RD（附藝術作品集）Common App 截止', 'Stanford RD with arts portfolio: Common App due', ['A3a-S18'], 1],
      ['stan-rd-arts', 'materials', 'portfolio', '2026-12-10', null, 0, 'Stanford RD 藝術作品集', 'Stanford RD arts portfolio materials', ['A3a-S18', 'A3a-S21'], 1],
      ['stan-rd', 'apply', 'RD', '2027-01-05', null, 0, 'Stanford RD 截止', 'Stanford Regular Decision deadline', ['A3a-S18'], 1],
      ['stan-aid-rd', 'aid', 'aid', '2027-02-15', null, 0, 'Stanford RD 補助優先截止', 'Stanford RD aid priority filing', ['A3a-S23'], 1],
      ['stan-test-rea-act', 'materials', 'test', '2026-09-21', '2026-09-30', 1, 'Stanford REA 最晚 ACT 考期（9 月底）', 'Stanford REA latest ACT sitting (end of September)', ['A3a-S19'], 1],
      ['stan-test-rea-sat', 'materials', 'test', '2026-10-21', '2026-10-31', 1, 'Stanford REA 最晚 SAT 考期（10 月底）', 'Stanford REA latest SAT sitting (end of October)', ['A3a-S19'], 1],
      ['stan-test-rd', 'materials', 'test', '2026-12-01', '2026-12-31', 1, 'Stanford RD 最晚 ACT／SAT 考期（12 月）', 'Stanford RD latest ACT/SAT sitting (December)', ['A3a-S19'], 1],
      ['stan-mid', 'materials', 'midyear', '2027-02-15', null, 0, 'Stanford 期中成績單', 'Stanford midyear transcript', ['A3a-S18'], 1],
      ['stan-dec-rea', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Stanford REA 放榜（12 月中前）', 'Stanford REA decisions (by mid-December)', ['A3a-S18'], 1],
      ['stan-aidnote-rea', 'aid', 'aid', '2026-12-11', '2026-12-20', 1, 'Stanford REA 補助通知（12 月中）', 'Stanford REA aid notification (mid-December)', ['A3a-S22'], 1],
      ['stan-dec-rd', 'decision', 'decision', '2027-04-01', '2027-04-10', 1, 'Stanford RD 放榜（4 月初前）', 'Stanford RD decisions (by early April)', ['A3a-S18'], 1],
      ['stan-aidnote-rd', 'aid', 'aid', '2027-04-01', '2027-04-30', 1, 'Stanford RD 補助通知（4 月）', 'Stanford RD aid notification (April)', ['A3a-S23'], 1],
      ['stan-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Stanford 回覆日', 'Stanford reply date', ['A3a-S18'], 1]
    ],
    'Harvard': [
      ['harv-test-rea', 'materials', 'test', '2026-10-21', '2026-10-31', 1, 'Harvard REA 成績（10 月底；同頁另寫 11 月底）', 'Harvard REA scores (end of October; same page also says end of November)', ['A3a-S26'], 1],
      ['harv-rea', 'apply', 'REA', '2026-11-01', null, 0, 'Harvard REA 截止', 'Harvard Restrictive Early Action deadline', ['A3a-S26'], 1],
      ['harv-aid-rea', 'aid', 'aid', '2026-11-01', null, 0, 'Harvard REA 補助：CSS Profile + IDOC', 'Harvard REA aid: CSS Profile + IDOC', ['A3a-S26', 'A3a-S27'], 1],
      ['harv-rd', 'apply', 'RD', '2027-01-01', null, 0, 'Harvard RD 截止', 'Harvard Regular Decision deadline', ['A3a-S26'], 1],
      ['harv-aid-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Harvard RD 補助：CSS Profile + IDOC', 'Harvard RD aid: CSS Profile + IDOC', ['A3a-S26', 'A3a-S27'], 1],
      ['harv-mid', 'materials', 'midyear', '2027-02-11', '2027-02-20', 1, 'Harvard 期中報告（2 月中）', 'Harvard Midyear School Report (mid-February)', ['A3a-S26'], 1],
      ['harv-dec-rea', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Harvard REA 放榜（12 月中）', 'Harvard REA decisions (mid-December)', ['A3a-S26'], 1],
      ['harv-dec-rd', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'Harvard RD 放榜（3 月底）', 'Harvard RD decisions (end of March)', ['A3a-S26'], 1],
      ['harv-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Harvard 回覆日（REA 說明寫 5/1；時程寫 5 月初）', 'Harvard reply date (REA text: May 1; timeline: "Early May")', ['A3a-S26'], 1]
    ],
    'Yale': [
      ['yale-scea', 'apply', 'SCEA', '2026-11-01', null, 0, 'Yale SCEA 截止', 'Yale Single-Choice Early Action deadline', ['A3a-S33'], 1],
      ['yale-rd', 'apply', 'RD', '2027-01-02', null, 0, 'Yale RD 截止', 'Yale Regular Decision deadline', ['A3a-S33'], 1],
      ['yale-aid-contact', 'aid', 'aid', '2026-11-11', '2026-11-20', 1, 'Yale 開始聯繫 EA 國際生補助申請者（11 月中）', 'Yale begins contacting international EA aid applicants (mid-November)', ['A3a-S39'], 1],
      ['yale-aid-ea', 'aid', 'aid', '2026-12-01', null, 0, 'Yale EA 國際生補助優先截止', 'Yale EA international aid priority deadline', ['A3a-S37'], 0],
      ['yale-aid-rd', 'aid', 'aid', '2027-02-15', null, 0, 'Yale RD 補助優先截止', 'Yale RD aid priority deadline', ['A3a-S37'], 0],
      ['yale-dec-ea', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Yale SCEA 放榜（12 月中）', 'Yale SCEA decisions (mid-December)', ['A3a-S33'], 1],
      ['yale-dec-rd', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'Yale RD 放榜（3 月下旬）', 'Yale RD decisions (late March)', ['A3a-S33'], 1],
      ['yale-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Yale 回覆日', 'Yale reply date', ['A3a-S33'], 1]
    ],
    'Princeton': [
      ['prin-pfaa-open', 'aid', 'open', '2026-10-01', null, 0, 'Princeton 2027–28 PFAA 開放', 'Princeton 2027–28 PFAA available', ['A3a-S43'], 0],
      ['prin-scea', 'apply', 'SCEA', '2026-11-01', null, 0, 'Princeton SCEA 截止（含 graded paper）', 'Princeton Single-Choice Early Action deadline (graded paper included)', ['A3a-S41', 'V4-T4'], 1],
      ['prin-arts-ea', 'materials', 'portfolio', '2026-11-06', null, 0, 'Princeton SCEA 藝術補充', 'Princeton SCEA arts supplement', ['A3a-S41', 'A3a-S44'], 1],
      ['prin-pfaa-ea', 'aid', 'aid', '2026-11-09', null, 0, 'Princeton SCEA 補助：PFAA', 'Princeton SCEA aid: PFAA', ['A3a-S41', 'A3a-S43'], 1],
      ['prin-rd', 'apply', 'RD', '2027-01-01', null, 0, 'Princeton RD 截止', 'Princeton Regular Decision deadline', ['A3a-S41', 'V4-T4'], 1],
      ['prin-arts-rd', 'materials', 'portfolio', '2027-01-08', null, 0, 'Princeton RD 藝術補充', 'Princeton RD arts supplement', ['A3a-S41', 'A3a-S44'], 1],
      ['prin-pfaa-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Princeton RD 補助：PFAA', 'Princeton RD aid: PFAA', ['A3a-S41', 'A3a-S43'], 1],
      ['prin-dec-ea', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Princeton SCEA 放榜（12 月中）', 'Princeton SCEA decisions (mid-December)', ['A3a-S41'], 1],
      ['prin-dec-rd', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'Princeton RD 放榜（3 月下旬）', 'Princeton RD decisions (late March)', ['A3a-S41'], 1],
      ['prin-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Princeton 回覆日', 'Princeton reply date', ['A3a-S41', 'V4-T4'], 1]
    ],
    'Columbia': [
      ['col-ed', 'apply', 'ED', '2026-11-01', null, 0, 'Columbia ED 截止', 'Columbia Early Decision deadline', ['A3a-S46'], 1],
      ['col-slide-ed', 'materials', 'portfolio', '2026-11-01', null, 0, 'Columbia SlideRoom 補充（ED）', 'Columbia SlideRoom supplements (ED)', ['A3a-S48'], 1],
      ['col-test-ed', 'materials', 'test', '2026-11-01', '2026-11-30', 1, 'Columbia ED 收成績至 2026 年 11 月', 'Columbia ED: scores accepted through November 2026', ['A3a-S47'], 0],
      ['col-score-ed', 'materials', 'test', '2026-11-25', null, 0, 'Columbia ED 成績回報期限：11 月第四個星期三（依日曆推算為 11/25）', 'Columbia ED score reporting: the fourth Wednesday in November (Nov 25 by calendar count)', ['N04'], 0],
      ['col-iv-ed', 'materials', 'test', '2026-11-15', null, 0, 'Columbia InitialView／Vericant（ED）', 'Columbia InitialView / Vericant (ED)', ['A3a-S49'], 1],
      ['col-aid-ed', 'aid', 'aid', '2026-11-15', null, 0, 'Columbia ED 補助申請', 'Columbia ED financial aid application', ['A3a-S46'], 1],
      ['col-rd', 'apply', 'RD', '2027-01-01', null, 0, 'Columbia RD 截止', 'Columbia Regular Decision deadline', ['A3a-S46'], 1],
      ['col-slide-rd', 'materials', 'portfolio', '2027-01-01', null, 0, 'Columbia SlideRoom 補充（RD）', 'Columbia SlideRoom supplements (RD)', ['A3a-S48'], 1],
      ['col-iv-rd', 'materials', 'test', '2027-01-15', null, 0, 'Columbia InitialView／Vericant（RD）', 'Columbia InitialView / Vericant (RD)', ['A3a-S49'], 1],
      ['col-test-rd', 'materials', 'test', '2027-02-01', '2027-02-28', 1, 'Columbia RD 收成績至 2027 年 2 月', 'Columbia RD: scores accepted through February 2027', ['A3a-S47'], 0],
      ['col-aid-rd', 'aid', 'aid', '2027-02-15', null, 0, 'Columbia RD 補助申請', 'Columbia RD financial aid application', ['A3a-S46'], 1],
      ['col-dec-ed', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Columbia ED 放榜（12 月中）', 'Columbia ED decisions (mid-December)', ['A3a-S46'], 1],
      ['col-edreply', 'decision', 'reply', '2027-01-11', '2027-01-20', 1, 'Columbia ED 錄取者回覆（1 月中）', 'Columbia ED admits reply (mid-January)', ['A3a-S46'], 1],
      ['col-dec-rd', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'Columbia RD 放榜（3 月下旬）', 'Columbia RD decisions (late March)', ['A3a-S46'], 1],
      ['col-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Columbia RD 回覆日', 'Columbia RD reply date', ['A3a-S46'], 1]
    ],
    'Penn': [
      ['penn-test-ed-act', 'materials', 'test', '2026-10-01', '2026-10-31', 1, 'Penn ED 最晚 ACT（2026 年 10 月）', 'Penn ED latest ACT (October 2026)', ['A3a-S52', 'A3a-S53'], 0],
      ['penn-ed', 'apply', 'ED', '2026-11-01', null, 0, 'Penn ED 截止', 'Penn Early Decision deadline', ['A3a-S51'], 0],
      ['penn-test-ed-sat', 'materials', 'test', '2026-11-01', '2026-11-30', 1, 'Penn ED 最晚 SAT（2026 年 11 月）', 'Penn ED latest SAT (November 2026)', ['A3a-S52', 'A3a-S53'], 0],
      ['penn-aid-ed', 'aid', 'aid', '2026-11-06', null, 0, 'Penn ED 補助：CSS Profile 與稅單', 'Penn ED aid: CSS Profile and tax return', ['A3a-S52'], 1],
      ['penn-test-rd', 'materials', 'test', '2026-12-01', '2026-12-31', 1, 'Penn RD 最晚考試：SAT 2026/12/5、ACT 2026/12/12', 'Penn RD latest test dates: SAT Dec 5, ACT Dec 12, 2026', ['A3a-S52', 'A3a-S53', 'R23'], 0],
      ['penn-rd', 'apply', 'RD', '2027-01-05', null, 0, 'Penn RD 截止', 'Penn Regular Decision deadline', ['A3a-S51'], 0],
      ['penn-aid-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Penn RD 補助：CSS Profile 與稅單', 'Penn RD aid: CSS Profile and tax return', ['A3a-S52'], 1],
      ['penn-mid-ed', 'materials', 'midyear', '2027-02-15', null, 0, 'Penn ED 延後者期中報告', 'Penn mid-year report for deferred ED', ['A3a-S52'], 1],
      ['penn-dec-ed', 'decision', 'decision', '2026-12-01', '2026-12-31', 1, 'Penn ED 放榜（12 月）', 'Penn ED decisions (December)', ['A3a-S51'], 0],
      ['penn-dec-rd', 'decision', 'decision', '2027-04-01', '2027-04-30', 1, 'Penn RD 放榜（4 月）', 'Penn RD decisions (April)', ['A3a-S51'], 0]
    ],
    'Brown': [
      ['brown-ed', 'apply', 'ED', '2026-11-01', null, 0, 'Brown ED 截止', 'Brown Early Decision deadline', ['A3a-S56'], 1],
      ['brown-aid-ed', 'aid', 'aid', '2026-11-02', null, 0, 'Brown ED 國際生 CSS Profile', 'Brown ED international CSS Profile', ['A3a-S59'], 0],
      ['brown-slide-ed', 'materials', 'portfolio', '2026-11-04', null, 0, 'Brown SlideRoom（ED）', 'Brown SlideRoom portfolios (ED)', ['A3a-S58'], 1],
      ['brown-rd', 'apply', 'RD', '2027-01-05', null, 0, 'Brown RD 截止', 'Brown Regular Decision deadline', ['A3a-S57'], 1],
      ['brown-slide-rd', 'materials', 'portfolio', '2027-01-07', null, 0, 'Brown SlideRoom（RD）', 'Brown SlideRoom portfolios (RD)', ['A3a-S58'], 1],
      ['brown-aid-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Brown RD 國際生 CSS Profile', 'Brown RD international CSS Profile', ['A3a-S59'], 0],
      ['brown-dec-ed', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Brown ED 放榜（12 月中）', 'Brown ED decisions (mid-December)', ['A3a-S56'], 1],
      ['brown-dec-rd', 'decision', 'decision', '2027-03-21', '2027-04-10', 1, 'Brown RD 放榜（checklist：3 月下旬；RD 頁：4 月初前）', 'Brown RD decisions (checklist: late March; RD page: by early April)', ['A3a-S57', 'A3a-S58'], 1],
      ['brown-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Brown RD 回覆日', 'Brown RD reply date', ['A3a-S57', 'A3a-S58'], 1]
    ],
    'Cornell': [
      ['corn-ed', 'apply', 'ED', '2026-11-01', null, 0, 'Cornell ED 截止', 'Cornell Early Decision deadline', ['A3a-S62', 'A3a-S63'], 1],
      ['corn-aap-ed', 'materials', 'portfolio', '2026-11-01', null, 0, 'Cornell AAP 作品集（ED）', 'Cornell AAP portfolios (ED)', ['A3a-S65'], 1],
      ['corn-css-ed', 'aid', 'aid', '2026-11-01', null, 0, 'Cornell ED 國際生 CSS Profile', 'Cornell ED international CSS Profile', ['A3a-S62', 'A3a-S67'], 0],
      ['corn-music-ed', 'materials', 'portfolio', '2026-11-06', null, 0, 'Cornell 音樂補充（ED）', 'Cornell music supplement (ED)', ['A3a-S62'], 1],
      ['corn-other-ed', 'materials', 'priority', '2026-11-13', null, 0, 'Cornell ED 其他必交資料', 'Cornell ED other required materials', ['A3a-S62'], 1],
      ['corn-dompri-ed', 'aid', 'priority', '2026-11-15', null, 0, 'Cornell ED 本地生補助優先日', 'Cornell ED domestic aid priority date', ['A3a-S62'], 1],
      ['corn-rd', 'apply', 'RD', '2027-01-02', null, 0, 'Cornell RD 截止', 'Cornell Regular Decision deadline', ['A3a-S62', 'A3a-S63'], 1],
      ['corn-aap-rd', 'materials', 'portfolio', '2027-01-02', null, 0, 'Cornell AAP 作品集（RD）', 'Cornell AAP portfolios (RD)', ['A3a-S65'], 1],
      ['corn-css-rd', 'aid', 'aid', '2027-01-02', null, 0, 'Cornell RD 國際生 CSS Profile', 'Cornell RD international CSS Profile', ['A3a-S62', 'A3a-S67'], 0],
      ['corn-music-rd', 'materials', 'portfolio', '2027-01-07', null, 0, 'Cornell 音樂補充（RD）', 'Cornell music supplement (RD)', ['A3a-S62'], 1],
      ['corn-other-rd', 'materials', 'priority', '2027-01-19', null, 0, 'Cornell RD 其他必交資料', 'Cornell RD other required materials', ['A3a-S62'], 1],
      ['corn-dompri-rd', 'aid', 'priority', '2027-02-15', null, 0, 'Cornell RD 本地生補助優先日', 'Cornell RD domestic aid priority date', ['A3a-S62'], 1],
      ['corn-dec-ed', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Cornell ED 放榜（12 月中）', 'Cornell ED decisions (mid-December)', ['A3a-S62', 'A3a-S63'], 1],
      ['corn-dec-rd', 'decision', 'decision', '2027-03-21', '2027-04-10', 1, 'Cornell RD 放榜（申請頁：3 月下旬；FAQ：4 月初）', 'Cornell RD decisions (admissions pages: late March; FAQ: early April)', ['A3a-S62', 'A3a-S63', 'A3a-S64'], 1]
    ],
    'Georgetown': [
      ['gu-ea', 'apply', 'EA', '2026-11-01', null, 0, 'Georgetown EA 截止', 'Georgetown Early Action deadline', ['A3a-S69'], 1],
      ['gu-rd', 'apply', 'RD', '2027-01-01', null, 0, 'Georgetown RD 截止', 'Georgetown Regular Decision deadline', ['A3a-S69'], 1],
      ['gu-aid', 'aid', 'aid', '2027-02-01', null, 0, 'Georgetown 補助申請（EA 與 RD）', 'Georgetown financial aid application (EA and RD)', ['A3a-S69'], 1],
      ['gu-dec-ea', 'decision', 'decision', '2026-12-15', null, 0, 'Georgetown EA 放榜（12/15 前）', 'Georgetown EA decisions (by Dec 15)', ['A3a-S69'], 1],
      ['gu-dec-rd', 'decision', 'decision', '2027-04-01', null, 0, 'Georgetown RD 放榜（4/1 前）', 'Georgetown RD decisions (by Apr 1)', ['A3a-S69'], 1],
      ['gu-aidnote', 'aid', 'aid', '2027-04-01', '2027-04-07', 1, 'Georgetown 補助通知（4 月第一週）', 'Georgetown aid notifications (first week of April)', ['A3a-S70'], 1],
      ['gu-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Georgetown 回覆日', 'Georgetown reply date', ['A3a-S69'], 1]
    ],
    'CMU': [
      ['cmu-switch', 'apply', 'priority', '2026-11-01', null, 0, 'CMU RD 改 ED 須寄信', 'CMU last day to switch RD to ED by email', ['A3a-S71'], 1],
      ['cmu-test-ed', 'materials', 'test', '2026-11-01', null, 0, 'CMU ED 考試建議完成日', 'CMU ED testing preferred complete', ['A3a-S73'], 1],
      ['cmu-ed', 'apply', 'ED', '2026-11-02', null, 0, 'CMU ED 截止', 'CMU Early Decision deadline', ['A3a-S71'], 1],
      ['cmu-cfa-ed', 'materials', 'portfolio', '2026-11-02', null, 0, 'CMU 建築／藝術／設計作品集（ED）', 'CMU Architecture / Art / Design portfolio (ED)', ['A3a-S72'], 1],
      ['cmu-rd-dm', 'apply', 'RD', '2026-12-01', null, 0, 'CMU Drama／Music RD 截止', 'CMU Drama / Music RD deadline', ['A3a-S71', 'A3a-S72'], 1],
      ['cmu-dm-prescreen', 'materials', 'portfolio', '2026-12-01', null, 0, 'CMU Drama／Music prescreen 與作品', 'CMU Drama / Music prescreen and portfolio', ['A3a-S72'], 1],
      ['cmu-test-rd', 'materials', 'test', '2027-01-03', null, 0, 'CMU RD 考試建議完成日', 'CMU RD testing preferred complete', ['A3a-S73'], 1],
      ['cmu-rd', 'apply', 'RD', '2027-01-04', null, 0, 'CMU RD 截止', 'CMU Regular Decision deadline', ['A3a-S71'], 1],
      ['cmu-cfa-rd', 'materials', 'portfolio', '2027-01-11', null, 0, 'CMU 建築／藝術／設計作品集（RD）', 'CMU Architecture / Art / Design portfolio (RD)', ['A3a-S72'], 1],
      ['cmu-audition', 'materials', 'portfolio', '2027-02-01', '2027-02-28', 1, 'CMU Music 現場試奏（2 月）', 'CMU Music live auditions (February)', ['A3a-S72'], 1],
      ['cmu-dec-ed', 'decision', 'decision', '2026-12-15', null, 0, 'CMU ED 放榜（12/15 前）', 'CMU ED decisions (by Dec 15)', ['A3a-S71'], 1],
      ['cmu-enroll-ed', 'decision', 'reply', '2027-02-01', null, 0, 'CMU ED 錄取者註冊期限', 'CMU ED admits enrol by', ['A3a-S71'], 1],
      ['cmu-dec-rd', 'decision', 'decision', '2027-04-01', null, 0, 'CMU RD 放榜（最晚 4/1）', 'CMU RD decisions (no later than Apr 1)', ['A3a-S71'], 1],
      ['cmu-reply', 'decision', 'reply', '2027-05-01', null, 0, 'CMU RD 回覆日', 'CMU RD reply date', ['A3a-S71'], 1]
    ],
    'Georgia Tech': [
      ['gt-ea1', 'apply', 'EA', '2026-10-15', null, 0, 'Georgia Tech EA1 截止（僅 Georgia 學生）', 'Georgia Tech EA1 deadline (Georgia students only)', ['A3a-S76'], 1],
      ['gt-doc-ea1', 'materials', 'priority', '2026-10-30', null, 0, 'Georgia Tech EA1 文件（含作品集）', 'Georgia Tech EA1 documents (incl. portfolios)', ['A3a-S76', 'A3a-S79'], 1],
      ['gt-ea2', 'apply', 'EA', '2026-11-02', null, 0, 'Georgia Tech EA2 截止（非 Georgia，含國際生）', 'Georgia Tech EA2 deadline (non-Georgia, incl. international)', ['A3a-S76'], 1],
      ['gt-doc-ea2', 'materials', 'priority', '2026-11-16', null, 0, 'Georgia Tech EA2 文件（含作品集）', 'Georgia Tech EA2 documents (incl. portfolios)', ['A3a-S76', 'A3a-S79'], 1],
      ['gt-test-ea1', 'materials', 'test', '2026-11-16', null, 0, 'Georgia Tech EA1 自填成績', 'Georgia Tech EA1 self-reported scores', ['A3a-S76'], 1],
      ['gt-test-ea2', 'materials', 'test', '2026-12-08', null, 0, 'Georgia Tech EA2 自填成績', 'Georgia Tech EA2 self-reported scores', ['A3a-S76'], 1],
      ['gt-rd', 'apply', 'RD', '2027-01-06', null, 0, 'Georgia Tech RD 截止', 'Georgia Tech Regular Decision deadline', ['A3a-S76'], 1],
      ['gt-doc-rd', 'materials', 'priority', '2027-01-22', null, 0, 'Georgia Tech RD 文件（含作品集）', 'Georgia Tech RD documents (incl. portfolios)', ['A3a-S76', 'A3a-S79'], 1],
      ['gt-test-rd', 'materials', 'test', '2027-01-22', null, 0, 'Georgia Tech RD 自填成績', 'Georgia Tech RD self-reported scores', ['A3a-S76'], 1],
      ['gt-dec-ea1', 'decision', 'decision', '2026-12-01', '2026-12-10', 1, 'Georgia Tech EA1 放榜（12 月初）', 'Georgia Tech EA1 decisions (early December)', ['A3a-S76'], 1],
      ['gt-dec-ea2', 'decision', 'decision', '2027-01-21', '2027-01-31', 1, 'Georgia Tech EA2 放榜（1 月下旬）', 'Georgia Tech EA2 decisions (late January)', ['A3a-S76'], 1],
      ['gt-dec-rd', 'decision', 'decision', '2027-03-11', '2027-03-20', 1, 'Georgia Tech RD 放榜（3 月中）', 'Georgia Tech RD decisions (mid-March)', ['A3a-S76'], 1],
      ['gt-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Georgia Tech 訂金截止', 'Georgia Tech deposit deadline', ['A3a-S76'], 1]
    ],
    'Purdue': [
      ['pur-open', 'apply', 'open', '2026-08-01', null, 0, 'Purdue 秋季申請開放', 'Purdue fall application window opens', ['V4-T8'], 1],
      ['pur-ea', 'apply', 'EA', '2026-11-01', null, 0, 'Purdue EA 截止（也是獎學金與熱門科系優先日）', 'Purdue Early Action deadline (also scholarship and competitive-major priority)', ['A3a-S80', 'V4-T9'], 1],
      ['pur-schol', 'aid', 'priority', '2026-12-15', null, 0, 'Purdue 獎學金優先日', 'Purdue scholarship priority date', ['A3a-S81'], 1],
      ['pur-rd', 'apply', 'RD', '2027-01-15', null, 0, 'Purdue RD 截止', 'Purdue Regular Decision deadline', ['A3a-S80', 'V4-T8'], 1],
      ['pur-dec-ea', 'decision', 'decision', '2027-01-15', null, 0, 'Purdue EA 放榜', 'Purdue EA decisions', ['A3a-S80'], 1],
      ['pur-dec-rd', 'decision', 'decision', '2027-03-31', null, 0, 'Purdue RD 放榜（3/31 前）', 'Purdue RD decisions (by Mar 31)', ['A3a-S80'], 1]
    ],
    'Michigan': [
      ['mi-ed', 'apply', 'ED', '2026-11-01', null, 0, 'Michigan ED 截止', 'Michigan Early Decision deadline', ['V4-T13'], 1],
      ['mi-ea', 'apply', 'EA', '2026-11-01', null, 0, 'Michigan EA 截止', 'Michigan Early Action deadline', ['V4-T13'], 1],
      ['mi-test-early', 'materials', 'test', '2026-11-01', null, 0, 'Michigan ED／EA 自填成績', 'Michigan ED/EA self-reported scores', ['V4-T13'], 1],
      ['mi-aid-ed', 'aid', 'aid', '2026-11-15', null, 0, 'Michigan ED 補助截止', 'Michigan ED aid deadline', ['V4-T13'], 1],
      ['mi-smtd', 'apply', 'priority', '2026-12-01', null, 0, 'Michigan 音樂、戲劇與舞蹈學院截止', 'Michigan School of Music, Theatre & Dance deadline', ['V4-T13'], 1],
      ['mi-rd', 'apply', 'RD', '2027-02-01', null, 0, 'Michigan RD 截止', 'Michigan Regular Decision deadline', ['V4-T13'], 1],
      ['mi-test-rd', 'materials', 'test', '2027-02-01', null, 0, 'Michigan RD 自填成績', 'Michigan RD self-reported scores', ['V4-T13'], 1],
      ['mi-aid-eard', 'aid', 'aid', '2027-03-01', null, 0, 'Michigan EA／RD 補助截止', 'Michigan EA/RD aid deadline', ['V4-T13'], 1],
      ['mi-aid-sug', 'aid', 'aid', '2026-12-15', null, 0, 'Michigan EA／RD 建議的補助申請提交日（建議，非截止）', 'Michigan EA/RD suggested aid filing date (suggested, not a deadline)', ['R20'], 1],
      ['mi-dec-ed', 'decision', 'decision', '2026-12-24', null, 0, 'Michigan ED 放榜（12/24 前）', 'Michigan ED decisions (by Dec 24)', ['V4-T13'], 1],
      ['mi-dep-ed', 'decision', 'reply', '2027-01-06', null, 0, 'Michigan ED 訂金', 'Michigan ED enrolment deposit', ['V4-T13'], 1],
      ['mi-dec-ea', 'decision', 'decision', '2027-01-29', null, 0, 'Michigan EA 放榜（1/29 前）', 'Michigan EA decisions (by Jan 29)', ['V4-T13'], 1],
      ['mi-dec-rd', 'decision', 'decision', '2027-04-02', null, 0, 'Michigan RD 放榜（4/2 前）', 'Michigan RD decisions (by Apr 2)', ['V4-T13'], 1],
      ['mi-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Michigan 訂金截止', 'Michigan enrolment deposit deadline', ['V4-T13'], 1]
    ],
    'UIUC': [
      ['uiuc-open', 'apply', 'open', '2026-09-01', null, 0, 'UIUC 申請開放', 'UIUC application available', ['A3b-S1'], 1],
      ['uiuc-ea', 'apply', 'EA', '2026-11-01', null, 0, 'UIUC EA 截止', 'UIUC Early Action deadline', ['A3b-S1', 'A3b-S2'], 1],
      ['uiuc-ea-mat', 'materials', 'priority', '2026-11-07', null, 0, 'UIUC EA 必交資料', 'UIUC EA required materials', ['A3b-S1'], 1],
      ['uiuc-rd', 'apply', 'RD', '2027-01-05', null, 0, 'UIUC RD 截止', 'UIUC Regular deadline', ['A3b-S1'], 1],
      ['uiuc-rd-mat', 'materials', 'priority', '2027-01-11', null, 0, 'UIUC RD 必交資料', 'UIUC Regular required materials', ['A3b-S1'], 1],
      ['uiuc-dec-ea', 'decision', 'decision', '2027-01-29', null, 0, 'UIUC EA 放榜', 'UIUC EA notification', ['A3b-S1'], 1],
      ['uiuc-dec-rd', 'decision', 'decision', '2027-02-26', null, 0, 'UIUC RD 放榜', 'UIUC Regular notification', ['A3b-S1'], 1],
      ['uiuc-honors', 'decision', 'decision', '2027-04-01', null, 0, 'UIUC 榮譽與獎學金通知', 'UIUC honors and scholarship notification', ['A3b-S1'], 1],
      ['uiuc-reply', 'decision', 'reply', '2027-05-01', null, 0, 'UIUC 確認入學期限', 'UIUC commit deadline', ['A3b-S1'], 1]
    ],
    'Olin': [
      ['olin-rd', 'apply', 'RD', '2026-12-15', null, 0, 'Olin 申請截止（單一截止）', 'Olin application deadline (single round)', ['A3b-S6'], 0],
      ['olin-fafsa', 'aid', 'aid', '2027-01-15', null, 0, 'Olin FAFSA（本地生 need-based）', 'Olin FAFSA (domestic need-based aid)', ['A3b-S6'], 0],
      ['olin-cand', 'decision', 'decision', '2027-01-21', '2027-01-31', 1, 'Olin 公布入圍（1 月下旬）', 'Olin candidate status announced (late January)', ['A3b-S6'], 0],
      ['olin-cw1', 'materials', 'priority', '2027-02-19', '2027-02-20', 0, 'Olin Candidates\' Weekend 1', 'Olin Candidates\' Weekend 1', ['A3b-S6'], 0],
      ['olin-cw2', 'materials', 'priority', '2027-02-26', '2027-02-27', 0, 'Olin Candidates\' Weekend 2', 'Olin Candidates\' Weekend 2', ['A3b-S6'], 0],
      ['olin-cw3', 'materials', 'priority', '2027-03-05', '2027-03-06', 0, 'Olin Candidates\' Weekend 3', 'Olin Candidates\' Weekend 3', ['A3b-S6'], 0],
      ['olin-dec', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'Olin 錄取與補助通知（3 月下旬）', 'Olin admission and aid notifications (late March)', ['A3b-S6'], 0],
      ['olin-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Olin 回覆日', 'Olin reply date', ['A3b-S6'], 0]
    ],
    'Harvey Mudd': [
      ['hmc-bank', 'aid', 'aid', '2026-10-31', null, 0, 'Harvey Mudd ED I 國際生：銀行與證券對帳單截至此日', 'Harvey Mudd ED I international: bank and brokerage statements ending this date', ['A3b-S9'], 0],
      ['hmc-ed1', 'apply', 'ED', '2026-11-15', null, 0, 'Harvey Mudd ED I 截止', 'Harvey Mudd ED I deadline', ['A3b-S8'], 0],
      ['hmc-int-ed1', 'materials', 'priority', '2026-11-15', null, 0, 'Harvey Mudd ED I 選擇性面試截止', 'Harvey Mudd ED I optional interview deadline', ['A3b-S8'], 0],
      ['hmc-css-ed1', 'aid', 'aid', '2026-11-15', null, 0, 'Harvey Mudd ED I CSS Profile', 'Harvey Mudd ED I CSS Profile', ['A3b-S8', 'A3b-S9'], 0],
      ['hmc-tplan-ed1', 'materials', 'test', '2026-11-20', null, 0, 'Harvey Mudd ED I 考試計畫（建議）', 'Harvey Mudd ED I preferred testing-plan deadline', ['A3b-S8'], 1],
      ['hmc-sr-ed1', 'materials', 'test', '2026-11-30', null, 0, 'Harvey Mudd ED I 自填成績', 'Harvey Mudd ED I self-reported scores', ['A3b-S8'], 1],
      ['hmc-idoc-ed1', 'aid', 'aid', '2026-12-01', null, 0, 'Harvey Mudd ED I IDOC（含國際生 Certification of Finances）', 'Harvey Mudd ED I IDOC (incl. International Student Certification of Finances)', ['A3b-S8', 'A3b-S9'], 0],
      ['hmc-int-rd', 'materials', 'priority', '2026-12-15', null, 0, 'Harvey Mudd ED II／RD 選擇性面試截止', 'Harvey Mudd ED II / RD optional interview deadline', ['A3b-S8'], 1],
      ['hmc-ed2', 'apply', 'EDII', '2027-01-05', null, 0, 'Harvey Mudd ED II 截止', 'Harvey Mudd ED II deadline', ['A3b-S8'], 1],
      ['hmc-rd', 'apply', 'RD', '2027-01-05', null, 0, 'Harvey Mudd RD 截止', 'Harvey Mudd Regular Decision deadline', ['A3b-S8'], 1],
      ['hmc-css-ed2', 'aid', 'aid', '2027-01-05', null, 0, 'Harvey Mudd ED II CSS Profile', 'Harvey Mudd ED II CSS Profile', ['A3b-S8'], 1],
      ['hmc-tplan-rd', 'materials', 'test', '2027-01-10', null, 0, 'Harvey Mudd ED II／RD 考試計畫（建議）', 'Harvey Mudd ED II / RD preferred testing-plan deadline', ['A3b-S8'], 1],
      ['hmc-idoc-ed2', 'aid', 'aid', '2027-01-20', null, 0, 'Harvey Mudd ED II IDOC', 'Harvey Mudd ED II IDOC', ['A3b-S8'], 1],
      ['hmc-sr-ed2', 'materials', 'test', '2027-01-25', null, 0, 'Harvey Mudd ED II 自填成績', 'Harvey Mudd ED II self-reported scores', ['A3b-S8'], 1],
      ['hmc-css-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Harvey Mudd RD CSS Profile', 'Harvey Mudd RD CSS Profile', ['A3b-S8'], 1],
      ['hmc-merit', 'aid', 'priority', '2027-02-01', null, 0, 'Harvey Mudd merit 獎學金截止', 'Harvey Mudd merit scholarship deadline', ['A3b-S8'], 1],
      ['hmc-sr-rd', 'materials', 'test', '2027-02-05', null, 0, 'Harvey Mudd RD 自填成績', 'Harvey Mudd RD self-reported scores', ['A3b-S8'], 1],
      ['hmc-idoc-rd', 'aid', 'aid', '2027-02-15', null, 0, 'Harvey Mudd RD IDOC', 'Harvey Mudd RD IDOC', ['A3b-S8'], 1],
      ['hmc-dec-ed1', 'decision', 'decision', '2026-12-15', null, 0, 'Harvey Mudd ED I 放榜', 'Harvey Mudd ED I decisions', ['A3b-S8'], 1],
      ['hmc-rep-ed1', 'decision', 'reply', '2027-01-08', null, 0, 'Harvey Mudd ED I 回覆日', 'Harvey Mudd ED I reply date', ['A3b-S8'], 1],
      ['hmc-dec-ed2', 'decision', 'decision', '2027-02-15', null, 0, 'Harvey Mudd ED II 放榜', 'Harvey Mudd ED II decisions', ['A3b-S8'], 1],
      ['hmc-rep-ed2', 'decision', 'reply', '2027-02-26', null, 0, 'Harvey Mudd ED II 回覆日', 'Harvey Mudd ED II reply date', ['A3b-S8'], 1],
      ['hmc-dec-rd', 'decision', 'decision', '2027-04-01', null, 0, 'Harvey Mudd RD 放榜', 'Harvey Mudd RD decisions', ['A3b-S8'], 1],
      ['hmc-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Harvey Mudd RD 回覆日', 'Harvey Mudd RD reply date', ['A3b-S8'], 1]
    ],
    'Johns Hopkins': [
      ['jhu-test-ed', 'materials', 'test', '2026-10-01', '2026-10-31', 1, 'Johns Hopkins ED 建議 10 月前考完', 'Johns Hopkins ED: testing by October recommended', ['A3b-S12'], 1],
      ['jhu-ed1', 'apply', 'ED', '2026-11-01', null, 0, 'Johns Hopkins ED I 截止', 'Johns Hopkins ED I deadline', ['A3b-S11'], 0],
      ['jhu-aid-ed1', 'aid', 'aid', '2026-11-15', null, 0, 'Johns Hopkins ED I 補助截止', 'Johns Hopkins ED I aid deadline', ['A3b-S11'], 0],
      ['jhu-test-rd', 'materials', 'test', '2026-12-01', '2026-12-31', 1, 'Johns Hopkins RD 建議 12 月前考完', 'Johns Hopkins RD: testing by December recommended', ['A3b-S12'], 1],
      ['jhu-ed2', 'apply', 'EDII', '2027-01-02', null, 0, 'Johns Hopkins ED II 截止', 'Johns Hopkins ED II deadline', ['A3b-S11'], 0],
      ['jhu-rd', 'apply', 'RD', '2027-01-02', null, 0, 'Johns Hopkins RD 截止', 'Johns Hopkins Regular Decision deadline', ['A3b-S11'], 0],
      ['jhu-aid-rd', 'aid', 'aid', '2027-01-15', null, 0, 'Johns Hopkins ED II／RD 補助截止', 'Johns Hopkins ED II / RD aid deadline', ['A3b-S11'], 0],
      ['jhu-mid', 'materials', 'midyear', '2027-02-11', '2027-02-20', 1, 'Johns Hopkins 期中報告（2 月中）', 'Johns Hopkins mid-year report (mid-February)', ['A3b-S11'], 0],
      ['jhu-dec-ed1', 'decision', 'decision', '2026-12-11', null, 0, 'Johns Hopkins ED I 放榜', 'Johns Hopkins ED I decisions', ['A3b-S11'], 0],
      ['jhu-rep-ed1', 'decision', 'reply', '2027-01-15', null, 0, 'Johns Hopkins ED I 回覆期限', 'Johns Hopkins ED I reply-by date', ['A3b-S11'], 0],
      ['jhu-dec-ed2', 'decision', 'decision', '2027-02-12', null, 0, 'Johns Hopkins ED II 放榜', 'Johns Hopkins ED II decisions', ['A3b-S11'], 0],
      ['jhu-rep-ed2', 'decision', 'reply', '2027-02-26', null, 0, 'Johns Hopkins ED II 回覆期限', 'Johns Hopkins ED II reply-by date', ['A3b-S11'], 0],
      ['jhu-dec-rd', 'decision', 'decision', '2027-03-24', null, 0, 'Johns Hopkins RD 放榜', 'Johns Hopkins RD decisions', ['A3b-S11'], 0],
      ['jhu-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Johns Hopkins RD 回覆期限', 'Johns Hopkins RD reply-by date', ['A3b-S11'], 0]
    ],
    'Duke': [
      ['duke-ed', 'apply', 'ED', '2026-11-02', null, 0, 'Duke ED 截止', 'Duke Early Decision deadline', ['A3b-S15'], 1],
      ['duke-arts-ed', 'materials', 'portfolio', '2026-11-02', null, 0, 'Duke 藝術補充（ED）', 'Duke arts supplement (ED)', ['A3b-S15'], 1],
      ['duke-css-ed', 'aid', 'aid', '2026-11-02', null, 0, 'Duke ED CSS Profile 與 FAFSA', 'Duke ED CSS Profile and FAFSA', ['A3b-S15'], 1],
      ['duke-docs-ed', 'aid', 'aid', '2026-11-15', null, 0, 'Duke ED 其他補助文件（如稅單）', 'Duke ED other aid documents (e.g. taxes)', ['A3b-S15'], 1],
      ['duke-rd', 'apply', 'RD', '2027-01-04', null, 0, 'Duke RD 截止', 'Duke Regular Decision deadline', ['A3b-S15'], 1],
      ['duke-arts-rd', 'materials', 'portfolio', '2027-01-04', null, 0, 'Duke 藝術補充（RD）', 'Duke arts supplement (RD)', ['A3b-S15'], 1],
      ['duke-css-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Duke RD CSS Profile 與 FAFSA', 'Duke RD CSS Profile and FAFSA', ['A3b-S15'], 1],
      ['duke-mid', 'materials', 'midyear', '2027-02-15', null, 0, 'Duke 期中成績', 'Duke midyear grades', ['A3b-S15'], 1],
      ['duke-dec-ed', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Duke ED 放榜（12 月中）', 'Duke ED decisions (mid-December)', ['A3b-S15'], 1],
      ['duke-dec-rd', 'decision', 'decision', '2027-03-21', '2027-04-10', 1, 'Duke RD 放榜（3 月底／4 月初）', 'Duke RD decisions (late March / early April)', ['A3b-S15'], 1]
    ],
    'Northwestern': [
      ['nu-qb', 'apply', 'priority', '2026-10-01', null, 0, 'Northwestern QuestBridge 截止', 'Northwestern QuestBridge deadline', ['V4-T7'], 0],
      ['nu-ed', 'apply', 'ED', '2026-11-01', null, 0, 'Northwestern ED 截止', 'Northwestern Early Decision deadline', ['V4-T7', 'A3b-S16'], 0],
      ['nu-bienen-ed', 'materials', 'portfolio', '2026-10-15', null, 0, 'Northwestern Bienen 音樂補充（ED 與 QuestBridge，2027 秋季入學）', 'Northwestern Bienen music supplement (ED and QuestBridge, fall 2027 entry)', ['A3b-S20', 'R45'], 1],
      ['nu-glimpse-ed', 'materials', 'test', '2026-11-06', null, 0, 'Northwestern Glimpse／InitialView 錄影（ED）', 'Northwestern Glimpse / InitialView recording (ED)', ['V4-T5'], 1],
      ['nu-aid-ed', 'aid', 'aid', '2026-12-01', null, 0, 'Northwestern ED 補助截止', 'Northwestern ED aid deadline', ['V4-T7'], 0],
      ['nu-bienen-rd', 'materials', 'portfolio', '2026-12-01', null, 0, 'Northwestern Bienen 音樂補充（RD，2027 秋季入學；早於 1/4 的一般申請截止）', 'Northwestern Bienen music supplement (RD, fall 2027 entry; due before the Jan 4 application)', ['A3b-S20', 'R45'], 1],
      ['nu-rd', 'apply', 'RD', '2027-01-04', null, 0, 'Northwestern RD 截止', 'Northwestern Regular Decision deadline', ['V4-T7', 'A3b-S16'], 0],
      ['nu-glimpse-rd', 'materials', 'test', '2027-01-16', null, 0, 'Northwestern Glimpse／InitialView 錄影（RD）', 'Northwestern Glimpse / InitialView recording (RD)', ['V4-T5'], 1],
      ['nu-aid-rd', 'aid', 'aid', '2027-02-01', null, 0, 'Northwestern RD 補助截止', 'Northwestern RD aid deadline', ['V4-T7'], 0],
      ['nu-dec-ed', 'decision', 'decision', '2026-12-01', '2026-12-31', 1, 'Northwestern ED 放榜（2026 年 12 月）', 'Northwestern ED decisions (December 2026)', ['V4-T7', 'A3b-S16'], 0],
      ['nu-dec-rd', 'decision', 'decision', '2027-03-01', '2027-03-31', 1, 'Northwestern RD 放榜（2027 年 3 月）', 'Northwestern RD decisions (March 2027)', ['A3b-S16'], 0]
    ],
    'Rice': [
      ['rice-ed1', 'apply', 'ED', '2026-11-01', null, 0, 'Rice ED I 截止', 'Rice ED I deadline', ['A3b-S21'], 1],
      ['rice-arch-ed1', 'materials', 'portfolio', '2026-11-01', null, 0, 'Rice 建築作品集（ED I）', 'Rice architecture portfolio (ED I)', ['A3b-S21'], 1],
      ['rice-fin-ed1', 'aid', 'aid', '2026-11-01', null, 0, 'Rice ED I 國際生財力聲明', 'Rice ED I International Student Financial Statement', ['A3b-S22'], 1],
      ['rice-int-ed1', 'materials', 'priority', '2026-11-03', null, 0, 'Rice ED I 面試申請', 'Rice ED I interview request', ['A3b-S21'], 1],
      ['rice-iv-ed', 'materials', 'test', '2026-11-10', null, 0, 'Rice InitialView（ED）', 'Rice InitialView (ED)', ['A3b-S22'], 1],
      ['rice-shep', 'materials', 'portfolio', '2026-12-01', null, 0, 'Rice Shepherd 音樂院全部資料（不開放 ED）', 'Rice Shepherd School: all music materials (no ED)', ['A3b-S21'], 1],
      ['rice-rdpri', 'apply', 'priority', '2026-12-14', null, 0, 'Rice RD 面試優先申請日', 'Rice RD priority application date for interview', ['A3b-S21'], 1],
      ['rice-int-rdpri', 'materials', 'priority', '2026-12-16', null, 0, 'Rice RD 優先面試申請', 'Rice RD priority interview request', ['A3b-S21'], 1],
      ['rice-ed2', 'apply', 'EDII', '2027-01-04', null, 0, 'Rice ED II 截止', 'Rice ED II deadline', ['A3b-S21'], 1],
      ['rice-rd', 'apply', 'RD', '2027-01-04', null, 0, 'Rice RD 截止', 'Rice Regular Decision deadline', ['A3b-S21'], 1],
      ['rice-arch-rd', 'materials', 'portfolio', '2027-01-04', null, 0, 'Rice 建築作品集（ED II／RD）', 'Rice architecture portfolio (ED II / RD)', ['A3b-S21'], 1],
      ['rice-fin-rd', 'aid', 'aid', '2027-01-04', null, 0, 'Rice ED II／RD 國際生財力聲明', 'Rice ED II / RD International Student Financial Statement', ['A3b-S22'], 1],
      ['rice-int-rd', 'materials', 'priority', '2027-01-06', null, 0, 'Rice ED II／RD 面試申請', 'Rice ED II / RD interview request', ['A3b-S21'], 1],
      ['rice-iv-rd', 'materials', 'test', '2027-01-12', null, 0, 'Rice InitialView（ED II／RD）', 'Rice InitialView (ED II / RD)', ['A3b-S22'], 1],
      ['rice-dec-ed1', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Rice ED I 放榜（12 月中前）', 'Rice ED I decisions (by mid-December)', ['A3b-S21'], 1],
      ['rice-dep-ed1', 'decision', 'reply', '2027-01-04', null, 0, 'Rice ED I 訂金', 'Rice ED I enrolment deposit', ['A3b-S21'], 1],
      ['rice-dec-ed2', 'decision', 'decision', '2027-01-21', '2027-01-31', 1, 'Rice ED II 放榜（1 月下旬前）', 'Rice ED II decisions (by late January)', ['A3b-S21'], 1],
      ['rice-dep-ed2', 'decision', 'reply', '2027-02-11', '2027-02-20', 1, 'Rice ED II 訂金（2 月中）', 'Rice ED II enrolment deposit (mid-February)', ['A3b-S21'], 1],
      ['rice-dec-rd', 'decision', 'decision', '2027-04-01', null, 0, 'Rice RD 放榜（4/1 前）', 'Rice RD decisions (by Apr 1)', ['A3b-S21'], 1],
      ['rice-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Rice RD 訂金', 'Rice RD enrolment deposit', ['A3b-S21'], 1]
    ],
    'UC Berkeley': [
      ['ucb-file', 'apply', 'UC', '2026-10-01', '2026-11-30', 0, 'UC Berkeley 收件期（UC 申請）', 'UC Berkeley filing period (UC application)', ['A3b-S23', 'A3b-S26'], 0],
      ['ucb-forms', 'materials', 'priority', '2027-01-31', null, 0, 'UC Berkeley 必填表格', 'UC Berkeley mandatory forms', ['A3b-S26'], 1],
      ['ucb-dec', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'UC Berkeley 放榜（3 月底）', 'UC Berkeley decisions (end of March)', ['A3b-S26'], 1],
      ['ucb-reply', 'decision', 'reply', '2027-05-01', null, 0, 'UC Berkeley 接受錄取期限', 'UC Berkeley accept offer by', ['A3b-S26'], 1]
    ],
    'UCLA': [
      ['ucla-file', 'apply', 'UC', '2026-10-01', '2026-11-30', 0, 'UCLA 收件期（同頁另一句寫 12/1）', 'UCLA filing period (a sentence on the same page says Dec 1)', ['A3b-S23', 'A3b-S29'], 0],
      ['ucla-dec', 'decision', 'decision', '2027-03-21', '2027-03-31', 1, 'UCLA 放榜（3 月下旬）', 'UCLA decisions (late March)', ['A3b-S29'], 1]
    ],
    'UC San Diego': [
      ['ucsd-file', 'apply', 'UC', '2026-10-01', '2026-11-30', 0, 'UC San Diego 收件期（UC 系統）', 'UC San Diego filing period (UC system)', ['A3b-S23'], 0],
      ['ucsd-trans', 'after', 'midyear', '2027-07-01', null, 0, 'UC San Diego 最終成績單', 'UC San Diego final transcripts', ['A3b-S31'], 1],
      ['ucsd-ib', 'after', 'test', '2027-07-15', null, 0, 'UC San Diego IB 成績', 'UC San Diego IB results', ['A3b-S31'], 1]
    ],
    'UT Austin': [
      ['ut-open', 'apply', 'open', '2026-08-01', null, 0, 'UT Austin 申請開放', 'UT Austin application opens', ['A3b-S33'], 1],
      ['ut-ea', 'apply', 'EA', '2026-10-15', null, 0, 'UT Austin EA 截止', 'UT Austin Early Action deadline', ['A3b-S33'], 1],
      ['ut-ea-sup', 'materials', 'priority', '2026-10-22', null, 0, 'UT Austin EA 補充資料', 'UT Austin EA supplemental materials', ['A3b-S33'], 1],
      ['ut-rd', 'apply', 'RD', '2026-12-01', null, 0, 'UT Austin Regular 截止', 'UT Austin Regular deadline', ['A3b-S33'], 1],
      ['ut-rd-sup', 'materials', 'priority', '2026-12-10', null, 0, 'UT Austin Regular 補充資料', 'UT Austin Regular supplemental materials', ['A3b-S33'], 1],
      ['ut-dec-ea', 'decision', 'decision', '2027-01-15', null, 0, 'UT Austin EA 錄取或延後（1/15 前）', 'UT Austin EA admit or defer (by Jan 15)', ['A3b-S33'], 0],
      ['ut-dec-rd', 'decision', 'decision', '2027-02-15', null, 0, 'UT Austin Regular 放榜', 'UT Austin Regular decisions', ['A3b-S33'], 1],
      ['ut-honors', 'decision', 'decision', '2027-03-01', null, 0, 'UT Austin 榮譽學程放榜', 'UT Austin honors decisions', ['A3b-S33'], 1]
    ],
    'UW': [
      ['uw-open', 'apply', 'open', '2026-08-15', null, 0, 'UW 申請開放', 'UW application opens', ['A3b-S36'], 1],
      ['uw-rd', 'apply', 'RD', '2026-11-15', null, 0, 'UW 申請截止（無早申）', 'UW application deadline (no early round)', ['A3b-S35', 'A3b-S36'], 1],
      ['uw-test', 'materials', 'test', '2026-12-31', null, 0, 'UW 考試成績截止', 'UW test score deadline', ['A3b-S36'], 1],
      ['uw-aid', 'aid', 'priority', '2027-02-01', null, 0, 'UW 補助優先日（不給國際大學生）', 'UW aid priority date (no aid for international undergraduates)', ['A3b-S36', 'A3b-S38'], 1],
      ['uw-dec', 'decision', 'decision', '2027-03-01', '2027-03-15', 0, 'UW 放榜', 'UW decisions', ['A3b-S35', 'A3b-S36'], 1],
      ['uw-reply', 'decision', 'reply', '2027-05-01', null, 0, 'UW 確認入學（多數）', 'UW confirm enrolment (most first-years)', ['A3b-S36'], 1]
    ],
    'Williams': [
      ['wil-ed', 'apply', 'ED', '2026-11-15', null, 0, 'Williams ED 截止', 'Williams Early Decision deadline', ['V4-T11'], 1],
      ['wil-rd', 'apply', 'RD', '2027-01-04', null, 0, 'Williams RD 截止', 'Williams Regular Decision deadline', ['V4-T11'], 1],
      ['wil-dec-ed', 'decision', 'decision', '2026-12-14', null, 0, 'Williams ED 放榜（12/14 前）', 'Williams ED decisions (by Dec 14)', ['V4-T11'], 1],
      ['wil-dec-rd', 'decision', 'decision', '2027-04-01', null, 0, 'Williams RD 放榜', 'Williams RD decisions', ['V4-T11'], 1],
      ['wil-reply', 'decision', 'reply', '2027-05-01', null, 0, 'Williams 回覆日', 'Williams reply date', ['V4-T11'], 1]
    ],
    'Amherst': [],
    'Swarthmore': [
      ['swat-ed1', 'apply', 'ED', '2026-11-15', null, 0, 'Swarthmore ED I 截止', 'Swarthmore ED I (Fall ED) deadline', ['A3b-S41'], 1],
      ['swat-ed2', 'apply', 'EDII', '2027-01-04', null, 0, 'Swarthmore ED II 截止', 'Swarthmore ED II (Winter ED) deadline', ['A3b-S41'], 1],
      ['swat-rd', 'apply', 'RD', '2027-01-04', null, 0, 'Swarthmore RD 截止', 'Swarthmore Regular Decision deadline', ['A3b-S41'], 1],
      ['swat-dec-ed1', 'decision', 'decision', '2026-12-11', '2026-12-20', 1, 'Swarthmore ED I 放榜（12 月中）', 'Swarthmore ED I decisions (mid-December)', ['A3b-S41'], 1],
      ['swat-dec-ed2', 'decision', 'decision', '2027-02-11', '2027-02-20', 1, 'Swarthmore ED II 放榜（2 月中）', 'Swarthmore ED II decisions (mid-February)', ['A3b-S41'], 1],
      ['swat-dec-rd', 'decision', 'decision', '2027-04-01', null, 0, 'Swarthmore RD 放榜（4/1 前）', 'Swarthmore RD decisions (by Apr 1)', ['A3b-S41'], 1]
    ]
  };

  var sharedRows = [
    ['ca-open', 'apply', 'open', '2026-08-01', null, 0, 'Common App 2026–27 開放', 'Common App 2026–27 opens', ['A1-S4'], 0],
    ['uc-open', 'apply', 'open', '2026-08-01', null, 0, 'UC 申請開放（2027 秋季）', 'UC application opens (fall 2027)', ['A3b-S23'], 0],
    ['uc-file', 'apply', 'UC', '2026-10-01', '2026-11-30', 0, 'UC 收件期', 'UC filing period', ['A3b-S23'], 0],
    ['uc-dec', 'decision', 'decision', '2027-03-01', '2027-03-31', 0, 'UC 放榜窗口', 'UC decision window', ['A3b-S23'], 0],
    ['uc-fafsa', 'aid', 'aid', '2027-03-02', null, 0, 'UC FAFSA／Dream Act／GPA 驗證（本地生）', 'UC FAFSA / Dream Act / GPA Verification (domestic)', ['A3b-S23'], 0],
    ['may1', 'decision', 'reply', '2027-05-01', null, 0, '全國回覆日 5/1', 'National reply date, May 1', ['A3b-S6'], 0],
    ['uc-sir', 'decision', 'reply', '2027-05-01', null, 0, 'UC 確認入學（SIR）', 'UC Statement of Intent to Register (SIR)', ['A3b-S23'], 0],
    ['uc-trans', 'after', 'midyear', '2027-07-01', null, 0, 'UC 最終正式成績單', 'UC final official transcripts', ['A3b-S23'], 0],
    ['uc-apib', 'after', 'test', '2027-07-15', null, 0, 'UC AP／IB 成績', 'UC AP / IB results', ['A3b-S23'], 0]
  ];

  function toEvent(school, r) {
    return {
      id: r[0], school: school, lane: r[1], kind: r[2], start: r[3], end: r[4],
      approx: !!r[5], label: { zh: r[6], en: r[7] }, src: r[8], noYear: !!r[9]
    };
  }

  var schools = ['MIT', 'Caltech', 'Stanford', 'Harvard', 'Yale', 'Princeton', 'Columbia', 'Penn',
    'Brown', 'Cornell', 'Georgetown', 'CMU', 'Georgia Tech', 'Purdue', 'Michigan', 'UIUC', 'Olin',
    'Harvey Mudd', 'Johns Hopkins', 'Duke', 'Northwestern', 'Rice', 'UC Berkeley', 'UCLA',
    'UC San Diego', 'UT Austin', 'UW', 'Williams', 'Amherst', 'Swarthmore'];

  var events = [];
  schools.forEach(function (sc) {
    (bySchool[sc] || []).forEach(function (r) { events.push(toEvent(sc, r)); });
  });
  events.sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });

  window.ATLAS.viz.deadlines = {
    cycle: '2026-27',
    today: '2026-11-08',
    lanes: [
      { id: 'apply', label: { zh: '申請截止', en: 'Application deadlines' } },
      { id: 'aid', label: { zh: '財務補助文件', en: 'Financial aid documents' } },
      { id: 'materials', label: { zh: '作品集與補件', en: 'Portfolios and materials' } },
      { id: 'decision', label: { zh: '放榜與回覆', en: 'Decisions and replies' } },
      { id: 'after', label: { zh: '錄取後', en: 'After admission' } }
    ],
    events: events,
    schools: schools,
    // Schools with no dated event and why.
    noEvents: {
      'Amherst': {
        zh: '官方網站於 2026-11-07 回傳 HTTP 405，Common App 頁面只列 ED 與 RD、沒有日期。',
        en: 'The official site returned HTTP 405 on 2026-11-07, and the Common App listing names ED and RD with no dates.',
        src: ['A3b-S49', 'A3b-S40']
      }
    },
    shared: sharedRows.map(function (r) { return toEvent(null, r); }),
    // Post-admission steps for an international student. No page read gives a calendar date
    // for them, so they are ordered, not dated.
    undatedSteps: [
      { id: 'i20', lane: 'after', kind: 'visa', label: { zh: '錄取後由學校 DSO 簽發 Form I-20', en: 'Form I-20 issued by the school\'s DSO after acceptance' }, src: ['A3b-S45'] },
      { id: 'i901', lane: 'after', kind: 'visa', label: { zh: '繳 SEVIS I-901 費（F/M 為 $350）', en: 'Pay the SEVIS I-901 fee ($350 for F/M)' }, src: ['A3b-S44'] },
      { id: 'visa', lane: 'after', kind: 'visa', label: { zh: 'I-901 須在國務院核發簽證前繳清', en: 'I-901 must be paid before the Department of State can issue a visa' }, src: ['A3b-S45'] },
      { id: 'arrive', lane: 'after', kind: 'visa', label: { zh: '最早可於 I-20 開課日前 30 天入境', en: 'Arrive no earlier than 30 days before the I-20 programme start date' }, src: ['A3b-S45'] }
    ]
  };
})();
