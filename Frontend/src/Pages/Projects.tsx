import React from "react";
import ticTacToeGameImg from "../Images/ticTacToeGameImg.png";
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
      name: "Infinite Scroll Gallery",
      detail:
        " A responsive React application that fetches images from the Unsplash API and implements infinite scrolling using the Intersection Observer API. It includes search functionality, image preview modal, and state management using custom hooks and Context API for performance optimization..",
      img: infinityScrollGalleryImg,
      gitUrl: "https://github.com/AjayAuchar/Infinite-scroll-gallery",
      url: "https://infinite-scroll-gallery-9v3m.onrender.com/",
    },
    {
      name: "Static Website",
      detail:
        "Developed a full-stack website with React routing for navigation and a backend form submission system using Node.js, Express, and MongoDB for data persistence.",
      img: madiraWebImg,
      gitUrl:
        "https://github.com/AjayAuchar/pt-international-mandiri-expo-frontend",
      url: "",
    },
    {
      name: "Tic Tac Toe Game",
      detail:
        "A classic Tic-Tac-Toe game built with React.js featuring interactive UI, state management for game logic, and winner detection with reset functionality.",
      img: ticTacToeGameImg,
      gitUrl: "https://gitlab.com/my-websites4815020/tic-tac-toe-game",
      url: "",
    },
  ];

  const openInNewTab = (url) => {
    if (!url) return alert("Invalid URL");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="projects" className="mb-18">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-semibold my-8">
          MY PROJECTS
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-14">
        {projectData?.map((elem) => (
          <Card sx={{ borderRadius: "14px" }} className="rounded-4xl">
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
              <p className="py-3 text-lg font-medium"> {elem.name} </p>
              <p className="text-md mt-3 text-black">{elem.detail}</p>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  openInNewTab(elem.url);
                }}
              >
                <OpenInNewIcon className="text-cyan-500" />
              </Button>
              <Button
                onClick={() => {
                  openInNewTab(elem.gitUrl);
                }}
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
