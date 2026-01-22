import { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { AiOutlineHeart } from "react-icons/ai";


import {
  FiMenu,
  FiX,
  FiSearch,
  FiHome,
  FiShoppingCart,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import {
  MdOutlineAccountCircle,
  MdOutlineShoppingBag,
  MdOutlinePhoneInTalk,
} from "react-icons/md";

import logo from "../assets/Newlogo.png";
import { useWishlist } from "../context/WishlistContext";
import UserMenu from "./UserMenu/UserMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [animate, setAnimate] = useState(false);

  const { user, isAuth, logout } = useAuth();
  const { cartData } = useContext(CartContext);
  const { wishlist } = useWishlist();

  const location = useLocation();
  const navigate = useNavigate();

  const cartCount = cartData?.items?.length || 0;
  const wishlistCount = wishlist?.length || 0;

  const isCartPage = location.pathname === "/shoppingcart";
  const isWishlistPage = location.pathname === "/wishlist";

  const dropdownRef = useRef(null);

  /* ---------------- CART BADGE ANIMATION ---------------- */
  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 250);
      return () => clearTimeout(t);
    }
  }, [cartCount]);

  /* ---------------- CLOSE DROPDOWN ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
  // Close dropdown on logout / login / route change
  setDropdown(false);
}, [isAuth, location.pathname]);


  const closeMenu = () => setOpen(false);

  return (
    <div className="bg-white flex flex-col fixed top-0 left-0 w-full z-50">
      {/* ================= TOP NAVBAR ================= */}
      <header className="w-full border-b border-[#E6E6E6] relative z-50 bg-white">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-24 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 p-3 md:h-[104px]">
          
          {/* Logo */}
          <Link to="/" aria-label="Go to home">
            <img
              src={logo}
              alt="Company logo"
              className="w-[140px] sm:w-[180px] md:w-[200px] xl:w-[260px] 2xl:w-[280px]"
            />
          </Link>

          {/* ================= DESKTOP SEARCH ================= */}
          <div className="hidden lg:flex items-center relative w-full justify-self-center xl:left-40">
            <FiSearch size={20} className="absolute left-4 text-black" />
            <input
              type="search"
              placeholder="Search"
              className="w-full h-[45px] pl-12 pr-4 border border-[#E6E6E6] rounded-l-md placeholder:font-light xl:max-w-[300px]"
            />
            <button className="h-[45px] px-5 bg-[#00B207] text-white rounded-r-md">
              Search
            </button>
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-4 justify-self-end z-50">

            {/* PROFILE (ALL SCREENS – UI UNCHANGED) */}
            {isAuth && (
              <>
                <div
                  ref={dropdownRef}
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MdOutlineAccountCircle size={28} className="lg:size-[33px]" />

                  {/* Name only on desktop */}
                  <span className="hidden lg:block text-sm font-medium max-w-[100px] truncate">
                    {user?.name || "User"}
                  </span>

                  {/* Arrow only on desktop */}
                  <FaChevronDown size={16} className="hidden lg:block" />
                </div>

                <span className="hidden lg:block h-6 w-px bg-[#D9D9D9]" />
              </>
            )}

            {/* PROFILE DROPDOWN */}
            {dropdown && (
              <div
                className="
                  absolute right-14 top-8/12 mt-3 z-50
                  max-sm:fixed max-sm:inset-x-4 max-sm:top-20
                  shadow-2xl
                "
              >
                <UserMenu onClose={() => setDropdown(false)}/>
              </div>
            )}

            {/* CART */}
            {isAuth && (
              <div
                onClick={() => navigate("/shoppingcart")}
                className="relative cursor-pointer"
              >
                <MdOutlineShoppingBag className="h-8 w-8" />
                {!isCartPage && cartCount > 0 && (
                  <span
                    className={`absolute -top-0.5 -right-1.5 min-w-[18px] h-[18px]
                    bg-[#00B207] text-white text-[11px] rounded-full flex items-center justify-center
                    transition-transform ${animate ? "scale-125" : "scale-100"}`}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            )}

            {/* LOGIN (DESKTOP ONLY) */}
            {!isAuth && (
              <Link
                to="/login"
                className="hidden lg:flex h-11 w-20 border border-[#E6E6E6] rounded-md text-sm font-medium items-center justify-center"
              >
                Log In
              </Link>
            )}

            {/* MOBILE MENU TOGGLE */}
            <button
              className="lg:hidden w-10 h-10"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE SEARCH ================= */}
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search"
              className="w-full h-11 pl-12 pr-4  rounded-md border border-[#E6E6E6]"
            />
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-t z-40">
            <div className="px-6 py-6 flex flex-col gap-6 text-sm">
              <Link to="/" onClick={closeMenu} className="flex gap-3">
                <FiHome /> Home
              </Link>
              <Link to="/shop" onClick={closeMenu} className="flex gap-3">
                <FiShoppingCart /> Shop All
              </Link>
              <Link to="/blog" onClick={closeMenu} className="flex gap-3">
                <FiBookOpen /> Blog
              </Link>
              <Link to="/contact" onClick={closeMenu} className="flex gap-3">
                <FiMail /> Contact Us
              </Link>

              <hr />

              <div className="flex gap-3">
                <MdOutlinePhoneInTalk size={24} /> +91 94980 88000
              </div>

              <hr />

              {!isAuth ? (
                <>
                  <Link to="/signup" onClick={closeMenu}
                    className="h-[46px] bg-[#00B207] text-white rounded-md flex items-center justify-center">
                    Sign Up
                  </Link>
                  <Link to="/login" onClick={closeMenu}
                    className="h-[46px] border rounded-md flex items-center justify-center">
                    Log In
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="h-[46px] border rounded-md"
                >
                  Logout
                </button>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* ================= DESKTOP GRAY NAV ================= */}
      <div className="hidden lg:block w-full bg-[#333333]">
        <nav className="max-w-[1760px] mx-auto px-10 xl:px-20 h-[55px] flex justify-between items-center text-sm">
          <div className="flex gap-8 text-[#999999]">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <span className="flex items-center gap-1 hover:text-white">
              Shop all <IoIosArrowDown size={16} />
            </span>
            <NavLink to="/blog" className="hover:text-white">Blogs</NavLink>
            <NavLink to="/contact" className="hover:text-white">Contact Us</NavLink>
          </div>

          <div className="flex items-center gap-2 text-white">
            <MdOutlinePhoneInTalk size={22} />
            +91 94980 88000
          </div>
        </nav>
      </div>
    </div>
  );
}
