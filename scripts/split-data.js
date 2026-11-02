const fs = require('fs');
const path = require('path');

const JSON_PATH = path.join(__dirname, '../public/data.json');
const DATA_DIR = path.join(__dirname, '../public/data');

function splitDataByYear() {
  if (!fs.existsSync(JSON_PATH)) {
    return;
  }

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const rawJson = fs.readFileSync(JSON_PATH, 'utf-8');
  const allData = JSON.parse(rawJson);

  const byYear = new Map();
  for (const record of allData) {
    const yr = String(record['ano'] || '').trim();
    if (!yr) continue;
    if (!byYear.has(yr)) byYear.set(yr, []);
    byYear.get(yr).push(record);
  }

  const yearsIndex = Array.from(byYear.entries())
    .sort((a, b) => (parseInt(b[0]) || 0) - (parseInt(a[0]) || 0))
    .map(([ano, records]) => {
      fs.writeFileSync(path.join(DATA_DIR, `escrituras-${ano}.json`), JSON.stringify(records), 'utf-8');
      return { ano, count: records.length };
    });

  fs.writeFileSync(path.join(DATA_DIR, 'index.json'), JSON.stringify(yearsIndex), 'utf-8');
}

splitDataByYear();

