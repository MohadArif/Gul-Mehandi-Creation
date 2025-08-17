import React from "react";
import { RxCross2 } from "react-icons/rx";

function ResponsiveNavBar({ onClose }) {
  return (
    <div className="bg-green-700 flex flex-col py-4 justify-center items-center gap-4">
      <RxCross2
        onClick={onClose}
        className="text-2xl text-white absolute right-3 top-2"
      />
      <ul className="flex flex-col justify-center items-center gap-3 text-white uppercase cursor-pointer">
        <li className="hover:text-black hover:underline">home</li>
        <li className="hover:text-black hover:underline">service</li>
        <li className="hover:text-black hover:underline">about</li>
        <li className="hover:text-black hover:underline">gallery</li>
        <li className="hover:text-black hover:underline">events</li>
      </ul>
      <button className="text-black border-1 px-3 py-1 rounded-2xl bg-white hover:bg-gray-400 cursor-pointer">
        Contact
      </button>
    </div>
  );
}

export default ResponsiveNavBar;
