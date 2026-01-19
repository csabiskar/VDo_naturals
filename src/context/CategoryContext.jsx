import { createContext, useContext, useEffect, useState } from "react";
import { getCategories } from "../api/category.api";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError(null);
      try {
        const data = await getCategories();
        setCategories(data || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategories = () => useContext(CategoryContext);
