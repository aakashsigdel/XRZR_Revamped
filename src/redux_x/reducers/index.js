import { combineReducers } from 'redux'

import category from './category'
import exercise from './exercise'
import workout from './workout'
import player from './player'
import trending from './trending'
import mostPopularWorkout from './mostPopularWorkout'
import featuredWorkout from './featuredWorkout'
import recentWorkout from './recentWorkout'
import instructor from './instructor'
import uiStates from './uiStates'
import user from './user'
import userData from './userData'

const XRZRReducer = combineReducers({
  category,
  exercise,
  workout,
  player,
  mostPopularWorkout,
  trending,
  featuredWorkout,
  recentWorkout,
  instructor,
  uiStates,
  user,
  userData
})

export default XRZRReducer
