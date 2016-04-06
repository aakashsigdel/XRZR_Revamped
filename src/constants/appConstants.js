'use strict'

import { Dimensions } from 'react-native'

export const VIEWPORT = Dimensions.get('window')

// height in iphone6 is 64 which is 9.59% of the iphone6 window height
export const HEADERBAR_HEIGHT = 0.0959 * VIEWPORT.height

// orientation constants
export const ORIENTATION = {
  PORTRAIT: 'PORTRAIT',
  LANDSCAPE: 'LANDSCAPE'
}

const URL = 'https://xrzr.backlect.com/api/xrzr'
const VERSION = '/v1.0'
const LOGIN_PATH = '/auth/facebook/convert-token'
export const BASE_URL = URL + VERSION
export const LOGIN_URL = URL + LOGIN_PATH

export const LOGIN_STORAGE_KEY = '@XRZR_LOGIN_STORAGE_KEY'

export const CATEGORY_BASE_URL = URL + '/v1.0/category'
export const WORKOUT_BASE_URL = URL + '/v1.0/workout'
export const WORKOUT_EXERCISES_URL = URL + '/v1.0/workout_exercise'
export const EXERCISE_BASE_URL = URL + '/v1.0/exercise'

export const WORKOUT_URL_FUNC = (WORKOUT_ID) => `${WORKOUT_BASE_URL}/${WORKOUT_ID}`
export const WORKOUT_LIKE_URL_FUNC = (WORKOUT_ID) => `${WORKOUT_URL_FUNC(WORKOUT_ID)}/favorite`
export const RECENT_WORKOUT_URL_FUNC = (WORKOUT_ID) => `${WORKOUT_BASE_URL}/${WORKOUT_ID}/view`

export const EXERCISE_URL_FUNC = (EXERCISE_ID) => `${EXERCISE_BASE_URL}/${EXERCISE_ID}`
export const EXERCISE_LIKE_URL_FUNC = (EXERCISE_ID) => `${EXERCISE_URL_FUNC(EXERCISE_ID)}/favorite`
