---
title: "Browser pass over pages that refused scripted fetches (US schools, Oxford, UCAT, Common App help center)"
date: 2026-11-07
cycle: 2026-27 (US, fall 2027 entry); 2027 entry (UCAS)
unit: A3, A5, B2, F2
review_by: Timmy
status: draft
sources:
  # id | url | access_date | class | supports
  # NOTE: no page below was opened and read in this run. "supports" names the lead each URL is expected to settle.
  - {id: B1,  url: "https://admission.princeton.edu/apply/graded-written-paper", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: graded written paper requirement (page not read; WebFetch certificate rejected)"}
  - {id: B2,  url: "https://admission.princeton.edu/apply/standardized-testing", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: test policy fall 2027 entry vs 2027-28 cycle (page not read)"}
  - {id: B3,  url: "https://admission.princeton.edu/apply/first-year-application-dates-deadlines", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: SCEA/RD deadlines (page not read)"}
  - {id: B4,  url: "https://admission.princeton.edu/apply/application-checklist", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: letters, supplementary materials (page not read)"}
  - {id: B5,  url: "https://undergrad.admissions.columbia.edu/apply/process/supplementary-materials", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: arts (SlideRoom) and research abstract policy (page not read; site returned 403)"}
  - {id: B6,  url: "https://undergrad.admissions.columbia.edu/apply/firstyear", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: deadlines, letters (page not read; 403)"}
  - {id: B7,  url: "https://admissions.purdue.edu/become-student/apply/", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: EA Nov 1 / RD Jan 15 (page not read; certificate rejected)"}
  - {id: B8,  url: "https://admissions.purdue.edu/become-student/first-year-criteria/", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: test policy (SAT/ACT/CLT), criteria (page not read)"}
  - {id: B9,  url: "https://admissions.purdue.edu/majors/engineering-first-year/", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: First-Year Engineering admission (page not read)"}
  - {id: B10, url: "https://admissions.northwestern.edu/apply/requirements.html", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: test policy, program-specific materials, letters (page not read; certificate rejected)"}
  - {id: B11, url: "https://admissions.northwestern.edu/faqs/application-process/", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: unsolicited supplemental materials policy (page not read)"}
  - {id: B12, url: "https://admissions.northwestern.edu/apply/application-deadlines.html", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: ED/RD deadlines (page not read)"}
  - {id: B13, url: "https://www.ox.ac.uk/admissions/undergraduate/courses/course-listing/engineering-science", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: H100, ESAT, interview (page not read; 403)"}
  - {id: B14, url: "https://www.ox.ac.uk/admissions/undergraduate/courses/course-listing/biology", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: Biology 2027 entry test/interview/UCAS code (page not read; 403)"}
  - {id: B15, url: "https://assets-oxweb.admin.ox.ac.uk/2026-03/Admissions%20Timeline%20portrait%202027-entry%20FINAL.pdf", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: Oxford 2027-entry timeline incl. interview window (not opened)"}
  - {id: B16, url: "https://www.ucat.ac.uk/about-ucat/ucat-test-dates/", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: UCAT 2026 dates (page not read; 403)"}
  - {id: B17, url: "https://www.ucat.ac.uk/faqs/", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: UCAT fees (page not read)"}
  - {id: B18, url: "https://appsupport.commonapp.org/s/article/are-there-word-limits-kudeoeos", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: Common App word limits article (not read; help center renders client-side, WebFetch got only a 'CSS Error' shell)"}
  - {id: B19, url: "https://www.commonapp.org/files/webinar_decks/Whats-New-with-Common-App-First-Year-2026-2027.pdf", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: 2026-27 changes to Activities section (not opened)"}
  - {id: B20, url: "https://www.commonapp.org/files/Whats-New-25-26.pdf", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: Additional Information 650 to 300 words; Challenges and circumstances (not opened)"}
  - {id: B21, url: "https://www.commonapp.org/static/f45949473bb80a91c80aface729d83df/Approaching-Activities.pdf", access_date: 2026-11-07, class: official, supports: "LEAD ONLY: Activities field character limits (not opened)"}
---

# Browser pass over blocked pages — result: no page read

## What happened in this run

- [事實] The built-in browser refused to open a new tab for this agent ("Could not open a new tab … tab cap reached"); the existing tabs belong to other work and were not touched (checked 2026-11-07).
- [事實] Fallback WebFetch attempts on 2026-11-07: admission.princeton.edu, admissions.purdue.edu, admissions.northwestern.edu returned "certificate rejected"; undergrad.admissions.columbia.edu, www.ox.ac.uk, www.ucat.ac.uk returned HTTP 403; appsupport.commonapp.org returned only a client-side loading shell ("Sorry to interrupt" / "CSS Error").
- [事實] A command-line fetch with a browser user-agent was refused by the session's permission layer as bot-check circumvention; it was not retried.
- No human-verification challenge was seen, because no page loaded.

Consequence: every item below is a **lead** taken from web-search result summaries of the official URLs, not from reading the page. Under rules 2 and 4 they are tagged `[假設]` and must not enter site data until a later run reads the page. Each target cell stays `not stated (checked 2026-11-07, URL) — page not readable this run`.

## 1. Princeton (B1–B4)

- [假設] Graded written paper required of all first-year applicants; from English, social studies or history, last three years of secondary school; expository/analytical writing preferred; at least one page; include prompt, grade, comments; originally written in English (B1, search summary).
- [假設] Test optional for fall 2027 entry; testing required again from the 2027-28 cycle (B2, search summary).
- Deadlines, letters, arts/research supplementary materials: not stated (checked 2026-11-07, B3/B4 not readable).

## 2. Columbia (B5–B6)

- [假設] Supplementary materials optional; research abstract of one to two pages via the Columbia questions in Common App; arts portfolios via SlideRoom (architecture, creative writing, dance, drama, film, maker, music, visual arts); no guarantee all materials are reviewed (B5, search summary). The summary flagged that Columbia's FAQ pages may be inconsistent on research materials — verify.
- Letters, deadlines: not stated (checked 2026-11-07, B6 not readable).

## 3. Purdue (B7–B9)

- [假設] Early Action Nov 1 (decisions Jan 15); Regular Decision Jan 15 (decisions Jan 15 to Mar 31); merit-scholarship consideration requires complete application by Nov 1 (B7, search summary). The summary noted none of the pages was labelled for the 2026-27 cycle.
- [假設] Accepts SAT, ACT or CLT, scores within five years, superscoring; applications without a test accepted in exceptional cases (B8, search summary). Whether this is "required" or "test optional" was not settled — verify.
- Letters, supplementary materials, First-Year Engineering admission rules: not stated (checked 2026-11-07, B9 not readable).

## 4. Northwestern (B10–B12)

- [假設] Test optional for first-year and transfer applicants (B10 and a 2026 RD context PDF, search summary).
- [假設] Unsolicited supplemental items (artwork, portfolios, recordings, websites) not accepted; program exceptions listed: Bienen (prescreening/portfolio, music teacher recommendation), ISP, MMSS, Musical Theater (B10/B11, search summary; FAQ possibly ~3.5 years old).
- Research materials, letters count, ED/RD dates: not stated (checked 2026-11-07, B10–B12 not readable).

## 5. Oxford and UCAT (B13–B17)

- [假設] Engineering Science 2027 entry: UCAS code H100 (4-year MEng); ESAT required (Mathematics 1, Mathematics 2, Physics); online interview for shortlisted candidates; shortlisting from end of November, interviews early to mid-December (B13/B15, search summary). An outdated college page still says PAT — ignore it.
- Biology 2027 entry (test, interview, UCAS code): not stated (checked 2026-11-07, B14 not readable; search returned nothing).
- [假設] UCAT 2026: booking opened 23 Jun 2026; testing 13 Jul to 24 Sep 2026; booking deadline 16 Sep 2026 (B16, search summary). Fees £70 UK / £115 outside UK came from an FAQ page the summary itself called older — do not use without reading B17. List of UCAT universities: not stated (checked 2026-11-07).

## 6. Common App help center (B18–B21)

- [假設] Activities: position/leadership 50 characters, organization name 100, description/details 150 (B21, search summary). 2026-27 deck reportedly renames the section "Activities and experiences", makes position optional, keeps limits unchanged (B19).
- [假設] Honors: per-honor character limit not stated in the search summaries; the summary's "honors 150" wording appears to describe activity details — do not record. Not stated (checked 2026-11-07).
- [假設] Additional Information: reduced from 650 to 300 words for first-year from 2025-26 (B20, search summary).
- [假設] Challenges and circumstances: replaced "Community disruption"; 250-word limit (B20, search summary).
- Other Recommender: no help-center article located; not stated (checked 2026-11-07).
- [推論] The help center (Salesforce Experience site) renders only with JavaScript, so it needs a real browser tab; a future run should read B18 and search the help center for "Other Recommender" and "Honors".

## Next step

A run with a free browser tab should open B1–B21 directly and promote verified items to `[事實]`, replacing these leads.

## 中文摘要（本筆記重點）

- [事實] 這一輪原本要用內建瀏覽器重讀先前被擋的頁面，但瀏覽器以「tab cap reached」拒絕開新分頁；既有分頁屬於其他工作，沒有動（2026-11-07 查核）。
- [事實] 改用 WebFetch 也失敗：Princeton、Purdue、Northwestern 回「certificate rejected」；Columbia、Oxford、UCAT 回 HTTP 403；Common App help center 只回一個前端載入殼（「CSS Error」）。換 browser user-agent 的指令被權限層視為繞過 bot 檢查而拒絕，沒有再試。
- 結論：本筆記所有條目都只是從搜尋摘要得來的「線索」，一律標 `[假設]`，在之後的 run 真正讀到頁面前，不得進入 site data；對應格子維持 not stated。
- [假設] Princeton：所有一年級申請者都要交一篇有評分的書面作業（英文、社會或歷史科，近三年內、至少一頁，附題目、分數與評語，原文須為英文）。fall 2027 入學 test optional，2027–28 申請季起恢復要求考試。(B1, B2)
- [假設] Columbia：補充材料選交；research abstract 一至兩頁，透過 Common App 裡的 Columbia 題目提交；藝術類作品集（含 maker）走 SlideRoom；不保證每份都會審。搜尋摘要提醒其 FAQ 對研究材料的說法可能前後不一，需核對。(B5)
- [假設] Purdue：EA 11/1（1/15 放榜）、RD 1/15；要被納入 merit scholarship 考量須在 11/1 前送齊。接受 SAT、ACT 或 CLT，可 superscore；究竟算「必繳」還是「test optional」尚未釐清。頁面都沒標 2026–27 年度。(B7, B8)
- [假設] Northwestern：一年級與轉學生皆 test optional；不收未被要求的補充材料（作品、作品集、錄音、網站），例外是 Bienen、ISP、MMSS、Musical Theater 等特定學程。該 FAQ 可能已約 3.5 年未更新。(B10/B11)
- [假設] Oxford Engineering Science 2027 入學：UCAS code H100（四年 MEng），須考 ESAT（Mathematics 1、Mathematics 2、Physics），入圍者線上面試，11 月底起篩選、12 月上中旬面試。舊的學院頁仍寫 PAT，應忽略。Biology 的考試、面試與 UCAS code：not stated。(B13/B15)
- [假設] UCAT 2026：6/23 開放報名，7/13–9/24 應考，9/16 報名截止。£70／£115 的費用出自摘要自己都說較舊的 FAQ，未讀 B17 前不要採用。(B16)
- [假設] Common App Activities：職位 50 字元、組織名稱 100、描述 150；2026–27 據稱改名為「Activities and experiences」、職位改為選填、字數上限不變。Honors 每項字數上限 not stated，摘要裡的「honors 150」看起來是在講 activity 描述，不予記錄。(B21, B19)
- [假設] Additional Information 從 2025–26 起由 650 字縮為 300 字；「Challenges and circumstances」取代「Community disruption」，上限 250 字。(B20)
- [推論] Common App help center 是 Salesforce Experience 網站，必須跑 JavaScript 才會出內容，要用真正的瀏覽器分頁；Other Recommender 的說明文章這次找不到，下一輪應直接讀 B18，並在 help center 搜尋「Other Recommender」與「Honors」。
