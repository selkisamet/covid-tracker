// sagas.js

import { call, put, takeEvery } from 'redux-saga/effects';
// import { FETCH_MODAL_DATA } from '../actionTypes';
import ActionTypes from "../actionTypes";
import { setModalData, setModalLoading } from '../actions/modalAction';

function* fetchModalDataAsync(action) {
    try {
        const { selectedCountryCode } = action.payload;
        const url = `https://covid-19-statistics.p.rapidapi.com/reports?iso=${selectedCountryCode}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '13d54b357cmsh20eb04d6f744a75p1c331djsn5c1be15a2a80',
                'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
            }
        };

        const response = yield call(fetch, url, options);
        const result = yield call([response, 'json']);
        yield put(setModalData(result.data[0]));
    } catch (error) {
        console.error(error);
    } finally {
        yield put(setModalLoading(false));
    }
}

function* modalSaga() {
    yield takeEvery(ActionTypes.modal.FETCH_MODAL_DATA, fetchModalDataAsync);
}

export default modalSaga;
