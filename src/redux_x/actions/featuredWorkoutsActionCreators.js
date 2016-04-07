import {
  ADD_FEATURED_WORKOUTS,
  FETCH_FEATURED_WORKOUTS
} from './actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import ApiUtils from '../ApiUtilities'
import UrlBuilder, {Filter} from '../../utilities/UrlBuilder'
import * as WorkoutActions from './workoutActionCreators'
import * as CategoryActions from './categoryActionCreators'

export function addFeaturedWorkouts (workoutIds) {
  return {
    type: ADD_FEATURED_WORKOUTS,
    workoutIds
  }
}

function featuredWorkoutsRequest () {
  return {
    type: FETCH_FEATURED_WORKOUTS,
    status: 'fetch'
  }
}
function featuredWorkoutsFetchSuccess (receivedTime) {
  return {
    type: FETCH_FEATURED_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
function featuredWorkoutsFetchError (errorMessage, receivedTime) {
  return {
    type: FETCH_FEATURED_WORKOUTS,
    status: 'error',
    receivedTime,
    errorMessage
  }
}
export function fetchFeaturedWorkouts () {

  let featured_api_uri = new UrlBuilder(WORKOUT_BASE_URL)
    .addWithClause(['category'])
    .addFilter(new Filter('featured', true))
    .toString()

  return (dispatch) => {
    dispatch(featuredWorkoutsRequest())
    return fetch(featured_api_uri)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((response) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(response, ['category'])

        let categories = keyBasedData['category']
        categories = ApiUtils.hydrateCategories(categories)
        CategoryActions.addCategory(categories)

        return keyBasedData.data
      })
      .then(ApiUtils.hydrateWorkouts)
      .then((workouts) => {
        let workoutIds = Object.keys(workouts)

        dispatch(WorkoutActions.populateWorkouts(workouts))
        dispatch(addFeaturedWorkouts(workoutIds))
        dispatch(featuredWorkoutsFetchSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.log(ex)
        console.error('Maintainance Please')
        dispatch(featuredWorkoutsFetchError(ex.response, new Date().getTime()))
      })
  }
}
