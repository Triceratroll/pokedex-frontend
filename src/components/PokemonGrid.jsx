import { useState, useEffect } from "react";
import { compareArrays } from "../tools/compareArrays.js";
import { toggleArrayElement } from "../tools/toggleArrays";
import Navbar from "./II_level/Navbar";
import Pagination from "./II_level/Pagination";
import PokemonCard from "./II_level/PokemonCard";
import "../App.css";

function PokemonGrid({ pokemonList, page, nextPage, previousPage }) {
  const [modifiedList, setModifiedList] = useState([]);
  const [favsArray, setFavs] = useState(
    JSON.parse(localStorage.getItem("Favs")) || []
  );

  useEffect(() => {
    setModifiedList(compareArrays(pokemonList, favsArray));
  }, []);

  const handleFavorite = (event) => {
    event.preventDefault();
    const parentDiv = event.target.closest(".Pokemon");
    setFavs(toggleArrayElement(parentDiv.id, favsArray));
    setModifiedList(compareArrays(modifiedList, favsArray));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap m-5 place-content-center">
        {modifiedList.map(({ id, name, match }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            match={match}
            handleFavorite={handleFavorite}
          ></PokemonCard>
        ))}
      </div>
      <Pagination page={page} nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}

export default PokemonGrid;
