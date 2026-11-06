---
title: "Outside-record frameworks, record-to-container map, and independent verification anchors"
date: 2026-11-07
cycle: 2026-27
unit: [C1, C2, C3]
review_by: Timmy
status: draft
sources:
  # id | url | access_date | class | supports
  - {id: S1,  url: "https://www.mastery.org/about", access_date: 2026-11-07, class: secondary, supports: "MTC history: 2014 idea, 2017 launch with 54 schools, joined ETS 2024, new owner 2026, now 'Mastery.org'"}
  - {id: S2,  url: "https://www.mastery.org/college-acceptances", access_date: 2026-11-07, class: secondary, supports: "'1,017 MT Ready Institutions'; definition of 'Mastery Transcript Ready'; per-institution mtReady/acceptedSince fields in page data"}
  - {id: S3,  url: "https://www.mastery.org/what-we-do/higher-education", access_date: 2026-11-07, class: secondary, supports: "Mastery Transcript vs MTC Learning Record; single-link delivery; outreach to colleges; self-reported counts"}
  - {id: S4,  url: "https://mastery.org/what-we-do/", access_date: 2026-11-07, class: secondary, supports: "Competencies 'defined and certified by member schools'; record 'remains an official school record'"}
  - {id: S5,  url: "https://www.mastery.org/documents/mastery-org-letter-from-the-founders.pdf", access_date: 2026-11-07, class: secondary, supports: "Letters dated 2026-07-22: Legend.org acquired MTC from ETS; 'over 800 colleges'; 'Almost three thousand students'"}
  - {id: S6,  url: "https://www.financialcontent.com/article/gnwcq-2026-7-23-legendorg-acquires-mastery-transcript-consortium-from-ets", access_date: 2026-11-07, class: secondary, supports: "GlobeNewswire release 2026-07-23: Legend.org acquires MTC from ETS, operates as Mastery.org; 'immediate focus will be continuity'"}
  - {id: S7,  url: "https://admission.universityofcalifornia.edu/counselors/_files/documents/nontraditional-transcript-guidance-010523.pdf", access_date: 2026-11-07, class: official, supports: "UCOP memo 2023-01-05: BOARS guidance on competency-based/mastery transcripts -> admission by exception only"}
  - {id: S8,  url: "https://admission.universityofcalifornia.edu/counselors/connect-to-resources/resource-library.html", access_date: 2026-11-07, class: official, supports: "UC counselor resource library lists the nontraditional-transcript memo and the 'Presenting yourself' guide"}
  - {id: S9,  url: "https://www.1edtech.org/1edtech-article/latest-comprehensive-learner-record-standard-improves-security-portability-and", access_date: 2026-11-07, class: secondary, supports: "CLR 2.0 public release 2025-03-04; aligned with Open Badges 3.0; built as W3C Verifiable Credentials; AACRAO recommends"}
  - {id: S10, url: "https://www.imsglobal.org/spec/ob/v3p0", access_date: 2026-11-07, class: secondary, supports: "Open Badges 3.0 Final Release, document dated 2026-06-29; aligns with VCDM v2.0; issuer/evidence definitions; issuer may be an individual; self-assertion use case"}
  - {id: S11, url: "https://www.w3.org/TR/vc-data-model-2.0/", access_date: 2026-11-07, class: secondary, supports: "W3C Verifiable Credentials Data Model 2.0 is a W3C Recommendation, 15 May 2025"}
  - {id: S12, url: "https://info.credly.com/", access_date: 2026-11-07, class: secondary, supports: "Credly by Pearson; issuers are certification/assessment/training providers and employers; no verification mechanism described on page"}
  - {id: S13, url: "https://coalitionforcollegeaccess.org/apply-coalition", access_date: 2026-11-07, class: official, supports: "Students apply Coalition via Scoir; 'discontinued our use of our previous technology platform'; no Locker mention"}
  - {id: S14, url: "https://www.coalitionforcollegeaccess.org/apply-coalition-on-scoir", access_date: 2026-11-07, class: official, supports: "Redirect target of the 2022 partnership FAQ; same statements; no Locker, portfolio or file-attachment mention"}
  - {id: S15, url: "https://www.insidehighered.com/admissions/article/2019/11/25/coalition-application-draws-significant-criticism", access_date: 2026-11-07, class: secondary, supports: "2019-11-24: 2015 plan included a 'locker' for student materials; no usage data"}
  - {id: S16, url: "https://www.insidehighered.com/index%2ephp/node/64491", access_date: 2026-11-07, class: secondary, supports: "2022-01-30 'Coalition Plans New Application': integration into Scoir; 165 member colleges"}
  - {id: S17, url: "https://blog.prepscholar.com/coalition-application-college", access_date: 2026-11-07, class: secondary, supports: "Describes Locker: private by default; start 9th grade; colleges see only items attached to an application (page last updated 2024-08-28)"}
  - {id: S18, url: "https://mitadmissions.org/apply/parents-educators/homeschool/", access_date: 2026-11-07, class: official, supports: "MIT homeschool: no separate requirements; outside-course transcripts and portfolio evaluation 'very helpful'; mentors/supervisors as recommenders; max four letters"}
  - {id: S19, url: "https://admission.stanford.edu/apply/first-year/home_school.html", access_date: 2026-11-07, class: official, supports: "Stanford homeschool: transcript plus encouraged curriculum description; teacher letters preferably from outside instructors"}
  - {id: S20, url: "https://www.admissions.caltech.edu/apply/first-year-applicants/homeschooled-applicants", access_date: 2026-11-07, class: official, supports: "Caltech homeschool: parent-made transcript allowed; outside courses need official grades; extra letter if all instructors were parents"}
  - {id: S21, url: "https://admissions.upenn.edu/how-to-apply/first-year-applicants/homeschool", access_date: 2026-11-07, class: official, supports: "Penn homeschool: consolidated transcript; syllabi, lab work, reading lists; 'demonstrate mastery across the curriculum'"}
  - {id: S22, url: "https://admission.brown.edu/ask/home-schooled-applicants", access_date: 2026-11-07, class: official, supports: "Brown homeschool: self-designed four-year record; syllabus; outside transcripts; one extra letter"}
  - {id: S23, url: "https://uadmissions.georgetown.edu/apply/home-schooled-applicants/", access_date: 2026-11-07, class: official, supports: "Georgetown homeschool: detailed curriculum outline if no traditional transcript; official transcripts for outside courses"}
  - {id: S24, url: "https://admit.washington.edu/apply/first-year/homeschool/", access_date: 2026-11-07, class: official, supports: "UW homeschool: detailed coursework account in application; SAT/ACT required unless one year of college coursework"}
  - {id: S25, url: "https://www.swarthmore.edu/admissions-aid/homeschooled-students", access_date: 2026-11-07, class: official, supports: "Swarthmore homeschool: descriptive course listings, research projects/papers, documentation of internships, dates and sources for awards"}
  - {id: S26, url: "https://admission.universityofcalifornia.edu/admission-requirements/first-year-requirements/home-schooled-students.html", access_date: 2026-11-07, class: official, supports: "UC homeschool: non-accredited/no official transcript -> admission by exception"}
  - {id: S27, url: "https://admissions.utexas.edu/apply/application-materials/transcript-info/", access_date: 2026-11-07, class: official, supports: "UT Austin: non-traditional secondary education -> assigned percentile rank (SB 1543); homeschool transcript signed by responsible adult"}
  - {id: S28, url: "https://mitadmissions.org/apply/firstyear/transcripts/", access_date: 2026-11-07, class: official, supports: "MIT transcripts page: must be sent by counselor/official; no mention of non-traditional or mastery transcripts"}
  - {id: S29, url: "https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-materials/research-papers-and-publications", access_date: 2026-11-07, class: official, supports: "Caltech research: full paper preferred; Beaver Breakroom upload; Research Description Form; letter must speak to specific contributions"}
  - {id: S30, url: "https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-materials/portfolio", access_date: 2026-11-07, class: official, supports: "Caltech portfolio: optional; 5GB media; 75-page documents; links accepted; group projects need individual role"}
  - {id: S31, url: "https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-materials", access_date: 2026-11-07, class: official, supports: "Caltech supplemental materials: research and portfolio types; no excluded types listed"}
  - {id: S32, url: "https://mitadmissions.org/apply/firstyear/portfolios-additional-material/", access_date: 2026-11-07, class: official, supports: "MIT: SlideRoom, $10; Maker Portfolio up to 25 media, 2 min video total; Research Supplement one per applicant with mentor letter"}
  - {id: S33, url: "https://www.commonapp.org/static/f45949473bb80a91c80aface729d83df/Approaching-Activities.pdf", access_date: 2026-11-07, class: official, supports: "Common App activities: up to 10; position 50, organization 100, description 150 characters; Additional Information for more space (dated September 2026)"}
  - {id: S34, url: "https://www.commonapp.org/static/72c7fb82f0c0c0b7832c341d2d5cb486/Gather-Materials-First-Year_3.pdf", access_date: 2026-11-07, class: official, supports: "Common App: up to 5 academic honors (title, date, level); up to 10 activities"}
  - {id: S35, url: "https://www.commonapp.org/static/eb936e0080b0c7535a04c720aabf4b75/Application-Dictionary_0.pdf", access_date: 2026-11-07, class: official, supports: "Definitions: Optional report = 'just in case' form; Other recommender; Portfolio"}
  - {id: S36, url: "https://www.commonapp.org/static/bd27e890c7338673cbde71a9ce883bef/Understanding-Rec-Process.pdf", access_date: 2026-11-07, class: official, supports: "Other Recommender types: arts teacher, clergy, coach, college access counselor, employer, family member, peer, other"}
  - {id: S37, url: "https://commonapp.org/files/recommender-resources/Writing-Guide.pdf", access_date: 2026-11-07, class: official, supports: "Counselor letters: view within entire graduating class; teachers: classroom vantage point"}
  - {id: S38, url: "https://www.commonapp.org/apply/first-year-students", access_date: 2026-11-07, class: official, supports: "First-year page: no character/word limits stated for Honors or Additional Information"}
  - {id: S39, url: "https://admission.universityofcalifornia.edu/counselors/_files/documents/presenting-yourself-on-the-uc-application-first-year.pdf", access_date: 2026-11-07, class: official, supports: "UC 2026-27 guide: up to 20 activities in 6 categories; Additional comments (Academic history) 550-character limit; PIQ 350 words"}
  - {id: S40, url: "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/filling-out-the-application.html", access_date: 2026-11-07, class: official, supports: "UC: six activity categories; additional comments 'shouldn't be an essay'; no character/word limits stated"}
  - {id: S41, url: "https://apply.universityofcalifornia.edu/docs/StatementOfIntegrity.pdf", access_date: 2026-11-07, class: official, supports: "UC: awards/activities 'must be true and verifiable by an independent party'; last updated August 2023"}
  - {id: S42, url: "https://competition.igem.org/judging/medals", access_date: 2026-11-07, class: secondary, supports: "iGEM medal criteria 2026 (client-rendered; text read from https://competition.igem.org/assets/Awards-8seAmtcC.js): no cap on medals; Attributions Form is a Bronze criterion; Gold judging new in 2026; 1-6 rubric"}
  - {id: S43, url: "https://competition.igem.org/assets/deliverablesData-CsN011RQ.js", access_date: 2026-11-07, class: secondary, supports: "iGEM deliverables text: Wiki 'permanently hosted as a public archive', 'freezes at the deadline'; Attributions Form; 25-minute judging session, recorded"}
  - {id: S44, url: "https://sspcdn.blob.core.windows.net/files/Documents/SEP/ISEF/2027/Rules/Book.pdf", access_date: 2026-11-07, class: secondary, supports: "ISEF International Rules 2026-27: one project, 12 months, no research before Jan 2026; continuation Form 7; Form 2C; 250-word abstract must describe student's research"}
  - {id: S45, url: "https://sspcdn.blob.core.windows.net/files/Documents/SEP/ISEF/2027/Forms/All.pdf", access_date: 2026-11-07, class: secondary, supports: "ISEF Form 2C: completed by supervising adult, not student; describes student's independent work and role"}
  - {id: S46, url: "https://www.societyforscience.org/isef/international-rules/", access_date: 2026-11-07, class: secondary, supports: "ISEF rules index page linking the 2027 rules book and forms"}
  - {id: S47, url: "https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html", access_date: 2026-11-07, class: secondary, supports: "ICMJE four authorship criteria; not the role of editors to determine authorship"}
  - {id: S48, url: "https://credit.niso.org/", access_date: 2026-11-07, class: secondary, supports: "CRediT: 14 contributor roles; ANSI/NISO Z39.104-2022"}
  - {id: S49, url: "https://www.slideroom.com/", access_date: 2026-11-07, class: official, supports: "SlideRoom by Liaison: institutions customise requirements; media limits not stated on page"}
  - {id: S50, url: "https://apply.jhu.edu/hopkins-insider/additional-information/", access_date: 2026-11-07, class: official, supports: "JHU 2023-08-03: Additional Information is for information 'not previously discussed'; no word limit stated"}
