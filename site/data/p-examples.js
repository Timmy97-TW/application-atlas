window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
(function () {
  function F(zh, en, src) { return { t: { zh: zh, en: en }, tag: "f", src: src }; }
  function I(zh, en, src) { var o = { t: { zh: zh, en: en }, tag: "i" }; if (src) o.src = src; return o; }

  window.ATLAS.pages["examples"] = {
    title: { zh: "人物範例（虛構）", en: "Personas (fictional)" },
    judgment: {
      zh: "兩位虛構申請者各送三所學校，而這三所用的是三套不同的申請系統；同一份經歷在每一套裡能放的位置與長度都不一樣。",
      en: "Two fictional applicants each apply to three schools that use three different application systems; the same experience fits into different fields, at different lengths, in each one."
    },
    intro: {
      zh: "這兩位都是虛構人物，由幾種常見情境組合而成，不代表任何真實學生，也不指名任何學校、研究室或比賽。兩人都在台灣讀高三，都申請 MIT、Stanford、UC Berkeley。人物的活動與文字是我們寫的示範；每一條學校規定都附來源，字元數由頁面程式計算。",
      en: "Both personas are fictional composites of common situations. They are not real students, and no school, lab or competition linked to them is named. Both are in their final year of senior high in Taiwan and apply to MIT, Stanford and UC Berkeley. Their activities and text are our illustrations; every school rule is cited, and character counts are computed by the page."
    },
    sections: [
      {
        id: "systems",
        h: { zh: "為什麼選這三所", en: "Why these three schools" },
        judgment: {
          zh: "MIT 用自己的系統、Stanford 用 Common App、Berkeley 用 UC 申請，三所剛好涵蓋三套系統。",
          en: "MIT uses its own system, Stanford uses Common App and Berkeley uses the UC application, so the three cover three systems."
        },
        items: [
          F("MIT：自己的申請 portal，不用 Common App；四篇約 100–200 字短文、四項活動，作品集經 SlideRoom。", "MIT: its own application portal, not Common App; four essays of about 100–200 words, four activities, portfolios through SlideRoom.", ["A2-S23", "A2-S22", "A2-S25"]),
          F("Stanford：Common Application，另加 Stanford 自己的題目；可加一封 Other Recommender 信。", "Stanford: the Common Application with Stanford's own questions; one Other Recommender letter is allowed.", ["A5a-S15", "A5a-S16", "A5a-S17"]),
          F("UC Berkeley：UC 申請，8 題 PIQ 選 4 題、每題 350 字；不收作品集或補充材料。", "UC Berkeley: the UC application, 4 of 8 PIQs at 350 words each; no portfolios or supplementary materials.", ["A5b-S31", "A5b-S25"]),
          I("三套系統對「校外做的研究或作品」各給不同的容器，所以同一個人要準備三種版本，而不是一份通用稿。", "Each system gives outside research or built work a different container, so one applicant prepares three versions rather than one general draft.", ["A2-S25", "B3-S21", "A5b-S25"])
        ]
      },
      {
        id: "personas",
        h: { zh: "兩位人物", en: "The two personas" },
        judgment: {
          zh: "生物：一個校外實驗室研究；電機：一個有設計檔與測試數據的硬體專案。",
          en: "Biology: research in an outside lab. EE: a hardware project with design files and test data."
        },
        cards: [
          { h: { zh: "生物系申請者（虛構）", en: "Biology applicant (fictional)" },
            p: { zh: "台灣公立高中，20 個月的河川抗藥性基因研究。10 項 Common App 活動、5 項 Honors、300 字 Additional information、研究指導者推薦信、三校補充材料、UC PIQ 選題。", en: "Public senior high in Taiwan, 20 months of river-water resistance-gene research. 10 Common App activities, 5 honors, a 300-word Additional information note, the mentor's letter, materials per school, and UC PIQ choices." },
            href: "examples/bio.html" },
          { h: { zh: "電機系申請者（虛構）", en: "EE applicant (fictional)" },
            p: { zh: "三版電路板的 8 通道 LED driver，附設計檔、firmware 與測試數據。MIT Maker Portfolio、SlideRoom、150 字元活動描述、GitHub 網址位置、build log 的去處。", en: "An 8-channel LED driver over three board revisions, with design files, firmware and test data. MIT Maker Portfolio, SlideRoom, a 150-character activity line, where the GitHub URL goes, and where the build log can enter." },
            href: "examples/ee.html" }
        ]
      }
    ]
  };
})();
