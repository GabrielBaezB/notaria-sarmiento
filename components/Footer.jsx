import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-notaria-azul text-notaria-blanco py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <p>📍 Chacabuco 2845, Valparaíso</p>
              <p>📞 +56 32 2548174</p>
              <p>📞 +56 51 2595840</p>
              <p>✉️ contacto@notariasarmiento.cl</p>
              <Link href="/equipo" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Nómina de suplentes - Trabajadores remuneracion
              </Link>
              <a href="https://www.infoprobidad.cl/Declaracion/Declaracion?ID=5116288" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Declaración de Intereses y Patrimonio
              </a>
              <Link href="/balances-anuales" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Balances Anuales
              </Link>
              <Link href="/precios-protegidos" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Aranceles y Precios 2026
              </Link>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <div className="space-y-2 text-sm">
              <p>🕘 Lunes - Viernes: 9:00 - 16:30 (horario continuo)</p>
              <p>🕘 Sábado: Cerrado</p>
              <p>🚫 Domingo: Cerrado</p>
            </div>
          </div>

          {/* Servicios Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <div className="space-y-2 text-sm">
              <Link href="/servicios/poder-simple" className="block hover:text-notaria-dorado transition-colors">
                Poder Simple
              </Link>
              <Link href="/servicios/autorizacion-menores" className="block hover:text-notaria-dorado transition-colors">
                Autorización Menores
              </Link>
              <Link href="/servicios/venta-inmueble" className="block hover:text-notaria-dorado transition-colors">
                Venta de Inmueble
              </Link>
            </div>
          </div>

          {/* Sello Oficial Alianza AFC - Manual de Marca Pág. 7 */}
          <div className="flex flex-col items-center md:items-end">
            <a
              href="https://www.afc.cl"
              target="_blank"
              rel="noopener noreferrer"
              title="Alianza Notaría en Línea - AFC Chile Seguro de Cesantía (afc.cl)"
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <Image
                src="/afc/sello-notaria-en-linea-afc.png"
                alt="Sello Oficial Notaría en Línea - AFC Chile Seguro de Cesantía"
                width={130}
                height={130}
                className="w-28 h-28 object-contain"
              />
              <span className="mt-2 text-xs font-bold text-afc-azul group-hover:underline">
                Finiquito en línea • afc.cl
              </span>
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              <p>© 2026 Notaría Sarmiento Moreno - Valparaíso</p>
              <p className="text-gray-400">Todos los derechos reservados</p>
            </div>

            {/* Enlaces legales */}
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link href="/privacidad" className="hover:text-notaria-dorado transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-notaria-dorado transition-colors">
                Términos de Uso
              </Link>
              <a href="/sitemap.xml" className="hover:text-notaria-dorado transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Notaría autorizada por el Ministerio de Justicia de Chile</p>
          <p>Notario: Emilio Sarmiento Moreno</p>
        </div>
      </div>
    </footer>
  );
}
