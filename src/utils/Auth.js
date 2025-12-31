// Detect if input is phone or email
export const detectContactType = (value) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (phoneRegex.test(value)) return "phone";
  if (emailRegex.test(value)) return "email";
  return null;
};
