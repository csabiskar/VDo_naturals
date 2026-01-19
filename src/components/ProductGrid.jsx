import { useProducts } from "../context/ProductContext";
import Breadcrumb from "./Breadcrumb";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductGrid() {
  const { products, totalCount, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <Loader/>

  // Calculate total pages dynamically
  const itemsPerPage = 10; // match API limit if needed
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <>
      {/* PRODUCT COUNT */}
      <div className="mt-6 sm:mt-10 md:mt-20 xl:mt-20 text-md text-gray-600">
        <Breadcrumb/>
      </div>

      {/* PRODUCT GRID */}
      {products.length === 0 ? (
        <p className="text-center mt-10">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6 mt-6 sm:mt-9 lg:pb-36">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 transition ${
                page === currentPage ? "bg-[#00B207] text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
}
