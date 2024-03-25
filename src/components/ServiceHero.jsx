import React from "react";
import Banner from "../assets/images/Banner (1).png";
import { ImPriceTags } from "react-icons/im";
import { RiTreasureMapFill } from "react-icons/ri";
import { TfiMapAlt } from "react-icons/tfi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Img1 from "../assets/images/Rectangle 21.png";
import Img2 from "../assets/images/Rectangle 21 (1).png";
import Img3 from "../assets/images/Rectangle 21 (2).png";
import Img4 from "../assets/images/Rectangle 22 (1).png";
import { FaBabyCarriage } from "react-icons/fa6";
import { PiWineFill } from "react-icons/pi";
import { FaCampground } from "react-icons/fa6";
import { LiaMapMarkedAltSolid } from "react-icons/lia";


const ServiceHero = () => {
  return (
    <div>
      <div>
        <img className="w-full" src={Banner} alt="/" />
      </div>
      <div className="flex flex-row items-center justify-between p-12 space-y-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div>
            <ImPriceTags className="w-[40px] h-[40px]" />
          </div>
          <h2 className="text-xl font-bold mb-2">Get Best Price</h2>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed
            <br /> arcu eu, dui tortor, proin eu lectus <br /> pellentesque. A
            cras suscipit amet
          </p>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div>
            <RiTreasureMapFill className="w-[40px] h-[40px]" />
          </div>
          <h2 className="text-xl font-bold mb-2">All Destination</h2>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed
            <br /> arcu eu, dui tortor, proin eu lectus <br /> pellentesque. A
            cras suscipit amet
          </p>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div>
            <TfiMapAlt className="w-[40px] h-[40px]" />
          </div>
          <h2 className="text-xl font-bold mb-2">City Tours</h2>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed
            <br /> arcu eu, dui tortor, proin eu lectus <br /> pellentesque. A
            cras suscipit amet
          </p>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
            Read More
          </button>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg">
          <div>
            <MdOutlinePhotoCamera className="w-[40px] h-[40px]" />
          </div>
          <h2 className="text-xl font-bold mb-2">Photography</h2>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed
            <br /> arcu eu, dui tortor, proin eu lectus <br /> pellentesque. A
            cras suscipit amet
          </p>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
            Read More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-12">
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={Img1}
            alt="New Service 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-start items-start p-4 bg-opacity-0 bg-black text-white">
            <h1 className="text-3xl font-bold mb-2">Water City Dreams</h1>
            <h2 className="text-xl font-bold">September 18, 2022</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <button className=" border border-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={Img2}
            alt="New Service 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-start items-start p-4 bg-opacity-0 bg-black text-white">
            <h1 className="text-3xl font-bold mb-2">Hokkaido</h1>
            <h2 className="text-xl font-bold">September 18, 2022</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <button className=" border border-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={Img3}
            alt="New Service 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-start items-start p-4 bg-opacity-0 bg-black text-white">
            <h1 className="text-3xl font-bold mb-2">Blue Lagoon</h1>
            <h2 className="text-xl font-bold">September 18, 2022</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <button className=" border border-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={Img4}
          alt="Facilities"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-0 left-0 right-[50%] h-full flex flex-col justify-center items-start p-8 bg-opacity-0 bg-black text-white ">
          <h1 className="text-4xl font-bold mb-2">Facilities</h1>
          <p className="text-lg text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non eni
          </p>
          <button className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md mt-4">
            Read More
          </button>
        </div>
        <div className="absolute top-0 left-[50%] w-[50%] h-full flex flex-col justify-center items-center p-4 bg-opacity-0 bg-black text-white text-start">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 ">
            <div className="bg-white text-black shadow-md p-4 rounded-lg cursor-pointer">
            <FaBabyCarriage className=" w-10 h-10"/>

              <h2 className="text-3xl font-bold mb-2">Baby</h2>
              <p>FREE BUGGY</p>
            </div>
            <div className="bg-white text-black shadow-md p-4 rounded-lg cursor-pointer">
            <PiWineFill  className=" w-10 h-10"/>
              <h2 className="text-3xl font-bold mb-2">Drinks</h2>
              

              <p>INCLUDED</p>
            </div>
            <div className="bg-white text-black shadow-md p-4 rounded-lg cursor-pointer">
            <FaCampground   className=" w-10 h-10"/>
              <h2 className="text-3xl font-bold mb-2">Camp</h2>
              

              <p>INCLUDED</p>
            </div>
            
            <div className="bg-white text-black shadow-md p-4 rounded-lg cursor-pointer">
            <LiaMapMarkedAltSolid    className=" w-10 h-10"/>
              <h2 className="text-3xl font-bold mb-2">World</h2>
              

              <p>CUSTOM TOURS</p>
            </div>
          </div>
        </div>
      </div>  </div>
  );
};

export default ServiceHero;
