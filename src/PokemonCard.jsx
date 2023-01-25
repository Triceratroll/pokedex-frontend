import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "./useApi";
import "./App.css";
import LoadingSpinner from "./LoadingSpinner";

function PokemonCard() {
  const { name } = useParams();
  const { data: pokemon, loading } = useApi(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  const { type } = pokemon.types.find((type) => type.slot === 1);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0  text-2xl ml-1 mt-1">
        {"#" + pokemon.order}
      </div>

      <div className="flex justify-center">
        <img
          className={`logo pokemon-type-${type.name}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <div className="flex items-center p-5">
          <table>
            <tbody>
              {pokemon.stats.map(({ stat, base_stat }) => (
                <tr key={stat.name}>
                  <td className="text-end px-5">{stat.name}</td>
                  <td className="mx-1">{base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center">
          <div className="text-start">
            <p>Order {pokemon.order}</p>
            <p>Height {pokemon.height}</p>
            <p>Weight {pokemon.weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
