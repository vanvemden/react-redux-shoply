import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import data from "./data.json";

const INITIAL_STATE = { shop: data.products, cart: [] }

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {

    case ADD_TO_CART:
      const tempCart = [...state.cart];
      tempCart.push(action.payload);
      return { ...state, cart: tempCart };

    case REMOVE_FROM_CART:
      const idx = state.cart.findIndex(id => action.payload === id);
      if (idx >= 0) {
        const tempCart = [...state.cart]
        tempCart.splice(idx, 1);
        return { ...state, cart: tempCart }
      }
      return { ...state };

    default:
      return state;
  }

}

export default rootReducer;