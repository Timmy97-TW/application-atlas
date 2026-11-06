---
title: "Common Data Set numbers for the 30 schools: applicants, early rounds, waitlists, test submission, nonresident share"
date: 2026-11-07
cycle: 2026-27
unit: B5
review_by: Timmy
status: draft
sources: see "## Sources" table at the end (N01–N31)
---

# Common Data Set numbers / CDS 數字整理

Companion to `research/2026-11-07_reader-side-reality_v1.md` (which covers C7). This note reads the same CDS files for sections B2, C1, C2, C8A, C9, C21 and C22. No new CDS files were searched for; the URLs are the ones already cited there, except MIT, Harvard and Columbia (re-downloaded today from the same URLs) and one Brown Tableau CSV export.

摘要（中文）：本筆記把 30 校最新一份 CDS 的 C1（申請／錄取人數）、C21（ED）、C22（EA）、C2（候補名單）、C9（送分比例、SAT 中間 50%）、C8A（考試政策）、B2（非居民 first-year 人數）整理成一張表，並列出可直接由表內數字算出的比例。所有比例都是對官方 CDS 數字做的簡單算術，公式寫在旁邊，標 `[事實]`。凡是關於「為什麼」的說法（例如 ED 池子組成不同）一律標 `[推論]`。Brown、Williams、Amherst 這次沒讀到，欄位留空並寫明原因。依 CLAUDE.md 規則 5，本筆記不寫「ED 錄取機會是 N 倍」這種說法；ED 與整體錄取率只並列，相除結果只是兩個不同申請池公開數字的商，不代表任何個人的機率。

## How the numbers were read

- [事實] Every value below was read from the school's own CDS file (PDF form fields, PDF text with x-positions of check marks, xlsx cells, or the HTML table on MIT's page). Where a check mark's column was not clear from text extraction, the page was rendered to an image and read visually (Harvard, Yale, Stanford, Duke, JHU, Princeton, Rice C8A; UT C9). WebFetch summaries were not used.
- [事實] All files are the 2025-26 CDS (Fall 2025 entering class) except Olin, whose newest file found is 2023-24 (Fall 2023 class). (N18)
- [事實] Where a school left the C1 "Total" row blank but filled the sex rows, the total shown here is the sum of the sex rows, marked "Σ". This applies to Caltech, Yale, Duke, Northwestern, Michigan, UCLA, Swarthmore. Caltech's file shows 0 in its residency "Total" row and leaves the C1 total row blank. Swarthmore and UCLA show 0 in the residency total row. (N02, N05, N21, N22, N16, N25, N31)
- [事實] "Nonresident share" = B2 nonresident degree-seeking first-time first-year count ÷ C1 total first-year enrolled. Both come from the same file. B2 counts visa status. C1's residency columns count physical address at application. The two are different measures (see observation 6).
- [事實] Blank means the cell in the school's file is blank. "not retrieved" means the file was not read on 2026-11-07.

## Master table

Abbreviations: Apps / Adm / Enr = C1 first-year applied / admitted / enrolled. ED = C21 applications / admits. EA = C22 offered, close–notify dates, restrictive (R) as marked. WL = C2 offered / accepted / admitted. SAT%, ACT% = C9 share of enrolled first-years submitting. SAT mid = C9 SAT Composite 25th / 50th / 75th. NR = B2 nonresident first-year count. C8A = SAT or ACT row: Req = required to be considered, Rec = recommended, Cons = not required but considered if submitted, NotCons = not considered even if submitted, "No" = C8A answered No.

