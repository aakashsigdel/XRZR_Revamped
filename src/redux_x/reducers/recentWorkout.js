import {
  POPULATE_RECENT_WORKOUTS,
  FETCH_RECENT_WORKOUTS
} from '../actions/actionTypes'

import networkSwitches from './networkSwitches'

const recentWorkout = (state = defaultState, action) => {
  switch (action.type) {
    case POPULATE_RECENT_WORKOUTS:
      return {
        ...state,
        data: action.workoutIds
      }
    case FETCH_RECENT_WORKOUTS:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
  }
  return state
}

const defaultState = {
  ...networkSwitches(),
  data: [2, 6, 4, 3]
}

export default recentWorkout
