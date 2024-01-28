import React from "react";
import Stationary from "../assets/Stationary.png";
import Mobile from "../assets/Mobile.png";
import KulinerGoComp from "../assets/KulinerGoComp.png";
import Antria from "../assets/Antria.png";

const CardMobile = () => {
  return (
    <div className="md:w-[1183px] w-[340px] md:h-[1489px] h-[650px] bg-[#D9D9D9] rounded-xl shadow-lg shadow-gray-700">
      <div className="flex flex-col gap-12 md:w-[1100px] w-[300px] overflow-x-auto overflow-y-hidden">
        <div className="flex flex-row mt-[51px] ml-[28px]">
          <img
            className="w-[250px] h-[500px] "
            src={Mobile}
            alt="Stationary Item"
          />
          <div className="flex flex-col gap-4 ml-[53px] mt-[38px]">
            <h2 className="text-[30px] text-[#0B0C10] font-semibold ">
              Kuliner.Go Mobile App
            </h2>
            <p className="w-[539px] text-[20px] text-[#6E6E6E] text-justify">
              Kuliner.GO is a platform where customers can write reviews after
              visiting culinary establishments, and other users can view those
              reviews as information to determine whether or not to try the
              dining place. Additionally, culinary establishments can view and
              interact with user reviews, enabling them to improve the quality
              of their restaurants over time. In addition to facilitating
              interactions between dining places and their customers, Kuliner.GO
              also helps these establishments market their businesses and reach
              a larger audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMobile;
