import productAPI from "./axiosInstance";

export const getAllProducts = async () => {
  const res = await productAPI.get("/products");
  return res.data;
};
