import { fork } from "redux-saga/effects";
import rates from "../containers/CurrencySelect/saga";

export default function* root() {
  yield fork(rates);
}
