import { useEffect, useState } from "react";
import { FaStar, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import cookies from "../assets/product/Cookies.png";
import ccokiesmockup from "../assets/product/ccokiesmockup.png";
import Cookiesbiscut from "../assets/product/Cookiesbiscut.png";
import pricing from "../assets/product/pricing.png";
import Batch from "../assets/batch.png";
import logo from "../assets/Newlogo.png";
import Avatar from "../assets/product/avtar.png";
import Audio from "../assets/product/audio.png";
import cookieReview from "../assets/product/cookiereview.png";
import VideoReview from "../assets/product/ImgVideo.png";

//product

import { useProducts } from "../context/ProductContext";

export default function ProductPage() {
  const images = [cookies, ccokiesmockup, Cookiesbiscut, pricing];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { fetchProductById } = useProducts();

  useEffect(() => {
    fetchData(id);
  }, [id, fetchProductById]);

  async function fetchData() {
    try {
      const data = await fetchProductById(id);
      setProduct(data.product);
      console.log(data.product);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;
  return (
    <div className="bg-white">
      {/* MAIN GRID */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20 lg:pt-[82px] ">
        <div className="grid grid-cols-1 lg:grid-cols-[540px_648px] xl:grid-cols-[540px_648px] lg:gap-x-0 xl:gap-x-[92px]">
          {/* LEFT COLUMN – IMAGES */}
          <div className="self-start pt-24 lg:sticky top-12">
            <div className="flex gap-4 -mt-7">
              <div className="hidden sm:flex flex-col gap-5 mt-2">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`xl:size-[87px] lg:size-16 md:size-12 rounded cursor-pointer  
                    `}
                  />
                ))}
              </div>

              <div className="relative right-1 -mt-0.5">
                <img
                  src={activeImage}
                  className="xl:w-[414px] xl:h-[421px] lg:size-96 md:size-80 object-cover rounded"
                />
              </div>
              <button className="absolute lg:left-[433px] lg:-top-0.5 lg:size-12 xl:-top-0.5 xl:left-[490px] xl:size-[50px]  border-gray-300 bg-white p-2 rounded-full border">
                <AiOutlineHeart size={22} className="size-8" />
              </button> 
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* BREADCRUMB */}
            <div className="text-md text-gray-400 font-light mb-10">
              Home / Category / Healthy Snacks /
              <span className="text-green-600"> Dia Caare Millet Cookies</span>
            </div>

            {/* PRODUCT SUMMARY */}
            <div className="flex flex-col gap-3 pb-4 border-b border-gray-300">
              <h1 className="text-4xl font-semibold text-zinc-900">
                {product?.name}
              </h1>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-400" />
                ))}
                <span className="text-sm text-stone-500 font-light">
                  133 Reviews
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <span className="text-2xl text-[#2C742F] font-normal">
                  ₹42.00
                </span>
                <span className="line-through font-light text-zinc-400 text-xl">
                  ₹70.00
                </span>
              </div>

              {/* VARIANTS */}
              <div className="flex gap-4 mt-3.5">
                {[
                  { w: "70gm", p: "₹42" },
                  { w: "20gm", p: "₹20" },
                ].map((item, i) => (
                  <div key={i} className="relative h-20">
                    <div
                      className={`w-[90px] h-20 bg-green-600/5 border border-green-600 rounded-lg flex flex-col justify-center items-center  ${
                        i > 0 ? "bg-white" : ""
                      }`}
                    >
                      <span className="text-sm font-normal">{item.w}</span>
                      <span className="text-xl font-medium">{item.p}</span>
                    </div>
                    <div className="absolute -top-1 left-4 w-14">
                      <img src={Batch} />
                      <span className="absolute inset-0 text-[10px] text-white flex items-center justify-center">
                        20% off
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* BRAND + SHARE */}
              <div className="flex justify-between items-center text-sm mt-3.5 ">
                <div className="flex items-center gap-3">
                  Brand:
                  <img src={logo} className="h-12 w-40" alt="brand" />
                </div>
                <div className="flex flex-row items-center xl:gap-5 lg:gap-3">
                  <span className="text-sm text-gray-900 font-light">
                    Share item:
                  </span>
                  <div className="flex xl:gap-7 xl:pr-2 lg:gap-4 lg:pr-16">
                    <FaFacebookF size={18} className="text-[#4D4D4D]" />
                    <FaXTwitter size={18} className="text-[#4D4D4D]" />
                    <FaPinterestP size={18} className="text-[#4D4D4D]" />
                    <FaInstagram size={18} className="text-[#4D4D4D]" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#808080] pr-24 font-light leading-5 mt-1 pb-6 border-b border-gray-300">
                V DO Naturalss Dia Caare Millet Cookies 70gm are crafted with
                nutrient-rich millets to offer a light, satisfying snack that
                supports balanced energy and everyday health. These cookies are
                positioned as a better alternative to regular refined-flour
                biscuits, making them ideal for tea-time or on-the-go munching.
              </p>

              {/* QTY + ADD */}
              <div className="flex gap-3 flex-wrap pl-8 pt-1.5">
                <div className="flex items-center justify-center border border-[#E6E6E6] rounded-full w-[124px]  h-[50px] gap-4">
                  <button className="bg-[#F2F2F2] rounded-full size-[34px]">
                    -
                  </button>
                  <span>1</span>
                  <button className="bg-[#F2F2F2] rounded-full size-[34px]">
                    +
                  </button>
                </div>
                <button className="w-full sm:w-md h-12 border border-[#00B207] bg-[#00b2060a] text-green-600 font-medium rounded">
                  ADD
                </button>
              </div>
            </div>

            {/* DESCRIPTIONS */}
            <section className="pt-[35px]">
              <div className="w-full max-w-[648px] flex flex-col">
                {/* TAB HEADER */}
                <div className="bg-white">
                  <div className="w-32 px-4 py-4 shadow-[inset_0px_-2px_0px_0px_rgba(32,181,38,1.00)]">
                    <p className="text-zinc-900 text-base font-medium leading-6">
                      Descriptions
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-6 flex flex-col gap-8 font-light pr-1.5 text-sm text-[#808080] leading-5">
                  {/* INTRO */}
                  <p>
                    V DO Naturalss Dia Caare Millet Cookies 70gm are wholesome
                    millet-based cookies designed as a healthier snack choice,
                    especially suitable for people mindful of sugar and overall
                    wellness.
                    <br />
                    <br />
                    Available in multiple sizes, it’s a premium choice for
                    families seeking authentic, chemical-free Cookies for daily
                    use.
                  </p>

                  {/* FEATURES LIST */}
                  <div className="flex flex-col gap-3.5">
                    {[
                      "100% millet-based cookies made with carefully selected grains for better nutrition and sustained energy release",
                      "Suitable for daily snacking for health-conscious and diabetic-friendly lifestyles when consumed in moderation",
                      "Free from artificial colors and harsh preservatives, offering a cleaner label snack option for families.",
                      "Light, crunchy texture and mildly sweet taste that pairs well with tea, coffee, or milk without feeling heavy.",
                    ].map((text, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        {/* CHECK ICON */}
                        <div className="size-5 bg-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <IoMdCheckmark className="text-white text-sm" />
                        </div>

                        {/* TEXT */}
                        <p className="flex-1">{text}</p>
                      </div>
                    ))}
                  </div>

                  {/* OUTRO */}
                  <p>
                    Choose V DO Naturalss Dia Caare Millet Cookies 70gm for a
                    light, wholesome snack made with nutrient-rich millets.
                    Enjoy a tasty, health-conscious cookie that supports
                    everyday wellness with every bite.
                  </p>
                </div>
              </div>
            </section>

            {/* ADDITIONAL INFORMATION */}
            <section className="pt-10">
              <div className="w-full max-w-[648px] flex flex-col">
                {/* HEADER */}
                <div className="bg-white">
                  <div className="px-4 py-4 shadow-[inset_0px_-2px_0px_0px_rgba(32,181,38,1.00)] w-fit">
                    <p className="text-zinc-900 text-base font-medium leading-6">
                      Additional Information
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-10 flex flex-col gap-3.5 text-sm">
                  {/* ROW */}
                  <div className="flex items-start">
                    <span className="w-28 font-light text-zinc-900 leading-5">
                      Weight:
                    </span>
                    <span className="text-stone-500 leading-5">70gm</span>
                  </div>

                  <div className="flex items-start">
                    <span className="w-28 text-zinc-900 leading-5">Color:</span>
                    <span className="text-stone-500 font-light leading-5">
                      Light brown (baked cookie color)
                    </span>
                  </div>

                  <div className="flex items-start ">
                    <span className="w-28 text-zinc-900 leading-5 font-light">
                      Type:
                    </span>
                    <span className="text-stone-500 leading-5 font-light">
                      Millet-based cookies, suitable for <br />
                      health-conscious and diabetic-friendly <br />
                      diets when consumed in moderation.
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="w-28 text-zinc-900 font-light leading-5">
                      Category:
                    </span>
                    <span className="text-stone-500 leading-5 font-light">
                      Cookies
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="w-28 text-zinc-900 leading-5 font-light">
                      Stock Status:
                    </span>
                    <span className="text-stone-500 font-light leading-5">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* CUSTOMER REVIEWS */}
            <section className="pt-16 pb-32">
              <div className="w-full max-w-[648px] flex flex-col">
                {/* HEADER */}
                <div className="bg-white">
                  <div className="px-4 py-4 -mt-0.5 shadow-[inset_0px_-2px_0px_0px_rgba(32,181,38,1.00)] w-fit">
                    <p className="text-zinc-900 text-base font-medium leading-6">
                      Customer Reviews
                    </p>
                  </div>
                </div>

                {/* REVIEWS LIST */}
                <div className="pt-10 flex flex-col gap-10 text-xs">
                  {/* REVIEW 1 */}
                  <div className="flex flex-col gap-4">
                    {/* USER INFO */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img className="size-9 rounded-full" src={Avatar} />

                        <div className="flex flex-col gap-1">
                          <p className="text-zinc-900 font-medium leading-4">
                            Sanjay
                          </p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-orange-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <span className="text-neutral-400 leading-4">
                        2 min ago
                      </span>
                    </div>

                    {/* REVIEW TEXT */}
                    <p className="text-zinc-500 leading-4 max-w-[632px]">
                      The aroma of this gingelly oil reminds me of the
                      traditional chekku oil my grandparents used. It tastes
                      fresh, and idli podi and sambar feel more flavorful now.
                    </p>

                    {/* REVIEW IMAGES */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-4">
                      <img className="w-60 h-48 rounded-[5px]" src={cookies} />
                      <img
                        className="w-60 h-48 rounded-[5px]"
                        src={cookieReview}
                      />
                    </div>
                  </div>

                  <div className="border-t border-neutral-200" />

                  {/* REVIEW 2 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img
                          className="size-9 rounded-full bg-neutral-200"
                          src={Avatar}
                        />

                        <div className="flex flex-col gap-1">
                          <p className="text-zinc-900 font-medium leading-4">
                            Prassana
                          </p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-orange-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <span className="text-neutral-400 leading-4">
                        30 Apr, 2021
                      </span>
                    </div>

                    <p className="text-zinc-500 leading-4 max-w-[632px]">
                      Have been using this oil for oil-pulling and weekend oil
                      bath, and it feels very gentle on the gums and skin. Happy
                      that it is cold pressed and doesn’t feel heavy after
                      cooking.
                    </p>

                    <img
                      className="w-60 h-48 rounded-[5px]"
                      src={VideoReview}
                    />
                  </div>

                  <div className="border-t border-neutral-200" />

                  {/* REVIEW 3 */}
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img className="size-9 rounded-full" src={Avatar} />

                        <div className="flex flex-col gap-1">
                          <p className="text-zinc-900 font-medium leading-4">
                            Sathish
                          </p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-orange-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <span className="text-neutral-400 leading-4">
                        2 min ago
                      </span>
                    </div>

                    <p className="text-zinc-500 leading-4 max-w-[540px]">
                      Good quality and packaging. The bottle arrived without any
                      leakage, and there is no harsh smell while frying. The oil
                      color and texture look very natural.
                    </p>
                    <img src={Audio} className="w-3xs h-14" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
