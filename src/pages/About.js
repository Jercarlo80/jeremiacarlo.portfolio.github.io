import React from "react";
import ImagePerson from "../assets/ImagePerson.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="
      md:w-full 
      w-[550px] 
      flex flex-col 
      justify-center 
      items-center 
      md:flex 
      md:flex-col 
      md:justify-center 
      md:items-center
      pt-[50px]
      "
    >
      <h1 className="text-center m-5 md:text-[45px] text-[40px]">About Me</h1>
      <div className="md:w-[1183px] w-[450px] md:h-[589px] h-[650px] bg-[#D9D9D9] rounded-xl shadow-lg shadow-gray-700">
        <div
          className="
          md:flex 
          md:flex-row-reverse 
          md:justify-between 
          md:w-[1149px]
          md:h-[549px]  
          w-[500px]
          h-[600px]
          flex
          flex-col-reverse
          overflow-y-auto
          overflow-x-hidden
          md:gap-y-0
          gap-y-12 
          "
        >
          <div className="md:mt-[63px] md:ml-0 ml-[20px] md:mr-[46px]">
            <img className="md:w-[388px] md:h-[467px] w-[300px]" src={ImagePerson} />
          </div>
          <div className="flex flex-col md:gap-14 gap-1 md:mt-[63px] mt-[20px] md:ml-[46px] ml-[20px] ">
            <h1 className="md:w-[583px] w-[350px] md:h-[90px] h-[100px] md:text-[50px] text-[30px] font-bold text-[#0190ff]">
              Jeremia Carlo Christianto Silitonga
            </h1>
            <p className="md:w-[629px] w-[400px] md:text-[24px] text-[18px] text-justify font-extralight  ">
              As a software engineering student with a strong passion for the
              field. I have developed a particular interest in Front End Web
              Development. I'm. always upgrade my knowledge and skills in these
              area’s. For Front End Development i have learn HTML, CSS,
              Javascript, React Js, and Tailwind CSS. Of course i will always
              learn and upgrade my own knowledge and skills.
            </p>
            <ul className="flex flex-row gap-6">
              <li className="w-[50px] h-[50px] bg-[#0077B5] rounded-lg flex justify-center items-center cursor-pointer">
                <a href="https://www.linkedin.com/in/jeremia-carlo-50136a1ba/">
                  <FaLinkedinIn
                    color="white"
                    className="hover:text-white"
                    size={40}
                  />
                </a>
              </li>
              <li
                className="w-[50px] h-[50px] rounded-lg flex justify-center items-center cursor-pointer"
                style={{
                  background: "linear-gradient(to right, #833ab4, #e1306c)",
                }}
              >
                <a href="https://www.instagram.com/jercarlocs/">
                  <FaInstagram
                    color="white"
                    className="hover:text-white"
                    size={40}
                  />
                </a>
              </li>
              <li className="w-[50px] h-[50px] bg-black rounded-lg flex justify-center items-center cursor-pointer">
                <a href="https://github.com/Jercarlo80">
                  <FiGithub
                    color="white"
                    className="hover:text-white"
                    size={40}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
