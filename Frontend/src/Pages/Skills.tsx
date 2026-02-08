import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const skillData = [
  {
    title: "Frontend Development",
    skills: [
      { skill: "React JS", percentage: 100 },
      { skill: "JavaScript", percentage: 95 },
      { skill: "Redux", percentage: 100 },
      { skill: "Redux Toolkit", percentage: 100 },
      { skill: "HTML", percentage: 100 },
    ],
  },
  {
    title: "Styling Libraries",
    skills: [
      { skill: "CSS", percentage: 100 },
      { skill: "Tailwind CSS", percentage: 100 },
      { skill: "Material UI", percentage: 100 },
      { skill: "Bootstrap", percentage: 100 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { skill: "Node.js", percentage: 50 },
      { skill: "Express.js", percentage: 50 },
      { skill: "MongoDB", percentage: 50 },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="mb-18">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-semibold my-8">
          MY SKILLS
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-14">
        {skillData?.map((elem) => (
          <div className="border-2 rounded-md p-6 border-3 border-cyan-500 w-full">
            <h4 className="pb-3 text-lg font-medium text-black font-semibold">
              {" "}
              {elem.title}{" "}
            </h4>
            {elem.skills.map((item) => (
              <>
                <div className="py-4 font-medium"> {item.skill} </div>
                <ProgressBar
                  completed={item.percentage}
                  bgColor="#0fabc6ff"
                  height="22px"
                />
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
