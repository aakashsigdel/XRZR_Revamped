import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  POPULATE_WORKOUT,
  DELETE_WORKOUT,
  POST_WORKOUT,
  POPULATE_WORKOUT_EXERCISES
} from './actionTypes'
import { loadWorkout } from './videoActionCreators'
import { BASE_URL } from '../../constants/appConstants'
import { getAccessTokenFromAsyncStorage } from '../../utilities/utility'

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

export const postWorkout = (title) => {
  console.warn('me postworkout', title)
  return (dispatch) => {
    dispatch(postWorkoutStart())
    const POST_WORKOUT_URL = BASE_URL + '/workout'
    const data = {
      title
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
