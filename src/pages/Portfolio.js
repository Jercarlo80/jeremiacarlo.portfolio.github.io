import React, { useEffect, useRef } from "react";
import Stationary from "../assets/Stationary.png";
import KGO from "../assets/KGO.png";
import KGOC from "../assets/KGOC.png";
import Antria from "../assets/Antria.png";
import "../style/style.css";

const cardData = [
  {
    img: Stationary,
    title: "Stationary Website",
    description:
      "Stationary Shop is a platform where customers can browse and make purchases of books, stationery, and other school supplies. Additionally, customers can calculate the payment for their items using the calculator feature available on the website page. With this website, customers can conduct transactions without physically visiting the store. We also assist bookstores and stationery shops in marketing their businesses and reaching a larger audience.",
  },
  {
    img: KGO,
    title: "Kuliner.Go Website",
    description:
      "Kuliner.GO is a platform where customers can write reviews after visiting culinary establishments, and other users can view those reviews as information to determine whether or not to try the dining place. Additionally, culinary establishments can view and interact with user reviews, enabling them to improve the quality of their restaurants over time. In addition to facilitating interactions between dining places and their customers, Kuliner.GO also helps these establishments market their businesses and reach a larger audience.",
  },
  {
    img: KGOC,
    title: "Kuliner.Go Website",
    description:
      "Kuliner.GO has participated in a website creation competition along with my team members, Ahmad Naufal Diwantara Putra and Akbar Sirajuddin Hanif, when I was still a student at Telkom University. The competition is called I/O Fest UNTAR (Tarumanagara University), which has a theme focused on the regions of Indonesia. With this theme, Kuliner.GO can bridge the interaction between dining places and their customers. We also assist these dining establishments in marketing their businesses and reaching a larger audience.",
  },
  {
    img: Antria,
    title: "Antria Website",
    description:
      "Antria is an innovative platform focused on delivering exceptional customer service experiences. It offers features such as live chat support, customer feedback analysis, and service request management. Antria is designed to help businesses build strong relationships with their customers and improve overall satisfaction.",
  },
];

export default function Portfolio() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 300; // Adjust this value based on your card width
        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Adjust this value based on your preference
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="portfolio"
      name="portfolio"
      className="bg-[#31363F] min-h-screen flex flex-col items-center lg:pb-4 pb-4"
    >
      <h1 className="text-white text-center mt-16 font-bold text-4xl uppercase">
        Portfolio
      </h1>
      {/* Cards */}
      <div
        ref={carouselRef}
        className="
        sm:flex 
        sm:flex-row 
        flex 
        flex-col
        lg:w-[80rem]
        w-full
        lg:h-[42rem]
        mt-[1rem] 
        overflow-x-auto 
        gap-x-8 
        scrollbar-hide
        lg:justify-center
        justify-center
        lg:items-center
        items-center
        "
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex-grow-0 flex flex-col lg:w-[38rem] w-[22rem] lg:h-[35rem] h-[26rem] mt-[1rem] bg-[#222831] rounded-lg"
          >
            <img className="rounded-t-lg" src={card.img} alt={card.title} />
            <div className="ml-[1.5rem] mt-[1rem]">
              <h1 className="text-white text-[2rem] font-extrabold">
                {card.title}
              </h1>
              <div className="lg:w-[35rem] w-[18.5rem] h-[8rem] overflow-auto scrollbar-hide">
                <p className="lg:w-[34rem] w-[18.5rem] h-[7.5rem] text-white text-justify mt-2">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
