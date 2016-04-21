'use strict'
import {
  SET_USER,
  FETCH_USER,
  POPULATE_USERS,
  LOGIN_SUCCESS,
  LIKE_USER
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'
import { mapUserApiKeysToAppKeys } from '../ApiUtilities'

const initialState = {
  isFetching: false,
  data: {}
}

const user = (state = initialState , action) => {
  switch (action.type) {
    case SET_USER:
      const user = mapUserApiKeysToAppKeys(action.user)
      return {
        ...state,
        data: {
          ...state.data,
          [user.id]: {
            ...user
          }
        }
      }
    case POPULATE_USERS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.users
        }
      }
    case FETCH_USER:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case LOGIN_SUCCESS:
      const loginUser = mapUserApiKeysToAppKeys(action.authData)
      return {
        ...state,
        data: {
          ...state.data,
          [loginUser.id]: {
            ...loginUser
          }
        }
      }
    case LIKE_USER:
      return {
        ...state,
        data: {
          ...state.data,
          [action.userId]: {
            ...state.data[action.userId],
            like: action.like
          }
        }
      }
    default:
      return state
  }
  return state
}

export default user
