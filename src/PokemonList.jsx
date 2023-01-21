import { useState } from "react";
import "./App.css";

function PokemonList({ list }) {
  return (
    <div className="list-container">
      {list.map(({ id }) => (
        <div className="grid-container" key={id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
