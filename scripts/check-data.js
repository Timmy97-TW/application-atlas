#!/usr/bin/env node
// Load every site/data/*.js in a sandbox, then report: syntax errors, cited
// source ids that do not exist in sources.js, items tagged fact without a
// source, and banned marketing words (CLAUDE.md rule 5).
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const dd = path.join(__dirname, '..', 'site/data');
const ctx = { window: {} };
vm.createContext(ctx);
let bad = 0;
for (const f of fs.readdirSync(dd).filter(f => f.endsWith('.js')).sort()) {
  try { vm.runInContext(fs.readFileSync(path.join(dd, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { console.log('LOAD ERROR', f, e.message); bad++; }
}
const A = ctx.window.ATLAS || {};
const S = A.sources || {};
const missing = new Map(); let factNoSrc = 0;
function walk(o, where) {
  if (Array.isArray(o)) return o.forEach((x, i) => walk(x, where));
  if (!o || typeof o !== 'object') return;
  if (Array.isArray(o.src)) for (const id of o.src) if (!S[id]) missing.set(id, where);
  if (o.tag === 'f' && !(o.src && o.src.length)) factNoSrc++;
  for (const k in o) walk(o[k], where);
}
for (const [k, v] of Object.entries(A.pages || {})) walk(v, 'page:' + k);
walk(A.mock, 'mock'); walk(A.matrix, 'matrix');
for (const [id, w] of missing) { console.log('MISSING SOURCE', id, 'in', w); bad++; }
if (factNoSrc) console.log('facts without source:', factNoSrc);
const banned = /頂尖|卓越|打造|賦能|一站式|量身訂做|empower|cutting-edge|world-class|tailor-made|one-stop|unlock potential/i;
for (const f of fs.readdirSync(dd).filter(f => f.startsWith('p-'))) {
  const t = fs.readFileSync(path.join(dd, f), 'utf8');
  const m = t.match(banned); if (m) { console.log('BANNED WORD', m[0], 'in', f); bad++; }
}
console.log(`pages ${Object.keys(A.pages || {}).length}, sources ${Object.keys(S).length}, problems ${bad}`);
process.exit(bad ? 1 : 0);
