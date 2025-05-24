import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-green-100">
      <Link to="/home" className="mr-4 text-green-900">
        Home
      </Link>
      <Link to="/information" className="mr-4 text-green-900">
        영화
      </Link>
    </nav>
  );
};

export default Navbar;
