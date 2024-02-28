import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemonActions";
import Pagination from "../pagination/Pagination";
import PokemonList from "../pokemonList/PokemonList";

const HomePageNew = () => {
  const { allPokemons, loading } = useSelector(({ pokemons }) => pokemons);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pokemonsToRender, setPokemonsToRender] = useState([]);
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const pageSize = 12;
  const lastPokemonIndex = currentPage * pageSize;
  const firstPokemonIndex = lastPokemonIndex - pageSize;

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    setPokemonsToRender(allPokemons);
  }, [allPokemons]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(pokemonsToRender.length / pageSize));
    setCurrentPokemons(
      pokemonsToRender.slice(firstPokemonIndex, lastPokemonIndex)
    );
  }, [pokemonsToRender]);

  useEffect(() => {
    setCurrentPokemons(
      pokemonsToRender.slice(firstPokemonIndex, lastPokemonIndex)
    );
  }, [currentPage]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {currentPokemons.length && (
            <>
              <PokemonList currentPokemons={currentPokemons} />
              <Pagination
                numberOfPages={numberOfPages}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HomePageNew;
