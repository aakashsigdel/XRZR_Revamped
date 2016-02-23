'use strict'

import { GET_USER } from './actionTypes'

export const getUser = (userId) => {
  return {
    type: GET_USER,
    userId
  }
}