---

# Outside-record frameworks (C1), record-to-container map (C2), verification anchors (C3)

Scope: how a multi-year record built by an outside programme can enter a US first-year application, for the 30 schools in BACKLOG.md. All access dates are 2026-11-07. Tags: `[事實]` sourced fact, `[推論]` inference, `[假設]` assumption. "Outside programme" means any non-school programme a student attends; none is named here.

摘要（中文）：`[事實]` 目前沒有任何一所目標學校在自己的公開頁面上說明會接受 badge、CLR 或「校外 programme 的紀錄」作為正式文件（checked 2026-11-07）。Mastery Transcript 只能由會員高中簽發（S4），而 UC 對無 GPA 的 mastery transcript 只給 admission by exception（S7）。`[推論]` 因此校外紀錄實際能進入申請的路徑，是既有欄位（Activities、Honors、Additional Information、Other Recommender、作品集）加上第三方證明人，而不是一種新的成績單格式。

Summary (English): `[事實]` None of the 30 schools' own pages that were checked states a position on badges, CLRs, or outside-programme records (checked 2026-11-07). A Mastery Transcript is issued only by member schools (S4), and UC sends GPA-less mastery transcripts to admission by exception only (S7). `[推論]` In practice, an outside record enters through existing containers plus named third-party attestors, not through a new transcript format.

