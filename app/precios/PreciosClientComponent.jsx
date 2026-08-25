'use client';

import React, { useState, useEffect } from 'react';

export default function PreciosClientComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isBlurred, setIsBlurred] = useState(false);

  // 3. BLOQUEO DE EVENTOS JS Y 4. EFECTO BLUR AL PERDER FOCO
  useEffect(() => {
    // Bloquear menú contextual (clic derecho)
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Bloquear atajos de teclado
    const handleKeyDown = (e) => {
      // Impresión: Ctrl+P / Cmd+P
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Guardar página: Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ver Código Fuente: Ctrl+U / Cmd+U
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // F12 (Herramientas Dev)
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Herramientas de Inspección: Ctrl+Shift+I / J / C
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Captura de Pantalla: PrintScreen
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        setIsBlurred(true);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('');
        }
        return false;
      }
    };

    // Control de Foco para Blur (Mitigación Capturas / Alt+Tab / Recortes / Salida de cursor)
    const handleBlur = () => setIsBlurred(true);
    const handleFocus = () => setIsBlurred(false);
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        setIsBlurred(true);
      }
    };
    const handleMouseEnter = () => setIsBlurred(false);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // DATA DE PRECIOS EXTRAÍDA DE LOS PDFS
  const prestacionesGenerales = [
    { servicio: 'Autorización Firma Documento', detalle: 'Valor Base', precio: '$5.000' },
    { servicio: 'Autorización Firma Seguro Choque + Firma Electrónica F.E.A.', detalle: 'Incluye F.E.A.', precio: '$10.000' },
    { servicio: 'Autorización Instalar Vivienda / Empalme / Uso Comercial', detalle: 'Trámite Directo', precio: '$7.000' },
    { servicio: 'Declaración Expensas con Firma Electrónica F.E.A.', detalle: 'Incluye F.E.A.', precio: '$10.000' },
    { servicio: 'Autorización Trabajo Menor de Edad', detalle: 'Formato Estándar', precio: '$7.000' },
    { servicio: 'Autorización Salida del País (Uno o ambos padres)', detalle: 'Uno o más hijos', precio: '$15.000' },
    { servicio: 'Autorización Firma Contrato de Trabajo Firma Electrónica F.E.A.', detalle: 'Incluye F.E.A.', precio: '$15.000' },
    { servicio: 'Anexo Contrato (Empleador-Trabajador) F.E.A.', detalle: 'Incluye F.E.A.', precio: '$10.000' },
    { servicio: 'Vigencia Contrato (Empleador)', detalle: 'Certificación laboral', precio: '$8.000' },
    { servicio: 'Carta Renuncia Voluntaria', detalle: 'Formato Estándar', precio: '$5.000' },
    { servicio: 'Declaración Jurada Simple', detalle: 'Formato Estándar', precio: '$5.000' },
    { servicio: 'Firma Adicional en Declaración Jurada', detalle: 'Por firma extra', precio: '$2.000' },
    { servicio: 'Declaración Jurada Universidad / Acreditación', detalle: 'Uso Académico', precio: '$5.000' },
    { servicio: 'Declaración Licencia Médica (Ambos Padres)', detalle: '2 Firmantes', precio: '$7.000' },
    { servicio: 'Declaración Licencia Médica (1 Padre)', detalle: '1 Firmante', precio: '$5.000' },
    { servicio: 'Declaración Soltería', detalle: 'Con testigos', precio: '$5.000' },
    { servicio: 'Declaración Complejo Firma Electrónica F.E.A.', detalle: 'Incluye F.E.A.', precio: '$10.000' },
    { servicio: 'Declaración Divorcio (Redactada por partes)', detalle: 'Con 1 testigo', precio: '$7.000' },
    { servicio: 'Declaración Divorcio (Redactada en Notaría)', detalle: 'Con 1 testigo', precio: '$7.000' },
    { servicio: 'Carta Poder: SII / Registro Civil (Redactada)', detalle: 'Trámites Generales', precio: '$7.000' },
    { servicio: 'Carta Poder: SII / Registro Civil (Redactada en Notaría)', detalle: 'Confección Notarial', precio: '$10.000' },
    { servicio: 'Carta Administración Propiedad (Redactada)', detalle: 'Uso Inmobiliario', precio: '$10.000' },
    { servicio: 'Carta Administración Propiedad (Redactada en Notaría)', detalle: 'Confección Notarial', precio: '$13.000' },
    { servicio: 'Carta Poder Bancario (Redactada)', detalle: 'Trámites Bancarios', precio: '$10.000' },
    { servicio: 'Carta Poder Bancario (Redactada en Notaría)', detalle: 'Confección Notarial', precio: '$13.000' },
    { servicio: 'Mandato de Pensión', detalle: 'Cobro de Pensión', precio: '$8.000' },
    { servicio: 'Carta Poder Venta Vehículo', detalle: 'Poder para Venta', precio: '$20.000' },
    { servicio: 'Firma Adicional en Carta Poder', detalle: 'Por persona adicional', precio: '$2.000' },
    { servicio: 'Cesión de Derechos Bienes Nacionales', detalle: 'Trámite Especial', precio: '$20.000' },
    { servicio: 'Carta de Invitación + Firma Electrónica F.E.A.', detalle: 'Extranjería / Visas', precio: '$10.000' },
  ];

  const documentosGenerales = [
    { servicio: 'Certificación Fotografía', detalle: 'Por unidad', precio: '$6.000 c/u' },
    { servicio: 'Cesión Derecho Cupo / Anticuarios', detalle: 'Trámite Privado', precio: '$20.000' },
    { servicio: 'Cesión Derecho Patente Comercial', detalle: 'Desde', precio: '$15.000' },
    { servicio: 'Comodato (Redactado en Notaría)', detalle: 'Confección Completa', precio: '$20.000' },
    { servicio: 'Comodato Privado (Partes) Redactado Notaría', detalle: 'Revisión y Firma', precio: '$20.000' },
    { servicio: 'Finiquito de Trabajo (2 Ejemplares)', detalle: 'Formato Estándar', precio: '$5.000' },
    { servicio: 'Finiquito de Trabajo (3 Ejemplares)', detalle: 'Formato Estándar', precio: '$6.000' },
    { servicio: 'Fotocopia Legalizada (Un Lado / Cédula Identidad)', detalle: 'Por carilla / documento', precio: '$2.000' },
    { servicio: 'Mutuo de Dinero', detalle: 'Desde', precio: '$20.000' },
    { servicio: 'Reconocimiento de Deuda', detalle: 'Desde', precio: '$15.000' },
    { servicio: 'Transacción Privada', detalle: 'Desde', precio: '$20.000' },
    { servicio: 'Autorización Letras y Pagarés (Solo Autorización Firma)', detalle: 'Documento Confeccionado', precio: '$5.000' },
    { servicio: 'Autorización Letras y Pagarés (Confeccionado en Notaría)', detalle: 'Redacción Notarial', precio: '$7.000' },
    { servicio: 'Compraventa de Especies y/o Negocio', detalle: 'Desde', precio: '$20.000' },
    { servicio: 'Compraventa de Vehículos Usados', detalle: 'Desde', precio: '$40.000' },
    { servicio: 'Promesa Compraventa de Vehículo', detalle: 'Desde', precio: '$20.000' },
    { servicio: 'Contrato Arrendamiento (Redactado en Notaría - 1 o 2 firmas)', detalle: 'F.E.A. Digitalizada incluida', precio: '$20.000' },
    { servicio: 'Contrato Arrendamiento (No Redactado - 1 o 2 firmas)', detalle: 'Solo Autorización Firmas', precio: '$15.000' },
    { servicio: 'Firma Anexa en Contrato Arrendamiento', detalle: 'Por firma adicional', precio: '$2.000' },
    { servicio: 'Carta Término Contrato (Redactada en Notaría)', detalle: 'Confección Notarial', precio: '$10.000' },
    { servicio: 'Carta Término Contrato (No Redactada)', detalle: 'Solo Autorización Firma', precio: '$5.000' },
  ];

  const escriturasPublicas = [
    { servicio: 'Compraventa Propiedad (Desde)', derechos: '$80.000 (+ Milaje)', redaccion: 'Redacción: $60.000 / Firma extra: $4.000' },
    { servicio: 'Promesa de Compraventa (Desde)', derechos: '$50.000', redaccion: 'Redacción: $60.000 / Firma extra: $4.000' },
    { servicio: 'Adjudicación', derechos: 'Valor CVTA + 25%', redaccion: 'Según tasación/monto' },
    { servicio: 'Autorización Conyugal para Vender', derechos: '$50.000', redaccion: 'Escritura Pública' },
    { servicio: 'Autorización Salir del País (Escritura Pública)', derechos: '$40.000 (1 firma) / $35.000 (2 firmas)', redaccion: 'Vía Escritura Pública' },
    { servicio: 'Acta Compromiso', derechos: '$35.000', redaccion: 'Escritura Pública' },
    { servicio: 'Cancelación / Cancelación y Alzamiento', derechos: '$45.000 a $85.000', redaccion: 'Según monto del alzamiento' },
    { servicio: 'Cesión Derechos Bienes (Hasta $3M)', derechos: '$30.000', redaccion: 'Hasta $3.000.000' },
    { servicio: 'Cesión Derechos Bienes (Hasta $6M)', derechos: '$50.000', redaccion: 'Hasta $6.000.000' },
    { servicio: 'Cesión Derechos Bienes (Hasta $10M)', derechos: '$60.000', redaccion: 'De $7M a $10.000.000' },
    { servicio: 'Cese de Convivencia', derechos: '$45.000', redaccion: 'Registro Civil / Notarial' },
    { servicio: 'Delegación de Mandato Especial', derechos: '$35.000', redaccion: 'Escritura Pública' },
    { servicio: 'Delegación de Mandato General', derechos: '$40.000', redaccion: 'Escritura Pública' },
    { servicio: 'Liquidación Sociedad Conyugal', derechos: 'Valor CVTA + 10%', redaccion: 'Base 1 inmueble: $200.000' },
    { servicio: 'Compraventa Cementerio / Sepultura', derechos: '$65.000', redaccion: 'Escritura Pública' },
    { servicio: 'Mandato Judicial', derechos: '$35.000', redaccion: 'Para Abogados' },
    { servicio: 'Mandato Especial', derechos: '$45.000', redaccion: 'Escritura Pública' },
    { servicio: 'Mandato General', derechos: '$50.000', redaccion: 'Amplias facultades' },
    { servicio: 'Mandato General Bancario', derechos: '$40.000', redaccion: 'Para instituciones financieras' },
    { servicio: 'Permiso de Obra Nueva', derechos: '$50.000', redaccion: 'DOM / Municipalidad' },
    { servicio: 'Prohibición SERVIU', derechos: '$40.000', redaccion: 'Trámite Habitacional' },
    { servicio: 'Protocolización de Documento', derechos: '$30.000', redaccion: 'Ingreso a Registro Notarial' },
    { servicio: 'Reconocimiento de Hijo Natural', derechos: '$30.000', redaccion: 'Escritura Pública' },
    { servicio: 'Reducción a Escritura Pública', derechos: '$30.000', redaccion: 'Actas o Asambleas' },
    { servicio: 'Renuncia de Gananciales', derechos: '$45.000', redaccion: 'Escritura Pública' },
    { servicio: 'Revocación de Mandato', derechos: '$20.000', redaccion: 'Escritura Pública' },
    { servicio: 'Separación Total de Bienes', derechos: '$35.000', redaccion: 'Capitulaciones Matrimoniales' },
    { servicio: 'Servidumbre', derechos: '$80.000', redaccion: '2 firmas (+ $4.000 por firma extra)' },
    { servicio: 'Cuidado Personal de Menores', derechos: '$25.000', redaccion: 'Escritura Pública' },
    { servicio: 'Testamento Abierto (Cónyuges)', derechos: '$100.000', redaccion: 'Sujeto a complejidad' },
    { servicio: 'Testamento Cerrado', derechos: '$80.000', redaccion: 'Custodia en Notaría' },
    { servicio: 'Vigencia de Escritura Pública', derechos: '$20.000', redaccion: 'Certificación Notarial' },
    { servicio: 'Formulario 2890 (SII)', derechos: '$10.000', redaccion: 'Declaración Inmobiliaria' },
    { servicio: 'Escritura Rectificatoria / Aclaratoria', derechos: '$20.000', redaccion: 'Evaluación caso a caso' },
  ];

  const sociedades = [
    { tramo: 'Capital Hasta $3.000.000', arancel: '$100.000', obs: 'Valores sujeto a complejidad' },
    { tramo: 'Capital De $3.000.000 a $6.000.000', arancel: '$120.000', obs: 'Valores sujeto a complejidad' },
    { tramo: 'Capital De $6.000.000 a $7.500.000', arancel: '$140.000', obs: 'Valores sujeto a complejidad' },
    { tramo: 'Capital De $7.500.000 a $10.000.000', arancel: '$160.000', obs: 'Valores sujeto a complejidad' },
    { tramo: 'Capital De $10.000.000 a $20.000.000', arancel: '$200.000', obs: 'Valores sujeto a complejidad' },
  ];

  const filterRow = (rowStr) => {
    if (!searchTerm) return true;
    return rowStr.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <div className="select-none min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* OVERLAY DE DESENFOQUE (REQUERIMIENTO 4) */}
      {isBlurred && (
        <div
          onClick={() => setIsBlurred(false)}
          className="fixed inset-0 bg-slate-900/85 backdrop-blur-md z-[10000] flex items-center justify-center text-center p-6 cursor-pointer"
        >
          <div className="bg-[#1B2A41] border-2 border-[#C5A880] rounded-xl p-8 max-w-md shadow-2xl">
            <svg className="w-12 h-12 fill-[#C5A880] mx-auto mb-4" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <h3 className="text-xl font-bold text-[#C5A880] mb-2">Contenido Protegido</h3>
            <p className="text-sm text-slate-300">
              Haz clic sobre esta ventana para volver a visualizar la lista de aranceles notariales 2026.
            </p>
          </div>
        </div>
      )}

      <div className={`transition-all duration-200 flex-1 flex flex-col ${isBlurred ? 'blur-2xl opacity-20 pointer-events-none' : ''}`}>
        {/* HEADER */}
        <header className="bg-[#1B2A41] text-white py-6 px-4 text-center border-b-4 border-[#C5A880] shadow-md">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold uppercase text-[#C5A880] tracking-wide">
              Notaría Sarmiento Moreno
            </h1>
            <p className="text-sm md:text-base text-slate-200 mt-1">
              Aranceles y Lista de Precios 2026 — Valparaíso
            </p>
            {/* <span className="inline-block mt-2 bg-[#C5A880]/20 border border-[#C5A880] text-[#C5A880] px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Vista Protegida • NoIndex
            </span> */}
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="max-w-5xl w-full mx-auto px-4 py-6 flex-1">
          {/* HEADER SECCIÓN DE PRECIOS */}
          <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="relative flex-1 min-w-[260px]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar trámite o servicio..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#1B2A41]"
              />
              <svg className="w-4 h-4 fill-slate-400 absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'prestaciones', label: 'Prestaciones Generales' },
                { id: 'documentos', label: 'Documentos Generales' },
                { id: 'escrituras', label: 'Escrituras Públicas' },
                { id: 'sociedades', label: 'Sociedades' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat.id
                      ? 'bg-[#1B2A41] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* TABLA 1: PRESTACIONES GENERALES */}
          {(activeCategory === 'all' || activeCategory === 'prestaciones') && (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
              <div className="bg-[#1B2A41] text-white px-5 py-3 font-bold flex justify-between items-center text-sm md:text-base">
                <span>Prestaciones Generales</span>
                <span className="bg-[#C5A880] text-slate-900 text-xs px-2.5 py-0.5 rounded font-semibold">Aranceles 2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-[#1B2A41] font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3">Prestación / Servicio Notarial</th>
                      <th className="px-5 py-3">Detalle / Formato</th>
                      <th className="px-5 py-3">Valor (CLP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {prestacionesGenerales.filter((item) => filterRow(`${item.servicio} ${item.detalle} ${item.precio}`)).map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3.5 font-medium text-slate-900">{item.servicio}</td>
                        <td className="px-5 py-3.5 text-xs text-slate-500 italic">{item.detalle}</td>
                        <td className="px-5 py-3.5 font-bold text-[#1B2A41] whitespace-nowrap">{item.precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TABLA 2: DOCUMENTOS GENERALES */}
          {(activeCategory === 'all' || activeCategory === 'documentos') && (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
              <div className="bg-[#1B2A41] text-white px-5 py-3 font-bold flex justify-between items-center text-sm md:text-base">
                <span>Documentos Generales, Arrendamientos y Vehículos</span>
                <span className="bg-[#C5A880] text-slate-900 text-xs px-2.5 py-0.5 rounded font-semibold">Aranceles 2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-[#1B2A41] font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3">Documento / Contrato</th>
                      <th className="px-5 py-3">Condición / Redacción</th>
                      <th className="px-5 py-3">Valor (CLP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {documentosGenerales.filter((item) => filterRow(`${item.servicio} ${item.detalle} ${item.precio}`)).map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3.5 font-medium text-slate-900">{item.servicio}</td>
                        <td className="px-5 py-3.5 text-xs text-slate-500 italic">{item.detalle}</td>
                        <td className="px-5 py-3.5 font-bold text-[#1B2A41] whitespace-nowrap">{item.precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TABLA 3: ESCRITURAS PÚBLICAS */}
          {(activeCategory === 'all' || activeCategory === 'escrituras') && (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
              <div className="bg-[#1B2A41] text-white px-5 py-3 font-bold flex justify-between items-center text-sm md:text-base">
                <span>Escrituras Públicas y Promesas</span>
                <span className="bg-[#C5A880] text-slate-900 text-xs px-2.5 py-0.5 rounded font-semibold">Aranceles 2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-[#1B2A41] font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3">Tipo de Escritura Pública</th>
                      <th className="px-5 py-3">Derechos Notariales</th>
                      <th className="px-5 py-3">Redacción / Adicionales</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {escriturasPublicas.filter((item) => filterRow(`${item.servicio} ${item.derechos} ${item.redaccion}`)).map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3.5 font-medium text-slate-900">{item.servicio}</td>
                        <td className="px-5 py-3.5 font-bold text-[#1B2A41] whitespace-nowrap">{item.derechos}</td>
                        <td className="px-5 py-3.5 text-xs text-slate-500 italic">{item.redaccion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TABLA 4: SOCIEDADES */}
          {(activeCategory === 'all' || activeCategory === 'sociedades') && (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
              <div className="bg-[#1B2A41] text-white px-5 py-3 font-bold flex justify-between items-center text-sm md:text-base">
                <span>Constitución y Modificación de Sociedades</span>
                <span className="bg-[#C5A880] text-slate-900 text-xs px-2.5 py-0.5 rounded font-semibold">Aranceles 2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-[#1B2A41] font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-3">Tramo del Capital Social</th>
                      <th className="px-5 py-3">Arancel Notarial</th>
                      <th className="px-5 py-3">Observaciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sociedades.filter((item) => filterRow(`${item.tramo} ${item.arancel} ${item.obs}`)).map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3.5 font-medium text-slate-900">{item.tramo}</td>
                        <td className="px-5 py-3.5 font-bold text-[#1B2A41] whitespace-nowrap">{item.arancel}</td>
                        <td className="px-5 py-3.5 text-xs text-slate-500 italic">{item.obs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>

        <footer className="bg-[#0F172A] text-slate-400 text-center py-4 px-4 text-xs border-t border-slate-800">
          Notaría Sarmiento Moreno — Prat 856 / Chacabuco 1845, Valparaíso | Documento Protegido © 2026
        </footer>
      </div>
    </div>
  );
}
