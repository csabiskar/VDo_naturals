export const sendOTP = async (contact) => {
  console.log("Send OTP:", contact);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 800);
  });
};

export const verifyOTP = async ({ contact, otp }) => {
  console.log("Verify OTP:", { contact, otp });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") {
        resolve({
          token: "mock_token_" + Date.now(),
          user: { contact },
        });
      } else {
        reject(new Error("Invalid OTP"));
      }
    }, 800);
  });
};
