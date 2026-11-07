window.ATLAS = window.ATLAS || {};
window.ATLAS.pages = window.ATLAS.pages || {};
window.ATLAS.pages['compare'] = {
  title: { zh: '並排比較三所學校', en: 'Compare three schools side by side' },
  judgment: {
    zh: 'MIT、Stanford、UC Berkeley 三校在 20 個比較項目上，沒有一項三校完全相同：從申請系統、SAT/ACT 政策到補充材料，都要逐校查。',
    en: 'MIT, Stanford and UC Berkeley do not line up on a single one of the 20 rows, from the application system and test policy to supplementary materials, so each school has to be checked on its own terms.'
  },
  intro: {
    zh: '每一欄可以換成 30 校中的任何一所；選擇會存在這台裝置的瀏覽器裡。每一格附來源類別色點與引用編號，點編號可到來源頁查原文與查閱日。「未載明」只代表讀過的官方頁面沒寫，不代表學校沒有規定。打開「只看不同的列」，三校相同的列會收起。',
    en: 'Each column can be switched to any of the 30 schools; the choice is kept in this browser only. Every cell carries a source-class dot and citation ids that link to the source page with its access date. "Not stated" means only that the official pages read are silent, not that the school has no rule. Turn on "Show differences only" to fold away rows where the schools agree.'
  },
  sections: [
    {
      id: 'compare',
      h: { zh: '三校並排', en: 'Three schools, one table' },
      judgment: {
        zh: '預設的三校在每一列都不同；換成同一系統的學校（例如三所 UC）時，相同的列才會多起來。',
        en: 'The default three differ on every row; rows only start to match when you pick schools from one system, such as the three UC campuses.'
      },
      viz: {
        type: 'compare',
        defaults: ['MIT', 'Stanford', 'UC Berkeley'],
        title: { zh: 'MIT、Stanford、UC Berkeley：20 列全部不同', en: 'MIT, Stanford and UC Berkeley differ on all 20 rows' },
        subtitle: { zh: '換掉任何一欄；藍點標出學校之間不同的列。', en: 'Swap any column; a blue dot marks rows where the schools differ.' }
      }
    }
  ]
};
