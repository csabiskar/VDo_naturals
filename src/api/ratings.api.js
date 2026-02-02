import API from "./axiosInstance";

export const addRating = async (productId, data) => {
  try {
    const res = await API.post(`/products/${productId}/ratings`, data);
    return res.data;
  } catch (error) {
    console.error("Error adding ratings:", error);
    throw error;
  }
};
