import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers.js"; // Importa el root reducer que combina todos tus reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Configura compose

// Crea la tienda Redux
const store = createStore(
  rootReducer, // pasa el root reducer
  composeEnhancers(applyMiddleware(thunk)) // aplica middleware, en este caso Redux Thunk
);

export default store;
