import React, { useState } from 'react';
import Img1 from '../assets/images/Frame 9.png';
import Img2 from '../assets/images/Frame 9 (1).png';
import Img3 from '../assets/images/Frame 9 (2).png';
import Img4 from '../assets/images/Frame 9 (3).png';
import Img5 from '../assets/images/Frame 9 (4).png';
import Img6 from '../assets/images/Frame 9 (5).png';

const TestimonialCard = ({ img, name, text, isSelected, onClick }) => (
  <div
    className={`max-w-sm cursor-pointer overflow-hidden shadow-2xl ${isSelected ? 'bg-green-500' : ''}`}
    onClick={onClick}
  >
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 flex justify items-center">
        <img src={img} alt="/" />
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

  const cards = [
    { img: Img1, name: 'Angelina Simple', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' },
    { img: Img2, name: 'Viola Natalie', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' },
    { img: Img3, name: 'Robert John K.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' },
    { img: Img4, name: 'Anggi Nani', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' },
    { img: Img5, name: 'Graham Suryo J', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' },
    { img: Img6, name: 'Bagas G Natfi', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis' },
  ];

  return (
    <div className='mt-'>
      <div className="mt-14 flex flex-col items-center justify-center">
        <h2 className="text-2xl mt-5 font-bold text-green-800">Testimonial</h2>
        <h1 className="text-4xl font-bold">What they say about us</h1>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-4 pl-6 ">
        {cards.map((card, index) => (
          <TestimonialCard
            key={index}
            img={card.img}
            name={card.name}
            text={card.text}
            isSelected={selectedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
