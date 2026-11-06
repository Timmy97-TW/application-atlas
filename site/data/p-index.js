window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
window.ATLAS.pages['index'] = {
  title: { zh: '申請地圖：美國大學一年級申請，交什麼、何時交、從哪裡交', en: 'Application Atlas: what a US first-year applicant submits, when, and where' },
  judgment: {
    zh: '一份附來源的研究：30 所美國大學的申請內容、期限與入口，深入整理工程與生物申請者的作品集和補充材料，以及校外多年紀錄能放進申請的哪些位置。',
    en: 'A sourced study of what 30 US universities ask for, by when, and through which portal, with depth on portfolios and supplementary materials for engineering and biology applicants, and on where a multi-year record built outside school can enter the application.'
  },
  sections: [
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
        { h: { zh: '30 校逐校資料', en: 'The 30 schools' }, href: 'schools.html', p: { zh: '申請系統、補充文書、推薦信規定、國際申請者的英文與財力證明。', en: 'Systems, supplements, letter rules, English tests and financial documents for international applicants.' } },
        { h: { zh: '英國（UCAS）', en: 'UK (UCAS)' }, href: 'uk/index.html', p: { zh: 'UCAS 系統、入學考試、十所大學的工程與生物科系。', en: 'The UCAS system, admissions tests, ten universities\' engineering and biology courses.' } }
      ]
    }
  ]
};
