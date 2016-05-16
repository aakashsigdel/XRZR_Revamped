import {
  CHANGE_BROWSE_TAB,
  SWITCH_CATEGORY,
  EDIT_FAVOURITE_EXERCISES_FLAG,
  EDIT_FAVOURITE_EXERCISES_DONE,
  MODAL_DELETE_EXERCISE,
  SET_NEW_WORKOUT_ID,
  EDIT_WORKOUT_EXERCISES_ON_PROGRESS,
  CHANGE_ORIENTATION
} from './actionTypes'

export const switchBrowseTab = (selectedBrowseTab) => {
  return {
    type: CHANGE_BROWSE_TAB,
    selectedBrowseTab
  }
}
export const switchCategory = (category) => {
  return {
    type: SWITCH_CATEGORY,
    category
  }
}

export const editFavouriteExercisesFlag = () => {
  return {
    type: EDIT_FAVOURITE_EXERCISES_FLAG
  }
}

export const doneEditFavouriteExercisesFlag = () => {
  return {
    type: EDIT_FAVOURITE_EXERCISES_DONE
  }
}

export const changeDeleteExerciseModal = (showModal) => {
  return {
    type: MODAL_DELETE_EXERCISE,
    showModal
  }
}

export const setNewWorkoutId = (id) => {
  return {
    type: SET_NEW_WORKOUT_ID,
    id
  }
}

export const setEditWorkoutExercisesOnProgress = (onProgress) => {
  return {
    type: EDIT_WORKOUT_EXERCISES_ON_PROGRESS,
    onProgress
  }
}

export const changeOrientation = (orientation) => {
  if (orientation === 'PORTRAITUPSIDEDOWN') {
    return {type: 'BOGUS'}
  }
  return {
    type: CHANGE_ORIENTATION,
    orientation
  }
}
