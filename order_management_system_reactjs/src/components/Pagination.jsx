import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage = 1, totalPages = 6, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            // Toutes les pages
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(
                    1,
                    "...",
                    totalPages - 3,
                    totalPages - 2,
                    totalPages - 1,
                    totalPages
                );
            } else {
                pages.push(
                    1,
                    "...",
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    "...",
                    totalPages
                );
            }
        }

        return pages;
    };

    return (
        <div className="flex justify-end items-center space-x-2 overflow-x-auto">
            <button
                className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 cursor-pointer  disabled:cursor-not-allowed"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft size={18} />
            </button>

            {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                    <span key={idx} className="px-2 text-gray-400 select-none">
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium border cursor-pointer
              ${
                  page === currentPage
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:bg-gray-100"
              }
            `}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;
