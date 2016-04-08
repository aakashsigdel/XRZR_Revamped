'use strict'

import { AsyncStorage } from 'react-native'
import { LOGIN_STORAGE_KEY } from '../constants/appConstants'

export const getAccessTokenFromAsyncStorage = () => {
  // AsyncStorage.removeItem(LOGIN_STORAGE_KEY)
  return AsyncStorage.getItem(LOGIN_STORAGE_KEY).then(response => {
    console.log(response)
    return response
  })
}

export const awesomeFetchWrapper = ({url, method, headers, body}) => {
  return fetch(url, {
    method,
    headers,
    body
  })
  .then(response => response.json())
}
