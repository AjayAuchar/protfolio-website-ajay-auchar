import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navData = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Skills",
      route: "/skills",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex gap-12 cursor-pointer">
      {navData?.map((navItem, ind) => {
        return (
          <span
            key={ind}
            className="text-base font-medium text-red-800"
            onClick={() => handleRoute(navItem.route)}
          >
            {navItem.name}
          </span>
        );
      })}
    </div>
  );
};

export default Navbar;
