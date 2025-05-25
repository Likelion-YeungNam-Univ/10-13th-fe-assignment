import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=200"
        );
        setPokemonData(response.data.results);
      } catch (error) {
        console.error("데이터 요청 실패:", error);
      }
    };

    getPokemon();
  }, []);

  const getPokemonId = (url) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Pokédex - 포켓몬 도감
      </h2>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {pokemonData.map((pokemon, index) => (
          <Link to={`/pokemon/${getPokemonId(pokemon.url)}`} key={index}>
            <div className="bg-white p-4 rounded-xl shadow-md transition-transform hover:scale-105 text-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                  pokemon.url
                )}.png`}
                className="w-25 h-25 mx-auto mb-2"
              />
              <p className="text-lg font-semibold">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
