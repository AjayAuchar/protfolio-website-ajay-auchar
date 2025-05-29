import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
// const skillData = [
//   {
//     title: "Frontend Development",
//     skills: [
//       { skill: "React js", percentage: 90 },
//       { skill: "Javascript", percentage: 80 },
//       { skill: "Redux", percentage: 70 },
//       { skill: "HTML/CSS", percentage: 60 },
//       { skill: "Redux Saga", percentage: 60 },
//     ],
//   },
//   {
//     title: "Frontend Development",
//     skills: [
//       { skill: "Tailwind CSS", percentage: 90 },
//       { skill: "Material UI", percentage: 85 },
//       { skill: "Boostrap", percentage: 95 },
//       { skill: "Style Component", percentage: 60 },
//     ],
//   },
//   {
//     title: "Frontend Development",
//     skills: [
//       { skill: "React js", percentage: 90 },
//       { skill: "Javascript", percentage: 80 },
//       { skill: "Redux", percentage: 70 },
//       { skill: "HTML/CSS", percentage: 60 },
//     ],
//   },
// ];

const skillData = [
  {
    title: "Frontend Development",
    skills: [
      { skill: "React JS", percentage: 90 },
      { skill: "JavaScript", percentage: 85 },
      { skill: "Redux", percentage: 95 },
      { skill: "Redux Saga", percentage: 85 },
      { skill: "HTML", percentage: 95 },
    ],
  },
  {
    title: "Styling Libraries",
    skills: [
      { skill: "CSS", percentage: 95 },
      { skill: "Tailwind CSS", percentage: 85 },
      { skill: "Material UI", percentage: 85 },
      { skill: "Bootstrap", percentage: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { skill: "Node.js", percentage: 70 },
      { skill: "Express.js", percentage: 70 },
      { skill: "MongoDB", percentage: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-screen mb-18">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-extrabold my-8">
          MY SKILLS
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6 px-14">
        {skillData?.map((elem) => (
          <div className="border-2 rounded-md p-6 border-3 border-black-700">
            <h4 className="pb-3 text-lg font-medium"> {elem.title} </h4>
            {elem.skills.map((item) => (
              <>
                <div className="py-4 font-medium"> {item.skill} </div>
                <ProgressBar completed={item.percentage} bgColor="#9F0712" />
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
