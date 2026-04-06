const fs = require('fs');
const path = require('path');

const mappingFile = path.join(__dirname, 'image-mapping.json');
const leadersFile = path.join(__dirname, 'src', 'data', 'leaders.ts');

if (!fs.existsSync(mappingFile)) {
  console.error('image-mapping.json not found. Run download-images.js first.');
  process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'));
let leaders = fs.readFileSync(leadersFile, 'utf-8');

let replaced = 0;
for (const [cdnUrl, localPath] of Object.entries(mapping)) {
  if (leaders.includes(cdnUrl)) {
    leaders = leaders.replace(cdnUrl, localPath);
    replaced++;
  }
}

fs.writeFileSync(leadersFile, leaders);
console.log(`Updated ${replaced} image paths in leaders.ts`);
console.log('Now commit and push:');
console.log('  git add -A && git commit -m "Host leader images locally for reliable loading" && git push origin main');
