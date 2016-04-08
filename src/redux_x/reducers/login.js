'use strict'

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR,
  UPDATE_USER,
  UPDATE_USER_LOCAL
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'

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
    case UPDATE_USER:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case UPDATE_USER_LOCAL:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}

export default login
