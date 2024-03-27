import React from "react";
import Banner from "../assets/images/Banner.png";
import Map from "../assets/images/Rectangle 16.png";
import Img1 from "../assets/images/Rectangle 17 (1).png";
import Pin from "../assets/images/pin-48.png";
import Img2 from "../assets/images/Rectangle 18 (1).png";
import Img3 from "../assets/images/Rectangle 19.png";
import Img4 from "../assets/images/Rectangle 20.png";

const DiscoverHero = () => {
  return (
    <div>
      <div>
        <img className="w-full" src={Banner} alt="/" />
      </div>

      <div className="flex mt-4 w-full p-8">
        <div className="w-3/4 pr-8">
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left text-xl">
            D Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
            urna, porttitor rhoncus dolor purus non enim praesent elementum
            facilisis leo, vel fringilla est ullamcorper eget nulla facilisi.{" "}
            <br /> <br />
            enim lobortis scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis eu volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus,
            viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            fau.
          </p>
        </div>
        <div className="w-1/4">
          <img src={Map} alt="Map" className="w-full shadow-2xl" />
        </div>
      </div>

      <div>
        <div className="mt-12 p-8">
          <div className="flex">
            <div>
              {" "}
              <img src={Img1} alt="/" className="w-[920px]" />
            </div>

            <div className="relative mx-auto mt-8 w-1/4">
              <div>
                <h1 className="text-xl ml-2">Other Destinations</h1>
              </div>
              <img className="w-full" src={Img4} alt="Card" />
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center px-4 py-6 bg-black bg-opacity-0 text-white">
                <div className="text-left">
                  <h3 className="text-xl font-bold">
                    Wakatobi beach is a paradise for coral reefs in Indonesia
                  </h3>
                  <p className="mt-2">Yogyakarta, Indonesia</p>
                  <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" text-4xl mt-3">
              Memorable Festivals On Bali Beach
            </h1>
            <h1 className="flex mt-2">
              <img src={Pin} alt="/" />
              <span className="ml-8 text-xl">Bali, Indonesia</span>
            </h1>

            <div className="flex">
              <p className="text-xl mt-8 w-[920px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                integer facilisis aliquet erat vitae viverra ornare. Placerat
                urna integer nibh justo. Dictum vulputate odio mauris amet,
                dictumst molestie. Faucibus consectetur mauris tristique dolor
                ut diam, adipiscing et. Semper mi proin malesuada orci
                phasellus. Consectetur posuere iaculis amet sem. Euismod turpis
                pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi
                pharetra sed.
              </p>

              <div className="relative mx-auto mt-8 w-1/4">
                <img className="w-full" src={Img4} alt="Card" />
                <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center px-4 py-6 bg-black bg-opacity-0 text-white">
                  <div className="text-left">
                    <h3 className="text-xl font-bold">
                      Wakatobi beach is a paradise for coral reefs in Indonesia
                    </h3>
                    <p className="mt-2">Yogyakarta, Indonesia</p>
                    <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl mt-8 w-[920px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              integer facilisis aliquet erat vitae viverra ornare. Placerat urna
              integer nibh justo. Dictum vulputate odio mauris amet, dictumst
              molestie.
            </p>
          </div>
        </div>

        <div>
          <div className="flex">
            <div className="flex p-8 items-center justify-between w-[920px] ">
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </div>

            <div className="relative mx-auto mt-8 w-1/4">
              <img className="w-full" src={Img4} alt="Card" />
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center px-4 py-6 bg-black bg-opacity-0 text-white">
                <div className="text-left">
                  <h3 className="text-xl font-bold">
                    Wakatobi beach is a paradise for coral reefs in Indonesia
                  </h3>
                  <p className="mt-2">Yogyakarta, Indonesia</p>
                  <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-xl w-[800px] p-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              integer facilisis aliquet erat vitae viverra ornare. Placerat urna
              integer nibh justo. Dictum vulputate odio mauris amet, dictumst
              molestie. Faucibus consectetur mauris tristique dolor ut diam,
              adipiscing et. Semper mi proin malesuada orci phasellus.
              Consectetur posuere iaculis amet sem. Euismod turpis pellentesque
              sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverHero;
