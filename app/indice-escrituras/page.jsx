import IndiceEscriturasClient from '../../components/IndiceEscriturasClient';

export const metadata = {
  title: 'Índice de Escrituras - Notaría Sarmiento Moreno',
  description: 'Busque y consulte escrituras públicas en el índice de la Notaría Sarmiento Moreno en Valparaíso. Acceso rápido a información de escrituras por año, número de repertorio, materia y comparecientes.',
  keywords: 'índice escrituras, escrituras públicas, notaría valparaíso, repertorio, consulta escrituras, notaría sarmiento',
  openGraph: {
    title: 'Índice de Escrituras - Notaría Sarmiento Moreno',
    description: 'Busque y consulte escrituras públicas en el índice de la Notaría Sarmiento Moreno en Valparaíso.',
  }
};

export default function IndiceEscriturasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-notaria-azul mb-4">
              Índice de Escrituras
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consulte el índice de escrituras públicas de la Notaría Sarmiento Moreno. 
              Puede buscar por año, número de repertorio, materia o comparecientes.
            </p>
          </div>
          
          <IndiceEscriturasClient />
        </div>
      </div>
    </div>
  );
} 