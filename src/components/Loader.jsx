import React from "react";
import LoaderGif from '../assets/loader.gif'

export default function Loader({ text = "Loading categories..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img
        src={LoaderGif}
        alt="Loading"
        className="w-16 h-16 mb-4"
      />
      {/* <p className="text-sm text-gray-500 tracking-wide">
        {text}
      </p> */}
    </div>
  );
}
