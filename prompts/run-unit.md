Read CLAUDE.md, then QUESTIONS.md, then the newest file in briefs/, then BACKLOG.md.

Step 0 — apply answers. For every question in QUESTIONS.md marked `answered`
and not yet marked `applied`, apply the answer (update the note, data file,
BACKLOG order, or DECISIONS.md), then mark it `applied` with today's date.
Do this before any new research. If an answer contradicts a rule in CLAUDE.md,
do not apply it; record the conflict in the brief as a question.

Step 1 — one unit. Take the top unchecked unit in BACKLOG.md. A unit is done when:
1. its research note exists with front-matter, a sources table (url, access
   date, official/secondary, what it supports), and every statement tagged
   [事實] / [推論] / [假設];
2. the corresponding site data file is updated from the note, both languages
   written natively;
3. `node --check` passes on every data file, cited links were checked,
   build-log ran, and every touched page renders headlessly with no console errors;
4. BACKLOG.md marks the unit done with the note's filename.
If the unit is bigger than one run, split it in BACKLOG.md into numbered
sub-units and finish the first one properly. Take a second unit only if the
first finished with a clear margin of budget.

Step 2 — close. Branch `run/<date>`, PR to main, and `briefs/<date>_run.md`
(front-matter: date, unit, status) with: done / not done and why / assumptions
/ dead links / three questions for the maintainer, appended to QUESTIONS.md as
open with ids / which unit the next run will take. Never push directly to main; merge through the PR only as CLAUDE.md rule 10 allows.
