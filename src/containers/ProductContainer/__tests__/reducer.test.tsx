import { SET_PRODUCT, REMOVE_PRODUCT } from "../actions";
import product from "../reducer";
import { ProductState } from "../types";

describe(">>> Container Product >>> Test REDUCER", () => {
  let initialState: ProductState;
  beforeEach(() => {
    initialState = {
      items: [],
    };
  });
  it("+++ reducer case SET_PRODUCT", () => {
    const testAction = {
      type: SET_PRODUCT,
      value: { name: "asd", price: 22, date: 123 },
    };
    const expectedNewState = {
      items: [{ name: "asd", price: 22, date: 123 }],
    };
    const newState = product(initialState, testAction);
    expect(newState).toEqual(expectedNewState);
  });
  it("+++ reducer case REMOVE_PRODUCT", () => {
    const testAction = {
      type: REMOVE_PRODUCT,
      value: 123,
    };
    const expectedNewState = initialState;
    const newState = product(initialState, testAction);
    expect(newState).toEqual(expectedNewState);
  });
});
