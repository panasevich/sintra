import { combineReducers } from "redux";
import rates from "../containers/CurrencySelect/reducer";
import products from "../containers/ProductContainer/reducer";

export default combineReducers({
  rates,
  products,
});
