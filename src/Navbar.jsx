import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex">
        <li className="m-24">
          <Link to="/" className="text-5xl ">
            Grid
          </Link>
        </li>
        <li className="m-24">
          <Link to="/list" className="text-5xl ">
            List
          </Link>
        </li>
        <li className="m-24">
          <Link to="/fav" className="text-5xl ">
            Favs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
