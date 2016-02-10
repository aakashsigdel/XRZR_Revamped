'use strict'

import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  DELETE_WORKOUT
} from '../actions/actionTypes'

const workout = (state = defaultWorkout, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
    case UPDATE_WORKOUT:
      return {
        ...state,
        ...action.workout
      }
    case DELETE_WORKOUT:
      return state.filter(workout => workout.id !== action.workoutId)
    default:
      return state
  }
}

const defaultWorkout = {
  1: {
    id: 1,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'Sail me skiff, ye stormy freebooter!'
  },
  2: {
    id: 2,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'The cloud pulls with faith, command the freighter.'
  }
}
export default workout
