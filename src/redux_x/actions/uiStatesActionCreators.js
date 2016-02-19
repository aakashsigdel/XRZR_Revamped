import {
  SWITCH_CATEGORY
} from './actionTypes'

export const switchCategory = (category) => {
  return {
    type: SWITCH_CATEGORY,
    category
  }
}
