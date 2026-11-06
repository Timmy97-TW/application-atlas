---
title: "Browser verification of index-excerpt and lead-only claims (MIT CDS, Columbia, Oxford, UCAT, Common App help center, Duke, Georgetown; Princeton/Northwestern/Purdue blocked)"
date: 2026-11-07
cycle: 2026-27 (US, fall 2027 entry); 2027 entry (UCAS)
unit: A3, A5, B2, B5, F2
review_by: Timmy
status: draft
sources:
  # id | url | access_date | class | supports
  - {id: V01, url: "https://ir.mit.edu/projects/2025-26-common-data-set/", access_date: 2026-11-07, class: official, supports: "MIT CDS G1, G5, H6 (re-read of H01)"}
  - {id: V02, url: "https://undergrad.admissions.columbia.edu/apply/process/supplementary-materials", access_date: 2026-11-07, class: official, supports: "Columbia research abstract, SlideRoom portfolios, supplement deadlines (B5)"}
  - {id: V03, url: "https://undergrad.admissions.columbia.edu/faq", access_date: 2026-11-07, class: official, supports: "Columbia extra letters (O73)"}
  - {id: V04, url: "https://undergrad.admissions.columbia.edu/apply/firstyear", access_date: 2026-11-07, class: official, supports: "Columbia deadlines, letters, test policy (B6)"}
  - {id: V05, url: "https://appsupport.commonapp.org/s/article/are-there-word-limits-kudeoeos", access_date: 2026-11-07, class: official, supports: "B18 article content (UChicago-specific)"}
  - {id: V06, url: "https://appsupport.commonapp.org/s/article/Why-am-I-unable-to-assign-an-Other-Recommender-to-a-school", access_date: 2026-11-07, class: official, supports: "Other Recommender types set per college"}
  - {id: V07, url: "https://appsupport.commonapp.org/s/global-search/honors%20character%20limit", access_date: 2026-11-07, class: official, supports: "help-center search: no Honors character-limit article in results (also searched 'honors section')"}
  - {id: V08, url: "https://www.ox.ac.uk/admissions/undergraduate/courses/course-listing/engineering-science", access_date: 2026-11-07, class: official, supports: "Oxford Engineering Science H100, ESAT, interview (B13)"}
  - {id: V09, url: "https://www.ox.ac.uk/admissions/undergraduate/courses/course-listing/biology", access_date: 2026-11-07, class: official, supports: "Oxford Biology C100, no test, interview (B14)"}
  - {id: V10, url: "https://www.ucat.ac.uk/about-ucat/ucat-test-dates/", access_date: 2026-11-07, class: official, supports: "UCAT 2026 dates (B16)"}
  - {id: V11, url: "https://www.ucat.ac.uk/faqs/", access_date: 2026-11-07, class: official, supports: "UCAT fees (B17)"}
  - {id: V12, url: "https://admissions.duke.edu/resources/", access_date: 2026-11-07, class: official, supports: "Duke demonstrated interest / knowledge (O41)"}
  - {id: V13, url: "https://uadmissions.georgetown.edu/apply/first-year-applicants/", access_date: 2026-11-07, class: official, supports: "Georgetown interview 'key part' (O97 URL /alumni-interview/ redirects here); EA/RD dates; SAT/ACT required"}
  - {id: V14, url: "https://uadmissions.georgetown.edu/faq/faq-alumni-interview/", access_date: 2026-11-07, class: official, supports: "Georgetown alumni-interview FAQ (no requirement/waiver wording)"}
  - {id: V15, url: "https://uadmissions.georgetown.edu/faq/faq-international-applicants/", access_date: 2026-11-07, class: official, supports: "Georgetown interview waiver, InitialView, international aid (O98)"}
  - {id: V16, url: "https://admission.princeton.edu/apply/graded-written-paper", access_date: 2026-11-07, class: official, supports: "BLOCKED: browser navigation denied or failed (also /apply/standardized-testing)"}
  - {id: V17, url: "https://admissions.northwestern.edu/apply/requirements.html", access_date: 2026-11-07, class: official, supports: "BLOCKED: browser navigation denied or failed (also /faqs/application-process/)"}
  - {id: V18, url: "https://admissions.purdue.edu/become-student/apply/", access_date: 2026-11-07, class: official, supports: "BLOCKED: browser navigation denied or failed (also /become-student/first-year-criteria/)"}
  - {id: V19, url: "https://www.commonapp.org/files/webinar_decks/Whats-New-with-Common-App-First-Year-2026-2027.pdf", access_date: 2026-11-07, class: official, supports: "NOT OPENED: server sent a file download; not downloaded (B19; B20/B21 PDFs not attempted for the same reason)"}
