# Site data schema

Every page's content lives in `site/data/p-<page>.js`. Layout code
(`site/assets/js/app.js`) holds no text. Each file looks like:

```js
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
window.ATLAS.pages['process'] = {
  title: { zh: '…', en: '…' },
  judgment: { zh: '…', en: '…' },   // one-line judgment; survives brief mode
  intro: { zh: '…', en: '…' },      // optional; hidden in brief mode
  sections: [ Section, … ]
};
```

## Section

```js
{
  id: 'early',                       // anchor
  h: { zh, en },                     // heading
  judgment: { zh, en },              // one-line judgment for this section (shown in brief mode)
  intro: { zh, en },                 // optional
  items: [ Item, … ],                // optional bullet list
  table: Table,                      // optional
  timeline: [ Event, … ],            // optional; vertical timeline that fills on scroll
  cards: [ { h, p, big, href, src } ], // optional grid of cards
  subs: [ { h, judgment, intro, items, table } ], // optional h3 subsections
  pending: true                      // shows "not yet written"
}
```

## Item (one statement)

```js
{ t: { zh: '…', en: '…' }, tag: 'f' | 'i' | 'a', src: ['A3a-S12', …], sub: [Item…] }
```

- `tag`: `f` = [事實] fact (must have `src`), `i` = [推論] inference, `a` = [假設] assumption.
- `src`: global source ids. A note's local id `S12` in
  `research/…calendar-part1_v1.md` becomes `A3a-S12` (the prefix table is
  in `scripts/import-sources.js`). Never invent an id: every id must exist in
  the note's Sources table.
- Inline markup allowed in text: `**bold**`, `` `code` ``, `[text](url)`.

## Table

```js
{
  cols: [ { zh, en }, … ],
  rows: [ { cells: [Cell, …], filter: 'token token' }, … ],  // or plain arrays of cells
  filter: true,                       // adds a text filter box
  facets: [ { v: 'token', label: { zh, en } } ]  // optional select over row.filter tokens
}
```

Cell: a plain string (language-neutral, e.g. `"2026-11-01"`), a `{zh, en}`
pair, an Item (`{t, tag, src}`), or a not-stated cell:
`{ state: 'not-stated', checked: '2026-11-07', src: ['A3a-S40'] }`.

## Event (timeline)

```js
{ date: '2026-11-01' | {zh,en}, t: { zh, en }, tag: 'f', src: [...], who: { zh, en } }
```

## Rules that apply to data files

- Chinese (Traditional, Taiwan) and English are each written natively; neither is a
  translation of the other. Technical terms stay in English inside Chinese
  (Common App, ED, EA, REA, RD, PIQ, SlideRoom, Other Recommender, CSS Profile).
- No marketing vocabulary (see CLAUDE.md rule 5).
- Escape single quotes inside single-quoted JS strings (`\'`), or use double quotes.
- After editing: `node --check site/data/<file>.js`.