---

## C1. Existing frameworks colleges recognise

### C1.1 Mastery Transcript Consortium (MTC), now Mastery.org

- `[事實]` The idea began at a member high school in 2014. The consortium launched in 2017 with 54 founding schools, joined ETS in 2024, and "moved on from ETS" under new ownership in 2026. It now goes to market as Mastery.org: "The name is new; the mission is not." (S1)
- `[事實]` On 2026-07-23 a GlobeNewswire release announced that Legend.org, "an AI-native education assessment platform", had acquired MTC from ETS and would operate as Mastery.org. "The immediate focus will be continuity." (S6) Letters to members dated 2026-07-22 are signed by the founder (now chair of an Education Advisory Council) and by the two Legend.org co-founders (S5).
- `[事實]` There are two products. The **Mastery Transcript** is "an evidence-based transcript that stands on its own, built from school-defined competencies instead of grades". The **MTC Learning Record** is "a flexible record learners send alongside a traditional transcript" (S4). Competencies are "defined and certified by member schools" and the record "remains an official school record" (S4).
- `[事實]` Delivery: the admissions reader "opens the record from a single link". The top layer is designed for scanning, with evidence one click down (S3). The pages checked name no specific channel (Common App, Scoir, or PDF) (S3, S4). The company says it "reaches out to every college a student applies to" (S3).
- `[事實]` College counts in MTC's own materials disagree:
  - "over 800 colleges" in the 2026-07-22 letter (S5);
  - "1,017 MT Ready Institutions" on the acceptances page (S2);
  - "1,017" colleges on the higher-education page (S3).
  - The acceptances page also embeds per-institution data. Counting unique domains flagged `mtReady: true` in that data gives 997 on 2026-11-07 (S2; my count).
