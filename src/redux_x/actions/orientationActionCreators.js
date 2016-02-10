'use strict'

import { CHANGE_ORIENTATION } from './actionTypes'

export const changeOrientaton = orientationStatus => {
  return {
    type: CHANGE_ORIENTATION,
    orientationStatus
  }
}

