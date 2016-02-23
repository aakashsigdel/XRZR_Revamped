import {
  REMOVE_FAVOURITE_EXERCISE
} from './actionTypes'

export const removeFavouriteExercises = (exerciseId) => {
  return {
    type: REMOVE_FAVOURITE_EXERCISE,
    exerciseId
  }
}
