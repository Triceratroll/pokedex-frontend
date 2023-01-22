import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import star from "./assets/star.svg";
import star_solid from "./assets/star_solid.svg";
import "./App.css";

function PokemonList({ list }) {
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
    <div className="">
      {modifiedList.map(({ id, name, match }) => (
        <Link className="Pokemon" id={id} key={id} to={`/pokemon/${name}`}>
          <div
            key={id}
            className="flex justify-between bg-slate-100 rounded my-4"
          >
            <img
              className="ml-5 w-24"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt=""
            />
            <div className="flex items-center text-cyan-600 text-2xl">
              {"#" + id + " "}
              {name}
            </div>
            <img
              className=" w-5 text-yellow-400 mr-5 mt-1" // color not working
              onClick={handleFavorite}
              src={match ? star_solid : star}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PokemonList;
