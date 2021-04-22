import { call, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_RATES,
  fetchRates,
  setCurrency,
  setLoading,
  setRates,
} from "./actions";
import fetchData from "../../utils/httpRequest";

export default function* root() {
  yield takeEvery(FETCH_RATES, fetchRatesSaga);
}

function* fetchRatesSaga({ value }: ReturnType<typeof fetchRates>) {
  yield put(setLoading(true));

  const { data } = yield call<any>(
    fetchData,
    `http://api.nbp.pl/api/exchangerates/rates/a/${value}/`
  );
  if (data) {
    yield put(setCurrency(value));
    yield put(setRates(data.rates[0].mid));
  }
  yield put(setLoading(false));
}
