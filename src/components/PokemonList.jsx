import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./II_level/Pagination";
import Navbar from "./II_level/Navbar";
import star_solid from "../assets/star_solid.svg";
import star from "../assets/star.svg";
import "../App.css";

function PokemonList({ pokemonList, page, nextPage, previousPage }) {
  const [favsArray, setFavs] = useState(
    JSON.parse(localStorage.getItem("Favs")) || []
  );

  const [modifiedList, setModifiedList] = useState([]);

  // useEffect to load Initial State
  useEffect(() => {
    setModifiedList(compareArrays(pokemonList, favsArray));
  }, []);

  function toggleArrayElement(element) {
    const index = favsArray.indexOf(element);

    if (index === -1) {
      favsArray.push(element);
    } else {
      favsArray.splice(index, 1);
    }

    localStorage.setItem("Favs", JSON.stringify(favsArray));
    return favsArray;
  }

  function compareArrays(arr1, arr2) {
    return arr1.map((el1) => {
      let match = arr2.find((el2) => el1.id === el2);
      return { ...el1, match: match ? true : false };
    });
  }

  const handleFavorite = (event) => {
    event.preventDefault();
    const parentDiv = event.target.closest(".Pokemon");
    setFavs(toggleArrayElement(parentDiv.id));
    setModifiedList(compareArrays(modifiedList, favsArray));
  };

  return (
    <div>
      <Navbar />
      {modifiedList.map(({ id, name, match }) => (
        <Link className="Pokemon" id={id} key={id} to={`/pokemon/${name}`}>
          <div
            key={id}
            className="flex justify-between bg-indigo-300 hover:-mr-4 hover:-ml-4 rounded my-4"
          >
            <img
              className="ml-5 w-24"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt=""
            />
            <div className="flex items-center text-slate-800 text-2xl">
              {"#" + id + " "}
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
            <img
              className="w-6 text-yellow-400 mr-5 mt-1" // color not working
              onClick={handleFavorite}
              src={match ? star_solid : star}
              alt=""
            />
          </div>
        </Link>
      ))}
      <Pagination page={page} nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}

export default PokemonList;
