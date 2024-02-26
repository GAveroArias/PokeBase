import React, { useState } from "react";

function SearchBar({ pokemons, onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const filteredPokemons = pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase() === searchTerm.toLowerCase();
        });
        onSearch(filteredPokemons);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
}

export default SearchBar;
