import API from "./axiosInstance";

// Fetch all products
export const getAllProducts = async () => {
  try {
    const res = await API.get("/products");
    return res.data; 
  } catch (error) {
    console.error("Error fetching all products:", error);
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
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
