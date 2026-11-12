import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
let html=await readFile(resolve(root,'index.html'),'utf8');
const css=await readFile(resolve(root,'styles.css'),'utf8');
const universityCss=await readFile(resolve(root,'university.css'),'utf8');
const favicon=await readFile(resolve(root,'assets/favicon.svg'),'utf8');
let js='';
for(const name of ['data.js','domain.js','app.js']) {
  let content=await readFile(resolve(root,name),'utf8');
  content=content.replace(/^import .* from ['"].*['"];?\r?\n/gm,'').replace(/^export /gm,'');
  js+=content+'\n';
}
const imagePaths=new Set(js.match(/\.\/assets\/[a-z0-9/_-]+\.webp/g)||[]);
for(const path of imagePaths){const data=`data:image/webp;base64,${(await readFile(resolve(root,path))).toString('base64')}`;js=js.replaceAll(path,data);}
js=js.replace(/<\/script/gi,'<\\/script');
html=html.replace('<link rel="stylesheet" href="./styles.css">',`<style>${css}</style>`)
  .replace('<link rel="stylesheet" href="./university.css">',`<style>${universityCss}</style>`)
  .replace('<script type="module" src="./app.js"></script>',`<script type="module">${js}</script>`)
  .replace('href="./assets/favicon.svg"',`href="data:image/svg+xml,${encodeURIComponent(favicon)}"`);
await writeFile(resolve(root,'OPEN_PREVIEW.html'),html);
console.log('Created OPEN_PREVIEW.html: a standalone review copy. Edit the original source files, then export again.');
