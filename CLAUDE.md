```markdown
# Application Atlas — repo rules

This repository and the site it publishes are public (decision 2026-11-07).
Write everything for a public reader.
It holds a research database and a static website that explain, with
verifiable citations, exactly what a first-year applicant to a US university
must submit, when, through which portal, and in what format, with special depth
on portfolios and supplementary materials for engineering and biology
applicants, and on how a multi-year record built outside school can enter the
application at all. Scope: the 30 US schools listed in BACKLOG.md at full depth; then the UK
(UCAS, section F of BACKLOG.md) and US schools 31–50 (section G) at roster and
matrix depth (decision 2026-11-07). Other destinations are out of scope.

Readers: the maintainer (Timmy), an owner who wants the shape of the whole thing
in one screen, and a faculty reviewer who interrogates sequencing and
prerequisites. Write for all three without naming anyone else.

## Non-negotiable rules

1. Every factual claim carries a source URL, an access date (YYYY-MM-DD), and a
   source class: `official` (the university, Common App, UC, SlideRoom, MIT, or
   an admissions office in its own voice, including its blogs and help centers)
   or `secondary` (news, consultants, forums, anything not run by the institution).
2. Tag every non-trivial statement `[事實]` (sourced fact), `[推論]` (inference
   from facts), or `[假設]` (assumption). Keep them separated. Never upgrade one.
3. The maintainer has no admissions-office experience. Never present inference
   about how admissions readers behave as observed fact. If an admissions office
   said it in an official blog, help article, or podcast, cite it. Otherwise it
   is `[推論]` and labelled so on the page.
4. Empty is informative. If a school's page does not say whether it accepts a
   research paper, the cell says `not stated (checked YYYY-MM-DD, URL)`. Never
   fill a gap with plausible text. Never invent a deadline, a limit, or a policy.
5. No marketing vocabulary. Banned: 頂尖, 卓越, 打造, 賦能, 一站式, 量身訂做,
   empower, cutting-edge, world-class, tailor-made, one-stop, unlock potential.
   No "N× admission rate" claims. If an adjective is doing the work, replace it
   with a number or delete it.
6. Bilingual, co-equal. Traditional Chinese (Taiwan) and English, each written
   natively, never one translated from the other. Technical terms stay in
   English inside Chinese text (Common App, SlideRoom, ED, PIQ, Other Recommender).
7. This repo names no institution, programme, staff member, or student other
   than the maintainer as repo owner. Personas are fictional composites and say
   so on their page. `private/` is gitignored; anything institution-specific
   lives there and is never referenced from site content.
8. No third-party logos, trademarks, or copyrighted screenshots as decoration.
   A cropped screenshot of an official public page is allowed only as evidence,
   captioned with source URL and access date. Prefer linking. Diagrams are our own SVG.
9. The mock walkthrough is a teaching page. It is visibly labelled
   「模擬練習頁 · 非官方 · 與任何申請系統無關」 / "Practice mock, not affiliated
   with any application system." No system's name in the page title, no login
   screen, nothing leaves the browser (localStorage only).
10. Never push directly to `main`. Work on a branch, open a PR, write a brief.
    Scheduled and maintainer-authorised runs may merge their own PR after all
    checks pass (decision 2026-11-07), so the public site stays current.
11. Research notes are files: `research/YYYY-MM-DD_topic-in-english_v1.md` with
    front-matter `title, date, cycle, unit (BACKLOG id), review_by: Timmy,
    status: draft, sources:` (table: id, url, access_date, class, supports).
12. Order of work inside a unit: read sources → write the note → update site
    data from the note → run checks → write the brief. If a step cannot be
    verified, stop, record why in the brief, and leave the cell empty.
13. Runs are bounded. One unit per run (two if the first finishes with a clear
    margin). Finish a smaller thing properly rather than a larger thing badly.

## Repo layout

```
CLAUDE.md
BACKLOG.md                 ordered units; a run takes the top unchecked one
QUESTIONS.md               ledger: open / answered / applied questions, dated
DECISIONS.md               dated scoping decisions and their reasons
research/                  one note per unit
briefs/                    briefs/YYYY-MM-DD_run.md (by Claude) and
                           briefs/YYYY-MM-DD_timmy.md (by the maintainer, optional)
private/                   gitignored; institution-specific notes
prompts/                   00-kickoff.md, run-unit.md
scripts/                   run-unit.sh, build-log.js, check-links.js
site/                      static site; .github/workflows/pages.yml deploys it from main
  index.html               state-of-knowledge overview, one screen
  process.html             timeline: G9–G11 lead-in, then the G12 year by date
  containers.html          every field a student can fill, with limits
  portfolios.html          school × material matrix, filterable
  record.html              how a multi-year outside record enters the application
  mock/index.html          practice walkthrough
  examples/bio.html        fictional biology-major persona
  examples/ee.html         fictional EE-major persona
  changes.html             dated cycle changes (2025–26 → 2026–27 → 2027–28)
  log.html                 progress log, built from briefs/ and QUESTIONS.md
  sources.html             every citation, grouped, with access dates
  insights.html            non-obvious findings, each cited and tagged
  uk/                      UK (UCAS) pages, added after the US top 30
  data/*.js                all content as bilingual {zh, en} pairs; layout holds no text
  assets/                  css, js, svg
```

## Site rules

- Plain static HTML/CSS/JS. No build step for pages; `scripts/build-log.js`
  only regenerates `data/log.js` and `data/status.js`. GitHub Pages serves
  `site/` as-is, so every page must work when opened from a plain file server.
- White background, system font stack (-apple-system, "PingFang TC",
  "Noto Sans TC", sans-serif), generous whitespace, one accent color plus a
  three-color source-class scale (official / secondary / not stated), restrained
  motion: scroll-triggered reveals, a timeline that fills as you scroll, hover
  states on cards. Respect `prefers-reduced-motion`. Mobile-first.
- zh/en toggle in the header, persisted in localStorage; every visible string
  comes from `data/*.js` as `{zh:'…', en:'…'}`.
- Every factual element carries a small citation marker linking to its entry on
  `sources.html`, and a color dot for its source class. Access dates older than
  90 days render a 「待重查」/ "re-verify" badge automatically.
- A header toggle「只看官方來源」/ "official sources only" hides every element
  whose source class is secondary.
- A header toggle「摘要模式」/ "brief mode" collapses each page to its one-line
  judgments, for the reader who wants the shape only.
- Before finishing any run: `node --check` every data file, run
  `scripts/check-links.js` over all cited URLs (log dead links in the brief, do
  not delete them), run `scripts/build-log.js`, and open each touched page in a
  headless browser to confirm it renders with no console errors.
- If any file under `site/data/` or `site/assets/` changed, also run
  `scripts/make-pages.js`. The HTML shells carry a `?v=` cache-busting stamp
  that only changes when that script runs, so a data change shipped without it
  can be served from a returning reader's cache while the new file sits unread
  on the server. Verify a data change in a browser with a cache-busting query,
  not a plain reload, or you will be reading the cached copy too.
