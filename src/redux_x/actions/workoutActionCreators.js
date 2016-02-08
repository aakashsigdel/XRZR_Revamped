import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  DELETE_WORKOUT
} from './actionTypes'

export const addWorkout = workout => {
  return {
    type: ADD_WORKOUT,
    workout
  }
}

export const updateWorkout = workout => {
  return {
    type: UPDATE_WORKOUT,
    workout
  }
}

export const deleteWorkout = workoutId => {
  return {
    type: DELETE_WORKOUT,
    workoutId
  }
}
