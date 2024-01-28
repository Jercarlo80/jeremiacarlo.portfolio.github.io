import React, { useState } from "react";
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
      link: "PORTFOLIO",
      href: "#portfolio",
    },
    {
      id: 3,
      link: "ABOUT ME",
      href: "#about",
    },
    {
      id: 4,
      link: "EXPERIENCE",
      href: "#experience",
    },
  ];
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="flex justify-center items-center w-full h-20 px-4 fixed bg-white pt-5">
      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="
              px-4 
              text-gray-500 
              hover:scale-110 
              duration-200 
              hover:text-[#0190ff] 
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
          <RxCross1 className="z-20" color="#0190ff" size={30} />
        ) : (
          <GiHamburgerMenu color="#0190ff" size={30} />
        )}
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
            bg-white
            
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
                  hover:text-[#0190ff] 
                  cursor-pointer
                "
              >
                <a href={href}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
