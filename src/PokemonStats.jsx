import React from "react";

function PokemonStats({ pokemon, type, normalAbility, hiddenAbility }) {
  const firstCase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div
      className={`justify-center border-2 rounded  skewed dropshadow pokemon-type-${type.name}`}
    >
      <div className="flex justify-center">
        <div className="p-2">Height: {pokemon.height} dm</div>
        <div className="p-2">Weight: {pokemon.weight} hg</div>
        <div className="p-2">Type: {firstCase(type.name)}</div>
      </div>
      <div className="flex items-center p-5">
        <table>
          <tbody>
            {pokemon.stats.map(({ stat, base_stat }) => (
              <tr key={stat.name}>
                <td className="text-end px-5">{firstCase(stat.name)}</td>
                <td className="w-10 mx-1">{base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mx-16">
          {normalAbility && (
            <div>
              <div className="text-xl">Normal ability</div>
              <div>{normalAbility}</div>
            </div>
          )}
          {hiddenAbility && (
            <div>
              <div className="text-xl">Hidden ability</div>
              <div>{hiddenAbility}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonStats;
