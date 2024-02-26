import {
    GET_TYPES_REQUEST,
    GET_TYPES_SUCCESS,
    GET_TYPES_FAILURE,
} from "../actionTypes/typeActionTypes";

const initialState = {
    types: [],
    loading: false,
    error: null,
};

const typeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TYPES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_TYPES_SUCCESS:
            return {
                ...state,
                loading: false,
                types: action.payload,
            };
        case GET_TYPES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default typeReducer;
