import ApplePay from "../assets/ApplePay.png";
import Visa from "../assets/visa.png";
import Discover from "../assets/discover.png";
import Mastercard from "../assets/mastercard.png";
import Secure from "../assets/secure-payment.png";
import logo from "../assets/Newlogo.png";

export default function SignInFooter() {
  return (
    <footer className="bg-black text-white w-full">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* LEFT */}
          <div className="flex flex-col gap-4 max-w-md">
            <img src={logo} alt="Vdo Naturals" className="w-[183px]" />

            <p className="text-[#808080] text-sm leading-6">
              No.34, 3RD Street, Chandrasekarapuram,
              <br />
              Ambattur, Chennai - 600053.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-white font-medium border-b border-[#00B207] pb-1">
                +91 9498088000
              </span>
              <span className="text-[#808080]">or</span>
              <span className="text-white font-medium border-b border-[#00B207] pb-1">
                shop@vdonaturals.com
              </span>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* My Account */}
            <div>
              <h4 className="text-white font-medium mb-4">My Account</h4>
              <ul className="space-y-3 text-[#999999] text-sm">
                <li>My Account</li>
                <li>Order History</li>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>

            {/* Helps */}
            <div>
              <h4 className="text-white font-medium mb-4">Helps</h4>
              <ul className="space-y-3 text-[#999999] text-sm">
                <li>Contact</li>
                <li>Faqs</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-[#333333]" />

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* COPYRIGHT */}
          <p className="text-[#808080] text-sm text-center md:text-left">
            V DO Naturals © 2025. All Rights Reserved
          </p>

          {/* PAYMENTS */}
          <div className="flex flex-wrap items-center gap-3">
            <img src={ApplePay} alt="Apple Pay" className="h-8" />
            <img src={Visa} alt="Visa" className="h-8" />
            <img src={Discover} alt="Discover" className="h-8" />
            <img src={Mastercard} alt="Mastercard" className="h-8" />
            <img src={Secure} alt="Secure Payment" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
