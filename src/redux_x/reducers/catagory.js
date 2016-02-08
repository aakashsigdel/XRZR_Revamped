'use strict'

import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from '../actions/actionTypes'

const category = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
    case UPDATE_CATEGORY:
      return {
        ...state,
        ...action.category
      }
    case DELETE_CATEGORY:
      return state.filter(category => category.id !== action.categoryId)
    default:
      return state
  }
}

export default category
