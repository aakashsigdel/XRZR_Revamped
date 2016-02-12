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
      return state.filter(category => category.id !== action.categoryId)
    default:
      return state
  }
}

const defaultState = {
  Swabbies: {
    coverImage: 'http://i.imgur.com/38nCBJi.jpg',
      tag: 'Swabbies'
  },
  Grace: {
    coverImage: 'http://i.imgur.com/jZGJdfx.jpg',
    tag: 'Grace',
  },
  'Golly gosh': {
    coverImage: 'http://i.imgur.com/eHDuAOE.jpg',
    tag: 'Golly gosh'
  },
  Gutless: {
  coverImage: 'http://i.imgur.com/Y9oEEPO.jpg',
  tag: 'Gutless'
}}


export default category
