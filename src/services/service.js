import API from "../api/axiosInstance";

/* SEND OTP */
export const sendOTP = async (contact) => {
  console.log("SEND OTP CLICKED:", contact); // debug
  const response = await API.post("/auth/easy-login", { emailOrPhone: contact });
  return response.data;
};

/* VERIFY OTP */
export const verifyOTP = async ({ contact, otp }) => {
  console.log("VERIFY OTP CLICKED:", contact, otp); // debug
  const response = await API.post("/auth/verify-otp", { emailOrPhone: contact, otp });
  return response.data; // { token, user }
};
