import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveNavBar from "./ResponsiveNavBar";
import textlogo from "../assets/text-logo.png";
import logo from "../assets/logo-R.png";

function NavBar() {
  const [mobileNavOpen, setMoblieNavBar] = useState(false);
  return (
    <div className="w-full flex justify-between h-15 px-5 items-center bg-green-800">
      <img
        src={textlogo}
        alt="logo"
        className="max-w-40 rounded-full bg-white cursor-pointer"
      />
      {/* <div className="flex justify-center items-center gap-2">
        {/* <h1 className="text-2xl font-semibold text-white cursor-pointer font-serif">
          Gul-Mehandi-Creations
        </h1> */}
      {/* </div> */}
      <ul className="hidden md:flex items-center gap-10 text-white uppercase cursor-pointer">
        <li className="hover:text-black hover:underline">home</li>
        <li className="hover:text-black hover:underline">service</li>
        <li className="hover:text-black hover:underline">about</li>
        <li className="hover:text-black hover:underline">gallery</li>
        <li className="hover:text-black hover:underline">events</li>
      </ul>
      <button className="text-black border-1 px-3 py-1 rounded-2xl bg-white hover:bg-gray-400 hidden md:block cursor-pointer">
        Contact
      </button>
      <MdMenu
        className="text-white text-3xl md:hidden"
        onClick={() => setMoblieNavBar(true)}
      />

      {mobileNavOpen && (
        <div className="position absolute top-15 w-full left-0 z-20">
          <ResponsiveNavBar onClose={() => setMoblieNavBar(false)} />
        </div>
      )}
    </div>
  );
}

export default NavBar;
