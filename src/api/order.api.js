// api/order.api.js
import API from "./axiosInstance";

export const placeOrder = async (data) => {
  const res = await API.post("/order", data);
  return res.data;
};
