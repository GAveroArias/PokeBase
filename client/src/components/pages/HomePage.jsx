import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPokemons } from "../../redux/actions/pokemonActions.js";
import PokemonCard from "../pokemonCard/PokemonCard.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const pokemons = useSelector((state) => state.pokemons);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [originFilter, setOriginFilter] = useState("");

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
      <div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">Todos los tipos</option>
          <option value="Fire">Fuego</option>
          <option value="Water">Agua</option>
          <option value="Grass">Hierba</option>
          <option value="Electric">Elección</option>
          <option value="Ground">Tierra</option>
          <option value="Rock">Roca</option>
          <option value="Fighting">Lucha</option>
          <option value="Psychic">Psiquico</option>
          <option value="Ice">Hielo</option>
          <option value="Ghost">Fantasma</option>
          <option value="Dragon">Dragon</option>
          <option value="Dark">Siniestro</option>
          <option value="Fairy">Hada</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Veneno</option>
          <option value="Bug">Bicho</option>
          <option value="Flying">Volador</option>
          <option value="Steel">Acero</option>
        </select>
        <select
          value={originFilter}
          onChange={(e) => setOriginFilter(e.target.value)}
        >
          <option value="">Todos los orígenes</option>
          <option value="API">API</option>
          <option value="DB">Base de datos</option>
        </select>
        <button onClick={applyFilters}>Aplicar filtros</button>
      </div>
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
