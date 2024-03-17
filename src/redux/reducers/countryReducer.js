import ActionTypes from "../actionTypes";

const initialState = {
    countryCode: "",
    countryInfo: null,
};

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.country.SELECTED_COUNTRY:
            return {
                ...state,
                countryCode: action.payload.countryCode,
            };

        case ActionTypes.country.SET_COUNTRY_INFO:
            return {
                ...state,
                countryInfo: action.payload.countryInfo,
            };
        default:
            return state;
    }
};

export default countryReducer;