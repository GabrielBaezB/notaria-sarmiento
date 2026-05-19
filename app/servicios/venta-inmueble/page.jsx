import Link from 'next/link';

export const metadata = {
  title: 'Venta de Inmueble en Valparaíso | Notaría Sarmiento Moreno',
  description: 'Formalice la compraventa de su propiedad con total seguridad legal en nuestra notaría en Valparaíso. Atención ágil frente al terminal de buses.',
  keywords: 'venta inmueble, compraventa, notaría, Valparaíso, escritura pública, propiedad',
  alternates: {
    canonical: 'https://notariasarmiento.cl/servicios/venta-inmueble',
  },
};

export default function VentaInmueble() {
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
        "name": "Venta de Inmueble",
        "item": "https://notariasarmiento.cl/servicios/venta-inmueble"
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
            <li className="text-gray-600">Venta de Inmueble</li>
          </ol>
        </nav>

        <article>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-notaria-azul">
            Venta de Inmueble en Valparaíso
          </h1>
          
          <section className="mb-8">
            <p className="mb-4">
              En la <strong>Notaría Sarmiento Moreno</strong> lo asesoramos y formalizamos la compraventa de su propiedad mediante escritura pública, asegurando el cumplimiento de todos los requisitos legales.
            </p>
            <p className="mb-4">
                              Nuestra ubicación en <strong>Chacabuco 2845, Valparaíso</strong>, frente al terminal de buses, facilita el acceso para realizar este importante trámite.
            </p>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Documentos Requeridos</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Cédulas de identidad de ambas partes</li>
              <li>Certificado de dominio vigente</li>
              <li>Certificado de avalúo fiscal</li>
              <li>Conservador de Bienes Raíces</li>
              <li>Certificado de no deuda de contribuciones</li>
              <li>Certificado de no deuda de agua potable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Proceso de Compraventa</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Revisión de documentos por nuestro equipo</li>
              <li>Asesoría legal especializada</li>
              <li>Otorgamiento de escritura pública</li>
              <li>Inscripción en Conservador de Bienes Raíces</li>
              <li>Entrega de copias autorizadas</li>
            </ol>
          </section>

          <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              ¿Vas a vender o comprar una propiedad?
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
