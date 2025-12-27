import EmptyCartImg from "../assets/EmptyCart.png";

const EmptyCart = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center py-20 px-4">
        <img
          src={EmptyCartImg}
          alt="404 Error"
          className="w-[320px] md:w-[420px] mb-8"
        />

        <h1 className="text-[28px] font-semibold mb-3">Oops! Your cart is empty</h1>

        <p className="text-sm text-gray-400 font-light max-w-[520px] mb-6">
          Add items to it now
        </p>

        <button className="bg-[#00B207] hover:bg-green-600 text-white px-8 py-3 rounded-full text-sm font-medium transition">
          Shop now
        </button>
      </div>
    </>
  );
};

export default EmptyCart;
