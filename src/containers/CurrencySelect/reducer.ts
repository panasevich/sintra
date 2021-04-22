import { FETCH_RATES, SET_RATES } from './actions';
import {RateAction, RateState} from "./types";

const initialState = {
    rate: '',
    currency: 'EUR',
};


export default function rates(state: RateState = initialState, action: RateAction) {
    switch (action.type) {
        case SET_RATES: {

        }

        default:
            return state;
    }
}
