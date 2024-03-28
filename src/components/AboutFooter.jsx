import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const AboutFooter = () => {
  return (
    <div className="bg-green-800 text-white mt-12 ">
      <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="w-full md:w-1/4">
          <h1 className="font-bold text-4xl">travelaja</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo
            cum inventore qui quibusdam excepturi sapiente veritatis obcaecati
            accusantium dignissimos ab. Excepturi autem, praesentium consectetur
            sequi suscipit optio modi sed!
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:w-3/4 gap-x-8 mt-8 md:mt-0 pl-12 ">
          <ul className="w-full md:w-1/3 cursor-pointer">
            <li className="font-bold text-2xl">Links</li>
            <li className="text-lg mt-4">Discover</li>
            <li className="mt-2 text-lg">Special Deals</li>
            <li className="mt-2 text-lg">Services</li>
            <li className="mt-2 text-lg">Community</li>
            <li className="mt-2 text-lg">About Us</li>
          </ul>

          <ul className="w-full md:w-1/3 mt-8 md:mt-0 cursor-pointer">
            <li className="font-bold text-2xl">Services</li>
            <li className="text-lg mt-4">About Us</li>
            <li className="mt-2 text-lg">Blog & Articles</li>
            <li className="mt-2 text-lg">Term and Condition</li>
            <li className="mt-2 text-lg">Privacy Policy</li>
            <li className="mt-2 text-lg">Contact Us</li>
          </ul>

          <ul className="w-full md:w-1/3 mt-8 md:mt-0 cursor-pointer">
            <li className="font-bold text-2xl">Contact</li>
            <li className="text-lg mt-4">Address: Estate sale,</li>
            <li className="mt-2 text-lg">Jayanagar, krishna</li>
            <li className="mt-2 text-lg">Phone: 123 456 7890</li>
            <li className="mt-2 text-lg">Email: fakemail@gmail.com</li>
            <li className="mt-2 text-lg">Maps: Kediri, banglore</li>
          </ul>
        </div>
      </div>

      <div className="pl-12 p-12">
        <h1 className="font-bold text-4xl">Gnana Teja</h1>
        <div className="mt-6 flex gap-3 text-4xl border-3xl">
          <FaInstagram className="cursor-pointer"/>
          <FaFacebook className="cursor-pointer"/>
          <FaTwitter className="cursor-pointer"/>
          <FaDribbble className="cursor-pointer"/>
          <FaGithub className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
