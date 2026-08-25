const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  const pdfPath = path.join(__dirname, '../Indice mayo.pdf');
  const outputPath = path.join(__dirname, '../scratch-pdf-text.txt');

  console.log('Checking for pdf-parse...');
  try {
    require.resolve('pdf-parse');
  } catch (e) {
    console.log('Installing pdf-parse locally...');
    execSync('npm install pdf-parse --no-save', { stdio: 'inherit' });
  }

  const pdf = require('pdf-parse');
  const dataBuffer = fs.readFileSync(pdfPath);

  console.log('Parsing PDF...');
  const data = await pdf(dataBuffer);

  console.log(`Parsed ${data.numpages} pages.`);
  fs.writeFileSync(outputPath, data.text, 'utf8');
  console.log(`Saved text to ${outputPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
