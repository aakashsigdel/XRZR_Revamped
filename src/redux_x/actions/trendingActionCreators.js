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
import * as UserActions from './userActionCreators'

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
    .addWithMetaDataClause(['created_by'])
    .addWithActions(['favorite'])
    .toString()

  return (dispatch, getStore) => {
    const store = getStore()
    const access_token = store.login.access_token
    const params = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'access-token': access_token
      }
    }

    dispatch(trendingWorkoutRequest())
    return fetch(trending_api_url, params)
      .then(ApiUtils.checkStatus2xx)
      .then(ApiUtils.logger)
      .then((response) => response.json())
      .then((jsonResponse) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(jsonResponse, ['category'], ['created_by'])

        let categories = keyBasedData['category']
        categories = ApiUtils.hydrateCategories(categories)
        CategoryActions.addCategory(categories)

        let instructors = keyBasedData['created_by']
        instructors = ApiUtils.hydrateInstructors(instructors)
        dispatch(UserActions.populateUsers(instructors))

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
