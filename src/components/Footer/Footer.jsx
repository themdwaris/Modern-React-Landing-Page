import React from "react";
import { Link, NavLink } from "react-router-dom";
import Links from "../Header/Links";

const Footer = () => {
  return (
    <>
      <div className="px-8 md:px-0 w-full border-y dark:border-gray-700 dark:bg-gray-900 bg-white dark:text-white">
        <div className="max-w-7xl mx-auto py-8 md:gap-0 flex flex-col md:flex-row gap-8  items-center md:justify-between">
          <Link className="flex gap-1 items-center">
            <span className="text-2xl font-semibold text-red-500">your</span>
            <span className="text-2xl font-semibold dark:text-gray-300 text-gray-700">logo</span>
          </Link>
          <div className="flex gap-16 items-center ">
            <ul>
              <li className="text-[14px] py-1 font-semibold dark:text-white text-gray-700">
                RESOURCES
              </li>
              <li className="underline">
              <Links path="/"linkName="Home" />
              </li>
              <li className="underline">
              <Links path="/about"linkName="About" />
              </li>
            </ul>
            <ul>
              <li className="text-[14px] py-1 font-semibold dark:text-white text-gray-700">
                FOLLOW US
              </li>
              <li>Github</li>
              <li>Discord</li>
            </ul>
            <ul>
              <li className="text-[14px] py-1 font-semibold dark:text-white text-gray-700">
                LEGAL
              </li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dark:dark:text-white dark:bg-gray-900 md:py-10 px-8 md:px-0 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-0 pt-5 text-gray-600">
        <p>Copyright &copy; 2024 | All Rights Reserved</p>
        <div className="flex items-center gap-5 justify-center text-balance text-gray-600 cursor-pointer text-xl">
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-discord"></ion-icon>
        </div>
      </div>
    </>
  );
};

export default Footer;
