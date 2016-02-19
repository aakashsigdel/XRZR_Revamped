'use strict'

import { SWITCH_CATEGORY } from '../actions/actionTypes'

const uiStates = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category
      }
  }
  return state
}

const defaultState = {
  selectedCategory: 'Yoga'
}

export default uiStates
