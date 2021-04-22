import { all, put, takeEvery } from 'redux-saga/effects';
import {FETCH_RATES} from "./actions";

export default function* root(foo: string) {
    yield takeEvery(FETCH_RATES, fetchRates);
}

function* fetchRates() {
    console.log('FETCH RATES');
}