import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { clubs, restaurants, reviewedAt } from '../data.js';
import { filterClubs, filterRestaurants, buildClubMessage, dietaryPhrases } from '../domain.js';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
for(const file of ['app.js','data.js','domain.js','scripts/build.mjs','scripts/serve.mjs']) {
  const result=spawnSync(process.execPath,['--check',resolve(root,file)],{encoding:'utf8'});
  assert.equal(result.status,0,result.stderr);
}
for(const collection of [clubs,restaurants]) {
  assert.equal(new Set(collection.map(c=>c.id)).size,collection.length,'IDs must be unique');
  for(const item of collection) {
    for(const key of ['en','ja'])assert.ok(item.name[key] && item.name[key].trim(),'Both languages required');
    assert.equal(new URL(item.source).protocol,'https:','Public source needs HTTPS');
    if (item.image) {
      // Images may be local generated files (./assets/...) or official club-site URLs.
      assert.ok(item.image.startsWith('./assets/') || /^https:\/\//.test(item.image),'Image must be a local asset or an HTTPS official URL');
      if (item.image.startsWith('./assets/')) {
        assert.ok((await stat(resolve(root,item.image))).isFile(),`Missing image ${item.image}`);
      } else {
        assert.equal(new URL(item.image).protocol,'https:','Remote image needs HTTPS');
      }
    }
    // imageAlt is required whenever an image is present.
    if (item.image) {
      assert.ok(item.imageAlt?.en && item.imageAlt?.ja,'Bilingual image descriptions required when an image is present');
    }
  }
}
assert.equal(clubs.length,8);
assert.equal(restaurants.length,4);
assert.match(reviewedAt,/^\d{4}-\d{2}-\d{2}$/);
assert.deepEqual(filterClubs(clubs,{query:'写真部'}).map(c=>c.id),['photography']);
assert.deepEqual(filterClubs(clubs,{query:'応援団総部チアリーダー'}).map(c=>c.id),['wizards']);
assert.deepEqual(filterClubs(clubs,{category:'sports',beginner:true}).map(c=>c.id),['wizards','kyudo']);
assert.deepEqual(filterClubs(clubs,{savedOnly:true,saved:['tea']}).map(c=>c.id),['tea']);
assert.equal(filterClubs(clubs,{query:'unmatched-search-123'}).length,0);
assert.deepEqual(filterRestaurants(restaurants,{diet:'halal'}).map(r=>r.id).sort(),['milenga','restoran-halal']);
assert.deepEqual(filterRestaurants(restaurants,{diet:'unconfirmed'}).map(r=>r.id).sort(),['aobaba','rakuda-kitchen']);
assert.equal(filterRestaurants(restaurants,{diet:'vegan'}).length,0,'No vegan-confirmed venues currently');
const msg=buildClubMessage({name:'Alex <sample>',club:'WIZARDS',period:'Apr–Sep 2027',japanese:'beginner'});
for(const language of ['en','ja']) {assert.ok(msg[language].includes('Alex <sample>'));assert.ok(msg[language].includes('Apr–Sep 2027'));assert.ok(msg[language].includes('WIZARDS'));}
assert.ok(buildClubMessage().en.includes('[your name]'));
assert.ok(buildClubMessage().ja.includes('［名前］'));
for(const phrase of Object.values(dietaryPhrases))assert.ok(phrase.en && phrase.ja);
const html=await readFile(resolve(root,'index.html'),'utf8');
for(const asset of [...html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g)])assert.ok((await stat(resolve(root,asset[1]))).isFile(),`Missing ${asset[1]}`);
await stat(resolve(root,'assets/campus-life.webp'));
// Each listing that has an image must use a distinct one (null images are excluded).
const images = [...clubs,...restaurants].map(i=>i.image).filter(Boolean);
assert.equal(new Set(images).size,images.length,'Use a distinct image for each listing that has one');
const vercel=JSON.parse(await readFile(resolve(root,'vercel.json'),'utf8'));
assert.equal(vercel.outputDirectory,'dist');
assert.equal(vercel.buildCommand,'npm run build');
console.log('PASS: syntax, bilingual data, search normalization, combined filters, saved-list logic, dietary-label boundaries, message generation, local assets and deploy configuration.');
