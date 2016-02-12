'use strict'

import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  DELETE_WORKOUT
} from '../actions/actionTypes'

const workout = (state = defaultWorkout, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
    case UPDATE_WORKOUT:
      return {
        ...state,
        ...action.workout
      }
    case DELETE_WORKOUT:
      return state.filter(workout => workout.id !== action.workoutId)
    default:
      return state
  }
}

const defaultWorkout = {
  1: {
    id: 1,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'Sail me skiff, ye stormy freebooter!',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  },
  2: {
    id: 2,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'The cloud pulls with faith, command the freighter.',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  },
  3: {
    id: 3,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'Sally Sells Sea Shells by the Sea Shore',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  },
  4: {
    id: 4,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'Betty Bought a Bit of Butter',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  },
  5: {
    id: 5,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'But the Butter was Bitter',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  },
  6: {
    id: 6,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'So to Make the Bitter Butter Better',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  },
  7: {
    id: 7,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'She Put a Bit of Better Butter',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg'
  }
}
export default workout
