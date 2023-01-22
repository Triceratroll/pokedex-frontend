import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import star from "./assets/star.svg";
import star_solid from "./assets/star_solid.svg";
import "./App.css";

function PokemonGrid({ list }) {
  const [favsArray, setFavs] = useState(
    JSON.parse(localStorage.getItem("Favs")) || []
  );

  const [modifiedList, setModifiedList] = useState([]);

  // useEffect to load Initial State
  useEffect(() => {
    setModifiedList(compareArrays(list, favsArray));
    console.log(modifiedList);
    console.log(list);
    console.log(favsArray);
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
    <div className="flex flex-wrap m-5">
      {modifiedList.map(({ id, name, match }) => (
        <Link className="Pokemon" id={id} key={id} to={`/pokemon/${name}`}>
          <div className="relative w-36 h-56 bg-slate-300 flex items-center justify-center border-8 border-yellow-400 rounded m-2">
            <div className="absolute top-0 left-0 ml-1 mt-1">{"#" + id}</div>
            <div className="absolute top-0 right-0">
              <img
                onClick={handleFavorite}
                className="w-5 text-yellow-400 mr-1 mt-1" // color not working
                src={match ? star_solid : star}
                alt=""
              />
            </div>
            <img
              className="inline-block rounded"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0">{name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PokemonGrid;
