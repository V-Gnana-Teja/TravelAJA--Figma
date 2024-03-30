import React from "react";
import imagesData from "../news.json";

const NewsCarousel = () => {
  const { banner, images } = imagesData;

  return (
    <div>
      <div>

        <img className="w-full" src={banner} alt="/" />
      </div>

      <div className="flex flex-col items-center justify-center mt-12">

        <h1 className="text-3xl">Travelaja Articles</h1>

        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
      </div>

      <div className="mt-4 flex justify-center p-14">

        <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Adventure Travel
        </button>
        <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Beach
        </button>
        <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Explore World
        </button>
        <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 mr-2 rounded">
          Family Holidays
        </button>
        <button className="text-black hover:bg-green-700 hover:text-white font-bold py-2 px-4 rounded">
          Art and Culture
        </button>

      </div>


      <div className="mt-12 grid grid-cols-3 gap-4 pl-5 ">
        {images.map((image) => (
          <div
            key={image.id}
            className="max-w-sm rounded-md overflow-hidden shadow-2xl cursor-pointer"
          >

            <img src={image.path} alt={image.altText} className="w-full border-0 border-white" />
            <div className="px-6 py-4">

              <div className="text-xl mb-2">{image.title}</div>

              <div className="flex items-center justify-between">
                <p>September 19, 2024</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
