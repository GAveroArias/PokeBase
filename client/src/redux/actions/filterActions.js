import axios from "axios";

export const applyFilters = () => {
    let filteredList = pokemons;

    if (typeFilter) {
        filteredList = filteredList.filter((pokemon) =>
            pokemon.types.includes(typeFilter)
        );
    }

    if (originFilter === "API") {
        // Filtrar por origen API
        filteredList = filteredList.filter(
            (pokemon) => pokemon.origin === "API"
        );
    } else if (originFilter === "DB") {
        // Filtrar por origen base de datos
        filteredList = filteredList.filter(
            (pokemon) => pokemon.origin === "DB"
        );
    }

    setFilteredPokemons(filteredList);
};
