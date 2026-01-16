import API from "./axiosInstance";

export const getWishlistAPI = () => API.get("/wishList");

export const addWishlistAPI = (data) =>
  API.post("/wishList", data);

export const deleteWishlistAPI = (productId) =>
  API.delete(`/wishList/${productId}`);
