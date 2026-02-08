import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between py-6 px-14 sticky top-0 border-b border-sky-300 bg-white w-full z-1">
      <div className="text-lg font-semibold text-black">
        <span className="text-sky-500">Dev.</span>Portfolio
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
