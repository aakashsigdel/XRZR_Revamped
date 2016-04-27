import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR,
  UPDATE_USER,
  UPDATE_USER_LOCAL
} from './actionTypes'
import { AsyncStorage } from 'react-native'
import { FBSDKLoginManager } from 'react-native-fbsdklogin'
import { FBSDKAccessToken } from 'react-native-fbsdkcore'
import { LOGIN_URL } from '../../constants/appConstants'
import { LOGIN_STORAGE_KEY } from '../../constants/appConstants'
import {
  awesomeFetchWrapper,
  getAccessTokenFromAsyncStorage
} from '../../utilities/utility'
import { BASE_URL } from '../../constants/appConstants'

// login fuction to login with facebook
export const login = () => {
  return (dispatch) => {
    FBSDKLoginManager.logOut()
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
    getUserDetails(dispatch, responseData)
  })
}

const getUserDetails = (dispatch, responseData) => {
  const params = {
    url: BASE_URL + '/me',
    headers: {
      'access-token': responseData.access_token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  awesomeFetchWrapper(params)
  .then(data => {
    const userData = {
      ...data.entities[0].entity,
      ...responseData,
      id: data.entities[0].id
    }
    setLoginDetailsToAsyncStorage(dispatch, userData)
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

export const updateUser = (user) => {
  return (dispatch, getState) => {
    const userWithId =  {
      ...user,
      id: getState().login.id
    }
    dispatch(updateUserStart())
    getAccessTokenFromAsyncStorage()
    .then((response) => {
      const userData = JSON.parse(response) 
      const data = {
        url: BASE_URL + '/appuser' + '/' + userData.id,
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'access-token': userData.access_token
        },
        body: JSON.stringify(user)
      }
      awesomeFetchWrapper(data)
      .then(responseData => {
        dispatch(updateUserLocal(userWithId))
        dispatch(updateUserSuccess())
      })
      .catch(error => dispatch(updateUserFailure(error)))
    })
  }
}

const updateUserSuccess = () => {
  return {
    type: UPDATE_USER,
    status: 'success'
  }
}

const updateUserStart = () => {
  return {
    type: UPDATE_USER,
    status: 'fetch'
  }
}

const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER,
    status: 'error',
    errorMessage: error
  }
}

const updateUserLocal = (user) => {
  return {
    type: UPDATE_USER_LOCAL,
    user
  }
}
