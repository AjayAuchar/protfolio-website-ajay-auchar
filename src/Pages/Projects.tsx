import React from "react";
import websiteImg1 from "../Images/websiteImg1.jpg";
import websiteImg2 from "../Images/websiteImg2.jpg";

const Projects = () => {
  const projectData = [
    {
      name: "Portfolio Website",
      detail:
        " A full-featured dashboard for e-commerce stores with analytics, product management, and order processing",
      img: websiteImg1,
    },
    {
      name: "Portfolio Website",
      detail:
        " A full-featured dashboard for e-commerce stores with analytics, product management, and order processing",
      img: websiteImg2,
    },
    {
      name: "Portfolio Website",
      detail:
        " A full-featured dashboard for e-commerce stores with analytics, product management, and order processing",
      img: websiteImg1,
    },
  ];

  return (
    <div id="projects" className="mb-18">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-extrabold my-8">
          MY PROJECTS
        </span>
      </div>
      <div className="grid grid-cols-3 gap-10 px-14">
        {projectData?.map((elem) => (
          <div className="border-2 rounded-md p-6 border-3 border-black-700">
            <img src={elem.img} className="h-62 w-full" />
            <div>
              <p className="py-3 text-lg font-medium"> {elem.name} </p>
              <p className="text-md mt-3 text-black">{elem.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
