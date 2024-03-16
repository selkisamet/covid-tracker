import CountryTypes from "../actionTypes";

export const selectedCountryCode = (countryCode) => ({
    type: CountryTypes.country.SELECTED_COUNTRY,
    payload: { countryCode },
});

const countryAction = { selectedCountryCode };
export default countryAction;

