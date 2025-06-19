import React from "react";
import ticTacToeGameImg from "../Images/ticTacToeGameImg.png";
import protfolioWebsiteImg from "../Images/protfolioWebsiteImg.png";
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
      name: "Tic Tac Toe Game",
      detail:
        " A full-featured dashboard for e-commerce stores with analytics, product management, and order processing",
      img: ticTacToeGameImg,
      gitUrl: "https://gitlab.com/my-websites4815020/tic-tac-toe-game",
      url: "",
    },
    {
      name: "Portfolio Website",
      detail:
        " A full-featured dashboard for e-commerce stores with analytics, product management, and order processing",
      img: protfolioWebsiteImg,
      gitUrl: "https://github.com/AjayAuchar/protfolio-website-ajay-auchar",
      url: "https://protfolio-website-ajay-auchar.onrender.com",
    },
    {
      name: "Static Website",
      detail:
        " A full-featured dashboard for e-commerce stores with analytics, product management, and order processing",
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
    <div id="projects" className="mb-18">
      <div className="flex items-center justify-center">
        <span className="text-xl font-medium text-black font-extrabold my-8">
          MY PROJECTS
        </span>
      </div>
      <div className="grid grid-cols-3 gap-10 px-14">
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
                <OpenInNewIcon className="text-red-800" />
              </Button>
              <Button
                onClick={() => {
                  openInNewTab(elem.gitUrl);
                }}
              >
                <GitHubIcon className="text-red-800" />
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
