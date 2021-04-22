export type ProductAction = {
  type: string;
  value: any;
};

export type ProductState = {
  items: Array<Product>;
};
export type FormTypes = {
  price: number;
  name: string;
};
export type Product = {
  name: string;
  price: number;
  date: number;
};
