import React from "react";
import Navbar from "./Navbar";
import { GoHome } from "react-icons/go";
import Breadcrumbs from "../assets/Breadcrumbs.png";
import { IoIosArrowForward } from "react-icons/io";
import ErrorImg from "../assets/Error.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate =useNavigate()
  return (
    <>
      <Navbar />

      {/* Breadcrumbs */}
      {/* <div
        className="h-[120px] flex items-center"

      >
        <div className="px-20 flex items-center gap-2 text-sm">
          <GoHome className="text-gray-400" size={22} />
          <IoIosArrowForward className="text-gray-400" />
          <span className="text-[#00B207] text-[16px] font-light">
            404 Error Page 
          </span>
        </div>
      </div> */}

      {/* Error Page */}
      <div className="flex flex-col items-center justify-center h-screen text-center py-20 px-4">
        <img
          src={ErrorImg}
          alt="404 Error"
          className="w-[320px] md:w-[420px] mb-8"
        />

        <h1 className="text-[28px] font-semibold mb-3">
          Oops! page not found
        </h1>

        <p className="text-sm text-gray-400 font-light max-w-[520px] mb-6">
          Looks like the page you’re looking for doesn’t exist or has moved.
          Please check the URL or use the button below to continue.
        </p>

        <button className="bg-[#00B207] hover:bg-green-600 text-white px-8 py-3 rounded-full text-sm font-medium transition cursor-pointer"
        onClick={()=>navigate('/')}
        >
          Shop now
        </button>
      </div>
    </>
  );
}

export default Error;
