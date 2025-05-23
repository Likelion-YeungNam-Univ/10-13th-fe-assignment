// src/Pages/Random.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Random = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 999) + 1;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      setPokemon(response.data);
    } catch (err) {
      setError("랜덤 포켓몬 로딩 실패");
      console.error("데이터 로딩 실패:", error);
      window.alert("랜덤 포켓몬 받아오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  if (loading) return <div className="text-8xl text-center">로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className="p-4 space-y-8 text-center">
      <h2 className="text-2xl font-bold mb-4">랜덤 포켓몬</h2>

      {pokemon && (
        <div className="border mt-4 p-4 flex flex-col items-center bg-gray-200">
          <h3 className="text-2xl font-bold capitalize">{pokemon.name}</h3>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-50 h-50"
          />
          <p>기본 경험치: {pokemon.base_experience}</p>
        </div>
      )}
      <button
        onClick={fetchRandomPokemon}
        className="bg-black text-white px-4 py-2 rounded"
      >
        다시 뽑기
      </button>
    </div>
  );
};

export default Random;
