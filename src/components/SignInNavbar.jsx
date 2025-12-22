import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiHome,
  FiShoppingCart,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import {
  MdOutlineAccountCircle,
  MdOutlineShoppingBag,
  MdOutlinePhoneInTalk,
} from "react-icons/md";

import logo from "../assets/Newlogo.png";
import SignInFooter from "./SignInFooter";

export default function SignInNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signin";

  const closeMenu = () => setOpen(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ================= TOP NAVBAR ================= */}
      <header className="w-full border-b border-[#E6E6E6] relative z-50 bg-white">
        <div
          className="
            max-w-[1760px] mx-auto
            px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-24
            h-auto md:h-[104px]
            grid grid-cols-[auto_minmax(0,1fr)_auto]
            items-center gap-6 p-4
          "
        >
          {/* Logo */}
          <Link to="/" aria-label="Go to home">
            <img
              src={logo}
              alt="Company name logo"
              className="
                w-[140px] sm:w-[180px] md:w-[200px]
                xl:w-[260px] 2xl:w-[280px]
                object-contain
              "
            />
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center relative w-full justify-self-center xl:left-40">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <FiSearch size={20} className="absolute left-4 text-gray-400" />
            <input
              id="search"
              type="search"
              placeholder="Search"
              className="w-full h-[45px] xl:max-w-[300px] pl-12 pr-4 border border-[#E6E6E6] rounded-l-md"
            />
            <button className="h-[45px] px-6 bg-[#00B207] text-white rounded-r-md">
              Search
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3.5 justify-self-end">
            <div className="flex items-center gap-2 cursor-pointer">
              <MdOutlineAccountCircle size={33} />
              <span className="text-sm font-medium max-w-[100px] truncate">
                Aravind
              </span>
              <FiChevronDown />
            </div>

            <span className="h-6 w-px bg-[#D9D9D9]" />

            <MdOutlineShoppingBag size={30} />

            <Link
              to="/signin"
              className="h-[44px] px-6 bg-[#00B207] text-white rounded-md font-medium flex items-center"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="h-[44px] px-4 text-sm font-medium flex items-center"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
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
        <nav
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
            <Link onClick={closeMenu} to="/" className="flex items-center gap-3">
              <FiHome /> Home
            </Link>
            <Link onClick={closeMenu} to="/shop" className="flex items-center gap-3">
              <FiShoppingCart /> Shop All
            </Link>
            <Link onClick={closeMenu} to="/blog" className="flex items-center gap-3">
              <FiBookOpen /> Blog
            </Link>
            <Link onClick={closeMenu} to="/contact" className="flex items-center gap-3">
              <FiMail /> Contact Us
            </Link>

            <hr />

            <div className="flex items-center gap-3">
              <MdOutlinePhoneInTalk size={32} /> +91 94980 88000
            </div>

            <hr />

            <Link
              to="/signin"
              onClick={closeMenu}
              className="w-full h-[46px] bg-[#00B207] text-white rounded-md font-medium flex items-center justify-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="w-full h-[46px] border rounded-md font-medium flex items-center justify-center"
            >
              Log In
            </Link>
          </div>
        </nav>
      </header>

      {/* ================= GRAY NAV ================= */}
      <div className="hidden lg:block w-full bg-[#333333]">
        <nav
          className="
            max-w-[1760px] mx-auto
            px-10 xl:px-20 2xl:px-24
            h-[55px]
            flex items-center justify-between text-sm
          "
        >
          <div className="flex gap-8 text-[#B3B3B3]">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="flex items-center gap-1 hover:text-white">
              Shop all <FiChevronDown />
            </span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </div>

          <div className="flex items-center gap-2 text-white">
            <MdOutlinePhoneInTalk size={24} />
            +91 94980 88000
          </div>
        </nav>
      </div>

      {/* ================= LOGIN / SIGNUP CARD ================= */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 md:py-24">
        <section
          aria-labelledby="auth-title"
          className="
            w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
            bg-white border border-[#F2F2F2] rounded-lg
            shadow-[0_6px_20px_rgba(0,0,0,0.08)]
            p-5 sm:p-6
          "
        >
          <h1
            id="auth-title"
            className="text-center text-[32px] font-semibold mb-8"
          >
            {isLogin ? "Log in" : "Create Account"}
          </h1>

          <form className="flex flex-col gap-5">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              className="h-12 px-4 border border-[#E6E6E6] rounded-md"
            />

            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full"
              />
              <AiOutlineEye
                aria-hidden
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {isSignup && (
              <div className="relative">
                <label htmlFor="confirm" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full"
                />
                <AiOutlineEye
                  aria-hidden
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            )}
          </form>

          {isSignup ? (
            <div className="flex items-center mt-4 text-sm text-[#666666]">
              <input
                id="terms"
                type="checkbox"
                className="accent-[#00B207] scale-150"
              />
              <label htmlFor="terms" className="ml-2">
                Accept all terms & Conditions
              </label>
            </div>
          ) : (
            <div className="flex justify-between items-center mt-4 text-sm text-[#666666]">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="accent-[#00B207] scale-150"
                />
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="hover:text-black">
                Forgot Password
              </Link>
            </div>
          )}

          <button className="mt-6 w-full h-[48px] bg-[#00B207] text-white rounded-md font-semibold">
            {isLogin ? "Log in" : "Create Account"}
          </button>

          <p className="mt-6 text-center text-sm text-[#666666]">
            {isLogin ? (
              <>
                Don’t have account?{" "}
                <Link to="/signin" className="font-medium text-black">
                  Register
                </Link>
              </>
            ) : (
              <>
                Already have account?{" "}
                <Link to="/login" className="font-medium text-black">
                  Login
                </Link>
              </>
            )}
          </p>
        </section>
      </main>

      <SignInFooter />
    </div>
  );
}
