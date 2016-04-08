import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE,
  LIKE_EXERCISE
} from './actionTypes'
import {
  EXERCISE_LIKE_URL_FUNC
} from '../../constants/appConstants'

import ApiUtils from '../ApiUtilities'
export const addExercise = (exercise) => {
  return {
    type: ADD_EXERCISE,
    exercise
  }
}

export const updateExercise = (exercise) => {
  return {
    type: UPDATE_EXERCISE,
    exercise
  }
}

export const deleteExercise = (exerciseId) => {
  return {
    type: DELETE_EXERCISE,
    exerciseId
  }
}

export const likeExerciseLocal = (exerciseId, like) => {
  return {
    type: LIKE_EXERCISE,
    exerciseId,
    like
  }
}

export const likeExercise = (exerciseId, like, workoutExerciseId) => {
  return (dispatch, getStore) => {
    const store = getStore()
    const access_token = store.login.access_token

    if (!exerciseId) {
      alert('Can\'t like this exercise!!')
      return
    }

    const params = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access-token': access_token
      },
      body: JSON.stringify({favorited: !!like})
    }
    return fetch(EXERCISE_LIKE_URL_FUNC(exerciseId), params)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then((jsonResponse) => {
        alert('Exercise Liked')
        likeExerciseLocal(workoutExerciseId, like)
      })
      .catch((error) => {
        alert('Failed to send like to server!! Please try again later.')
        //console.log(EXERCISE_LIKE_URL_FUNC(exerciseId))
        //console.log(error)
      })
  }
}
