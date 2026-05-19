"use client";

import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiCalendar, FiUser, FiHash, FiTruck } from 'react-icons/fi';

export default function IndiceVehiculosClient() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados para los filtros
  const [filters, setFilters] = useState({
    repertorio: '',
    fecha: '',
    vendedor: '',
    comprador: '',
    patente: ''
  });

  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  // Cargar datos al montar el componente
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data_vehiculo.json');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Función para aplicar filtros
  const applyFilters = () => {
    let filtered = data;

    if (filters.repertorio) {
      filtered = filtered.filter(item => 
        item.Repertorio && 
        item.Repertorio.toString().toLowerCase().includes(filters.repertorio.toLowerCase())
      );
    }

    if (filters.fecha) {
      filtered = filtered.filter(item => 
        item.Fecha && item.Fecha.includes(filters.fecha)
      );
    }

    if (filters.vendedor) {
      filtered = filtered.filter(item => 
        item.Vendedor && 
        item.Vendedor.toLowerCase().includes(filters.vendedor.toLowerCase())
      );
    }

    if (filters.comprador) {
      filtered = filtered.filter(item => 
        item.Comprador && 
        item.Comprador.toLowerCase().includes(filters.comprador.toLowerCase())
      );
    }

    if (filters.patente) {
      filtered = filtered.filter(item => 
        item.Patente && 
        item.Patente.toLowerCase().includes(filters.patente.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    setFilters({
      repertorio: '',
      fecha: '',
      vendedor: '',
      comprador: '',
      patente: ''
    });
    setFilteredData(data);
    setCurrentPage(1);
  };

  // Calcular datos para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-notaria-azul"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-medium">Error: {error}</p>
        <p className="text-red-500 mt-2">No se pudieron cargar los datos del índice de vehículos</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros de búsqueda */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FiFilter className="text-notaria-azul mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Filtros de Búsqueda</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Número de Repertorio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiHash className="inline mr-1" />
              Número de Repertorio
            </label>
            <input
              type="text"
              value={filters.repertorio}
              onChange={(e) => setFilters({...filters, repertorio: e.target.value})}
              placeholder="Ej: 919"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiCalendar className="inline mr-1" />
              Fecha
            </label>
            <input
              type="text"
              value={filters.fecha}
              onChange={(e) => setFilters({...filters, fecha: e.target.value})}
              placeholder="Ej: 15/09/2021"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
            />
          </div>

          {/* Vendedor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiUser className="inline mr-1" />
              Vendedor
            </label>
            <input
              type="text"
              value={filters.vendedor}
              onChange={(e) => setFilters({...filters, vendedor: e.target.value})}
              placeholder="Ej: NUÑEZ BASTÍAS, ANIBAL ANTONIO"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
            />
          </div>

          {/* Comprador */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiUser className="inline mr-1" />
              Comprador
            </label>
            <input
              type="text"
              value={filters.comprador}
              onChange={(e) => setFilters({...filters, comprador: e.target.value})}
              placeholder="Ej: ROZAS MANOSALVA, OSVALDO"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
            />
          </div>

          {/* Patente */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiTruck className="inline mr-1" />
              Patente
            </label>
            <input
              type="text"
              value={filters.patente}
              onChange={(e) => setFilters({...filters, patente: e.target.value})}
              placeholder="Ej: SC.1330"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
            />
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={applyFilters}
            className="bg-notaria-azul text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FiSearch className="mr-2" />
            Buscar
          </button>
          <button
            onClick={clearFilters}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>

      {/* Resultados */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Resultados ({filteredData.length} vehículos encontrados)
          </h2>
          <div className="text-sm text-gray-600">
            Página {currentPage} de {totalPages}
          </div>
        </div>

        {currentItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FiSearch className="mx-auto h-12 w-12 mb-4 text-gray-300" />
            <p>No se encontraron vehículos con los filtros aplicados</p>
          </div>
        ) : (
          <>
            {/* Tabla de resultados */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      N° Repertorio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vendedor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Comprador
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patente
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.Repertorio || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.Fecha || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {item.Vendedor || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {item.Comprador || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.Patente || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  
                  {/* Primera página */}
                  {currentPage > 3 && (
                    <>
                      <button
                        onClick={() => paginate(1)}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        1
                      </button>
                      {currentPage > 4 && (
                        <span className="px-2 text-gray-400">...</span>
                      )}
                    </>
                  )}
                  
                  {/* Páginas alrededor de la actual */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let page;
                    if (totalPages <= 5) {
                      page = i + 1;
                    } else if (currentPage <= 3) {
                      page = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      page = totalPages - 4 + i;
                    } else {
                      page = currentPage - 2 + i;
                    }
                    
                    if (page > 0 && page <= totalPages) {
                      return (
                        <button
                          key={page}
                          onClick={() => paginate(page)}
                          className={`px-3 py-2 text-sm font-medium rounded-md ${
                            currentPage === page
                              ? 'bg-notaria-azul text-white'
                              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    return null;
                  })}
                  
                  {/* Última página */}
                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && (
                        <span className="px-2 text-gray-400">...</span>
                      )}
                      <button
                        onClick={() => paginate(totalPages)}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                  
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
} 