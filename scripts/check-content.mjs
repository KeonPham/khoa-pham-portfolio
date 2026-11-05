import assert from 'node:assert/strict';
import { readFile, access, readdir, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root=fileURLToPath(new URL('../dist/',import.meta.url));
const scope={window:{}};
vm.runInNewContext(await readFile(resolve(root,'content.js'),'utf8'),scope);
const projects=scope.window.PORTFOLIO_PROJECTS;
assert(Array.isArray(projects)&&projects.length>=20,'The expanded project catalog is present');
assert.equal(new Set(projects.map(p=>p.id)).size,projects.length,'Unique case-study identifiers');
const iot=projects.find(p=>/iot|smart.farm/i.test(p.id+' '+p.title));
assert(iot&&iot.category==='engineering'&&/AIT.*coursework/i.test(iot.context),'IoT belongs to Data Engineering and is labeled AIT coursework');
const checked=new Set();
async function localAsset(src) {
  assert(!/^(?:https?:|\/\/|data:)/i.test(src),'Project media must be packaged locally: '+src);
  const target=resolve(root,src);
  assert(target.startsWith(resolve(root)+sep),'Public asset must stay within dist');
  await access(target);
  assert((await stat(target)).size>0,'Asset must not be empty');
  checked.add(src);
  return target;
}
for(const p of projects) {
  assert(p.title&&p.summary&&p.context&&p.sections.length,'Every project has readable context, summary and case text: '+p.id);
  assert(['agents','vision','engineering','ml','analytics','archive'].includes(p.category),'Known project category');
  assert(p.sources.length,'Every project has source attribution');
  assert(p.sources.every(s=>/^https:\/\//.test(s.url)),'Sources are HTTPS URLs');
  if(p.thumbnail)await localAsset(p.thumbnail);
  for(const m of p.media){assert(m.alt&&m.caption,'Images have descriptive alternatives and captions');await localAsset(m.src);}
  for(const d of p.documents){
    assert(d.title&&['pdf','html','video','drive-video'].includes(d.type),'Documents have supported types');
    if(d.type==='drive-video'){assert(/^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/preview$/.test(d.src));continue;}
    const file=await localAsset(d.src);
    if(d.type==='html'){
      const html=await readFile(file,'utf8');
      assert(!/<script\b|\son[a-z]+\s*=/i.test(html),'Archived reports cannot execute scripts: '+p.id);
      assert(/Content-Security-Policy/.test(html)&&/default-src 'none'/.test(html),'Reports restrict external resources');
      for(const [,src] of html.matchAll(/<img\b[^>]*src=["']([^"']+)/g)) assert(/^data:image\//.test(src),'Report figures are embedded, not broken relative links');
    }
  }
}
for(const c of scope.window.PORTFOLIO_CREDENTIALS.education)for(const m of c.media){assert(m.alt&&m.caption);await localAsset(m.src);}
const publicFiles=await readdir(root,{recursive:true});
assert(!publicFiles.some(f=>/(?:^|[\\/])(?:originals|\.env(?:\.|$)|\.vercel|\.git|source-notes|manifest-private)/.test(f)),'Private staging and configuration stay outside publication');
console.log(`PASS: ${projects.length} source-backed cases; ${checked.size} local media/document references; IoT classification; report isolation; credential assets; output hygiene.`);
