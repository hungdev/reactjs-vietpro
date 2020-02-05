// reducers/peopleReducer.js
import * as ActionType from '../actions/actionTypes';
import _ from 'lodash'

// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/

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
    // case ActionType.CHANGE_QUANTITY:
    //   const newState = _.cloneDeep(state)
    //   const curProductPosition = newState.cart.findIndex(e => e._id === action.product._id)
    //   newState.cart[curProductPosition] = action.product
    //   return newState;

    // case ActionType.CHANGE_QUANTITY:
    //   const newCart = [...state.cart]
    //   const curProductPosition = state.cart.findIndex(e => e._id === action.product._id)
    //   newCart[curProductPosition] = action.product
    //   return {
    //     ...state,
    //     cart: newCart
    //   };

    // case ActionType.CHANGE_QUANTITY:
    //   return {
    //     ...state,
    //     cart: _.sortBy(_.unionBy([action.product, ...state.cart], '_id'), '_id')
    //   };

    // case ActionType.CHANGE_QUANTITY:
    //   const removeProd = state.cart.filter(e => e._id !== action.product._id)
    //   return {
    //     ...state,
    //     cart: _.sortBy([...removeProd, action.product], '_id')
    //   };

    case ActionType.CHANGE_QUANTITY:
      const newCart = state.cart.map(e => e._id === action.product._id ? action.product : e)
      return {
        ...state,
        cart: newCart
      }
    case ActionType.REMOVE_PRODUCT:
      const removeCartArr = state.cart.filter(e => e._id !== action.product._id)
      return {
        ...state,
        cart: removeCartArr
      }

    case ActionType.REMOVE_ALL_PRODUCT:
      return {
        ...state,
        cart: []
      }

    default:
      return state;
  }
} 