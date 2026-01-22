import React from "react";

type ButtonType = {
  name: string;
  routeId: string;
  className?: string;
};

const Button = ({ name, routeId, onClick = {} }: ButtonType) => {
  return (
    <button
      className="py-2 max-w-45 min-w-45 border-3 border-cyan-400 bg-sky-700 rounded-lg cursor-pointer text-white font-medium mt-10"
      onClick={onClick}
    >
      <a href={routeId}> {name} </a>
    </button>
  );
};

export default Button;
