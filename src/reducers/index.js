// reducers/index.js

import { combineReducers } from 'redux'
import people from './peopleReducer'
import cartReducer from './cartReducer'
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  people,
  cartReducer
  // nếu có reducer khác thì add thêm ở đây
})

export default rootReducer