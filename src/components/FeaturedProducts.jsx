import React, { useMemo } from "react";
import { useProducts } from "../context/ProductContext";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

// Helper to get max discount for a product
const getMaxDiscount = (product) => {
  if (product.hasVariants && product.variants?.length > 0) {
    return Math.max(...product.variants.map(v => v.discountPercent || 0));
  }
  return product.discountPercent || 0;
};

// Helper to get lowest price for a product
const getMinPrice = (product) => {
  if (product.hasVariants && product.variants?.length > 0) {
    return Math.min(...product.variants.map(v => v.price || Infinity));
  }
  return product.price || Infinity;
};

function FeaturedProducts() {
  const { products, loading } = useProducts();

  const top4Products = useMemo(() => {
    if (!products?.length) return [];

    // Map products with discount and minPrice
    const mapped = products.map(product => ({
      ...product,
      maxDiscount: getMaxDiscount(product),
      minPrice: getMinPrice(product)
    }));

    // Filter: keep products with discount > 0 OR non-variant low price
    const filtered = mapped.filter(p => 
      p.maxDiscount > 0 || (!p.hasVariants && p.price > 0)
    );

    // Sort: first by discount descending, then by price ascending
    filtered.sort((a, b) => {
      if (b.maxDiscount !== a.maxDiscount) {
        return b.maxDiscount - a.maxDiscount;
      }
      // For products with 0 discount, sort by price ascending
      return a.minPrice - b.minPrice;
    });

    // Take top 4
    return filtered.slice(0, 4);

  }, [products]);

  if (loading) return <Loader />;

  return (
    <section className="py-12">
      <div className="mx-4 sm:mx-8 lg:mx-20">
        <h2 className="mb-6 text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-gray-900">
          Featured Products
        </h2>

        {top4Products.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No discounted products available
          </p>
        ) : (
          <div
            className="
            mt-9
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {top4Products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
