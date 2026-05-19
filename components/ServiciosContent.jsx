'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SERVICIOS } from '../utils/servicios';

export default function ServiciosContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const serviciosPrincipales = [
    {
      title: 'Poder Simple',
      description: 'Autorización para realizar trámites en nombre de otra persona',
      url: '/servicios/poder-simple',
      icon: '📋'
    },
    {
      title: 'Autorización de Viaje para Menores',
      description: 'Permiso notarial para viajes al extranjero de menores de edad',
      url: '/servicios/autorizacion-menores',
      icon: '✈️'
    },
    {
      title: 'Venta de Inmueble',
      description: 'Formalización de compraventa de propiedades mediante escritura pública',
      url: '/servicios/venta-inmueble',
      icon: '🏠'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
          <li>/</li>
          <li className="text-gray-600">Servicios</li>
        </ol>
      </nav>

      <article>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
            Servicios Notariales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En la Notaría Sarmiento Moreno ofrecemos todos los servicios notariales 
            que necesitas en Valparaíso, con atención profesional y personalizada.
          </p>
        </header>

        {/* Servicios Principales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Servicios Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviciosPrincipales.map((servicio, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-notaria-azul">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {servicio.description}
                </p>
                <Link 
                  href={servicio.url}
                  className="inline-block bg-notaria-dorado text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Ver más
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Todos los Servicios */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Todos Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS.map((servicio, index) => {
              const CardContent = (
                <div className={`bg-gray-50 rounded-lg p-6 border h-full ${servicio.href ? 'border-notaria-dorado/50 hover:border-notaria-dorado hover:shadow-md transition-all cursor-pointer' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl text-notaria-azul mr-3">📋</span>
                    <h3 className="text-lg font-semibold text-notaria-azul">
                      {servicio.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Documentos Requeridos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {servicio.requisitos.slice(0, 3).map((requisito, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-notaria-dorado mr-2">•</span>
                          {requisito}
                        </li>
                      ))}
                      {servicio.requisitos.length > 3 && (
                        <li className="text-notaria-dorado font-medium">
                          +{servicio.requisitos.length - 3} más...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              );

              if (servicio.href) {
                return (
                  <a key={index} href={servicio.href} target="_blank" rel="noopener noreferrer" className="block outline-none">
                    {CardContent}
                  </a>
                );
              }

              return <div key={index}>{CardContent}</div>;
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center bg-notaria-azul text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas un servicio notarial?
          </h2>
          <p className="mb-6">
                            Visítanos en Chacabuco 2845, Valparaíso<br />
            Frente al terminal de buses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+56512595840" 
              className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              📞 Llamar: +56 51 2595840
            </a>
            <a 
              href="tel:+56322548174" 
              className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              📞 Llamar: +56 32 2548174
            </a>
          </div>
        </section>
      </article>
    </main>
  );
} 