| School | CDS | Apps | Adm | Admit rate | ED apps / adm | EA | WL off / acc / adm | SAT% / ACT% | SAT mid | NR / Enr | C8A | Src |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| MIT | 2025-26 | 29,281 | 1,334 | 4.56% | no ED | Yes, 11/1–12/20, not R | 561 / 468 / 10 | 83% / 31% | 1520/1550/1570 | 124 / 1,152 | Req (Fall 2027) | N01 |
| Caltech | 2025-26 | Σ 11,285 | Σ 428 | 3.79% | no ED | Yes, 11/1–12/15, R | 263 / 211 / 1 | 78% / 22% | blank in file | 37 / Σ 248 | Req | N02 |
| Stanford | 2025-26 | 60,646 | 2,302 | 3.80% | no ED | Yes, 11/1–12/15, R | 669 / 573 / 57 | 55.57% / 20.94% | 1520/1550/1570 | 237 / 1,839 | Req (Fall 2027) | N03 |
| Harvard | 2025-26 | 47,893 | 2,003 | 4.18% | no ED | Yes, 11/1–12/16, R | blank / blank / 75 | 79% / 27% | blank in file | 251 / 1,675 | Req (Fall 2027) | N04 |
| Yale | 2025-26 | Σ 50,264 | Σ 2,387 | 4.75% | no ED | Yes, 11/1–12/15, R | 944 / 738 / 32 | 67% / 25% | 1480/1540/1560 | 155 / Σ 1,633 | Cons (table labelled "Fall 2025") | N05 |
| Princeton | 2025-26 | 42,303 | 1,868 | 4.42% | no ED | Yes, 11/1–mid-Dec, R | 1,370 / 1,086 / 36 | 60% / 20% | 1490/1530/1560 | 200 / 1,408 | Cons (Fall 2027) | N06 |
| Columbia (CC+SEAS) | 2025-26 | 59,611 | 2,946 | 4.94% | 5,868 / 819 | No | Yes; counts blank | 50% / 17% | 1510/1540/1560 | 273 / 1,797 | Cons | N07 |
| Penn | 2025-26 | 72,544 | 3,570 | 4.92% | 9,503 / 1,266 | No | 3,252 / 2,566 / 60 | 52% / 18% | no composite row in file | 311 / 2,420 | Req | N09 |
| Brown | 2025-26 | not retrieved | not retrieved | — | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | N10, N32 |
| Cornell | 2025-26 | 72,523 | 6,077 | 8.38% | 10,057 / 1,889 | No | 9,720 / 6,598 / 254 | % blank; N = 1,639 / 486 | 1490/1530/1550 | 373 / 3,827 | Req (Fall 2027) | N11 |
| Georgetown | 2025-26 | 26,822 | 3,618 | 13.49% | no ED | Yes, 11/1–12/15, marked R | 2,672 / 2,043 / 356 | 78% / 32% | 1405/1480/1530 | 133 / 1,589 | Req | N12 |
| Carnegie Mellon | 2025-26 | 34,867 | 3,859 | 11.07% | 2,680 / 553 | No | 7,117 / 4,937 / 36 | 65.5% / 18.1% | 1500/1540/1560 | 261 / 1,804 | Cons (labelled "Fall 2025") | N13 |
| Georgia Tech | 2025-26 | 66,881 | 8,921 | 13.34% | no ED | Yes, 11/1–1/31, not R | 7,651 / 4,875 / 653 | 78% / 33% | 1370/1460/1530 | 310 / 4,071 | Req | N14 |
| Purdue (system) | 2025-26 | 87,220 | 37,881 | 43.43% | no ED | Yes, Nov 1 – Jan 15 | 8,981 / 4,047 / 3,916 | 83.8% / 22.6% | 1220/1360/1470 | 536 / 9,656 | Req | N15 |
| Michigan | 2025-26 | Σ 109,112 | Σ 17,915 | 16.42% | no ED | Yes, 11/1–1/31, not R | 24,447 / 18,435 / 1,663 | 55% / 18% | 1370/1470/1530 | 391 / Σ 8,178 | Rec | N16 |
| UIUC | 2025-26 | 83,045 | 30,384 | 36.59% | no ED | Yes, 11/1–1/30 | 6,826 / 4,317 / 1 | 42.59% / 14.07% | 1390/1442/1520 | 1,435 / 9,207 | Cons | N17 |
| Olin | 2023-24 | Σ 928 | Σ 201 | 21.66% | Y/N not extracted | Y/N not extracted | 53 / 33 / 10 | 46% / 22% | 1500/1530/1560 | 12 (see note) / 98 | No (C8A) | N18 |
| Harvey Mudd | 2025-26 | 5,217 | 643 | 12.33% | 594 / 109 | no box marked | 685 / 439 / 0 | 55% / 21% | 1500/1510/1560 | 30 / 236 | Cons | N19 |
| Johns Hopkins | 2025-26 | 50,259 | 3,072 | 6.11% | 7,639 / 835 | No | 2,058 / 1,359 / 247 | 57% / 20% | 1530/1550/1565 | 188 / 1,378 | Req for Homewood, Cons for Peabody (Fall 2027) | N20 |
| Duke | 2025-26 | Σ 55,541 | Σ 2,910 | 5.24% | Yes; counts blank | N/A | Yes; counts blank | 48% / 27% | 1510/1550/1570 | 193 / Σ 1,749 | Cons (Fall 2027) | N21 |
| Northwestern | 2025-26 | Σ 52,676 | Σ 3,933 | 7.47% | 5,939 / 1,212 | No | placeholder text / placeholder text / 167 | 48% / 25% | 1520/1540/1560 | 253 / Σ 2,139 | Cons | N22 |
| Rice | 2025-26 | 36,791 | 2,948 | 8.01% | 5,748 / 647 | No | 3,196 / 2,204 / 66 | 59% / 24% | 1510/1540/1560 | 164 / 1,263 | Rec (Fall 2026) | N23 |
| UC Berkeley | 2025-26 | 126,864 | 14,524 | 11.45% | no ED | No | 9,102 / 6,479 / 0 | blank | blank | 762 / 6,687 | C8A "Y", row marked NotCons | N24 |
| UCLA | 2025-26 | Σ 145,086 | Σ 13,659 | 9.41% | no ED | No | 20,563 / 13,612 / 1,514 | blank | blank | 549 / Σ 6,553 | No | N25 |
| UC San Diego | 2025-26 | 136,750 | 39,054 | 28.56% | no ED | No | 36,709 / 25,411 / 5,284 | blank | blank | 1,409 / 7,801 | No; row marked NotCons | N26 |
| UT Austin | 2025-26 | 90,690 | 20,154 | 22.22% | no ED | N/A marked | No waitlist | blank | blank | 379 / 9,900 | Req | N27 |
| UW Seattle | 2025-26 | 72,933 | 30,446 | 41.75% | no ED | No | 15,363 / 8,350 / 2,252 | 19.12% / 4.89% | 1320/1440/1502 | 692 / 7,129 | No; rows marked NotCons | N28 |
| Williams | — | not retrieved | not retrieved | — | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | N29 |
| Amherst | — | not retrieved | not retrieved | — | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | not retrieved | N30 |
| Swarthmore | 2025-26 | Σ 12,995 | Σ 977 | 7.52% | 1,281 / 228 | No | blank / blank / 14 | 40.14% / 14.79% | 1480/1520/1550 | 57 / Σ 426 | Cons | N31 |

