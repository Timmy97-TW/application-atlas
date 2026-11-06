# Backlog — ordered research units
Mark done with [x] and the note filename. Scope: the 30 US schools below at full depth; then F (UK) and G (US 31–50).

## Target list (30)
Tier 1: MIT, Caltech, Stanford, Harvard, Yale, Princeton, Columbia, UPenn,
        Brown, Cornell, Georgetown
Tier 2: Carnegie Mellon, Georgia Tech, Purdue, Michigan, UIUC, Olin,
        Harvey Mudd, Johns Hopkins, Duke, Northwestern, Rice
Tier 3: UC Berkeley, UCLA, UC San Diego, UT Austin, Washington
Tier 4: Williams, Amherst, Swarthmore

## A. The application itself
- [x] A1 Common App first-year anatomy, every field and limit, 2026–27 (kickoff)  ✓ 2026-11-07: research/2026-11-07_common-app-first-year-anatomy_v1.md → containers.html
- [x] A2 Other systems: UC, Coalition/Scoir, MIT, Georgetown, ApplyTexas (kickoff)  ✓ 2026-11-07: research/2026-11-07_other-application-systems_v1.md → containers.html, schools.html
- [x] A3 Master calendar 2026–27, Taiwan-based international applicant (kickoff)  ✓ 2026-11-07: research/2026-11-07_cycle-2026-27-calendar-part1_v1.md, …-part2_v1.md, michigan-addendum → process.html
- [x] A4 International specifics: English-proficiency tests and waivers per  ✓ 2026-11-07: research/2026-11-07_international-applicant-specifics_v1.md → schools.html
      school; transcripts, predicted grades, school profile; what a Taiwan
      public-school vs international-school counselor can submit; financial
      documentation; test-required vs test-optional per school with the
      reinstatement announcements cited
- [x] A5 School roster: per school, application system, deadlines, supplement  ✓ 2026-11-07: research/2026-11-07_school-roster-part1_v1.md, …-part2_v1.md → schools.html
      essays, recommender counts by type, whether an Other Recommender is accepted

## B. Portfolios and supplementary materials
- [x] B1 Portal taxonomy: SlideRoom (Common App integration, file types, size  ✓ 2026-11-07: research/2026-11-07_portal-taxonomy_v1.md → portfolios.html
      and count limits, URL and video embeds, fees, who reviews); college-native
      upload tools; post-submission applicant-portal uploads; email-to-admissions;
      URL fields inside the application; Additional Information as a container
- [x] B2 School × material matrix for all 30: arts portfolio / maker or  ✓ 2026-11-07: research/2026-11-07_supplementary-materials-matrix_v1.md → portfolios.html
      engineering portfolio / research paper or abstract / video / external
      links. Per cell: accepted or not, portal, limits, deadline, who reviews,
      the school's own words on weight. "Not stated" is a valid cell.
- [x] B3 Engineering: MIT Maker Portfolio exact specification and MIT's own  ✓ 2026-11-07: research/2026-11-07_engineering-portfolios_v1.md → portfolios.html
      guidance on what a strong one contains; Olin, Harvey Mudd, Caltech,
      Stanford, CMU, Cornell Engineering, Georgia Tech, Purdue, Michigan, UIUC,
      Berkeley EECS under UC rules; then "is GitHub a portal?": where a GitHub or
      personal-site URL can be placed in each system, and what official sources
      say about whether links are opened. Reader behaviour not officially
      stated is [推論].
- [x] B4 Biology and research: how a paper, abstract, poster, or lab record is  ✓ 2026-11-07: research/2026-11-07_supplementary-materials-matrix_v1.md (B4 section) → portfolios.html
      submitted at each school; Regeneron STS and ISEF as external anchors;
      publications and authorship (CRediT-style attribution) in the application;
      how competition medals and public attribution fit Honors and Activities
