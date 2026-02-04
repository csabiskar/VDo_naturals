// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../assets/Newlogo.png";
import ApplePay from "../assets/ApplePay.png";
import Visa from "../assets/visa.png";
import Discover from "../assets/discover.png";
import Mastercard from "../assets/mastercard.png";
import Secure from "../assets/secure-payment.png";
import { Navigate, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer
      className="w-full bg-black text-white"
      style={{ fontFamily: "Poppins, system-ui, sans-serif", fontWeight: 400 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-1 py-10 sm:py-[52px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left block */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img
                src={Logo}
                alt="VDO Naturals logo"
                className="h-16 object-cover"
              />
            </div>

            <p className="text-sm text-[#999999] leading-relaxed">
              No.34, 3RD Street, Chandrasekarapuram,
              <br /> Ambattur, Chennai- 600053.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
              <div className="text-center sm:text-left">
                <div className="text-white text-sm">+91 9498088000</div>
                <div className="mt-1 h-0.5 w-28 bg-[#00B207] mx-auto sm:mx-0" />
              </div>
              <span className="text-[#999999] hidden sm:inline">or</span>
              <div className="text-center sm:text-left">
                <div className="text-white text-sm">shop@vdonaturals.com</div>
                <div className="mt-1 h-0.5 w-40 bg-[#00B207] mx-auto sm:mx-0" />
              </div>
            </div>
          </div>

          {/* Middle spacer */}
          <div className="hidden md:block" />

          {/* Right block */}
          <div className="flex flex-col sm:flex-row md:justify-end gap-10 sm:gap-12 text-center sm:text-left">
            <div>
              <h4 className="text-white text-lg font-medium mb-4">
                My Account
              </h4>
              <ul className="space-y-3 text-[#999999] text-sm">
                <li className="hover:text-white cursor-pointer">My Account</li>
                <li className="hover:text-white cursor-pointer">
                  Order History
                </li>
                <li className="hover:text-white cursor-pointer">
                  Shoping Cart
                </li>
                <li className="hover:text-white cursor-pointer">Wishlist</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-normal mb-4">Helps</h4>
              <ul className="space-y-3 text-[#999999] text-sm">
                <li className="hover:text-white cursor-pointer " onClick={()=> navigate('/aboutus')} >About us</li>
                <li className="hover:text-white cursor-pointer">Contact us</li>
                <li className="hover:text-white cursor-pointer">
                  Terms & Condition
                </li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="mt-10 border-t border-gray-800 pt-8" /> */}

        {/* Bottom row */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Social */}
          <div className="flex justify-center md:justify-start items-center gap-2">
            <div className="rounded-full text-[#999999] hover:bg-[#00B207] transition p-3  hover:text-white">
              <FaFacebookF size={24} />
            </div>
            <div className="rounded-full hover:bg-[#00B207] transition p-3 text-white">
              <FaTwitter className="text-[#999999] hover:text-white  cursor-pointer" size={24} />
            </div>
            <div className="rounded-full hover:bg-[#00B207] transition p-3 text-white">
              <FaPinterestP className="text-[#999999] hover:text-white cursor-pointer" size={24} />
            </div>
            <div className="rounded-full hover:bg-[#00B207] transition p-3 text-white">
              <FaInstagram className="text-[#999999] hover:text-white cursor-pointer" size={24} />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-[#999999]">
            V DO Naturalss © 2025. All Rights Reserved
          </div>

          {/* Payments */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
            <img
              src={ApplePay}
              alt="Apple Pay"
              className="h-8 object-contain"
            />
            <img src={Visa} alt="Visa" className="h-8 object-contain" />
            <img src={Discover} alt="Discover" className="h-8 object-contain" />
            <img
              src={Mastercard}
              alt="Mastercard"
              className="h-8 object-contain"
            />
            <img
              src={Secure}
              alt="Secure payment"
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
