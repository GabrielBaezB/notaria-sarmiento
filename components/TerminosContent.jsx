'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFileContract, FaGavel, FaHandshake, FaExclamationTriangle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

export default function TerminosContent() {
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
          <li className="text-gray-600">Términos y Condiciones</li>
        </ol>
      </nav>

      <article>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <FaFileContract className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Condiciones que rigen el uso de nuestros servicios notariales y sitio web
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaHandshake className="w-6 h-6 text-green-600 mr-3" />
                  Aceptación de Términos
                </h2>
                <p className="text-gray-700 mb-4">
                  Al acceder y utilizar los servicios de Notaría Sarmiento Moreno, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaGavel className="w-6 h-6 text-green-600 mr-3" />
                  Servicios Notariales
                </h2>
                <p className="text-gray-700 mb-4">
                  Ofrecemos servicios notariales profesionales incluyendo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Escrituras públicas</li>
                  <li>Poderes simples y especiales</li>
                  <li>Autorizaciones de viaje para menores</li>
                  <li>Contratos de compraventa de inmuebles</li>
                  <li>Transferencias de vehículos</li>
                  <li>Certificaciones y legalizaciones</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  Responsabilidades del Cliente
                </h2>
                <p className="text-gray-700 mb-4">
                  Como cliente, te comprometes a:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Proporcionar información veraz y completa</li>
                  <li>Presentar documentos originales cuando sea requerido</li>
                  <li>Asistir puntualmente a las citas programadas</li>
                  <li>Cumplir con los requisitos legales para cada trámite</li>
                  <li>Pagar las tarifas notariales correspondientes</li>
                  <li>Respetar las normas de conducta en nuestras instalaciones</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaInfoCircle className="w-6 h-6 text-green-600 mr-3" />
                  Horarios y Atención
                </h2>
                <p className="text-gray-700 mb-4">
                  Nuestros horarios de atención son:
                </p>
                <div className="bg-green-50 rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Lunes a Jueves</h4>
                      <p className="text-gray-700">09:00 - 14:00 hrs</p>
                      <p className="text-gray-700">15:00 - 17:30 hrs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Viernes</h4>
                      <p className="text-gray-700">09:00 - 14:00 hrs</p>
                      <p className="text-gray-700">15:00 - 16:30 hrs</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Los horarios pueden variar en días festivos. Te recomendamos confirmar disponibilidad antes de tu visita.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaExclamationTriangle className="w-6 h-6 text-green-600 mr-3" />
                  Limitaciones y Exclusiones
                </h2>
                <p className="text-gray-700 mb-4">
                  Es importante que comprendas las siguientes limitaciones:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>No proporcionamos asesoría legal integral</li>
                  <li>Los servicios están sujetos a disponibilidad</li>
                  <li>Algunos trámites requieren documentación adicional</li>
                  <li>Los tiempos de procesamiento pueden variar</li>
                  <li>No garantizamos resultados específicos en trámites complejos</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tarifas y Pagos
                </h2>
                <p className="text-gray-700 mb-4">
                  Las tarifas notariales están reguladas por la ley y pueden incluir:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Honorarios notariales</li>
                  <li>Derechos de inscripción</li>
                  <li>Gastos de gestión</li>
                  <li>Certificaciones adicionales</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Los pagos se realizan en efectivo o transferencia bancaria. Se proporciona comprobante de pago por todos los servicios.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Confidencialidad
                </h2>
                <p className="text-gray-700 mb-4">
                  Mantenemos estricta confidencialidad sobre:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Información personal de nuestros clientes</li>
                  <li>Detalles de los trámites realizados</li>
                  <li>Documentos presentados</li>
                  <li>Conversaciones mantenidas durante la atención</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  La información solo se divulga cuando es requerida por ley o autorizada por el cliente.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Modificaciones
                </h2>
                <p className="text-gray-700 mb-4">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en nuestro sitio web y entrarán en vigor inmediatamente.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ley Aplicable
                </h2>
                <p className="text-gray-700 mb-4">
                  Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será resuelta en los tribunales competentes de Valparaíso.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Última actualización:</strong> 29 de junio de 2024
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Para consultas sobre estos términos, contáctanos en nuestras oficinas o a través de nuestro sitio web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 