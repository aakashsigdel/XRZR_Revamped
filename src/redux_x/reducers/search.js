import {
  FETCH_SEARCH_RESULT,
  POPULATE_SEARCH_RESULT
} from '../actions/actionTypes'

import networkSwitches from './networkSwitches'

const search = (state = defaultState, action) => {
  switch (action.type) {
    case POPULATE_SEARCH_RESULT:
      return {
        ...state,
        latestSearchQuery: action.searchQuery,
        workouts: {
          ...state.workouts,
          [action.searchQuery]: {
            query: action.searchQuery,
            data: action.workouts
          }
        }
      }
    case FETCH_SEARCH_RESULT:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
  }
  return state
}

const defaultState = {
  ...networkSwitches(),
  latestSearchQuery: '',
  workouts: {
    searchString: {
      query: 'searchString',
      data: []
    }
  }
}

export default search
