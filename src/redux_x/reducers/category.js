'use strict'

import {
  ADD_CATEGORY,
  RELOAD_CATEGORIES,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,

  FETCH_CATEGORIES,
  FETCH_CATEGORY_DETAILS
} from '../actions/actionTypes'

import { combineReducers } from 'redux'
import networkSwitches from './networkSwitches'

const category = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.category
        }
      }
    case RELOAD_CATEGORIES:
      return {
        ...state,
        data: {
          ...action.categories
        }
      }
    case UPDATE_CATEGORY:
      return {
        ...state,
        data: {
          ...state.data,
          [action.categoryId]: {
            ...state.data[action.categoryId],
            ...action.categoryData
          }
        }
      }
    case DELETE_CATEGORY:
      return state.data.filter((category) => category.id !== action.categoryId)

    case FETCH_CATEGORIES:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case FETCH_CATEGORY_DETAILS:
      return {
        ...state,
        ...networkSwitches(state, action)
      }

    default:
      return state
  }
}

const defaultState = {
  ...networkSwitches(),
  data: {
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
}

export default category
