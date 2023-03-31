import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/" className="flex items-center">
        <img className="w-[155px] ml-[15px]" alt="logo" src={logo} />
      </Link>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
