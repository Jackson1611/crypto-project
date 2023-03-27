import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/" className="flex items-center">
        <img
          className="w-11 mr-[-9px]"
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Eo_circle_blue_letter-c.svg"
        />
        <h1 className="text-2xl ml-5 text-blue-500 ">Basecoin</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
