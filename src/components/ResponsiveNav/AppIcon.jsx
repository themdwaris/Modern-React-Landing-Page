import React from "react";

const AppIcon = ({img,text}) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center rounded-xl border py-3 px-4 md:px-6 ">
      <img className="w-14 h-14 md:w-16 md:h-16" src={img} alt="" />
      <span className="font-medium text-gray-700">{text}</span>
    </div>
  );
};

export default AppIcon;
