import Link from 'next/link';
import Footer from '../../components/Footer';
import { FaFileInvoiceDollar, FaInfoCircle } from 'react-icons/fa';
import { generateMetadata, generateBreadcrumbSchema } from '../../utils/seo';

export const metadata = generateMetadata(
  'Balances Anuales - Notaría Sarmiento Moreno',
  'Información oficial sobre los balances anuales y auditorías de la Notaría Sarmiento Moreno en Valparaíso.',
  'balances anuales, transparencia, notaría valparaíso, auditorías, código orgánico de tribunales',
  'https://notariasarmiento.cl/balances-anuales'
);

export default function BalancesAnualesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://notariasarmiento.cl' },
    { name: 'Balances Anuales', url: 'https://notariasarmiento.cl/balances-anuales' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-notaria-gris flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex space-x-2">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-600">Balances Anuales</li>
            </ol>
          </nav>

          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-notaria-azul rounded-full mb-6 shadow-sm border border-blue-100">
                <FaFileInvoiceDollar className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-notaria-azul tracking-tight">
                Balances Anuales
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparencia institucional y cumplimiento de la normativa legal vigente
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              <div className="prose prose-lg max-w-none">
                <div className="flex items-start gap-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                  <FaInfoCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 animate-pulse" />
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-notaria-azul m-0">
                      Declaración Oficial
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed m-0 font-medium">
                      En consideración a lo dispuesto al artículo 482 ter del Código Orgánico de Tribunales, y atendido que aún no tienen lugar las auditorías externas señaladas en él, no existen balances que publicar.
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-100 pt-8 text-sm text-gray-500 space-y-2">
                  <p>
                    <strong>Artículo 482 ter del Código Orgánico de Tribunales:</strong> Dispone la publicación y publicidad de la información financiera auditada externamente para los oficios notariales y conservadores en los plazos y formas determinados por la ley.
                  </p>
                  <p>
                    Esta sección se mantendrá debidamente actualizada conforme se implementen los procesos de auditorías contemplados en la normativa legal.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </main>
    </>
  );
}
