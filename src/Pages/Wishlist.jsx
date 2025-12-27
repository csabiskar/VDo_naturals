import cookie from "../assets/Cookies.png";
import HairOil from "../assets/HairOil.png";
import PongalMix from "../assets/PongalMix.png";
import { RiDeleteBin6Line } from "react-icons/ri";


/* ===== SHIFT CONTROL ===== */
const PRICE_SHIFT = "lg:pl-[26px]";
const STOCK_SHIFT = "lg:pl-[82px]";
const ACTION_SHIFT = "lg:pr-[0px]";

const wishlist = [
  {
    id: 1,
    name: "Dia Caare Millet Cookies",
    image: cookie,
    price: 15,
    oldPrice: 22.00,
    discount: "Off 20%",
    stock: "in",
  },
  {
    id: 2,
    name: "Instant Pongal Mix",
    image: PongalMix,
    price: 42,
    oldPrice: 70,
    stock: "in",
  },
  {
    id: 3,
    name: "Herbal Hair Oil",
    image: HairOil,
    price: 42,
    oldPrice: 70,
    stock: "out",
  },
];

export default function Wishlist() {
  return (
    <>
      <div className=" min-w-screen mx-auto lg:px-20 px-4 pt-24 pb-23">
        <h1 className="text-[32px] font-semibold text-gray-900 mb-7">
          My Wishlist
        </h1>

        {/* ===================================================== */}
        {/* =============== SMALL SCREEN : CARDS ================ */}
        {/* ===================================================== */}
        <div className="space-y-4 sm:block md:hidden">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />

              <div className="flex-1 space-y-2">
                <h3 className="text-gray-900 font-medium">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">
                    ₹{item.price}
                  </span>
                  <span className="line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>
                  {item.discount && (
                    <span className="bg-red-400 text-white text-xs px-2 py-0.5 rounded">
                      {item.discount}
                    </span>
                  )}
                </div>

                <div>
                  {item.stock === "in" ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
                      Out of Stock
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={item.stock === "out"}
                    className={`px-4 py-2 text-xs font-semibold rounded
                      ${
                        item.stock === "in"
                          ? "bg-[#00B207] text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    Add to Cart
                  </button>

                  <RiDeleteBin6Line className="text-xl text-gray-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================== */}
        {/* ================= MEDIUM SCREEN ===================== */}
        {/* ===================================================== */}
        <div className="hidden md:block lg:hidden border border-gray-200 rounded-md bg-white">

          {wishlist.map((item, index) => (
            <div key={item.id}>
              <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] px-6 py-6 items-center">

                {/* PRODUCT */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-gray-800 text-sm">
                    {item.name}
                  </span>
                </div>

                {/* PRICE */}
                <div className="text-sm">
                  ₹{item.price}
                    <span className="line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>
                  {item.discount && (
                    <span className="bg-red-400 text-white text-xs px-2 py-0.5 rounded">
                      {item.discount+".00"}
                    </span>
                  )}
                </div>

                {/* STOCK */}
                <div>
                  {item.stock === "in" ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* ACTION */}
                <div className="flex justify-end gap-4">
                  <button
                    disabled={item.stock === "out"}
                    className={`px-4 py-2 text-xs rounded
                      ${
                        item.stock === "in"
                          ? "bg-[#00B207] text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    Add
                  </button>

                  <RiDeleteBin6Line className="text-lg text-gray-600" />
                </div>
              </div>

              {index !== wishlist.length - 1 && (
                <div className="px-6">
                  <div className="h-px bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ===================================================== */}
        {/* ================= LARGE SCREEN ====================== */}
        {/* ===================================================== */}
        <div className="hidden lg:block border border-gray-200 rounded-md bg-white overflow-hidden mb-32">

          {/* HEADER */}
          <div className="grid grid-cols-[2.5fr_1.5fr_1.5fr_2fr] px-14 h-[45px] border-b border-gray-200 items-center text-gray-400 text-sm">
            <div>PRODUCT</div>
            <div className={PRICE_SHIFT}>PRICE</div>
            <div className={STOCK_SHIFT}>STOCK STATUS</div>
            <div className="justify-self-end"></div>
          </div>

          {wishlist.map((item, index) => (
            <div key={item.id}>
              <div className="grid grid-cols-[2.5fr_1.5fr_1.5fr_2fr] px-12 h-[124px] items-center">

                {/* PRODUCT */}
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-24 object-contain"
                  />
                  <span className="text-gray-800 font-light">
                    {item.name}
                  </span>
                </div>

                {/* PRICE */}
                <div className={`flex items-center gap-1 ${PRICE_SHIFT}`}>
                  ₹{item.price}
                    <span className="line-through text-medium text-gray-400">
                    ₹{item.oldPrice+'.00'}
                  </span>
                  {item.discount && (
                    <span className="bg-red-400 text-white text-xs px-2 py-1.5 rounded">
                      {item.discount}
                    </span>
                  )}
                </div>

                {/* STOCK */}
                <div className={STOCK_SHIFT}>
                  {item.stock === "in" ? (
                    <span className="bg-[#21bb2643] text-green-700 px-2 py-1.5 rounded-sm text-sm">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-500 p-2 px-1 py-1.5  rounded-sm text-sm">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* ACTION */}
                <div className="flex justify-end gap-6">
                  <button
                    disabled={item.stock === "out"}
                    className={`px-8 py-2.5 text-sm rounded-full
                      ${
                        item.stock === "in"
                          ? "bg-[#00B207] text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    Add to Cart
                  </button>

                  <RiDeleteBin6Line className="text-2xl text-black" />
                </div>
              </div>

              {index !== wishlist.length - 1 && (
                <div className="px-10">
                  <div className="h-px bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
