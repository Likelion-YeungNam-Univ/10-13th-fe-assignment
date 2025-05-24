import React, { useState, useEffect } from "react";
import { BalldontlieAPI } from "@balldontlie/sdk";

const API_KEY = import.meta.env.VITE_API_KEY;
const api = new BalldontlieAPI({ apiKey: API_KEY });

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await api.nba.getTeams();
        setTeams(response.data);
      } catch (error) {
        console.error("오류 발생", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <div> 팀 로딩 중...</div>;

  return (
    <div className="p-4">
      <h1 className="flex justify-center w-60 h-11 text-3xl font-bold border-2 rounded-2xl mb-2">
        All NBA Teams
      </h1>
      <ul className="">
        {teams.map((team) => (
          <li
            key={team.id}
            className="flex flex-row justify-between border-2 rounded-xl pl-2 pr-2 text-xl font-bold"
          >
            {team.full_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
