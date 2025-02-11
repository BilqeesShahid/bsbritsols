"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { MdOutlineAttachEmail } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const navItems = [
    { id: 1, text: "Home", icon: <FaHome /> },
    { id: 2, text: "Company", icon: <LuBuilding2 /> },
    { id: 3, text: "Resources", icon: <GrResources /> },
    { id: 4, text: "About", icon: <FcAbout /> },
    { id: 5, text: "Contact", icon: <MdOutlineAttachEmail /> },
  ];

  return (
    <div className="bg-black w-full border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center h-auto md:h-20 px-4 md:px-8 text-white">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex justify-between w-full md:w-auto items-center py-2 md:py-0">
          <h1 className="text-2xl font-bold text-[#00df9a]">BRITSOLS.</h1>
          <div onClick={() => setNav(!nav)} className="block md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>

        {/* Date & Time (Always Visible) */}
        <div className="text-white text-sm font-semibold mt-2 md:mt-0">{currentDateTime}</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.id} className="px-2 py-2 hover:bg-[#00df9a] rounded-lg cursor-pointer duration-300 hover:text-black flex items-center">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Sign In Button (Desktop) */}
          <button className="ml-4 px-2 py-2 bg-[#00df9a] text-black font-semibold rounded-lg hover:bg-green-400 transition duration-300">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={`${nav ? "fixed left-0 top-0 w-[70%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 p-6" : "fixed left-[-100%] w-[70%] ease-in-out duration-500 top-0 h-full"}`}>
        <h1 className="text-2xl font-bold text-[#00df9a]">BRITSOLS.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id} className="text-white py-3 border-b rounded-lg hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 flex items-center">
            {item.icon}
            <span className="ml-2">{item.text}</span>
          </li>
        ))}

        {/* Sign In Button (Mobile) */}
        <div className="text-center mt-2">
          <button className="px-4 py-2 bg-[#00df9a] text-black font-semibold rounded-lg hover:bg-green-400 transition duration-300">
            Sign In
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
