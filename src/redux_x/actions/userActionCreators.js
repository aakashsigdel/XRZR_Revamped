'use strict'

import {
  FETCH_USER,
  SET_USER,
  POPULATE_USERS,
  LIKE_USER,
  FETCH_INSTAGRAM_PHOTOS,
  SET_INSTAGRAM_PHOTOS
} from './actionTypes'
import UrlBuilder from '../../utilities/UrlBuilder'
import { BASE_URL, APPUSER_LIKE_URL_FUNC, FAVOURITE_URL_FUNC } from '../../constants/appConstants'
import {
  awesomeFetchWrapper,
  getAccessTokenFromAsyncStorage
} from '../../utilities/utility'
import ApiUtils from '../ApiUtilities'

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const populateUsers = (users) => {
  return {
    type: POPULATE_USERS,
    users
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
  return (dispatch, getStore) => {
    dispatch(requestUser())

    const USER_URL = BASE_URL + '/appuser'
    getAccessTokenFromAsyncStorage()
    .then((responseData) => {
      //const tempUserId = 'ag5zfmJhY2tsZWN0LWFwcHIUCxIHYXBwdXNlchiAgICAq_OHCQyiAQl4cnpyLnhyenI'
      // const USER_URL_WITH_USERID = USER_URL + '/' + JSON.parse(responseData).access_token

      const USER_URL_WITH_USERID = new UrlBuilder(USER_URL + '/' + id)
          .addWithMyActions(['favorite'])
          .toString()

      const store = getStore()
      const accessToken = store.login.access_token

      const config = {
        method: 'get',
        headers: {
          'access-token': accessToken
        }
      }

      fetch(USER_URL_WITH_USERID, config)
        .then(ApiUtils.logger)
        .then(ApiUtils.checkStatus2xx)
        .then((response) => response.json())
        .then(ApiUtils.handleFavoriteActionFromResponse)
        .then((responseData) => {

          const userData = {
            ...responseData.entities[0].entity,
            id: responseData.entities[0].id
          }

          dispatch(setUser(userData))
          dispatch(receiveUser())
        })
        .catch((error) => {
          console.error('Hello from other side')
          dispatch(fetchUserFailure(error))
        })
    })
  }
}

export const likeUserLocal = (userId, like) => {
  return {
    type: LIKE_USER,
    userId,
    like
  }
}
export const likeUser = (userId, like) => {
  return (dispatch, getStore) => {
    const store = getStore()
    const accessToken = store.login.access_token

    const user = store.user.data[userId]

    let likeUserurl = ''
    if (!user.likeId) {
      likeUserurl = APPUSER_LIKE_URL_FUNC(userId)
    } else {
      likeUserurl = FAVOURITE_URL_FUNC(user.likeId)
    }

    const params = {
      method: 'post',
      headers: {
        'access-token': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({favorited: !!like})
    }
    return fetch(likeUserurl, params)
      .then(ApiUtils.logger)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => {
        console.log('success')
        dispatch(likeUserLocal(userId, like))
      })
      .catch((e) => {
        console.error(e)
      })

  }
}

export const fetchInstagramPhotos = (instagramId, userId) => {
  return (dispatch, getState) => {
    dispatch(fetchInstagramPhotosRequest())
    debugger
    const fetchParams = {
      url: 'https://api.instagram.com/v1/users/'
      + instagramId
      + '/media/recent/?access_token=' + getState().login.instagram_token + '&count=10',
      method: 'get'
    }
    return awesomeFetchWrapper(fetchParams)
    .then(response => {
      dispatch(setInstagramPhotos(response.data, userId))
      dispatch(fetchInstagramPhotosSuccess())
      console.log('get out')
    })
    .catch((error) => {
      dispatch(fetchInstagramPhotosFailure())
    })
  }
}

const fetchInstagramPhotosRequest = () => {
  return {
    type: FETCH_INSTAGRAM_PHOTOS,
    status: 'fetch'
  }
}

const fetchInstagramPhotosSuccess = () => {
  return {
    type: FETCH_INSTAGRAM_PHOTOS,
    status: 'success'
  }
}

const fetchInstagramPhotosFailure = (errorMessage) => {
  return {
    type: FETCH_INSTAGRAM_PHOTOS,
    status: 'error',
    errorMessage
  }
}

const setInstagramPhotos = (data, userId) => {
  return {
    type: SET_INSTAGRAM_PHOTOS,
    data,
    userId
  }
}
