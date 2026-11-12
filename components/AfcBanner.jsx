import Image from 'next/image';

export default function AfcBanner() {
  return (
    <section
      aria-label="Alianza Notaría en Línea - AFC Chile Seguro de Cesantía"
      className="relative bg-white border-b-4 border-afc-celeste shadow-sm overflow-hidden"
    >
      {/* Franja superior decorativa con colores oficiales AFC */}
      <div className="h-1.5 w-full bg-gradient-to-r from-afc-azul via-afc-celeste to-afc-azul" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Sello oficial sobre contenedor blanco respetando cuadratura del Manual de Marca */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
            <div className="flex-shrink-0 bg-white p-3 rounded-2xl">
              <Image
                src="/afc/sello-notaria-en-linea-afc.png"
                alt="Sello Oficial Notaría en Línea - AFC Chile Seguro de Cesantía"
                width={116}
                height={116}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#E6F4FA] text-afc-azul text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                <span className="w-2 h-2 rounded-full bg-afc-celeste"></span>
                Notaría en Línea • Seguro de Cesantía
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-afc-azul leading-snug">
                Al firmar su finiquito con nosotros y dar su consentimiento,{' '}
                <span className="inline-block bg-[#CBE8F8] text-afc-azul font-extrabold px-2.5 py-0.5 rounded-full">
                  sus datos quedan disponibles
                </span>{' '}
                para facilitar la solicitud del Seguro de Cesantía en{' '}
                <span className="font-extrabold underline decoration-afc-celeste">
                  afc.cl
                </span>
              </h2>
            </div>
          </div>

          {/* Botón de acción */}
          <div className="flex items-center justify-center flex-shrink-0">
            <a
              href="https://www.afc.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-afc-azul bg-afc-azul hover:bg-white text-white hover:text-afc-azul font-extrabold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md text-base sm:text-lg"
            >
              <span>Ir a afc.cl</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

