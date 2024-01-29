import React from "react";
import DotLine2 from "../assets/DotLine2.png";
import Telu from "../assets/Telu.png";

const CardED = () => {
  return (
    <div className="md:w-[1183px] w-[450px] md:h-[450px] h-[350px] bg-[#D9D9D9] rounded-xl shadow-lg shadow-gray-700">
      <div className="flex flex-row ml-[50px] pt-[55px]">
        <img className="md:w-[25px] w-[32px] md:h-[305px] h-[252px]" src={DotLine2} />
        <div className="flex flex-col overflow-scroll md:w-[474px] w-[474px]">
          <div className="flex flex-row ml-[14px] mt-[30px] md:w-[474px] w-[470px]">
            <img className="md:w-[121px] w-[150px] md:h-[121px] h-[150px]" src={Telu} />
            <div className="flex flex-col gap-1 ml-[30px]">
              <h1 className="text-[20px] font-bold ">Telkom University </h1>
              <h2 className="text-[16px] font-extralight">
                Bachelor’s computer, Computer Software Engineering
              </h2>
              <h1 className="text-[18px] font-semibold">2020 - 2024</h1>
              <h1 className="text-[18px] font-medium">Current GPA <span className="font-semibold">3.55</span> out of <span className="font-semibold">4.0</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardED;
