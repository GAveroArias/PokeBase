import {
    GET_POKEMON_BY_ID,
    CREATE_POKEMON,
    SEARCH_POKEMON,
} from "../actionTypes/pokemonActionTypes";
import axios from "axios";

const initialState = {
    pokemons: [],
    loading: false,
    errors: "",
};
export const getPokemonById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/{id}"
            );
            const data = await response.data;
            return dispatch({ type: "GET_POKEMON_BY_ID", payload: data });
        } catch (error) {
            alert(error.message);
            return dispatch({
                type: "ERROR",
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
            const data = await response.data;
            dispatch({ type: "CREATE_POKEMON", payload: data });
        } catch (error) {
            alert(error.message);
            return dispatch({
                type: "ERROR",
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
            const data = await response.data;
            dispatch({ type: "SEARCH_POKEMON", payload: data });
        } catch (error) {
            alert(error.message);
            return dispatch({
                type: "ERROR",
                payload: error.message,
            });
        }
    };
};
