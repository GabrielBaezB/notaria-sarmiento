import { generateMetadata, generateBreadcrumbSchema } from '../../utils/seo';
import TerminosContent from '../../components/TerminosContent';

export const metadata = generateMetadata(
  'Términos y Condiciones - Notaría Sarmiento Moreno',
  'Lee los términos y condiciones para el uso de los servicios y el sitio web de Notaría Sarmiento Moreno, Valparaíso.',
  'términos y condiciones, notaría valparaíso, uso del sitio, servicios notariales',
  'https://notariasarmiento.cl/terminos'
);

export default function TerminosPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://notariasarmiento.cl' },
    { name: 'Términos', url: 'https://notariasarmiento.cl/terminos' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TerminosContent />
    </>
  );
} 