import React from 'react';
import PreciosClientComponent from './PreciosClientComponent';

// 1. OCULTACIÓN Y SEO (REQUERIMIENTO 1)
export const metadata = {
  title: 'Notaría Sarmiento Moreno - Aranceles y Precios 2026',
  description: 'Lista oficial de aranceles y precios notariales 2026 de la Notaría Sarmiento Moreno en Valparaíso.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

// 2. BLOQUEO DE ZOOM EN DISPOSITIVOS MÓVILES (REQUERIMIENTO 2)
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function PreciosPage() {
  return <PreciosClientComponent />;
}
