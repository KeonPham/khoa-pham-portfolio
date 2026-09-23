import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };
const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(requestUrl.pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(resolve(root) + sep)) { res.writeHead(403).end(); return; }
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
