import { combineReducers } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout
})

export default XRZRReducer
