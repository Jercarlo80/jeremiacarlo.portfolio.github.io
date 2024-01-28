import React from "react";
import Sucofindo from "../assets/Sucofindo.png";
import Agree from "../assets/Agree.png";
import DotLine3 from "../assets/DotLine3.png";
import DotLine2 from "../assets/DotLine2.png";

const CardE = () => {
  return (
    <div className="md:w-[1183px] w-[340px] md:h-[450px] h-[500px] bg-[#D9D9D9] rounded-xl shadow-lg shadow-gray-700">
      <div className="flex flex-row md:ml-[50px] ml-[20px] md:pt-[55px] pt-[30px] ">
        <img className="md:w-[25px] w-[32px] md:h-[305px] h-[452px]" src={DotLine3} />
        <div className="flex flex-col overflow-scroll md:w-[474px] w-[474px]">
          <div className="flex flex-row ml-[14px] mt-[30px] md:w-[474px] w-[470px]">
            <img className="md:w-[121px] w-[150px] md:h-[121px] h-[150px]" src={Sucofindo} />
            <div className="flex flex-col gap-1 ml-[30px]">
              <h1 className="text-[20px] font-bold ">Frontend Developer</h1>
              <h1 className="text-[18px] font-semibold">
                PT. SUCOFINDO · Internship
              </h1>
              <h2 className="text-[16px] font-extralight">
                Sep 2023 - Dec 2023 · 4 mos
              </h2>
              <h2 className="text-[16px] font-extralight">
                Bandung, West Java, Indonesia · Hybrid
              </h2>
            </div>
          </div>
          <div className="flex flex-row ml-[14px] md:mt-[30px] mt-[80px] md:w-[474px] w-[470px]">
            <img className="md:w-[121px] w-[150px] md:h-[121px] h-[150px]" src={Agree} />
            <div className="flex flex-col gap-1 ml-[30px]">
              <h1 className="text-[20px] font-bold ">Frontend Developer</h1>
              <h1 className="text-[18px] font-semibold">Agree · Internship</h1>
              <h2 className="text-[16px] font-extralight">
                Jul 2023 - Sep 2023 · 3 mos
              </h2>
              <h2 className="text-[16px] font-extralight">
                Telkom STO Kebayoran · Hybrid
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardE;
