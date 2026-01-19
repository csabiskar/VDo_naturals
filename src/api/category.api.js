import API from "./axiosInstance";

export const getCategories = async () => {
  try {
    const res = await API.get("/category");
    return res.data; // [{ _id, categoryName, ... }]
  } catch (error) {
    const message =
      error.response?.data?.message || "Failed to fetch categories";
    throw { status: error.response?.status, message };
  }
};
