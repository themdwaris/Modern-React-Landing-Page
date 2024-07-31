import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import OpenClose from "./OpenClose";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="border-b fixed top-0 bg-white z-50 w-full">
      <div className="max-w-7xl mx-auto px-5 py-2 md:py-4 flex lg:flex justify-between items-center ">
        
          <Logo />
       
        <Links
          className={`hidden lg:flex md:items-center font-semibold text-[18px] gap-10 `}
        />

       
          <button className="hidden lg:flex gap-2 font-medium items-center py-2 px-4 border border-gray-300 rounded-lg outline-none hover:border-gray-700 ">
            <ion-icon name="logo-electron"></ion-icon> Electron Developers
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        

        <OpenClose
          setToggle={setToggle}
          toggle={toggle}
          icon={<ion-icon name="menu-outline"></ion-icon>}
        />

        <div
          className={`${
            toggle ? "hidden" : "fixed"
          } z-50 lg:hidden inset-0 bg-white py-3 px-5 transition`}
        >
          <div className="flex items-center justify-between ">
            <Logo />
            <OpenClose
              setToggle={setToggle}
              toggle={toggle}
              icon={<ion-icon name="close-outline"></ion-icon>}
            />
          </div>
          <Links
            className={`flex flex-col mt-8 pl-3 font-medium shrink-0`}
            classA={`hover:text-blue-500 grow rounded-lg p-4 hover:bg-gray-100`}
          />
          <div className="w-full border-b mb-5"></div>
          <button className="flex gap-2 font-medium items-center py-2 px-4 border border-gray-300 rounded-lg outline-none mt-3 hover:border-gray-700 ">
            <ion-icon name="logo-electron"></ion-icon> Electron Developers
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
