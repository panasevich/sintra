import { SET_PRODUCT, REMOVE_PRODUCT } from "./actions";
import { ProductState, ProductAction } from "./types";

const initialState = {
  items: [],
};

export default function products(
  state: ProductState = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case SET_PRODUCT: {
      return { ...state, items: [...state.items, action.value] };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        items: state.items.filter(({ date }) => date !== action.value),
      };
    }
    default:
      return state;
  }
}
