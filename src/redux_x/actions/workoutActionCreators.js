import { ADD_WORKOUT, UPDATE_WORKOUT, DELETE_WORKOUT } from './actionTypes'

export const addWorkout = (title) => {
  return {
    type: ADD_WORKOUT,
    title
  }
}

export const updateWorkout = (workout) => {
  return {
    type: UPDATE_WORKOUT,
    id: workout.id,
    workout: workout
  }
}

export const deleteWorkout = (workoutId) => {
  return {
    type: DELETE_WORKOUT,
    workoutId}
}
