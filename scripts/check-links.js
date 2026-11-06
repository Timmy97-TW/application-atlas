#!/usr/bin/env node
// Request every URL cited in site/data/sources.js and research/*.md; report status.
// Usage: node scripts/check-links.js [--json out.json]
// Dead links are reported, never deleted.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const urls = new Set();

const ctx = { window: {} };
vm.createContext(ctx);
const srcFile = path.join(root, 'site/data/sources.js');
if (fs.existsSync(srcFile)) {
  vm.runInContext(fs.readFileSync(srcFile, 'utf8'), ctx);
  const s = (ctx.window.ATLAS && ctx.window.ATLAS.sources) || {};
  Object.values(s).forEach(x => x.url && urls.add(x.url));
}
const rdir = path.join(root, 'research');
if (fs.existsSync(rdir)) {
  for (const f of fs.readdirSync(rdir).filter(f => f.endsWith('.md'))) {
    const t = fs.readFileSync(path.join(rdir, f), 'utf8');
    for (const m of t.matchAll(/https?:\/\/[^\s|)\]>"'`]+/g)) urls.add(m[0].replace(/[.,;]+$/, ''));
  }
}

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
async function check(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 20000);
      const r = await fetch(url, { method, redirect: 'follow', signal: ctl.signal, headers: { 'user-agent': UA } });
      clearTimeout(timer);
      if (method === 'HEAD' && (r.status >= 400 || r.status === 0)) continue;
      return { url, status: r.status, final: r.url };
    } catch (e) {
      if (method === 'GET') return { url, status: 0, error: String(e.cause?.code || e.name) };
    }
  }
}

(async () => {
  const list = [...urls].sort();
  const out = [];
  const pool = 8;
  for (let i = 0; i < list.length; i += pool) {
    out.push(...await Promise.all(list.slice(i, i + pool).map(check)));
  }
  const bad = out.filter(r => !(r.status >= 200 && r.status < 400));
  console.log(`checked ${out.length} URLs, ${bad.length} not OK`);
  // 403/429 usually mean the site blocks scripts, not that the page is gone.
  for (const r of bad) console.log(`${r.status || 'ERR'}\t${r.url}${r.error ? '\t' + r.error : ''}`);
  const i = process.argv.indexOf('--json');
  if (i > 0) fs.writeFileSync(process.argv[i + 1], JSON.stringify(out, null, 1));
})();
