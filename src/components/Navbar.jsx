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
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineShoppingBag,
  MdOutlinePhoneInTalk,
} from "react-icons/md";

import logo from "../assets/Newlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isSignup = location.pathname === "/signup";
  const isLogin = location.pathname === "/login";

  const closeMenu = () => setOpen(false);

  return (
    <div className=" bg-white flex flex-col">
      {/* ================= TOP NAVBAR ================= */}
      <header className="w-full border-b border-[#E6E6E6]  relative z-50 bg-white">
        <div
          className="
            max-w-[1760px] mx-auto
            px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-24
            h-auto md:h-[104px]
            grid grid-cols-[auto_minmax(0,1fr)_auto]
            items-center gap-5 p-3
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
            <FiSearch size={20} className="absolute left-4 text-black" />
            <input
              id="search"
              type="search"
              placeholder="Search"
              className="w-full h-[45px] placeholder:font-light xl:max-w-[300px] pl-12 pr-4 border border-[#E6E6E6] rounded-l-md"
            />
            <button className="h-[45px] px-5 bg-[#00B207] text-white rounded-r-md">
              Search
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 justify-self-end">
            {/* profile  */}

            {/* rendering in login page */}
            {isLogin ? null : (
              <>
                <div className="flex items-center gap-2 cursor-pointer">
                  <MdOutlineAccountCircle size={33} />
                  <span className="text-sm font-medium max-w-[100px] truncate">
                    Abiskar
                  </span>
                  <FiChevronDown />
                </div>

                {/* line */}
                <span className="h-6 w-px bg-[#D9D9D9]" />
              </>
            )}

            <MdOutlineShoppingBag className="h-8 w-8 " />

            {isLogin ? null : (
              <Link
                to="/signup"
                className="h-10 px-4 bg-[#00B207] text-white text-sm w-[87px] rounded-md font-medium flex items-center"
              >
                Sign Up
              </Link>
            )}

            <Link
              to="/login"
              className="h-11 w-20  border-[1.5px] border-[#00000080]/50 rounded-md px-4 text-sm font-medium flex items-center"
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
            <Link
              onClick={closeMenu}
              to="/"
              className="flex items-center gap-3"
            >
              <FiHome /> Home
            </Link>
            <Link
              onClick={closeMenu}
              to="/shop"
              className="flex items-center gap-3"
            >
              <FiShoppingCart /> Shop All
            </Link>
            <Link
              onClick={closeMenu}
              to="/blog"
              className="flex items-center gap-3"
            >
              <FiBookOpen /> Blog
            </Link>
            <Link
              onClick={closeMenu}
              to="/contact"
              className="flex items-center gap-3"
            >
              <FiMail /> Contact Us
            </Link>

            <hr />

            <div className="flex items-center gap-3">
              <MdOutlinePhoneInTalk size={32} /> +91 94980 88000
            </div>

            <hr />

            <Link
              to="/signup"
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
          <div className="flex gap-8 text-[#999999]">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="flex items-center gap-1.5 hover:text-white">
              Shop all <IoIosArrowDown size={16} />
            </span>
            <Link to="/blog" className="hover:text-white">
              Blogs
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-2 text-white">
            <MdOutlinePhoneInTalk size={24} />
            +91 94980 88000
          </div>
        </nav>
      </div>
    </div>
  );
}
