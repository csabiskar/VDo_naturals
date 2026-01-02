const mockDB = new Map();

const delay = (ms = 800) =>
  new Promise((res) => setTimeout(res, ms));

export const sendOtpAPI = async ({ contact }) => {
  await delay();

  const otp = "123456"; // dev only
  console.log("OTP SENT:", otp);

  mockDB.set(contact, { otp });

  return { success: true };
};

export const verifyOtpAPI = async ({ contact, otp }) => {
  await delay();

  const record = mockDB.get(contact);

  if (!record) throw new Error("User not found");
  if (record.otp !== otp) throw new Error("Invalid OTP");

  return {
    token: "mock_token_" + Date.now(),
  };
};
