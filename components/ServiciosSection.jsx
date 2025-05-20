"use client";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { SERVICIOS } from "../utils/servicios";

export default function ServiciosSection() {
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [servicioActivo, setServicioActivo] = useState(null);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="servicios" className="py-20 px-6 bg-notaria-gris">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-notaria-azul mb-12">
          Servicios Notariales
        </h3>
        {isClient && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICIOS.map((servicio, index) => (
              <ServiceCard
                key={index}
                servicio={servicio}
                isActive={servicioActivo === index}
                onClick={
                  () =>
                    setServicioActivo(servicioActivo === index ? null : index)
                }
                isDesktop={isDesktop}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}