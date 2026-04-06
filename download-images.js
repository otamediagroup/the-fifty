const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'leaders');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Read leaders.ts and extract image URLs
const leadersFile = fs.readFileSync(path.join(__dirname, 'src', 'data', 'leaders.ts'), 'utf-8');
const urlRegex = /image:\s*"(https:\/\/cdn\.prod\.website-files\.com[^"]+)"/g;
const urls = [];
let match;
while ((match = urlRegex.exec(leadersFile)) !== null) {
  urls.push(match[1]);
}

console.log(`Found ${urls.length} image URLs`);

function cleanFilename(url) {
  let name = decodeURIComponent(url.split('/').pop());
  // Remove leading hex IDs (like 69c66654142531c235aee22d_)
  name = name.replace(/^[0-9a-f]{20,}_/g, '');
  name = name.replace(/^[0-9a-f]{20,}_/g, '');
  name = name.replace(/\s+/g, '-');
  return name;
}

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        download(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function main() {
  const mapping = {};
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const filename = cleanFilename(url);
    const filepath = path.join(dir, filename);
    try {
      await download(url, filepath);
      const size = fs.statSync(filepath).size;
      if (size < 1000) {
        console.log(`WARN ${i+1}/${urls.length}: ${filename} - too small (${size} bytes)`);
      } else {
        console.log(`OK ${i+1}/${urls.length}: ${filename} (${Math.round(size/1024)}KB)`);
      }
      mapping[url] = `/leaders/${filename}`;
    } catch (err) {
      console.log(`FAIL ${i+1}/${urls.length}: ${filename} - ${err.message}`);
    }
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 200));
  }

  // Write mapping file
  fs.writeFileSync(path.join(__dirname, 'image-mapping.json'), JSON.stringify(mapping, null, 2));
  console.log('\nDone! Mapping saved to image-mapping.json');
  console.log('Now run: node update-leaders.js');
}

main();
