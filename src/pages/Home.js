import React from "react";
import Code from "../assets/Image1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect1] = useTypewriter({
    words: ["Welcome to my personal website", "I am Software Engineer 💻"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div id="home" name="home" className="p-4 lg:p-8">
      <div className="md:flex md:flex-row flex flex-col justify-center items-center md:justify-between md:w-full w-[554px]">
        <div className="flex flex-col gap-4 md:mt-[280px] mt-[100px] md:ml-[160px] ml-[30px]">
          <h1 className="md:w-[553px] w-[500px] lg:text-[50px] md:text-[50px] text-[45px] font-bold">
            Jeremia Carlo
          </h1>
          <h1 className="md:w-[553px] w-[500px] lg:text-[50px] md:text-[50px] text-[45px] font-bold">
            Christianto Silitonga
          </h1>

          <p className="md:w-[400px] w-[350px] md:text-[35px] text-[30px] font-extralight text-start">
            Hi everyone 👋
          </p>
          <p className="md:w-[500px] w-[350px] md:text-[35px] text-[25px] font-extralight">
            {typeEffect1}
          </p>
          <h2 className="md:w-[554px] w-[500px] h-[79px] md:text-[40px] text-[40px] text-[#0190ff] font-extrabold">
            Front End Web Developer
          </h2>
        </div>
        <div className="md:mt-[214px] md:mr-[120px]">
          <img
            className="md:w-[581px] w-[450px] h-[401px] md:h-[512px]"
            src={Code}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
