import ActionTypes from "../actionTypes";

const initialState = {
    countryCode: ""
};

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.country.SELECTED_COUNTRY:
            return {
                ...state,
                countryCode: action.payload.countryCode,
            };
        default:
            return state;
    }
};

export default countryReducer;