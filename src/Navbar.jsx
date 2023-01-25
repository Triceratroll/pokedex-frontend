import { NavLink } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav>
      <ul className="md:flex justify-center">
        <button className="w-44 border-hidden m-5">
          <NavLink to="/" className="text-2xl">
            Grid view
          </NavLink>
        </button>
        <button className="w-44 border-hidden m-5">
          <NavLink to="/list" className="text-2xl">
            List view
          </NavLink>
        </button>
        <button className="w-44 border-hidden m-5">
          <NavLink to="/fav" className="text-2xl">
            Favorites
          </NavLink>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
