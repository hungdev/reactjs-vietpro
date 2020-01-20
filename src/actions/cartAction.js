import * as ActionType from './actionTypes'

export const addCart = (product) => {
  return {
    type: ActionType.ADD_CART,
    product
  }
}

export const changeQuantity = (product) => {
  return {
    type: ActionType.CHANGE_QUANTITY,
    product
  }
}

export const removeProduct = (product) => {
  return {
    type: ActionType.REMOVE_PRODUCT,
    product
  }
}
