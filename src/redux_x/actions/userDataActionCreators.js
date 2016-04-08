import {
  LIKE_WORKOUT,
  REMOVE_FAVOURITE_EXERCISE,
  UPDATE_USER,
  UPDATE_USER_LOCAL
} from './actionTypes'
import { BASE_URL } from '../../constants/appConstants'
import {
  awesomeFetchWrapper,
  getAccessTokenFromAsyncStorage
} from '../../utilities/utility'

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

