import { useState, useEffect } from "react";
import { compareArrays } from "../tools/compareArrays.js";
import { toggleArrayElement } from "../tools/toggleArrays";
import { usePaginationFetch } from "../hooks/usePaginationfetch";
import Navbar from "./II_level/Navbar";
import Loading from "./II_level/Loading";
import PokemonCard from "./II_level/PokemonCard";
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
              <PokemonCard
                key={id}
                id={id}
                name={name}
                match={match}
                handleFavorite={handleFavorite}
              ></PokemonCard>
            )
        )}
      </div>
    </div>
  );
}

export default PokemonFavs;
