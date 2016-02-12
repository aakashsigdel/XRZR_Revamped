import { combineReducers } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'
import player from './player'
import trending from './trending'


const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player,
  trending
})

export default XRZRReducer
