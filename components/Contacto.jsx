'use client';

import { useState, useRef } from 'react';
import { navigateToAnchor } from '../utils/navigation';
import Toast, { useToast } from './Toast';

// Claves lógicas para no exponer correos directamente en los atributos value del DOM (<select>)
// Soporta tokens/hashes de FormSubmit en variables de entorno si se configuran.
const DESTINATARIOS = {
  escrituras: {
    label: 'Escrituras Públicas',
    target: process.env.NEXT_PUBLIC_FORMSUBMIT_ESCRITURAS || process.env.NEXT_PUBLIC_EMAIL_ESCRITURAS || 'escrituras@notariasarmiento.cl'
  },
  privados: {
    label: 'Documentos Privados',
    target: process.env.NEXT_PUBLIC_FORMSUBMIT_PRIVADOS || process.env.NEXT_PUBLIC_EMAIL_PRIVADOS || 'documentos@notariasarmiento.cl'
  },
  general: {
    label: 'Consulta General',
    target: process.env.NEXT_PUBLIC_FORMSUBMIT_GENERAL || process.env.NEXT_PUBLIC_EMAIL_GENERAL || 'contacto@notariasarmiento.cl'
  },
  notificaciones: {
    label: 'Seguimiento y Notificaciones',
    target: process.env.NEXT_PUBLIC_FORMSUBMIT_NOTIFICACIONES || process.env.NEXT_PUBLIC_EMAIL_NOTIFICACIONES || 'consultas@notariasarmiento.cl'
  }
};

const COOLDOWN_MS = 60000; // 60s entre envíos para mitigar spam
const MIN_FILL_TIME_MS = 2500; // Tiempo mínimo humano para completar el formulario

export default function Contacto() {
  const [destinoKey, setDestinoKey] = useState('escrituras');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fallbackMailto, setFallbackMailto] = useState(null);

  const formLoadedAtRef = useRef(Date.now());
  const lastSubmitAtRef = useRef(0);

  const { toasts, removeToast, showSuccess, showError, showWarning } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. Protección anti-bots: Honeypot (_honey) y tiempo mínimo de llenado
    const honey = formData.get('_honey');
    if (honey) {
      return; // Bot detectado silenciosamente
    }

    const now = Date.now();
    if (now - formLoadedAtRef.current < MIN_FILL_TIME_MS) {
      showWarning('Por favor revisa los datos antes de enviar el formulario.');
      return;
    }

    // 2. Rate-limiting en cliente (cooldown entre envíos)
    if (now - lastSubmitAtRef.current < COOLDOWN_MS) {
      const remainingSec = Math.ceil((COOLDOWN_MS - (now - lastSubmitAtRef.current)) / 1000);
      showWarning(`Por favor espera ${remainingSec} segundos antes de enviar otro mensaje.`);
      return;
    }

    const destinoConfig = DESTINATARIOS[destinoKey] || DESTINATARIOS.general;
    const nombre = String(formData.get('nombre') || '').trim();
    const correo = String(formData.get('correo') || '').trim();
    const telefono = String(formData.get('telefono') || '').trim();
    const asunto = String(formData.get('_subject') || '').trim();
    const mensaje = String(formData.get('mensaje') || '').trim();

    setIsSubmitting(true);
    setFallbackMailto(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destinoConfig.target)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          tipo_consulta: destinoConfig.label,
          nombre,
          correo,
          telefono: telefono || 'No informado',
          _subject: `[Web Notaría - ${destinoConfig.label}] ${asunto}`,
          mensaje,
          _honey: ''
        })
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.success === 'false')) {
        throw new Error('No se pudo procesar el envío en el servidor de correo.');
      }

      lastSubmitAtRef.current = Date.now();
      showSuccess('¡Mensaje enviado con éxito! Te responderemos a la brevedad.');
      form.reset();
      setDestinoKey('escrituras');
    } catch (err) {
      // Fallback: conservamos los datos escritos por el usuario y habilitamos envío directo por cliente de correo
      const mailtoSubject = encodeURIComponent(`[${destinoConfig.label}] ${asunto}`);
      const mailtoBody = encodeURIComponent(
        `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono || 'No informado'}\nTipo de consulta: ${destinoConfig.label}\n\nMensaje:\n${mensaje}`
      );
      setFallbackMailto(`mailto:contacto@notariasarmiento.cl?subject=${mailtoSubject}&body=${mailtoBody}`);
      showError('Hubo un problema al conectar con el servidor. Tu mensaje no se borró; puedes reintentar o enviarlo con el botón de respaldo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-notaria-azul to-blue-900">
      {/* Notificaciones Toast */}
      <div className="fixed top-20 right-4 z-[100] space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot oculto contra bots de spam */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Destino (usa claves lógicas sin exponer los emails en el DOM) */}
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
                  value={destinoKey}
                  onChange={(e) => setDestinoKey(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado focus:border-transparent transition-all duration-200"
                >
                  {Object.entries(DESTINATARIOS).map(([key, opt]) => (
                    <option key={key} value={key}>
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
                disabled={isSubmitting}
                className="w-full bg-notaria-dorado text-white font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></span>
                    Enviando mensaje...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Enviar mensaje
                  </>
                )}
              </button>

              {/* Respaldo (Fallback) en caso de caída de FormSubmit */}
              {fallbackMailto && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900 space-y-2">
                  <p className="font-medium">
                    ¿Problemas con el envío automático? Puedes enviar tu consulta directamente con los datos ya escritos:
                  </p>
                  <a
                    href={fallbackMailto}
                    className="inline-block bg-notaria-azul text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition"
                  >
                    Abrir en mi aplicación de correo
                  </a>
                </div>
              )}
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
