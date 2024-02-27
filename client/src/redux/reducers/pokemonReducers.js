import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from "../actionTypes/pokemonActionTypes";

const initialState = {
  pokemons: [],
  loading: false,
  error: null,
};

const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS_REQUEST: {
      console.log("GET_POKEMONS_REQUEST");
      return { ...state, loading: true };
    }
    case GET_POKEMONS_SUCCESS: {
      console.log("GET_POKEMONS_SUCCESS", state);

      return { ...state, pokemons: payload, loading: false };
    }
    case GET_POKEMONS_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default pokemonReducer;
