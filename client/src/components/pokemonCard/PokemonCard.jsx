import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    const history = useNavigate();

    const handleCardClick = () => {
        history.push(`/pokemon/${pokemon.id}`);
    };

    if (!pokemon) {
        return null;
    }

    return (
        <div className="pokemon-card" onClick={handleCardClick}>
            <img src={pokemon.image} alt={pokemon.name} />
            <div>
                <h2>{pokemon.name}</h2>
                <p>Tipos: {pokemon.types.join(", ")}</p>
            </div>
        </div>
    );
};

export default PokemonCard;
