import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  POPULATE_WORKOUT,
  DELETE_WORKOUT
} from './actionTypes'
import { BASE_URL } from '../../constants/appConstants'
import { getAccessTokenFromAsyncStorage } from '../../utilities/utility'

export const addWorkout = (title) => {
  return {
    type: ADD_WORKOUT,
    title
  }
}

export const postWorkoutStart = () => {
  return {
    type: POST_WORKOUT_START
  }
}

export const postWorkoutEnd = (workout) => {
  return {
    type: POST_WORKOUT_END,
    workout
  }
}

export const postWorkoutFailure = (error) => {
  return {
    type: POST_WORKOUT_FAILURE,
    error
  }
}

export const postWorkout = (name) => {
  console.warn('me postworkout', name)
  return (dispatch) => {
    dispatch(postWorkoutStart())
    const POST_WORKOUT_URL = BASE_URL + '/workout'
    const data = {
      name
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
        dispatch(postWorkoutEnd(responseData))
      })
      .catch(error => dispatch(postWorkoutFailure(error)))
    })
  }
}

export const updateWorkout = (workout) => {
  return {
    type: UPDATE_WORKOUT,
    id: workout.id,
    workout: workout
  }
}

export const populateWorkouts = (workouts) => {
  return {
    type: POPULATE_WORKOUT,
    workouts: workouts,
  }
}

export const deleteWorkout = (workoutId) => {
  return {
    type: DELETE_WORKOUT,
    workoutId
  }
}
