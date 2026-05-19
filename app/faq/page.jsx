import { generateMetadata, generateBreadcrumbSchema } from '../../utils/seo';
import FAQContent from '../../components/FAQContent';

export const metadata = generateMetadata(
  'Preguntas Frecuentes - Notaría Sarmiento Moreno',
  'Preguntas frecuentes sobre servicios notariales en Valparaíso. Información sobre poderes, autorizaciones, escrituras y trámites notariales.',
  'preguntas frecuentes, FAQ, notaría valparaíso, trámites notariales, poderes, autorizaciones',
  'https://notariasarmiento.cl/faq'
);

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://notariasarmiento.cl' },
    { name: 'FAQ', url: 'https://notariasarmiento.cl/faq' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQContent />
    </>
  );
} 