import {
  ADD_TRENDING_WORKOUTS,
  FETCH_TRENDING_WORKOUTS
} from '../actions/actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import ApiUtils from '../ApiUtilities'
import UrlBuilder from '../../utilities/UrlBuilder'
import * as WorkoutActions from './workoutActionCreators'
import * as CategoryActions from './categoryActionCreators'

export function addTrendingWorkouts (workoutIds) {
  return {
    type: ADD_TRENDING_WORKOUTS,
    workoutIds
  }
}

export function trendingWorkoutRequest() {
  return {
    type: FETCH_TRENDING_WORKOUTS,
    status: 'fetch'
  }
}
export function trendingWorkoutsSuccess (receivedTime) {
  return {
    type: FETCH_TRENDING_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
export function trendingWorkoutsError (errorMessage, receivedTime) {
  return {
    type: FETCH_TRENDING_WORKOUTS,
    status: 'error',
    errorMessage,
    receivedTime
  }
}

export function fetchTrendingWorkouts () {
  const trending_api_url = new UrlBuilder(WORKOUT_BASE_URL)
    .addWithClause(['category'])
    .toString()

  return (dispatch) => {
    dispatch(trendingWorkoutRequest())
    return fetch(trending_api_url)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((jsonResponse) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(jsonResponse, ['category'])

        let categories = keyBasedData['category']
        categories = ApiUtils.hydrateCategories(categories)
        CategoryActions.addCategory(categories)

        return keyBasedData.data
      })
      .then(ApiUtils.hydrateWorkouts)
      .then((workouts) => {
        let workoutIds = Object.keys(workouts)
        workoutIds.reverse()

        dispatch(WorkoutActions.populateWorkouts(workouts))
        dispatch(addTrendingWorkouts(workoutIds))
        dispatch(trendingWorkoutsSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.log(ex)
        console.error('Maintainance Please')
        dispatch(trendingWorkoutsError(ex.response, new Date().getTime()))
      })

  }
}
