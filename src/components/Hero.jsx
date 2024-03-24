import React from 'react';
import Background from '../assets/images/Background.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi'; 

const Hero = () => {
  return (
    <div
      className="bg-green-500 h-screen flex flex-col items-center  justify-center text-white"
      style={{ backgroundImage: `url(${Background})`  }}
    >
      <div className="text-center mb-8">

        <h1 className="text-6xl font-bold mb-4">Explore the world with a smile</h1>

        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut odit nesciunt, in voluptas quaerat <br />    perspiciatis nemo     soluta molestiae nostrum. Tempore reiciendis asperiores quo quaerat, <br /> quam veniam repudiandae ipsam? Quos.</p>
        
      </div>
      <div className="max-w-2xl w-full">

        <form className='relative flex items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-white'>

          <BiMap size={24} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" /> 
          <input className='bg-transparent w-full sm:w-[160px] focus:outline-none   pl-10 placeholder-black' type="text" placeholder='City or Destination' />
          
          <input className='bg-transparent w-full sm:w-[160px] focus:outline-none   pl-10 placeholder-black' type="text" placeholder='| Date of Stay' />

          <input className='bg-transparent w-full sm:w-[170px] focus:outline-none   pl-10 placeholder-black' type="text" placeholder='| Persons' />

          <button className="bg-green-600 px-4 py-2 rounded-md flex items-center text-white">
            Find Trip Now <AiOutlineSearch size={30} className='icon ml-2' color='white' />
          </button>

           
        </form> 
      </div>
    </div>
  );
};

export default Hero;
