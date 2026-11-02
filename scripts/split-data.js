const fs = require('fs');
const path = require('path');

const ESCRITURAS_PATH = path.join(__dirname, '../public/data.json');
const VEHICULOS_PATH = path.join(__dirname, '../public/data_vehiculo.json');
const DATA_DIR = path.join(__dirname, '../public/data');

function splitDataset(sourcePath, prefix, indexFilename, getYear) {
  if (!fs.existsSync(sourcePath)) return;

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const rawJson = fs.readFileSync(sourcePath, 'utf-8');
  const allData = JSON.parse(rawJson);

  const byYear = new Map();
  for (const record of allData) {
    const yr = getYear(record);
    if (!yr) continue;
    if (!byYear.has(yr)) byYear.set(yr, []);
    byYear.get(yr).push(record);
  }

  const yearsIndex = Array.from(byYear.entries())
    .sort((a, b) => (parseInt(b[0]) || 0) - (parseInt(a[0]) || 0))
    .map(([ano, records]) => {
      fs.writeFileSync(path.join(DATA_DIR, `${prefix}-${ano}.json`), JSON.stringify(records), 'utf-8');
      return { ano, count: records.length };
    });

  fs.writeFileSync(path.join(DATA_DIR, indexFilename), JSON.stringify(yearsIndex), 'utf-8');
}

// 1. Particionar Índice de Escrituras por año
splitDataset(
  ESCRITURAS_PATH,
  'escrituras',
  'index.json',
  (r) => String(r['ano'] || '').trim()
);

// 2. Particionar Índice de Vehículos por año (extraído de Fecha DD/MM/YYYY)
splitDataset(
  VEHICULOS_PATH,
  'vehiculos',
  'vehiculos-index.json',
  (r) => {
    const match = String(r['Fecha'] || '').match(/(\d{4})$/);
    return match ? match[1] : '';
  }
);
