import axios from "axios";

const productAPI = axios.create({
  baseURL: "https://vdo-naturals-production.up.railway.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default productAPI;
