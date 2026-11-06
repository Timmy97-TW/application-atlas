---
title: "Princeton, Northwestern and Purdue read at last: the three hosts that had refused every request"
date: 2026-11-07
cycle: 2026-27 (US, fall 2027 entry)
unit: E3, A3, A5, B2, B7
review_by: Timmy
status: draft
code: V4
sources:
  | id | url | access_date | class | supports |
  | -- | --- | ----------- | ----- | -------- |
  | T1 | https://admission.princeton.edu/apply/graded-written-paper | 2026-11-07 | official | Princeton graded written paper: required of all applicants, subjects, length, what to include, two submission routes |
  | T2 | https://admission.princeton.edu/apply/standardized-testing | 2026-11-07 | official | Princeton test optional for fall 2027 entry; required from the 2027-28 cycle (fall 2028); score choice, ACT sections, codes |
  | T3 | https://admission.princeton.edu/apply/application-checklist | 2026-11-07 | official | Princeton checklist: Common App only, two teacher letters, SR plus separate counselor letter, midyear report, arts supplement, optional alumni interview, three-application limit |
  | T4 | https://admission.princeton.edu/apply/first-year-application-dates-deadlines | 2026-11-07 | official | Princeton SCEA Nov 1 / RD Jan 1, arts supplement Nov 6 / Jan 8, aid Nov 9 / Feb 1, reply May 1 |
  | T5 | https://admissions.northwestern.edu/apply/requirements.html | 2026-11-07 | official | Northwestern: test optional, two letters, 2026-27 writing supplement prompts and word limits, personal essay no longer required, Glimpse and InitialView, programme-specific supplements |
  | T6 | https://admissions.northwestern.edu/faqs/application-process/ | 2026-11-07 | official | Northwestern: unsolicited supplemental items not accepted and not reviewed, including websites; no alumni interviews; deadlines |
  | T7 | https://admissions.northwestern.edu/apply/application-deadlines.html | 2026-11-07 | official | Northwestern dated deadlines for 2026-27: QuestBridge Oct 1 2026, ED Nov 1 2026, RD Jan 4 2027, aid dates |
  | T8 | https://admissions.purdue.edu/become-student/apply/ | 2026-11-07 | official | Purdue: Common App for West Lafayette and Indianapolis, fall application window Aug 1 to Jan 15, Polytechnic Statewide on Purdue's own application |
  | T9 | https://admissions.purdue.edu/become-student/first-year-criteria/ | 2026-11-07 | official | Purdue: SAT, ACT and CLT accepted and no preference, scores within five years, Nov 1 Early Action deadline encompassing scholarship consideration, the factor list, no separate ACT Science score |
  | T10 | https://admissions.purdue.edu/become-student/international/ | 2026-11-07 | official | Purdue: admission is to a specific major; international curriculum requirements; no world-language requirement for applicants from non-English-speaking countries; no IB minimum |
---

# The three hosts that had refused everything

Rounds 1 and 2 recorded Princeton, Northwestern and Purdue as refusing every
request at the TLS layer across two independent request paths — twelve URLs, no
response body, no human-verification page — and concluded that retrying was not
work and only the maintainer could settle these claims (Q002, BACKLOG E3).

That conclusion was wrong by the end of 2026-11-07. The link check run at about
05:40 reported two of these URLs as **HTTP 404** rather than as connection
failures, which only happens if the connection succeeded. A direct check of
three pages, one per host, returned **HTTP 200** from all three. Ten pages were
then fetched and read.

## Method and what this says about the earlier diagnosis

- [事實] Ten pages fetched 2026-11-07 about 05:45-06:00, plain requests, default
  user agent, no header spoofing and no bypass of anything. All ten returned
  HTTP 200 with full HTML (52-121 KB each).
