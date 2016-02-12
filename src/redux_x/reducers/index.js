import { combineReducers } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'
import player from './player'
import trending from './trending'
import mostPopularWorkout from './mostPopularWorkout'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player,
  mostPopularWorkout
})

export default XRZRReducer
