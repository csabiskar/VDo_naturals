import { IoMdCheckmark } from "react-icons/io";

import Img from "../assets/deliveryImg.png";
const DeliverySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-[40.63px] font-semibold leading-12 text-black max-w-xl xl:mt-2">
            We Delivered, You <br />
            Enjoy Your Order.
          </h1>

          <p className="mt-6 text-gray-600 font-light leading-5  text-[13.88px] max-w-lg">
            Our team handpacks every bottle and snack to keep them fresh,
            flavourful, and farm-true from our store to your doorstep. Our team
            handpacks every bottle and snack to keep them fresh, flavourful, and
            farm-true from our store to your doorstep.
          </p>

          {/* CHECK LIST */}
          <ul className="mt-8 space-y-2">
            {[
              "Fresh, natural products delivered quickly, so your family never runs out of healthy essentials.",
              "Carefully packed bottles and snacks to preserve aroma, taste, and nutrition in every order.",
              "Reliable doorstep delivery across the city with friendly support if you need any help.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-start max-w-md text-[12.14px] font-light text-gray-600"
              >
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center  justify-center rounded-full bg-green-600/20">
                  <IoMdCheckmark size={12} className="text-[#2C742F]" />
                </span>
                <span className="text-stone-600 leading-4">{item}</span>
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <button className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#00B207] px-6 py-2.5 font-medium text-sm text-white hover:bg-green-700 transition">
            Shop Now
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-center xl:mr-16">
          <img
            src={Img} // replace with your image
            alt="Delivery"
            className="max-h-[540px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
