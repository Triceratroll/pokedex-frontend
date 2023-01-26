import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { compareArrays } from "../tools/compareArrays.js";
import { toggleArrayElement } from "../tools/toggleArrays";
import { usePaginationFetch } from "../hooks/usePaginationfetch";
import star_solid from "../assets/star_solid.svg";
import Navbar from "./II_level/Navbar";
import Loading from "./II_level/Loading";
import "../App.css";

const getUrl = (page, pageSize) =>
  `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0
  }`;

const mapResults = ({ results }) =>
  results.map(({ url, name }) => ({
    url,
    name,
    id: url.match(/\/(\d+)\//)[1],
  }));

function PokemonFavs({}) {
  const [modifiedList, setModifiedList] = useState([]);
  const [favsArray, setFavs] = useState(
    JSON.parse(localStorage.getItem("Favs")) || []
  );

  const handleFavorite = (event) => {
    event.preventDefault();
    const parentDiv = event.target.closest(".Pokemon");
    setFavs(toggleArrayElement(parentDiv.id, favsArray));
    setModifiedList(compareArrays(modifiedList, favsArray));
  };

  const {
    loading,
    results: pokemonList,
    page,
    setPage,
    nextPage,
    previousPage,
  } = usePaginationFetch(getUrl, mapResults);

  useEffect(() => {
    setModifiedList(compareArrays(pokemonList, favsArray));
  }, [pokemonList]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap m-5 place-content-center">
        {modifiedList.map(
          ({ id, name, match }) =>
            match && (
              <Link
                className="Pokemon"
                id={id}
                key={id}
                to={`/pokemon/${name}`}
              >
                <div className="relative w-48 h-80 flex items-center justify-center bg-indigo-300 hover:-mt-2 border-8 border-yellow-300 shadow-yellow rounded m-4">
                  <div className="absolute top-0 left-0 text-black text-xl ml-1 mt-1">
                    {"#" + id}
                  </div>
                  <div className="absolute top-0 right-0">
                    <img
                      onClick={handleFavorite}
                      className="w-6  mr-1 mt-2"
                      src={star_solid}
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
            )
        )}
      </div>
    </div>
  );
}

export default PokemonFavs;