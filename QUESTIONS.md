# Questions ledger
Format: `Q<nnn> · <date asked> · <unit> · open|answered|applied`
Answer by writing `A:` under the question. The next run applies it and marks it.

Q001 · 2026-11-07 · scope · applied 2026-11-07
Which three of the 30 schools should the two personas target, so the examples
stay concrete? (Default if unanswered: MIT, Stanford, UC Berkeley.)
A: Use the default (maintainer, 2026-11-07).

Q002 · 2026-11-07 · A3/A5 · applied 2026-11-07 (nothing left for you here)
RESOLVED at about 05:45 on 2026-11-07: the three hosts answered ordinary
requests again (HTTP 200), and all ten pages below were fetched and read
directly — see research/2026-11-07_three-blocked-hosts-read_v1.md (V4). You do
not need to open anything. The earlier "refuses at the TLS layer, retrying is
pointless" was a transient failure of one fetching path, written up as a
permanent property of the sites; that correction is in the note. The newly-read
facts were written into the schools, portfolios and timeline tables before 07:00
on 2026-11-07 (BACKLOG E8), and Michigan's and Williams's rows with them (E9);
Purdue's English-proficiency minimums are on the site too. What is still
genuinely missing shrank again at 08:00 on 2026-11-07 (E10):
- **Purdue's letters policy is found and on the site.** Purdue Undergraduate
  Admissions states it in its own voice: "Letters of recommendation aren't
  required, but if a student submits one, we'll include it in their review."
  It sits on a page written for counselors, not on any requirements page an
  applicant would reach, and that page carries no publication date (V5-U1).
- **Northwestern's ISP: the structure is published, the materials are not.**
  The separate application, the "admitted to Northwestern first" order, either
  round being allowed, the ISP deadline falling after Northwestern's, and the
  calculus and science expectations are all on the site now. What the ISP
  application actually asks is stated nowhere: the requirements page defers to
  the ISP site and the ISP site enumerates nothing (V5-U2 to V5-U5). That is
  Q007, and it is a gap in the public record, not in this repo's reading.
- Still open from this group: Princeton's "not looking for perfect" wording.

The original question, kept for the record:
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
- RESOLVED 2026-11-07 08:00 (E11). The sentence exists, on the admission
  office's own blog: "We are not looking for perfect. We're looking for
  authentic." — Dean of Admission, 1 September 2026 (V6-P1). It appears on no
  standing policy page; a search of all 1,248 URLs in the sitemap found it only
  there. Also note the URL asked for here, /how-apply/what-we-look-for, does
  not exist (HTTP 404); the real equivalent is
  /apply/before-you-apply/helpful-tips (V6-P2). Nothing for you to open.

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

Q007 · 2026-11-07 · E10 · open
Northwestern publishes that the Integrated Science Program needs its own
separate application, but not what that application asks. The requirements page
says, under its own "Supplement materials:" heading, "For an updated list of
required materials, please see the ISP website", and the ISP page it links to
lists nothing — no prompts, no word limits, no form, no portal link, nothing
about letters. The 2026-27 ISP deadlines are not stated either: the published
table is last cycle's, every date on it has passed, and the ISP page describes
the deadline as closed.

A fillable ISP application form does exist on the official ISP domain and is
the only document anywhere with real prompts. This repo deliberately cites
nothing from it: its embedded metadata gives a 2015 creation date, it requires
SAT Subject Tests (discontinued in 2021) and asks for a fax number, no current
page links to it, and its stated March 1 deadline contradicts the published
deadline table. Treating it as current would put an eleven-year-old form's
requirements on the site as this cycle's.

So the only route to the ISP requirements is the email address on the ISP
applying page. Do you want to write to it and paste the reply here? Until then
the ISP materials cells stay "not stated", which is accurate.
A:

Q008 · 2026-11-08 · A3 · applied 2026-11-08
Three daily deadline re-checks (2026-11-08) are committed on stacked local
branches and not yet on the public site, because the daily runs were asked to
publish nothing outward: `daily/2026-11-08` (dates due by Dec 8),
`daily/2026-11-08-rd` (Dec 8 – Jan 8; Northwestern Bienen dates corrected) and
`daily/2026-11-08-jan` (Jan 9 – Feb 8; Caltech RD materials date added). The
last branch contains all three. Merge it into the live site, or keep reviewing
locally first?
A: (2026-11-08) Publish them. Merged into main the same day.

Q009 · 2026-11-08 · L · open
Two things about how a lab mentor's letter reaches a college can only be read
from inside a Common App account: (1) which of the 30 colleges accept an Other
Recommender at all, and which types (employer / other / coach …) each accepts,
and (2) the exact wording of the Other Recommender form. The public PDFs are
served behind a JavaScript postback that plain requests cannot read. The record
page marks these cells as assumptions. Can you open a Common App account (or
a counsellor's view) and read those two settings for the 30 colleges, or should
they stay as assumptions?
A:
