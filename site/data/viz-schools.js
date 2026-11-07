// Chart dataset: the 30 US schools as one record each — systems, plans, letters, tests, international aid,
// major-level entry, supplementary materials and AI policy.
// Built from data/p-schools.js and data/p-portfolios.js (window.ATLAS.matrix), which carry the notes
// research/2026-11-07_school-roster-part1_v1.md (A5a-), school-roster-part2 (A5b-), other-application-systems (A2-),
// international-applicant-specifics (A4-), cycle-2026-27-calendar part1/2 (A3a-/A3b-), major-level-admission (A8-),
// supplementary-materials-matrix (B2-), engineering-portfolios (B3-), ai-policy (C4-), and the browser passes
// (V3-, V4-, V5-, V6-). Every src id exists in data/sources.js.
// null = not stated, not retrieved, or only an inference / secondary report; never estimated.
// Enum fields name their enum in fields[].enum; booleans use enums.bool (keys 'true' / 'false').
// Field ids with a dot (materials.arts) are paths into each record; src is keyed by the same id.
// src.type is empty: public/private status is not a claim taken from the notes.
// aiPolicy: true = AI statement on an official page (school or UC system); false = official pages checked carry
// no AI text; null = only secondary reports, or not retrieved.
// teacherLetters = teacher letters required (0 = none required or not accepted).
window.ATLAS = window.ATLAS || {}; window.ATLAS.viz = window.ATLAS.viz || {};
(function () {
  function s(zh, en) { return { zh: zh, en: en }; }
  function M() { return Array.prototype.slice.call(arguments).map(function (x) { return 'A8-' + x; }); }
  function C() { return Array.prototype.slice.call(arguments).map(function (x) { return 'C4-' + x; }); }

  var order = ['MIT', 'Caltech', 'Stanford', 'Harvard', 'Yale', 'Princeton', 'Columbia', 'Penn', 'Brown', 'Cornell',
    'Georgetown', 'CMU', 'Georgia Tech', 'Purdue', 'Michigan', 'UIUC', 'Olin', 'Harvey Mudd', 'Johns Hopkins', 'Duke',
    'Northwestern', 'Rice', 'UC Berkeley', 'UCLA', 'UC San Diego', 'UT Austin', 'UW', 'Williams', 'Amherst', 'Swarthmore'];

  var fields = [
    { id: 'type', label: s('公立／私立', 'Public or private'), group: 'apply', type: 'enum', enum: 'type' },
    { id: 'system', label: s('申請系統', 'Application system'), group: 'apply', type: 'enum', enum: 'system', multi: true },
    { id: 'plans', label: s('申請方案', 'Application plans'), group: 'apply', type: 'enum', enum: 'plans', multi: true },
    { id: 'teacherLetters', label: s('必繳老師推薦信封數', 'Teacher letters required'), group: 'letters', type: 'number' },
    { id: 'otherRecommender', label: s('接受其他推薦人', 'Other Recommender accepted'), group: 'letters', type: 'enum', enum: 'bool' },
    { id: 'interview', label: s('面試', 'Interview'), group: 'letters', type: 'text' },
    { id: 'testPolicy', label: s('SAT/ACT 2026–27', 'SAT/ACT 2026–27'), group: 'tests', type: 'enum', enum: 'testPolicy' },
    { id: 'english', label: s('英語能力考試', 'English test'), group: 'tests', type: 'text' },
    { id: 'needPolicy', label: s('國際生 need 政策', 'Need policy for internationals'), group: 'intl', type: 'enum', enum: 'needPolicy' },
    { id: 'aidAvailable', label: s('國際生可申請 need-based 補助', 'Need-based aid open to internationals'), group: 'intl', type: 'enum', enum: 'bool' },
    { id: 'engEntry', label: s('工程：何時進入', 'Engineering: when you enter'), group: 'majors', type: 'enum', enum: 'entry' },
    { id: 'engCapped', label: s('工程頁面寫明名額限制', 'Engineering page states a seat limit'), group: 'majors', type: 'enum', enum: 'bool' },
    { id: 'bioEntry', label: s('生物：何時進入', 'Biology: when you enter'), group: 'majors', type: 'enum', enum: 'entry' },
    { id: 'transfer', label: s('入學後轉入工程或 CS', 'Moving into engineering or CS later'), group: 'majors', type: 'text' },
    { id: 'materials.arts', label: s('藝術作品集', 'Arts portfolio'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.maker', label: s('Maker／工程作品集', 'Maker or engineering portfolio'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.research', label: s('研究論文或摘要', 'Research paper or abstract'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.video', label: s('影片', 'Video'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'materials.links', label: s('外部連結', 'External links'), group: 'materials', type: 'enum', enum: 'material' },
    { id: 'aiPolicy', label: s('官方 AI 使用說明', 'Official AI statement'), group: 'ai', type: 'enum', enum: 'bool' }
  ];

  var enums = {
    type: { 'private': s('私立', 'Private'), 'public': s('公立', 'Public') },
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

  var data = {
    'MIT': {
      name: s('麻省理工學院 MIT', 'MIT'), type: 'private',
      system: ['own'], plans: ['EA', 'RD'], testPolicy: 'required',
      english: s('強烈建議；TOEFL 90 最低／100 建議', '"Strongly recommend"; TOEFL 90 min / 100 rec.'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('校友面試，盡量安排；未排到不影響', 'Alumni interview where possible; no penalty if none'),
      needPolicy: 'blind', aidAvailable: true,
      engEntry: 'school', engCapped: null, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'yes', research: 'yes', video: 'limited', links: 'ns' },
      aiPolicy: false,
      src: {
        type: [], system: ['A5a-S2', 'A2-S23'], plans: ['A3a-S1'], testPolicy: ['A4-S1'], english: ['A4-S1'],
        teacherLetters: ['A5a-S3'], otherRecommender: ['A5a-S3'], interview: ['A5a-S4'], needPolicy: ['A4-S5'], aidAvailable: ['A4-S5'],
        engEntry: M('M01'), engCapped: M('M01'), bioEntry: M('M01'), transfer: M('M01'),
        'materials.arts': ['B2-S1', 'B2-S2'], 'materials.maker': ['B2-S1'], 'materials.research': ['B2-S1'], 'materials.video': ['B2-S1'], 'materials.links': ['B2-S1', 'B2-S3'],
        aiPolicy: C('S15', 'S16', 'S17')
      },
      blocked: false
    },
    'Caltech': {
      name: s('加州理工學院 Caltech', 'Caltech'), type: 'private',
      system: ['commonapp'], plans: ['REA', 'RD'], testPolicy: 'required',
      english: s('必繳（英語母語或授課者免）；TOEFL 100', 'Required unless exempt; TOEFL 100, IELTS 7'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('未提校方面試；國際生建議 InitialView', 'No school interview stated; InitialView suggested'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: 'school', engCapped: null, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'yes', research: 'yes', video: 'yes', links: 'yes' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S9', 'A5a-S14'], plans: ['A5a-S13', 'A3a-S10'], testPolicy: ['A4-S7', 'A4-S9'], english: ['A4-S7'],
        teacherLetters: ['A5a-S10'], otherRecommender: ['A5a-S10'], interview: ['A5a-S9', 'A5a-S12'], needPolicy: ['A4-S7'], aidAvailable: ['A4-S7'],
        engEntry: M('M03'), engCapped: M('M03'), bioEntry: M('M03'), transfer: M('M03'),
        'materials.arts': ['B2-S6', 'B2-S7', 'B3-S10'], 'materials.maker': ['B2-S6', 'B3-S11'], 'materials.research': ['B2-S5', 'B2-S7', 'B3-S12'], 'materials.video': ['B2-S6'], 'materials.links': ['B2-S6', 'B3-S11'],
        aiPolicy: C('S9', 'S10')
      },
      blocked: false
    },
    'Stanford': {
      name: s('史丹佛大學 Stanford', 'Stanford'), type: 'private',
      system: ['commonapp'], plans: ['REA', 'RD'], testPolicy: 'required',
      english: s('不要求；可自行填報', 'Not required; may be self-reported'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('選擇性校友面試，限部分地區', 'Optional alumni interview in listed areas'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: 'school', engCapped: null, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'no', research: 'no', video: 'limited', links: 'limited' },
      aiPolicy: false,
      src: {
        type: [], system: ['A5a-S15', 'A5a-S16'], plans: ['A3a-S18'], testPolicy: ['A4-S12'], english: ['A4-S11', 'A4-S12'],
        teacherLetters: ['A5a-S17'], otherRecommender: ['A5a-S17'], interview: ['A5a-S18'], needPolicy: ['A4-S11'], aidAvailable: ['A4-S11'],
        engEntry: M('M05'), engCapped: M('M05'), bioEntry: M('M05'), transfer: M('M05'),
        'materials.arts': ['B2-S8', 'B2-S9', 'B2-S10', 'B2-S11', 'B3-S22'], 'materials.maker': ['B3-S21', 'B3-S20'], 'materials.research': ['B3-S21'], 'materials.video': ['B2-S8'], 'materials.links': ['B2-S9', 'B3-S21'],
        aiPolicy: C('S31', 'S32')
      },
      blocked: false
    },
    'Harvard': {
      name: s('哈佛大學 Harvard', 'Harvard'), type: 'private',
      system: ['commonapp'], plans: ['REA', 'RD'], testPolicy: 'required',
      english: s('不要求；可繳但不算考試要求', 'Not required; does not meet testing requirement'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('可能有校友面試，不保證', 'Possible alumni interview; not guaranteed'),
      needPolicy: 'blind', aidAvailable: true,
      engEntry: 'school', engCapped: null, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'no', research: 'yes', video: 'yes', links: 'limited' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S21', 'A5a-S22'], plans: ['A3a-S26', 'A3a-S27'], testPolicy: ['A4-S16'], english: ['A4-S15'],
        teacherLetters: ['A5a-S21'], otherRecommender: ['A5a-S21'], interview: ['A5a-S22', 'A5a-S24'], needPolicy: ['A4-S15'], aidAvailable: ['A4-S15'],
        engEntry: M('M07'), engCapped: M('M07', 'M08'), bioEntry: M('M08'), transfer: M('M07'),
        'materials.arts': ['B2-S14', 'B2-S13'], 'materials.maker': ['B2-S13'], 'materials.research': ['B2-S14', 'B2-S13'], 'materials.video': ['B2-S14'], 'materials.links': ['B2-S13'],
        aiPolicy: C('S2')
      },
      blocked: false
    },
    'Yale': {
      name: s('耶魯大學 Yale', 'Yale'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['REA', 'RD'], testPolicy: 'required',
      english: s('必繳（英語授課 2 年以上免）', 'Required unless 2+ years English-medium'),
      teacherLetters: 2, otherRecommender: null,
      interview: s('僅限受邀，全部 evaluative', 'Invitation only; all evaluative'),
      needPolicy: 'blind', aidAvailable: true,
      engEntry: 'school', engCapped: null, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'ns', research: 'yes', video: 'limited', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S27'], plans: ['A3a-S33', 'A3a-S37'], testPolicy: ['A4-S19'], english: ['A4-S19'],
        teacherLetters: ['A5a-S28'], otherRecommender: ['A5a-S28'], interview: ['A5a-S29'], needPolicy: ['A4-S21'], aidAvailable: ['A4-S21'],
        engEntry: M('M09'), engCapped: M('M09'), bioEntry: M('M09'), transfer: M('M09'),
        'materials.arts': ['B2-S15', 'B1-P10'], 'materials.maker': ['B2-S15'], 'materials.research': ['B2-S15'], 'materials.video': ['B2-S15'], 'materials.links': ['B2-S15'],
        aiPolicy: C('S11')
      },
      blocked: false
    },
    'Princeton': {
      name: s('普林斯頓大學 Princeton', 'Princeton'), type: 'private',
      system: ['commonapp'], plans: ['REA', 'RD'], testPolicy: 'optional',
      english: s('非母語且非英語授課者必繳', 'Required if not native and not English-medium'),
      teacherLetters: 2, otherRecommender: null,
      interview: s('選擇性校友面試，送件後安排', 'Optional alumni interview, after applying'),
      needPolicy: 'blind', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: null,
      transfer: s('經 SEAS 辦學位轉換；未載明 GPA 門檻', 'Via the SEAS office; no GPA threshold stated'),
      materials: { arts: 'yes', maker: 'ns', research: 'ns', video: 'no', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5a-S31'], plans: ['A3a-S41', 'A3a-S43', 'V4-T3', 'V4-T4'], testPolicy: ['A4-S24', 'A5a-S31', 'V4-T2'], english: ['A4-S23', 'A4-S24'],
        teacherLetters: ['A5a-S31', 'V4-T3'], otherRecommender: ['V4-T3'], interview: ['A5a-S31', 'V4-T3'], needPolicy: ['A4-S23', 'A5a-S35'], aidAvailable: ['A4-S23', 'A5a-S35'],
        engEntry: M('M11', 'M12'), engCapped: M('M11', 'M12'), bioEntry: M('M11'), transfer: M('M11'),
        'materials.arts': ['V4-T3', 'V4-T4'], 'materials.maker': ['V4-T1', 'V4-T3'], 'materials.research': ['V4-T3'], 'materials.video': ['V4-T3'], 'materials.links': ['V4-T3'],
        aiPolicy: C('S36', 'S38')
      },
      blocked: false
    },
    'Columbia': {
      name: s('哥倫比亞大學 Columbia', 'Columbia'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'RD'], testPolicy: 'optional',
      english: s('必繳；TOEFL 105、IELTS 7.5、DET 135', 'Required; TOEFL 105, IELTS 7.5, DET 135'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('沒有面試', 'No interviews'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: null, transfer: null,
      materials: { arts: 'blocked', maker: 'blocked', research: 'blocked', video: 'blocked', links: 'blocked' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5a-S36'], plans: ['A3a-S46'], testPolicy: ['A4-S28'], english: ['A4-S27'],
        teacherLetters: ['A5a-S36'], otherRecommender: ['A5a-S39'], interview: ['A5a-S36'], needPolicy: ['A4-S30'], aidAvailable: ['A4-S30'],
        engEntry: M('M14'), engCapped: M('M13', 'M14'), bioEntry: M('M13'), transfer: M('M13', 'M14', 'M14b'),
        'materials.arts': ['B2-S18'], 'materials.maker': ['B2-S18'], 'materials.research': ['B2-S18'], 'materials.video': ['B2-S18'], 'materials.links': ['B2-S18'],
        aiPolicy: C('S37')
      },
      blocked: true
    },
    'Penn': {
      name: s('賓州大學 Penn', 'Penn'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'RD'], testPolicy: 'required',
      english: s('英語授課未滿 3 年者必繳；無最低分', 'Required under 3 years English-medium; no minimum'),
      teacherLetters: 1, otherRecommender: true,
      interview: null,
      needPolicy: 'aware', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: null,
      transfer: s('8 course units、GPA 3.0、MATH 1400/1410', '8 course units, GPA 3.0, MATH 1400 and 1410'),
      materials: { arts: 'limited', maker: 'ns', research: 'no', video: 'limited', links: 'limited' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S40', 'A5a-S41'], plans: ['A3a-S51', 'A3a-S52'], testPolicy: ['A4-S33'], english: ['A4-S32'],
        teacherLetters: ['A5a-S42'], otherRecommender: ['A5a-S42'], interview: ['A5a-S40', 'A5a-S41'], needPolicy: ['A4-S35'], aidAvailable: ['A4-S35'],
        engEntry: M('M15'), engCapped: M('M15', 'M16'), bioEntry: M('M15'), transfer: M('M16'),
        'materials.arts': ['B2-S19', 'B2-S21'], 'materials.maker': ['B2-S19'], 'materials.research': ['B2-S19'], 'materials.video': ['B2-S19'], 'materials.links': ['B2-S19', 'B2-S20'],
        aiPolicy: C('S12')
      },
      blocked: false
    },
    'Brown': {
      name: s('布朗大學 Brown', 'Brown'), type: 'private',
      system: ['commonapp'], plans: ['ED', 'RD'], testPolicy: 'required',
      english: s('highly recommend；TOEFL 105、IELTS 8.0', '"Highly recommend[ed]"; TOEFL 105, IELTS 8.0'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('第一年申請頁未描述校方面試', 'No admissions interview described'),
      needPolicy: 'blind', aidAvailable: true,
      engEntry: 'school', engCapped: false, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'ns', research: 'yes', video: 'yes', links: 'yes' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S47', 'A5a-S50'], plans: ['A3a-S56', 'A3a-S57', 'A3a-S58'], testPolicy: ['A4-S39'], english: ['A4-S37'],
        teacherLetters: ['A5a-S49'], otherRecommender: ['A5a-S50'], interview: ['A5a-S51', 'A5a-S48'], needPolicy: ['A4-S38', 'A3a-S59'], aidAvailable: ['A4-S38', 'A3a-S59'],
        engEntry: M('M18'), engCapped: M('M18'), bioEntry: M('M18'), transfer: M('M18'),
        'materials.arts': ['B2-S22'], 'materials.maker': ['B2-S22'], 'materials.research': ['B2-S22'], 'materials.video': ['B2-S23'], 'materials.links': ['B2-S22'],
        aiPolicy: C('S1')
      },
      blocked: false
    },
    'Cornell': {
      name: s('康乃爾大學 Cornell', 'Cornell'), type: 'private',
      system: ['commonapp'], plans: ['ED', 'RD'], testPolicy: 'required',
      english: s('必繳（可豁免）；TOEFL 100、IELTS 7.5', 'Required unless exempt; TOEFL 100, IELTS 7.5'),
      teacherLetters: 2, otherRecommender: null,
      interview: s('有校友處才有，沒有不影響', 'Alumni interview where available; not adverse'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: 'direct',
      transfer: s('14 個主修都開放；最早大一下學期', 'All 14 majors open; from the second semester'),
      materials: { arts: 'limited', maker: 'ns', research: 'limited', video: 'limited', links: 'limited' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S53'], plans: ['A3a-S62', 'A3a-S67'], testPolicy: ['A4-S41'], english: ['A4-S41', 'A4-S42'],
        teacherLetters: ['A5a-S53', 'A5a-S54'], otherRecommender: ['A5a-S53', 'A5a-S54'], interview: ['A3a-S68'], needPolicy: ['A4-S44'], aidAvailable: ['A4-S44'],
        engEntry: M('M20', 'M21'), engCapped: M('M21', 'M24'), bioEntry: M('M22', 'M23'), transfer: M('M24'),
        'materials.arts': ['B2-S24', 'B2-S25', 'B2-S27'], 'materials.maker': ['B2-S26', 'B3-S30'], 'materials.research': ['B2-S28'], 'materials.video': ['B2-S27'], 'materials.links': ['B2-S27', 'B2-S28'],
        aiPolicy: C('S13')
      },
      blocked: false
    },
    'Georgetown': {
      name: s('喬治城大學 Georgetown', 'Georgetown'), type: 'private',
      system: ['own', 'commonapp'], plans: ['EA', 'RD'], testPolicy: 'required',
      english: s('建議，非必繳；未列最低分', 'Recommended, not required; no minimum'),
      teacherLetters: 1, otherRecommender: null,
      interview: s('校友面試，指派後必須完成', 'Alumni interview, required once assigned'),
      needPolicy: 'unclear', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: 'direct', transfer: null,
      materials: { arts: 'ns', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5a-S62', 'A4-S46'], plans: ['A3a-S69'], testPolicy: ['A4-S48', 'A4-S46'], english: ['A4-S48'],
        teacherLetters: ['A5a-S63'], otherRecommender: ['A5a-S63'], interview: ['A5a-S62', 'A5a-S63'], needPolicy: ['A4-S50'], aidAvailable: ['A4-S50'],
        engEntry: M('M26'), engCapped: M('M26'), bioEntry: M('M26'), transfer: M('M26'),
        'materials.arts': ['B2-S29'], 'materials.maker': ['B2-S29'], 'materials.research': ['B2-S29'], 'materials.video': ['B2-S29'], 'materials.links': ['B2-S29'],
        aiPolicy: C('S23', 'S24')
      },
      blocked: false
    },
    'CMU': {
      name: s('卡內基美隆大學 CMU', 'Carnegie Mellon'), type: 'private',
      system: ['commonapp'], plans: ['ED', 'RD'], testPolicy: 'varies',
      english: s('非母語者必繳；TOEFL 102、IELTS 7.5', 'Required for non-native; TOEFL 102, IELTS 7.5'),
      teacherLetters: 1, otherRecommender: true,
      interview: s('未載明校方面試；建議 InitialView', 'No CMU interview stated; InitialView suggested'),
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: null, bioEntry: null,
      transfer: s('大一後可申請，逐案審查，不保證', 'After year one, case by case, not guaranteed'),
      materials: { arts: 'limited', maker: 'no', research: 'limited', video: 'limited', links: 'limited' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S65a'], plans: ['A3a-S71', 'A5a-S69'], testPolicy: ['A4-S52'], english: ['A4-S51'],
        teacherLetters: ['A5a-S67'], otherRecommender: ['A5a-S67'], interview: ['A5a-S70'], needPolicy: ['A4-S51'], aidAvailable: ['A4-S51'],
        engEntry: M('M28'), engCapped: M('M28'), bioEntry: M('M29'), transfer: M('M28', 'M29'),
        'materials.arts': ['B2-S31'], 'materials.maker': ['B2-S30'], 'materials.research': ['B2-S30'], 'materials.video': ['B2-S30', 'B2-S31'], 'materials.links': ['B2-S30'],
        aiPolicy: C('S18')
      },
      blocked: false
    },
    'Georgia Tech': {
      name: s('喬治亞理工學院 Georgia Tech', 'Georgia Tech'), type: 'public',
      system: ['commonapp'], plans: ['EA', 'RD'], testPolicy: 'required',
      english: s('依 USG 規定必繳；DET 不符要求', 'Required under the USG rule; DET does not satisfy'),
      teacherLetters: 0, otherRecommender: false,
      interview: s('沒有校友或招生人員面試', 'No alumni or staff interviews'),
      needPolicy: 'unclear', aidAvailable: null,
      engEntry: 'school', engCapped: true, bioEntry: 'school',
      transfer: s('60 學分前可換一次；CS 只限名額', 'One change before 60 credits; CS "limited basis"'),
      materials: { arts: 'ns', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5a-S71'], plans: ['A3a-S76'], testPolicy: ['A4-S55'], english: ['A4-S53', 'A4-S54'],
        teacherLetters: ['A5a-S73', 'A5a-S79'], otherRecommender: ['A5a-S73'], interview: ['A5a-S74'], needPolicy: ['A4-S56'], aidAvailable: ['A4-S56'],
        engEntry: M('M31', 'M32'), engCapped: M('M33'), bioEntry: M('M31'), transfer: M('M33', 'M34', 'M35'),
        'materials.arts': ['B2-S32', 'B2-S33'], 'materials.maker': ['B2-S32', 'B2-S33', 'B3-S24'], 'materials.research': ['B2-S32', 'B2-S33'], 'materials.video': ['B2-S32', 'B2-S33'], 'materials.links': ['B2-S32', 'B2-S33'],
        aiPolicy: C('S21', 'S22')
      },
      blocked: false
    },
    'Purdue': {
      name: s('普渡大學 Purdue', 'Purdue'), type: 'public',
      system: ['commonapp'], plans: ['EA', 'RD'], testPolicy: 'varies',
      english: s('門檻 TOEFL 88、IELTS 6.5、DET 115', 'Thresholds TOEFL 88, IELTS 6.5, DET 115'),
      teacherLetters: 0, otherRecommender: null,
      interview: null,
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: true, bioEntry: 'direct',
      transfer: s('CODO GPA 2.7／2.75，只限有名額', 'CODO GPA 2.7 / 2.75; space available only'),
      materials: { arts: 'ns', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5a-S80', 'A5a-S82'], plans: ['A3a-S80', 'V4-T8', 'V4-T9'], testPolicy: ['A4-S59', 'A4-S135', 'V4-T9'], english: ['A4-S58', 'V4-T14'],
        teacherLetters: ['V5-U1', 'A5a-S82', 'V4-T9'], otherRecommender: ['A5a-S81', 'A5a-S82', 'V4-T9'], interview: ['A5a-S81', 'A5a-S82', 'V4-T9'], needPolicy: ['A4-S61'], aidAvailable: ['A4-S61'],
        engEntry: M('M36'), engCapped: M('M38', 'M40'), bioEntry: M('M36'), transfer: M('M40', 'M41'),
        'materials.arts': ['V4-T8', 'V4-T9', 'V4-T10', 'V4-T14'], 'materials.maker': ['V4-T8', 'V4-T9', 'V4-T10', 'V4-T14'], 'materials.research': ['V4-T8', 'V4-T9', 'V4-T10', 'V4-T14'], 'materials.video': ['V4-T8', 'V4-T9', 'V4-T10', 'V4-T14'], 'materials.links': ['V4-T8', 'V4-T9', 'V4-T10', 'V4-T14'],
        aiPolicy: []
      },
      blocked: false
    },
    'Michigan': {
      name: s('密西根大學 Michigan', 'Michigan'), type: 'public',
      system: ['commonapp'], plans: ['ED', 'EA', 'RD'], testPolicy: 'optional',
      english: s('第二語言者必繳；不收 DET', 'Required if English is a second language; no DET'),
      teacherLetters: 1, otherRecommender: false,
      interview: null,
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: null, bioEntry: 'direct',
      transfer: s('GPA 2.5 也不保證；須先在原學院一年', 'GPA 2.5 not a guarantee; one year in home unit first'),
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5a-S84', 'A2-S45'], plans: ['V4-T13'], testPolicy: ['A4-S64', 'V4-T13'], english: ['A4-S63'],
        teacherLetters: ['A5a-S85', 'V4-T13'], otherRecommender: ['V4-T13'], interview: ['A5a-S84', 'A5a-S85', 'A5a-S88', 'V4-T13'], needPolicy: ['A5a-S85', 'A4-S66'], aidAvailable: ['A5a-S85', 'A4-S66'],
        engEntry: M('M43').concat(['V6-M1']), engCapped: ['V6-M6'], bioEntry: ['V6-M1', 'V6-M7'], transfer: ['V6-M6'],
        'materials.arts': ['V4-T13'], 'materials.maker': ['V4-T13'], 'materials.research': ['V4-T13'], 'materials.video': ['V4-T13'], 'materials.links': ['V4-T13'],
        aiPolicy: C('S40')
      },
      blocked: false
    },
    'UIUC': {
      name: s('伊利諾大學香檳分校 UIUC', 'UIUC'), type: 'public',
      system: ['commonapp'], plans: ['EA', 'RD'], testPolicy: 'optional',
      english: s('未繳 SAT/ACT 者必繳（台灣適用）', 'Required for non-test-submitters (Taiwan incl.)'),
      teacherLetters: 0, otherRecommender: false,
      interview: s('一般申請沒有面試', 'None for general admission'),
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: true, bioEntry: 'direct',
      transfer: s('CS 不開放校內轉入；EU 需 GPA 3.30', 'CS closed to internal transfer; EU needs GPA 3.30'),
      materials: { arts: 'limited', maker: 'no', research: 'no', video: 'no', links: 'no' },
      aiPolicy: false,
      src: {
        type: [], system: ['A5b-S2', 'A2-S46'], plans: ['A3b-S1'], testPolicy: ['A4-S70'], english: ['A4-S68', 'A4-S69'],
        teacherLetters: ['A5b-S3'], otherRecommender: ['A5b-S3'], interview: ['A5b-S2', 'A5b-S3'], needPolicy: ['A4-S71', 'A3b-S4'], aidAvailable: ['A4-S71', 'A3b-S4'],
        engEntry: M('M45'), engCapped: M('M47', 'M49'), bioEntry: M('M45'), transfer: M('M47', 'M48', 'M49'),
        'materials.arts': ['B2-S36'], 'materials.maker': ['B2-S36', 'B3-S35'], 'materials.research': ['B2-S36', 'B3-S35'], 'materials.video': ['B2-S36', 'B3-S35'], 'materials.links': ['B2-S36', 'B3-S35'],
        aiPolicy: C('S26')
      },
      blocked: false
    },
    'Olin': {
      name: s('歐林工程學院 Olin', 'Olin'), type: 'private',
      system: ['commonapp'], plans: ['RD'], testPolicy: 'optional',
      english: s('highly recommend；未繳 SAT/ACT 者必繳', '"Highly recommend"; required without SAT/ACT'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('Candidates\' Weekend 必須參加，含個別面試', 'Candidates\' Weekend required, with an interview'),
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: null, engCapped: null, bioEntry: null, transfer: null,
      materials: { arts: 'limited', maker: 'limited', research: 'ns', video: 'ns', links: 'yes' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S7', 'A5b-S8'], plans: ['A3b-S6'], testPolicy: ['A4-S72', 'A3b-S5'], english: ['A4-S72', 'A4-S73'],
        teacherLetters: ['A5b-S8'], otherRecommender: ['A5b-S9'], interview: ['A5b-S8'], needPolicy: ['A4-S74'], aidAvailable: ['A4-S74'],
        engEntry: M('M79b'), engCapped: M('M79', 'M79b'), bioEntry: M('M79b'), transfer: M('M79b'),
        'materials.arts': ['B2-S38'], 'materials.maker': ['B2-S37', 'B2-S38', 'B3-S16'], 'materials.research': ['B2-S38'], 'materials.video': ['B2-S38'], 'materials.links': ['B2-S38'],
        aiPolicy: C('S30')
      },
      blocked: false
    },
    'Harvey Mudd': {
      name: s('哈維穆德學院 Harvey Mudd', 'Harvey Mudd'), type: 'private',
      system: ['commonapp'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      english: s('必繳；TOEFL 100、IELTS 7.5、DET 130', 'Required; TOEFL 100, IELTS 7.5, DET 130'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('選擇性線上面試，不面試不扣分', 'Optional and virtual; no penalty without one'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: null, engCapped: null, bioEntry: null, transfer: null,
      materials: { arts: 'no', maker: 'limited', research: 'limited', video: 'ns', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S10'], plans: ['A3b-S8'], testPolicy: ['A4-S76'], english: ['A4-S75'],
        teacherLetters: ['A5b-S10', 'A5b-S12'], otherRecommender: ['A5b-S12'], interview: ['A5b-S12'], needPolicy: ['A4-S76'], aidAvailable: ['A4-S76'],
        engEntry: M('M80', 'M81'), engCapped: M('M80', 'M81'), bioEntry: M('M81'), transfer: M('M81'),
        'materials.arts': ['B2-S40'], 'materials.maker': ['B3-S18'], 'materials.research': ['B2-S40'], 'materials.video': ['B2-S40'], 'materials.links': ['B2-S40'],
        aiPolicy: C('S28')
      },
      blocked: false
    },
    'Johns Hopkins': {
      name: s('約翰霍普金斯大學 Johns Hopkins', 'Johns Hopkins'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'required',
      english: s('建議；常見 TOEFL 5（新）、IELTS 7+', 'Recommended; typical TOEFL 5 (new), IELTS 7+'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('沒有面試', 'No interviews'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: null, engCapped: true, bioEntry: null, transfer: null,
      materials: { arts: 'yes', maker: 'ns', research: 'yes', video: 'ns', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S13'], plans: ['A3b-S11'], testPolicy: ['A4-S79'], english: ['A4-S79'],
        teacherLetters: ['A5b-S13'], otherRecommender: ['A5b-S13'], interview: ['A5b-S14'], needPolicy: ['A4-S80'], aidAvailable: ['A4-S80'],
        engEntry: M('M51'), engCapped: M('M51', 'M52'), bioEntry: M('M51'), transfer: M('M51', 'M52', 'M53'),
        'materials.arts': ['B2-S42'], 'materials.maker': ['B2-S41', 'B2-S42'], 'materials.research': ['B2-S42', 'B1-P22'], 'materials.video': ['B2-S41', 'B2-S42'], 'materials.links': ['B2-S41', 'B2-S42'],
        aiPolicy: C('S19')
      },
      blocked: false
    },
    'Duke': {
      name: s('杜克大學 Duke', 'Duke'), type: 'private',
      system: ['commonapp'], plans: ['ED', 'RD'], testPolicy: 'optional',
      english: s('不要求（建議）；預期 DET 130、IELTS 7', 'Not required (recommended); DET 130, IELTS 7'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('選擇性線上校友面試', 'Optional virtual alumni interview'),
      needPolicy: 'unclear', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: null,
      transfer: s('一學期後可申請；GPA 門檻未載明', 'After one semester; no GPA threshold stated'),
      materials: { arts: 'yes', maker: 'no', research: 'no', video: 'limited', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5b-S16', 'A2-S50'], plans: ['A3b-S15'], testPolicy: ['A4-S82', 'A3b-S15'], english: ['A4-S82'],
        teacherLetters: ['A5b-S16'], otherRecommender: ['A5b-S16'], interview: ['A5b-S16'], needPolicy: ['A4-S82', 'A4-S83'], aidAvailable: ['A4-S82', 'A4-S83'],
        engEntry: M('M54'), engCapped: M('M54', 'M55'), bioEntry: M('M54'), transfer: M('M55', 'M56'),
        'materials.arts': ['B2-S43'], 'materials.maker': ['B2-S43'], 'materials.research': ['B2-S43'], 'materials.video': ['B2-S43'], 'materials.links': ['B2-S43', 'B1-P17'],
        aiPolicy: C('S33', 'S34')
      },
      blocked: false
    },
    'Northwestern': {
      name: s('西北大學 Northwestern', 'Northwestern'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'RD'], testPolicy: 'optional',
      english: s('非英語者必繳；無最低分', 'Required if not English-schooled; no minimum'),
      teacherLetters: 1, otherRecommender: true,
      interview: s('不辦校友面試；Glimpse／InitialView 選繳', 'No alumni interviews; Glimpse/InitialView optional'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: 'direct', engCapped: null, bioEntry: null,
      transfer: s('Interschool Transfer，不一定核准', 'Interschool Transfer; "not always approved"'),
      materials: { arts: 'no', maker: 'no', research: 'no', video: 'limited', links: 'no' },
      aiPolicy: null,
      src: {
        type: [], system: ['A5b-S17', 'A2-S51'], plans: ['A5b-S17', 'V4-T5', 'V4-T7'], testPolicy: ['A4-S85', 'V4-T5'], english: ['A4-S84'],
        teacherLetters: ['A5b-S18', 'V4-T5'], otherRecommender: ['A5b-S18', 'V4-T5'], interview: ['A5b-S18', 'V4-T5', 'V4-T6'], needPolicy: ['A4-S86'], aidAvailable: ['A4-S86'],
        engEntry: M('M57'), engCapped: M('M57', 'M59'), bioEntry: M('M57'), transfer: M('M59'),
        'materials.arts': ['V4-T5', 'V4-T6'], 'materials.maker': ['V4-T6'], 'materials.research': ['V4-T5', 'V4-T6'], 'materials.video': ['V4-T5', 'V4-T6'], 'materials.links': ['V4-T6', 'V4-T5'],
        aiPolicy: C('S35', 'S39')
      },
      blocked: false
    },
    'Rice': {
      name: s('萊斯大學 Rice', 'Rice'), type: 'private',
      system: ['commonapp'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'recommended',
      english: s('非母語者必繳；TOEFL 100、IELTS 7.0', 'Required if non-native; TOEFL 100, IELTS 7.0'),
      teacherLetters: 2, otherRecommender: true,
      interview: s('選擇性，2026–27 全部線上', 'Optional; all virtual in 2026–27'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: null, engCapped: null, bioEntry: null, transfer: null,
      materials: { arts: 'yes', maker: 'limited', research: 'ns', video: 'limited', links: 'limited' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S22', 'A5b-S23'], plans: ['A3b-S21'], testPolicy: ['A4-S87', 'A4-S88'], english: ['A4-S87'],
        teacherLetters: ['A5b-S22', 'A5b-S23'], otherRecommender: ['A5b-S22'], interview: ['A5b-S22', 'A5b-S23'], needPolicy: ['A4-S87'], aidAvailable: ['A4-S87'],
        engEntry: M('M60'), engCapped: M('M60'), bioEntry: M('M60'), transfer: M('M60'),
        'materials.arts': ['B2-S45'], 'materials.maker': ['B2-S46'], 'materials.research': ['B2-S45', 'B2-S46'], 'materials.video': ['B2-S45'], 'materials.links': ['B2-S45', 'B1-P20'],
        aiPolicy: C('S20')
      },
      blocked: false
    },
    'UC Berkeley': {
      name: s('加州大學柏克萊分校 UC Berkeley', 'UC Berkeley'), type: 'public',
      system: ['uc'], plans: ['RD'], testPolicy: 'blind',
      english: s('UC 最低 TOEFL 80；Berkeley 寫 90', 'UC minimum TOEFL 80; Berkeley states 90'),
      teacherLetters: null, otherRecommender: false,
      interview: s('不提供面試；InitialView 選繳', 'No interviews; InitialView optional'),
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: true, bioEntry: 'direct',
      transfer: s('轉學院 highly unlikely；EECS 不受理', 'Change of college "highly unlikely"; none into EECS'),
      materials: { arts: 'no', maker: 'no', research: 'no', video: 'no', links: 'no' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S31', 'A2-S9'], plans: ['A3b-S23', 'A3b-S26'], testPolicy: ['A4-S104'], english: ['A4-S99', 'A4-S103'],
        teacherLetters: ['A5b-S28', 'A5b-S30'], otherRecommender: ['A5b-S25'], interview: ['A5b-S26'], needPolicy: ['A3b-S28'], aidAvailable: ['A3b-S28'],
        engEntry: M('M61', 'M63'), engCapped: M('M63'), bioEntry: M('M62'), transfer: M('M64'),
        'materials.arts': ['B2-S47', 'B2-S48'], 'materials.maker': ['B2-S47', 'B2-S48'], 'materials.research': ['B2-S47', 'B2-S48'], 'materials.video': ['B2-S47', 'B2-S48'], 'materials.links': ['B2-S47', 'B2-S48'],
        aiPolicy: C('S5', 'S8')
      },
      blocked: false
    },
    'UCLA': {
      name: s('加州大學洛杉磯分校 UCLA', 'UCLA'), type: 'public',
      system: ['uc'], plans: ['RD'], testPolicy: 'blind',
      english: s('具競爭力 TOEFL 100、IELTS 7.5', 'Competitive TOEFL 100, IELTS 7.5, DET 135'),
      teacherLetters: 0, otherRecommender: false,
      interview: s('不提供面試', 'No admission interviews'),
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: null, bioEntry: null,
      transfer: s('不保證；只核准一次轉入工程', 'Not guaranteed; one change into engineering only'),
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S32'], plans: ['A3b-S29', 'A3b-S23'], testPolicy: ['A4-S106', 'A4-S107'], english: ['A4-S107'],
        teacherLetters: ['A5b-S34'], otherRecommender: ['A5b-S34'], interview: ['A5b-S34'], needPolicy: ['A4-S106'], aidAvailable: ['A4-S106'],
        engEntry: M('M65'), engCapped: M('M65'), bioEntry: M('M65'), transfer: M('M66'),
        'materials.arts': ['B2-S49'], 'materials.maker': ['B2-S50'], 'materials.research': ['B2-S50'], 'materials.video': ['B2-S50'], 'materials.links': ['B2-S50'],
        aiPolicy: C('S5', 'S8')
      },
      blocked: false
    },
    'UC San Diego': {
      name: s('加州大學聖地牙哥分校 UC San Diego', 'UC San Diego'), type: 'public',
      system: ['uc'], plans: ['RD'], testPolicy: 'blind',
      english: s('TOEFL 83（舊）、IELTS 7、DET 115', 'TOEFL 83 (old), IELTS 7, DET 115'),
      teacherLetters: null, otherRecommender: null,
      interview: null,
      needPolicy: 'unclear', aidAvailable: null,
      engEntry: 'direct', engCapped: true, bioEntry: null,
      transfer: s('積分排序，同分抽籤，每年一次', 'Ranked by points, ties at random, once a year'),
      materials: { arts: 'limited', maker: 'ns', research: 'ns', video: 'ns', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S37', 'A2-S9'], plans: ['A3b-S23'], testPolicy: ['A4-S109'], english: ['A4-S108'],
        teacherLetters: ['A5b-S37'], otherRecommender: ['A5b-S37'], interview: ['A5b-S37'], needPolicy: ['A4-S110'], aidAvailable: ['A4-S110'],
        engEntry: M('M68', 'M69'), engCapped: M('M68'), bioEntry: M('M69'), transfer: M('M70', 'M71'),
        'materials.arts': ['B2-S51', 'B2-S52'], 'materials.maker': ['B2-S51'], 'materials.research': ['B2-S51'], 'materials.video': ['B2-S51'], 'materials.links': ['B2-S51'],
        aiPolicy: C('S5', 'S8')
      },
      blocked: false
    },
    'UT Austin': {
      name: s('德州大學奧斯汀分校 UT Austin', 'UT Austin'), type: 'public',
      system: ['commonapp', 'applytexas'], plans: ['EA', 'RD'], testPolicy: 'required',
      english: s('非英語官方語言國家必繳；TOEFL 79', 'Required unless English-only country; TOEFL 79'),
      teacherLetters: 0, otherRecommender: true,
      interview: null,
      needPolicy: 'unclear', aidAvailable: null,
      engEntry: 'direct', engCapped: true, bioEntry: 'direct',
      transfer: s('依名額；Cockrell 沒有標準 GPA', 'Space available; Cockrell has no standard GPA'),
      materials: { arts: 'limited', maker: 'no', research: 'no', video: 'ns', links: 'ns' },
      aiPolicy: false,
      src: {
        type: [], system: ['A2-S29', 'A2-S30'], plans: ['A3b-S33'], testPolicy: ['A4-S111', 'A3b-S33'], english: ['A4-S112'],
        teacherLetters: ['A5b-S38'], otherRecommender: ['A5b-S38', 'A5b-S40'], interview: ['A5b-S38', 'A5b-S41'], needPolicy: ['A4-S114', 'A5b-S40'], aidAvailable: ['A4-S114', 'A5b-S40'],
        engEntry: M('M72', 'M73b', 'M75'), engCapped: M('M76'), bioEntry: M('M73'), transfer: M('M76', 'M77'),
        'materials.arts': ['B2-S53'], 'materials.maker': ['B2-S53', 'B2-S54'], 'materials.research': ['B2-S53', 'B2-S54'], 'materials.video': ['B2-S53', 'B2-S54'], 'materials.links': ['B2-S53', 'B2-S54'],
        aiPolicy: C('S25', 'S45')
      },
      blocked: false
    },
    'UW': {
      name: s('華盛頓大學 UW', 'University of Washington'), type: 'public',
      system: ['commonapp'], plans: ['RD'], testPolicy: 'optional',
      english: s('必繳；TOEFL 76、IELTS 6.0、DET 110', 'Required; TOEFL 76, IELTS 6.0, DET 110'),
      teacherLetters: 0, otherRecommender: false,
      interview: s('不做正式面試', 'No formal interviews'),
      needPolicy: 'noAid', aidAvailable: false,
      engEntry: 'direct', engCapped: true, bioEntry: 'direct',
      transfer: s('新生時未錄取 CS／CE 者「unlikely」', 'CS/CE "unlikely" if not admitted at entry'),
      materials: { arts: 'no', maker: 'no', research: 'no', video: 'no', links: 'no' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S42'], plans: ['A3b-S35', 'A3b-S36'], testPolicy: ['A4-S116'], english: ['A4-S117'],
        teacherLetters: ['A5b-S42'], otherRecommender: ['A5b-S42'], interview: ['A5b-S42'], needPolicy: ['A4-S118'], aidAvailable: ['A4-S118'],
        engEntry: M('M78'), engCapped: M('M78'), bioEntry: M('M78'), transfer: M('M78'),
        'materials.arts': ['B2-S55'], 'materials.maker': ['B2-S55'], 'materials.research': ['B2-S55'], 'materials.video': ['B2-S55'], 'materials.links': ['B2-S55'],
        aiPolicy: C('S27')
      },
      blocked: false
    },
    'Williams': {
      name: s('威廉斯學院 Williams', 'Williams'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'RD'], testPolicy: 'optional',
      english: s('必繳，不限單一考試', 'Required; no single exam'),
      teacherLetters: 2, otherRecommender: null,
      interview: s('不提供面試；國際生可交 InitialView', 'No interviews; internationals may share InitialView'),
      needPolicy: 'unclear', aidAvailable: null,
      engEntry: null, engCapped: null, bioEntry: 'school', transfer: null,
      materials: { arts: 'yes', maker: 'ns', research: 'yes', video: 'limited', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A2-S54', 'A2-S16', 'V4-T11'], plans: ['V4-T11'], testPolicy: ['A4-S90', 'V4-T11'], english: ['A4-S89'],
        teacherLetters: ['V4-T11'], otherRecommender: ['A5b-S45', 'A5b-S46', 'V4-T11'], interview: ['V4-T11'], needPolicy: ['A4-S91'], aidAvailable: ['A4-S91'],
        engEntry: ['V6-W2', 'V6-W3', 'V6-W5'], engCapped: ['V6-W3', 'V6-W5'], bioEntry: ['V6-W2'], transfer: ['V6-W3', 'V6-W5'],
        'materials.arts': ['V4-T11'], 'materials.maker': ['V4-T11'], 'materials.research': ['V4-T11'], 'materials.video': ['V4-T11'], 'materials.links': ['V4-T11'],
        aiPolicy: C('S41')
      },
      blocked: false
    },
    'Amherst': {
      name: s('安默斯特學院 Amherst', 'Amherst'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'RD'], testPolicy: 'optional',
      english: s('非母語且非英語授課者必繳', 'Required if non-native and not English-medium'),
      teacherLetters: null, otherRecommender: null,
      interview: s('不辦招生面試', 'No admission interviews'),
      needPolicy: 'blind', aidAvailable: true,
      engEntry: null, engCapped: null, bioEntry: null, transfer: null,
      materials: { arts: 'yes', maker: 'ns', research: 'yes', video: 'ns', links: 'ns' },
      aiPolicy: null,
      src: {
        type: [], system: ['A2-S55'], plans: ['V3-R6'], testPolicy: ['V3-R6', 'A4-S93'], english: ['A4-S93'],
        teacherLetters: ['A5b-S47', 'A5b-S48', 'V3-R6'], otherRecommender: ['A5b-S47', 'A5b-S48', 'V3-R6'], interview: ['V3-R14', 'V3-R15'], needPolicy: ['V3-R13'], aidAvailable: ['V3-R13'],
        engEntry: M('M84', 'M85'), engCapped: M('M85'), bioEntry: M('M84'), transfer: M('M85'),
        'materials.arts': ['V3-R6'], 'materials.maker': ['V3-R6'], 'materials.research': ['V3-R6'], 'materials.video': ['V3-R6'], 'materials.links': ['V3-R6'],
        aiPolicy: C('S42')
      },
      blocked: false
    },
    'Swarthmore': {
      name: s('斯沃斯莫爾學院 Swarthmore', 'Swarthmore'), type: 'private',
      system: ['commonapp', 'coalition'], plans: ['ED', 'ED2', 'RD'], testPolicy: 'optional',
      english: s('影片、英語考試或 InitialView 三擇一', 'Video, English test or InitialView (one of)'),
      teacherLetters: 2, otherRecommender: null,
      interview: s('選擇性，不面試不吃虧', 'Optional; no disadvantage'),
      needPolicy: 'aware', aidAvailable: true,
      engEntry: null, engCapped: null, bioEntry: null, transfer: null,
      materials: { arts: 'yes', maker: 'limited', research: 'yes', video: 'yes', links: 'ns' },
      aiPolicy: true,
      src: {
        type: [], system: ['A5b-S49'], plans: ['A3b-S41'], testPolicy: ['A4-S97'], english: ['A4-S96'],
        teacherLetters: ['A5b-S49', 'A5b-S51'], otherRecommender: ['A5b-S49'], interview: ['A5b-S49', 'A5b-S51'], needPolicy: ['A4-S96'], aidAvailable: ['A4-S96'],
        engEntry: M('M82'), engCapped: M('M82'), bioEntry: M('M82'), transfer: M('M82'),
        'materials.arts': ['B2-S58'], 'materials.maker': ['B2-S58'], 'materials.research': ['B2-S58'], 'materials.video': ['B2-S58'], 'materials.links': ['B2-S58'],
        aiPolicy: C('S14')
      },
      blocked: false
    }
  };

  window.ATLAS.viz.schools = { order: order, fields: fields, enums: enums, data: data };
})();
