'use strict'

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR
} from '../actions/actionTypes'

const initialState = {
  access_token: null,
  error: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.authData.access_token
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}

export default login