- `[事實]` Definition, from the FAQ on S2: "A college is Mastery Transcript Ready if it has admitted students with our records **or** participated in our transcript reader training." The listing "is completely free" for colleges (S2).
- `[事實]` In the S2 page data, all 30 target schools are flagged `mtReady: true`. The `acceptedSince` years are:
  - 2020: Caltech, Harvey Mudd, UW Seattle
  - 2021: MIT, Harvard, Georgetown, CMU, Purdue (Main), Michigan (Ann Arbor), UIUC, UC Berkeley, UCLA, UT Austin
  - 2022: Princeton, Georgia Tech, JHU, Duke, Northwestern, Rice
  - 2023: Yale, Cornell
  - 2024: Stanford, Penn, Brown, Williams
  - 2025: Columbia, Olin, UCSD, Swarthmore
  - Amherst: listed, with no year
- `[推論]` The "MT Ready" flag is MTC's own claim. By MTC's definition, it can mean only that the office attended a training session. It is not a policy statement by the college. For any target school, the flag should be read as "MTC reports contact", not "the college accepts mastery transcripts as equivalent to graded transcripts".
- `[事實]` Searches of the admissions sitemaps that could be retrieved for target schools found no admissions URL containing "mastery", "badge", "competenc(y)" or "credential". About 19,600 URLs were scanned across the 23 hosts that returned sitemap entries (checked 2026-11-07). MIT's transcripts page requires transcripts "sent by a school counselor/official" and does not mention non-traditional or mastery transcripts (S28).
- `[事實]` **The one official college-side statement found** is UC's. A UCOP memo dated 2023-01-05, citing BOARS guidance on "non-traditional, narrative or 'mastery' transcripts", says: "students who are unable to support their A-G coursework with a GPA-based transcript can only be considered for Admission by Exception". It adds that schools are "strongly encouraged to continue issuing GPA-based transcripts" (S7, listed in S8).
- `[推論]` For UC, the "MT Ready" flags on S2 (Berkeley, UCLA, UCSD) and the UCOP policy (S7) are compatible only if "Ready" means "has admitted someone (possibly by exception) or trained". Readers should weight S7 (official) over S2 (secondary).
- `[推論]` An outside programme cannot itself issue a Mastery Transcript, because competencies are certified by member schools (S4). At most, a student at a member school could have outside work entered as evidence inside the school's record. Whether member schools do this is not stated (checked 2026-11-07, S4).

### C1.2 1EdTech Comprehensive Learner Record (CLR) 2.0

- `[事實]` CLR Standard 2.0 became publicly available on 2025-03-04 after a 1EdTech community vote. It "aligns with 1EdTech's Open Badges 3.0 standard" and is built as W3C Verifiable Credentials, "cryptographically signed and tamper-proof". AACRAO recommends the standard (S9).
- `[事實]` The release article describes no admissions use (S9).
- `[事實]` No target school's admissions pages mention CLR (sitemap scan above; checked 2026-11-07).
- `[推論]` CLR is today a registrar and workforce format, not a first-year admissions channel at the 30 schools.

### C1.3 Open Badges 3.0 and W3C Verifiable Credentials

- `[事實]` Open Badges 3.0 is a Final Release. The current document version is dated 2026-06-29, and the spec "aligns with the conventions of the Verifiable Credentials Data Model v2.0" (S10).
- `[事實]` W3C VC Data Model 2.0 became a W3C Recommendation on 15 May 2025 (S11).
- `[事實]` In OB 3.0, the issuer is "the organization or entity that has made an assertion". Issuer properties "can be modified to reference either an organization or an individual". The spec includes a self-assertion use case (S10). Evidence is "information supporting a claim such as a URL to an artifact produced by the Learner" (S10).
- `[推論]` A valid signature proves who issued a badge and that it was not altered. It does not prove that the issuer's assessment was rigorous. A badge issued by an outside programme is therefore only as strong as the reader's knowledge of that programme.

### C1.4 Credly-type badges

- `[事實]` Credly is branded "Credly by Pearson". Issuers are "certification, assessment, and training providers and employers". The page reports more than 3,700 issuing organisations. It does not describe the verification mechanism or mention Open Badges (S12).
- `[事實]` No target school's pages mention Credly or digital badges (sitemap scan; checked 2026-11-07).
- `[推論]` A badge can still appear in an application as text, for example as an Honors entry naming the issuer. Nothing indicates that any target school will click through or verify it.

### C1.5 The Coalition "Locker"

- `[事實]` The Coalition's 2015 plan included "a 'locker' for student materials" (S15, secondary).
- `[事實]` A secondary guide (last updated 2024-08-28) describes the Locker this way:
  - students could start uploading from 9th grade;
  - items were private by default;
  - colleges saw only items a student attached to an application (S17).
- `[事實]` In January 2022 the Coalition announced it would integrate into Scoir (S16). Its current pages say students "apply Coalition via the Scoir platform" and "We've discontinued our use of our previous technology platform" (S13, S14).
- `[事實]` Neither Coalition page mentions the Locker, portfolios, or file attachments (S13, S14).
- An official statement of when the Locker was retired, and whether its contents migrated: not stated (checked 2026-11-07, S13, S14).

### C1.6 What target schools say about non-traditional records (homeschool and portfolio pages as the closest analog)

`[推論]` No target school publishes a page specifically on "competency-based" or "portfolio-based" transcripts (sitemap scan; checked 2026-11-07). Their homeschool pages are the nearest stated policy on records that do not come from a graded school. The table below lists what each page actually says.

