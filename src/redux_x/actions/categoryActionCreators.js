import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SWITCH_CATEGORY,
} from './actionTypes'

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const updateCategory = category => {
  return {
    type: UPDATE_CATEGORY,
    category
  }
}

export const deleteCategory = categoryId => {
  return {
    type: DELETE_CATEGORY,
    categoryId
  }
}