window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
// Generated from research notes (B5 C7 table parsed directly). Content is data; edit with care.
window.ATLAS.pages['insights'] = {
 "title": {
  "zh": "不容易查到的發現",
  "en": "Findings that are hard to find"
 },
 "judgment": {
  "zh": "學校自己的表格與頁面裡，有不少與常見說法不符、或彼此矛盾的地方；這一頁把它們逐條列出並附出處。",
  "en": "Schools' own forms and pages contain many points that contradict common advice or each other; this page lists them one by one, with sources."
 },
 "intro": {
  "zh": "每一則都有出處與來源類別，並標示為 [事實]（有來源的事實）、[推論]（由事實推得）或 [假設]。關於招生讀者「怎麼讀、看重什麼」的說法，只有在招生辦公室自己說過（官方頁面、部落格、podcast）時才列為事實；其餘一律標為推論。法院判決書描述的是過去年份的程序，另外標示。本站維護者沒有招生辦公室的工作經驗。",
  "en": "Every item is cited with its source class and tagged as a fact (sourced), an inference (drawn from facts) or an assumption. Claims about how admissions readers behave appear as facts only where an admissions office said them in its own voice (official pages, blogs, podcasts); anything else is tagged as inference. Court records describe past procedures and are labelled as such. The maintainer of this site has no admissions-office experience."
 },
 "sections": [
  {
   "id": "cds",
   "viz": {
    "type": "cds-heatmap", "wide": true,
    "title": { "zh": "28 校中有 25 校把課程難度勾為「非常重要」；27 校不考慮宗教。", "en": "Course rigor is marked Very important at 25 of 28 schools; religious affiliation is not considered at 27." },
    "subtitle": { "zh": "每一格是該校在自己的 Common Data Set（多為 2025-26）裡替一項 C7 因素勾的等級。點欄名可依該因素排序。", "en": "Each cell is the mark a school gave one C7 factor in its own Common Data Set (mostly 2025-26). Click a column name to sort by it." }
   },
   "h": {
    "zh": "Common Data Set C7：各校自己勾選的審查因素",
    "en": "Common Data Set C7: the factors each school marks for itself"
   },
   "judgment": {
    "zh": "28 校中有 25 校把「課程難度」勾為 VI；Harvard 與 UT Austin 沒有任何一項勾 VI 或 I。",
    "en": "25 of the 28 schools mark course rigor VI; Harvard and UT Austin mark no factor VI or I."
   },
   "intro": {
    "zh": "Common Data Set（CDS）是美國大學每年自行填寫的標準表格，C7 一節要學校替 19 項新生審查因素各勾一格。代號：**VI** = Very Important（非常重要）、**I** = Important（重要）、**C** = Considered（會考慮）、**NC** = Not Considered（不考慮）。每一格都直接讀自該校官方 CDS 檔案裡的勾選記號（表單欄位值、勾選位置或試算表儲存格），沒有用摘要工具轉述；Brown 只在 Tableau 儀表板公布 C7，是從放大的截圖讀出。年度多為 2025-26；Olin 找到的最新版是 2023-24。Purdue 自 2024-25 起把 West Lafayette、Indianapolis 與 Polytechnic Statewide 合併填報，因此不是 West Lafayette 單獨的資料。Columbia 每年公布兩份，計數只用 College + Engineering 那份；General Studies 那列僅供參考。Williams 與 Amherst 的頁面拒絕自動存取，尚未取得。2025-26 版表格已沒有「Racial/ethnic status」一列，所以本表也不列。C7 是學校的自我描述，表格本身沒有定義權重，請不要把它讀成計分公式。",
    "en": "The Common Data Set (CDS) is a standard form US colleges fill in each year. Section C7 asks each school to mark 19 first-year admission factors. Codes: **VI** = Very Important, **I** = Important, **C** = Considered, **NC** = Not Considered. Every cell was read from the marks in the school's own CDS file (form-field values, the position of each mark, or spreadsheet cells), not from a summarising tool. Brown publishes C7 only in a Tableau dashboard, so its codes were read from a zoomed screenshot. Most files are 2025-26; the newest Olin file found is 2023-24. From 2024-25 Purdue reports West Lafayette, Indianapolis and Polytechnic Statewide together, so its row is not West Lafayette alone. Columbia publishes two files a year; counts use the College + Engineering file, and the General Studies row is shown for reference only. Williams and Amherst refused automated access and are not yet retrieved. The 2025-26 form has no \"Racial/ethnic status\" row, so this table leaves it out. C7 is a self-description; the form defines no weights, so do not read it as a scoring formula."
   },
   "table": {
    "cols": [
     {
      "zh": "學校",
      "en": "School"
     },
     {
      "zh": "CDS 年度",
      "en": "CDS year"
     },
     {
      "zh": "課程難度（Rigor）",
      "en": "Rigor"
     },
     {
      "zh": "班排（Rank）",
      "en": "Rank"
     },
     {
      "zh": "GPA（GPA）",
      "en": "GPA"
     },
     {
      "zh": "標準化考試（Test）",
      "en": "Test"
     },
     {
      "zh": "申請文章（Essay）",
      "en": "Essay"
     },
     {
      "zh": "推薦信（Rec）",
      "en": "Rec"
     },
     {
      "zh": "面試（Intv）",
      "en": "Interview"
     },
     {
      "zh": "課外活動（EC）",
      "en": "EC"
     },
     {
      "zh": "才能（Talent）",
      "en": "Talent"
     },
     {
      "zh": "品格（Char）",
      "en": "Character"
     },
     {
      "zh": "第一代大學生（1stG）",
      "en": "1st gen"
     },
     {
      "zh": "校友關係（Alum）",
      "en": "Alumni"
     },
     {
      "zh": "居住地區（Geo）",
      "en": "Geography"
     },
     {
      "zh": "州居民身分（State）",
      "en": "State res."
     },
     {
      "zh": "宗教（Relig）",
      "en": "Religion"
     },
     {
      "zh": "志工（Vol）",
      "en": "Volunteer"
     },
     {
      "zh": "工作經驗（Work）",
      "en": "Work"
     },
     {
      "zh": "就讀意願（Int）",
      "en": "Interest"
     }
    ],
    "rows": [
     {
      "cells": [
       {
        "zh": "MIT",
        "en": "MIT"
       },
       "2025-26",
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C01"
        ]
       }
      ],
      "filter": "rigor-i rank-c gpa-i test-i essay-i rec-i intv-i ec-i talent-i char-vi firstgen-c alum-nc geo-c state-nc relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Caltech",
        "en": "Caltech"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C02"
        ]
       }
      ],
      "filter": "rigor-vi rank-i gpa-i test-vi essay-vi rec-vi intv-nc ec-i talent-c char-vi firstgen-c alum-nc geo-c state-nc relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Stanford",
        "en": "Stanford"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C03"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-vi essay-vi rec-vi intv-c ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-nc relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Harvard",
        "en": "Harvard"
       },
       "2025-26",
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C04"
        ]
       }
      ],
      "filter": "rigor-c rank-nc gpa-c test-c essay-c rec-c intv-c ec-c talent-c char-c firstgen-c alum-c geo-c state-nc relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Yale",
        "en": "Yale"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C05"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-c essay-vi rec-vi intv-c ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Princeton",
        "en": "Princeton"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C06"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-vi essay-vi rec-vi intv-c ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-nc relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Columbia（College + Engineering）",
        "en": "Columbia (College + Engineering)"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C07"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-c essay-vi rec-vi intv-nc ec-vi talent-i char-vi firstgen-c alum-c geo-c state-nc relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Columbia（General Studies；非一般新生管道，不列入計數）",
        "en": "Columbia (General Studies; not the main first-year route, not counted)"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C08"
        ]
       }
      ],
      "filter": "rigor-vi rank-i gpa-vi test-vi essay-vi rec-i intv-vi ec-i talent-i char-vi firstgen-vi alum-c geo-c state-c relig-nc vol-c work-vi interest-vi not-counted"
     },
     {
      "cells": [
       {
        "zh": "Penn",
        "en": "Penn"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C09"
        ]
       }
      ],
      "filter": "rigor-vi rank-i gpa-vi test-c essay-vi rec-vi intv-nc ec-i talent-i char-vi firstgen-c alum-c geo-c state-c relig-nc vol-i work-i interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Brown",
        "en": "Brown"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C10"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-vi essay-vi rec-vi intv-nc ec-i talent-vi char-vi firstgen-c alum-c geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Cornell",
        "en": "Cornell"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C11"
        ]
       }
      ],
      "filter": "rigor-vi rank-i gpa-i test-c essay-vi rec-vi intv-c ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Georgetown",
        "en": "Georgetown"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C12"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-vi essay-vi rec-vi intv-i ec-i talent-vi char-vi firstgen-c alum-c geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Carnegie Mellon",
        "en": "Carnegie Mellon"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C13"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-c essay-i rec-i intv-nc ec-vi talent-i char-vi firstgen-i alum-nc geo-c state-nc relig-nc vol-vi work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Georgia Tech",
        "en": "Georgia Tech"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C14"
        ]
       }
      ],
      "filter": "rigor-vi rank-nc gpa-vi test-c essay-i rec-c intv-nc ec-i talent-c char-vi firstgen-nc alum-nc geo-c state-vi relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Purdue（全系統合併資料）",
        "en": "Purdue (system-wide data)"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C15"
        ]
       }
      ],
      "filter": "rigor-vi rank-c gpa-vi test-i essay-vi rec-i intv-nc ec-i talent-c char-i firstgen-i alum-nc geo-c state-c relig-nc vol-c work-c interest-c"
     },
     {
      "cells": [
       {
        "zh": "Michigan（Ann Arbor）",
        "en": "Michigan (Ann Arbor)"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C16"
        ]
       }
      ],
      "filter": "rigor-vi rank-nc gpa-vi test-i essay-i rec-i intv-nc ec-c talent-c char-i firstgen-i alum-nc geo-c state-c relig-nc vol-c work-c interest-c"
     },
     {
      "cells": [
       {
        "zh": "UIUC",
        "en": "UIUC"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C17"
        ]
       }
      ],
      "filter": "rigor-vi rank-nc gpa-vi test-c essay-i rec-nc intv-nc ec-vi talent-vi char-vi firstgen-vi alum-nc geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Olin",
        "en": "Olin"
       },
       {
        "zh": "2023-24（找到的最新版）",
        "en": "2023-24 (latest found)"
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C18"
        ]
       }
      ],
      "filter": "rigor-vi rank-i gpa-vi test-c essay-vi rec-vi intv-vi ec-vi talent-vi char-vi firstgen-c alum-nc geo-c state-c relig-nc vol-i work-i interest-vi"
     },
     {
      "cells": [
       {
        "zh": "Harvey Mudd",
        "en": "Harvey Mudd"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C19"
        ]
       }
      ],
      "filter": "rigor-vi rank-c gpa-vi test-c essay-i rec-vi intv-c ec-i talent-c char-i firstgen-c alum-nc geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Johns Hopkins",
        "en": "Johns Hopkins"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C20"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-vi essay-vi rec-vi intv-nc ec-i talent-i char-i firstgen-c alum-nc geo-c state-nc relig-nc vol-i work-i interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Duke",
        "en": "Duke"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C21"
        ]
       }
      ],
      "filter": "rigor-vi rank-i gpa-vi test-c essay-i rec-vi intv-c ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-c relig-nc vol-c work-c interest-c"
     },
     {
      "cells": [
       {
        "zh": "Northwestern",
        "en": "Northwestern"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C22"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-c essay-vi rec-vi intv-nc ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-nc relig-nc vol-c work-c interest-c"
     },
     {
      "cells": [
       {
        "zh": "Rice",
        "en": "Rice"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C23"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-vi essay-vi rec-vi intv-c ec-vi talent-vi char-vi firstgen-c alum-c geo-c state-c relig-nc vol-c work-c interest-c"
     },
     {
      "cells": [
       {
        "zh": "UC Berkeley",
        "en": "UC Berkeley"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C24"
        ]
       }
      ],
      "filter": "rigor-vi rank-nc gpa-vi test-c essay-vi rec-c intv-nc ec-i talent-c char-i firstgen-c alum-nc geo-nc state-c relig-nc vol-i work-i interest-nc"
     },
     {
      "cells": [
       {
        "zh": "UCLA",
        "en": "UCLA"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C25"
        ]
       }
      ],
      "filter": "rigor-vi rank-nc gpa-vi test-nc essay-vi rec-nc intv-nc ec-i talent-i char-i firstgen-c alum-nc geo-c state-c relig-nc vol-i work-i interest-nc"
     },
     {
      "cells": [
       {
        "zh": "UC San Diego",
        "en": "UC San Diego"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C26"
        ]
       }
      ],
      "filter": "rigor-vi rank-c gpa-vi test-nc essay-vi rec-nc intv-nc ec-i talent-i char-i firstgen-c alum-nc geo-c state-i relig-nc vol-i work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "UT Austin",
        "en": "UT Austin"
       },
       "2025-26",
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C27"
        ]
       }
      ],
      "filter": "rigor-c rank-c gpa-c test-c essay-c rec-c intv-nc ec-c talent-c char-c firstgen-c alum-nc geo-c state-c relig-nc vol-c work-c interest-nc"
     },
     {
      "cells": [
       {
        "zh": "University of Washington（Seattle）",
        "en": "University of Washington (Seattle)"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "I",
         "en": "I"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C28"
        ]
       }
      ],
      "filter": "rigor-vi rank-nc gpa-vi test-nc essay-vi rec-nc intv-nc ec-i talent-i char-c firstgen-i alum-nc geo-nc state-vi relig-nc vol-i work-i interest-nc"
     },
     {
      "cells": [
       {
        "zh": "Williams",
        "en": "Williams"
       },
       {
        "t": {
         "zh": "未取得：該校 IR 頁面拒絕自動存取（2026-11-07），不代表未公開",
         "en": "not retrieved: the IR page refused automated access (2026-11-07); this does not mean it is unpublished"
        },
        "tag": "f",
        "src": [
         "B5-C29"
        ]
       },
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—"
      ],
      "filter": "not-retrieved"
     },
     {
      "cells": [
       {
        "zh": "Amherst",
        "en": "Amherst"
       },
       {
        "t": {
         "zh": "未取得：該校 IR 頁面拒絕自動存取（2026-11-07），不代表未公開",
         "en": "not retrieved: the IR page refused automated access (2026-11-07); this does not mean it is unpublished"
        },
        "tag": "f",
        "src": [
         "B5-C30"
        ]
       },
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—",
       "—"
      ],
      "filter": "not-retrieved"
     },
     {
      "cells": [
       {
        "zh": "Swarthmore",
        "en": "Swarthmore"
       },
       "2025-26",
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "VI",
         "en": "VI"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "C",
         "en": "C"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       },
       {
        "t": {
         "zh": "NC",
         "en": "NC"
        },
        "tag": "f",
        "src": [
         "B5-C31"
        ]
       }
      ],
      "filter": "rigor-vi rank-vi gpa-vi test-c essay-vi rec-vi intv-c ec-c talent-c char-vi firstgen-c alum-c geo-c state-c relig-c vol-c work-c interest-nc"
     }
    ],
    "filter": true,
    "facets": [
     {
      "v": "essay-vi",
      "label": {
       "zh": "申請文章 = VI",
       "en": "Essay = VI"
      }
     },
     {
      "v": "rec-vi",
      "label": {
       "zh": "推薦信 = VI",
       "en": "Recommendations = VI"
      }
     },
     {
      "v": "rec-nc",
      "label": {
       "zh": "推薦信 = NC",
       "en": "Recommendations = NC"
      }
     },
     {
      "v": "test-vi",
      "label": {
       "zh": "標準化考試 = VI",
       "en": "Test scores = VI"
      }
     },
     {
      "v": "test-nc",
      "label": {
       "zh": "標準化考試 = NC",
       "en": "Test scores = NC"
      }
     },
     {
      "v": "intv-nc",
      "label": {
       "zh": "面試 = NC",
       "en": "Interview = NC"
      }
     },
     {
      "v": "interest-c",
      "label": {
       "zh": "就讀意願 = C",
       "en": "Level of interest = C"
      }
     },
     {
      "v": "interest-nc",
      "label": {
       "zh": "就讀意願 = NC",
       "en": "Level of interest = NC"
      }
     },
     {
      "v": "char-vi",
      "label": {
       "zh": "品格 = VI",
       "en": "Character = VI"
      }
     },
     {
      "v": "alum-nc",
      "label": {
       "zh": "校友關係 = NC",
       "en": "Alumni relation = NC"
      }
     },
     {
      "v": "alum-c",
      "label": {
       "zh": "校友關係 = C",
       "en": "Alumni relation = C"
      }
     }
    ]
   },
   "items": [
    {
     "t": {
      "zh": "2025-26 版 CDS 的 C7 已沒有「Racial/ethnic status」一列；可填寫的 PDF 裡連對應的欄位編號都不見了。表中沒有這一欄，是因為表格本身拿掉了，不是學校留白。",
      "en": "The 2025-26 CDS template has no \"Racial/ethnic status\" row in C7; in fillable files its form-field number is gone too. The column is missing because the form dropped it, not because schools left it blank."
     },
     "tag": "f",
     "src": [
      "B5-C01",
      "B5-C04",
      "B5-C13",
      "B5-C31"
     ]
    },
    {
     "t": {
      "zh": "28 校中有 25 校把「課程難度」（rigor of secondary school record）勾為 VI。例外是 MIT（I）、Harvard（C）、UT Austin（C）。",
      "en": "25 of the 28 schools mark rigor of secondary school record VI. The exceptions are MIT (I), Harvard (C) and UT Austin (C)."
     },
     "tag": "f",
     "src": [
      "B5-C01",
      "B5-C04",
      "B5-C27"
     ]
    },
    {
     "t": {
      "zh": "Harvard 與 UT Austin 的 C7 每一項都是 C 或 NC，沒有任何 VI 或 I。MIT 唯一勾 VI 的是品格（character/personal qualities），學業項目沒有一項是 VI。",
      "en": "Harvard and UT Austin mark every factor C or NC, with no VI or I anywhere. MIT's only VI is character/personal qualities; none of its academic factors is VI."
     },
     "tag": "f",
     "src": [
      "B5-C04",
      "B5-C27",
      "B5-C01"
     ]
    },
    {
     "t": {
      "zh": "申請文章勾 VI 的有 19 校，推薦信勾 VI 的有 16 校。推薦信勾 NC 的有 4 校，都是公立大學：UIUC、UCLA、UC San Diego、University of Washington。",
      "en": "Essay is VI at 19 of the 28 schools and recommendations at 16. Four schools mark recommendations NC, all of them public: UIUC, UCLA, UC San Diego and Washington."
     },
     "tag": "f",
     "src": [
      "B5-C17",
      "B5-C25",
      "B5-C26",
      "B5-C28"
     ]
    },
    {
     "t": {
      "zh": "標準化考試勾 VI 的有 7 校：Caltech、Stanford、Princeton、Brown、Georgetown、Johns Hopkins、Rice。勾 NC 的有 3 校：UCLA、UC San Diego、University of Washington。另有 15 校勾 C。",
      "en": "Test scores are VI at 7 schools (Caltech, Stanford, Princeton, Brown, Georgetown, Johns Hopkins, Rice), NC at 3 (UCLA, UC San Diego, Washington) and C at 15."
     },
     "tag": "f",
     "src": [
      "B5-C02",
      "B5-C03",
      "B5-C06",
      "B5-C10",
      "B5-C12",
      "B5-C20",
      "B5-C23",
      "B5-C25",
      "B5-C26",
      "B5-C28"
     ]
    },
    {
     "t": {
      "zh": "面試勾 NC 的有 16 校，就讀意願（level of applicant's interest）勾 NC 的有 22 校。兩項都只有 Olin（2023-24 版）勾 VI；就讀意願勾 C 的是 Purdue、Michigan、Duke、Northwestern、Rice。",
      "en": "Interview is NC at 16 schools and level of applicant's interest is NC at 22. Only Olin (2023-24 file) marks either one VI. Interest is C at Purdue, Michigan, Duke, Northwestern and Rice."
     },
     "tag": "f",
     "src": [
      "B5-C18",
      "B5-C15",
      "B5-C16",
      "B5-C21",
      "B5-C22",
      "B5-C23"
     ]
    },
    {
     "t": {
      "zh": "校友關係勾 NC 的有 15 校，勾 C 的有 13 校；勾 C 的 13 校全是私立，表中 9 所公立大學全部勾 NC。宗教只有 Swarthmore 勾 C，其餘 27 校都是 NC。",
      "en": "Alumni relation is NC at 15 schools and C at 13. All 13 that mark C are private; all nine public universities in the table mark NC. Religion is C only at Swarthmore and NC at the other 27."
     },
     "tag": "f",
     "src": [
      "B5-C31",
      "B5-C14",
      "B5-C15",
      "B5-C16",
      "B5-C17",
      "B5-C24",
      "B5-C25",
      "B5-C26",
      "B5-C27",
      "B5-C28"
     ]
    },
    {
     "t": {
      "zh": "只有 Carnegie Mellon 把志工勾為 VI；只有 Georgia Tech 與 University of Washington 把州居民身分勾為 VI（UC San Diego 勾 I）。",
      "en": "Carnegie Mellon is the only school to mark volunteer work VI. Georgia Tech and Washington are the only ones to mark state residency VI (UC San Diego marks it I)."
     },
     "tag": "f",
     "src": [
      "B5-C13",
      "B5-C14",
      "B5-C28",
      "B5-C26"
     ]
    },
    {
     "t": {
      "zh": "檔案本身的矛盾照原樣呈現：Olin 2023-24 在 C7 把考試勾 C，C8 卻回答不使用 SAT/ACT；UC Berkeley 在 UC 不採計考試的政策下，仍把考試勾 C、C8A 答「Y」。",
      "en": "Contradictions are reported as published: Olin's 2023-24 file marks Test C in C7 but answers \"No\" to using SAT/ACT in C8, and UC Berkeley marks Test C and answers C8A \"Y\" despite UC's test-free policy."
     },
     "tag": "f",
     "src": [
      "B5-C18",
      "B5-C24"
     ]
    },
    {
     "t": {
      "zh": "C7 是用標準表格做的自我描述，不是權重公式。Harvard 全部勾 C，並不表示各因素的份量相同；把 C7 讀成「每項各占多少分」，超出任何一所學校對這份表格的說明。",
      "en": "C7 is a self-description on a standard form, not a weighting formula. Harvard marking everything C does not tell you the factors weigh the same; reading C7 as \"how much each factor counts\" goes beyond what any school says the form means."
     },
     "tag": "i",
     "src": [
      "B5-C04"
     ]
    }
   ]
  },
  {
   "id": "numbers",
   "viz": [
    {
     "type": "admit-dumbbell",
     "title": { "zh": "有公布 ED 人數的 9 校，ED 錄取率都高於整體錄取率。", "en": "At all 9 schools that report ED counts, the ED admit rate is above the overall admit rate." },
     "subtitle": { "zh": "整體錄取率（空心圈）與 ED 錄取率（實心點），取自各校最新 CDS 的 C1 與 C21，畫在同一條從 0 起算的軸上。第二個檢視列出有 C1 數字的 27 校整體錄取率。", "en": "Overall admit rate (ring) and ED admit rate (dot) from C1 and C21 of each school's newest CDS, on one shared scale that starts at 0. The second view shows the overall rate for all 27 schools with C1 figures." },
     "note": { "zh": "ED 申請池與整體申請池是不同的一群人：ED 申請者承諾錄取就入學，而 CDS 沒有拆開 ED 申請池的組成。兩個比例只並列、不相除；差距不能解讀成「選 ED 本身會提高機會」。", "en": "The ED pool and the overall pool are different groups of applicants: ED applicants commit to enrol if admitted, and the CDS does not report who makes up the ED pool. The two rates are shown side by side, never divided; the gap does not show that applying ED by itself raises an applicant's chances." }
    },
    {
     "type": "share-bars", "metric": "nonresidentShare",
     "title": { "zh": "有數字的 27 校中，非居民占新生的比例從 3.8%（UT Austin）到 18.1%（UC San Diego）。", "en": "Nonresidents make up between 3.8% (UT Austin) and 18.1% (UC San Diego) of first-years at the 27 schools with figures." },
     "subtitle": { "zh": "B2 非居民新生 ÷ C1 入學新生。非居民（nonresident）依簽證身分區分，不是國籍。", "en": "B2 nonresident first-years ÷ C1 enrolled first-years. Nonresident is a visa category, not a nationality." }
    }
   ],
   "h": {
    "zh": "Common Data Set 數字：申請人數、錄取率、ED、候補、送分比例、國際生比例",
    "en": "Common Data Set numbers: applicants, admit rates, ED, waitlist, test submission, nonresident share"
   },
   "judgment": {
    "zh": "有公布 ED 人數的 9 校，ED 錄取率全部高於整體錄取率；但 CDS 沒有拆開 ED 申請池的組成，這個差距不能解讀成「選 ED 本身會提高機會」。",
    "en": "At all 9 schools that report ED counts, the ED admit rate is above the overall admit rate. The CDS does not break down who is in the ED pool, so the gap does not show that applying ED by itself raises an applicant's chances."
   },
   "intro": {
    "zh": "這張表取自各校最新一份 CDS：C1（申請／錄取／入學人數）、C21（ED）、C2（候補名單）、C9（送分比例與 SAT 中間 50%）、B2（非居民 first-year 人數）。年度多為 2025-26（Fall 2025 入學）；Olin 找到的最新版是 2023-24。Brown 只用 Tableau 公布，這次只匯出到 C9 的 ACT 分數分布，其餘區塊沒有取得；Williams（HTTP 403）與 Amherst（HTTP 404）拒絕自動存取，也沒有取得。比例都是對檔案裡數字的簡單算術：錄取率 = 錄取 ÷ 申請；ED 錄取率 = ED 錄取 ÷ ED 申請；非居民比例 = B2 非居民新生 ÷ C1 入學新生。「Σ」表示學校沒填 C1 總計列，表中數字是性別分列的加總。Purdue 是三個校區合併填報。Carnegie Mellon 的 C2 與 C9 區塊標的是「Fall 2024」，屬於哪一屆尚未確認。Cornell 只填了 C9 的人數、沒填百分比。依本站規則，ED 與整體錄取率只並列，不相除成倍數。",
    "en": "Figures come from each school's newest Common Data Set: C1 (applied / admitted / enrolled), C21 (ED), C2 (waitlist), C9 (share of enrolled students submitting scores, SAT middle 50%) and B2 (nonresident first-years). Most files are 2025-26 (Fall 2025 entrants); the newest Olin file found is 2023-24. Brown publishes only through Tableau, and the only export that worked was its C9 ACT score-range sheet, so the other sections were not retrieved. Williams (HTTP 403) and Amherst (HTTP 404) refused automated access and were not retrieved either. Every rate is plain arithmetic on the cited cells: admit rate = admits ÷ applicants; ED admit rate = ED admits ÷ ED applicants; nonresident share = B2 nonresident first-years ÷ C1 enrolled first-years. \"Σ\" marks a total the school left blank, shown here as the sum of its sex rows. Purdue reports three campuses together. Carnegie Mellon labels its C2 and C9 blocks \"Fall 2024\", and which cohort they describe is unresolved. Cornell fills C9 counts but not percentages. Under this site's rules, ED and overall admit rates are shown side by side and never divided into a multiplier."
   },
   "table": {
    "filter": true,
    "cols": [
     {
      "zh": "學校",
      "en": "School"
     },
     {
      "zh": "CDS 年度",
      "en": "CDS year"
     },
     {
      "zh": "申請人數（C1）",
      "en": "Applicants (C1)"
     },
     {
      "zh": "錄取人數（C1）",
      "en": "Admits (C1)"
     },
     {
      "zh": "錄取率",
      "en": "Admit rate"
     },
     {
      "zh": "ED 申請人數（C21）",
      "en": "ED applicants (C21)"
     },
     {
      "zh": "ED 錄取人數（C21）",
      "en": "ED admits (C21)"
     },
     {
      "zh": "ED 錄取率",
      "en": "ED admit rate"
     },
     {
      "zh": "候補：提供 → 接受 → 錄取（C2）",
      "en": "Waitlist: offered → accepted → admitted (C2)"
     },
     {
      "zh": "送 SAT 比例（C9）",
      "en": "% submitting SAT (C9)"
     },
     {
      "zh": "送 ACT 比例（C9）",
      "en": "% submitting ACT (C9)"
     },
     {
      "zh": "SAT Composite 25 / 50 / 75（C9）",
      "en": "SAT Composite 25th / 50th / 75th (C9)"
     },
     {
      "zh": "非居民新生／新生總數（B2 ÷ C1）",
      "en": "Nonresident first-years / enrolled (B2 ÷ C1)"
     }
    ],
    "rows": [
     {
      "cells": [
       {
        "zh": "MIT",
        "en": "MIT"
       },
       "2025-26",
       {
        "t": {
         "zh": "29,281",
         "en": "29,281"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "1,334",
         "en": "1,334"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "4.56%",
         "en": "4.56%"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "561 → 468 → 10",
         "en": "561 → 468 → 10"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "83%",
         "en": "83%"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "31%",
         "en": "31%"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "1520 / 1550 / 1570",
         "en": "1520 / 1550 / 1570"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       },
       {
        "t": {
         "zh": "124 / 1,152 (10.76%)",
         "en": "124 / 1,152 (10.76%)"
        },
        "tag": "f",
        "src": [
         "B6-N01"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Caltech",
        "en": "Caltech"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 11,285",
         "en": "Σ 11,285"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "Σ 428",
         "en": "Σ 428"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "3.79%",
         "en": "3.79%"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "263 → 211 → 1",
         "en": "263 → 211 → 1"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "78%",
         "en": "78%"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "22%",
         "en": "22%"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N02"
        ]
       },
       {
        "t": {
         "zh": "37 / Σ 248 (14.92%)",
         "en": "37 / Σ 248 (14.92%)"
        },
        "tag": "f",
        "src": [
         "B6-N02"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Stanford",
        "en": "Stanford"
       },
       "2025-26",
       {
        "t": {
         "zh": "60,646",
         "en": "60,646"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "2,302",
         "en": "2,302"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "3.80%",
         "en": "3.80%"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "669 → 573 → 57",
         "en": "669 → 573 → 57"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "55.57%",
         "en": "55.57%"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "20.94%",
         "en": "20.94%"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "1520 / 1550 / 1570",
         "en": "1520 / 1550 / 1570"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       },
       {
        "t": {
         "zh": "237 / 1,839 (12.89%)",
         "en": "237 / 1,839 (12.89%)"
        },
        "tag": "f",
        "src": [
         "B6-N03"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Harvard",
        "en": "Harvard"
       },
       "2025-26",
       {
        "t": {
         "zh": "47,893",
         "en": "47,893"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "2,003",
         "en": "2,003"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "4.18%",
         "en": "4.18%"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "空白 → 空白 → 75",
         "en": "blank → blank → 75"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "79%",
         "en": "79%"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "27%",
         "en": "27%"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N04"
        ]
       },
       {
        "t": {
         "zh": "251 / 1,675 (14.99%)",
         "en": "251 / 1,675 (14.99%)"
        },
        "tag": "f",
        "src": [
         "B6-N04"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Yale",
        "en": "Yale"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 50,264",
         "en": "Σ 50,264"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "Σ 2,387",
         "en": "Σ 2,387"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "4.75%",
         "en": "4.75%"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "944 → 738 → 32",
         "en": "944 → 738 → 32"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "67%",
         "en": "67%"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "25%",
         "en": "25%"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "1480 / 1540 / 1560",
         "en": "1480 / 1540 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       },
       {
        "t": {
         "zh": "155 / Σ 1,633 (9.49%)",
         "en": "155 / Σ 1,633 (9.49%)"
        },
        "tag": "f",
        "src": [
         "B6-N05"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Princeton",
        "en": "Princeton"
       },
       "2025-26",
       {
        "t": {
         "zh": "42,303",
         "en": "42,303"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "1,868",
         "en": "1,868"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "4.42%",
         "en": "4.42%"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "1,370 → 1,086 → 36",
         "en": "1,370 → 1,086 → 36"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "60%",
         "en": "60%"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "20%",
         "en": "20%"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "1490 / 1530 / 1560",
         "en": "1490 / 1530 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       },
       {
        "t": {
         "zh": "200 / 1,408 (14.20%)",
         "en": "200 / 1,408 (14.20%)"
        },
        "tag": "f",
        "src": [
         "B6-N06"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Columbia (CC+SEAS)",
        "en": "Columbia (CC+SEAS)"
       },
       "2025-26",
       {
        "t": {
         "zh": "59,611",
         "en": "59,611"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "2,946",
         "en": "2,946"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "4.94%",
         "en": "4.94%"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "5,868",
         "en": "5,868"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "819",
         "en": "819"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "13.96%",
         "en": "13.96%"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "有候補；人數欄空白",
         "en": "waitlist used; counts blank"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "50%",
         "en": "50%"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "17%",
         "en": "17%"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "1510 / 1540 / 1560",
         "en": "1510 / 1540 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       },
       {
        "t": {
         "zh": "273 / 1,797 (15.19%)",
         "en": "273 / 1,797 (15.19%)"
        },
        "tag": "f",
        "src": [
         "B6-N07"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Penn",
        "en": "Penn"
       },
       "2025-26",
       {
        "t": {
         "zh": "72,544",
         "en": "72,544"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "3,570",
         "en": "3,570"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "4.92%",
         "en": "4.92%"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "9,503",
         "en": "9,503"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "1,266",
         "en": "1,266"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "13.32%",
         "en": "13.32%"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "3,252 → 2,566 → 60",
         "en": "3,252 → 2,566 → 60"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "52%",
         "en": "52%"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "18%",
         "en": "18%"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "檔案無 Composite 列",
         "en": "no Composite row in file"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       },
       {
        "t": {
         "zh": "311 / 2,420 (12.85%)",
         "en": "311 / 2,420 (12.85%)"
        },
        "tag": "f",
        "src": [
         "B6-N09"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Brown",
        "en": "Brown"
       },
       "2025-26",
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N10"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Cornell",
        "en": "Cornell"
       },
       "2025-26",
       {
        "t": {
         "zh": "72,523",
         "en": "72,523"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "6,077",
         "en": "6,077"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "8.38%",
         "en": "8.38%"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "10,057",
         "en": "10,057"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "1,889",
         "en": "1,889"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "18.78%",
         "en": "18.78%"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "9,720 → 6,598 → 254",
         "en": "9,720 → 6,598 → 254"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "% 欄空白；人數 1,639",
         "en": "% blank; count 1,639"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "% 欄空白；人數 486",
         "en": "% blank; count 486"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "1490 / 1530 / 1550",
         "en": "1490 / 1530 / 1550"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       },
       {
        "t": {
         "zh": "373 / 3,827 (9.75%)",
         "en": "373 / 3,827 (9.75%)"
        },
        "tag": "f",
        "src": [
         "B6-N11"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Georgetown",
        "en": "Georgetown"
       },
       "2025-26",
       {
        "t": {
         "zh": "26,822",
         "en": "26,822"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "3,618",
         "en": "3,618"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "13.49%",
         "en": "13.49%"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "2,672 → 2,043 → 356",
         "en": "2,672 → 2,043 → 356"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "78%",
         "en": "78%"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "32%",
         "en": "32%"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "1405 / 1480 / 1530",
         "en": "1405 / 1480 / 1530"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       },
       {
        "t": {
         "zh": "133 / 1,589 (8.37%)",
         "en": "133 / 1,589 (8.37%)"
        },
        "tag": "f",
        "src": [
         "B6-N12"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Carnegie Mellon",
        "en": "Carnegie Mellon"
       },
       "2025-26",
       {
        "t": {
         "zh": "34,867",
         "en": "34,867"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "3,859",
         "en": "3,859"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "11.07%",
         "en": "11.07%"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "2,680",
         "en": "2,680"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "553",
         "en": "553"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "20.63%",
         "en": "20.63%"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "7,117 → 4,937 → 36",
         "en": "7,117 → 4,937 → 36"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "65.5%",
         "en": "65.5%"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "18.1%",
         "en": "18.1%"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "1500 / 1540 / 1560",
         "en": "1500 / 1540 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       },
       {
        "t": {
         "zh": "261 / 1,804 (14.47%)",
         "en": "261 / 1,804 (14.47%)"
        },
        "tag": "f",
        "src": [
         "B6-N13"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Georgia Tech",
        "en": "Georgia Tech"
       },
       "2025-26",
       {
        "t": {
         "zh": "66,881",
         "en": "66,881"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "8,921",
         "en": "8,921"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "13.34%",
         "en": "13.34%"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "7,651 → 4,875 → 653",
         "en": "7,651 → 4,875 → 653"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "78%",
         "en": "78%"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "33%",
         "en": "33%"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "1370 / 1460 / 1530",
         "en": "1370 / 1460 / 1530"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       },
       {
        "t": {
         "zh": "310 / 4,071 (7.61%)",
         "en": "310 / 4,071 (7.61%)"
        },
        "tag": "f",
        "src": [
         "B6-N14"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Purdue（全系統）",
        "en": "Purdue (system)"
       },
       "2025-26",
       {
        "t": {
         "zh": "87,220",
         "en": "87,220"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "37,881",
         "en": "37,881"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "43.43%",
         "en": "43.43%"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "8,981 → 4,047 → 3,916",
         "en": "8,981 → 4,047 → 3,916"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "83.8%",
         "en": "83.8%"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "22.6%",
         "en": "22.6%"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "1220 / 1360 / 1470",
         "en": "1220 / 1360 / 1470"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       },
       {
        "t": {
         "zh": "536 / 9,656 (5.55%)",
         "en": "536 / 9,656 (5.55%)"
        },
        "tag": "f",
        "src": [
         "B6-N15"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Michigan",
        "en": "Michigan"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 109,112",
         "en": "Σ 109,112"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "Σ 17,915",
         "en": "Σ 17,915"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "16.42%",
         "en": "16.42%"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "24,447 → 18,435 → 1,663",
         "en": "24,447 → 18,435 → 1,663"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "55%",
         "en": "55%"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "18%",
         "en": "18%"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "1370 / 1470 / 1530",
         "en": "1370 / 1470 / 1530"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       },
       {
        "t": {
         "zh": "391 / Σ 8,178 (4.78%)",
         "en": "391 / Σ 8,178 (4.78%)"
        },
        "tag": "f",
        "src": [
         "B6-N16"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "UIUC",
        "en": "UIUC"
       },
       "2025-26",
       {
        "t": {
         "zh": "83,045",
         "en": "83,045"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "30,384",
         "en": "30,384"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "36.59%",
         "en": "36.59%"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "6,826 → 4,317 → 1",
         "en": "6,826 → 4,317 → 1"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "42.59%",
         "en": "42.59%"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "14.07%",
         "en": "14.07%"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "1390 / 1442 / 1520",
         "en": "1390 / 1442 / 1520"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       },
       {
        "t": {
         "zh": "1,435 / 9,207 (15.59%)",
         "en": "1,435 / 9,207 (15.59%)"
        },
        "tag": "f",
        "src": [
         "B6-N17"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Olin",
        "en": "Olin"
       },
       "2023-24",
       {
        "t": {
         "zh": "Σ 928",
         "en": "Σ 928"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "Σ 201",
         "en": "Σ 201"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "21.66%",
         "en": "21.66%"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "下拉欄位未讀出",
         "en": "drop-down not extracted"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "下拉欄位未讀出",
         "en": "drop-down not extracted"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "下拉欄位未讀出",
         "en": "drop-down not extracted"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "53 → 33 → 10",
         "en": "53 → 33 → 10"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "46%",
         "en": "46%"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "22%",
         "en": "22%"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "1500 / 1530 / 1560",
         "en": "1500 / 1530 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       },
       {
        "t": {
         "zh": "12 / 98（12.24%；欄位順序待確認）",
         "en": "12 / 98 (12.24%; column order flagged)"
        },
        "tag": "f",
        "src": [
         "B6-N18"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Harvey Mudd",
        "en": "Harvey Mudd"
       },
       "2025-26",
       {
        "t": {
         "zh": "5,217",
         "en": "5,217"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "643",
         "en": "643"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "12.33%",
         "en": "12.33%"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "594",
         "en": "594"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "109",
         "en": "109"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "18.35%",
         "en": "18.35%"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "685 → 439 → 0",
         "en": "685 → 439 → 0"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "55%",
         "en": "55%"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "21%",
         "en": "21%"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "1500 / 1510 / 1560",
         "en": "1500 / 1510 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       },
       {
        "t": {
         "zh": "30 / 236 (12.71%)",
         "en": "30 / 236 (12.71%)"
        },
        "tag": "f",
        "src": [
         "B6-N19"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Johns Hopkins",
        "en": "Johns Hopkins"
       },
       "2025-26",
       {
        "t": {
         "zh": "50,259",
         "en": "50,259"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "3,072",
         "en": "3,072"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "6.11%",
         "en": "6.11%"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "7,639",
         "en": "7,639"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "835",
         "en": "835"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "10.93%",
         "en": "10.93%"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "2,058 → 1,359 → 247",
         "en": "2,058 → 1,359 → 247"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "57%",
         "en": "57%"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "20%",
         "en": "20%"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "1530 / 1550 / 1565",
         "en": "1530 / 1550 / 1565"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       },
       {
        "t": {
         "zh": "188 / 1,378 (13.64%)",
         "en": "188 / 1,378 (13.64%)"
        },
        "tag": "f",
        "src": [
         "B6-N20"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Duke",
        "en": "Duke"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 55,541",
         "en": "Σ 55,541"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "Σ 2,910",
         "en": "Σ 2,910"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "5.24%",
         "en": "5.24%"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "有 ED；人數欄空白",
         "en": "ED offered; counts blank"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "有 ED；人數欄空白",
         "en": "ED offered; counts blank"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "有 ED；人數欄空白",
         "en": "ED offered; counts blank"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "有候補；人數欄空白",
         "en": "waitlist used; counts blank"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "48%",
         "en": "48%"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "27%",
         "en": "27%"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "1510 / 1550 / 1570",
         "en": "1510 / 1550 / 1570"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       },
       {
        "t": {
         "zh": "193 / Σ 1,749 (11.03%)",
         "en": "193 / Σ 1,749 (11.03%)"
        },
        "tag": "f",
        "src": [
         "B6-N21"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Northwestern",
        "en": "Northwestern"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 52,676",
         "en": "Σ 52,676"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "Σ 3,933",
         "en": "Σ 3,933"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "7.47%",
         "en": "7.47%"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "5,939",
         "en": "5,939"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "1,212",
         "en": "1,212"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "20.41%",
         "en": "20.41%"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "表單預設文字 → 預設文字 → 167",
         "en": "placeholder → placeholder → 167"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "48%",
         "en": "48%"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "25%",
         "en": "25%"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "1520 / 1540 / 1560",
         "en": "1520 / 1540 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       },
       {
        "t": {
         "zh": "253 / Σ 2,139 (11.83%)",
         "en": "253 / Σ 2,139 (11.83%)"
        },
        "tag": "f",
        "src": [
         "B6-N22"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Rice",
        "en": "Rice"
       },
       "2025-26",
       {
        "t": {
         "zh": "36,791",
         "en": "36,791"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "2,948",
         "en": "2,948"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "8.01%",
         "en": "8.01%"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "5,748",
         "en": "5,748"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "647",
         "en": "647"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "11.26%",
         "en": "11.26%"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "3,196 → 2,204 → 66",
         "en": "3,196 → 2,204 → 66"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "59%",
         "en": "59%"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "24%",
         "en": "24%"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "1510 / 1540 / 1560",
         "en": "1510 / 1540 / 1560"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       },
       {
        "t": {
         "zh": "164 / 1,263 (12.98%)",
         "en": "164 / 1,263 (12.98%)"
        },
        "tag": "f",
        "src": [
         "B6-N23"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "UC Berkeley",
        "en": "UC Berkeley"
       },
       "2025-26",
       {
        "t": {
         "zh": "126,864",
         "en": "126,864"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "14,524",
         "en": "14,524"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "11.45%",
         "en": "11.45%"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "9,102 → 6,479 → 0",
         "en": "9,102 → 6,479 → 0"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N24"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N24"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N24"
        ]
       },
       {
        "t": {
         "zh": "762 / 6,687 (11.40%)",
         "en": "762 / 6,687 (11.40%)"
        },
        "tag": "f",
        "src": [
         "B6-N24"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "UCLA",
        "en": "UCLA"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 145,086",
         "en": "Σ 145,086"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "Σ 13,659",
         "en": "Σ 13,659"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "9.41%",
         "en": "9.41%"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "20,563 → 13,612 → 1,514",
         "en": "20,563 → 13,612 → 1,514"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N25"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N25"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N25"
        ]
       },
       {
        "t": {
         "zh": "549 / Σ 6,553 (8.38%)",
         "en": "549 / Σ 6,553 (8.38%)"
        },
        "tag": "f",
        "src": [
         "B6-N25"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "UC San Diego",
        "en": "UC San Diego"
       },
       "2025-26",
       {
        "t": {
         "zh": "136,750",
         "en": "136,750"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "39,054",
         "en": "39,054"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "28.56%",
         "en": "28.56%"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "36,709 → 25,411 → 5,284",
         "en": "36,709 → 25,411 → 5,284"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N26"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N26"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N26"
        ]
       },
       {
        "t": {
         "zh": "1,409 / 7,801 (18.06%)",
         "en": "1,409 / 7,801 (18.06%)"
        },
        "tag": "f",
        "src": [
         "B6-N26"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "UT Austin",
        "en": "UT Austin"
       },
       "2025-26",
       {
        "t": {
         "zh": "90,690",
         "en": "90,690"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "20,154",
         "en": "20,154"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "22.22%",
         "en": "22.22%"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "無候補名單",
         "en": "no waitlist"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N27"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N27"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N27"
        ]
       },
       {
        "t": {
         "zh": "379 / 9,900 (3.83%)",
         "en": "379 / 9,900 (3.83%)"
        },
        "tag": "f",
        "src": [
         "B6-N27"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "UW Seattle",
        "en": "UW Seattle"
       },
       "2025-26",
       {
        "t": {
         "zh": "72,933",
         "en": "72,933"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "30,446",
         "en": "30,446"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "41.75%",
         "en": "41.75%"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "無 ED（C21）",
         "en": "no ED (C21)"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "15,363 → 8,350 → 2,252",
         "en": "15,363 → 8,350 → 2,252"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "19.12%",
         "en": "19.12%"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "4.89%",
         "en": "4.89%"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "1320 / 1440 / 1502",
         "en": "1320 / 1440 / 1502"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       },
       {
        "t": {
         "zh": "692 / 7,129 (9.71%)",
         "en": "692 / 7,129 (9.71%)"
        },
        "tag": "f",
        "src": [
         "B6-N28"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Williams",
        "en": "Williams"
       },
       "—",
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N29"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Amherst",
        "en": "Amherst"
       },
       "—",
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       },
       {
        "state": "not-stated",
        "checked": "2026-11-07",
        "src": [
         "B6-N30"
        ]
       }
      ]
     },
     {
      "cells": [
       {
        "zh": "Swarthmore",
        "en": "Swarthmore"
       },
       "2025-26",
       {
        "t": {
         "zh": "Σ 12,995",
         "en": "Σ 12,995"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "Σ 977",
         "en": "Σ 977"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "7.52%",
         "en": "7.52%"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "1,281",
         "en": "1,281"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "228",
         "en": "228"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "17.80%",
         "en": "17.80%"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "空白 → 空白 → 14",
         "en": "blank → blank → 14"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "40.14%",
         "en": "40.14%"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "14.79%",
         "en": "14.79%"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "1480 / 1520 / 1550",
         "en": "1480 / 1520 / 1550"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       },
       {
        "t": {
         "zh": "57 / Σ 426 (13.38%)",
         "en": "57 / Σ 426 (13.38%)"
        },
        "tag": "f",
        "src": [
         "B6-N31"
        ]
       }
      ]
     }
    ]
   },
   "items": [
    {
     "t": {
      "zh": "有公布 ED 申請與錄取人數的 9 校，ED 錄取率都高於整體錄取率（ED／整體）：Columbia 13.96%／4.94%、Penn 13.32%／4.92%、Northwestern 20.41%／7.47%、Swarthmore 17.80%／7.52%、Cornell 18.78%／8.38%、Carnegie Mellon 20.63%／11.07%、Johns Hopkins 10.93%／6.11%、Harvey Mudd 18.35%／12.33%、Rice 11.26%／8.01%。Duke 有 ED 但人數欄空白。",
      "en": "All 9 schools that report ED applicant and admit counts show an ED admit rate above the overall admit rate (ED vs overall): Columbia 13.96% vs 4.94%, Penn 13.32% vs 4.92%, Northwestern 20.41% vs 7.47%, Swarthmore 17.80% vs 7.52%, Cornell 18.78% vs 8.38%, Carnegie Mellon 20.63% vs 11.07%, Johns Hopkins 10.93% vs 6.11%, Harvey Mudd 18.35% vs 12.33%, Rice 11.26% vs 8.01%. Duke offers ED but leaves the counts blank."
     },
     "tag": "f",
     "src": [
      "B6-N07",
      "B6-N09",
      "B6-N22",
      "B6-N31",
      "B6-N11",
      "B6-N13",
      "B6-N20",
      "B6-N19",
      "B6-N23",
      "B6-N21"
     ]
    },
    {
     "t": {
      "zh": "ED 錄取者占全部錄取者的比例：Penn 35.5%（1,266 ÷ 3,570）、Cornell 31.1%（1,889 ÷ 6,077）、Northwestern 30.8%（1,212 ÷ 3,933）。",
      "en": "ED admits as a share of all admits: Penn 35.5% (1,266 of 3,570), Cornell 31.1% (1,889 of 6,077), Northwestern 30.8% (1,212 of 3,933)."
     },
     "tag": "f",
     "src": [
      "B6-N09",
      "B6-N11",
      "B6-N22"
     ]
    },
    {
     "t": {
      "zh": "上面的 ED 與整體錄取率，比的是兩個不同的申請池，並不是同一位申請者在兩種管道下的機會。ED 池的組成可能和 RD 池不同（例如招募的運動員、legacy 申請者、不需比較各校助學金就能承諾入學的人，常被認為集中在 ED），但沒有任何一份 CDS 把 ED 池拆開，所以無法用這些資料驗證。整體錄取率裡也混有 EA 或第二輪的申請者。因此這個差距不能證明「選 ED 本身」會提高錄取機會。",
      "en": "The ED and overall rates above describe two different applicant pools, not one applicant's odds under two routes. The ED pool may be composed differently from the RD pool: recruited athletes, legacy applicants, and applicants who can commit without comparing aid offers are often said to cluster in ED. No CDS file breaks the ED pool down, so this cannot be checked from these sources, and the overall figure also mixes in any EA or second-round applicants. The gap therefore does not show that applying ED by itself raises an applicant's chances."
     },
     "tag": "i",
     "src": [
      "B6-N07",
      "B6-N09",
      "B6-N22",
      "B6-N31",
      "B6-N11",
      "B6-N13",
      "B6-N20",
      "B6-N19",
      "B6-N23"
     ]
    },
    {
     "t": {
      "zh": "非居民新生占入學新生的比例，在讀到的 27 校中從 3.83%（UT Austin，379 ÷ 9,900）到 18.06%（UC San Diego，1,409 ÷ 7,801）。最低的三校都是公立旗艦校：UT Austin 3.83%、Michigan 4.78%、Purdue（全系統）5.55%。最高的三校是 UC San Diego 18.06%、UIUC 15.59%、Columbia 15.19%。",
      "en": "Among the 27 files read, the nonresident share of enrolled first-years runs from 3.83% (UT Austin, 379 of 9,900) to 18.06% (UC San Diego, 1,409 of 7,801). The three lowest are public flagships: UT Austin 3.83%, Michigan 4.78%, Purdue (system) 5.55%. The three highest are UC San Diego 18.06%, UIUC 15.59% and Columbia 15.19%."
     },
     "tag": "f",
     "src": [
      "B6-N27",
      "B6-N16",
      "B6-N15",
      "B6-N26",
      "B6-N17",
      "B6-N07"
     ]
    },
    {
     "t": {
      "zh": "接受候補位置的人當中最後被錄取的比例：Purdue 是 3,916 ÷ 4,047 = 96.76%；Caltech（1 ÷ 211）、Carnegie Mellon（36 ÷ 4,937）、UIUC（1 ÷ 4,317）、Harvey Mudd（0 ÷ 439）、UC Berkeley（0 ÷ 6,479）都不到 1%。UT Austin 填報沒有候補名單。",
      "en": "Of the applicants who accepted a waitlist place, the share later admitted was 96.76% at Purdue (3,916 of 4,047), and under 1% at Caltech (1 of 211), Carnegie Mellon (36 of 4,937), UIUC (1 of 4,317), Harvey Mudd (0 of 439) and UC Berkeley (0 of 6,479). UT Austin reports no waitlist."
     },
     "tag": "f",
     "src": [
      "B6-N15",
      "B6-N02",
      "B6-N13",
      "B6-N17",
      "B6-N19",
      "B6-N24",
      "B6-N27"
     ]
    },
    {
     "t": {
      "zh": "Purdue 的候補數字，可能代表它把候補名單當成例行的第二階段審查，而不是備取名單；但 Purdue 的檔案沒有說明，這個解讀未經查證。",
      "en": "Purdue's waitlist figure probably reflects a waitlist used as a routine second stage rather than a reserve list. Purdue's file gives no explanation, so this reading is unverified."
     },
     "tag": "i",
     "src": [
      "B6-N15"
     ]
    },
    {
     "t": {
      "zh": "C8A 勾「不要求，但有送就會考慮」的 9 校，入學新生送 SAT 的比例從 40.14%（Swarthmore）到 67%（Yale）；其中 5 校在 55% 以下：Swarthmore 40.14%、UIUC 42.59%、Duke 48%、Northwestern 48%、Columbia 50%。",
      "en": "At the 9 schools whose C8A marks scores \"considered if submitted\", the share of enrolled first-years who submitted the SAT ranges from 40.14% (Swarthmore) to 67% (Yale). Five of the nine are at or below 55%: Swarthmore 40.14%, UIUC 42.59%, Duke 48%, Northwestern 48%, Columbia 50%."
     },
     "tag": "f",
     "src": [
      "B6-N05",
      "B6-N06",
      "B6-N07",
      "B6-N13",
      "B6-N17",
      "B6-N19",
      "B6-N21",
      "B6-N22",
      "B6-N31"
     ]
    },
    {
     "t": {
      "zh": "C9 只統計有送分的學生，所以考試不強制的學校，表中的 SAT 中間 50% 描述的是送分的那一群，不是整個新生班。",
      "en": "C9 counts only students who submitted scores, so at a test-optional school the SAT middle-50% range describes the submitting subgroup, not the whole entering class."
     },
     "tag": "i",
     "src": [
      "B6-N05",
      "B6-N07",
      "B6-N21",
      "B6-N22",
      "B6-N31"
     ]
    }
   ]
  },
  {
   "id": "reading",
   "h": {
    "zh": "檔案怎麼被讀：招生辦公室自己的說法",
    "en": "How files are read, in admissions offices' own words"
   },
   "judgment": {
    "zh": "30 校中沒有一校公布現行的「每份檔案讀幾分鐘」；能找到的數字都有年份、多半已過時。",
    "en": "None of the 30 publishes a current per-file reading time; every figure found is dated and most are out of date."
   },
   "intro": {
    "zh": "這一節只收招生辦公室以自己名義說過的話：官方說明頁、官方部落格、官方 podcast。每則都標出年份，舊文章不當成現行做法。Penn、Rice、Swarthmore 在這次研究中找不到官方對閱卷方式的描述（2026-11-07 查核）。法院判決書描述的 Harvard 程序放在本節最後，單獨標示。",
    "en": "This section uses only what admissions offices said in their own voice: official pages, official blogs and an official podcast. Each item carries its year, and old posts are not presented as current practice. For Penn, Rice and Swarthmore no official description of the reading process was found (checked 2026-11-07). The Harvard procedures described in court records are kept separate, at the end."
   },
   "subs": [
    {
     "h": {
      "zh": "各校說明（官方）",
      "en": "What offices say (official)"
     },
     "judgment": {
      "zh": "有公布流程的學校，描述的細節差很多；多數只說「委員會」而不說人數與時間。",
      "en": "Offices that describe their process differ widely in detail; most say \"committee\" without numbers or times."
     },
     "items": [
    {
     "t": {
      "zh": "Princeton 招生院長在 2026-09-01 的官方部落格上寫：「We are not looking for perfect. We're looking for authentic.」同一篇結尾還有「Remember that we are not looking for perfection but rather for you to be perfectly YOU.」這句話在 Princeton 招生網站的 1,248 個網址裡只出現在這一篇——它是院長的部落格文章，不是常設政策頁，引用時要連日期與作者一起引。順帶更正：常被引用的 /how-apply/what-we-look-for 這個網址不存在（HTTP 404），真正對應的頁是 /apply/before-you-apply/helpful-tips，開頭寫「We look for students with intellectual curiosity, who have pursued and achieved academic excellence.」",
      "en": "Princeton's dean of admission wrote on the office's official blog on 1 September 2026: \"We are not looking for perfect. We're looking for authentic.\" The same post closes with \"Remember that we are not looking for perfection but rather for you to be perfectly YOU.\" Across all 1,248 URLs in Princeton's admission sitemap the phrase appears only here — it is the dean's blog post, not a standing policy page, so cite it with its date and author. A correction alongside it: the often-quoted /how-apply/what-we-look-for does not exist (HTTP 404). The real equivalent is /apply/before-you-apply/helpful-tips, which opens \"We look for students with intellectual curiosity, who have pursued and achieved academic excellence.\""
     },
     "tag": "f",
     "src": [
      "V6-P1",
      "V6-P2"
     ]
    },
      {
       "t": {
        "zh": "MIT 現行說明：申請先由一位資深招生官讀；較強的申請再由其他招生官評估並摘要給選才委員會；錄取前「至少十幾個人」會實質討論一份申請。委員會成員包括招生人員與教授。頁面沒有說讀一份要多久，也沒說票怎麼算。",
        "en": "MIT's current page: an application is first read by a senior admissions officer; strong ones are evaluated by more officers who summarise them for the selection committee; \"at least a dozen people\" discuss an application before it is admitted. Committees include admissions staff and faculty. The page gives no reading time and no voting rule."
       },
       "tag": "f",
       "src": [
        "B5-S06"
       ]
      },
      {
       "t": {
        "zh": "MIT 一篇 2019 年的部落格文章描述委員會日一天 8–9 小時、多個委員會同時進行、以討論與共識做決定。MIT 自己在頁面上標示這是存檔文章，不代表現行政策。",
        "en": "A 2019 MIT blog post describes committee days of 8–9 hours, several committees at once, and decisions by discussion and consensus. MIT marks the page as archived and not current policy."
       },
       "tag": "f",
       "src": [
        "B5-S08"
       ]
      },
      {
       "t": {
        "zh": "Yale 官方 podcast（2020 年 5 月）：地區招生官先讀檔案；委員會五人，包括地區招生官、擔任主席的資深招生官、常有另一位招生官、一位教授和一位 Yale College 的 dean。匿名用按鈕投票，五票中要四票錄取才通過。",
        "en": "Yale's official podcast (May 2020): the area officer reads first; the committee has five members (the area officer, a senior officer as chair, often another officer, a faculty member and a Yale College dean). Votes are anonymous, by clicker, and admission needs 4 of 5."
       },
       "tag": "f",
       "src": [
        "B5-S09"
       ]
      },
      {
       "t": {
        "zh": "同一集：一般申請期間兩個委員會每週五天、連續六週全天開會，一場約九小時；討論一位申請者「可能 30 秒，也可能 30 分鐘」。節目中的「五分鐘」是為了說明三萬五千多份申請的規模而舉的假設，不是實測時間。主持人聲明節目內容是個人看法，不必然代表 Yale。",
        "en": "Same episode: in regular decision two committees meet all day, five days a week, for six weeks; a session runs about nine hours, and discussing one applicant \"can take 30 seconds or 30 minutes.\" The \"five minutes\" mentioned was a hypothetical to show the scale of 35,000+ applications, not a measured time. The hosts say their views do not necessarily represent Yale."
       },
       "tag": "f",
       "src": [
        "B5-S09",
        "B5-S10"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech 2017 年改用 Committee Based Evaluation：一位正職人員（driver）搭配一位季節性讀者（passenger），每天 8:30 到 14:30 讀檔以減少疲勞，高峰時每組一天 50 份。",
        "en": "Georgia Tech moved to Committee Based Evaluation in 2017: a permanent staff member (the \"driver\") paired with a seasonal reader (the \"passenger\"), reading 8:30 a.m. to 2:30 p.m. to limit fatigue, about 50 applications per pair per day at peak."
       },
       "tag": "f",
       "src": [
        "B5-S11"
       ]
      },
      {
       "t": {
        "zh": "同一篇 2017 年文章說，改制後每份申請花的時間反而增加；工作人員曾漏看列在活動表後段的重要活動，因此改為兩頁都讀，並請輔導老師把最重要的資訊放前面。",
        "en": "The same 2017 post says time per application went up, not down. Staff had been missing significant activities listed at the end, so they began reading both pages of the activities list, and the office asks counselors to put the most important information first."
       },
       "tag": "f",
       "src": [
        "B5-S11"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech 疫情期間改為 Linear Application Review Process：每位申請者依序由兩位讀者審閱（一位熟悉申請者所在地區，一位專看內容），再由 2–3 人的小組討論；全辦公室一天讀 500–1,300 份，沒有每份幾分鐘的目標（2021 年文章）。",
        "en": "During the pandemic Georgia Tech replaced it with a Linear Application Review Process: two sequential reviews (one by a reader who knows the region, one by a content specialist), then 2–3 person committees. The office reported 500–1,300 files a day in total and no minutes-per-file target (2021 post)."
       },
       "tag": "f",
       "src": [
        "B5-S12"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech 說審閱者用學校簡介（school profile）、School Report 或成績單來了解某所高中常見的 GPA 範圍，並說「在 holistic review 中，脈絡就是一切」。",
        "en": "Georgia Tech says reviewers use the school profile, School Report or transcript to understand the GPA range typical at a given high school, and that \"in holistic review, context is everything.\""
       },
       "tag": "f",
       "src": [
        "B5-S13"
       ]
      },
      {
       "t": {
        "zh": "Caltech：「教授會讀申請」，每位錄取生都得到一位教授的正面評價；工作人員審完所有完整申請後，有 20 多位教授做完整閱讀。",
        "en": "Caltech: \"faculty read applications,\" every admitted student receives a positive review from a professor, and after staff review all completed applications, \"20+ faculty do a full read.\""
       },
       "tag": "f",
       "src": [
        "B5-S22"
       ]
      },
      {
       "t": {
        "zh": "Caltech 說沒有任何單一成績、分數、課程、文章、活動、獎項或推薦信決定結果，也不靠計算活動數量或特定的競賽、研究職位、領導頭銜來評估活動。",
        "en": "Caltech says no single grade, score, course, essay, activity, award or recommendation determines a decision, and activities are not evaluated by counting them or by rewarding a particular set of programs, competitions, research positions or titles."
       },
       "tag": "f",
       "src": [
        "B5-S23"
       ]
      },
      {
       "t": {
        "zh": "Duke：申請經閱讀後由 Admissions Committee 討論，「起初」以五項主要因素為準（課程難度、成績、推薦信、課外活動、文章）。Johns Hopkins 把標準分成 Academic Character、Impact & Initiative、Overall Match 三組。兩校都沒有說讀者人數或閱讀時間。",
        "en": "Duke says applications are read and then discussed by the Admissions Committee, guided initially by five factors (rigor, grades, recommendations, extracurriculars, essays). Johns Hopkins groups its criteria as Academic Character, Impact & Initiative and Overall Match. Neither states the number of readers or a reading time."
       },
       "tag": "f",
       "src": [
        "B5-S14",
        "B5-S15"
       ]
      },
      {
       "t": {
        "zh": "Harvard 現行頁面：每份申請都「仔細閱讀」，招生官會看申請者交的所有材料；沒有說幾個人讀。",
        "en": "Harvard's current page: each application \"is read with great care\" and officers \"review all materials that an applicant submits.\" It does not say how many people read a file."
       },
       "tag": "f",
       "src": [
        "B5-S16"
       ]
      },
      {
       "t": {
        "zh": "UCLA：每份申請由受過訓練的讀者完整讀兩次，讀者給出一個綜合分數；各項標準沒有預設權重，管理人員會做多重一致性檢查。UC Berkeley 對 holistic review 的定義是沒有任何一項資訊比其他項更重。",
        "en": "UCLA: every application is read twice, in full, by trained readers, who assign a comprehensive score; criteria carry no pre-assigned weights and managers run consistency checks. UC Berkeley defines holistic review as one where no piece of information is weighted more heavily than another."
       },
       "tag": "f",
       "src": [
        "B5-S02",
        "B5-S03",
        "B5-S04"
       ]
      },
      {
       "t": {
        "zh": "UC 系統列出 13 項 comprehensive review 因素，各校區用法不同；每個校區審閱時不知道同一份申請在其他校區的結果。",
        "en": "UC lists 13 comprehensive-review factors and says campuses apply them differently; each campus evaluates an application without knowing its status at another campus."
       },
       "tag": "f",
       "src": [
        "B5-S01"
       ]
      },
      {
       "t": {
        "zh": "UC Regents Policy 2110（Augmented Review，2017 年通過、2022 年修訂）允許校區向至多 15% 的邊緣申請者索取更多資料，可以是問卷、第七學期成績，或至多兩封推薦信或其他第三方意見。",
        "en": "UC Regents Policy 2110 (Augmented Review, 2017, amended 2022) lets a campus ask up to 15% of applicants near the margin for more information: a questionnaire, seventh-semester grades, or up to two letters or other third-party input."
       },
       "tag": "f",
       "src": [
        "B5-S05"
       ]
      },
      {
       "t": {
        "zh": "「Committee Based Evaluation」這個名稱在業界流傳，但 30 校中只有 Georgia Tech 用自己的文字記錄過它（2017），之後又說改掉了。沒有官方說明時，不應假設其他學校也這樣讀。",
        "en": "The \"committee-based evaluation\" label circulates widely, but among the 30 only Georgia Tech documented it in its own words (2017), and it later reported dropping it. Without an official statement, do not assume any other school reads this way."
       },
       "tag": "i",
       "src": [
        "B5-S11",
        "B5-S12"
       ]
      },
      {
       "t": {
        "zh": "30 校沒有一校公布現行的每份閱讀時間。上面的數字都有年份、只涵蓋部分流程，或只是假設，都不足以支持「讀者看你的檔案 N 分鐘」這類說法。",
        "en": "None of the 30 publishes a current per-file reading time. The figures above are dated, partial or hypothetical, and none supports a claim like \"a reader spends N minutes on your file.\""
       },
       "tag": "i",
       "src": [
        "B5-S09",
        "B5-S11",
        "B5-S12"
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "法院紀錄：SFFA v. Harvard（描述 2014–2019 年，非現行）",
      "en": "Court record: SFFA v. Harvard (describes 2014–2019, not today)"
     },
     "judgment": {
      "zh": "這是法院對 2014–2019 年 Harvard 閱卷程序的描述，屬 secondary 來源，不代表 Harvard 現在的做法。",
      "en": "This is a court's description of Harvard's 2014–2019 reading procedures, a secondary source, and not Harvard's current practice."
     },
     "intro": {
      "zh": "以下來自 2019 年麻州聯邦地方法院判決（Document 672）與 2023 年最高法院判決。法院說這些摘要反映 Class of 2018 的閱卷程序，2014 到 2019 各屆沒有實質差異。底下的閱卷程序文件雖是 Harvard 自己的文件，這裡只能透過法院的引述看到，所以歸為 secondary。這不是 Harvard 現行流程：依種族評分已在 2023 年判決後結束，Harvard 現行的 CDS 是另一份、較晚的自我描述。",
      "en": "From the 2019 District of Massachusetts opinion (Document 672) and the 2023 Supreme Court opinion. The district court says its summaries reflect the Class of 2018 reading procedures and that the classes of 2014–2019 did not differ in material respects. The underlying procedure documents are Harvard's own, but here they are seen only through the court's quotations, so they are classed secondary. This is not Harvard's current process: race-conscious rating ended after the 2023 ruling, and Harvard's current CDS is a separate, later self-description."
     },
     "items": [
      {
       "t": {
        "zh": "申請依高中所在地分成地理「docket」。每個 docket 小組有一位資深招生官擔任主席，加上三到六位招生官；每位成員負責讀某幾所高中的全部申請，所以同一所高中的申請者都由同一位讀者讀。",
        "en": "Applications were split into geographic \"dockets\" by high-school location. Each docket subcommittee had a senior officer as chair plus three to six officers, and each member read all applicants from a subset of the docket's high schools, so one reader saw every applicant from a given school."
       },
       "tag": "f",
       "src": [
        "B5-S26"
       ]
      },
      {
       "t": {
        "zh": "閱卷程序「每年更新」。讀者給一個總評、四項分項評分（academic、extracurricular、athletic、personal），以及至少三項針對老師與輔導老師推薦信的「school support」評分，也可以為額外推薦信評分。",
        "en": "Reading procedures were \"updated on an annual basis.\" Readers gave an overall rating, four profile ratings (academic, extracurricular, athletic, personal), at least three \"school support\" ratings for the teacher and counselor letters, and could also rate any additional recommendations."
       },
       "tag": "f",
       "src": [
        "B5-S26"
       ]
      },
      {
       "t": {
        "zh": "評分主要是 1–4，1 最強；5 與 6 表示弱項或特殊情況；可加「+」「–」。這些評分是給委員會的「初步」起點。academic 評分可以參考申請者交的任何學術作品。",
        "en": "Ratings ran mainly 1–4, with 1 strongest; 5 and 6 marked weakness or special circumstances; \"+\" and \"–\" could be added. Ratings were \"preliminary\" starting points for the committee. The academic rating could draw on \"any submitted academic work.\""
       },
       "tag": "f",
       "src": [
        "B5-S26"
       ]
      },
      {
       "t": {
        "zh": "Extracurricular 1 是「全國層級、專業或其他真正少見的成就」，2 是校內的重要貢獻或地方／區域肯定，3 是「穩定參與但沒有特別突出」。Personal 3 是「大致正面」，4 是「平淡或略負面、不成熟」；2018 年那屆程序改版，明文規定評 personal 時不考慮種族。",
        "en": "Extracurricular 1 meant \"national-level, professional or other truly unusual achievement,\" 2 strong school-level contributions or local/regional recognition, 3 \"solid participation but without special distinction.\" Personal 3 was \"generally positive\" and 4 \"bland or somewhat negative or immature.\" The procedures were overhauled in the 2018 cycle to state that race should not be considered in the personal rating."
       },
       "tag": "f",
       "src": [
        "B5-S26"
       ]
      },
      {
       "t": {
        "zh": "第一位讀者從一份兩到三頁、預先填好學校、分數、GPA、班排等資料的摘要表開始；有希望的檔案交給 docket 主席，主席常是第二位讀者。小組開會時，第一位讀者為自己的申請者「代言」，按高中逐一報告。",
        "en": "The first reader began with a two-to-three-page summary sheet pre-filled with school, scores, GPA, rank and other data, and passed promising files to the docket chair, often the second reader. At subcommittee meetings first readers acted as \"advocate\" and presented applicants school by school."
       },
       "tag": "f",
       "src": [
        "B5-S26"
       ]
      },
      {
       "t": {
        "zh": "全體委員會 40 人，暫時錄取需過半數；最後有一個「lop」階段，用四項資料縮減名單。校友面試官用大致相同的 1–4 標準評分，面試通常 45 分鐘到一小時。",
        "en": "The full committee had 40 members and needed a majority vote for tentative admission; a final \"lop\" stage trimmed the list using four data points. Alumni interviewers rated on roughly the same 1–4 criteria, and interviews generally lasted 45 minutes to an hour."
       },
       "tag": "f",
       "src": [
        "B5-S26",
        "B5-S27"
       ]
      },
      {
       "t": {
        "zh": "2023 年最高法院判決中，UNC-Chapel Hill（不在 30 校內）的讀者每小時大約讀五份申請；這是這次研究在官方或法院來源中找到的唯一每小時閱讀數字。",
        "en": "In the 2023 Supreme Court opinion, UNC-Chapel Hill readers (not one of the 30) review \"roughly five applications per hour\"; it is the only per-hour reading rate found in an official or court source."
       },
       "tag": "f",
       "src": [
        "B5-S27"
       ]
      },
      {
       "t": {
        "zh": "對來自國外、讀者不熟悉的高中的申請者，這份紀錄有兩點可能相關：同一所高中的申請者由同一位讀者讀，讀者也藉此熟悉各校的評分方式與推薦信風格，因此 school profile 與輔導老師推薦信是讀者主要的校準工具。這是從 2014–2019 年 Harvard 程序推論，現行沒有任何招生辦公室這樣說過。",
        "en": "Two points in this record may matter to an applicant from a school abroad that readers do not know: one reader saw every applicant from a given school, and readers built familiarity with each school's grading and recommendation styles. That makes the school profile and counselor letter the reader's main calibration tools. This is inferred from a 2014–2019 Harvard procedure; no current office has said it in these terms."
       },
       "tag": "i",
       "src": [
        "B5-S26"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "materials",
   "h": {
    "zh": "補充材料、連結與影片：招生辦公室怎麼說",
    "en": "Supplementary materials, links and videos: what offices say"
   },
   "judgment": {
    "zh": "談到連結的學校，說的不是「不會看」就是「很少看」；同一種作品，各校給的指示常常相反。",
    "en": "Offices that mention links say they are either not reviewed or rarely reviewed, and the same artefact often gets opposite instructions at different schools."
   },
   "intro": {
    "zh": "每則都是學校官方頁面或官方 podcast 的說法，附年份的會註明。「讀者會怎麼看」的推論另外標示 [推論]。",
    "en": "Each item is what a school's official page or official podcast says, with a year where one applies. Inferences about what readers do are tagged separately."
   },
   "items": [
    {
     "t": {
      "zh": "Yale（官方 podcast，2020）：外部連結「我們很少看，因為通常沒有理由要看」。藝術補充材料交給教授「盲審」，教授只看作品，不看文章或成績單；STEM 補充材料先由招生官看。補充材料「能救病人，但不能起死回生」。不鼓勵額外推薦信，STEM 研究指導者的信除外。",
      "en": "Yale (official podcast, 2020): outside links are rarely reviewed \"because we find that we don't usually have a reason to review them.\" Arts supplements go to faculty in a \"blind\" review of the work alone; STEM supplements are reviewed first by admissions officers. A supplement \"can heal the sick but not raise the dead.\" Extra letters are not encouraged, except a STEM research mentor letter."
     },
     "tag": "f",
     "src": [
      "B5-S10"
     ]
    },
    {
     "t": {
      "zh": "MIT 有四種選交作品集：research、music & theater arts、visual art & architecture、maker；由 MIT 職員或教授審閱，maker 作品集交給一群有豐富 maker 經驗的教授與校友。影片上限是整份作品集合計 2 分鐘，不是每個專案 2 分鐘；示範打不開就無法審閱。沒有 creative writing 作品集。",
      "en": "MIT offers four optional portfolios: research, music & theater arts, visual art & architecture, and maker, reviewed by MIT staff or faculty; the maker portfolio goes to a board of faculty and alumni with maker experience. The video cap is 2 minutes for the whole portfolio, not per project, and \"if we are not able to access your demo, we cannot review your project.\" There is no creative-writing portfolio."
     },
     "tag": "f",
     "src": [
      "B5-S07",
      "B3-S1"
     ]
    },
    {
     "t": {
      "zh": "MIT 現行頁面要求程式專案附 codebase 與可運作的 demo；有活動零件的專案必須附影片；集錦影片或本人入鏡「沒有加分」；只審已完成的部分，沒有製作過程證據的專案無法審閱。問卷用來把作品集分派給合適的評審，並要求說明只具一般專業的評審看不出的地方。",
      "en": "MIT's current page requires the codebase and a working demo for code projects and a video for anything with moving parts, says there is \"no bonus\" for a reel or for appearing on camera, reviews only completed work, and cannot review projects without build-process evidence. The questionnaire routes the portfolio to a reviewer, and applicants should explain anything not obvious to someone with general expertise in the category."
     },
     "tag": "f",
     "src": [
      "B3-S1"
     ]
    },
    {
     "t": {
      "zh": "Princeton：藝術補充材料「只會由藝術系教授閱讀」，除非也放進 additional information；請勿上傳個人網站連結；補充類別以外的藝術作品會放進檔案，但「無法保證」招生辦公室有時間看。",
      "en": "Princeton: arts-supplement content \"will only be read by the arts faculty\" unless it is also submitted as additional information; \"please do not upload links to personal websites\"; arts work outside its categories goes \"in your file,\" but the office cannot guarantee time to review it."
     },
     "tag": "f",
     "src": [
      "B5-S17"
     ]
    },
    {
     "t": {
      "zh": "Columbia：研究摘要（通常一頁）放在 Columbia 的學校題目裡；放在申請其他地方的連結（Dropbox、Google Drive、網站等）「不會被審閱」；不保證所有材料都會被看；不要寄獎狀集，紙本「不會被審閱」。",
      "en": "Columbia: a research abstract (typically one page) goes in the Columbia questions; links placed anywhere else in the application (Dropbox, Google Drive, websites) \"will not be reviewed\"; there is no guarantee every material is reviewed; collections of awards and hard copies will not be reviewed."
     },
     "tag": "f",
     "src": [
      "B5-S20"
     ]
    },
    {
     "t": {
      "zh": "Brown：學術論文或研究上傳到申請者入口，附背景說明（日期、獨立或團隊、獲得的肯定）；YouTube 或網路作品的連結放在 Common App 的 Brown 題目區；建議不要寄獎狀集；Dance 與 TAPS 作品集「既不要求也不審閱」。",
      "en": "Brown: an academic paper or research goes in the applicant portal with a context note (dates, independent or team, recognition); YouTube or online links belong in the Brown questions in Common App; it recommends against sending award certificates; Dance and TAPS portfolios are \"neither required nor reviewed.\""
     },
     "tag": "f",
     "src": [
      "B5-S21"
     ]
    },
    {
     "t": {
      "zh": "Harvard：補充材料「可能由教授評估」；上傳研究或寫作時要附上合作者名單並說明自己的貢獻；申請後仍可補交額外推薦信。Stanford：只收四類藝術作品集，由招生辦公室與藝術系教授斟酌是否審閱，不接受郵寄、email 或其他平台送件；並說不保證讀者會看申請中的連結。",
      "en": "Harvard: supplementary materials \"may be evaluated by faculty\"; research and writing are uploaded with a list of collaborators and a description of your contribution; extra letters can be sent after applying. Stanford: arts portfolios only, in four areas, reviewed at the discretion of the office and arts faculty, nothing by mail, email or other platform, and \"no guarantee\" that readers review links in the application."
     },
     "tag": "f",
     "src": [
      "B5-S16",
      "B5-S19",
      "B3-S21",
      "B3-S22"
     ]
    },
    {
     "t": {
      "zh": "Caltech：每份研究提交都要附指導者推薦信，說明「你的具體貢獻」；據 Caltech 自己的數字，約 42% 的錄取生交了研究。作品集項目不設上限，但「三件用心挑選的作品，比十件丟進資料夾的作品更顯眼」；補充材料「不是證明科學興趣或潛力的必要條件」。",
      "en": "Caltech: every research submission needs a mentor letter that speaks to \"your specific contributions\"; by Caltech's own figure about 42% of admitted students submitted research. Portfolio items are unlimited, but \"three submissions that are crafted intentionally will stand out more than ten submissions dumped into a folder,\" and materials \"are not required to prove scientific interest or potential.\""
     },
     "tag": "f",
     "src": [
      "B5-S24",
      "B5-S25",
      "B5-S28",
      "B5-S23"
     ]
    },
    {
     "t": {
      "zh": "Caltech 的「research」類別定義很窄：大學或研究機構的實驗室、資深研究者指導、有論文成果。課堂專題、實習和獨立作品要放進 STEM Portfolio，而 Portfolio 明列接受連結／URL。",
      "en": "Caltech's \"research\" category is narrow: a lab at a university or research organization, a senior researcher, and a paper. Class projects, internships and independent work go to the STEM Portfolio, which accepts links and URLs."
     },
     "tag": "f",
     "src": [
      "B3-S12",
      "B3-S11",
      "B2-S5"
     ]
    },
    {
     "t": {
      "zh": "研究成果在各校有三種形狀：有結構的表單加指導者推薦信（MIT、Caltech、Yale）、自由上傳加貢獻說明（Harvard、Brown、Johns Hopkins、Swarthmore）、只收摘要（Harvey Mudd）。Duke 明說不收研究摘要。",
      "en": "Research takes three shapes across schools: a structured form with a mentor letter (MIT, Caltech, Yale), a free upload with attribution notes (Harvard, Brown, Johns Hopkins, Swarthmore), or abstract only (Harvey Mudd). Duke says it does not accept research abstracts."
     },
     "tag": "f",
     "src": [
      "B2-S1",
      "B2-S5",
      "B2-S15",
      "B2-S14",
      "B2-S22",
      "B2-S42",
      "B2-S58",
      "B2-S40",
      "B2-S43"
     ]
    },
    {
     "t": {
      "zh": "同一份研究論文，指示相反：Yale 說完整論文「通常最有幫助」，Harvey Mudd 請學生不要上傳全文，只要摘要，並提醒更新表單裡的附件常常打不開。",
      "en": "Same artefact, opposite instructions: Yale says full research papers are \"generally the most helpful,\" while Harvey Mudd asks for an abstract, not the paper, and warns that attachments in its update form often cannot be opened."
     },
     "tag": "f",
     "src": [
      "B2-S15",
      "B2-S40",
      "B3-S18"
     ]
    },
    {
     "t": {
      "zh": "連結的處理方式也相反：Olin 邀請在 Additional Information 放網站連結（但不保證審閱）；Stanford Art Practice 與 University of Washington 說不會看或不要寄；Penn 接受 URL，但不接受 Google Docs 或 Box。",
      "en": "Links are treated in opposite ways: Olin invites a website link in Additional Information (without promising review); Stanford Art Practice and Washington say links will not be reviewed or should not be sent; Penn accepts a URL but not Google Docs or Box."
     },
     "tag": "f",
     "src": [
      "B2-S38",
      "B2-S9",
      "B2-S55",
      "B2-S20"
     ]
    },
    {
     "t": {
      "zh": "Carnegie Mellon 不收 resume、作品集或網站；工程申請者展示專案的唯一管道是錄製的 VIVA 訪談（InitialView 的付費服務，只開放 Engineering 與 SCS）。但它的 Common App 學校題目有一欄 Schoolhouse.world 作品集 URL，是少數官方指定的連結欄位。",
      "en": "Carnegie Mellon refuses résumés, portfolios and websites; an engineering applicant's only route for a project is a recorded VIVA interview (a paid InitialView service, open only to Engineering and SCS). Yet its Common App questions include a URL field for a Schoolhouse.world portfolio, one of the few officially designated link fields."
     },
     "tag": "f",
     "src": [
      "B2-S30",
      "B3-S23"
     ]
    },
    {
     "t": {
      "zh": "UC Berkeley：作品集、履歷等其他輔助材料「在審閱時不予考慮」，寄到辦公室的也不會被看；官方建議把延伸的課外活動寫進 PIQ 區的 Additional Comments。UIUC 會在審閱前把未被要求的材料（包括推薦信）從檔案移除。",
      "en": "UC Berkeley: other supporting materials such as portfolios and résumés are not considered, and anything sent will not be reviewed; its own tips say to expand on activities in the PIQ Additional Comments box. UIUC removes unsolicited materials, including letters, before review."
     },
     "tag": "f",
     "src": [
      "B5-S03",
      "B3-S38",
      "B3-S39",
      "B3-S35"
     ]
    },
    {
     "t": {
      "zh": "Caltech 要求研究指導者說明申請者的具體貢獻，Harvard 要合作者名單，Brown 要說明是獨立還是團隊完成：三所學校各自要求交代個人貢獻。",
      "en": "Caltech asks the mentor letter to address the applicant's specific contributions, Harvard asks for a list of collaborators, and Brown asks whether work was independent or team-based: three offices independently ask for attribution of individual contribution."
     },
     "tag": "f",
     "src": [
      "B5-S24",
      "B5-S16",
      "B5-S21"
     ]
    },
    {
     "t": {
      "zh": "談到連結的學校，說法不是「指定欄位以外不看」（Columbia），就是「很少看」（Yale，2020）。讀過的頁面中，沒有一校說會例行打開連結。GitHub 或個人網站的網址應視為可能沒人打開的選擇性證據。這是從上述說法推論，不是有學校說過「從不打開」。",
      "en": "Where offices discuss links, they say links outside the designated field are not reviewed (Columbia) or are rarely reviewed (Yale, 2020). No office on the pages read says it routinely opens links, so a GitHub or personal-site URL is optional evidence that may go unopened. This is inferred from those statements, not from any statement that reviewers never open links."
     },
     "tag": "i",
     "src": [
      "B5-S20",
      "B5-S10"
     ]
    }
   ]
  },
  {
   "id": "voice",
   "h": {
    "zh": "招生辦公室自己怎麼說：八個主題",
    "en": "What admissions offices themselves say: eight topics"
   },
   "judgment": {
    "zh": "八個主題上，各校說法高度一致：重深度不重數量、額外資料多半不需要、面試沒安排到不扣分；真正分歧的是國際生補助是否影響錄取，以及收不收補充資料。",
    "en": "Across eight topics the offices largely agree: depth over count, extras mostly unnecessary, no penalty for a missing interview; they genuinely differ on whether an international aid request affects admission and on whether supplements are accepted."
   },
   "intro": {
    "zh": "來源全是招生辦公室自己的頁面、部落格、FAQ 與 podcast；職員只寫職稱。學生部落客與學生面試官標為「學生」，他們的文章掛在官網上，但不是政策。2020 年前的文章標 ⚠ 2020 年前；MIT 自己把 2020 年前的部落格標為 archived，說明不代表現行政策。「未標日期」表示頁面沒有日期。Yale podcast 主持人說節目觀點是個人的，不必然代表 Yale University，這個但書適用於本節所有 Yale podcast 條目。引文保留英文原句，各在 15 字以內，其餘是轉述。每個主題最後的 [推論] 是跨校歸納，不是任何招生辦公室的說法。只能從搜尋引擎摘錄取得原文、沒有在頁面上直接讀到的條目，這裡一律不列。",
    "en": "Every source is an admissions office's own page, blog, FAQ or podcast; staff appear by role only. Student bloggers and student interviewers are labelled as students: their posts are hosted by the office but are not policy. Posts from before 2020 are flagged ⚠ pre-2020; MIT marks its pre-2020 blog posts as archived and not current policy. \"Undated\" means the page shows no date. The Yale podcast hosts say the views are their own and not necessarily Yale University's; that caveat applies to every Yale podcast item here. Quotes stay in the original English, each under 15 words; the rest is paraphrase. The inference lines at the end of each topic are cross-school synthesis, not anything an office said. Items whose wording came only from a search-engine excerpt, not from the page itself, are left out."
   },
   "items": [
    {
     "t": {
      "zh": "尚待確認、因此本節未收錄的學校說法，依障礙種類分三類（用語目前只來自搜尋引擎摘錄）。一、TLS 層被拒——**2026-11-07 約 05:45 已解除**。Princeton、Northwestern、Purdue 先前十二個網址、兩條請求路徑全無回應，本站因此判定「重試不會好、只能維護者本人開頁」。那其實是某一條抓取路徑的暫時性失敗，被寫成網站的永久屬性：05:45 時三個主機都正常回應，十頁已抓到並讀完（V4）。事實都在研究筆記裡，並已於同日 07:00 前寫進 schools、portfolios 與 process 三頁的表格（BACKLOG E8、E9）。二、一般請求被拒、但瀏覽器打得開（本站不嘗試繞過任何人工驗證）：Michigan 與 Williams 的站台對 curl 仍回 HTTP 403，2026-11-07 清晨用瀏覽器都讀到了，日期、推薦信與補充材料規則已進表格。這一類剩下的是兩校各自沒有頁面在講的題目：Michigan 的 why us 與面試政策（requirements 頁上就是沒有面試這一項）、Williams 的表現興趣——面試已有答案：「Williams does not offer interviews」，但收 InitialView 錄影。Amherst 原本在這一類，現在不是了：2026-11-07 稍晚用瀏覽器一頁一頁都打得開，面試政策、申請日期、考試政策、寫作補充裡的研究欄位、2026–27 費用都已寫進上面各節。三、頁面會載入但讀不到那段文字——2026-11-07 大部分已解決。Stanford 的 FAQ 首頁根本不是被擋，是已經撤掉（回傳 39 bytes 的空白文件），內容搬進各 Apply 子頁的摺疊區塊，已在那裡讀到；UT Austin 的 FAQ 答案在它自己的腳本填好後，從頁面 DOM 讀到。剩下的只有一種障礙：伺服器丟檔案而不是網頁——Harvard 2026–27 supplement、UC 的 PIQ 指引、三份 Common App 簡報、Amherst 的 CDS 分節檔都是以下載方式送出的 PDF。Penn 的 InitialView 客服文章與 UC 給輔導老師的頁面在同一輪讀到了，這一類只剩 CMU 關於挑選推薦老師的用語，它放在分頁面板裡。Cornell 的「不追蹤表現興趣」是另一種情況：原始網址在不對外的開發用子網域，已無法解析，公開頁面上沒有這句話，所以這條說法不成立。Columbia 的額外推薦信規定、Duke 的 FAQ 用語、Georgetown 的面試 FAQ 已在第一輪瀏覽器複查確認，已從本清單移出、收進本頁其他各節。",
      "en": "School statements still unconfirmed and therefore not shown here, grouped by the kind of obstacle, because \"refused automated access\" covers three different problems with three different prognoses. The wording for all of them so far comes only from search-engine excerpts. (1) Refused at the TLS layer — **cleared on 2026-11-07 at about 05:45**. Princeton, Northwestern and Purdue had refused twelve URLs across two request paths with no response body, and this site concluded that retrying was pointless and only the maintainer could settle them. That was a transient failure of one fetching path reported as a permanent property of the sites: by 05:45 all three answered ordinary requests, and ten of their pages were fetched and read (V4). Their facts are in the research note, and were written into the schools, portfolios and process tables before 07:00 the same day (BACKLOG E8 and E9). (2) Refused to a plain request but open to a browser, with no human verification attempted: Michigan’s and Williams’s sites still return HTTP 403 to `curl`, and both were read in a browser early on 2026-11-07, so their dates, letters and supplementary-material rules are now in the tables. What is left in this group is what neither school has a page about: Michigan’s why-us wording and its interview policy (the requirements page simply carries no interview line), and demonstrated interest at Williams — whose interview question is now answered, “Williams does not offer interviews”, while an InitialView recording is accepted. Amherst was in this group and is no longer: every page of its site opened in a browser later on 2026-11-07, and its interview policy, deadlines, test policy, writing-supplement research section and 2026–27 costs are now in the sections above. (3) The page loads but the text cannot be read from it — mostly cleared on 2026-11-07. Stanford's FAQ index was not gated at all but retired (it serves a 39-byte empty document), and its answers now live in accordions on each Apply page, where they were read; UT Austin's FAQ answers were read from the live DOM after its own script filled them. What remains is one kind of obstacle only: a server that hands over a file instead of a page — the Harvard 2026–27 supplement, UC's PIQ guidance, the three Common App decks and Amherst's CDS sections are all PDFs offered as downloads. Penn's InitialView help-desk article and UC's counselor page were read in the same pass, so the only item left in this group is CMU's wording on choosing a teacher recommender, which sits in a tab panel. Cornell's \"does not track demonstrated interest\" is a separate case: the original URL was on a non-public development subdomain that no longer resolves, and the public page carries no such wording, so the claim does not stand. Columbia's extra-letters rule, Duke's FAQ wording and Georgetown's interview FAQ were confirmed in the first browser pass and have moved out of this list into the sections above."
     },
     "tag": "f",
     "src": [
      "V2-S1",
      "V2-S2",
      "V2-S3"
     ]
    }
   ],
   "subs": [
    {
     "h": {
      "zh": "活動表",
      "en": "The activities list"
     },
     "judgment": {
      "zh": "談到活動表的招生辦公室說法一致：深度勝過數量，打工與照顧家人也算活動，要寫做了什麼而不是頭銜；沒有學校公布理想的項目數。",
      "en": "Every office that addresses the list says the same: depth over count, jobs and family care count, describe what you did rather than your title; none publishes an ideal number of entries."
     },
     "items": [
      {
       "t": {
        "zh": "MIT：「Please use our form, not a resume, to list your activities.」——請用申請表列活動，不要附履歷；只有四格，挑「對你最有意義」的四項。（申請頁，未標日期）",
        "en": "MIT: \"Please use our form, not a resume, to list your activities.\" The form has four slots; pick \"the four that mean the most to you\". (apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O01"
       ]
      },
      {
       "t": {
        "zh": "MIT：「We don't expect applicants to do a million things.」——不期待申請人什麼都做。（what we look for 頁，未標日期）",
        "en": "MIT: \"We don't expect applicants to do a million things.\" (what-we-look-for page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O02"
       ]
      },
      {
       "t": {
        "zh": "MIT：「We don't want a laundry list of a million activities.」——不要一長串流水帳。（家長與教育者頁，未標日期）",
        "en": "MIT: \"We don't want a laundry list of a million activities.\" (parents and educators page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O04"
       ]
      },
      {
       "t": {
        "zh": "MIT：選讓你「delight, intrigue, and challenge you」的活動，而不是看起來厲害的；花在「family, work, or other obligations」的時間同樣正當。（prepare: activities 頁，未標日期）",
        "en": "MIT: choose activities that \"delight, intrigue, and challenge you\", not ones that look impressive; time spent on \"family, work, or other obligations\" is legitimate. (prepare: activities page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O18"
       ]
      },
      {
       "t": {
        "zh": "MIT：「long lists of activities and awards are most often not useful.」——長串活動與獎項清單多半沒有幫助；額外附頁的用處在「depth, not breadth」。（職員部落格，2007，MIT 已標為 archived，⚠ 2020 年前）",
        "en": "MIT: \"long lists of activities and awards are most often not useful.\" Extra sheets help with \"depth, not breadth.\" (staff blog, 2007, archived by MIT, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O14"
       ]
      },
      {
       "t": {
        "zh": "Harvard：「Filling out the grid is an act of prioritization.」——填活動表本身就是排優先順序。（application tips 頁，2026-09-23 更新）",
        "en": "Harvard: \"Filling out the grid is an act of prioritization.\" (application tips page, updated 2026-09-23)"
       },
       "tag": "f",
       "src": [
        "B7-O47"
       ]
      },
      {
       "t": {
        "zh": "Harvard：在意的是「the quality of students' activities than their quantity」——看品質多於數量。（同上，2026）",
        "en": "Harvard: the office is more interested in \"the quality of students' activities than their quantity\". (same page, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O47"
       ]
      },
      {
       "t": {
        "zh": "Penn：家庭責任、暑期活動與社區經驗「all count as activities」，都算活動。（preparing your application: activities 頁，未標日期）",
        "en": "Penn: family responsibilities, summer activities and community experiences \"all count as activities\". (preparing your application: activities, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O61"
       ]
      },
      {
       "t": {
        "zh": "Penn：「we don't value one kind of activity more than others!」——不偏好任何一種活動。（同上，未標日期）",
        "en": "Penn: \"we don't value one kind of activity more than others!\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O61"
       ]
      },
      {
       "t": {
        "zh": "Penn 的實務建議：「Spell out any acronyms.」縮寫要寫全名；每項寫出具體職責；交代規模（「Give us a sense of scope.」）。（同上，未標日期）",
        "en": "Penn, practical tips: \"Spell out any acronyms.\" \"Include specific responsibilities for each activity.\" \"Give us a sense of scope.\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O61"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：凡是「Anything that meaningfully takes up your time outside of class」都可以列。（Hopkins Insider 部落格，2026，作者僅標為投稿者）",
        "en": "Johns Hopkins: count \"Anything that meaningfully takes up your time outside of class\". (Hopkins Insider blog, 2026; author shown only as a contributor)"
       },
       "tag": "f",
       "src": [
        "B7-O25"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「Be specific and use action words.」文中把只寫「Worked at a grocery store」的條目改寫成完整描述作為示範。（同上，2026）",
        "en": "Johns Hopkins: \"Be specific and use action words.\" The post rewrites a bare \"Worked at a grocery store\" into a fuller entry as its example. (same post, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O25"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「There isn't a magic number of activities we're looking for」——沒有神奇的項目數。（同上，2026）",
        "en": "Johns Hopkins: \"There isn't a magic number of activities we're looking for\". (same post, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O25"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：問申請人有沒有想過把「farm work or taking care of siblings」列進去；讀者看重「you earning a position of trust in your community」。（招生部落格，負責新生招募的招生人員，2026）",
        "en": "Georgia Tech: asks whether applicants considered listing \"farm work or taking care of siblings\"; readers value \"you earning a position of trust in your community\". (admission blog, a first-year recruitment professional, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O20"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：「Focus on what you've contributed to your school, community, or family.」——寫你對學校、社區或家庭的貢獻。（招生部落格，職員段落，2020）",
        "en": "Georgia Tech: \"Focus on what you've contributed to your school, community, or family.\" (admission blog, staff section, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O21"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：AI 可以協助「construct your resume in the Activities portion」，也就是整理 Common App 活動欄的內容。（application review 頁，未標日期）",
        "en": "Georgia Tech: AI may help \"construct your resume in the Activities portion\" of the Common App. (application review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O22"
       ]
      },
      {
       "t": {
        "zh": "Rice：「Provide detailed descriptions and quantify your impact within your activities.」打工與家務責任「are just as important as school activities」。（部落格，招生官，2023 更新）",
        "en": "Rice: \"Provide detailed descriptions and quantify your impact within your activities.\" Work and family duties \"are just as important as school activities\". (blog, admission officers, updated 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O67"
       ]
      },
      {
       "t": {
        "zh": "Olin：「Anything is an activity!」「Quality over Quantity!」——什麼都可以是活動，重質不重量；寫出你在每個團體帶來的影響。（部落格，招生職員，2023）",
        "en": "Olin: \"Anything is an activity!\" and \"Quality over Quantity!\" Describe the impact you made in each group. (blog, admission staff, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O88"
       ]
      },
      {
       "t": {
        "zh": "Duke：「we appreciate well-rounded and well-lopsided students」——全面型與偏科型都欣賞。（what we look for 頁，未標日期）",
        "en": "Duke: \"we appreciate well-rounded and well-lopsided students\". (what-we-look-for page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O40"
       ]
      },
      {
       "t": {
        "zh": "Yale：學業強「should not be a reason to try to present a spike」，不該因此刻意營造單一尖峰。（官方 podcast，招生官，2026）",
        "en": "Yale: academic strength \"should not be a reason to try to present a spike.\" (official podcast, admissions officers, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O37"
       ]
      },
      {
       "t": {
        "zh": "Yale：「you certainly do not need a passion project to get into Yale」——不需要 passion project。（官方 podcast 第 35 集，2023）",
        "en": "Yale: \"you certainly do not need a passion project to get into Yale\". (official podcast ep. 35, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O34"
       ]
      },
      {
       "t": {
        "zh": "Yale：更重要的是看到「you're building sustainable habits」，也就是能持續的習慣。（官方 podcast 第 52 集，2026）",
        "en": "Yale: it matters more to see \"you're building sustainable habits.\" (official podcast ep. 52, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O38"
       ]
      },
      {
       "t": {
        "zh": "Caltech：「We do not evaluate these experiences by counting activities」——不以活動數量評估。（how we review 頁，未標日期）",
        "en": "Caltech: \"We do not evaluate these experiences by counting activities\". (how-we-review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O55"
       ]
      },
      {
       "t": {
        "zh": "CMU：課外活動、工作與家庭責任「play a very important role in the admission process」。（admission consideration 頁，未標日期）",
        "en": "CMU: activities, jobs and family commitments \"play a very important role in the admission process\". (admission consideration page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O75"
       ]
      },
      {
       "t": {
        "zh": "UW：把「Exercising significant responsibility in a family, community, employment situation」列為審查因素之一。（holistic review 頁，未標日期）",
        "en": "UW: lists \"Exercising significant responsibility in a family, community, employment situation\" as a factor. (holistic review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O83"
       ]
      },
      {
       "t": {
        "zh": "談到活動表的學校都說三件事：深度勝過數量；打工與照顧家人算活動；寫你做了什麼，不是寫頭銜。沒有任何學校公布理想項目數。",
        "en": "Every office that addresses the list says three things: depth beats count; jobs and family care are activities; describe what you did, not your title. None publishes an ideal number of entries."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "最具體的格式建議來自 Penn（縮寫、規模、職責）與 Hopkins 的改寫範例；MIT 只給四格，等於把同樣的偏好直接做進表單。",
        "en": "Penn's tips (acronyms, scope, responsibilities) and Hopkins's before-and-after rewrite are the most concrete formatting guidance found. MIT's four-slot form builds the same preference into the form itself."
       },
       "tag": "i"
      }
     ]
    },
    {
     "h": {
      "zh": "主文書與補充文書",
      "en": "Personal essay and supplements"
     },
     "judgment": {
      "zh": "各校要的是具體、誠實、寫過程與反思的文章；「why us」要寫得只適用於這一所學校；有三所學校直接叫申請人別再刻意包裝。",
      "en": "Offices ask for specific, honest essays about process and reflection; \"why us\" answers must fit one school only; three offices tell applicants outright to stop optimising."
     },
     "items": [
      {
       "t": {
        "zh": "MIT：文書「not a writing test」，不是寫作測驗；「Be honest, be open, be authentic.」如果你在「stressing or strategizing about what makes you 'look best'」，那就「you're doing it wrong」。（申請頁，未標日期）",
        "en": "MIT: the essays are \"not a writing test\". \"Be honest, be open, be authentic.\" If you are \"stressing or strategizing about what makes you 'look best'\", \"you're doing it wrong\". (apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O01"
       ]
      },
      {
       "t": {
        "zh": "MIT：「College isn't a costume party; you're not supposed to come dressed as someone else.」——大學不是變裝派對，不要扮成別人。（be yourself 頁，未標日期）",
        "en": "MIT: \"College isn't a costume party; you're not supposed to come dressed as someone else.\" (be-yourself page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O03"
       ]
      },
      {
       "t": {
        "zh": "MIT：「Specificity, clarity, and brevity are your keys.」「Keep it simple.」——具體、清楚、簡短。（職員部落格，2012 撰、2023 編修，已標 archived，⚠ 2020 年前）",
        "en": "MIT: \"Specificity, clarity, and brevity are your keys.\" \"Keep it simple.\" (staff blog, 2012, edited 2023, archived, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O17"
       ]
      },
      {
       "t": {
        "zh": "MIT（學生部落客）：「Don't apply as a fictional character.」——別用虛構角色的身分申請。（學生部落格，2015，已標 archived，⚠ 2020 年前）",
        "en": "MIT (student blogger): \"Don't apply as a fictional character.\" (student blog, 2015, archived, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O12"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：Essays That Worked 頁的主要建議是「be original」；文章由招生委員會挑選。（Essays That Worked，Class of 2030，頁面未標日期）",
        "en": "Johns Hopkins: the office's main advice on its Essays That Worked page is to \"be original\"; the essays were nominated by the admissions committee. (Essays That Worked, Class of 2030, page undated)"
       },
       "tag": "f",
       "src": [
        "B7-O24"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「Focus on the process, rather than the outcome, in your essay.」「You don't need to be the hero of the story!」——寫過程不寫結果，你不必是故事的英雄。（Hopkins Insider 部落格，辦公室口吻，2026）",
        "en": "Johns Hopkins: \"Focus on the process, rather than the outcome, in your essay.\" \"You don't need to be the hero of the story!\" (Hopkins Insider blog, office voice, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O27"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：申請的每一部分應該「complement, rather than repeat, other sections」，互補而不重複。（Hopkins Insider 部落格，2023）",
        "en": "Johns Hopkins: each part should \"complement, rather than repeat, other sections.\" (Hopkins Insider blog, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O26"
       ]
      },
      {
       "t": {
        "zh": "Caltech：「We are less interested in polished performance」——對打磨過的表現比較沒興趣。（how we review 頁，未標日期）",
        "en": "Caltech: \"We are less interested in polished performance\". (how-we-review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O55"
       ]
      },
      {
       "t": {
        "zh": "Yale：「we are not looking for pieces of publishable work」——不是在找可以出版的作品。（官方 podcast 第 35 集，2023）",
        "en": "Yale: \"we are not looking for pieces of publishable work\". (official podcast ep. 35, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O34"
       ]
      },
      {
       "t": {
        "zh": "Yale：「We learn a lot more about your achievements from your essays」——從文章更能了解你的成就。（官方 podcast 第 29 集，2022）",
        "en": "Yale: \"We learn a lot more about your achievements from your essays\". (official podcast ep. 29, 2022)"
       },
       "tag": "f",
       "src": [
        "B7-O35"
       ]
      },
      {
       "t": {
        "zh": "Yale：「These essays are not meant to be academic in their nature.」——這些文章本來就不是學術文章。（官方 podcast，2026）",
        "en": "Yale: \"These essays are not meant to be academic in their nature.\" (official podcast, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O37"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：「Essays should be personal and detailed.」——文章要個人化、有細節。（招生部落格，職員，2020）",
        "en": "Georgia Tech: \"Essays should be personal and detailed.\" (admission blog, staff, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O21"
       ]
      },
      {
       "t": {
        "zh": "UW：讀者想「see the person behind the transcripts and the numbers」；題目之間沒有偏好。（writing section 頁，未標日期）",
        "en": "UW: readers want to \"see the person behind the transcripts and the numbers.\" There is no preferred prompt. (writing section page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O82"
       ]
      },
      {
       "t": {
        "zh": "Olin：「Through your essays, we get to hear your voice in the application.」——文章是申請裡聽得到你聲音的地方。（部落格，招生職員，2022）",
        "en": "Olin: \"Through your essays, we get to hear your voice in the application.\" (blog, admission staff, 2022)"
       },
       "tag": "f",
       "src": [
        "B7-O90"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Don't read too many examples of successful college essays.」「Standing out is not the goal.」——別讀太多成功範文；脫穎而出不是目的。（官方 podcast 第 35 集，2023）",
        "en": "Yale: \"Don't read too many examples of successful college essays.\" \"Standing out is not the goal.\" (official podcast ep. 35, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O34"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「try to avoid generic language or takeaways」，避免空泛的用語與結論；文章不該是在「winning an argument」。（Hopkins Insider 部落格，2026）",
        "en": "Johns Hopkins: \"try to avoid generic language or takeaways.\" The essay should not be about \"winning an argument\". (Hopkins Insider blog, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O27"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：「Avoid using your essay to list your activities and achievements.」——別把文章寫成活動與成就清單。（FAQ，未標日期）",
        "en": "Harvey Mudd: \"Avoid using your essay to list your activities and achievements.\" (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O91"
       ]
      },
      {
       "t": {
        "zh": "MIT（學生部落客）：「Don't indulge in exquisite words.」——別堆砌華麗字眼。（學生部落格，2015，已標 archived，⚠ 2020 年前）",
        "en": "MIT (student blogger): \"Don't indulge in exquisite words.\" (student blog, 2015, archived, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O12"
       ]
      },
      {
       "t": {
        "zh": "Penn：「Be sure you're answering the question or prompt being asked.」要回答題目本身，也別趕，留時間修改。（writing 頁，未標日期）",
        "en": "Penn: \"Be sure you're answering the question or prompt being asked.\" Do not rush, so there is time to revise. (writing page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O62"
       ]
      },
      {
       "t": {
        "zh": "UW：「Write like it matters, not like you're texting.」——當成重要的事來寫，不是傳訊息。（writing section 頁，未標日期）",
        "en": "UW: \"Write like it matters, not like you're texting.\" (writing section page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O82"
       ]
      },
      {
       "t": {
        "zh": "Penn：「Show us why you're applying here.」——告訴我們為什麼申請這裡。（writing 頁，未標日期）",
        "en": "Penn: \"Show us why you're applying here.\" (writing page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O62"
       ]
      },
      {
       "t": {
        "zh": "Rice：要從一般描述走向「specific experiences, interests and thoughts」；只寫地點或校園大小「doesn't necessarily reflect deep exploration」。（部落格，招生顧問，2025）",
        "en": "Rice: move \"beyond general descriptions towards specific experiences, interests and thoughts\"; writing about location or campus size \"doesn't necessarily reflect deep exploration\". (blog, admission counselor, 2025)"
       },
       "tag": "f",
       "src": [
        "B7-O70"
       ]
      },
      {
       "t": {
        "zh": "Rice：「You can't just copy and paste your responses」——不能把答案複製貼上到各校。（部落格，招生官，2023 更新）",
        "en": "Rice: \"You can't just copy and paste your responses\" across schools. (blog, admission officers, updated 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O67"
       ]
      },
      {
       "t": {
        "zh": "CMU：第三題短答「Tell us, don't show us (no websites please).」——用文字說，不要貼網站。（admission consideration 頁，未標日期）",
        "en": "CMU: for the third short answer, \"Tell us, don't show us (no websites please).\" (admission consideration page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O75"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：關於 AI，「your ultimate submission should be your own」——最後交出的必須是你自己的。（application review 頁，未標日期）",
        "en": "Georgia Tech: on AI, \"your ultimate submission should be your own.\" (application review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O22"
       ]
      },
      {
       "t": {
        "zh": "補充文書的建議有兩類反覆出現：「why us」必須只適用於那一所學校（本頁已直接讀過的有 Rice、Penn）；主文書寫過程與反思而非成就（Hopkins、Caltech、Yale）。",
        "en": "Two kinds of advice recur. \"Why us\" answers must be specific to that school (among pages read directly here: Rice and Penn). Personal essays should be about process and reflection rather than achievement (Hopkins, Caltech, Yale)."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "MIT（「doing it wrong」）與 Yale（「Standing out is not the goal」）都直接叫申請人別再刻意經營，這可能表示過度包裝的文章是他們常見的情況；但沒有學校說有多常見，所以只是推論。",
        "en": "MIT (\"doing it wrong\") and Yale (\"Standing out is not the goal\") both tell applicants to stop optimising. That suggests over-engineered essays are a pattern they see often. No office says how often, so this stays an inference."
       },
       "tag": "i"
      }
     ]
    },
    {
     "h": {
      "zh": "推薦信（含額外推薦信與 Other Recommender）",
      "en": "Recommendations (including extra letters and Other Recommender)"
     },
     "judgment": {
      "zh": "有用的推薦信是具體、有事例的；多數學校直接說額外推薦信不需要，只有寫信人能補上必交推薦信給不了的證據時才值得送。",
      "en": "A useful letter is specific and built on episodes; most offices say outright that an extra letter is not needed, and it is worth sending only when the writer adds evidence the required letters cannot."
     },
     "items": [
      {
       "t": {
        "zh": "MIT：推薦信「most helpful when they are specific and storied」，最好具體、有故事；「glowing superlatives」只有在「backed up with examples」時才有用。（推薦信寫作指南，辦公室口吻，未標日期）",
        "en": "MIT: letters are \"most helpful when they are specific and storied\"; \"glowing superlatives\" help only \"if they are backed up with examples.\" (how to write good letters, office voice, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O05"
       ]
      },
      {
       "t": {
        "zh": "MIT：推薦信應該「go beyond a student's grades and academic performance」；空泛的信會讓人覺得「this teacher did not give much effort to the recommendation」。（同上，未標日期）",
        "en": "MIT: letters should \"go beyond a student's grades and academic performance\"; a vague letter suggests \"this teacher did not give much effort to the recommendation.\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O05"
       ]
      },
      {
       "t": {
        "zh": "Yale：「the specifics are so much more powerful than the superlatives」——細節比最高級形容詞有力得多。（官方 podcast 第 9 集，2020）",
        "en": "Yale: \"the specifics are so much more powerful than the superlatives.\" (official podcast ep. 9, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O33"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Pick some teachers who know you and who like you.」——找了解你、也喜歡你的老師。（官方 podcast 第 9 集，2020）",
        "en": "Yale: \"Pick some teachers who know you and who like you.\" (official podcast ep. 9, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O33"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Don't underestimate the power of these recommendations.」——別低估推薦信的分量。（官方 podcast，2026）",
        "en": "Yale: \"Don't underestimate the power of these recommendations.\" (official podcast, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O37"
       ]
      },
      {
       "t": {
        "zh": "Yale：談到和推薦老師見面：「Set up the meeting. Go there, even if it's 15 minutes.」——約時間，哪怕只有 15 分鐘也要去。（官方 podcast 第 52 集，2026）",
        "en": "Yale: on meeting your recommender, \"Set up the meeting. Go there, even if it's 15 minutes.\" (official podcast ep. 52, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O38"
       ]
      },
      {
       "t": {
        "zh": "Caltech：請推薦人回答「Who is this student when the work becomes difficult?」——事情變難時，這位學生是什麼樣的人。（給推薦人的寫作建議，未標日期）",
        "en": "Caltech: asks recommenders \"Who is this student when the work becomes difficult?\" (writing advice for recommenders, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O54"
       ]
      },
      {
       "t": {
        "zh": "Caltech：請推薦人舉出毅力的證據，例如「such as a failed lab trial」；來自寫作份量重的課的推薦信也很重要。（同上，未標日期）",
        "en": "Caltech: asks for evidence of perseverance, \"such as a failed lab trial\"; letters from a class with a strong writing component are important. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O54"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：「A recommendation letter should highlight something new.」——推薦信應該帶出新東西。（招生部落格，招生顧問，2018，⚠ 2020 年前）",
        "en": "Georgia Tech: \"A recommendation letter should highlight something new.\" (admission blog, admission counselor, 2018, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O23"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：「Good recommendations showcase your character/compliment your story.」——好的推薦信呈現品格、補強你的故事。（招生部落格，職員段落，2020）",
        "en": "Georgia Tech: \"Good recommendations showcase your character/compliment your story.\" (admission blog, staff section, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O21"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「Prioritize those who know you best.」——優先找最了解你的人。（Hopkins Insider 部落格，2026）",
        "en": "Johns Hopkins: \"Prioritize those who know you best.\" (Hopkins Insider blog, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O28"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：官方的升學顧問推薦信範例會說明學校的限制（例如每年可修的 AP 門數上限），用來提供脈絡。（counselor letter samples 頁，未標日期）",
        "en": "Johns Hopkins: the sample counselor letters explain school limits, such as a cap on AP courses per year, to give context. (counselor letter samples page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O30"
       ]
      },
      {
       "t": {
        "zh": "Rice：建議找和「your major of interest」相關的老師寫信。（部落格，招生官，2023）",
        "en": "Rice: recommends a teacher related to \"your major of interest\". (blog, admission officers, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O67"
       ]
      },
      {
       "t": {
        "zh": "Stanford：「Letters from classroom teachers are strongly preferred.」——強烈偏好任課老師的信。（forms 頁，未標日期）",
        "en": "Stanford: \"Letters from classroom teachers are strongly preferred.\" (forms page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O49"
       ]
      },
      {
       "t": {
        "zh": "MIT：接受一封選交的補充推薦信，但「Most applicants and most admitted students do not submit any supplemental recommendations.」——多數申請人與錄取者都沒交。（推薦信頁，未標日期）",
        "en": "MIT: an optional supplemental letter is accepted, but \"Most applicants and most admitted students do not submit any supplemental recommendations.\" (letters page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O06"
       ]
      },
      {
       "t": {
        "zh": "Yale：「We do not need a third teacher. We only want two.」「More is not necessarily better in this case」——不需要第三位老師，只要兩位。（官方 podcast 第 9 集，2020）",
        "en": "Yale: \"We do not need a third teacher. We only want two.\" \"More is not necessarily better in this case\". (official podcast ep. 9, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O33"
       ]
      },
      {
       "t": {
        "zh": "Brown：必交的推薦信「provide all we need to make a thoughtful, informed admission decision」，已經足夠。（supplementary materials 頁，未標日期）",
        "en": "Brown: the required letters \"provide all we need to make a thoughtful, informed admission decision.\" (supplementary materials page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O72"
       ]
      },
      {
       "t": {
        "zh": "Stanford：可以有一位 Other Recommender，前提是能「provide new insights about you」；除此之外「We only accept required documents.」（forms 頁、after you apply 頁，未標日期）",
        "en": "Stanford: one Other Recommender may write if they can \"provide new insights about you\"; beyond that, \"We only accept required documents.\" (forms page and after-you-apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O49",
        "B7-O50"
       ]
      },
      {
       "t": {
        "zh": "Rice：「A supplemental letter is not required or expected.」——補充推薦信既非必要，也不在預期之中。（FAQ，未標日期）",
        "en": "Rice: \"A supplemental letter is not required or expected.\" (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O68"
       ]
      },
      {
       "t": {
        "zh": "Duke：接受「one additional letter of recommendation」；沒有被安排面試的人，仍可另交一封選交的 Personal Recommendation。（apply 頁與校友面試頁，未標日期）",
        "en": "Duke: will accept \"one additional letter of recommendation\"; applicants not offered an interview may still send one optional Personal Recommendation. (apply page and alumni interviews page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O43",
        "B7-O42"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：建議額外推薦信最多一封。（FAQ，未標日期）",
        "en": "Harvey Mudd: advises submitting at most one additional recommendation. (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O91"
       ]
      },
      {
       "t": {
        "zh": "Harvard：額外推薦信可在送件後，透過確認信裡的個人連結補交。（application requirements 頁，未標日期）",
        "en": "Harvard: extra letters may be sent after applying, through the personalised link in the confirmation email. (application requirements page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O46"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：額外推薦信可以當作選交資料上傳；候補中的學生不該再寄額外推薦信。（FAQ，未標日期）",
        "en": "Johns Hopkins: extra recommendations may be uploaded as optional material; waitlisted students should not send additional letters. (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O29"
       ]
      },
      {
       "t": {
        "zh": "Illinois：「No, we don't accept letter of recommendation or other unsolicited materials.」——不收推薦信，未要求的資料會在審查前從檔案移除。（first-year FAQ，未標日期）",
        "en": "Illinois: \"No, we don't accept letter of recommendation or other unsolicited materials.\" Unsolicited letters are removed from the file before review. (first-year FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O86"
       ]
      },
      {
       "t": {
        "zh": "UT Austin：推薦信「although not required」，不是必交，但交了會被審閱。（review 頁，未標日期）",
        "en": "UT Austin: recommendations are reviewed \"although not required\". (review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O84"
       ]
      },
      {
       "t": {
        "zh": "多數學校直接說額外推薦信不需要；本頁直接讀到的來源中，只有 Illinois 會把它移除。額外推薦信只有在寫信人能補上必交推薦信給不了的證據（例如研究指導者）時才值得送；Stanford 的「new insights」說得最清楚。",
        "en": "Most offices say directly that an extra letter is not needed; among the pages read directly here, only Illinois removes them. An extra letter is worth sending only when the writer adds evidence the required letters cannot, such as a research mentor. Stanford's \"new insights\" says this most plainly."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "MIT、Caltech、Georgia Tech 三校都給了寫信人一個判斷好信的標準：要看到的事例，不是形容詞。申請人可以把這些頁面直接轉給老師，不必自己加註解。",
        "en": "MIT, Caltech and Georgia Tech each give writers a test for a strong letter: observed episodes rather than adjectives. An applicant can pass these pages to a teacher without editorialising."
       },
       "tag": "i"
      }
     ]
    },
    {
     "h": {
      "zh": "Additional Information 欄",
      "en": "The Additional Information section"
     },
     "judgment": {
      "zh": "各校對用途的說法一致：放沒有其他地方可放的脈絡與事實；對誤用的說法也一致：別再寫一篇文章。留白也可以。",
      "en": "Offices agree on the use (context and facts with no other place) and on the misuse (a second essay); leaving it blank is fine."
     },
     "items": [
      {
       "t": {
        "zh": "MIT：申請最後有「one final, open-ended, additional-information text box」，一個開放的補充說明框。（申請頁，未標日期）",
        "en": "MIT: the application ends with \"one final, open-ended, additional-information text box\". (apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O01"
       ]
      },
      {
       "t": {
        "zh": "MIT：「there are designated spaces to provide additional context」——補充脈絡有指定的欄位。（FAQ，未標日期）",
        "en": "MIT: \"there are designated spaces to provide additional context\". (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O10"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：「It's okay to leave this section blank.」——這欄留白沒關係。（招生部落格，職員段落，2020）",
        "en": "Georgia Tech: \"It's okay to leave this section blank.\" (admission blog, staff section, 2020)"
       },
       "tag": "f",
       "src": [
        "B7-O21"
       ]
      },
      {
       "t": {
        "zh": "Yale：「please don't write an extra essay there」——請別在那裡再寫一篇文章。（官方 podcast 第 35 集，2023）",
        "en": "Yale: \"please don't write an extra essay there\". (official podcast ep. 35, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O34"
       ]
      },
      {
       "t": {
        "zh": "Yale：用這欄寫校內層級的獎項是「absolutely appropriate」，完全合適。（官方 podcast 第 29 集，2022）",
        "en": "Yale: using it for a school-level award is \"absolutely appropriate\". (official podcast ep. 29, 2022)"
       },
       "tag": "f",
       "src": [
        "B7-O35"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：用來放「doesn't fit in the essays or activities list」的內容，也就是文章與活動表放不下的東西。（Hopkins Insider 部落格，2023）",
        "en": "Johns Hopkins: use it for content that \"doesn't fit in the essays or activities list.\" (Hopkins Insider blog, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O26"
       ]
      },
      {
       "t": {
        "zh": "UW：建議用途包括「Unusual academic progression」、「Course availability issues」，以及其他地方看不到的學業成果。（writing section 頁，未標日期）",
        "en": "UW: suggested uses are \"Unusual academic progression\", \"Course availability issues\", and academic work shown nowhere else. (writing section page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O82"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：沒有交任何額外資料的申請人不會因此吃虧。（FAQ，未標日期）",
        "en": "Harvey Mudd: applicants are not disadvantaged for submitting nothing extra. (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O91"
       ]
      },
      {
       "t": {
        "zh": "Penn：選填欄位的用意是讓申請人「To be your own best advocate」，替自己說話。（writing 頁，未標日期）",
        "en": "Penn: the stated purpose of the optional spaces is for applicants \"To be your own best advocate\". (writing page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O62"
       ]
      },
      {
       "t": {
        "zh": "MIT：「None of the below is required or even expected.」——以下都不是必要、甚至不在預期之中。（職員部落格，2007，已標 archived，⚠ 2020 年前）",
        "en": "MIT: \"None of the below is required or even expected.\" (staff blog, 2007, archived, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O14"
       ]
      },
      {
       "t": {
        "zh": "各校對用途的說法一致：放沒有其他地方可放的脈絡與事實，例如課程開設狀況、非典型的修課進度、校內獎項或中斷；對誤用的說法也一致：別寫成第二篇文章。Georgia Tech 的「okay to leave this section blank」是找到最明確的留白許可。",
        "en": "The offices agree on the use: context and facts with no other place, such as course availability, unusual progression, a school-level award, or a disruption. They agree on the misuse: a second essay. Georgia Tech's \"okay to leave this section blank\" is the clearest permission found."
       },
       "tag": "i"
      }
     ]
    },
    {
     "h": {
      "zh": "面試",
      "en": "Interviews"
     },
     "judgment": {
      "zh": "有面試的學校幾乎都說「選擇性、沒安排到不扣分」；Olin 的 Candidates' Weekend 是必須參加的例外；台灣申請人能不能面試，取決於當地有沒有志工。",
      "en": "Where interviews exist they are almost always optional with no penalty if not offered; Olin's required Candidates' Weekend is the exception, and for applicants abroad availability depends on local volunteers."
     },
     "items": [
      {
       "t": {
        "zh": "MIT：若無法安排面試，「it will be waived, and your application will not be adversely affected」——會豁免，申請不受影響。（面試頁，未標日期）",
        "en": "MIT: if no interview can be offered, \"it will be waived, and your application will not be adversely affected.\" (interview page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O07"
       ]
      },
      {
       "t": {
        "zh": "MIT：準備「stories or examples that will give your interviewer a vivid sense」，讓面試官具體認識你；面試通常約一小時。（面試頁，未標日期）",
        "en": "MIT: prepare \"stories or examples that will give your interviewer a vivid sense\" of you. Interviews typically last an hour. (interview page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O07"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Interviews are not required, and many successful applicants are not interviewed.」「Interviews are by invitation only.」「All Yale interviews are evaluative.」——非必要、僅限受邀、都會計入評估。（interviews 頁，未標日期）",
        "en": "Yale: \"Interviews are not required, and many successful applicants are not interviewed.\" \"Interviews are by invitation only.\" \"All Yale interviews are evaluative.\" (interviews page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O36"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Not receiving an interview invitation is not an indication that your application is not competitive.」——沒收到邀請不代表申請沒競爭力。（同上，未標日期）",
        "en": "Yale: \"Not receiving an interview invitation is not an indication that your application is not competitive.\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O36"
       ]
      },
      {
       "t": {
        "zh": "Yale：「An interviewer is someone who didn't see the rest of the application.」——面試官沒看過你其他申請資料。（官方 podcast 第 35 集，2023）",
        "en": "Yale: \"An interviewer is someone who didn't see the rest of the application.\" (official podcast ep. 35, 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O34"
       ]
      },
      {
       "t": {
        "zh": "Yale：「We aren't asking the interviewer to evaluate your academic preparation.」——不請面試官評估學業準備。（官方 podcast，2026）",
        "en": "Yale: \"We aren't asking the interviewer to evaluate your academic preparation.\" (official podcast, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O37"
       ]
      },
      {
       "t": {
        "zh": "Harvard：「The absence of an interview will not adversely affect your candidacy.」——沒有面試不會對申請不利。（國際申請人頁與 FAQ，未標日期）",
        "en": "Harvard: \"The absence of an interview will not adversely affect your candidacy.\" (international applicants page and FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O44",
        "B7-O45"
       ]
      },
      {
       "t": {
        "zh": "Stanford：「Your application will be considered complete with or without an interview.」邀請取決於「alumni availability in your high school area」。（面試頁，未標日期）",
        "en": "Stanford: \"Your application will be considered complete with or without an interview.\" Invitations follow \"alumni availability in your high school area.\" (interview page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O51"
       ]
      },
      {
       "t": {
        "zh": "Duke：「not receiving an interview will not affect your chances of admission」；國際申請人可用 InitialView，中國的申請人「are particularly encouraged」。（校友面試頁，未標日期）",
        "en": "Duke: \"not receiving an interview will not affect your chances of admission.\" International applicants may use InitialView; applicants in China \"are particularly encouraged\" to. (alumni interviews page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O42"
       ]
      },
      {
       "t": {
        "zh": "Georgetown：面試是「a key part of Georgetown's application process」。（校友面試頁，未標日期）",
        "en": "Georgetown: interviews are \"a key part of Georgetown's application process\". (alumni interview page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O97"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「we do not offer interviews as part of our admissions process」——不提供面試。（FAQ，未標日期）",
        "en": "Johns Hopkins: \"we do not offer interviews as part of our admissions process\". (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O29"
       ]
      },
      {
       "t": {
        "zh": "Swarthmore：「Applicants who do not interview are not at a disadvantage.」面試只開放給美國高中的學生；國際學生「are strongly encouraged to submit a Video Response」。（request an interview 頁，未標日期）",
        "en": "Swarthmore: \"Applicants who do not interview are not at a disadvantage.\" Interviews are open only to students at US high schools; international students \"are strongly encouraged to submit a Video Response.\" (request-an-interview page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O93"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：「All interviews are conducted online.」國際申請人被鼓勵使用 InitialView 或 Vericant，這兩項服務沒有費用減免。（interviews 頁，未標日期）",
        "en": "Harvey Mudd: \"All interviews are conducted online.\" International applicants are encouraged to use InitialView or Vericant; there are no fee waivers for those services. (interviews page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O92"
       ]
      },
      {
       "t": {
        "zh": "Rice：校友面試與學生面試「weighted equally in the evaluation process」；沒配對到面試不影響結果。（國際申請人頁，未標日期）",
        "en": "Rice: alumni and student interviews are \"weighted equally in the evaluation process\"; not being matched does not affect the decision. (international applicants page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O69"
       ]
      },
      {
       "t": {
        "zh": "Rice（學生面試官）：「research Rice and know why you want to go to school here」——先研究 Rice，知道你為何想來。（學生面試官部落格，2023 更新）",
        "en": "Rice (student interviewers): \"research Rice and know why you want to go to school here.\" (senior interviewers' blog, updated 2023)"
       },
       "tag": "f",
       "src": [
        "B7-O71"
       ]
      },
      {
       "t": {
        "zh": "Olin：參加 Candidates' Weekend「is required to be considered for admission」，且有「evaluative components」；美國本土以外的學生以線上方式面試。（what we look for 頁，未標日期）",
        "en": "Olin: Candidates' Weekend attendance \"is required to be considered for admission\" and has \"evaluative components\". Students outside the continental US interview virtually. (what-we-look-for page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O89"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：把「Interview for International Applicants」列為審查因素之一，沒有進一步說明。（application review 頁，未標日期）",
        "en": "Georgia Tech: lists \"Interview for International Applicants\" as a review factor, without detail. (application review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O22"
       ]
      },
      {
       "t": {
        "zh": "CMU：提供選交的 VIVA 影片評估（在 InitialView 平台上），只限 Engineering 與 Computer Science 申請人。（requirements 頁，未標日期）",
        "en": "CMU: an optional VIVA video assessment on InitialView's platform, for Engineering and Computer Science applicants only. (requirements page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O76"
       ]
      },
      {
       "t": {
        "zh": "Georgetown：「Georgetown accepts InitialView interviews, but they are not required」——接受 InitialView，但非必要。（國際申請人 FAQ，未標日期）",
        "en": "Georgetown: \"Georgetown accepts InitialView interviews, but they are not required\". (international FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O98"
       ]
      },
      {
       "t": {
        "zh": "有面試的學校幾乎都是「選擇性、沒安排到不扣分」；Olin（必須參加 Candidates' Weekend）是例外。對台灣的申請人來說，能不能面試取決於當地志工人數，Stanford 直接這樣說。",
        "en": "Where interviews exist they are almost always \"optional, no penalty if not offered\". Olin is the exception (required Candidates' Weekend). For a Taiwan-based applicant, availability depends on volunteer supply, which Stanford says outright."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "InitialView（有時加上 Vericant）是 Duke、Harvey Mudd、Georgetown 官方點名的替代管道，Swarthmore 則有自己的影片回覆；沒有任何一校說新生申請必須使用。",
        "en": "InitialView, and sometimes Vericant, is the official substitute named by Duke, Harvey Mudd and Georgetown; Swarthmore offers its own video response. None says it is required for first-year applicants."
       },
       "tag": "i"
      }
     ]
    },
    {
     "h": {
      "zh": "Demonstrated interest（是否追蹤「表現興趣」）",
      "en": "Demonstrated interest"
     },
     "judgment": {
      "zh": "直接讀過頁面的學校中，MIT、Yale、Hopkins、Harvey Mudd、Swarthmore 都說不追蹤；Rice 是最明顯的反例；Georgia Tech 看的是對科系的興趣。",
      "en": "Among pages read directly, MIT, Yale, Hopkins, Harvey Mudd and Swarthmore say interest is not tracked; Rice is the clearest counter-example; Georgia Tech looks at interest in the major."
     },
     "viz": {
      "type": "waffle-inline",
      "title": {
       "zh": "查過的 22 校沒有一校說會追蹤表現興趣：5 校明說不追蹤，15 校兩方都沒說",
       "en": "Of the 22 schools checked, none says it tracks demonstrated interest; 5 say they do not, and 15 say nothing either way"
      },
      "subtitle": {
       "zh": "一格一校，依學校自己的說法分組（B7 研究筆記，2026-11-07）。虛線格是「未說明」，不是任何一方的證據。滑過或點一下方格可看原文與出處。",
       "en": "One square per school, grouped by what the school itself says (B7 research note, accessed 2026-11-07). Dashed squares mean not stated, which is not evidence either way. Hover or tap a square for the wording and its source."
      },
      "groups": [
       {
        "v": "tracks",
        "color": 1,
        "label": {
         "zh": "說會追蹤",
         "en": "Says it tracks interest"
        },
        "items": []
       },
       {
        "v": "no",
        "color": 0,
        "label": {
         "zh": "說不追蹤或不考慮",
         "en": "Says it does not track or consider it"
        },
        "items": [
         {
          "name": "MIT",
          "t": {
           "zh": "不考慮：「we don't consider demonstrated interest」",
           "en": "No: \"we don't consider demonstrated interest\""
          },
          "src": [
           "B7-O11",
           "B7-O15"
          ]
         },
         {
          "name": "Yale",
          "t": {
           "zh": "不追蹤：「We do not track demonstrated interest at all.」",
           "en": "No: \"We do not track demonstrated interest at all.\""
          },
          "src": [
           "B7-O38"
          ]
         },
         {
          "name": "Johns Hopkins",
          "t": {
           "zh": "不追蹤：「we do not track demonstrated interest」",
           "en": "No: \"we do not track demonstrated interest\""
          },
          "src": [
           "B7-O29"
          ]
         },
         {
          "name": "Harvey Mudd",
          "t": {
           "zh": "不考慮（假定申請就代表有興趣）",
           "en": "Not considered (applying is taken as interest)"
          },
          "src": [
           "B7-O91"
          ]
         },
         {
          "name": "Swarthmore",
          "t": {
           "zh": "不採用：「does not practice 'demonstrated interest'」",
           "en": "No: \"does not practice 'demonstrated interest'\""
          },
          "src": [
           "B7-O93"
          ]
         }
        ]
       },
       {
        "v": "signals",
        "color": 3,
        "label": {
         "zh": "沒用這個詞，但要求或看興趣訊號",
         "en": "Term not used, but asks for or reads interest signals"
        },
        "items": [
         {
          "name": "Rice",
          "t": {
           "zh": "沒有用這個詞；請申請人登記表單，並把「Knowledge about Rice」列為因素",
           "en": "Term not used; asks for a prospective-student form and lists \"Knowledge about Rice\" as a factor"
          },
          "src": [
           "B7-O66"
          ]
         },
         {
          "name": "Georgia Tech",
          "t": {
           "zh": "看的是對科系的興趣：「evidence of your interest in this major is an indicator」",
           "en": "Interest in the major: \"evidence of your interest in this major is an indicator\""
          },
          "src": [
           "B7-O22"
          ]
         }
        ]
       },
       {
        "v": "ns",
        "label": {
         "zh": "未說明或說法不完整",
         "en": "Not stated, or wording incomplete"
        },
        "items": [
         {
          "name": "Duke",
          "t": {
           "zh": "僅直接讀到「Students don't need to visit the campus」；完整說法待瀏覽器確認",
           "en": "Only \"Students don't need to visit the campus\" read directly; full wording awaits a browser check"
          },
          "src": [
           "B7-O41"
          ]
         },
         {
          "name": "Stanford",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Harvard",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Princeton",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Penn",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Brown",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "CMU",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Michigan",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "UIUC",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Purdue",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "UC",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "UW",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Williams",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Olin",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         },
         {
          "name": "Georgetown",
          "t": {
           "zh": "本輪沒找到任何一方的說法（2026-11-07 查）",
           "en": "No statement found either way in this run (checked 2026-11-07)"
          },
          "src": []
         }
        ]
       }
      ]
     },
     "items": [
      {
       "t": {
        "zh": "MIT：「we don't consider demonstrated interest」——不考慮表現興趣。（about 頁，未標日期）",
        "en": "MIT: \"we don't consider demonstrated interest\". (about page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O11"
       ]
      },
      {
       "t": {
        "zh": "MIT：「we do not consider demonstrated interest as part of your application」。（院長部落格，2020，MIT 已標為 archived）",
        "en": "MIT: \"we do not consider demonstrated interest as part of your application\". (dean's blog, 2020, archived by MIT)"
       },
       "tag": "f",
       "src": [
        "B7-O15"
       ]
      },
      {
       "t": {
        "zh": "Duke：「Students don't need to visit the campus」——不必參觀校園。（resources／FAQ 頁，未標日期；此句為直接讀取，頁上其他用語待確認）",
        "en": "Duke: \"Students don't need to visit the campus\". (resources/FAQ page, undated; this sentence was read directly, other wording on the page is unconfirmed)"
       },
       "tag": "f",
       "src": [
        "B7-O41"
       ]
      },
      {
       "t": {
        "zh": "Yale：「We do not track demonstrated interest at all.」——完全不追蹤。（官方 podcast 第 52 集，2026）",
        "en": "Yale: \"We do not track demonstrated interest at all.\" (official podcast ep. 52, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O38"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：「we do not track demonstrated interest」。（FAQ，未標日期）",
        "en": "Johns Hopkins: \"we do not track demonstrated interest\". (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O29"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：「We assume that you've applied to Harvey Mudd」是因為你有興趣，所以不另外考慮興趣。（FAQ，未標日期）",
        "en": "Harvey Mudd: \"We assume that you've applied to Harvey Mudd\" because you are interested; interest is not considered. (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O91"
       ]
      },
      {
       "t": {
        "zh": "Swarthmore：「Swarthmore does not practice 'demonstrated interest' in its application review process.」（面試頁，未標日期）",
        "en": "Swarthmore: \"Swarthmore does not practice 'demonstrated interest' in its application review process.\" (interview page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O93"
       ]
      },
      {
       "t": {
        "zh": "Rice：沒有用這個詞，但請申請人登記或填寫潛在學生表單；補充文書要寫「specific aspects of Rice excite you」；「Knowledge about Rice」列在審查因素中。（application philosophy 頁，未標日期）",
        "en": "Rice: never uses the phrase, but asks applicants to register or complete a prospective-student form; the supplement should say which \"specific aspects of Rice excite you\"; \"Knowledge about Rice\" is listed among the factors. (application philosophy page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O66"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：「evidence of your interest in this major is an indicator」——看的是對科系的興趣，不是對學校。（application review 頁，未標日期）",
        "en": "Georgia Tech: \"evidence of your interest in this major is an indicator\". The interest meant is in the major, not in the school. (application review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O22"
       ]
      },
      {
       "t": {
        "zh": "在本頁直接讀過的來源中，MIT、Yale、Hopkins、Harvey Mudd、Swarthmore 的說法是「不追蹤」；Rice 是最明顯的反例：要求登記表單，並把對 Rice 的了解列為因素。Rice 也說，契合度應該寫在「why us」文書裡，而不是靠接觸次數。",
        "en": "Among the sources read directly here, MIT, Yale, Hopkins, Harvey Mudd and Swarthmore state \"not tracked\". Rice is the clearest counter-example: it asks for a form registration and lists knowledge of Rice as a factor. Rice also says fit should show in the \"why us\" essay rather than in contact counts."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "本輪沒找到兩方說法的學校：Stanford、Harvard、Princeton、Penn、Brown、CMU、Michigan、UIUC、Purdue、UC、UW、Williams、Olin、Georgetown。這是「未說明（2026-11-07 查）」，不是任何一方的證據。",
        "en": "Schools not found saying anything either way in this run: Stanford, Harvard, Princeton, Penn, Brown, CMU, Michigan, UIUC, Purdue, UC, UW, Williams, Olin, Georgetown. That is \"not stated (checked 2026-11-07)\", not evidence either way."
       },
       "tag": "i"
      }
     ],
     "table": {
      "cols": [
       {
        "zh": "學校",
        "en": "School"
       },
       {
        "zh": "是否追蹤表現興趣（學校自己的說法）",
        "en": "Tracks interest? (as the school states it)"
       },
       {
        "zh": "來源",
        "en": "Source"
       }
      ],
      "rows": [
       {
        "cells": [
         {
          "zh": "MIT",
          "en": "MIT"
         },
         {
          "t": {
           "zh": "不考慮：「we don't consider demonstrated interest」",
           "en": "No: \"we don't consider demonstrated interest\""
          },
          "tag": "f",
          "src": [
           "B7-O11",
           "B7-O15"
          ]
         },
         "B7-O11, B7-O15"
        ]
       },
       {
        "cells": [
         {
          "zh": "Yale",
          "en": "Yale"
         },
         {
          "t": {
           "zh": "不追蹤：「We do not track demonstrated interest at all.」",
           "en": "No: \"We do not track demonstrated interest at all.\""
          },
          "tag": "f",
          "src": [
           "B7-O38"
          ]
         },
         "B7-O38"
        ]
       },
       {
        "cells": [
         {
          "zh": "Johns Hopkins",
          "en": "Johns Hopkins"
         },
         {
          "t": {
           "zh": "不追蹤：「we do not track demonstrated interest」",
           "en": "No: \"we do not track demonstrated interest\""
          },
          "tag": "f",
          "src": [
           "B7-O29"
          ]
         },
         "B7-O29"
        ]
       },
       {
        "cells": [
         {
          "zh": "Harvey Mudd",
          "en": "Harvey Mudd"
         },
         {
          "t": {
           "zh": "不考慮（假定申請就代表有興趣）",
           "en": "Not considered (applying is taken as interest)"
          },
          "tag": "f",
          "src": [
           "B7-O91"
          ]
         },
         "B7-O91"
        ]
       },
       {
        "cells": [
         {
          "zh": "Swarthmore",
          "en": "Swarthmore"
         },
         {
          "t": {
           "zh": "不採用：「does not practice 'demonstrated interest'」",
           "en": "No: \"does not practice 'demonstrated interest'\""
          },
          "tag": "f",
          "src": [
           "B7-O93"
          ]
         },
         "B7-O93"
        ]
       },
       {
        "cells": [
         {
          "zh": "Duke",
          "en": "Duke"
         },
         {
          "t": {
           "zh": "僅直接讀到「Students don't need to visit the campus」；完整說法待瀏覽器確認",
           "en": "Only \"Students don't need to visit the campus\" read directly; full wording awaits a browser check"
          },
          "tag": "f",
          "src": [
           "B7-O41"
          ]
         },
         "B7-O41"
        ]
       },
       {
        "cells": [
         {
          "zh": "Rice",
          "en": "Rice"
         },
         {
          "t": {
           "zh": "沒有用這個詞；請申請人登記表單，並把「Knowledge about Rice」列為因素",
           "en": "Term not used; asks for a prospective-student form and lists \"Knowledge about Rice\" as a factor"
          },
          "tag": "f",
          "src": [
           "B7-O66"
          ]
         },
         "B7-O66"
        ]
       },
       {
        "cells": [
         {
          "zh": "Georgia Tech",
          "en": "Georgia Tech"
         },
         {
          "t": {
           "zh": "看的是對科系的興趣：「evidence of your interest in this major is an indicator」",
           "en": "Interest in the major: \"evidence of your interest in this major is an indicator\""
          },
          "tag": "f",
          "src": [
           "B7-O22"
          ]
         },
         "B7-O22"
        ]
       }
      ]
     }
    },
    {
     "h": {
      "zh": "國際申請人",
      "en": "International applicants"
     },
     "judgment": {
      "zh": "就學校自己的說法，MIT、Harvard、Yale 對國際生不看支付能力；Stanford、Caltech、Penn、Rice、Harvey Mudd 說國際生的補助申請會影響錄取；翻譯一律不能自己做。",
      "en": "As stated by the schools, MIT, Harvard and Yale do not weigh international applicants' ability to pay; Stanford, Caltech, Penn, Rice and Harvey Mudd say an international aid request affects admission; translations are never self-made."
     },
     "viz": {
      "type": "waffle-inline",
      "title": {
       "zh": "10 所有說明的學校中，5 校表示國際生申請補助可能影響錄取，3 校說不看支付能力",
       "en": "Of the 10 schools that address it, 5 say an international aid request can affect admission and 3 say ability to pay is not weighed"
      },
      "subtitle": {
       "zh": "一格一校，依學校原話分組（B7 研究筆記，2026-11-07）。虛線格：頁面沒用 need-blind 或 need-aware 字眼。滑過或點一下方格可看原文與出處。",
       "en": "One square per school, grouped by the school's own wording (B7 research note, accessed 2026-11-07). Dashed squares: the page uses neither need-blind nor need-aware. Hover or tap a square for the wording and its source."
      },
      "groups": [
       {
        "v": "blind",
        "color": 0,
        "label": {
         "zh": "Need-blind，或說所有申請人流程相同",
         "en": "Need-blind, or the same process for every applicant"
        },
        "items": [
         {
          "name": "MIT",
          "t": {
           "zh": "need-blind：「MIT practices need-blind admissions.」",
           "en": "Need-blind: \"MIT practices need-blind admissions.\""
          },
          "src": [
           "B7-O13"
          ]
         },
         {
          "name": "Harvard",
          "t": {
           "zh": "「Our admissions and financial aid processes are the same for all applicants」——所有申請人流程相同",
           "en": "\"Our admissions and financial aid processes are the same for all applicants\""
          },
          "src": [
           "B7-O44"
          ]
         },
         {
          "name": "Yale",
          "t": {
           "zh": "「without regard to their ability to pay」——不考慮支付能力",
           "en": "Considered \"without regard to their ability to pay\""
          },
          "src": [
           "B7-O39"
          ]
         }
        ]
       },
       {
        "v": "aware",
        "color": 1,
        "label": {
         "zh": "Need-aware：補助申請可能影響錄取",
         "en": "Need-aware: an aid request can affect admission"
        },
        "items": [
         {
          "name": "Stanford",
          "t": {
           "zh": "國際生的補助申請「will be a factor in our admission evaluation」",
           "en": "For international citizens, an aid request \"will be a factor in our admission evaluation\""
          },
          "src": [
           "B7-O52"
          ]
         },
         {
          "name": "Caltech",
          "t": {
           "zh": "「need-aware for international students」",
           "en": "\"need-aware for international students\""
          },
          "src": [
           "B7-O57"
          ]
         },
         {
          "name": "Penn",
          "t": {
           "zh": "對加拿大、墨西哥以外的國際生 need-aware",
           "en": "Need-aware for international students not from Canada or Mexico"
          },
          "src": [
           "B7-O64"
          ]
         },
         {
          "name": "Rice",
          "t": {
           "zh": "國際申請人採「need-aware basis」",
           "en": "International applicants on a \"need-aware basis\""
          },
          "src": [
           "B7-O69"
          ]
         },
         {
          "name": "Harvey Mudd",
          "t": {
           "zh": "「We are need aware in the admission process for international students」",
           "en": "\"We are need aware in the admission process for international students\""
          },
          "src": [
           "B7-O91"
          ]
         }
        ]
       },
       {
        "v": "ns",
        "label": {
         "zh": "兩個詞都沒用",
         "en": "Neither term used"
        },
        "items": [
         {
          "name": "Duke",
          "t": {
           "zh": "未直接用 need-blind/aware 字眼；外籍生須在首次申請時申請補助，頁上「不吃虧」規則只針對美國公民",
           "en": "Neither term used; foreign citizens must request aid in the original application, and the no-disadvantage rule on the page is stated for US citizens"
          },
          "src": [
           "B7-O43"
          ]
         },
         {
          "name": "Georgetown",
          "t": {
           "zh": "未直接用 need-blind/aware 字眼；錄取後申請補助者可獲考慮「a limited number of need-based scholarship awards」",
           "en": "Neither term used; admitted students who request aid are considered for \"a limited number of need-based scholarship awards\""
          },
          "src": [
           "B7-O98"
          ]
         }
        ]
       }
      ]
     },
     "items": [
      {
       "t": {
        "zh": "MIT：「MIT practices need-blind admissions.」國際生申請約占申請總數的四分之一。（國際申請 FAQ，未標日期）",
        "en": "MIT: \"MIT practices need-blind admissions.\" Almost one quarter of applications come from international students. (international FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O13"
       ]
      },
      {
       "t": {
        "zh": "MIT：「we do not have caps or quotas for countries」——沒有國家名額上限。（新生國際申請人頁，未標日期）",
        "en": "MIT: \"we do not have caps or quotas for countries\". (first-year international page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O08"
       ]
      },
      {
       "t": {
        "zh": "MIT：所有資料必須是英文，且「you can't translate the material yourself」——不能自己翻譯。（國際申請 FAQ，未標日期）",
        "en": "MIT: all materials must be in English, and \"you can't translate the material yourself.\" (international FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O13"
       ]
      },
      {
       "t": {
        "zh": "MIT（學生部落客）：曾寫 MIT 是「only five need-blind admissions schools」之一；現行 FAQ 的數字不同，這個數字不應採用。（學生部落格，2018，已標 archived，⚠ 2020 年前）",
        "en": "MIT (student blogger): described MIT as one of \"only five need-blind admissions schools\". The current FAQ gives a different count, so the student's number should not be used. (student blog, 2018, archived, ⚠ pre-2020)"
       },
       "tag": "f",
       "src": [
        "B7-O16"
       ]
      },
      {
       "t": {
        "zh": "Harvard：「Our admissions and financial aid processes are the same for all applicants」——招生與補助流程對所有申請人相同。（國際申請人頁，未標日期）",
        "en": "Harvard: \"Our admissions and financial aid processes are the same for all applicants\". (international applicants page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O44"
       ]
      },
      {
       "t": {
        "zh": "Harvard：原文文件「should always accompany the translated version」；老師可以翻譯，申請人本人不行。（同上，未標日期）",
        "en": "Harvard: a copy of the original document \"should always accompany the translated version\". A teacher may translate; the applicant may not. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O44"
       ]
      },
      {
       "t": {
        "zh": "Harvard：非美國學校的文件「may differ substantially from that submitted by an American high school」，可能和美國高中交的很不一樣。（同上，未標日期）",
        "en": "Harvard: non-US school documents \"may differ substantially from that submitted by an American high school\". (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O44"
       ]
      },
      {
       "t": {
        "zh": "Yale：申請人的審查「without regard to their ability to pay」；不接受自己翻譯的文件。（國際申請人頁，未標日期）",
        "en": "Yale: applicants are considered \"without regard to their ability to pay\". Self-made translations are not accepted. (international page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O39"
       ]
      },
      {
       "t": {
        "zh": "Stanford：對國際公民而言，補助申請「will be a factor in our admission evaluation」，會成為錄取評估的因素。（國際申請人頁，未標日期）",
        "en": "Stanford: for international citizens, an aid request \"will be a factor in our admission evaluation.\" (international page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O52"
       ]
      },
      {
       "t": {
        "zh": "Stanford：「applicants are reviewed in the context and country where they attend high school」；「Transcripts and teacher recommendations must be translated into English.」（同上，未標日期）",
        "en": "Stanford: \"applicants are reviewed in the context and country where they attend high school.\" \"Transcripts and teacher recommendations must be translated into English.\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O52"
       ]
      },
      {
       "t": {
        "zh": "Caltech：因補助經費有限，「need-aware for international students」。（國際申請人頁，未標日期）",
        "en": "Caltech: \"need-aware for international students\" because aid funds are limited. (international page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O57"
       ]
      },
      {
       "t": {
        "zh": "Caltech：「We will not review your application if any part is not translated in English.」成績單不必換算成美國制。（同上，未標日期）",
        "en": "Caltech: \"We will not review your application if any part is not translated in English.\" The transcript does not need converting to US grades. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O57"
       ]
      },
      {
       "t": {
        "zh": "Penn：「Penn is need-aware for international students who are not from Canada and Mexico.」（Ask Penn，2025-08-01 修改）",
        "en": "Penn: \"Penn is need-aware for international students who are not from Canada and Mexico.\" (Ask Penn, modified 2025-08-01)"
       },
       "tag": "f",
       "src": [
        "B7-O64"
       ]
      },
      {
       "t": {
        "zh": "Penn：招生官用學校簡介「evaluate each applicant within their context」；簡介應寫出「what classes and extra-curricular opportunities were available」。（school profile 頁，未標日期）",
        "en": "Penn: officers use school profiles to \"evaluate each applicant within their context\". Profiles should show \"what classes and extra-curricular opportunities were available\". (school profile page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O63"
       ]
      },
      {
       "t": {
        "zh": "Duke：外國公民必須「in the original first-year application」就申請補助；同一頁寫明美國公民不受影響的規則，暗示外國公民的規則不同。（apply 頁，未標日期）",
        "en": "Duke: foreign citizens must apply for aid \"in the original first-year application\". The same page states the no-disadvantage rule for US citizens, which implies a different rule for foreign citizens. (apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O43"
       ]
      },
      {
       "t": {
        "zh": "Duke：「14% of students are international」——14% 學生是國際生。（what we look for 頁，Class of 2027 統計）",
        "en": "Duke: \"14% of students are international\". (what-we-look-for page, Class of 2027 statistics)"
       },
       "tag": "f",
       "src": [
        "B7-O40"
       ]
      },
      {
       "t": {
        "zh": "Rice：國際申請人以「need-aware basis」審查；非英文文件需由學校或「authorized/official translator in the country of study」翻譯。（國際申請人頁，未標日期）",
        "en": "Rice: international applicants are considered on a \"need-aware basis\". Non-English documents need translation by the school or an \"authorized/official translator in the country of study.\" (international page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O69"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：「We are need aware in the admission process for international students」。（FAQ，未標日期）",
        "en": "Harvey Mudd: \"We are need aware in the admission process for international students\". (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O91"
       ]
      },
      {
       "t": {
        "zh": "Georgetown：錄取的國際生若申請補助，會被考慮「a limited number of need-based scholarship awards」，名額有限。（國際申請人 FAQ，未標日期）",
        "en": "Georgetown: admitted international students who request aid are considered for \"a limited number of need-based scholarship awards\". (international FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O98"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech：申請人在「within the context of the high school they attend」的脈絡下評估。（application review 頁，未標日期）",
        "en": "Georgia Tech: applicants are evaluated \"within the context of the high school they attend.\" (application review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O22"
       ]
      },
      {
       "t": {
        "zh": "紙面上分成兩群：MIT、Harvard、Yale 說國際申請人不看支付能力；Stanford、Caltech、Penn、Rice、Harvey Mudd 說、Duke 明顯暗示，國際生的補助申請會影響錄取。需要補助的申請人在兩群學校面對不同的決定；家庭如何權衡不在本頁範圍。",
        "en": "On paper there are two groups. MIT, Harvard and Yale say they are need-blind for international applicants. Stanford, Caltech, Penn, Rice and Harvey Mudd say, and Duke clearly implies, that an international aid request can affect admission. An applicant who needs aid faces a different decision at each group; how families weigh that is outside this page."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "有寫到翻譯規則的學校（MIT、Harvard、Yale、Stanford、Caltech、Rice）說法一致：不能自己翻、由學校人員或正式譯者翻、附上原文。讀者靠學校簡介來定位非美國成績單（Penn、Stanford、Georgia Tech），因此升學顧問的簡介對美國體系以外的學校特別重要。最後這一點是推論，沒有學校針對台灣這樣說。",
        "en": "Where stated (MIT, Harvard, Yale, Stanford, Caltech, Rice), the translation rule is consistent: never self-translated; a school official or official translator; the original attached. The school profile is how readers place a non-US transcript (Penn, Stanford, Georgia Tech), which makes the counselor's profile unusually important for schools outside the US system. That last point is an inference; no office said it about Taiwan."
       },
       "tag": "i"
      }
     ],
     "table": {
      "cols": [
       {
        "zh": "學校",
        "en": "School"
       },
       {
        "zh": "對國際生 need-blind 或 need-aware（學校原話）",
        "en": "Need-blind or need-aware for internationals (as stated)"
       },
       {
        "zh": "來源",
        "en": "Source"
       }
      ],
      "rows": [
       {
        "cells": [
         {
          "zh": "MIT",
          "en": "MIT"
         },
         {
          "t": {
           "zh": "need-blind：「MIT practices need-blind admissions.」",
           "en": "Need-blind: \"MIT practices need-blind admissions.\""
          },
          "tag": "f",
          "src": [
           "B7-O13"
          ]
         },
         "B7-O13"
        ]
       },
       {
        "cells": [
         {
          "zh": "Harvard",
          "en": "Harvard"
         },
         {
          "t": {
           "zh": "「Our admissions and financial aid processes are the same for all applicants」——所有申請人流程相同",
           "en": "\"Our admissions and financial aid processes are the same for all applicants\""
          },
          "tag": "f",
          "src": [
           "B7-O44"
          ]
         },
         "B7-O44"
        ]
       },
       {
        "cells": [
         {
          "zh": "Yale",
          "en": "Yale"
         },
         {
          "t": {
           "zh": "「without regard to their ability to pay」——不考慮支付能力",
           "en": "Considered \"without regard to their ability to pay\""
          },
          "tag": "f",
          "src": [
           "B7-O39"
          ]
         },
         "B7-O39"
        ]
       },
       {
        "cells": [
         {
          "zh": "Stanford",
          "en": "Stanford"
         },
         {
          "t": {
           "zh": "國際生的補助申請「will be a factor in our admission evaluation」",
           "en": "For international citizens, an aid request \"will be a factor in our admission evaluation\""
          },
          "tag": "f",
          "src": [
           "B7-O52"
          ]
         },
         "B7-O52"
        ]
       },
       {
        "cells": [
         {
          "zh": "Caltech",
          "en": "Caltech"
         },
         {
          "t": {
           "zh": "「need-aware for international students」",
           "en": "\"need-aware for international students\""
          },
          "tag": "f",
          "src": [
           "B7-O57"
          ]
         },
         "B7-O57"
        ]
       },
       {
        "cells": [
         {
          "zh": "Penn",
          "en": "Penn"
         },
         {
          "t": {
           "zh": "對加拿大、墨西哥以外的國際生 need-aware",
           "en": "Need-aware for international students not from Canada or Mexico"
          },
          "tag": "f",
          "src": [
           "B7-O64"
          ]
         },
         "B7-O64"
        ]
       },
       {
        "cells": [
         {
          "zh": "Rice",
          "en": "Rice"
         },
         {
          "t": {
           "zh": "國際申請人採「need-aware basis」",
           "en": "International applicants on a \"need-aware basis\""
          },
          "tag": "f",
          "src": [
           "B7-O69"
          ]
         },
         "B7-O69"
        ]
       },
       {
        "cells": [
         {
          "zh": "Harvey Mudd",
          "en": "Harvey Mudd"
         },
         {
          "t": {
           "zh": "「We are need aware in the admission process for international students」",
           "en": "\"We are need aware in the admission process for international students\""
          },
          "tag": "f",
          "src": [
           "B7-O91"
          ]
         },
         "B7-O91"
        ]
       },
       {
        "cells": [
         {
          "zh": "Duke",
          "en": "Duke"
         },
         {
          "t": {
           "zh": "未直接用 need-blind/aware 字眼；外籍生須在首次申請時申請補助，頁上「不吃虧」規則只針對美國公民",
           "en": "Neither term used; foreign citizens must request aid in the original application, and the no-disadvantage rule on the page is stated for US citizens"
          },
          "tag": "f",
          "src": [
           "B7-O43"
          ]
         },
         "B7-O43"
        ]
       },
       {
        "cells": [
         {
          "zh": "Georgetown",
          "en": "Georgetown"
         },
         {
          "t": {
           "zh": "未直接用 need-blind/aware 字眼；錄取後申請補助者可獲考慮「a limited number of need-based scholarship awards」",
           "en": "Neither term used; admitted students who request aid are considered for \"a limited number of need-based scholarship awards\""
          },
          "tag": "f",
          "src": [
           "B7-O98"
          ]
         },
         "B7-O98"
        ]
       }
      ]
     }
    },
    {
     "h": {
      "zh": "研究、創客、藝術補充資料與連結",
      "en": "Research, maker and arts supplements, and links"
     },
     "judgment": {
      "zh": "收補充資料的學校都說多數錄取者沒交；Stanford、CMU（Fine Arts 以外）、Harvey Mudd（只收摘要）、Illinois 基本上不收；MIT 與 Yale 的說法都偏向「證據勝過包裝」。",
      "en": "Every school that accepts supplements says most admits send none; Stanford, CMU (outside Fine Arts), Harvey Mudd (abstract only) and Illinois mostly do not accept them; MIT and Yale both favour documentation over polish."
     },
     "items": [
      {
       "t": {
        "zh": "MIT：「Creative portfolios are truly optional」；只交「both significant to you」且品質高的作品。（作品集頁，未標日期）",
        "en": "MIT: \"Creative portfolios are truly optional\". Submit only work \"both significant to you\" and of high quality. (creative portfolios page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O09"
       ]
      },
      {
       "t": {
        "zh": "MIT（Maker Portfolio）：「We are more interested in your build process than your end results.」——比起成品，更在意製作過程。（同上，未標日期）",
        "en": "MIT (Maker Portfolio): \"We are more interested in your build process than your end results.\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O09"
       ]
      },
      {
       "t": {
        "zh": "MIT：「There is no bonus for submitting a video reel or showing yourself on camera.」「We are not looking for flashy influencer content.」影片整份合計上限 2 分鐘。（同上，未標日期）",
        "en": "MIT: \"There is no bonus for submitting a video reel or showing yourself on camera.\" \"We are not looking for flashy influencer content.\" Video is capped at 2 minutes in total. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O09"
       ]
      },
      {
       "t": {
        "zh": "MIT：「We can only review projects where you have provided sufficient evidence」；Maker Portfolio 在 SlideRoom 上由 MIT 教授與校友審閱。（同上，未標日期）",
        "en": "MIT: \"We can only review projects where you have provided sufficient evidence\". Maker Portfolios are reviewed in SlideRoom by MIT faculty and alumni. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O09"
       ]
      },
      {
       "t": {
        "zh": "MIT（Research Supplement）：「focus on one project that is most significant to you」，並提名你的 PI 或指導者寫信。（同上，未標日期）",
        "en": "MIT (Research Supplement): \"focus on one project that is most significant to you\". Nominate your PI or mentor to write. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O09"
       ]
      },
      {
       "t": {
        "zh": "MIT：「we do not currently offer a portfolio to review creative writing」——目前沒有創意寫作作品集。（同上，未標日期）",
        "en": "MIT: \"we do not currently offer a portfolio to review creative writing\". (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O09"
       ]
      },
      {
       "t": {
        "zh": "Caltech：「Many applicants are admitted without submitting supplemental materials.」只在「only if they meaningfully add to your application」時才交。（supplemental materials 頁，未標日期）",
        "en": "Caltech: \"Many applicants are admitted without submitting supplemental materials.\" Submit \"only if they meaningfully add to your application.\" (supplemental materials page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O56"
       ]
      },
      {
       "t": {
        "zh": "Caltech：「only 42% of admitted students have participated in research prior to Caltech」——入學前做過研究的錄取者只有 42%。（同上，未標日期）",
        "en": "Caltech: \"only 42% of admitted students have participated in research prior to Caltech.\" (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O56"
       ]
      },
      {
       "t": {
        "zh": "Caltech：補充資料「are not required to prove scientific interest or potential」，不需要靠它證明科學興趣或潛力。（how we review 頁，未標日期）",
        "en": "Caltech: supplements \"are not required to prove scientific interest or potential.\" (how-we-review page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O55"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Most successful Yale applicants submit only the required application materials.」——多數錄取者只交必要資料。（supplementary 頁，未標日期）",
        "en": "Yale: \"Most successful Yale applicants submit only the required application materials.\" (supplementary page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O32"
       ]
      },
      {
       "t": {
        "zh": "Yale：「Full research papers are generally the most helpful.」視覺藝術作品集 5 到 8 件。（同上，未標日期）",
        "en": "Yale: \"Full research papers are generally the most helpful.\" Visual art portfolios: 5 to 8 pieces. (same page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O32"
       ]
      },
      {
       "t": {
        "zh": "Yale：「It's pretty unlikely that a weak review would truly hurt an application.」——評語偏弱也不太可能真的傷到申請。（官方 podcast 第 29 集，2022）",
        "en": "Yale: \"It's pretty unlikely that a weak review would truly hurt an application.\" (official podcast ep. 29, 2022)"
       },
       "tag": "f",
       "src": [
        "B7-O35"
       ]
      },
      {
       "t": {
        "zh": "Harvard：「Our standard application materials typically give us ample information」；補充資料「may be evaluated by faculty」。（application requirements 頁，未標日期）",
        "en": "Harvard: \"Our standard application materials typically give us ample information\". Supplements \"may be evaluated by faculty\". (application requirements page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O46"
       ]
      },
      {
       "t": {
        "zh": "Harvard：「You absolutely do not have to include anything supplementary to gain acceptance」——不交任何補充資料也能錄取。（application tips 頁，2026）",
        "en": "Harvard: \"You absolutely do not have to include anything supplementary to gain acceptance\". (application tips page, 2026)"
       },
       "tag": "f",
       "src": [
        "B7-O47"
       ]
      },
      {
       "t": {
        "zh": "Stanford：「we do not offer an option for applicants to upload supplementary materials」；寫作樣本與研究論文不會加入檔案，連結可能不會被看。（after you apply 頁，未標日期）",
        "en": "Stanford: \"we do not offer an option for applicants to upload supplementary materials\". Writing samples and research papers are not added; links may not be reviewed. (after-you-apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O50"
       ]
      },
      {
       "t": {
        "zh": "CMU：「Carnegie Mellon doesn't accept supplemental submissions」，包括履歷、藝術作品、作品集、錄音或網站；Fine Arts 作品集是例外。（requirements 頁，未標日期）",
        "en": "CMU: \"Carnegie Mellon doesn't accept supplemental submissions\", meaning résumés, artwork, portfolios, recordings or websites; Fine Arts portfolios are the exception. (requirements page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O76"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd：「we ask that students do not upload entire research papers」，改交摘要；音樂與藝術作品不另外收。（FAQ，未標日期）",
        "en": "Harvey Mudd: \"we ask that students do not upload entire research papers\"; send an abstract instead. Music and artwork are not accepted separately. (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O91"
       ]
      },
      {
       "t": {
        "zh": "Brown：藝術與音樂作品集「reviewed for us by faculty members」，由教授審閱；研究特別相關時可交摘要。（supplementary materials 頁，未標日期）",
        "en": "Brown: art and music portfolios are \"reviewed for us by faculty members\". Applicants may send a research abstract if it is especially relevant. (supplementary materials page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O72"
       ]
      },
      {
       "t": {
        "zh": "Duke：一份選交的藝術補充資料，「evaluated by a Duke University faculty member」，限打算在 Duke 繼續該藝術的學生。（apply 頁，未標日期）",
        "en": "Duke: one optional arts supplement, \"evaluated by a Duke University faculty member\" in that department, for students who will continue the art at Duke. (apply page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O43"
       ]
      },
      {
       "t": {
        "zh": "Johns Hopkins：額外資料「may include pictures of art, research abstracts」；只有在「contribute in a substantive way or provide new information」時才送。（FAQ，未標日期）",
        "en": "Johns Hopkins: additional materials \"may include pictures of art, research abstracts\". Send them only if they \"contribute in a substantive way or provide new information\". (FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O29"
       ]
      },
      {
       "t": {
        "zh": "Illinois：作品集與試演只限部分 Fine and Applied Arts 申請人；未要求的資料會被移除。（first-year FAQ，未標日期）",
        "en": "Illinois: portfolios and auditions are required only for some Fine and Applied Arts applicants; unsolicited materials are removed. (first-year FAQ, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O86"
       ]
      },
      {
       "t": {
        "zh": "Olin：Schoolhouse.world 作品集是選交的補充資料。（what we look for 頁，未標日期）",
        "en": "Olin: a Schoolhouse.world portfolio is an optional supplement. (what-we-look-for page, undated)"
       },
       "tag": "f",
       "src": [
        "B7-O89"
       ]
      },
      {
       "t": {
        "zh": "在本頁直接讀過的學校可分成兩群：收補充資料並交給教授看的（MIT、Yale、Harvard、Brown、Duke、Caltech、Hopkins），以及只收很窄範圍或不收的（Stanford、CMU 的 Fine Arts 以外、Harvey Mudd 只收摘要、Illinois）。所有收補充資料的學校也都說多數錄取者沒交。",
        "en": "Among schools read directly here there are two groups. Some accept supplements and route them to faculty: MIT, Yale, Harvard, Brown, Duke, Caltech and Hopkins. Some accept only narrowly or not at all: Stanford, CMU (outside Fine Arts), Harvey Mudd (abstract only) and Illinois. Every school that accepts supplements also says most admits send none."
       },
       "tag": "i"
      },
      {
       "t": {
        "zh": "對品質最具體的兩則官方說法是 MIT 的「build process」與「sufficient evidence」，以及 Yale 的「full research papers are generally the most helpful」。兩者都偏向留存證據而非包裝，和主文書那一節的建議一致。",
        "en": "The two most specific official statements on quality are MIT's \"build process\" and \"sufficient evidence\" rule and Yale's \"full research papers are generally the most helpful\". Both reward documentation over polish, which agrees with the essay guidance above."
       },
       "tag": "i"
      }
     ]
    }
   ]
  },
  {
   "id": "surprises",
   "h": {
    "zh": "不容易查到的發現",
    "en": "Findings that are hard to find"
   },
   "judgment": {
    "zh": "許多常見說法與學校自己的頁面不符，而學校的頁面之間也常常互相矛盾。",
    "en": "Much common advice does not match schools' own pages, and schools' pages often contradict each other."
   },
   "intro": {
    "zh": "從美國 30 校各份研究筆記的「非顯而易見發現」中挑出。每則都有出處；推論與事實分開標示。",
    "en": "Drawn from the non-obvious findings of every research note on the 30 US schools. Each item is cited, and inferences are tagged apart from facts."
   },
   "subs": [
    {
     "h": {
      "zh": "申請系統與表格",
      "en": "Systems and forms"
     },
     "judgment": {
      "zh": "「會員」不等於「收這個申請系統」，表格的欄位限制也常常只寫在非系統頁面上。",
      "en": "Membership does not mean a school takes that application, and field limits often appear only on non-system pages."
     },
     "items": [
      {
       "t": {
        "zh": "Coalition 會員不等於收 Coalition 申請：Harvard、Olin、Rice 是 Coalition 會員，但它們的新生申請頁只列 Common App（和 QuestBridge）。Duke 出現在 Scoir 的收件學校名單上，但自己的頁面只讓轉學生用 Coalition with Scoir。",
        "en": "Coalition membership does not mean accepting the Coalition application: Harvard, Olin and Rice are members, but their first-year pages name only Common App (and QuestBridge). Duke appears on Scoir's list, yet its own page limits Coalition with Scoir to transfer applicants."
       },
       "tag": "f",
       "src": [
        "A2-S17",
        "A2-S35",
        "A2-S47",
        "A2-S52",
        "A2-S16",
        "A2-S50"
       ]
      },
      {
       "t": {
        "zh": "Coalition 的獨立申請入口自 2022 年 8 月 1 日起由 Scoir 取代，比常被引用的「2023 年」早一年。Universal College Application 2026/2027 仍開放，但只列一所學校。",
        "en": "The Coalition's standalone portal was replaced by Scoir from 1 August 2022, a year earlier than the \"2023\" often repeated. The Universal College Application is still open for 2026/2027 but lists a single school."
       },
       "tag": "f",
       "src": [
        "A2-S19",
        "A2-S31",
        "A2-S32"
       ]
      },
      {
       "t": {
        "zh": "UC 在 2026 年 9 月告訴輔導老師：Additional Comments「不應該是第五篇 PIQ，我們不會考慮」。Academic history 的 Additional comments 上限是 550 個字元；流傳的「550 words」在 UC 頁面上找不到。",
        "en": "UC told counselors in September 2026 that the additional comments box \"should NOT be a 5th PIQ. We will not consider that.\" The Academic history additional-comments field is limited to 550 characters; the \"550 words\" figure in circulation was not found on UC pages."
       },
       "tag": "f",
       "src": [
        "A2-S5",
        "C1-S39",
        "C1-S40"
       ]
      },
      {
       "t": {
        "zh": "三所學校在申請階段收的是結構化的自填成績，不是成績單：UC（申請表內）、University of Washington（送出後填 STARS）、UIUC（送出後寄連結）。",
        "en": "Three schools collect the academic record as structured self-report rather than a transcript at application: UC (inside the application), Washington (STARS, after submission) and UIUC (link emailed after submission)."
       },
       "tag": "f",
       "src": [
        "A2-S3",
        "A2-S53",
        "A2-S46"
       ]
      },
      {
       "t": {
        "zh": "Common App 以 latin1 儲存欄位文字。",
        "en": "Common App stores field text in latin1."
       },
       "tag": "f",
       "src": [
        "A4-S122"
       ],
       "sub": [
        {
         "t": {
          "zh": "在表單裡打中文字，送到學校時可能變成亂碼，所以應該用羅馬拼音。",
          "en": "Chinese characters typed into the form may arrive unreadable, so entries should be romanized."
         },
         "tag": "i",
         "src": [
          "A4-S122"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "Northwestern 2026–27 取消必交的 personal essay：必交的只有一篇 300 字補充文章，Common App personal essay 改為選交，交了仍會被讀。",
        "en": "Northwestern dropped the required personal essay for 2026–27: the required writing is one 300-word supplement, and the Common App personal essay is optional but still read if sent."
       },
       "tag": "f",
       "src": [
        "A5b-S18",
        "A5b-S19"
       ]
      },
      {
       "t": {
        "zh": "學校頁面自相矛盾：Columbia 說有「六題」150 字短答，實際列出五題 150 字加一題 100 字清單；Brown 說所有人都要交四篇，PLME 與 BRDD 段落卻寫「三篇」。",
        "en": "Schools contradict themselves: Columbia says \"six short answer questions\" at 150 words but lists five plus a 100-word list; Brown says four essays are required of all, while its PLME and BRDD paragraphs refer to \"the three essays.\""
       },
       "tag": "f",
       "src": [
        "A5a-S37",
        "A5a-S47"
       ]
      },
      {
       "t": {
        "zh": "Mastery Transcript Consortium 的「MT Ready」標記涵蓋「錄取過持此成績單的學生」或「參加過培訓」的大學，30 校在它的資料裡都有這個標記；但 UC 自己的政策（2023-01-05 備忘錄）只以「例外錄取」處理沒有 GPA 的 mastery transcript。",
        "en": "The Mastery Transcript Consortium's \"MT Ready\" flag covers colleges that admitted a student with the record or attended training, and all 30 carry it in its data; yet UC's own policy (memo of 2023-01-05) routes GPA-less mastery transcripts to admission by exception only."
       },
       "tag": "f",
       "src": [
        "C1-S2",
        "C1-S7"
       ],
       "sub": [
        {
         "t": {
          "zh": "這個標記不能當作大學政策的證據。",
          "en": "The flag is not evidence of college policy."
         },
         "tag": "i",
         "src": [
          "C1-S2",
          "C1-S28"
         ]
        }
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "截止日與時程",
      "en": "Deadlines and calendars"
     },
     "judgment": {
      "zh": "作品集截止日常常和申請截止日不同天，學校自己的頁面也常給出兩個日期。",
      "en": "Portfolio deadlines often differ from application deadlines, and schools' own pages often give two dates."
     },
     "items": [
      {
       "t": {
        "zh": "Columbia 與 Princeton 在 2027 秋季入學仍採 test-optional，但已宣布下一輪（2027–28）起要求考試；Harvey Mudd 則從 2028 秋季入學起要求。",
        "en": "Columbia and Princeton stay test-optional for fall 2027 entry but have announced required testing from the 2027–28 cycle; Harvey Mudd requires testing from fall 2028 entry."
       },
       "tag": "f",
       "src": [
        "A3a-S47",
        "A3a-S42",
        "A3b-S8"
       ]
      },
      {
       "t": {
        "zh": "Duke 官方頁面說 2026–27 申請季是 test-optional。這次研究的任務說明和一些第三方網站把 Duke 歸為恢復考試的學校，官方頁面不支持這個說法。",
        "en": "Duke's own page says it is test-optional for the 2026–27 cycle. The brief for this research and several secondary sites grouped Duke with schools that reinstated testing; the official page does not support that."
       },
       "tag": "f",
       "src": [
        "A3b-S15"
       ]
      },
      {
       "t": {
        "zh": "Yale 是這一組裡唯一有 2026–27 考試政策變動來源的學校：AP 與 IB 不再能滿足考試要求。Carnegie Mellon 多數學院仍是 test-flexible，但 School of Computer Science 要求 SAT 或 ACT。",
        "en": "Yale is the only school in its set with a sourced 2026–27 testing change: AP and IB no longer satisfy the requirement. Carnegie Mellon remains test-flexible for most colleges, but its School of Computer Science requires SAT or ACT."
       },
       "tag": "f",
       "src": [
        "A3a-S35",
        "A3a-S36",
        "A3a-S73"
       ]
      },
      {
       "t": {
        "zh": "好幾所學校的作品集截止日比申請截止日晚：Brown SlideRoom 11/4、1/7；Princeton 藝術 11/6、1/8；Cornell 音樂 11/6、1/7；Caltech 補充材料 11/6、1/10。Stanford 相反：藝術申請者要在 10/15 前送出 Common App，比一般 REA 早兩週。Cornell 其他學院的作品集則與申請同日（ED 11/1）截止。",
        "en": "Several portfolio deadlines fall after the application deadline: Brown SlideRoom Nov 4 / Jan 7, Princeton arts Nov 6 / Jan 8, Cornell music Nov 6 / Jan 7, Caltech supplements Nov 6 / Jan 10. Stanford runs the other way: arts applicants file the Common App by Oct 15, two weeks before standard REA. Cornell's portfolios for other colleges are due with the application (Nov 1 ED)."
       },
       "tag": "f",
       "src": [
        "A3a-S58",
        "A3a-S41",
        "A3a-S62",
        "A3a-S18",
        "B3-S13",
        "B3-S32"
       ]
      },
      {
       "t": {
        "zh": "學校頁面互相矛盾的日期：Brown RD 放榜「四月初」vs「三月底」；Cornell RD 放榜「三月底」vs「四月初」；Harvard 同一頁寫 REA 分數「十一月底」又寫「十月底」；Carnegie Mellon 三處頁面給出 ED 截止日 11/1、11/2、11/3。",
        "en": "Conflicting dates on schools' own pages: Brown RD release \"early April\" vs \"late March\"; Cornell \"late March\" vs \"early April\"; Harvard REA scores \"by the end of November\" and \"by the end of October\" on one page; Carnegie Mellon gives Nov 1, Nov 2 and Nov 3 as its ED deadline on different pages."
       },
       "tag": "f",
       "src": [
        "A3a-S57",
        "A3a-S58",
        "A3a-S62",
        "A3a-S64",
        "A3a-S26",
        "A5a-S68",
        "A5a-S69"
       ],
       "sub": [
        {
         "t": {
          "zh": "遇到兩個日期時，放榜以較晚者預期，截止以較早者準備。",
          "en": "Where two dates appear, expect the later release date and prepare for the earlier deadline."
         },
         "tag": "i",
         "src": [
          "A3a-S57",
          "A3a-S58",
          "A5a-S68"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "UT Austin 的早期截止日是 10/15，比這一組其他學校都早；補充材料 10/22 截止。UCLA 自己的頁面在一句話寫 10/1–12/1、在表格寫 10/1–11/30，UC 系統頁寫 11/30。",
        "en": "UT Austin's early date is Oct 15, earlier than any other school in its set, with supplemental materials due Oct 22. UCLA's own page gives Oct 1–Dec 1 in a sentence and Oct 1–Nov 30 in a table; the UC system page gives Nov 30."
       },
       "tag": "f",
       "src": [
        "A3b-S33",
        "A3b-S29",
        "A3b-S23"
       ]
      },
      {
       "t": {
        "zh": "Georgia Tech 的國際申請者只能申請 EA2（11/2），EA2 結果一月下旬才出來。Georgetown 的 EA 不具約束力，但不允許同時申請其他學校的 ED。",
        "en": "Georgia Tech's international applicants are eligible only for EA2 (Nov 2), with decisions in late January. Georgetown's EA is non-binding but bars applying to any binding ED program elsewhere."
       },
       "tag": "f",
       "src": [
        "A3a-S76",
        "A3a-S69"
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "推薦信",
      "en": "Letters"
     },
     "judgment": {
      "zh": "「兩封老師推薦信」不是通則：有的學校只要一封，有的完全不收。",
      "en": "\"Two teacher letters\" is not a rule: some schools want one, and some accept none."
     },
     "items": [
      {
       "t": {
        "zh": "Penn、Carnegie Mellon、Georgetown 只要求一封老師推薦信；Georgia Tech 一封都不要求，所有推薦信都是選交，且只接受輔導老師與老師的信，最多三封。",
        "en": "Penn, Carnegie Mellon and Georgetown require one teacher letter, not two. Georgia Tech requires none, labels all letters optional, accepts them only from the counselor and teachers, and caps them at three."
       },
       "tag": "f",
       "src": [
        "A5a-S42",
        "A5a-S67",
        "A5a-S63",
        "A5a-S73",
        "A5a-S79",
        "B3-S25"
       ]
      },
      {
       "t": {
        "zh": "Cornell 工程學院並非要求「數學老師和科學老師各一封」：兩封中有一封要來自數學、科學或資訊老師，另一封可以是任何科目。Harvey Mudd 則要一封 STEM、一封人文／社會科學／藝術。",
        "en": "Cornell Engineering does not require a math and a science letter: one of the two must come from a math, science or computer science teacher, and the other may be any subject. Harvey Mudd wants one STEM letter and one from humanities, social sciences or arts."
       },
       "tag": "f",
       "src": [
        "A5a-S54",
        "A5b-S12"
       ]
      },
      {
       "t": {
        "zh": "UIUC、University of Washington、UCLA 不收推薦信。UT Austin 推薦信選交、上限兩封，並鼓勵高中以外的人寫。",
        "en": "UIUC, Washington and UCLA do not accept letters. UT Austin makes them optional, caps them at two, and encourages letters from outside the high school."
       },
       "tag": "f",
       "src": [
        "A5b-S3",
        "A5b-S42",
        "A5b-S34",
        "A5b-S38"
       ]
      },
      {
       "t": {
        "zh": "Carnegie Mellon 接受第三封推薦信，但委員會「只考慮兩封」。Caltech 是這一組唯一在推薦信頁面列出教練、指導者、雇主可寫額外推薦信的學校，交研究論文時則必須附研究指導者的信。",
        "en": "Carnegie Mellon accepts a third letter, but its committees \"consider only two.\" Caltech is the only school in its set that names coaches, mentors and employers as extra recommenders on its letters page, and it requires a research-mentor letter with any research paper."
       },
       "tag": "f",
       "src": [
        "A5a-S67",
        "A5a-S10"
       ]
      },
      {
       "t": {
        "zh": "UC Berkeley 的「受邀推薦信」政策在現行網站上找不到：新生要求、清單、FAQ、輔導老師頁面都沒提，站內搜尋「recommendation」也沒有結果；唯一找到的官方描述是一份未標日期的舊指南（政策標示「as of fall 2015」）。",
        "en": "UC Berkeley's invited-letter policy cannot be found on its current site: the requirements, checklist, FAQ and counselor pages are silent, and its site search returns nothing for \"recommendation\"; the only official description found is an undated older guide (policy \"as of fall 2015\")."
       },
       "tag": "f",
       "src": [
        "A5b-S28",
        "A5b-S29",
        "A5b-S25",
        "A5b-S30",
        "A2-S11"
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "國際申請者",
      "en": "International applicants"
     },
     "judgment": {
      "zh": "財務文件的時點、表格與一次性規則，各校差異比申請截止日還大。",
      "en": "Financial-document timing, forms and one-time rules vary more across schools than application deadlines do."
     },
     "items": [
      {
       "t": {
        "zh": "Princeton 不用 CSS Profile 也不用 IDOC，而是用自己的 PFAA（EA 截止 11/9），外國報稅單要附原件與認證翻譯。Penn 也不收 IDOC，文件走自己的入口。",
        "en": "Princeton uses neither the CSS Profile nor IDOC but its own PFAA (EA deadline Nov 9), with foreign tax returns sent as the original plus a certified translation. Penn does not accept IDOC either; documents go through its own portal."
       },
       "tag": "f",
       "src": [
        "A4-S26",
        "A4-S36"
       ]
      },
      {
       "t": {
        "zh": "有些學校在申請時就要所有國際申請者交財務文件，不只申請補助的人：Johns Hopkins 要 Certification of Finances，沒交申請就不完整；Rice 要 International Student Financial Statement 加銀行對帳單，不收報稅文件，並設 $101,634 的門檻，低於此額要說明費用來源。",
        "en": "Some schools require financial documents from every international applicant at application, not only aid applicants: Johns Hopkins requires a Certification of Finances or the file is incomplete; Rice requires an International Student Financial Statement plus bank statements, accepts no tax documents, and sets a $101,634 threshold below which applicants must explain how costs will be met."
       },
       "tag": "f",
       "src": [
        "A4-S80",
        "A4-S87",
        "A3b-S22"
       ]
      },
      {
       "t": {
        "zh": "補助申請只有一次機會：申請時沒有提出，之後不再受理的學校包括 Caltech、Stanford、Columbia、Penn、Cornell、Harvey Mudd、Rice；Georgetown 第一年沒給獎學金，之後各年也不給。",
        "en": "The aid request is one-time. If aid is not requested at application, later requests are not considered at Caltech, Stanford, Columbia, Penn, Cornell, Harvey Mudd and Rice; Georgetown gives no scholarship in later years if none is given in the first."
       },
       "tag": "f",
       "src": [
        "A4-S7",
        "A4-S11",
        "A4-S31",
        "A4-S36",
        "A4-S45",
        "A4-S76",
        "A4-S87",
        "A4-S50"
       ]
      },
      {
       "t": {
        "zh": "Duke 公開說，申請補助的國際申請者錄取率「通常不到整體錄取率的一半」，而且補助必須在原始申請中提出。30 校中只有 Duke 公布這種比較。",
        "en": "Duke states that aid-seeking international applicants are admitted at \"usually less than half\" the overall rate, and aid must be requested in the original application. It is the only school of the 30 that publishes such a comparison."
       },
       "tag": "f",
       "src": [
        "A4-S82",
        "A3b-S15"
       ]
      },
      {
       "t": {
        "zh": "英文考試的有效期間有時很窄：Penn 只收 2025-04-01 以後的成績；Carnegie Mellon 只收兩年內的成績；UCLA 要在 11/30 申請截止前考完，比 UC 系統規定早；Berkeley 要在 1/31 前；University of Washington 要在 12/31 前。Columbia 則允許 SAT Reading and Writing ≥700 或 ACT English/Reading ≥29 免交英文考試。",
        "en": "English-test windows are narrow at some schools: Penn accepts only tests taken on or after 2025-04-01; Carnegie Mellon accepts scores up to two years old; UCLA requires tests by the Nov 30 deadline, earlier than the UC system rule; Berkeley by Jan 31; Washington by Dec 31. Columbia waives the English test for SAT Reading and Writing ≥700 or ACT English/Reading ≥29."
       },
       "tag": "f",
       "src": [
        "A4-S32",
        "A4-S51",
        "A4-S107",
        "A4-S99",
        "A4-S103",
        "A4-S117",
        "A4-S27"
       ]
      },
      {
       "t": {
        "zh": "國際補助文件的時點各校相反：Swarthmore 錄取後才要文件，給 7 天交 CSS Profile、Certificate of Finances 與銀行對帳單；Caltech 分三個時點（放榜前 CSS Profile、錄取後非報稅聲明、入學後 2027/7/15 前報稅單）；Harvey Mudd ED I 在 CSS Profile（11/15）與 IDOC（12/1）之間只有約兩週，IDOC 要截至 2026/10/31 的銀行對帳單與附英文翻譯的 2025 年報稅單。",
        "en": "Aid-document timing runs in opposite directions: Swarthmore asks only after admission and gives seven days for the CSS Profile, Certificate of Finances and bank statements; Caltech splits documents across three points (CSS Profile before decisions, a non-filer statement after admission, the tax return after matriculation by Jul 15, 2027); Harvey Mudd ED I leaves about two weeks between the CSS Profile (Nov 15) and IDOC (Dec 1), which needs bank statements ending Oct 31, 2026 and a signed 2025 foreign tax return with English translation."
       },
       "tag": "f",
       "src": [
        "A4-S96",
        "A3a-S13",
        "A3a-S14",
        "A3b-S9"
       ]
      },
      {
       "t": {
        "zh": "UC Berkeley、UCLA、University of Washington 在讀過的頁面上不給國際大學部學生 need-based aid；UIUC 沒有聯邦或州補助，可能有學院或系所獎學金。University of Washington 要求非美國國家課程學校的學生在申請時就交掃描的非正式成績單與官方英文翻譯，UC 與 UIUC 則錄取後才要文件。",
        "en": "UC Berkeley, UCLA and Washington give no need-based aid to international undergraduates on the pages read; UIUC has no federal or state aid but may have college or department scholarships. Washington requires a scanned unofficial transcript with an official English translation at application from students at national-curriculum schools abroad, while UC and UIUC want no documents until admission."
       },
       "tag": "f",
       "src": [
        "A3b-S28",
        "A3b-S30",
        "A3b-S38",
        "A3b-S4",
        "A4-S116",
        "A4-S100",
        "A4-S106",
        "A4-S69"
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "作品集與研究",
      "en": "Portfolios and research"
     },
     "judgment": {
      "zh": "舊建議會過期，研究論文也不一定能拿來滿足其他要求。",
      "en": "Old advice expires, and a research paper does not necessarily satisfy other requirements."
     },
     "items": [
      {
       "t": {
        "zh": "MIT 2013 年的官方 FAQ 曾勸申請者不要寄原始碼；2026–27 的頁面反過來要求程式專案附 codebase 與可運作的 demo。",
        "en": "MIT's 2013 FAQ discouraged sending source code; the current page requires the codebase and a working demo for every code project."
       },
       "tag": "f",
       "src": [
        "B3-S5",
        "B3-S1"
       ],
       "sub": [
        {
         "t": {
          "zh": "引用舊文章給的作品集建議，可能已經過時。",
          "en": "Portfolio advice drawn from older posts may be out of date."
         },
         "tag": "i",
         "src": [
          "B3-S5"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "MIT 2015 年的資料：男性申請者 7.4% 交 Maker Portfolio，女性 2.8%；2016 年追蹤時差距只縮小 0.6 個百分點。同年 MIT 招生辦公室寫道，每份 Maker Portfolio 至少由一位 Engineering Advisory Board 成員審閱，評語加入申請檔案，提交「既非必要也非充分」。",
        "en": "MIT reported in 2015 that 7.4% of male and 2.8% of female applicants submitted a maker portfolio, a gap that had narrowed by only 0.6 points by 2016. The same year the admissions office wrote that each maker portfolio is reviewed at least once by an Engineering Advisory Board member, the evaluation is added to the folder, and submitting is \"neither necessary nor sufficient.\""
       },
       "tag": "f",
       "src": [
        "B3-S7",
        "B3-S8"
       ],
       "sub": [
        {
         "t": {
          "zh": "2015 年的審閱方式是否仍適用，現行頁面沒有說。",
          "en": "Whether the 2015 review arrangement still applies is not stated on current pages."
         },
         "tag": "i",
         "src": [
          "B3-S7"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "以具名類別存在的 Maker／工程作品集，在讀過的頁面中只有 MIT 和 Caltech 有；讀過的學校頁面沒有一頁提到 Regeneron STS 或 ISEF 的名稱。",
        "en": "A named maker/engineering portfolio category exists only at MIT and Caltech among the pages read, and no school page read mentions Regeneron STS or ISEF by name."
       },
       "tag": "f",
       "src": [
        "B2-S1",
        "B2-S6"
       ]
      },
      {
       "t": {
        "zh": "Princeton 要求一篇英文、社會或歷史課的已評分寫作，並明說偏好論證性寫作，「而不是科學研究」；招生辦公室在意的是寫作品質而不是分數。",
        "en": "Princeton requires a graded paper from English, social studies or history and prefers expository writing \"rather than science research\"; the office is \"more interested in the quality of the writing than the grade.\""
       },
       "tag": "f",
       "src": [
        "B5-S18",
        "A5a-S34"
       ],
       "sub": [
        {
         "t": {
          "zh": "研究論文不能拿來充當這項要求；以 STEM 為主的申請者仍需準備一篇人文類論文。",
          "en": "A research paper cannot double as this requirement; a STEM-focused applicant still needs a humanities paper."
         },
         "tag": "i",
         "src": [
          "B5-S18"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "有些課程是「必修」而非建議：Caltech（微積分、物理、化學，「沒有例外」）、Cornell Duffield Engineering（微積分、物理、化學）、Harvey Mudd（微積分、化學、物理）、Olin（微積分、物理）。MIT、Stanford、Yale、Princeton、Columbia 寫的是建議。",
        "en": "Some course rules are required, not recommended: Caltech (calculus, physics, chemistry, \"no exceptions\"), Cornell Duffield Engineering (calculus, physics, chemistry), Harvey Mudd (calculus, chemistry, physics), Olin (calculus, physics). MIT, Stanford, Yale, Princeton and Columbia state theirs as recommendations."
       },
       "tag": "f",
       "src": [
        "A5a-S11",
        "A5a-S54",
        "A5a-S5",
        "A5a-S20",
        "A5a-S30",
        "A5a-S33",
        "A5a-S36",
        "A5b-S10",
        "A5b-S7"
       ]
      },
      {
       "t": {
        "zh": "iGEM 把 Attributions Form（「隊員做了什麼、其他人做了什麼」）列為 Bronze 等級的必要項目，Wiki 會凍結並永久存檔；ISEF 的 Form 2C 由指導成人而非學生填寫，要寫學生獨立完成的工作與具體步驟。",
        "en": "In iGEM an Attributions Form (\"what your team members did and what others did\") is a Bronze-level requirement, and Wikis are frozen and permanently archived; ISEF Form 2C is completed by the supervising adult, not the student, and asks for the student's independent work and specific procedures."
       },
       "tag": "f",
       "src": [
        "C1-S42",
        "C1-S43",
        "C1-S45"
       ],
       "sub": [
        {
         "t": {
          "zh": "這兩者是現成、由第三方保存、有時間戳記的貢獻紀錄，也是第三方證明實驗時數與角色最接近的公開範本。",
          "en": "These are ready-made, third-party-held, timestamped contribution records, and the closest public templates for a third-party attestation of lab hours and role."
         },
         "tag": "i",
         "src": [
          "C1-S42",
          "C1-S45"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "幾所學校的 homeschool 頁面已經在要類似作品集的證據：Penn 提到 mastery、課綱與實驗工作；Swarthmore 要研究論文與獎項的日期與來源；MIT 提到作品集評估。",
        "en": "Several homeschool pages already ask for portfolio-like evidence: Penn mentions mastery, syllabi and lab work; Swarthmore asks for research papers and the dates and sources of awards; MIT mentions a portfolio evaluation."
       },
       "tag": "f",
       "src": [
        "C1-S21",
        "C1-S25",
        "C1-S18"
       ],
       "sub": [
        {
         "t": {
          "zh": "這些頁面是「沒有分數的紀錄會被怎麼讀」最有力的官方先例。",
          "en": "These pages are the strongest official precedent for how an ungraded record is read."
         },
         "tag": "i",
         "src": [
          "C1-S21",
          "C1-S25",
          "C1-S18"
         ]
        }
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "AI 政策",
      "en": "AI policy"
     },
     "judgment": {
      "zh": "各校的 AI 規定從「可用來改善可讀性」到「只限拼字文法」都有，理由也不同。",
      "en": "School AI rules range from \"may assist with readability\" to \"spelling and grammar only,\" for different stated reasons."
     },
     "items": [
      {
       "t": {
        "zh": "UC 明文允許用生成式 AI「協助提升可讀性」，這段文字標示 2023 年 8 月；Brown 則禁止拼字與文法以外的一切用途。",
        "en": "UC explicitly permits generative AI \"to assist with readability,\" in text dated August 2023; Brown bans everything beyond spelling and grammar."
       },
       "tag": "f",
       "src": [
        "C4-S5",
        "C4-S1"
       ]
      },
      {
       "t": {
        "zh": "30 校中只有 Penn 的官方文字把「能不能口頭解釋」當成準備好的標準，也只有 Penn 描述了自己怎麼用 AI（行政用途）。",
        "en": "Penn is the only school of the 30 whose official text makes oral explainability the test of readiness, and the only one that describes its own AI use (administrative)."
       },
       "tag": "f",
       "src": [
        "C4-S12"
       ]
      },
      {
       "t": {
        "zh": "Swarthmore 要求申請中由 AI 產生的內容要有「適當的註明或引用」；讀過的官方頁面中沒有其他學校訂揭露規則。Cornell 是唯一在 AI 禁令中點名作品集作品的學校。",
        "en": "Swarthmore requires that AI-generated content in an application carry \"proper acknowledgement or citation\"; no other official page read sets a disclosure rule. Cornell is the only school read that names portfolio works in its AI prohibition."
       },
       "tag": "f",
       "src": [
        "C4-S14",
        "C4-S13"
       ]
      },
      {
       "t": {
        "zh": "MIT 說它的資訊保護政策不允許在閱卷中使用生成式 AI，這是資料治理上的理由，不是評估上的理由。Georgia Tech 則把 AI 定位為合作者，「特別是在你沒有其他協助管道時」。",
        "en": "MIT says its information-protection policies would not permit generative AI in reading, a data-governance reason rather than an evaluation one. Georgia Tech frames AI as a collaborator, \"particularly when you do not have access\" to other help."
       },
       "tag": "f",
       "src": [
        "C4-S15",
        "C4-S21"
       ]
      },
      {
       "t": {
        "zh": "Olin 關於複製貼上的 AI 句子，與 Caltech 的一條禁止用途幾乎逐字相同。",
        "en": "Olin's AI sentence on copy-pasting matches a Caltech prohibited-use item nearly word for word."
       },
       "tag": "f",
       "src": [
        "C4-S30",
        "C4-S9"
       ],
       "sub": [
        {
         "t": {
          "zh": "是否有一方參考另一方，兩校都沒有說明。",
          "en": "Whether one drew on the other is not stated."
         },
         "tag": "i",
         "src": [
          "C4-S30",
          "C4-S9"
         ]
        }
       ]
      },
      {
       "t": {
        "zh": "Caltech 的官方頁面在 2026-11-07 對申請季的標示不一致：AI 指引寫 Fall 2026 申請者，文章頁寫 Fall 2027。",
        "en": "Caltech's official pages disagreed on the cycle label on 2026-11-07: its AI guidelines say Fall 2026 applicants, its essays page Fall 2027."
       },
       "tag": "f",
       "src": [
        "C4-S9",
        "C4-S10"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "sequencing",
   "h": {
    "zh": "工程與生物申請者的時序陷阱",
    "en": "Sequencing traps for engineering and biology applicants"
   },
   "judgment": {
    "zh": "對要交作品集或研究材料的人來說，真正綁住你的日期往往不是申請截止日：最早的比申請日提前 17 天（Stanford REA 藝術作品集），最晚的比申請日延後 3 天（Brown），而 MIT EA 與 Caltech REA 的考試必須在 11-30 之前「考完」。",
    "en": "For anyone submitting a portfolio or research material, the binding date is usually not the application deadline: the earliest falls 17 days before it (Stanford REA arts portfolio), the latest 3 days after it (Brown), and for MIT EA and Caltech REA the test must be taken before 30 November."
   },
   "intro": {
    "zh": "這一節不是新的研究，而是把時程頁上已經逐條標註來源的日期，按「哪一個日期先到」重排一次，因為工程與生物申請者多出作品集、研究補充與指導者推薦三條線。每一則都重新引用時程頁與作品集頁用的同一份來源。要看完整按日排列的時程，請到時程頁。",
    "en": "This section is not new research. It re-sorts dates that the timeline page already cites, one by one, by which date arrives first, because engineering and biology applicants carry three extra lines: the portfolio, the research supplement and the mentor's letter. Every item re-cites the same source the timeline and portfolio pages use. For the full date-ordered calendar, see the timeline page."
   },
   "subs": [
    {
     "h": {
      "zh": "作品集的截止日不等於申請的截止日",
      "en": "A portfolio's deadline is not the application's deadline"
     },
     "judgment": {
      "zh": "同一個申請季裡，作品集的日期可能在申請日之前、同一天、或之後，三種都有。",
      "en": "Within one cycle a portfolio date can fall before, on, or after the application date. All three happen."
     },
     "items": [
      {
       "t": {
        "zh": "Stanford 要交藝術作品集的人，Common App 必須比別人早送：REA 的申請日是 11-01，但附作品集者 10-15 就要送出 Common App，作品本身 10-20 到期；RD 的申請日是 2027-01-05，附作品集者 12-05 送出。這是本站 30 校裡唯一一個「作品集把申請日本身往前推」的例子。",
        "en": "At Stanford, an applicant with an arts portfolio files the Common App earlier than everyone else: the REA deadline is 1 Nov, but a portfolio applicant files the Common App by 15 Oct, with the materials due 20 Oct; for RD (5 Jan 2027) the Common App is due 5 Dec. Among the 30 schools this is the only case where a portfolio moves the application date itself forward."
       },
       "tag": "f",
       "src": [
        "A3a-S18"
       ]
      },
      {
       "t": {
        "zh": "反方向也存在：11-01 申請截止之後才到期的補充材料有 Brown 的 SlideRoom 作品集（11-04）、Princeton 的藝術補充與 Cornell 的音樂補充（都是 11-06）。送出申請不等於這一輪結束。",
        "en": "The opposite also happens: supplements due after the 1 Nov application deadline include Brown's SlideRoom portfolios (4 Nov) and Princeton's arts supplement and Cornell's music supplement (both 6 Nov). Submitting the application does not close the round."
       },
       "tag": "f",
       "src": [
        "A3a-S58",
        "A3a-S41",
        "A3a-S62"
       ]
      },
      {
       "t": {
        "zh": "MIT 走第三種：Maker Portfolio、Research Supplement 與藝術作品集都與申請同日截止，而且全部是“truly optional”。",
        "en": "MIT is the third pattern: the Maker Portfolio, the Research Supplement and the arts portfolios all share the application deadline, and all are “truly optional”."
       },
       "tag": "f",
       "src": [
        "B3-S1",
        "B3-S2"
       ]
      },
      {
       "t": {
        "zh": "Columbia 的補充材料截止日是 ED 11-01、RD 2027-01-01，和申請同日；同一頁也寫研究摘要「通常一頁」。這兩點是在瀏覽器裡直接讀頁面確認的，不是搜尋摘要。",
        "en": "Columbia's supplement deadlines are 1 Nov (ED) and 1 Jan 2027 (RD), the same days as the application; the same page says a research abstract is “typically one page in length”. Both were read from the rendered page in a browser, not from a search excerpt."
       },
       "tag": "f",
       "src": [
        "V02"
       ]
      },
      {
       "t": {
        "zh": "[推論] 因此對工程或生物申請者來說，真正要盯的是三個日期裡最早的那一個：申請本身、作品集上傳、以及在 SlideRoom 裡由指導者寫的那封信——最後一項不在申請者自己手上。",
        "en": "[Inference] The date to plan against is therefore the earliest of three: the application itself, the portfolio upload, and, where a mentor's letter is requested inside SlideRoom, a letter the applicant does not control."
       },
       "tag": "i",
       "src": [
        "B3-S1",
        "A3a-S18"
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "研究材料走哪個管道，每一校都不一樣",
      "en": "Research material travels a different channel at each school"
     },
     "judgment": {
      "zh": "同一份研究 PDF 沒辦法用同一個方式送到五所學校：管道、長度、要不要附指導者推薦，都是逐校決定的。",
      "en": "One research PDF cannot be sent the same way to five schools: the channel, the length, and whether a mentor's letter is part of it are decided school by school."
     },
     "items": [
      {
       "t": {
        "zh": "MIT 的 Research Supplement：每人限一份、一個專題，可附摘要或海報 PDF，已發表者附 citation，指導者的推薦信由系統透過 SlideRoom 邀請。",
        "en": "MIT's Research Supplement: one per applicant and one project, with an abstract or poster PDF, a citation if published, and a mentor's recommendation requested through SlideRoom."
       },
       "tag": "f",
       "src": [
        "B3-S1",
        "B3-S2"
       ]
      },
      {
       "t": {
        "zh": "有兩校是「送出申請之後」才經自己的 portal 上傳摘要，不走 Common App：Johns Hopkins 與 Swarthmore。",
        "en": "Two schools take an abstract only after the application is submitted, through their own portal rather than the Common App: Johns Hopkins and Swarthmore."
       },
       "tag": "f",
       "src": [
        "B2-S42",
        "B1-P22",
        "B2-S58",
        "B1-P23"
       ]
      },
      {
       "t": {
        "zh": "Harvey Mudd 要摘要放在 Common App 的 Additional Information 裡，並且明說：“we ask that students do not upload entire research papers”。",
        "en": "Harvey Mudd wants the abstract inside the Common App's Additional Information, and says: “we ask that students do not upload entire research papers”."
       },
       "tag": "f",
       "src": [
        "B2-S40"
       ]
      },
      {
       "t": {
        "zh": "Duke 三樣都不收：“Duke does not accept resumes, research abstracts, and media files.”",
        "en": "Duke takes none of it: “Duke does not accept resumes, research abstracts, and media files.”"
       },
       "tag": "f",
       "src": [
        "B2-S43"
       ]
      }
     ]
    },
    {
     "h": {
      "zh": "考試日與系統開放窗口是硬邊界",
      "en": "Test dates and system windows are hard edges"
     },
     "judgment": {
      "zh": "有些日期不能用「之後再補」解決：考試要在某日前考完，申請系統只在某段時間收件。",
      "en": "Some dates cannot be solved by sending something later: a test must have been taken by a date, and one system accepts applications only inside a window."
     },
     "items": [
      {
       "t": {
        "zh": "MIT EA 與 Caltech REA 的考試必須在 11-30 之前「考完」，不是之後補報分數就好。",
        "en": "For MIT EA and Caltech REA the test must have been taken by 30 November, not merely reported afterwards."
       },
       "tag": "f",
       "src": [
        "A3a-S1",
        "A3a-S6",
        "A3a-S11"
       ]
      },
      {
       "t": {
        "zh": "UC 沒有 ED 也沒有 EA：收件期是 2026-10-01 至 11-30，就只有這一段。對同時申請 UC 與早申學校的人，11 月是兩條線重疊的月份。",
        "en": "UC has no ED and no EA: the filing period is 1 Oct to 30 Nov 2026 and that is the only window. For anyone applying to UC and to early-round schools, November is the month where both lines overlap."
       },
       "tag": "f",
       "src": [
        "A3b-S23"
       ]
      },
      {
       "t": {
        "zh": "Swarthmore 自己的 portal 要到 10 月中才開通，所以材料不可能更早上傳。",
        "en": "Swarthmore's own portal opens by mid-October, so material cannot be uploaded before then."
       },
       "tag": "f",
       "src": [
        "B1-P23"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "outside-record-places",
   "h": {
    "zh": "校外做的事進得了哪裡：三校自己的界線",
    "en": "Where work done outside school is allowed in: three schools' own boundaries"
   },
   "judgment": {
    "zh": "同一份校外長期紀錄，Amherst 的寫作補充有專門欄位收它、UT Austin 請推薦人寫「校內與校外的主修準備」、Stanford 則一概不收，連附上的連結都不保證會看。",
    "en": "For the same multi-year record built outside school, Amherst's writing supplement has a field for it, UT Austin asks recommenders to cover “preparation for your first-choice major, both in school and out”, and Stanford accepts nothing extra and does not guarantee that links will be read."
   },
   "intro": {
    "zh": "這一節的三校在 2026-11-07 之前都被記成「頁面讀不到」。頁面其實讀得到，只是網址換了、答案要點擊、或 FAQ 已撤站搬進各子頁。每一則都是學校自己頁面上的原文。",
    "en": "All three schools here were recorded as unreadable before 2026-11-07. The pages were readable: a URL had moved, answers loaded on click, or a retired FAQ had been folded into the individual Apply pages. Every item below is the school's own wording."
   },
   "items": [
    {
     "t": {
      "zh": "Amherst 的寫作補充有一節叫「Optional Research Questions」，收的是「undertaken independently of the high school curriculum」的研究——自然科學、數學、資訊、社會科學或人文都算。這是本站讀到的 30 校中，少數在申請表內設有專門欄位、明文點名「校外、與高中課程無關」的研究的學校。",
      "en": "Amherst's writing supplement has a section called “Optional Research Questions” for research “undertaken independently of the high school curriculum” — natural sciences, mathematics, computer science, social sciences or humanities. Among the 30 schools read here, few give work done outside the school curriculum a named field of its own inside the application."
     },
     "tag": "f",
     "src": [
      "V3-R6"
     ]
    },
    {
     "t": {
      "zh": "Amherst 另外寫明每份申請「至少兩位 admission dean」讀過才送進委員會，並列出最看重的五項：成績單、老師與輔導老師推薦信、文書與寫作補充呈現的寫作品質、課內外投入與領導、以及（若有送的）標準化考試成績。",
      "en": "Amherst also states that every application is read by “at least two admission deans” before going to committee, and lists what it pays closest attention to: the transcript, teacher and counselor recommendations, the quality of writing across essays and the writing supplement, extra- and co-curricular involvement and leadership, and standardized test results if the applicant submitted them."
     },
     "tag": "f",
     "src": [
      "V3-R6"
     ]
    },
    {
     "t": {
      "zh": "UT Austin 把推薦信要寫什麼列成五點，其中一點是「Your preparation for your selected first-choice major, both in school and out」——官方文件裡少見地把「校外」寫進推薦信的任務清單。信件選繳、最多兩封、不能是親屬，而且學校「鼓勵校外的推薦人」。",
      "en": "UT Austin lists five things it wants letters to cover, one of which is “Your preparation for your selected first-choice major, both in school and out” — an unusually explicit invitation, in an official document, for a letter to speak to work done outside school. Letters are optional, at most two, not from a relative, and UT “encourage[s] letters from sources outside of your high school”."
     },
     "tag": "f",
     "src": [
      "V3-R11"
     ]
    },
    {
     "t": {
      "zh": "UT Austin 的候補名單表單只留「200 字以內的學業更新」這一個欄位；除此之外「Additional materials, such as letters of recommendation, continued letters of interest or other items ... will not be accepted or reviewed」。想在候補階段補東西的人，能用的就是那 200 字。",
      "en": "UT Austin's waitlist form has exactly one field for new information: “any academic updates in 200 words or less”. Beyond it, “Additional materials, such as letters of recommendation, continued letters of interest or other items ... will not be accepted or reviewed”. Those 200 words are the whole channel."
     },
     "tag": "f",
     "src": [
      "V3-R12"
     ]
    },
    {
     "t": {
      "zh": "Stanford 的界線在另一端：「We do not add supplementary materials like writing samples, research papers, or other special work to your application file, and we do not offer an option for applicants to upload supplementary materials to their file.」送出後要補的資訊走學校 portal 的 Update Application Form，不是 Common App 的 Additional Information；同一段還說，放在申請表或那個欄位裡的連結「不保證審查者會去看」。",
      "en": "Stanford draws the line at the other end: “We do not add supplementary materials like writing samples, research papers, or other special work to your application file, and we do not offer an option for applicants to upload supplementary materials to their file.” New information after submission goes through the Update Application Form in the Stanford portal, not the Common App Additional Information field, and the same answer adds that links included in the application or in that box carry “no guarantee that readers will review” them."
     },
     "tag": "f",
     "src": [
      "V3-R8"
     ]
    },
    {
     "t": {
      "zh": "Stanford 把推薦人的寬限期寫進 FAQ：「As a standard practice, we offer a grace period after the application deadline during which teachers and counselors may submit application materials.」學生自己的部分沒有寬限期，老師那一段有。",
      "en": "Stanford puts a recommender grace period in writing: “As a standard practice, we offer a grace period after the application deadline during which teachers and counselors may submit application materials.” The applicant's own parts get no such grace; the teachers' parts do."
     },
     "tag": "f",
     "src": [
      "V3-R8"
     ]
    },
    {
     "t": {
      "zh": "[推論] 三校放在一起看，「校外長期紀錄」能不能進入申請，取決於學校有沒有替它留欄位，而不是材料本身夠不夠好。Amherst 留了欄位、UT Austin 把它寫進推薦信的任務、Stanford 完全不留——同一份東西在三校的命運不同，而這三件事都只寫在各校自己的頁面上，沒有一處出現在通用建議裡。",
      "en": "[Inference] Read together, whether a multi-year outside record can enter an application depends on whether the school left a field for it, not on how good the material is. Amherst left a field, UT Austin wrote it into the letter-writer's job, Stanford left none — and all three statements live only on each school's own pages."
     },
     "tag": "i",
     "src": [
      "V3-R6",
      "V3-R11",
      "V3-R8"
     ]
    },
    {
     "t": {
      "zh": "Amherst 的費用頁上有一件與別校都不同的事：必修課程教材包含在 comprehensive fee 裡（「All required course materials are covered as part of the comprehensive fee」），所以它的費用表根本沒有書籍那一列。目前讀過的學校中只有這一所。",
      "en": "Amherst's cost page contains something no other school's does: required course materials are inside the comprehensive fee (“All required course materials are covered as part of the comprehensive fee”), so its cost table has no books line at all. It is the only one so far."
     },
     "tag": "f",
     "src": [
      "V3-R3"
     ]
    },
    {
     "t": {
      "zh": "Northwestern 把「網站」點名在拒收名單裡：「does not accept unsolicited supplemental items, such as artwork, portfolios, recordings (CDs, DVDs, etc.) or websites (including social media). These items will not be reviewed and therefore should not be submitted.」對一份校外長期紀錄來說，Northwestern 的答案是：連結進不去、作品集進不去，只有活動表、文書與一封額外推薦信進得去。",
      "en": "Northwestern names websites in what it refuses: \u201cdoes not accept unsolicited supplemental items, such as artwork, portfolios, recordings (CDs, DVDs, etc.) or websites (including social media). These items will not be reviewed and therefore should not be submitted.\u201d For a multi-year outside record, Northwestern\u2019s answer is that a link does not get in and a portfolio does not get in; the activity chart, the essays and one supplemental letter do."
     },
     "tag": "f",
     "src": [
      "V4-T6"
     ]
    },
    {
     "t": {
      "zh": "Princeton 要求每一位申請人交一份有成績的課堂作業，並且明說比較想看「論說、有主軸的分析寫作」，而不是科學研究、創意寫作、個人敘事或以資料分析為主的報告。對工程或生物申請者來說，自己最強的那份寫作（實驗報告、研究紀錄）正好是這份必交文件不想看的類型。",
      "en": "Princeton requires a graded written paper from every applicant and says it is \u201cmost interested in seeing expository, thesis-driven analytical writing rather than science research, creative writing, personal narratives or papers mostly focused on data analysis\u201d. For an engineering or biology applicant, the strongest piece of writing they own \u2014 a lab report, a research write-up \u2014 is the kind this required document explicitly does not want."
     },
     "tag": "f",
     "src": [
      "V4-T1"
     ]
    },
    {
     "t": {
      "zh": "Northwestern 已經不要求 Common App 的主文書（頁面原文「the Common/Coalition Application personal essay, which we no longer require」）。Common App 的介面不會告訴你這件事，只有 Northwestern 自己的頁面寫了。",
      "en": "Northwestern no longer requires the Common App personal essay \u2014 its own page says so: \u201cthe Common/Coalition Application personal essay, which we no longer require\u201d. Nothing in the Common App interface signals this; only Northwestern\u2019s page states it."
     },
     "tag": "f",
     "src": [
      "V4-T5"
     ]
    },
    {
     "t": {
      "zh": "兩所學校明文叫申請人不要交工程或生物學生最可能有的那份文件：Princeton 必交的 graded written paper「最想看論說、有主軸的分析寫作，而不是科學研究」，Williams 的選繳學術寫作樣本直接寫「Please do not submit lab reports.」。但 Williams 另外開了一條專門管道收那些材料——科學或數學研究的簡短說明，還可以附 VIVA 錄影讓他們「聽你講自己的研究」。所以規則不是「不想看你的科學」，而是「不要放在寫作那一格」。",
      "en": "Two schools tell applicants in writing not to send the document an engineering or biology student is most likely to own. Princeton\u2019s required graded written paper is \u201cmost interested in\u2026 expository, thesis-driven analytical writing rather than science research\u201d; Williams\u2019s optional academic writing sample says \u201cPlease do not submit lab reports.\u201d Williams then opens a separate channel for exactly that material \u2014 a brief description of scientific or mathematical research, with an optional VIVA recording so it \u201ccan hear you speak about your research\u201d. The rule is not \u201cwe do not want your science\u201d; it is \u201cnot in the writing slot\u201d."
     },
     "tag": "f",
     "src": [
      "V4-T1",
      "V4-T11"
     ]
    },
    {
     "t": {
      "zh": "Michigan 的那一封老師推薦信，可以不是學校老師：清單上寫的是「核心學科老師**或其他非親屬**，能直接說明學生的學術能力、潛力與課堂表現」。對一個最強的學術見證人在校外的學生來說，這句話就是入口，而它只出現在申請清單的一行裡，不在任何關於推薦人的指引裡。",
      "en": "Michigan\u2019s single teacher evaluation does not have to come from a schoolteacher: the checklist line reads \u201ccore academic teacher **or other non-relative** who can speak directly to the student\u2019s academic aptitude, potential, and classroom performance\u201d. For a student whose strongest academic witness is a mentor outside school, that phrasing is the opening \u2014 and it appears in a checklist line, not in any guidance about recommenders."
     },
     "tag": "f",
     "src": [
      "V4-T13"
     ]
    },
    {
     "t": {
      "zh": "[推論] 本站 logs/ 裡的 404 應該讀成「要重新定位」，不是「已消失」。Johns Hopkins、Harvey Mudd、Amherst 三校都是換了網址而內容還在；打開 404 頁、照著它自己給的導覽走一兩步就找到了。連結檢查器看不出這個差別。",
      "en": "[Inference] A 404 in this repo's link log should be read as “re-locate”, not “gone”. Johns Hopkins, Harvey Mudd and Amherst each moved a URL and kept the page; opening the 404 and following the navigation it offers found all three in one or two clicks. A link checker cannot tell the two cases apart."
     },
     "tag": "i",
     "src": [
      "V3-R1",
      "V3-R3"
     ]
    }
   ]
  }
 ]
};
