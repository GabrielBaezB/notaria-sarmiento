// app/servicios/poder-simple/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Poder Simple | Notaría Sarmiento Moreno - Valparaíso',
  description: 'Obtén tu poder simple en Notaría Sarmiento Moreno, Valparaíso. Atención rápida y profesional a pasos del Congreso Nacional y calle Chacabuco.',
  keywords: 'poder simple, notaría Valparaíso, documentos notariales, trámites rápidos, notaría chacabuco, notaría Sarmiento',
  alternates: {
    canonical: 'https://notariasarmiento.cl/servicios/poder-simple',
  },
};

export default function PoderSimple() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://notariasarmiento.cl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://notariasarmiento.cl/servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Poder Simple",
        "item": "https://notariasarmiento.cl/servicios/poder-simple"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main className="container mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex space-x-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/servicios" className="text-blue-600 hover:underline">Servicios</Link></li>
            <li>/</li>
            <li className="text-gray-600">Poder Simple</li>
          </ol>
        </nav>

        <article>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-notaria-azul">
            Poder Simple en Valparaíso
          </h1>
          
          <section className="mb-8">
        <p className="mb-4">
          El <strong>poder simple</strong> es un documento en el que una persona autoriza a otra para realizar trámites en su nombre, como retiro de documentos, inscripciones, cobros u otros actos simples no judiciales.
        </p>
        <p className="mb-4">
          En <strong>Notaría Sarmiento Moreno</strong>, ubicada en <strong>calle Chacabuco, frente al terminal de buses de Valparaíso</strong>, ofrecemos este servicio con atención rápida, profesional y sin necesidad de agendamiento.
        </p>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Documentos Requeridos</h2>
        <ul className="list-disc list-inside space-y-2">
              <li>Cédula de identidad vigente del poderdante (quien otorga el poder)</li>
              <li>Datos completos de la persona autorizada</li>
              <li>Detalle claro del trámite o autorización que se concede</li>
        </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Proceso del Trámite</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Presentar documentos en nuestra notaría</li>
              <li>Firma del poder ante notario</li>
              <li>Entrega inmediata del documento</li>
              <li>Tiempo estimado: 15-20 minutos</li>
            </ol>
          </section>

          <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas un poder simple?
            </h2>
            <p className="mb-6">
                              Visítanos en Chacabuco 2845, Valparaíso<br />
              Frente al terminal de buses
            </p>
            <a href="tel:+56322548174" className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg inline-block hover:bg-yellow-400 transition">
              Llamar: +56 32 2548174
            </a>
            <a href="tel:+56512595840" className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg inline-block hover:bg-yellow-400 transition">
              Llamar: +56 51 2595840
            </a>
          </section>
        </article>
      </main>
    </>
  );
}
