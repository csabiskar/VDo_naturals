import API from "./axiosInstance";

export const getAddress = async (data) => {
  try {
    const res = await API.get("/address", data);
    return res.data;
  } catch (error) {
    console.error("Error fetching address:", error);
    throw error;
  }
};

export const editAddress = async (addressId, data) => {
  try {
    const res = await API.put(`/address/${addressId}`, data);
    return res.data;
  } catch (error) {
    console.error("Error updating address", error);
    throw error;
  }
};
