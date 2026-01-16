import { useState, useEffect, useContext } from "react";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { AiOutlineHeart } from "react-icons/ai";

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
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const { user, isAuth, logout } = useAuth();
  const { cartData } = useContext(CartContext);

  const location = useLocation();
  const navigate = useNavigate();

  const cartCount = cartData?.items?.length || 0;
  const isCartPage = location.pathname === "/shoppingcart";
    const isWishlistPage = location.pathname === "/wishlist";

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 250);
      return () => clearTimeout(t);
    }
  }, [cartCount]);

  const closeMenu = () => setOpen(false);

  // wishlist
  const { wishlist } = useWishlist();

  const wishlistCount = wishlist?.length || 0;

  return (
    <div className="bg-white flex flex-col fixed top-0 left-0 w-full z-50">
      {/* ================= TOP NAVBAR ================= */}
      <header className="w-full border-b border-[#E6E6E6] relative z-50 bg-white">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-24 h-auto md:h-[104px] grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 p-3">
          {/* Logo */}
          <Link to="/" aria-label="Go to home">
            <img
              src={logo}
              alt="Company logo"
              className="w-[140px] sm:w-[180px] md:w-[200px] xl:w-[260px] 2xl:w-[280px] object-contain"
            />
          </Link>

          {/* ================= DESKTOP SEARCH (UNCHANGED) ================= */}
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
            {/* Profile – desktop unchanged */}
            {isAuth && (
              <>
                <div className="hidden lg:flex items-center gap-2 cursor-pointer">
                  <MdOutlineAccountCircle size={33} />
                  <span className="text-sm font-medium max-w-[100px] truncate">
                    {user?.name || "User"}
                  </span>
                  <FiChevronDown />
                </div>
                <span className="hidden lg:block h-6 w-px bg-[#D9D9D9]" />
              </>
            )}

            {/* Wishlist – all screens */}
            <div
              onClick={() => navigate("/wishlist")}
              className="relative cursor-pointer"
            >
              <AiOutlineHeart className="h-8 w-8" />

              {!isWishlistPage && wishlistCount > 0 && (
                <span
                  className="
      absolute -top-1 -right-1
      min-w-[18px] h-[18px]
      bg-[#00B207] text-white
      text-[11px]
      rounded-full
      flex items-center justify-center
    "
                >
                  {wishlistCount}
                </span>
              )}
            </div>

            {/* Cart – all screens */}
            <div
              onClick={() => navigate("/shoppingcart")}
              className="relative cursor-pointer"
            >
              <MdOutlineShoppingBag className="h-8 w-8" />
              {!isCartPage && cartCount > 0 && (
                <span
                  className={`absolute -top-0.5 -right-1.5 min-w-[18px] h-[18px] bg-[#00B207] text-white text-[11px] rounded-full flex items-center justify-center transition-transform
                  ${animate ? "scale-125" : "scale-100"}`}
                >
                  {cartCount}
                </span>
              )}
            </div>

            {/* Login – desktop unchanged */}
            {!isAuth && (
              <Link
                to="/login"
                className="hidden lg:flex h-11 w-20 cursor-pointer border-[1.5px] border-[#00000080]/50 rounded-md px-4 text-sm font-medium items-center justify-center"
              >
                Log In
              </Link>
            )}

            {/* Mobile profile icon */}
            <Link to={isAuth ? "/account" : "/login"} className="lg:hidden">
              <MdOutlineAccountCircle size={28} />
            </Link>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle navigation menu"
              className="lg:hidden relative w-10 h-10"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE SEARCH (sm & md ONLY) ================= */}
        <div className="lg:hidden px-4 sm:px-6 pb-3">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="search"
              placeholder="Search"
              className="w-full h-11 pl-12 pr-4 border border-[#E6E6E6] rounded-md placeholder:font-light"
            />
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[#E6E6E6] z-40">
            <div className="px-6 py-6 flex flex-col gap-6 text-sm">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <FiHome /> Home
              </Link>
              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <FiShoppingCart /> Shop All
              </Link>
              <Link
                to="/blog"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <FiBookOpen /> Blog
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <FiMail /> Contact Us
              </Link>

              <hr />

              <div className="flex items-center gap-3">
                <MdOutlinePhoneInTalk size={32} /> +91 94980 88000
              </div>

              <hr />

              {!isAuth ? (
                <>
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
                </>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="w-full h-[46px] border rounded-md font-medium flex items-center justify-center"
                >
                  Logout
                </button>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* ================= GRAY NAV (DESKTOP UNCHANGED) ================= */}
      <div className="hidden lg:block w-full bg-[#333333]">
        <nav className="max-w-[1760px] mx-auto px-10 xl:px-20 2xl:px-24 h-[55px] flex items-center justify-between text-sm">
          <div className="flex gap-8 text-[#999999]">
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
            <span className="flex items-center gap-1.5 hover:text-white">
              Shop all <IoIosArrowDown size={16} />
            </span>
            <NavLink to="/blog" className="hover:text-white">
              Blogs
            </NavLink>
            <NavLink to="/contact" className="hover:text-white">
              Contact Us
            </NavLink>
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
