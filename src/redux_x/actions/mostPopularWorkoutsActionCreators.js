import {
  ADD_MOST_POPULAR_WORKOUTS,
  FETCH_MOST_POPULAR_WORKOUTS
} from './actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import ApiUtils from '../ApiUtilities'
import UrlBuilder from '../../utilities/UrlBuilder'
import * as WorkoutActions from './workoutActionCreators'
import * as CategoryActions from './categoryActionCreators'

export function addMostPopularWorkouts (workoutIds) {
  return {
    type: ADD_MOST_POPULAR_WORKOUTS,
    workoutIds
  }
}

function mostPopularRequest () {
  return {
    type: FETCH_MOST_POPULAR_WORKOUTS,
    status: 'fetch'
  }
}
function mostPopularFetchSuccess (receivedTime) {
  return {
    type: FETCH_MOST_POPULAR_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
function mostPopularFetchError (errorMessage, receivedTime) {
  return {
    type: FETCH_MOST_POPULAR_WORKOUTS,
    status: 'error',
    receivedTime,
    errorMessage
  }
}
export function fetchMostPopularWorkouts () {
  const mostPopularWorkout_url = new UrlBuilder(WORKOUT_BASE_URL)
    .addWithClause(['category'])
    .toString()

  return (dispatch) => {
    dispatch(mostPopularRequest())
    return fetch(mostPopularWorkout_url)
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

        dispatch(WorkoutActions.populateWorkouts(workouts))
        dispatch(addMostPopularWorkouts(workoutIds))
        dispatch(mostPopularFetchSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.log(ex)
        console.error('Maintainance Please')
        dispatch(mostPopularFetchError(ex.response, new Date().getTime()))
      })
  }
}
