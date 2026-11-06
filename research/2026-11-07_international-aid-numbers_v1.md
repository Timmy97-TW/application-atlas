---
title: "Institutional aid to nonresident undergraduates (CDS H6) beside cost of attendance (CDS G1/G5) for the 30 schools"
date: 2026-11-07
cycle: 2026-27
unit: A4
review_by: Timmy
status: draft
sources: see "## Sources" table at the end (H01–H35)
---

# International aid numbers / 非居民（國際生）助學金數字

摘要（中文）：本筆記讀 30 校最新 CDS 的 H6（學校是否提供 institutional scholarship/grant 給 degree-seeking nonresidents、受助人數、平均金額、總金額），並列出 G1（學費、必繳雜費、校內食宿）與 G5（書籍、交通、其他）組成的校內 cost of attendance（COA）。凡兩個數字都有出處的學校，算出「H6 平均金額 ÷ COA」，公式寫在表內，算術標 `[事實]`，解讀標 `[推論]`。24 校的 CDS 檔案讀到了；Brown、Purdue、Michigan、Johns Hopkins、Williams、Amherst 六校的 H6 本次沒有讀到（伺服器拒絕自動存取），欄位寫 not stated／not retrieved，並非代表沒有公開。CDS 的 H6 填的是「非居民」(nonresident = 簽證身分），不是「台灣學生」；本筆記不推估任何個人能拿到多少。

## How the numbers were read

- [事實] Files are the same CDS files cited in `research/2026-11-07_cds-numbers_v1.md` (N01–N31), re-downloaded 2026-11-07. Values were read from PDF form fields (Cornell, Harvey Mudd, Swarthmore, UW), from xlsx cells (UIUC answer sheet, UC Berkeley sheet export), or from PDF text and, where check marks or boxes did not survive text extraction, from rendered page images (Caltech, Stanford, Harvard, Georgetown, Georgia Tech, Olin, Northwestern, UCLA, UC San Diego, UT Austin, Penn, Yale). (H02–H31)
- [事實] **Exception: MIT.** Direct download of MIT's CDS page returned a Cloudflare error page; MIT's H6, G1 and G5 were read through a WebFetch summary of https://ir.mit.edu/projects/2025-26-common-data-set/ that quoted the values. This is a weaker reading method than the others and should be re-checked in a browser before any site cell uses it. (H01)
- [事實] In the 2025-26 CDS template, G1 asks for the **2026-2027** academic year ("List the typical tuition … for the FULL 2026-2027 academic year"), while H6 reports aid "for the same academic year checked in item H1", which is 2025-26 in these files. So the G figures below already are 2026-27 costs and the H6 figures are 2025-26 awards. Olin's file is 2023-24 for both (its G1 header says "FULL 2023-2024 academic year"; its H1 response reads "2023-2024 Estimated"). (H02–H31, H18)
- [事實] "CDS COA" below = G1 tuition (for public universities, the "Nonresident" tuition row) + G1 required fees (first-year column) + G1 food and housing on campus (first-year column) + G5 books and supplies + G5 transportation + G5 other expenses (Residents column). Rows that are blank or say "varies" are left out and named in the table. Health insurance is not a CDS G1/G5 line and is not included.
- [事實] "Share" = H6 average award ÷ CDS COA (or ÷ the school's own COA page total where G1 is blank). Arithmetic is exact to 0.1 percentage point.
- [推論] Because H6 is 2025-26 money and COA is 2026-27 cost, each share is somewhat lower than the same-year share would be. The size of that gap is not known from these files.
- [事實] As a consistency check, H6 number × H6 average was compared with H6 total for every school that filled all three. All agree to within rounding of the average (largest difference: Harvard, 805 × $83,013 = $66,825,465 vs reported $66,826,244). (table below)

## Master table

Columns: **H6 policy** NB = "Institutional need-based scholarship or grant aid is available" checked; NN = non-need-based checked; None = "not available" checked; blank = no box marked. **N** = number of degree-seeking undergraduate nonresidents awarded institutional aid. **Avg**, **Total** = H6 average and total institutional aid to that group.

| School | CDS | H6 policy | N | Avg | Total | G1 tuition / fees / food+housing (first-year) | G5 books / transport / other (residents) | CDS COA (formula) | School COA page 2026-27 | Share = Avg ÷ COA | Src |
|---|---|---|---|---|---|---|---|---|---|---|---|
| MIT | 2025-26 | NB | 411 | $81,991 | $33,698,421 | $66,720 / $420 / $22,194 | $930 / varies / $2,496 | 66,720+420+22,194+930+2,496 = **$92,760** | not checked | 81,991 ÷ 92,760 = **88.4%** | H01 |
| Caltech | 2025-26 | NB | 59 | $85,696 | $5,056,044 | $68,574 / $3,255 / $21,996 | $1,428 / no row read / $3,969 | 68,574+3,255+21,996+1,428+3,969 = **$99,222** | not checked | 85,696 ÷ 99,222 = **86.4%** | H02 |
| Stanford | 2025-26 | NB + NN | 260 | $85,424 | $22,210,145 | $67,731 / $843 / $22,944 | $855 / varies / $5,172 | 67,731+843+22,944+855+5,172 = **$97,545** | not checked | 85,424 ÷ 97,545 = **87.6%** | H03 |
| Harvard | 2025-26 | NB | 805 | $83,013 | $66,826,244 | blank in file | blank in file | — | $95,134–$100,134 total (transport $0–$5,000) | 83,013 ÷ 95,134 (low end) = **87.3%** | H04, H32 |
| Yale | 2025-26 | NB | 459 | $84,185 | $38,640,976 | $72,500 / blank / $21,600 | $1,000 / $1,100 / $2,700 | 72,500+21,600+1,000+1,100+2,700 = **$98,900** | not checked | 84,185 ÷ 98,900 = **85.1%** | H05 |
| Princeton | 2025-26 | NB | 597 | $86,736 | $51,781,584 | $68,140 / $314 / $22,120 | $1,050 / $1,000 / $3,000 | 68,140+314+22,120+1,050+1,000+3,000 = **$95,624** | not checked | 86,736 ÷ 95,624 = **90.7%** | H06 |
| Columbia (CC+SEAS) | 2025-26 | NB | 248 | $92,699 | $22,989,258 | $72,800 / $4,160 / $19,650 | $1,320 / varies / $1,844 | 72,800+4,160+19,650+1,320+1,844 = **$99,774** | not checked | 92,699 ÷ 99,774 = **92.9%** | H07 |
| Penn | 2025-26 | NB | 448 | $80,607 | $36,111,968 | $65,670 / $8,308 / room $13,644 + board $6,960 | $1,412 / $1,080 / $2,008 | 65,670+8,308+13,644+6,960+1,412+1,080+2,008 = **$99,082** | not checked | 80,607 ÷ 99,082 = **81.4%** | H08 |
| Brown | not retrieved | not stated | not stated | not stated | not stated | not retrieved | not retrieved | — | $99,994 (tuition $74,568, fees $3,084, housing $10,710, food $8,754, personal $2,878) | — | H09, H33 |
| Cornell | 2025-26 | NB | 318 | $88,263 | $28,067,649 | $73,946 / $1,024 / $21,348 | $1,234 / no field / $2,182 | 73,946+1,024+21,348+1,234+2,182 = **$99,734** | not checked | 88,263 ÷ 99,734 = **88.5%** | H10 |
| Georgetown | 2025-26 | NB | 48 | $75,050 | $3,602,410 | $74,520 / $212 / $22,180 | blank / $780 / $3,172 | 74,520+212+22,180+780+3,172 = **$100,864** | not checked | 75,050 ÷ 100,864 = **74.4%** | H11 |
| Carnegie Mellon | 2025-26 | None | blank | blank | blank | $69,702 / $1,862 / $19,560 | $1,000 / $0 / $1,300 | 69,702+1,862+19,560+1,000+0+1,300 = **$93,424** | not checked | n/a (no H6 aid) | H12 |
| Georgia Tech | 2025-26 | None | — | — | — | nonresident $35,610 / $1,516 / $14,628 | $800 / $566 / $2,800 | 35,610+1,516+14,628+800+566+2,800 = **$55,920** | not checked | n/a (no H6 aid) | H13 |
| Purdue | not retrieved | not stated | not stated | not stated | not stated | not retrieved | not retrieved | — | not retrieved (page refused connection) | — | H14 |
| Michigan | not retrieved | not stated | not stated | not stated | not stated | not retrieved | not retrieved | — | not retrieved (HTTP 403) | — | H15 |
| UIUC | 2025-26 | NN only | 45 | $5,176 | $232,934 | nonresident $34,338 / $5,054 / $15,184 | $1,200 / $500 / $2,000 | 34,338+5,054+15,184+1,200+500+2,000 = **$58,276** | not checked | 5,176 ÷ 58,276 = **8.9%** | H16 |
| Olin | **2023-24** | NB + NN | 29 | $30,069 | $871,994 | $59,972 / $4,486 / $19,820 (2023-24) | $216 / $1,508 / $472 | 59,972+4,486+19,820+216+1,508+472 = **$86,474** (2023-24) | not checked | 30,069 ÷ 86,474 = **34.8%** (both 2023-24) | H17 |
| Harvey Mudd | 2025-26 | NB + NN | 38 | $32,564 | $1,237,421 | $72,669 / $401 / $23,434 | $800 / blank / blank | 72,669+401+23,434+800 = **$97,304** (partial) | not retrieved (HTTP 404 at guessed URL) | 32,564 ÷ 97,304 = **33.5%** (COA partial) | H18 |
| Johns Hopkins | not retrieved | not stated | not stated | not stated | not stated | not retrieved | not retrieved | — | not retrieved (HTTP 404 at sfs.jhu.edu/tuition-and-fees/) | — | H19, H34 |
| Duke | 2025-26 | NB + NN | 215 | $87,841 | $18,885,746 | $73,740 / $2,635 / $20,222 | $536 / $778 (one value printed; column not confirmed) / $1,637 | 73,740+2,635+20,222+536+778+1,637 = **$99,548** | not checked | 87,841 ÷ 99,548 = **88.2%** | H20 |
| Northwestern | 2025-26 | NB + NN | 297 | $74,186 | $22,033,357 | $71,802 / $1,260 / $22,941 | $1,239 / varies / $2,079 | 71,802+1,260+22,941+1,239+2,079 = **$99,321** | not checked | 74,186 ÷ 99,321 = **74.7%** | H21 |
| Rice | 2025-26 | NB + NN | 164 | $79,444 | $13,028,832 | $71,170 / $984 / $20,530 | $1,540 / $700 / $3,115 | 71,170+984+20,530+1,540+700+3,115 = **$98,039** | not checked | 79,444 ÷ 98,039 = **81.0%** | H22 |
| UC Berkeley | 2025-26 | blank | blank | blank | blank | nonresident $53,472 / $4,262 / $26,028 | $1,342 / $754 / $8,336 | 53,472+4,262+26,028+1,342+754+8,336 = **$94,194** | not checked | n/a (H6 blank) | H23 |
| UCLA | 2025-26 | blank | blank | blank | blank | blank in file | blank in file | — | $84,770 "Total – Nonresidents" (page says "Updated July 2026"; no year named) | n/a (H6 blank) | H24, H35 |
| UC San Diego | 2025-26 | blank (no box marked) | 214 | $10,290 | $2,202,096 | nonresident $53,472 / $3,789 / $20,443 | $1,203 / $921 / $2,760 | 53,472+3,789+20,443+1,203+921+2,760 = **$82,588** | not checked | 10,290 ÷ 82,588 = **12.5%** | H25 |
| UT Austin | 2025-26 | NB + NN | 832 | $21,343 | $17,757,378 | nonresident $44,816 / blank / $15,420 | $724 / $1,840 / $3,666 | 44,816+15,420+724+1,840+3,666 = **$66,466** | not checked | 21,343 ÷ 66,466 = **32.1%** | H26 |
| UW Seattle | 2025-26 | None | — | — | — | nonresident ("INTL") $43,494 / $1,146 / $18,405 | $900 / $519 / $2,508 | 43,494+1,146+18,405+900+519+2,508 = **$66,972** | not checked | n/a (no H6 aid) | H27 |
| Williams | not retrieved | not stated | not stated | not stated | not stated | not retrieved | not retrieved | — | not retrieved (HTTP 403) | — | H28 |
| Amherst | not retrieved | not stated | not stated | not stated | not stated | not retrieved | not retrieved | — | not retrieved (HTTP 405) | — | H29 |
| Swarthmore | 2025-26 | NB | 75 | $87,434 | $6,557,536 | $68,766 / $460 / $21,466 | $785 / no field / $1,695 | 68,766+460+21,466+785+1,695 = **$93,172** | not checked | 87,434 ÷ 93,172 = **93.8%** | H30 |

Notes on individual cells:

- [事實] Columbia, Georgetown, CMU, Olin, Harvey Mudd and UC San Diego report different first-year and all-undergraduate figures in G1; the first-year column is used. Harvey Mudd: first-year tuition $72,669, all-undergraduate tuition $75,669. (H07, H11, H12, H17, H18, H25)
- [事實] UT Austin leaves "Required Fees" blank and adds an "Other" note that begins "In order to present a realistic estimate of undergraduate student tuition and fee costs for"; the rest of the note is cut off in the printed box. (H26)
- [事實] UC Berkeley's G1 tuition cells carry "Varies according to cohort year*" for continuing undergraduates; its G5 food row is annotated as a food-and-housing total for commuters. (H23)
- [事實] UCLA's 2025-26 CDS leaves G0–G6 and H6 blank. UCLA's own admission page lists University Fees $16,430, Housing $12,299, Food $7,568, Books $1,588, Transportation $969, Personal $2,761, Health Insurance $3,885, Nonresident Supplemental Tuition $39,270, "Total – Nonresidents" $84,770, and says figures "may not be final". The page does not name the academic year. (H24, H35)
- [事實] Harvard's 2025-26 CDS leaves G1 and G5 blank. Harvard College's cost page lists 2026-2027 tuition $62,226, fees $6,216, housing $14,250, food $8,942, personal $2,500, books $1,000, transportation $0–$5,000, total $95,134–$100,134, plus health insurance $4,954 unless covered. The page states: "International students are eligible for exactly the same aid as American students." (H04, H32)
- [事實] UIUC's answer sheet marks only H.602 ("non-need-based … available") with X; the need-based and not-available rows are unmarked. (H16)
- [事實] UC San Diego marks no H6 box but fills N, average and total. Its H7 marks only "Other (specify)". (H25)

## Observations

1. [事實] **Most nonresidents aided (H6 N), among the 24 files read:** UT Austin 832, Harvard 805, Princeton 597, Yale 459, Penn 448, MIT 411, Cornell 318, Northwestern 297, Stanford 260, Columbia 248. UT Austin's 832 is the largest count but its average is $21,343; Harvard's 805 carry an average of $83,013. (table)
2. [事實] **Largest total dollars to nonresidents:** Harvard $66.8M, Princeton $51.8M, Yale $38.6M, Penn $36.1M, MIT $33.7M, Cornell $28.1M. (table)
3. [事實] **Schools whose CDS checks "Institutional scholarship or grant aid is not available" for nonresidents:** Carnegie Mellon, Georgia Tech, UW Seattle. (H12, H13, H27)
4. [事實] **Schools that leave H6 blank:** UC Berkeley and UCLA (no box, no numbers). This is a blank cell, not a statement that no aid exists. (H23, H24)
5. [事實] **Public universities that do report aid to nonresidents:** UT Austin (NB + NN, 832, $21,343), UC San Diego (no box, 214, $10,290), UIUC (NN only, 45, $5,176). Georgia Tech and UW report none. Purdue and Michigan were not read. (H13, H16, H25, H26, H27)
6. [事實] **Average award as share of CDS COA**, highest to lowest where both are cited: Swarthmore 93.8%, Columbia 92.9%, Princeton 90.7%, Cornell 88.5%, MIT 88.4%, Duke 88.2%, Stanford 87.6%, Harvard 87.3% (vs low end of page range), Caltech 86.4%, Yale 85.1%, Penn 81.4%, Rice 81.0%, Northwestern 74.7%, Georgetown 74.4%, Olin 34.8% (2023-24), Harvey Mudd 33.5% (partial COA), UT Austin 32.1%, UC San Diego 12.5%, UIUC 8.9%. (table)
7. [推論] At the schools in the 74–94% band, the average aided nonresident received institutional aid covering most of the published cost. This is an average over aided students only; it says nothing about how many nonresident applicants applied for aid, were admitted, or were denied aid, and nothing about any one applicant's award. CDS H6 does not report those numbers.
8. [推論] At Olin, Harvey Mudd, UT Austin, UC San Diego and UIUC the average award is a third of COA or less, so an aided nonresident there still faced most of the cost on average. Whether those awards are mostly merit or need cannot be separated from H6, which reports one combined count.
9. [事實] Stanford, Duke, Northwestern, Rice, Olin, Harvey Mudd and UT Austin check both need-based and non-need-based. MIT, Caltech, Harvard, Yale, Princeton, Columbia, Penn, Cornell, Georgetown and Swarthmore check need-based only. (table)
10. [推論] H6 counts all degree-seeking undergraduate nonresidents aided across four class years, so N is not a first-year number and cannot be compared directly with the B2 first-year nonresident counts in `research/2026-11-07_cds-numbers_v1.md`.

## Open items

- Brown: H6 is not on the Tableau "H-FinancialAid" CSV export, which lists aid by type with no residency breakdown. Find whether Brown publishes H6 elsewhere. (H09)
- Purdue, Michigan, Johns Hopkins, Williams, Amherst: open the CDS files in a browser (automated access refused today; Wayback was also refused).
- MIT: re-read H6/G1/G5 in a browser (WebFetch summary only).
- Duke G5 transportation: confirm which column the single $778 sits in.
- School COA pages for 2026-27 were checked only for Harvard, Brown and UCLA. The other 21 rely on CDS G1/G5, which the 2025-26 template defines as 2026-27 costs.
- Olin: check for a 2024-25 or 2025-26 CDS.

## Sources

| id | url | access_date | class | supports |
|---|---|---|---|---|
| H01 | https://ir.mit.edu/projects/2025-26-common-data-set/ | 2026-11-07 | official | MIT CDS 2025-26 H6, G1, G5 (via WebFetch summary) |
| H02 | https://iro.caltech.edu/documents/35129/Caltech_CDS_2025-26_August_2026.pdf | 2026-11-07 | official | Caltech CDS 2025-26 H6 (pp. 35–36), G1/G5 (pp. 29–30) |
| H03 | https://drive.google.com/file/d/1GIPKgVj1d86dkmLkHI_mZVCk_iY6kiCp/view (linked from https://irds.stanford.edu/data-findings/cds) | 2026-11-07 | official | Stanford CDS 2025-26 H6 (p. 32), G1/G5 (pp. 26–27) |
| H04 | https://oira.harvard.edu/files/2026/07/CDS_2025-2026.pdf | 2026-11-07 | official | Harvard CDS 2025-26 H6 (p. 24); G1/G5 blank (pp. 19–20) |
| H05 | https://oir.yale.edu/sites/default/files/yale_cds_2025-26_md_20260616.pdf | 2026-11-07 | official | Yale CDS 2025-26 H6 (p. 28), G1/G5 (pp. 22–23) |
| H06 | https://ir.princeton.edu/sites/g/files/toruqf2041/files/documents/CDS_2526_Princeton_v2.pdf | 2026-11-07 | official | Princeton CDS 2025-26 H6 (p. 25), G1/G5 (pp. 20–21) |
| H07 | https://opir.columbia.edu/sites/opir.columbia.edu/files/content/Common%20Data%20Set/2025-26_Columbia_College_and_Columbia_Enginnering_CDS.pdf | 2026-11-07 | official | Columbia CC+SEAS CDS 2025-26 H6 (p. 34), G1/G5 (pp. 27–28) |
| H08 | https://upenn.box.com/s/woo7d85yxpol6j9e2o121aucjc6dc1k5 (linked from https://ira.upenn.edu/penn-numbers/common-data-set) | 2026-11-07 | official | Penn CDS 2025-26 H6 (p. 22), G1/G5 (pp. 18–19) |
| H09 | https://tableau.brown.edu/t/PublicContent/views/CommonDataSet/H-FinancialAid.csv (dashboard at https://oir.brown.edu/institutional-data/common-data-set) | 2026-11-07 | official | Brown: H sheet export has no H6 rows; H6 not retrieved |
| H10 | https://irp.cornell.edu/wp-content/uploads/2026/09/Cornell-Common-Data-Set-2025-26.pdf | 2026-11-07 | official | Cornell CDS 2025-26 H6, G1, G5 (form fields INTL_*, TUIT_*, FEES_*, RM_BD_*, BOOKS_RES_D, OTH_RES_D) |
| H11 | https://georgetown.box.com/s/0r8akn4cbm52zjkll6i7uttlb9k36px2 (linked from https://oads.georgetown.edu/commondataset/) | 2026-11-07 | official | Georgetown CDS 2025-26 H6 (pp. 27–28), G1/G5 (pp. 22–23) |
| H12 | https://www.cmu.edu/ira/CDS/pdf/cds_2025_26/cds_2025_full_pdf_updated_11jun26.pdf | 2026-11-07 | official | CMU CDS 2025-26 H6 (p. 25), G1/G5 (pp. 20–21) |
| H13 | https://irp.gatech.edu/sites/default/files/CDS/CDS_2025-2026_FINAL_R4_03JUN2026.pdf | 2026-11-07 | official | Georgia Tech CDS 2025-26 H6 (p. 26), G1/G5 (pp. 20–21) |
| H14 | https://www.purdue.edu/idata/wp-content/uploads/2026/04/CDS-2025-2026.xlsx | 2026-11-07 | official | Purdue: file not retrieved (HTML returned / certificate rejected) |
| H15 | https://obp.umich.edu/wp-content/uploads/pubdata/cds/cds_2025-26_umaa.pdf | 2026-11-07 | official | Michigan: HTTP 403; not retrieved |
| H16 | https://uofi.box.com/shared/static/orx4vnmzkt2drmgoiksxpfs39pr42uor.xlsx (linked from https://dair.illinois.edu/access-data/common-data-set/) | 2026-11-07 | official | UIUC CDS 2025-26 H6 (H.601–H.606), G1 (G.101–G.118), G5 (G.501–G.503), Answer Sheet tab |
| H17 | https://www.olin.edu/sites/default/files/2024-05/CDS_2023_2024%20(2).pdf | 2026-11-07 | official | Olin CDS 2023-24 H6 (pp. 53–54), G1/G5 (pp. 42–44) |
| H18 | https://www.hmc.edu/institutional-research/wp-content/uploads/sites/42/2026/03/CDS-HMC-2025.2026_shared.pdf | 2026-11-07 | official | Harvey Mudd CDS 2025-26 H6, G1, G5 (form fields) |
| H19 | https://oira.jhu.edu/wp-content/uploads/2025-2026-CDS-Johns-Hopkins-University-v2.pdf | 2026-11-07 | official | JHU: HTTP 403; not retrieved |
| H20 | https://ir.provost.duke.edu/sites/default/files/CDS_PDF_2025-2026-20260622-website-published-version.pdf | 2026-11-07 | official | Duke CDS 2025-26 H6 (p. 24), G1/G5 (p. 19) |
| H21 | https://www.enrollment.northwestern.edu/data/2025-2026.pdf | 2026-11-07 | official | Northwestern CDS 2025-26 H6 (p. 44), G1/G5 (pp. 34–36) |
| H22 | https://ideas.rice.edu/wp-content/uploads/2026/08/CDS_2025-26_WEBSITE_Updated_8-3-2026.pdf | 2026-11-07 | official | Rice CDS 2025-26 H6 (p. 29), G1/G5 (pp. 23–24) |
| H23 | https://docs.google.com/spreadsheets/d/1INsGFH6MhaO-MFMBZ1Dngcn84FeN-hc0BLS0-v8TL_k/edit (linked from https://opa.berkeley.edu/campus-data/common-data-set) | 2026-11-07 | official | UC Berkeley CDS 2025-26 H6 blank (CDS-H rows 119–129), G1/G5 (CDS-G rows 24–54) |
| H24 | https://apb.ucla.edu/file/d1ab04b3-ee89-4cf2-9124-8dc0471b5e5a | 2026-11-07 | official | UCLA CDS 2025-26 H6 blank (pp. 35–36), G blank (pp. 29–30) |
| H25 | https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final4.pdf | 2026-11-07 | official | UC San Diego CDS 2025-26 H6 (p. 23), G1/G5 (pp. 18–19) |
| H26 | https://utexas.box.com/s/z5p8zzbr6yk4eluam3v3dt2wyaha3cja (linked from https://reports.utexas.edu/common-data-set/pdf) | 2026-11-07 | official | UT Austin CDS 2025-26 H6 (pp. 35–36), G1/G5 (pp. 29–30) |
| H27 | https://finance.uw.edu/iads/files/docs/ipeds/common_data_set/cds_2025-2026_seattle.pdf | 2026-11-07 | official | UW Seattle CDS 2025-26 H6 (INTL_NO), G1, G5 (form fields) |
| H28 | https://www.williams.edu/institutional-research/common-data-set/ | 2026-11-07 | official | Williams: HTTP 403; not retrieved. Cost page https://www.williams.edu/admission-aid/financial-aid/cost-of-attendance/ also 403 |
| H29 | https://www.amherst.edu/offices/institutional-research/cds | 2026-11-07 | official | Amherst: HTTP 405; not retrieved. Cost page https://www.amherst.edu/admission/financial_aid/cost-of-attendance also 405 |
| H30 | https://www.swarthmore.edu/sites/default/files/assets/documents/institutional-effectiveness-research-assessment/Swarthmore-CDS-2025-26.pdf | 2026-11-07 | official | Swarthmore CDS 2025-26 H6, G1, G5 (form fields) |
| H31 | https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final4.pdf (same wording in H02–H30 files read) | 2026-11-07 | official | 2025-26 template wording: G1 = "FULL 2026-2027 academic year"; H6 = "same academic year checked in item H1" |
| H32 | https://college.harvard.edu/financial-aid/how-aid-works/cost-attendance | 2026-11-07 | official | Harvard 2026-27 cost of attendance; international aid eligibility statement |
| H33 | https://finaid.brown.edu/estimate-cost-aid/cost | 2026-11-07 | official | Brown 2026-27 cost of attendance (incoming first-year) |
| H34 | https://sfs.jhu.edu/tuition-and-fees/ | 2026-11-07 | official | JHU cost page: HTTP 404; not retrieved |
| H35 | https://www.admission.ucla.edu/tuition-aid/tuition-fees | 2026-11-07 | official | UCLA on-campus cost; "Total – Nonresidents" $84,770; "Updated July 2026"; no year named |

## 中文摘要（本筆記重點）

- [事實] 本筆記讀的是各校 CDS 的 H6（是否給 degree-seeking nonresidents 校方獎助學金、人數、平均、總額），對照 G1／G5 組成的校內 cost of attendance。24 校讀到檔案；Brown、Purdue、Michigan、Johns Hopkins、Williams、Amherst 六校的 H6 本次未讀到 (H09, H14, H15, H19, H28, H29)。
- [事實] 時間不同步：2025-26 CDS 範本的 G1 填的是 2026-27 學年費用，H6 則是 2025-26 的獎助；Olin 兩者都是 2023-24 (H02–H31, H17)。[推論] 因此各校的「平均獎助 ÷ COA」比例會比同一年度計算的略低，差多少從檔案看不出來。
- [事實] MIT 的數字是透過 WebFetch 摘要讀到的，讀法比其他學校弱，用於網站前應先在瀏覽器重查 (H01)。
- [事實] 以人數算，受助 nonresident 最多的是 UT Austin 832 人，其次 Harvard 805、Princeton 597、Yale 459、Penn 448、MIT 411 (table)。UT Austin 人數最多，但平均只有 $21,343；Harvard 平均 $83,013 (table)。
- [事實] 以總金額算：Harvard $66.8M、Princeton $51.8M、Yale $38.6M、Penn $36.1M、MIT $33.7M、Cornell $28.1M (table)。
- [事實] 平均獎助占 CDS COA 的比例，由高到低：Swarthmore 93.8%、Columbia 92.9%、Princeton 90.7%、Cornell 88.5%、MIT 88.4%、Duke 88.2%、Stanford 87.6%、Harvard 87.3%（以官網區間低端計）、Caltech 86.4%、Yale 85.1%、Penn 81.4%、Rice 81.0%、Northwestern 74.7%、Georgetown 74.4% (table)。
- [事實] 比例偏低的一組：Olin 34.8%（2023-24）、Harvey Mudd 33.5%（COA 不完整）、UT Austin 32.1%、UC San Diego 12.5%、UIUC 8.9% (table)。[推論] 在這幾校，受助的 nonresident 平均仍要自己負擔大部分費用；H6 只給一個合併人數，看不出其中多少是 merit、多少是 need。
- [推論] 在 74–94% 那一組，受助 nonresident 平均拿到的校方獎助涵蓋了大部分公告費用。但這只是「受助者」的平均，不代表有多少國際申請者申請補助、被錄取或被拒，也不代表任何一位申請者會拿到多少；H6 不報這些數字。
- [事實] CDS 勾選「nonresidents 沒有校方獎助學金」的是 Carnegie Mellon、Georgia Tech、UW Seattle (H12, H13, H27)。
- [事實] UC Berkeley 與 UCLA 的 H6 完全空白，這是空格，不等於宣稱沒有補助 (H23, H24)。
- [事實] 有報告 nonresident 獎助的公立大學：UT Austin（NB + NN，832 人，$21,343）、UC San Diego（未勾選任何框，214 人，$10,290）、UIUC（只勾 NN，45 人，$5,176）(H16, H25, H26)。
- [事實] 只勾 need-based 的有 MIT、Caltech、Harvard、Yale、Princeton、Columbia、Penn、Cornell、Georgetown、Swarthmore；need-based 與 non-need-based 都勾的有 Stanford、Duke、Northwestern、Rice、Olin、Harvey Mudd、UT Austin (table)。
- [事實] Harvard 的 CDS G1／G5 空白，改用官網 2026-2027 費用 $95,134–$100,134；該頁寫國際生「eligible for exactly the same aid as American students」(H04, H32)。
- [推論] H6 的人數涵蓋四個年級所有受助的 degree-seeking nonresident 大學部學生，不是新生人數，不能直接和 cds-numbers 筆記裡 B2 的新生 nonresident 人數相比。
- [事實] 用 H6「人數 × 平均」對照「總額」做一致性檢查，所有三項都填的學校都在四捨五入範圍內吻合，差距最大的是 Harvard (table)。
- [事實] H6 填的是 nonresident（簽證身分），不是「台灣學生」；本筆記不推估任何個人能拿到多少。
- 尚待補：六校未讀到的 CDS 要用瀏覽器開；MIT 重讀；Duke G5 交通費 $778 屬哪一欄待確認；只查了 Harvard、Brown、UCLA 三校官網的 2026-27 COA；Olin 是否有較新的 CDS。
