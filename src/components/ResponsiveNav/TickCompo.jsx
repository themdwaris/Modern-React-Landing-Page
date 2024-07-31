import React from "react";

const TickCompo = ({className ,text}) => {
  return (
    <span className={`flex items-center justify-center w-fit gap-x-2 ${className}`}>
      
      <span className="text-xl leading-3"><ion-icon name="checkmark-outline"></ion-icon></span>
      <span className={`font-normal text-gray-700 py-2 text-xl ${className}`}>{text}</span>
   
    </span>
  );
};

export default TickCompo;
