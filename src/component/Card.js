import React from "react";
import Stationary from "../assets/Stationary.png";
import KulinerGo from "../assets/KulinerGo.png";
import KulinerGoComp from "../assets/KulinerGoComp.png";
import Antria from "../assets/Antria.png";

const Card = () => {
  return (
    <div className="md:w-[1183px] w-[340px] md:h-[1489px] h-[650px] bg-[#D9D9D9] rounded-xl shadow-lg shadow-gray-700">
      <div className="md:flex md:flex-col flex gap-12 overflow-x-auto md:w-[1200px] w-[320px] md:h-[1489px] h-[1400px]">
        <div className="md:flex flex-row mt-[51px] ml-[28px]">
          <img
            className="md:w-[530px] w-[440px] md:ml-0 ml-[21px]"
            src={Stationary}
            alt="Stationary Item"
          />
          <div className="flex flex-col gap-4 md:ml-[53px] ml-6 md:mt-[38px] mt-[30px]">
            <h2 className="text-[30px] text-[#0B0C10] font-semibold ">
              Stationary Shop Website
            </h2>
            <p className="w-[439px] text-[20px] text-[#6E6E6E] text-justify">
              Stationary Shop is a platform where customers can browse and make
              purchases of books, stationery, and other school supplies.
            </p>
          </div>
        </div>
        <div className="md:flex flex-row-reverse md:mt-0 mt-[51px] mr-[51px] ml-[28px]">
          <img
            className="md:w-[530px] w-[440px] md:ml-0 ml-[21px]"
            src={KulinerGo}
            alt="Stationary Item"
          />
          <div className="flex flex-col gap-4 md:mr-[51px] md:ml-0 ml-[20px] mt-[28px]">
            <h2 className="text-[30px] text-[#0B0C10] font-semibold md:text-right text-start">
              Kuliner.Go Website
            </h2>
            <p className="w-[439px] text-[20px] text-[#6E6E6E] md:text-right text-justify">
              Kuliner.GO is a platform where customers can write reviews after
              visiting culinary establishments, and other users can view those
              reviews as information to determine whether or not to try the
              dining place.
            </p>
          </div>
        </div>
        <div className="md:flex flex-row mt-[51px] ml-[28px]">
          <img
            className="md:w-[530px] w-[440px] md:ml-0 ml-[21px]"
            src={KulinerGoComp}
            alt="Stationary Item"
          />
          <div className="flex flex-col gap-4 md:ml-[53px] ml-6 md:mt-0 mt-[28px]">
            <h2 className="text-[30px] text-[#0B0C10] font-semibold ">
              Kuliner.Go Competition Website
            </h2>
            <p className="w-[470px] text-[20px] text-[#6E6E6E] text-justify">
              Kuliner.GO has participated in a website creation competition
              along with my team members, Ahmad Naufal Diwantara Putra and Akbar
              Sirajuddin Hanif, when I was still a student at Telkom University.
              The competition is called I/O Fest UNTAR (Tarumanagara
              University).
            </p>
          </div>
        </div>
        <div className="md:flex flex-row-reverse md:mt-0 mt-[51px] mr-[51px] ml-[28px]">
          <img
            className="md:w-[530px] w-[440px] md:ml-0 ml-[21px]"
            src={Antria}
            alt="Stationary Item"
          />
          <div className="flex flex-col gap-4 mr-[51px] md:ml-0 ml-[20px] mt-[28px]">
            <h2 className="text-[30px] text-[#0B0C10] font-semibold md:text-right text-start">
              Antria Landing Page Website
            </h2>
            <p className="md:w-[439px] w-[450px] text-[20px] text-[#6E6E6E] md:text-right text-justify">
              Antria is a startup operating in the digital field, providing
              services to revolutionize conventional queue processes with more
              efficient and flexible solutions
            </p>
          </div>
        </div>
        {/* Add more items here if needed */}
      </div>
    </div>
  );
};

export default Card;
