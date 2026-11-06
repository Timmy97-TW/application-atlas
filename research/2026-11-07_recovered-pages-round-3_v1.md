---
title: "Verification round 3: five pages recovered by following a site's own navigation, and what that changes"
date: 2026-11-07
cycle: 2026-27 (US, fall 2027 entry)
unit: E4, E5, A7, B7
review_by: Timmy
status: draft
code: V3
sources:
  | id | url | access_date | class | supports |
  | -- | --- | ----------- | ----- | -------- |
  | R1 | https://www.hmc.edu/admission/afford/cost-of-attendance/ | 2026-11-07 | official | Harvey Mudd published 2026-27 cost of attendance, itemised, three residence columns |
  | R2 | https://www.hmc.edu/admission/afford/ | 2026-11-07 | official | Harvey Mudd aid statistics as of 2025-09-02; the page that links the cost page |
  | R3 | https://www.amherst.edu/tuition | 2026-11-07 | official | Amherst 2026-27 direct and indirect costs; books inside the comprehensive fee; health insurance excluded from the aid budget |
  | R4 | https://www.amherst.edu/offices/financialaid/forms_links/fees_2026-2027_academic_year | 2026-11-07 | official | Amherst 2026-27 schedule of fees by term; health insurance $3,627 waivable; last updated 2026-09-21 |
  | R5 | https://www.amherst.edu/about/facts/common_data_sets/2025 | 2026-11-07 | official | Amherst CDS 2025-26 is published, split into eleven section PDFs (served as downloads) |
  | R6 | https://www.amherst.edu/admission/apply/firstyear | 2026-11-07 | official | Amherst ED 2026-11-09 / RD 2027-01-05, reply by 2027-05-01; test-optional; arts supplement; Optional Research Questions; two deans read every file |
  | R7 | https://admission.stanford.edu/faqs/ | 2026-11-07 | official | Stanford FAQ index serves a 39-byte empty document; no FAQ link in the site navigation |
  | R8 | https://admission.stanford.edu/apply/first-year/submitted.html | 2026-11-07 | official | Stanford: no supplementary materials added to the file, no upload option, links not guaranteed to be read; grace period for recommenders; Update Application Form in the portal |
  | R9 | https://admission.stanford.edu/apply/first-year/testing.html | 2026-11-07 | official | Stanford ACT/SAT required, self-reported at application, official on enrolment; AP self-report required if taken |
  | R10 | https://admission.stanford.edu/apply/first-year/apply.html | 2026-11-07 | official | Stanford Questions: five short questions 3-50 words, three short essays 100-250 words |
  | R11 | https://admissions.utexas.edu/apply/frequently-asked-questions/ | 2026-11-07 | official | UT Austin: up to two optional letters and what they should cover; no demonstrated interest; no admission interviews; optional resume with no format; no documents by email |
  | R12 | https://admissions.utexas.edu/apply/review-decision-process/waitlist/ | 2026-11-07 | official | UT Austin waitlist: academic update of 200 words or less on the form; other materials "will not be accepted or reviewed" |
  | R13 | https://www.amherst.edu/admission/financial_aid | 2026-11-07 | official | Amherst need-blind for all students, domestic and international; 59% receive aid; average offer $76k |
  | R14 | https://www.amherst.edu/alumni/events/alumni-admission-workshops | 2026-11-07 | official | Amherst: the Office of Admission "does not conduct interviews or one-on-one evaluative sessions with students" |
  | R15 | https://www.amherst.edu/alumni/volunteer/admission | 2026-11-07 | official | Amherst ended alumni interviewing over a dozen years ago; alumni may still write supporting letters |
  | R16 | https://ask.admissions.upenn.edu/support/solutions/articles/157000361217-i-am-an-international-student-can-i-submit-an-initialview-interview- | 2026-11-07 | official | Penn: InitialView not required, submitted as supplemental information, fee waivers available from InitialView, not a replacement for English testing |
  | R17 | https://admission.universityofcalifornia.edu/counselors/preparing-freshman-students/ | 2026-11-07 | official | UC to counselors: "Do not submit letters of recommendation (unless specifically asked by a campus)"; transcripts only to the enrolling campus, before July 1; apply to more than one campus |
