import { combineReducers } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'
import player from './Player'
import mostPopularWorkout from './mostPopularWorkout'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player,
  mostPopularWorkout
})

export default XRZRReducer
