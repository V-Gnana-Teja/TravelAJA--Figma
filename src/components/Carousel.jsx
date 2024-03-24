import React from "react";
import Img1 from "../assets/images/Group 34.png";
import Dest1 from '../assets/images/Group 14.png'
import Dest2 from '../assets/images/Group 14 (1).png'
import Dest3 from '../assets/images/Group 14 (2).png'
import Dest4 from '../assets/images/Group 14 (3).png'
import Dest5 from '../assets/images/Group 14 (4).png'
import Dest6 from '../assets/images/Group 14 (5).png'
import Navi from '../assets/images/cursor-4196 (1).png'

const Carousel = () => {
  return (
    <div>
      <div className="mt-12 flex p-4">
        <div className="w-1/2 flex">
          <img src={Img1} alt=" 1" />
        </div>
        <div className="w-1/2 pl-7">
          <h2 className="text-xl font-bold text-green-700">Travelers Point</h2>
          <h1 className="text-3xl mt-3 font-bold ">
            We help to find your dream place
          </h1>
          <p className="mt-3 text-xl pr-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quibusdam nulla cum temporibus praesentium unde ab tempora harum
            similique accusamus, quasi aperiam veritatis consequuntur assumenda
            aut corrupti autem! Sit aspernatur, molestiae quae suscipit quidem
            possimus deleniti?
          </p>

          <div className="flex items-center justify-between pr-7">
            <div className="mt-12">
              <h1 className="text-3xl text-green-700 font-bold">100+</h1>
              <p className="mt-2">Holiday Package</p>
              <h1 className="text-3xl text-green-700 font-bold mt-4">172</h1>
              <p className="mt-2">Hotels</p>
            </div>

            <div className="mt-12">
              <h1 className="text-3xl text-green-700 font-bold">68</h1>
              <p className="mt-2">Elite Transportation</p>
              <h1 className="text-3xl text-green-700 font-bold mt-4">31M+</h1>
              <p className="mt-2">we help to find your dream place</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-14 flex flex-col items-center justify-center">
          <h2 className="text-2xl mt-5 font-bold text-green-800">
            Top destination
          </h2>
          <h1 className="text-4xl font-bold">Discover your love</h1>
        </div>

      
      <div className="mt-12 grid grid-cols-3 gap-4 pl-5 cursor-pointer">

        <div className="max-w-sm rounded-md  overflow-hidden shadow-2xl ">
          <img src={Dest1} alt="/" className="w-full  border-8 border-white" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Taman Nasional Komodo</div>
            <div className="flex items-center justify-between">
            <p className="text-green-700 mt-6 text-xl font-bold">
              Rp.7,5jt
            </p>
            <p className="flex  items-center justify-between">
                <img src={Navi} alt="/" /> 7 days for trips              
            </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl">
          <img src={Dest2} alt="/" className="w-full border-8 border-white" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Taman Nasional Bunaken</div>
            <div className="flex items-center justify-between">
            <p className="text-green-700 mt-6 text-xl font-bold">
              Rp.10,5jt
            </p>
            <p className="flex  items-center justify-between">
                <img src={Navi} alt="/" /> 9 days for trips              
            </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl">
          <img src={Dest3} alt="/" className="w-full border-8 border-white" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Raja Ampat, Papua Barat</div>
            <div className="flex items-center justify-between">
            <p className="text-green-700 mt-6 text-xl font-bold">
              Rp.20,5jt
            </p>
            <p className="flex  items-center justify-between">
                <img src={Navi} alt="/" /> 14 days for trips              
            </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl">
          <img src={Dest4} alt="/" className="w-full border-8 border-white" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kepulauan Wakatobi</div>
            <div className="flex items-center justify-between">
            <p className="text-green-700 mt-6 text-xl font-bold">
              Rp.9,5jt
            </p>
            <p className="flex  items-center justify-between">
                <img src={Navi} alt="/" /> 12 days for trips              
            </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl">
          <img src={Dest5} alt="/" className="w-full border-8 border-white" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Gili Trawangan, Lombok</div>
            <div className="flex items-center justify-between">
            <p className="text-green-700 mt-6 text-xl font-bold">
              Rp.6,5jt
            </p>
            <p className="flex  items-center justify-between">
                <img src={Navi} alt="/" /> 7 days for trips              
            </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl">
          <img src={Dest6} alt="/" className="w-full  border-8 border-white" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Taman Nasional Bromo</div>
            <div className="flex items-center justify-between">
            <p className="text-green-700 mt-6 text-xl font-bold">
              Rp.9,5jt
            </p>
            <p className="flex  items-center justify-between">
                <img src={Navi} alt="/" /> 7 days for trips              
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
