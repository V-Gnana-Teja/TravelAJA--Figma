import React, { useState, useEffect } from "react";
import cardsData from "../apps.json";

const Carousel = () => {
  const [shuffledCards, setShuffledCards] = useState(cardsData.destinations);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleCards();
    }, 2000);

    return () => clearInterval(interval);
  }
  );

  const shuffleCards = () => {
    const shuffled = [...shuffledCards];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCards(shuffled);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <div className="mt-12 flex p-4">
          <div className="w-1/2 flex">
            <img src={require("../assets/images/Group 34.png")} alt=" 1" />
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

        <div className="mt-14 flex flex-col items-center justify-center">
          <h2 className="text-2xl mt-5 font-bold text-green-800">
            Top destination
          </h2>
          <h1 className="text-4xl font-bold">Discover your love</h1>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xxl:grid-cols-2 gap-4 pl-5 justify-center items-center">
          {shuffledCards.map((card) => (
            <div key={card.id} className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer">
              <img src={card.image} alt={card.title} className="w-full border-8 border-white" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <div className="flex items-center justify-between">
                  <p className="text-green-700 mt-6 text-xl font-bold">{card.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
