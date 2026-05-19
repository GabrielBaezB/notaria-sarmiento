//component/Hero.jsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  { src: '/carrusel1.webp', alt: 'Fachada Notaría Sarmiento Moreno Valparaíso' },
  { src: '/carrusel2.webp', alt: 'Interior oficina notarial atención clientes' },
  { src: '/carrusel3.webp', alt: 'Documentos notariales escrituras poderes' },
  { src: '/carrusel4.webp', alt: 'Ubicación terminal buses Congreso Nacional' }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Delay el carrusel para no bloquear el render inicial
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Primer slide con prioridad alta para LCP */}
      <Image
        key={slides[0].src}
        src={slides[0].src}
        alt={slides[0].alt}
        fill
        sizes="100vw"
        className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        priority
        fetchPriority="high"
        quality={85}
      />
      {/* Resto de slides con lazy loading - solo cargar cuando se necesiten */}
      {isMounted && slides.slice(1).map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="100vw"
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === index + 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          loading="lazy"
          quality={75}
        />
      ))}

      {/* Texto encima - Optimizado para LCP */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 z-20">
        <div className="text-center text-notaria-blanco max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Notaría Sarmiento Moreno - Servicios Notariales en Valparaíso
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Frente al terminal de buses y a pasos del Congreso Nacional. Atención profesional, rápida y segura en Valparaíso.
          </p>
        </div>
      </div>
    </section>
  );
}
