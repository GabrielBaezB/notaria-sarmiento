'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AvisoTurnoFebrero() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya cerró el aviso en esta sesión
    const dismissed = sessionStorage.getItem('aviso-turno-febrero-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('aviso-turno-febrero-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-notaria-azul via-blue-800 to-notaria-azul text-notaria-blanco py-3 px-4 sm:py-4 sm:px-6 shadow-lg relative z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3">
              <div className="flex-shrink-0 mt-1 sm:mt-0">
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-notaria-dorado animate-pulse-slow" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 leading-tight">
                  🗓️ Notaría de Turno - Febrero 2026
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-snug">
                  Estaremos de turno durante todo el mes de febrero.{' '}
                  <span className="block sm:inline font-semibold text-notaria-dorado mt-1 sm:mt-0 sm:ml-2">
                    Horario: 9:30 - 14:00 (horario continuo)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              href="/turno-febrero"
              className="bg-notaria-dorado hover:bg-yellow-600 text-notaria-azul font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded transition-colors duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              Ver más
            </Link>
            <button
              onClick={handleClose}
              className="text-notaria-blanco hover:text-notaria-dorado transition-colors duration-300 text-xl sm:text-2xl font-bold leading-none p-1 flex-shrink-0"
              aria-label="Cerrar aviso"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
