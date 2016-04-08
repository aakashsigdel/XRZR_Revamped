import {
  POPULATE_RECENT_WORKOUTS,
  FETCH_RECENT_WORKOUTS
} from './actionTypes'

import {
  RECENT_WORKOUT_URL_FUNC,
  VIEW_BASE_URL
} from '../../constants/appConstants'

import UrlBuilder, {Filter, AndFilter} from '../../utilities/UrlBuilder'
import ApiUtils from '../ApiUtilities'
import {populateWorkouts} from './workoutActionCreators'
import {fetchCategoriesIfNeeded} from './categoryActionCreators'

export function populateRecentWorkouts (workoutIds) {
  return {
    type: POPULATE_RECENT_WORKOUTS,
    workoutIds
  }
}

export function fetchRecentWorkouts () {
  const view_url = new UrlBuilder(VIEW_BASE_URL)
    .addWithMetaDataClause(['asset'])
    //.addFilter(new Filter('sys_asset_type', 'workout'))
    .sortBy('sys_created', 'asc')
    .toString()

  return (dispatch) => {
    fetchRecentWorkoutRequest()
    return fetch(view_url)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertEntitiesAndAssets)
      .then((jsonResponse) => {
        let workouts = jsonResponse.asset
        workouts = ApiUtils.hydrateWorkouts(workouts)
        let workoutIds = Object.keys(workouts)

        dispatch(populateWorkouts(workouts))
        dispatch(populateRecentWorkouts(workoutIds))

        let categoryIds = Object.keys(workouts).map((workoutId) => workouts[workoutId].category)
        dispatch(fetchCategoriesIfNeeded(categoryIds))

        dispatch(fetchRecentWorkoutSuccess(new Date().getTime()))
      })
      .catch((error) => {
        console.error('Recent Workout Dispatcher', error)
        dispatch(fetchRecentWorkoutError(error.response, new Date().getTime()))
      })
  }
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