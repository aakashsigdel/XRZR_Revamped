
import networkSwitches from './networkSwitches'

const recentWorkout = (state = defaultState, action) => {
  return state
}

const defaultState = {
  ...networkSwitches(),
  data: [2, 6, 4, 3]
}

export default recentWorkout
