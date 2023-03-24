import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Cryptobase</h1>
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
