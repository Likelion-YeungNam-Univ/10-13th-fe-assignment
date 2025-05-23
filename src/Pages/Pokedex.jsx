import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokedex = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const basicList = response.data.results;

      const detailedList = await Promise.all(
        basicList.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return details.data;
        })
      );
      setPokemonList(detailedList);
    } catch (err) {
      setError("도감 데이터를 불러오는 데 실패했습니다.");
      console.error("데이터 로딩 실패:", error);
      window.alert("도감 데이터 받아오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokedex();
  }, []);

  if (loading) return <div className="text-8xl text-center">로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold mb-4">포켓몬 도감</h2>

      <div className="grid grid-cols-1 space-y-3">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.id}
            className="border p-4 rounded bg-gray-200 flex flex-col items-center"
          >
            <h2 className="text-xl font-bold mb-2 capitalize">
              {pokemon.name}
            </h2>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-20 h-20"
            />

            <ul className="text-m w-full">
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="flex justify-between">
                  <span className="capitalize">{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
