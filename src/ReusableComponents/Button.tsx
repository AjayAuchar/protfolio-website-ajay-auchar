import React from "react";

type ButtonType = {
  name: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ name, onClick, className }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 w-40 border-3 rounded-lg cursor-pointer text-white font-medium ${className?.replace(
        /,/g,
        " "
      )}`}
    >
      {name}
    </button>
  );
};

export default Button;
