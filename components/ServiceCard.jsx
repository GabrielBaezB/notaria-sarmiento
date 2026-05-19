// components/ServiceCard.jsx
'use client';

import { HiX, HiOutlineCheckCircle, HiOutlineInformationCircle } from 'react-icons/hi';

export default function ServiceCard({ servicio, isActive, onClick }) {
  const { title, icon: Icon, requisitos } = servicio;

  return (
    <div
      className={`
        group cursor-pointer bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg 
        hover:shadow-2xl hover:shadow-notaria-dorado/20
        border border-gray-200/50 hover:border-notaria-dorado/60
        transition-all duration-500 ease-out transform 
        hover:-translate-y-2 hover:scale-[1.02]
        flex flex-col justify-between items-center
        p-8 relative overflow-hidden min-h-[380px] max-h-[480px]
        ${isActive ? 'ring-2 ring-notaria-dorado/50 shadow-xl' : ''}
      `}
      onClick={(e) => {
        if (servicio.href) {
          window.open(servicio.href, '_blank');
        } else if (onClick) {
          onClick();
        }
      }}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      
      {/* Efecto shimmer adicional */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                      -translate-x-full group-hover:animate-shimmer opacity-0 group-hover:opacity-100"></div>
      
      {/* ICONO EN CÍRCULO GRADIENTE MEJORADO */}
      <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full
                      bg-gradient-to-br from-notaria-dorado/20 via-notaria-dorado/30 to-notaria-dorado/40
                      shadow-lg shadow-notaria-dorado/20 
                      transition-all duration-500 ease-out 
                      group-hover:from-notaria-dorado/30 group-hover:via-notaria-dorado/40 group-hover:to-notaria-dorado/50
                      group-hover:shadow-xl group-hover:shadow-notaria-dorado/30
                      group-hover:scale-110">
        <Icon className="text-notaria-dorado text-3xl transition-all duration-500 group-hover:text-4xl" aria-hidden="true" />
      </div>

      {/* TÍTULO MEJORADO */}
      <h3 className="text-xl md:text-2xl font-bold text-notaria-azul text-center mb-4 
                     group-hover:text-notaria-dorado transition-all duration-500 ease-out
                     leading-tight">
        {title}
      </h3>

      {/* SUBRAYADO ANIMADO MEJORADO */}
      <div className="relative w-16 h-1 mb-6">
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-notaria-dorado to-notaria-azul 
                        rounded-full group-hover:w-full transition-all duration-700 ease-out"></div>
      </div>

      {/* DESCRIPCIÓN BREVE MEJORADA */}
      <div className="flex items-center gap-2 text-gray-500 text-center text-sm mb-6 
                      group-hover:text-notaria-dorado transition-colors duration-300">
        <HiOutlineInformationCircle className="w-4 h-4" />
        <span className="hidden md:block">Toca para ver requisitos</span>
        <span className="md:hidden">Ver requisitos</span>
      </div>

      {/* CONTADOR DE REQUISITOS */}
      <div className="mt-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-notaria-gris/50 rounded-full
                        group-hover:bg-notaria-dorado/20 transition-all duration-300">
          <HiOutlineCheckCircle className="w-4 h-4 text-notaria-dorado" />
          <span className="text-sm font-medium text-notaria-azul">
            {requisitos?.length || 0} requisitos
          </span>
        </div>
      </div>

      {/* REQUISITOS MODAL MEJORADO */}
      {isActive && (
        <div
          className="absolute inset-0 bg-white/98 backdrop-blur-md rounded-3xl p-8 shadow-2xl z-20 
                     overflow-auto max-h-[70vh] border border-notaria-dorado/20
                     animate-slide-in-bottom"
          onClick={e => e.stopPropagation()}
        >
          {/* Header del modal */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h5 className="flex items-center gap-3 text-notaria-azul font-bold text-lg">
              <div className="w-10 h-10 rounded-full bg-notaria-dorado/20 flex items-center justify-center">
                <Icon className="text-notaria-dorado text-xl" />
              </div>
              Requisitos
            </h5>
            <button
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full
                         transition-all duration-200 hover:scale-110"
              onClick={e => { e.stopPropagation(); onClick(); }}
              aria-label="Cerrar requisitos"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Lista de requisitos mejorada */}
          <div className="space-y-4">
            {requisitos && requisitos.length > 0 ? (
              requisitos.map((req, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-notaria-gris/30 rounded-xl
                                       hover:bg-notaria-dorado/10 transition-all duration-200">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-notaria-dorado/20 
                                  flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-notaria-dorado">{i + 1}</span>
                  </div>
                  <p className="text-notaria-azul text-sm leading-relaxed">{req}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <HiOutlineCheckCircle className="w-12 h-12 mx-auto mb-3 text-notaria-dorado/50" />
                <p>No hay requisitos específicos para este servicio.</p>
              </div>
            )}
          </div>

          {/* Footer del modal */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Para más información, contacta directamente con nuestra notaría
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
