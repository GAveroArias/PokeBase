//En la home lo que vas a hacer es pegarle a /pokemons y obtener todos los pokemons, los guardas en la store y mostras los primeros 12
//eso significa que vas a tener un useEffect en la home que hace una request por axios a localhost:3001/pokemons, y guarda el resultardo en la store
//en la store vas a tener un array de pokemons, y vas a tener un useEffect en la home que hace una request por axios a localhost:3001/pokemons, y guarda el resultardo en la store
//hace eso y cuando lo tengas listo, necesitas paginarlos de 12 en 12 y mostrarlos en tu home. TU código:

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemonActions";
import PokemonCard from "../pokemonCard/PokemonCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        try {
            const response = await axios.get("http://localhost:3001/pokemons");
            if (response.data) {
                setPokemons(response.data);
            } else {
                window.alert("No hay pokemons");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        dispatch(setPokemons());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPokemon = currentPage * 12;
    const indexOfFirstPokemon = indexOfLastPokemon - 12;

    const currentPokemons = pokemons.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Lista de Pokemóns</h1>
            <PokemonCard pokemons={currentPokemons} />
            <div>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPokemons.length < 12}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default HomePage;
