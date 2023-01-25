import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { usePaginationFetch } from "./usePaginationfetch";
import PokemonList from "./PokemonList";
import PokemonGrid from "./PokemonGrid";
import Navbar from "./Navbar";
import PokemonCard from "./PokemonCard";
import PokemonFavs from "./PokemonFavs";
import LoadingSpinner from "./LoadingSpinner";
import "./App.css";

const getUrl = (page, pageSize) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${
    page * pageSize
  }`;

const mapResults = ({ results }) =>
  results.map(({ url, name }) => ({
    url,
    name,
    id: url.match(/\/(\d+)\//)[1],
  }));

function App() {
  const {
    loading,
    results: pokemonList,
    page,
    setPage,
    nextPage,
    previousPage,
  } = usePaginationFetch(getUrl, mapResults);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  } else {
    return (
      <div className="App">
        <Router>
          <Navbar />
          {/* {results.results.map((result) => (
            <div key={result.name}>{result.name}</div>
          ))} */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PokemonGrid
                  pokemonList={pokemonList}
                  page={page}
                  nextPage={nextPage}
                  previousPage={previousPage}
                />
              }
            ></Route>
            <Route
              exact
              path="/list"
              element={
                <PokemonList
                  pokemonList={pokemonList}
                  page={page}
                  setPage={setPage}
                  nextPage={nextPage}
                  previousPage={previousPage}
                />
              }
            ></Route>
            <Route
              exact
              path="/fav"
              element={<PokemonFavs />} // only fav pokemons
            ></Route>
            <Route path="/pokemon/:name" element={<PokemonCard />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
