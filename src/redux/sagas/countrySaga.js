// countrySaga.js

import { call, put, takeEvery } from "redux-saga/effects";
import ActionTypes from "../actionTypes";
import { setCountryInfo } from "../actions/countryAction";

function* fetchCountryInfoAsync(action) {
    try {
        const { countryCode } = action.payload;
        const response = yield call(fetch, `https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = yield call([response, "json"]);
        yield put(setCountryInfo(data[0]));
    } catch (error) {
        console.error("Error fetching country data:", error);
    }
}

function* countrySaga() {
    yield takeEvery(ActionTypes.country.SELECTED_COUNTRY, fetchCountryInfoAsync);
}

export default countrySaga;
