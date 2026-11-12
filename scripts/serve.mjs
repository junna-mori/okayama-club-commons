import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const directory = process.argv[2] === 'dist' ? 'dist' : '.';
const root = resolve(project, directory);
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8'};
const publicFiles = new Set(['index.html','styles.css','university.css','app.js','data.js','domain.js','robots.txt','OPEN_PREVIEW.html']);
const server = http.createServer(async (req,res)=>{
  try {
    if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
    let path = decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/+/, '');
    if (!path) path='index.html';
    const full = resolve(root,path);
    if (!full.startsWith(root+sep) || (!publicFiles.has(path) && !path.startsWith('assets/'))) {res.writeHead(404);res.end('Not found');return;}
    if (!(await stat(full)).isFile()) {res.writeHead(404);res.end('Not found');return;}
    const body=await readFile(full);
    res.writeHead(200,{'Content-Type':types[extname(full)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    res.end(req.method==='HEAD'?undefined:body);
  } catch {res.writeHead(404);res.end('Not found');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>process.exit(0)));
