// Chart dataset: US schools 31–50 (the 20 on more.html), same shape as window.ATLAS.viz.schools.
// Built from data/p-more.js, which carries the notes research/2026-11-07_us-schools-31-50-part1_v1.md (G1-)
// and research/2026-11-07_us-schools-31-50-part2_v1.md (G2-). Every src id exists in data/sources.js.
// Fields are the subset those notes support at roster and matrix depth; nothing here goes beyond a cell in p-more.js.
// null = not stated on the pages read, not verified, or only an inference; never estimated.
// Coding rules, applied the same way to all 20:
//   system: QuestBridge routes are not in the enum and are left out; the Universities of Wisconsin Application,
//     Maryland's ApplyWeb and The RPI Application count as 'own'.
//   testPolicy: UNC's UNC System rule (scores needed only below a weighted GPA of 2.8) gets its own key 'gpa';
//     UVA's 'optional' comes from Common App's UVA page (G1-S50), not UVA's own site.
//   needPolicy: only what a school states for internationals. WashU states its need-blind policy excludes
//     internationals without naming the alternative: 'unclear'. Pages silent on the question: null.
//   teacherLetters: null where the one required letter may come from a teacher or someone else (USC, NYU,
//     UW–Madison, RPI); 0 where letters are not reviewed (UC Davis, UCSB general admission).
//   otherRecommender: true only where an extra letter is explicitly welcome; false only where refused.
//   engEntry: only where the page states it (part 2 checked it; part 1 did not). Inferences (RPI, UC Davis) stay null.
//   materials: yes = the category is named or any material is explicitly invited; limited = only some majors,
//     only inside another channel, or only a generic upload that does not name the category; no = refused or
//     no channel; ns = not stated; blocked = page refused automated reading.
// note: the dataset's own short text for each material cell, shown in the matrix-grid tooltip and drawer
//   (the top-30 figure reads window.ATLAS.matrix instead).
window.ATLAS = window.ATLAS || {}; window.ATLAS.viz = window.ATLAS.viz || {};
(function () {
  function s(zh, en) { return { zh: zh, en: en }; }
  var NS = s('未載明（2026-11-07 查核）', 'Not stated (checked 2026-11-07)');
  var BLK = s('未查核：UVA 官網 2026-11-07 拒絕自動讀取（HTTP 403）', 'Not verified: UVA\'s own site refused automated reading on 2026-11-07 (HTTP 403)');

  var order = ['UChicago', 'Dartmouth', 'Vanderbilt', 'WashU', 'Notre Dame', 'Emory', 'USC', 'UVA', 'NYU', 'Tufts',
    'UNC', 'UW–Madison', 'Rochester', 'Case Western', 'Northeastern', 'Maryland', 'UC Davis', 'UCSB', 'RPI', 'Pomona'];

  var fields = [
    { id: 'system', label: s('申請系統', 'Application system'), group: 'apply', type: 'enum', enum: 'system', multi: true },
    { id: 'plans', label: s('申請方案', 'Application plans'), group: 'apply', type: 'enum', enum: 'plans', multi: true },
    { id: 'teacherLetters', label: s('必繳老師推薦信封數', 'Teacher letters required'), group: 'letters', type: 'number' },
    { id: 'otherRecommender', label: s('接受其他推薦人', 'Other Recommender accepted'), group: 'letters', type: 'enum', enum: 'bool' },
    { id: 'interview', label: s('面試', 'Interview'), group: 'letters', type: 'text' },
    { id: 'testPolicy', label: s('SAT/ACT 2026–27', 'SAT/ACT 2026–27'), group: 'tests', type: 'enum', enum: 'testPolicy' },
    { id: 'needPolicy', label: s('國際生 need 政策', 'Need policy for internationals'), group: 'intl', type: 'enum', enum: 'needPolicy' },
    { id: 'engEntry', label: s('工程：何時進入', 'Engineering: when you enter'), group: 'majors', type: 'enum', enum: 'entry' },
    { id: 'materials.arts', label: s('藝術作品集', 'Arts portfolio'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.maker', label: s('Maker／工程作品集', 'Maker or engineering portfolio'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.research', label: s('研究論文或摘要', 'Research paper or abstract'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.video', label: s('影片', 'Video'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.links', label: s('外部連結', 'External links'), group: 'materials', type: 'enum', enum: 'material' }
  ];

  // copied from viz-schools.js (same keys); testPolicy adds 'gpa' for UNC's rule, placed before 'varies' so its
  // waffle color slot (key index mod 5) does not repeat 'required'
  var enums = {
    system: {
      commonapp: s('Common App', 'Common App'),
      coalition: s('Coalition（Scoir）', 'Coalition (Scoir)'),
      own: s('學校自有系統', 'School\'s own application'),
      uc: s('UC Application', 'UC Application'),
      applytexas: s('ApplyTexas', 'ApplyTexas')
    },
    plans: {
      ED: s('ED（綁約）', 'ED (binding)'),
      ED2: s('ED II', 'ED II'),
      EA: s('EA（非限制）', 'EA (non-restrictive)'),
      REA: s('REA／SCEA', 'REA / SCEA'),
      RD: s('RD／單一截止', 'RD / single deadline')
    },
    testPolicy: {
      required: s('必繳', 'Required'),
      optional: s('選繳', 'Optional'),
      recommended: s('建議繳交', 'Recommended'),
      blind: s('不納入考量', 'Not considered'),
      gpa: s('依 GPA 決定是否須繳', 'Depends on GPA'),
      varies: s('依學院而定或「expected」', 'Varies by college or "expected"')
    },
    needPolicy: {
      blind: s('need-blind', 'Need-blind'),
      aware: s('need-aware', 'Need-aware'),
      noAid: s('無 need-based 補助', 'No need-based aid'),
      unclear: s('頁面未明寫', 'Not stated outright')
    },
    entry: {
      school: s('錄取到學校，入學後選主修', 'Admitted to the school; major later'),
      direct: s('申請時決定學院或主修', 'College or major set at application'),
      capped: s('有名額或容量限制', 'Seat or capacity limit')
    },
    material: {
      yes: s('接受', 'Accepted'),
      no: s('不收或沒有管道', 'Refused or no channel'),
      limited: s('限特定主修或管道', 'Only some majors or channels'),
      ns: s('未載明', 'Not stated'),
      blocked: s('網站拒絕自動讀取', 'Site refused automated reading')
    },
    bool: { 'true': s('是', 'Yes'), 'false': s('否', 'No') }
  };

  // materials note keys in fixed order: arts, maker, research, video, links
  function notes(a, m, r, v, l) {
    var o = {};
    ['arts', 'maker', 'research', 'video', 'links'].forEach(function (k, i) { o['materials.' + k] = [a, m, r, v, l][i] || NS; });
    return o;
  }

  var data = {
    'UChicago': {
      name: s('芝加哥大學 UChicago', 'UChicago'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'EA', 'RD'], testPolicy: 'optional',
      teacherLetters: 2, otherRecommender: true,
      interview: s('不面試；可交兩分鐘影片', 'No interviews; optional two-minute video'),
      needPolicy: null, engEntry: null,
      materials: { arts: 'yes', maker: 'limited', research: 'yes', video: 'yes', links: 'limited' },
      note: notes(
        s('音樂、舞蹈、視覺藝術、戲劇，自行上傳 UChicago Account', 'Music, dance, visual art, theater, self-uploaded in the UChicago Account'),
        s('未列類別；列有「other work of note」與商業計畫', 'Not named; “other work of note” and business plans are listed'),
        s('收研究；FAQ 建議交原創研究摘要，而非全文', 'Research accepted; the FAQ suggests an abstract, not a full paper'),
        s('兩分鐘影片自介，可上傳檔案或連結', 'Two-minute video profile, as a file or a link'),
        s('影片自介可用連結；其他材料未載明', 'A link works for the video profile; not stated for other material')),
      src: {
        system: ['G1-S01', 'G1-S03'], plans: ['G1-S03'], testPolicy: ['G1-S01'],
        teacherLetters: ['G1-S01'], otherRecommender: ['G1-S01'], interview: ['G1-S02', 'G1-S05'], needPolicy: ['G1-S02', 'G1-S07'],
        engEntry: [],
        'materials.arts': ['G1-S02', 'G1-S05'], 'materials.maker': ['G1-S02', 'G1-S05'], 'materials.research': ['G1-S02', 'G1-S05'], 'materials.video': ['G1-S02', 'G1-S05'], 'materials.links': ['G1-S02']
      },
      blocked: false
    },
    'Dartmouth': {
      name: s('達特茅斯學院 Dartmouth', 'Dartmouth'),
      system: ['commonapp'], plans: ['ED', 'RD'], testPolicy: 'required',
      teacherLetters: 2, otherRecommender: true,
      interview: s('送件後校友面試，不保證；evaluative', 'Optional alumni interview after applying; evaluative; not offered to all'),
      needPolicy: 'blind', engEntry: null,
      materials: { arts: 'yes', maker: 'ns', research: 'yes', video: 'limited', links: 'no' },
      note: notes(
        s('舞蹈、戲劇、Studio Art、音樂，最多兩項，經 portal 上傳', 'Dance, theater, Studio Art, music, up to two, via the portal'),
        null,
        s('只收一頁摘要：請勿交研究全文', 'Single-page abstracts only; full research papers are not wanted'),
        s('只在藝術作品集內（表演影片）', 'Inside arts portfolios only (performance video)'),
        s('Studio Art：不收網站連結或 HTML，改做影片', 'Studio Art: no website links or HTML; make a video instead')),
      src: {
        system: ['G1-S08'], plans: ['G1-S08', 'G1-S16'], testPolicy: ['G1-S09', 'G1-S10'],
        teacherLetters: ['G1-S08', 'G1-S14'], otherRecommender: ['G1-S08', 'G1-S14', 'G1-S15'], interview: ['G1-S19'], needPolicy: ['G1-S12'],
        engEntry: [],
        'materials.arts': ['G1-S16', 'G1-S17'], 'materials.maker': ['G1-S18'], 'materials.research': ['G1-S18'], 'materials.video': ['G1-S17'], 'materials.links': ['G1-S17']
      },
      blocked: false
    },
    'Vanderbilt': {
      name: s('范德堡大學 Vanderbilt', 'Vanderbilt'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      teacherLetters: 2, otherRecommender: null,
      interview: s('招生處不面試；可交 Glimpse／InitialView', 'No admissions interviews; Glimpse or InitialView optional'),
      needPolicy: 'aware', engEntry: null,
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'yes', links: 'ns' },
      note: notes(
        s('只限 Blair 音樂學院，經 MyAppVU 的 Blair 申請', 'Blair School of Music only, via the Blair application in MyAppVU'),
        null, null,
        s('Glimpse 60–90 秒（美國高中）或 InitialView（國際）', 'Glimpse 60–90 s (US high schools) or InitialView (international)'),
        null),
      src: {
        system: ['G1-S20'], plans: ['G1-S20'], testPolicy: ['G1-S22'],
        teacherLetters: ['G1-S21'], otherRecommender: ['G1-S21'], interview: ['G1-S21'], needPolicy: ['G1-S21'],
        engEntry: [],
        'materials.arts': ['G1-S20', 'G1-S21'], 'materials.maker': ['G1-S21'], 'materials.research': ['G1-S21'], 'materials.video': ['G1-S21'], 'materials.links': ['G1-S21']
      },
      blocked: false
    },
    'WashU': {
      name: s('聖路易華盛頓大學 WashU', 'WashU'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'EA', 'RD'], testPolicy: 'optional',
      teacherLetters: 1, otherRecommender: null,
      interview: s('不辦 evaluative 面試；第三方面試作英語證明', 'No evaluative interviews; third-party interviews as English evidence'),
      needPolicy: 'unclear', engEntry: null,
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'yes', links: 'ns' },
      note: notes(
        s('College of Art 必繳、建築強烈建議；SlideRoom，10–20 件', 'Required for the College of Art, encouraged for Architecture; SlideRoom, 10–20 pieces'),
        null, null,
        s('一支選繳的 90 秒影片，經 WashU Pathway 或 Glimpse', 'One optional 90-second video via WashU Pathway or Glimpse'),
        null),
      src: {
        system: ['G1-S24', 'G1-S25'], plans: ['G1-S24'], testPolicy: ['G1-S24', 'G1-S25', 'G1-S30'],
        teacherLetters: ['G1-S24'], otherRecommender: ['G1-S24', 'G1-S25'], interview: ['G1-S26'], needPolicy: ['G1-S27'],
        engEntry: [],
        'materials.arts': ['G1-S29'], 'materials.maker': ['G1-S24', 'G1-S25'], 'materials.research': ['G1-S24', 'G1-S25'], 'materials.video': ['G1-S28'], 'materials.links': ['G1-S25']
      },
      blocked: false
    },
    'Notre Dame': {
      name: s('聖母大學 Notre Dame', 'Notre Dame'),
      system: ['commonapp', 'coalition'], plans: ['REA', 'RD'], testPolicy: 'optional',
      teacherLetters: 1, otherRecommender: null,
      interview: s('不面試；可交 60–90 秒影片', 'No interviews; optional 60–90 s video'),
      needPolicy: 'blind', engEntry: null,
      materials: { arts: 'yes', maker: 'no', research: 'ns', video: 'yes', links: 'ns' },
      note: notes(
        s('藝術、藝術史與設計、建築；音樂作品人人可交；SlideRoom', 'Art, Art History & Design, Architecture; music samples open to anyone; SlideRoom'),
        s('補充材料只鼓勵藝術、音樂與建築', 'Supplementary material is encouraged only for art, music and architecture'),
        null,
        s('Glimpse／InitialView 60–90 秒（需付費）', 'Glimpse or InitialView, 60–90 s (fee applies)'),
        null),
      src: {
        system: ['G1-S31'], plans: ['G1-S31', 'G1-S32'], testPolicy: ['G1-S31', 'G1-S33', 'G1-S64'],
        teacherLetters: ['G1-S33', 'G1-S35'], otherRecommender: ['G1-S33', 'G1-S35'], interview: ['G1-S33'], needPolicy: ['G1-S34', 'G1-S36'],
        engEntry: [],
        'materials.arts': ['G1-S33', 'G1-S35'], 'materials.maker': ['G1-S35'], 'materials.research': ['G1-S35'], 'materials.video': ['G1-S33'], 'materials.links': ['G1-S33', 'G1-S35']
      },
      blocked: false
    },
    'Emory': {
      name: s('艾默里大學 Emory', 'Emory'),
      system: ['commonapp'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      teacherLetters: 2, otherRecommender: null,
      interview: s('不辦 evaluative 面試；國際生可交 InitialView', 'No evaluative interviews; InitialView for internationals'),
      needPolicy: null, engEntry: null,
      materials: { arts: 'yes', maker: 'limited', research: 'limited', video: 'yes', links: 'yes' },
      note: notes(
        s('數位作品集與藝術補充，PDF 經申請者 portal', 'Digital portfolio and arts supplements, PDF via the applicant portal'),
        s('未列類別；portal 收一般的數位作品集（PDF）', 'Not named; the portal takes a digital portfolio (PDF) generically'),
        s('未列類別；任何可存成 PDF 的文件', 'Not named; any document that can be saved as PDF'),
        s('接受 YouTube 頁面連結', 'A link to a YouTube page is accepted'),
        s('接受 YouTube 連結，併入申請審查', 'YouTube link accepted and added to the application for review')),
      src: {
        system: ['G1-S37', 'G1-S38', 'G1-S39'], plans: ['G1-S37'], testPolicy: ['G1-S39', 'G1-S40'],
        teacherLetters: ['G1-S38'], otherRecommender: ['G1-S38', 'G1-S40'], interview: ['G1-S40', 'G1-S42'], needPolicy: ['G1-S42', 'G1-S43'],
        engEntry: [],
        'materials.arts': ['G1-S40'], 'materials.maker': ['G1-S40'], 'materials.research': ['G1-S40'], 'materials.video': ['G1-S40'], 'materials.links': ['G1-S40']
      },
      blocked: false
    },
    'USC': {
      name: s('南加州大學 USC', 'USC'),
      system: ['commonapp'], plans: ['ED', 'EA', 'RD'], testPolicy: 'optional',
      teacherLetters: null, otherRecommender: null,
      interview: s('不面試；第三方面試僅作英語證明', 'No interviews; third-party interviews only as English evidence'),
      needPolicy: 'noAid', engEntry: null,
      materials: { arts: 'limited', maker: 'no', research: 'no', video: 'no', links: 'no' },
      note: notes(
        s('只限要求作品集的主修，依各學院規定', 'Only where the major requires it, per each school'),
        s('Viterbi 不收：不收任何未要求的材料', 'Not for Viterbi: nothing it does not ask for is accepted'),
        s('Viterbi 不收（同一規則）', 'Not for Viterbi (same rule)'),
        s('一般申請者沒有；第三方面試只作英語證明', 'Not for general applicants; third-party interviews only as English evidence'),
        s('Viterbi 不收（同一規則）', 'Not for Viterbi (same rule)')),
      src: {
        system: ['G1-S44'], plans: ['G1-S44', 'G1-S46'], testPolicy: ['G1-S45', 'G1-S46'],
        teacherLetters: ['G1-S44'], otherRecommender: ['G1-S44', 'G1-S48'], interview: ['G1-S44', 'G1-S45'], needPolicy: ['G1-S45', 'G1-S47'],
        engEntry: [],
        'materials.arts': ['G1-S44'], 'materials.maker': ['G1-S48'], 'materials.research': ['G1-S48'], 'materials.video': ['G1-S45'], 'materials.links': ['G1-S48']
      },
      blocked: false
    },
    'UVA': {
      name: s('維吉尼亞大學 UVA', 'UVA'),
      system: ['commonapp'], plans: null, testPolicy: 'optional',
      teacherLetters: null, otherRecommender: null, interview: null,
      needPolicy: null, engEntry: null,
      materials: { arts: 'blocked', maker: 'blocked', research: 'blocked', video: 'blocked', links: 'blocked' },
      note: notes(BLK, BLK, BLK, BLK, BLK),
      src: {
        system: ['G1-S50'], plans: [], testPolicy: ['G1-S50'],
        teacherLetters: [], otherRecommender: [], interview: [], needPolicy: [],
        engEntry: [],
        'materials.arts': [], 'materials.maker': [], 'materials.research': [], 'materials.video': [], 'materials.links': []
      },
      blocked: true
    },
    'NYU': {
      name: s('紐約大學 NYU', 'NYU'),
      system: ['commonapp'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      teacherLetters: null, otherRecommender: true,
      interview: s('不提供面試', 'No interviews offered'),
      needPolicy: null, engEntry: null,
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'limited', links: 'ns' },
      note: notes(
        s('Steinhardt 音樂、Studio Art 與 Tisch 全部學程必繳，取代考試', 'Required for Steinhardt Music, Studio Art and all Tisch programs, replacing testing'),
        null, null,
        s('藝術甄試以外未載明', 'Not stated beyond arts auditions'),
        null),
      src: {
        system: ['G1-S51'], plans: ['G1-S51'], testPolicy: ['G1-S52'],
        teacherLetters: ['G1-S51'], otherRecommender: ['G1-S51'], interview: ['G1-S53'], needPolicy: ['G1-S54'],
        engEntry: [],
        'materials.arts': ['G1-S51'], 'materials.maker': ['G1-S51'], 'materials.research': ['G1-S51'], 'materials.video': ['G1-S51'], 'materials.links': ['G1-S51']
      },
      blocked: false
    },
    'Tufts': {
      name: s('塔夫茨大學 Tufts', 'Tufts'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      teacherLetters: 1, otherRecommender: null,
      interview: s('讀到的頁面未提供面試；第三方面試僅作英語證明', 'None offered on pages read; third-party only as English evidence'),
      needPolicy: null, engEntry: null,
      materials: { arts: 'limited', maker: 'limited', research: 'ns', video: 'ns', links: 'ns' },
      note: notes(
        s('BFA 必繳；Applicant Status Page 上傳（不用 SlideRoom），12–20 件', 'Required for BFA; Applicant Status Page upload (not SlideRoom), 12–20 pieces'),
        s('沒有另設上傳；工程短答問自己建造或設計的專案', 'No separate upload; the Engineering short answer asks about a project you built'),
        null, null, null),
      src: {
        system: ['G1-S61'], plans: ['G1-S55'], testPolicy: ['G1-S57'],
        teacherLetters: ['G1-S55'], otherRecommender: ['G1-S55', 'G1-S62'], interview: ['G1-S58'], needPolicy: ['G1-S59'],
        engEntry: [],
        'materials.arts': ['G1-S55', 'G1-S60'], 'materials.maker': ['G1-S55', 'G1-S56', 'G1-S63'], 'materials.research': ['G1-S55', 'G1-S62'], 'materials.video': ['G1-S55'], 'materials.links': ['G1-S55', 'G1-S62']
      },
      blocked: false
    },
    'UNC': {
      name: s('北卡羅來納大學教堂山分校 UNC', 'UNC'),
      system: ['commonapp'], plans: ['EA', 'RD'], testPolicy: 'gpa',
      teacherLetters: 1, otherRecommender: true,
      interview: s('審查不使用面試', 'Interviews not used in review'),
      needPolicy: 'noAid', engEntry: 'school',
      materials: { arts: 'no', maker: 'ns', research: 'limited', video: 'ns', links: 'ns' },
      note: notes(
        s('招生不審藝術或音樂補充；獎學金另有管道', 'Not for admission: art or music supplements are not reviewed; scholarships run separately'),
        null,
        s('未列類別；所列項目以外的文件可寄到 uncsubmit@', 'Not named; documents beyond the listed items can be emailed to uncsubmit@'),
        null, null),
      src: {
        system: ['G2-S1', 'G2-S2'], plans: ['G2-S1', 'G2-S2'], testPolicy: ['G2-S1', 'G2-S12'],
        teacherLetters: ['G2-S1', 'G2-S2'], otherRecommender: ['G2-S7'], interview: ['G2-S8'], needPolicy: ['G2-S3'],
        engEntry: ['G2-S5'],
        'materials.arts': ['G2-S6'], 'materials.maker': ['G2-S1', 'G2-S9'], 'materials.research': ['G2-S9'], 'materials.video': ['G2-S1', 'G2-S9'], 'materials.links': ['G2-S1', 'G2-S9']
      },
      blocked: false
    },
    'UW–Madison': {
      name: s('威斯康辛大學麥迪遜分校 UW–Madison', 'UW–Madison'),
      system: ['commonapp', 'own'], plans: ['EA', 'RD'], testPolicy: 'optional',
      teacherLetters: null, otherRecommender: true,
      interview: null,
      needPolicy: null, engEntry: 'direct',
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      note: notes(
        s('一般作品集未載明；舞蹈與音樂另有申請與甄試', 'General portfolio not stated; Dance and Music use a separate application and audition'),
        null, null, null, null),
      src: {
        system: ['G2-S13'], plans: ['G2-S13', 'G2-S14'], testPolicy: ['G2-S13', 'G2-S16'],
        teacherLetters: ['G2-S13', 'G2-S16'], otherRecommender: ['G2-S13'], interview: ['G2-S13', 'G2-S16'], needPolicy: ['G2-S17'],
        engEntry: ['G2-S18'],
        'materials.arts': ['G2-S13', 'G2-S16'], 'materials.maker': ['G2-S13', 'G2-S15', 'G2-S16'], 'materials.research': ['G2-S16'], 'materials.video': ['G2-S16'], 'materials.links': ['G2-S16']
      },
      blocked: false
    },
    'Rochester': {
      name: s('羅徹斯特大學 Rochester', 'Rochester'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      teacherLetters: 1, otherRecommender: true,
      interview: s('強烈建議，審查時同等考量', '“Strongly recommended”; considered in review'),
      needPolicy: 'aware', engEntry: null,
      materials: { arts: 'yes', maker: 'limited', research: 'ns', video: 'yes', links: 'yes' },
      note: notes(
        s('送件後經 MyROC 交媒體連結與藝術作品集，檔案上限 4 MB', 'Media links and art portfolios via MyROC after submitting; 4 MB file limit'),
        s('未列類別；MyROC 的媒體上傳是通用的', 'Not named; the MyROC media upload is generic'),
        null,
        s('經 MyROC 交影片，4 MB', 'Videos via MyROC, 4 MB'),
        s('經 MyROC 交媒體連結', 'Media links via MyROC')),
      src: {
        system: ['G2-S19'], plans: ['G2-S20'], testPolicy: ['G2-S19', 'G2-S21'],
        teacherLetters: ['G2-S19'], otherRecommender: ['G2-S19'], interview: ['G2-S23'], needPolicy: ['G2-S22'],
        engEntry: ['G2-S19'],
        'materials.arts': ['G2-S19'], 'materials.maker': ['G2-S19'], 'materials.research': ['G2-S19'], 'materials.video': ['G2-S19'], 'materials.links': ['G2-S19']
      },
      blocked: false
    },
    'Case Western': {
      name: s('凱斯西儲大學 Case Western', 'Case Western'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'EA', 'RD'], testPolicy: 'optional',
      teacherLetters: 2, otherRecommender: true,
      interview: s('只有 Pre-Professional Scholars 決選者面試', 'Only Pre-Professional Scholars finalists are interviewed'),
      needPolicy: null, engEntry: 'school',
      materials: { arts: 'yes', maker: 'yes', research: 'yes', video: 'yes', links: 'yes' },
      note: notes(
        s('Arts Supplement：音樂必繳，其他選繳；截止後 15 天', 'Arts Supplement: required for music, optional otherwise; 15 days after the deadline'),
        s('以 additional materials 經 portal 表單交（PDF、文件、照片）', 'As additional materials via a portal form (PDFs, documents, photos)'),
        s('明列研究摘要，經 portal 表單', 'Research abstracts are listed, via the portal form'),
        s('經 portal 表單', 'Via the portal form'),
        s('網頁連結經 portal 表單', 'Web links via the portal form')),
      src: {
        system: ['G2-S24'], plans: ['G2-S24', 'G2-S26'], testPolicy: ['G2-S27'],
        teacherLetters: ['G2-S25'], otherRecommender: ['G2-S29'], interview: ['G2-S25'], needPolicy: ['G2-S25', 'G2-S28'],
        engEntry: ['G2-S30'],
        'materials.arts': ['G2-S25', 'G2-S26'], 'materials.maker': ['G2-S29'], 'materials.research': ['G2-S29'], 'materials.video': ['G2-S29'], 'materials.links': ['G2-S29']
      },
      blocked: false
    },
    'Northeastern': {
      name: s('東北大學 Northeastern', 'Northeastern'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'EA', 'RD'], testPolicy: 'optional',
      teacherLetters: 1, otherRecommender: true,
      interview: s('無校友或校園面試；接受第三方影片面試', 'No alumni or campus interviews; third-party video interviews considered'),
      needPolicy: 'noAid', engEntry: null,
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'limited', links: 'ns' },
      note: notes(
        s('只限 CAMD 申請者，送件後經 Application Status Check', 'CAMD applicants only, via Application Status Check after applying'),
        null, null,
        s('只有第三方面試影片與 CAMD 媒體上傳', 'Only third-party interview video and CAMD media uploads'),
        null),
      src: {
        system: ['G2-S31', 'G2-S33'], plans: ['G2-S32'], testPolicy: ['G2-S31', 'G2-S33'],
        teacherLetters: ['G2-S31', 'G2-S33'], otherRecommender: ['G2-S33'], interview: ['G2-S33', 'G2-S34'], needPolicy: ['G2-S34', 'G2-S36'],
        engEntry: ['G2-S36'],
        'materials.arts': ['G2-S31', 'G2-S33'], 'materials.maker': ['G2-S33', 'G2-S36'], 'materials.research': ['G2-S33', 'G2-S36'], 'materials.video': ['G2-S33'], 'materials.links': ['G2-S33']
      },
      blocked: false
    },
    'Maryland': {
      name: s('馬里蘭大學帕克分校 Maryland', 'Maryland'),
      system: ['commonapp', 'own'], plans: ['EA', 'RD'], testPolicy: 'optional',
      teacherLetters: 1, otherRecommender: null,
      interview: null,
      needPolicy: null, engEntry: 'direct',
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      note: notes(
        s('一般作品集未載明；音樂學院補充與甄試只用於音樂資格', 'General portfolio not stated; the School of Music supplement and audition count only for Music'),
        null, null, null, null),
      src: {
        system: ['G2-S37'], plans: ['G2-S37', 'G2-S38'], testPolicy: ['G2-S37'],
        teacherLetters: ['G2-S37'], otherRecommender: ['G2-S37', 'G2-S40'], interview: ['G2-S37'], needPolicy: ['G2-S41'],
        engEntry: ['G2-S37', 'G2-S40'],
        'materials.arts': ['G2-S37'], 'materials.maker': ['G2-S37', 'G2-S39'], 'materials.research': ['G2-S37'], 'materials.video': ['G2-S37'], 'materials.links': ['G2-S37']
      },
      blocked: false
    },
    'UC Davis': {
      name: s('加州大學戴維斯分校 UC Davis', 'UC Davis'),
      system: ['uc'], plans: ['RD'], testPolicy: 'blind',
      teacherLetters: 0, otherRecommender: false,
      interview: null,
      needPolicy: null, engEntry: null,
      materials: { arts: 'no', maker: 'no', research: 'no', video: 'ns', links: 'ns' },
      note: notes(
        s('不收學術或創作作品樣本，不審也不退還', 'No academic or creative work samples; not reviewed and not returned'),
        s('不收（同一規則）', 'No (same rule)'),
        s('不收（同一規則）', 'No (same rule)'),
        null, null),
      src: {
        system: ['G2-S43', 'G2-S47', 'G2-S50'], plans: ['G2-S43', 'G2-S47'], testPolicy: ['G2-S46'],
        teacherLetters: ['G2-S48'], otherRecommender: ['G2-S48'], interview: ['G2-S46', 'G2-S48'], needPolicy: ['G2-S49', 'G2-S50'],
        engEntry: ['G2-S48', 'G2-S64'],
        'materials.arts': ['G2-S48'], 'materials.maker': ['G2-S48'], 'materials.research': ['G2-S48'], 'materials.video': ['G2-S48'], 'materials.links': ['G2-S48']
      },
      blocked: false
    },
    'UCSB': {
      name: s('加州大學聖塔芭芭拉分校 UCSB', 'UCSB'),
      system: ['uc'], plans: ['RD'], testPolicy: 'blind',
      teacherLetters: 0, otherRecommender: false,
      interview: null,
      needPolicy: null, engEntry: 'direct',
      materials: { arts: 'limited', maker: 'limited', research: 'limited', video: 'limited', links: 'ns' },
      note: notes(
        s('一般招生不審；CCS Art 經 CCS portal 交作品集', 'Not reviewed for general admission; CCS Art takes a portfolio via the CCS portal'),
        s('一般招生不收；CCS 的 CS、物理、化學可選繳補充材料', 'General admission: no; CCS Computer Science, Physics, Chemistry take optional materials'),
        s('一般招生不收；CCS 生物選繳，海洋科學「highly encouraged」', 'General admission: no; CCS Biology optional, Marine Science “highly encouraged”'),
        s('一般招生不收；舞蹈與音樂需甄試', 'General admission: no; Dance and Music require auditions'),
        null),
      src: {
        system: ['G2-S51', 'G2-S55'], plans: ['G2-S51', 'G2-S55'], testPolicy: ['G2-S52', 'G2-S53'],
        teacherLetters: ['G2-S53', 'G2-S55'], otherRecommender: ['G2-S53', 'G2-S55'], interview: ['G2-S53'], needPolicy: ['G2-S54'],
        engEntry: ['G2-S52', 'G2-S53'],
        'materials.arts': ['G2-S52', 'G2-S53', 'G2-S55'], 'materials.maker': ['G2-S53', 'G2-S55'], 'materials.research': ['G2-S55'], 'materials.video': ['G2-S53'], 'materials.links': ['G2-S53', 'G2-S55']
      },
      blocked: false
    },
    'RPI': {
      name: s('倫斯勒理工學院 RPI', 'RPI'),
      system: ['commonapp', 'own'], plans: ['ED', 'ED2', 'EA', 'RD'], testPolicy: 'optional',
      teacherLetters: null, otherRecommender: null,
      interview: s('不面試；可交 GLIMPSE／InitialView', 'No interviews; GLIMPSE or InitialView optional'),
      needPolicy: null, engEntry: null,
      materials: { arts: 'limited', maker: 'no', research: 'limited', video: 'limited', links: 'ns' },
      note: notes(
        s('只限 B.Arch（必繳），SlideRoom；其他主修「不要求也不建議」', 'B.Arch only (required), SlideRoom; other majors: portfolio “not required or recommended”'),
        s('不收：作品集只收建築申請者', 'No: portfolios accepted only from Architecture applicants'),
        s('未列類別；可經 portal 交履歷，或寄信到 adm_updates@', 'Not named; optional résumé via the portal, or email adm_updates@'),
        s('GLIMPSE 60–90 秒影片選繳（美國學生）', 'Optional GLIMPSE 60–90 s video (US students)'),
        null),
      src: {
        system: ['G2-S56'], plans: ['G2-S56'], testPolicy: ['G2-S56'],
        teacherLetters: ['G2-S56'], otherRecommender: ['G2-S56', 'G2-S58'], interview: ['G2-S56', 'G2-S57'], needPolicy: ['G2-S57'],
        engEntry: ['G2-S58'],
        'materials.arts': ['G2-S56', 'G2-S58', 'G2-S59'], 'materials.maker': ['G2-S58'], 'materials.research': ['G2-S56', 'G2-S58'], 'materials.video': ['G2-S56'], 'materials.links': ['G2-S56', 'G2-S58']
      },
      blocked: false
    },
    'Pomona': {
      name: s('波莫納學院 Pomona', 'Pomona'),
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      teacherLetters: 2, otherRecommender: true,
      interview: s('不要求；第三方面試選繳', 'Not required; third-party interviews optional'),
      needPolicy: 'aware', engEntry: null,
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'limited', links: 'ns' },
      note: notes(
        s('只限 Pomona 開設的表演藝術（舞蹈、音樂、戲劇），送件後經網站表單', 'Performing arts taught at Pomona only (dance, music, theatre), via a site form after applying'),
        null, null,
        s('只在表演藝術補充內；第三方面試影片選繳', 'Only inside performing-arts supplements; third-party interview videos optional'),
        null),
      src: {
        system: ['G2-S60'], plans: ['G2-S60'], testPolicy: ['G2-S60'],
        teacherLetters: ['G2-S60'], otherRecommender: ['G2-S60', 'G2-S63'], interview: ['G2-S62'], needPolicy: ['G2-S62'],
        engEntry: ['G2-S63'],
        'materials.arts': ['G2-S61'], 'materials.maker': ['G2-S61', 'G2-S63'], 'materials.research': ['G2-S61', 'G2-S63'], 'materials.video': ['G2-S61', 'G2-S62'], 'materials.links': ['G2-S61', 'G2-S63']
      },
      blocked: false
    }
  };

  window.ATLAS.viz.more = { order: order, fields: fields, enums: enums, data: data };
})();
