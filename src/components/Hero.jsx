import React from 'react';
import Background from '../assets/images/Background.png';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="text-white text-center mb-8">
        <h1 className="text-6xl font-bold mb-4">Explore the world with a smile</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut odit nesciunt, in voluptas quaerat <br />    perspiciatis nemo     soluta molestiae nostrum. Tempore reiciendis asperiores quo quaerat, <br /> quam veniam repudiandae ipsam? Quos.</p>
      </div>
      <div className="max-w-2xl w-full">
        <div className="flex items-center border border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="Find Trip Now"
            className="px-4 py-2 w-full focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded-md">
            Find Trip Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
