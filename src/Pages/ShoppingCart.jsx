import { useState, useMemo, useContext, useCallback, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import EmptyCart from "../components/EmptyCart";
import Cookie from "../assets/Cookies.png";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cartData, loading, updateQty, removeFromCart, loadCart } =
    useContext(CartContext);
  const [coupon, setCoupon] = useState("");

  const cart = cartData?.items || [];

  useEffect(()=>{
    loadCart()
  },[])

  // Memoized subtotal
  const subtotal = useMemo(() => {
    return cart.reduce((sum, i) => {
      const price =
        Number(i.discountPrice) < Number(i.price)
          ? Number(i.discountPrice)
          : Number(i.price);
      return sum + price * Number(i.quantity);
    }, 0);
  }, [cart]);

  // Handle quantity changes with removal if 0
  const handleQtyChange = useCallback(
    (item, newQty) => {
      if (newQty <= 0) {
        removeFromCart(item);
      } else {
        updateQty(item.productId, newQty, item);
      }
    },
    [removeFromCart, updateQty]
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading Cart...
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="min-h-screen px-4 sm:px-8 lg:px-20 pt-24 pb-24">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20 pt-6 pb-24">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
        My Shopping Cart
      </h1>

      <div className="flex flex-col xl:flex-row gap-5">
        {/* MOBILE & TABLE VIEW */}
        <div className="block lg:hidden w-full space-y-6">
          {cart.map((item) => (
            <div
              key={item.productId + (item.variantSku || "")}
              className="border text-gray-800 font-light border-gray-200 rounded-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              {/* Image + Name */}
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={Cookie}
                  alt={item.productName}
                  className="w-24 h-24 object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 font-light text-sm sm:text-base wrap-break-word">
                    {item.productName}{" "}
                    {item.hasVariants
                      ? `(${item.variantAttributes?.weight})`
                      : ""}
                  </h3>
                  <p className="text-gray-500 mt-1 text-xs sm:text-sm wrap-break-word sm:truncate">
                    ₹
                    {(item.discountPrice < item.price
                      ? item.discountPrice
                      : item.price
                    ).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity + Subtotal + Remove */}
              <div className="flex items-center gap-3 mt-4 sm:mt-0 shrink-0">
              <div className="flex items-center border border-gray-200 rounded-full px-2 w-24 gap-1 h-11">
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-lg cursor-pointer"
                      onClick={() => handleQtyChange(item, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-4 text-center">{item.quantity}</span>
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-lg cursor-pointer"
                      onClick={() => handleQtyChange(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                <span className="font-medium whitespace-nowrap text-sm sm:text-base">
                  ₹
                  {(
                    (item.discountPrice < item.price
                      ? item.discountPrice
                      : item.price) * item.quantity
                  ).toFixed(2)}
                </span>
                <FiX
                  onClick={() => removeFromCart(item)}
                  className="text-gray-400  shrink-0 cursor-pointer text-xl border border-gray-400 p-0.5 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP TABLE VIEW */}
        <div className="hidden lg:flex flex-col w-full xl:w-[70%] border mt-1 border-gray-200 rounded-lg">
          <div className="grid grid-cols-5 px-4 py-3  border-b border-gray-200 text-sm text-gray-500">
            <span className="col-span-2 tracking-wider">PRODUCT</span>
            <span className="tracking-wider lg:ml-12">PRICE</span>
            <span className="tracking-wider">QUANTITY</span>
            <span className="tracking-wider">SUBTOTAL</span>
          </div>

          <div className="flex-1">
            {cart.map((item, index) => (
              <div key={item.productId + (item.variantSku || "")}>
                {/* CART ROW */}
                <div className="grid grid-cols-5 px-6 py-3.5 items-center gap-2">
                  <div className="flex items-center col-span-2 gap-2">
                    <img
                      src={Cookie}
                      alt={item.productName}
                      className="w-28 h-24 object-contain shrink-0"
                    />
                    <p className="text-gray-800 font-light wrap-break-word">
                      {item.productName}{" "}
                      {item.hasVariants ? item.variantAttributes?.weight : null}
                    </p>
                  </div>

                  <div className="lg:ml-11">
                    ₹
                    {(item.discountPrice < item.price
                      ? item.discountPrice
                      : item.price
                    ).toFixed(2)}
                  </div>

                  <div className="flex items-center border border-gray-200 rounded-full px-2.5 w-[124px] gap-2 h-[50px]">
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-lg cursor-pointer"
                      onClick={() => handleQtyChange(item, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-4 text-center">{item.quantity}</span>
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-lg cursor-pointer"
                      onClick={() => handleQtyChange(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex justify-between items-center ">
                    <span className="font-normal">
                      ₹
                      {(
                        (item.discountPrice < item.price
                          ? item.discountPrice
                          : item.price) * item.quantity
                      ).toFixed(2)}
                    </span>
                    <FiX
                      onClick={() => removeFromCart(item)}
                      className="text-gray-500 cursor-pointer text-xl border border-gray-400 p-0.5 rounded-full"
                    />
                  </div>
                </div>

                {/* DIVIDER */}
                {index !== cart.length - 1 && (
                  <div className="mx-6 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end px-6 py-2 mt-auto border-t  border-gray-200">
            <button
              className="bg-transparent  border-2 border-[#00B207] cursor-pointer text-[#00B207] font-medium px-6 py-3 w-36 h-11 rounded-sm text-sm  transition"
              onClick={() => navigate('/categories')}
            >
              Add More
            </button>
          </div>
        </div>

        {/* CART TOTAL & COUPON */}
        <div className="w-full xl:w-[35%] border border-gray-200 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-normal mb-4">Cart Total</h2>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-800 text-sm font-light">Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-800 font-light text-sm">Shipping</span>
            <span className="font-medium">Free</span>
          </div>

          <div className="flex justify-between py-4  font-light text-lg">
            <span>Total:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          {/* COUPON */}
          <div className="mt-5">
            <div className="relative w-full h-14">
              <input
                type="text"
                placeholder="Enter code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="lg:w-full w-full h-full lg:h-[55px] pl-6 pr-[180px] text-[16px] font-light border border-gray-200 rounded-full outline-none placeholder:text-gray-400"
              />
              <button className="absolute right-1 sm:top-0 lg:top-1.5 px-5 md:h-full w-28 md:w-fit h-full lg:w-[155px] lg:h-11 bg-[#2F2F2F] text-white text-sm font-normal rounded-full disabled:opacity-50">
                Apply Coupon
              </button>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-[#00B207] disabled:opacity-50 text-white py-3 rounded-sm text-lg cursor-pointer"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
