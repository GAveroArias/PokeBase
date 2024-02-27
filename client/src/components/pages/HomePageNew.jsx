import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemonActions";

const HomePageNew = () => {
  const allPokemons = useSelector(({ pokemons }) => {
    return pokemons.allPokemons;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    console.log(allPokemons);
  }, [allPokemons]);

  return (
    <div>
      {allPokemons.length &&
        allPokemons.slice(0, 12).map((pokemon) => (
          <div key={pokemon.id}>
            {pokemon.id} - {pokemon.name}
          </div>
        ))}
    </div>
  );
};

export default HomePageNew;
