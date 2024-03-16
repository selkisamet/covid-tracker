// rootSaga.js

import { all } from 'redux-saga/effects';
import modalSaga from '../sagas/modalSaga';

function* rootSaga() {
    yield all([
        modalSaga(),
    ]);
}

export default rootSaga;
