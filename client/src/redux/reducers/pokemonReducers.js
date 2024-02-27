import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    CREATE_POKEMON,
    SEARCH_POKEMON,
} from "../actionTypes/pokemonActionTypes";

const initialState = {
    pokemons: [],
    loading: false,
    error: null,
};

const pokemonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                error: null,
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                error: null,
            };
        case CREATE_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                error: null,
            };
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                error: null,
            };
        case "ERROR":
            return { ...state, errors: payload };
        default:
            return state;
    }
};

export default pokemonReducer;
