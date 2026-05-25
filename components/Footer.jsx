export default function Footer() {
  return (
    <footer className="bg-notaria-azul text-notaria-blanco py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <p>📍 Chacabuco 2845, Valparaíso</p>
              <p>📞 +56 32 2548174</p>
              <p>📞 +56 51 2595840</p>
              <p>✉️ contacto@notariasarmiento.cl</p>
              <a href="/equipo" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Nómina de suplentes - Trabajadores remuneracion
              </a>
              <a href="https://www.infoprobidad.cl/Declaracion/Declaracion?ID=5116288" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Declaración de Intereses y Patrimonio
              </a>
              <a href="/balances-anuales" className="block text-gray-400 hover:text-notaria-dorado transition-colors pt-1">
                Balances Anuales
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <div className="space-y-2 text-sm">
              <p>🕘 Lunes - Jueves: 9:00 - 14:00 | 15:00 - 17:30</p>
              <p>🕘 Viernes: 9:00 - 14:00 | 15:00 - 16:30</p>
              <p>🕘 Sábado: Cerrado</p>
              <p>🚫 Domingo: Cerrado</p>
            </div>
          </div>

          {/* Servicios Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <div className="space-y-2 text-sm">
              <a href="/servicios/poder-simple" className="block hover:text-notaria-dorado transition-colors">
                Poder Simple
              </a>
              <a href="/servicios/autorizacion-menores" className="block hover:text-notaria-dorado transition-colors">
                Autorización Menores
              </a>
              <a href="/servicios/venta-inmueble" className="block hover:text-notaria-dorado transition-colors">
                Venta de Inmueble
              </a>
            </div>
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
              <a href="/privacidad" className="hover:text-notaria-dorado transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="hover:text-notaria-dorado transition-colors">
                Términos de Uso
              </a>
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
