import React from "react";
import Navbar from "./components/ResponsiveNav/Navbar";
import HeroSection from "./components/ResponsiveNav/HeroSection";



const App = () => {
  return (
    <>
   
      <div className="w-full">
      <Navbar/>
      <HeroSection/>
      </div>
      
    </>
  );
};

export default App;
