export interface Rates {
    value: string;
}

export type RateAction = {
    type: string;
    value: string;
}

export type RateState = {
    rate: string;
    currency: string;
}