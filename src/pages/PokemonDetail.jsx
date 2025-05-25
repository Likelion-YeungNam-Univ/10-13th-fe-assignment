import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemonDetail = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("데이터 요청 실패:", error);
      }
    };

    getPokemonDetail();
  }, [id]);

  if (!pokemon) return null;

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-5">
      <div className="mx-auto bg-white p-4 rounded-x text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          {pokemon.name}
        </h2>

        <img
          src={pokemon.sprites.front_default}
          className="w-24 h-24 mx-auto mb-4"
        />

        <p className="text-lg mb-2">
          <span className="font-bold">Height: </span>
          {pokemon.height} m
        </p>

        <p className="text-lg mb-5">
          <span className="font-bold">Weight: </span>
          {pokemon.weight} kg
        </p>

        <p className="text-lg mb-2">
          <span className="font-bold">Types:</span>{" "}
          {pokemon.types.map((t) => (
            <span key={t.slot} className="mx-1 px-2 py-1 bg-blue-200 rounded">
              {t.type.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
