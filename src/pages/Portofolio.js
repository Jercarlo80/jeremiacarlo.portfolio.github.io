import React from "react";
import LabTabs from "../component/Tabs";

const Portofolio = () => {
  return (
    <div id="portfolio" name="portfolio" className="mt-[250px]">
      <div className="md:w-full w-[550px] flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center gap-7">
        <h1 className="text-center pt-5 md:text-[45px] text-[40px]">
          Portfolio
        </h1>
        <LabTabs />
      </div>
    </div>
  );
};

export default Portofolio;
