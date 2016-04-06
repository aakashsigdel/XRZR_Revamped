'use strict'

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR
} from '../actions/actionTypes'

const initialState = {
  access_token: null,
  expires_at: null,
  id: null,
  is_instructor: null,
  name: null,
  profile_pic: null,
  error: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.authData
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
