import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR
} from './actionTypes'
import { AsyncStorage } from 'react-native'
import { FBSDKLoginManager } from 'react-native-fbsdklogin'
import { FBSDKAccessToken } from 'react-native-fbsdkcore'
import { LOGIN_URL } from '../../constants/appConstants'
import { LOGIN_STORAGE_KEY } from '../../constants/appConstants'

// login fuction to login with facebook
export const login = () => {
  return (dispatch) => {
    FBSDKLoginManager.logInWithReadPermissions(['email'], (error, result) => {
      if (error) {
        dispatch(loginFailure(error))
      } else {
        if (result.isCancelled) {
          dispatch(loginFailure({error: 'login canclled'}))
        } else {
          getAccessToken(dispatch)
        }
      }
    })
  }
}

// helper function to get access token
const getAccessToken = (dispatch) => {
  FBSDKAccessToken.getCurrentAccessToken((token) => {
    if (token) {
      loginIntoXRZR(dispatch, token)
    }
  })
}

// helper faction to convert token from facebook to xrzr
const loginIntoXRZR = (dispatch, token) => {
  const URL_WITH_TOKEN = LOGIN_URL + '?access_token=' + token.tokenString
  fetch(URL_WITH_TOKEN)
  .then((response) => response.json())
  .then(responseData => {
    setLoginDetailsToAsyncStorage(dispatch, responseData)
  })
  .catch((error) => {
  })
}

// helper function to set xrzr access token to async storage
const setLoginDetailsToAsyncStorage = (dispatch, loginDetails) => {
  AsyncStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(loginDetails))
  .then(() => {
    dispatch(loginSuccess(loginDetails))
  })
  
}

// action creator loginFailure
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

// action creator loginSuccess
export const loginSuccess = (authData) => {
  return {
    type: LOGIN_SUCCESS,
    authData
  }
}

// action creator to clear error
export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}
