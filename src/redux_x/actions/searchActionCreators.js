import {
  FETCH_SEARCH_RESULT,
  GET_SEARCH_RESULT
} from './actionTypes'
import { BASE_URL } from '../../constants/appConstants'

export const requestSearch = () => {
  return {
    type: FETCH_SEARCH_RESULT,
    status: 'fetch'
  }
}

export const receiveSearchResult = () => {
  return {
    type: FETCH_SEARCH_RESULT,
    status: 'success'
  }
}

export const requestSearchFailure = () => {
  return {
    type: FETCH_SEARCH_RESULT,
    status: 'error'
  }
}

export const getSearchResult = (result) => {
  return {
    type: GET_SEARCH_RESULT,
    result
  }
}

export const fetchSearchResult  = (queryString) => {
}
