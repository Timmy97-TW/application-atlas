# Design system: visual components

The site's job is to make an application's logic visible: what depends on
what, what is due when, where a piece of evidence can go, how schools differ.
Every visual component follows the rules below so the pages read as one
system. Data-viz method: the `dataviz` skill (form → color by job → validate →
marks → hover → accessibility → look at it).

## Principles

1. **One idea per figure.** A figure answers one question, stated in its title
   as a sentence ("Early deadlines cluster on 1 November"), not a label
   ("Deadlines").
2. **The figure never replaces the facts.** Every value in a figure is also
   reachable as text: a "table" toggle under each figure shows the same rows,
   with citation markers. Tooltips enhance; they never gate.
3. **Sources stay attached.** Hover/focus on any mark shows its citation ids;
   the table view links them to `sources.html`.
4. **Empty is informative.** Unknown and blocked values are drawn, not dropped:
   a dashed outline for "not stated", a hatched gray for "page refused
   automated reading".
5. **Calm motion.** Marks enter once, when the figure scrolls into view:
   opacity and a short translate or scale, 400–600 ms, `cubic-bezier(.2,.7,.2,1)`,
   staggered ≤ 12 ms per mark, capped at 500 ms total stagger. Hover responses
   are 120 ms. Nothing loops. `prefers-reduced-motion` renders the final state
   immediately.
6. **Touch first.** Hit targets ≥ 24 px; tooltips also open on tap and on
   keyboard focus; horizontal figures scroll inside their own frame with a soft
   edge fade, never the page.

## Tokens (CSS custom properties on `:root`)

| Role | Token | Value |
|---|---|---|
| Accent (links, selection) | `--accent` | `#1f5fbf` |
| Chart surface | `--viz-surface` | `#fcfcfb` |
| Ink primary / secondary / muted | `--fg`, `--muted`, `--viz-muted` | `#1b1f24`, `#5b6470`, `#898781` |
| Gridline / baseline | `--viz-grid`, `--viz-base` | `#e9eaee`, `#c3c2b7` |
| Categorical slots 1–5 | `--c1`…`--c5` | `#2a78d6` `#eb6834` `#1baf7a` `#eda100` `#e87ba4` (reference order; validated adjacent) |
| Sequential blue 150 / 300 / 450 / 600 | `--s1`…`--s4` | `#b7d3f6` `#6da7ec` `#2a78d6` `#184f95` |
| Source class | `--official`, `--secondary`, `--notstated` | site values |

Categorical slots are assigned in fixed order and follow the entity, never its
rank. Status colors are not used for data series.

## Type

System sans (`-apple-system, "PingFang TC", "Noto Sans TC", sans-serif`).
Figure title 17/600, figure subtitle 14/400 muted, axis and labels 12/500
muted with `tabular-nums`, tooltip value 15/600, tooltip label 12/400.

## Component API

A page section may carry `viz: { type, … }` (or an array). `site/assets/js/viz-core.js`
renders it after the section's judgment, inside a `figure.viz` with a title,
subtitle, the figure, a legend when ≥ 2 series, and a "table" toggle.
Components register with `ATLAS_VIZ.register(type, render)` where
`render(el, spec, V)` draws into `el` and returns optional `{ table }` rows for
the table view. `V` exposes helpers: `svg()`, `scale()`, `band()`, `tip`,
`legend()`, `L()`, `cites()`, `onEnter()`, `reduced`, `fmt`.

Datasets live in `site/data/viz-*.js` as `window.ATLAS.viz.<name>`, every row
carrying `src` ids that exist in `sources.js` (`scripts/check-data.js` checks).
