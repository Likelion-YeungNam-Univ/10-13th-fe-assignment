import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
