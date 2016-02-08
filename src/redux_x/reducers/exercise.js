'use strict'

import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE
} from '../actions/actionTypes'

const exercise = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
    case UPDATE_EXERCISE:
      return {
        ...state,
        ...action.exercise
      }
    case DELETE_EXERCISE:
      return state.filter(exercise => exercise.id !== action.exerciseId)
    default:
      return state
  }
}

export default exercise
