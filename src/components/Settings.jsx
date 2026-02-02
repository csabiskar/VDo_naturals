import { useState, useEffect, useCallback } from "react";
import avatarPlaceholder from "../assets/avatar-placeholder.png";
import { editAddress } from "../api/address.api";
import { showToast } from "../utils/toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function Settings() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const address = state?.address;
  useEffect(() => {
    if (!address) {
      navigate("/profile");
    }
  }, [address, navigate]);

  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [profilePic, setProfilePic] = useState(avatarPlaceholder);
  const [saving, setSaving] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!address) return;

    setAccount({
      firstName: address.firstName || "",
      lastName: address.lastName || "",
      email: address.email || "",
      phone: address.phone || "",
    });

    setBilling({
      firstName: address.firstName || "",
      lastName: address.lastName || "",
      company: address.companyName || "",
      address: address.streetAddress || "",
      country: address.country || "",
      state: address.state || "",
      zip: address.zipCode || "",
      email: address.email || "",
      phone: address.phone || "",
    });
  }, [address]);

  // =========================
  // HANDLERS
  // =========================
const handleAccountChange = useCallback((e) => {
  setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}, []);


const handleBillingChange = useCallback((e) => {
  setBilling((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}, []);


  const handleAccountSubmit = async () => {
    const err = validateAccount();
    setErrors(err);

    if (Object.keys(err).length !== 0) return;

    try {
      setSaving(true);

      await editAddress(address._id, {
        ...billing,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        phone: account.phone,
      });

      showToast("Profile updated ✅");
      navigate("/profile");
    } catch (e) {
      showToast("Update failed ❌");
    } finally {
      setSaving(false);
    }
  };

  const handleBillingSubmit = async () => {
    if (!address?._id) return;

    try {
      setSaving(true);

      await editAddress(address._id, {
        firstName: billing.firstName,
        lastName: billing.lastName,
        companyName: billing.company,
        streetAddress: billing.address,
        country: billing.country,
        state: billing.state,
        zipCode: billing.zip,
        email: billing.email,
        phone: billing.phone,
      });

      showToast("Address updated successfully ✅");

      navigate("/profile");
    } catch (err) {
      console.error(err);
      showToast("Update failed ❌");
    } finally {
      setSaving(false);
    }
  };

  const validateAccount = () => {
    const err = {};
    if (!account.firstName) err.firstName = "First name is required";
    if (!account.lastName) err.lastName = "Last name is required";
    if (!account.email) err.email = "Email is required";
    if (!account.phone) err.phone = "Phone number is required";
    return err;
  };

  // =========================
  // PROFILE IMAGE UPLOAD
  // =========================
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfilePic(ev.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // =========================
  // INPUT COMPONENT
  // =========================
  const Input = useCallback(({
    label,
    name,
    value,
    onChange,
    error,
    large,
    type = "text",
  }) => (
    <div className="w-full">
      <label className="block text-[13.57px] font-light mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-md px-4 border border-gray-200 focus:outline-none focus:border-[#00B207] transition
          ${large ? "w-full lg:w-[496.39px] h-[47.51px]" : "w-full h-11"}
        `}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  ),[])

  return (
    <div className="space-y-10">
      {/* ================= ACCOUNT SETTINGS ================= */}
      <div className="bg-white rounded-xl border border-gray-200">
        <h2 className="text-[19.39px] font-normal p-4 border-b border-gray-200">
          Account Settings
        </h2>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT FORM */}
          <div className="space-y-4">
            <Input
              label="First name"
              name="firstName"
              value={account.firstName}
              onChange={handleAccountChange}
              error={errors.firstName}
              large
            />

            <Input
              label="Last Name"
              name="lastName"
              value={account.lastName}
              onChange={handleAccountChange}
              error={errors.lastName}
              large
            />

            <Input
              label="Email"
              name="email"
              value={account.email}
              onChange={handleAccountChange}
              error={errors.email}
              large
            />

            <Input
              label="Phone Number"
              name="phone"
              value={account.phone}
              onChange={handleAccountChange}
              error={errors.phone}
              large
            />

            <button
              onClick={handleAccountSubmit}
              className="mt-3 bg-[#00B207] text-white px-6 py-2 rounded-md w-full sm:w-fit cursor-pointer"
            >
              Save Changes
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex flex-col items-center justify-center gap-4 lg:-mt-20">
            <img
              src={profilePic}
              alt="profile"
              className="size-[216.68px] rounded-full object-cover"
            />
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              id="profile-upload"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="profile-upload"
              className="border-2 border-[#00B207] text-[#00B207] px-6 py-2 rounded-md cursor-pointer"
            >
              Choose Image
            </label>
          </div>
        </div>
      </div>

      {/* ================= BILLING ADDRESS ================= */}
      <div className="bg-white rounded-xl border border-gray-200">
        <h2 className="text-lg font-light p-6 border-b border-gray-200">
          Billing Address
        </h2>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Input
              label="First name"
              name="firstName"
              value={billing.firstName}
              onChange={handleBillingChange}
            />
            <Input
              label="Last name"
              name="lastName"
              value={billing.lastName}
              onChange={handleBillingChange}
            />
            <Input
              label="Company Name (optional)"
              name="company"
              value={billing.company}
              onChange={handleBillingChange}
            />
          </div>

          <Input
            label="Street Address"
            name="address"
            value={billing.address}
            onChange={handleBillingChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Input
              label="Country / Region"
              name="country"
              value={billing.country}
              onChange={handleBillingChange}
            />
            <Input
              label="States"
              name="state"
              value={billing.state}
              onChange={handleBillingChange}
            />
            <Input
              label="Zip Code"
              name="zip"
              value={billing.zip}
              onChange={handleBillingChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Email"
              name="email"
              value={billing.email}
              onChange={handleBillingChange}
            />
            <Input
              label="Phone"
              name="phone"
              value={billing.phone}
              onChange={handleBillingChange}
            />
          </div>

          <button
            disabled={saving}
            onClick={handleBillingSubmit}
            className="bg-[#00B207] text-white px-6 py-2 rounded-md w-full sm:w-fit cursor-pointer disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
