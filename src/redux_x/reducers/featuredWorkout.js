import {
  ADD_FEATURED_WORKOUTS,
  FETCH_FEATURED_WORKOUTS
} from '../actions/actionTypes'

import networkSwitches from './networkSwitches'

const featuredWorkout = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FEATURED_WORKOUTS:
      return {
        ...state,
        data: action.workoutIds
      }
    case FETCH_FEATURED_WORKOUTS:
      return {
        ...state,
        ...networkSwitches(state, action)
      }

  }
  return state
}

const defaultState = {
  ...networkSwitches(),
  data: []              // list of workoutIds
}

export default featuredWorkout
