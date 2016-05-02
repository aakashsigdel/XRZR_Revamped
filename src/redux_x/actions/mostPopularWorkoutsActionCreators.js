import {
  ADD_MOST_POPULAR_WORKOUTS,
  FETCH_MOST_POPULAR_WORKOUTS
} from './actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'

import UrlBuilder, {Filter} from '../../utilities/UrlBuilder'

import ApiUtils from '../ApiUtilities'
import * as WorkoutActions from './workoutActionCreators'
import * as CategoryActions from './categoryActionCreators'
import * as UserActions from './userActionCreators'

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
    .addFilter(new Filter('published', true))
    .addWithClause(['category'])
    .addWithMetaDataClause(['created_by'])
    .addWithActions(['favorite'])
    .toString()

  return (dispatch, getStore) => {
    const store = getStore()
    const accessToken = store.login.access_token
    const config = {headers: {'access-token': accessToken}}

    dispatch(mostPopularRequest())
    return fetch(mostPopularWorkout_url, config)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.handleFavoriteActionFromResponse)
      .then((jsonResponse) => {
        let keyBasedData = ApiUtils.convertEntitiesToKeyBasedDictDenormalizedBy(jsonResponse, ['category'], ['created_by'])

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
