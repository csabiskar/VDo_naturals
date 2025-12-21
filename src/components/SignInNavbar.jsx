import { useState } from "react";
import { useLocation } from "react-router";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiPhone,
  FiSearch,
  FiHome,
  FiShoppingCart,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineAccountCircle, MdOutlineShoppingBag } from "react-icons/md";
import logo from "../assets/Newlogo.png";
import SignInFooter from "./SignInFooter";

export default function SignInNavbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  let location = useLocation();
  console.log(location);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ================= TOP NAVBAR ================= */}
      <header className="w-full border-b border-[#E6E6E6] relative z-50 bg-white">
        <div
          className="
            max-w-[1760px] mx-auto
            px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24
            h-auto md:h-[104px]
            grid grid-cols-[auto_minmax(0,1fr)_auto]
            items-center gap-6 p-4
          "
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="
              w-[140px] sm:w-[180px] md:w-[200px]
              xl:w-[240px] 2xl:w-[280px]
              object-contain
            "
          />

          {/* Search */}
          <div className="hidden md:flex items-center relative w-full max-w-[520px] justify-self-center">
            <FiSearch size={20} className="absolute left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[45px] pl-12 pr-4 border border-[#E6E6E6] rounded-l-md"
            />
            <button className="h-[45px] px-6 bg-[#00B207] text-white rounded-r-md">
              Search
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5 justify-self-end">
            <div className="flex items-center gap-2 cursor-pointer">
              <MdOutlineAccountCircle size={32} />
              <span className="text-sm font-medium max-w-[100px] truncate">
                Aravind
              </span>
              <FiChevronDown className="transition-transform duration-300" />
            </div>

            <span className="h-6 w-px bg-[#D9D9D9]" />

            <MdOutlineShoppingBag size={30} />

            <button className="h-[44px] px-6 bg-[#00B207] text-white rounded-md font-medium">
              Sign Up
            </button>
            <button className="h-[44px] px-4 text-sm font-medium">
              Log In
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden justify-self-end relative w-10 h-10"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`
                absolute inset-0 flex items-center justify-center
                transition-all duration-300
                ${open ? "opacity-0 scale-75" : "opacity-100 scale-100"}
              `}
            >
              <FiMenu size={26} />
            </span>
            <span
              className={`
                absolute inset-0 flex items-center justify-center
                transition-all duration-300
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}
              `}
            >
              <FiX size={26} />
            </span>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            lg:hidden absolute top-full left-0 w-full bg-white
            border-t border-[#E6E6E6]
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              open
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="px-6 py-6 flex flex-col gap-6 text-sm">
            <nav className="flex flex-col gap-4">
              <span
                onClick={closeMenu}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FiHome /> Home
              </span>
              <span
                onClick={closeMenu}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FiShoppingCart /> Shop All
              </span>
              <span
                onClick={closeMenu}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FiBookOpen /> Blog
              </span>
              <span
                onClick={closeMenu}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FiMail /> Contact Us
              </span>
            </nav>

            <hr />

            <div className="flex items-center gap-3">
              <FiPhone /> +91 94980 88000
            </div>

            <hr />

            <button
              onClick={closeMenu}
              className="w-full h-[46px] bg-[#00B207] text-white rounded-md font-medium"
            >
              Sign Up
            </button>
            <button
              onClick={closeMenu}
              className="w-full h-[46px] border rounded-md font-medium"
            >
              Log In
            </button>
          </div>
        </div>
      </header>

      {/* ================= GRAY NAV BANNER (RESTORED) ================= */}
      <div className="hidden lg:block w-full bg-[#333333]">
        <div
          className="
            max-w-[1760px] mx-auto
            px-10 xl:px-16 2xl:px-24
            h-[55px]
            flex items-center justify-between text-sm
          "
        >
          <nav className="flex gap-8 text-[#B3B3B3]">
            <span className="cursor-pointer hover:text-white">Home</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-white">
              Shop all <FiChevronDown />
            </span>
            <span className="cursor-pointer hover:text-white">Blog</span>
            <span className="cursor-pointer hover:text-white">Contact Us</span>
          </nav>

          <div className="flex items-center gap-2 text-white">
            <FiPhone size={18} />
            +91 94980 88000
          </div>
        </div>
      </div>

      {/* ================= LOGIN CARD ================= */}
      <main
        className="
          flex-1 flex items-center justify-center
          px-4 sm:px-6 py-16 md:py-24
          min-h-[600px] md:pb-60
        "
      >
        <div
          className="
            w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
            bg-white border border-[#F2F2F2] rounded-lg
            shadow-[0_6px_20px_rgba(0,0,0,0.08)]
            p-5 sm:p-6
          "
        >
          <h1 className="text-center text-2xl font-semibold mb-8">{location.pathname==='/login'?"Create Account":"Log in"}</h1>

          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="h-12 px-4 border border-[#E6E6E6] rounded-md"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full"
              />
              <AiOutlineEye
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>
            {
              location.pathname==='/login' ? (  <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full"
              />
              <AiOutlineEye
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>):null
            }
          </div>

         {
          location.pathname==='/login' ?  <div className="flex justify-between items-center mt-4 text-sm text-[#666666]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#00B207]" />
              Accept all terms & Conditions
            </label>
          </div> : <div className="flex justify-between items-center mt-4 text-sm text-[#666666]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#00B207]" />
              Remember me
            </label>
            <span className="cursor-pointer hover:text-black">
              Forgot Password
            </span>
          </div>
         }

          <button className="mt-6 w-full h-[48px] bg-[#00B207] text-white rounded-md font-semibold">
           {location.pathname==='/login'?"Create Aacount":"Log in"}
          </button>

          {
            location.pathname==='/login'?<p className="mt-6 text-center text-sm text-[#666666]">
            Already have account?{" "}
            <span className="font-medium text-black cursor-pointer">
              Login
            </span>
          </p>:<p className="mt-6 text-center text-sm text-[#666666]">
            Don’t have account?{" "}
            <span className="font-medium text-black cursor-pointer">
              Register
            </span>
          </p>
          }
        </div>
      </main>

      <SignInFooter />
    </div>
  );
}
