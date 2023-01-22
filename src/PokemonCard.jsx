import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";

function PokemonCard({ list }) {
  const { name } = useParams();
  const id = list.find((pokemon) => pokemon.name === name).id;

  return (
    <div key={id} className="flex h-screen">
      <div className="m-auto">
        <img
          className="logo react  scale-150"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt=""
        />
      </div>
    </div>
  );
}

export default PokemonCard;
