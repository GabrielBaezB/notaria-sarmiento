// components/Ubicacion.jsx
export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-notaria-azul mb-4">
            ¿Cómo llegar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ubicados estratégicamente en el centro de Valparaíso, frente al Terminal de Buses y a pasos del Congreso Nacional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Mapa */}
          <div className="lg:col-span-2 h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border h-full flex flex-col">
              <div className="p-6 border-b bg-notaria-azul text-white flex-shrink-0">
                <h3 className="text-xl font-semibold">Ubicación en Google Maps</h3>
                <p className="text-sm opacity-90">Calle Chacabuco 2845, Valparaíso</p>
              </div>
              <div className="flex-grow relative min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3902693360974!2d-71.60885982432606!3d-33.0461907735523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e1b5f0deb183%3A0x272eb3215cbfa249!2sNotar%C3%ADa%20Emilio%20Sarmiento%20Moreno!5e0!3m2!1ses-419!2scl!4v1747541376862!5m2!1ses-419!2scl"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación de la Notaría"
                  aria-label="Mapa de ubicación de la Notaría Sarmiento Moreno"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Información lateral */}
          <div className="space-y-6">
            {/* Dirección */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-notaria-dorado rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-notaria-azul mb-2">Dirección</h3>
                  <p className="text-gray-700">Calle Chacabuco 2845</p>
                  <p className="text-gray-700">Valparaíso, Chile</p>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-notaria-dorado rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-notaria-azul mb-2">Horario de Atención</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700 font-medium">Lunes a Jueves</p>
                    <p className="text-gray-600">09:00 - 14:00 hrs | 15:00 - 17:30 hrs</p>
                    <p className="text-gray-700 font-medium mt-2">Viernes</p>
                    <p className="text-gray-600">09:00 - 14:00 hrs | 15:00 - 16:30 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Puntos de referencia */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-notaria-dorado rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-notaria-azul mb-2">Puntos de Referencia</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Frente al Terminal de Buses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>A pasos del Congreso Nacional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Cerca de la Estación Barón</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>Zona céntrica y accesible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transporte */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-notaria-dorado rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-notaria-azul mb-2">Cómo llegar</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong className="font-semibold text-gray-900">Metro:</strong> Estación Barón</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong className="font-semibold text-gray-900">Micro:</strong> 214, 213, 210, 603</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-notaria-dorado rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span><strong className="font-semibold text-gray-900">Auto:</strong> Estacionamiento cercano disponible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="text-center mt-12">
          <a
            href="https://maps.google.com/?q=Notaría+Emilio+Sarmiento+Moreno,+Chacabuco,+Valparaíso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-notaria-dorado text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
