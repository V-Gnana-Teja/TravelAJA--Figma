import React from "react";
import Banner from "../assets/images/Banner (2).png";
const NewsCarousel = () => {
  return (
    <div>
      <div>
        <img className="w-full" src={Banner} alt="/" />
      </div>

      <div className=" flex flex-col items-center justify-center mt-12">
        <h1 className=" text-3xl">Travelaja Articles</h1>
        <p className="text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
      </div>

      <div className="mt-4 flex justify-center p-14" >
          <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Adventure Travel
          </button>
          <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Beach
          </button>
          <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Explore World
          </button>
          <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Family Holidays
          </button>
          <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 rounded">
          Art and culture
          </button>
        </div>
      </div>
  );
};

export default NewsCarousel;
