import IndiceVehiculosClient from '../../components/IndiceVehiculosClient';

export const metadata = {
  title: 'Índice de Vehículos - Notaría Sarmiento Moreno',
  description: 'Busque y consulte el índice de vehículos en la Notaría Sarmiento Moreno en Valparaíso. Acceso rápido a información de transferencias de vehículos por repertorio, fecha, vendedor, comprador y patente.',
  keywords: 'índice vehículos, transferencias vehículos, notaría valparaíso, repertorio vehículos, consulta vehículos, notaría sarmiento, patente vehículo',
  openGraph: {
    title: 'Índice de Vehículos - Notaría Sarmiento Moreno',
    description: 'Busque y consulte el índice de vehículos en la Notaría Sarmiento Moreno en Valparaíso.',
  }
};

export default function IndiceVehiculosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-notaria-azul mb-4">
              Índice de Vehículos
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consulte el índice de transferencias de vehículos de la Notaría Sarmiento Moreno. 
              Puede buscar por repertorio, fecha, vendedor, comprador o patente del vehículo.
            </p>
          </div>
          
          <IndiceVehiculosClient />
        </div>
      </div>
    </div>
  );
} 