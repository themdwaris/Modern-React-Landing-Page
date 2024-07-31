import React from "react";
import Clicks from "./Clicks";
import Button from "./Button";
import AppIcon from "./AppIcon";
import StepByStep from "./StepByStep";
import img1 from "/asset 66.svg";
import Card from "./Card";
import TickCompo from "./TickCompo";
import Profile from "./Profile";
import FeatureCard from "./FeatureCard";
import FAQs from "./FAQs";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-50 via-orange-50 to-transparent px-5 py-10 lg:py-20">
      <div className="w-full flex flex-col items-start md:items-center pt-14">
        <button className="mb-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#fff6cc] text-[#713f12] font-medium border border-orange-200 transition-all transform shadow-2xl shadow-orange-400/70 hover:translate-y-[-8px] group">
          <span className="h-[8px] w-[8px] rounded-full bg-orange-400"></span>
          v0.22.2
          <span className="text-orange-400 font-medium text-lg leading-3 group-hover:translate-x-[8px] transition-all">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
        <div className="hidden md:flex justify-center gap-7 mb-8">
          <Clicks
            icon={<ion-icon name="code-slash-outline"></ion-icon>}
            text={`Code optional`}
          />
          <Clicks
            icon={<ion-icon name="hand-right-outline"></ion-icon>}
            text={`Drag & drop builder`}
          />
          <Clicks
            icon={<ion-icon name="desktop-outline"></ion-icon>}
            text={`Windows, Mac, Linux`}
          />
        </div>
        <div className="max-w-3xl mx-auto md:text-center text-left">
          <h1 className="text-5xl md:text-7xl font-bold">
            Web app to desktop app in minutes
          </h1>
          <p className="mt-8 text-gray-600 text-[20px] md:text-2xl">
            Take your web app codebase and transform it into a cross platform
            desktop app with native functionality.
          </p>
          <div className="w-full mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
            <Button
              text="Download Now"
              className={`bg-blue-800 text-white cursor-pointer px-8 hover:opacity-85 group`}
              icon={<ion-icon name="arrow-down-outline"></ion-icon>}
            />
            <Button
              text="Read docs"
              className={`bg-white/90 text-black cursor-pointer border-2 px-7 shadow-2xl shadow-blue-300/75 hover:opacity-75`}
            />
          </div>

          <div className="pb-10 pt-20 flex items-center justify-center gap-3 text-lg">
            <span className="transform rotate-[-90deg] translate-y-[6px]">
              <ion-icon name="return-up-back-outline"></ion-icon>
            </span>
            <span className="font-semibold text-lg text-gray-800">
              APPS POWERED BY TODESKTOP
            </span>
            <span className="transform rotate-[90deg] translate-y-[6px]">
              <ion-icon name="return-up-forward-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 my-10 flex-wrap">
        <AppIcon img="./asset 3.png" text="Unbounce" />
        <AppIcon img="./asset 4.png" text="Unbounce" />
        <AppIcon img="./asset 5.png" text="Unbounce" />
        <AppIcon img="./asset 6.png" text="Unbounce" />
        <AppIcon img="./asset 7.png" text="Unbounce" />
        <AppIcon img="./asset 8.png" text="Unbounce" />
        <AppIcon img="./asset 9.png" text="Unbounce" />
        <AppIcon img="./asset 10.png" text="Unbounce" />
        <AppIcon img="./asset 11.png" text="Unbounce" />
        <AppIcon img="./asset 12.png" text="Unbounce" />
        <AppIcon img="./asset 13.png" text="Unbounce" />
        <AppIcon img="./asset 14.png" text="Unbounce" />
        <AppIcon img="./asset 15.png" text="Unbounce" />
        <AppIcon img="./asset 16.png" text="Unbounce" />
        <AppIcon img="./asset 17.png" text="Unbounce" />
        <AppIcon img="./asset 18.png" text="Unbounce" />
        <AppIcon img="./asset 19.png" text="Unbounce" />
        <AppIcon img="./asset 20.png" text="Unbounce" />
      </div>

      <div className="max-w-7xl mx-auto my-8">
        <h1 className="font-semibold text-3xl lg:text-5xl py-10 lg:py-12 text-gray-800">
          How it works
        </h1>
        <div className="flex flex-col gap-y-12">
          <StepByStep
            step="Step 1"
            title="Bootstrap straight from your web app"
            desc="Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code."
            img={img1}
          />
          <StepByStep
            step="Step 2"
            title="Add desktop code to customise your web app"
            desc="No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality."
            img={img1}
          />
          <StepByStep
            step="Step 3"
            title="Publish "
            desc="One-click will publish your desktop app to your customers and give you a download link to put on your website."
            img={img1}
          />
        </div>

        <h1 className="font-semibold text-3xl lg:text-5xl py-10 lg:py-12 text-gray-800 max-w-md leading-snug">
          ToDesktop handles the details
        </h1>

        <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-3 lg:gap-y-4 lg:gap-x-4 justify-center">
          <Card
            text="Native Notifications"
            img="/asset 37.png"
            // classNamee="row-start-1 row-end-3"
          />
          <Card
            text="Auto Updates"
            desc="We'll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."
            img="/asset 38.png"
            // classNamee="row-start-1 row-end-4"
            classNamee="row-span-2"
          />
          <Card
            text="Plugins"
            img="/asset 39.png"
            // classNamee="row-start-1 row-end-3"
          />
          <Card
            text="Access to Native APIs"
            desc="ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date."
            img="/asset 40.png"
            // classNamee="row-start-3 row-end-6"
            classNamee="row-span-2"
          />

          <Card
            text="Native Installers"
            desc="We even provide a magic link which will detect your users operating system & download the most up to date version of your app."
            img="/asset 43.png"
            // classNamee="row-start-3 row-end-6"
            classNamee="row-span-2"
          />
          <Card
            text="Customizable look and feel"
            img="/asset 41.png"
            // classNamee="row-start-4 row-end-6"
          />
        </div>

        <h1 className="font-semibold text-3xl lg:text-5xl mt-14 mb-8 lg:py-12 text-gray-800 max-w-md leading-snug">
          Customer stories
        </h1>

        <div className="flex flex-col lg:flex-row border lg:justify-between rounded-xl gap-8 lg:gap-16 p-8 pr-0 lg:pl-10 pb-0 lg:pt-12">
          <div className="flex-1 flex-col gap-5 justify-center pr-4 lg:pr-0">
            <img className="w-30 object-cover" src="/asset 44.svg" alt="" />

            <p className="my-10 font-semibold text-2xl text-gray-700">
              ClickUp used ToDesktop to get their desktop app in front of
              customers in days instead of months.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <TickCompo
                text="Chromless UI"
                className="px-1 py-[2px] rounded-xl bg-yellow-100 text-[16px] font-semibold text-orange-800 cursor-pointer"
              />
              <TickCompo
                text="Native spellcheck"
                className="px-1 py-[2px] rounded-xl bg-yellow-100 text-[16px] font-semibold text-orange-800 cursor-pointer"
              />
              <TickCompo
                text="Task time in menubar"
                className="px-1 py-[2px] rounded-xl bg-yellow-100 text-[16px] font-semibold text-orange-800 cursor-pointer"
              />
              <TickCompo
                text="Notification count in the dock"
                className="px-1 py-[2px] rounded-xl bg-yellow-100 text-[16px] font-semibold text-orange-800 cursor-pointer"
              />
              <TickCompo
                text="Global hotkey to create task"
                className="px-1 py-[2px] rounded-xl bg-yellow-100 text-[16px] font-semibold text-orange-800 cursor-pointer"
              />
            </div>
            <p className=" text-gray-600 font-normal text-xl py-8">
              “ToDesktop provided us with a polished desktop app in no time.
              Their expert team guided us through a smooth migration from our
              outdated legacy desktop app, enabling us to deliver new and
              improved features to our customers within days.”
            </p>

            <Profile
              avatar="/asset 45.jpeg"
              name="Zeb Evans"
              title="Founder & CEO, ClickUp"
            />
          </div>
          <div className="flex-1 self-end">
            <img
              className="w-full object-cover rounded-br-xl"
              src="/asset 46.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:items-center justify-center mt-8 lg:mt-16">
          <FeatureCard
            icon={<ion-icon name="code-slash-outline"></ion-icon>}
            head="Native APIs"
            para="“What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience. ”"
            company="/asset 47.png"
            avatar="/asset 48.jpeg"
            name="Rick Pastoor"
            title="Rise"
            color="text-purple-600"
            bgcolor="bg-purple-300"
          />

          <FeatureCard
            icon={<ion-icon name="infinite-outline"></ion-icon>}
            head="Code optional"
            para="“It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries. ” ”"
            company="/asset 49.png"
            avatar="/asset 50.jpeg"
            name="Rick Pastoor"
            title="Rise"
            color="text-yellow-600"
            bgcolor="bg-yellow-300"
          />

          <FeatureCard
            icon={<ion-icon name="color-wand-outline"></ion-icon>}
            head="Cleaner, less cluttered UI"
            para="“Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. It was a no-brainer for us to use ToDesktop. ”"
            company="/asset 51.png"
            avatar="/asset 52.jpeg"
            name="Max Musing"
            title="Basedash"
            color="text-green-600"
            bgcolor="bg-green-300"
          />
        </div>

        <h1 className="font-semibold text-3xl lg:text-5xl mt-10 lg:mt-14 mb-8 lg:py-12 text-gray-800 max-w-md leading-snug">
          FAQs
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-4">
          <FAQs question="Is ToDesktop For Me?" />
          <FAQs question="Can I try ToDesktop without buying?" />
          <FAQs question="Will my app work offline?" />
          <FAQs question="Which version of Electron/Chromium is used?" />
          <FAQs question="Do you collect or store data about my customers?" />
          <FAQs question="What support do you offer?" />
          <FAQs question="Does ToDesktop work with sites built with ___?" />
          <FAQs question="How does my app get updated?" />
        </div>

        <p className="my-8 lg:my-10 text-[16px] lg:text-xl text-gray-600">
          More questions? Visit our <span className="underline">docs</span>. Or
          <span className="underline">send us a message.</span>.
        </p>

        <footer className="p-8 border rounded-2xl flex flex-col-reverse gap-10 lg:gap-5 lg:flex-row justify-center items-center lg:justify-between">
          <Logo />
          <div className="flex gap-4 items-center text-[17px] cursor-pointer">
            <span>Documentaion</span>
            <span>
              <ion-icon name="logo-github"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
          </div>
        </footer>
        <div className="my-12 ">
          <div className="flex items-center justify-center gap-4">
            <p className="text-gray-700">A Y Combinator company.</p>
            <img className="w-5" src="/asset 7.png" alt="" />
          </div>
          <p className="text-gray-500 text-center py-4">
            © 2024 ToDesktop, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