| School | What the page asks for (official) | Who may attest | Tag / Src |
|---|---|---|---|
| MIT | No separate requirements. Transcripts of outside classes and "an evaluation of the homeschooling portfolio" described as helpful | Counselor + 2 teachers; extra letters from mentors or job supervisors; ≤4 letters total | [事實] S18 |
| Stanford | Transcript; detailed curriculum description encouraged | Two teacher letters, preferably from outside instructors; parent may replace counselor (less preferred) | [事實] S19 |
| Caltech | Official transcripts received; parent may make a transcript; outside courses need official grades; Homeschool SSR template | STEM + humanities letters; extra letter if all instructors were parents | [事實] S20 |
| Penn | Consolidated transcript; syllabi, lab work, reading lists; how the student "demonstrate[d] mastery across the curriculum" | Outside instructors "if possible"; SSR may be completed by family | [事實] S21 |
| Brown | Self-designed record of four years, with resources; detailed syllabus; outside transcripts | Prefers instructors from traditional classrooms; one optional extra letter, not from a relative or paid tutor | [事實] S22 |
| Georgetown | Detailed curriculum outline if no traditional transcript; official transcripts for outside courses | Parent may act as counselor; teacher letters best from non-parent teachers | [事實] S23 |
| UW | Detailed coursework account in the application; SAT/ACT required unless one year of college coursework | Not stated (checked 2026-11-07, S24) | [事實] S24 |
| Swarthmore | Descriptive listings; "examples of research projects and papers"; documentation of internships; dates and sources of awards | ≥3 letters; adults with academic contact preferred | [事實] S25 |
| UC (all campuses) | Non-accredited curriculum, or no official transcript → admission by exception | Not stated (checked 2026-11-07, S26) | [事實] S26, S7 |
| UT Austin | Non-traditional secondary education → assigned percentile rank (SB 1543); homeschool transcript signed by the responsible adult | Not stated | [事實] S27 |
| Other 20 targets | Not checked in this unit at page level; no "mastery"/"badge" URL found in the sitemaps retrieved | — | not stated (checked 2026-11-07, sitemaps) |

---

## C2. Record-to-container map (generic)

### C2.1 Containers and verified budgets

| Container | Budget | Status | Src |
|---|---|---|---|
| Common App Activities (×10) | Position 50 chars; Organization 100 chars; Description 150 chars; plus hours/week and weeks/year | `[事實]` verified | S33, S34 |
| Common App Honors (×5) | Title, grade level, recognition level. A 100-character title limit is widely cited but **not found on an official public page this run** | 5 entries `[事實]`; char limit not stated (checked 2026-11-07, S34, S38) | S34, S38 |
| Common App Additional Information | Exists, and Common App points to it for more activity detail. A 650-word limit is widely cited but **not found on an official public page this run** (help center did not render) | existence `[事實]`; limit not stated (checked 2026-11-07, S33, S38, S50) | S33, S50 |
| Common App Other Recommender | Types: arts teacher, clergy, coach, college access counselor, employer, family member, peer, other. Colleges set their own acceptance. Length limit: not found on a public page with a citable URL | `[事實]` types; limit not stated (checked 2026-11-07, S35, S36) | S35, S36 |
| MIT Maker Portfolio (SlideRoom, $10) | Questionnaire + up to 25 media attachments; ≤2 minutes of video in total; code projects need codebase + working demo; one per applicant | `[事實]` | S32 |
| MIT Research Supplement (SlideRoom) | Questionnaire + abstract/poster PDF + mentor letter submitted in SlideRoom; one per applicant | `[事實]` | S32 |
| Caltech research (Beaver Breakroom) | Full paper preferred; Research Description Form; letter from the research site that "must speak to" the student's contributions | `[事實]` | S29 |
| Caltech portfolio (Beaver Breakroom) | No item cap; media ≤5 GB; documents ≤75 pages; links/URLs accepted; group work must state individual role | `[事實]` | S30 |
| SlideRoom (generic) | Set by each institution; no platform-wide limit stated | not stated (checked 2026-11-07, S49) | S49 |
| UC Activities & Awards | Up to 20 entries in 6 categories. A 350-character description limit is widely cited but **not stated on the UC pages checked** | 20/6 `[事實]`; char limit not stated (checked 2026-11-07, S39, S40) | S39, S40 |
| UC Additional comments (Academic history) | **550 characters** (not words) | `[事實]` | S39 |
| UC Additional comments (general, PIQ step) | "shouldn't be an essay". A 550-word limit is widely cited but **not stated on the UC pages checked** | purpose `[事實]`; limit not stated (checked 2026-11-07, S40) | S40 |
| UC PIQ | 4 of 8; 350 words each | `[事實]` | S39 |
| UC letters of recommendation | Not mentioned on UC's filling-out page | not stated (checked 2026-11-07, S40) | S40 |

### C2.2 Evidence type × container matrix

Budgets are taken from C2.1. "Fit" entries are `[推論]` unless marked otherwise. "Verifier" names a party type, not a person.