Admit rate = Adm ÷ Apps, rounded to two decimals. [事實] for every row with both numbers.

Notes on individual rows:
- [事實] **Brown**: Brown publishes its CDS only as a Tableau dashboard. On 2026-11-07 one CSV export worked (the C9 ACT score-range sheet: 94% of submitters in ACT Composite 30–36). Later requests to the same host timed out, so C1, C2, C21, B2 and C8A were not retrieved. (N10, N32)
- [事實] **Williams** (HTTP 403) and **Amherst** (HTTP 404 on 2026-11-07; 405 earlier the same day) did not serve their CDS pages to automated requests. (N29, N30)
- [事實] **Caltech** and **Harvard** leave the SAT Composite 25/50/75 row blank and fill only the section scores (Harvard EBRW 720/750/770, Math 730/770/790). **Penn**'s C9 table has no Composite row (EBRW 740/760/770, Math 770/790/800). (N02, N04, N09)
- [事實] **Cornell** fills the C9 counts (1,639 SAT, 486 ACT) but not the percentages. 1,639 ÷ 3,827 = 42.8% and 486 ÷ 3,827 = 12.7%, using C1 enrolled as the denominator. The CDS percentage may use a different base, so treat these as approximate. (N11)
- [事實] **Carnegie Mellon**'s 2025-26 file labels its C2 and C9 blocks "Fall 2024". C1 and C21 say Fall 2025. Which cohort C2/C9 describe was not resolved. C1 is the Pittsburgh campus only. B2 also lists a separate Doha first-year count that is not used here. (N13)
- [事實] **Purdue** reports system-wide figures (West Lafayette, Indianapolis, Polytechnic Statewide), so they are not West Lafayette alone. The xlsx stores EA dates as 2025-11-01 and 2025-01-15, which looks like a spreadsheet year artifact; only month and day are reported here. (N15)
- [事實] **Olin** B2 nonresident row reads 12.0 / 17.0 / 31.0. The first column is labelled first-time first-year. The third column (total undergraduates) is larger than the second (degree-seeking undergraduates), which is unusual for Olin. Olin's C21/C22 answers are drop-down fields with no value extracted. Check both by eye before use. (N18)
- [事實] **Harvey Mudd** fills C21 with ED counts but marks neither Yes nor No in C22. (N19)
- [事實] **Duke** answers C21 Yes (ED 11/1, notify 12/15) and C2 Yes, but leaves the counts blank. Its C8F note says Duke "will be test optional for the 2026-27 admissions cycle". (N21)
- [事實] **Northwestern**'s C2 offered/accepted cells contain the form placeholder ("Click or tap…") rather than a number. (N22)
- [事實] **UC Berkeley** answers C8A "Y" but marks the SAT or ACT row "Not considered for admission, even if submitted". **UW** answers C8A "N" and marks all rows "not considered", yet fills C9 (19.12% SAT submitters). Both are reported as published. (N24, N28)
- [事實] **Rice** reports 629 ED admits enrolled, besides ED applications and admits. It has two ED dates (1-Nov, 4-Jan). **Swarthmore** has two ED rounds (11/15 → 12/16, 1/4 → 2/15). (N23, N31)
- [事實] **Georgetown** marks its EA "restrictive: Yes". Georgetown's own definition of that restriction was not checked here. (N12)
- [事實] The UIUC xlsx contains staff names in working-note cells. They are not reproduced here (CLAUDE.md rule 7). (N17)

