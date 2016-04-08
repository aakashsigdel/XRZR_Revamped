import {
  ADD_PURE_EXERCISE,
  POPULATE_PURE_EXERCISE
} from '../actions/actionTypes'

export const addPureExercise = (exerciseId, exercise) => {
  return {
    type: ADD_PURE_EXERCISE,
    exerciseId,
    exercise
  }
}

export const populatePureExercise = (exercises) => {
  return {
    type: POPULATE_PURE_EXERCISE,
    exercises
  }
}
