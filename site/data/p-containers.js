// Page: containers. Built from research/2026-11-07_common-app-first-year-anatomy_v1.md (A1),
// research/2026-11-07_other-application-systems_v1.md (A2) and
// research/2026-11-07_outside-record-frameworks_v1.md (C1, UC Additional comments only).
// Every src id exists in data/sources.js. Field types and limits in the Common App tables come from
// the 2026–27 First-year Data Catalog (A1-S6) unless another id is cited.
// Figures (viz:) are drawn by assets/js/viz-fields.js and viz-flow.js; every value in a figure is also in
// a table or item below it, with the same source ids. Totals in 'budget-stack' figures are limit × box
// count, computed from the cited limits (an inference, said so in each subtitle).
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function f(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'f', src: src }; }
  function inf(zh, en, src) { return { t: { zh: zh, en: en }, tag: 'i', src: src }; }
  function asm(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: 'a' }; if (src) o.src = src; return o; }
  function ns(src) { return { state: 'not-stated', checked: '2026-11-07', src: src }; }
  function s(zh, en) { return { zh: zh, en: en }; }
  // form-map field: label, kind, limit (or null), required state, sources, optional official wording
  function fld(lzh, len, kind, limzh, limen, req, src, q) {
    var o = { label: s(lzh, len), kind: kind, src: src };
    if (limzh != null) o.limit = s(limzh, limen);
    if (req) o.req = req;
    if (q) o.q = q;
    return o;
  }
  // field-card row
  function row(lzh, len, kind, extra) {
    var o = { label: s(lzh, len), kind: kind };
    for (var k in extra) o[k] = extra[k];
    return o;
  }

  var STUDENT = s('學生', 'Student');
  var COLS = [s('欄位', 'Field'), s('類型', 'Type'), s('上限', 'Limit'), s('必填', 'Required'), s('誰填寫', 'Who fills it')];
  var FIELD_LIST = s('逐欄清單', 'Field by field');
  var YN = [s('是', 'Yes'), s('否', 'No')];
  var GRADES = ['9', '10', '11', '12'];

  window.ATLAS.pages['containers'] = {
    title: s('申請表裡的每一個欄位：類型、上限、誰填寫', 'Every field in the application: type, limit, who fills it'),
    judgment: s(
      'Common App 給學生自己寫的空間其實很小：活動描述 150 字元、Additional information 300 字（不是 650）、主文 650 字；推薦人那一側，老師表有 16 列評分、輔導老師只有 4 列，校外的人只能透過 Other Recommender 一封信進來，而且要看每間學校收不收。',
      'The space a student writes in is small: 150 characters per activity, 300 words of Additional information (not 650), 650 words of personal essay. On the recommender side the teacher form has 16 rating rows and the counselor form only 4, and an adult from outside school gets in only as an Other Recommender, one letter, and only where the college accepts that type.'
    ),
    intro: s(
      '本頁把 2026–27 申請季（2027 秋季入學）Common App 第一年申請表逐區列出：每個欄位的類型、字數或字元上限、是否必填、由誰填。主要依據是 Common App 自己公布的 2026–27 First-year Data Catalog（試算表，檔名日期 2026-08-18）與 2026 年版的表單 PDF，存取日 2026-11-07。Data Catalog 中「Short」欄位的 Max Length 是字元數、「Long」欄位的 Min/Max 是英文字數，這個對應是我們從 2025–26 標籤與 2026 PDF 推得的（屬推論）。頁面沒寫的格子標「未載明」，不以常見說法補上。每一區先用一張圖畫出欄位的形狀（可以在裡面試打字），接著才是逐欄的表。後半段整理推薦人表單、其他申請系統（UC、Coalition on Scoir、MIT、Georgetown、ApplyTexas），以及校外的人到底能把東西交進哪裡。',
      'This page walks the 2026–27 Common App first-year application (entry fall 2027) section by section: each field\'s type, its word or character limit, whether it is required, and who fills it in. The main source is Common App\'s own 2026–27 First-year Data Catalog (a spreadsheet whose file name is dated 2026-08-18) and the 2026 form PDFs, accessed 2026-11-07. We read a catalog "Short" field\'s Max Length as characters and a "Long" field\'s Min/Max as words; that reading is our inference from the 2025–26 labels and the 2026 PDF. Cells the sources leave blank say "not stated" rather than repeating figures that circulate online. Each section opens with a figure that draws the shape of its fields (you can type into the replicas), then the field-by-field table. The second half covers recommender forms, the other application systems (UC, Coalition on Scoir, MIT, Georgetown, ApplyTexas), and where a party who is neither the student nor the school can submit anything at all.'
    ),
    sections: [
      {
        id: 'basics',
        h: s('先知道的幾件事', 'Ground rules'),
        judgment: s('「My Common Application」各區全部由學生本人填寫；推薦人表單另由輔導老師、老師、Other Recommender 填寫。', 'Every section of "My Common Application" is filled by the student; recommender forms are filled separately by the counselor, teachers, and Other Recommenders.'),
        intro: s('下圖是整張學生表單的地圖：一個方塊是一區，方塊寬度隨欄位數變化，每個小格印出該欄位的上限。顏色區分字元、字數、數量與選項；虛線格是來源沒寫上限的欄位。把游標移到小格上看官方題目文字與來源，點方塊標題跳到該區。', 'The map below shows the whole student form: one block per section, wider when it has more fields, each small cell printing the field\'s limit. Colour tells characters from words, counts and choices; a dashed cell is a field whose limit the sources do not state. Hover a cell for the official wording and sources; click a block title to jump to that section.'),
        viz: {
          type: 'form-map',
          title: s('學生要填 7 區 54 個欄位；以字元或字數計上限的不到一半，其餘是選項、數量與日期', 'The student fills 7 sections and 54 fields; fewer than half carry a character or word limit, the rest are choices, counts and dates'),
          subtitle: s('欄位數照本頁下方各區表格計算；一格代表表格裡的一列，合併同類欄位。上限出自 2026–27 Data Catalog，除非另有標註。', 'Field counts follow the tables further down this page, one cell per table row, like fields merged. Limits come from the 2026–27 Data Catalog unless another source is cited.'),
          blocks: [
            {
              id: 'profile', label: s('Profile', 'Profile'),
              fields: [
                fld('法定名／姓', 'Legal first / last name', 'chars', '各 50 字元', '50 chars each', 'req', ['A1-S6']),
                fld('中間名、慣用名、曾用名', 'Middle, preferred, former names', 'chars', '各 50 字元', '50 chars each', 'opt', ['A1-S6']),
                fld('出生日期', 'Date of birth', 'other', '1906–2027', '1906–2027', 'req', ['A1-S6']),
                fld('地址', 'Address', 'ns', null, null, 'req', ['A1-S6']),
                fld('電話', 'Phone', 'ns', null, null, 'req', ['A1-S6']),
                fld('語言', 'Languages', 'count', '1–5 種', '1–5', 'req', ['A1-S6', 'A1-S12']),
                fld('性別、公民身分、出生地', 'Gender, citizenship, birthplace', 'ns', null, null, 'req', ['A1-S12']),
                fld('延伸人口統計', 'Additional demographics', 'ns', null, null, 'opt', ['A1-S12']),
                fld('Fee waiver（簽名）', 'Fee waiver (signature)', 'chars', '簽名 50 字元', 'signature 50 chars', 'req', ['A1-S6', 'A1-S7'])
              ]
            },
            {
              id: 'family', label: s('Family', 'Family'),
              fields: [
                fld('其他居住情形', 'Other living situation', 'chars', '100 字元', '100 chars', 'ns', ['A1-S6']),
                fld('子女數', 'Number of children', 'chars', '2 字元', '2 chars', 'ns', ['A1-S6']),
                fld('父母／監護人', 'Parents / guardian', 'chars', '姓名 50 字元', 'names 50 chars', 'ns', ['A1-S6']),
                fld('手足', 'Siblings', 'count', '0–10 人', '0–10', 'ns', ['A1-S1', 'A1-S7', 'A1-S6']),
                fld('獨立生說明', 'Independent-learner detail', 'chars', '100 字元', '100 chars', 'ns', ['A1-S1', 'A1-S7'])
              ]
            },
            {
              id: 'education', label: s('Education', 'Education'),
              fields: [
                fld('目前就讀學校', 'Current school', 'ns', null, null, 'req', ['A1-S6']),
                fld('未畢業說明', 'If not graduating', 'words', '250 字', '250 words', 'cond', ['A1-S6']),
                fld('學程進度說明', 'Progression explanation', 'words', '250 字', '250 words', 'cond', ['A1-S6', 'A1-S12']),
                fld('其他中學', 'Other secondary schools', 'count', '0–3 所', '0–3', 'req', ['A1-S6']),
                fld('修過課的大學', 'Colleges attended', 'count', '0–3 所', '0–3', 'req', ['A1-S6', 'A1-S29']),
                fld('畢業班人數', 'Class size', 'chars', '5 字元', '5 chars', 'req', ['A1-S6']),
                fld('班排名', 'Class rank', 'chars', '5 字元', '5 chars', 'opt', ['A1-S6']),
                fld('GPA', 'GPA', 'chars', '6 字元', '6 chars', 'opt', ['A1-S6', 'A1-S28']),
                fld('本學年課程', 'Current-year courses', 'count', '1–15 門', '1–15', 'req', ['A1-S6']),
                fld('Honors', 'Honors', 'count', '5 項 × 100 字元', '5 × 100 chars', 'opt', ['A1-S6', 'A1-S12']),
                fld('社區組織（CBO）', 'Community-based organizations', 'count', '0–3 個', '0–3', 'req', ['A1-S6']),
                fld('未來規劃', 'Future plans', 'choice', '「其他」100 字元', '"other" 100 chars', 'req', ['A1-S6'])
              ]
            },
            {
              id: 'testing', label: s('Testing', 'Testing'),
              fields: [
                fld('是否自填成績', 'Self-report scores?', 'choice', '是／否', 'Yes / no', 'req', ['A1-S6']),
                fld('ACT／SAT', 'ACT / SAT', 'count', '過去 5 次＋未來 3 次', '5 past + 3 future', 'cond', ['A1-S6']),
                fld('AP', 'AP', 'count', '15 科', '15', 'cond', ['A1-S6']),
                fld('IB', 'IB', 'count', '10 科', '10', 'cond', ['A1-S6']),
                fld('高中畢業會考', 'Leaving examinations', 'count', '10 筆', '10', 'cond', ['A1-S6', 'A1-S28'])
              ]
            },
            {
              id: 'activities', label: s('Activities and experiences', 'Activities and experiences'), sub: s('最多 10 項', 'Up to 10 entries'),
              fields: [
                fld('是否填寫活動', 'Report activities?', 'choice', '是／否', 'Yes / no', 'req', ['A1-S6'], 'Would you like to report any activities?'),
                fld('類型', 'Type', 'choice', '31 種', '31 types', 'ns', ['A1-S6', 'A1-S7']),
                fld('是否有特定職位', 'Specific position?', 'choice', '是／否', 'Yes / no', 'opt', ['A1-S6', 'A1-S7'], 'Did you have a specific position or leadership role'),
                fld('職位', 'Role', 'chars', '50 字元', '50 chars', 'opt', ['A1-S6', 'A1-S8', 'A1-S31'], 'What was your role?'),
                fld('組織或團體', 'Organization', 'chars', '100 字元', '100 chars', 'opt', ['A1-S6', 'A1-S31']),
                fld('活動描述', 'Description', 'chars', '150 字元', '150 chars', 'ns', ['A1-S6', 'A1-S31']),
                fld('參與年級', 'Grade levels', 'choice', '9–12、畢業後', '9–12, after HS', 'ns', ['A1-S6', 'A1-S7'], 'When did you participate?'),
                fld('一年中何時', 'Time of year', 'choice', '3 種', '3 options', 'ns', ['A1-S6', 'A1-S7']),
                fld('畢業後起訖日期', 'Post-HS dates', 'other', '1926–2027', '1926–2027', 'ns', ['A1-S6', 'A1-S7']),
                fld('每週時數', 'Hours per week', 'chars', '5 字元', '5 chars', 'ns', ['A1-S6']),
                fld('每年週數', 'Weeks per year', 'chars', '5 字元', '5 chars', 'ns', ['A1-S6']),
                fld('大學是否繼續', 'Continue in college?', 'choice', 'Yes／No／Not sure', 'Yes / No / Not sure', 'ns', ['A1-S6', 'A1-S7'], 'Do you plan on participating in this activity in college?'),
                fld('Responsibilities', 'Responsibilities', 'chars', '「其他」150 字元', '"other" 150 chars', 'req', ['A1-S6', 'A1-S12', 'A1-S32']),
                fld('Circumstances', 'Circumstances', 'choice', '勾選清單', 'checklist', 'req', ['A1-S6', 'A1-S12'])
              ]
            },
            {
              id: 'writing', label: s('Writing', 'Writing'),
              fields: [
                fld('個人主文', 'Personal essay', 'words', '250–650 字', '250–650 words', 'college', ['A1-S6', 'A1-S12']),
                fld('是否說明挑戰', 'Share challenges?', 'choice', '是／否', 'Yes / no', 'req', ['A1-S6'], 'Would you like to share any details about challenges or other circumstances you\'ve experienced?'),
                fld('Challenges and circumstances', 'Challenges and circumstances', 'words', '250 字', '250 words', 'cond', ['A1-S6', 'A1-S12']),
                fld('是否補充細節', 'Share additional details?', 'choice', '是／否', 'Yes / no', 'req', ['A1-S6'], 'Would you like to share any additional details or qualifications not reflected in the application?'),
                fld('Additional information', 'Additional information', 'words', '300 字', '300 words', 'cond', ['A1-S6', 'A1-S12']),
                fld('各校題目', 'College questions', 'other', '各校自訂', 'set by college', 'college', ['A1-S42', 'A1-S35'])
              ]
            },
            {
              id: 'courses-grades', label: s('Courses & Grades', 'Courses & Grades'), sub: s('只有名單上的學校要求', 'Only where a college requires it'),
              fields: [
                fld('學校、學年、量尺、學制', 'School, year, scale, schedule', 'ns', null, null, 'req', ['A1-S29']),
                fld('每門課', 'Each course', 'ns', null, null, 'req', ['A1-S29', 'A1-S5']),
                fld('Other Courses', 'Other Courses', 'ns', null, null, 'ns', ['A1-S29'])
              ]
            }
          ]
        },
        items: [
          f('Profile、Family、Education、Testing、Activities and experiences、Writing 都由學生填寫；推薦人表單由輔導老師、老師或 Other Recommender 填寫。', 'Profile, Family, Education, Testing, Activities and experiences, and Writing are all filled by the student; recommender forms are filled by the counselor, a teacher, or an Other Recommender.', ['A1-S12', 'A1-S35', 'A1-S20']),
          f('必填題以紅色星號標示，其餘為選填。', 'Required questions carry a red asterisk; the rest are optional.', ['A1-S28']),
          f('2026–27 申請表於 2026-08-01 開放；每個申請季最多送 20 所學校。', 'The 2026–27 application opened on 2026-08-01; an applicant can submit to at most 20 colleges per cycle.', ['A1-S4', 'A1-S37']),
          f('截止時間是截止日當天晚上 11:59，以**申請者所在地**時間計。', 'A deadline is met by submitting by 11:59 pm on the deadline date in the **applicant\'s own** time zone.', ['A1-S38']),
          f('已送出的申請（含 writing supplement）不能修改；個人主文在第一次送出後仍可無限次修改，供之後送其他學校使用。', 'A submitted application or writing supplement cannot be changed; the personal essay can be edited without limit after the first submission, for later submissions.', ['A1-S39', 'A1-S40']),
          inf('Data Catalog 中「Short」欄位的 Max Length 解讀為字元數、「Long」欄位的 Min/Max 解讀為英文字數：2025–26 的標籤寫著「(Max characters: 50)」，2026 PDF 對上限 250、300 的兩個 Long 欄位寫「Max word count」。', 'We read a catalog "Short" field\'s Max Length as characters and a "Long" field\'s Min/Max as words: the 2025–26 labels read "(Max characters: 50)", and the 2026 PDF says "Max word count" for the two Long fields whose catalog maximum is 250 and 300.', ['A1-S8', 'A1-S12', 'A1-S6'])
        ]
      },

      {
        id: 'profile',
        h: s('Profile（個人資料）', 'Profile'),
        judgment: s('姓名欄位 50 字元；語言最多 5 種；人口統計的延伸題全部選填。', 'Name fields take 50 characters; up to 5 languages; the additional demographic questions are all optional.'),
        intro: s('三張卡片仿照表單上的輸入格畫出來：格子寬度按上限縮放，可以直接在裡面打字看計數。星號是必填。', 'Three cards redraw the form\'s own input boxes: each box is scaled to its limit, and you can type in it to watch the count. An asterisk marks a required field.'),
        viz: {
          type: 'field-card',
          title: s('Profile 的文字格清一色 50 字元；其餘都是選項', 'Every free-text box in Profile is 50 characters; the rest are choices'),
          subtitle: s('語言最多 5 種，每種勾能力；fee waiver 是一題是／否加一個簽名格。', 'Up to 5 languages, each with proficiency boxes; the fee waiver is one yes/no plus a signature box.'),
          cards: [
            {
              label: s('姓名', 'Names'),
              rows: [
                row('法定名', 'Legal first name', 'text', { limit: 50, req: 'req', src: ['A1-S6'] }),
                row('法定姓', 'Legal last name', 'text', { limit: 50, req: 'req', src: ['A1-S6'] }),
                row('中間名', 'Middle name', 'text', { limit: 50, req: 'opt', src: ['A1-S6'] }),
                row('慣用名', 'Preferred name', 'text', { limit: 50, req: 'opt', src: ['A1-S6'] }),
                row('是否有曾用名', 'Any former name?', 'radio', { options: YN, req: 'req', src: ['A1-S6'] }),
                row('曾用名', 'Former name', 'text', { limit: 50, req: 'cond', src: ['A1-S6'] })
              ]
            },
            {
              label: s('語言', 'Languages'),
              rows: [
                row('語言數量', 'Number of languages', 'select', { options: ['1', '2', '3', '4', '5'], req: 'req', src: ['A1-S6'] }),
                row('每種語言的能力', 'Proficiency per language', 'check', { options: [s('母語', 'First language'), s('說', 'Speak'), s('讀', 'Read'), s('寫', 'Write'), s('家中使用', 'Spoken at home')], src: ['A1-S6', 'A1-S12'] }),
                row('「其他語言」', '"Other language"', 'text', { limit: 50, req: 'cond', src: ['A1-S6', 'A1-S12'] })
              ]
            },
            {
              label: s('Common App fee waiver', 'Common App fee waiver'),
              rows: [
                row('是否申請', 'Request a waiver?', 'radio', { options: YN, req: 'req', src: ['A1-S6', 'A1-S7'] }),
                row('聲明勾選（2026–27 新增）', 'Affirmation checkbox (new for 2026–27)', 'check', { options: [s('我確認符合資格', 'I affirm I qualify')], req: 'cond', src: ['A1-S6', 'A1-S7'] }),
                row('簽名', 'Signature', 'text', { limit: 50, req: 'cond', src: ['A1-S6'] })
              ]
            }
          ]
        },
        items: [
          f('2026–27 公民身分選項「U.S. resident」改名為「U.S. resident with other status」。', 'For 2026–27 the citizenship option "U.S. resident" was renamed "U.S. resident with other status".', ['A1-S1', 'A1-S7', 'A1-S12']),
          f('各校現在分別標示是否接受 Common App fee waiver：全部學生、僅美國學生、或都不接受。', 'Each fee-charging college now shows whether it accepts the Common App fee waiver for all students, U.S. students only, or none.', ['A1-S1', 'A1-S7'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('法定名／姓', 'Legal first / last name'), 'Short', f('各 50 字元', '50 characters each', ['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('中間名、慣用名、曾用名', 'Middle, preferred, and former names'), 'Short', f('各 50 字元', '50 characters each', ['A1-S6']), f('選填（是否有曾用名的是／否題必填）', 'Optional (the former-name yes/no is required)', ['A1-S6']), STUDENT],
              [s('出生日期', 'Date of birth'), 'Date', f('1906–2027', '1906–2027', ['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('永久地址；另一郵寄地址（是／否＋日期）', 'Permanent address; alternate mailing address (yes/no + dates)'), 'Address / Radio', ns(['A1-S6']), f('必填（另一地址為是／否題）', 'Required (alternate address as yes/no)', ['A1-S6']), STUDENT],
              [s('電話（含類型）；備用電話', 'Preferred phone (+ type); alternate phone'), 'Phone / Radio', ns(['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('語言數量與各語言能力（母語、說、讀、寫、家中使用）', 'Number of languages and proficiency (first, speak, read, write, spoken at home)'), 'Radio / Checkbox', f('1–5 種；「其他語言」50 字元', '1–5 languages; "other language" 50 characters', ['A1-S6', 'A1-S12']), f('語言數量必填', 'Number of languages required', ['A1-S6']), STUDENT],
              [s('性別、法定性別、代名詞、公民身分、出生地、在美年數', 'Gender, legal sex, pronouns, citizenship, birthplace, years in the US'), s('多種', 'various'), ns(['A1-S12']), f('依表單流程，公民身分區必填', 'Citizenship section required per form flow', ['A1-S12']), STUDENT],
              [s('延伸人口統計（軍人身分、Hispanic/Latino、種族、部落登記）', 'Additional demographics (military, Hispanic/Latino, race, tribal enrolment)'), s('多種', 'various'), ns(['A1-S12']), f('選填', 'Optional', ['A1-S12']), STUDENT],
              [s('Common App fee waiver（是／否＋新增的聲明勾選＋簽名）', 'Common App fee waiver (yes/no + new affirmation checkbox + signature)'), 'Radio / Checkbox / Short', f('簽名 50 字元', 'Signature 50 characters', ['A1-S6']), f('是／否題必填', 'Yes/no required', ['A1-S6', 'A1-S7']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'family',
        h: s('Family（家庭）', 'Family'),
        judgment: s('手足欄位從 5 人擴到 10 人；符合獨立生條件者不再回答父母與手足題。', 'The sibling count rose from 5 to 10; independent learners no longer answer the parent and sibling questions.'),
        intro: s('左卡是一位家長的格子（每位家長各填一組），中卡是手足（上方的方格數就是人數上限），右卡是獨立生改答的題組。', 'Left: the boxes for one parent (each parent gets a set). Middle: siblings, with the row of squares showing the count limit. Right: the set an independent learner answers instead.'),
        viz: {
          type: 'field-card',
          title: s('家長欄位最長 50 字元、雇主只有 30；手足最多 10 人', 'Parent boxes top out at 50 characters, employer at 30; siblings at 10'),
          subtitle: s('Data Catalog 沒有標示 Family 各格是否必填，所以這裡不畫星號。', 'The Data Catalog does not flag which Family boxes are required, so no asterisks are drawn here.'),
          cards: [
            {
              label: s('Parent 1／Parent 2／監護人／繼父母', 'Parent 1 / Parent 2 / guardian / step-parent'),
              rows: [
                row('名、姓', 'First and last name', 'text', { limit: 50, req: 'ns', src: ['A1-S6'] }),
                row('中間名縮寫', 'Middle initial', 'text', { limit: 2, req: 'ns', src: ['A1-S6'] }),
                row('其他稱謂', 'Other prefix', 'text', { limit: 24, req: 'ns', src: ['A1-S6'] }),
                row('其他職業', 'Other occupation', 'text', { limit: 50, req: 'ns', src: ['A1-S6'] }),
                row('雇主', 'Employer', 'text', { limit: 30, req: 'ns', src: ['A1-S6'] })
              ]
            },
            {
              label: s('手足', 'Siblings'),
              count: { n: 10, label: s('0–10 人（2025–26 為 5）', '0–10 (5 in 2025–26)'), src: ['A1-S1', 'A1-S7', 'A1-S6'] },
              rows: [
                row('姓名', 'Name', 'text', { limit: 50, req: 'ns', src: ['A1-S6'] }),
                row('年齡', 'Age', 'num', { limit: 2, req: 'ns', src: ['A1-S6'] })
              ]
            },
            {
              label: s('獨立生題組', 'Independent-learner set'),
              sub: s('23 歲以上或自認符合 FAFSA 定義的獨立生，改答這組。', 'Answered instead by a student who is 23+ or self-identifies as FAFSA-independent.'),
              rows: [
                row('適用身分', 'Statuses that apply', 'check', { n: 0, options: [s('勾選清單', 'Checklist')], req: 'ns', src: ['A1-S1', 'A1-S7'] }),
                row('父母是否有學士以上學位', 'Parent with a bachelor\'s or higher?', 'radio', { options: YN, req: 'ns', src: ['A1-S1', 'A1-S7'] }),
                row('與誰同住（說明）', 'Who you live with (detail)', 'text', { limit: 100, req: 'ns', src: ['A1-S1', 'A1-S7'] }),
                row('其他居住情形（家庭狀況題）', 'Other living situation (household question)', 'text', { limit: 100, req: 'ns', src: ['A1-S6'] })
              ]
            }
          ]
        },
        items: [
          f('新的獨立生分流：23 歲以上，或自認符合 FAFSA 定義的獨立生，不再回答父母與手足題，改答上表最後一列的題組。', 'New independent-learner routing: a student who is 23+ or self-identifies as FAFSA-independent skips the parent and sibling questions and answers the set in the last row instead.', ['A1-S1', 'A1-S4', 'A1-S7']),
          f('說明簡報寫「23 歲以上」，Data Catalog 的計算欄位卻是「申請季當年 12/31 滿 24 歲」，查到的頁面都未說明兩者如何對應。', 'The webinar deck says "23+", while the catalog\'s computed field is "24 or older on Dec 31 of the cycle year"; no page checked reconciles the two.', ['A1-S1', 'A1-S7']),
          f('2026 申請表 PDF 仍寫「超過 3 位手足請用 Additional information」，與 Data Catalog 的 10 人上限不一致。', 'The 2026 application PDF still tells students with "more than 3 siblings" to use Additional information, which conflicts with the catalog\'s 10-sibling limit.', ['A1-S12', 'A1-S6']),
          inf('兩者不一致時以 Data Catalog（2026-08-18）為準，因為它是較晚的文件。', 'Where they disagree, the catalog (2026-08-18) is the later document and is followed here.', ['A1-S6', 'A1-S12'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('家庭狀況：父母婚姻狀態、永久居所、其他居住情形', 'Household: parents\' marital status, permanent home, other living situation'), 'Radio / Short', f('其他居住情形 100 字元', 'Other living situation 100 characters', ['A1-S6']), ns(['A1-S6']), STUDENT],
              [s('子女數', 'Number of children'), 'Short', f('2 字元', '2 characters', ['A1-S6']), ns(['A1-S6']), STUDENT],
              [s('Parent 1／Parent 2／法定監護人／繼父母', 'Parent 1 / Parent 2 / legal guardian / step-parent'), s('多種', 'various'), f('姓名 50 字元、中間名縮寫 2、其他稱謂 24、其他職業 50、雇主 30', 'Names 50 characters, middle initial 2, other prefix 24, other occupation 50, employer 30', ['A1-S6']), ns(['A1-S6']), STUDENT],
              [s('手足人數；姓名、年齡', 'Number of siblings; name, age'), 'Dropdown / Short', f('0–10 人（2025–26 為 5）；姓名 50 字元、年齡 2 字元', '0–10 (5 in 2025–26); name 50 characters, age 2 characters', ['A1-S1', 'A1-S7', 'A1-S6']), ns(['A1-S6']), STUDENT],
              [s('獨立生題組：適用身分、父母是否有學士以上學位、與誰同住（＋說明）', 'Independent-learner set: statuses, parent with a bachelor\'s degree or higher, who you live with (+ detail)'), 'Checkbox / Radio / Short', f('說明 100 字元', 'Detail 100 characters', ['A1-S1', 'A1-S7']), ns(['A1-S7']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'education',
        h: s('Education（教育背景）', 'Education'),
        judgment: s('說明類欄位都是 250 字；排名與 GPA 為選填；Honors 最多 5 項、名稱 100 字元。', 'Every explanation box is 250 words; rank and GPA are optional; Honors take up to 5 entries at 100 characters per title.'),
        intro: s('第一張卡是一項 Honors 的格子（上方 5 個方格是項數上限），第二張是本學年課程，第三張是三個 250 字的說明框，只有答了對應的問題才出現。', 'The first card is one Honors entry (the 5 squares above it are the entry limit), the second the current-year course list, the third the three 250-word explanation boxes that open only after the matching answer.'),
        viz: {
          type: 'field-card',
          title: s('Honors 只有名稱一格 100 字元；Education 真正能寫字的是三個 250 字的條件說明框', 'An Honors entry has one 100-character title box; the real writing room in Education is three conditional 250-word boxes'),
          subtitle: s('層級四選一；年級可複選。課程層級的 17 種選項與 GPA 規則見下方清單。', 'Level is one of four; grade levels can be ticked together. The 17 course levels and the GPA rules are in the list below.'),
          cards: [
            {
              label: s('Honors（一項）', 'Honors (one entry)'),
              count: { n: 5, label: s('最多 5 項', 'Up to 5'), src: ['A1-S6', 'A1-S12'] },
              rows: [
                row('名稱', 'Title', 'text', { limit: 100, req: 'opt', src: ['A1-S6', 'A1-S12'] }),
                row('年級', 'Grade level', 'check', { options: GRADES.concat(['PG']), req: 'opt', src: ['A1-S6', 'A1-S12'] }),
                row('層級', 'Level', 'radio', { options: ['School', 'State/Regional', 'National', 'International'], req: 'opt', src: ['A1-S6', 'A1-S12'] })
              ]
            },
            {
              label: s('本學年課程', 'Current-year courses'),
              count: { n: 15, label: s('1–15 門', '1–15 courses'), src: ['A1-S6'] },
              rows: [
                row('課名', 'Course name', 'text', { limit: 100, req: 'req', src: ['A1-S6'] }),
                row('課程層級', 'Course level', 'select', { n: 17, options: ['Regular/Standard', 'AP', 'IB', 'AS/A-level', 'Dual Enrollment', 'GCSE/IGCSE', 'Honors'], src: ['A1-S6', 'A1-S29'] })
              ]
            },
            {
              label: s('條件說明框', 'Conditional explanation boxes'),
              rows: [
                row('未畢業說明', 'If not graduating', 'words', { limit: 250, req: 'cond', src: ['A1-S6'] }),
                row('學程進度說明（提早／延後畢業、休學、gap year）', 'Progression (early / late graduation, time off, gap year)', 'words', { limit: 250, req: 'cond', src: ['A1-S6', 'A1-S12'] }),
                row('離開其他中學的原因（每所一格，最多 3 所）', 'Reason for leaving another school (one per school, up to 3)', 'words', { limit: 250, req: 'cond', src: ['A1-S6'] })
              ]
            }
          ]
        },
        items: [
          f('學校同時提供加權與未加權排名／GPA 時，填加權；學校的 GPA 量尺不在下拉選單中時，GPA 留白。', 'If the school reports both weighted and unweighted rank or GPA, report the weighted one; if the school\'s scale is not in the dropdown, leave GPA blank.', ['A1-S28']),
          f('課程層級選項含 Regular/Standard、AP、IB、AS/A-level、Dual Enrollment、GCSE/IGCSE、Honors 等共 17 種。', 'Course levels on offer include Regular/Standard, AP, IB, AS/A-level, Dual Enrollment, GCSE/IGCSE, Honors and others, 17 in all.', ['A1-S6', 'A1-S29'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('目前／最近就讀學校、入學日期、是否住宿、畢業或離校日期', 'Current or most recent school, entry date, boarding, graduation or exit date'), 'Lookup / Month / Radio', ns(['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('未畢業說明', 'Explanation if not graduating'), 'Long', f('1–250 字', '1–250 words', ['A1-S6']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('學程進度（提早／延後畢業、休學、gap year）＋說明', 'Progression (early / late graduation, time off, gap year) + explanation'), 'Checkbox / Long', f('1–250 字', '1–250 words', ['A1-S6', 'A1-S12']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('其他就讀過的中學', 'Other secondary schools'), 'Radio + lookup', f('0–3 所；離校原因 1–250 字', '0–3 schools; reason for leaving 1–250 words', ['A1-S6']), f('數量必填', 'Number required', ['A1-S6']), STUDENT],
              [s('修過課的大學（雙聯、暑期、直接修學分）', 'Colleges and universities (dual enrolment, summer, direct credit)'), 'Radio + lookup', f('0–3 所', '0–3 colleges', ['A1-S6', 'A1-S29']), f('數量必填', 'Number required', ['A1-S6']), STUDENT],
              [s('畢業班人數', 'Graduating class size'), 'Short', f('5 字元', '5 characters', ['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('班排名（精確／十分位／五分位／四分位／無）與加權', 'Class rank (exact / decile / quintile / quartile / none) and weighting'), 'Short / Dropdown', f('5 字元', '5 characters', ['A1-S6']), f('選填', 'Optional', ['A1-S6']), STUDENT],
              [s('GPA 量尺、累計 GPA、加權', 'GPA scale, cumulative GPA, weighting'), 'Dropdown / Short', f('GPA 6 字元', 'GPA 6 characters', ['A1-S6']), f('選填', 'Optional', ['A1-S6', 'A1-S28']), STUDENT],
              [s('本學年（或最近一年）課程', 'Current or most recent year courses'), 'Dropdown', f('1–15 門；課名 100 字元', '1–15 courses; course name 100 characters', ['A1-S6']), f('課程數與學制必填', 'Number of courses and schedule system required', ['A1-S6']), STUDENT],
              [s('Honors', 'Honors'), 'Radio + Short', f('最多 5 項；名稱 100 字元；年級 9/10/11/12/PG；層級 School／State-Regional／National／International', 'Up to 5; title 100 characters; grade 9/10/11/12/PG; level School / State-Regional / National / International', ['A1-S6', 'A1-S12']), f('是／否題必填；各項選填', 'Yes/no required; entries optional', ['A1-S6']), STUDENT],
              [s('社區組織（CBO）', 'Community-based organizations'), 'Radio + Dropdown', f('0–3 個；「其他」組織名 100 字元；聯絡人姓名各 20 字元', '0–3; "other" organization name 100 characters; contact first and last name 20 characters each', ['A1-S6']), f('數量必填', 'Number required', ['A1-S6']), STUDENT],
              [s('未來規劃：入學年、最高學位目標、職涯興趣（其他 100 字元）', 'Future plans: start year, highest intended degree, career interest (other 100 characters)'), 'Dropdown', f('其他 100 字元', 'Other 100 characters', ['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'testing',
        h: s('Testing（考試成績自填）', 'Testing (self-report)'),
        judgment: s('只有一題必填的閘門題；自填不等於寄送正式成績，寄送仍是學生的責任。', 'One required gate question; self-reporting does not replace official score reports, which remain the student\'s job.'),
        intro: s('每一列的方格數就是能填的場次或科目數；只有第一題是必填，其餘都在答「是」之後才出現。', 'The squares in each row are the sittings or subjects that fit; only the first question is required, and the rest appear after a "yes".'),
        viz: {
          type: 'field-card',
          title: s('Testing 幾乎沒有文字格：是一題閘門題加上 5＋3、15、10、10 個成績格', 'Testing has almost no text: one gate question, then 5 + 3, 15, 10 and 10 score slots'),
          subtitle: s('會考那一列只有在「升學是否以會考決定」答「是」時才出現；科目 30 字元、成績 5 字元。', 'The leaving-examination row opens only when promotion depends on such exams; subject 30 characters, score 5 characters.'),
          cards: [
            {
              label: s('成績自填', 'Self-reported scores'),
              rows: [
                row('是否自填成績或未來考試日期', 'Self-report scores or future test dates?', 'radio', { options: YN, req: 'req', src: ['A1-S6'] }),
                row('ACT／SAT 過去場次', 'ACT / SAT past sittings', 'slots', { n: 5, req: 'cond', src: ['A1-S6'] }),
                row('ACT／SAT 未來場次', 'ACT / SAT future sittings', 'slots', { n: 3, req: 'cond', src: ['A1-S6'] }),
                row('AP', 'AP', 'slots', { n: 15, req: 'cond', src: ['A1-S6'] }),
                row('IB', 'IB', 'slots', { n: 10, req: 'cond', src: ['A1-S6'] }),
                row('高中畢業會考', 'Senior Secondary Leaving Examinations', 'slots', { n: 10, req: 'cond', src: ['A1-S6', 'A1-S28'] }),
                row('會考科目', 'Leaving-exam subject', 'text', { limit: 30, req: 'cond', src: ['A1-S6', 'A1-S28'] }),
                row('會考成績', 'Leaving-exam score', 'num', { limit: 5, req: 'cond', src: ['A1-S6', 'A1-S28'] })
              ]
            }
          ]
        },
        items: [
          f('不論 Score Choice，自填最佳成績；學校要求的正式成績單仍須由學生安排寄送。', 'Self-report your best scores regardless of Score Choice; sending official reports where required remains the applicant\'s responsibility.', ['A1-S41']),
          f('2026–27 更新 Duolingo（總分＋分項）、PTE（Academic 與 Express）、TOEFL iBT（加入 1–6 級分）欄位；AP 新增 Business with Personal Finance、Cybersecurity、Networking。', '2026–27 updated the Duolingo (overall + subscores), PTE (Academic and Express) and TOEFL iBT (1–6 band scores) fields, and added AP Business with Personal Finance, Cybersecurity and Networking.', ['A1-S1', 'A1-S7'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('是否自填成績或未來考試日期（ACT、SAT、AP、IB、Cambridge、TOEFL、PTE、IELTS、Duolingo 等）', 'Self-report scores or future test dates (ACT, SAT, AP, IB, Cambridge, TOEFL, PTE, IELTS, Duolingo, etc.)?'), 'Radio', ns(['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('ACT／SAT', 'ACT / SAT'), 'Dropdown / Short', f('過去最多 5 次、未來最多 3 次', 'Up to 5 past and 3 future sittings', ['A1-S6']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('AP', 'AP'), 'Dropdown', f('最多 15 科', 'Up to 15 tests', ['A1-S6']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('IB', 'IB'), 'Dropdown', f('最多 10 科', 'Up to 10', ['A1-S6']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('高中畢業會考（Senior Secondary Leaving Examinations）', 'Senior Secondary Leaving Examinations'), 'Dropdown / Short', f('最多 10 筆；30 個考試局或「Other」；科目 30 字元、成績 5 字元', 'Up to 10; 30 boards or "Other"; subject 30 characters, score 5 characters', ['A1-S6', 'A1-S28']), f('條件題（升學是否以會考決定，選「是」才出現）', 'Conditional (opens when promotion depends on leaving exams)', ['A1-S28', 'A1-S6']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'activities',
        h: s('Activities and experiences（活動與經歷）', 'Activities and experiences'),
        judgment: s('10 項、每項 50／100／150 字元，2026–27 沒有放寬；改變的是職位欄變選填、畢業後經歷有起訖日期。', '10 entries at 50 / 100 / 150 characters each, unchanged for 2026–27; what changed is that the role field is optional and post-high-school experiences get start and end dates.'),
        intro: s('左卡是一項活動的完整格子，三個文字格的寬度就是 50、100、150 字元的比例，可以試打；上方 10 個方格是項數上限。右卡是 2024–25 起加入的 Responsibilities and circumstances，每位申請者都要答。', 'Left: the full set of boxes for one activity; the three text boxes are drawn in the 50 : 100 : 150 ratio of their limits, and you can type in them. The 10 squares above are the entry limit. Right: the Responsibilities and circumstances questions every applicant answers.'),
        viz: {
          type: 'field-card',
          title: s('一項活動只有 300 字元可寫：職位 50、組織 100、描述 150，其餘全是勾選', 'One activity holds 300 characters of writing: 50 for the role, 100 for the organization, 150 for the description; everything else is a tick'),
          subtitle: s('2026–27 先問是否有特定職位，答「是」才出現職位格；畢業後的經歷改填起訖月份。', 'For 2026–27 a yes/no on having a specific position comes first and the role box opens on "yes"; post-high-school experiences take start and end months instead of grade levels.'),
          cards: [
            {
              label: s('一項活動或經歷', 'One activity or experience'),
              count: { n: 10, label: s('最多 10 項', 'Up to 10 entries'), src: ['A1-S6', 'A1-S12', 'A1-S31'] },
              rows: [
                row('類型', 'Type', 'select', { n: 31, req: 'ns', src: ['A1-S6', 'A1-S7'] }),
                row('是否有特定職位或領導角色', 'Specific position or leadership role?', 'radio', { q: 'Did you have a specific position or leadership role', options: YN, req: 'opt', src: ['A1-S6', 'A1-S7'] }),
                row('職位', 'Role', 'text', { q: 'What was your role?', limit: 50, req: 'opt', src: ['A1-S6', 'A1-S8', 'A1-S31'] }),
                row('組織或團體（如有）', 'Organization or group (if applicable)', 'text', { limit: 100, req: 'opt', src: ['A1-S6', 'A1-S31'] }),
                row('活動描述（含成果與獲得的肯定）', 'Description, including what you accomplished and any recognition', 'text', { limit: 150, req: 'ns', src: ['A1-S6', 'A1-S31'] }),
                row('參與年級', 'Grade levels', 'check', { q: 'When did you participate?', options: GRADES.concat([s('高中畢業後', 'After graduating high school')]), req: 'ns', src: ['A1-S6', 'A1-S7'] }),
                row('高中期間：一年中何時', 'During high school: time of year', 'check', { options: [s('學期中', 'School year'), s('假期', 'School break'), s('全年', 'All year')], req: 'ns', src: ['A1-S6', 'A1-S7'] }),
                row('高中畢業後：開始、是否仍在進行、結束', 'After high school: start, still participating, end', 'date', { range: '1926–2027', req: 'ns', src: ['A1-S6', 'A1-S7'] }),
                row('每週時數', 'Hours per week', 'num', { limit: 5, req: 'ns', src: ['A1-S6'] }),
                row('每年週數', 'Weeks per year', 'num', { limit: 5, req: 'ns', src: ['A1-S6'] }),
                row('大學是否繼續參與', 'Continue in college?', 'radio', { q: 'Do you plan on participating in this activity in college?', options: ['Yes', 'No', 'Not sure'], req: 'ns', src: ['A1-S6', 'A1-S7'] })
              ]
            },
            {
              label: s('Responsibilities and circumstances', 'Responsibilities and circumstances'),
              sub: s('每位申請者都答，與活動項數無關。', 'Answered by every applicant, separate from the activity entries.'),
              rows: [
                row('每週 4 小時以上的家庭或經濟責任', 'Responsibilities taking 4+ hours a week', 'check', { options: [s('勾選清單', 'Checklist'), s('其他', 'Other')], req: 'req', src: ['A1-S6', 'A1-S32'] }),
                row('「其他」說明', '"Other" description', 'text', { limit: 150, req: 'cond', src: ['A1-S6', 'A1-S12'] }),
                row('處境：通勤 60 分鐘以上、居住不穩定、缺水電網路等', 'Circumstances: 60+ minute commute, unstable housing, no reliable utilities or internet', 'check', { options: [s('勾選清單', 'Checklist')], req: 'req', src: ['A1-S6', 'A1-S12'] })
              ]
            }
          ]
        },
        items: [
          f('最多 10 項，「不必填滿 10 項」。', 'Up to 10 entries, with "no pressure to add all 10".', ['A1-S6', 'A1-S12', 'A1-S31']),
          f('新說明文字：可以填自學或不屬於正式團體的活動，以高中期間及之後為主。', 'New instruction text: self-taught activities and ones outside any official group are welcome; focus on high school and later.', ['A1-S6', 'A1-S12']),
          f('每週時數與每年週數可接受的數值範圍：除了 5 字元欄位長度之外未載明。', 'Accepted numeric range for hours/week and weeks/year: not stated beyond the 5-character field length.', ['A1-S6']),
          f('Responsibilities and circumstances 原是試行的「Student Context Inventory」；2024–25 試行時 31% 第一年申請者看到這題，其中 65% 至少勾一項。', 'Responsibilities and circumstances began as the "Student Context Inventory" pilot; in 2024–25, 31% of first-year applicants saw it and 65% of those ticked at least one item.', ['A1-S32'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('是否填寫活動', '"Would you like to report any activities?"'), 'Radio', ns(['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('活動或經歷類型', 'Activity or experience type'), 'Dropdown', f('31 種', '31 types', ['A1-S6', 'A1-S7']), ns(['A1-S6']), STUDENT],
              [s('是否有特定職位或領導角色', '"Did you have a specific position or leadership role"'), 'Radio', f('是／否', 'Yes / no', ['A1-S6']), f('選填（2026–27 新增）', 'Optional (new for 2026–27)', ['A1-S6', 'A1-S7']), STUDENT],
              [s('「What was your role?」（原 Position/Leadership description）', '"What was your role?" (was "Position/Leadership description")'), 'Short', f('**50 字元**', '**50 characters**', ['A1-S6', 'A1-S8', 'A1-S31']), f('選填', 'Optional', ['A1-S6', 'A1-S1']), STUDENT],
              [s('組織或團體（如有）', 'Organization or group (if applicable)'), 'Short', f('**100 字元**', '**100 characters**', ['A1-S6', 'A1-S31']), f('選填', 'Optional', ['A1-S6']), STUDENT],
              [s('活動描述（含成果與獲得的肯定）', 'Description, including what you accomplished and any recognition'), 'Short', f('**150 字元**', '**150 characters**', ['A1-S6', 'A1-S31']), ns(['A1-S6']), STUDENT],
              [s('參與年級', '"When did you participate?"'), 'Checkbox', f('9、10、11、12 年級、高中畢業後', '9th, 10th, 11th, 12th, after graduating high school', ['A1-S6', 'A1-S7']), ns(['A1-S6']), STUDENT],
              [s('高中期間：一年中何時', 'During high school: time of year'), 'Checkbox', f('學期中／假期／全年', 'School year / school break / all year', ['A1-S6', 'A1-S7']), ns(['A1-S6']), STUDENT],
              [s('高中畢業後：開始日期、是否仍在進行、結束日期', 'After high school: start date, still participating, end date'), 'Month / Radio', f('1926–2027', '1926–2027', ['A1-S6', 'A1-S7']), ns(['A1-S6']), STUDENT],
              [s('每週時數', 'Hours per week'), 'Short', f('5 字元', '5 characters', ['A1-S6']), ns(['A1-S6']), STUDENT],
              [s('每年週數', 'Weeks per year'), 'Short', f('5 字元', '5 characters', ['A1-S6']), ns(['A1-S6']), STUDENT],
              [s('大學是否繼續參與', '"Do you plan on participating in this activity in college?"'), 'Radio', f('Yes／No／Not sure', 'Yes / No / Not sure', ['A1-S6', 'A1-S7']), ns(['A1-S6']), STUDENT],
              [s('Responsibilities：每週 4 小時以上的家庭或經濟責任清單', 'Responsibilities taking 4+ hours a week (checklist)'), 'Checkbox / Short', f('「其他」說明 150 字元', '"Other" description 150 characters', ['A1-S6', 'A1-S12']), f('必填', 'Required', ['A1-S6', 'A1-S32']), STUDENT],
              [s('Circumstances：通勤 60 分鐘以上、居住不穩定、缺水電網路等清單', 'Circumstances: 60+ minute commute, unstable housing, no reliable utilities or internet, etc.'), 'Checkbox', ns(['A1-S6']), f('必填', 'Required', ['A1-S6', 'A1-S12']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'writing',
        h: s('Writing（寫作）', 'Writing'),
        judgment: s('寫作只有三個共同欄位：主文 250–650 字、Challenges and circumstances 250 字、Additional information 300 字；其餘都是各校自己的題目。', 'There are three shared writing boxes: the personal essay at 250–650 words, Challenges and circumstances at 250, Additional information at 300. Everything else is each college\'s own question.'),
        intro: s('下圖把學生在 Common App 各區能寫的總量疊起來：一段是一種格子，長度是「每格上限 × 格數」。字元與英文字數是不同單位，分成兩組、各用自己的軸。橘色段是本頁推論中校外做的事能寫進去的格子；斜紋段是答「是」才出現的條件題。', 'The figure stacks all the writing room a student has in each Common App section: one segment per box type, sized as limit × number of boxes. Characters and words are different units, so they sit in two groups with separate axes. Orange segments are the boxes where, by this page\'s inference, work done outside school can be described; striped segments open only after a "yes".'),
        viz: {
          type: 'budget-stack',
          title: s('學生在 Common App 自己動手寫的空間：活動區最多 3,000 字元，Writing 區最多 1,200 字', 'All the writing a student does in Common App adds up to 3,000 characters in Activities and 1,200 words in Writing'),
          subtitle: s('合計是「上限 × 格數」的算術，屬推論；每格上限出自 2026–27 Data Catalog。主文字數由各校決定是否要求；條件框只在答「是」後出現，所以上限是天花板，不是常態。', 'Totals are limit × box count, our arithmetic; each limit comes from the 2026–27 Data Catalog. Whether the essay is required is each college\'s call, and conditional boxes open only after a "yes", so the totals are ceilings, not typical lengths.'),
          groups: [
            {
              unit: 'chars', label: s('以字元計的區', 'Sections counted in characters'),
              bars: [
                { label: s('Activities and experiences（10 項）', 'Activities and experiences (10 entries)'), segs: [
                  { label: s('職位「What was your role?」', 'Role, "What was your role?"'), value: 50, times: 10, outside: true, src: ['A1-S6', 'A1-S8', 'A1-S31'], note: s('2026–27 起為選填。', 'Optional from 2026–27.') },
                  { label: s('組織或團體', 'Organization or group'), value: 100, times: 10, outside: true, src: ['A1-S6', 'A1-S31'] },
                  { label: s('活動描述', 'Description'), value: 150, times: 10, outside: true, src: ['A1-S6', 'A1-S31'] }
                ] },
                { label: s('Education：Honors（5 項）', 'Education: Honors (5 entries)'), segs: [
                  { label: s('名稱', 'Title'), value: 100, times: 5, src: ['A1-S6', 'A1-S12'] }
                ] },
                { label: s('Responsibilities「其他」', 'Responsibilities, "other"'), segs: [
                  { label: s('「其他」說明', '"Other" description'), value: 150, cond: true, src: ['A1-S6', 'A1-S12'] }
                ] }
              ]
            },
            {
              unit: 'words', label: s('以英文字數計的區', 'Sections counted in words'),
              bars: [
                { label: s('Writing', 'Writing'), segs: [
                  { label: s('個人主文', 'Personal essay'), value: 650, src: ['A1-S6', 'A1-S12'], note: s('250–650 字；是否要求由各校決定。', '250–650 words; whether it is required is each college\'s call.') },
                  { label: s('Challenges and circumstances', 'Challenges and circumstances'), value: 250, cond: true, src: ['A1-S6', 'A1-S12'] },
                  { label: s('Additional information', 'Additional information'), value: 300, cond: true, outside: true, src: ['A1-S6', 'A1-S12'] }
                ] },
                { label: s('Education：條件說明框', 'Education: conditional explanations'), segs: [
                  { label: s('未畢業說明', 'If not graduating'), value: 250, cond: true, src: ['A1-S6'] },
                  { label: s('學程進度說明', 'Progression'), value: 250, cond: true, src: ['A1-S6', 'A1-S12'] },
                  { label: s('離開其他中學的原因', 'Reason for leaving another school'), value: 250, times: 3, cond: true, src: ['A1-S6'] }
                ] }
              ]
            }
          ]
        },
        items: [
          f('2026–27 主文題目與 2025–26 相同。2025–26 的選題比例：自選題 28%、逆境 23%、成長 20%、背景 18%、好奇心 5%、感謝 3%、挑戰既有想法 3%。', '2026–27 essay prompts are unchanged from 2025–26. 2025–26 choice shares: topic of choice 28%, adversity 23%, growth 20%, background 18%, curiosity 5%, gratitude 3%, challenging an idea 3%.', ['A1-S1', 'A1-S3', 'A1-S2']),
          f('寫作出現在三個地方：個人主文、各校題目、部分學校另設的 writing supplement（有時由其他答案觸發）。', 'Writing appears in three places: the personal essay, college-specific questions, and a separate writing supplement some colleges use (sometimes triggered by other answers).', ['A1-S35']),
          f('2026–27 新增：學校可以依約 30 題 My Common Application 答案決定顯示或隱藏自己的題目。', 'New in 2026–27: colleges can show or hide their own questions based on answers to about 30 My Common Application questions.', ['A1-S1'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('個人主文（7 題選 1）', 'Personal essay (choose 1 of 7 prompts)'), 'Long', f('250–650 字', '250–650 words', ['A1-S6', 'A1-S12']), f('由各校決定；不要求的學校，送出時學生可選擇附或不附', 'Set by each college; where not required, the student chooses at submission whether to include it', ['A1-S6', 'A1-S35']), STUDENT],
              [s('是否說明遭遇的挑戰或處境', '"Would you like to share any details about challenges or other circumstances you\'ve experienced?"'), 'Radio', f('是／否', 'Yes / no', ['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('Challenges and circumstances 說明', 'Challenges and circumstances details'), 'Long', f('**1–250 字**', '**1–250 words**', ['A1-S6', 'A1-S12']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('是否補充申請表未呈現的細節', '"Would you like to share any additional details or qualifications not reflected in the application?"'), 'Radio', f('是／否', 'Yes / no', ['A1-S6']), f('必填', 'Required', ['A1-S6']), STUDENT],
              [s('Additional information', 'Additional information'), 'Long', f('**1–300 字**', '**1–300 words**', ['A1-S6', 'A1-S12']), f('條件題', 'Conditional', ['A1-S6']), STUDENT],
              [s('各校題目與 writing supplement', 'College-specific questions and writing supplements'), s('各校自訂', 'set by college'), f('各校自訂字數，系統會擋超出範圍的答案；部分短答的上限未列出', 'Each college sets its own counts; the system flags answers outside the limit; some short answers have unlisted limits', ['A1-S42']), f('各校自訂', 'Set by each college', ['A1-S35']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'courses-grades',
        h: s('Courses & Grades（課程與成績，僅部分學校要求）', 'Courses & Grades (only where a college requires it)'),
        judgment: s('只有名單上的學校要求；依高中成績單逐門填，沒列在高中成績單上的大學課不填在這裡。', 'Only colleges on Common App\'s list require it; courses are entered as they appear on the high school transcript, and college courses not on that transcript do not go here.'),
        intro: s('這一區的格子本頁畫不出寬度：每門課要填的五樣東西都查得到，字元上限卻在另一份本次未下載的 Data Catalog 裡，所以全部是虛線框。', 'This section\'s boxes cannot be drawn to width: the five things entered per course are known, but their character limits sit in a separate Data Catalog not downloaded this run, so every box is dashed.'),
        viz: {
          type: 'field-card',
          title: s('Courses & Grades 每門課填五樣東西，但每一格的字元上限都還查不到', 'Each Courses & Grades course takes five entries, and none of their character limits has been checked yet'),
          subtitle: s('虛線框表示「未載明」，不是沒有上限。76 筆學校名單見下方。', 'A dashed box means "not stated", not "no limit". The 76-entry list of colleges is below.'),
          cards: [
            {
              label: s('一門課（依高中成績單）', 'One course (as on the high school transcript)'),
              rows: [
                row('科目', 'Subject', 'ns', { req: 'req', src: ['A1-S29', 'A1-S5'] }),
                row('課名', 'Course name', 'ns', { req: 'req', src: ['A1-S29', 'A1-S5'] }),
                row('層級', 'Level', 'ns', { req: 'req', src: ['A1-S29', 'A1-S5'] }),
                row('成績（至少一個）', 'Grade (at least one)', 'ns', { req: 'req', src: ['A1-S29', 'A1-S5'] }),
                row('學分（至少一個）', 'Credit (at least one)', 'ns', { req: 'req', src: ['A1-S29', 'A1-S5'] })
              ]
            }
          ]
        },
        items: [
          f('2025–26 有 77 所學校使用 Courses & Grades，38 所使用另一套系統 STARS（不在 Common App 內）。', 'In 2025–26, 77 colleges used Courses & Grades and 38 used STARS, a separate system outside Common App.', ['A1-S29']),
          f('Common App 目前的要求名單共 76 筆（「不在名單上就不用填」），其中有 Carnegie Mellon、Purdue、Stanford、Amherst 等。', 'Common App\'s current list has 76 entries ("If your college is not on this list, you do not need to complete the Courses & Grades section"), including Carnegie Mellon, Purdue, Stanford and Amherst.', ['A1-S30']),
          inf('名單中有一筆是獎學金基金會而非學校，所以頒授學位的機構是 76 筆中的 75 筆。', 'One entry is a scholarship foundation rather than a college, so 75 of the 76 entries grant degrees.', ['A1-S30']),
          f('Courses & Grades 各欄位的字元上限：本頁未列（另有一份 2026–2027 Courses & Grades Data Catalog，本次未下載）。', 'Per-field character limits for Courses & Grades are not given here (a separate 2026–2027 Courses & Grades Data Catalog exists but was not downloaded this run).', ['A1-S5'])
        ],
        subs: [{
          h: FIELD_LIST,
          table: {
            cols: COLS,
            rows: [
              [s('學校名稱、學年、評分量尺、學制', 'School name, school year, grading scale, schedule'), s('多種', 'various'), ns(['A1-S29']), f('必填', 'Required', ['A1-S29']), STUDENT],
              [s('每門課：科目、課名、層級、至少一個成績、至少一個學分', 'Each course: subject, course name, level, at least one grade, at least one credit'), s('多種', 'various'), ns(['A1-S29', 'A1-S5']), f('必填', 'Required', ['A1-S29']), STUDENT],
              [s('Other Courses（國中、12 年級後、暑期，且出現在高中成績單上的課）', 'Other Courses (middle school, post-12th, or summer courses that appear on the HS transcript)'), s('多種', 'various'), ns(['A1-S29']), ns(['A1-S29']), STUDENT]
            ]
          }
        }]
      },

      {
        id: 'writing-changes',
        h: s('近兩季改了什麼（常被寫錯的地方）', 'What changed in the last two cycles (often misreported)'),
        judgment: s('Additional information 從 2025–26 起就是 300 字，不是 650；仍寫 650 的指南說的是 2024–25 的欄位。', 'Additional information has been 300 words since 2025–26, not 650; guides that still say 650 describe the 2024–25 field.'),
        intro: s('下圖把最常被引用錯的幾個上限排在一起，字元一組、字數一組；每一條都只畫官方頁查得到的數字。', 'The figure lines up the limits most often misquoted, characters in one group and words in another; each bar draws only a figure an official page states.'),
        viz: {
          type: 'budget',
          title: s('學生能寫的最長一格是 650 字；一項活動的描述只有 150 字元', 'The longest box a student writes is 650 words; an activity description gets 150 characters'),
          subtitle: s('字元與英文字數是不同單位，兩組各用自己的軸，不能互相比長短。數值只取官方頁查得到的。', 'Characters and words are different units, so each group has its own axis and the two should not be compared by length. Values are only those an official page states.'),
          groups: [
            {
              label: s('以字元計的欄位', 'Fields counted in characters'), unit: 'chars',
              items: [
                { label: s('Activities：「What was your role?」', 'Activities: "What was your role?"'), value: 50, src: ['A1-S6', 'A1-S8', 'A1-S31'], note: s('2026–27 起為選填，先答是否有特定職位。', 'Optional from 2026–27, after a yes/no on whether there was a specific role.') },
                { label: s('Activities：組織或團體', 'Activities: organization or group'), value: 100, src: ['A1-S6', 'A1-S31'] },
                { label: s('Activities：活動描述', 'Activities: description'), value: 150, src: ['A1-S6', 'A1-S31'], note: s('最多 10 項，每項一格。', 'One box per entry, up to 10 entries.') },
                { label: s('Honors：名稱', 'Honors: title'), value: 100, src: ['A1-S6', 'A1-S12', 'C1-S34', 'C1-S38'], note: s('出自 2026–27 Data Catalog；一般公開說明頁沒有印出這個數字。', 'From the 2026–27 Data Catalog; the general public pages checked do not print this figure.') },
                { label: s('UC Activities & awards：描述', 'UC Activities & awards: description'), value: 350, src: ['A2-S6', 'A2-S3'], note: s('出自 UCSB 校區工作表（2026-06-11）；UC 系統層級頁面沒有寫上限。', 'From a UCSB campus worksheet dated 2026-06-11; the systemwide UC page states no limit.') },
                { label: s('UC Additional comments（Academic history）', 'UC Additional comments (Academic history)'), value: 550, src: ['C1-S39', 'C1-S40'], note: s('是 550 字元，不是字；PIQ 後的一般 Additional comments 在 UC 頁面上沒有寫上限。', '550 characters, not words; the general Additional comments box after the PIQs has no limit on the UC pages checked.') }
              ]
            },
            {
              label: s('以英文字數計的欄位', 'Fields counted in words'), unit: 'words',
              items: [
                { label: s('Common App 個人主文', 'Common App personal essay'), value: 650, src: ['A1-S6', 'A1-S12'], note: s('250–650 字。', '250 to 650 words.') },
                { label: s('Additional information', 'Additional information'), value: 300, src: ['A1-S6', 'A1-S12', 'A1-S10'], note: s('2024–25 是 650 字，2025–26 起改為 300。', '650 words in 2024–25; 300 from 2025–26.') },
                { label: s('Challenges and circumstances', 'Challenges and circumstances'), value: 250, src: ['A1-S6', 'A1-S12', 'A1-S9'], note: s('2025–26 新增。', 'Introduced in 2025–26.') },
                { label: s('UC PIQ（每題，共答 4 題）', 'UC PIQ (each; 4 answered)'), value: 350, src: ['A2-S1'], note: s('8 題選 4。', 'Answer 4 of 8 prompts.') }
              ]
            }
          ]
        },
        items: [
          f('**Additional information：300 字**（2025–26 起；2024–25 為 650 字）。2026–27 維持 300。', '**Additional information: 300 words** (since 2025–26; it was 650 in 2024–25). 2026–27 keeps 300.', ['A1-S10', 'A1-S9', 'A1-S6', 'A1-S12']),
          f('**Challenges and circumstances：250 字**，2025–26 新增，取代原本的 community disruption 題。2026–27 例句中「care-taking」改為「caregiving」。', '**Challenges and circumstances: 250 words**, introduced in 2025–26 in place of the community-disruption question. 2026–27 changes the example wording "care-taking" to "caregiving".', ['A1-S9', 'A1-S6', 'A1-S1', 'A1-S12']),
          f('**COVID／community disruption 題已移除**：2024–25 有一題點名 COVID-19 與天災的 community disruption（250 字），2025–26 起不再出現在學生端。', '**The COVID / community-disruption question is gone**: 2024–25 had a 250-word question naming COVID-19 and natural disasters; from 2025–26 it no longer appears on the student side.', ['A1-S10', 'A1-S9']),
          f('輔導老師那一側仍保留 community disruption 欄位，上限 500 字（School Report）。', 'The counselor side still has a community-disruption box, 500 words, on the School Report.', ['A1-S14', 'A1-S6']),
          f('**Activities 改名為「Activities and experiences」**（2026–27），新增「Hobby」類型、大學參與加「Not sure」選項；50／100／150 字元上限不變。', '**Activities renamed "Activities and experiences"** (2026–27), with a new "Hobby" type and a "Not sure" option for college participation; the 50 / 100 / 150 character limits did not change.', ['A1-S1', 'A1-S4', 'A1-S6', 'A1-S7']),
          f('**職位／領導欄變選填**：先答是否有特定職位，答「是」才出現「What was your role?」。', '**The position field is optional**: a yes/no on whether there was a specific role comes first, and "What was your role?" appears only after "yes".', ['A1-S1', 'A1-S6', 'A1-S7']),
          f('**高中畢業後的經歷有起訖日期**：可勾「After graduating high school」，並填開始日期、是否仍進行、結束日期。', '**Post-high-school experiences get dates**: "After graduating high school" can be ticked, with a start date, a still-participating flag, and an end date.', ['A1-S6', 'A1-S7']),
          inf('仍引用「650 字 Additional information」的指南，描述的是 2024–25 的欄位，不是現行版本。', 'Guides that still quote 650 words for Additional information are describing the 2024–25 field, not the current one.', ['A1-S10', 'A1-S6'])
        ]
      },

      {
        id: 'recommenders',
        h: s('推薦人：誰可以寫、寫幾封、填哪些表', 'Recommenders: who qualifies, how many, which forms'),
        judgment: s('老師表有 16 列評分、8 級量尺，最高一級是「職涯中僅見的少數幾位」；輔導老師只評 4 列，外加一個課程難度量尺。每封推薦信只有一個版本，寄給所有被指派的學校，送出後不能改。', 'The teacher form has 16 rating rows on an 8-point scale topped by "One of the top few encountered in my career"; the counselor rates only 4 rows plus a course-rigor scale. Each letter is a single version sent to every assigned college and cannot be changed once submitted.'),
        intro: s('下表一列一種角色、一欄一種東西：交幾張表、評幾列分、有哪些短答格與上限、信怎麼交、學生的 FERPA 選擇是否涵蓋。大數字是可以直接數的；「—」是這個角色沒有這一項。', 'One row per role, one column per thing asked: how many forms, how many rating rows, which short boxes and limits, how the letter is delivered, and whether the student\'s FERPA choice covers it. A big number is a countable quantity; a dash means the role has none of that item.'),
        viz: {
          type: 'recommender-matrix',
          title: s('老師評 16 列、輔導老師評 4 列、Other Recommender 一列都不評；Advisor 什麼表都不交', 'Teachers rate 16 rows, counselors 4, Other Recommenders none; advisors submit no form at all'),
          subtitle: s('同一套 8 級量尺；評分列都可以不填，推薦人的個人檔案就先問填不填。學生的 FERPA 選擇一次適用所有推薦與文件。', 'The same 8-point scale throughout; every rating row is optional, and each recommender\'s profile asks first whether they fill ratings at all. The student\'s single FERPA choice applies to every recommendation and document.'),
          roles: [
            { label: s('輔導老師', 'Counselor'), sub: s('也可由自學督導以 counselor 身分擔任', 'A home school supervisor can act as counselor'), src: ['A1-S14', 'A1-S20'] },
            { label: s('老師', 'Teacher'), sub: s('教過學生學科的老師；大學教師勾 college/university instructor', 'Taught the student an academic subject; a college instructor marks "college/university instructor"'), src: ['A1-S13', 'A1-S20', 'A1-S23'] },
            { label: s('Other Recommender', 'Other Recommender'), sub: s('8 種類型，「在校外與你共事過的人」', '8 types, "individuals you have worked with outside of school"'), src: ['A1-S20', 'A1-S21', 'A1-S15'] },
            { label: s('Advisor', 'Advisor'), sub: s('任何協助學生的人', 'Anyone helping the student'), src: ['A1-S21', 'A1-S28', 'A1-S36'] }
          ],
          cols: [
            { label: s('交幾張表', 'Forms') },
            { label: s('評分列數', 'Rating rows') },
            { label: s('短答格與上限', 'Short boxes and limits') },
            { label: s('推薦信', 'Letter') },
            { label: s('學生的 FERPA 選擇涵蓋', 'Covered by the student\'s FERPA choice') }
          ],
          cells: [
            [
              { n: 5, t: s('School Report、Counselor Recommendation、Mid-Year、Optional、Final Report', 'School Report, Counselor Recommendation, Mid-Year, Optional and Final Report'), src: ['A1-S14', 'A1-S16', 'A1-S17', 'A1-S18', 'A1-S19', 'A1-S20'] },
              { n: 4, t: s('同一 8 級量尺；另有課程難度量尺與 5 級「I recommend this student」', 'Same 8-point scale; plus a course-rigor scale and a 5-level "I recommend this student"'), src: ['A1-S14', 'A1-S6'] },
              { t: s('認識多久 100 字元；第一印象 150 字元；community disruption 500 字；Mid-Year 更新說明 250', 'How long known 100 characters; first words 150 characters; community disruption 500 words; Mid-Year "changes or updates" 250'), src: ['A1-S16', 'A1-S14', 'A1-S17', 'A1-S6'] },
              { t: s('評語上傳或文字框，上限 1000 字；或勾「不寄評語」並附最多 250 字', 'Evaluation upload or text, max 1000 words; or "I will not be sending an evaluation" plus up to 250 words'), src: ['A1-S16', 'A1-S6'] },
              { t: s('是：「all recommendations and supporting documents」', 'Yes: "all recommendations and supporting documents"'), src: ['A1-S14'] }
            ],
            [
              { n: 1, t: s('Teacher Evaluation（含 college/university instructor 版本）', 'Teacher Evaluation (including the college/university instructor variant)'), src: ['A1-S13', 'A1-S23', 'A1-S6'] },
              { n: 16, t: s('8 級量尺，可不填；最高一級「One of the top few encountered in my career」', '8-point scale, optional; topped by "One of the top few encountered in my career"'), src: ['A1-S13', 'A1-S6'] },
              { t: s('認識多久、第一印象、任教課程各 1000；instructor 版另有系所 30 字元、短答 150 字元', 'How long known, first words, courses taught, 1000 each; the instructor variant adds a department field (30 characters) and 150-character short answers'), src: ['A1-S13', 'A1-S6'] },
              { t: s('上傳，PDF 建議 1000 字以內', 'Uploaded; PDF guidance 1000 words or less'), src: ['A1-S13', 'A1-S6'] },
              { t: s('是', 'Yes'), src: ['A1-S14'] }
            ],
            [
              { n: 1, t: s('Other Evaluation；學校接受該類型才能指派', 'Other Evaluation; assignable only where the college accepts the type'), src: ['A1-S15', 'A1-S20', 'A1-S22'] },
              { n: 0, t: s('沒有評分表', 'No rating grid'), src: ['A1-S15', 'A1-S6'] },
              { t: s('與申請者的關係 20 字元、認識多久 20 字元，皆必填', 'Relationship 20 characters, length known 20 characters, both required'), src: ['A1-S15', 'A1-S6'] },
              { t: s('上傳，必填；PDF 建議 1000 字以內', 'Uploaded, required; PDF guidance 1000 words or less'), src: ['A1-S15', 'A1-S6'] },
              { t: s('是', 'Yes'), src: ['A1-S14'] }
            ],
            [
              { n: 0, t: s('不能交任何表單', 'Submits no forms'), src: ['A1-S21', 'A1-S28', 'A1-S36'] },
              { kind: 'none', src: ['A1-S21', 'A1-S36'] },
              { kind: 'none', src: ['A1-S21', 'A1-S36'] },
              { kind: 'none', t: s('只能追蹤進度；學生允許下看 PDF 預覽', 'Tracks progress; sees a PDF preview with the student\'s permission'), src: ['A1-S21', 'A1-S28', 'A1-S36'] },
              { kind: 'none', src: ['A1-S36'] }
            ]
          ]
        },
        subs: [
          {
            h: s('四種角色與數量', 'Four roles and the counts'),
            items: [
              f('四種推薦人角色：Counselor、Teacher、Other Recommender、Advisor。Advisor 只能追蹤進度、在學生允許下看 PDF 預覽，不能交任何表單。', 'Four roles: Counselor, Teacher, Other Recommender, Advisor. An advisor tracks progress and, with permission, sees a PDF preview, but submits no forms.', ['A1-S21', 'A1-S28', 'A1-S36']),
              f('家長只在 Early Decision 協議上簽名。', 'Parents sign only the Early Decision agreement.', ['A1-S35', 'A1-S20']),
              f('同一個人可以被邀請擔任多個角色，例如同時是 Teacher 和 Other Recommender。', 'One person can be invited in more than one role, for example as both Teacher and Other Recommender.', ['A1-S28', 'A1-S36']),
              f('「每所學校決定要求與接受的老師推薦數」，Other Recommender 的數量與接受哪些類型也由學校決定。', '"Each college determines the number of required and allowed teacher evaluations", and likewise the number and accepted types of other evaluations.', ['A1-S20', 'A1-S21', 'A1-S22']),
              f('平台層級一位學生最多能邀請幾位老師或 Other Recommender：未載明（查核 2026-11-07）。', 'Platform-wide cap on how many teachers or Other Recommenders a student can invite: not stated (checked 2026-11-07).', ['A1-S20', 'A1-S21', 'A1-S35']),
              f('「One-and-done」：每位推薦人對同一學生只交一份通用表單，寄給學生指派的所有學校；表單提醒不應為特定學校撰寫，送出後不能修改。', '"One-and-done": each recommender submits one general form per student, shared with every college the student assigns; the form warns it should not be tailored to any institution, and it cannot be modified after submission.', ['A1-S20', 'A1-S28', 'A1-S6']),
              f('推薦表可以在學生送出申請之後才到。', 'Recommendations may arrive after the application is submitted.', ['A1-S25']),
              f('Teacher 與 Other Recommender 必須逐校指派，指派後才會寄出邀請信。使用整合平台的學校，輔導老師與老師的邀請在該平台進行；Other Recommender 與 Advisor 一律在 Common App 內邀請。', 'Teachers and Other Recommenders must be assigned college by college, and the invitation email goes out only on assignment. At schools using an integration partner, counselor and teacher invitations happen there; Other Recommenders and Advisors are always invited inside Common App.', ['A1-S24', 'A1-S35', 'A1-S28'])
            ]
          },
          {
            h: s('誰算老師、誰算 Other Recommender', 'Who counts as a teacher, who as an Other Recommender'),
            items: [
              f('Teacher：「教過你學科的老師」（英文、資訊、數學、自然、社會、外語）；科目選項 Computer Science、English、Math、Science、Social Studies、World Language、Other。', 'Teacher: someone "who has taught you an academic subject" (English, computer science, math, science, social studies, world language); subject options Computer Science, English, Math, Science, Social Studies, World Language, Other.', ['A1-S13', 'A1-S20', 'A1-S6']),
              f('大學教授被以 Teacher 身分邀請時可以填老師表，勾選「college/university instructor」。', 'A college professor invited as a Teacher can complete the form by marking "college/university instructor".', ['A1-S23', 'A1-S13']),
              f('Other Recommender 有 8 種類型：Arts Teacher、Clergy、Coach、College Access Counselor、Employer、Family Member、Peer、Other；定義是「在校外與你共事過的人」。', 'Other Recommender has 8 types: Arts Teacher, Clergy, Coach, College Access Counselor, Employer, Family Member, Peer, Other; defined as "individuals you have worked with outside of school".', ['A1-S20', 'A1-S21', 'A1-S15', 'A1-S6']),
              f('學校至少接受一種 Other Recommender 類型、且接受被邀請的那一種，才能把該推薦人指派給這所學校。', 'An Other Recommender can be assigned to a college only if the college accepts at least one type, and only the invited type.', ['A1-S22'])
            ]
          },
          {
            h: s('表單一覽', 'The forms'),
            table: {
              cols: [s('表單', 'Form'), s('誰填', 'Filled by'), s('內容與上限', 'Contents and limits'), s('時點', 'When')],
              rows: [
                [s('School Report（SR）＋成績單＋school profile', 'School Report (SR) + transcript + school profile'), s('輔導老師', 'Counselor'), f('成績單（含進行中課程）；school profile 選附；排名／GPA；課程難度量尺；4 列評分；community disruption 500 字；「I recommend this student」5 級', 'Transcript (with courses in progress); school profile optional; rank/GPA; rigor scale; 4 ratings; community disruption 500 words; 5-level "I recommend this student"', ['A1-S14', 'A1-S6']), f('必須先於 MR／OR／FR 送出', 'Must come before MR / OR / FR', ['A1-S28'])],
                [s('Counselor Recommendation（CR）', 'Counselor Recommendation (CR)'), s('輔導老師', 'Counselor'), f('認識多久 100 字元；第一印象 150 字元；評語上傳或文字框，上限 1000 字；或勾「不寄評語」並附最多 250 字', 'How long known 100 characters; first words 150 characters; evaluation upload or text, max 1000 words; or "I will not be sending an evaluation" plus up to 250 words', ['A1-S16', 'A1-S6']), f('SR 之後', 'After the SR', ['A1-S20'])],
                [s('Mid-Year Report（MR）', 'Mid-Year Report (MR)'), s('輔導老師', 'Counselor'), f('成績單上傳；排名／GPA；修課與評價變動；2026–27 新增「Describe the changes or updates」文字框，上限 250', 'Transcript upload; rank/GPA; course and evaluation changes; new 2026–27 "Describe the changes or updates" box, max 250', ['A1-S17', 'A1-S1', 'A1-S6']), f('第一學期成績出來後；系統不會自動提醒', 'When first-term grades are out; no automatic reminders', ['A1-S28'])],
                [s('Optional Report（OR）', 'Optional Report (OR)'), s('輔導老師', 'Counselor'), f('更新成績、排名、GPA、修課、評價或更正；不能取代 MR／FR', 'Updates grades, rank, GPA, courses, evaluation, or corrections; not a substitute for MR / FR', ['A1-S19', 'A1-S20']), f('每個申請年度只能送一次', 'Once per application year', ['A1-S19', 'A1-S20'])],
                [s('Final Report（FR）', 'Final Report (FR)'), s('輔導老師', 'Counselor'), f('是否如期畢業等；只寄給學生要入學的那一所（或候補錄取後入學的學校）', 'Whether the student graduated as expected; goes only to the college the student will attend (or a waitlist college)', ['A1-S18', 'A1-S20']), f('學生拿到所有結果後；FR 送出後 CR／MR／OR 不能再送', 'After all decisions; once sent, CR / MR / OR can no longer be submitted', ['A1-S20'])],
                [s('Teacher Evaluation（TE）', 'Teacher Evaluation (TE)'), s('老師', 'Teacher'), f('16 列評分（8 級，可不填）；認識多久、第一印象、任教課程各 1000 字；評語上傳，PDF 建議 1000 字以內', '16 ratings (8-point, optional); how long known, first words, courses taught, 1000 each; uploaded evaluation, PDF guidance 1000 words or less', ['A1-S13', 'A1-S6']), ns(['A1-S20'])],
                [s('Other Evaluation（OE）', 'Other Evaluation (OE)'), s('Other Recommender', 'Other Recommender'), f('與申請者的關係 20 字元、認識多久 20 字元（皆必填）；評語上傳（必填），PDF 建議 1000 字以內；**沒有評分表**', 'Relationship 20 characters, length known 20 characters (both required); uploaded evaluation (required), PDF guidance 1000 words or less; **no rating grid**', ['A1-S15', 'A1-S6']), ns(['A1-S20'])],
                [s('Homeschool／International supplement', 'Homeschool / International supplement'), s('自學督導（以 counselor 身分）／輔導老師', 'Home school supervisor (as counselor) / counselor'), f('自學：經驗、評分方式、校外課程各 1000 字；國際：初中、高中會考成績', 'Homeschool: experience, grading, outside courses, 1000 words each; international: lower/senior secondary exam results', ['A1-S20', 'A1-S6']), ns(['A1-S20'])]
              ]
            }
          },
          {
            h: s('評分表：老師 16 列，輔導老師 4 列', 'Rating grids: 16 rows for teachers, 4 for counselors'),
            judgment: s('同一套 8 級量尺，老師評 16 項，輔導老師只評 4 項加課程難度；兩種評分都可以不填，表單本身就問推薦人是否填評分。', 'The same 8-point scale, but teachers rate 16 items and counselors only 4 plus course rigor; both grids are optional, and the profile asks each recommender whether they fill ratings at all.'),
            items: [
              f('**老師表 16 列**（與「班上其他學生相比」）：Academic achievements、Intellectual promise、Quality of writing、Creative thought、Productive discussion、Faculty respect、Disciplined habits、Maturity、Motivation、Leadership、Integrity、Reaction to setbacks、Concern for others、Self confidence、Initiative、Overall。', '**Teacher form, 16 rows** ("Compared to other students in their class"): Academic achievements, Intellectual promise, Quality of writing, Creative thought, Productive discussion, Faculty respect, Disciplined habits, Maturity, Motivation, Leadership, Integrity, Reaction to setbacks, Concern for others, Self confidence, Initiative, Overall.', ['A1-S13', 'A1-S6']),
              f('**8 級量尺**：No basis／Below average／Average／Good (above average)／Very good (well above average)／Excellent (top 10%)／Outstanding (top 5%)／One of the top few encountered in my career。', '**8-point scale**: No basis / Below average / Average / Good (above average) / Very good (well above average) / Excellent (top 10%) / Outstanding (top 5%) / One of the top few encountered in my career.', ['A1-S13', 'A1-S6']),
              f('評分列不是必填；老師的個人檔案有一題必填：「你是否填寫 Common App 老師表的學業評分？」（是／否）。', 'Ratings are not required items; the teacher profile has a required yes/no: "Do you complete applicants\' academic ratings on the Common App teacher evaluation?"', ['A1-S6']),
              f('「college/university instructor」版本（Academic evaluation）同樣是 16 列評分，另有系所欄（30 字元）與 150 字元短答。', 'The "college/university instructor" variant (Academic evaluation) has the same 16 ratings, plus a department field (30 characters) and 150-character short answers.', ['A1-S6']),
              f('**輔導老師只有 4 列**（同一 8 級量尺）：Academic achievements、Extracurricular accomplishments、Personal qualities and character、Overall；輔導老師的個人檔案同樣問是否填評分。', '**The counselor has only 4 rows** (same 8-point scale): Academic achievements, Extracurricular accomplishments, Personal qualities and character, Overall; the counselor profile likewise asks whether they complete ratings.', ['A1-S14', 'A1-S6']),
              f('**課程難度量尺**：「與本校其他升大學學生相比，此生的修課選擇為」Less than demanding／Average／Demanding／Very demanding／Most demanding／Prefer not to respond；另有 IB、AICE、AP Capstone 候選人註記。', '**Course-rigor scale**: "In comparison with other college preparatory students at your school, the student\'s course selection is" Less than demanding / Average / Demanding / Very demanding / Most demanding / Prefer not to respond; plus IB, AICE and AP Capstone candidacy flags.', ['A1-S14']),
              f('另有「I recommend this student」5 級：No basis／With reservation／Fairly strongly／Strongly／Enthusiastically。', 'Plus a 5-level "I recommend this student": No basis / With reservation / Fairly strongly / Strongly / Enthusiastically.', ['A1-S14']),
              f('2026–27 的共同題與 School Report 欄位中沒有校規處分或犯罪紀錄題（在 Data Catalog 中搜尋 disciplin／criminal，只找到評分項「Disciplined habits」）。', 'No school-discipline or criminal-history question appears in the 2026–27 common questions or School Report fields (a search of the catalog for "disciplin" / "criminal" returns only the "Disciplined habits" rating).', ['A1-S6'])
            ]
          },
          {
            h: s('FERPA waiver', 'FERPA waiver'),
            items: [
              f('學生在 School Report 的授權區選擇「I waive」或「I DO NOT waive my right to review all recommendations and supporting documents」；這個選擇適用所有學校，任何推薦或申請送出後就不能更改。', 'On the School Report authorization the student chooses "I waive" or "I DO NOT waive my right to review all recommendations and supporting documents"; the choice applies to all colleges and cannot be changed after any recommendation or application is submitted.', ['A1-S14']),
              f('放棄權利代表告訴學校你不打算閱讀推薦信；「有些推薦人可能會因為你不放棄權利而拒絕寫信」。', 'Waiving tells colleges you do not intend to read the letters; "Some recommenders may decline to write a letter for you if you do not waive your rights."', ['A1-S26']),
              f('學生先完成 FERPA release authorization，才在 My Colleges → Recommenders and FERPA 邀請推薦人。', 'Students complete the FERPA release authorization first, then invite recommenders under My Colleges → Recommenders and FERPA.', ['A1-S35', 'A1-S24'])
            ]
          }
        ]
      },

      {
        id: 'other-systems',
        h: s('其他申請系統', 'Other application systems'),
        judgment: s('UC 不收推薦信、寫作是 4 題各 350 字；MIT 的活動欄只放得下 4 項；Coalition on Scoir 的活動數與字元上限在官方說明頁上找不到。', 'UC takes no letters with the application and asks for 4 answers of 350 words; MIT\'s activity form holds only 4 entries; Coalition on Scoir\'s activity count and character limits are not on its official help page.'),
        intro: s('下圖只比能精確算的：上組是各系統活動描述的總字元（每格上限 × 項數），下組是共同寫作題的總字數。MIT 與 ApplyTexas 的短答只有約略字數，Coalition 的活動上限未載明，所以畫成虛線框而不是長條。', 'The figure compares only what can be computed exactly: the top group totals the characters of each system\'s activity descriptions (limit × entries), the bottom the words of its shared essay questions. MIT and ApplyTexas give only approximate short-answer lengths and Coalition states no activity limit, so those are dashed boxes rather than bars.'),
        viz: {
          type: 'budget-stack',
          title: s('UC 活動區能寫 7,000 字元，是 Common App 活動描述的四倍多；三個系統的共同寫作題則都落在 1,200–1,650 字', 'UC\'s activity section holds 7,000 characters, more than four times Common App\'s descriptions; shared essay totals in three systems all fall between 1,200 and 1,650 words'),
          subtitle: s('合計是「上限 × 格數」的算術，屬推論。UC 的 350 字元出自一份校區工作表，系統層級頁面沒寫；Georgetown 的 Essay 2 依學院而定。', 'Totals are limit × box count, our arithmetic. UC\'s 350 characters come from one campus worksheet and are absent from the systemwide page; Georgetown\'s Essay 2 depends on the school applied to.'),
          groups: [
            {
              unit: 'chars', label: s('活動描述的總字元', 'Activity descriptions, total characters'),
              bars: [
                { label: s('Common App（10 項）', 'Common App (10 entries)'), segs: [{ label: s('活動描述', 'Description'), value: 150, times: 10, src: ['A1-S6', 'A1-S31'] }] },
                { label: s('UC Activities & awards（20 項）', 'UC Activities & awards (20 entries)'), segs: [{ label: s('描述', 'Description'), value: 350, times: 20, src: ['A2-S7', 'A2-S3', 'A2-S6'], note: s('350 字元出自 UCSB 校區工作表（2026-06-11）。', 'The 350 characters come from a UCSB campus worksheet dated 2026-06-11.') }] },
                { label: s('UC Additional comments（Academic history）', 'UC Additional comments (Academic history)'), segs: [{ label: s('一格', 'One box'), value: 550, src: ['C1-S39', 'C1-S40'], note: s('550 字元，不是字。', '550 characters, not words.') }] },
                { label: s('MIT（4 項）', 'MIT (4 entries)'), ns: true, src: ['A2-S22'] },
                { label: s('Coalition on Scoir', 'Coalition on Scoir'), ns: true, src: ['A2-S18'] }
              ]
            },
            {
              unit: 'words', label: s('共同寫作題的總字數', 'Shared essay questions, total words'),
              bars: [
                { label: s('Common App', 'Common App'), segs: [
                  { label: s('個人主文', 'Personal essay'), value: 650, src: ['A1-S6', 'A1-S12'] },
                  { label: s('Challenges and circumstances', 'Challenges and circumstances'), value: 250, cond: true, src: ['A1-S6', 'A1-S12'] },
                  { label: s('Additional information', 'Additional information'), value: 300, cond: true, src: ['A1-S6', 'A1-S12'] }
                ] },
                { label: s('UC Application', 'UC Application'), segs: [{ label: s('PIQ（8 題選 4）', 'PIQ (4 of 8)'), value: 350, times: 4, src: ['A2-S1'] }] },
                { label: s('Georgetown Application', 'Georgetown Application'), segs: [
                  { label: s('短文', 'Short essays'), value: 250, times: 2, src: ['A2-S28'] },
                  { label: s('Essay 1', 'Essay 1'), value: 650, src: ['A2-S28'] },
                  { label: s('Essay 2（依學院）', 'Essay 2 (by school)'), value: 500, src: ['A2-S28'] }
                ] },
                { label: s('MIT 自有申請', 'MIT\'s own application'), ns: true, src: ['A2-S22'] },
                { label: s('ApplyTexas', 'ApplyTexas'), ns: true, src: ['A2-S30'] }
              ]
            }
          ]
        },
        table: {
          cols: [s('系統', 'System'), s('寫作', 'Essays'), s('活動', 'Activities'), s('推薦信', 'Letters'), s('備註', 'Notes')],
          rows: [
            [
              s('UC Application（Berkeley、UCLA、UC San Diego 等 9 校區）', 'UC Application (Berkeley, UCLA, UC San Diego and the other campuses, 9 in all)'),
              f('PIQ：8 題選 4，每題最多 350 字；「All questions are equal」', 'PIQs: answer 4 of 8, up to 350 words each; "All questions are equal"', ['A2-S1']),
              f('Activities & awards 最多 20 項、6 類；描述 350 字元（UCSB 校區工作表，2026-06-11）；系統層級頁面兩者都未寫', 'Activities & awards: up to 20 entries in 6 categories; description 350 characters (UCSB campus worksheet, 2026-06-11); the systemwide page states neither', ['A2-S7', 'A2-S3', 'A2-S6']),
              f('申請時不收；部分校區可能之後在補充審查時邀請', 'Not with the application; some campuses may request them later in supplemental review', ['A2-S8']),
              f('Additional comments（Academic history）**550 字元**（不是字數）；PIQ 後的一般 Additional comments 上限在 UC 頁面未載明，UC 說它「不應是第 5 篇 PIQ」', 'Additional comments (Academic history) **550 characters** (not words); the general Additional comments after the PIQs has no limit on the UC pages checked, and UC says it "should NOT be a 5th PIQ"', ['C1-S39', 'C1-S40', 'A2-S5'])
            ],
            [
              s('Coalition Application on Scoir', 'Coalition Application on Scoir'),
              f('Coalition essay（學校要求才寫）：最少 250 字，建議 500–650；6 題', 'Coalition essay (if the college requires it): minimum 250 words, 500–650 suggested; 6 prompts', ['A2-S18', 'A2-S21']),
              ns(['A2-S18']),
              f('Scoir 高中在 Part 1 送出後寄送文件；非 Scoir 高中走另一流程；要求數量未載明', 'Scoir high schools send documents after Part 1; non-Scoir schools follow a separate guide; number required not stated', ['A2-S18']),
              f('Part 1 送出後不能改；Part 2（各校補充題）在學校自己的入口完成；2022-08-01 起改在 Scoir 申請', 'Part 1 cannot be edited after submission; Part 2 (college questions) is done on each college\'s portal; applications moved to Scoir from 2022-08-01', ['A2-S18', 'A2-S19'])
            ],
            [
              s('MIT 自有申請', 'MIT\'s own application'),
              f('4 篇各約 100–200 字＋4 題短答各 40–50 字；Additional information 一格，上限未載明', '4 essays of about 100–200 words + 4 short responses of 40–50 words; one Additional information box, limit not stated', ['A2-S22']),
              f('只放得下 **4 項**；用 MIT 表單，不收履歷；字元上限未載明', 'Room for **4 entries** only; use MIT\'s form, not a resume; character limits not stated', ['A2-S22']),
              f('兩位老師（最好一位數理、一位人文社會或語言）＋SSR；輔導老師信可有可無；另可加一封選填推薦', 'Two teachers (ideally one math/science, one humanities/social science/language) + SSR; counselor letter only if available; one optional supplemental recommender', ['A2-S24']),
              f('Maker、Research、藝術作品集經 SlideRoom；申請費 $75', 'Maker, Research and arts portfolios via SlideRoom; fee $75', ['A2-S25', 'A2-S23'])
            ],
            [
              s('Georgetown Application', 'Georgetown Application'),
              f('2 篇短文各 250 字＋Essay 1（650 字）＋依學院而定的 Essay 2（500 字）', 'Two short essays of 250 words + Essay 1 (650 words) + a school-specific Essay 2 (500 words)', ['A2-S28']),
              { state: 'not-stated', checked: '2026-11-07', src: ['A2-S27', 'A2-S28'] },
              f('輔導老師＋一位老師必備；第二位老師選填；部分學院限定科目', 'Counselor + one teacher required; second teacher optional; some schools constrain the subject', ['A2-S28']),
              f('也可以改用 Common App 申請；SAT 或 ACT 必備；校友面談指派後須完成', 'Common App is accepted as an alternative; SAT or ACT required; alumni interview must be completed when assigned', ['A2-S27', 'A2-S28'])
            ],
            [
              s('ApplyTexas（UT Austin）', 'ApplyTexas (UT Austin)'),
              f('自選題主文 500–650 字；短答 2 題必答＋1 題選答，各約 250–300 字（40 行）', 'Topic-of-choice essay 500–650 words; 2 required + 1 optional short answers, about 250–300 words (40 lines) each', ['A2-S30']),
              f('選填履歷（說明每項活動實際內容）', 'Optional resume ("Details about what each activity involved")', ['A2-S29']),
              f('最多兩封，選填', 'Up to two, optional', ['A2-S29']),
              inf('UT 新生頁要夏季／秋季申請者用 Common App，寫作頁卻仍寫「Common App 或 ApplyTexas」；兩頁不一致，ApplyTexas 網站拒絕自動存取，無法查證', 'UT\'s freshman page sends summer/fall applicants to Common App while its essays page still says "either the Common App or ApplyTexas"; the pages disagree, and ApplyTexas refused automated access, so it could not be checked', ['A2-S29', 'A2-S30'])
            ]
          ]
        },
        items: [
          f('UC 2026 輔導老師簡報：Additional comments「should NOT be a 5th PIQ. We will not consider that.」', 'UC\'s 2026 counselor deck: the additional comments box "should NOT be a 5th PIQ. We will not consider that."', ['A2-S5']),
          f('UC 的「550 字元」只見於 UC 的「Presenting yourself」指南中 Academic history 的 Additional comments；網路上流傳的「550 字」在查過的 UC 頁面上都找不到。', 'UC\'s "550 characters" appears in its "Presenting yourself" guide for the Academic history Additional comments; the "550 words" figure that circulates online was not found on any UC page checked.', ['C1-S39', 'C1-S40']),
          f('Coalition on Scoir 的活動數、榮譽數與字元上限：官方說明頁未載明；Scoir 個人檔案中的活動「還不會自動帶入」申請表。', 'Coalition on Scoir activity count, honors count and character limits: not stated on the official help page; activities on the Scoir profile "don\'t auto-populate yet" into the application.', ['A2-S18', 'A2-S19'])
        ]
      },

      {
        id: 'who-can-submit',
        h: s('學生與學校以外的人，能把東西交進哪裡？', 'Where can a party who is neither the student nor the school submit anything?'),
        viz: {
          type: 'flow', wide: true,
          title: s('每條進到學校的路都要經過一張表單；校外的人只走虛線', 'Every path into a college runs through a form; adults from outside school enter only on the dashed lines'),
          subtitle: s('把游標移到方塊上（手機上點一下）可看經過它的所有路徑；虛線表示「學校接受那個類型才行」。', 'Hover over a box (tap on a phone) to trace every path through it. Dashed lines work only where the college accepts that type.'),
          columns: [{ label: s('誰', 'Who') }, { label: s('容器', 'Container') }, { label: s('申請系統', 'System') }, { label: s('學校', 'College') }],
          nodes: [
            { id: 'student', col: 0, tone: 'person', label: s('學生', 'Student'), sub: s('My Common Application 各區全部由學生填寫。', 'Fills every section of My Common Application.'), src: ['A1-S12', 'A1-S35'] },
            { id: 'counselor', col: 0, tone: 'person', label: s('輔導老師', 'Counselor'), sub: s('School Report、Counselor Recommendation、Mid-Year 與 Final Report。', 'School Report, Counselor Recommendation, Mid-Year and Final Reports.'), src: ['A1-S14', 'A1-S20'] },
            { id: 'teacher', col: 0, tone: 'person', label: s('老師', 'Teacher'), sub: s('教過學生學科的老師。', 'Someone who has taught the student an academic subject.'), src: ['A1-S13', 'A1-S20'] },
            { id: 'otherrec', col: 0, tone: 'person', label: s('Other Recommender', 'Other Recommender'), sub: s('8 種類型：Arts Teacher、Clergy、Coach、College Access Counselor、Employer、Family Member、Peer、Other。', '8 types: Arts Teacher, Clergy, Coach, College Access Counselor, Employer, Family Member, Peer, Other.'), src: ['A1-S20', 'A1-S21'] },
            { id: 'outside', col: 0, tone: 'person', label: s('校外指導者（實驗室、大學教授）', 'Outside mentor (lab, professor)'), sub: s('沒有自己的表單；研究指導者算不算可接受的 Other Recommender，未載明（查核 2026-11-07）。', 'Has no form of its own; whether a research mentor counts as an acceptable Other Recommender is not stated (checked 2026-11-07).'), src: ['A1-S20', 'A1-S21', 'A1-S22'] },
            { id: 'ca', col: 1, tone: 'container', label: s('Common App 各區（活動描述 150 字元）', 'Common App sections (activity line 150 chars)'), src: ['A1-S12', 'A1-S6'] },
            { id: 'addl', col: 1, tone: 'container', label: s('Additional information（300 字）', 'Additional information (300 words)'), src: ['A1-S6', 'A1-S12'] },
            { id: 'supp', col: 1, tone: 'container', label: s('各校題目與 writing supplement', 'College questions and writing supplement'), sub: s('字數由各校自訂。', 'Each college sets its own counts.'), src: ['A1-S35', 'A1-S42'] },
            { id: 'sr', col: 1, tone: 'container', label: s('School Report＋成績單', 'School Report + transcript'), src: ['A1-S14', 'A1-S20'] },
            { id: 'te', col: 1, tone: 'container', label: s('推薦表：Teacher Evaluation', 'Recommendation form: Teacher Evaluation'), sub: s('16 列評分（選填）與上傳的信。', '16 optional ratings and an uploaded letter.'), src: ['A1-S13', 'A1-S6'] },
            { id: 'oe', col: 1, tone: 'container', label: s('推薦表：Other Evaluation', 'Recommendation form: Other Evaluation'), sub: s('關係與認識多久各 20 字元、一封上傳的信；沒有評分表。', 'Relationship and length known, 20 characters each, plus one uploaded letter; no rating grid.'), src: ['A1-S15', 'A1-S6'] },
            { id: 'ucapp', col: 1, tone: 'container', label: s('UC：PIQ 4 題＋Activities & awards', 'UC: 4 PIQs + Activities & awards'), sub: s('PIQ 8 題選 4，每題最多 350 字。', 'Answer 4 of 8 PIQs, up to 350 words each.'), src: ['A2-S1', 'A2-S7'] },
            { id: 'mitapp', col: 1, tone: 'container', label: s('MIT 申請表：短文、4 項活動', 'MIT form: essays, 4 activities'), src: ['A2-S22'] },
            { id: 'portal', col: 1, tone: 'container', label: s('SlideRoom／學校自己的入口', 'SlideRoom / college portal'), src: ['A2-S25', 'A2-S18'] },
            { id: 'commonapp', col: 2, tone: 'system', label: s('Common App', 'Common App'), sub: s('每季最多送 20 所學校。', 'Up to 20 colleges per cycle.'), src: ['A1-S4', 'A1-S37'] },
            { id: 'uc', col: 2, tone: 'system', label: s('UC Application', 'UC Application'), sub: s('申請時不收推薦信。', 'Takes no letters with the application.'), src: ['A2-S8'] },
            { id: 'mit', col: 2, tone: 'system', label: s('MIT 自有申請', 'MIT\'s own application'), src: ['A2-S22'] },
            { id: 'coalition', col: 2, tone: 'system', label: s('Coalition on Scoir', 'Coalition on Scoir'), sub: s('Part 1 送出後不能改；Part 2 在學校自己的入口完成。', 'Part 1 cannot be edited after submission; Part 2 is done on each college\'s portal.'), src: ['A2-S18'] },
            { id: 'college', col: 3, tone: 'college', label: s('各校招生辦公室', 'Each college\'s admissions office'), sub: s('各校決定要求幾封老師推薦、接受哪些 Other Recommender 類型。', 'Each college sets how many teacher letters it requires and which Other Recommender types it accepts.'), src: ['A1-S20', 'A1-S22'] }
          ],
          links: [
            { from: 'student', to: 'ca', src: ['A1-S12'] },
            { from: 'student', to: 'addl', src: ['A1-S6', 'A1-S12'] },
            { from: 'student', to: 'supp', src: ['A1-S35'] },
            { from: 'student', to: 'ucapp', src: ['A2-S1'] },
            { from: 'student', to: 'mitapp', src: ['A2-S22'] },
            { from: 'student', to: 'portal', label: s('MIT 的作品集經 SlideRoom；Coalition 的 Part 2 在學校入口', 'MIT portfolios via SlideRoom; Coalition Part 2 on the college portal'), src: ['A2-S25', 'A2-S18'] },
            { from: 'counselor', to: 'sr', src: ['A1-S14', 'A1-S20'] },
            { from: 'teacher', to: 'te', src: ['A1-S13', 'A1-S20'] },
            { from: 'otherrec', to: 'oe', dashed: true, label: s('學校接受那個類型才能指派', 'Assignable only where the college accepts that type'), src: ['A1-S22', 'A1-S20'] },
            { from: 'outside', to: 'oe', dashed: true, label: s('以 8 種類型之一受邀；學校收不收由學校設定', 'Invited under one of the 8 types; the college\'s settings decide'), src: ['A1-S20', 'A1-S21', 'A1-S22'] },
            { from: 'outside', to: 'te', dashed: true, label: s('只限教過學生的大學教師，以 Teacher 身分受邀', 'Only a college instructor who taught the student, invited as Teacher'), src: ['A1-S23', 'A1-S13'] },
            { from: 'ca', to: 'commonapp', src: ['A1-S12'] },
            { from: 'addl', to: 'commonapp', src: ['A1-S6'] },
            { from: 'supp', to: 'commonapp', src: ['A1-S35'] },
            { from: 'sr', to: 'commonapp', src: ['A1-S14'] },
            { from: 'te', to: 'commonapp', src: ['A1-S20'] },
            { from: 'oe', to: 'commonapp', src: ['A1-S20'] },
            { from: 'sr', to: 'mit', label: s('SSR', 'SSR'), src: ['A2-S24'] },
            { from: 'te', to: 'mit', label: s('兩位老師推薦', 'Two teacher letters'), src: ['A2-S24'] },
            { from: 'sr', to: 'coalition', label: s('Scoir 高中在 Part 1 送出後寄送文件', 'Scoir high schools send documents after Part 1'), src: ['A2-S18'] },
            { from: 'ucapp', to: 'uc', src: ['A2-S1'] },
            { from: 'mitapp', to: 'mit', src: ['A2-S22'] },
            { from: 'portal', to: 'mit', label: s('Maker、Research、藝術作品集', 'Maker, Research and arts portfolios'), src: ['A2-S25'] },
            { from: 'portal', to: 'coalition', label: s('Part 2：各校補充題', 'Part 2: college questions'), src: ['A2-S18'] },
            { from: 'commonapp', to: 'college', label: s('每封推薦信只有一個版本，寄給所有被指派的學校', 'One version of each letter goes to every assigned college'), src: ['A1-S20'] },
            { from: 'uc', to: 'college', src: ['A2-S1'] },
            { from: 'mit', to: 'college', src: ['A2-S22'] },
            { from: 'coalition', to: 'college', src: ['A2-S18'] }
          ],
          legend: [
            { label: s('一般路徑', 'Path'), shape: 'line', color: '#b2b7bf' },
            { label: s('學校接受才行', 'Only if the college accepts it'), shape: 'dash' }
          ]
        },
        judgment: s('在 Common App 裡，校外的人只有一個通用入口：以 Other Recommender 身分交一封信，而且學校要接受那個類型；論文、專題紀錄、作品集沒有共同的容器。', 'Inside Common App, an outside party has one general entry point: one letter as an Other Recommender, and only where the college accepts that type. Papers, project records and portfolios have no shared container.'),
        table: {
          cols: [s('誰', 'Party'), s('容器', 'Container'), s('交什麼', 'What they submit'), s('上限', 'Limits'), s('門檻', 'Gate')],
          rows: [
            [
              s('在校外認識學生的成年人（教練、雇主、神職人員、藝術老師、college access counselor、家人、同儕、其他）', 'Any adult who knows the student outside school (coach, employer, clergy, arts teacher, college access counselor, family member, peer, "other")'),
              s('Other Evaluation（OE）', 'Other Evaluation (OE)'),
              f('關係、認識多久、一封上傳的信，寄給所有被指派的學校', 'Relationship, length known, one uploaded letter shared with all assigned colleges', ['A1-S15', 'A1-S20']),
              f('20＋20 字元；信件依 PDF 建議 1000 字以內', '20 + 20 characters; letter 1000 words or less (PDF guidance)', ['A1-S15', 'A1-S6']),
              f('學校須接受至少一種、且是被邀請的那一種類型；數量由學校決定', 'College must accept at least one type, and the invited type; college sets the count', ['A1-S22', 'A1-S20'])
            ],
            [
              s('教過學生的大學教師', 'College or university instructor who taught the student'),
              s('Teacher Evaluation（college/university instructor 版本）', 'Teacher Evaluation, "college/university instructor" variant'),
              f('16 列評分（選填）、短答、上傳的信', '16 ratings (optional), short answers, uploaded letter', ['A1-S6', 'A1-S13']),
              f('短答 150 字元', 'Short answers 150 characters', ['A1-S6']),
              f('學生以 Teacher 身分邀請；老師推薦數由學校決定', 'Student invites as Teacher; college sets the teacher count', ['A1-S23', 'A1-S20'])
            ],
            [s('Advisor（任何協助學生的人）', 'Advisor (anyone helping the student)'), s('無', 'None'), f('不能交表；只能追蹤進度，經允許可看 PDF 預覽', 'Cannot submit forms; tracks progress, PDF preview with permission', ['A1-S21', 'A1-S28', 'A1-S36']), s('—', '—'), s('—', '—')],
            [s('家長／監護人', 'Parent or guardian'), s('Early Decision 協議', 'Early decision agreement'), f('只有簽名', 'Signature only', ['A1-S20', 'A1-S35']), s('—', '—'), f('只限 ED／EDII', 'ED / EDII only', ['A1-S20'])],
            [s('自學督導（例如家長）', 'Home school supervisor (e.g. a parent)'), s('School Report＋homeschool supplement（以 counselor 身分）', 'School Report + homeschool supplement, as "counselor"'), f('成績單、School Report、各 1000 字的補充說明', 'Transcript, School Report, 1000-word supplements', ['A1-S20', 'A1-S6']), f('同 SR', 'As SR', ['A1-S6']), f('只限自學申請者', 'Homeschooled applicants only', ['A1-S20'])],
            [
              s('社區組織（CBO）人員', 'Community-based organization staff'),
              s('(a) 學生在 Education 列出 CBO 與聯絡人；(b) 以 College Access Counselor 類型擔任 Other Recommender；(c)「community leader」聲明是 fee waiver 的資格途徑之一', '(a) Student lists the CBO and a contact under Education; (b) may be invited as Other Recommender type "College Access Counselor"; (c) a "community leader" statement is one fee-waiver eligibility route'),
              f('(a) CBO 本身不交任何東西；(b) OE；(c) 聲明如何傳送未載明', '(a) nothing submitted by the CBO; (b) OE; (c) how the statement is transmitted is not stated', ['A1-S6', 'A1-S20', 'A1-S27']),
              f('聯絡人姓名 20 字元', 'Contact names 20 characters', ['A1-S6']),
              s('—', '—')
            ],
            [s('任何第三方', 'Any third party'), s('Fraud Allegation Form', 'Fraud Allegation Form'), f('檢舉', 'An allegation', ['A1-S34']), s('—', '—'), s('—', '—')]
          ]
        },
        items: [
          f('實驗室或公司的研究指導者是否算可接受的 Other Recommender：未載明（查核 2026-11-07）。', 'Whether a research mentor at a lab or company counts as an acceptable Other Recommender: not stated (checked 2026-11-07).', ['A1-S20', 'A1-S21', 'A1-S22']),
          inf('Common App 沒有任何頁面把「research mentor」列為類型；這樣的人只能從 8 種類型中擇一邀請（最可能是「Other」或「Employer」），某校收不收由該校的設定決定。若指導者是教過學生課的大學教師，也可以走 Teacher 的 college/university instructor 路線，但某校是否把它算作老師推薦，Common App 沒有說。', 'No Common App page lists "research mentor" as a type; such a person would be invited under one of the 8 types (most plausibly "Other" or "Employer"), and whether a college takes it is that college\'s setting. A mentor who taught the student a course could use the Teacher route as a college/university instructor, but Common App does not say whether a given college counts that as a teacher letter.', ['A1-S22', 'A1-S23']),
          f('學校是否接受透過 Common App 以外管道寄來、超過其「allowed」數量的信：未載明（查核 2026-11-07）。', 'Whether a college accepts letters beyond its "allowed" count when sent outside Common App: not stated (checked 2026-11-07).', ['A1-S20']),
          f('上傳欄位「2000」這個值的單位（KB 或頁數）：未載明（查核 2026-11-07）。', 'The unit of the "2000" value on upload fields (KB or pages): not stated (checked 2026-11-07).', ['A1-S6']),
          f('「community leader」的 fee waiver 聲明如何送交：未載明（查核 2026-11-07）。', 'How a "community leader" fee-waiver statement is submitted: not stated (checked 2026-11-07).', ['A1-S27']),
          inf('不是信件的材料（論文、專題紀錄、作品集）在共同申請表裡沒有通用容器：只能經由個別學校的 writing supplement、上傳區或作品集連結進入，或寫進 Activities（150 字元）或 Additional information（300 字）。這是從欄位清單推得的，不是 Common App 的說法。', 'Material that is not a letter (papers, project records, portfolios) has no general container in the shared application: it can enter only through a college\'s own writing supplement, upload, or portfolio link, or be described in Activities (150 characters) or Additional information (300 words). This is our inference from the field inventory, not a Common App statement.', ['A1-S6']),
          f('UC 不收推薦信，但要求活動內容「true and verifiable by an independent party」。', 'UC takes no letters but requires activity entries to be "true and verifiable by an independent party".', ['C1-S41', 'A2-S8'])
        ]
      },

      {
        id: 'ai',
        h: s('Common App 的 AI 與舞弊規定', 'Common App\'s AI and fraud policy'),
        judgment: s('把 AI 產出的「實質內容」當成自己的原創作品提交，在 Common App 的定義裡就是舞弊；任何第三方都能檢舉，結果可能通知學生名單上的每一所學校。', 'Submitting the "substantive content or output" of an AI tool as one\'s own original work is fraud under Common App\'s definition; any third party can report it, and findings can go to every college on the student\'s list.'),
        items: [
          f('舞弊定義包含「刻意把人工智慧平台、技術或演算法的實質內容或產出，當成自己的原創作品提交」，以及偽造推薦信、假成績單或分數、不實背景、假身分或聯絡資料、繞過輔導老師的正式管道（Fraud Policy，最後更新 2023 年 8 月）。', 'Fraud includes "intentionally misrepresenting as one\'s own original work… the substantive content or output of an artificial intelligence platform, technology, or algorithm", along with fabricated recommendations, false transcripts or scores, misrepresented background, false identity or contact details, and circumventing official counselor channels (Fraud Policy, last updated August 2023).', ['A1-S33']),
          f('任何註冊使用者、會員學校或第三方都可以透過 Fraud Allegation Form 檢舉。', 'Any registered user, member college, or third party can report suspected fraud through the Fraud Allegation Form.', ['A1-S34']),
          f('流程：書面通知、調查、10 個工作天內可申訴、14 個工作天內審查；結果可能是停權或終止帳號，並通知學生 My Colleges 名單上的每一所學校。', 'Process: written notice, investigation, appeal within 10 business days, review within 14 business days; outcomes may include suspension or termination of the account and disclosure to every college on the student\'s My Colleges list.', ['A1-S33', 'A1-S34']),
          f('送出時的簽名聲明所有資訊「is my own work, factually true, and honestly presented」。', 'The signature certifies that all information "is my own work, factually true, and honestly presented".', ['A1-S12']),
          inf('Common App 的文字沒有定義「substantive」到什麼程度；各校自己的 AI 規定另見 AI 政策筆記。', 'Common App\'s text does not define "substantive"; school-level AI rules are covered in the separate AI-policy note.', ['A1-S33']),
          f('UC 2026 輔導老師簡報的「Statement of application integrity」把 AI 定位為「a tool not a replacement」，並把 PIQ 形容為「an interview, not an essay」。', 'UC\'s 2026 counselor deck has a "Statement of application integrity" slide calling AI "a tool not a replacement" and the PIQs "an interview, not an essay".', ['A2-S4'])
        ]
      }
    ]
  };
})();
