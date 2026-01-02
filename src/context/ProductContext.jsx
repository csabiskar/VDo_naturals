import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAllProducts } from "../api/products.api";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Noodles");
  const [loading, setLoading] = useState(true);

  // Fetch once
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setAllProducts(data.products); // 👈 IMPORTANT
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter logic (industry standard)
  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (p) =>
        !p.isDeleted &&
        p.categoryId?.categoryName === activeCategory
    );
  }, [allProducts, activeCategory]);

  const value = {
    products: filteredProducts,
    totalCount: filteredProducts.length,
    activeCategory,
    setActiveCategory,
    loading,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
