import { useContext, useState } from "react";
import InputField from "../components/InputField";
import SelectInputs from "../components/SelectInputs";
import cookie from "../assets/Cookies.png";
import HairOil from "../assets/HairOil.png";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../api/order.api";
import { useNavigate } from "react-router-dom";


export default function Checkout() {

  // cart data 

    const {cartData,loading}=useContext(CartContext)

  console.log(cartData)


const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    email: "",
    phone: "",
    notes: "",
    payment: "upi",
  });

  const [errors, setErrors] = useState({});


  const subtotal = cartData?.items?.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    if (!formData.firstName) temp.firstName = "Required";
    if (!formData.lastName) temp.lastName = "Required";
    if (!formData.address) temp.address = "Required";

    if (!formData.email) temp.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Invalid email";

    if (!formData.phone || formData.phone.length < 10)
      temp.phone = "Invalid phone number";

    if (!formData.country) temp.country = "Required";
    if (!formData.state) temp.state = "Required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const payload = {
    shippingAddress: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      streetAddress: formData.address,
      country: formData.country,
      state: formData.state,
      zipCode: "638051", // 🔹 optional / hardcoded for now
      email: formData.email,
      phone: formData.phone,
    },
    notes: formData.notes,
  };

  try {
    console.log("ORDER PAYLOAD 👉", payload);

    const res = await placeOrder(payload);

    console.log("ORDER RESPONSE ✅", res);
    alert("Order placed successfully 🎉");

    // optional redirect
     navigate("/");

  } catch (err) {
    console.error(err);
    alert(err?.response?.data?.message || "Order failed");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 pt-24 pb-24"
    >
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* ================= BILLING ================= */}
        <div className="lg:col-span-8">
          <h1 className="text-2xl font-normal mb-6">
            Billing Information
          </h1>

          {/* First / Last / Company */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2.5">
            <InputField
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              placeholder="Your first name"
            />
            <InputField
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              placeholder="Your last name"
            />
            <InputField
              label="Company Name (optional)"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
            />
          </div>

          {/* Street / Country / State */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6  mt-3">
            <div className="md:col-span-6">
              <InputField
                label="Street Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
                placeholder="Street address"
              />
            </div>

            <div className="md:col-span-4">
              <SelectInputs
                label="Country / Region"
                name="country"
                value={formData.country}
                onChange={handleChange}
                error={errors.country}
                options={["India"]}
              />
            </div>

            <div className="md:col-span-2">
              <SelectInputs
                label="States"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={errors.state}
                options={["Tamil Nadu", "Kerala"]}
              />
            </div>
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-4">
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Email Address"
            />
            <InputField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Phone number"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mb-10 mt-4 pl-1">
            <input type="checkbox" className="accent-[#00B207] border-0  scale-150" />
            <span className="text-sm text-gray-600">
              Ship to a different address
            </span>
          </div>

          <hr className="mb-10 text-gray-200" />

          {/* Additional Info */}
          <h2 className="text-2xl font-medium mb-4">
            Additional Info
          </h2>

          <label className="text-sm font-normal text-gray-700">
            Order Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 resize-none"
          />
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="lg:col-span-4">
          <div className="border border-gray-200 rounded-xl p-6 sticky top-24">
            <h3 className="text-lg  mb-6">
              Order Summary
            </h3>

            {/* Products */}
            <div className="space-y-5  mb-6">
              {cartData?.items?.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={cookie}
                      alt={item.productName}
                      className="w-20 h-16 object-contain"
                    />
                    <div>
                      <p className="font-normal text-[16px] text-gray-600 xl:w-40">{item.productName}</p>
                    </div>
                    <div className="pr-2.5 lg:pr-12">
                         <p className="text-gray-900">x{item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium">
                    ₹{item.quantity * item.price}.00
                  </span>
                </div>
              ))}
            </div>


            {/* Totals */}
            <div className="space-y-3 text-sm mt-4">
              <div className="flex justify-between">
                <span className="text-gray-600 font-light">Subtotal:</span>
                <span>₹{subtotal}.00</span>
              </div>
            <hr  className="text-gray-200"/>
              <div className="flex justify-between">
                <span className="text-gray-600 font-light">Shipping:</span>
                <span className="font-medium">Free</span>
              </div>
            </div>

            <hr className="my-4 text-gray-200" />

            <div className="flex justify-between text-lg font-semibold mb-6">
              <span className="font-light text-gray-600 text-[16px]">Total:</span>
              <span>₹{subtotal}.00</span>
            </div>

            {/* Payment */}
            <h4 className="font-normal text-lg mb-4">
              Payment Method
            </h4>

            <div className="space-y-3 text-sm mb-6">
              {["upi", "gpay", "card"].map((method) => (
                <label key={method} className="flex items-center gap-2 font-light text-gray-600">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={formData.payment === method}
                    onChange={handleChange}
                    className="accent-green-600 text-gray-600 "
                  />
                  {method === "upi"
                    ? "UPI"
                    : method === "gpay"
                    ? "Gpay"
                    : "Credit / Debit / ATM Card"}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-[#00B207] text-white font-semibold hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
