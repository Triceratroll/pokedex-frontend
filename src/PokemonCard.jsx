import { Link, useParams } from "react-router-dom";
import { useApi } from "./useApi";
import Loading from "./Loading";
import PokemonStats from "./PokemonStats";
import chevron_left from "./assets/circle-chevron-left-solid.svg";
import chevron_right from "./assets/circle-chevron-right-solid.svg";
import arrow_left from "./assets/arrow-left-solid.svg";
import "./App.css";

function PokemonCard({ pokemonList }) {
  const { name } = useParams();
  const { data: pokemon, loading } = useApi(
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
    <div className="relative">
      <div className="flex justify-between">
        <Link className="my-auto" to={"/"}>
          <img className="w-8" src={arrow_left} alt="" />
        </Link>
        <div
          className={`w-32 text-2xl border-2 rounded skewed dropshadow pokemon-type-${type.name}`}
        >
          {"#" + pokemon.id}
        </div>
        <div className="text-3xl">{firstCase(pokemon.name)}</div>
        <div className="text-3xl text-red-700">
          {pokemon.stats[0].base_stat +
            " " +
            pokemon.stats[0].stat.name.toUpperCase()}
        </div>
      </div>
      <div className="flex justify-center">
        {previous && (
          <Link className="my-auto" to={`/pokemon/${previous.name}`}>
            <img className="w-10" src={chevron_left} alt="" />
          </Link>
        )}
        <img
          className={`logo pokemon-type-${type.name}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt=""
        />
        {next && (
          <Link className="my-auto" to={`/pokemon/${next.name}`}>
            <img className="w-10" src={chevron_right} alt="" />
          </Link>
        )}
      </div>
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
  );
}

export default PokemonCard;
