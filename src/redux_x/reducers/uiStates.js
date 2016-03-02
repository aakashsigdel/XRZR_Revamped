'use strict'

import {
  SWITCH_CATEGORY,
  EDIT_FAVOURITE_EXERCISES_DONE,
  EDIT_FAVOURITE_EXERCISES_FLAG
} from '../actions/actionTypes'

const uiStates = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_CATEGORY:
      return {
        ...state,
        selectedCategory: action.category
      }
    case EDIT_FAVOURITE_EXERCISES_FLAG:
      return {
        ...state,
        editFavouriteExercises: true
      }
    case EDIT_FAVOURITE_EXERCISES_DONE:
      return {
        ...state,
        editFavouriteExercises: false
      }
  }
  return state
}

const defaultState = {
  selectedCategory: 'Yoga',
  editFavouriteExercises: false,
  editWorkoutExercisesList: false,
  newWorkoutId: null
}

export default uiStates
