//components/ServiciosSection.jsx
"use client";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { SERVICIOS } from "../utils/servicios";

export default function ServiciosSection() {
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [servicioActivo, setServicioActivo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Animación de entrada
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="servicios" className="relative py-24 px-6 bg-gradient-to-br from-notaria-gris via-white to-notaria-gris overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-notaria-dorado rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-notaria-azul rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-notaria-dorado rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-notaria-azul rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-notaria-dorado rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-notaria-dorado/30 rounded-full animate-float delay-1000"></div>
      <div className="absolute bottom-10 right-1/3 w-2 h-2 bg-notaria-azul/40 rounded-full animate-bounce-gentle delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header mejorado */}
        <div className={`transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-notaria-dorado"></div>
            <span className="text-notaria-dorado font-medium text-sm uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <div className="w-8 h-0.5 bg-notaria-dorado"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-notaria-azul mb-6 leading-tight">
            Servicios Notariales
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Ofrecemos una amplia gama de servicios notariales con la profesionalidad y confianza que su documentación requiere
          </p>
        </div>

        {/* Grid de servicios mejorado */}
        {isClient && (
          <div className={`transition-all duration-1000 ease-out delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {SERVICIOS.filter(s => s.title !== 'Tarifas Notariales').map((servicio, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out transform ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <ServiceCard
                    servicio={servicio}
                    isActive={servicioActivo === index}
                    onClick={() => setServicioActivo(servicioActivo === index ? null : index)}
                    isDesktop={isDesktop}
                  />
                </div>
              ))}
            </div>
            
            {/* Footer informativo */}
            <div className={`mt-16 transition-all duration-1000 ease-out delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <p className="text-gray-600 text-center">
                  <span className="font-semibold text-notaria-azul">{SERVICIOS.filter(s => s.title !== 'Tarifas Notariales').length} servicios</span> disponibles. 
                  Haz clic en cualquier tarjeta para ver los requisitos detallados.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}