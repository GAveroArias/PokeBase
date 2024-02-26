import React from "react";
import { useHistory } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/pokemon/${pokemon.id}`);
    };

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
