import React from 'react';
import Img1 from '../assets/images/Rectangle 30.png';
import Img2 from '../assets/images/Rectangle 30 (1).png';
import Img3 from '../assets/images/Rectangle 30 (4).png';
import Img4 from '../assets/images/Rectangle 30 (2).png';
import Img5 from '../assets/images/Rectangle 30 (3).png';
import Img6 from '../assets/images/emojione-monotone_ship.png';
import Img7 from '../assets/images/healthicons_city-outline.png';
import Img8 from '../assets/images/fontisto_island.png';
import Img9 from '../assets/images/gis_map-route.png';

const teamMembers = [
  { name: 'Agung perdana', designation: 'Web Designer' },
  { name: 'Viola Resti', designation: 'Marketing Director' },
  { name: 'Rahardianysah', designation: 'International Relations' },
  { name: 'Andika', designation: 'Medical Check' },
  { name: 'Theresa Russell', designation: 'Doctor Assistant' },
];

const AboutTeam = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-12'>
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img src={index === 0 ? Img1 : index === 1 ? Img2 : index === 2 ? Img3 : index === 3 ? Img4 : Img5} alt="/" />
            <div className='font-bold mt-2'>{member.name}</div>
            <div className='mt-2'>{member.designation}</div>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-between p-[100px]  '>
        <div className="text-center">
          <img src={Img6} alt="/" />
          <div className='text-gray-500 mt-2'>Travel</div>
        </div>
        <div className="text-center">
          <img src={Img7} alt="/" />
          <div className='text-gray-500 mt-2'>City Tour</div>
        </div>
        <div className="text-center">
          <img src={Img8} alt="/" />
          <div className='text-gray-500 mt-2'>Island Tour</div>
        </div>
        <div className="text-center">
          <img src={Img9} alt="/" />
          <div className='text-gray-500 mt-2'>Explore World</div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