- [推論] The "certificate rejected" of rounds 1 and 2 was a property of the
  fetching path used then, not of these hosts. The hosts had been described in
  this repo as permanently unreadable and the claim was passed on to the
  maintainer as work only a person could do; that was an overstatement of a
  transient failure, and the correction belongs on the record.
- [推論] The lesson generalises to the three-kinds taxonomy of round 2: a
  refusal observed at one moment through one client is evidence about that
  moment and that client. Re-testing a "permanent" refusal cost one command.

## 1. Princeton

- [事實] **A graded written paper is required of every applicant** ("We ask all
  students to submit a graded written paper"). From an academic course in
  English, social studies or history, in the last three years of secondary
  school including senior year. A paper, essay, research paper or in-class essay
  exam is acceptable; Princeton is "most interested in seeing expository,
  thesis-driven analytical writing rather than science research, creative
  writing, personal narratives or papers mostly focused on data analysis". At
  least one page. Include the whole paper, the prompt, the grade and any
  comments, and the rubric if one was used. Originally written in English, no
  translations. If the school does not grade work, send teacher comments and a
  rubric. (T1, T3)
- [事實] Two submission routes: upload with the Common Application, or upload to
  the applicant portal, email, or post by USPS. "The Admission Office is more
  interested in the quality of the writing than the grade it received." (T1)
- [事實] **Test policy, both cycles, from the page itself**: test optional for
  first-year and transfer applicants entering fall 2027 (the 2026-27 cycle);
  Princeton returns to **requiring** SAT or ACT with the 2027-28 cycle, for
  entry in fall 2028. Active military personnel are exempt from the new
  requirement. The decision followed a review of five years of test-optional
  data. (T2, T3)
- [事實] If scores are submitted they must come from the testing firm, not
  self-reported. Score choice is allowed on the SAT; only the highest ACT
  composite is used; Princeton does **not** superscore between the paper and
  digital SAT. The redesigned ACT's science section is optional; exams before
  April 2025 report all four sections. (T2)
- [事實] Checklist: Common Application only, plus Princeton-specific Questions;
  fee waiver by Common App or by one of four named waivers, with Princeton's own
  waiver needing no counselor approval; official transcript from the school;
  School Report **and a separate counselor recommendation** (the page warns they
  are two invitations, not one); **two teacher recommendations from higher-level
  courses in different academic areas**, in core subjects; midyear school
  report. (T3)
- [事實] Optional components are an **arts supplement only** — architecture,
  creative writing, dance, music, music theater, theater, visual arts — declared
  in the Princeton member questions and submitted through the applicant portal
  **after** the application itself. No research or engineering supplement is
  offered on these pages. (T3)
- [事實] Optional alumni interviews, 30-45 minutes, after the application
  arrives; an applicant may opt out inside the Princeton-specific Questions "and
  this choice will not put you at any disadvantage"; coverage depends on alumni
  availability and is not guaranteed; no on-campus interviews; the interviews
  "must not be recorded in any way, either by the interviewer or the applicant".
  QuestBridge National College Match participants cannot do an interview or an
  arts supplement, for timing reasons. (T3)
- [事實] "If a student has submitted an application on three separate occasions,
  the Office of Admission generally will not review subsequent applications."
  And: "No particular factor is assigned a fixed weight." (T3)
- [事實] Dates for this cycle: SCEA application and graded written paper, school
  report, counselor letter, transcript and both teacher evaluations due Nov 1;
  optional arts supplement Nov 6; Princeton financial aid application Nov 9;
  decisions mid-December. Regular decision: application and the same materials
  Jan 1; arts supplement Jan 8; aid Feb 1; decisions late March; reply May 1.
  Single-choice early action is non-binding but excludes early applications to
  other private US colleges. (T4)
- [事實] The sentence "We are not looking for perfect…" that Q002 asked about
  does not appear on any of these four pages. It is not asserted anywhere on
  this site and stays unsourced.

## 2. Northwestern

- [事實] **Northwestern no longer requires the Common Application personal
  essay.** Its writing-supplement page says applicants may repurpose essays
  written for other applications "(including the Common/Coalition Application
  personal essay, which we no longer require)", and that a personal essay or
  additional information is "welcome—but by no means expect[ed]". (T5)
