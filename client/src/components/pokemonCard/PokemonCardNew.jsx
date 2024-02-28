import React from "react";

const PokemonCardNew = ({ pokemon }) => {
  return (
    <>
      {pokemon && (
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
          <div>
            <h2>{pokemon.name}</h2>
            <p>
              Tipos:
              {pokemon.types.map((type, idx) => (
                <span key={pokemon.id + idx}>{type} </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCardNew;
