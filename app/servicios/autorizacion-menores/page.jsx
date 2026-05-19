// app/servicios/autorizacion-menores/page.jsx
import Link from 'next/link';

export const metadata = {
  title: 'Autorización de Viaje Menores Valparaíso | Notaría Sarmiento',
  description: 'Autorización notarial para viaje de menores en Valparaíso. Trámite inmediato con cédula de identidad. Chacabuco 2845 ☎ +56 32 2548174',
  keywords: 'autorización viaje menores, permiso salida menores, autorización notarial menores valparaíso',
  alternates: {
    canonical: 'https://notariasarmiento.cl/servicios/autorizacion-menores',
  },
};

export default function AutorizacionMenores() {
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
        "name": "Autorización de Menores",
        "item": "https://notariasarmiento.cl/servicios/autorizacion-menores"
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
            <li className="text-gray-600">Autorización de Menores</li>
          </ol>
        </nav>

        <article>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-notaria-azul">
            Autorización de Viaje para Menores en Valparaíso
          </h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              ¿Qué es la autorización de viaje para menores?
            </h2>
            <p className="mb-4">
              La autorización de viaje para menores es un documento notarial obligatorio 
              cuando un menor de 18 años viaja al extranjero sin uno o ambos padres. 
              En Notaría Sarmiento Moreno realizamos este trámite de forma rápida y segura.
            </p>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Documentos necesarios
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Cédula de identidad vigente del menor</li>
              <li>Cédula de identidad vigente de ambos padres</li>
              <li>Certificado de nacimiento del menor (no mayor a 60 días)</li>
              <li>Si viaja con uno de los padres: autorización del otro padre</li>
              <li>En caso de padres separados: sentencia judicial o acuerdo</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Proceso del trámite
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>Presentar todos los documentos en nuestra notaría</li>
              <li>Firma de la autorización ante notario</li>
              <li>Entrega inmediata del documento legalizado</li>
              <li>Tiempo estimado: 15-20 minutos</li>
            </ol>
          </section>

          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-semibold mb-2">⚠️ Importante</h3>
            <p>
              Ambos padres deben presentarse personalmente en la notaría. 
              En caso de imposibilidad de uno de ellos, consulte por poder notarial.
            </p>
          </section>

          <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas autorización de viaje para tu hijo?
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