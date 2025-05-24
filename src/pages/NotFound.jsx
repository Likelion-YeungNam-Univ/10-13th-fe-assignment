import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-l from-blue-600 to-red-500">
      <h1 className="text-8xl text-white font-bold">404</h1>
      <p className="p-3 text-3xl text-white">Not Found</p>
      <p className="text-l text-white">
        The resource requested could not be found on this server
      </p>
    </div>
  );
};

export default NotFound;
