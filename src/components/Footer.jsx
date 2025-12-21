// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.png"; // replace with your white logo
import ApplePay from "../assets/ApplePay.png"; // replace with your payment icons
import Visa from "../assets/visa.png";
import Discover from "../assets/discover.png";
import Mastercard from "../assets/mastercard.png";
import Secure from "../assets/secure-payment.png";

export default function Footer() {
  return (
    <footer
      className="w-full bg-black text-white "
      style={{ fontFamily: "Poppins, system-ui, sans-serif", fontWeight: 400 }}
    >
      {/* Top area: large dark block with content columns */}
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Left block: logo + address + contact */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={Logo} alt="VDO Naturals logo" className="h-10 object-contain" />
            </div>

            <p className="max-w-md text-sm text-[#999999] leading-relaxed">
              No.34, 3RD Street, Chandrasekarapuram,
              <br /> Ambattur, Chennai- 600053.
            </p>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-white font-normal text-sm ">+91 9498088000</div>
                <div className="mt-1 h-0.5 w-28 bg-[#00B207]" />
              </div>
              <span className="text-[#999999]">or</span>
              <div>
                <div className="text-white font-normal text-sm">shop@vdonaturals.com</div>
                <div className="mt-1 h-0.5 w-40 bg-[#00B207]" />
              </div>
            </div>
          </div>

          {/* Middle block: spacer (can be used for newsletter or empty) */}
          <div className="hidden md:block" />

          {/* Right block: columns My Account & Helps */}
          <div className="flex flex-col md:flex-row md:justify-end md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-lg font-medium mb-4">My Account</h4>
              <ul className="space-y-3 text-[#999999] text-sm">
                <li className="hover:text-white cursor-pointer">My Account</li>
                <li className="hover:text-white cursor-pointer">Order History</li>
                <li className="hover:text-white cursor-pointer">Shoping Cart</li>
                <li className="hover:text-white cursor-pointer">Wishlist</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-normal mb-4">Helps</h4>
              <ul className="space-y-3 text-[#999999] text-sm">
                <li className="hover:text-white cursor-pointer">Contact</li>
                <li className="hover:text-white cursor-pointer">Faqs</li>
                <li className="hover:text-white cursor-pointer">Terms & Condition</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal rule (thin subtle separation) */}
        <div className="mt-10 border-t border-gray-800 pt-8" />

        {/* Bottom row: social icons left, copyright center, payments right */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* social icons */}
          <div className="flex items-center gap-6">
            <div className="rounded-full bg-[#00B207] p-3 text-black">
              <FaFacebookF />
            </div>
            <button
              aria-label="Twitter"
              className="text-[#999999] hover:text-white transition-colors"
            >
              <FaTwitter />
            </button>
            <button
              aria-label="Pinterest"
              className="text-[#999999] hover:text-white transition-colors"
            >
              <FaPinterestP />
            </button>
            <button
              aria-label="Instagram"
              className="text-[#999999] hover:text-white transition-colors"
            >
              <FaInstagram />
            </button>
          </div>

          {/* copyright */}
          <div className="text-center text-sm font-normal text-[#999999]">
            V DO Naturalss © 2025. All Rights Reserved
          </div>

          {/* payment icons */}
          <div className="flex items-center gap-3">
            <img src={ApplePay} alt="Apple Pay" className="h-8 object-contain" />
            <img src={Visa} alt="Visa" className="h-8 object-contain" />
            <img src={Discover} alt="Discover" className="h-8 object-contain" />
            <img src={Mastercard} alt="Mastercard" className="h-8 object-contain" />
            <img src={Secure} alt="Secure payment" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
