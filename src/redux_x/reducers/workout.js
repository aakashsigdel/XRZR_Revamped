'use strict'

import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  POPULATE_WORKOUT,
  DELETE_WORKOUT
} from '../actions/actionTypes'
import { setNewWorkoutId } from '../actions/uiStatesActionCreators'

const workout = (state = defaultWorkout, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      const newId = Object.keys(state).length + 1
      return {
        ...state,
        [newId]: {
          ...defaultWorkoutSkeleton,
          title: action.title,
          id: newId
        }
      }
    case UPDATE_WORKOUT:
      console.log(action.workout)
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.workout
        }
      }
    case DELETE_WORKOUT:
      return {
        ...state,
        [action.workoutId]: undefined
      }
    default:
      return state
  }
}

const defaultWorkoutSkeleton = {
  exercises: [],
  description: 'Add a description from settings',
  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/others/workoutPlaceholder.png',
  duration: '0 mins',
  instructor: 0,
  workout_set: 0,
  pause_between_exercises: 0,
  category: 'Yoga',
  like: false
}

const defaultWorkout = {
  1: {
    id: 1,
    exercises: [1, 3, 48, 52, 49, 2, 61, 63, 43, 44],
    title: 'Fedty’s 5 minute Booty Boost',
    description: 'Tabata work-out targeting your glutes.',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/kalle%20fit%203.png',
    duration: '5 mins',
    instructor: 2,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Yoga',
    like: false
  },
  2: {
    id: 2,
    exercises: [37, 42, 41, 47, 59, 37, 42, 41, 47, 59],
    title: '5 min Core / ab tabata ',
    description: 'Fast and hard ab burn. No equipment needed. Level Medium-hard.',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%201.png',
    duration: '5 mins',
    instructor: 1,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Yoga',
    like: false
  },
  3: {
    id: 3,
    exercises: [45, 37, 43, 43, 33, 47, 42, 45, 37, 43, 43, 33, 47, 42, 45, 37, 43, 43, 33, 47],
    title: '21 min bodyweight circuit',
    description: 'With no equipment, this strength / cardio workout should hit most muscles in your body, emphasizing core , legs and butt.',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/kalle%20fit.png',
    duration: '21 mins',
    instructor: 2,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Bodyweight',
    like: false
  },
  4: {
    id: 4,
    exercises: [24, 25, 19, 22, 46, 20, 21, 24, 25, 19, 22, 46, 20, 21, 5, 16, 26, 27, 28, 17, 18, 20, 21, 5, 16, 26, 27, 28, 17, 18],
    title: '30 min Full body TRX cirquit',
    description: 'Focuses on full body workout.',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/rachel%202.png',
    duration: '30 mins',
    instructor: 0,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Yoga',
    like: false
  },
  5: {
    id: 5,
    exercises: [17, 18, 26, 23, 28, 27, 37, 17, 18, 26, 23, 28, 27, 37],
    title: '7 min TRX core killer',
    description: 'Tough tabata workout focused abs.',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%202.png',
    duration: '7 mins',
    instructor: 1,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Yoga',
    like: false
  },
  6: {
    id: 6,
    exercises: [45, 46, 25, 19, 22, 46, 25, 19, 22, 2, 4, 42, 52, 16, 48, 47, 32, 36],
    title: 'Full body HIIT workout for kettlebells and TRX',
    description: 'Full body HIIT workout for kettlebells and TRX.',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/kalle%20fit%202.png',
    duration: '15 mins',
    instructor: 2,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Yoga',
    like: false
  },
  7: {
    id: 7,
    exercises: [0, 31, 54, 10, 8, 51, 11, 12, 30, 6, 10, 53, 53, 40],
    title: 'Flow body work',
    description: 'A mix of yoga and body weight workout for women, to do this work out you need a chair and yoga matte (optional).',
    image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%203.png',
    duration: '15 mins',
    instructor: 1,
    workout_set: 4,
    pause_between_exercises: 20,
    category: 'Yoga',
    like: false
  }
}

export default workout
