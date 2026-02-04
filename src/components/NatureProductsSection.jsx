import { Leaf, Headphones, Star, ShieldCheck } from "lucide-react";
import Img from '../assets/naturalImg.png'
import Avatar1 from "../assets/Aboutus/leaf.svg";
import Avatar2 from "../assets/Aboutus/phone.svg";
import Avatar3 from "../assets/Aboutus/shopping-bag.svg";
import Avatar4 from "../assets/Aboutus/stars.svg";

const NatureProducts = () => {
  return (
    <section className="max-w-7xl py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          {/* background fade */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-white hidden lg:block" />

          <img
            src={Img} // replace with your image
            alt="Product model"
            className="relative z-10 xl:h-[585px] object-cover max-h-[520pz]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-4">
          <h2 className="text-4xl md:text-[53px] font-semibold leading-tight text-black">
            100% Trusted <br />
            Nature Products
          </h2>

          <p className="mt-5 text-[#666666] font-light leading-7 max-w-xl">
            100% trusted natural products means every item is made from clean,
            natural ingredients without artificial additives, chemicals, or
            preservatives. These products are sourced and prepared carefully so
            customers can confidently use them for daily cooking and health,
            knowing they are safe and genuinely natural.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Feature
              avatar={Avatar1}
              title="100% Nature food"
              desc="100% healthy & Fresh food."
            />

            <Feature
              avatar={Avatar2}
              title="Great Support 24/7"
              desc="Instant access to Contact"
            />

            <Feature
              avatar={Avatar4}
              title="Customer Feedback"
              desc="Our happy customer"
            />

            <Feature
              avatar={Avatar3}
              title="100% Secure Payment"
              desc="We ensure your money is save"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ avatar, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#00B207]/10 text-[#00B207] shrink-0">
       <img src={avatar} alt={title} className="h-6 w-6" />
    </div>

    <div>
      <h4 className="font-semibold text-gray-900 ">{title}</h4>
      <p className="text-sm text-stone-500 mt-1">{desc}</p>
    </div>
  </div>
);

export default NatureProducts;
