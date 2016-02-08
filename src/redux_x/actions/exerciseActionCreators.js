import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE
} from './actionTypes'

export const addExercise = exercise => {
  return {
    type: ADD_EXERCISE,
    exercise
  }
}

export const updateExercise = exercise => {
  return {
    type: UPDATE_EXERCISE,
    exercise
  }
}

export const deleteExercise = exerciseId => {
  return {
    type: DELETE_EXERCISE,
    exerciseId
  }
}
