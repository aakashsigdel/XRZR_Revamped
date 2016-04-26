import {
  ADD_FEATURED_WORKOUTS,
  FETCH_FEATURED_WORKOUTS
} from './actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import ApiUtils from '../ApiUtilities'
import UrlBuilder, {AndFilter, Filter} from '../../utilities/UrlBuilder'
import * as WorkoutActions from './workoutActionCreators'
import * as CategoryActions from './categoryActionCreators'
import * as UserActions from './userActionCreators'

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
    .addFilter(
      new AndFilter(
        new Filter('featured', true),
        new Filter('published', true)))
    .addWithMetaDataClause(['created_by'])
    .addWithActions(['favorite'])
    .toString()

  return (dispatch) => {
    dispatch(featuredWorkoutsRequest())
    return fetch(featured_api_uri)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.handleFavoriteActionFromResponse)
      .then((response) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(response, ['category'], ['created_by'])

        let categories = keyBasedData['category']
        categories = ApiUtils.hydrateCategories(categories)
        dispatch(CategoryActions.addCategory(categories))

        let instructors = keyBasedData['created_by']
        instructors = ApiUtils.hydrateInstructors(instructors)
        dispatch(UserActions.populateUsers(instructors))

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
