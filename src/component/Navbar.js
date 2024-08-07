import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "HOME",
      href: "#home",
    },
    {
      id: 2,
      link: "ABOUT ME",
      href: "#about",
    },
    {
      id: 3,
      link: "PORTFOLIO",
      href: "#portfolio",
    },
    {
      id: 4,
      link: "EXPERIENCE",
      href: "#experience",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center w-full h-20 px-4 fixed pt-5 z-50 transition-all duration-300 ${
        scrollPosition > 0 ? "bg-black" : "bg-transparent"
      }`}
    >
      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="
              px-4 
              text-white
              font-bold
              hover:scale-110 
              duration-200 
              cursor-pointer
            "
          >
            <a href={href}>{link}</a>
          </li>
        ))}
      </ul>
      <div
        onClick={toggleNav}
        className="cursor-pointer md:hidden flex justify-end items-end"
      >
        {navOpen ? (
          <RxCross1 className="z-20" color="white" size={30} />
        ) : (
          <GiHamburgerMenu color="white" size={30} />
        )}
      </div>
      {navOpen && (
        <ul
          className="
            flex
            flex-col
            justify-center
            items-center
            absolute
            top-0
            left-0
            w-full
            h-screen
            bg-black
            text-black
          "
        >
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className="
                px-4 
                py-6
                text-2xl
                text-gray-500 
                hover:scale-110 
                duration-200 
                hover:text-[#ffff] 
                cursor-pointer
              "
            >
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
