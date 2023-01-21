import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function PokemonGrid({ list }) {
  return (
    <div className="flex flex-wrap m-5">
      {list.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          // style={{
          //   backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
          // }}
        >
          <div className="w-36 h-56 bg-slate-300 flex items-center justify-center rounded m-2">
            <img
              className="inline-block bg-white rounded"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt=""
            />
          </div>
          {name}
        </Link>
      ))}
    </div>
  );
}

export default PokemonGrid;
