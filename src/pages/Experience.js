import React from "react";
import Agree from "../assets/Agree.png";
import Sucofindo from "../assets/Sucofindo.png";
import Telu from "../assets/Telu.png";

const experiences = [
  {
    id: 1,
    companyLogo: Sucofindo,
    role: "Frontend Developer",
    company: "PT. SUCOFINDO",
    type: "Internship",
    duration: "Sep 2023 – Dec 2023 · 4 mos",
    location: "Bandung, West Java, Indonesia · Hybrid",
  },
  {
    id: 2,
    companyLogo: Agree,
    role: "Frontend Developer",
    company: "Agree",
    type: "Internship",
    duration: "Jul 2023 – Aug 2023 · 2 mos",
    location: "Telkom STO Kebayoran · Hybrid",
  },
  {
    id: 3,
    companyLogo: Telu,
    role: "Telkom University",
    company:
      "Bachelor's computer, Computer Software Engineering",
    duration: "2020-2024",
  },
];

export default function Experience() {
  return (
    <div
      id="experience"
      name="experience"
      className="bg-black min-h-screen flex flex-col items-center"
    >
      <h1 className="text-white text-center mt-16 font-bold text-4xl uppercase">
        Experience and Education
      </h1>
      {/* Card */}
      <div className="mt-[4rem] w-full max-w-4xl px-4">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-[#222831] p-6 rounded-xl shadow-lg mb-6"
          >
            <div className="flex items-center mb-4">
              <img
                src={experience.companyLogo}
                alt="Company Logo"
                className="mr-4"
              />
              <div>
                <h2 className="text-white text-xl font-bold">
                  {experience.role}
                </h2>
                <p className="text-white">
                  {experience.company} · {experience.type}
                </p>
                <p className="text-white">{experience.duration}</p>
                <p className="text-white">{experience.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
