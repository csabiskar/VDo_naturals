import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ================= TOP NAVBAR ================= */}
      <header className="w-full border-b border-[#E6E6E6] relative">
        <div
          className="max-w-[1440px] mx-auto
          px-4 sm:px-6 lg:px-[80px]
          flex items-center justify-between
          h-auto md:h-[104px]"
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px]
            h-auto object-contain"
          />

          {/* Search (desktop only) */}
          <div className="hidden md:flex items-center mx-6 lg:mx-10 relative">
            <FiSearch size={20} className="absolute left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-[220px] lg:w-[300px] h-[45px]
              pl-12 pr-4 border border-[#E6E6E6]
              rounded-l-md focus:outline-none"
            />
            <button className="h-[45px] px-6 bg-[#00B207] text-white rounded-r-md text-sm font-medium">
              Search
            </button>
          </div>

          {/* Right Section (lg+) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <MdOutlineAccountCircle size={32} />
              <span className="text-sm font-medium">Aravind</span>
              <FiChevronDown size={16} />
            </div>

            <span className="h-6 w-px bg-[#D9D9D9]" />

            <MdOutlineShoppingBag size={32} />

            <button className="h-[44px] px-6 bg-[#00B207] text-white rounded-md text-sm font-medium">
              Sign Up
            </button>
            <button className="h-[44px] px-4 text-sm">Log In</button>
          </div>

          {/* Toggle Button (sm & md) */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE / MD TOGGLE MENU ================= */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#E6E6E6] shadow-md z-50">
            <div className="px-6 py-6 flex flex-col gap-5 text-sm">
              {/* Nav Items (from banner) */}
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-3">
                  <FiHome /> Home
                </span>
                <span className="flex items-center gap-3">
                  <FiShoppingCart /> Shop All
                </span>
                <span className="flex items-center gap-3">
                  <FiBookOpen /> Blog
                </span>
                <span className="flex items-center gap-3">
                  <FiMail /> Contact Us
                </span>
              </div>

              <hr />

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone />
                +91 94980 88000
              </div>

              <hr />

              {/* Actions */}
              <button className="w-full h-[44px] bg-[#00B207] text-white rounded-md font-medium">
                Sign Up
              </button>
              <button className="w-full h-[44px] border rounded-md">
                Log In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= NAV STRIP (lg+) ================= */}
      <div className="hidden lg:block w-full bg-[#333333]">
        <div
          className="max-w-[1440px] mx-auto
          px-[80px]
          h-[55px]
          flex items-center justify-between text-sm"
        >
          <nav className="flex gap-8 text-[#B3B3B3]">
            <span>Home</span>
            <span className="flex items-center gap-1">
              Shop all <FiChevronDown />
            </span>
            <span>Blog</span>
            <span>Contact Us</span>
          </nav>

          <div className="flex items-center gap-2 text-white">
            <FiPhone size={18} />
            +91 94980 88000
          </div>
        </div>
      </div>

      {/* ================= LOGIN CARD ================= */}
      <main
        className="flex-1 flex items-center justify-center
        px-4 sm:px-6 py-16 md:py-24
        min-h-[600px] md:pb-60"
      >
        <div
          className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
          bg-white border border-[#F2F2F2] rounded-lg
          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
          p-5 sm:p-6"
        >
          <h1 className="text-center text-2xl font-semibold mb-8">Log In</h1>

          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="h-12 px-4 border border-[#E6E6E6] rounded-md focus:outline-none"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full focus:outline-none"
              />
              <AiOutlineEye
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm text-[#666666]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#00B207]" />
              Remember me
            </label>
            <span className="cursor-pointer hover:text-black">
              Forgot Password
            </span>
          </div>

          <button className="mt-6 w-full h-[48px] bg-[#00B207] text-white rounded-md font-semibold">
            Login
          </button>

          <p className="mt-6 text-center text-sm text-[#666666]">
            Don’t have account?{" "}
            <span className="font-medium text-black cursor-pointer">
              Register
            </span>
          </p>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <SignInFooter />
    </div>
  );
}
