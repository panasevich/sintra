import { SET_RATES, SET_LOADING } from './actions';
import {RateAction, RateState} from "./types";

const initialState = {
    rate: '',
    currency: 'EUR',
    isLoading: false,
};


export default function rates(state: RateState = initialState, action: RateAction) {
    switch (action.type) {
        case SET_RATES: {
            return {...state, rate: action.value};
        }
        case SET_LOADING: {
            return {...state, isLoading: action.value};
        }
        default:
            return state;
    }
}
