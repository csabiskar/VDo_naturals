import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { TbWorld, TbSearch } from 'react-icons/tb';
import { GoChevronDown } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Top header */}
      <header className="w-full bg-white shadow-sm h-[104px]">
        <div className="mx-6 md:mx-20 flex items-center gap-4 py-3 lg:py-4">
          {/* Left: logo + mobile menu button */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiOutlineX className="text-2xl" />
              ) : (
                <HiOutlineMenu className="text-2xl" />
              )}
            </button>

            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-[44px] md:h-[56px] object-contain" />
            </div>
          </div>

          {/* Search – center on md+, compact on sm */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="hidden sm:flex w-full max-w-md px-3">
              <input
                type="text"
                placeholder="Search"
                className="h-[45px] w-full px-3 text-sm rounded-l-md border border-gray-200 bg-gray-50"
              />
              <button className="h-[45px] w-24 rounded-r-md bg-[#00B207] text-sm font-medium text-white">
                Search
              </button>
            </div>

            {/* small screens: search icon toggles a small input */}
            <div className="flex items-center sm:hidden gap-2">
              <button
                onClick={() => setShowSearch((s) => !s)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle search"
              >
                <TbSearch className="text-xl" />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="ml-auto mr-0 md:mr-6 flex items-center gap-4">
            {/* Language */}
            <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-[#00B207] text-sm">
              <TbWorld className="text-[22px]" />
              <span>Eng</span>
              <GoChevronDown />
            </div>

            {/* Icons */}
            <div className="hidden sm:flex items-center gap-4">
              <FaRegHeart className="text-[22px] cursor-pointer hover:text-[#00B207]" />

              <div className="relative cursor-pointer hover:text-[#00B207]">
                <MdOutlineShoppingBag className="text-[22px]" />
                <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#2C742F] text-[10px] text-white">
                  2
                </span>
              </div>

              <button className="w-20 h-[38px] bg-[#00B207] text-white text-xs font-medium rounded-md">
                Sign Up
              </button>
              <button className="w-20 h-[38px] text-black text-xs font-medium rounded-md ">
                Log In
              </button>
            </div>

            {/* On xs show condensed icons */}
            <div className="flex sm:hidden items-center gap-3">
              <FaRegHeart className="text-[20px]" />
              <div className="relative">
                <MdOutlineShoppingBag className="text-[20px]" />
                <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#2C742F] text-[10px] text-white">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small-screen search bar (overlay below header) */}
        {showSearch && (
          <div className="sm:hidden px-4 pb-3">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search"
                className="h-[40px] w-full px-3 text-sm rounded-l-md border border-gray-200 bg-gray-50"
              />
              <button className="h-[40px] w-20 rounded-r-md bg-[#00B207] text-sm font-medium text-white">
                Go
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Second dark navbar */}
      <div className="w-full bg-[#333333] h-[55px]">
        <div className="mx-6 md:mx-20 flex items-center justify-between h-14">
          {/* Left links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white">
            <a href="#home" className="flex items-center gap-2 hover:text-gray-300">
              Home <GoChevronDown />
            </a>
            <a href="#shop" className="flex items-center text-[#999999] gap-2 hover:text-gray-300">
              Shop <GoChevronDown />
            </a>
            <a href="#blog" className="flex items-center text-[#999999] gap-2 hover:text-gray-300">
              Blog <GoChevronDown />
            </a>
            <a href="#contact" className="text-[#999999] hover:text-gray-300">
              Contact Us
            </a>
          </nav>

          {/* Phone on md+ */}
          <div className="hidden md:flex items-center gap-3 text-white text-sm">
            <span className="text-xl"><FiPhoneCall/></span>
            <span>+91 94980 88000</span>
          </div>

          {/* Mobile menu (dropdown) */}
          <div className={`md:hidden transition-all ${mobileOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {mobileOpen && (
              <div className="bg-[#333333] text-white rounded-b-md mt-0 shadow-lg">
                <div className="flex flex-col px-4 pt-3 pb-4 gap-3">
                  <a href="#home" className="flex items-center justify-between py-2 border-b border-gray-700">
                    <span>Home</span>
                    <GoChevronDown />
                  </a>

                  <a href="#shop" className="flex items-center justify-between py-2 border-b border-gray-700 text-[#d1d1d1]">
                    <span>Shop</span>
                    <GoChevronDown />
                  </a>

                  <a href="#blog" className="flex items-center justify-between py-2 border-b border-gray-700 text-[#d1d1d1]">
                    <span>Blog</span>
                    <GoChevronDown />
                  </a>

                  <a href="#contact" className="py-2 border-b border-gray-700 text-[#d1d1d1]">Contact Us</a>

                  <div className="flex items-center gap-3 pt-2">
                    <button className="flex-1 h-10 bg-[#00B207] text-white rounded-md">Sign Up</button>
                    <button className="flex-1 h-10 border border-gray-500 rounded-md">Log In</button>
                  </div>

                  <div className="flex items-center gap-3 pt-3 text-sm">
                    <TbWorld />
                    <span>Eng</span>
                  </div>

                  <div className="flex items-center gap-4 pt-3">
                    <FaRegHeart />
                    <div className="relative">
                      <MdOutlineShoppingBag />
                      <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#2C742F] text-[10px] text-white">
                        2
                      </span>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <FiPhoneCall />
                      <span className="text-sm">+91 94980 88000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