## Derived observations

### 1. ED admit rate beside overall admit rate (9 schools with ED counts)

Formulae: ED rate = ED adm ÷ ED apps. Non-ED rate = (Adm − ED adm) ÷ (Apps − ED apps). Quotient = ED rate ÷ overall rate. Everything is arithmetic on the cited C1 and C21 cells. [事實]

| School | ED rate | Overall | Non-ED pool | ED rate ÷ overall | ED admits as % of all admits |
|---|---|---|---|---|---|
| Columbia | 819/5,868 = 13.96% | 4.94% | 2,127/53,743 = 3.96% | 2.82 | 27.8% |
| Penn | 1,266/9,503 = 13.32% | 4.92% | 2,304/63,041 = 3.65% | 2.71 | 35.5% |
| Northwestern | 1,212/5,939 = 20.41% | 7.47% | 2,721/46,737 = 5.82% | 2.73 | 30.8% |
| Swarthmore | 228/1,281 = 17.80% | 7.52% | 749/11,714 = 6.39% | 2.37 | 23.3% |
| Cornell | 1,889/10,057 = 18.78% | 8.38% | 4,188/62,466 = 6.70% | 2.24 | 31.1% |
| Carnegie Mellon | 553/2,680 = 20.63% | 11.07% | 3,306/32,187 = 10.27% | 1.86 | 14.3% |
| Johns Hopkins | 835/7,639 = 10.93% | 6.11% | 2,237/42,620 = 5.25% | 1.79 | 27.2% |
| Harvey Mudd | 109/594 = 18.35% | 12.33% | 534/4,623 = 11.55% | 1.49 | 17.0% |
| Rice | 647/5,748 = 11.26% | 8.01% | 2,301/31,043 = 7.41% | 1.40 | 21.9% |

