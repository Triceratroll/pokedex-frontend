import React from "react";
import { NavLink } from "react-router-dom";
import pokedex from "../../assets/pokedex.png";
import circle_half from "../../assets/circle-half-stroke-solid.svg";

function Header() {
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
    <div className="flex justify-center">
      <NavLink to="/" className="text-xl">
        <img src={pokedex} alt="" className="w-60 hover:cursor-pointer" />
      </NavLink>
      <img
        src={circle_half}
        alt=""
        className=" hover:cursor-pointer mx-5 w-8"
        onClick={handleDark}
      />
    </div>
  );
}

export default Header;
