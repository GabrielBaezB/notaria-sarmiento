import { generateMetadata, generateBreadcrumbSchema } from '../../utils/seo';
import HorariosContent from '../../components/HorariosContent';

export const metadata = generateMetadata(
  'Horarios y Turnos - Notaría Sarmiento Moreno',
  'Horarios de atención y notarías de turno en Valparaíso. Información sobre disponibilidad y turnos notariales.',
  'horarios notaría, turnos notariales, notaría valparaíso, atención notarial',
  'https://notariasarmiento.cl/horarios'
);

export default function HorariosPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://notariasarmiento.cl' },
    { name: 'Horarios', url: 'https://notariasarmiento.cl/horarios' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HorariosContent />
    </>
  );
} 