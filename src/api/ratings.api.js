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

export const editRating = async (productId, userId) => {
  try {
    const res = await API.put(`/products/${productId}/ratings/${userId}`)
    return res.data
  } catch (error) {
    console.error("Error editing ratings:", error);
    throw error;
  }
};
