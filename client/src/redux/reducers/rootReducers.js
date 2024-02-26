import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducers.js";
import typeReducer from "./typeReducers.js";

const rootReducer = combineReducers({
    pokemons: pokemonReducer,
    types: typeReducer,
});

export default rootReducer;
