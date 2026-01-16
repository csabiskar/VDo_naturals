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
  const tokenValue="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NGY2M2UzNmFkNWIxNGFiNzhhMGFjMSIsImlhdCI6MTc2NjgxMDU5NSwiZXhwIjoxNzY5NDAyNTk1fQ.nskk22JvgsKIqvEAU3YyDz1b6MMo8xVc2T1EfPN7Hrc"

"  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NGY2M2UzNmFkNWIxNGFiNzhhMGFjMSIsImlhdCI6MTc2NjgxMDU5NSwiZXhwIjoxNzY5NDAyNTk1fQ.nskk22JvgsKIqvEAU3YyDz1b6MMo8xVc2T1EfPN7Hrc"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") {
        resolve({
          token: tokenValue,
          user: { contact },
        });
      } else {
        reject(new Error("Invalid OTP"));
      }
    }, 800);
  });
};

 export async function fetchData() {
    try {
      const data = await fetchProductById(id);
      setProduct(data.product);
      console.log(data.product);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }