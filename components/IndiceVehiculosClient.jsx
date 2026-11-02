"use client";

import { FiSearch, FiFilter, FiCalendar, FiUser, FiHash, FiTruck } from 'react-icons/fi';
import { useYearLazyData, useFilteredPagination } from '../utils/useFilteredPagination';
import Pagination from './Pagination';

const INITIAL_FILTERS = {
  repertorio: '',
  fecha: '',
  vendedor: '',
  comprador: '',
  patente: ''
};

function filterVehiculos(data, activeFilters) {
  const qRep = activeFilters.repertorio.trim().toLowerCase();
  const qFecha = activeFilters.fecha.trim();
  const qVend = activeFilters.vendedor.trim().toLowerCase();
  const qComp = activeFilters.comprador.trim().toLowerCase();
  const qPat = activeFilters.patente.trim().toLowerCase();

  if (!qRep && !qFecha && !qVend && !qComp && !qPat) {
    return data;
  }

  return data.filter((item) => {
    if (qRep) {
      const rep = item.Repertorio != null ? String(item.Repertorio).toLowerCase() : '';
      if (!rep.includes(qRep)) return false;
    }

    if (qFecha) {
      if (!item.Fecha || !item.Fecha.includes(qFecha)) return false;
    }

    if (qVend) {
      if (!item.Vendedor || !item.Vendedor.toLowerCase().includes(qVend)) return false;
    }

    if (qComp) {
      if (!item.Comprador || !item.Comprador.toLowerCase().includes(qComp)) return false;
    }

    if (qPat) {
      if (!item.Patente || !item.Patente.toLowerCase().includes(qPat)) return false;
    }

    return true;
  });
}

export default function IndiceVehiculosClient() {
  const {
    yearsIndex,
    selectedYear,
    changeYear,
    data,
    loading,
    error
  } = useYearLazyData('/data/vehiculos-index.json', 'vehiculos');

  const {
    filters,
    setFilters,
    filteredData,
    currentItems,
    currentPage,
    setCurrentPage,
    totalPages,
    paginate,
    applyFilters,
    resetFilters
  } = useFilteredPagination(data, INITIAL_FILTERS, filterVehiculos);

  const handleYearChange = (newYear) => {
    setCurrentPage(1);
    changeYear(newYear);
  };

  const clearFilters = () => {
    resetFilters();
    const defaultYear = yearsIndex[0]?.ano;
    if (defaultYear && selectedYear !== defaultYear) {
      changeYear(defaultYear);
    }
  };

  return (
    <div className="space-y-6">
      {/* Filtros de búsqueda */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center">
            <FiFilter className="text-notaria-azul mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Filtros de Búsqueda</h2>
          </div>
          <span className="text-xs text-gray-500">
            Los resultados se actualizan automáticamente mientras escribes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Año (Lazy Load) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiCalendar className="inline mr-1" />
              Año
            </label>
            <select
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-notaria-azul"
            >
              {yearsIndex.map((y) => (
                <option key={y.ano} value={y.ano}>
                  {y.ano} ({y.count} vehículos)
                </option>
              ))}
              <option value="ALL">Todos los años (Histórico completo)</option>
            </select>
          </div>

          {/* Número de Repertorio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FiHash className="inline mr-1" />
              Número de Repertorio
            </label>
            <input
              type="text"
              value={filters.repertorio}
              onChange={(e) => setFilters({ ...filters, repertorio: e.target.value })}
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
              onChange={(e) => setFilters({ ...filters, fecha: e.target.value })}
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
              onChange={(e) => setFilters({ ...filters, vendedor: e.target.value })}
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
              onChange={(e) => setFilters({ ...filters, comprador: e.target.value })}
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
              onChange={(e) => setFilters({ ...filters, patente: e.target.value })}
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
      <div className="bg-white rounded-lg shadow-md p-6 min-h-[400px]">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-notaria-azul"></div>
            <p className="mt-4 text-gray-500 font-medium">
              Cargando vehículos {selectedYear === 'ALL' ? 'de todos los años' : `del año ${selectedYear}`}...
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-medium">Error: {error}</p>
            <p className="text-red-500 mt-2">No se pudieron cargar los datos del índice de vehículos</p>
          </div>
        ) : (
          <>
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
                {selectedYear !== 'ALL' && (
                  <button
                    onClick={() => handleYearChange('ALL')}
                    className="mt-4 text-notaria-azul font-semibold hover:underline"
                  >
                    Buscar en todos los años
                  </button>
                )}
              </div>
            ) : (
              <>
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
                        <tr key={`${item.Repertorio}-${item.Fecha}-${index}`} className="hover:bg-gray-50">
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

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={paginate}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
