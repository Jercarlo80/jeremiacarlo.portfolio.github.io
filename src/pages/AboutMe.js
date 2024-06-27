import React from "react";
import Jercarlo from "../assets/Jercarlo.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div id="about" name="about" className="bg-black min-h-screen flex flex-col items-center">
      <h1 className="text-white text-center mt-16 font-bold text-4xl uppercase">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center mt-16 gap-8 md:gap-16 px-4 md:px-16">
        <img src={Jercarlo} className="w-64 md:w-[360px]" />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="flex flex-col text-white text-2xl font-bold text-center md:text-left">
            <span className="font-extralight">Hello everyone</span> Jeremia Carlo
            Christianto Silitonga S.Si.Kom
          </h1>
          <div className="flex flex-col gap-y-8 mt-8">
            <p className="text-justify text-white text-sm md:text-base max-w-[20.9rem] lg:max-w-[30.9rem]">
              As a software engineering student with a strong passion for the
              field, I have developed a particular interest in Front End Web
              Development. I'm always upgrading my knowledge and skills in these
              areas. For Front End Development, I have learned HTML, CSS,
              JavaScript, React.js, and Tailwind CSS. Of course, I will always
              learn and upgrade my own knowledge and skills.
            </p>
            <p className="text-justify text-white text-sm md:text-base max-w-[20.9rem] lg:max-w-[30.9rem]">
              I am always looking out for opportunities to learn and grow,
              whether through developing and researching the newest technologies.
              I believe that staying engaged and open to learning is crucial to
              success in this rapidly evolving industry.
            </p>
            <div className="lg:flex flex lg:justify-start justify-center lg:mb-0 mb-8 gap-6 mt-8">
              <a
                href="https://www.instagram.com/jercarlo_c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">
                  <FaInstagram size={35} className="text-white" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/jeremia-carlo-christianto-silitonga-50136a1ba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">
                  <FaLinkedin size={35} className="text-white" />
                </div>
              </a>
              <a
                href="https://github.com/Jercarlo80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110">
                  <FaGithub size={35} className="text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
