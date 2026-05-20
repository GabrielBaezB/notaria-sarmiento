"use client";

import { useEffect } from 'react';

export default function KioskInactivityTimer() {
  useEffect(() => {
    let timeoutId;
    // 3 minutos = 180,000 ms
    const INACTIVITY_TIME = 180000;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Redirigir a las cápsulas cuando expira el tiempo de inactividad
        window.location.href = '/capsulas/index.html';
      }, INACTIVITY_TIME);
    };

    // Eventos a escuchar para resetear el temporizador
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];

    // Iniciar el temporizador por primera vez
    resetTimer();

    // Agregar listeners
    events.forEach(event => {
      window.addEventListener(event, resetTimer, { passive: true });
    });

    // Cleanup al desmontar
    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);

  return null; // Este componente no renderiza nada visible
}
