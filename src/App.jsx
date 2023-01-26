import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { usePaginationFetch } from "./hooks/usePaginationfetch";
import PokemonList from "./components/PokemonList";
import PokemonGrid from "./components/PokemonGrid";
import PokemonDetail from "./components/PokemonDetail";
import PokemonFavs from "./components/PokemonFavs";
import Loading from "./components/II_level/Loading";
import Header from "./components/II_level/Header";

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
  useEffect(() => {
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    document.documentElement.classList.add(colorScheme);
  }, []);

  const {
    loading,
    results: pokemonList,
    page,
    setPage,
    nextPage,
    previousPage,
  } = usePaginationFetch(getUrl, mapResults);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="App">
        <Router>
          <Header />
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
            <Route
              path="/pokemon/:name"
              element={<PokemonDetail pokemonList={pokemonList} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
