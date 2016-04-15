'use strict'
import {
  SET_USER,
  FETCH_USER,
  POPULATE_USERS,
  LOGIN_SUCCESS
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'
import { mapUserApiKeysToAppKeys } from '../ApiUtilities'

const initialState = {
  isFetching: false,
  data: {
    0: {
      id: 0,
      name: 'Kalle Fit',
      image: 'http://www.arsenalsite.cz/imgs/soupiska/200/santi-cazorla.jpg',
      isInstructor: true,
      workout: [1, 2, 3]
    },
    1: {
      id: 1,
      name: 'Maria Barfod',
      image: 'http://2.bp.blogspot.com/-2jejibP1zOM/Vcs0FTid1iI/AAAAAAAAAoE/M78ZFS9NfIo/s200-c/217696.jpg',
      isInstructor: true,
      workout: [1, 2, 3, 4, 5, 6]
    },
    2: {
      id: 2,
      name: 'Stina Troest',
      image: 'http://www.ulasbola.com/wp-content/uploads/2013/01/Theo-Walcott1.jpg',
      isInstructor: true,
      workout: [1, 2, 3]
    },
    3: {
      id: 3,
      name: 'Rachel Grey',
      image: 'http://www.ulasbola.com/wp-content/uploads/2013/01/Theo-Walcott1.jpg',
      isInstructor: false,
      workout: [1, 2, 3]
    },
    4: {
      id: 4,
      name: 'Gray Rachel 2',
      image: 'http://www.ulasbola.com/wp-content/uploads/2013/01/Theo-Walcott1.jpg',
      isInstructor: true,
      workout: [1, 2, 4, 6]
    }
  }
}

const user = (state = initialState , action) => {
  switch (action.type) {
    case SET_USER:
      const user = mapUserApiKeysToAppKeys(action.user)
      return {
        ...state,
        data: {
          ...state.data,
          [user.id]: {
            ...user
          }
        }
      }
    case POPULATE_USERS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.users
        }
      }
    case FETCH_USER:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case LOGIN_SUCCESS:
      const loginUser = mapUserApiKeysToAppKeys(action.authData)
      return {
        ...state,
        data: {
          ...state.data,
          [loginUser.id]: {
            ...loginUser
          }
        }
      }
    default:
      return state
  }
  return state
}

export default user
