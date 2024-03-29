import React from "react";
import imagePaths from "../about.json";

const teamMembers = [
  { name: "Agung perdana", designation: "Web Designer" },
  { name: "Viola Resti", designation: "Marketing Director" },
  { name: "Rahardianysah", designation: "International Relations" },
  { name: "Andika", designation: "Medical Check" },
  { name: "Theresa Russell", designation: "Doctor Assistant" },
];

const AboutTeam = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={imagePaths.teamImages[index]}
              alt="/"
            />
            <div className="font-bold mt-2">{member.name}</div>
            <div className="mt-2">{member.designation}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-[100px]">
        {imagePaths.otherImages.map((imgPath, index) => (
          <div key={index} className="text-center">
            <img src={imgPath} alt="/" />
            <div className="text-gray-500 mt-2">
              {getCorrespondingText(index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getCorrespondingText = (index) => {
  switch (index) {
    case 0:
      return "Travel";
    case 1:
      return "City Tour";
    case 2:
      return "Island Tour";
    case 3:
      return "Explore World";
    default:
      return "";
  }
};

export default AboutTeam;
