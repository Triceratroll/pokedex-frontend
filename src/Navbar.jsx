import { NavLink } from "react-router-dom";
import moon from "./assets/circle-half-stroke-solid.svg";

import "./App.css";

function Navbar() {
  const handleDark = () => {
    const colorScheme = document.documentElement.classList.contains("light")
      ? "dark"
      : "light";
    document.documentElement.classList.replace(
      colorScheme === "light" ? "dark" : "light",
      colorScheme
    );
  };

  return (
    <nav>
      <ul className="md:flex justify-center">
        <NavLink to="/" className="text-2xl">
          <button className="w-44 border-hidden mx-5">Grid view</button>
        </NavLink>
        <NavLink to="/list" className="text-2xl">
          <button className="w-44 border-hidden mx-5">List view</button>
        </NavLink>
        <NavLink to="/fav" className="text-2xl">
          <button className="w-44 border-hidden mx-5">Favorites</button>
        </NavLink>
        <img
          src={moon}
          alt=""
          className="hover:cursor-pointer mx-5 w-6"
          onClick={handleDark}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
