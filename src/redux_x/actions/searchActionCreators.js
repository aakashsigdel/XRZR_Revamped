import {
  FETCH_SEARCH_RESULT,
  GET_SEARCH_RESULT,
  POPULATE_SEARCH_RESULT
} from './actionTypes'

import { WORKOUT_SEARCH_URL } from '../../constants/appConstants'
import UrlBuilder from '../../utilities/UrlBuilder'
import ApiUtils from '../ApiUtilities'
import * as WorkoutActions from './workoutActionCreators'
import * as CategoryActions from './categoryActionCreators'
import * as UserActions from './userActionCreators'

export const populateSearchData = (searchQuery, workouts) => {
  return {
    type: POPULATE_SEARCH_RESULT,
    searchQuery,
    workouts
  }
}

export const requestSearch = () => {
  return {
    type: FETCH_SEARCH_RESULT,
    status: 'fetch'
  }
}

export const receiveSearchResult = (receivedTime) => {
  return {
    type: FETCH_SEARCH_RESULT,
    status: 'success',
    receivedTime
  }
}

export const requestSearchFailure = (errorMessage, receivedTime) => {
  return {
    type: FETCH_SEARCH_RESULT,
    status: 'error',
    errorMessage,
    receivedTime
  }
}

export const getSearchResult = (result) => {
  return {
    type: GET_SEARCH_RESULT,
    result
  }
}

export const fetchSearchResult = (queryString) => {
  const searchUrl = new UrlBuilder(WORKOUT_SEARCH_URL)
    .addSearchQueryString(queryString)
    .addWithMetaDataClause(['created_by'])
    .addWithClause(['category'])
    .toString()

  return (dispatch) => {

    dispatch(requestSearch())
    return fetch(searchUrl)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
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
      .then(ApiUtils.logger)
      .then(ApiUtils.hydrateWorkouts)
      .then((workouts) => {
        let workoutIds = Object.keys(workouts)
        
        dispatch(populateSearchData(queryString, workoutIds))
        dispatch(WorkoutActions.populateWorkouts(workouts))
        dispatch(receiveSearchResult(new Date().getTime()))
      })
      .catch((error) => {
        dispatch(requestSearchFailure(error.response, new Date().getTime()))
        console.error(error)
      })
  }
}