---

# Verification round 3 — the pages that were not actually unreadable

Rounds 1 (`V`) and 2 (`V2`) left eleven claims blocked and sorted the obstacles
into three kinds. This round attacked the third kind — pages that load but do
not hand their text to a script — plus the two dead aid pages of BACKLOG E5.
Five pages were recovered. One stayed shut.

## Method

- [事實] One built-in browser tab, no sign-in, 2026-11-07 about 05:20-05:50.
- [事實] Where a URL 404s, the technique was the one that worked for Johns
  Hopkins: open the 404 page and follow the navigation it offers, then the
  site's own search. No URL was guessed a second time.
- [事實] Where a page renders answers on interaction, the accordion panels were
  read from the live DOM after the page's own script had populated them.
- [事實] No human-verification challenge was met on any host in this round, and
  no bypass was attempted.

## 1. E5 — the two dead aid pages

- [事實] **Harvey Mudd publishes an itemised 2026-27 cost of attendance** at
  `/admission/afford/cost-of-attendance/`, linked from the Afford page. The
  guessed URL of the earlier run was simply wrong. On-campus: tuition $76,879,
  student body fee $401, housing $13,293, food $11,489 (19-meal plan), personal
  expenses $1,400, books and supplies $800, new-student orientation fee $250 —
  **total $104,512**. Transportation is listed as "varies by distance to
  college" and is not in that total; health insurance (SHIP) is described but
  not priced on the page. Off campus $90,912; off campus with family $83,793. (R1)
- [事實] That tuition figure and the one in Harvey Mudd's CDS disagree. The CDS
  file gives G1 first-year tuition $72,669 (and $75,669 for all undergraduates);
  the college's own page gives $76,879 for 2026-27. Both are published numbers
  from the same institution; this note does not resolve which year the CDS cell
  describes. (R1, A7-H18)
- [事實] Using the college's own page, Harvey Mudd's cost cell is no longer
  partial: $32,564 ÷ $104,512 = **31.2%**, down from the 33.5% computed against
  an incomplete denominator. (R1, A7-H18)
- [事實] **Amherst publishes its 2026-27 student expense budget** at
  `/tuition`: tuition $75,330, housing $10,980, meals $9,340, fees $710 (direct,
  billed) and personal expenses $1,800 (indirect). Travel varies by home
  location — two round trips for US students, one for students living outside
  the US. Health insurance ($3,627, waivable) is "not initially included in the
  cost of attendance used to determine financial aid eligibility". (R3, R4)
- [事實] Amherst states that **required course materials are covered by the
  comprehensive fee**, so books are not a separate line at all: "All required
  course materials are covered as part of the comprehensive fee, which allows
  every enrolled student to access required materials on or before the first day
  of class." Of the schools read so far it is the only one with no books line. (R3)
- [事實] On the same basis as the other rows of the aid table (direct costs plus
  the priced indirect costs, health insurance excluded, travel left out where a
  school says it varies), Amherst's 2026-27 cost is **$98,160**. (R3)
- [事實] Amherst's aid page gives a worked scenario whose cost of attendance is
  $98,460 "including tuition, housing, meals, fees, personal expenses, and
  travel costs", with no year label. It is not used here, because the year is
  not stated and travel is bundled in. (R6 adjacent; see `/admission/financial_aid`)
- [事實] **Amherst's CDS is published after all.** It is not at
  `/offices/institutional-research/cds` (404) but at
  `/about/facts/common_data_sets/2025`, split into eleven section PDFs —
  General Information, Enrolment, First-Time First-Year Admission, Transfer,
  Academic Offerings, Student Life, Annual Expenses, Financial Aid, Faculty,
  Degrees, Definitions. (R5)
- [事實] Those PDFs were still not read: the server offers each as a file
  download rather than a page, and this run does not download files. So H6,
  C1-C9 and G1/G5 for Amherst remain not retrieved — but the location is now
  known and a person can open any section in one click. This is a change of
  status from "the site refuses automated access" to "published, download-gated". (R5)

## 2. E4 — the pages that load but hide their text

