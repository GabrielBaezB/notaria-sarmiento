'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaEye, FaLock, FaUserShield, FaDatabase, FaCookieBite } from 'react-icons/fa';

export default function PrivacidadContent() {
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
          <li className="text-gray-600">Política de Privacidad</li>
        </ol>
      </nav>

      <article>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FaShieldAlt className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protegemos tu información personal con los más altos estándares de seguridad y confidencialidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaEye className="w-6 h-6 text-blue-600 mr-3" />
                  Información que Recopilamos
                </h2>
                <p className="text-gray-700 mb-4">
                  En Notaría Sarmiento Moreno, recopilamos únicamente la información necesaria para brindar nuestros servicios notariales:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Información de identificación personal (nombre, RUT, dirección)</li>
                  <li>Datos de contacto (teléfono, email)</li>
                  <li>Documentos requeridos para trámites notariales</li>
                  <li>Información relacionada con los servicios solicitados</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaUserShield className="w-6 h-6 text-blue-600 mr-3" />
                  Uso de la Información
                </h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos tu información exclusivamente para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Brindar servicios notariales profesionales</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Comunicarnos contigo sobre tus trámites</li>
                  <li>Mejorar nuestros servicios y atención al cliente</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaLock className="w-6 h-6 text-blue-600 mr-3" />
                  Protección de Datos
                </h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad robustas para proteger tu información:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Encriptación de datos sensibles</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Protocolos de seguridad física y digital</li>
                  <li>Capacitación continua del personal en protección de datos</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaDatabase className="w-6 h-6 text-blue-600 mr-3" />
                  Almacenamiento y Retención
                </h2>
                <p className="text-gray-700 mb-4">
                  Tu información se almacena de forma segura y se conserva según los plazos legales establecidos:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Documentos notariales: Conservación permanente según ley</li>
                  <li>Información de contacto: Hasta que revoques el consentimiento</li>
                  <li>Datos de navegación: Máximo 2 años</li>
                  <li>Información de seguridad: Según requerimientos legales</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FaCookieBite className="w-6 h-6 text-blue-600 mr-3" />
                  Cookies y Tecnologías Similares
                </h2>
                <p className="text-gray-700 mb-4">
                  Nuestro sitio web utiliza cookies esenciales para su funcionamiento:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Cookies de sesión para funcionalidad básica</li>
                  <li>Cookies de seguridad para proteger tu información</li>
                  <li>Cookies de análisis para mejorar la experiencia del usuario</li>
                  <li>No utilizamos cookies de terceros para publicidad</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tus Derechos
                </h2>
                <p className="text-gray-700 mb-4">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de datos (cuando sea legalmente posible)</li>
                  <li>Oponerte al procesamiento de datos</li>
                  <li>Portabilidad de datos</li>
                  <li>Revocar el consentimiento otorgado</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contacto
                </h2>
                <p className="text-gray-700 mb-4">
                  Para ejercer tus derechos o consultas sobre privacidad:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Notaría Sarmiento Moreno</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Chacabuco 2845, Valparaíso
                  </p>
                  <p className="text-gray-700 mb-2">
                    Teléfono: +56 32 2548174
                  </p>
                  <p className="text-gray-700 mb-2">
                    Teléfono: +56 51 2595840
                  </p>
                  <p className="text-gray-700">
                    Email: privacidad@notariasarmiento.cl
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Última actualización:</strong> 29 de junio de 2024
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Esta política puede actualizarse periódicamente. Te notificaremos sobre cambios significativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 