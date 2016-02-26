import {
  LIKE_WORKOUT,
  REMOVE_FAVOURITE_EXERCISE
} from './actionTypes'

export const removeFavouriteExercises = (exerciseId) => {
  return {
    type: REMOVE_FAVOURITE_EXERCISE,
    exerciseId
  }
}

export const likeWorkout = (workoutId) => {
  return {
    type: LIKE_WORKOUT,
    workoutId
  }
}
