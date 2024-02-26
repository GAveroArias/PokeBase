const initialState = {
    types: [],
    loading: false,
    error: null,
};

const typeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TYPES_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_TYPES_SUCCESS":
            return {
                ...state,
                loading: false,
                types: action.payload,
            };
        case "GET_TYPES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // Otros casos de acciones relacionadas con los tipos de pokemones
        default:
            return state;
    }
};

export default typeReducer;
