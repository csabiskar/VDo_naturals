import ApplePay from "../assets/ApplePay.png";
import Visa from "../assets/visa.png";
import Discover from "../assets/discover.png";
import Mastercard from "../assets/mastercard.png";
import Secure from "../assets/secure-payment.png";
import logo from "../assets/Newlogo.png";

import {
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";

export default function SignInFooter() {
  return (
    <footer className="bg-black text-white w-full">
      {/* ================= TOP ================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 pb-20">
        <div className="flex flex-col lg:flex-row justify-between gap-14">
          
          {/* LEFT */}
          <div className="flex flex-col gap-3.5 max-w-md">
            <img src={logo} alt="V DO Naturals" className="w-[222px] h-[70px]" />

            <p className="text-[#808080] font-light text-sm leading-5">
              No.34, 3RD Street, Chandrasekarapuram,
              <br />
              Ambattur, Chennai – 600053.
            </p>

            <div className="flex flex-wrap items-center gap-3 lg:mt-4 text-sm">
              <span className="border-b-2 border-[#00B207] pb-1">
                +91 9498088000
              </span>
              <span className="text-[#808080]">or</span>
              <span className="border-b-2 border-[#00B207] pb-1">
                shop@vdonaturals.com
              </span>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex gap-20 lg:pr-1">
            <div>
              <h4 className="font-normal mb-4">My Account</h4>
              <ul className="space-y-3 font-light text-sm text-[#999999]">
                <li>My Account</li>
                <li>Order History</li>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>

            <div>
              <h4 className="font-normal mb-4">Helps</h4>
              <ul className="space-y-3 font-light text-sm text-[#999999]">
                <li>Contact us</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 pb-16 -mt-6">
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-6 text-[#b3b3b3] 
                            md:static lg:absolute lg:left-0">
              <GrFacebookOption className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaPinterestP className="w-6 h-6 cursor-pointer hover:text-white" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white" />
            </div>

            {/* CENTER COPYRIGHT */}
            <div className="flex-1 flex justify-center">
              <p className="text-[#808080] text-sm text-center lg:pr-24 xl:pr-0">
                V DO Naturals © 2025. All Rights Reserved
              </p>
            </div>

            {/* PAYMENT ICONS */}
            <div className="flex items-center gap-3 
                            md:static lg:absolute lg:right-0">
              <img src={ApplePay} alt="Apple Pay" className="h-8" />
              <img src={Visa} alt="Visa" className="h-8" />
              <img src={Discover} alt="Discover" className="h-8" />
              <img src={Mastercard} alt="Mastercard" className="h-8" />
              <img src={Secure} alt="Secure Payment" className="h-8" />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
