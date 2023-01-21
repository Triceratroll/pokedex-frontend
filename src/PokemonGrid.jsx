import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function PokemonGrid({ list }) {
  return (
    <div className="list-container" style={{ width: "100px", height: "100px" }}>
      {list.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
          }}
        >
          <div>{name}</div>
        </Link>
      ))}
    </div>
  );
}

export default PokemonGrid;
