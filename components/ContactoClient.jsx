'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineOfficeBuilding } from 'react-icons/hi';

export default function ContactoClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
          <li>/</li>
          <li className="text-gray-600">Contacto</li>
        </ol>
      </nav>

      <article>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ponte en contacto con la Notaría Sarmiento Moreno. Estamos aquí para ayudarte.
          </p>
        </header>

        {/* Información de Contacto Principal */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-notaria-azul mb-6 text-notaria-dorado">
                  <HiOutlinePhone className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-notaria-azul">
                  Información de Contacto
                </h2>
                <div className="w-24 h-1 bg-notaria-dorado mx-auto mt-6 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Columna Ubicación */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <HiOutlineLocationMarker className="w-7 h-7 text-notaria-dorado" />
                    <h3 className="text-xl font-bold text-notaria-azul">
                      Ubicación
                    </h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Dirección Oficial</p>
                      <p className="text-lg text-gray-800 font-medium">Chacabuco 2845</p>
                      <p className="text-gray-600">Valparaíso, Chile</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Referencia</p>
                      <p className="text-gray-700 flex items-center gap-2">
                        <HiOutlineOfficeBuilding className="w-5 h-5 text-gray-400" />
                        Frente al terminal de buses
                      </p>
                    </div>
                  </div>
                </div>

                {/* Columna Teléfonos */}
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <HiOutlinePhone className="w-7 h-7 text-notaria-dorado" />
                    <h3 className="text-xl font-bold text-notaria-azul">
                      Teléfonos
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Teléfono 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Línea Principal</p>
                        <p className="text-lg font-bold text-notaria-azul">+56 32 2548174</p>
                      </div>
                      <a 
                        href="tel:+56322548174"
                        className="inline-flex items-center justify-center gap-2 bg-notaria-dorado/20 hover:bg-notaria-dorado text-notaria-azul px-4 py-2 rounded-md font-semibold transition-all duration-200 w-full sm:w-auto text-sm"
                      >
                        <HiOutlinePhone className="w-4 h-4" />
                        Llamar
                      </a>
                    </div>

                    {/* Teléfono 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Línea Secundaria</p>
                        <p className="text-lg font-bold text-notaria-azul">+56 51 2595840</p>
                      </div>
                      <a 
                        href="tel:+56512595840"
                        className="inline-flex items-center justify-center gap-2 bg-notaria-dorado/20 hover:bg-notaria-dorado text-notaria-azul px-4 py-2 rounded-md font-semibold transition-all duration-200 w-full sm:w-auto text-sm"
                      >
                        <HiOutlinePhone className="w-4 h-4" />
                        Llamar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horarios de Atención */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Horarios de Atención
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-notaria-azul">Lunes - Jueves</span>
                  <span className="text-gray-600">09:00 - 14:00 | 15:00 - 17:30</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-notaria-azul">Viernes</span>
                  <span className="text-gray-600">09:00 - 14:00 | 15:00 - 16:30</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-notaria-azul">Sábados</span>
                  <span className="text-gray-600">Cerrado</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-notaria-azul">Domingos</span>
                  <span className="text-red-600">Cerrado</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Para trámites complejos como escrituras públicas, 
                  recomendamos agendar una cita previa llamando al +56 32 2548174 o +56 51 2595840.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Contacto */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold mb-2 text-notaria-azul">Canal de Consultas, Reclamos y Sugerencias</h3>
              <p className="text-gray-600 text-sm mb-4">
                Resolvemos todas tus dudas sobre trámites notariales
              </p>
              <a 
                href="tel:+56322548174"
                className="text-notaria-dorado font-medium hover:underline"
              >
                Llamar para consultar
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-lg font-bold mb-2 text-notaria-azul">Citas</h3>
              <p className="text-gray-600 text-sm mb-4">
                Agenda una cita para trámites complejos
              </p>
              <a 
                href="tel:+56322548174"
                className="text-notaria-dorado font-medium hover:underline"
              >
                Agendar cita
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-bold mb-2 text-notaria-azul">Documentos</h3>
              <p className="text-gray-600 text-sm mb-4">
                Consulta qué documentos necesitas
              </p>
              <a 
                href="/servicios/"
                className="text-notaria-dorado font-medium hover:underline"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        {/* Información Adicional */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Información Útil
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                📋 Antes de Llamar
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ten tu cédula de identidad a mano</li>
                <li>• Conoce el tipo de trámite que necesitas</li>
                <li>• Ten lista la información básica</li>
                <li>• Consulta nuestros horarios</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                🚗 Cómo Llegar
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Frente al terminal de buses</li>
                <li>• A pasos del Congreso Nacional</li>
                <li>• Estacionamiento disponible</li>
                <li>• Acceso para personas con movilidad reducida</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para contactarnos?
          </h2>
          <p className="mb-6">
            Llámanos ahora mismo y te atenderemos con gusto
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+56512595840" 
              className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              📞 +56 51 2595840
            </a>
            <a 
              href="tel:+56322548174" 
              className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              📞 +56 32 2548174
            </a>
          </div>
        </section>
      </article>
    </main>
  );
} 