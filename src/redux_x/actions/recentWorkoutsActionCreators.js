import {
  POPULATE_RECENT_WORKOUTS,
  FETCH_RECENT_WORKOUTS
} from './actionTypes'
import {
  RECENT_WORKOUT_URL_FUNC
} from '../../constants/appConstants'

import UrlBuilder from '../../utilities/UrlBuilder'

export function populateRecentWorkouts (workoutIds) {
  return {
    type: POPULATE_RECENT_WORKOUTS,
    workoutIds
  }
}

export function fetchRecentWorkouts () {
  console.log("yet to implement")
}

function fetchRecentWorkoutRequest () {
  return {
    type: FETCH_RECENT_WORKOUTS,
    status: 'fetch'
  }
}
function fetchRecentWorkoutSuccess (receivedTime) {
  return {
    type: FETCH_RECENT_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
function fetchRecentWorkoutError (errorMessage, receivedTime) {
  return {
    type: FETCH_RECENT_WORKOUTS,
    status: 'error',
    receivedTime,
    errorMessage
  }
}