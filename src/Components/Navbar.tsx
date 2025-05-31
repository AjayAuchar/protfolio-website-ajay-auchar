import React from "react";

const Navbar = () => {
  const navData = [
    {
      name: "Home",
      id: "#home",
    },
    {
      name: "About",
      id: "#about",
    },
    {
      name: "Skills",
      id: "#skills",
    },
    {
      name: "Projects",
      id: "#projects",
    },
    {
      name: "Contact",
      id: "#contact",
    },
  ];

  return (
    <div className="flex gap-12 cursor-pointer">
      {navData?.map((navItem, ind) => {
        return (
          <a
            key={ind}
            href={navItem.id}
            className="text-base font-medium text-red-800"
          >
            {navItem.name}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
