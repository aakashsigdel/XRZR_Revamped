import {
  ADD_TRENDING_WORKOUTS,
  FETCH_TRENDING_WORKOUTS
} from '../actions/actionTypes'

import networkSwitches from './networkSwitches'

const trendingWorkout = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TRENDING_WORKOUTS:
      return {
        ...state,
        data: action.workoutIds
      }
    case FETCH_TRENDING_WORKOUTS:
      return {
        ...state,
        ...networkSwitches(state, action)
      }

  }
  return state
}

let defaultState = {
  ...networkSwitches(),
  data: []        // list of workoutIds
}

export default trendingWorkout
