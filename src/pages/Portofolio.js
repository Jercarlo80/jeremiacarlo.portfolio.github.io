import React from "react";
import LabTabs from "../component/Tabs";

const Portofolio = () => {
  return (
    <div id="portfolio" name="portfolio" className="mt-[250px] md:flex md:justify-center md:items-center flex justify-center items-center">
      <div className="md:flex md:flex-col md:justify-center md:items-center gap-7">
        <h1 className="text-center pt-5 md:text-[45px] text-[40px]">Portfolio</h1>
        <div className="flex justify-center items-center">
          <LabTabs />
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