- [x] B5 Reader-side reality from official sources only: published reading  ✓ 2026-11-07: research/2026-11-07_reader-side-reality_v1.md → insights.html
      processes, stated reading times, committee structure, admissions-blog
      statements on supplementary materials and links

## C. Multi-year records built outside school
- [x] C1 Existing frameworks colleges already recognise: Mastery Transcript  ✓ 2026-11-07: research/2026-11-07_outside-record-frameworks_v1.md → record.html
      Consortium (which colleges accept it, in what form), 1EdTech Comprehensive
      Learner Record, Open Badges 3.0 / Verifiable Credentials, Credly-type
      badges, the Coalition "Locker" (what it was, what happened to it), and
      any college-stated position on each
- [x] C2 Record-to-container map, generic: for each evidence type an outside  ✓ 2026-11-07: research/2026-11-07_outside-record-frameworks_v1.md → record.html
      programme can produce (timestamped lab hours, numeric skill certifications,
      public contribution attribution, pre/post test deltas, replication
      records, oral-defense records, publications), which container it can
      enter, in how many characters or words, and which third party could
      verify it. A matrix with a character budget per cell → record.html
- [x] C3 Independent verification anchors: which parties outside the programme  ✓ 2026-11-07: research/2026-11-07_outside-record-frameworks_v1.md → record.html
      can vouch for its record inside the application (competition judging and
      public wikis, journal peer review, organisers, school counselors, outside
      professors as Other Recommender), and what each can and cannot attest to
- [x] C4 AI policy: Common App's stated policy and the 30 schools' policies;  ✓ 2026-11-07: research/2026-11-07_ai-policy_v1.md → record.html
      what this implies for process-based, timestamped, orally defended evidence
      versus polished written artifacts

## D. Site pages that depend on A–C
- [x] D1 portfolios.html from B1–B4 (filterable matrix, source-class dots)  ✓ 2026-11-07: site/data/p-portfolios.js
- [x] D2 record.html from C1–C3  ✓ 2026-11-07: site/data/p-record.js
- [x] D3 mock/index.html: practice walkthrough with the field names, limits and  ✓ 2026-11-07: site/data/p-mock.js + assets/js/mock.js
      live counters of A1 plus a UC PIQ tab from A2, prefilled with the bio
      persona, with a toggle annotating each field with "where a multi-year
      outside record could enter here" from C2
- [x] D4 examples/bio.html: fictional composite, labelled. Activities, honors,  ✓ 2026-11-07: site/data/p-bio.js
      additional-information text, an Other-Recommender outline, and the
      supplementary materials she would submit to three schools, each traced to
      the matrix cell that allows it
- [x] D5 examples/ee.html: same for a fictional EE applicant whose work is a  ✓ 2026-11-07: site/data/p-ee.js
      documented hardware project (a multi-channel LED driver with design files,
      firmware and test data): as a Maker Portfolio entry, a SlideRoom entry, a
      150-character activity line, and where the GitHub URL goes in each system
- [x] D6 changes.html: dated log of every cycle change found, kept usable into 2027–28  ✓ 2026-11-07: site/data/p-changes.js
- [x] D7 process.html lead-in: the G9–G11 years as a prerequisite graph (what  ✓ 2026-11-07: site/data/p-process.js (leadin) + assets/js/graph.js
      must exist before Aug 1 of G12: test registrations, recommender
      relationships, records with timestamps, portfolio material), drawn so a
      reviewer can interrogate the ordering
- [x] D8 DECISIONS.md rendered on the site (why 30 schools, why this cycle,  ✓ 2026-11-07: site/data/p-about.js
      why no institution named), one line per decision with date

## E. Later
- [ ] E1 Monthly re-verification: re-check every official URL, re-date, log to changes.html.
      Not yet due: every URL was accessed 2026-11-07, so no access date is stale and no
      「待重查」badge is showing. Becomes meaningful around 2027-02-05 (90 days).