- [事實] 2026-27 first-year writing supplement, from the page: one **required**
  question in **300 words or fewer** (what aspects of your background have
  shaped how you see yourself engaging in Northwestern's community), then "at
  least one and no more than two" of five questions in **fewer than 200 words
  each** (The Rock; an interdisciplinary class, research project or creative
  effort and ideal collaborators; communities or student groups; the location;
  how your background adds to the diversity of perspectives). (T5)
- [事實] **Unsolicited supplements are refused in writing**: "Northwestern does
  not accept unsolicited supplemental items, such as artwork, portfolios,
  recordings (CDs, DVDs, etc.) or websites (including social media). These items
  will not be reviewed and therefore should not be submitted." (T6)
- [事實] Two letters required: one from the school counselor, one from a teacher
  "most likely … from one of your core subject areas, in your junior or senior
  year". Supplemental letters from an additional reference are accepted, and
  "it is in your best interest that each letter provides new or different
  information about you". (T5)
- [事實] Test optional for first-year and transfer applicants, no preference
  between SAT and ACT. SAT superscoring is automatic in Northwestern's system;
  ACT superscores must be the official MyACT superscore and **must not be
  self-calculated**. Self-reporting is allowed; admitted students who enrol must
  then send official scores confirming the self-reported highs. (T5)
- [事實] No alumni interviews; 'Cat Chats replace them and are not part of the
  application. Two optional recorded channels instead, neither required and
  neither a disadvantage to skip: **Glimpse**, a 60-90 second video, for
  students applying from US high schools; **InitialView** for students applying
  from international high schools, which "does not review or rate the
  interviews" — evaluation is by the admissions committee only. Both are due
  **Nov 6 for Early Decision and Jan 16 for Regular Decision**. (T5, T6)
- [事實] Programme-specific extra materials exist for Bienen School of Music (a
  supplement, prescreening or portfolio materials, a required music teacher
  letter, auditions booked through the supplement, with deadlines earlier than
  the general application), the **Integrated Science Program** (a separate
  application; admission to Northwestern does not imply admission to ISP and the
  ISP outcome does not affect the general decision), Mathematical Methods in
  Social Sciences, and Musical Theater. (T5)
- [事實] Dated deadlines for 2026-27: QuestBridge Oct 1 2026; Early Decision
  Nov 1 2026 with aid Dec 1 2026; Regular Decision Jan 4 2027 with aid Feb 1
  2027; decisions from December 2026. (T7)
- [事實] "Last year we enrolled approximately 50% of our incoming freshman class
  from early decision", and aid is the same under either plan. (T5)
- [事實] No wording about a "tally of touchpoints" or demonstrated interest
  appears on the requirements page or the application-process FAQ. The claim
  attributed to Northwestern in earlier leads is **not on these pages** and is
  not asserted on this site.

## 3. Purdue

- [事實] **Early Action Nov 1 is the scholarship deadline**: "If able, you
  should take the SAT or ACT in the spring of your junior year in preparation
  for the Nov. 1 Early Action deadline that encompasses scholarship
  consideration." The fall application window for West Lafayette and
  Indianapolis is **Aug 1 to Jan 15**, through the Common App; Polytechnic
  Statewide locations use Purdue's own application on a different calendar. (T8, T9)
- [事實] **Purdue accepts the CLT.** "Purdue accepts SAT, ACT and CLT scores. We
  have no preference on which test you take." Highest section scores across
  dates may be combined for a given test; scores must be from within the past
  five years; no separate ACT Science score is required. School codes ACT 1230,
  SAT 1631; for the CLT, Purdue is selected in the student dashboard. Whether a
  score is *required* is not stated as such on the criteria page: the factor
  list reads "SAT, ACT or CLT scores (if provided)". (T9)
- [事實] The factor list in full: high school course expectations; overall
  grades in academic coursework; grades in academic core coursework (English,
  math, laboratory science, world language, social studies); SAT/ACT/CLT if
  provided; proof of English proficiency for international students whose first
  language is not English; ability to be successful in the intended major;
  essay and answers to the Purdue questions; activities, leadership and
  achievements outside the classroom; opportunities unique to the applicant's
  experience. **Letters of recommendation do not appear in that list**, and
  neither of these pages states a letters policy at all. (T9)
- [事實] Minimum course expectations include four years of mathematics and
  three of laboratory science **for all majors**; four years of English. An
  applicant from a non-English-speaking country is not required to meet the
  world-language requirement. There is no overall IB minimum score, and higher
  level is given no preference over standard level. (T9, T10)
- [事實] Admission is **to a specific major**, which the international page
  states outright: "When you apply to Purdue, you apply for admission into a
  specific major." (T10)
- [事實] An Indiana-specific route exists (Enrollment Honors Plus Seal →
  pre-admission) that requires a complete application **including an SAT, ACT or
  CLT score by Nov 1 of senior year**; it does not apply to applicants from
  Taiwan but it shows the Nov 1 date doing double duty. (T9)

## What is still missing from these three

- Purdue's letters-of-recommendation policy, and its English-proficiency
  minimums, are not on the two pages read; both need the English-proficiency
  page itself. Not stated here, not guessed.
- Princeton's "what we look for" wording (the "not looking for perfect"
  sentence) was not found on the four pages read.
