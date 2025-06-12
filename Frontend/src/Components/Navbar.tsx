import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupsIcon from "@mui/icons-material/Groups";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

const Navbar = () => {
  const navData = [
    {
      name: "Home",
      id: "#home",
      icon: <HomeIcon />,
    },
    {
      name: "About",
      id: "#about",
      icon: <GroupsIcon />,
    },
    {
      name: "Skills",
      id: "#skills",
      icon: <PsychologyIcon />,
    },
    {
      name: "Projects",
      id: "#projects",
      icon: <ImportantDevicesIcon />,
    },
    {
      name: "Contact",
      id: "#contact",
      icon: <PermContactCalendarIcon />,
    },
  ];

  return (
    <div className="flex gap-13 cursor-pointer">
      {navData?.map((navItem, ind) => {
        return (
          <a
            key={ind}
            href={navItem.id}
            className="flex gap-2 text-base font-medium text-red-800"
          >
            {navItem.icon}
            <span className="text-black"> {navItem.name} </span>
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;
