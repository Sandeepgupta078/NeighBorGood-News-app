import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 3;

    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-4 py-2 mx-1 border rounded-lg ${
              page === i
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = Math.max(page - 2, 1);
      let endPage = Math.min(page + 2, totalPages);

      if (startPage <= 2) {
        startPage = 1;
        endPage = Math.min(maxPageNumbers, totalPages);
      }

      if (endPage >= totalPages - 1) {
        endPage = totalPages;
        startPage = Math.max(totalPages - maxPageNumbers + 1, 1);
      }

      if (startPage > 1) {
        pageNumbers.push(
          <button
            key={1}
            onClick={() => setPage(1)}
            className={`px-4 py-2 mx-1 border rounded-lg ${
              page === 1
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300"
            }`}
          >
            {1}
          </button>
        );
        if (startPage > 2) {
          pageNumbers.push(
            <span key="start-ellipsis" className="px-4 py-2">
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-4 py-2 mx-1 border rounded-lg ${
              page === i
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300"
            }`}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <span key="end-ellipsis" className="px-4 py-2">
              ...
            </span>
          );
        }
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => setPage(totalPages)}
            className={`px-4 py-2 mx-1 border rounded-lg ${
              page === totalPages
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300"
            }`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center my-4">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className={`px-4 py-2 mx-1 border rounded-lg ${
          page === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300"
        }`}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className={`px-4 py-2 mx-1 border rounded-lg ${
          page === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;