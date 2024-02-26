import {
    GET_POKEMONS_FAILURE,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_REQUEST,
} from "../actionTypes/pokemonActionTypes";

const initialState = {
    pokemons: [],
    loading: false,
    error: null,
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                error: null,
            };
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default pokemonReducer;
