import React, { useState } from "react";
import jsonData from "../apps.json";

const TestimonialCard = ({ img, name, text, isSelected, onClick }) => (
  <div
    className={`max-w-sm cursor-pointer overflow-hidden shadow-2xl ${
      isSelected ? "bg-green-500" : ""
    }`}
    onClick={onClick}
  >
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 flex justify items-center">
        <img src={img.url} alt={img.alt} />
        {name}
      </div>
      <p className="text-gray-700 text-base mt-10">{text}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="mt-">
      <div className="mt-14 flex flex-col items-center justify-center">
        <h2 className="text-2xl mt-5 font-bold text-green-800">Testimonial</h2>
        <h1 className="text-4xl font-bold">What they say about us</h1>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-4 pl-6 ">
        {jsonData.images.map((img, index) => (
          <TestimonialCard
            key={index}
            img={img}
            name={`Testimonial ${index + 1}`}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            isSelected={selectedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
