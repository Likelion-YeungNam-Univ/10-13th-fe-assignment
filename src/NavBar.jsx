import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="p-4 bg-black text-white flex gap-6">
      <button className="mr-8" onClick={() => navigate(-1)}>
        ←
      </button>
      <button className="mr-8" onClick={() => navigate("/home")}>
        홈
      </button>
      <button className="mr-8" onClick={() => navigate("/pokedex")}>
        포켓몬 도감
      </button>
      <button className="mr-8" onClick={() => navigate("/search")}>
        포켓몬 검색
      </button>
      <button className="mr-8" onClick={() => navigate("/random")}>
        랜덤 포켓몬
      </button>
    </nav>
  );
};

export default NavBar;
