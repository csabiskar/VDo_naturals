import { FiTruck } from "react-icons/fi";
import deliverytruck from "../assets/deliverytruck.svg";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../api/address.api";
import { useEffect, useState, useCallback } from "react";
import { getOrders } from "../api/order.api";
import avatarPlaceholder from "../assets/avatar-placeholder.png";

/* ---------------- MOCK DATA ---------------- */
const userProfile = {
  name: "Sampath",
  role: "Customer",
  avatar: "https://i.pravatar.cc/120",
  email: "sampath@gmail.com",
  phone: "+91 94436 76489",
  address:
    "2/17 SR Avenue, Kumudam Nagar, Vilankurichi Road, Coimbatore – 641045",
};

/* ---------------- DASHBOARD ---------------- */
export default function Dashboard() {
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const [addressRes, ordersRes] = await Promise.all([
          getAddress(),
          getOrders(),
        ]);

        if (!mounted) return;

        setAddress(addressRes?.addresses || []);
        setOrders(ordersRes || []);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  const primaryAddress = address?.[0];


  console.log(address);
  return (
    <div className="space-y-6 min-h-screen px-4 sm:px-6 md:px-1 lg:px-0 xl:px-0">
      {/* ================= PROFILE + ADDRESS ================= */}
      <div className="bg-white rounded-xl border border-gray-200 py-12 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-40">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 xl:gap-40 xl:mt-2">
          {/* PROFILE */}
          {primaryAddress && (
            <div
              key={primaryAddress._id}
              className="flex flex-col items-center gap-4 shrink-0"
            >
              <img
                src={avatarPlaceholder}
                alt={primaryAddress.firstName}
                className="w-[116px] h-[116px] rounded-full object-cover"
              />

              <div className="text-center">
                <h3 className="text-[19px] font-normal text-gray-900">
                   {primaryAddress.firstName} {primaryAddress.lastName}
                </h3>

                <button
                  className="text-green-600 text-md mt-1 hover:underline cursor-pointer"
                  onClick={() =>
                    navigate("/profile/settings", {
                      state: { address: primaryAddress },
                    })
                  }
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          {/* ADDRESS */}
          {primaryAddress &&(
            <div key={primaryAddress.userId._id} className="w-full lg:max-w-[360px]">
              <p className="uppercase text-sm font-normal text-gray-400 mb-3 tracking-wide">
                Shipping Address
              </p>

              <p className="font-medium text-[18px] text-gray-800 mb-1">
                {primaryAddress.firstName} {primaryAddress.lastName}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-1">
                {primaryAddress.streetAddress} - {primaryAddress.zipCode}
              </p>

              <p className="text-[16px] font-light text-gray-900">
                {primaryAddress.email}
              </p>

              <p className="text-[16px] font-light text-gray-900">
                {primaryAddress.phone}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ================= RECENT ORDER HISTORY ================= */}
      <div className="bg-white rounded-xl border border-gray-200 pb-2">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 md:px-12 lg:px-5 xl:px-6 pt-2.5 pb-4 gap-2 sm:gap-0">
          <h3 className="font-normal text-[19px] text-gray-900">
            Recent Order History
          </h3>
          <span
            className="text-green-600 text-[16px] cursor-pointer font-normal"
            onClick={() => navigate("/profile/orders")}
          >
            View All
          </span>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto px-4 sm:px-4 md:px-8 lg:px-0 xl:px-0">
          <table className="w-full text-sm text-left min-w-[640px] sm:min-w-full">
            {/* TABLE HEAD */}
            <thead className="bg-[#EAF8E7] text-gray-700">
              <tr>
                <th className="p-3 font-medium">No.</th>
                <th className="p-3 font-medium">Order Id</th>
                <th className="p-3 font-medium">Product</th>
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Price</th>
                <th className="p-3 font-medium">Payment</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="text-gray-700 font-light">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-10 text-gray-500">
                    No orders found
                  </td>
                </tr>
              ) : (
                <>
                  {orders?.map((order, index) => {
                    const firstProduct = order.items?.[0]?.productName;
                    const extraCount = order.items.length - 1;

                    return (
                      <tr key={order._id} className="border-b border-gray-200">
                        <td className="p-4">{index + 1}</td>

                        <td className="p-4 font-medium text-gray-900">
                          #{order._id.slice(-6).toUpperCase()}
                        </td>

                        <td className="p-4">
                          {firstProduct}
                          {extraCount > 0 && (
                            <span className="text-gray-500 text-xs">
                              {" "}
                              + {extraCount} more
                            </span>
                          )}
                        </td>

                        <td className="p-4">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>

                        <td className="p-4">₹{order.totalAmount}</td>

                        <td className="p-4">
                          <span
                            className={`flex items-center gap-2 font-normal ${
                              order.paymentStatus === "Paid"
                                ? "text-green-600"
                                : "text-orange-500"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                order.paymentStatus === "Paid"
                                  ? "bg-green-600"
                                  : "bg-orange-500"
                              }`}
                            />
                            {order.paymentStatus}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="flex items-center gap-2 text-green-600 font-normal">
                            <img
                              src={deliverytruck}
                              alt=""
                              className="w-4 h-4"
                            />
                            {order.orderStatus}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
