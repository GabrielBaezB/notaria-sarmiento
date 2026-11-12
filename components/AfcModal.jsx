'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'afc-modal-dismissed-v1';

export default function AfcModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // Ignorar errores de sessionStorage en modo privado restringido
    }
  }, []);

  useEffect(() => {
    // Mostrar automáticamente al ingresar a la web si no ha sido cerrado en esta sesión
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed !== 'true') {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 400);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // Permitir abrir el modal desde el banner o desde el sello del footer en cualquier momento
    const handleOpenEvent = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-afc-modal', handleOpenEvent);
    return () => window.removeEventListener('open-afc-modal', handleOpenEvent);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="afc-modal-title"
      onClick={handleClose}
    >
      <div
        className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior de controles */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 bg-white z-10 relative">
          <div className="inline-flex items-center gap-1.5 bg-[#E6F4FA] text-afc-azul text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-afc-celeste"></span>
            Alianza Oficial AFC Chile
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors text-xl font-bold leading-none"
            aria-label="Cerrar aviso de AFC"
          >
            ×
          </button>
        </div>

        {/* Vista siguiendo el Manual de Marca AFC */}
        <div className="px-6 pt-2 pb-12 text-center relative">
          {/* Contenedor del Sello Oficial respetando la cuadratura / área de resguardo sobre fondo blanco */}
          <div className="mx-auto my-2 p-4 flex items-center justify-center bg-white">
            <Image
              src="/afc/sello-notaria-en-linea-afc.png"
              alt="Sello Notaría en Línea - AFC Chile Seguro de Cesantía"
              width={210}
              height={210}
              className="w-44 h-44 sm:w-52 sm:h-52 object-contain select-none"
              priority
            />
          </div>

          {/* Mensaje oficial del afiche AFC */}
          <div className="mt-2 space-y-2 text-afc-azul">
            <h2 id="afc-modal-title" className="sr-only">
              Notaría en Línea - Alianza Seguro de Cesantía AFC Chile
            </h2>
            <p className="text-lg sm:text-xl font-normal leading-snug">
              Al firmar su finiquito con nosotros
              <br />y dar su consentimiento,
            </p>

            <div className="inline-block bg-[#CBE8F8] px-5 py-1.5 rounded-full my-1">
              <p className="text-lg sm:text-xl font-extrabold text-afc-azul tracking-tight">
                sus datos quedan disponibles
              </p>
            </div>

            <p className="text-lg sm:text-xl font-normal leading-snug">
              para facilitar la solicitud del
              <br />
              Seguro de Cesantía en
            </p>
          </div>

          {/* Botón principal estilo afiche oficial hacia afc.cl */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href="https://www.afc.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border-2 border-afc-azul bg-white hover:bg-afc-azul text-afc-azul hover:text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Visitar sitio web de AFC Chile (afc.cl)"
            >
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                afc.cl
              </span>
              {/* Icono de clic / mano inspirado en el afiche oficial */}
              <svg
                className="w-8 h-8 text-afc-azul group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12" />
                <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0V12" />
                <path d="M14 10.5a1.5 1.5 0 0 1 3 0V12" />
                <path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.867 1.867 0 0 1 2.28.28L8 13" />
                <path d="M5 3l1 1" />
                <path d="M9 1v2" />
                <path d="M13 3l-1 1" />
              </svg>
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="text-xs text-afc-gris hover:text-afc-azul font-medium pt-1 transition-colors"
            >
              Continuar al sitio de la Notaría
            </button>
          </div>

          {/* Ondas inferiores oficiales del afiche (Celeste AFC #00B6D8 y Azul AFC #0E509E) */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-8">
            <svg
              viewBox="0 0 500 60"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,15 C150,55 350,0 500,25 L500,60 L0,60 Z"
                fill="#00B6D8"
              />
              <path
                d="M0,30 C180,65 320,20 500,35 L500,60 L0,60 Z"
                fill="#0E509E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

