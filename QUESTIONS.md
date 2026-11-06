# Questions ledger
Format: `Q<nnn> · <date asked> · <unit> · open|answered|applied`
Answer by writing `A:` under the question. The next run applies it and marks it.

Q001 · 2026-11-07 · scope · applied 2026-11-07
Which three of the 30 schools should the two personas target, so the examples
stay concrete? (Default if unanswered: MIT, Stanford, UC Berkeley.)
A: Use the default (maintainer, 2026-11-07).

Q002 · 2026-11-07 · A3/A5 · open (retried 2026-11-07 04:45 and 05:30, still blocked)
Michigan and Williams refuse automated reading (HTTP 403 or a
human-verification page); Northwestern, Princeton and Purdue refuse at the TLS
layer. Columbia was since read in a browser and is done (see V01–V19), and so
was Amherst on 2026-11-07 at about 05:30 — its site had been misdiagnosed: every
page opens in a browser, and the earlier HTTP 405 came from guessed URLs and
automated requests (see V3). Amherst is therefore no longer part of this
question; only its CDS section PDFs are still unread, which is Q006.
Retry on 2026-11-07 at 04:45 used both the built-in browser and a separate
fetch path, four URLs per host: every attempt on admission.princeton.edu,
admissions.northwestern.edu and admissions.purdue.edu failed ("navigation
denied" in the browser, "certificate rejected" on fetch). It is not a
human-verification page and no bypass was attempted. These three hosts cannot
be read from this machine's automated paths at all, so they will not resolve on
their own in a later run.

Can you open the pages below in your ordinary browser and paste the answers
here (or save the pages into private/)? Each line is one page and the exact
things the matrix still needs. Short quotes are enough; the access date will be
the day you paste it.

Princeton
- https://admission.princeton.edu/apply/graded-written-paper
  required or optional? type of paper, length, acceptable subjects, how it is
  submitted, any separate deadline.
- https://admission.princeton.edu/apply/standardized-testing
  policy for entry in fall 2027, and whether a change is stated for 2027-28.
- https://admission.princeton.edu/apply/application-checklist
  interviews required or optional; number of teacher letters and counselor
  forms; whether supplementary materials (research, portfolios) are accepted.
- https://admission.princeton.edu/how-apply/what-we-look (or the equivalent page)
  does a sentence beginning roughly "We are not looking for perfect..." appear?

Northwestern
- https://admissions.northwestern.edu/apply/requirements.html
  test policy for fall 2027; program-specific auditions or portfolios; number
  of teacher letters and counselor forms.
- https://admissions.northwestern.edu/faqs/application-process/
  whether unsolicited supplementary materials are refused or not reviewed; any
  wording about a "tally of touchpoints" or demonstrated interest; whether
  InitialView or another video interview is named as optional.
- the deadlines page: ED and RD dates for 2026-27.

Purdue
- https://admissions.purdue.edu/become-student/apply/
  Early Action and Regular Decision dates for 2026-27; any priority or
  scholarship deadline; which application systems it accepts.
- https://admissions.purdue.edu/become-student/first-year-criteria/
  SAT / ACT / CLT policy (does it name the CLT?); whether letters are required,
  optional or not accepted.
- https://admissions.purdue.edu/become-student/international/
  English-proficiency requirement and any stated waiver.

Until these arrive, the affected cells stay "not stated" and the matching rows
in research/2026-11-07_browser-verification_v1.md stay "blocked". The URLs are
also registered as leads under LEAD-* on the sources page, so nothing on them
is cited as fact anywhere on the site.
A:

Q003 · 2026-11-07 · D4/D5 · open
The practice walkthrough uses five Common App colleges (Stanford, Johns
Hopkins, Cornell, CMU, Harvard) because MIT and UC Berkeley do not use Common
App; MIT and UC are explained separately (UC has its own tab). Keep these five,
or swap some?
A:

Q004 · 2026-11-07 · F3 · open
UK pages show the Taiwan Senior High School diploma alone is generally not
accepted (Imperial lists it as not accepted; Warwick requires its foundation
year). Should section F add a unit on qualification routes for a Taiwan
public-school applicant (AP, IB, A-level, foundation years), or keep UK at
the current depth?
A:

Q005 · 2026-11-07 · G1 · open
The 20 schools for US 31–50 are listed in DECISIONS.md (2026-11-07). Change any?
A:

Q006 · 2026-11-07 · E7 · open
Five sets of official documents are published but their servers send a file
instead of a page, so this repo cannot read them and cites nothing from them.
Downloading a file is a decision for you, not for a scheduled run. Would you
download these and drop them into private/ (or paste the figures here)?
- Amherst CDS 2025-26, section PDFs at
  https://www.amherst.edu/about/facts/common_data_sets/2025
  Wanted: section H (H6: aid to degree-seeking nonresidents — recipients,
  average, total), section G (G1 tuition/fees/housing/food, G5 books,
  transportation, other), section C (C1, C2, C9, C21) and section B (B2
  nonresident first-years). This would fill Amherst's row in three tables.
- Harvard's 2026-27 writing supplement PDF (the exact prompts and limits).
- UC's PIQ guidance PDF (what UC itself tells applicants about the four
  questions).
- The three Common App webinar decks at LEAD-B19, LEAD-B20 and LEAD-B21
  (2026-27 changes to Activities; the Additional Information 650→300 word
  change; Activities field character limits).
Until then every cell they would fill stays "not stated", and the Common App
limits on the practice walkthrough rest on the help-centre articles only.
A:
