import {
  FETCH_SEARCH_RESULT
} from '../actions/actionTypes'

import networkSwitches from './networkSwitches'

const search = (state = defaultState, action) => {
  return state
}

const defaultState = {
  ...networkSwitches(),
  workouts: {
    searchString: {
      query: 'searchString',
      workouts: []
    }
  }
}

export default search
