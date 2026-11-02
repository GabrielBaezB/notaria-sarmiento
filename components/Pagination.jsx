export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-6">
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        {currentPage > 3 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              1
            </button>
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
                onClick={() => onPageChange(page)}
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
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </nav>
    </div>
  );
}

