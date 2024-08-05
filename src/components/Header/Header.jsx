import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Links from "./Links";
import OpenCloseBtn from "./OpenCloseBtn";
import { useTheme } from "../../context/UserTheme";


const Header = () => {
  const [toggle, setToggle] = useState(true);
  
  const { themeMode, setThemeMode, darkTheme, lightTheme,themeToggle,setThemeToggle} =
  useTheme();

if (themeToggle) {
  darkTheme(setThemeMode("dark"));
} else {
  lightTheme(setThemeMode("light"));
}

useEffect(() => {
  document.querySelector("html").classList.remove("dark", "light","hydrated");
  document.querySelector("html").classList.add(themeMode);
}, [themeMode]);



  return (
    <div className="dark:bg-gray-900 fixed top-0 z-50 w-full border-b dark:border-gray-700 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-5 dark:bg-gray-900 dark:text-white bg-white/90 leading-3">
        <Link to="/" className="flex gap-1 items-center">
          <span className="text-2xl font-semibold text-red-500">your</span>
          <span className="text-2xl font-semibold dark:text-gray-300 text-gray-700"> logo</span>
        </Link>
        <div className="hidden md:flex items-center gap-5">
          <Links path="/" linkName="Home" />
          <Links path="about" linkName="About" />
          <Links path="contact" linkName="Contact" />
          <Links path="github" linkName="Github" />
        </div>
       <div className="flex items-center gap-4">
       <span className="hidden md:inline-block cursor-pointer leading-3" onClick={()=>setThemeToggle(!themeToggle)}>{themeToggle?<ion-icon name="sunny-outline"></ion-icon>:<ion-icon name="moon-outline"></ion-icon>}</span>
        <div className="hidden md:flex items-center gap-3 text-base ">
          <Links path="/login" linkName="Login" />
          <Links
            linkName="Get started"
            className={`p-3 py-2 rounded-md bg-red-500 text-white cursor-pointer`}
          />
        </div>
       </div>
        <div className="flex md:hidden items-center gap-3">
       <span className="inline-block md:hidden cursor-pointer leading-3" onClick={()=>setThemeToggle(!themeToggle)}>{themeToggle?<ion-icon name="sunny-outline"></ion-icon>:<ion-icon name="moon-outline"></ion-icon>}</span>
        <OpenCloseBtn
          toggle={toggle}
          setToggle={setToggle}
          icon={<ion-icon name="menu-outline"></ion-icon>}
        />
        </div>
        

        <div
          className={`${
            toggle ? "hidden" : "fixed"
          } transition-transform duration-200 inset-0 dark:bg-gray-900 dark:text-white bg-white z-50 p-5`}
        >
          <div className="flex justify-between items-center">
            <Link to="/" className="flex gap-1 items-center">
              <span className="text-2xl font-semibold text-red-500">your</span>
              <span className="text-2xl font-semibold dark:text-gray-300 text-gray-700">logo</span>
            </Link>
            <OpenCloseBtn
              toggle={toggle}
              setToggle={setToggle}
              icon={<ion-icon name="close-outline"></ion-icon>}
            />
          </div>
          <div >
            <div className="flex flex-col gap-6 items-start px-8 py-8">
              <Links
                path="/"
                linkName="Home"
                toggle={toggle}
                setToggle={setToggle}
              />
              <Links
                path="/about"
                linkName="About"
                toggle={toggle}
                setToggle={setToggle}
              />
              <Links
                path="/contact"
                linkName="Contact"
                toggle={toggle}
                setToggle={setToggle}
              />
              <Links
                path="/github"
                linkName="Github"
                toggle={toggle}
                setToggle={setToggle}
              />
            </div>

            <div className="flex items-center gap-3 text-base px-8 py-6 w-full border-t dark:border-gray-600 ">
              <Links
                path="/login"
                linkName="Login"
                toggle={toggle}
                setToggle={setToggle}
              />
              <Links linkName="Get started" className={`p-3 py-2 rounded-md bg-red-500 text-white cursor-pointer`}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
