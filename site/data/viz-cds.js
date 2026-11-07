// Chart dataset: CDS C7 factor marks, C1/C2/C9/C21/B2 numbers and H6 aid beside cost of attendance, for the 30 US schools.
// Built from research/2026-11-07_reader-side-reality_v1.md (B5-), research/2026-11-07_cds-numbers_v1.md (B6-),
// research/2026-11-07_international-aid-numbers_v1.md (A7-), with Harvey Mudd and Amherst cost figures taken from the
// browser-verified values already in data/p-schools.js (V3-). Every src id exists in data/sources.js.
// null = not stated or not retrieved; never estimated. Rates are plain arithmetic on the cited cells (0–1).
// admitRate = admits / applicants; edRate = edAdmits / edApplicants; nonresidentShare = B2 nonresident first-years / C1 enrolled;
// avgShareOfCoa = H6 average award / COA (H6 is 2025-26 money, COA is mostly 2026-27 cost).
window.ATLAS = window.ATLAS || {}; window.ATLAS.viz = window.ATLAS.viz || {};
window.ATLAS.viz.cds = {
 "schools": [
  "MIT",
  "Caltech",
  "Stanford",
  "Harvard",
  "Yale",
  "Princeton",
  "Columbia",
  "Penn",
  "Brown",
  "Cornell",
  "Georgetown",
  "CMU",
  "Georgia Tech",
  "Purdue",
  "Michigan",
  "UIUC",
  "Olin",
  "Harvey Mudd",
  "Johns Hopkins",
  "Duke",
  "Northwestern",
  "Rice",
  "UC Berkeley",
  "UCLA",
  "UC San Diego",
  "UT Austin",
  "UW",
  "Williams",
  "Amherst",
  "Swarthmore"
 ],
 "factors": [
  {
   "id": "rigor",
   "label": {
    "zh": "課程難度",
    "en": "Rigor of secondary record"
   },
   "group": "academic"
  },
  {
   "id": "rank",
   "label": {
    "zh": "班排",
    "en": "Class rank"
   },
   "group": "academic"
  },
  {
   "id": "gpa",
   "label": {
    "zh": "學業 GPA",
    "en": "Academic GPA"
   },
   "group": "academic"
  },
  {
   "id": "test",
   "label": {
    "zh": "標準化考試",
    "en": "Standardized test scores"
   },
   "group": "academic"
  },
  {
   "id": "essay",
   "label": {
    "zh": "申請文章",
    "en": "Application essay"
   },
   "group": "academic"
  },
  {
   "id": "rec",
   "label": {
    "zh": "推薦信",
    "en": "Recommendation(s)"
   },
   "group": "academic"
  },
  {
   "id": "interview",
   "label": {
    "zh": "面試",
    "en": "Interview"
   },
   "group": "nonacademic"
  },
  {
   "id": "ec",
   "label": {
    "zh": "課外活動",
    "en": "Extracurricular activities"
   },
   "group": "nonacademic"
  },
  {
   "id": "talent",
   "label": {
    "zh": "才能",
    "en": "Talent/ability"
   },
   "group": "nonacademic"
  },
  {
   "id": "character",
   "label": {
    "zh": "品格與個人特質",
    "en": "Character/personal qualities"
   },
   "group": "nonacademic"
  },
  {
   "id": "firstgen",
   "label": {
    "zh": "第一代大學生",
    "en": "First generation"
   },
   "group": "nonacademic"
  },
  {
   "id": "alumni",
   "label": {
    "zh": "校友關係",
    "en": "Alumni/ae relation"
   },
   "group": "nonacademic"
  },
  {
   "id": "geo",
   "label": {
    "zh": "居住地區",
    "en": "Geographical residence"
   },
   "group": "nonacademic"
  },
  {
   "id": "state",
   "label": {
    "zh": "州居民身分",
    "en": "State residency"
   },
   "group": "nonacademic"
  },
  {
   "id": "religion",
   "label": {
    "zh": "宗教",
    "en": "Religious affiliation/commitment"
   },
   "group": "nonacademic"
  },
  {
   "id": "volunteer",
   "label": {
    "zh": "志工",
    "en": "Volunteer work"
   },
   "group": "nonacademic"
  },
  {
   "id": "work",
   "label": {
    "zh": "工作經驗",
    "en": "Work experience"
   },
   "group": "nonacademic"
  },
  {
   "id": "interest",
   "label": {
    "zh": "就讀意願",
    "en": "Level of applicant's interest"
   },
   "group": "nonacademic"
  }
 ],
 "c7": {
  "MIT": {
   "year": "2025-26",
   "src": [
    "B5-C01"
   ],
   "v": {
    "rigor": "I",
    "rank": "C",
    "gpa": "I",
    "test": "I",
    "essay": "I",
    "rec": "I",
    "interview": "I",
    "ec": "I",
    "talent": "I",
    "character": "VI",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Caltech": {
   "year": "2025-26",
   "src": [
    "B5-C02"
   ],
   "v": {
    "rigor": "VI",
    "rank": "I",
    "gpa": "I",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "NC",
    "ec": "I",
    "talent": "C",
    "character": "VI",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Stanford": {
   "year": "2025-26",
   "src": [
    "B5-C03"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "C",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Harvard": {
   "year": "2025-26",
   "src": [
    "B5-C04"
   ],
   "v": {
    "rigor": "C",
    "rank": "NC",
    "gpa": "C",
    "test": "C",
    "essay": "C",
    "rec": "C",
    "interview": "C",
    "ec": "C",
    "talent": "C",
    "character": "C",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Yale": {
   "year": "2025-26",
   "src": [
    "B5-C05"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "C",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Princeton": {
   "year": "2025-26",
   "src": [
    "B5-C06"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "C",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Columbia": {
   "year": "2025-26",
   "src": [
    "B5-C07"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "NC",
    "ec": "VI",
    "talent": "I",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   },
   "note": {
    "zh": "Columbia College + Columbia Engineering 的檔案（General Studies 另有一份，未列入）。",
    "en": "Columbia College + Columbia Engineering file (General Studies files separately and is not shown)."
   }
  },
  "Penn": {
   "year": "2025-26",
   "src": [
    "B5-C09"
   ],
   "v": {
    "rigor": "VI",
    "rank": "I",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "NC",
    "ec": "I",
    "talent": "I",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "I",
    "work": "I",
    "interest": "NC"
   }
  },
  "Brown": {
   "year": "2025-26",
   "src": [
    "B5-C10"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "NC",
    "ec": "I",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Cornell": {
   "year": "2025-26",
   "src": [
    "B5-C11"
   ],
   "v": {
    "rigor": "VI",
    "rank": "I",
    "gpa": "I",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "C",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Georgetown": {
   "year": "2025-26",
   "src": [
    "B5-C12"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "I",
    "ec": "I",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "CMU": {
   "year": "2025-26",
   "src": [
    "B5-C13"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "C",
    "essay": "I",
    "rec": "I",
    "interview": "NC",
    "ec": "VI",
    "talent": "I",
    "character": "VI",
    "firstgen": "I",
    "alumni": "NC",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "VI",
    "work": "C",
    "interest": "NC"
   },
   "note": {
    "zh": "C7 註明「Factors vary by program」；2026-27 版 C 節的 C7 與此完全相同。",
    "en": "C7 notes \"Factors vary by program\"; the 2026-27 section C has an identical C7."
   }
  },
  "Georgia Tech": {
   "year": "2025-26",
   "src": [
    "B5-C14"
   ],
   "v": {
    "rigor": "VI",
    "rank": "NC",
    "gpa": "VI",
    "test": "C",
    "essay": "I",
    "rec": "C",
    "interview": "NC",
    "ec": "I",
    "talent": "C",
    "character": "VI",
    "firstgen": "NC",
    "alumni": "NC",
    "geo": "C",
    "state": "VI",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Purdue": {
   "year": "2025-26",
   "src": [
    "B5-C15"
   ],
   "v": {
    "rigor": "VI",
    "rank": "C",
    "gpa": "VI",
    "test": "I",
    "essay": "VI",
    "rec": "I",
    "interview": "NC",
    "ec": "I",
    "talent": "C",
    "character": "I",
    "firstgen": "I",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "C"
   },
   "note": {
    "zh": "自 2024-25 起 CDS 合併 West Lafayette、Indianapolis 與 Polytechnic Statewide 填報。",
    "en": "From 2024-25 the CDS combines West Lafayette, Indianapolis and Polytechnic Statewide."
   }
  },
  "Michigan": {
   "year": "2025-26",
   "src": [
    "B5-C16"
   ],
   "v": {
    "rigor": "VI",
    "rank": "NC",
    "gpa": "VI",
    "test": "I",
    "essay": "I",
    "rec": "I",
    "interview": "NC",
    "ec": "C",
    "talent": "C",
    "character": "I",
    "firstgen": "I",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "C"
   }
  },
  "UIUC": {
   "year": "2025-26",
   "src": [
    "B5-C17"
   ],
   "v": {
    "rigor": "VI",
    "rank": "NC",
    "gpa": "VI",
    "test": "C",
    "essay": "I",
    "rec": "NC",
    "interview": "NC",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "VI",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Olin": {
   "year": "2023-24",
   "src": [
    "B5-C18"
   ],
   "v": {
    "rigor": "VI",
    "rank": "I",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "VI",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "I",
    "work": "I",
    "interest": "VI"
   },
   "note": {
    "zh": "找到的最新版是 2023-24；該檔 C7 把考試標為 C，但 C8 回答不使用 SAT/ACT，前後矛盾。",
    "en": "Newest file found is 2023-24; it marks Test \"C\" in C7 but answers No to using SAT/ACT in C8."
   }
  },
  "Harvey Mudd": {
   "year": "2025-26",
   "src": [
    "B5-C19"
   ],
   "v": {
    "rigor": "VI",
    "rank": "C",
    "gpa": "VI",
    "test": "C",
    "essay": "I",
    "rec": "VI",
    "interview": "C",
    "ec": "I",
    "talent": "C",
    "character": "I",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "Johns Hopkins": {
   "year": "2025-26",
   "src": [
    "B5-C20"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "NC",
    "ec": "I",
    "talent": "I",
    "character": "I",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "I",
    "work": "I",
    "interest": "NC"
   }
  },
  "Duke": {
   "year": "2025-26",
   "src": [
    "B5-C21"
   ],
   "v": {
    "rigor": "VI",
    "rank": "I",
    "gpa": "VI",
    "test": "C",
    "essay": "I",
    "rec": "VI",
    "interview": "C",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "C"
   }
  },
  "Northwestern": {
   "year": "2025-26",
   "src": [
    "B5-C22"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "NC",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "NC",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "C"
   }
  },
  "Rice": {
   "year": "2025-26",
   "src": [
    "B5-C23"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "VI",
    "essay": "VI",
    "rec": "VI",
    "interview": "C",
    "ec": "VI",
    "talent": "VI",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "C"
   }
  },
  "UC Berkeley": {
   "year": "2025-26",
   "src": [
    "B5-C24"
   ],
   "v": {
    "rigor": "VI",
    "rank": "NC",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "C",
    "interview": "NC",
    "ec": "I",
    "talent": "C",
    "character": "I",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "NC",
    "state": "C",
    "religion": "NC",
    "volunteer": "I",
    "work": "I",
    "interest": "NC"
   }
  },
  "UCLA": {
   "year": "2025-26",
   "src": [
    "B5-C25"
   ],
   "v": {
    "rigor": "VI",
    "rank": "NC",
    "gpa": "VI",
    "test": "NC",
    "essay": "VI",
    "rec": "NC",
    "interview": "NC",
    "ec": "I",
    "talent": "I",
    "character": "I",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "I",
    "work": "I",
    "interest": "NC"
   }
  },
  "UC San Diego": {
   "year": "2025-26",
   "src": [
    "B5-C26"
   ],
   "v": {
    "rigor": "VI",
    "rank": "C",
    "gpa": "VI",
    "test": "NC",
    "essay": "VI",
    "rec": "NC",
    "interview": "NC",
    "ec": "I",
    "talent": "I",
    "character": "I",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "I",
    "religion": "NC",
    "volunteer": "I",
    "work": "C",
    "interest": "NC"
   }
  },
  "UT Austin": {
   "year": "2025-26",
   "src": [
    "B5-C27"
   ],
   "v": {
    "rigor": "C",
    "rank": "C",
    "gpa": "C",
    "test": "C",
    "essay": "C",
    "rec": "C",
    "interview": "NC",
    "ec": "C",
    "talent": "C",
    "character": "C",
    "firstgen": "C",
    "alumni": "NC",
    "geo": "C",
    "state": "C",
    "religion": "NC",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  },
  "UW": {
   "year": "2025-26",
   "src": [
    "B5-C28"
   ],
   "v": {
    "rigor": "VI",
    "rank": "NC",
    "gpa": "VI",
    "test": "NC",
    "essay": "VI",
    "rec": "NC",
    "interview": "NC",
    "ec": "I",
    "talent": "I",
    "character": "C",
    "firstgen": "I",
    "alumni": "NC",
    "geo": "NC",
    "state": "VI",
    "religion": "NC",
    "volunteer": "I",
    "work": "I",
    "interest": "NC"
   }
  },
  "Williams": {
   "year": null,
   "src": [],
   "v": null,
   "note": {
    "zh": "C7 未取得：該校 IR 頁面在 2026-11-07 拒絕自動存取；不代表未公開。",
    "en": "C7 not retrieved: the IR page refused automated access on 2026-11-07; this does not mean it is unpublished."
   }
  },
  "Amherst": {
   "year": null,
   "src": [],
   "v": null,
   "note": {
    "zh": "C7 未取得：該校 IR 頁面在 2026-11-07 拒絕自動存取；不代表未公開。",
    "en": "C7 not retrieved: the IR page refused automated access on 2026-11-07; this does not mean it is unpublished."
   }
  },
  "Swarthmore": {
   "year": "2025-26",
   "src": [
    "B5-C31"
   ],
   "v": {
    "rigor": "VI",
    "rank": "VI",
    "gpa": "VI",
    "test": "C",
    "essay": "VI",
    "rec": "VI",
    "interview": "C",
    "ec": "C",
    "talent": "C",
    "character": "VI",
    "firstgen": "C",
    "alumni": "C",
    "geo": "C",
    "state": "C",
    "religion": "C",
    "volunteer": "C",
    "work": "C",
    "interest": "NC"
   }
  }
 },
 "numbers": {
  "MIT": {
   "year": "2025-26",
   "src": [
    "B6-N01"
   ],
   "applicants": 29281,
   "admits": 1334,
   "admitRate": 0.0456,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 561,
   "waitlistAccepted": 468,
   "waitlistAdmitted": 10,
   "satSubmitPct": 0.83,
   "actSubmitPct": 0.31,
   "sat25": 1520,
   "sat75": 1570,
   "enrolled": 1152,
   "nonresidentFirstYear": 124,
   "nonresidentShare": 0.1076
  },
  "Caltech": {
   "year": "2025-26",
   "src": [
    "B6-N02"
   ],
   "applicants": 11285,
   "admits": 428,
   "admitRate": 0.0379,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 263,
   "waitlistAccepted": 211,
   "waitlistAdmitted": 1,
   "satSubmitPct": 0.78,
   "actSubmitPct": 0.22,
   "sat25": null,
   "sat75": null,
   "enrolled": 248,
   "nonresidentFirstYear": 37,
   "nonresidentShare": 0.1492,
   "note": {
    "zh": "C1 總計列空白，申請／錄取／入學為性別列加總（Σ）；SAT Composite 列空白。",
    "en": "C1 total row blank; applicants/admits/enrolled are sums of the sex rows (Σ); SAT Composite row blank."
   }
  },
  "Stanford": {
   "year": "2025-26",
   "src": [
    "B6-N03"
   ],
   "applicants": 60646,
   "admits": 2302,
   "admitRate": 0.038,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 669,
   "waitlistAccepted": 573,
   "waitlistAdmitted": 57,
   "satSubmitPct": 0.5557,
   "actSubmitPct": 0.2094,
   "sat25": 1520,
   "sat75": 1570,
   "enrolled": 1839,
   "nonresidentFirstYear": 237,
   "nonresidentShare": 0.1289
  },
  "Harvard": {
   "year": "2025-26",
   "src": [
    "B6-N04"
   ],
   "applicants": 47893,
   "admits": 2003,
   "admitRate": 0.0418,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": 75,
   "satSubmitPct": 0.79,
   "actSubmitPct": 0.27,
   "sat25": null,
   "sat75": null,
   "enrolled": 1675,
   "nonresidentFirstYear": 251,
   "nonresidentShare": 0.1499,
   "note": {
    "zh": "候補名單只填了錄取人數；SAT Composite 列空白，只填單科。",
    "en": "Waitlist: only the admitted count is filled; SAT Composite row blank (section scores only)."
   }
  },
  "Yale": {
   "year": "2025-26",
   "src": [
    "B6-N05"
   ],
   "applicants": 50264,
   "admits": 2387,
   "admitRate": 0.0475,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 944,
   "waitlistAccepted": 738,
   "waitlistAdmitted": 32,
   "satSubmitPct": 0.67,
   "actSubmitPct": 0.25,
   "sat25": 1480,
   "sat75": 1560,
   "enrolled": 1633,
   "nonresidentFirstYear": 155,
   "nonresidentShare": 0.0949
  },
  "Princeton": {
   "year": "2025-26",
   "src": [
    "B6-N06"
   ],
   "applicants": 42303,
   "admits": 1868,
   "admitRate": 0.0442,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 1370,
   "waitlistAccepted": 1086,
   "waitlistAdmitted": 36,
   "satSubmitPct": 0.6,
   "actSubmitPct": 0.2,
   "sat25": 1490,
   "sat75": 1560,
   "enrolled": 1408,
   "nonresidentFirstYear": 200,
   "nonresidentShare": 0.142
  },
  "Columbia": {
   "year": "2025-26",
   "src": [
    "B6-N07"
   ],
   "applicants": 59611,
   "admits": 2946,
   "admitRate": 0.0494,
   "edApplicants": 5868,
   "edAdmits": 819,
   "edRate": 0.1396,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": null,
   "satSubmitPct": 0.5,
   "actSubmitPct": 0.17,
   "sat25": 1510,
   "sat75": 1560,
   "enrolled": 1797,
   "nonresidentFirstYear": 273,
   "nonresidentShare": 0.1519,
   "note": {
    "zh": "有候補名單，但人數留空。",
    "en": "Waitlist used but counts left blank."
   }
  },
  "Penn": {
   "year": "2025-26",
   "src": [
    "B6-N09"
   ],
   "applicants": 72544,
   "admits": 3570,
   "admitRate": 0.0492,
   "edApplicants": 9503,
   "edAdmits": 1266,
   "edRate": 0.1332,
   "waitlistOffered": 3252,
   "waitlistAccepted": 2566,
   "waitlistAdmitted": 60,
   "satSubmitPct": 0.52,
   "actSubmitPct": 0.18,
   "sat25": null,
   "sat75": null,
   "enrolled": 2420,
   "nonresidentFirstYear": 311,
   "nonresidentShare": 0.1285,
   "note": {
    "zh": "C9 沒有 SAT Composite 列。",
    "en": "C9 has no SAT Composite row."
   }
  },
  "Brown": {
   "year": null,
   "src": [
    "B6-N10",
    "B6-N32"
   ],
   "applicants": null,
   "admits": null,
   "admitRate": null,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": null,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": null,
   "nonresidentFirstYear": null,
   "nonresidentShare": null,
   "note": {
    "zh": "Brown 只以 Tableau 公布 CDS；2026-11-07 只匯出到 C9 的 ACT 分數分布，C1、C2、C21、B2 未取得。",
    "en": "Brown publishes its CDS only in Tableau; on 2026-11-07 only the C9 ACT score-range sheet exported, so C1, C2, C21 and B2 were not retrieved."
   }
  },
  "Cornell": {
   "year": "2025-26",
   "src": [
    "B6-N11"
   ],
   "applicants": 72523,
   "admits": 6077,
   "admitRate": 0.0838,
   "edApplicants": 10057,
   "edAdmits": 1889,
   "edRate": 0.1878,
   "waitlistOffered": 9720,
   "waitlistAccepted": 6598,
   "waitlistAdmitted": 254,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": 1490,
   "sat75": 1550,
   "enrolled": 3827,
   "nonresidentFirstYear": 373,
   "nonresidentShare": 0.0975,
   "note": {
    "zh": "C9 只填人數（SAT 1,639、ACT 486），沒填百分比，故送分比例留空。",
    "en": "C9 fills counts (SAT 1,639, ACT 486) but not percentages, so submit shares are left null."
   }
  },
  "Georgetown": {
   "year": "2025-26",
   "src": [
    "B6-N12"
   ],
   "applicants": 26822,
   "admits": 3618,
   "admitRate": 0.1349,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 2672,
   "waitlistAccepted": 2043,
   "waitlistAdmitted": 356,
   "satSubmitPct": 0.78,
   "actSubmitPct": 0.32,
   "sat25": 1405,
   "sat75": 1530,
   "enrolled": 1589,
   "nonresidentFirstYear": 133,
   "nonresidentShare": 0.0837
  },
  "CMU": {
   "year": "2025-26",
   "src": [
    "B6-N13"
   ],
   "applicants": 34867,
   "admits": 3859,
   "admitRate": 0.1107,
   "edApplicants": 2680,
   "edAdmits": 553,
   "edRate": 0.2063,
   "waitlistOffered": 7117,
   "waitlistAccepted": 4937,
   "waitlistAdmitted": 36,
   "satSubmitPct": 0.655,
   "actSubmitPct": 0.181,
   "sat25": 1500,
   "sat75": 1560,
   "enrolled": 1804,
   "nonresidentFirstYear": 261,
   "nonresidentShare": 0.1447,
   "note": {
    "zh": "C2 與 C9 區塊標為「Fall 2024」，屬於哪一屆未確認；C1 只含 Pittsburgh 校區。",
    "en": "C2 and C9 blocks are labelled \"Fall 2024\" (cohort unresolved); C1 is the Pittsburgh campus only."
   }
  },
  "Georgia Tech": {
   "year": "2025-26",
   "src": [
    "B6-N14"
   ],
   "applicants": 66881,
   "admits": 8921,
   "admitRate": 0.1334,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 7651,
   "waitlistAccepted": 4875,
   "waitlistAdmitted": 653,
   "satSubmitPct": 0.78,
   "actSubmitPct": 0.33,
   "sat25": 1370,
   "sat75": 1530,
   "enrolled": 4071,
   "nonresidentFirstYear": 310,
   "nonresidentShare": 0.0761
  },
  "Purdue": {
   "year": "2025-26",
   "src": [
    "B6-N15"
   ],
   "applicants": 87220,
   "admits": 37881,
   "admitRate": 0.4343,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 8981,
   "waitlistAccepted": 4047,
   "waitlistAdmitted": 3916,
   "satSubmitPct": 0.838,
   "actSubmitPct": 0.226,
   "sat25": 1220,
   "sat75": 1470,
   "enrolled": 9656,
   "nonresidentFirstYear": 536,
   "nonresidentShare": 0.0555,
   "note": {
    "zh": "三校區合併填報，不是只有 West Lafayette。",
    "en": "System-wide figures, not West Lafayette alone."
   }
  },
  "Michigan": {
   "year": "2025-26",
   "src": [
    "B6-N16"
   ],
   "applicants": 109112,
   "admits": 17915,
   "admitRate": 0.1642,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 24447,
   "waitlistAccepted": 18435,
   "waitlistAdmitted": 1663,
   "satSubmitPct": 0.55,
   "actSubmitPct": 0.18,
   "sat25": 1370,
   "sat75": 1530,
   "enrolled": 8178,
   "nonresidentFirstYear": 391,
   "nonresidentShare": 0.0478
  },
  "UIUC": {
   "year": "2025-26",
   "src": [
    "B6-N17"
   ],
   "applicants": 83045,
   "admits": 30384,
   "admitRate": 0.3659,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 6826,
   "waitlistAccepted": 4317,
   "waitlistAdmitted": 1,
   "satSubmitPct": 0.4259,
   "actSubmitPct": 0.1407,
   "sat25": 1390,
   "sat75": 1520,
   "enrolled": 9207,
   "nonresidentFirstYear": 1435,
   "nonresidentShare": 0.1559
  },
  "Olin": {
   "year": "2023-24",
   "src": [
    "B6-N18"
   ],
   "applicants": 928,
   "admits": 201,
   "admitRate": 0.2166,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 53,
   "waitlistAccepted": 33,
   "waitlistAdmitted": 10,
   "satSubmitPct": 0.46,
   "actSubmitPct": 0.22,
   "sat25": 1500,
   "sat75": 1560,
   "enrolled": 98,
   "nonresidentFirstYear": 12,
   "nonresidentShare": 0.1224,
   "note": {
    "zh": "2023-24 版；C1 為性別列加總；B2 欄位順序可疑（12 / 17 / 31），使用前請人工核對。ED 是否存在未讀出。",
    "en": "2023-24 file; C1 summed from sex rows; B2 column order looks unusual (12 / 17 / 31), check before use. ED answer not extracted."
   }
  },
  "Harvey Mudd": {
   "year": "2025-26",
   "src": [
    "B6-N19"
   ],
   "applicants": 5217,
   "admits": 643,
   "admitRate": 0.1233,
   "edApplicants": 594,
   "edAdmits": 109,
   "edRate": 0.1835,
   "waitlistOffered": 685,
   "waitlistAccepted": 439,
   "waitlistAdmitted": 0,
   "satSubmitPct": 0.55,
   "actSubmitPct": 0.21,
   "sat25": 1500,
   "sat75": 1560,
   "enrolled": 236,
   "nonresidentFirstYear": 30,
   "nonresidentShare": 0.1271
  },
  "Johns Hopkins": {
   "year": "2025-26",
   "src": [
    "B6-N20"
   ],
   "applicants": 50259,
   "admits": 3072,
   "admitRate": 0.0611,
   "edApplicants": 7639,
   "edAdmits": 835,
   "edRate": 0.1093,
   "waitlistOffered": 2058,
   "waitlistAccepted": 1359,
   "waitlistAdmitted": 247,
   "satSubmitPct": 0.57,
   "actSubmitPct": 0.2,
   "sat25": 1530,
   "sat75": 1565,
   "enrolled": 1378,
   "nonresidentFirstYear": 188,
   "nonresidentShare": 0.1364
  },
  "Duke": {
   "year": "2025-26",
   "src": [
    "B6-N21"
   ],
   "applicants": 55541,
   "admits": 2910,
   "admitRate": 0.0524,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": null,
   "satSubmitPct": 0.48,
   "actSubmitPct": 0.27,
   "sat25": 1510,
   "sat75": 1570,
   "enrolled": 1749,
   "nonresidentFirstYear": 193,
   "nonresidentShare": 0.1103,
   "note": {
    "zh": "回答有 ED 與候補名單，但人數留空。",
    "en": "Answers Yes to ED and to a waitlist but leaves the counts blank."
   }
  },
  "Northwestern": {
   "year": "2025-26",
   "src": [
    "B6-N22"
   ],
   "applicants": 52676,
   "admits": 3933,
   "admitRate": 0.0747,
   "edApplicants": 5939,
   "edAdmits": 1212,
   "edRate": 0.2041,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": 167,
   "satSubmitPct": 0.48,
   "actSubmitPct": 0.25,
   "sat25": 1520,
   "sat75": 1560,
   "enrolled": 2139,
   "nonresidentFirstYear": 253,
   "nonresidentShare": 0.1183,
   "note": {
    "zh": "C2 的 offered／accepted 欄是表單預設文字，不是數字。",
    "en": "C2 offered/accepted cells hold form placeholder text, not numbers."
   }
  },
  "Rice": {
   "year": "2025-26",
   "src": [
    "B6-N23"
   ],
   "applicants": 36791,
   "admits": 2948,
   "admitRate": 0.0801,
   "edApplicants": 5748,
   "edAdmits": 647,
   "edRate": 0.1126,
   "waitlistOffered": 3196,
   "waitlistAccepted": 2204,
   "waitlistAdmitted": 66,
   "satSubmitPct": 0.59,
   "actSubmitPct": 0.24,
   "sat25": 1510,
   "sat75": 1560,
   "enrolled": 1263,
   "nonresidentFirstYear": 164,
   "nonresidentShare": 0.1298
  },
  "UC Berkeley": {
   "year": "2025-26",
   "src": [
    "B6-N24"
   ],
   "applicants": 126864,
   "admits": 14524,
   "admitRate": 0.1145,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 9102,
   "waitlistAccepted": 6479,
   "waitlistAdmitted": 0,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": 6687,
   "nonresidentFirstYear": 762,
   "nonresidentShare": 0.114,
   "note": {
    "zh": "C9 空白。",
    "en": "C9 blank."
   }
  },
  "UCLA": {
   "year": "2025-26",
   "src": [
    "B6-N25"
   ],
   "applicants": 145086,
   "admits": 13659,
   "admitRate": 0.0941,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 20563,
   "waitlistAccepted": 13612,
   "waitlistAdmitted": 1514,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": 6553,
   "nonresidentFirstYear": 549,
   "nonresidentShare": 0.0838,
   "note": {
    "zh": "C1 為性別列加總；C9 空白。",
    "en": "C1 summed from sex rows; C9 blank."
   }
  },
  "UC San Diego": {
   "year": "2025-26",
   "src": [
    "B6-N26"
   ],
   "applicants": 136750,
   "admits": 39054,
   "admitRate": 0.2856,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 36709,
   "waitlistAccepted": 25411,
   "waitlistAdmitted": 5284,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": 7801,
   "nonresidentFirstYear": 1409,
   "nonresidentShare": 0.1806,
   "note": {
    "zh": "C9 空白。",
    "en": "C9 blank."
   }
  },
  "UT Austin": {
   "year": "2025-26",
   "src": [
    "B6-N27"
   ],
   "applicants": 90690,
   "admits": 20154,
   "admitRate": 0.2222,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": null,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": 9900,
   "nonresidentFirstYear": 379,
   "nonresidentShare": 0.0383,
   "note": {
    "zh": "回報沒有候補名單；C9 空白。",
    "en": "Reports no waitlist; C9 blank."
   }
  },
  "UW": {
   "year": "2025-26",
   "src": [
    "B6-N28"
   ],
   "applicants": 72933,
   "admits": 30446,
   "admitRate": 0.4175,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": 15363,
   "waitlistAccepted": 8350,
   "waitlistAdmitted": 2252,
   "satSubmitPct": 0.1912,
   "actSubmitPct": 0.0489,
   "sat25": 1320,
   "sat75": 1502,
   "enrolled": 7129,
   "nonresidentFirstYear": 692,
   "nonresidentShare": 0.0971,
   "note": {
    "zh": "C8A 回答 N 且全列標「not considered」，但仍填了 C9。",
    "en": "Answers C8A \"N\" with all rows \"not considered\", yet fills C9."
   }
  },
  "Williams": {
   "year": null,
   "src": [
    "B6-N29"
   ],
   "applicants": null,
   "admits": null,
   "admitRate": null,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": null,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": null,
   "nonresidentFirstYear": null,
   "nonresidentShare": null,
   "note": {
    "zh": "CDS 頁面在 2026-11-07 拒絕自動存取（HTTP 403），未取得。",
    "en": "CDS page refused automated access on 2026-11-07 (HTTP 403); not retrieved."
   }
  },
  "Amherst": {
   "year": null,
   "src": [
    "B6-N30"
   ],
   "applicants": null,
   "admits": null,
   "admitRate": null,
   "edApplicants": null,
   "edAdmits": null,
   "edRate": null,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": null,
   "satSubmitPct": null,
   "actSubmitPct": null,
   "sat25": null,
   "sat75": null,
   "enrolled": null,
   "nonresidentFirstYear": null,
   "nonresidentShare": null,
   "note": {
    "zh": "CDS 頁面在 2026-11-07 拒絕自動存取（HTTP 404/405），未取得。",
    "en": "CDS page refused automated access on 2026-11-07 (HTTP 404/405); not retrieved."
   }
  },
  "Swarthmore": {
   "year": "2025-26",
   "src": [
    "B6-N31"
   ],
   "applicants": 12995,
   "admits": 977,
   "admitRate": 0.0752,
   "edApplicants": 1281,
   "edAdmits": 228,
   "edRate": 0.178,
   "waitlistOffered": null,
   "waitlistAccepted": null,
   "waitlistAdmitted": 14,
   "satSubmitPct": 0.4014,
   "actSubmitPct": 0.1479,
   "sat25": 1480,
   "sat75": 1550,
   "enrolled": 426,
   "nonresidentFirstYear": 57,
   "nonresidentShare": 0.1338,
   "note": {
    "zh": "C1 為性別列加總；候補名單只填錄取人數；有兩輪 ED。",
    "en": "C1 summed from sex rows; waitlist only the admitted count; two ED rounds."
   }
  }
 },
 "aid": {
  "MIT": {
   "year": "2025-26",
   "src": [
    "A7-H01"
   ],
   "available": true,
   "aidedNonresidents": 411,
   "avgAward": 81991,
   "totalAward": 33698421,
   "coa": 92760,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.884,
   "note": {
    "zh": "H6／G 經 WebFetch 摘要讀取，待在瀏覽器重查；交通欄寫 varies，未計入 COA。",
    "en": "H6/G read via a WebFetch summary, re-check in a browser; transportation \"varies\" and is left out of COA."
   }
  },
  "Caltech": {
   "year": "2025-26",
   "src": [
    "A7-H02"
   ],
   "available": true,
   "aidedNonresidents": 59,
   "avgAward": 85696,
   "totalAward": 5056044,
   "coa": 99222,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.864
  },
  "Stanford": {
   "year": "2025-26",
   "src": [
    "A7-H03"
   ],
   "available": true,
   "aidedNonresidents": 260,
   "avgAward": 85424,
   "totalAward": 22210145,
   "coa": 97545,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.876
  },
  "Harvard": {
   "year": "2025-26",
   "src": [
    "A7-H04",
    "A7-H32"
   ],
   "available": true,
   "aidedNonresidents": 805,
   "avgAward": 83013,
   "totalAward": 66826244,
   "coa": 95134,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.873,
   "note": {
    "zh": "CDS G1／G5 空白；COA 取 Harvard College 2026-27 費用頁區間下限（$95,134–$100,134）。",
    "en": "CDS G1/G5 blank; COA is the low end of Harvard College's 2026-27 cost page range ($95,134–$100,134)."
   }
  },
  "Yale": {
   "year": "2025-26",
   "src": [
    "A7-H05"
   ],
   "available": true,
   "aidedNonresidents": 459,
   "avgAward": 84185,
   "totalAward": 38640976,
   "coa": 98900,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.851
  },
  "Princeton": {
   "year": "2025-26",
   "src": [
    "A7-H06"
   ],
   "available": true,
   "aidedNonresidents": 597,
   "avgAward": 86736,
   "totalAward": 51781584,
   "coa": 95624,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.907
  },
  "Columbia": {
   "year": "2025-26",
   "src": [
    "A7-H07"
   ],
   "available": true,
   "aidedNonresidents": 248,
   "avgAward": 92699,
   "totalAward": 22989258,
   "coa": 99774,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.929
  },
  "Penn": {
   "year": "2025-26",
   "src": [
    "A7-H08"
   ],
   "available": true,
   "aidedNonresidents": 448,
   "avgAward": 80607,
   "totalAward": 36111968,
   "coa": 99082,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.814
  },
  "Brown": {
   "year": null,
   "src": [
    "A7-H09",
    "A7-H33"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 99994,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "CDS 匯出檔沒有 H6；COA 為 Brown 2026-27 新生費用頁，非 CDS。",
    "en": "No H6 in the CDS export; COA is Brown's 2026-27 first-year cost page, not CDS."
   }
  },
  "Cornell": {
   "year": "2025-26",
   "src": [
    "A7-H10"
   ],
   "available": true,
   "aidedNonresidents": 318,
   "avgAward": 88263,
   "totalAward": 28067649,
   "coa": 99734,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.885
  },
  "Georgetown": {
   "year": "2025-26",
   "src": [
    "A7-H11"
   ],
   "available": true,
   "aidedNonresidents": 48,
   "avgAward": 75050,
   "totalAward": 3602410,
   "coa": 100864,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.744
  },
  "CMU": {
   "year": "2025-26",
   "src": [
    "A7-H12"
   ],
   "available": false,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 93424,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "H6 勾選「not available」。",
    "en": "H6 marks \"not available\"."
   }
  },
  "Georgia Tech": {
   "year": "2025-26",
   "src": [
    "A7-H13"
   ],
   "available": false,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 55920,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "H6 勾選「not available」；COA 用非居民學費。",
    "en": "H6 marks \"not available\"; COA uses nonresident tuition."
   }
  },
  "Purdue": {
   "year": null,
   "src": [
    "A7-H14"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": null,
   "coaYear": null,
   "avgShareOfCoa": null,
   "note": {
    "zh": "CDS 檔案未取得（伺服器拒絕連線）。",
    "en": "CDS file not retrieved (server refused the connection)."
   }
  },
  "Michigan": {
   "year": null,
   "src": [
    "A7-H15"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": null,
   "coaYear": null,
   "avgShareOfCoa": null,
   "note": {
    "zh": "CDS 檔案未取得（HTTP 403）。",
    "en": "CDS file not retrieved (HTTP 403)."
   }
  },
  "UIUC": {
   "year": "2025-26",
   "src": [
    "A7-H16"
   ],
   "available": true,
   "aidedNonresidents": 45,
   "avgAward": 5176,
   "totalAward": 232934,
   "coa": 58276,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.089,
   "note": {
    "zh": "只勾非需求型；COA 用非居民學費。",
    "en": "Non-need-based only; COA uses nonresident tuition."
   }
  },
  "Olin": {
   "year": "2023-24",
   "src": [
    "A7-H17"
   ],
   "available": true,
   "aidedNonresidents": 29,
   "avgAward": 30069,
   "totalAward": 871994,
   "coa": 86474,
   "coaYear": "2023-24",
   "avgShareOfCoa": 0.348,
   "note": {
    "zh": "H6 與 COA 都是 2023-24。",
    "en": "H6 and COA are both 2023-24."
   }
  },
  "Harvey Mudd": {
   "year": "2025-26",
   "src": [
    "A7-H18",
    "V3-R1"
   ],
   "available": true,
   "aidedNonresidents": 38,
   "avgAward": 32564,
   "totalAward": 1237421,
   "coa": 104512,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.312,
   "note": {
    "zh": "COA 為學校公布的 2026-27 住校 COA（交通與健康保險未計入），與其他列的 CDS G1＋G5 基準不同。",
    "en": "COA is the college's published 2026-27 on-campus COA (transportation and health insurance left out), a different basis from the CDS G1+G5 rows."
   }
  },
  "Johns Hopkins": {
   "year": null,
   "src": [
    "A7-H19",
    "A7-H34"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 94858,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "CDS 未取得（HTTP 403），H6 不明；COA 為學校公布的 2026-27 大一住校 COA，含一次性 $500 matriculation fee。",
    "en": "CDS not retrieved (HTTP 403), so H6 unknown; COA is the school's published 2026-27 first-year on-campus COA, including a one-time $500 matriculation fee."
   }
  },
  "Duke": {
   "year": "2025-26",
   "src": [
    "A7-H20"
   ],
   "available": true,
   "aidedNonresidents": 215,
   "avgAward": 87841,
   "totalAward": 18885746,
   "coa": 99548,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.882,
   "note": {
    "zh": "G5 交通 $778 所在欄位未確認。",
    "en": "The column holding G5 transportation $778 is not confirmed."
   }
  },
  "Northwestern": {
   "year": "2025-26",
   "src": [
    "A7-H21"
   ],
   "available": true,
   "aidedNonresidents": 297,
   "avgAward": 74186,
   "totalAward": 22033357,
   "coa": 99321,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.747
  },
  "Rice": {
   "year": "2025-26",
   "src": [
    "A7-H22"
   ],
   "available": true,
   "aidedNonresidents": 164,
   "avgAward": 79444,
   "totalAward": 13028832,
   "coa": 98039,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.81
  },
  "UC Berkeley": {
   "year": "2025-26",
   "src": [
    "A7-H23"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 94194,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "H6 完全空白（未勾選、無數字），不等於宣稱沒有補助；COA 用非居民學費。",
    "en": "H6 left blank (no box, no figures), which is not a statement that no aid exists; COA uses nonresident tuition."
   }
  },
  "UCLA": {
   "year": "2025-26",
   "src": [
    "A7-H24",
    "A7-H35"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 84770,
   "coaYear": null,
   "avgShareOfCoa": null,
   "note": {
    "zh": "H6 與 G 欄皆空白；COA 為 UCLA 招生頁「Total – Nonresidents」，頁面未標學年、寫「may not be final」。",
    "en": "H6 and G blank; COA is the \"Total – Nonresidents\" line on UCLA's admission page, which names no year and says \"may not be final\"."
   }
  },
  "UC San Diego": {
   "year": "2025-26",
   "src": [
    "A7-H25"
   ],
   "available": null,
   "aidedNonresidents": 214,
   "avgAward": 10290,
   "totalAward": 2202096,
   "coa": 82588,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.125,
   "note": {
    "zh": "H6 未勾任何選項，但填了人數與金額；COA 用非居民學費。",
    "en": "No H6 box marked, but count and amounts filled in; COA uses nonresident tuition."
   }
  },
  "UT Austin": {
   "year": "2025-26",
   "src": [
    "A7-H26"
   ],
   "available": true,
   "aidedNonresidents": 832,
   "avgAward": 21343,
   "totalAward": 17757378,
   "coa": 66466,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.321,
   "note": {
    "zh": "COA 用非居民學費；必繳雜費欄空白。",
    "en": "COA uses nonresident tuition; required fees blank."
   }
  },
  "UW": {
   "year": "2025-26",
   "src": [
    "A7-H27"
   ],
   "available": false,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 66972,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "H6 勾選「not available」；COA 用「INTL」學費列。",
    "en": "H6 marks \"not available\"; COA uses the \"INTL\" tuition row."
   }
  },
  "Williams": {
   "year": null,
   "src": [
    "A7-H28"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": null,
   "coaYear": null,
   "avgShareOfCoa": null,
   "note": {
    "zh": "CDS 與費用頁都在 2026-11-07 拒絕自動存取（HTTP 403）。",
    "en": "CDS and cost pages refused automated access on 2026-11-07 (HTTP 403)."
   }
  },
  "Amherst": {
   "year": null,
   "src": [
    "V3-R5",
    "V3-R3",
    "V3-R4"
   ],
   "available": null,
   "aidedNonresidents": null,
   "avgAward": null,
   "totalAward": null,
   "coa": 98160,
   "coaYear": "2026-27",
   "avgShareOfCoa": null,
   "note": {
    "zh": "CDS 以分節 PDF 公布，未下載，H6 不明；COA 為學校公布的 2026-27 學生費用預算（交通與可豁免的健康保險未計入）。",
    "en": "CDS is published as section PDFs and was not downloaded, so H6 unknown; COA is the college's published 2026-27 student expense budget (travel and waivable health insurance left out)."
   }
  },
  "Swarthmore": {
   "year": "2025-26",
   "src": [
    "A7-H30"
   ],
   "available": true,
   "aidedNonresidents": 75,
   "avgAward": 87434,
   "totalAward": 6557536,
   "coa": 93172,
   "coaYear": "2026-27",
   "avgShareOfCoa": 0.938
  }
 }
};
