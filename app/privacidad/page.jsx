import { generateMetadata, generateBreadcrumbSchema } from '../../utils/seo';
import PrivacidadContent from '../../components/PrivacidadContent';

export const metadata = generateMetadata(
  'Política de Privacidad - Notaría Sarmiento Moreno',
  'Conoce cómo protegemos y tratamos tu información personal en Notaría Sarmiento Moreno, Valparaíso.',
  'privacidad, protección de datos, notaría valparaíso, confidencialidad',
  'https://notariasarmiento.cl/privacidad'
);

export default function PrivacidadPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://notariasarmiento.cl' },
    { name: 'Privacidad', url: 'https://notariasarmiento.cl/privacidad' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PrivacidadContent />
    </>
  );
} 