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
    coverImage: 'https://www.dropbox.com/s/khpwy3yh3iitsk2/bodyweight.png?dl=1',
    tag: 'Bodyweight',
    workouts: [2, 6, 1, 4]
  },
  Kettlebells: {
    coverImage: 'https://www.dropbox.com/s/7fuwl20qobzvmrp/kettlebells.png?dl=1',
    tag: 'Kettlebells',
    workouts: [5, 2, 7, 9]
  },
  Pilates: {
    coverImage: 'https://www.dropbox.com/s/5ip9sjkqg6c0xt3/pilates.png?dl=1',
    tag: 'Pilates',
    workouts: [2, 5, 1, 7]
  },
  'The Gym': {
    coverImage: 'https://www.dropbox.com/s/nrbke4rmd8vpsny/the%20gym.png?dl=1',
    tag: 'The Gym',
    workouts: [6, 2, 8, 3]
  },
  'TRX': {
    coverImage: 'https://www.dropbox.com/s/4lxzjt3dyuwefvy/trx.png?dl=1',
    tag: 'TRX',
    workouts: [6, 2, 8, 3]
  },
  'Yoga': {
    coverImage: 'https://www.dropbox.com/s/oo2ys88vx2s2gwp/yoga.png?dl=1',
    tag: 'Yoga',
    workouts: [6, 2, 8, 3]
  }
}

export default category
