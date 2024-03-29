import React from "react";
import jsonData from "../about.json";
import { BiCheckShield } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrSchedulePlay } from "react-icons/gr";

const AboutHero = () => {
  return (
    <div>
      <div>
        <img className="w-full" src={jsonData.bannerImage.url} alt={jsonData.bannerImage.alt} />
      </div>

      <div className="mt-14">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl">Why Choose Us ?</h1>
          <p className="text-lg mt-2">
            These popular destinations have a lot to offer
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg ">
            <BiCheckShield className="w-[100px] h-[100px] text-green-500" />
            <h1 className="text-xl font-bold mt-4 cursor-pointer">
              Best price guarantee
            </h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit
            </p>
          </div>

          <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg ">
            <GrSchedulePlay className="w-[100px] h-[100px] text-green-500" />
            <h1 className="text-xl font-bold mt-4 cursor-pointer">
              Easy Booking
            </h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            </p>
          </div>

          <div className="flex flex-col items-center justify-between bg-white p-6 rounded-lg ">
            <RiCustomerService2Line className="w-[100px] h-[100px] text-green-500" />
            <h1 className="text-xl font-bold mt-4 cursor-pointer">
              Customer Service 24h
            </h1>
            <p className="text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row p-12">
        <div className="w-3/4 items-center justify-center mt-[90px]">
          <h1 className="font-bold text-xl">About Travelaja.com</h1>

          <p className="text-lg mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum
            et in feugiat. Platea in diam, est congue. Posuere sapien morbi
            augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus
            nibh. Egestas semper massa viverra massa proin in morbi placerat.
            Pharetra nec, est non integer nisi, ut faucibus. Non, in nam
            sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit
            pellentesque id cras lobortis tortor, blandit. <br /> <br />
            Id ac non, semper turpis maecenas. Convallis tempor fringilla
            quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae.
            Malesuada velit, at mattis adipiscing quisque tristique id magna.
            Blandit porta sit nam magna sit. Turpis vestibulum facilisis
            placerat habitant gravida eget. Lacus pretium, arcu non adipiscing
            sed faucibus semper eget tempor.
          </p>
        </div>

        <div>
          <img src={jsonData.aboutImage.url} alt={jsonData.aboutImage.alt} />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
