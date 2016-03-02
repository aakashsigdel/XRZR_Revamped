import {
  SWITCH_CATEGORY,
  EDIT_FAVOURITE_EXERCISES_FLAG,
  EDIT_FAVOURITE_EXERCISES_DONE,
  SET_NEW_WORKOUT_ID
} from './actionTypes'

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

export const setNewWorkoutId = (id) => {
  return {
    type: SET_NEW_WORKOUT_ID,
    id
  }
}
