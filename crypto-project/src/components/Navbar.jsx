import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/" className="flex items-center">
        <img
          className="w-11 mr-[-9px]"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Eo_circle_blue_letter-c.svg"
        />
        <h1 className="text-2xl ml-5 text-[#008ae6] font-sans">Basecoin</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