- Northwestern's ISP requirements live on the ISP site, not the admissions site.

## Non-obvious findings

- [事實] Princeton requires a graded written paper from every applicant and
  names what it does **not** want in it: science research, creative writing,
  personal narratives, data-analysis-heavy papers. For an engineering or biology
  applicant whose strongest writing is a lab report or a research write-up, the
  one required writing artefact at Princeton is explicitly not that.
- [事實] Northwestern has dropped the Common App personal essay as a
  requirement while four other schools' pages in this repo still treat it as the
  centre of the application. Nothing in the Common App interface signals this;
  it is stated only on Northwestern's own page.
- [事實] Northwestern names **websites** among the unsolicited materials it will
  not review. For the question this repo exists to answer — how a multi-year
  record built outside school enters an application — Northwestern's answer is
  that a link does not, and a portfolio does not; only the activity chart, the
  essays and a supplemental letter do.
- [事實] Three schools, three different homes for the same optional video: at
  Northwestern it is Glimpse for US applicants and InitialView for international
  applicants, both with their own Nov 6 / Jan 16 deadlines; Princeton has no
  video channel at all and an opt-out checkbox for alumni interviews; Purdue's
  factor list mentions no interview or video.
- [推論] Purdue is the only school in this repo so far that names the CLT
  alongside the SAT and ACT. An applicant in Taiwan choosing which test to sit
  gains nothing from that unless Purdue is on the list, but it does mean a
  Purdue-specific test decision exists where other schools offer none.
- [事實] At Princeton the arts supplement can only be submitted **after** the
  application, through the portal, and its deadline (Nov 6 / Jan 8) falls after
  the application deadline (Nov 1 / Jan 1). The sequencing section of the
  insights page lists portfolio dates that fall before the application; this is
  the opposite case and the dates are now sourced to the school's own page.

## 中文摘要

