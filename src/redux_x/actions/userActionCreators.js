'use strict'

import {
  FETCH_USER,
  SET_USER
} from './actionTypes'
import { BASE_URL } from '../../constants/appConstants'
import { getAccessTokenFromAsyncStorage } from '../../utilities/utility'

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const requestUser = () => {
  return {
    type: FETCH_USER,
    status: 'fetch'
  }
}

export const receiveUser = () => {
  return {
    type: FETCH_USER,
    status: 'success'
  }
}

export const fetchUserFailure = (errorMessage) => {
  return {
    type: FETCH_USER,
    status: 'error',
    errorMessage
  }
}

export const fetchUser = (id) => {
  return (dispatch) => {
    dispatch(requestUser())

    const USER_URL = BASE_URL + '/appuser'
    getAccessTokenFromAsyncStorage()
    .then((responseData) => {
      const tempUserId = 'ag5zfmJhY2tsZWN0LWFwcHIUCxIHYXBwdXNlchiAgICAq_OHCQyiAQl4cnpyLnhyenI'
      // const USER_URL_WITH_USERID = USER_URL + '/' + JSON.parse(responseData).access_token
      const USER_URL_WITH_USERID = USER_URL + '/' + tempUserId
      fetch(USER_URL_WITH_USERID)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(userData, 'userData')
        const userData = {
          ...responseData.entities[0].entity,
          id: responseData.entities[0].id
        }
        dispatch(setUser(userData))
        dispatch(receiveUser())
      })
      .catch((error) => dispatch(fetchUserFailure(error)))
    })
  }
}

