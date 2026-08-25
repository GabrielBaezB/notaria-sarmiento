'use client';

import { useState } from 'react';
import { navigateToAnchor } from '../utils/navigation';

export default function Contacto() {
  const emailOptions = [
    { label: 'Escrituras Públicas', value: process.env.NEXT_PUBLIC_EMAIL_ESCRITURAS || 'escrituras@notariasarmiento.cl' },
    { label: 'Documentos Privados', value: process.env.NEXT_PUBLIC_EMAIL_PRIVADOS || 'documentos@notariasarmiento.cl' },
    { label: 'Consulta General', value: process.env.NEXT_PUBLIC_EMAIL_GENERAL || 'contacto@notariasarmiento.cl' },
    { label: 'Seguimiento y Notificaciones', value: process.env.NEXT_PUBLIC_EMAIL_NOTIFICACIONES || 'consultas@notariasarmiento.cl' },
  ];

  const [recipient, setRecipient] = useState(emailOptions[0].value);

  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-notaria-azul to-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con todos tus trámites notariales.
            Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Teléfono */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-notaria-dorado rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Teléfonos</h4>
                    <p className="text-blue-100">+56 32 2548174</p>
                    <p className="text-blue-100">+56 51 2595840</p>
                    <p className="text-sm text-blue-200">Lunes a Viernes 9:00 - 16:30 (horario continuo)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-notaria-dorado rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-blue-100">contacto@notariasarmiento.cl</p>
                    <p className="text-sm text-blue-200">Respuesta en 24 horas</p>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-notaria-dorado rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Dirección</h4>
                    <p className="text-blue-100">Calle Chacabuco 2845</p>
                    <p className="text-blue-100">Valparaíso, Chile</p>
                    <p className="text-sm text-blue-200">Frente al Terminal de Buses</p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-notaria-dorado rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Horarios</h4>
                     <p className="text-blue-100">Lunes a Viernes</p>
                     <p className="text-blue-100">09:00 - 16:30 (horario continuo)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicios destacados */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Servicios Destacados
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3"></span>
                  Escrituras Públicas
                </li>
                <li className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3"></span>
                  Poderes Simples
                </li>
                <li className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3"></span>
                  Autorizaciones de Viaje
                </li>
                <li className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3"></span>
                  Compraventa de Inmuebles
                </li>
                <li className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3"></span>
                  Documentos Privados
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-semibold text-notaria-azul mb-6">
              Envíanos un mensaje
            </h3>

            <form
              action={`https://formsubmit.co/${recipient}`}
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_next" value="https://notariasarmiento.cl/#contacto" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Destino */}
              <div>
                <label
                  htmlFor="destino"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tipo de consulta
                </label>
                <select
                  id="destino"
                  name="destino"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200"
                >
                  {emailOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Correo */}
              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  pattern="(\+56)?[0-9\s-]{8,15}"
                  title="Formato: +56 9 1234 5678 o 9 1234 5678"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="_subject"
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Describe tu consulta o solicitud..."
                  rows={5}
                  required
                  className="w-full min-h-[140px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200 resize-vertical"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full bg-notaria-dorado text-white font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg text-lg"
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Enviar mensaje
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Te responderemos en un plazo máximo de 24 horas
              </p>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ¿Necesitas atención inmediata?
            </h3>
            <p className="text-blue-100 mb-6">
              Para consultas urgentes o que requieran atención personalizada,
              te recomendamos visitarnos directamente en nuestras oficinas.
            </p>
            <button
              onClick={() => navigateToAnchor('ubicacion')}
              className="inline-flex items-center px-6 py-3 bg-notaria-dorado text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Ver ubicación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