- [事實] **Stanford's FAQ index is gone, not gated.** `/faqs/` and
  `/faqs/index.html` return a 39-byte document (`<html><head></head><body></body></html>`),
  and no FAQ link appears anywhere in the site's navigation. The FAQ content was
  moved into the individual Apply pages, each of which carries its own accordion. (R7)
- [事實] The claim O53 is **confirmed in substance and corrected in mechanism**.
  Stanford's Application Status FAQ says: "We do not add supplementary materials
  like writing samples, research papers, or other special work to your
  application file, and we do not offer an option for applicants to upload
  supplementary materials to their file." New information after submission goes
  through the **Update Application Form in the Stanford portal**, not through the
  Common App Additional Information field as the earlier search-extract implied. (R8)
- [事實] The same answer adds a sentence that matters for this repo's core
  question: "If you include links in your application or in the Update
  Application Form text box in your Stanford portal, there's no guarantee that
  readers will review these links." (R8)
- [事實] Stanford states a **grace period for recommenders**: "As a standard
  practice, we offer a grace period after the application deadline during which
  teachers and counselors may submit application materials." (R8)
- [事實] Stanford's testing page states ACT or SAT scores **are required**,
  self-reported in the application, with official scores required only on
  enrolment, and that Stanford may revoke an offer if the two disagree. AP exams
  are not required, but every AP score taken must be self-reported. (R9)
- [事實] Stanford Questions, 2026-27: five short questions with a 3-word minimum
  and 50-word maximum each; three short essays with a 100-word minimum and
  250-word maximum each. (R10)
- [事實] **UT Austin's FAQ answers were read** from the live DOM. Letters of
  recommendation are optional, **up to two**, from someone who knows the
  applicant well and is not a relative, and UT "encourage[s] letters from
  sources outside of your high school". What it asks letters to cover includes
  "Your preparation for your selected first-choice major, both in school and
  out". (R11)
- [事實] UT Austin: no admission interviews; demonstrated interest is not used
  in holistic review ("Anything that you would like to be considered should be
  submitted with your application"); the resume is optional for freshman
  applicants with no preferred format or length, and "The length or format of
  your resume do not have any impact on the review"; documents cannot be sent
  by email. (R11)
- [事實] UT Austin's waitlist form takes "any academic updates in 200 words or
  less"; beyond that, "Additional materials, such as letters of recommendation,
  continued letters of interest or other items, submitted by you or on your
  behalf will not be accepted or reviewed." O99 is confirmed verbatim. (R12)
- [事實] Amherst's first-year page, read in full for the first time: ED deadline
  2026-11-09, RD 2027-01-05, reply by 2027-05-01; about 17% of admitted
  applicants applied ED and just under 80% through RD; SAT/ACT optional, with
  official scores required only of admitted students who enrol and chose to
  submit; arts supplements (music, theater, dance, visual art) reviewed by
  faculty; **an "Optional Research Questions" section in Amherst's own writing
  supplement for research "undertaken independently of the high school
  curriculum"**; every file read by at least two admission deans before
  committee. (R6)

- [事實] **Amherst holds no admission interviews**, which three earlier notes
  had to leave as "not stated" because the site would not open. Its own pages
  say so twice: "The Amherst College Office of Admission does not conduct
  interviews or one-on-one evaluative sessions with students, but does offer
  one-hour small group sessions for alumni families" (R14), and the Office of
  Admission "ended the practice over a dozen years ago of having alumni
  volunteers interview prospective students" — while adding that alumni are not
  discouraged "from recommending students to apply and writing supporting
  letters about students they know well" (R15).
- [事實] **Amherst's need-blind policy covers international applicants**, in its
  own words rather than a search extract: its aid policies "support our
  need-blind admission policy for all students, domestic and international".
  In a typical year 59% of students receive aid and the average offer is $76k. (R13)

- [事實] **Penn's InitialView article was read** (it had been an index-excerpt).
  An InitialView interview "is not required, but you are welcome to submit one";
  it is submitted "as supplemental information"; it "is not a replacement for
  any English proficiency testing requirements"; and — not in the earlier
  excerpt — "fee waivers are available from InitialView for students for whom it
  would be prohibitively expensive". (R16)
- [事實] **UC's counselor page was read** (also an index-excerpt). In UC's own
  words to counselors: "Do not submit letters of recommendation (unless
  specifically asked by a campus)." The same page tells counselors that
  transcripts go only to the enrolling campus, after coursework is complete and
  before July 1, and advises students to "Apply to more than one UC campus",
  which it says "will significantly increase their chances of being admitted
  into the UC system". (R17)
