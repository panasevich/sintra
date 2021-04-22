import { Rates } from "./types";

export const FETCH_RATES = "FETCH_RATES";
export const SET_RATES = "SET_RATES";
export const SET_LOADING = "SET_LOADING";
export const SET_CURRENCY = "SET_CURRENCY";

export const fetchRates = (value: Rates["value"]) => ({
  type: FETCH_RATES,
  value,
});

export const setRates = (value: string) => ({
  type: SET_RATES,
  value,
});

export const setCurrency = (value: string) => ({
  type: SET_CURRENCY,
  value,
});
export const setLoading = (value: boolean) => ({
  type: SET_LOADING,
  value,
});
