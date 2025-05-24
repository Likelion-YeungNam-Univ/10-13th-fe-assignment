import React, { useEffect, useState } from "react";
import { BalldontlieAPI } from "@balldontlie/sdk";

const API_KEY = import.meta.env.VITE_API_KEY;
const api = new BalldontlieAPI({ apiKey: API_KEY });

const Player = () => {
  const [players, setPlayers] = useState([]);
  const [clickedPlayer, setClickedPlayer] = useState(null);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [loadingPlayerDetail, setLoadingPlayerDetail] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await api.nba.getPlayers({ page: 1, per_page: 25 });
        setPlayers(response.data);
      } catch (err) {
        setError("목록을 불러오는 중 오류 발생", err);
      } finally {
        setLoadingPlayers(false);
      }
    };
    fetchPlayers();
  }, []);

  const handleClickedPlayer = async (playerId) => {
    setLoadingPlayerDetail(true);
    setError(null);
    try {
      const response = await api.nba.getPlayer(playerId);
      setClickedPlayer(reponse);
    } catch (err) {
      setError("선수 정보를 불러오는 중 오류 발생");
    } finally {
      setLoadingPlayerDetail(false);
    }
  };

  const handleBackToList = () => {
    setClickedPlayer(null);
  };

  if (loadingPlayers) return <div>선수 로딩 중...</div>;
  if (error) return <div>{error}</div>;

  if (clickedPlayer) {
    return (
      <div>
        <button onClick={handleBackToList}>← 목록으로 돌아가기</button>
        {loadingPlayerDetail ? (
          <p>선수 정보 로딩 중...</p>
        ) : (
          <div>
            <h2>
              {clickedPlayer.first_name} {clickedPlayer.last_name}
            </h2>
            <p>
              <strong>소속 팀: </strong> {clickedPlayer.team.full_name}
            </p>
            <p>
              <strong>포지션: </strong> {clickedPlayer.position}
            </p>
            <p>
              <strong>등 번호: </strong> {clickedPlayer.jersey_number}
            </p>
            <p>
              <strong>키: </strong> {clickedPlayer.height}
            </p>
            <p>
              <strong>몸무게: </strong> {clickedPlayer.weight}
            </p>
          </div>
        )}
        ;
      </div>
    );
  }

  return (
    <div>
      <h1>All NBA Player</h1>
      <ul>
        {" "}
        {players.map((player) => (
          <li
            key={player.id}
            className="text-xl font-bold"
            onClick={() => handleClickedPlayer(player.id)}
          >
            {player.first_name} {player.last_name} ({player.team.abbreviation})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
