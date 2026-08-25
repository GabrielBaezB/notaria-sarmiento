"use client";

import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiCalendar, FiFileText, FiUser, FiHash, FiDownload } from 'react-icons/fi';

export default function IndiceEscriturasClient() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para los filtros
  const [filters, setFilters] = useState({
    ano: '',
    numeroRepertorio: '',
    materia: '',
    compareciente: '',
    fechaEscritura: ''
  });

  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  // Estados para pestañas y lista de PDFs
  const [activeTab, setActiveTab] = useState('buscador'); // 'buscador' | 'pdfs'
  const [pdfList, setPdfList] = useState([]);
  const [loadingPdfs, setLoadingPdfs] = useState(true);

  // Cargar datos al montar el componente
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Error al cargar los datos');
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const loadPdfList = async () => {
      try {
        const response = await fetch('/indices-pdf/list.json');
        if (response.ok) {
          const json = await response.json();
          setPdfList(json);
        }
      } catch (e) {
        console.error('Error al cargar la lista de PDFs', e);
      } finally {
        setLoadingPdfs(false);
      }
    };

    loadData();
    loadPdfList();
  }, []);

  // Función para aplicar filtros
  const applyFilters = () => {
    let filtered = data;

    if (filters.ano) {
      filtered = filtered.filter(item =>
        item.ano && item.ano.toLowerCase().includes(filters.ano.toLowerCase())
      );
    }

    if (filters.numeroRepertorio) {
      filtered = filtered.filter(item =>
        item['Numero de repertorio'] &&
        item['Numero de repertorio'].toLowerCase().includes(filters.numeroRepertorio.toLowerCase())
      );
    }

    if (filters.materia) {
      filtered = filtered.filter(item =>
        item.materia && item.materia.toLowerCase().includes(filters.materia.toLowerCase())
      );
    }

    if (filters.compareciente) {
      filtered = filtered.filter(item =>
        (item['Compareciente 1'] &&
          item['Compareciente 1'].toLowerCase().includes(filters.compareciente.toLowerCase())) ||
        (item['Compareciente 2'] &&
          item['Compareciente 2'].toLowerCase().includes(filters.compareciente.toLowerCase()))
      );
    }

    if (filters.fechaEscritura) {
      filtered = filtered.filter(item =>
        item['Fecha de escritura'] &&
        item['Fecha de escritura'].includes(filters.fechaEscritura)
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    setFilters({
      ano: '',
      numeroRepertorio: '',
      materia: '',
      compareciente: '',
      fechaEscritura: ''
    });
    setFilteredData(data);
    setCurrentPage(1);
  };

  // Calcular datos para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6">
      {/* Pestañas de Navegación */}
      <div className="flex flex-wrap border-b border-gray-200 bg-white px-2 pt-2 rounded-t-lg shadow-sm">
        <button
          onClick={() => setActiveTab('buscador')}
          className={`py-3 px-6 font-medium text-sm border-b-2 transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'buscador'
              ? 'border-notaria-azul text-notaria-azul font-semibold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <FiSearch className="text-base" />
          Buscador de Escrituras
        </button>
        <button
          onClick={() => setActiveTab('pdfs')}
          className={`py-3 px-6 font-medium text-sm border-b-2 transition-all duration-200 flex items-center gap-2 ${
            activeTab === 'pdfs'
              ? 'border-notaria-azul text-notaria-azul font-semibold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          <FiFileText className="text-base" />
          Índices en PDF (Mensuales)
        </button>
      </div>

      {/* VISTA 1: BUSCADOR DE ESCRITURAS */}
      {activeTab === 'buscador' && (
        <>
          {/* Filtros de búsqueda */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FiFilter className="text-notaria-azul mr-2 text-xl" />
              <h2 className="text-xl font-semibold text-gray-800">Filtros de Búsqueda</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiUser className="inline mr-1" />
                  Compareciente
                </label>
                <input
                  type="text"
                  value={filters.compareciente}
                  onChange={(e) => setFilters({ ...filters, compareciente: e.target.value })}
                  placeholder="Buscar en ambos comparecientes"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiCalendar className="inline mr-1" />
                  Año
                </label>
                <input
                  type="text"
                  value={filters.ano}
                  onChange={(e) => setFilters({ ...filters, ano: e.target.value })}
                  placeholder="Ej: 2026"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiFileText className="inline mr-1" />
                  Materia
                </label>
                <input
                  type="text"
                  value={filters.materia}
                  onChange={(e) => setFilters({ ...filters, materia: e.target.value })}
                  placeholder="Ej: RENUNCIA A LOS GANANCIALES"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiHash className="inline mr-1" />
                  Número de Repertorio
                </label>
                <input
                  type="text"
                  value={filters.numeroRepertorio}
                  onChange={(e) => setFilters({ ...filters, numeroRepertorio: e.target.value })}
                  placeholder="Ej: 539"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiCalendar className="inline mr-1" />
                  Fecha de Escritura
                </label>
                <input
                  type="text"
                  value={filters.fechaEscritura}
                  onChange={(e) => setFilters({ ...filters, fechaEscritura: e.target.value })}
                  placeholder="Ej: 03/07/2025"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notaria-azul"
                />
              </div>
            </div>

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
          <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">
            {loading ? (
              <div className="flex flex-col justify-center items-center py-32 h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-notaria-azul"></div>
                <p className="mt-4 text-gray-500 font-medium tracking-wide">Cargando base de datos...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mt-8">
                <p className="text-red-600 font-medium">Error: {error}</p>
                <p className="text-red-500 mt-2">No se pudieron cargar los datos del índice</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Resultados ({filteredData.length} escrituras encontradas)
                  </h2>
                  <div className="text-sm text-gray-600">
                    Página {currentPage} de {totalPages}
                  </div>
                </div>

                {currentItems.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    <FiSearch className="mx-auto h-16 w-16 mb-4 text-gray-300" />
                    <p className="text-lg">No se encontraron escrituras con los filtros aplicados</p>
                  </div>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Repertorio</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materia</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compareciente 1</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compareciente 2</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {currentItems.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.ano || '-'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item['Numero de repertorio'] || '-'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item['Fecha de escritura'] || '-'}</td>
                              <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item.materia || '-'}</td>
                              <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item['Compareciente 1'] || '-'}</td>
                              <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item['Compareciente 2'] || '-'}</td>
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

                          {currentPage > 3 && (
                            <>
                              <button onClick={() => paginate(1)} className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">1</button>
                              {currentPage > 4 && <span className="px-2 text-gray-400">...</span>}
                            </>
                          )}

                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let page;
                            if (totalPages <= 5) page = i + 1;
                            else if (currentPage <= 3) page = i + 1;
                            else if (currentPage >= totalPages - 2) page = totalPages - 4 + i;
                            else page = currentPage - 2 + i;

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

                          {currentPage < totalPages - 2 && (
                            <>
                              {currentPage < totalPages - 3 && <span className="px-2 text-gray-400">...</span>}
                              <button onClick={() => paginate(totalPages)} className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">{totalPages}</button>
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
              </>
            )}
          </div>
        </>
      )}

      {/* VISTA 2: DESCARGA DE ÍNDICES EN PDF */}
      {activeTab === 'pdfs' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-notaria-azul mb-2 flex items-center gap-2">
              <FiFileText />
              Índices Mensuales en PDF
            </h2>
            <p className="text-gray-600">
              Descargue o visualice los archivos PDF del índice de escrituras publicados mensualmente por la Notaría Sarmiento Moreno.
            </p>
          </div>

          {loadingPdfs ? (
            <div className="flex flex-col justify-center items-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-notaria-azul"></div>
              <p className="mt-4 text-gray-500">Cargando listado de PDFs...</p>
            </div>
          ) : pdfList.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <FiFileText className="mx-auto h-12 w-12 text-gray-300 mb-2" />
              <p className="text-gray-500">No hay índices en formato PDF disponibles en este momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfList.map((pdf, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-notaria-dorado group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-50 text-notaria-azul text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100 group-hover:bg-blue-100 transition-colors">
                        PDF Oficial
                      </span>
                      <span className="text-xs font-semibold text-notaria-dorado">{pdf.ano}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-notaria-azul transition-colors">
                      Índice de {pdf.mes} {pdf.ano}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mb-4 truncate">
                      {pdf.filename}
                    </p>
                  </div>
                  <div className="flex gap-2.5 mt-2">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2.5 rounded-lg text-sm font-semibold transition duration-200 flex items-center justify-center shadow-sm"
                    >
                      Ver
                    </a>
                    <a
                      href={pdf.url}
                      download={pdf.filename}
                      className="flex-1 text-center bg-notaria-azul text-white hover:bg-blue-800 px-3 py-2.5 rounded-lg text-sm font-semibold transition duration-200 flex items-center justify-center gap-1 shadow-sm"
                    >
                      <FiDownload className="text-xs" />
                      Descargar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}