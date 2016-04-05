import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  UPDATE_WORKOUT_LOCAL,
  POPULATE_WORKOUT,
  DELETE_WORKOUT,
  POST_WORKOUT,
  POPULATE_WORKOUT_EXERCISES
} from './actionTypes'
import { loadWorkout } from './videoActionCreators'
import { BASE_URL } from '../../constants/appConstants'
import { getAccessTokenFromAsyncStorage } from '../../utilities/utility'
import { hydrateWorkout } from '../ApiUtilities.js'

export const addWorkout = (workout) => {
  return {
    type: ADD_WORKOUT,
    workout
  }
}

export const postWorkoutStart = () => {
  return {
    type: POST_WORKOUT,
    status: 'fetch'
  }
}

export const postWorkoutEnd = (workout) => {
  return {
    type: POST_WORKOUT,
    status: 'success'
  }
}

export const postWorkoutFailure = (errorMessage) => {
  return {
    type: POST_WORKOUT_FAILURE,
    status: 'error',
    errorMessage
  }
}

const defaultWorkoutOptions = {
  published: false,
  duration: '10 minutes',
  pause_interval: 10,
  description: 'Go To Settings To Add Description'
}
export const postWorkout = (title) => {
  console.warn('me postworkout', title)
  return (dispatch) => {
    dispatch(postWorkoutStart())
    const POST_WORKOUT_URL = BASE_URL + '/workout'
    const data = {
      title,
      ...defaultWorkoutOptions
    }

    getAccessTokenFromAsyncStorage()
    .then((result) => {
      fetch(
        POST_WORKOUT_URL,
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(addWorkout({id: responseData.entities[0].id, title}))
        dispatch(loadWorkout(responseData.entities[0].id))
        dispatch(postWorkoutEnd(responseData.entities))
      })
      .catch(error => dispatch(postWorkoutFailure(error)))
    })
  }
}

export const requestUpdateWorkout = () => {
  return {
    type: UPDATE_WORKOUT,
    status: 'fetch'
  }
}
export const updateWorkoutSuccess = () => {
  return {
    type: UPDATE_WORKOUT,
    status: 'success'
  }
}

export const updateWorkoutFailure = () => {
  return {
    type: UPDATE_WORKOUT,
    status: 'error'
  }
}

export const updateWorkoutLocal = (workout) => {
  return {
    type: UPDATE_WORKOUT_LOCAL,
    id: workout.id,
    workout: workout
  }
}

const _validateCategory = (categoryList, category) => {
  let workoutCategory = ''
  let result =  Object.keys(categoryList).some((c) => {
    if (categoryList[c].tag === category) {
      workoutCategory = c
      return true
    }
    return false
  })
  if (result) {
    return workoutCategory
  }
  return false
}

export const updateWorkout = ({id, workout}) => {
  return (dispatch, getState) => {
    let category = _validateCategory(getState().category.data, workout.category)
    if(!category) {
      alert('Invalid Category')
      return
    }
    dispatch(requestUpdateWorkout())

    const data = {
      ...workout,
      category
    }
    fetch(BASE_URL + '/workout/' + id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(
        updateWorkoutLocal(
          hydrateWorkout(responseData.entities[0].id, responseData.entities[0].entity)
        )
      )
      dispatch(updateWorkoutSuccess())
    })
    .catch((error) => {
      dispatch(updateWorkoutFailure(error))
    })
  }
}

export const populateWorkouts = (workouts) => {
  return {
    type: POPULATE_WORKOUT,
    workouts: workouts
  }
}

export const deleteWorkout = (workoutId) => {
  return {
    type: DELETE_WORKOUT,
    workoutId
  }
}

export const populateWorkoutExercises = (workoutId, exercises) => {
  return {
    type: POPULATE_WORKOUT_EXERCISES,
    workoutId,
    exercises
  }
}
