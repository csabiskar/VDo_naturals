import { useProducts } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { products, totalCount, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* PRODUCT COUNT */}
      <div className="mb-6 text-sm text-gray-600">
        <span className="font-semibold text-black">
          {totalCount}
        </span>{" "}
        Products Found
      </div>

      {products.length === 0 ? (
        <p className="text-center">No products found</p>
      ) : (
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          xl:grid-cols-3 2xl:grid-cols-5 gap-6
        ">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
