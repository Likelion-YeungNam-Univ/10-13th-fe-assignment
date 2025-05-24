import React, { useState, useEffect } from "react";
import { BalldontlieAPI } from "@balldontlie/sdk";

const API_KEY = import.meta.env.VITE_API_KEY;
const api = new BalldontlieAPI({ apiKey: API_KEY });

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = new BalldontlieAPI({ apiKey: API_KEY });

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
      <h1 className="text-3xl font-bold">All NBA Teams</h1>
      <ul>
        {" "}
        {teams.map((team) => (
          <li key={team.id} className="text-xl font-semibold">
            {team.full_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
