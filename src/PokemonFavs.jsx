import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { compareArrays } from "./tools/compareArrays.js";
import { toggleArrayElement } from "./tools/toggleArrays";
import Pagination from "./Pagination";
import star_solid from "./assets/star_solid.svg";
import star from "./assets/star.svg";
import "./App.css";

function PokemonFavs({}) {
  const [favsArray, setFavs] = useState(
    JSON.parse(localStorage.getItem("Favs")) || []
  );

  function toggleArrayElement(element) {
    const newFavsArray = favsArray.slice();
    const index = newFavsArray.indexOf(element);

    if (index === -1) {
      newFavsArray.push(element);
    } else {
      newFavsArray.splice(index, 1);
    }

    localStorage.setItem("Favs", JSON.stringify(favsArray));
    return newFavsArray;
  }

  const handleFavorite = (event) => {
    event.preventDefault();
    const parentDiv = event.target.closest(".Pokemon");
    setFavs(toggleArrayElement(parentDiv.id));
  };

  return (
    <div>
      <div className="flex flex-wrap m-5 place-content-center">
        {favsArray.map((id) => (
          <Link className="Pokemon" id={id} key={id} to={`/list`}>
            <div className="relative w-36 h-56 bg-slate-300 flex items-center justify-center hover:-mt-1 rounded m-2">
              <div className="absolute top-0 right-0">
                <img
                  className="w-4 mr-1 mt-1"
                  onClick={handleFavorite}
                  src={star_solid}
                  alt=""
                />
              </div>
              <img
                className="inline-block rounded"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
      {/* <Pagination page={page} nextPage={nextPage} previousPage={previousPage} /> */}
    </div>
  );
}

export default PokemonFavs;
