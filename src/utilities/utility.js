'use strict'

import { AsyncStorage } from 'react-native'
import { LOGIN_STORAGE_KEY } from '../constants/appConstants'

export const getAccessTokenFromAsyncStorage = () => {
  return AsyncStorage.getItem(LOGIN_STORAGE_KEY)
}
