import { RateState } from "../containers/CurrencySelect/types";
import { ProductState } from "../containers/ProductContainer/types";

export type State = {
  rates: RateState;
  products: ProductState;
};
