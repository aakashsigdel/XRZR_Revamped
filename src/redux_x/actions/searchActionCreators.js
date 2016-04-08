import {
  FETCH_SEARCH_RESULT,
  GET_SEARCH_RESULT
} from './actionTypes'

import { WORKOUT_SEARCH_URL } from '../../constants/appConstants'
import UrlBuilder from '../../utilities/UrlBuilder'
import ApiUtils from '../ApiUtilities'

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
    .toString()

  return (dispatch) => {
    dispatch(requestSearch())
    return fetch(searchUrl)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertEntitiesToKeyBasedDict)
      .then(ApiUtils.hydrateWorkouts)
      .then((workouts) => {
        console.log('search results')
        console.log(workouts)
      })
      .catch((error) => {
        dispatch(requestSearchFailure(error.response, new Date().getTime()))
      })
  }
}