| Evidence an outside programme can produce | Common App Activities (150 ch) | CA Honors (5 entries; ch limit unverified) | CA Additional Information (limit unverified) | Other Recommender letter | MIT Maker / Research (SlideRoom) | Caltech Breakroom | UC Activities & Awards (20; desc limit unverified) | UC Additional comments (550 ch academic; general unverified) | Third party who could verify |
|---|---|---|---|---|---|---|---|---|---|
| Timestamped lab hours | Hours/week × weeks/year fields carry the total `[事實]` S33; 150 ch for role | No (not an honor) | Context on supervision and dates | Supervisor states hours and role | Research Supplement mentor letter `[事實]` S32 | Research-site letter `[事實]` S29 | Hours fields (category "Extracurricular" or "Other coursework") `[假設]` field set not verified | Not suited (academic context only) | Supervising adult; ISEF Form 2C is an existing template for this attestation `[事實]` S45 |
| Numeric skill certification (score, level) | Fits as one line | Fits if the issuer is named and the level is regional/national | Explain scale and issuer | Issuer may write | Not a portfolio item | Not a portfolio item | "Award or honor" category `[事實]` S39 | No | Issuing body; an OB 3.0 signature proves origin, not rigor `[事實]` S10 |
| Public contribution attribution (commits, wiki edits) | Link-free one line | No | URL plus a short description of what is yours | Maintainer/organiser letter | Maker Portfolio: codebase + demo required for code `[事實]` S32 | Links accepted `[事實]` S30 | One line | No | Platform history (public, timestamped) `[推論]`; for iGEM, the frozen public Wiki and Attributions Form `[事實]` S42, S43 |
| Pre/post test deltas | Too dense for 150 ch | No | Method + numbers | Instructor explains the test | Not a natural fit | As a document (≤75 pp) | No | No | Only if the test is external or standardised `[推論]`; otherwise no independent verifier |
| Replication record | One line | No | Method, outcome, what failed | Mentor letter | Research Supplement if it is the main project `[事實]` (one only) S32 | Research upload + letter S29 | One line | No | Original authors or a mentor `[推論]`; a journal if the replication is published |
| Oral-defense record (recorded Q&A) | One line | If the defense was judged and ranked | Date, panel type, link | Panel member as Other Recommender | Not a listed item | Video accepted (≤5 GB) `[事實]` S30 | One line | No | Competition judging panels (ISEF interview; iGEM 25-min judging session, recorded) `[事實]` S43 |
| Publication | One line | Only if an award attaches | Citation + role (CRediT terms) | Corresponding author/mentor | Research Supplement: abstract/poster PDF, citation if published `[事實]` S32 | Full paper strongly preferred `[事實]` S29 | "Award or honor" only if it is an award | No | Journal for the manuscript; co-authors for the role. Editors do not determine authorship `[事實]` S47 |

`[推論]` In this matrix, the containers that bring their own verifier are those with a named letter writer (MIT Research Supplement, Caltech research letter, Other Recommender). Text containers (Activities, Honors, Additional Information, UC Activities & Awards) carry only the applicant's statement. UC requires that statement to be "true and verifiable by an independent party" (S41).

---

## C3. Independent verification anchors

| Party | Can attest (sourced) | Cannot attest / limits | Route into the application | Src |
|---|---|---|---|---|
| ISEF (Society for Science) | Current-year work. The 250-word abstract "must describe research conducted by the student(s), not by the supervising adult(s)" `[事實]`. Form 2C is filled by the supervising adult, "NOT the Student(s)", and describes the student's independent work and role `[事實]`. Continuation projects need Form 7 and annual IRB/SRC review `[事實]` | Work outside one 12-month window (none before Jan 2026 for the 2026–27 cycle) `[事實]`. Team projects ≤3 members, judged on the same criteria `[事實]` | Honors entry (award); Activities; mentor as letter writer | S44, S45, S46 |
| iGEM | Team-level medals against fixed criteria; "no limit to the number of Medals" `[事實]`. Bronze requires the Attributions Form: "what your team members did and what others did" `[事實]`. Judges score 1–6 per ballot question; Gold criteria judged by a new process in 2026 `[事實]`. The Wiki "freezes at the deadline" and is "permanently hosted as a public archive" `[事實]`. The 25-min judging session is recorded `[事實]` | A medal is a team outcome, not an individual ranking `[推論]`. Individual contribution is visible only through the Attributions Form `[推論]` | Honors (medal/prize); Additional Information (Wiki URL, attributions page); Caltech accepts links `[事實]` S30 | S42, S43 |
| Journal peer review | Reviewers assess the manuscript `[推論]`. Authors must meet four criteria, including "agreement to be accountable" `[事實]` | "It is not the role of journal editors to determine who qualifies or does not qualify for authorship" `[事實]`. Peer review does not certify a student's share `[推論]`. CRediT's 14 roles (ANSI/NISO Z39.104-2022) can state the share `[事實]` | MIT Research Supplement (citation); Caltech full paper + letter that "must speak to" contributions `[事實]` | S47, S48, S29, S32 |
| Programme organiser (outside programme) | May write as an Other Recommender. Common App types include "college access counselor", "employer" and "other" `[事實]` | Not independent of its own programme `[推論]`. Acceptance of Other Recommenders varies by college; the student must check each college's requirements `[事實]` | Other Recommender; Additional Information | S35, S36 |
| School counselor | Context within "the entire graduating class and school community", including awards and unusual circumstances `[事實]`. The Optional Report is a "just in case" form `[事實]`. At several schools, the homeschool SSR may be completed by a parent or by the adult guiding the curriculum `[事實]` | Has no first-hand view of out-of-school work unless informed by the student or programme `[推論]`. The Optional Report is not described as a channel for outside records `[推論]` from S35 | School Report / counselor letter; Optional Report | S37, S35, S20, S21, S22, S23 |
| Outside professor / research mentor | MIT: mentors, summer-programme mentors and job supervisors may write; ≤4 letters total `[事實]`. Stanford prefers outside instructors for homeschoolers `[事實]`. Caltech research letter must address specific contributions; embargoes must be explained `[事實]`. Brown allows one extra letter `[事實]` | Can attest only to what they supervised `[推論]` | Other Recommender; MIT/Caltech research letters | S18, S19, S29, S22, S32 |
| UC (no letters) | UC requires activities to be "true and verifiable by an independent party" and runs "regular screenings" `[事實]` | UC pages checked do not mention letters `[事實]` (S40). Attestation therefore happens only on request `[推論]` | UC Activities & Awards entries | S41, S40 |

