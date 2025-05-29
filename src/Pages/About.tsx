import React from "react";
import profileImg from "../Images/AjayAucharPhoto.jpg";
import InfoCard from "../ReusableComponents/InfoCard";
import Button from "../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const InfoDetail = [
    { title: "Name", detail: "Ajay Auchar" },
    { title: "Email", detail: "ajayauchar02@gmail.com" },
    { title: "Number", detail: "+91 8291626294" },
    {
      title: "Linked Profile",
      detail: "https://www.linkedin.com/in/ajay-auchar-6ab080223/",
    },
  ];

  return (
    <div className="w-screen">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-extrabold my-8">
          ABOUT ME
        </span>
      </div>
      <div className="flex px-10 pb-18">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={profileImg}
            className="w-80 h-80 rounded-full object-cover border-5 border-red-700"
          />
        </div>
        <div className="flex-2 flex flex-col">
          <>
            <h4 className="text-xl font-medium mt-3 text-red-800 mb-4">
              Frontend Developer{" "}
            </h4>
            <p className="text-md">
              I'm a passionate web developer with 5 years of experience creating
              beautiful, functional, and user-centered digital experiences. I am
              always looking to learn new technologies and improve my skills.
            </p>
            <p className="mt-2 text-md">
              With a strong foundation in front-end development and a keen eye
              for design, I create websites that not only look great but also
              provide exceptional user experiences. I'm dedicated to writing
              clean, optimized code and using modern development practices.
            </p>
          </>
          <div className="flex gap-10 flex-wrap mt-8">
            {InfoDetail?.map((data, ind) => (
              <InfoCard key={ind} data={data} />
            ))}
          </div>
          <Button
            name="Let's Connect"
            className={`${["border-red-900", "bg-red-800", "mt-12"]}`}
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
