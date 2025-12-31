// Mock API services, replace with real endpoints

export const sendOTP = async (contact) => {
  console.log("Send OTP:", contact);
  return Promise.resolve({ success: true });
};

export const verifyOTP = async (otp) => {
  console.log("Verify OTP:", otp);
  // return fake token
  return Promise.resolve({ token: "FAKE_JWT_TOKEN_123456" });
};
