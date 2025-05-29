import React, { useState } from "react";
import profileImg from "../Images/AjayAucharPhoto.jpg";
import Button from "../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  const buttonData = [
    {
      name: "View My Work",
      route: "/projects",
      style: ["border-red-900", "bg-red-800"],
    },
    {
      name: "Contact Me",
      route: "/contact",
      style: ["border-black", "bg-black"],
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-screen py-18">
        <div className="flex flex-col justify-center items-center w-1/2">
          <img
            src={profileImg}
            className="w-70 h-70 rounded-full object-cover border-5 border-red-700"
          />
          <h4 className="text-2xl font-bold mt-3 text-black">Ajay Auchar</h4>
          <h4 className="text-xl font-medium mt-3 text-red-800">
            Frontend Developer
          </h4>
          <p className="text-md mt-3 text-black">
            I'm Ajay Auchar, a Frontend Developer with 3+ years of experience
            building responsive, accessible web applications using React.js,
            MUI, and modern UI technologies.
          </p>
          <div className="flex gap-6 mt-8">
            {buttonData.map((elem, ind) => (
              <Button
                key={ind}
                name={elem.name}
                onClick={() => navigate(elem.route)}
                className={`${[...elem.style]}`}
              />
            ))}
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
