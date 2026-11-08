/* Practice walkthrough data. Read by site/assets/js/mock.js.
   Structure, labels and limits come from research notes:
   A1 (2026-11-07_common-app-first-year-anatomy_v1.md), A5a/A5b (school rosters),
   A3a/A3b (calendars), A2 (other application systems), C1 (outside-record map).
   Rule 9: practice mock, no system name in the page title, nothing leaves the browser. */
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  'use strict';
  function z(zh, en) { return { zh: zh, en: en }; }
  function o(v, zh, en) { return { v: v, label: z(zh, en) }; }
  var YN = [o('yes', '是', 'Yes'), o('no', '否', 'No')];
  function F(id, label, type, extra) {
    var f = { id: id, label: label, type: type };
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }
  var DROPDOWN = z('實際表單是下拉選單；選項清單在 data catalog（A1-S6）中，本頁未逐項重現，這裡改用文字欄。', 'The real form uses a dropdown; its choice list is in the data catalog (A1-S6) and is not reproduced here, so this mock uses a text box.');
  var LEVELS = ['Regular/Standard', 'Accelerated', 'Advanced', 'AP', 'AS/A-level/International A-level/Cambridge AICE', 'College Prep', 'Dual Enrollment', 'Enriched', 'GCSE/IGCSE', 'Gifted', 'High Honors', 'Honors', 'Intensive', 'IB', 'Pre-IB', 'Regents', 'N/A'];
  var ACT_TYPES = ['Academic', 'Art', 'Athletics (other)', 'Athletics (JV or varsity)', 'Career readiness or practicums', 'Community service or volunteer work', 'Computer or technology', 'Cultural', 'Dance', 'Debate or speech', 'Employment or work (paid)', 'Environmental', 'Family responsibilities', 'Foreign language', 'Hobby', 'Internship', 'Journalism or publishing', 'LGBT+', 'Music', 'Music: Vocal', 'Religious', 'Research', 'Robotics', 'R.O.T.C. or military', 'School spirit', 'Science or math', 'Social justice or organizing', 'Student government or politics', 'Study abroad or foreign exchange', 'Theater or drama', 'Other'];

  // ---------------------------------------------------------------- page chrome
  window.ATLAS.pages['mock'] = {
    title: z('模擬練習：一年級申請表全流程', 'Practice walkthrough: the full first-year application'),
    mock: true,
    judgment: z(
      '這一頁依 2026–27 公開資料重建 Common App first-year 申請表的結構：七個主表區塊、30 所學校各自的題目與補充文章、推薦人與 FERPA、繳費與簽名，外加另一套系統的 UC 申請。欄位、字數與數量上限都附來源。',
      'This page rebuilds the structure of the Common App first-year application as published for 2026–27: seven common sections, the 30 schools’ own questions and writing supplements, recommenders and FERPA, fee and signature, plus the separate UC application. Every field limit and count carries a source.'
    ),
    intro: z(
      '這是練習用的模擬頁，模擬的是 Common App 2026–27 first-year 申請表的結構，不是官方系統，也不會送出任何資料。你輸入的內容只存在這台裝置瀏覽器的 localStorage。正式申請請到各系統的官方網站。',
      'A practice page. It models the structure of the Common App first-year application as published for 2026–27; it is not the official system and sends nothing anywhere. What you type stays in this browser’s localStorage on this device. Real applications are filed on each system’s own website.'
    )
  };

  // ---------------------------------------------------------------- engine data
  var M = {};

  M.ui = {
    navLabel: z('模擬申請表導覽', 'Mock application navigation'),
    annotate: z('顯示「校外紀錄」註記', 'Show outside-record notes'),
    prefill: z('載入虛構範例（生物系）', 'Load fictional example (biology)'),
    prefillConfirm: z('這會清掉你目前輸入的內容，改成虛構申請者的範例資料。確定嗎？', 'This replaces everything you have typed with a fictional applicant’s answers. Continue?'),
    clear: z('全部清除', 'Clear all'),
    clearConfirm: z('確定清除這台裝置上本頁的所有內容？', 'Clear everything this page stored on this device?'),
    dashboard: z('總覽', 'Dashboard'),
    myColleges: z('我的學校', 'My Colleges'),
    commonTab: z('Common App 主表', 'Common App tab'),
    questions: z('學校題目', 'Questions'),
    supplement: z('寫作補充', 'Writing supplement'),
    recommenders: z('推薦人與 FERPA', 'Recommenders and FERPA'),
    review: z('檢查與送出', 'Review and submit'),
    required: z('必填', 'Required'),
    choose: z('請選擇', 'Choose…'),
    words: z('字（words）', 'words'),
    chars: z('字元', 'characters'),
    over: z('超過上限', 'Over the limit'),
    under: z('低於下限', 'Under the minimum'),
    outsideLabel: z('校外紀錄可從這裡進入：', 'Where an outside record can enter:'),
    remove: z('移除', 'Remove'),
    add: z('新增', 'Add'),
    maxReached: z('已達上限：', 'Maximum reached:'),
    college: z('學校', 'College'),
    plan: z('申請方案', 'Plan'),
    deadline: z('截止日', 'Deadline'),
    status: z('狀態', 'Status'),
    noColleges: z('還沒加入學校。到 [我的學校](mock/index.html#/colleges) 加入。', 'No colleges yet. Add some under [My Colleges](mock/index.html#/colleges).'),
    submittedMock: z('已模擬送出', 'Mock-submitted'),
    inProgress: z('進行中', 'In progress'),
    addCollege: z('加入我的學校', 'Add to My Colleges'),
    removeCollege: z('從我的學校移除', 'Remove from My Colleges'),
    min: z('最少', 'min'),
    max: z('最多', 'max'),
    invitedMock: z('已模擬邀請（未寄出任何信）', 'mock invite (no email sent)'),
    recName: z('姓名', 'Name'),
    recEmail: z('Email', 'Email'),
    recSubject: z('科目或身分', 'Subject or role'),
    invite: z('邀請', 'Invite'),
    preview: z('預覽主表內容', 'Preview the common sections'),
    submitMock: z('模擬送出（不會傳到任何地方）', 'Mock submit (goes nowhere)'),
    notReady: z('還有未完成的項目，或還沒選繳費方式、還沒簽名。', 'Some items are incomplete, or the fee choice or signature is missing.'),
    submittedNote: z('模擬送出日期：', 'Mock-submitted on'),
    piqChosen: z('已作答題數：', 'Questions answered:'),
    piqTooMany: z('超過 4 題；正式系統只收 4 題', 'more than 4; the real system takes exactly 4'),
    prev: z('上一節', 'Previous'),
    next: z('下一節', 'Next')
  };

  M.intro = z(
    '用法：左側是導覽。先到「我的學校」加入學校，再逐節填主表。打開「顯示校外紀錄註記」，會在可容納校外多年紀錄的欄位旁看到字數預算與來源。「載入虛構範例」會填入一位虛構的台灣生物系申請者，方便看完成後的樣子。字數計算方式：words 以空白切分，characters 以字元數計。',
    'How to use: the left column is the navigation. Add colleges under My Colleges, then work through the common sections. Turn on "Show outside-record notes" to see, next to each field that can hold a multi-year outside record, its budget and source. "Load fictional example" fills in a fictional Taiwan-based biology applicant so you can see a finished file. Word counts split on spaces; character counts are string length.'
  );
  M.dashboardIntro = z(
    '這張表模擬 Common App 的 Dashboard：每所學校的方案、截止日、主表與各校部分的完成度。主表填一次，送給清單上所有學校；學校題目、寫作補充與推薦人分配是逐校的。本站 30 所學校裡，MIT 用自己的申請系統，不在這裡；UC 各校（Berkeley、UCLA、San Diego）用 UC Application，是另一套系統，所以左側另有一個 UC 分頁。',
    'This table models the Dashboard: for each college, the plan, deadline, and completion of the common sections and the college-specific parts. The common sections are filled once and go to every college on the list; questions, writing supplements and recommender assignments are per college. Among this site’s 30 schools, MIT uses its own application and does not appear here; the UC campuses (Berkeley, UCLA, San Diego) use the UC application, a separate system, which is why the left column has a separate UC tab.'
  );
  M.collegesIntro = z(
    '本站 30 所學校都在這裡；選了哪一所，左欄就出現那所學校的題目、補充文章與推薦信規定，資料取自本站逐校研究筆記。MIT 與三所 UC 不走 Common App，條目裡會說明它們自己的系統。正式系統每個申請季最多可加 20 所（A1-S37）。',
    'All 30 of this site’s schools are listed; add one and its own questions, writing supplements and letter rules appear in the left column, drawn from this site’s roster notes. MIT and the three UC campuses do not use the Common App; their entries say what their own systems ask. The real system allows at most 20 colleges per cycle (A1-S37).'
  );

  // ================================================================ SECTIONS
  M.sections = [];

  // ---------- Profile
  M.sections.push({
    id: 'profile',
    label: z('Profile 個人資料', 'Profile'),
    blurb: z('姓名、生日、地址、語言、公民身分、fee waiver。', 'Name, birth date, address, languages, citizenship, fee waiver.'),
    intro: z('學生本人填寫。紅色星號代表必填，其餘選填（A1-S28）。姓名類欄位上限 50 字元（A1-S6）。', 'Filled by the student. A red asterisk marks a required question; others are optional (A1-S28). Name fields allow 50 characters (A1-S6).'),
    src: ['A1-S6', 'A1-S12', 'A1-S28'],
    groups: [
      { id: 'personal', label: z('個人資料', 'Personal information'), fields: [
        F('first', z('法定名字（Legal first name）', 'Legal first/given name'), 'text', { required: true, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
        F('last', z('法定姓氏（Legal last name）', 'Legal last/family name'), 'text', { required: true, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
        F('middle', z('中間名', 'Middle name'), 'text', { limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
        F('preferred', z('慣用名', 'Preferred first name'), 'text', { limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
        F('former', z('是否曾用其他法定姓名？', 'Have you ever used any other names?'), 'radio', { required: true, options: YN, src: ['A1-S6'] }),
        F('formerName', z('曾用名', 'Former name'), 'text', { limit: { chars: 50 }, hardMax: true, showIf: { field: 'former', equals: 'yes' }, src: ['A1-S6'] }),
        F('dob', z('出生日期', 'Date of birth'), 'date', { required: true, src: ['A1-S6'], help: z('Data catalog 接受 1906–2027 年。系統以生日推算是否滿 24 歲，學生看不到這個欄位（A1-S7）。', 'The data catalog accepts years 1906–2027. Whether the applicant is 24+ is computed from this date and not shown to the student (A1-S7).') })
      ] },
      { id: 'address', label: z('地址', 'Address'), fields: [
        F('home', z('永久住址', 'Permanent home address'), 'textarea', { required: true, rows: 3, src: ['A1-S6'], help: z('實際表單是結構化地址欄（國家、城市、郵遞區號等）。', 'The real form uses a structured address block (country, city, postal code, etc.).') }),
        F('alt', z('是否另有通訊地址？', 'Do you have an alternate mailing address?'), 'radio', { required: true, options: YN, src: ['A1-S6'] }),
        F('altAddr', z('通訊地址', 'Alternate mailing address'), 'textarea', { rows: 3, showIf: { field: 'alt', equals: 'yes' }, src: ['A1-S6'] })
      ] },
      { id: 'contact', label: z('聯絡方式', 'Contact details'), fields: [
        F('email', z('Email（帳號 email）', 'Email (account email)'), 'text', { required: true, src: ['A1-S1'], help: z('2026–27 新增：建立帳號或更換 email 時要驗證；既有帳號不重新驗證（A1-S1）。', 'New for 2026–27: email is verified when an account is created or the email changed; existing accounts are not re-verified (A1-S1).') }),
        F('phone', z('主要電話', 'Preferred phone'), 'text', { required: true, src: ['A1-S6'] }),
        F('phoneType', z('電話類型', 'Preferred phone type'), 'text', { required: true, src: ['A1-S6'], help: DROPDOWN }),
        F('altPhone', z('其他電話', 'Alternate phone'), 'text', { src: ['A1-S6'] })
      ] },
      { id: 'languages', label: z('語言', 'Languages'), src: ['A1-S6', 'A1-S12'],
        intro: z('實際表單先問「你精通幾種語言」（1–5，必填），再逐一勾選程度。下拉選單沒有的語言可填 other language，上限 50 字元。', 'The real form first asks how many languages you are proficient in (1–5, required), then the proficiency for each. A language not in the dropdown goes into "other language", 50 characters.'),
        repeat: { max: 5, min: 1, itemLabel: z('語言', 'Language') }, fields: [
          F('lang', z('語言', 'Language'), 'text', { required: true, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
          F('prof', z('程度', 'Proficiency'), 'checks', { required: true, src: ['A1-S6', 'A1-S12'], options: [o('first', '第一語言', 'First language'), o('speak', '會說', 'Speak'), o('read', '會讀', 'Read'), o('write', '會寫', 'Write'), o('home', '在家使用', 'Spoken at home')] })
        ] },
      { id: 'citizenship', label: z('公民身分', 'Citizenship'), fields: [
        F('status', z('公民身分', 'Citizenship status'), 'radio', { required: true, src: ['A1-S1', 'A1-S7', 'A1-S12'],
          options: [o('us', 'U.S. citizen or U.S. national', 'U.S. citizen or U.S. national'), o('dual', 'U.S. dual citizen', 'U.S. dual citizen'), o('pr', 'U.S. permanent resident', 'U.S. permanent resident'), o('other_status', 'U.S. resident with other status', 'U.S. resident with other status'), o('nonus', 'Other (non-U.S.)', 'Other (non-U.S.)')],
          help: z('2026–27 唯一有來源的變動：原本的 “U.S. resident” 改名為 “U.S. resident with other status”（A1-S1、S7）。其餘四個選項的文字依表單流程寫成，未在 A1 筆記中逐字比對 catalog。', 'The one sourced 2026–27 change: "U.S. resident" was renamed "U.S. resident with other status" (A1-S1, S7). The wording of the other four options follows the form flow and was not checked word for word against the catalog in the A1 note.') }),
        F('country', z('公民身分所屬國家', 'Country of citizenship'), 'text', { showIf: { field: 'status', equals: 'nonus' }, src: ['A1-S12'] }),
        F('birthplace', z('出生地（國家／城市）', 'Birthplace (country, city)'), 'text', { src: ['A1-S12'] }),
        F('yearsUS', z('在美國居住年數', 'Years lived in the United States'), 'number', { src: ['A1-S12'] }),
        F('yearsOut', z('在美國以外居住年數', 'Years lived outside the United States'), 'number', { src: ['A1-S12'] })
      ] },
      { id: 'demographics', label: z('人口統計（選填）', 'Demographics (optional)'), intro: z('表單明寫這些問題是選填（A1-S12）。各題選項本頁未重現。', 'The form says these questions are optional (A1-S12). Choice lists are not reproduced here.'), src: ['A1-S12'], fields: [
        F('sex', z('法定性別', 'Legal sex'), 'text', { help: DROPDOWN }),
        F('gender', z('性別認同', 'Gender'), 'text', { help: DROPDOWN }),
        F('pronouns', z('代名詞', 'Pronouns'), 'text', { help: DROPDOWN }),
        F('hispanic', z('是否為 Hispanic 或 Latino/a/x？', 'Do you identify as Hispanic or Latino/a/x?'), 'radio', { options: YN }),
        F('race', z('種族', 'Racial identity'), 'text', { help: DROPDOWN })
      ] },
      { id: 'feewaiver', label: z('Common App fee waiver', 'Common App fee waiver'), src: ['A1-S6', 'A1-S7', 'A1-S27'],
        intro: z('學生自己表示符合資格，就是唯一的技術條件；學校輔導老師的 FW 表不是必要（A1-S20）。2026–27 起，每所收費學校會標示是否接受此 waiver：對所有學生、只對美國學生、或都不接受（A1-S1）。國際生「可能」符合資格（A1-S27）。', 'The student’s own indication is the only technical requirement; the counselor’s FW form is not required (A1-S20). From 2026–27 each fee-charging college shows whether it accepts the waiver for all students, U.S. students only, or none (A1-S1). International applicants "may be eligible" (A1-S27).'),
        fields: [
          F('eligible', z('是否符合 Common App 報名費減免資格？', 'Do you meet one or more of the Common App fee waiver eligibility criteria?'), 'radio', { required: true, options: YN, src: ['A1-S6', 'A1-S27'] }),
          F('indicator', z('符合哪一項指標', 'Which indicator applies'), 'checks', { showIf: { field: 'eligible', equals: 'yes' }, src: ['A1-S27'], options: [o('lunch', '免費／減價午餐', 'Free or reduced-price lunch'), o('test', 'SAT/ACT 考試費減免', 'SAT/ACT fee waiver'), o('usda', '符合 USDA 收入標準', 'USDA income guidelines'), o('assist', '公共援助', 'Public assistance'), o('program', '低收入方案（如 GEAR UP、TRIO）', 'Low-income program (e.g. GEAR UP, TRIO)'), o('housing', '補助住宅、寄養家庭或無家可歸', 'Subsidized housing, foster home, or homeless'), o('ward', '州監護或孤兒', 'Ward of the state or orphan'), o('pell', '符合 Pell 資格', 'Pell eligibility'), o('statement', '由校方人員、college access counselor、助學金人員或社區領袖出具說明', 'Statement from a school official, college access counselor, financial aid officer, or community leader')] }),
          F('affirm', z('確認聲明（2026–27 新增）', 'Affirmation (new in 2026–27)'), 'checks', { showIf: { field: 'eligible', equals: 'yes' }, src: ['A1-S7'], options: [o('agree', '我確認以上資訊屬實（文字為本站轉述）', 'I affirm that the information above is accurate (paraphrased)')] }),
          F('signature', z('簽名', 'Signature'), 'text', { showIf: { field: 'eligible', equals: 'yes' }, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] })
        ] }
    ]
  });

  // ---------- Family
  var parentFields = function (n) {
    return [
      F('first', z('名字', 'First/given name'), 'text', { required: true, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
      F('last', z('姓氏', 'Last/family name'), 'text', { required: true, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
      F('mi', z('中間名縮寫', 'Middle initial'), 'text', { limit: { chars: 2 }, hardMax: true, src: ['A1-S6'] }),
      F('employment', z('就業狀態', 'Employment status'), 'text', { src: ['A1-S6'], help: DROPDOWN }),
      F('occupation', z('職業（下拉選單沒有時填 other occupation）', 'Occupation (other occupation if not in the list)'), 'text', { limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
      F('employer', z('雇主', 'Employer'), 'text', { limit: { chars: 30 }, hardMax: true, src: ['A1-S6'] }),
      F('education', z('最高學歷', 'Education level'), 'text', { required: true, src: ['A1-S6'], help: z('實際是下拉選單。2026–27 對獨立申請者另有 first-generation 問題：「父母中是否有人有學士或更高學位？」（A1-S1、S12）', 'A dropdown in the real form. For independent applicants 2026–27 asks a first-generation question instead: does one or more of your parents have a bachelor’s degree or higher (A1-S1, S12).') })
    ];
  };
  M.sections.push({
    id: 'family',
    label: z('Family 家庭', 'Family'),
    blurb: z('家庭狀況、父母、手足（2026–27 上限 10 位）。', 'Household, parents, siblings (up to 10 from 2026–27).'),
    intro: z('2026–27 新流程：23 歲以上（deck 寫 23+，catalog 的計算欄寫 24 歲以上，兩者未調和），或自述符合 FAFSA 定義的獨立學生，不再回答父母與手足題，改答身分、first-generation 與同住者三題（A1-S1、S4、S7）。這個模擬頁沒有做這段分流。', '2026–27 routing: an applicant who is 23 or older (the deck says 23+, the catalog’s computed field says 24+; not reconciled) or who self-identifies as independent under the FAFSA definition skips the parent and sibling questions and answers three others instead (status, first-generation, who you live with) (A1-S1, S4, S7). This mock does not implement that routing.'),
    src: ['A1-S1', 'A1-S4', 'A1-S6', 'A1-S7'],
    groups: [
      { id: 'household', label: z('家庭狀況', 'Household'), fields: [
        F('marital', z('父母婚姻狀態', 'Parents’ marital status (relative to each other)'), 'text', { required: true, src: ['A1-S6'], help: DROPDOWN }),
        F('home', z('永久居住於', 'With whom do you make your permanent home?'), 'text', { required: true, src: ['A1-S6'], help: DROPDOWN }),
        F('otherLiving', z('其他居住狀況說明', 'Other living situation'), 'text', { limit: { chars: 100 }, hardMax: true, src: ['A1-S6'] }),
        F('children', z('子女人數', 'Number of children'), 'text', { limit: { chars: 2 }, hardMax: true, src: ['A1-S6'] })
      ] },
      { id: 'parent1', label: z('Parent 1', 'Parent 1'), fields: parentFields(1) },
      { id: 'parent2', label: z('Parent 2', 'Parent 2'), intro: z('另有 legal guardian（2026–27 新增區塊）與 1–2 位繼父母區塊（A1-S1、S6）。', 'There are also a legal guardian block (new in 2026–27) and 1–2 step-parent blocks (A1-S1, S6).'), src: ['A1-S1', 'A1-S6'], fields: parentFields(2) },
      { id: 'siblings', label: z('手足', 'Siblings'), src: ['A1-S1', 'A1-S6', 'A1-S7', 'A1-S12'],
        intro: z('Catalog 允許 0–10 位（2025–26 上限 5 位）。但 2026 年的 PDF 版表單仍寫「超過 3 位手足可用 Additional information」，兩份官方文件不一致；catalog（2026-08-18）較新（A1-S12、S6）。', 'The catalog allows 0–10 siblings (5 in 2025–26). The 2026 PDF still says to use Additional information if you have more than 3; the two official documents disagree, and the catalog (2026-08-18) is the later one (A1-S12, S6).'),
        repeat: { max: 10, itemLabel: z('手足', 'Sibling') }, fields: [
          F('name', z('姓名', 'Name'), 'text', { required: true, limit: { chars: 50 }, hardMax: true, src: ['A1-S6'] }),
          F('age', z('年齡', 'Age'), 'text', { required: true, limit: { chars: 2 }, hardMax: true, src: ['A1-S6'] }),
          F('rel', z('關係', 'Relationship'), 'text', { help: DROPDOWN }),
          F('edu', z('目前就學階段', 'Current education level'), 'text', { help: DROPDOWN })
        ] }
    ]
  });

  // ---------- Education
  M.sections.push({
    id: 'education',
    label: z('Education 教育', 'Education'),
    blurb: z('學校、班級人數、排名與 GPA、本學年課程（最多 15 門）、Honors（最多 5 項）、CBO、未來規劃。', 'School, class size, rank and GPA, current-year courses (up to 15), honors (up to 5), CBOs, future plans.'),
    src: ['A1-S6', 'A1-S12', 'A1-S28', 'A1-S29'],
    groups: [
      { id: 'school', label: z('目前或最近就讀的中學', 'Current or most recent secondary school'), fields: [
        F('name', z('學校（實際為查詢欄）', 'School (a lookup in the real form)'), 'text', { required: true, src: ['A1-S6'] }),
        F('entry', z('入學日期', 'Date of entry'), 'date', { required: true, src: ['A1-S6'] }),
        F('boarding', z('是否為寄宿學校？', 'Is this a boarding school?'), 'radio', { required: true, options: YN, src: ['A1-S6'] }),
        F('grad', z('（預計）畢業日期', 'Graduation date (or expected)'), 'date', { required: true, src: ['A1-S6'] })
      ] },
      { id: 'progression', label: z('學程進度', 'Progression'), fields: [
        F('changes', z('是否有下列情況（選填）', 'Did or will any of these apply? (optional)'), 'checks', { src: ['A1-S6', 'A1-S12'], options: [o('early', '提早畢業', 'Graduate early'), o('late', '延後畢業', 'Graduate late'), o('off', '中斷就學', 'Take time off'), o('gap', 'Gap year', 'Take a gap year')] }),
        F('explain', z('說明', 'Explanation'), 'textarea', { limit: { words: 250, minWords: 1 }, showIf: { field: 'changes', any: true }, src: ['A1-S6'] })
      ] },
      { id: 'otherSchools', label: z('其他中學', 'Other secondary schools'), src: ['A1-S6'],
        intro: z('實際表單先問就讀過幾所其他中學（0–3，必填）。', 'The real form first asks how many other secondary schools you attended (0–3, required).'),
        repeat: { max: 3, itemLabel: z('學校', 'School') }, fields: [
          F('name', z('學校', 'School'), 'text', { required: true }),
          F('from', z('起', 'From'), 'date', {}),
          F('to', z('迄', 'To'), 'date', {}),
          F('reason', z('離校原因', 'Reason for leaving'), 'textarea', { limit: { words: 250, minWords: 1 }, src: ['A1-S6'] })
        ] },
      { id: 'collegeCourses', label: z('大學課程（雙聯、暑期、直接修學分）', 'Colleges & universities (dual enrollment, summer, credit directly)'), src: ['A1-S6', 'A1-S29'],
        intro: z('實際表單先問修過課的大學數（0–3，必填）。', 'The real form first asks how many colleges you took courses at (0–3, required).'),
        outside: z('大學開的課若不在高中成績單上，不填在 Courses & Grades，而是填在這裡（A1-S29）。若授課教授願意寫信，可用 Teacher 的 “college/university instructor” 身分（A1-S23）。', 'College courses that are not on the high-school transcript go here, not in Courses & Grades (A1-S29). A professor who taught you can write as a Teacher, marking "college/university instructor" (A1-S23).'),
        repeat: { max: 3, itemLabel: z('大學', 'College') }, fields: [
          F('name', z('大學', 'College or university'), 'text', { required: true }),
          F('type', z('類型', 'Type'), 'checks', { options: [o('de', '雙聯修課（Dual enrollment）', 'Dual enrollment with high school'), o('summer', '暑期課程', 'Summer program'), o('credit', '直接向大學修學分', 'Credit awarded directly by college')] }),
          F('from', z('起', 'From'), 'date', {}),
          F('to', z('迄', 'To'), 'date', {})
        ] },
      { id: 'grades', label: z('成績', 'Grades'), src: ['A1-S6', 'A1-S28'],
        intro: z('學校若同時提供加權與未加權排名或 GPA，填加權；學校的 GPA 制度不在下拉選單內時，GPA 留白（A1-S28）。', 'If your school reports both weighted and unweighted rank or GPA, report weighted; if your school’s GPA scale is not in the dropdown, leave GPA blank (A1-S28).'),
        fields: [
          F('classSize', z('畢業班人數', 'Graduating class size (approx.)'), 'text', { required: true, limit: { chars: 5 }, hardMax: true, src: ['A1-S6'] }),
          F('rankType', z('排名報告方式', 'Class rank reporting'), 'radio', { src: ['A1-S6'], options: [o('exact', 'Exact', 'Exact'), o('decile', 'Decile', 'Decile'), o('quintile', 'Quintile', 'Quintile'), o('quartile', 'Quartile', 'Quartile'), o('none', 'None', 'None')] }),
          F('rank', z('排名', 'Class rank'), 'text', { limit: { chars: 5 }, hardMax: true, src: ['A1-S6'], showIf: { field: 'rankType', equals: 'exact' } }),
          F('gpaScale', z('GPA 滿分', 'Cumulative GPA scale'), 'text', { src: ['A1-S6'], help: DROPDOWN }),
          F('gpa', z('累計 GPA', 'Cumulative GPA'), 'text', { limit: { chars: 6 }, hardMax: true, src: ['A1-S6'] }),
          F('gpaWeight', z('GPA 加權', 'GPA weighting'), 'radio', { src: ['A1-S6'], options: [o('w', 'Weighted', 'Weighted'), o('u', 'Unweighted', 'Unweighted')] })
        ] },
      { id: 'currentCourses', label: z('本學年（或最近一學年）課程', 'Current or most recent year courses'), src: ['A1-S6'],
        intro: z('1–15 門；課名 100 字元；另有科目、程度與學制（學期／學季等）欄位，學制為必填（A1-S6）。', '1–15 courses; course name 100 characters; also subject, level and the schedule system (semester, trimester, etc.), which is required (A1-S6).'),
        repeat: { max: 15, min: 1, itemLabel: z('課程', 'Course') }, fields: [
          F('name', z('課名', 'Course title'), 'text', { required: true, limit: { chars: 100 }, hardMax: true, src: ['A1-S6'] }),
          F('subject', z('科目', 'Subject'), 'text', { help: DROPDOWN }),
          F('level', z('程度', 'Course level'), 'select', { options: LEVELS, src: ['A1-S6', 'A1-S29'] }),
          F('schedule', z('學制', 'Schedule'), 'text', { required: true, help: DROPDOWN })
        ] },
      { id: 'honorsQ', label: z('Honors', 'Honors'), fields: [
        F('any', z('是否要填寫 honors？', 'Do you wish to report any honors related to your academic achievements beginning with the ninth grade or international equivalent?'), 'radio', { required: true, options: YN, src: ['A1-S6'] })
      ] },
      { id: 'honors', label: z('Honors 項目', 'Honors entries'), src: ['A1-S6', 'A1-S12'],
        intro: z('最多 5 項；名稱 100 字元；年級 9/10/11/12/PG；層級 School / State/Regional / National / International（A1-S6）。', 'Up to 5; title 100 characters; grade 9/10/11/12/PG; level School / State/Regional / National / International (A1-S6).'),
        outside: z('只有「獲獎」能進來，一行標題 100 字元，沒有描述欄。校外比賽（例如 ISEF 或 iGEM 的獎項）寫主辦單位與層級；說明與連結放 Additional information（C1-S34、A1-S6）。', 'Only an award fits here: one 100-character title, no description. For an outside competition (e.g. an ISEF or iGEM award) name the organiser and level; put context and links in Additional information (C1-S34, A1-S6).'),
        repeat: { max: 5, itemLabel: z('Honor', 'Honor') }, fields: [
          F('title', z('名稱', 'Honors title'), 'text', { required: true, limit: { chars: 100 }, hardMax: true, src: ['A1-S6'] }),
          F('grade', z('年級', 'Grade level'), 'checks', { required: true, options: ['9', '10', '11', '12', 'PG'], src: ['A1-S6'] }),
          F('level', z('層級', 'Level(s) of recognition'), 'checks', { required: true, options: [o('school', 'School', 'School'), o('state', 'State/Regional', 'State/Regional'), o('national', 'National', 'National'), o('intl', 'International', 'International')], src: ['A1-S6', 'A1-S12'] })
        ] },
      { id: 'cbo', label: z('Community-based organizations', 'Community-based organizations'), src: ['A1-S6'],
        intro: z('0–3 個；名稱 100 字元；聯絡人姓、名各 20 字元，另有 email 與電話（A1-S6）。', '0–3 organizations; name 100 characters; mentor first and last name 20 characters each, plus email and phone (A1-S6).'),
        outside: z('CBO 本身不送任何文件；它的工作人員可另被邀請為 Other Recommender 的 “College Access Counselor” 類型（A1 §15）。', 'The CBO itself submits nothing; its staff can be invited separately as an Other Recommender of type "College Access Counselor" (A1 §15).'),
        repeat: { max: 3, itemLabel: z('組織', 'Organization') }, fields: [
          F('org', z('組織名稱', 'Organization name'), 'text', { required: true, limit: { chars: 100 }, hardMax: true }),
          F('mFirst', z('聯絡人名字', 'Counselor/advisor/mentor first name'), 'text', { limit: { chars: 20 }, hardMax: true }),
          F('mLast', z('聯絡人姓氏', 'Counselor/advisor/mentor last name'), 'text', { limit: { chars: 20 }, hardMax: true }),
          F('mEmail', z('聯絡人 email', 'Email'), 'text', {})
        ] },
      { id: 'future', label: z('未來規劃', 'Future plans'), fields: [
        F('career', z('職涯興趣', 'Career interest'), 'text', { required: true, src: ['A1-S6'], help: DROPDOWN }),
        F('careerOther', z('其他職涯（不在清單時）', 'Other career interest'), 'text', { limit: { chars: 100 }, hardMax: true, src: ['A1-S6'] }),
        F('degree', z('最高預計學位', 'Highest degree you intend to earn'), 'text', { required: true, src: ['A1-S6'], help: DROPDOWN })
      ] }
    ]
  });

  // ---------- Testing
  M.sections.push({
    id: 'testing',
    label: z('Testing 考試（自報）', 'Testing'),
    blurb: z('自報成績；正式成績單是否要送由各校決定。', 'Self-reported scores; whether official reports are needed is each college’s rule.'),
    intro: z('不論 Score Choice，自報最好的成績；學校要求正式成績單時，寄送是申請者自己的責任（A1-S41）。2026–27 更新：Duolingo（總分加分項）、PTE（Academic 與 Express）、TOEFL iBT（新增 1–6 級分）欄位；AP 新增 Business with Personal Finance、Cybersecurity、Networking（A1-S1、S7）。', 'Self-report your best scores regardless of Score Choice; sending official reports where a college requires them remains your responsibility (A1-S41). 2026–27 updates: Duolingo (overall + subscores), PTE (Academic and Express), TOEFL iBT (1–6 band added); new AP subjects Business with Personal Finance, Cybersecurity, Networking (A1-S1, S7).'),
    src: ['A1-S1', 'A1-S6', 'A1-S7', 'A1-S41'],
    groups: [
      { id: 'gate', label: z('是否自報', 'Self-report'), fields: [
        F('report', z('除了依學校要求寄送正式成績外，是否要自報成績或未來考試日期（ACT、SAT、AP、IB、Cambridge、TOEFL、PTE Academic、IELTS、Duolingo English Test）？', 'In addition to sending official score reports as required by colleges, do you wish to self-report scores or future test dates for ACT, SAT, AP, IB, Cambridge, TOEFL, PTE Academic, IELTS, or Duolingo English Test?'), 'radio', { required: true, options: YN, src: ['A1-S6'] })
      ] },
      { id: 'sat', label: z('SAT（過去考試，最多 5 次）', 'SAT (past sittings, up to 5)'), src: ['A1-S6'], repeat: { max: 5, itemLabel: z('SAT 場次', 'SAT sitting') }, fields: [
        F('date', z('考試日期', 'Date taken'), 'date', { required: true }),
        F('ebrw', z('Evidence-Based Reading and Writing', 'Evidence-Based Reading and Writing'), 'number', { required: true }),
        F('math', z('Math', 'Math'), 'number', { required: true })
      ] },
      { id: 'act', label: z('ACT（過去考試，最多 5 次）', 'ACT (past sittings, up to 5)'), src: ['A1-S6'], repeat: { max: 5, itemLabel: z('ACT 場次', 'ACT sitting') }, fields: [
        F('date', z('考試日期', 'Date taken'), 'date', { required: true }),
        F('composite', z('Composite', 'Composite'), 'number', { required: true })
      ] },
      { id: 'futureTests', label: z('未來考試日期（SAT/ACT 各最多 3 次）', 'Future test dates (up to 3 per SAT/ACT)'), src: ['A1-S6'], repeat: { max: 3, itemLabel: z('未來場次', 'Future sitting') }, fields: [
        F('test', z('考試', 'Test'), 'select', { required: true, options: ['SAT', 'ACT'] }),
        F('date', z('日期', 'Date'), 'date', { required: true })
      ] },
      { id: 'ap', label: z('AP（最多 15 科）', 'AP (up to 15 tests)'), src: ['A1-S6'], repeat: { max: 15, itemLabel: z('AP 科目', 'AP test') }, fields: [
        F('subject', z('科目', 'Subject'), 'text', { required: true }),
        F('score', z('分數', 'Score'), 'select', { options: ['1', '2', '3', '4', '5'] }),
        F('date', z('日期', 'Date'), 'date', {})
      ] },
      { id: 'ib', label: z('IB（最多 10 科）', 'IB (up to 10 subjects)'), src: ['A1-S6'], repeat: { max: 10, itemLabel: z('IB 科目', 'IB subject') }, fields: [
        F('subject', z('科目與程度', 'Subject and level'), 'text', { required: true }),
        F('score', z('分數', 'Score'), 'text', {})
      ] },
      { id: 'english', label: z('英語能力考試', 'English proficiency tests'), src: ['A1-S1', 'A1-S7'], fields: [
        F('toefl', z('TOEFL iBT（總分與四項分數）', 'TOEFL iBT (overall and section scores)'), 'text', { help: z('2026–27 起選單加入 1–6 級分（A1-S1、S7）。', 'From 2026–27 the choice list includes the 1–6 band (A1-S1, S7).') }),
        F('ielts', z('IELTS', 'IELTS'), 'text', {}),
        F('det', z('Duolingo English Test（總分與分項）', 'Duolingo English Test (overall and subscores)'), 'text', {}),
        F('pte', z('PTE（Academic 或 Express）', 'PTE (Academic or Express)'), 'text', {})
      ] },
      { id: 'leavingQ', label: z('畢業會考', 'Leaving examinations'), fields: [
        F('based', z('你所在的教育體制是否以標準化畢業會考決定升級？', 'Is promotion within your educational system based upon standard leaving examinations?'), 'radio', { options: YN, src: ['A1-S28', 'A1-S6'], help: z('答「是」會開啟會考子區塊：最多 10 筆，可從 30 個考試機構或 Other 中選（A1-S28）。', '"Yes" opens the leaving-exam subsection: up to 10 entries, from 30 boards or "Other" (A1-S28).') })
      ] },
      { id: 'leaving', label: z('會考成績（最多 10 筆）', 'Leaving exam results (up to 10)'), src: ['A1-S6', 'A1-S28'], repeat: { max: 10, itemLabel: z('會考科目', 'Exam subject') }, fields: [
        F('board', z('考試機構', 'Examination board'), 'text', { required: true, help: DROPDOWN }),
        F('subject', z('科目', 'Subject'), 'text', { required: true, limit: { chars: 30 }, hardMax: true, src: ['A1-S6'] }),
        F('score', z('成績', 'Score'), 'text', { limit: { chars: 5 }, hardMax: true, src: ['A1-S6'] })
      ] }
    ]
  });

  // ---------- Activities and experiences
  M.sections.push({
    id: 'activities',
    label: z('Activities and experiences 活動與經歷', 'Activities and experiences'),
    blurb: z('最多 10 項；角色 50、組織 100、描述 150 字元。另含必填的 Responsibilities and circumstances。', 'Up to 10; role 50, organization 100, description 150 characters. Includes the required Responsibilities and circumstances.'),
    intro: z('2026–27 起改名為 “Activities and experiences”（A1-S4）。表單說明：自學或非正式團體的活動也可以填，以高中以後的活動為主（A1-S6、S12）。職位欄改為選填，並藏在「是否有特定職位或領導角色」的是否題後面；50/100/150 字元上限不變（A1-S1、S7）。每項活動各欄是否必填，A1 筆記未列出，這裡不加星號。', 'Renamed "Activities and experiences" for 2026–27 (A1-S4). The form says self-taught activities and ones outside an official group are welcome, with a focus on high school and later (A1-S6, S12). The position field became optional, behind a yes/no "specific position or leadership role" question; the 50/100/150-character limits did not change (A1-S1, S7). Which per-activity fields are required is not listed in the A1 note, so none carries an asterisk here.'),
    src: ['A1-S1', 'A1-S4', 'A1-S6', 'A1-S7', 'A1-S31'],
    groups: [
      { id: 'gate', label: z('是否填寫活動', 'Report activities'), fields: [
        F('any', z('是否要填寫任何活動？', 'Would you like to report any activities?'), 'radio', { required: true, options: YN, src: ['A1-S6'] })
      ] },
      { id: 'list', label: z('活動', 'Activities'), src: ['A1-S6', 'A1-S31'],
        outside: z('校外多年紀錄最常落在這裡，但每項只有 150 字元描述。一項多年計畫寫成一筆：用 hours/week × weeks/year 承載總時數，角色寫在 50 字元欄，成果一句話；細節與可查證連結移到 Additional information（300 words），由督導人以 Other Recommender 信件作證（C1 §C2、A1-S31）。', 'A multi-year outside record most often lands here, but each entry has only 150 characters of description. Write one multi-year project as one entry: hours/week × weeks/year carries the total time, the 50-character field carries the role, and one sentence carries the result; move detail and verifiable links to Additional information (300 words) and let a supervisor attest in an Other Recommender letter (C1 §C2, A1-S31).'),
        repeat: { max: 10, itemLabel: z('活動', 'Activity') }, fields: [
          F('type', z('活動或經歷類型', 'Activity or experience type'), 'select', { options: ACT_TYPES, src: ['A1-S6', 'A1-S7'], help: z('31 種類型；“Hobby” 為 2026–27 新增（A1-S7）。', '31 types; "Hobby" is new for 2026–27 (A1-S7).') }),
          F('hasRole', z('是否有特定職位或領導角色？', 'Did you have a specific position or leadership role?'), 'radio', { options: YN, src: ['A1-S6', 'A1-S7'] }),
          F('role', z('你的角色是什麼？', 'What was your role?'), 'text', { limit: { chars: 50 }, hardMax: true, showIf: { field: 'hasRole', equals: 'yes' }, src: ['A1-S6', 'A1-S8', 'A1-S31'] }),
          F('org', z('組織或團體（如有）', 'Organization or group (if applicable)'), 'text', { limit: { chars: 100 }, hardMax: true, src: ['A1-S6', 'A1-S31'] }),
          F('desc', z('描述這項活動或經歷，包括你的成果與獲得的肯定', 'Describe this activity or experience, including what you accomplished and any recognition you received.'), 'textarea', { rows: 3, limit: { chars: 150 }, hardMax: true, src: ['A1-S6', 'A1-S31'] }),
          F('grades', z('參與時間', 'When did you participate?'), 'checks', { options: ['9th', '10th', '11th', '12th', o('after', '高中畢業後', 'After graduating high school')], src: ['A1-S6', 'A1-S7'] }),
          F('timing', z('高中期間的時段', 'During high school: time of year'), 'checks', { options: [o('school', '學期中', 'During the school year'), o('break', '學校假期', 'During school break'), o('all', '全年', 'All year')], src: ['A1-S6', 'A1-S7'] }),
          F('hours', z('每週時數', 'Hours spent per week'), 'text', { limit: { chars: 5 }, hardMax: true, src: ['A1-S6'], help: z('可接受的數值範圍未載明，只知欄位長度 5 字元（A1-S6）。', 'The accepted numeric range is not stated beyond the 5-character field length (A1-S6).') }),
          F('weeks', z('每年週數', 'Weeks spent per year'), 'text', { limit: { chars: 5 }, hardMax: true, src: ['A1-S6'] }),
          F('college', z('大學時是否打算繼續？', 'Do you plan on participating in this activity in college?'), 'radio', { options: [o('yes', '是', 'Yes'), o('no', '否', 'No'), o('unsure', '不確定', 'Not sure')], src: ['A1-S6', 'A1-S7'] })
        ] },
      { id: 'responsibilities', label: z('Responsibilities（每週 4 小時以上）', 'Responsibilities (4+ hours per week)'), src: ['A1-S6', 'A1-S12', 'A1-S32'],
        intro: z('必填，每位申請者都會看到；前身是試辦的 Student Context Inventory（A1-S32）。', 'Required for every applicant; it began as the Student Context Inventory pilot (A1-S32).'),
        fields: [
          F('items', z('下列責任中，哪些每週占用你 4 小時以上？', 'Which of these responsibilities take 4 or more hours of your time per week?'), 'checks', { required: true, src: ['A1-S6', 'A1-S12'], options: [
            o('admin', '協助家人處理看診、銀行或簽證等事務', 'Assisting family with appointments, banking or visa tasks'),
            o('farm', '在農場或家族事業做無薪工作', 'Unpaid work on a farm or in a family business'),
            o('interp', '為家人口譯或翻譯', 'Interpreting or translating'),
            o('finance', '管理家庭財務', 'Managing household finances'),
            o('transport', '接送家人', 'Providing transportation'),
            o('care', '照顧生病、身障或年長的家人', 'Caring for sick, disabled or elderly family members'),
            o('younger', '照顧年幼的家人', 'Caring for younger family members'),
            o('child', '照顧自己的孩子', 'Caring for your own child'),
            o('job', '收入補貼家用的有薪工作', 'Paid job contributing to household income'),
            o('other', '其他', 'Other'),
            o('none', '以上皆無', 'None of these')] }),
          F('other', z('其他（請說明）', 'Other (describe)'), 'text', { limit: { chars: 150 }, hardMax: true, src: ['A1-S6'] })
        ] },
      { id: 'circumstances', label: z('Circumstances', 'Circumstances'), src: ['A1-S6', 'A1-S12'], fields: [
        F('items', z('下列情況是否適用於你？', 'Do any of these circumstances apply to you?'), 'checks', { required: true, src: ['A1-S6', 'A1-S12'], options: [
          o('commute', '單程通勤 60 分鐘以上', 'Commuting 60+ minutes each way'),
          o('housing', '無家可歸或居住不穩定', 'Homelessness or unstable housing'),
          o('basic', '缺乏穩定的暖氣、電、水或食物', 'Living without consistent heat, power, water or food'),
          o('internet', '缺乏可靠網路', 'Without reliable internet'),
          o('indep', '獨立生活（不含寄宿學校）', 'Living independently (not at a boarding school)'),
          o('none', '以上皆無', 'None of these')] })
      ] }
    ]
  });

  // ---------- Writing
  var PROMPTS = [
    ['1', '背景、身分、興趣或才能：如果某件事重要到少了它申請就不完整，寫下你的故事。', 'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.'],
    ['2', '挫折：講一次你面對挑戰、挫敗或失敗的經驗，它如何影響你、你學到什麼。', 'The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?'],
    ['3', '質疑：回想你曾質疑或挑戰某個信念或想法的時候，起因與結果。', 'Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?'],
    ['4', '感謝：別人為你做的某件事，以出乎意料的方式讓你快樂或感激，這份感謝如何影響你。', 'Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?'],
    ['5', '成長：一項成就、事件或體悟，開啟一段個人成長，讓你重新認識自己或他人。', 'Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.'],
    ['6', '著迷：讓你忘記時間的主題、想法或概念，為什麼吸引你，你向誰或什麼求教。', 'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?'],
    ['7', '自選主題：可以是寫過的文章、回應其他題目的文章，或你自己設計的題目。', 'Share an essay on any topic of your choice. It can be one you’ve already written, one that responds to a different prompt, or one of your own design.']
  ].map(function (p) { return { v: p[0], label: z('題目 ' + p[0] + '：' + p[1], p[0] + '. ' + p[2]) }; });

  M.sections.push({
    id: 'writing',
    label: z('Writing 寫作', 'Writing'),
    blurb: z('Personal essay 250–650 words；Challenges and circumstances 250 words；Additional information 300 words。', 'Personal essay 250–650 words; Challenges and circumstances 250 words; Additional information 300 words.'),
    intro: z('2026–27 的七個題目與 2025–26 相同（A1-S1、S3）。中文題目是本站摘要，英文是官方原文（A1-S2）。各校自行決定是否要求 personal essay；不要求的學校，送出時會讓你選擇要不要附上（A1-S6、S35）。第一次送出後，essay 可無限次修改供之後的學校使用；已送出的申請不能改（A1-S40、S39）。', 'The seven 2026–27 prompts are unchanged from 2025–26 (A1-S1, S3). The Chinese lines are this site’s summaries; the English is the official text (A1-S2). Each college decides whether the essay is required; where it is not, you choose at submission whether to include it (A1-S6, S35). After the first submission the essay can be edited without limit for later colleges; a submitted application cannot be changed (A1-S40, S39).'),
    src: ['A1-S1', 'A1-S2', 'A1-S3', 'A1-S6', 'A1-S12'],
    groups: [
      { id: 'essay', label: z('Personal essay', 'Personal essay'), fields: [
        F('prompt', z('選擇題目', 'Choose a prompt'), 'radio', { required: true, options: PROMPTS, src: ['A1-S2'] }),
        F('text', z('Essay（250–650 words）', 'Essay (250–650 words)'), 'textarea', { required: true, wide: true, rows: 18, limit: { words: 650, minWords: 250 }, src: ['A1-S6', 'A1-S12'], help: z('PDF 版說明：650 是上限，不是目標（A1-S12）。', 'The PDF says 650 words is your limit, not your goal (A1-S12).') })
      ] },
      { id: 'challenges', label: z('Challenges and circumstances', 'Challenges and circumstances'), src: ['A1-S6', 'A1-S9', 'A1-S12'],
        intro: z('2025–26 起取代原本的 community disruption（COVID-19）題。題目舉的例子包括讀書空間、科技與網路、社區動盪、歧視、家庭變故、家庭責任（caregiving、經濟支援）、居住不穩、軍事派駐、天災、身心健康、戰爭等（A1-S12）。', 'Since 2025–26 this replaces the community-disruption (COVID-19) question. The prompt’s examples include study space, technology and internet, community disruption, discrimination, family disruptions, family obligations (caregiving, financial support), housing instability, military deployment, natural disasters, physical and mental health, war (A1-S12).'),
        fields: [
          F('any', z('是否要說明你經歷過的挑戰或其他情況？', 'Would you like to share any details about challenges or other circumstances you’ve experienced?'), 'radio', { required: true, options: YN, src: ['A1-S6'] }),
          F('text', z('說明（1–250 words）', 'Details (1–250 words)'), 'textarea', { wide: true, rows: 8, limit: { words: 250, minWords: 1 }, showIf: { field: 'any', equals: 'yes' }, required: true, src: ['A1-S6', 'A1-S12'] })
        ] },
      { id: 'addinfo', label: z('Additional information', 'Additional information'), src: ['A1-S6', 'A1-S9', 'A1-S10', 'A1-S12'],
        intro: z('上限是 300 words，不是常被引用的 650：650 是 2024–25 以前的版本（A1-S10、S9、S6）。', 'The limit is 300 words, not the often-quoted 650: 650 was the 2024–25 field (A1-S10, S9, S6).'),
        outside: z('主表裡唯一能用文字交代校外多年紀錄的地方：時間軸、督導關係、自己做了哪部分（可用 CRediT 角色）、公開且有時間戳的連結（例如 iGEM 凍結的 Wiki 與 Attributions 頁）。300 words 大約容納兩到三個計畫。這裡只承載申請者自己的說法；第三方證明要靠推薦信（C1 §C2、§C3）。', 'The only place in the common sections where an outside multi-year record can be explained in prose: timeline, supervision, which part was yours (CRediT roles work), and public time-stamped links (e.g. a frozen iGEM wiki and its Attributions page). 300 words holds roughly two or three projects. It carries only the applicant’s own statement; third-party attestation needs a letter (C1 §C2, §C3).'),
        fields: [
          F('any', z('是否要補充申請表其他部分沒有呈現的細節或資格？', 'Would you like to share any additional details or qualifications not reflected in the application?'), 'radio', { required: true, options: YN, src: ['A1-S6'] }),
          F('text', z('補充資訊（1–300 words）', 'Additional information (1–300 words)'), 'textarea', { wide: true, rows: 10, limit: { words: 300, minWords: 1 }, showIf: { field: 'any', equals: 'yes' }, required: true, src: ['A1-S6', 'A1-S12'] })
        ] }
    ]
  });

  // ---------- Courses & Grades
  M.sections.push({
    id: 'courses',
    label: z('Courses & Grades 課程與成績', 'Courses & Grades'),
    blurb: z('只有要求它的學校才需要。本站 30 校中在名單上的是 Stanford、Carnegie Mellon、Purdue、Amherst。', 'Needed only for colleges that require it. Of this site’s 30 schools, Stanford, Carnegie Mellon, Purdue and Amherst are on the list.'),
    intro: z('Common App 目前的名單共 76 筆；不在名單上的學校不用填（A1-S30）。本站 30 校中在名單上的是 Stanford、Carnegie Mellon、Purdue、Amherst；其餘 26 校不在（A1-S30）。依高中成績單原樣填寫；不在高中成績單上的大學課程不填這裡（A1-S29）。各欄字元上限在另一份 Courses & Grades data catalog，本站尚未下載，所以這裡不設上限（A1 §3a）。', 'Common App’s current list has 76 entries; colleges not on it do not need this section (A1-S30). Of this site’s 30 schools, Stanford, Carnegie Mellon, Purdue and Amherst are on the list; the other 26 are not (A1-S30). Report courses as they appear on your high-school transcript; college courses not on that transcript do not go here (A1-S29). Per-field character limits are in a separate Courses & Grades data catalog this site has not downloaded, so no limits are set here (A1 §3a).'),
    src: ['A1-S29', 'A1-S30'],
    groups: [
      { id: 'school', label: z('學校與學制', 'School and scale'), fields: [
        F('name', z('學校名稱', 'School name'), 'text', { required: true, src: ['A1-S29'] }),
        F('year', z('學年', 'School year'), 'text', { required: true, src: ['A1-S29'] }),
        F('scale', z('評分方式', 'Grading scale'), 'text', { required: true, src: ['A1-S29'] }),
        F('schedule', z('學制', 'Schedule'), 'text', { required: true, src: ['A1-S29'] })
      ] },
      { id: 'list', label: z('課程', 'Courses'), src: ['A1-S29'],
        intro: z('每列都要有科目、課名、程度、至少一個成績、至少一個學分（A1-S29）。上限 30 列是這個模擬頁自己的顯示上限，不是 Common App 的規定（未載明）。', 'Each row needs subject, course name, level, at least one grade and at least one credit (A1-S29). The 30-row cap is this mock’s display cap, not a Common App limit (not stated).'),
        repeat: { max: 30, min: 1, itemLabel: z('課程', 'Course') }, fields: [
          F('subject', z('科目', 'Subject'), 'text', { required: true }),
          F('name', z('課名', 'Course name'), 'text', { required: true }),
          F('level', z('程度', 'Level'), 'select', { required: true, options: LEVELS }),
          F('grade', z('成績', 'Grade'), 'text', { required: true }),
          F('credit', z('學分', 'Credit'), 'text', { required: true })
        ] }
    ]
  });

  // ================================================================ COLLEGES
  function plan(opts, src) { return F('plan', z('申請方案', 'Admission plan'), 'radio', { required: true, options: opts, src: src }); }
  function sq(id, zhL, enL, max, min, src, extra) {
    var f = F(id, z(zhL, enL), 'textarea', { required: true, wide: true, rows: max > 200 ? 8 : 4, limit: min ? { words: max, minWords: min } : { words: max }, src: src });
    for (var k in extra || {}) f[k] = extra[k];
    return f;
  }

  M.colleges = [
    // ---- Stanford
    { id: 'stanford', name: z('Stanford University', 'Stanford University'),
      blurb: z('REA／RD；$100；5 題短答（3–50 words）＋ 3 篇短文（100–250 words）；兩位學科老師；需填 Courses & Grades。', 'REA/RD; $100; five short questions (3–50 words) and three short essays (100–250 words); two academic teachers; requires Courses & Grades.'),
      src: ['A5a-S15', 'A5a-S16'],
      facts: [
        { t: z('報名費 $100，不退；接受 Common App fee waiver，對象為「所有符合資格的學生，美國與非美國」，需輔導老師線上確認或寄 NACAC 表。', 'Fee $100, nonrefundable; accepts the Common App fee waiver for all eligible students, U.S. and non-U.S., with counselor verification online or a NACAC form.'), tag: 'f', src: ['A5a-S19'] },
        { t: z('申請的是大學，不分系；填的 prospective major 不具約束力。', 'You apply to the university, not to a major; prospective majors are non-binding.'), tag: 'f', src: ['A5a-S16'] },
        { t: z('Stanford 在 Common App 的 Courses & Grades 名單上。', 'Stanford is on Common App’s Courses & Grades list.'), tag: 'f', src: ['A1-S30'] },
        { t: z('2026–27 需繳 SAT 或 ACT。', 'SAT or ACT required for 2026–27.'), tag: 'f', src: ['A3a-S19'] },
        { t: z('選擇性的校友面試，限面試地區；面試報告會進入申請檔案。', 'Optional alumni interview in interview areas; the report becomes part of the file.'), tag: 'f', src: ['A5a-S18'] },
        { t: z('對國際公民，申請助學金「會是入學評估的因素之一」（need-aware）。', 'For international citizens, a financial-aid request is a factor in the admission evaluation (need-aware).'), tag: 'f', src: ['A3a-S24'] }
      ],
      deadlines: [
        { plan: 'REA', date: z('2026-11-01（含藝術作品集：Common App 10-15）', '2026-11-01 (with arts portfolio: Common App by 10-15)'), src: ['A3a-S18'] },
        { plan: 'RD', date: z('2027-01-05（含藝術作品集：Common App 12-05）', '2027-01-05 (with arts portfolio: Common App by 12-05)'), src: ['A3a-S18'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('REA', 'Restrictive Early Action（REA）', 'Restrictive Early Action (REA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S18']),
          F('major1', z('第一個 prospective major（不具約束力）', 'First prospective major (non-binding)'), 'text', { required: true, src: ['A5a-S16'], help: DROPDOWN }),
          F('major2', z('第二個 prospective major（選填）', 'Second prospective major (optional)'), 'text', { src: ['A5a-S16'] })
        ] }
      ],
      supplementIntro: z('頁面沒有標註申請季，但寫著 “Updated on July 21, 2026”；題目為本站轉述（A5a-S16）。', 'The page carries no cycle label but reads "Updated on July 21, 2026"; prompts are paraphrased here (A5a-S16).'),
      supplement: [
        { id: 'short', label: z('短答（各 3–50 words）', 'Short questions (3–50 words each)'), src: ['A5a-S16'], fields: [
          sq('society', '你認為當今社會面對的最重大挑戰是什麼？', 'What is the most significant challenge that society faces today?', 50, 3, ['A5a-S16']),
          sq('summers', '你過去兩個暑假怎麼度過？', 'How did you spend your last two summers?', 50, 3, ['A5a-S16']),
          sq('history', '你希望親眼見證的一個歷史時刻？', 'What historical moment or event do you wish you could have witnessed?', 50, 3, ['A5a-S16']),
          sq('extra', '簡述一項課外活動、工作或家庭責任。', 'Briefly elaborate on one extracurricular activity, job, or family responsibility.', 50, 3, ['A5a-S16']),
          sq('five', '列出對你重要的五件事。', 'List five things that are important to you.', 50, 3, ['A5a-S16'])
        ] },
        { id: 'essays', label: z('短文（各 100–250 words）', 'Short essays (100–250 words each)'), src: ['A5a-S16'], fields: [
          sq('learning', '一個讓你對學習真正感到興奮的想法或經驗。', 'An idea or experience that makes you genuinely excited about learning.', 250, 100, ['A5a-S16']),
          sq('roommate', '寫一封信給未來的室友，讓對方認識你。', 'A note to your future roommate that reveals something about you.', 250, 100, ['A5a-S16']),
          sq('contribution', '你的生活經驗、興趣與性格中，哪些面向能為 Stanford 帶來獨特貢獻？', 'Aspects of your life experiences, interests and character that would make a distinctive contribution to Stanford.', 250, 100, ['A5a-S16'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S17'] },
        teacher: { min: 2, max: 2, src: ['A5a-S17'], note: z('兩位學科老師，最好是 11 或 12 年級，科目為英文、數學、科學、外語或歷史／社會；Honors/AP/IB 課程可用 10 年級老師（A5a-S17）。', 'Two academic teachers, preferably grade 11 or 12, in English, math, science, world language or history/social studies; grade 10 is allowed for Honors/AP/IB coursework (A5a-S17).') },
        other: { min: 0, max: 1, src: ['A5a-S17'], note: z('可多加一封，來自「能提供新觀點」的人，在 Common App 以 Other Recommender 邀請（A5a-S17）。', 'One additional letter allowed, from someone who can offer new insights, invited as an Other Recommender (A5a-S17).') }
      } },

    // ---- Johns Hopkins
    { id: 'jhu', name: z('Johns Hopkins University', 'Johns Hopkins University'),
      blurb: z('ED I／ED II／RD；$70；一篇 350 words；兩位不同科目的老師；不提供面試。', 'ED I / ED II / RD; $70; one 350-word essay; two teachers of different subjects; no interviews.'),
      src: ['A5b-S13'],
      facts: [
        { t: z('可用 Common App 或 Scoir 上的 Coalition 申請；報名費 $70 或 fee waiver。', 'Common App or Coalition on Scoir; $70 fee or a fee waiver.'), tag: 'f', src: ['A5b-S13'] },
        { t: z('國際生的申請費減免規則未載明；國際頁只說不提供 CSS Profile 費用減免。', 'Application-fee waiver for international applicants: not stated; the international page says only that it does not provide CSS fee waivers.'), tag: 'f', src: ['A5b-S15'] },
        { t: z('Biomedical engineering 必須列為第一志願主修。', 'Biomedical engineering must be listed as the first-choice major.'), tag: 'f', src: ['A5b-S13', 'A5b-S14'] },
        { t: z('「我們不提供面試。」', 'No interviews are offered.'), tag: 'f', src: ['A5b-S14'] },
        { t: z('送出後可透過 applicant portal 補交研究摘要等資料，前提是提供新資訊。', 'After submitting, material such as research abstracts may be added through the applicant portal if it adds something new.'), tag: 'f', src: ['A5b-S14'] },
        { t: z('所有國際公民都要在截止前透過 applicant portal 交 COF。', 'Every international citizen must submit a COF through the applicant portal before the deadline.'), tag: 'f', src: ['A3b-S13'] }
      ],
      deadlines: [
        { plan: 'EDI', date: z('2026-11-01', '2026-11-01'), src: ['A3b-S11'] },
        { plan: 'EDII', date: z('2027-01-02', '2027-01-02'), src: ['A3b-S11'] },
        { plan: 'RD', date: z('2027-01-02', '2027-01-02'), src: ['A3b-S11'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('EDI', 'Early Decision I', 'Early Decision I'), o('EDII', 'Early Decision II', 'Early Decision II'), o('RD', 'Regular Decision', 'Regular Decision')], ['A3b-S11']),
          F('major1', z('第一志願主修', 'First-choice academic interest'), 'text', { required: true, src: ['A5b-S13'], help: z('BME 必須是第一志願；錄取取決於「資格與名額」（A5b-S13、S14）。', 'BME must be the first choice; admission depends on credentials and space available (A5b-S13, S14).') }),
          F('major2', z('第二志願主修（選填）', 'Second academic interest (optional)'), 'text', { help: DROPDOWN })
        ] }
      ],
      supplementIntro: z('2026–27 補充文章一篇；題目為本站轉述（A5b-S13）。', 'One 2026–27 supplement essay; prompt paraphrased here (A5b-S13).'),
      supplement: [
        { id: 'essay', label: z('補充文章（350 words）', 'Supplement essay (350 words)'), src: ['A5b-S13'], fields: [
          sq('bridges', '你從與不同的人相處中學到什麼？這如何影響你看待搭起橋梁、與他人合作？', 'What have you learned about engaging across differences, and how does it shape the way you think about building bridges and working with others?', 350, 0, ['A5b-S13'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5b-S13'] },
        teacher: { min: 2, max: 2, src: ['A5b-S13'], note: z('兩位老師，教「兩個不同學科」（A5b-S13）。', 'Two teachers "of two different academic subjects" (A5b-S13).') },
        other: { min: 0, max: null, src: ['A5b-S13'], note: z('JHU 說選填的 “additional recommendations” 透過自己的 applicant portal 上傳；是否接受 Common App 的 Other Recommender 未載明（checked 2026-11-07）。', 'JHU says optional "additional recommendations" are uploaded through its own applicant portal; whether it accepts Common App Other Recommenders is not stated (checked 2026-11-07).') }
      } },

    // ---- Cornell
    { id: 'cornell', name: z('Cornell University', 'Cornell University'),
      blurb: z('ED／RD；$85；直接申請其中一個學院，寫作補充依學院不同；兩位老師。', 'ED/RD; $85; apply directly to one college or school, with that college’s essays; two teachers.'),
      src: ['A5a-S53'],
      facts: [
        { t: z('報名費 $85；fee waiver 依 Common App 標準加上 Cornell 自己的資格題，「自動套用」。國際生的減免規則未載明。', 'Fee $85; waiver via Common App criteria plus Cornell’s own eligibility questions, applied automatically. International waiver rule: not stated.'), tag: 'f', src: ['A5a-S53'] },
        { t: z('國際生入學為 need-aware。', 'International admission is need-aware.'), tag: 'f', src: ['A5a-S53'] },
        { t: z('First-year 頁只描述各學院自己的 essay，沒有提到全校共同 essay（checked 2026-11-07）。', 'The first-year page describes only college-specific essays; no university-wide essay is mentioned (checked 2026-11-07).'), tag: 'f', src: ['A5a-S53'] },
        { t: z('CALS：生物與化學為必修；Biological Sciences 等主修另須微積分。', 'CALS: biology and chemistry required; calculus also required for Biological Sciences and other majors.'), tag: 'f', src: ['A5a-S56'] },
        { t: z('ED 的其他資料截止 11-13，RD 為 01-19。', 'Other materials due Nov 13 (ED) and Jan 19 (RD).'), tag: 'f', src: ['A3a-S62', 'A3a-S63'] },
        { t: z('頁面未標註申請季；本站視為 2026–27，因為 2026-11-07 仍在線上。', 'Pages carry no cycle label; taken as 2026–27 because live on 2026-11-07.'), tag: 'a', src: ['A5a-S53'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-01', '2026-11-01'), src: ['A3a-S62', 'A3a-S63'] },
        { plan: 'RD', date: z('2027-01-02', '2027-01-02'), src: ['A3a-S62', 'A3a-S63'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S62']),
          F('school', z('申請的學院', 'College or school'), 'radio', { required: true, src: ['A5a-S53'], options: [
            o('cals', 'College of Agriculture and Life Sciences（CALS）', 'College of Agriculture and Life Sciences (CALS)'),
            o('aap', 'College of Architecture, Art, and Planning（AAP）', 'College of Architecture, Art, and Planning (AAP)'),
            o('as', 'College of Arts and Sciences', 'College of Arts and Sciences'),
            o('eng', 'Duffield College of Engineering', 'Duffield College of Engineering'),
            o('he', 'College of Human Ecology', 'College of Human Ecology'),
            o('brooks', 'Brooks School of Public Policy', 'Brooks School of Public Policy'),
            o('hotel', 'Nolan School of Hotel Administration', 'Nolan School of Hotel Administration'),
            o('dyson', 'Dyson School of Applied Economics and Management', 'Dyson School of Applied Economics and Management'),
            o('ilr', 'ILR School', 'ILR School')] }),
          F('major', z('主修（CALS 直接申請主修）', 'Major (CALS applicants apply directly to a major)'), 'text', { required: true, src: ['A5a-S56'] })
        ] }
      ],
      supplementIntro: z('只會顯示你在「學校題目」選的學院的 essay。這裡收錄有完整題目與字數的三個學院；Brooks、AAP、ILR、SC Johnson 只取得字數（A5a-S58–S61），未收錄。題目為本站轉述。', 'Only the essays for the college chosen under Questions are shown. Included here are the three colleges whose prompts and limits are captured; for Brooks, AAP, ILR and SC Johnson only limits were captured (A5a-S58–S61), so they are not modelled. Prompts are paraphrased.'),
      supplement: [
        { id: 'cals', label: z('CALS（2 篇，各 350 words）', 'CALS (two essays, 350 words each)'), src: ['A5a-S56'], fields: [
          sq('major', '你對所選主修的興趣從何而來，CALS 如何幫你實現。', 'Why you are interested in the major you selected, and how CALS will help you pursue it.', 350, 0, ['A5a-S56'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'cals' } }),
          sq('why', '是什麼吸引你來到 CALS。', 'What draws you to CALS.', 350, 0, ['A5a-S56'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'cals' } })
        ] },
        { id: 'eng', label: z('Duffield Engineering（2×200 + 4×100 words）', 'Duffield Engineering (2 × 200 + 4 × 100 words)'), src: ['A5a-S54'], fields: [
          sq('whyEng', '你為什麼想讀工程？', 'Why do you want to study engineering?', 200, 0, ['A5a-S54'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'eng' } }),
          sq('whyDuffield', '你為什麼會喜歡在 Duffield Engineering 讀書？', 'Why do you think you would love to study at Duffield Engineering?', 200, 0, ['A5a-S54'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'eng' } }),
          sq('joy', '什麼帶給你快樂？', 'What brings you joy?', 100, 0, ['A5a-S54'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'eng' } }),
          sq('community', '你會為 Duffield 社群帶來什麼？', 'Your contribution to the Duffield community.', 100, 0, ['A5a-S54'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'eng' } }),
          sq('activity', '一項對你有意義的活動或責任。', 'One meaningful activity or responsibility.', 100, 0, ['A5a-S54'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'eng' } }),
          sq('award', '一項對你有意義的獎項或成就。', 'One meaningful award or achievement.', 100, 0, ['A5a-S54'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'eng' } })
        ] },
        { id: 'as', label: z('Arts and Sciences（1 篇，650 words）', 'Arts and Sciences (one essay, 650 words)'), src: ['A5a-S55'], fields: [
          sq('passion', '一項學術熱情，以及你會運用文理課程的哪些部分。', 'An intellectual passion and the parts of the liberal arts curriculum you would draw on.', 650, 0, ['A5a-S55'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'as' } })
        ] },
        { id: 'he', label: z('Human Ecology（1 篇，550 words）', 'Human Ecology (one essay, 550 words)'), src: ['A5a-S57'], fields: [
          sq('exp', '一段課外、社區或工作經驗，與學院使命和你的主修有何關聯。', 'An extracurricular, community or work experience and how it connects to the college’s mission and your intended major.', 550, 0, ['A5a-S57'], { showIf: { path: 'col.cornell.questions.general.school', equals: 'he' } })
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S53'] },
        teacher: { min: 2, max: 2, src: ['A5a-S53', 'A5a-S54'], note: z('所有學院都要兩位老師。Duffield Engineering：其中一位必須教數學、科學或資訊；另一位不限科目。CALS 沒有科目規定（A5a-S54、S56）。', 'Two teachers for all colleges. Duffield Engineering: one must teach math, science or computer science; the other may be any subject. CALS sets no subject rule (A5a-S54, S56).') },
        other: { min: 0, max: null, src: ['A5a-S53'], note: z('是否接受額外推薦信：未載明（checked 2026-11-07）。', 'Optional additional letters: not stated (checked 2026-11-07).') }
      } },

    // ---- Carnegie Mellon
    { id: 'cmu', name: z('Carnegie Mellon University', 'Carnegie Mellon University'),
      blurb: z('只用 Common App；ED／RD；$75；3 題短答，各不超過 300 words；一位老師加一位輔導老師。', 'Common App only; ED/RD; $75; three short answers of up to 300 words; one teacher plus the counselor.'),
      src: ['A5a-S65a', 'A5a-S67'],
      facts: [
        { t: z('「Carnegie Mellon 只使用 Common Application。」', 'Carnegie Mellon uses the Common Application exclusively.'), tag: 'f', src: ['A5a-S65a'] },
        { t: z('報名費 $75；符合 Common App 經濟需求指標者可用 fee waiver。國際生規則未載明。', 'Fee $75; accepts fee waivers for students meeting a Common App economic-need indicator. International rule: not stated.'), tag: 'f', src: ['A5a-S65'] },
        { t: z('ED 截止日在 CMU 自己的頁面上有三種寫法：11 月 1、2、3 日。本站建議以 11 月 1 日為安全日期。', 'CMU’s own pages give three ED deadlines: November 1, 2 and 3. The safe date is November 1.'), tag: 'i', src: ['A5a-S68', 'A5a-S69'] },
        { t: z('不收履歷、作品、網站等補充資料（College of Fine Arts 除外）；Engineering 與 SCS 申請者可選擇 VIVA 專題影片評量。', 'No supplemental submissions such as resumes, artwork or websites (except Fine Arts); Engineering and SCS applicants may use optional VIVA project-video assessments.'), tag: 'f', src: ['A5a-S65'] },
        { t: z('「Carnegie Mellon 不提供國際學生助學金。」', 'Carnegie Mellon does not offer financial aid to international students.'), tag: 'f', src: ['A3a-S74'] },
        { t: z('ED 申請者只能申請一個學院。', 'ED applicants can apply to only one college within the university.'), tag: 'f', src: ['A5a-S69'] }
      ],
      deadlines: [
        { plan: 'ED', date: z('2026-11-02（頁面間有 11-01／11-03 的不一致）', '2026-11-02 (pages also say 11-01 and 11-03)'), src: ['A3a-S71', 'A5a-S68'] },
        { plan: 'RD', date: z('2027-01-04', '2027-01-04'), src: ['A3a-S71'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('ED', 'Early Decision（ED）', 'Early Decision (ED)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S71']),
          F('college', z('申請的學院', 'College or school'), 'radio', { required: true, src: ['A5a-S65', 'A3a-S73'], options: [
            o('cit', 'College of Engineering', 'College of Engineering'),
            o('mcs', 'Mellon College of Science', 'Mellon College of Science'),
            o('scs', 'School of Computer Science', 'School of Computer Science'),
            o('dietrich', 'Dietrich College of Humanities and Social Sciences', 'Dietrich College of Humanities and Social Sciences'),
            o('tepper', 'Tepper School of Business', 'Tepper School of Business'),
            o('heinz', 'Heinz College（Information Systems）', 'Heinz College (Information Systems)'),
            o('cfa', 'College of Fine Arts', 'College of Fine Arts')] }),
          F('major', z('主修或系所', 'Major or department'), 'text', { src: ['A5a-S65'], help: z('Engineering 申請者直接錄取到系／主修，undecided 除外（A5a-S65）。', 'Engineering applicants are admitted directly to a department unless undecided (A5a-S65).') })
        ] }
      ],
      supplementIntro: z('頁面沒有申請季標註，測驗段落仍寫 “fall 2026”；題目可能仍是現行版本，但未確認（A5a-S67）。題目為本站轉述。', 'The page carries no cycle label and its testing section still says "fall 2026"; the prompts may still be current but this is unconfirmed (A5a-S67). Prompts paraphrased.'),
      supplement: [
        { id: 'short', label: z('短答（各不超過 300 words）', 'Short answers (up to 300 words each)'), src: ['A5a-S67'], fields: [
          sq('passion', '你想讀的領域背後的熱情或啟發。', 'The passion or inspiration behind your intended area of study.', 300, 0, ['A5a-S67']),
          sq('success', '你會如何定義成功的大學經驗。', 'How you will define a successful college experience.', 300, 0, ['A5a-S67']),
          sq('emphasize', '你希望我們在你的申請中特別注意什麼（不接受網站連結）。', 'What you want us to emphasize about your application (no websites).', 300, 0, ['A5a-S67'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S67', 'A5a-S65'] },
        teacher: { min: 1, max: 2, src: ['A5a-S67'], note: z('必繳一位老師，不必是申請領域的科目。第三封可來自老師或 Other Recommender，但委員會「只考慮兩封」（A5a-S67）。', 'One teacher required, not necessarily in your intended field. A third letter from a teacher or Other Recommender is accepted, but committees consider only two (A5a-S67).') },
        other: { min: 0, max: 1, src: ['A5a-S67'], note: z('第三封信（老師或 Other Recommender 二擇一），只會有兩封被考慮（A5a-S67）。', 'The third letter (teacher or Other Recommender, one in total); only two are considered (A5a-S67).') }
      } },

    // ---- Harvard
    { id: 'harvard', name: z('Harvard University', 'Harvard University'),
      blurb: z('REA／RD；$95；5 題短答，各 150 words；兩位不同科目的老師。', 'REA/RD; $95; five short answers, 150 words each; two teachers in different subjects.'),
      src: ['A5a-S21', 'A5a-S23'],
      facts: [
        { t: z('Common App 加 Harvard supplement；另可用 QuestBridge 或紙本。選擇性的影音資料走 SlideRoom。', 'Common App plus the Harvard supplement; QuestBridge or a paper application also accepted. Optional media go through SlideRoom.'), tag: 'f', src: ['A5a-S21', 'A5a-S22'] },
        { t: z('報名費 $95；若有經濟困難並打算申請助學金，費用「會被免除」；國際頁說申請減免不會不利申請。', 'Fee $95; waived if it is a hardship and you plan to apply for aid; the international page says requesting a waiver does not disadvantage you.'), tag: 'f', src: ['A5a-S25', 'A5a-S24'] },
        { t: z('Supplement PDF 標題為 “Valid for entrance in Fall 2027”。', 'The supplement PDF is headed "Valid for entrance in Fall 2027".'), tag: 'f', src: ['A5a-S23'] },
        { t: z('不錄取到特定學程；需從 52 個選項中選最多三個 concentration。', 'No admission to particular programs; choose up to three intended concentrations from a list of 52.'), tag: 'f', src: ['A5a-S23'] },
        { t: z('Need-blind，國際生適用同樣的助學金政策。', 'Need-blind; international students are eligible for the same aid.'), tag: 'f', src: ['A3a-S30', 'A3a-S31'] },
        { t: z('Supplement 寫明「不考慮 demonstrated interest」。', 'The supplement states Harvard does not consider demonstrated interest.'), tag: 'f', src: ['A5a-S23'] }
      ],
      deadlines: [
        { plan: 'REA', date: z('2026-11-01', '2026-11-01'), src: ['A3a-S26'] },
        { plan: 'RD', date: z('2027-01-01', '2027-01-01'), src: ['A3a-S26'] }
      ],
      questions: [
        { id: 'general', label: z('一般', 'General'), fields: [
          plan([o('REA', 'Restrictive Early Action（REA）', 'Restrictive Early Action (REA)'), o('RD', 'Regular Decision（RD）', 'Regular Decision (RD)')], ['A3a-S26']),
          F('conc1', z('預計 concentration 1', 'Intended concentration 1'), 'text', { required: true, src: ['A5a-S23'], help: z('實際為 52 個選項的清單（A5a-S23）。', 'The real form uses a list of 52 options (A5a-S23).') }),
          F('conc2', z('預計 concentration 2（選填）', 'Intended concentration 2 (optional)'), 'text', { src: ['A5a-S23'] }),
          F('conc3', z('預計 concentration 3（選填）', 'Intended concentration 3 (optional)'), 'text', { src: ['A5a-S23'] }),
          F('certainty', z('學業、職涯與課外計畫的確定程度', 'Certainty of academic, vocational and extracurricular plans'), 'text', { src: ['A5a-S23'], help: z('Supplement 有確定程度評分題，選項本站未重現（A5a-S23）。', 'The supplement asks certainty ratings; the scale is not reproduced here (A5a-S23).') }),
          F('honorsLink', z('Honors／獎項連結', 'Honors and awards link'), 'text', { src: ['A5a-S23'] })
        ] }
      ],
      supplementIntro: z('2026–27 版（Fall 2027 入學）。五題必答，各 150 words 以內；Harvard 說每題「大約 100 words 就能回答」。題目為本站轉述（A5a-S23）。補充資料「既非預期也非必要」。', '2026–27 (entry Fall 2027). Five required short answers, up to 150 words each; Harvard says each can be answered in about 100 words. Prompts paraphrased (A5a-S23). Supplementary materials are neither expected nor required.'),
      supplement: [
        { id: 'short', label: z('短答（各 150 words）', 'Short answers (150 words each)'), src: ['A5a-S23'], fields: [
          sq('experiences', '形塑你的生活經驗，將如何讓你為 Harvard 帶來不同的觀點與經驗。', 'How the life experiences that shaped you will help you contribute to Harvard’s diversity of perspectives and experiences.', 150, 0, ['A5a-S23']),
          sq('disagree', '一次你與人意見強烈分歧的經驗：你如何溝通、學到什麼。', 'A time you strongly disagreed with someone: how you engaged and what you learned.', 150, 0, ['A5a-S23']),
          sq('shaped', '形塑你的課外活動、工作、旅行或家庭責任。', 'Extracurriculars, employment, travel or family responsibilities that shaped you.', 150, 0, ['A5a-S23']),
          sq('future', '你希望未來如何運用在 Harvard 受的教育？', 'How do you hope to use your Harvard education in the future?', 150, 0, ['A5a-S23']),
          sq('roommates', '室友可能想知道關於你的三件事。', 'Top 3 things your roommates might like to know about you.', 150, 0, ['A5a-S23'])
        ] }
      ],
      recs: {
        counselor: { min: 1, max: 1, src: ['A5a-S21'] },
        teacher: { min: 2, max: 2, src: ['A5a-S21'], note: z('兩位老師，教「不同學科」；不要求理科／人文搭配（A5a-S21）。', 'Two teachers in different academic subjects; no STEM/humanities split required (A5a-S21).') },
        other: { min: 0, max: null, src: ['A5a-S21', 'A5a-S22'], note: z('額外推薦信可在送出後，用確認信中的個人化連結寄送，頁面沒說來自誰；Harvard 另公布一份 “Other Recommendation” 表單（A5a-S21、S22）。', 'Additional letters may be sent after applying through a personalised link in the confirmation email; the page does not say from whom. Harvard also publishes an "Other Recommendation" form (A5a-S21, S22).') }
      } }
  ];

  // ================================================================ RECOMMENDERS
  M.recommenders = {
    intro: z('先完成 FERPA，再邀請推薦人。Teacher 與 Other Recommender 要逐校指派，指派後才會寄出邀請（A1-S24、S35）。每位推薦人只交一份通用表單給所有被指派的學校，送出後不能修改（A1-S20、S28）。推薦信可以在申請送出後才到（A1-S25）。各校自訂老師與 Other Recommender 的必繳與上限數量（A1-S20、S21）。這個模擬頁不寄任何信。', 'Complete the FERPA release first, then invite recommenders. Teachers and Other Recommenders are assigned college by college; the invitation goes out only after assignment (A1-S24, S35). Each recommender submits one general form shared with every college assigned, and it cannot be changed after submission (A1-S20, S28). Letters may arrive after you submit (A1-S25). Each college sets its own required and allowed counts (A1-S20, S21). This mock sends no email.'),
    src: ['A1-S20', 'A1-S21', 'A1-S24', 'A1-S25', 'A1-S35'],
    ferpa: {
      label: z('FERPA release authorization', 'FERPA release authorization'),
      text: z('School report 上的授權：你就讀過的學校可以釋出所需紀錄與推薦信，學校人員可以保密聯繫你現在與過去的學校。你要選擇放棄或不放棄閱讀推薦信的權利；選擇適用於所有學校，任一推薦信或申請送出後就不能更改（A1-S14）。Common App 說：放棄代表你不打算讀推薦信；有些推薦人可能因你不放棄而拒絕寫（A1-S26）。', 'The school report authorization: every school you attended may release requested records and recommendations, and college staff may contact your schools confidentially. You choose whether to waive your right to review recommendations; the choice applies to all colleges and cannot be changed after any recommendation or application is submitted (A1-S14). Common App says waiving tells colleges you do not intend to read the letters, and some recommenders may decline to write if you do not waive (A1-S26).'),
      src: ['A1-S14', 'A1-S26'],
      choice: z('你的選擇', 'Your choice'),
      options: [
        { v: 'waive', label: z('我放棄（waive）閱讀所有推薦信與相關文件的權利', 'I waive my right to review all recommendations and supporting documents') },
        { v: 'not', label: z('我不放棄（do not waive）', 'I do not waive my right to review all recommendations and supporting documents') }
      ]
    },
    roles: [
      { id: 'counselor', label: z('Counselor', 'Counselor'),
        help: z('輔導老師交 School Report（成績單、學校簡介、排名／GPA、課程難度 5 級、4 項評分）與 Counselor Recommendation（上傳或 1000 words 以內文字）。SR 必須先於 CR、Mid-year、Optional、Final 送出（A1-S14、S16、S20、S28）。', 'The counselor submits the School Report (transcript, school profile, rank/GPA, a 5-level rigor rating, 4 ratings) and the Counselor Recommendation (upload or text up to 1000 words). The SR must come before the CR, mid-year, optional and final reports (A1-S14, S16, S20, S28).') },
      { id: 'teacher', label: z('Teacher', 'Teacher'),
        help: z('邀請教過你學科的老師。Teacher evaluation 有 16 個評分列（Academic achievements 到 Overall），8 級量表，最高一級是「教學生涯中遇過的前幾名」；評分不是必填，表單另問老師是否填評分。推薦信 PDF 指引為 1000 words 以內（A1-S13、S6）。大學教授可用 “college/university instructor” 身分填 Teacher 表（A1-S23）。', 'Invite a teacher who taught you an academic subject. The teacher evaluation has 16 rating rows (Academic achievements through Overall) on an 8-point scale whose top value is "One of the top few encountered in my career"; ratings are not required, and the form asks whether the teacher completes them. The letter guidance is 1000 words or less (A1-S13, S6). A college professor can fill the Teacher form as a "college/university instructor" (A1-S23).') },
      { id: 'other', label: z('Other Recommender', 'Other Recommender'),
        help: z('八種類型：Arts Teacher、Clergy、Coach、College Access Counselor、Employer、Family Member、Peer、Other（A1-S20、S21）。只能指派給至少接受一種類型、而且接受你邀請的那一種類型的學校（A1-S22）。表單只有「關係」與「認識多久」兩欄（各 20 字元）加一封上傳信，沒有評分表；PDF 指引 1000 words 以內（A1-S15、S6）。', 'Eight types: Arts Teacher, Clergy, Coach, College Access Counselor, Employer, Family Member, Peer, Other (A1-S20, S21). Assignable only to colleges that accept at least one type, and only the type you invited (A1-S22). The form has two 20-character fields (relationship, length known) plus one uploaded letter, no rating grid; PDF guidance 1000 words or less (A1-S15, S6).'),
        outside: z('校外計畫督導人（實驗室 mentor、計畫主持人、雇主）唯一能在 Common App 內作證的位置。Common App 沒有 “research mentor” 類型，多半以 Other 或 Employer 邀請，是否接受由各校設定（A1 §9b）。這是主表中少數自帶第三方證明的容器（C1 §C2、§C3）。', 'The only place inside the Common App where a supervisor of outside work (lab mentor, programme lead, employer) can attest. There is no "research mentor" type; such a person is usually invited as Other or Employer, and acceptance is each college’s setting (A1 §9b). This is one of the few containers that brings its own third-party verifier (C1 §C2, §C3).') }
    ]
  };

  // ================================================================ REVIEW
  M.review = {
    intro: z('送出前，系統會產生 PDF 預覽供你檢查。截止時間是截止日當天你所在時區的晚上 11:59（A1-S38）。已送出的申請或 writing supplement 不能修改（A1-S39）。', 'Before submitting, the system produces a PDF preview to check. A deadline is met by 11:59 pm on the deadline date in your own local time zone (A1-S38). A submitted application or writing supplement cannot be changed (A1-S39).'),
    src: ['A1-S38', 'A1-S39'],
    payment: {
      label: z('報名費', 'Application fee'),
      text: z('每所收費學校會標示是否接受 Common App fee waiver：所有學生、只限美國學生、或不接受（2026–27 新增）。不接受的學校可能在送出後要求付費（A1-S1、S28）。這個模擬頁不收任何費用。', 'Each fee-charging college shows whether it accepts the Common App fee waiver for all students, U.S. students only, or none (new in 2026–27). A college that does not accept it may ask you to pay after submission (A1-S1, S28). This mock collects no payment.'),
      src: ['A1-S1', 'A1-S7', 'A1-S28'],
      choice: z('繳費方式（模擬）', 'Payment (mock)'),
      options: [
        { v: 'pay', label: z('付費（模擬，不會付款）', 'Pay the fee (mock; no payment happens)') },
        { v: 'waiver', label: z('使用 Common App fee waiver（若該校接受）', 'Use the Common App fee waiver (if this college accepts it)') }
      ]
    },
    affirm: {
      label: z('簽名與聲明', 'Signature and affirmation'),
      text: z('簽名代表你確認申請內容是你自己的作品、事實正確且誠實呈現（A1-S12）。Common App 的舞弊政策包含把 AI 產出的實質內容當成自己的原創作品，任何第三方都可以檢舉，查證結果可能通知你清單上的所有學校（A1-S33、S34）。', 'Signing certifies that all information is "my own work, factually true, and honestly presented" (A1-S12). Common App’s fraud policy covers representing the substantive output of an AI tool as one’s own work; any third party can report, and findings may go to every college on your list (A1-S33, S34).'),
      src: ['A1-S12', 'A1-S33', 'A1-S34'],
      signLabel: z('輸入全名作為簽名（模擬）', 'Type your full name to sign (mock)')
    }
  };

  // ================================================================ UC
  var PIQ = [
    ['p1', '領導：舉一個你發揮領導力、正面影響他人、協助化解爭執，或長期投入團隊工作的例子。', 'Leadership: an example of a time you led, positively influenced others, helped resolve disputes, or contributed to a group effort over time.'],
    ['p2', '創造力：每個人都有創造的一面，可以是解決問題、原創思考或藝術。說明你如何表現它。', 'Creativity: everyone has a creative side, whether in problem solving, original thinking or art. Describe how you express yours.'],
    ['p3', '才能：你最大的才能或技能是什麼？你如何長期培養並展現它？', 'Talent: your greatest talent or skill, and how you have developed and demonstrated it over time.'],
    ['p4', '教育機會或障礙：你如何把握一個重要的教育機會，或努力克服一個教育上的障礙。', 'Educational opportunity or barrier: how you took advantage of a significant educational opportunity or worked to overcome an educational barrier.'],
    ['p5', '挑戰：你面對過最重大的挑戰，你採取了哪些步驟克服，它如何影響你的學業。', 'Challenge: the most significant challenge you have faced, the steps you took to overcome it, and how it affected your academic achievement.'],
    ['p6', '學科：一個啟發你的學科，你如何在課堂內外深入它。', 'Academic subject: a subject that inspires you, and how you have furthered that interest inside and/or outside the classroom.'],
    ['p7', '社群：你為讓學校或社區變得更好做了什麼？', 'Community: what you have done to make your school or your community a better place.'],
    ['p8', '其他：除了申請中已呈現的內容，你認為什麼讓你成為 University of California 的有力人選？', 'Beyond the rest of the application: what you believe makes you a strong candidate for the University of California.']
  ];
  var PIQ_OUT = {
    p3: z('長期累積的技能（例如多年的標本鑑定）可在這裡用 350 words 寫過程與證據；UC 要求活動「真實且可由獨立第三方查證」（C1-S41）。', 'A skill built over years (e.g. specimen identification) can be told here in 350 words with its evidence; UC requires activities to be "true and verifiable by an independent party" (C1-S41).'),
    p4: z('校外課程、實驗室或營隊可當作「教育機會」來寫。', 'An outside course, lab placement or programme can be written as the educational opportunity.'),
    p6: z('UC 申請沒有推薦信（除少數校區事後邀請），所以校外研究在 UC 只能靠 PIQ 與 Activities & Awards 承載（A2 §1.6、C1 §C2）。', 'The UC application takes no letters (apart from some campuses asking later), so outside research can enter UC only through the PIQs and Activities & Awards (A2 §1.6, C1 §C2).')
  };
  M.uc = {
    tab: z('UC 申請（另一套系統）', 'UC application (a separate system)'),
    label: z('UC Personal insight questions 與 Activities & Awards', 'UC personal insight questions and Activities & Awards'),
    intro: z('UC 九個校區共用一份 UC Application，與 Common App 無關。八題 PIQ 選四題作答，每題最多 350 words，「所有題目都一樣」（A2-S1）。填寫期間 10 月 1 日至 11 月 30 日（A2-S2）。中英文題目都是本站轉述，官方原文請見來源頁。', 'The nine UC campuses share one UC application, unrelated to the Common App. Answer 4 of 8 personal insight questions, up to 350 words each; "All questions are equal" (A2-S1). Filing period 1 October to 30 November (A2-S2). Both the Chinese and English prompts are this site’s paraphrases; see the source for the official wording.'),
    src: ['A2-S1', 'A2-S2', 'A2-S3'],
    choose: 4,
    maxWords: 350,
    piqs: PIQ.map(function (p, i) { return { id: p[0], n: String(i + 1), prompt: z(p[1], p[2]), src: ['A2-S1'], outside: PIQ_OUT[p[0]] }; }),
    groups: [
      { id: 'aa', label: z('Activities & Awards（最多 20 項）', 'Activities & Awards (up to 20)'), src: ['A2-S3', 'A2-S6', 'A2-S7'],
        intro: z('六個類別。20 項與 350 字元的數字來自 UCSB 的官方頁面與工作表，不是 UC 系統總頁；總頁沒寫數量或字數上限（A2-S3、S6、S7）。', 'Six categories. The 20-entry and 350-character figures come from UCSB’s official page and worksheet, not the systemwide page, which states neither (A2-S3, S6, S7).'),
        outside: z('UC 沒有推薦信，所以這裡（加上 PIQ）是校外紀錄進入 UC 的主要位置；比 Common App 的 150 字元寬裕。可用 “Award or honor” 與 “Other coursework” 類別（C1 §C2）。', 'With no letters at UC, this (plus the PIQs) is where an outside record enters; it is roomier than the Common App’s 150 characters. "Award or honor" and "Other coursework" categories are available (C1 §C2).'),
        repeat: { max: 20, itemLabel: z('項目', 'Entry') }, fields: [
          F('cat', z('類別', 'Category'), 'select', { required: true, src: ['A2-S3', 'A2-S7'], options: ['Award or honor', 'Educational preparation programs', 'Extracurricular activity', 'Other coursework', 'Volunteering/Community service', 'Work experience'] }),
          F('name', z('活動／獎項名稱', 'Activity or award name'), 'text', { required: true, src: ['A2-S6'] }),
          F('desc', z('描述', 'Description'), 'textarea', { required: true, rows: 4, limit: { chars: 350 }, src: ['A2-S6'], help: z('350 字元來自 UCSB 工作表（2026-06-11），C1 筆記在 UC 系統頁上未找到此數字。', '350 characters per the UCSB worksheet (2026-06-11); the C1 note did not find this figure on systemwide UC pages.') }),
          F('grades', z('參與年級', 'Grades involved'), 'checks', { options: ['9', '10', '11', '12'], src: ['A2-S6'] }),
          F('hours', z('每週時數', 'Hours per week'), 'number', { src: ['A2-S6'] }),
          F('weeks', z('每年週數', 'Weeks per year'), 'number', { src: ['A2-S6'] })
        ] },
      { id: 'comments', label: z('Additional comments', 'Additional comments'), src: ['C1-S39', 'A2-S3', 'A2-S5'], fields: [
        F('academic', z('Academic history 的補充說明', 'Additional comments (academic history)'), 'textarea', { rows: 4, limit: { chars: 550 }, src: ['C1-S39'], help: z('550 字元（不是 words）（C1-S39）。', '550 characters, not words (C1-S39).') }),
        F('general', z('一般補充說明', 'Additional comments (general)'), 'textarea', { rows: 6, src: ['A2-S3', 'A2-S5'], help: z('UC 頁面沒寫上限（checked 2026-11-07）。UC 說這欄「不應該是一篇文章」，也「不應該是第五題 PIQ，我們不會考慮」（A2-S3、S5）。', 'No limit stated on UC pages (checked 2026-11-07). UC says it "shouldn’t be an essay" and should not be a fifth PIQ, which it will not consider (A2-S3, S5).') })
      ] }
    ]
  };

  // ================================================================ PERSONA (fictional composite)
  var V = {};
  function put(prefix, obj) { for (var k in obj) V[prefix + k] = obj[k]; }
  function rep(path, rows) { V[path + '#n'] = rows.length; rows.forEach(function (r, i) { for (var k in r) V[path + '[' + i + '].' + k] = r[k]; }); }

  put('profile.personal.', { first: 'Yu-An', last: 'Chen', preferred: 'Yu-An', former: 'no', dob: '2009-03-14' });
  put('profile.address.', { home: 'Fictional address, Taichung City, Taiwan', alt: 'no' });
  put('profile.contact.', { email: 'yuan.chen@example.org', phone: '+886 900 000 000', phoneType: 'Mobile' });
  rep('profile.languages', [{ lang: 'Mandarin Chinese', prof: ['first', 'speak', 'read', 'write', 'home'] }, { lang: 'English', prof: ['speak', 'read', 'write'] }, { lang: 'Taiwanese Hokkien', prof: ['speak', 'home'] }]);
  put('profile.citizenship.', { status: 'nonus', country: 'Taiwan', birthplace: 'Taiwan, Taichung', yearsUS: 0, yearsOut: 17 });
  put('profile.feewaiver.', { eligible: 'no' });

  put('family.household.', { marital: 'Married', home: 'Both parents', children: '0' });
  put('family.parent1.', { first: 'Mei-Ling', last: 'Chen', employment: 'Employed', occupation: 'Pharmacist', employer: 'A community pharmacy', education: 'Bachelor’s degree' });
  put('family.parent2.', { first: 'Chih-Hao', last: 'Chen', employment: 'Employed', occupation: 'Civil engineer', employer: 'A local engineering firm', education: 'Master’s degree' });
  rep('family.siblings', [{ name: 'Yu-Ting Chen', age: '11', rel: 'Sister', edu: 'Primary school' }]);

  put('education.school.', { name: 'A public senior high school in Taiwan (fictional placeholder)', entry: '2024-08-30', boarding: 'no', grad: '2027-06-10' });
  put('education.grades.', { classSize: '480', rankType: 'none', gpaScale: '100', gpa: '91.4', gpaWeight: 'u' });
  rep('education.currentCourses', [
    { name: 'Biology (advanced elective)', subject: 'Science', level: 'Advanced', schedule: 'Semester' },
    { name: 'Chemistry (advanced elective)', subject: 'Science', level: 'Advanced', schedule: 'Semester' },
    { name: 'Physics', subject: 'Science', level: 'Regular/Standard', schedule: 'Semester' },
    { name: 'Mathematics A (incl. introductory calculus)', subject: 'Math', level: 'Advanced', schedule: 'Semester' },
    { name: 'English', subject: 'English', level: 'Regular/Standard', schedule: 'Semester' },
    { name: 'Chinese', subject: 'Other', level: 'Regular/Standard', schedule: 'Semester' },
    { name: 'Inquiry and Practice: Field Ecology', subject: 'Science', level: 'Regular/Standard', schedule: 'Semester' }
  ]);
  put('education.honorsQ.', { any: 'yes' });
  rep('education.honors', [
    { title: 'Regional Biology Olympiad screening, qualified for second-round training camp', grade: ['11'], level: ['state'] },
    { title: 'School science fair, first place, life sciences division', grade: ['10'], level: ['school'] },
    { title: 'City high-school student research exhibition, merit award (team of 4)', grade: ['11'], level: ['state'] }
  ]);
  put('education.future.', { career: 'Scientific research', degree: 'Doctorate (PhD)' });

  put('testing.gate.', { report: 'yes' });
  rep('testing.sat', [{ date: '2026-08-22', ebrw: 700, math: 780 }]);
  put('testing.english.', { toefl: 'Overall band 5.5 (1–6 scale); fictional' });
  put('testing.leavingQ.', { based: 'no' });

  put('activities.gate.', { any: 'yes' });
  rep('activities.list', [
    { type: 'Environmental', hasRole: 'yes', role: 'Founder and data lead', org: 'Student stream-survey group (4 students), Taichung',
      desc: 'Surveyed insect larvae in 3 local streams monthly for 2 years; built a shared dataset of 2,100 records; gave results to a city volunteer group.',
      grades: ['10th', '11th', '12th'], timing: ['all'], hours: '4', weeks: '45', college: 'yes' },
    { type: 'Research', hasRole: 'yes', role: 'Student volunteer', org: 'A university ecology lab in Taiwan (fictional placeholder)',
      desc: 'Sorted and identified macroinvertebrates from 40+ field samples under a graduate mentor; kept a dated lab notebook; learned basic R for counts.',
      grades: ['11th', '12th'], timing: ['break', 'school'], hours: '6', weeks: '20', college: 'yes' },
    { type: 'Science or math', hasRole: 'no', org: 'Regional biology olympiad training programme',
      desc: 'Selected after a written screening; 6 weeks of genetics, ecology and lab practicals; passed the second-round exam.',
      grades: ['11th'], timing: ['break'], hours: '30', weeks: '6', college: 'unsure' },
    { type: 'Community service or volunteer work', hasRole: 'yes', role: 'Volunteer tutor', org: 'Neighbourhood after-school study room',
      desc: 'Tutor 3 middle-school students in science and math every Saturday; wrote simple worksheets on cells and food webs.',
      grades: ['10th', '11th', '12th'], timing: ['school'], hours: '3', weeks: '36', college: 'yes' },
    { type: 'Family responsibilities', hasRole: 'no',
      desc: 'Pick up my younger sister from school and help with her homework on weekdays while both parents work late shifts.',
      grades: ['9th', '10th', '11th', '12th'], timing: ['school'], hours: '8', weeks: '40', college: 'no' },
    { type: 'Music', hasRole: 'yes', role: 'Cellist, second desk', org: 'School string orchestra',
      desc: 'Rehearse twice weekly; performed in 2 annual concerts and a regional ensemble contest.',
      grades: ['9th', '10th', '11th'], timing: ['school'], hours: '4', weeks: '30', college: 'unsure' }
  ]);
  put('activities.responsibilities.', { items: ['younger', 'transport'] });
  put('activities.circumstances.', { items: ['none'] });

  var ESSAY = [
    'The first time I lifted a rock from the stream behind my grandmother’s house, I expected nothing. Instead, a dozen small, flat creatures held on to the underside as if the current might steal them. I was fourteen, and I did not know they had names. Three years later, I still lose whole afternoons to them.',
    'They are mayfly, stonefly and caddisfly larvae, and they turned out to be more than curiosities. Many of them only live where the water is clean and full of oxygen. A stream that holds stoneflies is telling you something; a stream that holds only worms and midges is telling you something else. I learned this from a laminated field guide I bought with my birthday money, and then from a graduate student who answered my email with more patience than I deserved.',
    'What captivates me is the idea that a living thing can be a measurement. A thermometer tells you the temperature at one moment. A community of larvae tells you what the water has been like for months, because the sensitive ones would have left or died if it had gone bad. When I sort a sample under the microscope, I am reading a record the stream has kept for me.',
    'That idea pulled me into a project with three classmates. Every month for two years we visited three streams near our town, kicked a net upstream for one minute, and counted what we caught. We argued about identifications constantly. One winter we discovered that half our early records of one family were wrong, because we had confused two genera with similar gills. Correcting those records took a weekend and some pride, but the corrected data showed a pattern we had missed: the stream below a new housing site lost most of its stoneflies within a year.',
    'When I want to learn more, I turn first to the samples themselves, then to people. The graduate student who answered my email now lets me sort samples in her lab during school breaks. She taught me to write down every uncertain identification instead of guessing, and to say "I do not know yet" in front of others. I read papers slowly, with a dictionary open, and I keep a notebook of questions I cannot answer. The list is longer than when I started.',
    'I do not know yet which part of biology I will study. I do know the feeling of looking into a white tray of water and seeing the stream look back.'
  ].join('\n\n');
  put('writing.essay.', { prompt: '6', text: ESSAY });
  put('writing.challenges.', { any: 'no' });
  put('writing.addinfo.', { any: 'yes', text: [
    'Stream survey project (grades 10–12). Our group of four students sampled three streams monthly from September 2024. I designed the data sheet, checked every identification against a second key, and kept the shared spreadsheet; the others led fieldwork and the poster. All records, including the 2025 corrections, are kept with dates in a public spreadsheet. Our city environmental volunteer group uses the data for its annual report.',
    'Lab volunteering (grades 11–12). I sort samples under the supervision of a graduate student, who has agreed to write an Other Recommender letter for colleges that accept one. My school counselor has seen the lab notebook and can confirm the dates of both activities.'
  ].join('\n\n') });

  // Courses & Grades (needed for Stanford)
  put('courses.school.', { name: 'A public senior high school in Taiwan (fictional placeholder)', year: '2025–2026 (grade 11)', scale: '0–100, passing 60', schedule: 'Semester' });
  rep('courses.list', [
    { subject: 'Science', name: 'Biology', level: 'Regular/Standard', grade: '94', credit: '2' },
    { subject: 'Science', name: 'Chemistry', level: 'Regular/Standard', grade: '90', credit: '2' },
    { subject: 'Math', name: 'Mathematics', level: 'Regular/Standard', grade: '92', credit: '4' },
    { subject: 'English', name: 'English', level: 'Regular/Standard', grade: '88', credit: '4' },
    { subject: 'Other', name: 'Chinese', level: 'Regular/Standard', grade: '86', credit: '4' }
  ]);

  // College questions
  put('col.stanford.questions.general.', { plan: 'RD', major1: 'Biology', major2: 'Earth Systems' });
  put('col.jhu.questions.general.', { plan: 'RD', major1: 'Biology' });
  put('col.cornell.questions.general.', { plan: 'ED', school: 'cals', major: 'Biological Sciences' });

  // Stanford supplement
  put('col.stanford.supplement.short.', {
    society: 'Losing freshwater ecosystems faster than we can measure them, so damage is found only after it is permanent.',
    summers: 'Sorting stream samples in a university lab, sampling streams with friends, and helping my sister with summer homework.',
    history: 'The day Rachel Carson testified before Congress in 1963, to hear how she answered people who did not want to listen.',
    extra: 'Every Saturday I tutor three middle-school students in science. One now draws food webs better than I do.',
    five: 'Clean streams, honest notebooks, my sister, a good cello string, admitting I am wrong.'
  });
  put('col.stanford.supplement.essays.', {
    learning: 'In my second year of stream sampling, I found that half our early records of one larva family were wrong. We had confused two genera with similar gills. Fixing it meant re-checking 300 records against a second key, with a dictionary beside me because the better key was in English. It was the most exciting weekend of the year. The corrected data showed the stoneflies below a new housing site had almost disappeared. Nobody had told me that being wrong could reveal something true. I want to study in a place where people reopen their own data and say so out loud.',
    roommate: 'Dear future roommate, I will probably bring a small white tray, a hand lens and a field guide with water stains. I promise not to keep live insects in our room. I wake up early and I like quiet in the morning, but in the evening I am happy to talk about anything, especially if it involves food from home. I play the cello badly enough that I will practise somewhere else. I keep a notebook of questions I cannot answer yet. If you have one, I would like to trade questions. I am also a decent cook of exactly three dishes, all involving eggs, and I will share them during exam weeks. I will ask before borrowing anything.',
    contribution: 'I grew up between a city apartment and my grandmother’s village, and I learned to move between Mandarin, Taiwanese and, later, English. That habit of translating made me the person in my survey group who turned our data into something the city volunteers could use. At Stanford I would bring the same instinct: to take careful work from a lab and explain it to people who live by the water. I also bring patience for slow, repetitive tasks, which I have learned is most of science. In a dorm or a lab group, I am usually the one who keeps the shared notes in order and checks that everyone\u2019s name is on the work they did.'
  });

  // JHU supplement
  put('col.jhu.supplement.essay.', {
    bridges: 'Our stream group had four people and four opinions. One friend wanted to publish quickly; another wanted to wait until every identification was certain. For months we argued at the edge of the water. What changed things was a city volunteer, a retired farmer who had watched the same stream for forty years. He did not care about genera; he cared that the water near his field smelled different after the construction started. Listening to him, we realised we were measuring the same thing in different languages. We began sharing our counts with his group every month, and they began telling us where to sample. I learned that working across differences is mostly translation: finding the shared question under different words. At Hopkins I hope to keep doing that, between lab work and the people it is for.'
  });

  // Cornell CALS supplement
  put('col.cornell.supplement.cals.', {
    major: 'I want to study Biological Sciences because I have spent two years using animals as instruments. Stream larvae told my survey group what the water had been like for months, and I want to understand why some species can survive what others cannot. That question runs from physiology to ecology to evolution, which is why a broad biology major suits me better than a narrow one. At CALS I would like to take courses in entomology and freshwater ecology alongside the core sequence, and to join a lab where I can learn methods more rigorous than a kick net and a field guide. I hope to leave with the training to design long-term monitoring that a city could actually use.',
    why: 'CALS is a college where biology sits next to agriculture, environment and communities, and that combination matches how I came to science. My project began with a retired farmer telling us his stream had changed. I want to study in a place where research is expected to return to the people who live near the data, through extension work and public programmes. I am also drawn to the idea of learning alongside students in food science, environmental engineering and natural resources, because the problems I care about cross all of them.'
  });

  // Recommenders (fictional)
  var COUNS = [{ name: 'Ms. Lin (fictional)', email: 'counselor.lin@example.org', subject: 'School counselor' }];
  var TEACH = [{ name: 'Mr. Wang (fictional)', email: 'teacher.wang@example.org', subject: 'Biology' }, { name: 'Ms. Huang (fictional)', email: 'teacher.huang@example.org', subject: 'English' }];
  V['rec.stanford'] = { counselor: COUNS, teacher: TEACH, other: [{ name: 'Dr. Tsai, graduate mentor (fictional)', email: 'mentor.tsai@example.org', subject: 'Other: lab supervisor' }] };
  V['rec.jhu'] = { counselor: COUNS, teacher: TEACH, other: [] };
  V['rec.cornell'] = { counselor: COUNS, teacher: TEACH, other: [] };
  V['ferpa'] = 'waive';

  // UC
  V['uc.piq.p3'] = 'My greatest skill is patient identification: looking at something small and refusing to name it until I am sure. It began with a field guide and a hand lens at the stream behind my grandmother’s house. At first I named every flat larva a mayfly. Over two years of monthly sampling with three classmates I learned to check gills, tails and legs in order, and to write "uncertain" when I could not tell. The skill was tested when we found that half our early records of one family were wrong. Re-checking 300 records took a weekend, but it showed a decline in stoneflies below a construction site that we had missed. In a university lab I now sort samples for a graduate student, who checks my identifications; my error rate has dropped from about one in five to one in twenty. The same habit helps when I tutor: I wait until I understand what a student is confused about before explaining.';
  V['uc.piq.p6'] = 'Biology inspires me most when it becomes a way of measuring. In class, ecology was a chapter about food webs. Outside class, it became a net, a white tray and a spreadsheet. With three classmates I sampled three streams every month for two years, counting insect larvae that only survive in clean water. I designed our data sheet, learned to identify larvae to family, and taught myself enough R to plot our counts. To go further, I emailed a university lab and now volunteer there during school breaks, where I learned that real data needs dated notebooks and second opinions. I also trained for the regional biology olympiad, which filled gaps in genetics I had ignored because I preferred fieldwork. Each step showed me how much more there is to learn.';
  V['uc.piq.p7'] = 'Our town’s streams had no regular monitoring, so my survey group started sharing our monthly counts with a city environmental volunteer group. At first they did not know what a stonefly was. I made a one-page guide showing which larvae mean clean water, translated our spreadsheet into a simple chart, and went to two of their meetings to explain it. They now include our data in their annual report and tell us where people have noticed changes. Separately, I tutor three middle-school students in science every Saturday at a neighbourhood study room. Both taught me that making something better often means explaining it clearly to the people who live with it.';
  V['uc.piq.p8'] = 'Beyond my grades and activities, I think I am a strong candidate because I keep honest records, especially of my own mistakes. When my group found errors in our early data, I was the one who insisted we fix and publish the corrections, even though it delayed our poster. I also bring the perspective of a student who learned science partly in a second language, which makes me careful with words and patient with people who are new to a subject. At UC I want to keep doing long-term field research and to share it with the communities nearby.';
  rep('uc.aa', [
    { cat: 'Extracurricular activity', name: 'Student stream-survey project (founder, data lead)', desc: 'Founded a 4-student group that sampled insect larvae in 3 streams monthly for 2 years (2,100 records). I designed the data sheet, checked identifications against a second key, kept the shared dataset and corrected 300 early records. Data shared monthly with a city volunteer group.', grades: ['10', '11', '12'], hours: 4, weeks: 45 },
    { cat: 'Other coursework', name: 'University ecology lab volunteer (fictional placeholder)', desc: 'Sort and identify stream macroinvertebrates from 40+ field samples under a graduate mentor during school breaks; keep a dated lab notebook; learned basic R to summarise counts.', grades: ['11', '12'], hours: 6, weeks: 20 },
    { cat: 'Award or honor', name: 'Regional Biology Olympiad, second-round qualifier', desc: 'Qualified through a written screening for a 6-week regional training camp in genetics, ecology and lab practicals; passed the second-round exam.', grades: ['11'], hours: 30, weeks: 6 }
  ]);

  M.persona = { values: V, colleges: ['stanford', 'jhu', 'cornell'] };

  window.ATLAS.mock = M;
})();
