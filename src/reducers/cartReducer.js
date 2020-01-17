// reducers/peopleReducer.js
import * as ActionType from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
  cart: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case ActionType.CHANGE_QUANTITY:
      return {
        ...state,
        cart: _.sortBy(_.unionBy([action.product, ...state.cart], '_id'), '_id')
      };

    default:
      return state;
  }
}