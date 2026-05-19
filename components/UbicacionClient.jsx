'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import con SSR desactivado para componentes que dependen del window
const Ubicacion = dynamic(() => import('./Ubicacion'), { 
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ubicación</h2>
          <div className="animate-pulse">
            <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
            <div className="bg-gray-300 h-4 rounded w-3/4 mx-auto mb-2"></div>
            <div className="bg-gray-300 h-4 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default function UbicacionClient() {
  // Removido el check de isClient para mejorar SEO y LCP
  // El contenido se renderiza inmediatamente

  return (
    <main className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
          <li>/</li>
          <li className="text-gray-600">Cómo llegar</li>
        </ol>
      </nav>

      <article>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
            Cómo llegar a Notaría Sarmiento Moreno
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra fácilmente la Notaría Sarmiento Moreno en el corazón de Valparaíso
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-notaria-azul mb-4">
            Ubicación privilegiada en Valparaíso
          </h2>
          <p className="mb-4">
            Nuestra notaría se encuentra en una ubicación estratégica en el centro de Valparaíso, 
            facilitando el acceso desde cualquier punto de la ciudad y regiones aledañas.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-notaria-azul">
            Dirección exacta
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg mb-2">
              <span className="text-notaria-dorado mr-3">📍</span>
                              <strong>Chacabuco 2845, Valparaíso</strong>
            </p>
            <p className="text-lg mb-2">
              <span className="text-notaria-dorado mr-3">🏢</span>
              Frente al Terminal de Buses de Valparaíso
            </p>
            <p className="text-lg mb-2">
              <span className="text-notaria-dorado mr-3">🏛️</span>
              A pasos del Congreso Nacional
            </p>
            <p className="text-lg">
              <span className="text-notaria-dorado mr-3">🚌</span>
              Zona de fácil acceso en transporte público
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-notaria-azul">
            Puntos de referencia cercanos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3 text-notaria-azul">
                <span className="text-notaria-dorado mr-3">🚌</span>
                Terminal de Buses
              </h4>
              <p className="mb-2">
                <span className="text-notaria-dorado mr-2">•</span>
                Ubicado justo frente a nuestra notaría
              </p>
              <p className="mb-2">
                <span className="text-notaria-dorado mr-2">•</span>
                Conexiones a todo Chile
              </p>
              <p className="mb-2">
                <span className="text-notaria-dorado mr-2">•</span>
                Microbuses urbanos
              </p>
              <p>
                <span className="text-notaria-dorado mr-2">•</span>
                Taxis y colectivos
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3 text-notaria-azul">
                <span className="text-notaria-dorado mr-3">🏛️</span>
                Congreso Nacional
              </h4>
              <p className="mb-2">
                <span className="text-notaria-dorado mr-2">•</span>
                A 5 minutos caminando
              </p>
              <p className="mb-2">
                <span className="text-notaria-dorado mr-2">•</span>
                Zona cívica de Valparaíso
              </p>
              <p className="mb-2">
                <span className="text-notaria-dorado mr-2">•</span>
                Edificios gubernamentales
              </p>
              <p>
                <span className="text-notaria-dorado mr-2">•</span>
                Mercado Cardonal Valparaíso
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Opciones de transporte
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                🚌 Transporte Público
              </h3>
              <p className="mb-4">
                Múltiples líneas de microbuses y buses urbanos pasan por nuestra ubicación.
              </p>
              <Link 
                href="https://www.google.com/maps/dir//Chacabuco+2843,+Valpara%C3%ADso,+Valpara%C3%ADso,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-notaria-azul text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Ver en Google Maps
              </Link>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                🚗 Vehículo Particular
              </h3>
              <p className="mb-4">
                Estacionamiento disponible en las cercanías y calles aledañas.
              </p>
              <Link 
                href="https://www.google.com/maps/dir//Chacabuco+2843,+Valpara%C3%ADso,+Valpara%C3%ADso,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-notaria-azul text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Ver en Google Maps
              </Link>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-notaria-azul">
                🚶 Caminando
              </h3>
              <p className="mb-4">
                Ubicación céntrica accesible desde mercado cardonal valparaíso y alrededores.
              </p>
              <Link 
                href="https://www.google.com/maps/dir//Chacabuco+2843,+Valpara%C3%ADso,+Valpara%C3%ADso,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-notaria-azul text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Ver en Google Maps
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-notaria-azul">
            Información adicional
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2 text-notaria-azul">Horarios</h3>
              <p className="mb-2">Lunes a Jueves: 09:00 - 14:00 | 15:00 - 17:30</p>
              <p className="mb-2">Viernes: 09:00 - 14:00 | 15:00 - 16:30</p>
              <p className="mb-2">Sábados: Cerrado</p>
              <p className="mb-4">Domingos: Cerrado</p>
              
              <h3 className="text-lg font-bold mb-2 text-notaria-azul">Teléfonos</h3>
              <div className="space-y-1">

                <a href="tel:+56512595840" className="text-notaria-dorado hover:underline block">
                  +56 51 2595840
                </a>
                <a href="tel:+56322548174" className="text-notaria-dorado hover:underline block">
                  +56 32 2548174
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-notaria-azul">Estacionamiento</h3>
              <p className="mb-2">• Estacionamientos públicos cercanos</p>
              <p className="mb-2">• Zona de parada de taxis</p>
              <p className="mb-2">• Acceso para personas con movilidad reducida</p>
              <p>• Seguridad las 24 horas</p>
            </div>
          </div>
        </section>

        <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda para llegar?
          </h2>
          <p className="mb-6">
            Llámanos y te orientamos sobre la mejor ruta para llegar a nuestra notaría
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