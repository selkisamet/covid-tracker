
import { put, takeLatest } from "redux-saga/effects";
import ActionTypes from "../actionTypes";
import { fetchCountriesSuccess, fetchCountriesFailure } from "../actions/countryAction";

function* fetchCountries() {
    try {
        const response = yield fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error("Failed to fetch countries");
        }
        const data = yield response.json();
        yield put(fetchCountriesSuccess(data));
    } catch (error) {
        yield put(fetchCountriesFailure(error));
    }
}

function* countryListSaga() {
    yield takeLatest(ActionTypes.country.FETCH_COUNTRIES_REQUEST, fetchCountries);
}

export default countryListSaga;