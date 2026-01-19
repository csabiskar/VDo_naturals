import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getAllProducts,
  getSingleProduct,
} from "../api/products.api";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "./CategoryContext"; // ✅ ADDED

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Noodles");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // price

  

  // 🔥 query param support
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  // ✅ ADDED: get all categories to match categoryId
  const { categories } = useCategories();

  // 🔥 fetch products whenever categoryId changes
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const params = {};
        if (categoryId) params.categoryId = categoryId;

        const data = await getAllProducts(params);
        setAllProducts(data.products || []);
      } catch (e) {
        console.error("Error fetching products:", e);
        setError(e.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId]);

  // ✅ NEW LOGIC: sync activeCategory on page refresh
  useEffect(() => {
    if (!categoryId || !categories?.length) return;

    const matchedCategory = categories.find(
      (cat) => cat._id === categoryId
    );

    if (matchedCategory) {
      setActiveCategory(matchedCategory.categoryName);
    }
  }, [categoryId, categories]);

  // Fetch single product by ID
  const fetchProductById = async (id) => {
    try {
      const product = await getSingleProduct(id);
      return product;
    } catch (error) {
      throw error;
    }
  };

  // ✅ existing filter logic (unchanged)
  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (p) =>
        !p.isDeleted &&
        (!activeCategory || p.categoryId?.categoryName === activeCategory)
    );
  }, [allProducts, activeCategory]);

  // 🔥 existing helper (unchanged)
  const setCategoryFromUI = (categoryName, categoryId) => {
    setActiveCategory(categoryName);
    if (categoryId) {
      setSearchParams({ categoryId });
    }
  };

  const value = {
    products: filteredProducts,
    totalCount: filteredProducts.length,
    activeCategory,
    setActiveCategory,
    setCategoryFromUI,
    fetchProductById,
    loading,
    error,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
