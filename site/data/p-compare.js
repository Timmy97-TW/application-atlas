// Page: compare. The comparator reads the merged dataset 'all' (viz-schools.js + viz-more.js), so the
// shell has to load both chart datasets. scripts/make-pages.js picks them by regex over this text:
// needs dataset: 'more' and dataset: 'schools'
window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
window.ATLAS.pages['compare'] = {
  title: { zh: '並排比較三所學校', en: 'Compare three schools side by side' },
  judgment: {
    zh: 'MIT、Stanford、UC Berkeley 三校在 20 個比較項目上，沒有一項三校完全相同：從申請系統、SAT/ACT 政策到補充材料，都要逐校查。',
    en: 'MIT, Stanford and UC Berkeley do not line up on a single one of the 20 rows, from the application system and test policy to supplementary materials, so each school has to be checked on its own terms.'
  },
  intro: {
    zh: '每一欄可以換成 50 校中的任何一所；選擇會存在這台裝置的瀏覽器裡。每一格附來源類別色點與引用編號，點編號可到來源頁查原文與查閱日。「未載明」只代表讀過的官方頁面沒寫，不代表學校沒有規定。第 31–50 校只查到基本資料與補充材料的深度，前 30 校才有的項目在這些學校的格子裡以虛線框標「此深度未涵蓋」，不算差異。打開「只看不同的列」，所選學校相同的列會收起。',
    en: 'Each column can be switched to any of the 50 schools; the choice is kept in this browser only. Every cell carries a source-class dot and citation ids that link to the source page with its access date. "Not stated" means only that the official pages read are silent, not that the school has no rule. Schools 31–50 were researched to roster and matrix depth only, so a row that exists for the first 30 but was not checked for them shows a dashed "Not covered at this depth" cell, which does not count as a difference. Turn on "Show differences only" to fold away rows where the schools agree.'
  },
  sections: [
    {
      id: 'compare',
      h: { zh: '三校並排', en: 'Three schools, one table' },
      judgment: {
        zh: '預設的三校在每一列都不同；換成同一系統的學校（例如三所 UC）時，相同的列才會多起來。',
        en: 'The default three differ on every row; rows only start to match when you pick schools from one system, such as the three UC campuses.'
      },
      // 'dataset' is written after title/subtitle on purpose: make-pages.js loads the 30-school dataset when a
      // compare-type spec is not immediately followed by a dataset key.
      viz: {
        type: 'compare',
        defaults: ['MIT', 'Stanford', 'UC Berkeley'],
        title: { zh: 'MIT、Stanford、UC Berkeley：20 列全部不同', en: 'MIT, Stanford and UC Berkeley differ on all 20 rows' },
        subtitle: { zh: '換掉任何一欄，50 校都可選；藍點標出學校之間不同的列。', en: 'Swap any column for any of the 50 schools; a blue dot marks rows where the schools differ.' },
        dataset: 'all'
      }
    }
  ]
};
