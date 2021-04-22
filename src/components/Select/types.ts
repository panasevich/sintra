export type SelectProps = {
  labelText?: string;
  id?: string;
  options?: Array<Option>;
  value?: string;
  onChange: Function;
};

export type Option = {
  label: string;
  value: string;
};
