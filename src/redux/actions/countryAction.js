import CountryTypes from "../actionTypes";

export const selectedCountryCode = (countryCode) => ({
    type: CountryTypes.country.SELECTED_COUNTRY,
    payload: { countryCode },
});

export const setCountryInfo = (countryInfo) => ({
    type: CountryTypes.country.SET_COUNTRY_INFO,
    payload: { countryInfo },
});

export const fetchCountriesRequest = () => ({
    type: CountryTypes.country.FETCH_COUNTRIES_REQUEST
});

export const fetchCountriesSuccess = (data) => ({
    type: CountryTypes.country.FETCH_COUNTRIES_SUCCESS,
    payload: { data }
});

export const fetchCountriesFailure = (error) => ({
    type: CountryTypes.country.FETCH_COUNTRIES_FAILURE,
    payload: { error }
});

export const setSearchValue = (value) => ({
    type: CountryTypes.country.SET_SEARCH_VALUE,
    payload: { value }
});

const countryAction = { selectedCountryCode, setCountryInfo, fetchCountriesRequest, fetchCountriesSuccess, fetchCountriesFailure, setSearchValue };
export default countryAction;

