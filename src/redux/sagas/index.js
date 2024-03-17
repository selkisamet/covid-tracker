// rootSaga.js

import { all } from "redux-saga/effects";
import modalSaga from "../sagas/modalSaga";
import countrySaga from "../sagas/countrySaga";
import countryListSaga from "../sagas/countryListSaga";

function* rootSaga() {
    yield all([
        modalSaga(),
        countrySaga(),
        countryListSaga(),

    ]);
}

export default rootSaga;
