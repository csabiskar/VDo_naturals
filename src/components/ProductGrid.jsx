import { useProducts } from "../context/ProductContext";
import Breadcrumb from "./Breadcrumb";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import { useMemo, useState, useEffect } from "react";

export default function ProductGrid() {
  const { products, totalCount, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // match API limit if needed

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  }, [products, currentPage]);

  // Calculate total pages dynamically
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const getPages = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  if (loading) return <Loader />;

  console.log(products);

  return (
    <>
      {/* PRODUCT COUNT */}
      <div className="mt-20 sm:mt-10 md:mt-20 xl:mt-20 text-md text-gray-600">
        <Breadcrumb />
      </div>

      {/* PRODUCT GRID */}
      {products.length === 0 ? (
        <p className="text-center mt-10">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  gap-6 mt-6 sm:mt-9 lg:pb-36 pb-12">
          {paginatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages >= 1 && (
        <div className="flex justify-start items-center mt-10 mb-[70px] gap-3 flex-wrap ml-40">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-9 h-9 flex items-center bg-gray-50 justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            &lt;
          </button>

          {getPages().map((page, idx) =>
            page === "..." ? (
              <span key={idx} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-full border transition
      ${
        page === currentPage
          ? "bg-[#00B207] text-white scale-110"
          : "border-gray-300 hover:bg-gray-100"
      }`}
              >
                {page}
              </button>
            ),
          )}

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            className="w-9 h-9 flex items-center bg-gray-50 justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
}
