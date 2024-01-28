import React from "react";
import Code from "../assets/Image1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect1] = useTypewriter({
    words: ["Welcome to my personal website"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div id="home" name="home" className="p-4 md:p-8">
      <div className="md:flex md:flex-row flex flex-col md:justify-between">
        <div className="flex flex-col gap-4 md:mt-[280px] mt-[100px] md:ml-[160px] ml-[0px]">
          <h1 className="md:w-[553px] w-[230px] md:text-[50px] text-[35px] font-bold">
            Jeremia Carlo
          </h1>
          <h1 className="md:w-[553px] w-[340px] md:text-[50px] text-[35px] font-bold">
            Christianto Silitonga
          </h1>

          <p className="md:w-[400px] w-[350px] md:text-[35px] text-[30px] font-extralight text-start">
            Hi everyone 👋
          </p>
          <p className="md:w-[500px] w-[350px] md:text-[35px] text-[25px] font-extralight">
            {typeEffect1}
          </p>
          <h2 className="md:w-[554px] w-[350px] h-[79px] md:text-[40px] text-[28px] text-[#0190ff] font-extrabold">
            Front End Web Developer
          </h2>
        </div>
        <div className="md:mt-[214px] md:mr-[120px] ml-[20px] ">
          <img
            className="md:w-[581px] w-[280px] h-[261px] md:h-[512px]"
            src={Code}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
