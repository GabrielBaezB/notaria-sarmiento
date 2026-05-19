import { SERVICIOS } from '../../utils/servicios';
import { generateMetadata, generateBreadcrumbSchema } from '../../utils/seo';
import ServiciosContent from '../../components/ServiciosContent';

export const metadata = generateMetadata(
  'Servicios Notariales',
  'Servicios notariales completos en Valparaíso. Escrituras públicas, poderes simples, autorizaciones de viaje, compraventa de inmuebles y más.',
  'servicios notariales, escrituras públicas, poderes, autorizaciones, notaría valparaíso',
  'https://notariasarmiento.cl/servicios'
);

export default function ServiciosPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://notariasarmiento.cl' },
    { name: 'Servicios', url: 'https://notariasarmiento.cl/servicios' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiciosContent />
    </>
  );
} 