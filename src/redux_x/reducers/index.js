import { combineReducers } from 'redux'

import category from './category'
import exercise from './exercise'
import workout from './workout'
import player from './player'
import trending from './trending'
import mostPopularWorkout from './mostPopularWorkout'
import featuredWorkout from './featuredWorkout'
import instructor from './instructor'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player,
  mostPopularWorkout,
  trending,
  featuredWorkout,
  instructor,
})

export default XRZRReducer
