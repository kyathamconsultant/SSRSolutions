// Usage: node scripts/save-base64.js > public/images/hero.jpg
// Then paste the base64 string into stdin and press Ctrl+D (or EOF) to write the file.

const fs = require('fs');
const chunks = [];
process.stdin.on('data', (c) => chunks.push(c));
process.stdin.on('end', () => {
  const b64 = Buffer.concat(chunks).toString('utf8').replace(/^data:\S+;base64,/, '').trim();
  const buf = Buffer.from(b64, 'base64');
  // write to stdout so caller can redirect to a file
  process.stdout.write(buf);
});
process.stdin.resume();
