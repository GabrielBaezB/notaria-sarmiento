// components/ServiceCard.jsx
'use client';

import { HiX, HiOutlineCheckCircle } from 'react-icons/hi';

export default function ServiceCard({ servicio, isActive, onClick }) {
  const { title, icon: Icon, requisitos } = servicio;

  return (
    <div
      className={
        `group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl
         border border-gray-200 hover:border-notaria-dorado
         transition-all duration-300 transform hover:-translate-y-1
         flex flex-col justify-between items-center
         p-8 relative overflow-hidden min-h-[350px] max-h-[460px]`
      }
      onClick={onClick}
    >
      {/* ICONO EN CÍRCULO GRADIENTE */}
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full
                          bg-gradient-to-br from-notaria-dorado/20 to-notaria-dorado/40
                          shadow-inner transition-all duration-300 group-hover:from-notaria-dorado/30 group-hover:to-notaria-dorado/50">
        <Icon className="text-notaria-dorado text-3xl" aria-hidden="true" />
      </div>

      {/* TÍTULO */}
      <h4 className="text-2xl md:text-3xl font-semibold text-notaria-azul text-center mb-3 group-hover:text-notaria-dorado transition-colors duration-300">
        {title}
      </h4>

      {/* SUBRAYADO ANIMADO */}
      <div className="relative w-10 h-1 mb-4">
        <div
          className="absolute bottom-0 left-0 h-1 w-0 bg-notaria-dorado rounded-full group-hover:w-full transition-all duration-500 ease-in-out"
        ></div>
      </div>

      {/* DESCRIPCIÓN BREVE */}
      <p className="text-gray-600 text-center text-sm mb-6 hidden md:block">
        Toca para ver requisitos
      </p>

      {/* REQUISITOS */}
      {isActive && (
        <div
          className="absolute inset-0 bg-notaria-blanco/95 rounded-2xl p-6 shadow-inner z-20 overflow-auto max-h-[70vh]"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-red-600"
            onClick={e => { e.stopPropagation(); onClick(); }}
            aria-label="Cerrar requisitos"
          >
            <HiX className="w-6 h-6" />
          </button>
          <h5 className="flex items-center gap-2 text-notaria-azul font-semibold mb-4">
            <HiOutlineCheckCircle className="text-notaria-dorado" /> Requisitos
          </h5>
          <ul className="list-decimal list-inside space-y-2 text-notaria-azul text-sm text-left">
            {requisitos && requisitos.length > 0 ? (
              requisitos.map((req, i) => <li key={i}>{req}</li>)
            ) : (
              <li>No hay requisitos para este servicio.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
