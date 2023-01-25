import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { compareArrays } from "./tools/compareArrays.js";
import { toggleArrayElement } from "./tools/toggleArrays";
import Pagination from "./Pagination";
import star_solid from "./assets/star_solid.svg";
import star from "./assets/star.svg";
import "./App.css";

function PokemonGrid({ pokemonList, page, setPage, nextPage, previousPage }) {
  const [favsArray, setFavs] = useState(
    JSON.parse(localStorage.getItem("Favs")) || []
  );
  const [modifiedList, setModifiedList] = useState([]);

  // useEffect to load Initial State
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
      <div className="flex flex-wrap m-5 place-content-center">
        {modifiedList.map(({ id, name, match }) => (
          <Link className="Pokemon" id={id} key={id} to={`/pokemon/${name}`}>
            <div className="relative w-48 h-80 bg-blue-100 flex items-center justify-center bg-transparent hover:-mt-2 border-8 border-yellow-400 rounded m-4">
              <div className="absolute top-0 left-0 text-black text-xl ml-1 mt-1">
                {"#" + id}
              </div>
              <div className="absolute top-0 right-0">
                <img
                  onClick={handleFavorite}
                  className="w-6  mr-1 mt-2" // color not working
                  src={match ? star_solid : star}
                  alt=""
                />
              </div>
              <img
                className="inline-block rounded"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt=""
              />
              <div className="absolute text-black text-xl bottom-0 inset-x-0">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
}

export default PokemonGrid;