---

## Non-obvious findings (each cited)

1. `[事實]` "Mastery Transcript Ready" covers colleges that have admitted a student with the record **or** attended training (S2). All 30 targets carry the flag in MTC's data (S2), yet none of their retrieved admissions sitemaps contains a mastery page, and MIT's transcripts page is silent (S28). `[推論]` The flag is not evidence of college policy.
2. `[事實]` UC's own policy (UCOP memo 2023-01-05, BOARS) routes GPA-less mastery transcripts to admission by exception only (S7), while MTC lists Berkeley, UCLA and UCSD as MT Ready (S2). The official source contradicts the vendor's framing.
3. `[事實]` MTC's college count varies across its own documents: "over 800" (S5), 1,017 (S2, S3), and 997 unique domains in the page data (S2; my count).
4. `[事實]` MTC has changed owner twice in about two years: ETS in 2024, then Legend.org, "an AI-native education assessment platform", in July 2026 (S1, S6).
5. `[推論]` An outside programme cannot issue a Mastery Transcript, because competencies are "defined and certified by member schools" (S4).
6. `[事實]` Open Badges 3.0 allows individual issuers and self-assertion (S10). `[推論]` Cryptographic verification establishes origin, not quality.
7. `[事實]` The UC "Additional comments" field in Academic history is limited to **550 characters** (S39). The "550 words" and "350-character activity" figures circulating for UC were not found on the UC pages checked (S39, S40).
8. `[事實]` Common App's official PDFs verify the 150/100/50-character activity fields and the 5-honor cap (S33, S34). The Honors character limit and the Additional Information word limit were not found on any official page that could be retrieved this run (S38).
9. `[事實]` In iGEM, an Attributions Form ("what your team members did and what others did") is a Bronze-level requirement, and Wikis are frozen and permanently archived (S42, S43). `[推論]` This is a ready-made, third-party-hosted, timestamped contribution record.
10. `[事實]` ISEF Form 2C must be completed by the supervising adult, not the student, and asks for the student's independent work and specific procedures (S45). `[推論]` It is the closest existing public template for a third-party attestation of lab hours and role.
11. `[事實]` ICMJE says it is "not the role of journal editors" to decide authorship (S47). `[推論]` A publication by itself does not verify a student's share; a mentor letter or CRediT statement does that work.
12. `[事實]` Several homeschool pages already ask for portfolio-like evidence: Penn mentions mastery, syllabi and lab work (S21); Swarthmore asks for research papers and dates and sources of awards (S25); MIT mentions a portfolio evaluation (S18). `[推論]` These pages are the strongest official precedent for how an un-graded record is read.

## Gaps (for the brief)

- Common App Honors character limit, Additional Information word limit, and Other Recommender length: official help-center pages are client-rendered and could not be read. The sample Common App form PDFs seen this run had no recoverable public URL, so they are not cited.
- UC Activities & Awards description limit and the general Additional comments limit: not stated on the UC pages checked.
- Official Coalition statement on the Locker's retirement date and data migration: not found.
- Homeschool and non-traditional pages for 20 of the 30 schools were not fetched individually in this unit.
- The web-search budget for this run was exhausted part-way, so later lookups relied on direct fetches of known URLs and site sitemaps.

## Sources

