// AccountSidebar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import LogoutDialog from "./LogoutDialog";

export default function AccountSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleConfirmLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <aside className="bg-white rounded-xl border border-gray-200 w-full sm:w-[260px] md:w-[280px] lg:w-[305px] py-5">
        <h3 className="text-[19px] font-normal mb-4 px-5">Navigation</h3>

        <nav className="flex flex-col">
          {/* DASHBOARD */}
          <NavLink to="/profile" end>
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-5 py-4 text-[16px] font-light transition
                ${
                  isActive
                    ? "bg-[#eef6f0] text-gray-900 border-l-[3px] border-[#00B207]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <MdDashboard size={24} />
                <span>Dashboard</span>
              </div>
            )}
          </NavLink>

          {/* wishlist */}
               <NavLink to="/profile/wishlist">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-5 py-4 text-[16px] font-light transition
                ${
                  isActive
                    ? "bg-[#eef6f0] text-gray-900 border-l-[3px] border-[#00B207]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <TfiReload size={16} />
                <span>wishlist</span>
              </div>
            )}
          </NavLink>

          {/* ORDER HISTORY */}
          <NavLink to="/profile/orders">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-5 py-4 text-[16px] font-light transition
                ${
                  isActive
                    ? "bg-[#eef6f0] text-gray-900 border-l-[3px] border-[#00B207]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <TfiReload size={16} />
                <span>Order History</span>
              </div>
            )}
          </NavLink>

          {/* SETTINGS */}
          <NavLink to="/profile/settings">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-5 py-4 text-[16px] font-light transition
                ${
                  isActive
                    ? "bg-[#eef6f0] text-gray-900 border-l-[3px] border-[#00B207]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <IoSettingsOutline size={18} />
                <span>Settings</span>
              </div>
            )}
          </NavLink>

          {/* LOGOUT */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 px-5 py-4 text-red-500 font-light text-[16px] hover:bg-red-50 transition cursor-pointer"
          >
            <FiLogOut size={18} />
            <span>Log-out</span>
          </button>
        </nav>
      </aside>

      {/* LOGOUT DIALOG */}
      <LogoutDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
}
