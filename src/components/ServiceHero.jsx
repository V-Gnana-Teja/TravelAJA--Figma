import React from "react";
import { ImPriceTags } from "react-icons/im";
import { RiTreasureMapFill } from "react-icons/ri";
import { TfiMapAlt } from "react-icons/tfi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FaBabyCarriage, FaCampground } from "react-icons/fa6";
import { PiWineFill } from "react-icons/pi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import serviceData from "../services.json";

const ServiceHero = () => {
  const {
    bannerImage, services, featuredServices, facilities, additionalServices,
 
  } = serviceData;

  return (
    <div>

      <div>
        <img className="w-full" src={bannerImage} alt="/" />
      </div>

      <div className="flex flex-row items-center justify-between p-12 space-y-4">

        {services.map((service, index) => (

          <div key={index} className="bg-white shadow-md p-4 rounded-lg">

            {getIcon(service.icon)}
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>

            <p>{service.description}</p>

            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
              Read More
            </button>

          </div>

        ))}

      </div>
      <div className="flex items-center justify-between p-12">

        {featuredServices.map((featured, index) => (

          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden" >

            <img  src={featured.image}  alt={featured.title} className="w-full h-full object-cover rounded-lg"/>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-start items-start p-4 bg-opacity-0 bg-black text-white">

              <h1 className="text-3xl font-bold mb-2">{featured.title}</h1>

              <h2 className="text-xl font-bold">{featured.date}</h2>

              <p className="mt-2">{featured.description}</p>

              <button className="border border-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-2xl mt-4">
                {featured.buttonText}
              </button>

            </div>
          </div>

        ))}

      </div>

      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">

        <img src={facilities.image} alt={facilities.title} className="w-full h-full object-cover"  />

        <div className="absolute top-0 left-0 right-[50%] h-full flex flex-col justify-center items-start p-8 bg-opacity-0 bg-black text-white ">

          <h1 className="text-4xl font-bold mb-2">{facilities.title}</h1>

          <p className="text-lg text-start">{facilities.description}</p>

          <button className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md mt-4">
            Read More
          </button>

        </div>

        <div className="absolute top-0 left-[50%] w-[50%] h-full flex flex-col justify-center items-center p-4 bg-opacity-0 bg-black text-white text-start">

          <div className="grid grid-cols-2 grid-rows-2 gap-6 ">

            {additionalServices.map((additional, index) => (
              <div  key={index} className="bg-white text-black shadow-md p-4 rounded-lg cursor-pointer" >

                {getIcon(additional.icon)}

                <h2 className="text-3xl font-bold mb-2">{additional.title}</h2>

                <p>{additional.description}</p>

              </div>

            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

const getIcon = (iconName) => {
  switch (iconName) {

    case "ImPriceTags":
      return <ImPriceTags className="w-[40px] h-[40px]" />;

    case "RiTreasureMapFill":
      return <RiTreasureMapFill className="w-[40px] h-[40px]" />;

    case "TfiMapAlt":
      return <TfiMapAlt className="w-[40px] h-[40px]" />;

    case "MdOutlinePhotoCamera":
      return <MdOutlinePhotoCamera className="w-[40px] h-[40px]" />;

    case "FaBabyCarriage":
      return <FaBabyCarriage className="w-10 h-10" />;

    case "PiWineFill":
      return <PiWineFill className="w-10 h-10" />;

    case "FaCampground":
      return <FaCampground className="w-10 h-10" />;

    case "LiaMapMarkedAltSolid":
      return <LiaMapMarkedAltSolid className="w-10 h-10" />;
      
    default:
      return null;
  }
};

export default ServiceHero;
