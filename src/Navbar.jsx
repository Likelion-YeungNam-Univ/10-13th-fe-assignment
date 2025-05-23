import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="space-x-16 px-10 py-5 border-b-2">
      <Link to="/home">Home</Link>
      <Link to="/action">Action</Link>
      <Link to="/comedy">Comedy</Link>
      <Link to="/horror">Horror</Link>
      <Link to="/romance">Romance</Link>
      <Link to="/animation">Animation</Link>
    </nav>
  );
};

export default Navbar;
