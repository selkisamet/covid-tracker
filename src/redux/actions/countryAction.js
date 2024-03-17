import CountryTypes from "../actionTypes";

export const selectedCountryCode = (countryCode) => ({
    type: CountryTypes.country.SELECTED_COUNTRY,
    payload: { countryCode },
});

export const setCountryInfo = (countryInfo) => ({
    type: CountryTypes.country.SET_COUNTRY_INFO,
    payload: { countryInfo },
});

const countryAction = { selectedCountryCode, setCountryInfo };
export default countryAction;

