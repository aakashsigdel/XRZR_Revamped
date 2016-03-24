'use strict'

import {
  FETCH_CATEGORIES
} from '../actions/actionTypes'

import browseScreen from './AsyncReducers/browseScreen'

const asyncStates = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return Object.assign({}, state, {
        browseScreen: browseScreen(state.browseScreen, action)
      })
    default:
      return state
  }
}

const defaultState = {
  browseScreen: browseScreen({}, {})
}

export default asyncStates
