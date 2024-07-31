import React from "react";

const Card = ({text,desc, img,classNamee }) => {
  return (
    <div className={`${classNamee} h-fit group rounded-2xl p-[1px] hover:hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200`}>
      <div
        className={
          "rounded-2xl flex flex-col items-center border px-6 pt-6 pb-8 bg-white group-hover:hover:hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100"
        }
      >
        <h1 className={`pt-3 pb-4 lg:py-8 font-semibold text-2xl text-gray-700`}>
          {text}
        </h1>
        {desc&&<p className="text-center text-xl pb-6 text-gray-600 font-normal">{desc}</p>}
        <img className="w-full h-full object-cover" src={img}alt="" />
      </div>
    </div>
  );
};

export default Card;
