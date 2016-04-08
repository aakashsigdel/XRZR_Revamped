
import {
  ADD_PURE_EXERCISE,
  POPULATE_PURE_EXERCISE
} from '../actions/actionTypes'

import networkSwitches from './networkSwitches'

const pureExercise = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PURE_EXERCISE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.exerciseId]: action.exercise
        }
      }
    case POPULATE_PURE_EXERCISE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.exercises
        }
      }
  }
  return state
}

const defaultState = {
  ...networkSwitches(),
  data: {
    id: {
      id: 'id',
      title: 'exercise title',
      description: 'exercise description',
      video: 'http://aakashsigdel.github.io/XRZR_Files/Exercises/spiderman%20push%20up.mov',
      sound: false,
      tags: '#tags #video #dummy'
    }
  }
}

export default pureExercise
