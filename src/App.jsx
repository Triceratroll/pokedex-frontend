import { useState } from "react";
import "./App.css";
import PokemonList from "./PokemonList";
import PokemonGrid from "./PokemonGrid";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function App() {
  const [list, setList] = useState([]);
  const [gridView, setiew] = useState();

  function parse(results) {
    const pokemon_list = results.map(({ url, name, id }) => ({
      url,
      name,
      id: url.match(/pokemon\/(\d+)\//)[1],
    }));
    return pokemon_list;
  }

  fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0.", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setList(parse(data.results))) // set
    .catch((error) => console.error(error));

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PokemonGrid list={list} />}></Route>
          <Route
            exact
            path="/list"
            element={<PokemonList list={list} />}
          ></Route>
          <Route
            exact
            path="/fav"
            element={<PokemonGrid list={list} />} // only fav pokemons
          ></Route>
          <Route
            path="/pokemon/:name"
            element={<PokemonCard list={list} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
