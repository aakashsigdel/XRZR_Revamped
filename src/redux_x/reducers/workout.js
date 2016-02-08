'use strict'

import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  DELETE_WORKOUT
} from '../actions/actionTypes'

const workout = (state = {}, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
    case UPDATE_WORKOUT:
      return {
        ...state,
        ...action.workout
      }
    case DELETE_WORKOUT:
      return state.filter(workout => workout.id !== action.workoutId)
    default:
      return state
  }
}

export default workout