---

# Browser verification of index-excerpt and lead-only claims

## Method

- [事實] One built-in browser tab was opened, used for every page below, and closed at the end of the run (2026-11-07). No sign-in. No human-verification or bot challenge appeared on any page that loaded.
- [事實] Text was read from the rendered page, including the text of collapsed accordion sections (read from the page's DOM, not from search excerpts).
- [事實] admission.princeton.edu, admissions.northwestern.edu and admissions.purdue.edu: every navigation returned "denied or failed" (two attempts per host, different paths). This is the same set of hosts that rejected scripted fetches with certificate errors in earlier runs. These are recorded as **blocked**; nothing on them is verified. Not a human-verification page; no bypass attempted.
- [事實] Common App PDF decks (B19–B21) are served as file downloads. Downloading was not in scope, so they were not opened.
- Verdicts: **confirmed** = the page says it; **contradicted** = the page says something different; **not on page** = the page loaded but does not say it; **blocked** = the page could not be read.

## Results

| # | Claim | Original note + id | Verdict | Evidence (page wording ≤15 words, or reason) |
|---|---|---|---|---|
| 1 | MIT H6: 411 nonresidents awarded aid | international-aid-numbers H01 | confirmed | "provide the number of undergraduate degree-seeking nonresident aliens who were awarded … aid: 411" (V01) |
| 2 | MIT H6: average $81,991 | H01 | confirmed | "Average dollar amount … nonresident aliens: $81,991" (V01) |
| 3 | MIT H6: total $33,698,421 | H01 | confirmed | "Total dollar amount … nonresident aliens: $33,698,421" (V01) |
| 4 | MIT H6: need-based aid only | H01 | confirmed | only "Institutional need-based scholarship or grant aid is available" is checked (V01). H1–H6 year marked "2025-2026 estimated". |
| 5 | MIT G1: tuition $66,720, fees $420, food and housing $22,194 | H01 | confirmed | values match (V01). Note: G1 heading on the page says "FULL 2026-2027 academic year". [推論] The COA in H01 is therefore the 2026-27 cost set beside 2025-26 aid; the note should say so. |
| 6 | MIT G5: books $930, transportation varies, other $2,496 | H01 | confirmed | "Books and supplies: $930 … Transportation: varies … Other expenses: $2,496" (V01) |
| 7 | Columbia: supplementary materials optional | blocked-pages B5 | confirmed | "all supplements are entirely optional and not required for our review process" (V02) |
| 8 | Columbia: research abstract one to two pages | B5 | **contradicted** | "research abstracts are typically one page in length" (V02) |
| 9 | Columbia: abstract uploaded via Columbia questions in Common App | B5 | confirmed | "upload your abstract in the Columbia-specific questions to the Common Application" (V02). Page adds: links elsewhere "will not be reviewed"; short questions on role and mentor; mentor letter welcome. |
| 10 | Columbia: arts portfolios via SlideRoom (architecture, creative writing, dance, drama, film, music, visual arts); maker portfolio | B5 | confirmed | "…Film, Music and Visual Arts supplements can be submitted through Columbia's SlideRoom portal" (V02); Maker portfolio also via SlideRoom; resume PDF and a reference required for each portfolio. |
| 11 | Columbia: no guarantee all materials reviewed | B5 | confirmed | "we can provide no guarantee that all materials will be reviewed or evaluated" (V02) |
| 12 | Columbia: supplement deadlines | B5 (not stated before) | confirmed (fills gap) | "Early Decision … by November 1 and Regular Decision … by January 1" (V02) |
| 13 | Columbia: extra letters only from research or college-course context; extras discouraged | admissions-own-voice O73 | confirmed | "worked with you in a researcher or college course capacity"; "discourages the submission of additional recommendations" (V03) |
| 14 | Columbia: does not track demonstrated interest | O73 | not on page | FAQ page renders 50 of 187 questions; no demonstrated-interest item among them (V03). Unverified. |
| 15 | Columbia: deadlines, letters, test policy | B6 (not stated before) | confirmed (fills gap) | ED Nov 1, RD Jan 1; "Columbia requires two teacher recommendations"; Fall 2027 entrants "may choose whether or not to submit testing", required from 2027-28 cycle (V04) |
| 16 | Oxford Engineering Science UCAS code H100 | B13 | confirmed | "Engineering Science H100" in course-code table (V08) |
| 17 | Oxford Engineering: ESAT with Mathematics 1, Mathematics 2, Physics | B13 | confirmed | "All applicants must take the Engineering and Science Admissions Test (ESAT)" (V08); test dates 12–16 Oct 2026, booking 20 Jul–28 Sep 2026 |
| 18 | Oxford Engineering: online interview for shortlisted candidates | B13 | confirmed | "Shortlisted candidates will be invited to at least one online interview" (V08) |
| 19 | Oxford: shortlisting from end of November; interviews early to mid-December | B13/B15 | not on page (partly) | Course page says only "Interviews are expected to take place in December" (V08). Shortlisting date and "early to mid" not on page; B15 PDF not opened. |
| 20 | Oxford Biology: UCAS code, test, interview | B14 (not stated before) | confirmed (fills gap) | "UCAS code: C100"; "You do not need to take a written test"; online interview for shortlisted, December (V09) |
| 21 | UCAT 2026 booking opened 23 Jun 2026 | B16 | confirmed | "23 June 2026 (14:00 UK Time) Booking opens" (V10) |
| 22 | UCAT testing 13 Jul–24 Sep 2026 | B16 | confirmed | "13 July 2026 Testing starts"; "24 September 2026 Last test day" (V10) |
| 23 | UCAT booking deadline 16 Sep 2026 | B16 | confirmed | "16 September 2026 (15:00 UK Time) Booking deadline" (V10) |
| 24 | UCAT fee £70 UK / £115 outside UK | B17 | confirmed | "Tests taken in the UK: £70 Tests taken outside the UK: £115" (V11). Page gives no cycle year for the fee. |
| 25 | Common App word-limits article (B18) gives Common App limits | B18 | not on page | Article is UChicago-specific: no strict limits; suggests ~650 and 250–500 words (V05). It is not a general Common App limits article. |
| 26 | Common App: Other Recommender rules | B18 note ("no article located") | confirmed (fills gap) | "Not every college accepts all types of Other Recommenders" (V06); types shown in each college's Recommenders and FERPA section. |
| 27 | Common App Honors per-entry character limit | B18 note | not on page | Help-center search "honors character limit" and "honors section" returned no limits article (V07). Stays not stated. |
| 28 | Common App Activities limits, 2026-27 changes, Additional Information 300 words, Challenges 250 words | B19–B21 | blocked | PDFs served as downloads; not opened (V19). Remain leads. |
| 29 | Duke: demonstrated interest "is not a plus factor" | O41 | confirmed | "“Demonstrated interest” as most people use the term is not a plus factor" (V12) |
| 30 | Duke: applicants show "demonstrated knowledge"; contacting office discouraged | O41 | confirmed | "we discourage students from contacting the Admissions Office in order to demonstrate their interest" (V12) |
| 31 | Georgetown: interviews "a key part of Georgetown's application process" | O97 | confirmed | "Alumni Interviews are a key part of Georgetown's application process" (V13; O97 URL redirects to first-year page) |
| 32 | Georgetown: interview required unless none assignable; waiver has no negative effect | O97/O98 | confirmed, narrower scope | Not on the alumni-interview FAQ (V14). On the international FAQ: "If you are assigned to an interviewer, you are required to complete that interview"; waiver "will not have a negative effect" (V15). The page frames the waiver as applying to some international students. |
| 33 | Georgetown: "a limited number of need-based scholarship awards" for international admits | O98 | confirmed | same wording (V15) |
| 34 | Georgetown: "accepts InitialView interviews, but they are not required" | O98 | confirmed | same wording; adds they "do not factor into the alumni interview process" (V15) |
| 35 | Princeton graded written paper (type, length, subjects) | O60, B1 | blocked | navigation denied or failed (V16) |
| 36 | Princeton test policy fall 2027 vs 2027-28 | B2 | blocked | navigation denied or failed (V16) |
| 37 | Princeton checklist: interviews optional; letters; supplementary materials | O59, B4 | blocked | host not reachable (V16) |
| 38 | Princeton "We are not looking for perfect…" | O58 | blocked | host not reachable (V16) |
| 39 | Northwestern test optional; program-specific materials; letters | B10 | blocked | navigation denied or failed (V17) |
| 40 | Northwestern unsolicited supplements not accepted | B11 | blocked | navigation denied or failed (V17) |
| 41 | Northwestern "tally of touchpoints"; InitialView optional | O77, O78 | blocked | host not reachable (V17) |
| 42 | Purdue EA Nov 1 / RD Jan 15 | B7 | blocked | navigation denied or failed (V18) |
| 43 | Purdue SAT/ACT/CLT test policy; letters | B8, O87 | blocked | navigation denied or failed (V18) |

## Summary

- [事實] Confirmed: 28 rows (1–7, 9–13, 15–18, 20–24, 26, 29–34), of which 4 fill gaps previously recorded as not stated (12, 15, 20 Oxford Biology, 26).
- [事實] Contradicted: 1 row (8): Columbia research abstract is "typically one page", not one to two pages.
- [事實] Not on page: 4 rows (14, 19, 25, 27).
- [事實] Blocked: 10 rows (28, 35–43); Princeton, Northwestern and Purdue hosts could not be loaded in the built-in browser, and the Common App PDFs were not downloaded.
- [推論] Row 32: site copy should not say "all first-year applicants must interview"; the readable wording is "required if assigned", stated on the international FAQ.
- [推論] Row 5: MIT's CDS 2025-26 reports 2026-27 G1 costs; the 88.4% ratio in international-aid-numbers mixes 2025-26 aid with 2026-27 COA.

Site data was not edited in this run.

## Second attempt on the three blocked hosts (2026-11-07, 04:45)

- [事實] The three hosts recorded as blocked above were retried on 2026-11-07 at
  about 04:45, with two independent request paths and four URLs per host
  (twelve URLs in all): the built-in browser, and a fetch path separate from
  the one used earlier in the night.
- [事實] Every attempt failed. The browser reported that navigation to
  `admission.princeton.edu` was "denied or failed". The fetch path returned
  "certificate rejected" for all four Princeton URLs, all four Northwestern
  URLs and all four Purdue URLs, on the first attempt, with no response body.
- [事實] No human-verification page, CAPTCHA or bot challenge appeared, because
  no response was received at all. No bypass was attempted.
- [推論] The failure is at the TLS layer and is identical across two request
  paths and three hosts, so it is a property of this machine's network path to
  these hosts, not of a single tool or a transient outage. A later unattended
  run on the same machine should not be expected to resolve it.
- Consequence: rows 28 and 35–43 above stay **blocked**. Nothing from
  `admission.princeton.edu`, `admissions.northwestern.edu` or
  `admissions.purdue.edu` is cited as fact anywhere on the site; their URLs are
  registered as leads only (LEAD-*). QUESTIONS.md Q002 now lists these twelve
  URLs with the exact question each one answers, so the pages can be read by
  hand once and pasted back.
- [事實] Columbia, listed as partly blocked in earlier notes, is no longer
  blocked: it was read in the browser in this note's main pass (V02–V04).
