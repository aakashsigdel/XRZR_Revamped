'use strict'

import {
  AsyncStorage,
  NativeModules
} from 'react-native'
import { LOGIN_STORAGE_KEY } from '../constants/appConstants'
import Share from 'react-native-share'
import Mixpanel, * as MixpanelConfig from '../constants/MixPanelConfigs'

export const getAccessTokenFromAsyncStorage = () => {
   //AsyncStorage.removeItem(LOGIN_STORAGE_KEY)
  return AsyncStorage.getItem(LOGIN_STORAGE_KEY).then(response => {
    return response
  })
}

export const removeAccessTokenFromAsyncStorage = () => {
  AsyncStorage.removeItem(LOGIN_STORAGE_KEY)
}

export const awesomeFetchWrapper = ({url, method, headers, body}) => {
  return fetch(url, {
    method,
    headers,
    body
  })
  .then(response => response.json())
}

// options ={share_text, share_URL, title}
export const shareOnFacebook = (options, callback) => {
  Mixpanel.track(MixpanelConfig.WORKOUT_SHARE)
  Share.open(options, callback)
}
