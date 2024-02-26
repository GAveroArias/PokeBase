import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
    const { id } = useParams();
    const pokemon = useSelector((state) =>
        state.pokemons.find((p) => p.id === id)
    );

    if (!pokemon) return <div>Loading...</div>;

    return (
        <div>
            <h1>Detalle de {pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>ID: {pokemon.id}</p>
            <p>Vida: {pokemon.vida}</p>
            <p>Ataque: {pokemon.ataque}</p>
            <p>Defensa: {pokemon.defensa}</p>
            <p>Plataforma: {pokemon.plataforma}</p>
            <p>Altura: {pokemon.altura}</p>
            <p>Peso: {pokemon.peso}</p>
            <p>Tipos: {pokemon.types.join(", ")}</p>
        </div>
    );
};

export default DetailPage;
