import React from "react";

const Button = ({ text, className, icon }) => {
  return (
    <button
      className={`"text-center outline-none py-3 rounded-lg text-lg font-medium " ${className}`}
    >
      {text}
      <span className="transition-all text-2xl leading-3 align-middle group-hover:scale-125 px-2">
        {icon}
      </span>
    </button>
  );
};

export default Button;
