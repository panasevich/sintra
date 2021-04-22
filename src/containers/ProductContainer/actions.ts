import { Rates } from "./types";

export const FETCH_RATES = 'FETCH_RATES';
export const SET_RATES = 'SET_RATES';
export const SET_LOADING = 'SET_LOADING';

export const fetchRates = (value: Rates['value']) => ({
    type: FETCH_RATES,
    value,
});

export const setRates = (value: string) => ({
    type: SET_RATES,
    value,
})
export const setLoading = (value: boolean) => ({
    type: SET_LOADING,
    value,
})
