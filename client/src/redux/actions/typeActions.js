import {
    GET_TYPES_REQUEST,
    GET_TYPES_SUCCESS,
    GET_TYPES_FAILURE,
} from "../actionTypes/typeActionTypes";

import axios from "axios";

export const getTypes = () => {
    return async (dispatch) => {
        dispatch({ type: GET_TYPES_REQUEST });
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/type");
            const types = response.data.results.map((type) => type.name);
            // Guardar los tipos en la base de datos si no están ya almacenados
            // Aquí iría tu lógica para verificar y guardar los tipos en la base de datos
            dispatch({ type: GET_TYPES_SUCCESS, payload: types });
        } catch (error) {
            dispatch({ type: GET_TYPES_FAILURE, payload: error.message });
        }
    };
};