- [事實] At all nine schools the ED rate is above the overall rate. The gap is widest at Columbia, Penn and Northwestern (quotient 2.7–2.8) and narrowest at Rice and Harvey Mudd (1.4–1.5).
- [推論] These quotients compare two different applicant pools. They do not say what any one applicant's chance would be under ED. ED pools can differ in composition from RD pools (for example recruited athletes, legacy applicants, or applicants able to commit without comparing aid offers are often said to be concentrated in ED). No CDS file breaks the ED pool down, so this cannot be checked from these sources. The "Non-ED pool" also mixes in any EA or second-round applicants. Per CLAUDE.md rule 5, the column is a quotient of published rates, not an "N× chance" claim.
- [事實] At Penn, ED admits were 35.5% of all admits (1,266 ÷ 3,570). At Cornell the figure was 31.1% and at Northwestern 30.8%.

### 2. Early action

- [事實] Of the 27 files read, 11 report a non-binding EA: MIT, Caltech, Stanford, Harvard, Yale, Princeton, Georgetown, Georgia Tech, Purdue, Michigan and UIUC. Six of these mark EA as restrictive (Caltech, Stanford, Harvard, Yale, Princeton, Georgetown). No school reported EA application counts (C22 has no count fields in the 2025-26 template).
- [事實] Every school with EA also reports no ED. Georgia Tech, Michigan, Purdue and UIUC notify EA in late January (1/15–1/31). The private EA schools notify mid-December.

### 3. Waitlists

Formula: share of those who accepted a waitlist place and were then admitted = WL admitted ÷ WL accepted. [事實]

- [事實] It is under 1% at Caltech (1/211 = 0.47%), Carnegie Mellon (36/4,937 = 0.73%), UIUC (1/4,317 = 0.02%), Harvey Mudd (0/439) and UC Berkeley (0/6,479). It is 2–5% at MIT (2.14%), Penn (2.34%), Rice (2.99%), Princeton (3.31%), Cornell (3.85%) and Yale (4.34%). It is 9–27% at Michigan (9.02%), Stanford (9.95%), UCLA (11.12%), Georgia Tech (13.39%), Georgetown (17.43%), JHU (18.18%), UCSD (20.79%) and UW (26.97%), and 30.30% at Olin (2023-24). Purdue is the outlier at 3,916/4,047 = 96.76%.
- [推論] Purdue's figure probably reflects a waitlist used as a routine second-stage step rather than a reserve list, but Purdue's file gives no explanation. That reading is not verified.
- [事實] UT Austin reports no waitlist. Harvard, Columbia, Duke, Northwestern and Swarthmore report a waitlist but leave the offered and/or accepted counts blank.

### 4. Test submission among enrolled students (C9) and C8A policy

- [事實] At schools whose C8A marks "Required", the SAT share is 78–84% at MIT (83%), Caltech (78%), Harvard (79%), Georgetown (78%), Georgia Tech (78%) and Purdue (83.8%), but 55.57% at Stanford and 52% at Penn. The ACT shares are 20.94% and 18% respectively. [推論] Stanford's and Penn's lower shares may be because C9 counts the Fall 2025 class, which may have been admitted before a newly reinstated requirement took effect. Stanford's C8F text refers to reinstating its requirement, but the start year was not read here. This is not verified.
- [事實] At schools marking "Considered if submitted" (Yale, Princeton, Columbia, Carnegie Mellon, UIUC, Harvey Mudd, Duke, Northwestern, Swarthmore), SAT submission ranges from 40.14% (Swarthmore) and 42.59% (UIUC) to 67% (Yale). Five of the nine are at or below 55%: Swarthmore 40.14%, UIUC 42.59%, Duke 48%, Northwestern 48%, Columbia 50%.
- [事實] Michigan and Rice mark "Recommended". Their SAT shares are 55% and 59%.
- [事實] The four UC/UW public files with "No" or "not considered" (Berkeley, UCLA, UCSD, UW) leave C9 blank, except UW (19.12% SAT, 4.89% ACT). UT Austin marks "Required" but leaves C9 blank.
- [事實] SAT Composite medians among the filled rows run from 1360 (Purdue) to 1550 (MIT, Stanford, Duke, JHU). JHU's 25th percentile (1530) is the highest. Purdue (1220), Georgia Tech (1370), Michigan (1370), UW (1320) and UIUC (1390) have 25th percentiles under 1400.
- [推論] Because C9 covers only those who submitted, a school's middle-50% range at a test-optional school describes the submitting subgroup, not the whole class.
- [事實] Princeton's and Yale's C8A marks ("Considered if submitted") should be checked against each school's current admissions page before the site states a policy. Yale's C8A table is labelled "Fall 2025", Princeton's "Fall 2027". This note did not read those pages.

