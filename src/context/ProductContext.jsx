// src/context/ProductContext.jsx

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAllProducts, getSingleProduct } from "../api/products.api";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "./CategoryContext";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeCategory, setActiveCategory] = useState("Noodles");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const { categories } = useCategories();

  // ================= FETCH ALL PRODUCTS ONCE =================
  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      try {
        const data = await getAllProducts({ limit: 1000 });
        setAllProducts(data.products || []);
      } catch (e) {
        setError(e.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  // ================= SYNC CATEGORY FROM URL =================
  useEffect(() => {
    if (!categoryId || !categories?.length) return;

    const matched = categories.find((c) => c._id === categoryId);
    if (matched) setActiveCategory(matched.categoryName);
  }, [categoryId, categories]);

  // filter by price
  const getMinPrice = (product) => {
    if (product.hasVariants && product.variants?.length) {
      return Math.min(
        ...product.variants.map((v) => v.discountPrice || v.price || Infinity),
      );
    }

    return product.discountPrice || product.price || Infinity;
  };

  //filter by rating
  const getRating = (product) => {
    if (!product.ratings?.length) return 0;

    const total = product.ratings.reduce((sum, r) => sum + r.value, 0);
    return total / product.ratings.length;
  };

  // ================= GRID PRODUCTS =================
  const products = useMemo(() => {
    return allProducts.filter((p) => {
      if (p.isDeleted) return false;
      // search filter
      if (searchTerm) {
        const text = `${p.name} ${p.description}`.toLowerCase();
        if (!text.includes(searchTerm.toLowerCase())) return false;
      }

      if (activeCategory && p.categoryId?.categoryName !== activeCategory)
        return false;

      const price = getMinPrice(p);

      if (price < priceRange[0] || price > priceRange[1]) return false;

      if (ratingFilter && getRating(p) < ratingFilter) return false;

      return true;
    });
  }, [allProducts, activeCategory, priceRange, ratingFilter, searchTerm]);

  // ================= HELPER : BEST DEAL =================
  const getBestDeal = (product) => {
    if (product.hasVariants && product.variants?.length) {
      const best = [...product.variants].sort(
        (a, b) => b.discountPercent - a.discountPercent,
      )[0];

      return {
        discount: best.discountPercent || 0,
        price: best.price || Infinity,
      };
    }

    return {
      discount: product.discountPercent || 0,
      price: product.price || Infinity,
    };
  };

  // ================= HOT DEALS =================
  const hotDeals = useMemo(() => {
    return allProducts
      .filter((p) => !p.isDeleted)
      .map((p) => ({
        ...p,
        __deal: getBestDeal(p),
      }))
      .filter((p) => p.__deal.discount > 0)
      .sort((a, b) => {
        if (b.__deal.discount !== a.__deal.discount) {
          return b.__deal.discount - a.__deal.discount;
        }
        return a.__deal.price - b.__deal.price;
      })
      .slice(0, 7);
  }, [allProducts]);

  // ================= FEATURED =================
  const featuredProducts = useMemo(() => {
    return [...hotDeals].slice(0, 4);
  }, [hotDeals]);

  // ================= CATEGORY HELPER =================
  const setCategoryFromUI = (categoryName, categoryId) => {
    setActiveCategory(categoryName);
    if (categoryId) setSearchParams({ categoryId });
  };

  const setPriceFilter = (range) => {
    setPriceRange(range);
  };

  // ================= SINGLE PRODUCT =================
  const fetchProductById = async (id) => {
    return await getSingleProduct(id);
  };

  //  console.log(products)


  return (
    <ProductContext.Provider
      value={{
        products, // grid
        allProducts,
        hotDeals,
        featuredProducts,
        activeCategory,
        setActiveCategory,
        setCategoryFromUI,
        priceRange,
        setPriceFilter,
        ratingFilter,
        setRatingFilter,
        searchTerm,
        setSearchTerm,

        fetchProductById,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const ctx = useContext(ProductContext);
  return ctx || {};
};

