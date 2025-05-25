import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex min-h-15 px-5 py-4 bg-gradient-to-r from-blue-200 to-red-200 justify-between overflow-hidden">
      <span className="flex space-x-6">
        <Link to="/" className="font-semibold text-lg hover:scale-110">
          홈
        </Link>
        <Link to="/charts" className="font-semibold text-lg hover:scale-110">
          빌보드 차트
        </Link>
        <Link
          to="/lyric-search"
          className="font-semibold text-lg hover:scale-110"
        >
          가사 검색
        </Link>
      </span>
      <a
        href="https://github.com/Likelion-YeungNam-Univ/10-13th-fe-assignment/tree/feature/hong_jin_seong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-lg font-semibold">10회차 과제 API(1)</h3>
      </a>
    </nav>
  );
};

export default NavBar;
