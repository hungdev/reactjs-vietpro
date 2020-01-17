import * as ActionType from './actionTypes'

export const addCart = (product) => {
  console.log('add card action', product)
  return {
    type: ActionType.ADD_CART,
    product
  }
}

export const changeQuantity = (quantity) => {
  console.log('add card action', quantity)
  return {
    type: ActionType.CHANGE_QUANTITY,
    quantity
  }
}