| id | url | access_date | class | supports |
|---|---|---|---|---|
| S1 | https://www.mastery.org/about | 2026-11-07 | secondary | MTC history and rebrand |
| S2 | https://www.mastery.org/college-acceptances | 2026-11-07 | secondary | 1,017 MT Ready; definition; per-school flags |
| S3 | https://www.mastery.org/what-we-do/higher-education | 2026-11-07 | secondary | Products, single-link delivery, counts |
| S4 | https://mastery.org/what-we-do/ | 2026-11-07 | secondary | Member schools certify competencies |
| S5 | https://www.mastery.org/documents/mastery-org-letter-from-the-founders.pdf | 2026-11-07 | secondary | 2026-07-22 letters; "over 800 colleges" |
| S6 | https://www.financialcontent.com/article/gnwcq-2026-7-23-legendorg-acquires-mastery-transcript-consortium-from-ets | 2026-11-07 | secondary | Acquisition release 2026-07-23 |
| S7 | https://admission.universityofcalifornia.edu/counselors/_files/documents/nontraditional-transcript-guidance-010523.pdf | 2026-11-07 | official | UC BOARS mastery-transcript guidance |
| S8 | https://admission.universityofcalifornia.edu/counselors/connect-to-resources/resource-library.html | 2026-11-07 | official | UC resource library |
| S9 | https://www.1edtech.org/1edtech-article/latest-comprehensive-learner-record-standard-improves-security-portability-and | 2026-11-07 | secondary | CLR 2.0 release |
| S10 | https://www.imsglobal.org/spec/ob/v3p0 | 2026-11-07 | secondary | Open Badges 3.0 |
| S11 | https://www.w3.org/TR/vc-data-model-2.0/ | 2026-11-07 | secondary | VC 2.0 Recommendation |
| S12 | https://info.credly.com/ | 2026-11-07 | secondary | Credly |
| S13 | https://coalitionforcollegeaccess.org/apply-coalition | 2026-11-07 | official | Coalition on Scoir |
| S14 | https://www.coalitionforcollegeaccess.org/apply-coalition-on-scoir | 2026-11-07 | official | Previous platform discontinued |
| S15 | https://www.insidehighered.com/admissions/article/2019/11/25/coalition-application-draws-significant-criticism | 2026-11-07 | secondary | Locker in 2015 plan |
| S16 | https://www.insidehighered.com/index%2ephp/node/64491 | 2026-11-07 | secondary | 2022 Scoir integration |
| S17 | https://blog.prepscholar.com/coalition-application-college | 2026-11-07 | secondary | Locker description |
| S18 | https://mitadmissions.org/apply/parents-educators/homeschool/ | 2026-11-07 | official | MIT homeschool |
| S19 | https://admission.stanford.edu/apply/first-year/home_school.html | 2026-11-07 | official | Stanford homeschool |
| S20 | https://www.admissions.caltech.edu/apply/first-year-applicants/homeschooled-applicants | 2026-11-07 | official | Caltech homeschool |
| S21 | https://admissions.upenn.edu/how-to-apply/first-year-applicants/homeschool | 2026-11-07 | official | Penn homeschool |
| S22 | https://admission.brown.edu/ask/home-schooled-applicants | 2026-11-07 | official | Brown homeschool |
| S23 | https://uadmissions.georgetown.edu/apply/home-schooled-applicants/ | 2026-11-07 | official | Georgetown homeschool |
| S24 | https://admit.washington.edu/apply/first-year/homeschool/ | 2026-11-07 | official | UW homeschool |
| S25 | https://www.swarthmore.edu/admissions-aid/homeschooled-students | 2026-11-07 | official | Swarthmore homeschool |
| S26 | https://admission.universityofcalifornia.edu/admission-requirements/first-year-requirements/home-schooled-students.html | 2026-11-07 | official | UC homeschool |
| S27 | https://admissions.utexas.edu/apply/application-materials/transcript-info/ | 2026-11-07 | official | UT Austin non-traditional |
| S28 | https://mitadmissions.org/apply/firstyear/transcripts/ | 2026-11-07 | official | MIT transcripts |
| S29 | https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-materials/research-papers-and-publications | 2026-11-07 | official | Caltech research |
| S30 | https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-materials/portfolio | 2026-11-07 | official | Caltech portfolio |
| S31 | https://www.admissions.caltech.edu/apply/first-year-applicants/supplemental-materials | 2026-11-07 | official | Caltech supplemental types |
| S32 | https://mitadmissions.org/apply/firstyear/portfolios-additional-material/ | 2026-11-07 | official | MIT portfolios |
| S33 | https://www.commonapp.org/static/f45949473bb80a91c80aface729d83df/Approaching-Activities.pdf | 2026-11-07 | official | CA activity char limits |
| S34 | https://www.commonapp.org/static/72c7fb82f0c0c0b7832c341d2d5cb486/Gather-Materials-First-Year_3.pdf | 2026-11-07 | official | CA 5 honors, 10 activities |
| S35 | https://www.commonapp.org/static/eb936e0080b0c7535a04c720aabf4b75/Application-Dictionary_0.pdf | 2026-11-07 | official | Optional report, Other recommender |
| S36 | https://www.commonapp.org/static/bd27e890c7338673cbde71a9ce883bef/Understanding-Rec-Process.pdf | 2026-11-07 | official | Other Recommender types |
| S37 | https://commonapp.org/files/recommender-resources/Writing-Guide.pdf | 2026-11-07 | official | Counselor vs teacher letters |
| S38 | https://www.commonapp.org/apply/first-year-students | 2026-11-07 | official | No limits stated |
| S39 | https://admission.universityofcalifornia.edu/counselors/_files/documents/presenting-yourself-on-the-uc-application-first-year.pdf | 2026-11-07 | official | UC 20 activities; 550-char comments; PIQ 350 words |
| S40 | https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/filling-out-the-application.html | 2026-11-07 | official | UC categories; comments purpose |
| S41 | https://apply.universityofcalifornia.edu/docs/StatementOfIntegrity.pdf | 2026-11-07 | official | Verifiable by independent party |
| S42 | https://competition.igem.org/judging/medals | 2026-11-07 | secondary | iGEM medals (text via site JS bundle) |
| S43 | https://competition.igem.org/assets/deliverablesData-CsN011RQ.js | 2026-11-07 | secondary | iGEM Wiki, Attributions, judging session |
| S44 | https://sspcdn.blob.core.windows.net/files/Documents/SEP/ISEF/2027/Rules/Book.pdf | 2026-11-07 | secondary | ISEF rules 2026–27 |
| S45 | https://sspcdn.blob.core.windows.net/files/Documents/SEP/ISEF/2027/Forms/All.pdf | 2026-11-07 | secondary | ISEF Form 2C |
| S46 | https://www.societyforscience.org/isef/international-rules/ | 2026-11-07 | secondary | ISEF rules index |
| S47 | https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html | 2026-11-07 | secondary | ICMJE authorship |
| S48 | https://credit.niso.org/ | 2026-11-07 | secondary | CRediT taxonomy |
| S49 | https://www.slideroom.com/ | 2026-11-07 | official | SlideRoom |
| S50 | https://apply.jhu.edu/hopkins-insider/additional-information/ | 2026-11-07 | official | JHU on Additional Information |
