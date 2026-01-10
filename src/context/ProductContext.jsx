import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAllProducts ,getSingleProduct} from "../api/products.api";

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
        setAllProducts(data.products); 
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const fetchProductById =async (id) =>{
    try {
        const product = await getSingleProduct(id)
    return product
    } catch (error) {
      throw error;
    }
  }


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
    fetchProductById,
    loading,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
