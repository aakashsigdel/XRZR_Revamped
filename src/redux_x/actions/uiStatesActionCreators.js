import {
  SWITCH_CATEGORY,
  EDIT_FAVOURITE_EXERCISES_FLAG,
  EDIT_FAVOURITE_EXERCISES_DONE
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