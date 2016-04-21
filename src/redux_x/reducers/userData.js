'use strict'
import {
  LIKE_WORKOUT,
  LIKE_EXERCISE,
  POPULATE_FAVOURITE_EXERCISES,
  POPULATE_FAVOURITE_WORKOUTS,
  REMOVE_FAVOURITE_EXERCISE
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'

const userData = (state = defaultState, action) => {
  switch (action.type) {
    case REMOVE_FAVOURITE_EXERCISE:
      const favExercises = state.favouriteExercises.data
      return {
        ...state,
        favouriteExercises: {
          ...state.favouriteExercises,
          data: favExercises.slice(0, favExercises.indexOf(action.exerciseId))
            .concat(favExercises.slice(favExercises.indexOf(action.exerciseId) + 1, favExercises.length))
        }
      }
    case LIKE_WORKOUT:
      const favWorkouts = state.favouriteWorkouts
      return {
        ...state,
        favouriteWorkouts: {
          ...state.favouriteWorkouts,
          data: [...favWorkouts, action.workoutId]
        }
      }
    case LIKE_EXERCISE:
      return {
        ...state,
        favouriteExercises: {
          ...state.favouriteExercises,
          data: [...state.favouriteExercises, action.exerciseId]
        }
      }
    case POPULATE_FAVOURITE_EXERCISES:
      return {
        ...state,
        favouriteExercises: {
          ...state.favouriteExercises,
          data: action.exerciseIds
        }
      }
    case POPULATE_FAVOURITE_WORKOUTS:
      return {
        ...state,
        favouriteWorkouts: {
          ...state.favouriteWorkouts,
          data: action.workoutIds
        }
      }
  }
  return state
}

const defaultState = {
  favouriteExercises: {
    ...networkSwitches(),
    data: []
  },
  favouriteWorkouts: {
    ...networkSwitches(),
    data: []
  }
}

export default userData
