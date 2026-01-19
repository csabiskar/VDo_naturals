import API from "./axiosInstance";

// Fetch all products or filter by params
export const getAllProducts = async (params = {}) => {
  try {
    const res = await API.get("/products", { params });
    return res.data; // { products: [], currentPage, totalPages, ... }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch a single product by ID
export const getSingleProduct = async (id) => {
  if (!id) throw new Error("Product ID is required");
  try {
    const res = await API.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};
