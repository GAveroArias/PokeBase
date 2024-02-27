import axios from "axios";
import {
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_ERROR,
} from "../actionTypes/pokemonActionTypes";

export const getPokemons = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMONS_REQUEST });
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      const pokemons = await response.data;

      if (pokemons) {
        const { pokemonsFromDB, pokemonsFromApi } = pokemons;
        pokemonsFromDB.forEach((pokemon) => (pokemon.isFromDB = true));

        dispatch({
          type: GET_POKEMONS_SUCCESS,
          payload: [...pokemonsFromDB, ...pokemonsFromApi],
        });
      }
    } catch (error) {
      dispatch({ type: GET_POKEMONS_ERROR, payload: error.message });
    }
  };
};
