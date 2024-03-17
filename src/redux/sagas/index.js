// rootSaga.js

import { all } from "redux-saga/effects";
import modalSaga from "../sagas/modalSaga";
import countrySaga from "../sagas/countrySaga";

function* rootSaga() {
    yield all([
        modalSaga(),
        countrySaga()
    ]);
}

export default rootSaga;
