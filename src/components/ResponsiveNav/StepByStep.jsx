import React from "react";
import TickCompo from "./TickCompo";


const StepByStep = ({ step, title, desc,img}) => {
  return (
    <div className="flex flex-col lg:flex-row border rounded-xl gap-8 lg:gap-16 p-8 lg:px-10 lg:py-12">
      <div className="flex-1 flex-col gap-5 justify-center ">
        <span className="px-3 py-1 rounded-lg bg-yellow-100 text-orange-900 font-medium w-fit">
          {step}
        </span>
        <h1 className="font-semibold text-3xl lg:text-[40px] my-8 leading-snug text-gray-800">
          {title}
        </h1>
        <p className="mb-8 font-normal text-xl text-gray-700">{desc}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <TickCompo
              className="underline cursor-pointer"
              text="Multiple windows"
            />
            <TickCompo
              className="underline cursor-pointer"
              text="Multiple windows"
            />
            <TickCompo text="Multiple windows" />
          </div>
          <div>
            <TickCompo
              className="underline cursor-pointer"
              text="Multiple windows"
            />
            <TickCompo
              className="underline cursor-pointer"
              text="Multiple windows"
            />
            <TickCompo text="Multiple windows" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="w-full object-cover"src={img} alt="" />
      </div>
    </div>
  );
};

export default StepByStep;
