window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
window.ATLAS.pages['about'] = {
  title: { zh: '關於本站與範圍決定', en: 'About this site and its scoping decisions' },
  judgment: {
    zh: '這是一份研究筆記，不是申請建議。每項事實都附來源與查閱日，並標示是事實、推論還是假設；查不到的地方留白，寫明「未說明」。',
    en: 'These are research notes, not admissions advice. Every fact carries a source and an access date and is labelled fact, inference or assumption; where nothing could be found the cell says "not stated".'
  },
  sections: [
    {
      id: 'method',
      h: { zh: '方法', en: 'Method' },
      judgment: { zh: '先讀官方頁面，再寫筆記，再從筆記更新網站資料。次級來源只用來找到官方頁面，或支持一個標明為推論的說法。', en: 'Official pages are read first, then a note is written, then the site data is updated from the note. Secondary sources are used only to locate official pages or to support a statement labelled as inference.' },
      items: [
        { zh: '**官方來源**：學校、Common App、UC、SlideRoom、MIT，或招生辦公室以自己名義發表的內容（包括部落格、說明中心、podcast）。', en: '**Official source**: the university, Common App, UC, SlideRoom, MIT, or an admissions office in its own voice, including its blogs, help centers and podcasts.' },
        { zh: '**次級來源**：新聞、顧問、論壇，以及任何不是由該機構經營的網站。', en: '**Secondary source**: news, consultants, forums, and anything not run by the institution.' },
        { zh: '**事實／推論／假設**：三者分開標示，不會把推論寫成事實。關於招生審查者如何閱讀申請，只要不是招生辦公室自己說的，一律標為推論。', en: '**Fact / inference / assumption**: labelled separately; an inference is never presented as a fact. Anything about how admissions readers behave is an inference unless an admissions office said it.' },
        { zh: '**留白**：學校頁面沒有說明的事項，表格寫「未說明」並附查核日期與網址，不以看似合理的文字填補。', en: '**Gaps**: where a school\'s page says nothing, the cell reads "not stated" with the check date and URL; it is never filled with plausible text.' },
        { zh: '**查閱日超過 90 天**的來源會自動標示「待重查」。', en: 'Sources with an **access date older than 90 days** are flagged "re-verify" automatically.' }
      ]
    },
    {
      id: 'decisions',
      h: { zh: '範圍決定（依日期）', en: 'Scoping decisions, by date' },
      judgment: { zh: '每一項決定都記錄在 repo 的 DECISIONS.md，這裡逐條列出。', en: 'Each decision is recorded in DECISIONS.md in the repository and listed here line by line.' },
      items: [
        { zh: '2026-11-07 · 範圍是 30 所美國學校，完整深度。這份名單混合了研究型大學、工程導向學院、公立旗艦大學與文理學院，讓歸納出的規律不只來自一種學校。', en: '2026-11-07 · Scope is 30 US schools at full depth. The list mixes research universities, engineering-focused colleges, public flagships and liberal-arts colleges so the patterns are not drawn from one type of school.' },
        { zh: '2026-11-07 · 基準申請季為 2026–27（2027 年秋季入學），因為這是開工當天正在進行的申請季；之後的變更記錄到 2027–28。', en: '2026-11-07 · Base cycle is 2026–27 (entry fall 2027), the cycle open on the start date; later changes are logged forward into 2027–28.' },
        { zh: '2026-11-07 · 除 repo 擁有者外，不點名任何機構、計畫或個人。人物範例都是虛構的組合。', en: '2026-11-07 · Apart from the repository owner, no institution, programme or person is named. Personas are fictional composites.' },
        { zh: '2026-11-07 · Repo 與網站公開，由 GitHub Pages 發佈；取代原先「私人 repo＋門禁連結」的規劃。', en: '2026-11-07 · Repository and site are public, published with GitHub Pages; this replaces an earlier plan for a private repo behind a gated link.' },
        { zh: '2026-11-07 · 經維護者授權的執行可以在檢查通過後自行 merge PR，讓公開網站保持最新。', en: '2026-11-07 · Runs authorised by the maintainer may merge their own PR after checks pass, so the public site stays current.' },
        { zh: '2026-11-07 · 每週兩次排程執行，每次一到兩個研究單元；第一晚例外，進行一次長時間執行。', en: '2026-11-07 · Two scheduled runs a week, one or two units each; the first night is an exception, one long run.' },
        { zh: '2026-11-07 · 英國（UCAS）列為第 F 部分，在美國 30 校之後進行。', en: '2026-11-07 · The UK (UCAS) is added as section F, after the 30 US schools.' },
        { zh: '2026-11-07 · 美國第 31–50 校列為第 G 部分，做到逐校基本資料與補充材料矩陣的深度，排在英國之後。', en: '2026-11-07 · US schools 31–50 are added as section G, to roster and matrix depth, after the UK.' },
        { zh: '2026-11-07 · 人物範例的目標學校是 MIT、Stanford、UC Berkeley：三種不同的申請系統（MIT 自有系統、Common App、UC）。', en: '2026-11-07 · Personas target MIT, Stanford and UC Berkeley: three different application systems (MIT\'s own, Common App, UC).' }
      ]
    }
  ]
};