- [x] E2 UK scope approved by the maintainer 2026-11-07 → section F
- [ ] E3 Apply Q002 once the maintainer pastes the twelve pages back: Princeton (graded
      written paper, test policy, checklist, "not looking for perfect"), Northwestern (test
      policy, program materials, letters, unsolicited supplements, touchpoints, InitialView),
      Purdue (EA/RD dates, SAT/ACT/CLT, letters, English requirement). These three hosts
      refuse every automated request at the TLS layer; retrying is pointless (V2).
- [x] E4 Pages that load but do not hand over their text  ✓ 2026-11-07: research/2026-11-07_recovered-pages-round-3_v1.md (V3)
      Stanford's FAQ index turned out to be retired, not gated (39-byte empty document, no
      FAQ link in the site navigation); its answers now live in accordions on each Apply
      page and were read there. UT Austin's FAQ answers were read from the live DOM. Both
      claims (O53, O85, O99) are settled. What is left is one obstacle only, moved to E7:
      servers that send a file instead of a page.
- [x] E5 The two dead aid pages  ✓ 2026-11-07: research/2026-11-07_recovered-pages-round-3_v1.md (V3)
      Both recovered by following each 404 page's own navigation and the site's own search.
      Harvey Mudd publishes an itemised 2026-27 cost of attendance ($104,512 on campus), so
      its aid cell is no longer partial (31.2%, was 33.5% against an incomplete denominator).
      Amherst publishes a 2026-27 student expense budget ($98,160 on this site's basis) and
      was never behind a human-verification wall: every page of its site opens in a browser,
      which also cleared its interview, deadline, test-policy and need-blind cells.
- [ ] E7 Five sets of official documents that are published but served as file downloads,
      so a script is handed a file instead of a page: Amherst's CDS 2025-26 (eleven section
      PDFs at /about/facts/common_data_sets/2025 — would fill its H6, C and G cells),
      Harvard's 2026-27 supplement PDF, UC's PIQ guidance PDF, and the three Common App
      webinar decks (LEAD-B19 to B21). Nothing is cited from any of them. This needs one
      download decision from the maintainer, not more research — see Q006.
- [ ] E6 Make the research notes fully bilingual (rule 6). They are English-first with
      Chinese summaries appended; the site data is bilingual, so this is notes-only debt.

## F. United Kingdom (approved 2026-11-07; after the US top 30)
- [x] F1 UCAS system 2027 entry: application sections, the new personal-statement  ✓ 2026-11-07: research/2026-11-07_ucas-system-and-tests_v1.md
      question format, reference, deadlines (15 Oct for Oxford/Cambridge and
      medicine; the January equal-consideration date), fees, Clearing, Extra
- [x] F2 Admissions tests: ESAT, TMUA, UCAT, LNAT and any successor to BMAT;  ✓ 2026-11-07: research/2026-11-07_ucas-system-and-tests_v1.md
      which course at which university requires which, dates, registration
- [x] F3 Ten universities, engineering and biology courses: Cambridge, Oxford,  ✓ 2026-11-07: research/2026-11-07_uk-universities-engineering-biology_v1.md
      Imperial, UCL, Edinburgh, King's College London, Manchester, Bristol,
      Warwick, St Andrews — entry requirements for a Taiwan-based applicant
      (which qualifications accepted, AP/SAT combinations), interviews,
      supplementary questionnaires, written work
- [x] F4 site/uk/ pages from F1–F3  ✓ 2026-11-07: site/data/p-uk.js

## G. US schools 31–50 (approved 2026-11-07; roster and matrix depth)
- [x] G1 Choose the 20 schools and record the reasoning in DECISIONS.md  ✓ 2026-11-07: DECISIONS.md 2026-11-07
- [x] G2 Roster (A5 depth) for the 20  ✓ 2026-11-07: research/2026-11-07_us-schools-31-50-part1_v1.md, …-part2_v1.md → more.html
- [x] G3 Supplementary-materials matrix (B2 depth) for the 20  ✓ 2026-11-07: research/2026-11-07_us-schools-31-50-part1_v1.md, …-part2_v1.md → more.html
