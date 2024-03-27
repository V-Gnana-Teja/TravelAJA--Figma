import React from "react";
import { FaHiking } from "react-icons/fa";
import { TbRollerSkating } from "react-icons/tb";
import { GiMountainClimbing } from "react-icons/gi";
import { MdScubaDiving } from "react-icons/md";
import { FaFly } from "react-icons/fa";
import { MdTour } from "react-icons/md";

const ServiceBenefits = () => {
  const cardsData = [
    {
      icon: <FaHiking className="w-[50px] h-[50px]" />,
      title: "Hiking",
      content:
        "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",
    },
    {
      icon: <TbRollerSkating className="w-[50px] h-[50px]" />,
      title: "skating",
      content:
        "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",
    },
    {
      icon: <GiMountainClimbing className="w-[50px] h-[50px]" />,
      title: "Climbing",
      content:
        "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",
    },
    {
      icon: <MdTour className="w-[50px] h-[50px]" />,
      title: "Tours",
      content:
        "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",
    },
    {
      icon: <MdScubaDiving className="w-[50px] h-[50px]" />,
      title: "Diving",
      content:
        "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",
    },
    {
      icon: <FaFly className="w-[50px] h-[50px]" />,
      title: "Flying",
      content:
        "Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.",
    },
  ];

  return (
    <div>
      <div className="mt-14 flex flex-col items-center justify-center">
        <h2 className="text-xl mt-5 text-black">BENEFITS</h2>
        <h1 className="text-4xl font-bold mt-2">OUR SERVICE</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 mx-auto max-w-7xl">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg p-6 flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              {card.icon}
              <h3 className="text-2xl font-bold ml-2">{card.title}</h3>
            </div>
            <p className="text-lg">{card.content}</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;
