import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import UkFlag from '../assets/images/uk-flag-circular-17883.png';
import IndiaFlag from '../assets/images/india-flag-circular-17791.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Language");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <div className="flex justify-between items-center px-6 py-4">
      <h1 className="text-3xl font-semibold text-black">travelaja</h1>

      <div className="flex items-center space-x-6 text-black">
        <ul className="flex items-center space-x-6">
          <li className="hover:font-bold">Home</li>
          <li className="hover:font-bold">Discover</li>
          <li className="hover:font-bold">Services</li>
          <li className="hover:font-bold">News</li>
          <li className="hover:font-bold">About Us</li>
          <li className="hover:font-bold">Contact</li>
        </ul>
      </div>

      <div className="relative">
        <button
          className="text-black font-bold py-2 px-4 rounded flex items-center"
          onClick={() => setShowDropdown(!showDropdown)} >
          {selectedLanguage === "EN" && (
            <img src={UkFlag} alt="UK Flag" className="w-8 h-8 mr-1 rounded-full" />
          )}
          {selectedLanguage === "TEl" && (
            <img src={IndiaFlag} alt="India Flag" className="w-8 h-8 mr-1 rounded-full" />
          )}
          {selectedLanguage} <HiOutlineChevronDown className="ml-1" />
        </button>

        {showDropdown && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <ul className="py-1">
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLanguageChange("EN")}>
                English
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleLanguageChange("TEl")}>
                Telugu
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
