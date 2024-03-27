import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import UkFlag from "../assets/images/uk-flag-circular-17883.png";
import IndiaFlag from "../assets/images/india-flag-circular-17791.png";
import { Link } from "react-router-dom";
const DiscoverNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Language");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <div className="flex justify-between items-center px-6 py-4">
      <h1 className="text-3xl font-semibold text-black cursor-pointer">
        travelaja
      </h1>

      <div className="flex space-x-4 items-center ">
        <Link to="/" className="hover:font-bold hover:text-green-600">
          Home
        </Link>
        <Link to="/discover" className="hover:font-bold hover:text-green-600">
          Discover
        </Link>
        <Link to="/services" className="hover:font-bold hover:text-green-600">
          Services
        </Link>
        <Link to="/news" className="hover:font-bold hover:text-green-600">
          News
        </Link>
        <Link to="/about" className="hover:font-bold hover:text-green-600">
          About Us
        </Link>
        <Link to="/contact" className="hover:font-bold hover:text-green-600">
          Contact
        </Link>
      </div>

      <div className="relative">
        <button
          className="text-black font-bold py-2 px-4 rounded flex items-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedLanguage === "EN" && (
            <img
              src={UkFlag}
              alt="UK Flag"
              className="w-8 h-8 mr-1 rounded-full"
            />
          )}
          {selectedLanguage === "TEl" && (
            <img
              src={IndiaFlag}
              alt="India Flag"
              className="w-8 h-8 mr-1 rounded-full"
            />
          )}
          {selectedLanguage} <HiOutlineChevronDown className="ml-1" />
        </button>

        {showDropdown && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <ul className="py-1">
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLanguageChange("EN")}
              >
                English
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLanguageChange("TEl")}
              >
                Telugu
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverNavbar;
