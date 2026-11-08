window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
window.ATLAS.pages['index'] = {
  title: { zh: '申請地圖：美國大學一年級申請，交什麼、何時交、從哪裡交', en: 'Application Atlas: what a US first-year applicant submits, when, and where' },
  judgment: {
    zh: '一份附來源的研究：30 所美國大學的申請內容、期限與入口，深入整理工程與生物申請者的作品集和補充材料，以及校外多年紀錄能放進申請的哪些位置。',
    en: 'A sourced study of what 30 US universities ask for, by when, and through which portal, with depth on portfolios and supplementary materials for engineering and biology applicants, and on where a multi-year record built outside school can enter the application.'
  },
  viz: { type: 'stats' },
  sections: [
    {
      id: 'start',
      h: { zh: '從這三頁開始', en: 'Start with these three pages' },
      judgment: { zh: '先在模擬練習頁把整份申請表走一遍，再回來看欄位頁的每一格限制，最後看校外紀錄頁：三年校外實驗室訓練能變成哪些可查證的證明。', en: 'Walk the whole application once on the practice page, then read the limits of every field on the Fields page, then the Outside-record page: what three years of lab training outside school can become as verifiable proof.' },
      cards: [
        { big: { zh: '1', en: '1' }, h: { zh: '模擬練習：整份申請表走一遍', en: 'Practice mock: the whole application' }, href: 'mock/index.html',
          p: { zh: '依 2026–27 公開資料重建的申請表：七個主表區塊、30 所學校各自的題目與字數、推薦人與 FERPA、繳費與簽名、另一套 UC 申請。選一所學校，欄位就照那所學校的規定出現。什麼都不會離開你的瀏覽器。', en: 'The application rebuilt from the 2026–27 published rules: seven common sections, each of the 30 schools\' own questions and limits, recommenders and FERPA, fee and signature, plus the separate UC application. Pick a school and the fields follow that school\'s rules. Nothing leaves your browser.' } },
        { big: { zh: '2', en: '2' }, h: { zh: '欄位：每一格填什麼、上限多少', en: 'Fields: what goes in each box, and its limit' }, href: 'containers.html',
          p: { zh: '整份表格畫成一張圖：每個區塊、每個欄位、字數與字元上限、哪些格子放得下校外紀錄。', en: 'The whole form drawn as one figure: every section, every field, its character or word limit, and which boxes can hold an outside record.' } },
        { big: { zh: '3', en: '3' }, h: { zh: '校外紀錄與作品集：證明怎麼進申請', en: 'Outside record and portfolios: how proof gets in' }, href: 'record.html',
          p: { zh: '三年校外實驗室訓練能產生哪些證明（導師信、簽核的實驗紀錄、海報、預印本、競賽表單），各自進哪個欄位、由誰背書；30 校研究材料的送件路徑。', en: 'The proof three years of outside lab training can produce (mentor letter, countersigned notebook, poster, preprint, competition forms), which container each enters and who vouches; where research material can go at each of the 30 schools.' } }
      ]
    },
    {
      id: 'next',
      h: { zh: '接下來的截止日', en: 'The next deadlines' },
      viz: {
        type: 'upcoming', count: 4, lanes: ['apply'],
        title: { zh: '從今天起，最近的四個申請截止日', en: 'The four nearest application deadlines from today' },
        subtitle: { zh: '依各校官方頁面整理；點卡片看是哪些學校與來源。完整一年請看時程頁。', en: 'From each school\'s own pages; tap a card for the schools and sources. The full year is on the timeline page.' }
      }
    },
    {
      id: 'four',
      h: { zh: '學生要交的四類東西', en: 'The four things a student submits' },
      judgment: { zh: '表格與文書由學生自己填；推薦信由別人填；補充材料是少數學校另外開放的入口，各校規則差異很大。', en: 'Forms and essays come from the student; recommendations come from other people; supplementary materials are an extra door that only some schools open, on very different terms.' },
      cards: [
        { h: { zh: '1 · 申請表', en: '1 · Forms' }, href: 'containers.html', src: ['A1-S6', 'A1-S31'],
          p: { zh: 'Common App 主表六個部分（Profile、Family、Education、Testing、Activities、Writing），加上部分學校要求的 Courses & Grades。活動最多 10 項，每項描述 150 字元。', en: 'The Common App tab: Profile, Family, Education, Testing, Activities, Writing, plus Courses & Grades where a college requires it. Up to 10 activities, 150 characters of description each.' } },
        { h: { zh: '2 · 文書', en: '2 · Essays' }, href: 'containers.html#writing-changes', src: ['A1-S2', 'A1-S1'],
          p: { zh: '主文書 250–650 字，七選一；Additional information 自 2025–26 起上限 300 字，另有 250 字的 Challenges and circumstances。各校補充文書另計。', en: 'One personal essay of 250–650 words from seven prompts; Additional information is capped at 300 words since 2025–26, with a separate 250-word Challenges and circumstances answer. Each college adds its own supplement.' } },
        { h: { zh: '3 · 推薦信', en: '3 · Recommendations' }, href: 'containers.html#recommenders', src: ['A1-S13', 'A1-S14', 'A1-S22'],
          p: { zh: '輔導老師（School Report）、任課老師、以及學校有開放才能指派的 Other Recommender。老師表格有 16 個評分列、8 級量表。', en: 'The counselor (School Report), teachers, and an Other Recommender only where the college allows one. The teacher form has 16 rating rows on an 8-point scale.' } },
        { h: { zh: '4 · 補充材料', en: '4 · Supplementary materials' }, href: 'portfolios.html', src: ['B1-P7', 'B1-P10', 'B1-P14'],
          p: { zh: '作品集、研究摘要、影片、連結：有的學校用 SlideRoom，有的用自己的入口，有的明說連結不會被審閱。逐校矩陣見作品集頁。', en: 'Portfolios, research abstracts, videos, links: some schools use SlideRoom, some their own portal, and some say links will not be reviewed. The school-by-school matrix is on the portfolios page.' } }
      ]
    },
    {
      id: 'year',
      h: { zh: '申請年度縮圖', en: 'The application year in miniature' },
      viz: {
        type: 'ribbon', from: '2026-08-01', to: '2027-06-30',
        title: { zh: '今天在申請年度的哪裡', en: 'Where today sits in the application year' },
        subtitle: { zh: '藍色填滿到今天；空心點是還沒到的日期。點任一個點看來源。', en: 'The blue fill runs to today; hollow pins are still ahead. Tap any pin for its sources.' },
        points: [
          { date: '2026-08-01', big: { zh: '8/1', en: 'Aug 1' }, label: { zh: '申請系統開放', en: 'Applications open' }, sub: { zh: 'Common App 與 UC 申請開放填寫', en: 'Common App and the UC application open' }, src: ['A1-S4', 'A3b-S23'] },
          { date: '2026-10-01', end: '2026-11-30', big: { zh: '10/1–11/30', en: 'Oct 1–Nov 30' }, label: { zh: 'UC 申請期', en: 'UC filing period' }, sub: { zh: 'UC 只在這段期間收件', en: 'UC accepts applications only in this window' }, src: ['A3b-S23'] },
          { date: '2026-11-01', big: { zh: '11/1', en: 'Nov 1' }, label: { zh: '早申請高峰', en: 'Early-deadline peak' }, sub: { zh: '多數 ED、EA、REA 截止', en: 'Most ED, EA and REA deadlines' }, src: ['A3a-S1', 'A3a-S4', 'A3a-S71'] },
          { date: '2027-01-01', end: '2027-01-06', big: { zh: '1/1–1/6', en: 'Jan 1–6' }, label: { zh: '一般申請截止', en: 'Regular deadlines' }, sub: { zh: '多數 RD 與 ED II 截止', en: 'Most RD and ED II deadlines' }, src: ['A3a-S26', 'A3a-S33', 'A3a-S1'] },
          { date: '2027-03-15', end: '2027-04-01', big: { zh: '3–4 月', en: 'Mar–Apr' }, label: { zh: '放榜', en: 'Decisions' }, sub: { zh: 'UC 3 月；多數私校 3 月中到 4 月初', en: 'UC in March; most private schools mid-March to early April' }, src: ['A3b-S23', 'A3a-S69'] },
          { date: '2027-05-01', big: { zh: '5/1', en: 'May 1' }, label: { zh: '回覆截止', en: 'Reply date' }, sub: { zh: '接著是 I-20、SEVIS 費用、F-1 簽證', en: 'Then the I-20, the SEVIS fee and the F-1 visa' }, src: ['A3a-S1', 'A3b-S45'] }
        ]
      },
      judgment: { zh: '11 月 1 日前後是早申請最集中的日期；1 月初是一般申請截止的高峰；3 月到 4 月初放榜；5 月 1 日回覆。', en: 'Early deadlines cluster around 1 November; regular deadlines peak in the first days of January; decisions come from March to early April; replies are due 1 May.' },
      cards: [
        { big: { zh: '8/1', en: 'Aug 1' }, h: { zh: '申請系統開放', en: 'Applications open' }, p: { zh: 'Common App 與 UC 申請開放填寫。', en: 'Common App and the UC application open.' }, src: ['A1-S4', 'A3b-S23'] },
        { big: { zh: '11/1', en: 'Nov 1' }, h: { zh: '早申請高峰', en: 'Early-deadline peak' }, p: { zh: 'ED、EA、REA 大多在此；少數在 10/15 或 11/2。', en: 'Most ED, EA and REA deadlines; a few fall on Oct 15 or Nov 2.' }, src: ['A3a-S1', 'A3a-S4', 'A3a-S71'] },
        { big: { zh: '11/30', en: 'Nov 30' }, h: { zh: 'UC 截止', en: 'UC closes' }, p: { zh: 'UC 申請期 10/1–11/30。', en: 'UC filing period, Oct 1 – Nov 30.' }, src: ['A3b-S23'] },
        { big: { zh: '1/1–1/6', en: 'Jan 1–6' }, h: { zh: '一般申請截止', en: 'Regular deadlines' }, p: { zh: '多數 RD 與 ED II 截止。', en: 'Most RD and ED II deadlines.' }, src: ['A3a-S26', 'A3a-S33', 'A3a-S1'] },
        { big: { zh: '3–4 月', en: 'Mar–Apr' }, h: { zh: '放榜', en: 'Decisions' }, p: { zh: 'UC 3 月；多數私校 3 月中到 4 月初。', en: 'UC in March; most private schools mid-March to early April.' }, src: ['A3b-S23', 'A3a-S69'] },
        { big: { zh: '5/1', en: 'May 1' }, h: { zh: '回覆截止', en: 'Reply date' }, p: { zh: '接著是 I-20、SEVIS 費用、F-1 簽證。', en: 'Then the I-20, the SEVIS fee and the F-1 visa.' }, src: ['A3a-S1', 'A3b-S45'] }
      ]
    },
    {
      id: 'pages',
      h: { zh: '從哪裡開始讀', en: 'Where to start reading' },
      cards: [
        { h: { zh: '模擬練習', en: 'Practice walkthrough' }, href: 'mock/index.html', p: { zh: '照 2026–27 一年級申請表的結構，一步步填一次：欄位、字數上限、推薦人、送出前檢查。資料只存在你的瀏覽器。', en: 'Fill in the 2026–27 first-year application structure step by step: fields, limits, recommenders, the pre-submit check. Data stays in your browser.' } },
        { h: { zh: '不容易查到的發現', en: 'Hard-to-find findings' }, href: 'insights.html', p: { zh: '各校 Common Data Set 的審查因素權重、招生辦公室自己說過的閱讀方式、各類意外的規定。', en: 'Common Data Set factor weights per school, what admissions offices have said about how they read, and rules that surprise.' } },
        { h: { zh: '作品集的時序陷阱', en: 'Sequencing traps' }, href: 'insights.html#sequencing', src: ['A3a-S18', 'A3a-S58'],
          p: { zh: '要交作品集或研究材料的人，綁住你的日期常常不是申請截止日。Stanford 的藝術作品集申請者要比別人早 17 天送出 Common App；Brown、Princeton、Cornell 的補充材料反而在申請截止之後才到期。', en: 'If you are sending a portfolio or research material, the date that binds you is often not the application deadline. Stanford\u2019s arts-portfolio applicants file the Common App 17 days early; Brown\u2019s, Princeton\u2019s and Cornell\u2019s supplements fall due after it.' } },
        { h: { zh: '學校 1–50 與比較', en: 'Schools 1–50 and the comparator' }, href: 'schools.html', p: { zh: '申請系統、補充文書、推薦信規定、國際申請者的英文與財力證明。', en: 'Systems, supplements, letter rules, English tests and financial documents for international applicants.' } },
        { h: { zh: '英國（UCAS）', en: 'UK (UCAS)' }, href: 'uk/index.html', p: { zh: 'UCAS 系統、入學考試、十所大學的工程與生物科系。', en: 'The UCAS system, admissions tests, ten universities\' engineering and biology courses.' } }
      ]
    }
  ]
};
