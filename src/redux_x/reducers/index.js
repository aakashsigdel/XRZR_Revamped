import { combineReducer } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'

const xrzrReducer = combineReducer({
  category,
  exercise,
  workout
})

export default xrzrReducer
