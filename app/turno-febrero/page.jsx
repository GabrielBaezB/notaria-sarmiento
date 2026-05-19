import { generateMetadata } from '../../utils/seo';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = generateMetadata(
  'Notaría de Turno - Febrero 2026 - Notaría Sarmiento Moreno',
  'La Notaría Sarmiento Moreno estará de turno durante todo el mes de febrero 2026. Horario de atención: 9:30 a 14:00 en horario continuo.',
  'notaría de turno, febrero 2026, notaría valparaíso, turno notarial, horario continuo',
  'https://notariasarmiento.cl/turno-febrero'
);

export default function TurnoFebreroPage() {
  return (
    <main className="min-h-screen bg-notaria-gris">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-notaria-azul via-blue-800 to-notaria-azul text-notaria-blanco py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-4 sm:mb-6">
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-notaria-dorado animate-bounce-gentle" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 animate-fade-in-up leading-tight">
            Notaría de Turno - Febrero 2026
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 px-2 animate-fade-in-up">
            Estaremos de turno durante todo el mes de febrero
          </p>
        </div>
      </section>

      {/* Información Principal */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8 animate-fade-in-up">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-notaria-azul mb-4 px-2">
              Horarios de Atención
            </h2>
            <div className="inline-block bg-notaria-azul text-notaria-blanco px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg mb-4 sm:mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                9:30 - 14:00
              </p>
              <p className="text-base sm:text-lg md:text-xl mt-1 sm:mt-2 text-notaria-dorado">
                Horario Continuo
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-gray-700">
            <div className="border-l-4 border-notaria-dorado pl-3 sm:pl-4 md:pl-6">
              <h3 className="text-lg sm:text-xl font-semibold text-notaria-azul mb-2">
                📅 Período de Turno
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Durante todo el mes de <strong className="text-notaria-azul">febrero 2026</strong>, 
                la Notaría Sarmiento Moreno estará disponible como notaría de turno.
              </p>
            </div>

            <div className="border-l-4 border-notaria-dorado pl-3 sm:pl-4 md:pl-6">
              <h3 className="text-lg sm:text-xl font-semibold text-notaria-azul mb-2">
                🕘 Horario Especial
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Nuestro horario de atención será de <strong className="text-notaria-azul">9:30 a 14:00</strong> 
                en horario continuo, sin interrupción para el almuerzo.
              </p>
            </div>

            <div className="border-l-4 border-notaria-dorado pl-3 sm:pl-4 md:pl-6">
              <h3 className="text-lg sm:text-xl font-semibold text-notaria-azul mb-2">
                📍 Ubicación
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Nos encontramos en <strong className="text-notaria-azul">Chacabuco 2845, Valparaíso</strong>, 
                frente al terminal de buses y a pasos del Congreso Nacional.
              </p>
            </div>

            <div className="border-l-4 border-notaria-dorado pl-3 sm:pl-4 md:pl-6">
              <h3 className="text-lg sm:text-xl font-semibold text-notaria-azul mb-2">
                📞 Contacto
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-2">
                Para consultas o agendar una cita, puede contactarnos:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base md:text-lg">
                <li>Teléfono: <strong className="text-notaria-azul">+56 32 2548174</strong></li>
                <li>Teléfono: <strong className="text-notaria-azul">+56 51 2595840</strong></li>
                <li className="break-words">Email: <strong className="text-notaria-azul">contacto@notariasarmiento.cl</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="bg-notaria-azul text-notaria-blanco rounded-lg shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center px-2">
            Servicios Disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-notaria-dorado">
                ✍️ Escrituras Públicas
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Documentación legal para compraventa de inmuebles, arriendos y otros actos jurídicos.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-notaria-dorado">
                📋 Poderes Simples
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Autorizaciones y poderes notariales para diversos trámites y representaciones.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-notaria-dorado">
                👨‍👩‍👧‍👦 Autorizaciones de Viaje
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Documentos para autorizar viajes de menores de edad dentro y fuera del país.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-notaria-dorado">
                🚗 Transferencias de Vehículos
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Trámites para transferencia de dominio de vehículos motorizados.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de regreso */}
        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/"
            className="inline-block bg-notaria-dorado hover:bg-yellow-600 text-notaria-azul font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg transition-colors duration-300 text-base sm:text-lg"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
