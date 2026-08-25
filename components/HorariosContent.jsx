'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HorariosContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const horarios = [
    { dia: 'Lunes', horario: '09:00 - 16:30', estado: 'Abierto' },
    { dia: 'Martes', horario: '09:00 - 16:30', estado: 'Abierto' },
    { dia: 'Miércoles', horario: '09:00 - 16:30', estado: 'Abierto' },
    { dia: 'Jueves', horario: '09:00 - 16:30', estado: 'Abierto' },
    { dia: 'Viernes', horario: '09:00 - 16:30', estado: 'Abierto' },
    { dia: 'Sábado', horario: 'Cerrado', estado: 'Cerrado' },
    { dia: 'Domingo', horario: 'Cerrado', estado: 'Cerrado' }
  ];

  // const notariasTurno = [
  //   {
  //     nombre: 'Notaría de Valparaíso',
  //     direccion: 'Plaza Victoria 123',
  //   },
  //   {
  //     nombre: 'Notaría de Viña del Mar',
  //     direccion: 'Av. Libertad 456',
  //   },
  //   {
  //     nombre: 'Notaría de Quilpué',
  //     direccion: 'Serrano 789',
  //   }
  // ];

  const serviciosEspeciales = [
    'Atención sin cita previa',
    'Trámites urgentes',
    'Asesoría legal',
    'Documentos inmediatos'
  ];

  const diasFeriados = [
    '1 de Enero (Año Nuevo)',
    'Viernes Santo',
    '1 de Mayo (Día del Trabajo)',
    '21 de Mayo (Glorias Navales)',
    '29 de Junio (San Pedro y San Pablo)',
    '16 de Julio (Virgen del Carmen)',
    '15 de Agosto (Asunción de la Virgen)',
    '18 de Septiembre (Independencia Nacional)',
    '19 de Septiembre (Glorias del Ejército)',
    '12 de Octubre (Encuentro de Dos Mundos)',
    '1 de Noviembre (Todos los Santos)',
    '8 de Diciembre (Inmaculada Concepción)',
    '25 de Diciembre (Navidad)'
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
          <li>/</li>
          <li className="text-gray-600">Horarios</li>
        </ol>
      </nav>

      <article>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
            Horarios de Atención
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce nuestros horarios regulares y las notarías de turno para emergencias
          </p>
        </header>

        {/* Horarios Regulares */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Horarios Regulares
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-notaria-azul text-white p-4">
                <h3 className="text-xl font-bold">Notaría Sarmiento Moreno</h3>
                <p className="text-notaria-dorado">Chacabuco 2845, Valparaíso</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {horarios.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center">
                        <span className="font-semibold text-notaria-azul w-24">{item.dia}</span>
                        <span className="text-gray-600">{item.horario}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.estado === 'Abierto'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        }`}>
                        {item.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Especiales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Servicios Especiales
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-notaria-azul">
                ⚡ Servicios que realizamos en horario regular
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviciosEspeciales.map((servicio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-notaria-dorado text-xl">✓</span>
                    <span className="text-gray-700">{servicio}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-yellow-300">
                <p className="text-sm text-gray-600">
                  <strong>Nota:</strong> Para trámites complejos como escrituras públicas,
                  recomendamos agendar una cita previa llamando al +56 32 2548174 o +56 51 2595840.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
        Notarías de Turno
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Notarías de Turno
          </h2>
          <div className="max-w-4xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notariasTurno.map((notaria, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3 text-notaria-azul">
                    {notaria.nombre}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 {notaria.direccion}</p>
                    <p>📞 {notaria.telefono}</p>
                    <p>🕘 {notaria.horario}</p>
                  </div>
                  <a 
                    href={`tel:${notaria.telefono}`}
                    className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    Llamar Ahora
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Días Feriados */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Días Feriados
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                ⚠️ Importante
              </h3>
              <p className="mb-4">
                La notaría permanece cerrada en los siguientes días feriados legales.
                Te recomendamos planificar tus trámites con anticipación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diasFeriados.map((dia, index) => (
                <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-notaria-azul">
                    {dia}
                  </h4>
                  <p className="text-red-600 font-semibold">Cerrado</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Información Adicional */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Información Importante
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                📋 Antes de Visitar
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lleva tu cédula de identidad vigente</li>
                <li>• Revisa los documentos requeridos</li>
                <li>• Llega con tiempo suficiente</li>
                <li>• Para trámites complejos, llama antes</li>
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

        {/* CTA */}
        <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas confirmar horarios?
          </h2>
          <p className="mb-6">
            Llámanos para confirmar disponibilidad o consultar horarios especiales
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