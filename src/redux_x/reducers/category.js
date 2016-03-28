'use strict'

import {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from '../actions/actionTypes'

const category = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
    case UPDATE_CATEGORY:
      return {
        ...state,
        ...action.category
      }
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.categoryId)
    default:
      return state
  }
}

const defaultState = {
  //Bodyweight: {
  //  coverImage: 'http://aakashsigdel.github.io/XRZR_Files/Categories/bodyweight.png',
  //  tag: 'Bodyweight',
  //  workouts: [2, 6, 1, 4]
  //},
  //Kettlebells: {
  //  coverImage: 'http://aakashsigdel.github.io/XRZR_Files/Categories/kettlebells.png',
  //  tag: 'Kettlebells',
  //  workouts: [5, 2, 7]
  //},
  //Pilates: {
  //  coverImage: 'http://aakashsigdel.github.io/XRZR_Files/Categories/pilates.png',
  //  tag: 'Pilates',
  //  workouts: [2, 5, 1, 7]
  //},
  //'The Gym': {
  //  coverImage: 'http://aakashsigdel.github.io/XRZR_Files/Categories/the%20gym.png',
  //  tag: 'The Gym',
  //  workouts: [6, 2, 3]
  //},
  //'TRX': {
  //  coverImage: 'http://aakashsigdel.github.io/XRZR_Files/Categories/trx.png',
  //  tag: 'TRX',
  //  workouts: [6, 2, 3]
  //},
  //'Yoga': {
  //  coverImage: 'http://aakashsigdel.github.io/XRZR_Files/Categories/yoga.png',
  //  tag: 'Yoga',
  //  workouts: [6, 2, 3]
  //}
}

export default category
