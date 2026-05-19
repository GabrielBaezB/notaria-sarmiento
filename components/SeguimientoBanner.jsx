import React from 'react';

export default function SeguimientoBanner() {
  return (
    <section className="bg-gradient-to-r from-notaria-azul to-blue-900 py-8 px-6 border-b-4 border-notaria-dorado">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6 mb-6 md:mb-0">
          <div className="hidden sm:flex bg-white/10 p-4 rounded-full border border-white/20 shadow-lg">
            <svg className="w-10 h-10 text-notaria-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              ¿Quieres revisar el estado de tu trámite?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl">
              Haz seguimiento en línea a tus escrituras y documentos de manera rápida, fácil y segura a través de nuestro portal web.
            </p>
          </div>
        </div>
        <a 
          href="https://gesnot.cl/seguimiento/clientes/login.jsp?notaria=58" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center bg-notaria-dorado text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-xl overflow-hidden whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center">
            Ir al Seguimiento Web
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        </a>
      </div>
    </section>
  );
}
