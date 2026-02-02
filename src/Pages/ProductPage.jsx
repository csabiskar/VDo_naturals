import { useEffect, useState, useContext, useMemo } from "react";
import { FaStar, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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
import { toast } from "react-toastify";

//product

import { useProducts } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { showToast } from "../utils/toast";
import Breadcrumb from "../components/Breadcrumb";
import { useWishlist } from "../context/WishlistContext";

export default function ProductPage() {
  // const images = [cookies, ccokiesmockup, Cookiesbiscut, pricing];
  const [activeImage, setActiveImage] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { fetchProductById } = useProducts();

  useEffect(() => {
    fetchData(id);
  }, [id, fetchProductById]);

  async function fetchData(productId) {
    try {
      const data = await fetchProductById(productId);
      setProduct(data.product);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  // add to cart

  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleAddToCart = () => {
    if (!product) return;

    if (product.variants?.length > 0 && !selectedVariant) {
      toast.warn("Please select a variant");
      return;
    }

    addToCart({
      productId: product._id,
      quantity,
      hasVariants: product.variants?.length > 0,
      variantSku: selectedVariant?.sku,
    });

    showToast("Item added to cart", "success");
  };

  console.log(product);

  // add to wishlist

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = useMemo(() => {
    if (!product?._id) return false;

    return wishlist.some((item) => {
      if (selectedVariant?.sku) {
        return (
          item.productId === product._id &&
          item.variantSku === selectedVariant.sku
        );
      }
      return item.productId === product._id;
    });
  }, [wishlist, product?._id, selectedVariant?.sku]);

  const handleWishlistToggle = async () => {
    if (!product?._id) return;

    const payload = {
      productId: product._id,
      ...(selectedVariant?.sku && { variantSku: selectedVariant.sku }),
    };

    try {
      if (isWishlisted) {
        await removeFromWishlist(payload.productId);
        // showToast("Removed from wishlist", "info");
      } else {
        await addToWishlist(payload);
      }
    } catch (err) {
      console.error("Wishlist toggle failed", err);
      showToast("Wishlist update failed", "error");
    }
  };

  // image
  const galleryImages = useMemo(() => {
    if (!product) return [];

    // If variant selected → show variant images first
    if (selectedVariant?.images?.length) return selectedVariant.images;

    // Else product images
    return product.images || [];
  }, [product, selectedVariant]);

  useEffect(() => {
    if (galleryImages.length) {
      setActiveImage(galleryImages[0]);
    }
  }, [galleryImages]);

  const priceData = useMemo(() => {
    if (!product) return {};

    if (selectedVariant) {
      return {
        price: selectedVariant.price,
        discountPrice: selectedVariant.discountPrice,
        discountPercent: selectedVariant.discountPercent,
      };
    }

    return {
      price: product.price,
      discountPrice: product.discountPrice,
      discountPercent: product.discountPercent,
    };
  }, [product, selectedVariant]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white">
      {/* MAIN GRID */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20 lg:pt-[82px] min-h-screen ">
        <div className="grid grid-cols-1 lg:grid-cols-[540px_648px] xl:grid-cols-[540px_648px] gap-8 lg:gap-x-0 xl:gap-x-[92px]">
          {" "}
          {/* LEFT COLUMN – IMAGES */}
          <div className="self-start pt-6 lg:pt-24 lg:sticky top-12 w-full">
            {/* MOBILE / TABLET VIEW */}
            <div className="flex flex-col gap-3 lg:hidden relative">
              {/* Main Image */}
              <div className="relative">
                <img
                  src={activeImage}
                  className="w-full h-80 sm:h-[380px] object-cover rounded"
                />

                {/* Wishlist Button */}
                <button className="absolute top-1 right-3 bg-white p-2 rounded-full border shadow">
                  <AiOutlineHeart size={22} />
                </button>
              </div>

              {/* Horizontal Thumbnails */}
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className="w-16 h-16 rounded cursor-pointer object-cover"
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden lg:flex gap-4 -mt-7 relative">
              {/* Vertical Thumbnails */}
              <div className="flex flex-col gap-5 mt-2">
                {galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className="xl:size-[87px] lg:size-16 md:size-12 rounded cursor-pointer object-cover"
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="relative pb-12">
                <img
                  src={activeImage}
                  className="xl:w-[414px] xl:h-[421px] lg:size-96 md:size-80 object-cover rounded"
                />
              </div>

              {/* Wishlist Button */}
              <button
                onClick={handleWishlistToggle}
                className="
                            absolute
                            top-3
                            lg:-top-16
                            xl:-top-16
                            lg:left-[440px]
                            xl:left-[490px]
                            cursor-pointer
                            bg-white
                            p-2
                            rounded-full
                            border
                            border-gray-200/70
                          "
              >
                {isWishlisted ? (
                  <AiFillHeart
                    size={32}
                    className="text-red-500 cursor-pointer"
                  />
                ) : (
                  <AiOutlineHeart
                    size={32}
                    className="text-gray-700 hover:text-red-500 cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* BREADCRUMB */}
            <div className="text-md text-gray-400 font-light mb-10">
              <Breadcrumb />
            </div>

            {/* PRODUCT SUMMARY */}
            <div className="flex flex-col gap-3 pb-4 border-b border-gray-300">
              <h1 className="text-4xl lg:text-3xl xl:4xl font-semibold text-zinc-900">
                {product?.name}
              </h1>

              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar
                    key={i}
                    className={
                      i <= Math.round(product?.averageRating || 0)
                        ? "text-orange-400"
                        : "text-gray-300"
                    }
                  />
                ))}

                <span className="text-sm text-stone-500 font-light">
                  ({product?.totalRatings || 0} Reviews)
                </span>
              </div>

              {/* price */}
              <div className="flex gap-3 items-center">
                <span className="text-2xl text-[#2C742F] font-normal">
                  ₹
                  {priceData.discountPercent > 0
                    ? Math.round(priceData.discountPrice)
                    : Math.round(priceData.price)}
                  .00
                </span>

                {priceData.discountPercent > 0 && (
                  <span className="line-through font-light text-zinc-400 text-xl">
                    ₹{Math.round(priceData.price)}.00
                  </span>
                )}
              </div>

              {/* VARIANTS */}

              {product?.variants?.length > 0 && (
                <div className="flex gap-4 mt-3.5">
                  {product.variants.map((item, i) => (
                    <div key={i} className="relative h-20">
                      <div
                        className={`w-[90px] h-20 border rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300
                            ${
                              selectedVariant?.sku === item.sku
                                ? "border-green-600 bg-green-600/10"
                                : "border-gray-300 bg-white"
                            }`}
                        onClick={() => {
                          setSelectedVariant(item);

                          if (item?.images?.length) {
                            setActiveImage(item.images[0]);
                          }

                          showToast(
                            `Selected ${item?.attributes.weight}`,
                            "info",
                          );
                        }}
                      >
                        <span className="text-sm font-normal">
                          {item?.attributes?.weight}
                        </span>

                        <span className="text-xl font-medium">
                          ₹
                          {item.discountPercent > 0
                            ? Math.round(item?.discountPrice)
                            : Math.round(item?.price)}
                        </span>
                      </div>

                      {item?.discountPercent > 0 && (
                        <div className="absolute -top-1 left-4 w-14">
                          <img src={Batch} alt="discount" />
                          <span className="absolute inset-0 text-[10px] text-white flex items-center justify-center">
                            {item.discountPercent}% off
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* BRAND + SHARE */}
              <div className="flex lg:flex-col xl:flex-row lg:items-start justify-between lg:gap-5 xl:items-center text-sm mt-3.5 ">
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

              <p className="text-sm text-[#808080] pr-0 lg:pr-8 xl:pr-24 font-light leading-5 mt-1 pb-6 border-b border-gray-300">
                {product?.description}
              </p>

              {/* QTY + ADD */}
              <div className="flex gap-3 flex-wrap pl-0 lg:pl-0 xl:pl-8 pt-1.5 lg:flex-col xl:flex-row">
                <div className="flex items-center justify-center border border-[#E6E6E6] rounded-full w-full md:w-[124px]  h-[50px] lg:w-sm xl:w-[124px] gap-4">
                  <button
                    className="bg-[#F2F2F2] rounded-full size-[34px] cursor-pointer"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="bg-[#F2F2F2] rounded-full size-[34px] cursor-pointer"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  disabled={product?.variants?.length > 0 && !selectedVariant}
                  className="w-full sm:w-md lg:w-sm xl:w-md h-12 cursor-pointer border border-[#00B207] bg-[#00b2060a] text-green-600 font-medium rounded disabled:opacity-50"
                  onClick={handleAddToCart}
                >
                  ADD
                </button>
              </div>
            </div>

            {/* DESCRIPTIONS */}
            <section className="pt-[35px]">
              <div className="max-w-full xl:max-w-[648px] flex flex-col">
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
                  <div className="flex flex-wrap gap-4 mt-3.5">
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
              <div className="max-w-full xl:max-w-[648px] flex flex-col">
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
              <div className="max-w-full xl:max-w-[648px] flex flex-col">
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
                    <div className="flex flex-wrap sm:flex-nowrap lg:flex-col xl:flex-row lg:flex-wrap xl:flex-wrap gap-4">
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
