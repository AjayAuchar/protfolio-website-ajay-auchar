import React from "react";

const InfoCard = ({ data }) => {
  return (
    <div className="border-3 border-black-800 rounded-md w-98 max-w-min-60 py-3 px-6 text-black">
      <span className="font-bold text-red-800"> {data.title} : </span> <br />
      <span className="font-medium"> {data.detail} </span>
    </div>
  );
};

export default InfoCard;
