import React from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const linkStyle = "hover:underline hover:text-gray-200";
  return (
    <div className="flex flex-col space-y-4 text-red-500 text-center pt-50">
      <Link to="/action" className={linkStyle}>
        Action 영화 보러 가기
      </Link>
      <Link to="/comedy" className={linkStyle}>
        Comedy 영화 보러 가기
      </Link>
      <Link to="/horror" className={linkStyle}>
        Horror 영화 보러 가기
      </Link>
      <Link to="/romance" className={linkStyle}>
        Romance 영화 보러 가기
      </Link>
      <Link to="/animation" className={linkStyle}>
        Animation 영화 보러 가기
      </Link>
    </div>
  );
};

export default MovieList;
