import React from "react";
import JakartaImage from "../assets/Jkt.png";
import { useTypewriter } from "react-simple-typewriter";
import { AiOutlineRight } from 'react-icons/ai';

export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Front End Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div id="home" name="home" className="w-full h-screen z-0 relative">
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50">
        <img
          className="w-full h-screen object-cover"
          src={JakartaImage}
          alt="Jakarta"
        />
      </div>
      <div className="relative z-10 text-white flex flex-col gap-y-2 items-center justify-center h-full">
        <h1 className="text-6xl font-normal">Hello</h1>
        <h2 className="text-3xl mt-4 font-extralight">
          I am <span className="font-bold">{typeEffect}</span>
        </h2>
        <div className="flex gap-x-[1rem] lg:relative relative lg:top-[18rem] top-[12rem]">
          <button
            className="
          text-white
            w-fit
            px-6
            py-3
            my-2
            flex
            items-center
            rounded-md
            bg-[#01579b]
            group"
            onClick={handleScroll}
          >
            Scroll Down
            <span className="relative left-3 group-hover:rotate-90 duration-900">
              <AiOutlineRight className="text-white ml-1" size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
