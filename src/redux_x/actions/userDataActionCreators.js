import {
  LIKE_EXERCISE,
  LIKE_WORKOUT,
  REMOVE_FAVOURITE_EXERCISE,
  POPULATE_FAVOURITE_EXERCISES,
  POPULATE_FAVOURITE_WORKOUTS,
  FETCH_FAVOURITE_EXERCISES,
  FETCH_FAVOURITE_WORKOUTS,
  FETCH_USER_WORKOUTS,
  FETCH_USER_WORKOUTS_LOCAL
} from './actionTypes'

import {
  FAVOURITE_BASE_URL,
  WORKOUT_BASE_URL
} from '../../constants/appConstants'

import UrlBuilder, {Filter, AndFilter} from '../../utilities/UrlBuilder'
import {populateWorkouts} from './workoutActionCreators'
import {fetchCategoriesIfNeeded} from './categoryActionCreators'
import {populatePureExercise} from './pureExerciseActionCreators'

import ApiUtils from '../ApiUtilities'

export const removeFavouriteExercises = (exerciseId) => {
  return {
    type: REMOVE_FAVOURITE_EXERCISE,
    exerciseId
  }
}

export const likeExercise = (exerciseId) => {
  return {
    type: LIKE_EXERCISE,
    exerciseId
  }
}

export const likeWorkout = (workoutId) => {
  return {
    type: LIKE_WORKOUT,
    workoutId
  }
}

export const populateFavouriteExercises = (exerciseIds) => {
  return {
    type: POPULATE_FAVOURITE_EXERCISES,
    exerciseIds
  }
}

export const populateFavouriteWorkouts = (workoutIds) => {
  return {
    type: POPULATE_FAVOURITE_WORKOUTS,
    workoutIds
  }
}

const fetchFavouriteWorkoutsRequest = () => {
  return {
    type: FETCH_FAVOURITE_WORKOUTS,
    status: 'fetch'
  }
}
const fetchFavouriteWorkoutsSuccess = (receivedTime) => {
  return {
    type: FETCH_FAVOURITE_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
const fetchFavouriteWorkoutsError = (errorMessage, receivedTime) => {
  return {
    type: FETCH_FAVOURITE_WORKOUTS,
    status: 'error',
    errorMessage,
    receivedTime
  }
}

const fetchFavouriteExercisesRequest = () => {
  return {
    type: FETCH_FAVOURITE_EXERCISES,
    status: 'fetch'
  }
}
const fetchFavouriteExercisesSuccess = (receivedTime) => {
  return {
    type: FETCH_FAVOURITE_EXERCISES,
    status: 'success',
    receivedTime
  }
}
const fetchFavouriteExercisesError = (errorMessage, receivedTime) => {
  return {
    type: FETCH_FAVOURITE_EXERCISES,
    status: 'error',
    errorMessage,
    receivedTime
  }
}

export const fetchFavouriteWorkouts = () => {
  const favWorkoutUrl = new UrlBuilder(FAVOURITE_BASE_URL)
    .addWithMetaDataClause(['asset'])
    .addFilter(
      new AndFilter(
        new Filter('sys_asset_type', 'workout'),
        new Filter('sys_asset_type', 'workout')
      )
    )
    .toString()

  return (dispatch) => {
    dispatch(fetchFavouriteWorkoutsRequest())
    return fetch(favWorkoutUrl)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertEntitiesAndAssets)
      .then((jsonResponse) => {
        let workouts = jsonResponse.asset
        workouts = ApiUtils.hydrateWorkouts(workouts)
        let workoutIds = Object.keys(workouts)

        dispatch(populateWorkouts(workouts))
        dispatch(populateFavouriteWorkouts(workoutIds))

        let categoryIds = Object.keys(workouts).map((workoutId) => workouts[workoutId].category)
        dispatch(fetchCategoriesIfNeeded(categoryIds))

        dispatch(fetchFavouriteWorkoutsSuccess(new Date().getTime()))
      })
      .catch((error) => {
        console.error(error)
        dispatch(fetchFavouriteWorkoutsError(error.response, new Date.getTime()))
      })
  }
}

export const fetchFavouriteExercises = () => {
  const favExerciseUrl = new UrlBuilder(FAVOURITE_BASE_URL)
    .addWithMetaDataClause(['asset'])
    .addFilter(new Filter('sys_asset_type', 'exercise'))
    .toString()
  console.log("fetching favorite exercises")
  return (dispatch) => {
    dispatch(fetchFavouriteExercisesRequest())

    return (fetch(favExerciseUrl))
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertEntitiesAndAssets)
      .then((jsonResponse) => {
        let exercises = jsonResponse.asset
        let exerciseIds = Object.keys(exercises)

        dispatch(populatePureExercise(exercises))
        dispatch(populateFavouriteExercises(exerciseIds))
        dispatch(fetchFavouriteExercisesSuccess(new Date().getTime()))
      })
      .catch((error) => {
        console.error(error)
        dispatch(fetchFavouriteExercisesError(error.response, new Date.getTime()))
      })
  }
}

export const fetchUserWorkouts = (userId) => {
  const userWorkoutsUrl = new UrlBuilder(WORKOUT_BASE_URL)
  // .addFilter(new Filter('sys_created_by', userId)) // uncomment this aferwards
    .toString()
  console.log('fetching user\'s workout', 'userid = ', userId, userWorkoutsUrl)
  return (dispatch) => {
    dispatch(userWorkoutsRequest())

    return fetch(userWorkoutsUrl)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertEntitiesToKeyBasedDict)
      .then((jsonResponse) => {
        console.log(jsonResponse)
        dispatch(userWorkoutsReceive())
        dispatch(userWorkoutsLocal(jsonResponse))
      })
      .catch(error => console.error(error))
  }
}

export const userWorkoutsRequest = () => {
  return {
    type: FETCH_USER_WORKOUTS,
    status: 'fetch'
  }
}

export const userWorkoutsReceive = () => {
  return {
    type: FETCH_USER_WORKOUTS,
    status: 'success'
  }
}

export const userWorkoutsFailure = (errorMessage) => {
  return {
    type: FETCH_USER_WORKOUTS,
    status: 'error',
    errorMessage
  }
}

export const userWorkoutsLocal = (workouts) => {
  return {
    type: FETCH_USER_WORKOUTS_LOCAL,
    workouts
  }
}
