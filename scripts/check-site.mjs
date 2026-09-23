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
for (const [, href] of html.matchAll(/\bhref="#([^"]+)"/g)) check(ids.includes(href), `Fragment #${href} resolves`);
for (const [, attr, url] of html.matchAll(/\b(src|href)="([^"]+)"/g)) {
  if (/^(https?:|mailto:|data:|#)/.test(url)) continue;
  const path = resolve(root, url);
  check(path.startsWith(resolve(root) + sep), `Asset stays within public root: ${url}`);
  try { await access(path); } catch { failures.push(`Missing ${attr} asset: ${url}`); }
}
const details = [...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)];
check(details.length === 4, 'Four project disclosures');
for (const [index, [, body]] of details.entries()) {
  const label = body.match(/<summary>\s*<span>([\s\S]*?)<\/span>/)?.[1]?.replace(/<[^>]*>/g, '').trim();
  check(Boolean(label), `Disclosure ${index + 1} has a descriptive native summary`);
}
for (const image of html.matchAll(/<img\b[^>]*>/g)) check(/\balt="[^"]+"/.test(image[0]), 'Image has meaningful alternative text');
for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) check(/rel="[^"]*noopener/.test(link[0]), 'External window links use noopener');
check(!/TODO|TBD|Remaining portfolio sections|portrait-wordmark/.test(html), 'No unfinished placeholders');
const files = await readdir(root, { recursive: true });
check(!files.some(f => /(?:\.env|source-notes|linkedin-notes|hosting\.json|\.git)/.test(f)), 'No internal source notes or credential/config files in public output');
execFileSync(process.execPath, ['--check', resolve(root, 'app.js')], { stdio: 'inherit' });
if (failures.length) { process.stderr.write(failures.join('\n') + '\n'); process.exitCode = 1; }
else process.stdout.write(`PASS: entrypoint, English metadata, ${ids.length} unique IDs, all fragment and local asset targets, 4 native disclosures, image alternatives, safe external links, public-output hygiene and JavaScript syntax.\n`);
