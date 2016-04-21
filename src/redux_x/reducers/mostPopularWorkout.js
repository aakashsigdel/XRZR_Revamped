'use strict'

import {
  ADD_MOST_POPULAR_WORKOUTS,
  FETCH_MOST_POPULAR_WORKOUTS
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'

const initialState = {
  ...networkSwitches(),
  data: []      // list of workoutIds
}

const getMostPopularWorkout = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOST_POPULAR_WORKOUTS:
      return {
        ...state,
        data: action.workoutIds
      }
    case FETCH_MOST_POPULAR_WORKOUTS:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
  }
  return state
}

export default getMostPopularWorkout