### 5. Nonresident share of the first-year class (B2 ÷ C1 enrolled)

[事實] Ranked, highest first (formula: B2 nonresident first-year ÷ C1 enrolled):

1. UC San Diego 1,409/7,801 = 18.06%
2. UIUC 1,435/9,207 = 15.59%
3. Columbia 273/1,797 = 15.19%
4. Harvard 251/1,675 = 14.99%
5. Caltech 37/248 = 14.92%
6. Carnegie Mellon 261/1,804 = 14.47%
7. Princeton 200/1,408 = 14.20%
8. Johns Hopkins 188/1,378 = 13.64%
9. Swarthmore 57/426 = 13.38%
10. Rice 164/1,263 = 12.98%
11. Stanford 237/1,839 = 12.89%
12. Penn 311/2,420 = 12.85%
13. Harvey Mudd 30/236 = 12.71%
14. Olin 12/98 = 12.24% (2023-24, column order flagged)
15. Northwestern 253/2,139 = 11.83%
16. UC Berkeley 762/6,687 = 11.40%
17. Duke 193/1,749 = 11.03%
18. MIT 124/1,152 = 10.76%
19. Cornell 373/3,827 = 9.75%
20. UW 692/7,129 = 9.71%
21. Yale 155/1,633 = 9.49%
22. UCLA 549/6,553 = 8.38%
23. Georgetown 133/1,589 = 8.37%
24. Georgia Tech 310/4,071 = 7.61%
25. Purdue (system) 536/9,656 = 5.55%
26. Michigan 391/8,178 = 4.78%
27. UT Austin 379/9,900 = 3.83%

Brown, Williams and Amherst: not retrieved.

- [事實] The range is 3.83% to 18.06%. The three largest shares are at a UC campus, a Big Ten public and an Ivy. The three smallest are at three public flagships (Purdue, Michigan, UT Austin).

### 6. International applicants and admits (C1 residency columns, where filled)

Formula: international admit rate = international admitted ÷ international applied (C1 residency breakdown, based on physical address at application). [事實]

| School | Intl apps | Intl adm | Intl rate | Overall | Intl share of applicants |
|---|---|---|---|---|---|
| Princeton | 10,567 | 241 | 2.28% | 4.42% | 25.0% |
| Columbia | 15,380 | 407 | 2.65% | 4.94% | 25.8% |
| Cornell | 18,566 | 664 | 3.58% | 8.38% | 25.6% |
| Johns Hopkins | 10,705 | 404 | 3.77% | 6.11% | 21.3% |
| Harvey Mudd | 1,295 | 69 | 5.33% | 12.33% | 24.8% |
| Georgia Tech | 9,758 | 716 | 7.34% | 13.34% | 14.6% |
| UT Austin | 8,543 | 673 | 7.88% | 22.22% | 9.4% |
| Georgetown | 3,926 | 326 | 8.30% | 13.49% | 14.6% |
| Purdue | 16,327 | 3,672 | 22.49% | 43.43% | 18.7% |
| UIUC | 20,924 | 6,380 | 30.49% | 36.59% | 25.2% |
| UC San Diego | 24,254 | 7,496 | 30.91% | 28.56% | 17.7% |
| UW Seattle | 13,054 | 4,653 | 35.64% | 41.75% | 17.9% |

