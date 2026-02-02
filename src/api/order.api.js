// api/order.api.js
import API from "./axiosInstance";

export const placeOrder = async (data) => {
  const res = await API.post("/order", data);
  return res.data;
};

export const getOrders = async () => {
  try {
    const res = await API.get("/order/user");
    return res.data.orders;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const getSingleOrders = async (id) => {
  try {
    const res = await API.get(`/order/${id}`);
    return res.data
  } catch (error) {
    console.error("Error fetching  singleorder:", error);
    throw error;
  }
};