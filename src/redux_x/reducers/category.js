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
  Bodyweight: {
    coverImage: 'http://www.mybs.com/wp-content/uploads/2013/04/surprised-cat-eric-hacke.jpg',
    tag: 'Bodyweight',
    workouts: [2, 6, 1, 4]
  },
  Zoga: {
    coverImage: 'http://i.imgur.com/jZGJdfx.jpg',
    tag: 'Zoga',
    workouts: [5, 2, 7, 9]
  },
  'Golly': {
    coverImage: 'http://i.imgur.com/eHDuAOE.jpg',
    tag: 'Golly',
    workouts: [2, 5, 1, 7]
  },
  Gutless: {
    coverImage: 'http://i.imgur.com/Y9oEEPO.jpg',
    tag: 'Gutless',
    workouts: [6, 2, 8, 3]
  }}

export default category
