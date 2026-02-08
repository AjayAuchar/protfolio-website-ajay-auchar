import React from "react";
import linkedInCloneImg from "../Images/linkedInCloneImg.png";
import infinityScrollGalleryImg from "../Images/infinityScrollGalleryImg.png";
import madiraWebImg from "../Images/madiraWebImg.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const projectData = [
    {
      name: "Linked Clone Using MERN Stack",
      detail:
        "I built a LinkedIn clone using the MERN stack where users can register, create profiles, and interact through posts, likes, and comments. I designed scalable REST APIs with Express.js and MongoDB, implemented secure JWT-based authentication and authorization, and deployed the full-stack application on Render with a production-ready setup. I developed a responsive and modern UI using React.js and optimized performance with reusable components, state management, and API caching.",
      img: linkedInCloneImg,
      gitUrl: "https://github.com/burakorkmez/linkedin-clone",
      url: "https://linkedin-clone-nbvs.onrender.com/",
    },
    {
      name: "Infinite Scroll Gallery",
      detail:
        "Infinity Scroll Gallery is a responsive React application that fetches high-quality images from the Unsplash API and delivers a smooth infinite scrolling experience using the Intersection Observer API. The project includes real-time image search, an interactive image preview modal, and efficient state management implemented with custom React hooks and the Context API to optimize performance and minimize unnecessary re-renders. The application is designed with a clean, scalable architecture and is fully optimized for desktop and mobile devices.",
      img: infinityScrollGalleryImg,
      gitUrl: "https://github.com/AjayAuchar/Infinite-scroll-gallery",
      url: "https://infinite-scroll-gallery-9v3m.onrender.com/",
    },
    {
      name: "PT International Mandiri Expo",
      detail:
        "Full-Stack Web Application developed using React with client-side routing to enable seamless navigation across pages. The application includes a robust backend form submission system built with Node.js and Express, with MongoDB used for secure and scalable data persistence. The project follows a clean full-stack architecture, ensuring efficient data flow, validation, and maintainability.",
      img: madiraWebImg,
      gitUrl:
        "https://github.com/AjayAuchar/pt-international-mandiri-expo-frontend",
      url: "",
    },
  ];

  const openInNewTab = (url) => {
    if (!url) return alert("Invalid URL");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="projects" className="mb-18 bg-gray-100 py-8">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-semibold pb-6">
          MY PROJECTS
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-14">
        {projectData?.map((elem) => (
          <Card sx={{ borderRadius: "14px" }} className="rounded-4xl relative">
            <CardMedia
              sx={{
                height: 300,
                objectFit: "contain",
                width: "100%",
              }}
              image={elem.img}
              title={elem.name}
            />
            <CardContent>
              <p className="text-lg font-medium"> {elem.name} </p>
              <p className="text-md font-light mt-2 mb-12 text-gray-500">
                {elem.detail}
              </p>
            </CardContent>
            <CardActions className="absolute bottom-0">
              <Button
                onClick={() => {
                  openInNewTab(elem.url);
                }}
                sx={{ padding: "10px", minWidth: 0 }}
              >
                <OpenInNewIcon className="text-cyan-500" />
              </Button>
              <Button
                onClick={() => {
                  openInNewTab(elem.gitUrl);
                }}
                sx={{ padding: "10px", minWidth: 0 }}
              >
                <GitHubIcon className="text-cyan-500" />
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
