import { FiClock, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function NotariaExpressSection() {
  return (
    <section className="bg-gradient-to-r from-notaria-azul to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Banner destacado */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Haz tus trámites más rápido con Notaría Express!
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Inicia tu gestión en línea, adelanta los trámites y accede a atención preferente en nuestra notaría.
            </p>
            <a 
              href="https://notarioexpress.cl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-notaria-azul font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center mx-auto inline-block"
            >
              Gestiona tu trámite aquí
              <FiArrowRight className="ml-2" />
            </a>
          </div>

          {/* Sección explicativa */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Trámites simples, rápidos y sin filas
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                En nuestra notaría contamos con el servicio de Notaría Express, una plataforma que te permite iniciar tus trámites notariales desde la comodidad de tu hogar. Completa tus datos en línea y acércate a nuestra oficina solo para la firma o retiro del documento, ahorrando tiempo y evitando esperas.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Gracias a Notaría Express, podrás:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">Ingresar los datos de tus trámites online.</span>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">Obtener atención preferente en la notaría.</span>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg">Firmar de manera electrónica avanzada en los casos que la ley lo permite.</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-center">
                <FiClock className="text-6xl mx-auto mb-6 text-yellow-300" />
                <h4 className="text-xl font-bold mb-4">
                  ¡Gestiona hoy mismo tu trámite y evita filas!
                </h4>
                <p className="text-lg mb-6">
                  Nuestro sistema te permite adelantar todo el proceso de forma digital, 
                  para que solo tengas que venir a la notaría para la firma final.
                </p>
                <a 
                  href="https://notarioexpress.cl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-notaria-azul font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300 inline-block"
                >
                  Comenzar trámite online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 