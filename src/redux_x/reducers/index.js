import { combineReducers } from 'redux'

import category from './catagory'
import exercise from './exercise'
import workout from './workout'
import player from './Player'
import mostPopularWorkout from './mostPopularWorkout'
import instructor from './instructor'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player,
  mostPopularWorkout,
  instructor
})

export default XRZRReducer
