import UserMenuItem from "./UserMenuItem";
import { USER_MENU_ITEMS } from "./userMenu.config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleAction = (action) => {
    switch (action) {
      case "profile":
        navigate("/profile");
        break;
      case "orders":
        navigate("/orders");
        break;
      case "wishlist":
        navigate("/wishlist");
        break;
      case "logout":
        logout();
        break;
      default:
        break;
    }
  };

  return (
    <div
      role="menu"
      aria-label="User dropdown menu"
      className="
        bg-white shadow-lg rounded-xl

        /* Figma exact */
        w-[214px] h-[228px]

        /* Tablet */
        sm:w-[214px] sm:h-[228px]

        /* Mobile */
        max-sm:w-full
        max-sm:h-auto
        max-sm:rounded-2xl
      "
    >
      {USER_MENU_ITEMS.map((item) => (
        <UserMenuItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          danger={item.danger}
          onClick={() => handleAction(item.action)}
        />
      ))}
    </div>
  );
}
