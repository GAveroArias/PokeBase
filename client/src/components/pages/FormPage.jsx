import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "./redux/actions/pokemonActions.js";

const FormPage = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        types: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPokemon(formData));
        // Limpiar el formulario
        setFormData({
            name: "",
            image: "",
            vida: "",
            ataque: "",
            defensa: "",
            velocidad: "",
            altura: "",
            peso: "",
            types: [],
        });
    };

    return (
        <div>
            <h1>Crear Nuevo Pokémon</h1>
            <form onSubmit={handleSubmit}>
                {/* Input fields for each form field */}
                <button type="submit">Crear Pokémon</button>
            </form>
        </div>
    );
};

export default FormPage;
