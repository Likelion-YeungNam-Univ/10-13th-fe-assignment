import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoOut =
  "https://img.icons8.com/?size=100&id=196&format=png&color=000000";

const LogoIn =
  "https://img.icons8.com/?size=100&id=9817&format=png&color=000000";

const NavBar = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState(false);

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const home = () => navigate("/");
  const player = () => navigate("Player");
  const team = () => navigate("Team");
  const stats = () => navigate("Stats");

  return (
    <div className="flex flex-row p-3 bg-neutral-200">
      <img
        src={logo ? LogoIn : LogoOut}
        onMouseEnter={() => setLogo(true)}
        onMouseLeave={() => setLogo(false)}
        onClick={home}
        className="w-10 h-10 p-1"
        alt="home icon"
      ></img>
      <div className="flex justify-center">
        <input type="text" value={search} onChange={onChange}></input>
      </div>
      <div className="w-full flex justify-end">
        <div onClick={player} className="p-2 hover:font-bold">
          Player
        </div>
        <div onClick={team} className="p-2 hover:font-bold">
          Team
        </div>
      </div>
    </div>
  );
};

export default NavBar;
