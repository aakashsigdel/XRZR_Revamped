'use strict'

import { CHANGE_ORIENTATION } from './actionTypes'

const POTRAIT = 'POTRAIT'
const LANDSCAPE = 'LANDSCAPE'


initialState = {
  orientationStatus: POTRAIT
}

export orientation = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ORIENTATION:
      return {
        ...state,
        orientation: action.orientationStatus
      }
    default:
      return state
  }
}
