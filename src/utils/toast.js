import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Tailwind classes for the toast container
const baseClass = `
  bg-black 
  text-white 
  border border-gray-800 
  rounded-lg 
  shadow-lg 
  p-3 
  flex items-center gap-3
  max-w-xs
`;

// Tailwind classes for the message text
const bodyClass = "flex items-center gap-2 text-sm";

// Function to show toast
export const showToast = (message, type = "success") => {
  let icon;
  switch (type) {
    case "success":
      icon = "✔️";
      break;
    case "error":
      icon = "❌";
      break;
    case "info":
      icon = "ℹ️";
      break;
    case "warning":
      icon = "⚠️";
      break;
    default:
      icon = "";
  }

  toast(message, {
    icon,
    toastClassName: `
      bg-black 
      text-white 
      border border-gray-800 
      rounded-lg 
      shadow-lg
    `,
    bodyClassName: "flex items-center gap-2 text-sm p-3",
    hideProgressBar: true,
    closeButton: false,
    autoClose: 3000,
  });
};
