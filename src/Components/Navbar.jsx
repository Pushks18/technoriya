import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200000) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 navbar ${
        nav ? "z-50 fixed top-0 left-0 w-full" : "z-10"
      }`}
    >
      <img
        src={require("../Assets/logo.png")}
        alt=""
        className="h-[70px] w-[100px] top-0 left-0"
      />
      <Link to="/" className="flex flex-row">
        <h1 className="w-full text-2xl font-bold text-black">
          Technoriya ERP Solution
        </h1>
      </Link>
      <ul className="hidden md:flex text-black">
        <Link to="/">
          <li className="text-xl p-5">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-xl p-5">About</li>
        </Link>
        <Link to="/gallery">
          <li className="text-xl p-5">Gallery</li>
        </Link>
        <Link to="/services">
          <li className="text-xl p-5">Services</li>
        </Link>
        <Link to="/elearning">
          <li className="text-xl p-5">ELearning</li>
        </Link>
        <Link to="/career">
          <li className="text-xl p-5">Career</li>
        </Link>
        <Link to="/contact">
          <li className="text-xl p-5">Contact</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] z-9999"
        }
      >
        <h1 className="w-full text-3xl m-4 font-bold text-white">
          Technoriya ERP Solution
        </h1>
        <Link to="/">
          <li className="p-5 border-b border-gray-600 text-white">Home</li>
        </Link>
        <Link to="/about">
          <li className="p-5 border-b border-gray-600 text-white">About</li>
        </Link>
        <Link to="/gallery">
          <li className="p-5 border-b border-gray-600 text-white">Gallery</li>\
        </Link>
        <Link to="/services">
          <li className="p-5 border-b border-gray-600 text-white">Services</li>
        </Link>
        <Link to="/elearning">
          <li className="p-5 border-b border-gray-600 text-white">ELearning</li>
        </Link>
        <Link to="/career">
          <li className="p-5 border-b border-gray-600 text-white">Career</li>
        </Link>
        <Link to="/contact">
          <li className="p-5 border-b border-gray-600 text-white">Contact</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
