import { useParams } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useMemo, useState } from "react";
import { getSingleOrders } from "../api/order.api";
import placeholderImg from "../assets/MilletNoodlesProduct.png";
import { useNavigate } from "react-router-dom";

export default function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const steps = useMemo(
    () => ["Order received", "Processing", "On the way", "Delivered"],
    [],
  );

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await getSingleOrders(orderId);
        if (mounted) {
  setOrder({
    ...res,
    orderStatus: "Delivered", // 👈 force delivered for testing
  });
}

      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [orderId]);

  console.log(order);
  /**
   * STEP INDEX (industry safe)
   */
  const currentStep = useMemo(() => {
    if (!order?.orderStatus) return 1;
    const idx = steps.indexOf(order.orderStatus);
    return idx === -1 ? 1 : idx + 1;
  }, [order?.orderStatus, steps]);

  // review to check deliverd or not
  const isDelivered = order?.orderStatus === "Delivered";

  /**
   * DATE FORMAT
   */
  const createdDate = useMemo(() => {
    if (!order?.createdAt) return "";
    return new Date(order.createdAt).toDateString();
  }, [order?.createdAt]);

  /**
   * PRODUCT LABEL LOGIC (unchanged UI)
   */
  const productLabel = (item) => {
    const weight = item.variantAttributes?.weight;

    if (item.variantSku && weight)
      return `${item.productName} (${item.variantSku} • ${weight})`;

    if (weight) return `${item.productName} (${weight})`;

    return item.productName;
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (!order) {
    return <div className="text-center mt-20">Order not found</div>;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 space-y-5 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-0">
      {/* HEADER */}
      <div className="text-[19.39px] font-normal border-b border-gray-200 pb-4 xl:p-4">
        Order Details
        <span className="text-gray-900 font-light text-sm ml-2.5">
          • {createdDate} • {order.totalItems} Products
        </span>
      </div>

      {/* ADDRESS + SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-[58%_30%] gap-6 lg:gap-12 xl:px-5">
        {/* SHIPPING */}
        <div className="border rounded-lg border-gray-200 px-4 sm:px-6 md:px-8 lg:px-11 py-4">
          <p className="text-[13.57px] font-normal text-gray-400">
            SHIPPING ADDRESS
          </p>

          <h3 className="mt-5 font-normal text-md">
            {order.shippingAddress.firstName} {order.shippingAddress.lastName}
          </h3>

          <p className="mt-2 text-sm font-light text-gray-500">
            {order.shippingAddress.streetAddress}
          </p>

          <div className="mt-7">
            <p className="text-xs text-gray-400">EMAIL</p>
            <p className="font-light text-[15.52px]">
              {order.shippingAddress.email}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs text-gray-400">PHONE</p>
            <p className="font-light text-[15.52px]">
              {order.shippingAddress.phone}
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="border border-gray-200 rounded-xl px-4 sm:px-5 md:px-6 lg:px-5 pt-5 bg-white">
          <div className="grid grid-cols-2 pb-3 border-b border-gray-200">
            <div>
              <p className="text-[11.63px] text-gray-400 uppercase">
                Order ID:
              </p>
              <p className="mt-1 text-[13.57px] font-light">
                #{order.orderId.slice(-6).toUpperCase()}
              </p>
            </div>

            <div className="border-l border-gray-200 pl-2">
              <p className="text-[11.63px] text-gray-400 uppercase">
                Payment Method:
              </p>
              <p className="mt-1 text-[13.57px]">{order.paymentMethod}</p>
            </div>
          </div>

          <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
            <span className="text-[#666666] text-[13.57px]">Subtotal:</span>
            <span className="text-[13.57px] font-medium">
              ₹{order.totalAmount}.00
            </span>
          </div>

          <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
            <span className="text-[#666666] text-[13.57px]">Shipping</span>
            <span className="text-[13.57px] font-medium">Free</span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-[17.45px] font-medium text-gray-900">
              Total
            </span>
            <span className="text-[17.45px] font-semibold text-[#00B207]">
              ₹{order.totalAmount}.00
            </span>
          </div>
        </div>
      </div>

      {/* ORDER TRACKER (VISIBLE ON SM ALSO) */}
      <div className="mt-10 relative px-0 sm:px-4 md:px-6 lg:px-11 xl:px-12">
        <div className="flex flex-col gap-12 px-4 md:px-0 md:flex-row md:items-center justify-start items-start  md:justify-between relative">
          {/* GREY BASE LINE */}
          <div
            className="
                        absolute
                        bg-gray-100
                        z-0

                        /* MOBILE (VERTICAL) */
                        top-0
                        bottom-0
                        left-8
                        w-2

                        /* DESKTOP (HORIZONTAL) */
                        sm:top-4
                        sm:left-7
                        sm:right-6
                        sm:bottom-auto
                        sm:h-2
                        sm:w-auto
                      "
          >
            <div
              className="
      bg-[#00B207]
      transition-all
      duration-700

      /* MOBILE FILL (VERTICAL) */
      w-full

      /* DESKTOP FILL (HORIZONTAL) */
      sm:h-full
    "
              style={{
                height: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                width:
                  window.innerWidth >= 640
                    ? `${((currentStep - 1) / (steps.length - 1)) * 100}%`
                    : "100%",
              }}
            />
          </div>

          {steps.map((label, index) => {
            const step = index + 1;

            /**
             * ✅ FIXED LOGIC
             * Order received also becomes ✔️ after moving forward
             */
            const isCompleted =
              step < currentStep || (step === 1 && currentStep > 1);

            const isActive = step === currentStep;

            return (
              <div
                key={label}
                className="flex md:flex-col gap-2 md:gap-0 items-center z-10"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center font-light justify-center border border-dashed text-sm
                    ${
                      isCompleted
                        ? "bg-[#00B207] border-[#00B207] text-white"
                        : isActive
                          ? "bg-[#00B207] border-[#00B207] text-[#ffffff] "
                          : "bg-white border-[#00B207] text-[#00B207]"
                    }`}
                >
                  {step === 1 ||
                  (step === steps.length && currentStep === steps.length) ? (
                    <IoMdCheckmark size={18} />
                  ) : (
                    `0${step}`
                  )}
                </div>

                <p
                  className={`mt-2 text-[13px] ${
                    isCompleted || isActive ? "text-[#2C742F]" : "text-gray-900"
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <div className="overflow-x-auto mt-10 px-0 sm:px-4 md:px-6 lg:px-0">
        <table className="w-full min-w-[500px] text-sm">
          <thead className="bg-[#4d4d4d1e] text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left font-light text-[12px]">
                PRODUCT
              </th>
              <th className="px-4 py-2 text-center font-light text-[12px]">
                PRICE
              </th>
              <th className="px-4 py-2 text-center font-light text-[12px]">
                QUANTITY
              </th>
              <th className="px-4 py-2 text-center font-light text-[12px]">
                SUBTOTAL
              </th>
            </tr>
          </thead>

          <tbody>
            {order.items.map((item) => (
              <tr
                key={item.productId}
                className={`border-b border-gray-200 ${
                  isDelivered ? "cursor-pointer hover:bg-gray-50" : ""
                }`}
                onClick={() => {
                  if (!isDelivered) return;
                  navigate(`/profile/review/${item.productId}`, { state: { order } });
                }}
              >
                <td className="px-4 py-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.productImages[0] || placeholderImg}
                      alt={item.productName}
                      loading="lazy"
                      className="size-16 rounded-md object-cover shrink-0"
                    />

                    <span>{productLabel(item)}</span>
                  </div>
                </td>

                <td className="px-4 py-6 text-center">
                  ₹{item.discountPrice}.00
                </td>
                <td className="px-4 py-6 text-center">x{item.quantity}</td>
                <td className="px-4 py-6 text-center">₹{item.subTotal}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
