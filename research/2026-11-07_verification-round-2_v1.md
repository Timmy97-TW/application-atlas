---
title: "Verification round 2: what is still unreadable, and why (three TLS-blocked hosts, a dev-subdomain citation, two JS-gated pages)"
date: 2026-11-07
cycle: 2026-27 (US, fall 2027 entry)
unit: A3, A5, B5, B7
review_by: Timmy
status: draft
code: V2
sources:
  | id | url | access_date | class | supports |
  | -- | --- | ----------- | ----- | -------- |
  | S1 | https://www.cornell.edu/visit/ | 2026-11-07 | official | Cornell public visit page: no demonstrated-interest wording (O74 replacement attempt) |
  | S2 | https://admission.stanford.edu/faqs/index.html | 2026-11-07 | official | Stanford FAQ index: served an empty document to the browser (O53) |
  | S3 | https://admissions.utexas.edu/apply/frequently-asked-questions/ | 2026-11-07 | official | UT Austin FAQ: question list only; answers not present in the page source (O85) |
---

# Verification round 2

A second pass over the claims that earlier notes marked **index-excerpt**, i.e.
where only a search-engine excerpt had been seen and the page itself had not
been read. Round 1 is `2026-11-07_browser-verification_v1.md` (V01–V19); it
settled Columbia, Duke, Georgetown, Oxford, UCAT, the Common App help centre
and MIT's CDS. This note records what round 2 could and could not add.

## Method

- [事實] One built-in browser tab, no sign-in, 2026-11-07 about 04:45–05:20.
- [事實] For the three hosts that had refused everything in round 1, a second
  request path independent of the browser was used as well.
- Verdicts as in round 1: **confirmed**, **contradicted**, **not on page**,
  **blocked**.

## Results

| # | Claim | Original id | Verdict | Evidence or reason |
|---|---|---|---|---|
| 1 | Princeton: graded written paper, test policy, checklist, "not looking for perfect" | O58–O60, LEAD-B1–B4 | blocked | Browser: navigation "denied or failed". Separate fetch path: "certificate rejected" on four URLs. No response body, no CAPTCHA. |
| 2 | Northwestern: test policy, program materials, letters, unsolicited supplements, "tally of touchpoints", InitialView | O77, O78, LEAD-B10–B11 | blocked | Same: four URLs, "certificate rejected", no response. |
| 3 | Purdue: EA/RD dates, SAT/ACT/CLT policy, letters, international English requirement | O87, LEAD-B7–B9 | blocked | Same: four URLs, "certificate rejected", no response. |
| 4 | Cornell: "does not track demonstrated interest" | O74 | **not verified; citation unusable** | O74 points at `dev.admissions.cornell.edu`, a non-public development subdomain that no longer resolves (ENOTFOUND in the link check). The public page at the same path redirects to `cornell.edu/visit`, which carries no demonstrated-interest wording at all (S1). |
| 5 | Stanford FAQ: how Additional Information should be used | O53 | blocked | The URL returns an empty document to the browser: `document.readyState` complete, `body.innerText` length 0 (S2). |
| 6 | UT Austin: up to two letters; waitlist extras not reviewed | O85, O99 | blocked | The FAQ page renders its questions only; the answers are not in the page source and appear on interaction (S3). |

## Consequences applied to the site

- [事實] Nothing above moved from inference to fact, so no matrix cell changed.
- [事實] The insights page's list of "statements still awaiting a browser check"
  was stale: it still named Columbia's extra-letters rule, Duke's FAQ wording
  and Georgetown's interview FAQ, all of which round 1 had already confirmed
  (V03, V12, V13–V15). The list now names only what is genuinely still open,
  and says which kind of obstacle each one is, because "refused automated
  access" was doing too much work: a TLS refusal, a page that serves an empty
  body, and a page whose answers load on click are three different problems and
  only the first is permanent.
- [事實] O74 is now described in this note as unusable rather than as an
  official source for Cornell's position. The claim was never asserted on any
  site page — the insights page already listed Cornell among the unverified —
  so no published statement had to be withdrawn.

## Non-obvious findings

- [事實] A citation can look official and still be unverifiable by a reader: a
  URL on a `dev.` subdomain was captured from a search index, and that
  subdomain is not public. A link check catches this (ENOTFOUND) where a
  reading pass does not, because the reading pass never visited it.
- [推論] "The page refuses automated access" is three different situations, and
  they do not have the same prognosis. A TLS-layer refusal across two request
  paths (Princeton, Northwestern, Purdue) will not clear by retrying. An empty
  body (Stanford FAQ) and answers behind a click (UT Austin) are the page's own
  rendering, so the text exists and a person reading it by hand can retrieve it
  in seconds.

## 中文摘要

- [事實] 第二輪複查沒有把任何推論升級為事實，矩陣沒有任何格子改動。
- [事實] Princeton、Northwestern、Purdue 三個主機用兩條互相獨立的請求路徑、各四個網址共十二個網址重試，全部在 TLS 層被拒，沒有回應內容，也沒有出現人工驗證頁；沒有嘗試任何繞過方式。
- [事實] O74 指向 `dev.admissions.cornell.edu`，是不對外的開發用子網域，現在已無法解析；同一路徑的公開頁面會轉到 `cornell.edu/visit`，上面完全沒有關於 demonstrated interest 的字句。因此 Cornell 這條說法不成立為事實。本站各頁原本就把 Cornell 列在「未確認」裡，所以沒有任何已發布的說法需要撤回。
- [事實] insights 頁原本那份「尚待瀏覽器確認」清單已經過期：它還列著 Columbia 的額外推薦信規定、Duke 的 FAQ 用語、Georgetown 的面試 FAQ，而這三項在第一輪就已確認。現在清單只列真正還沒解決的項目，並分別說明是哪一種障礙。
- [推論] 「頁面拒絕自動存取」其實是三種不同狀況，預後也不同：TLS 層的拒絕重試不會好；回傳空白內容、以及答案要點擊才載入，都是頁面自己的呈現方式，文字其實存在，人工開頁幾秒就能讀到。
