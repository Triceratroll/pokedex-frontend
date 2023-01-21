import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";

function PokemonCard({ list }) {
  const { name } = useParams();
  const id = list.find((pokemon) => pokemon.name === name).id;

  return (
    <img
      key={id}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt=""
    />
  );
}

export default PokemonCard;
