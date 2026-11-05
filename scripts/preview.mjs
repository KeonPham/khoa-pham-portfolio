import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.pdf': 'application/pdf', '.mp4': 'video/mp4', '.m4v': 'video/mp4', '.json': 'application/json' };
const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(requestUrl.pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(resolve(root) + sep)) { res.writeHead(403).end(); return; }
    // Media seeking needs byte ranges, just as on the production static host.
    if (/\.(mp4|m4v)$/i.test(file)) {
      const {size}=await stat(file);
      let start=0,end=size-1,status=200;
      if(req.headers.range){
        const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        if(!match||(!match[1]&&!match[2])){res.writeHead(416,{'content-range':'bytes */'+size}).end();return;}
        if(!match[1])start=Math.max(0,size-Number(match[2]));
        else {start=Number(match[1]);if(match[2])end=Math.min(end,Number(match[2]));}
        if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>end||start>=size){res.writeHead(416,{'content-range':'bytes */'+size}).end();return;}
        status=206;
      }
      const headers={'content-type':mime[extname(file)]||'video/mp4','cache-control':'no-cache','accept-ranges':'bytes','content-length':end-start+1};
      if(status===206)headers['content-range']=`bytes ${start}-${end}/${size}`;
      res.writeHead(status,headers);
      if(req.method==='HEAD'){res.end();return;}
      const stream=createReadStream(file,{start,end});
      stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);return;
    }
    let data = await readFile(file);
    // Preview-only accessibility probes; this server is never part of hosted output.
    if (file === resolve(root, 'index.html')) {
      let html = data.toString('utf8');
      if (requestUrl.searchParams.get('qa') === 'text200') html = html.replace('</head>', '<style>html{font-size:200%}</style></head>');
      if (requestUrl.searchParams.get('nojs') === '1') html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      data = Buffer.from(html);
    }
    res.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(data);
  } catch { res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found'); }
});
server.listen(4173, '127.0.0.1', () => process.stdout.write('Local: http://127.0.0.1:4173\n'));
