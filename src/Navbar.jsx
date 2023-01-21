import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Grid</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/fav">Favs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
