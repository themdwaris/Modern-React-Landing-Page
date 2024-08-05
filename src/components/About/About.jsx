import React from "react";
import { useTheme } from "../../context/UserTheme";

const About = () => {
  const {themeToggle}=useTheme()
  return (
    <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
      <div className="my-16 md:mt-20 max-w-7xl mx-auto px-5 md:px-0 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 pt-16 md:pt-28 md:px-5">
          <div className=" flex-1 flex-col justify-center">
            <span className="px-3 py-2 bg-red-500 rounded-lg shadow-lg text-white/90 text-balance text-xl">
              ABOUT US
            </span>

            <p className="text-gray-600 text-xl my-4 dark:text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              ex dolore, minima similique magnam in, culpa blanditiis recusandae
              odit delectus neque enim eaque non exercitationem nulla autem
              sequi cupiditate temporibus impedit ad adipisci est! Cum assumenda
              porro minus eveniet voluptatum quo, deleniti in eius distinctio
              animi recusandae obcaecati natus quia?
            </p>
          </div>
          <div className="flex-1 justify-center items-center">
            <img className="w-full object-cover" src="/draw2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
