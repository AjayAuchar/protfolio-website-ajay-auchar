import React from "react";
import profileImg from "../Images/AjayAucharPhoto.jpg";
import InfoCard from "../ReusableComponents/InfoCard";
import Button from "../ReusableComponents/Button";

const About = () => {
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
    <div id="about">
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
              I’m Ajay Auchar, a results-oriented Frontend Developer with over 3
              years of experience in designing and building responsive,
              high-performance web applications. I specialize in developing
              modern, interactive user interfaces using technologies such as
              React.js, JavaScript (ES6+), TypeScript, Redux Toolkit, and
              popular UI libraries like Material UI and Tailwind CSS.
            </p>
            <p className="mt-4 text-md">
              My work focuses on delivering clean, scalable, and maintainable
              code that enhances both user experience and system performance. I
              have hands-on experience with real-time data communication using
              WebSockets, efficient REST API integration, and managing complex
              application states for robust front-end behavior.
            </p>
            <p className="mt-4 text-md">
              Currently based in Navi Mumbai, India, I am actively exploring new
              opportunities that allow me to contribute to innovative teams,
              solve real-world problems through technology, and advance my
              expertise in modern frontend development.
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
            routeId="#contact"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
