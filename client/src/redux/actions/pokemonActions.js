import {
    GET_POKEMONS_FAILURE,
    GET_POKEMONS_SUCCESS,
    GET_POKEMON_BY_ID_FAILURE,
    GET_POKEMON_BY_ID_SUCCESS,
    GET_POKEMONS_REQUEST,
    GET_POKEMON_BY_ID_REQUEST,
    SET_POKEMONS,
} from "../actionTypes/pokemonActionTypes";
import axios from "axios";

export const setPokemons = (pokemons) => {
    return async (dispatch) => {
        dispatch({ type: SET_POKEMONS, payload: pokemons });
        try {
            const response = await axios.get("http://localhost:3001/pokemons");
            dispatch({ type: SET_POKEMONS, payload: response.data });
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const getPokemons = () => {
    return async (dispatch) => {
        dispatch({ type: GET_POKEMONS_REQUEST });
        try {
            let pokemons;
            if (shouldGetFromAPI()) {
                pokemons = await fetchPokemonsFromAPI();
            } else {
                pokemons = await fetchPokemonsFromDatabase();
            }
            dispatch({ type: GET_POKEMONS_SUCCESS, payload: pokemons });
        } catch (error) {
            dispatch({ type: GET_POKEMONS_FAILURE, payload: error.message });
        }
    };
};

const shouldGetFromAPI = () => {
    return true;
};

const fetchPokemonsFromAPI = async () => {
    try {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await response.json();
        const pokemons = data.results.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
            types: [],
        }));
        return pokemons;
    } catch (error) {
        throw new Error("No se pudieron obtener los pokemones desde la API");
    }
};

const fetchPokemonsFromDatabase = async () => {
    try {
        const response = await axios.get("/api/pokemons");
        const data = await response.json();
        return data.pokemons;
    } catch (error) {
        throw new Error(
            "No se pudieron obtener los pokemones desde la base de datos"
        );
    }
};

export const getPokemonById = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_POKEMON_BY_ID_REQUEST });
        try {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/{id}"
            );
            const data = await response.json();
            dispatch({ type: GET_POKEMON_BY_ID_SUCCESS, payload: data });
        } catch (error) {
            dispatch({
                type: GET_POKEMON_BY_ID_FAILURE,
                payload: error.message,
            });
        }
    };
};

export const createPokemon = (pokemon) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/api/pokemons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pokemon),
            });
            const data = await response.json();
            dispatch({ type: "CREATE_POKEMON_SUCCESS", payload: data });
        } catch (error) {
            dispatch({
                type: "CREATE_POKEMON_FAILURE",
                payload: error.message,
            });
        }
    };
};

export const searchPokemon = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/{name}"
            );
            const data = await response.json();
            dispatch({ type: "SEARCH_POKEMON_SUCCESS", payload: data });
        } catch (error) {
            dispatch({
                type: "SEARCH_POKEMON_FAILURE",
                payload: error.message,
            });
        }
    };
};
