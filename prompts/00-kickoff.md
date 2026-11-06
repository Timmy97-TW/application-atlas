Read CLAUDE.md fully before doing anything. This is the first run in this repo.
Do not try to finish the whole project today. There are four stages; stop after
stage 4 and write the brief even if stage 3 or 4 is incomplete.

## Stage 1 — scaffold

Create the layout from CLAUDE.md, `.gitignore` with `private/` and `logs/`,
BACKLOG.md and QUESTIONS.md from the seeds if absent, DECISIONS.md with the
scoping decisions already taken (30 US schools, 2026–27 base cycle, UK out of
scope, no institution named, public repo with GitHub Pages (changed 2026-11-07), two runs per week).
Hosting is GitHub Pages from a public repo via .github/workflows/pages.yml
(deploys `site/` on every push to main). Write `scripts/check-links.js` (request each cited URL, report
status) and `scripts/build-log.js` (parse briefs/ front-matter and
QUESTIONS.md into data/log.js; count BACKLOG units done/total and matrix cells
by source class into data/status.js). Work on branch `kickoff/<date>`.

## Stage 2 — core research, three notes

Read the official pages first, then write. Secondary sources only to locate
official pages or to support a `[推論]`.

### Note A — `research/<date>_common-app-first-year-anatomy_v1.md`
The Common App first-year application for the 2026–27 cycle, section by
section, as the student sees it. For every section list every field, its type,
its limit (characters or words), whether it is required, and who fills it
(student / counselor / teacher / Other Recommender). Cover: Profile, Family,
Education (including Courses & Grades and which colleges require it), Testing
(self-report rules), Activities (count; position, organization and description
limits; grade levels; timing; hours and weeks), Honors (count, level tags),
Personal Essay (prompts, word range), Additional Information (word limit; the
current status of the community-disruption question), college-specific
questions and writing supplements, the recommender system (counselor, teacher,
Other Recommender: who qualifies, how many each college allows, whether a
research mentor outside the school qualifies), counselor forms (School Report,
Mid-Year, Final, Optional Report, school profile), FERPA waiver, fee waivers
for international applicants, and Common App's published policy on AI use.
Close with one sourced answer: which containers can a person who is not the
student and not the student's school submit anything into. That answer drives
record.html, so get it exactly right and mark anything unresolved.

### Note B — `research/<date>_other-application-systems_v1.md`
Same treatment, shorter, for: the UC application (PIQ count and word limit,
activities and awards counts and limits, no letters, test policy, submission
window), the Coalition application on Scoir, MIT's own application (every
section, especially the Maker Portfolio and any research or supplement
submission), Georgetown's own application, ApplyTexas. Record which of the 30
schools use which system. Note any system discontinued or merged since 2023
and cite the announcement.

### Note C — `research/<date>_cycle-2026-27-master-calendar_v1.md`
One dated calendar for a Taiwan-based international applicant in 2026–27:
application open dates; ED / EA / REA / ED II / RD deadlines for all 30 schools;
the UC window; financial-aid document deadlines (CSS Profile, ISFAA where used);
portfolio deadlines where they differ from the application deadline; decision
release windows; May 1; mid-year and final report timing; post-admission steps
for an international student (I-20, visa) at headline level. One row per date,
each with its own source and access date. A column "changes vs 2025–26", left
empty where no change can be sourced.

## Stage 3 — first site build

Build index, process, containers, log, sources, and the shells of the other
pages (navigation present, content marked「尚未完成」/ "not yet written", never
placeholder prose). Populate process and containers from Notes A–C via
data/*.js. The index page shows, in one screen: the four things a student
submits (forms, essays, recommendations, supplementary materials); the one-year
timeline in miniature; a status strip from data/status.js (units done / total,
matrix cells by source class, oldest access date, open questions); and the
three most recent log entries. Verify every page renders headlessly with no
console errors; run the link checker; run build-log.

## Stage 4 — brief and PR

Commit on the branch, open a PR to main titled with the date, and write
`briefs/<date>_run.md` with front-matter `date, unit, status` and sections:
done / not done and why / every [假設] made / dead or ambiguous sources /
exactly three questions for the maintainer (also append them to QUESTIONS.md
as open, with ids). Mark completed units in BACKLOG.md. Merge only if the run is authorised to
(see CLAUDE.md rule 10).
