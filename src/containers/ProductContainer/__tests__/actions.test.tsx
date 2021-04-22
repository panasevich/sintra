import {
  SET_PRODUCT,
  REMOVE_PRODUCT,
  setProduct,
  removeProduct,
} from "../actions";

describe(">>> Container Product >>> Test ACTIONS CREATORS", () => {
  it("+++ actionCreator setProduct", () => {
    const setProductAction = setProduct({ name: "asd", price: 22, date: 123 });
    const expectedActionReturn = {
      type: SET_PRODUCT,
      value: { name: "asd", price: 22, date: 123 },
    };
    expect(setProductAction).toEqual(expectedActionReturn);
  });
  it("+++ actionCreator removeProduct", () => {
    const testAction = removeProduct(123);
    const expectedActionReturn = {
      type: REMOVE_PRODUCT,
      value: 123,
    };
    expect(testAction).toEqual(expectedActionReturn);
  });
});
