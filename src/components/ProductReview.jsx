import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { addRating } from "../api/ratings.api";

const MAX_STARS = 5;

export default function ProductReview() {
  const navigate = useNavigate();
  const location = useLocation();

  // Expect order and productId from location state
  const { productId } = useParams();
  const order = location.state?.order || null;

  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch product from order items
  useEffect(() => {
    if (!order) {
      alert("No order data found");
      navigate(-1);
      return;
    }

    const item = order.items.find((i) => i.productId === productId);

    if (!item) {
      alert("Product not found in this order");
      navigate(-1);
      return;
    }

    setProduct(item);
    setLoading(false);
  }, [order, productId, navigate]);

  const handleSubmit = async () => {
    if (!rating) return alert("Please select rating");
    if (!description) return alert("Please write description");

    const payload = {
      rating,
      review: description,
      title,
      isVerifiedPurchase: true,
      orderId: order.orderId, // send orderId for verification
    };

    try {
      await addRating(productId, payload);
      alert("Review submitted!");
      navigate(-1); // go back to order details
    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  if (loading) return <div className="mt-20 text-center">Loading...</div>;
console.log(product)
  return (
    <div className="w-full mx-auto bg-white rounded-xl border border-gray-200 p-6 sm:p-10">
      <h2 className="text-md font-normal mb-4">Rate this Product</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={product?.productImage || "/placeholder.png"}
          alt={product?.productName}
          className="w-14 h-14 object-contain rounded-md"
        />

        <div>
          <p className="text-sm font-medium">{product?.productName}</p>

          <div className="flex gap-1 mt-2">
            {[...Array(MAX_STARS)].map((_, i) => {
              const value = i + 1;
              return (
                <span
                  key={value}
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(0)}
                  className="cursor-pointer"
                >
                  {value <= (hover || rating) ? (
                    <FaStar size={18} className="text-amber-500" />
                  ) : (
                    <FaRegStar size={18} className="text-gray-300" />
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <h2 className="text-md font-light mb-4 xl:mt-16">Review this Product</h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="p-4">
          <label className="text-sm font-light block mb-2">Description</label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description.."
            className="w-full resize-none outline-none text-sm"
          />
        </div>

        <div className="border-t border-gray-200" />

        <div className="p-4">
          <label className="text-sm font-light block mb-2">
            Title (Optional)
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Review Title..."
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <label className="w-24 h-24 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50">
          <MdAddAPhoto size={28} />
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>

        <button
          onClick={handleSubmit}
          disabled={!rating || !description}
          className="bg-[#00B207] text-white px-8 py-2.5 rounded-md text-sm disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
