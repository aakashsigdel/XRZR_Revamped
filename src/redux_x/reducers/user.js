'use strict'
import {
  SET_USER,
  FETCH_USER,
  POPULATE_USERS,
  LOGIN_SUCCESS,
  LIKE_USER,
  FETCH_INSTAGRAM_PHOTOS,
  SET_INSTAGRAM_PHOTOS,
  UPDATE_USER_LOCAL
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'
import { mapUserApiKeysToAppKeys } from '../ApiUtilities'

const initialState = {
  isFetching: false,
  data: {}
}

const user = (state = initialState, action) => {
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
      const users = usersDataWithPresistence(action.users, state.data)
      return {
        ...state,
        data: {
          ...state.data,
          ...users
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
    case FETCH_INSTAGRAM_PHOTOS:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case SET_INSTAGRAM_PHOTOS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.userId]: {
            ...state.data[action.userId],
            instagramPhotos: action.data
          }
        }
      }
    case UPDATE_USER_LOCAL:
      return {
        ...state,
        data: {
          ...state.data,
          [action.user.id]: {
            ...state.data[action.user.id],
            ...action.user
          }
        }
      }
    default:
      return state
  }
}

const usersDataWithPresistence = (newUsers, oldUsers) => {
  let newData = {}
  Object.keys(newUsers).map((newUserId) => {
    const newUser = newUsers[newUserId]
    let oldUser = oldUsers[newUserId]
    if (!oldUser) {
      oldUser = {}
    }
    newData[newUserId] = {...oldUser, ...newUser}
  })
  return newData
}
export default user