- [事實] Of the obstacles round 2 listed in its third group, one is left: CMU's
  wording on choosing a teacher recommender, which sits in a tab panel on a page
  this repo already cites for other facts (O75). It is one claim and no cell
  depends on it.

## 3. What stayed shut

- [事實] Nothing new was tried against Princeton, Northwestern or Purdue: round
  2 showed the refusal is at the TLS layer on two independent request paths, and
  retrying is not work. They remain Q002/E3, for the maintainer's own browser.
- [事實] The three Common App PDF decks (LEAD-B19 to B21), Harvard's 2026-27
  supplement PDF and UC's PIQ guidance PDF are still unread for the same reason
  as Amherst's CDS sections: the server sends a file, and a file download needs
  the maintainer. Their URLs are recorded and nothing is cited from them.

## Non-obvious findings

- [事實] Three of the five recovered pages were recovered the same way: open the
  404 page and follow the links it offers, or use the site's own search box.
  Two schools' "dead" pages were dead URLs, not dead pages.
- [推論] A site's 404 page is a research instrument. Johns Hopkins, Harvey Mudd
  and Amherst each kept the information and moved the URL; a link checker
  reports that as a dead end, and a reader who follows the 404 page's own
  navigation finds the page in one or two clicks. Dead links in this repo's log
  should therefore be read as "re-locate", not as "gone".
- [事實] "The page refuses automated access" was wrong for four of the six
  pages it was claimed of in round 2. Stanford's FAQ index is retired; UT
  Austin's answers are in the DOM once its own script runs; Amherst's site
  serves every HTML page normally and gates only its PDF files.
- [推論] The remaining obstacle is one kind, not three: a server that hands over
  a file instead of a page. That is the only thing standing between this repo
  and Amherst's CDS, Harvard's supplement PDF, UC's PIQ guidance and the Common
  App decks — and it needs one download decision from the maintainer, not more
  research.
