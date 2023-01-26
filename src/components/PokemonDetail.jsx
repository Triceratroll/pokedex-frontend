import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "./II_level/Loading";
import PokemonStats from "./II_level/PokemonStats";
import chevron_left from "../assets/circle-chevron-left-solid.svg";
import chevron_right from "../assets/circle-chevron-right-solid.svg";
import arrow_left from "../assets/arrow-left-solid.svg";
import pokedex from "../assets/pokedex.png";
import "../App.css";

function PokemonCard({ pokemonList }) {
  const { name } = useParams();
  const { data: pokemon, loading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const firstCase = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  const formatName = (nameWithDash) => nameWithDash.replace("-", " ");

  if (loading) {
    return <Loading />;
  }

  const { type } = pokemon.types.find((type) => type.slot === 1);
  const previous = pokemonList.find(({ id }) => id == pokemon.id - 1);
  const next = pokemonList.find(({ id }) => id == pokemon.id + 1);
  const normalAbility = pokemon.abilities.find((ability) => !ability.is_hidden);
  const hiddenAbility = pokemon.abilities.find(
    (ability) => ability.is_hidden === true
  );

  return (
    <div className="flex my-5">
      <div className="my-auto mr-24">
        {previous && (
          <Link to={`/pokemon/${previous.name}`}>
            <img className="w-10" src={chevron_left} alt="" />
          </Link>
        )}
      </div>
      <div
        className={`relative border-2 rounded dropshadow pokemon-type-${type.name}`}
      >
        <div className="flex justify-between">
          <div
            className={`w-24 pt-2 text-2xl  border-2 rounded dropshadow pokemon-type-${type.name}`}
          >
            {"#" + pokemon.id}
          </div>
          <div className="text-2xl m-2 font-bold">
            {firstCase(pokemon.name)}
          </div>
          <div className="text-2xl m-2 font-bold text-red-700">
            {pokemon.stats[0].base_stat +
              " " +
              pokemon.stats[0].stat.name.toUpperCase()}
          </div>
        </div>
        <img
          className={`w-80 m-auto logo pokemon-type-${type.name}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt=""
        />
        <PokemonStats
          pokemon={pokemon}
          type={type}
          normalAbility={
            normalAbility
              ? firstCase(formatName(normalAbility.ability.name))
              : undefined
          }
          hiddenAbility={
            hiddenAbility
              ? firstCase(formatName(hiddenAbility.ability.name))
              : undefined
          }
        />
      </div>
      <div className="my-auto ml-24">
        {next && (
          <Link to={`/pokemon/${next.name}`}>
            <img className="w-10" src={chevron_right} alt="" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
