import React from "react";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

function Login() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";
  return (
    <>
      <main className="flex-1 -mt-4 flex items-center justify-center px-4 sm:px-6 py-16 md:py-24 ">
        <section
          aria-labelledby="auth-title"
          className="
            w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
            bg-white border border-[#F2F2F2] rounded-lg
            shadow-[0_6px_20px_rgba(0,0,0,0.08)] 
            p-5 sm:p-6 lg:py-20
          "
        >
          <h1
            id="auth-title"
            className="text-center text-[32px] font-semibold -mt-2.5 mb-9"
          >
            {isLogin ? "Log In" : "Create Account"}
          </h1>

          <form className="flex flex-col gap-4">
            <label htmlFor="email" className="sr-only">
              Enter your Phone Number/Email
            </label>
            <input
              id="phonenumber"
              type="number"
              placeholder="Enter your Phone Number/Email"
              required
              className="h-12 px-4 border border-[#E6E6E6] rounded-md placeholder:text-gray-400 placeholder:font-light"
            />


            {/* {isSignup && (
              <div className="relative">
                <label htmlFor="confirm" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="h-12 px-4 pr-10 border placeholder:text-gray-400 placeholder:font-light border-[#E6E6E6] rounded-md w-full"
                />
                <AiOutlineEye
                  aria-hidden
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900"
                />
              </div>
            )} */}
          </form>

          {/* {isSignup ? (
            <div className="flex items-center mt-4 text-sm text-[#666666] pl-1">
              <input
                id="terms"
                type="checkbox"
                className="accent-[#00B207] scale-150"
              />
              <label htmlFor="terms" className="ml-2">
                Accept all terms & Conditions
              </label>
            </div>
          ) : (
            <div className="flex justify-between items-center mt-4 text-sm text-[#666666]">
              <div className="flex items-center pl-1">
                <input
                  id="remember"
                  type="checkbox"
                  className="
                            appearance-none 
                            w-5 h-5 
                            border border-gray-300 rounded
                            accent-[#00B207] 
                            checked:bg-[#00B207] 
                            checked:border-[#00B207] 
                            transition-all
                            cursor-pointer
                            relative
                            scale-100
                            checked:after:content-['✓'] 
                            checked:after:text-white 
                            checked:after:absolute 
                            checked:after:left-1/2 
                            checked:after:top-1/2 
                            checked:after:-translate-x-1/2 
                            checked:after:-translate-y-1/2 
                            checked:after:text-[10px]
  "
                />

                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="hover:text-black">
                Forgot Password
              </Link>
            </div>
          )} */}

          <button className="mt-6 w-full h-12 bg-[#00B207] text-white rounded-md font-medium text-sm">
            {isLogin ? "Log in" : "Get OTP"}
          </button>

          <p className="mt-6 text-center text-sm text-[#666666]">
            {isLogin ? (
              <>
                Don’t have account?{" "}
                <Link to="/signup" className="font-medium text-black">
                  Register
                </Link>
              </>
            ) : (
              <>
                Already have account?{" "}
                <Link to="/login" className="font-medium text-black">
                  Login
                </Link>
              </>
            )}
          </p>
        </section>
      </main>
    </>
  );
}

export default Login;
