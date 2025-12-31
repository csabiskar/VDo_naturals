import React, { useRef, useEffect } from "react";

export default function OTPInput({ value, onChange, autoFocus }) {
  const inputsRef = useRef([]);

  useEffect(() => {
    if (autoFocus) inputsRef.current[0]?.focus();
  }, [autoFocus]);

  const handleChange = (e, index) => {
    const digit = e.target.value.replace(/\D/g, "");
    const newOtp = value.split("");
    newOtp[index] = digit || "";
    onChange(newOtp.join(""));

    if (digit && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // prevent default cursor behavior
      const newOtp = value.split("");
      if (newOtp[index]) {
        // If current input has a value, clear it
        newOtp[index] = "";
        onChange(newOtp.join(""));
      } else if (index > 0) {
        // Move focus to previous input if empty
        inputsRef.current[index - 1]?.focus();
        newOtp[index - 1] = "";
        onChange(newOtp.join(""));
      }
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasted)) {
      onChange(pasted);
      inputsRef.current[5]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2" onPaste={handlePaste}>
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          maxLength="1"
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="h-12 w-12 text-center border border-[#E6E6E6] rounded-md"
        />
      ))}
    </div>
  );
}
