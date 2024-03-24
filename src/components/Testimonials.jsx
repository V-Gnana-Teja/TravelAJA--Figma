import React from 'react';
import Img1 from '../assets/images/Frame 9.png'
import Img2 from '../assets/images/Frame 9 (1).png'
import Img3 from '../assets/images/Frame 9 (2).png'
import Img4 from '../assets/images/Frame 9 (3).png'
import Img5 from '../assets/images/Frame 9 (4).png'
import Img6 from '../assets/images/Frame 9 (5).png'

const Testimonials = () => {
  return (
    <div className='mt-'>
      <div className="mt-14 flex flex-col items-center justify-center">
        <h2 className="text-2xl mt-5 font-bold text-green-800">
          Testimonial
        </h2>
        <h1 className="text-4xl font-bold">What they say about us</h1>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-4 pl-6">

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl ">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify items-center"> <img src={Img1} alt="/" /> Angelina Simple</div>
            <p className="text-gray-700 text-base mt-10">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget magna vel quam lobortis placerat."
            </p>
          </div>
        </div>


        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl ">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify items-center"><img src={Img2} alt="/" /> Viola Natalie</div>
            <p className="text-gray-700 text-base">
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl ">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify items-center"><img src={Img3} alt="/" /> Robert John K.</div>
            <p className="text-gray-700 text-base">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur."
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl mt-5">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify items-center"><img src={Img4} alt="/" /> Anggi Nani</div>
            <p className="text-gray-700 text-base">
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl mt-5">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify items-center"><img src={Img5} alt="/" /> Graham Suryo J</div>
            <p className="text-gray-700 text-base">
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt."
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-md overflow-hidden shadow-2xl mt-5">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify items-center"><img src={Img6} alt="/" /> Bagas G Natfi</div>
            <p className="text-gray-700 text-base">
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
              non provident."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
