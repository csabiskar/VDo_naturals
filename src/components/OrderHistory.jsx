import deliverytruck from "../assets/deliverytruck.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getOrders } from "../api/order.api";
import avatarPlaceholder from "../assets/avatar-placeholder.png";

export default function OrderHistory() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await getOrders();
        if (mounted) setOrders(res || []);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => (mounted = false);
  }, []);

  const tableRows = useMemo(() => {
    return orders.map((order) => ({
      id: order._id,
      orderId: `${order._id.slice(-6).toUpperCase()}`,
      date: new Date(order.createdAt).toLocaleDateString(),
      price: order.totalAmount?.toFixed(2),
      items: order.totalItems, // 👈 ADD
      paymentStatus: order.paymentStatus,
    }));
  }, [orders]);

  // console.log(tableRows);

  if (loading) {
    return <div className="p-6 text-sm text-gray-500">Loading orders...</div>;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 pb-2">
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-6 pt-2.5 pb-4">
        <h3 className="font-normal text-[19px] text-gray-900">Order History</h3>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <table className="w-full text-sm text-left min-w-[600px] sm:min-w-full">
          {/* TABLE HEAD */}
          <thead className="bg-[#9f9f9f1a] text-gray-700">
            <tr>
              <th className="px-4 sm:px-6 py-1.5 font-light text-[12.5px] uppercase">
                Order ID
              </th>
              <th className="px-4 sm:px-6 py-1.5 font-light text-[12.5px] uppercase">
                Date
              </th>
              <th className="px-4 sm:px-6 py-1.5 font-light text-[12.5px] uppercase">
                Total
              </th>
              <th className="px-6 py-1.5 font-light text-[12.5px] uppercase">
                Status
              </th>
              <th className="px-4 sm:px-6 py-1.5 font-light text-[12.5px] uppercase"></th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="text-gray-700 font-light text-[12.5px]">
            {tableRows?.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-500">
                  No orders History
                </td>
              </tr>
            ) : (
              <>
                {tableRows.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200">
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-900">
                      #{order.orderId}
                    </td>
                    <td className="px-4 sm:px-6 py-4">{order.date}</td>
                    <td className="px-4 sm:px-6 py-4">
                      ₹{order.price}
                      <span className="ml-1 text-gray-500 text-[11.5px]">
                        ({order.items} items)
                      </span>
                    </td>

                    <td className="px-4 sm:px-6 py-4">
                      <span className="flex items-center gap-2 font-normal">
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td
                      className="px-4 sm:px-6 py-4 text-green-600 cursor-pointer font-normal hover:underline"
                      onClick={() => navigate(`/profile/orders/${order.id}`)}
                    >
                      View details
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
