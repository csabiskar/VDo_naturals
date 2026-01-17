import { FiUser, FiBox, FiHeart, FiLogOut } from "react-icons/fi";
import {
  MdOutlineAccountCircle,
} from "react-icons/md";
import ordersIcon from "../../assets/ordersIcon.png"

export const USER_MENU_ITEMS = [
  {
    id: "profile",
    label: "My Profile",
    icon: MdOutlineAccountCircle,
    action: "profile",
  },
  {
    id: "orders",
    label: "Orders",
    icon: FiBox,
    action: "orders",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: FiHeart,
    action: "wishlist",
  },
  {
    id: "logout",
    label: "Logout",
    icon: FiLogOut,
    action: "logout",
    danger: true,
  },
];
