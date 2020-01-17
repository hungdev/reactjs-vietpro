// reducers/peopleReducer.js
import * as ActionType from '../actions/actionTypes';

const initialState = {
  cart: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_CART:
      console.log('cart reducer')
      console.log('action', action)
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    default:
      return state;
  }
}