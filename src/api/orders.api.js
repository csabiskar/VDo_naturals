import API from "./axiosInstance";

export const getOrders = async (data) => {
  try {
    const res = await API.get("/order/user",data);
    return res.data.orders;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