- [事實] 第一、二輪把 Princeton、Northwestern、Purdue 記成「TLS 層永久拒絕、只能靠維護者本人開頁」。到 2026-11-07 清晨這個結論已經不成立：05:40 的連結檢查把其中兩個網址報成 HTTP 404（能回 404 就表示連上了），直接測三個主機各一頁都回 HTTP 200，接著十頁全部抓到並讀完。
- [推論] 當時的「certificate rejected」是那條抓取路徑的問題，不是這三個主機的政策。本站先前把它寫成永久性障礙並交給維護者，這是把暫時性失敗說過頭了，更正留在記錄裡。重測一次只要一道指令。
- [事實] Princeton：**所有申請人都必須交一份有成績的課堂作業（graded written paper）**，科目限英文、社會或歷史，近三年內，至少一頁，要連題目、分數、老師評語（有 rubric 也要附）一起交，須原本就以英文寫成。學校明說比較想看「論說、有主軸的分析寫作」，而**不是**科學研究、創意寫作、個人敘事或以資料分析為主的報告。可隨 Common App 上傳，也可上傳到 applicant portal。
- [事實] Princeton 的考試政策（頁面原文）：2026-27 季（2027 秋入學）維持選繳；**2027-28 季（2028 秋入學）起恢復必繳**。送分必須由考試機構直接送，SAT 可用 score choice，ACT 只取最高 composite，紙筆與數位 SAT 之間不 superscore。
- [事實] Princeton 清單：只收 Common App＋Princeton 專屬問題；School Report 與輔導老師推薦信是**兩個分開的邀請**；**兩封老師推薦信，須來自不同學科領域的高階課程**；期中成績單。選繳項目只有藝術補充（送出申請後才能從 portal 交，SCEA 11/6、RD 1/8），沒有研究或工程類補充。校友面試選擇性，可在專屬問題裡勾選不參加且不吃虧，不保證每人都有，無校內面試，且**面試雙方都不得錄音**。同一人申請三次之後，之後的申請通常不再審。
- [事實] Northwestern **已經不要求 Common App 的主文書**（頁面原文：「the Common/Coalition Application personal essay, which we no longer require」）。2026-27 寫作補充：必答一題 300 字以內，另從五題中選答一至兩題、每題 200 字以內（題目已逐題記在筆記裡）。
- [事實] Northwestern 明文拒收未經要求的補充材料：「does not accept unsolicited supplemental items, such as artwork, portfolios, recordings (CDs, DVDs, etc.) or websites (including social media). These items will not be reviewed and therefore should not be submitted.」**連網站都點名在內**。
- [事實] Northwestern 要兩封推薦信（輔導老師一封、核心科目老師一封），額外推薦信會收但要提供「新的或不同的資訊」；不辦校友面試，改成 'Cat Chats（與申請無關）；美國高中申請者可選 Glimpse 60-90 秒影片，國際高中申請者可用 InitialView，兩者都是 ED 11/6、RD 1/16 截止，InitialView 自己不評分。音樂（Bienen）、ISP、MMSS、音樂劇有各自的額外材料；ISP 是另外一份申請，錄不錄 ISP 與一般錄取互不影響。日期：QuestBridge 2026-10-01、ED 2026-11-01（補助 12/1）、RD 2027-01-04（補助 2/1）。去年約 50% 新生來自 ED。
- [事實] Purdue：**11/1 Early Action 同時是獎學金考慮的截止日**（原文「the Nov. 1 Early Action deadline that encompasses scholarship consideration」）；West Lafayette 與 Indianapolis 的秋季申請期間是 8/1 至 1/15，走 Common App。**Purdue 收 CLT**，與 SAT、ACT 並列且沒有偏好，成績須在五年內。審查因素清單裡**沒有推薦信**，這兩頁也完全沒寫推薦信政策。所有主修都要四年數學、三年實驗科學；非英語國家的申請者免世界語言要求；IB 沒有最低分，HL 不優於 SL。申請時就是**申請某一個特定主修**。
- [事實] 仍缺：Purdue 的推薦信政策與英語能力最低標（要讀 English proficiency 專頁）、Princeton「We are not looking for perfect…」那句話（讀過的四頁都沒有）、Northwestern ISP 的詳細要求（在 ISP 自己的網站）。
