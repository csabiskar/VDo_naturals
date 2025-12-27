import { useState, useMemo } from "react";
import { FiX } from "react-icons/fi";
import cookie from "../assets/Cookies.png";
import HairOil from "../assets/HairOil.png";

const initialCart = [
  {
    id: 1,
    name: "Dia Caare Millet Cookies",
    price: 15,
    qty: 2,
    image: cookie,
  },
  {
    id: 2,
    name: "Herbal Hair Oil",
    price: 42,
    qty: 1,
    image: HairOil,
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");

  /* ----------------- ACTIONS ----------------- */
  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* ----------------- TOTALS ----------------- */
  const subtotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    [cart]
  );
  /* ----------------- EMPTY CART ----------------- */
  if (cart.length === 0) {
    return (
      <div className="min-h-screen px-4 sm:px-8 lg:px-20 pt-24 pb-24">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
          My Shopping Cart
        </h1>

        <EmptyCart />
      </div>
    );
  }

  /* ----------------- UI ----------------- */
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20 pt-24 pb-24">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
        My Shopping Cart
      </h1>

      <div className="flex flex-col xl:flex-row gap-5">
        {/* =================================================
            PRODUCTS SECTION
        ================================================= */}

        {/* -------- MOBILE & TABLET (CARD VIEW) -------- */}
        <div className="block lg:hidden w-full space-y-6 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border text-gray-800 font-light border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <div className="flex gap-1 md:gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h3 className="text-gray-800 font-light">{item.name}</h3>
                  <p className="text-gray-500 mt-1">₹{item.price.toFixed(2)}</p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-1">
                      <button onClick={() => updateQty(item.id, "dec")}>
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, "inc")}>
                        +
                      </button>
                    </div>

                    <span className="font-medium pl-2">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </div>

                <FiX
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* -------- DESKTOP (TABLE VIEW) -------- */}
        <div className="hidden lg:block w-full xl:w-[70%] border mt-1 border-gray-200 rounded-lg">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-5 px-6 py-4 border-b border-gray-200  text-sm text-gray-500">
            <span className="col-span-2 tracking-wider">PRODUCT</span>
            <span className="tracking-wider">PRICE</span>
            <span className="tracking-wider">QUANTITY</span>
            <span className="tracking-wider">SUBTOTAL</span>
          </div>

          {/* TABLE ROWS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 px-6 py-6 border-b border-gray-200 items-center"
            >
              <div className="flex items-center col-span-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-24 object-contain"
                />
                <p className="text-gray-800 font-light">{item.name}</p>
              </div>

              <div>₹{item.price.toFixed(2)}</div>
              <div className="flex items-center border border-gray-200 rounded-full px-2 w-28  gap-2 h-12">
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-lg"
                  onClick={() => updateQty(item.id, "dec")}
                >
                  −
                </button>

                <span className="min-w-4 text-center">{item.qty}</span>

                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-lg"
                  onClick={() => updateQty(item.id, "inc")}
                >
                  +
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">
                  ₹{(item.price * item.qty).toFixed(2)}
                </span>
                <FiX
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 cursor-pointer"
                />
              </div>
            </div>
          ))}

          {/* spacing below table  */}
          {/* UPDATE CART */}
          <div className="flex justify-end px-6 py-5">
            <button className="bg-gray-100 text-gray-500 px-6 py-3 w-36  rounded-full text-sm ">
              Update Cart
            </button>
          </div>
        </div>

        {/* =================================================
            CART TOTAL + COUPON
        ================================================= */}
        <div className="w-full xl:w-[35%] border border-gray-200 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-normal mb-4">Cart Total</h2>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-800 font-light">Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-800 font-light">Shipping</span>
            <span className="font-medium">Free</span>
          </div>

          <div className="flex justify-between py-4 font-semibold text-lg">
            <span>Total</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          {/* COUPON */}
          {/* COUPON */}
          <div className="mt-5">
            <div className="relative w-full h-14">
              {/* Input */}
              <input
                type="text"
                placeholder="Enter code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="
                    lg:w-full w-full h-full lg:h-[52px]
                    pl-6 pr-[180px]
                    text-[16px] font-light
                    border border-gray-200
                    rounded-full
                    outline-none
                    placeholder:text-gray-400
                "
              />

              {/* Button */}
              <button
                //   disabled={!coupon}
                className="
        absolute -right-1
        px-5
        md:h-full
        w-28
        md:w-fit
        h-full
        lg:w-40
        lg:h-[52px]
        bg-[#2F2F2F]
        text-white
        text-[16px] font-medium
        rounded-full
        disabled:opacity-50
      "
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            className="mt-6 w-full bg-[#00B207] disabled:opacity-50 text-white py-3 rounded-full text-lg"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
