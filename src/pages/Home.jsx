import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const toNext = () => navigate("/movieList");
  return (
    <div className="flex flex-col items-center space-y-20">
      <h1 className="text-7xl text-red-500 pt-40 font-bold">Movie Box</h1>
      <button
        onClick={toNext}
        className="border-2 border-red-500 text-red-500 px-4 py-2 text-lg hover:border-white hover:text-white cursor-pointer rounded-2xl"
      >
        영화 보러 가기!!
      </button>
    </div>
  );
};

export default Home;
