'use strict'

import {
  ADD_WORKOUT,
  POST_WORKOUT,
  UPDATE_WORKOUT,
  UPDATE_WORKOUT_LOCAL,
  POPULATE_WORKOUT,
  DELETE_WORKOUT,
  POPULATE_WORKOUT_EXERCISES,
  LIKE_WORKOUT,
  WORKOUT_STATUS_MODAL,
  FETCH_WORKOUT,
  PUBLISH_WORKOUT_LOCAL,
  UPDATE_WORKOUT_EXERCISES,
  UPDATE_WORKOUT_EXERCISES_LOCAL
} from '../actions/actionTypes'
import { setNewWorkoutId } from '../actions/uiStatesActionCreators'
import networkSwitches from './networkSwitches'

const workout = (state = defaultWorkout, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      console.warn(action, 'addwrokout')
      return {
        ...state,
        data: {
          ...state.data,
          [action.workout.id]: {
            ...defaultWorkoutSkeleton,
            title: action.workout.title,
            id: action.workout.id
          }
        }
      }
    case POST_WORKOUT:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case UPDATE_WORKOUT:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case UPDATE_WORKOUT_LOCAL:
      const workout = state[action.workout.id]
      let exercises = []
      if (workout) {
        exercises = workout.exercises
      }
      if (action.workout.exercises.length !== 0) {
        exercises = action.workout.exercises
      }
      return {
        ...state,
        data: {
          ...state.data,
          [action.workout.id]: {
            ...state[action.workout.id],
            ...action.workout,
            exercises: exercises
          }
        }
      }
    case POPULATE_WORKOUT:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.workouts
        }
      }
    case DELETE_WORKOUT:
      return {
        ...state,
        data:{
          ...state.data,
          [action.workoutId]: undefined
        }
      }
    case POPULATE_WORKOUT_EXERCISES:
      return {
        ...state,
        data: {
          ...state.data,
          [action.workoutId]: {
            ...state.data[action.workoutId],
            exercises: action.exercises
          }
        }
      }
    case LIKE_WORKOUT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.workoutId]: {
            ...state.data[action.workoutId],
            like: action.like
          }
        }
      }
    case WORKOUT_STATUS_MODAL:
      return {
        ...state,
        statusModal: action.state,
        statusMessage: action.statusMessage
      }
    case FETCH_WORKOUT:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case PUBLISH_WORKOUT_LOCAL:
      return {
        ...state,
        data: {
          ...state.data,
          [action.workoutId]: {
            ...state.data[action.workoutId],
            published: action.published
          }
        }

      }
    case UPDATE_WORKOUT_EXERCISES:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    default:
      return state
  }
}

const defaultWorkoutSkeleton = {
  exercises: [1, 3, 48, 52, 49, 2, 61, 63, 43, 44],
  description: 'Add a description from settings',
  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/others/workoutPlaceholder.png',
  duration: '20 mins',
  instructor: 0,
  workout_set: 4,
  pause_between_exercises: 10,
  category: 'Yoga',
  like: false,
  published: true
}

const defaultWorkout = {
  isFetching: false,
  statusModal: false,
  statusMessage: '',

  data: {
    //1: {
    //  id: 1,
    //  exercises: [1, 3, 48, 52, 49, 2, 61, 63, 43, 44],
    //  title: 'Fedty’s 5 minute Booty Boost',
    //  description: 'Tabata work-out targeting your glutes.',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/kalle%20fit%203.png',
    //  duration: '5 mins',
    //  instructor: 2,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy',
    //  like: false,
    //  published: true
    //},
    //2: {
    //  id: 2,
    //  exercises: [37, 42, 41, 47, 59, 37, 42, 41, 47, 59],
    //  title: '5 min Core / ab tabata ',
    //  description: 'Fast and hard ab burn. No equipment needed. Level Medium-hard.',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%201.png',
    //  duration: '5 mins',
    //  instructor: 1,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy',
    //  like: false,
    //  published: true
    //},
    //3: {
    //  id: 3,
    //  exercises: [45, 37, 43, 43, 33, 47, 42, 45, 37, 43, 43, 33, 47, 42, 45, 37, 43, 43, 33, 47],
    //  title: '21 min bodyweight circuit',
    //  description: 'With no equipment, this strength / cardio workout should hit most muscles in your body, emphasizing core , legs and butt.',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/kalle%20fit.png',
    //  duration: '21 mins',
    //  instructor: 2,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'Bodyweight',
    //  like: false,
    //  published: true
    //},
    //4: {
    //  id: 4,
    //  exercises: [24, 25, 19, 22, 46, 20, 21, 24, 25, 19, 22, 46, 20, 21, 5, 16, 26, 27, 28, 17, 18, 20, 21, 5, 16, 26, 27, 28, 17, 18],
    //  title: '30 min Full body TRX cirquit',
    //  description: 'Focuses on full body workout.',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/rachel%202.png',
    //  duration: '30 mins',
    //  instructor: 0,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy',
    //  like: false,
    //  published: true
    //},
    //5: {
    //  id: 5,
    //  exercises: [17, 18, 26, 23, 28, 27, 37, 17, 18, 26, 23, 28, 27, 37],
    //  title: '7 min TRX core killer',
    //  description: 'Tough tabata workout focused abs.',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%202.png',
    //  duration: '7 mins',
    //  instructor: 1,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy',
    //  like: false,
    //  published: true
    //},
    //6: {
    //  id: 6,
    //  exercises: [45, 46, 25, 19, 22, 46, 25, 19, 22, 2, 4, 42, 52, 16, 48, 47, 32, 36],
    //  title: 'Full body HIIT workout for kettlebells and TRX',
    //  description: 'Full body HIIT workout for kettlebells and TRX.',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/kalle%20fit%202.png',
    //  duration: '15 mins',
    //  instructor: 2,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy',
    //  like: false,
    //  published: true
    //},
    //7: {
    //  id: 7,
    //  exercises: [0, 31, 54, 10, 8, 51, 11, 12, 30, 6, 10, 53, 53, 40],
    //  title: 'Flow body work',
    //  description: 'A mix of yoga and body weight workout for women, to do this work out you need a chair and yoga matte (optional).',
    //  image_16x9: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%203.png',
    //  duration: '15 mins',
    //  instructor: 1,
    //  workout_set: 4,
    //  pause_between_exercises: 20,
    //  category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy',
    //  like: false,
    //  published: true
    //}
  }
}

export default workout
