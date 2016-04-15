import {
  ADD_PURE_EXERCISE,
  POPULATE_PURE_EXERCISE,
  UPDATE_EXERCISE,
  UPDATE_EXERCISE_LOCAL,
  FETCH_EXERCISE
} from '../actions/actionTypes'
import {
  getAccessTokenFromAsyncStorage,
  awesomeFetchWrapper
} from '../../utilities/utility'
import { BASE_URL } from '../../constants/appConstants'

export const addPureExercise = (exerciseId, exercise) => {
  return {
    type: ADD_PURE_EXERCISE,
    exerciseId,
    exercise
  }
}

export const populatePureExercise = (exercises) => {
  return {
    type: POPULATE_PURE_EXERCISE,
    exercises
  }
}

export const updateExercise = (id, exercise) => {
  return (dispatch) => {
    dispatch(updateExerciseRequest())
    getAccessTokenFromAsyncStorage()
    .then(response => {
      const EXERCISE_UPDATE_URL = BASE_URL + '/exercise' + id
      const fetchParams = {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'access-token': response.access_token
        },
        body: JSON.stringify(exercise)
      }
      awesomeFetchWrapper(EXERCISE_UPDATE_URL, fetchParams)
      .then(responseData => {
        console.log('exercise update', responseData)
        dispatch(updateExerciseLocal(exercise))
        dispatch(updateExerciseSuccess())
      })
      .catch(error => dispatch(updateExerciseFailure(error)))
    })
  }
}

export const updateExerciseRequest = () => {
  return {
    type: UPDATE_EXERCISE,
    status: 'fetch'
  }
}

export const updateExerciseSuccess = () => {
  return {
    type: UPDATE_EXERCISE,
    status: 'success'
  }
}

export const updateExerciseFailure = (errorMessage) => {
  return {
    type: UPDATE_EXERCISE,
    status: 'error',
    errorMessage
  }
}

export const updateExerciseLocal = (exercise) => {
  return {
    type: UPDATE_EXERCISE_LOCAL,
    exercise
  }
}
