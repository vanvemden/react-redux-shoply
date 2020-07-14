import { addToCart, removeFromCart } from "./actions";
import * as types from './actionTypes';

describe('test actions', () => {

  it('should create an action to add an item to the cart', () => {
    const id = "47314fa1-ae56-4eae-80be-af6691145951";
    const expectedAction = {
      type: types.ADD_TO_CART,
      payload: id
    }
    expect(addToCart(id)).toEqual(expectedAction)
  })

  it('should create an action to remove an item from the cart', () => {
    const id = "47314fa1-ae56-4eae-80be-af6691145951";
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      payload: id
    }
    expect(removeFromCart(id)).toEqual(expectedAction)
  })

})