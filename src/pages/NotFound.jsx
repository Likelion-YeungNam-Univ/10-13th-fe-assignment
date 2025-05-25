import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-red-200 text-center px-4"
    >
      <h1 className="text-9xl font-extrabold text-purple-400 drop-shadow-lg mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Not Found
      </h2>
      <p className="text-gray-700 mb-6">화면을 클릭하세요.</p>
    </div>
  );
};

export default NotFound;