- [事實] At 11 of these 12 schools the international admit rate is below the overall rate. UC San Diego is the exception (30.91% vs 28.56%).
- [事實] C1 international enrolled and B2 nonresident first-year counts differ slightly in the same file: Princeton 186 vs 200, Columbia 275 vs 273, Cornell 389 vs 373, JHU 183 vs 188, Georgia Tech 248 vs 310, UT Austin 184 vs 379, UIUC 1,410 vs 1,435, Purdue 526 vs 536, Harvey Mudd 32 vs 30, UW 691 vs 692, UCSD 1,409 vs 1,409. [推論] The difference is expected because C1 uses physical address at application and B2 uses citizenship/visa status. For example, a nonresident living in the US at application would count as in-state or out-of-state in C1 but as nonresident in B2. UT Austin's gap (184 vs 379) is the largest.
- [推論] An international rate below the overall rate does not by itself show that international applicants are treated differently. Need-aware aid policies, pool composition and yield expectations could each contribute, and none of these is measured in the CDS.

## Open items

- Brown: retry the Tableau CSV exports (C1, C2, C21, B2 sheets) or read the dashboard in a browser.
- Williams, Amherst: open the CDS pages in a browser.
- Olin: confirm the B2 column order and the C21/C22 answers visually. Check whether a 2024-25 or 2025-26 CDS exists.
- Carnegie Mellon: confirm which cohort the C2 and C9 blocks describe ("Fall 2024" label).
- Yale, Princeton, Duke, Stanford, Penn: compare C8A marks with each school's current testing page before any site cell states a test policy.

## Sources

