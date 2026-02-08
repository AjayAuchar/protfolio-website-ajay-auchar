import React, { useState } from "react";
import profileImg from "../Images/AjayAucharPhoto.jpg";
import Button from "../ReusableComponents/Button";
import DownloadIcon from "@mui/icons-material/Download";

const Home = () => {
  const buttonData = [
    {
      name: "View My Work",
      routeId: "#projects",
      icon: "",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Immediate_Joiner_Frontend_Reactjs_Dev_Ajay_Auchar_Resume.pdf";
    link.download = "Ajay_Auchar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="home" className="flex justify-center items-center py-18">
        <div className="flex flex-col justify-center items-center w-1/2">
          <img
            src={profileImg}
            className="w-70 h-70 rounded-full object-cover border-5 border-cyan-500"
          />
          <h4 className="text-2xl font-bold mt-3 text-black">Ajay Auchar</h4>
          <h4 className="text-xl font-medium mt-3 text-cyan-500">
            Frontend Developer
          </h4>
          <p className="text-md mt-3 text-gray-500">
            I am Ajay Auchar, a dedicated Frontend Developer with over 3+ years
            of professional experience in designing and developing
            high-performance, scalable, and responsive web applications. I
            specialize in leveraging modern technologies such as React.js,
            JavaScript (ES6+), Redux, TypeScript, Tailwind CSS, and Material UI
            to build intuitive and dynamic user interfaces.
          </p>
          <div className="flex gap-6 mt-4">
            {buttonData.map((elem, ind) => (
              <Button key={ind} name={elem.name} routeId={elem.routeId} />
            ))}

            <button
              onClick={handleDownload}
              className="py-2 px-3 border-3 border-cyan-400 bg-sky-700 rounded-lg cursor-pointer text-white font-medium mt-10"
            >
              <DownloadIcon /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
