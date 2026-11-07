import { readFile, access, readdir } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const failures = [];
const check = (condition, label) => { if (!condition) failures.push(label); };
check(/<html lang="en">/.test(html), 'English document language');
check(/<title>[^<]+<\/title>/.test(html), 'Page title');
check(/<meta name="description" content="[^"]+"/.test(html), 'Page description');
check((html.match(/<h1\b/g) || []).length === 1, 'Exactly one main heading');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
check(new Set(ids).size === ids.length, 'Unique element IDs');
for (const [, href] of html.matchAll(/\bhref="#([^"]+)"/g)) check(ids.includes(href), 'Fragment #' + href + ' resolves');
const tabs = ['profile','stories','projects','cv','credentials'];
for (const tab of tabs) {
  check(new RegExp('<button[^>]*id="tab-' + tab + '"[^>]*role="tab"[^>]*aria-controls="' + tab + '"').test(html), 'Accessible ' + tab + ' tab');
  check(new RegExp('<section[^>]*id="' + tab + '"[^>]*role="tabpanel"[^>]*aria-labelledby="tab-' + tab + '"').test(html), 'Named ' + tab + ' tab panel');
}
check(html.includes('id="project-search" type="search"'), 'Search input has search semantics');
check(html.includes('id="filter-status" role="status" aria-live="polite"'), 'Filter result changes announced');
check(html.includes('id="project-reader"'), 'Inline project reader');
check(html.includes('id="story-reader"'), 'Inline story reader');
check(html.includes('id="print-cv"'), 'CV print control');
check(html.indexOf('src="content.js"') < html.indexOf('src="app.js"') && html.includes('src="content.js" defer'), 'Catalog precedes renderer');
for (const [, attr, url] of html.matchAll(/\b(src|href)="([^"]+)"/g)) {
  if (/^(https?:|mailto:|tel:|data:|#)/.test(url)) continue;
  const path = resolve(root, url);
  check(path.startsWith(resolve(root) + sep), 'Asset stays within public root: ' + url);
  try { await access(path); } catch { failures.push('Missing ' + attr + ' asset: ' + url); }
}
for (const image of html.matchAll(/<img\b[^>]*>/g)) check(/\balt="[^"]+"/.test(image[0]), 'Image has meaningful alternative text');
for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) check(/rel="[^"]*noopener/.test(link[0]), 'External window links use noopener');
check(!/TODO|TBD|Remaining portfolio sections|portrait-wordmark|previewbar/.test(html), 'No unfinished mockup placeholders');
const files = await readdir(root, { recursive: true });
check(!files.some(f => /(?:\.env|source-notes|linkedin-notes|hosting\.json|\.git)/.test(f)), 'No internal source notes or credential/config files in public output');
for (const file of ['app.js','content.js']) execFileSync(process.execPath, ['--check', resolve(root, file)], { stdio: 'inherit' });
if (failures.length) { process.stderr.write(failures.join('\n') + '\n'); process.exitCode = 1; }
else process.stdout.write('PASS: five named tabs and panels, inline readers, search announcements, printable CV, English metadata, ' + ids.length + ' unique IDs, local asset targets, image alternatives, external links, public-output hygiene, and JavaScript syntax.\n');
