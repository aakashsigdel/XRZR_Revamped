'use strict'
import {
  REMOVE_FAVOURITE_EXERCISE
} from '../actions/actionTypes'

const userData = (state = defaultState, action) => {
  switch (action.type) {
    case REMOVE_FAVOURITE_EXERCISE:
      const favExercises = state.favouriteExercises
      return {
        ...state,
        favouriteExercises: favExercises.slice(0, favExercises.indexOf(action.exerciseId))
          .concat(favExercises.slice(favExercises.indexOf(action.exerciseId) + 1, favExercises.length))
      }
  }
  return state
}

const defaultState = {
  favouriteExercises: [3, 2, 5, 1, 7, 9, 10, 20]
}

export default userData
