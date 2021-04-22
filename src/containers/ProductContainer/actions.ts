import { Product } from "./types";

export const SET_PRODUCT = "SET_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const setProduct = (value: Product) => ({
  type: SET_PRODUCT,
  value,
});
export const removeProduct = (value: number) => ({
  type: REMOVE_PRODUCT,
  value,
});
