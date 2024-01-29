import React from "react";
import LabTabsE from "../component/TabsE";

const Experience = () => {
  return (
    <div id="experience" name="experience" className="md:w-full 
    w-[550px] 
    flex flex-col 
    justify-center 
    items-center 
    md:flex 
    md:flex-col 
    md:justify-center 
    md:items-center
    md:pt-5
    pt-5
    md:mb-5
    mb-5
    ">
      <h1 className="text-center mt-5 md:text-[45px] text-[40px]">Experience and Education</h1>
      <div className="flex justify-center items-center">
        <LabTabsE />
      </div>
    </div>
  );
};

export default Experience;