| id | url | access_date | class | supports |
|---|---|---|---|---|
| N01 | https://ir.mit.edu/projects/2025-26-common-data-set/ | 2026-11-07 | official | MIT CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N02 | https://iro.caltech.edu/documents/35129/Caltech_CDS_2025-26_August_2026.pdf | 2026-11-07 | official | Caltech CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N03 | https://drive.google.com/file/d/1GIPKgVj1d86dkmLkHI_mZVCk_iY6kiCp/view (linked from https://irds.stanford.edu/data-findings/cds) | 2026-11-07 | official | Stanford CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N04 | https://oira.harvard.edu/files/2026/07/CDS_2025-2026.pdf | 2026-11-07 | official | Harvard CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N05 | https://oir.yale.edu/sites/default/files/yale_cds_2025-26_md_20260616.pdf | 2026-11-07 | official | Yale CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N06 | https://ir.princeton.edu/sites/g/files/toruqf2041/files/documents/CDS_2526_Princeton_v2.pdf | 2026-11-07 | official | Princeton CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N07 | https://opir.columbia.edu/sites/opir.columbia.edu/files/content/Common%20Data%20Set/2025-26_Columbia_College_and_Columbia_Enginnering_CDS.pdf | 2026-11-07 | official | Columbia CC+SEAS CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N09 | https://upenn.box.com/s/woo7d85yxpol6j9e2o121aucjc6dc1k5 (linked from https://ira.upenn.edu/penn-numbers/common-data-set) | 2026-11-07 | official | Penn CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N10 | https://oir.brown.edu/institutional-data/common-data-set | 2026-11-07 | official | Brown CDS location (Tableau); sections not retrieved |
| N11 | https://irp.cornell.edu/wp-content/uploads/2026/09/Cornell-Common-Data-Set-2025-26.pdf | 2026-11-07 | official | Cornell CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 (form fields) |
| N12 | https://georgetown.box.com/s/0r8akn4cbm52zjkll6i7uttlb9k36px2 (linked from https://oads.georgetown.edu/commondataset/) | 2026-11-07 | official | Georgetown CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N13 | https://www.cmu.edu/ira/CDS/pdf/cds_2025_26/cds_2025_full_pdf_updated_11jun26.pdf | 2026-11-07 | official | CMU CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N14 | https://irp.gatech.edu/sites/default/files/CDS/CDS_2025-2026_FINAL_R4_03JUN2026.pdf | 2026-11-07 | official | Georgia Tech CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N15 | https://www.purdue.edu/idata/wp-content/uploads/2026/04/CDS-2025-2026.xlsx | 2026-11-07 | official | Purdue CDS 2025-26 (system-wide) B2, C1, C2, C8A, C9, C21, C22 |
| N16 | https://obp.umich.edu/wp-content/uploads/pubdata/cds/cds_2025-26_umaa.pdf (read via Wayback capture 2026-10-18) | 2026-11-07 | official | Michigan CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N17 | https://uofi.box.com/shared/static/orx4vnmzkt2drmgoiksxpfs39pr42uor.xlsx (linked from https://dair.illinois.edu/access-data/common-data-set/) | 2026-11-07 | official | UIUC CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N18 | https://www.olin.edu/sites/default/files/2024-05/CDS_2023_2024%20(2).pdf | 2026-11-07 | official | Olin CDS 2023-24 B2, C1, C2, C8A, C9 |
| N19 | https://www.hmc.edu/institutional-research/wp-content/uploads/sites/42/2026/03/CDS-HMC-2025.2026_shared.pdf | 2026-11-07 | official | Harvey Mudd CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 (form fields) |
| N20 | https://oira.jhu.edu/wp-content/uploads/2025-2026-CDS-Johns-Hopkins-University-v2.pdf (read via Wayback capture 2026-10-12) | 2026-11-07 | official | JHU CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N21 | https://ir.provost.duke.edu/sites/default/files/CDS_PDF_2025-2026-20260622-website-published-version.pdf | 2026-11-07 | official | Duke CDS 2025-26 B2, C1, C2, C8A, C8F, C9, C21, C22 |
| N22 | https://www.enrollment.northwestern.edu/data/2025-2026.pdf | 2026-11-07 | official | Northwestern CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N23 | https://ideas.rice.edu/wp-content/uploads/2026/08/CDS_2025-26_WEBSITE_Updated_8-3-2026.pdf | 2026-11-07 | official | Rice CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N24 | https://docs.google.com/spreadsheets/d/1INsGFH6MhaO-MFMBZ1Dngcn84FeN-hc0BLS0-v8TL_k/edit (linked from https://opa.berkeley.edu/campus-data/common-data-set) | 2026-11-07 | official | UC Berkeley CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N25 | https://apb.ucla.edu/file/d1ab04b3-ee89-4cf2-9124-8dc0471b5e5a | 2026-11-07 | official | UCLA CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 (form fields) |
| N26 | https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final4.pdf | 2026-11-07 | official | UC San Diego CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N27 | https://utexas.box.com/s/z5p8zzbr6yk4eluam3v3dt2wyaha3cja (linked from https://reports.utexas.edu/common-data-set/pdf) | 2026-11-07 | official | UT Austin CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 |
| N28 | https://finance.uw.edu/iads/files/docs/ipeds/common_data_set/cds_2025-2026_seattle.pdf | 2026-11-07 | official | UW Seattle CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 (form fields) |
| N29 | https://www.williams.edu/institutional-research/common-data-set/ | 2026-11-07 | official | Williams: HTTP 403 to automated access; not retrieved |
| N30 | https://www.amherst.edu/offices/institutional-research/cds | 2026-11-07 | official | Amherst: HTTP 404/405 to automated access; not retrieved |
| N31 | https://www.swarthmore.edu/sites/default/files/assets/documents/institutional-effectiveness-research-assessment/Swarthmore-CDS-2025-26.pdf | 2026-11-07 | official | Swarthmore CDS 2025-26 B2, C1, C2, C8A, C9, C21, C22 (form fields) |
| N32 | https://tableau.brown.edu/t/PublicContent/views/CommonDataSet/C-Admissions.csv | 2026-11-07 | official | Brown CDS 2025-26 C9 ACT score-range distribution (only sheet retrieved) |
