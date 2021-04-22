export interface Rates {
  value: string;
}

export type RateAction = {
  type: string;
  value: any;
};

export type RateState = {
  rate: number;
  currency: string;
  isLoading: boolean;
};
export type OptionsTypes = {
  label: string;
  value: string;
};
