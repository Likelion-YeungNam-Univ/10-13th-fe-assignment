import React, { useEffect, useState } from "react";
import { BalldontlieAPI } from "@balldontlie/sdk";

const API_KEY = import.meta.env.VITE_API_KEY;
const api = new BalldontlieAPI({ apiKey: API_KEY });

const Player = () => {
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await api.nba.getPlayers({ page: 1, per_page: 25 });
        setPlayers(response.data);
      } catch (err) {
        setError("목록을 불러오는 중 오류 발생");
        console.log(err);
      } finally {
        setLoadingPlayers(false);
      }
    };
    fetchPlayers();
  }, []);

  if (loadingPlayers) return <div>선수 로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="flex justify-center w-60 h-11 text-3xl font-bold border-2 rounded-2xl mb-2">
        All NBA Player
      </h1>
      <ul>
        {players.map((player) => (
          <li
            key={player.id}
            className="flex flex-row justify-between border-2 rounded-xl pl-2 pr-2 text-xl font-bold"
          >
            <div>
              {player.first_name} {player.last_name}
            </div>
            <div>({player.team.abbreviation})</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
