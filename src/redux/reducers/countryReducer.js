import ActionTypes from "../actionTypes";

const initialState = {
    countryCode: "",
    countryInfo: null,
    countryList: [],
    filteredCountryList: [],
    searchValue: "",
    showWarning: false,
    loading: false,
    error: null,
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

        case ActionTypes.country.FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countryList: action.payload.data,
                filteredCountryList: action.payload.data,
                loading: false,
                error: null,
            };

        case ActionTypes.country.FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        case ActionTypes.country.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.value,
            };
        default:
            return state;
    }
};

export default countryReducer;