// UserDashBoard.jsx
import { Outlet } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

export default function UserDashBoard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 xl:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

          {/* SIDEBAR */}
          <div className="w-full lg:w-[280px] shrink-0">
            <AccountSidebar />
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-h-[600px] max-w-full overflow-x-scroll">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
}
