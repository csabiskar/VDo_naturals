function InputField({ label, error, className = "", width, ...props }) {
  return (
    <div className={className} style={{ width }}>
      <label className="text-sm font-light text-gray-900">{label}</label>

      <input
        {...props}
        className={`mt-1.5 w-full h-[49px] rounded-md border px-4 text-sm outline-none placeholder:text-[16px] placeholder:font-light ${
          error
            ? "border-red-500"
            : "border-gray-200 focus:border-green-600"
        }`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default InputField;
