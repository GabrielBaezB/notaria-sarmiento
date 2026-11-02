import { useState, useEffect, useMemo, useRef, useCallback } from 'react';

/**
 * Hook compartido para carga diferida (lazy-loading) por año con caché en memoria.
 * Evita descargar el JSON histórico completo en cada visita.
 */
export function useYearLazyData(indexUrl, filePrefix) {
  const [yearsIndex, setYearsIndex] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const yearCacheRef = useRef(new Map());

  const loadYearData = useCallback(async (targetYear, availableYears = yearsIndex) => {
    if (!targetYear) return;
    setLoading(true);
    setError(null);

    try {
      if (targetYear === 'ALL') {
        const yearsToLoad = availableYears.map((y) => y.ano);
        const missingYears = yearsToLoad.filter((yr) => !yearCacheRef.current.has(yr));

        if (missingYears.length > 0) {
          const responses = await Promise.all(
            missingYears.map(async (yr) => {
              const res = await fetch(`/data/${filePrefix}-${yr}.json`);
              if (!res.ok) throw new Error(`Error al cargar el año ${yr}`);
              const json = await res.json();
              return [yr, json];
            })
          );
          for (const [yr, json] of responses) {
            yearCacheRef.current.set(yr, json);
          }
        }

        const combined = yearsToLoad.flatMap((yr) => yearCacheRef.current.get(yr) || []);
        setData(combined);
      } else {
        if (!yearCacheRef.current.has(targetYear)) {
          const response = await fetch(`/data/${filePrefix}-${targetYear}.json`);
          if (!response.ok) throw new Error(`Error al cargar los datos del año ${targetYear}`);
          const jsonData = await response.json();
          yearCacheRef.current.set(targetYear, jsonData);
        }
        setData(yearCacheRef.current.get(targetYear) || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filePrefix, yearsIndex]);

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      try {
        const res = await fetch(indexUrl);
        if (!res.ok) throw new Error('Error al cargar el índice de años');
        const indexJson = await res.json();
        if (!isMounted) return;

        setYearsIndex(indexJson);
        const defaultYear = indexJson[0]?.ano || '';
        setSelectedYear(defaultYear);
        await loadYearData(defaultYear, indexJson);
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    init();
    return () => {
      isMounted = false;
    };
  }, [indexUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeYear = useCallback((newYear) => {
    setSelectedYear(newYear);
    loadYearData(newYear);
  }, [loadYearData]);

  return {
    yearsIndex,
    selectedYear,
    changeYear,
    data,
    loading,
    error
  };
}

/**
 * Hook compartido para manejo de filtros reactivos con debounce,
 * filtrado en una sola pasada memorizado (useMemo) y paginación.
 */
export function useFilteredPagination(data, initialFilters, filterFn, itemsPerPage = 20) {
  const [filters, setFilters] = useState(initialFilters);
  const [debouncedFilters, setDebouncedFilters] = useState(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce reactivo de 250ms al escribir en cualquier filtro
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(filters);
      setCurrentPage(1);
    }, 250);

    return () => clearTimeout(timer);
  }, [filters]);

  // Filtrado en una sola pasada con términos pre-normalizados
  const filteredData = useMemo(() => {
    return filterFn(data, debouncedFilters);
  }, [data, debouncedFilters, filterFn]);

  // Aplicar filtros inmediatamente (ej. botón Buscar)
  const applyFilters = useCallback(() => {
    setDebouncedFilters(filters);
    setCurrentPage(1);
  }, [filters]);

  // Reiniciar filtros a su valor inicial
  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
    setDebouncedFilters(initialFilters);
    setCurrentPage(1);
  }, [initialFilters]);

  // Cálculo de elementos de la página actual
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredData, currentPage, itemsPerPage]);

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  return {
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
  };
}
