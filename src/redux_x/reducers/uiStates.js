'use strict'

import {
  SWITCH_CATEGORY,
  EDIT_FAVOURITE_EXERCISES_DONE,
  EDIT_FAVOURITE_EXERCISES_FLAG,
  MODAL_DELETE_EXERCISE
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
    case MODAL_DELETE_EXERCISE:
      return {
        ...state,
        showModalDeleteExercise: action.showModal
      }
  }
  return state
}

const defaultState = {
  selectedCategory: 'Yoga',
  editFavouriteExercises: false,
  editWorkoutExercisesList: false,

  showModalDeleteExercise: false
}

export default uiStates
