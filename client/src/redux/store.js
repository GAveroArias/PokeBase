import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers.js"; // Importa el root reducer que combina todos tus reducers

// Define el estado inicial de tu aplicación si es necesario
const initialState = {};

// Crea la tienda Redux
const store = createStore(
    rootReducer, // pasa el root reducer
    initialState, // pasa el estado inicial
    applyMiddleware(thunk) // aplica middleware, en este caso Redux Thunk
);

export default store;
