import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = "hover:text-white";
  return (
    <nav className="space-x-16 px-10 py-5 border-b-2 text-red-500 font-bold">
      <Link to="/home" className={linkStyle}>
        Home
      </Link>
      <Link to="/action" className={linkStyle}>
        Action
      </Link>
      <Link to="/comedy" className={linkStyle}>
        Comedy
      </Link>
      <Link to="/horror" className={linkStyle}>
        Horror
      </Link>
      <Link to="/romance" className={linkStyle}>
        Romance
      </Link>
      <Link to="/animation" className={linkStyle}>
        Animation
      </Link>
    </nav>
  );
};

export default Navbar;
