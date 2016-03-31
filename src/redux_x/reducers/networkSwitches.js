/**
 * Adds isFetching, lastUpdated, items, errorMessage based on network status of action
 * action.status can be ['fetch', 'success', 'error']
 * @param state
 * @param action
 * @returns {*}
 */

const networkSwitches = (state = defaultState, action={}) => {
  switch (action.status) {
    case 'fetch':
      return {
        ...state,
        isFetching: true
      }
    case 'success':
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.receivedTime
      }
    case 'error':
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.receivedTime,
        errorMessage: action.errorMessage
      }
  }
}

const defaultState = {
  isFetching: false,
  lastUpdated: undefined,
  errorMessage: ''
}

export default networkSwitches
