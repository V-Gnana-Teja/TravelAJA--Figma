import React from "react";
import Banner from "../assets/images/Banner (2).png";
import Img1 from '../assets/images/Rectangle 24 (2).png'
import Img2 from '../assets/images/Rectangle 24 (3).png'
import Img3 from '../assets/images/Rectangle 24 (4).png'
import Img4 from '../assets/images/Rectangle 24 (5).png'
import Img5 from '../assets/images/Rectangle 24 (6).png'
import Img6 from '../assets/images/Rectangle 24 (7).png'
import Img7 from '../assets/images/Rectangle 24 (8).png'
import Img8 from '../assets/images/Rectangle 24 (9).png'
import Img9 from '../assets/images/Rectangle 24 (10).png'



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

        <div className="mt-12 grid grid-cols-3 gap-4 pl-5 ">

<div className="max-w-sm rounded-md  overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img1} alt="/" className="w-full  border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">where can i go? 5 amazing countries that are open right now</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
    
    </div>
  </div>
</div>

<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img2} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">beautiful view of indonesia's natural hills</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
    
    </div>
  </div>
</div>

<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img3} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">10 Indonesian Destinations you should visit in this year</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
   
    </div>
  </div>
</div>

<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img4} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">5 mountains that you must visit while in Indonesia</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
   
    </div>
  </div>
</div>

<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img5} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">the most interesting historical monuments in Indonesia</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
    
    </div>
  </div>
</div>

<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img6} alt="/" className="w-full  border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">travel booking before missing the discount</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
    
    </div>
  </div>
</div>

<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img7} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">10 Indonesian Destinations you should visit in this year</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
    
    </div>
  </div>
</div>
<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img8} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">travel booking before missing the discount</div>
    <div className="flex items-center justify-between">
    <p >
    September 19, 2024
    </p>
    
    </div>
  </div>
</div>
<div className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
  <img src={Img9} alt="/" className="w-full border-0 border-white" />
  <div className="px-6 py-4">
    <div className=" text-xl mb-2">where can i go? 5 amazing countries that are open right now</div>
    <div className="flex items-center justify-between">
    <p>
    September 19, 2022
    </p>
    
    </div>
  </div>
</div>
</div>
      </div>
  );
};

export default NewsCarousel;
