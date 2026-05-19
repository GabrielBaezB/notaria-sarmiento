const fs = require('fs');
const path = require('path');

const TSV_PATH = path.join(__dirname, '../nuevos-datos.txt');
const JSON_PATH = path.join(__dirname, '../public/data.json');

async function importData() {
  console.log('====================================================');
  console.log('🏢 Script de Importación de Escrituras (Modo Sin Red / TXT)');
  console.log('====================================================');

  if (!fs.existsSync(TSV_PATH)) {
    console.error(`\n[❌ ERROR] No se encontró el archivo de datos.`);
    console.log(`👉 Como tienes problemas de red en WSL, lo haremos nativamente:`);
    console.log(`   Guarda tu Excel usando "Guardar como..." > "Texto (delimitado por tabulaciones) (*.txt)"`);
    console.log(`   Asegúrate de nombrarlo exactamente como: "nuevos-datos.txt"`);
    process.exit(1);
  }

  console.log('⏳ Leyendo archivo de texto...');
  const buffer = fs.readFileSync(TSV_PATH);
  
  // Soporte universal para archivos exportados de Excel (incluyendo UTF-16 LE / Texto Unicode)
  let fileContent;
  if (buffer.length >= 2 && buffer[0] === 0xFF && buffer[1] === 0xFE) {
    fileContent = buffer.toString('utf16le');
  } else {
    fileContent = buffer.toString('utf-8');
  }
  
  // Limpieza de caracteres nulos residuales
  fileContent = fileContent.replace(/\0/g, '');

  const lines = fileContent.split(/\r?\n/);
  
  if (lines.length < 2) {
    console.log('\n[⚠️ AVISO] El archivo de texto está vacío. Terminando.');
    return;
  }

  const headers = lines[0].split('\t').map(h => h.trim());
  
  // Búsqueda flexible de columnas para prevenir errores de codificación al exportar desde Excel
  let idxAno = headers.findIndex(h => h.toLowerCase().includes('ano') || h.toLowerCase().includes('año') || h.includes('◊') || h.includes('Ao'));
  if (idxAno === -1) idxAno = 2; // Por defecto columna 3 (índice 2)
  
  let idxRepertorio = headers.findIndex(h => h.toLowerCase().includes('repertorio'));
  if (idxRepertorio === -1) idxRepertorio = 1;

  let idxFecha = headers.findIndex(h => h.toLowerCase().includes('fecha'));
  let idxMateria = headers.findIndex(h => h.toLowerCase().includes('materia'));
  let idxNombre1 = headers.findIndex(h => h.toLowerCase().includes('nombre 1'));
  let idxNombre2 = headers.findIndex(h => h.toLowerCase().includes('nombre 2'));

  console.log(`⚙️ Procesando ${lines.length - 1} filas encontradas...`);
  const newRecords = [];

  // Función para remover comillas envolventes típicas de exportación Excel
  const cleanCell = (val) => {
    let v = val ? String(val).trim() : '';
    if (v.startsWith('"') && v.endsWith('"') && v.length >= 2) {
      v = v.substring(1, v.length - 1).replace(/""/g, '"');
    }
    return v.trim();
  };

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    const row = line.split('\t');
    const recAno = cleanCell(row[idxAno]);
    const recRep = cleanCell(row[idxRepertorio]);
    
    if (!recAno || !recRep) continue;

    const newRecord = {
      'ano': recAno,
      'Numero de repertorio': recRep,
      'Fecha de escritura': idxFecha >= 0 ? cleanCell(row[idxFecha]) : '',
      'materia': idxMateria >= 0 ? cleanCell(row[idxMateria]) : '',
      'Compareciente 1': idxNombre1 >= 0 ? cleanCell(row[idxNombre1]) : '',
      'Compareciente 2': idxNombre2 >= 0 ? cleanCell(row[idxNombre2]) : ''
    };
    newRecords.push(newRecord);
  }

  console.log(`✅ Se validaron ${newRecords.length} registros de nuevos-datos.txt.`);
  console.log('\n⏳ Cargando base de datos histórica...');
  
  let currentData = [];
  if (fs.existsSync(JSON_PATH)) {
    const rawJson = fs.readFileSync(JSON_PATH, 'utf-8');
    try {
      currentData = JSON.parse(rawJson);
      
      // 🔥 LIMPIEZA DE AUTOSANACIÓN: Purga los registros corruptos (ej. \u0000) 
      const initialLength = currentData.length;
      currentData = currentData.filter(r => !String(r['ano']).includes('\u0000') && !String(r['Numero de repertorio']).includes('\u0000'));
      const purged = initialLength - currentData.length;
      if (purged > 0) console.log(`🧹 Autosanación activada: Se eliminaron ${purged} registros basura de ejecuciones anteriores.`);
      
    } catch (e) {
      console.error('\n[❌ ERROR] El archivo data.json actual está corrupto.');
      process.exit(1);
    }
  }

  const recordMap = new Map();
  for (const record of currentData) {
    const key = `${String(record['ano']).trim()}-${String(record['Numero de repertorio']).trim()}`;
    recordMap.set(key, record);
  }

  let agregados = 0;
  let actualizados = 0;

  for (const record of newRecords) {
    const key = `${record['ano']}-${record['Numero de repertorio']}`;
    if (recordMap.has(key)) {
      actualizados++; 
    } else {
      agregados++; 
    }
    recordMap.set(key, record); 
  }

  const finalData = Array.from(recordMap.values());
  console.log('🔄 Ordenando por año y repertorio...');
  
  finalData.sort((a, b) => {
    const anoA = parseInt(a['ano']) || 0;
    const anoB = parseInt(b['ano']) || 0;
    if (anoB !== anoA) return anoB - anoA; 
    
    const repA = parseInt(a['Numero de repertorio']) || 0;
    const repB = parseInt(b['Numero de repertorio']) || 0;
    return repB - repA; 
  });

  console.log('💾 Guardando archivo final en data.json...');
  fs.writeFileSync(JSON_PATH, JSON.stringify(finalData, null, 4), 'utf-8');

  console.log(`\n🎉 ¡ÉXITO! Operación completada.`);
  console.log(`- Registros en la web antes de actualizar: ${currentData.length}`);
  console.log(`- Registros "pisados"/actualizados: ${actualizados}`);
  console.log(`- REPERTORIOS NUEVOS agregados: ${agregados}`);
  console.log(`🔥 Total final de escrituras publicadas: ${finalData.length}\n`);
}

importData().catch(err => {
  console.error('\n[❌ ERROR INESPERADO]', err);
  process.exit(1);
});
