import { APPLY_FILTERS } from "../actionTypes/filterActionTypes";

const initialState = {
    typeFilter: "",
    originFilter: "",
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_FILTERS:
            return {
                ...state,
                typeFilter: action.payload.typeFilter,
                originFilter: action.payload.originFilter,
            };
        default:
            return state;
    }
};

export default filterReducer;
