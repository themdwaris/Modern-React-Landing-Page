import React from "react";
import { useTheme } from "../../context/UserTheme";

const Home = () => {
  const {themeToggle}=useTheme()
  return (
    
      <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
      <div className=" my-16 md:mt-20 max-w-7xl mx-auto px-5 md:px-0  ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 pt-16 md:pt-28 md:px-5">
          <div className="flex-1 flex-col justify-center">
            <span className="px-3 py-2 bg-red-500 rounded-lg shadow-lg text-white/90 text-balance text-base">
              Web Dev,

            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-black/80 my-6 dark:text-white/90">Hello, there i am web dev</h1>
            <p className="text-gray-600 text-xl my-4 dark:text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore accusamus autem qui modi non?</p>
          </div>
          <div className="flex-1 justify-center items-center">
            <img className="w-full object-cover"src="/draw1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
