#!/usr/bin/env node
// Writes the HTML shell for every page listed below. Shells hold no text;
// content comes from site/data/*.js. Re-run when a page or data file is added.
const fs = require('fs');
const path = require('path');
const site = path.join(__dirname, '..', 'site');
const common = ['ui.js', 'sources.js', 'status.js', 'log.js'];
// Cache-busting stamp so readers get fresh data after each deploy.
const V = Date.now().toString(36);
const pages = [
  ['index.html', 'index', ['p-index.js']],
  ['process.html', 'process', ['p-process.js'], ['graph.js']],
  ['containers.html', 'containers', ['p-containers.js']],
  ['schools.html', 'schools', ['p-schools.js']],
  ['more.html', 'more', ['p-more.js']],
  ['portfolios.html', 'portfolios', ['p-portfolios.js']],
  ['record.html', 'record', ['p-record.js']],
  ['insights.html', 'insights', ['p-insights.js']],
  ['changes.html', 'changes', ['p-changes.js']],
  ['about.html', 'about', ['p-about.js']],
  ['log.html', 'log', ['p-log.js']],
  ['sources.html', 'sources', ['p-sources.js']],
  ['mock/index.html', 'mock', ['p-mock.js'], ['mock.js']],
  ['examples/index.html', 'examples', ['p-examples.js']],
  ['examples/bio.html', 'bio', ['p-bio.js']],
  ['examples/ee.html', 'ee', ['p-ee.js']],
  ['uk/index.html', 'uk', ['p-uk.js']]
];
for (const [file, page, data, extraJs = []] of pages) {
  const depth = file.split('/').length - 1;
  const root = '../'.repeat(depth);
  const vizData = fs.readdirSync(path.join(site, 'data')).filter(f => f.startsWith('viz-') && f.endsWith('.js')).sort();
  const vizJs = fs.readdirSync(path.join(site, 'assets/js')).filter(f => f.startsWith('viz-') && f.endsWith('.js'))
    .sort((a, b) => (a === 'viz-core.js' ? -1 : b === 'viz-core.js' ? 1 : a.localeCompare(b)));
  const scripts = [...common, ...vizData, ...data].filter(d => fs.existsSync(path.join(site, 'data', d)))
    .map(d => `<script src="${root}data/${d}?v=${V}"></script>`)
    .concat([...vizJs, ...extraJs].map(j => `<script src="${root}assets/js/${j}?v=${V}"></script>`));
  const html = `<!doctype html>
<html lang="zh-Hant-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Application Atlas</title>
<link rel="stylesheet" href="${root}assets/css/site.css?v=${V}">
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
</head>
<body data-page="${page}" data-root="${root}">
<main id="main"></main>
${scripts.join('\n')}
<script src="${root}assets/js/app.js?v=${V}"></script>
</body>
</html>
`;
  fs.mkdirSync(path.dirname(path.join(site, file)), { recursive: true });
  fs.writeFileSync(path.join(site, file), html);
}
console.log('wrote', pages.length, 'pages');
