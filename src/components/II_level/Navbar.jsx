import { NavLink } from "react-router-dom";
import star_solid from "../../assets/star_solid.svg";
import grid from "../../assets/grid-solid.svg";
import list from "../../assets/list-solid.svg";
import "../../App.css";

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
    <nav className="flex-col justify-center">
      <NavLink to="/" className="text-xl">
        <button className="w-44 border-hidden mx-5 my-2">
          <span className="flex">
            Grid View
            <img src={grid} className="w-4 m-auto" alt="" />
          </span>
        </button>
      </NavLink>
      <NavLink to="/list" className="text-xl">
        <button className="w-44 border-hidden mx-5 my-2">
          <span className="flex">
            List View
            <img src={list} className="w-4 m-auto" alt="" />
          </span>
        </button>
      </NavLink>
      <NavLink to="/fav" className="text-xl">
        <button className="w-44 border-hidden mx-5 my-2">
          <span className="flex">
            Favorites
            <img src={star_solid} className="w-4 m-auto" alt="" />
          </span>
        </button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
