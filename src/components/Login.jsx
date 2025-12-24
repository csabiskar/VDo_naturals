import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";


function Login() {
    const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signin";
  return (
    <>
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 md:py-24">
        <section
          aria-labelledby="auth-title"
          className="
            w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
            bg-white border border-[#F2F2F2] rounded-lg
            shadow-[0_6px_20px_rgba(0,0,0,0.08)]
            p-5 sm:p-6
          "
        >
          <h1
            id="auth-title"
            className="text-center text-[32px] font-semibold mb-8"
          >
            {isLogin ? "Log in" : "Create Account"}
          </h1>

          <form className="flex flex-col gap-5">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              className="h-12 px-4 border border-[#E6E6E6] rounded-md"
            />

            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full"
              />
              <AiOutlineEye
                aria-hidden
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {isSignup && (
              <div className="relative">
                <label htmlFor="confirm" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="h-12 px-4 pr-10 border border-[#E6E6E6] rounded-md w-full"
                />
                <AiOutlineEye
                  aria-hidden
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            )}
          </form>

          {isSignup ? (
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
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="accent-[#00B207] scale-150"
                />
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="hover:text-black">
                Forgot Password
              </Link>
            </div>
          )}

          <button className="mt-6 w-full h-12 bg-[#00B207] text-white rounded-md font-semibold">
            {isLogin ? "Log in" : "Create Account"}
          </button>

          <p className="mt-6 text-center text-sm text-[#666666]">
            {isLogin ? (
              <>
                Don’t have account?{" "}
                <Link to="/signin" className="font-medium text-black">
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
  )
}

export default Login