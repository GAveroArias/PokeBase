import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducers.js";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

export default rootReducer;
