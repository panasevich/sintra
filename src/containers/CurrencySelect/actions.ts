import { Rates } from "./types";

export const FETCH_RATES = 'FETCH_RATES';
export const SET_RATES = 'SET_RATES';

export const fetchRates = (value: Rates) => ({
    type: FETCH_RATES,
    value,
});

export const setRates = (value: Rates) => ({
    type: SET_RATES,
    value,
})
