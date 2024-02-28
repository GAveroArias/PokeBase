import { useEffect, useState } from "react";
import { normalizePokemon } from "../../utils/normalizePokemons";
import PokemonCardNew from "../pokemonCard/PokemonCardNew";

const PokemonList = ({ currentPokemons = [] }) => {
  const [normalizedPokemons, setNormalizedPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonsToFetch = currentPokemons.filter(
          (pokemon) => !pokemon.isFromDB
        );

        const promises = pokemonsToFetch.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        const results = await Promise.all(promises);

        const pokemonsFromDB = currentPokemons.filter(
          (pokemon) => pokemon.isFromDB
        );
        const allPokemons = [...pokemonsFromDB, ...results];

        setNormalizedPokemons(
          allPokemons.map((pokemon) => normalizePokemon(pokemon))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPokemons]);

  return (
    <>
      {normalizedPokemons.length > 0 &&
        normalizedPokemons.map((pokemon) => (
          <PokemonCardNew key={pokemon.id} pokemon={pokemon} />
        ))}
    </>
  );
};

export default PokemonList;
