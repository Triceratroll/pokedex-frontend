import React from "react";
import { Link } from "react-router-dom";
import star_solid from "../../assets/star_solid.svg";
import star from "../../assets/star.svg";

function PokemonCard({ name, id, handleFavorite, match }) {
  return (
    <Link className="Pokemon" id={id} to={`/pokemon/${name}`}>
      <div className="relative w-36 h-56 flex items-center justify-center bg-indigo-300 hover:-mt-2 border-8 border-yellow-300 shadow-yellow rounded m-4">
        <div className="absolute top-0 left-0 text-slate-800 text-xl ml-1 mt-1">
          {"#" + id}
        </div>
        <div className="absolute top-0 right-0">
          <img
            onClick={handleFavorite}
            className="w-6  mr-1 mt-2"
            src={match ? star_solid : star}
            alt=""
          />
        </div>
        <img
          className="inline-block w-32"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt=""
        />
        <div className="absolute text-slate-800 text-xl bottom-0 inset-x-0">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
