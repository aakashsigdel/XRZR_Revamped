// Mixpanel configs

import Mixpanel from 'react-native-mixpanel'

// changing project token here will not change anything go to appDeligate.m
const MIXPANEL_PROJECT_TOKEN = '0b2cb44f917f7ae7305b2d1723ec52a9'
Mixpanel.sharedInstanceWithToken(MIXPANEL_PROJECT_TOKEN)

export default Mixpanel

// Mixpanel Actions
export const SIGNIN = 'SIGNIN'
export const WORKOUT_VIEW = 'WORKOUT_VIEW'
export const WORKOUT_START = 'WORKOUT_START'
export const WORKOUT_DONE = 'WORKOUT_DONE'
export const WORKOUT_PAUSE = 'WORKOUT_PAUSE'
export const WORKOUT_CLOSE = 'WORKOUT_CLOSE'
export const WORKOUT_NEXT = 'WORKOUT_NEXT'
export const WORKOUT_PREV = 'WORKOUT_PREV'
export const WORKOUT_SHARE = 'WORKOUT_SHARE'
export const WORKOUT_LIKE = 'WORKOUT_LIKE'
export const EXERCISE_LIKE = 'EXERCISE_LIKE'

export const SEARCH_VIEW = 'SEARCH_VIEW'
export const SEARCHING = 'SEARCHING'
export const BROWSE_FEATURED = 'BROWSE_FEATURED'
export const BROWSE_TRENDING = 'BROWSE_TRENDING'
export const BROWSE_CATEGORY = 'BROWSE_CATEGORY'
export const BROWSE_POPULAR = 'BROWSE_POPULAR'
export const BROWSE_SELECTED = 'BROWSE_SELECTED'
export const BROWSE_FAVOURITE = 'BROWSE_FAVOURITE'

export const FAVOURITE_EXERCISE_EDIT = 'FAVOURITE_EXERCISE_EDIT'
export const FAVOURITE_EXERCISE_SAVE = 'FAVOURITE_EXERCISE_SAVE'
export const FAVOURITE_EXERCISE_DELETE = 'FAVOURITE_EXERCISE_DELETE'

export const WORKOUT_EXERCISE_ACTIONS = 'WORKOUT_EXERCISE_ACTIONS'

export const PROFILE_LIKE = 'PROFILE_LIKE'
export const PROFILE_SETTINGS = 'PROFILE_SETTINGS'
export const PREMIUM_VIEW = 'PREMIUM_VIEW'
export const PREMIUM_BUY = 'PREMIUM_BUY'

export const WORKOUT_CREATE = 'WORKOUT_CREATE'
