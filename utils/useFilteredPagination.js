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
  const yearsIndexRef = useRef([]);
  const indexPromiseRef = useRef(null);
  const abortControllerRef = useRef(null);
  const requestIdRef = useRef(0);

  const loadYearData = useCallback(async (targetYear, explicitYears) => {
    if (!targetYear) return;

    // Cancelar cualquier petición anterior en curso para evitar condiciones de carrera
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const currentRequestId = ++requestIdRef.current;

    const isCurrentRequest = () =>
      currentRequestId === requestIdRef.current && !controller.signal.aborted;

    setLoading(true);
    setError(null);

    try {
      if (targetYear === 'ALL') {
        let availableYears = explicitYears ?? yearsIndexRef.current;

        // Si se invocó changeYear('ALL') antes de que termine la carga del índice inicial, esperar
        if ((!availableYears || availableYears.length === 0) && indexPromiseRef.current) {
          availableYears = await indexPromiseRef.current;
        }
        if (!isCurrentRequest()) return;

        const yearsToLoad = (availableYears || []).map((y) => y.ano).filter(Boolean);
        const missingYears = yearsToLoad.filter((yr) => !yearCacheRef.current.has(yr));

        if (missingYears.length > 0) {
          const results = await Promise.allSettled(
            missingYears.map(async (yr) => {
              const res = await fetch(`/data/${filePrefix}-${yr}.json`, {
                signal: controller.signal
              });
              if (!res.ok) throw new Error(`Error al cargar el año ${yr}`);
              const json = await res.json();
              return [yr, json];
            })
          );

          if (!isCurrentRequest()) return;

          const failedErrors = [];
          for (const result of results) {
            if (result.status === 'fulfilled') {
              const [yr, json] = result.value;
              yearCacheRef.current.set(yr, json);
            } else if (result.reason?.name !== 'AbortError') {
              failedErrors.push(result.reason?.message || 'Error al cargar datos de un año');
            }
          }

          const combined = yearsToLoad.flatMap((yr) => yearCacheRef.current.get(yr) || []);
          setData(combined);

          if (failedErrors.length > 0 && combined.length === 0) {
            setError(failedErrors[0]);
          }
          return;
        }

        const combined = yearsToLoad.flatMap((yr) => yearCacheRef.current.get(yr) || []);
        if (isCurrentRequest()) {
          setData(combined);
        }
      } else {
        if (!yearCacheRef.current.has(targetYear)) {
          const response = await fetch(`/data/${filePrefix}-${targetYear}.json`, {
            signal: controller.signal
          });
          if (!response.ok) throw new Error(`Error al cargar los datos del año ${targetYear}`);
          const jsonData = await response.json();
          if (!isCurrentRequest()) return;
          yearCacheRef.current.set(targetYear, jsonData);
        }

        if (isCurrentRequest()) {
          setData(yearCacheRef.current.get(targetYear) || []);
        }
      }
    } catch (err) {
      if (err?.name === 'AbortError' || !isCurrentRequest()) return;
      setError(err.message);
    } finally {
      if (isCurrentRequest()) {
        setLoading(false);
      }
    }
  }, [filePrefix]);

  useEffect(() => {
    let isMounted = true;
    const indexController = new AbortController();

    yearCacheRef.current.clear();
    yearsIndexRef.current = [];
    requestIdRef.current = 0;

    const fetchIndex = async () => {
      const res = await fetch(indexUrl, { signal: indexController.signal });
      if (!res.ok) throw new Error('Error al cargar el índice de años');
      const indexJson = await res.json();
      yearsIndexRef.current = indexJson;
      return indexJson;
    };

    const init = async () => {
      try {
        const indexPromise = fetchIndex();
        indexPromiseRef.current = indexPromise;
        const indexJson = await indexPromise;
        if (!isMounted) return;

        setYearsIndex(indexJson);
        // Solo cargar el año por defecto si el usuario no seleccionó otro año mientras cargaba el índice
        if (requestIdRef.current === 0) {
          const defaultYear = indexJson[0]?.ano || '';
          setSelectedYear(defaultYear);
          await loadYearData(defaultYear, indexJson);
        }
      } catch (err) {
        if (err?.name === 'AbortError') return;
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    init();
    return () => {
      isMounted = false;
      indexController.abort();
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      requestIdRef.current += 1;
    };
  }, [indexUrl, loadYearData]);

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
