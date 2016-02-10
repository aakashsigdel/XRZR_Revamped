import { combineReducers } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'
import player from './Player'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player
})

export default XRZRReducer