- [事實] Two schools in this round state in their own voice that work done
  outside the school curriculum has a named place in the application: Amherst's
  Optional Research Questions ("undertaken independently of the high school
  curriculum") and UT Austin's letters guidance ("your preparation for your
  selected first-choice major, both in school and out"). Stanford states the
  opposite boundary: nothing may be added to the file, and links are not
  guaranteed to be read.

## 中文摘要

- [事實] 這一輪用瀏覽器重開第二輪標為「讀不到」的頁面，加上 BACKLOG E5 的兩個死連結，救回五頁，只有「伺服器丟檔案而不是網頁」這一種障礙還在。
- [事實] Harvey Mudd 的費用頁其實存在，在 `/admission/afford/cost-of-attendance/`：2026-27 住校總花費 $104,512（學費 $76,879、學生會費 $401、住宿 $13,293、餐費 $11,489、個人支出 $1,400、書籍 $800、新生訓練費 $250；交通寫「依距離而異」未計入）。之前的網址是猜的，猜錯了。(R1)
- [事實] 同一所學校的兩個官方數字不一致：CDS 的 G1 新生學費是 $72,669，學校費用頁的 2026-27 學費是 $76,879。本筆記只並列，不判定 CDS 那格講的是哪一年。(R1, A7-H18)
- [事實] 用學校自己的頁面當分母，Harvey Mudd 的「平均補助占總花費」從 33.5%（分母不完整）改為 **31.2%**。(R1)
- [事實] Amherst 的 2026-27 學生費用預算在 `/tuition`：學費 $75,330、住宿 $10,980、餐費 $9,340、雜費 $710（以上帳單直接收取），個人支出 $1,800（估算）；交通依住家距離而異（美國境內一年兩趟、境外一趟）；健康保險 $3,627 可豁免，且「不計入用來核算補助資格的 cost of attendance」。依本站其他列的算法，Amherst 的 2026-27 總花費是 **$98,160**。(R3, R4)
- [事實] Amherst 把「必修課程教材」包在 comprehensive fee 裡，所以根本沒有書籍這一列——目前讀過的學校中唯一一所。(R3)
- [事實] Amherst 的 CDS 其實有公開，不在 `/offices/institutional-research/cds`（404），而在 `/about/facts/common_data_sets/2025`，拆成十一份分節 PDF。但伺服器是以「下載檔案」的方式送出，本次沒有下載，所以 H6、C、G 各欄仍未讀到——狀態從「網站拒絕自動存取」改為「有公開，但要下載」。(R5)
- [事實] Stanford 的 FAQ 首頁不是被擋，是已經撤掉：`/faqs/` 回傳 39 bytes 的空白文件，全站導覽也不再有 FAQ 連結；內容搬進各個 Apply 子頁，各自用摺疊區塊呈現。(R7)
- [事實] O53 的內容確認，但機制要改：Stanford 寫「我們不會把 writing samples、research papers 或其他特殊作品加進你的申請檔案，也不提供上傳補充資料的選項」；補件要走學校 portal 裡的 Update Application Form，不是 Common App 的 Additional Information。同一段還說：放在申請表或 Update Application Form 裡的連結「不保證審查者會去看」。(R8)
- [事實] Stanford 明文給推薦人寬限期：截止日後老師與輔導老師仍可送件，是「standard practice」。(R8)
- [事實] Stanford 的 SAT／ACT 是必繳，申請時自填，錄取並決定入學才要官方成績單，兩者不符學校保留撤銷錄取的權利；AP 不強迫考，但考過的每一科都必須自填。Stanford Questions 的字數：五題各 3–50 字、三篇各 100–250 字。(R9, R10)
- [事實] UT Austin 的 FAQ 答案已讀到：推薦信選繳、最多兩封、不可由親屬撰寫，並「鼓勵來自校外的推薦人」；學校希望信裡寫到的其中一項是「你對第一志願主修的準備，校內與校外都算」。不辦招生面試、holistic review 不看 demonstrated interest、resume 選繳且不限格式長度、文件不接受 email。候補名單表單只收「200 字以內的學業更新」，其他補充材料「不會被接受或審閱」。(R11, R12)
- [事實] Penn 的 InitialView 客服文章已讀到（原本只有搜尋摘錄）：InitialView「不是必要的，但歡迎提交」，算 supplemental information，不能取代英語能力考試；摘錄裡沒有的一句是——InitialView 對負擔不起的學生提供費用減免。(R16)
- [事實] UC 給輔導老師的頁面也讀到了（原本只有搜尋摘錄）：UC 自己寫「Do not submit letters of recommendation (unless specifically asked by a campus)」；成績單只送給要入學的那一個校區，修完課程後、7 月 1 日前送；並建議學生「申請多個 UC 校區」，UC 說這「會顯著提高在 UC 系統內被錄取的機會」。(R17)
- [事實] Amherst 不辦招生面試，官網自己寫了兩次：Office of Admission「does not conduct interviews or one-on-one evaluative sessions with students」，只為校友家庭辦一小時小組諮詢；校友面試「十多年前就停了」，但校友仍可推薦學生申請並寫推薦信。先前三份筆記因為讀不到網站，這幾格都只能寫「未載明」。(R14, R15)
- [事實] Amherst 對國際申請者 need-blind 這點，現在有官方原文而不只是搜尋摘錄：其補助政策「support our need-blind admission policy for all students, domestic and international」。(R13)
- [事實] Amherst 首年申請頁第一次完整讀到：ED 2026-11-09、RD 2027-01-05、5/1 回覆；SAT／ACT 選繳；藝術補充由教師審閱；寫作補充裡有「Optional Research Questions」一節，收「獨立於高中課程之外」的研究；每份申請至少兩位 admission dean 讀過才進委員會。(R6)
- [推論] 404 頁本身是研究工具。Johns Hopkins、Harvey Mudd、Amherst 都是換了網址而不是撤掉內容，連結檢查器只會報死連結，照著 404 頁自己的導覽走一兩步就找到了。本站 logs/ 裡的死連結應該當成「要重新定位」，不是「已消失」。
