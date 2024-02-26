import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemons } from "../../redux/actions/pokemonActions.js";
import PokemonCard from "./components/pokemonCard/PokemonCard.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const pokemons = useSelector((state) => state.pokemons);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    useEffect(() => {
        setFilteredPokemons(pokemons);
    }, [pokemons]);

    const handleSearch = (filteredPokemons) => {
        setFilteredPokemons(filteredPokemons);
    };

    const handleCardClick = (id) => {
        history.push(`/pokemon/${id}`);
    };

    return (
        <div>
            <h1>Lista de Pokémon</h1>
            <SearchBar pokemons={pokemons} onSearch={handleSearch} />
            <div className="pokemon-list">
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={() => handleCardClick(pokemon.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
