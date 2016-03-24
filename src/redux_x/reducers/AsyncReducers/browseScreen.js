
import {
  FETCH_CATEGORIES
} from '../../actions/actionTypes'

const browseScreen = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: {
          ...networkSwitches(state, action)
        }
      }
  }
  return state
}

const networkSwitches = (state = defaultState, action) => {
  switch (action.status) {
    case 'fetch':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case 'success':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedTime,
        items: action.items
      }
    case 'error':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedTime,
        errorMsg: action.errorMsg
      }
  }
}

const defaultState = {
  categories: {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: undefined,
    items: []
  }
}

export default browseScreen
