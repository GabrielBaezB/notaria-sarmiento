'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  '/carrusel1.webp',
  '/carrusel2.webp',
  '/carrusel3.webp',
  '/carrusel4.webp',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Todos los slides renderizados pero solo uno visible */}
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          sizes="100vw"
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          priority={index === 0} 
        />
      ))}

      {/* Texto encima */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 z-20">
        <div className="text-center text-notaria-blanco max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Notaría Sarmiento Moreno
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Frente al terminal de buses y a pasos del Congreso Nacional. Atención profesional, rápida y segura en Valparaíso.
          </p>
        </div>
      </div>
    </section>
  );
}
