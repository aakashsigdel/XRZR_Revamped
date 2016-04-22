import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE,
  LIKE_EXERCISE
} from './actionTypes'
import {
  EXERCISE_LIKE_URL_FUNC,
  WORKOUT_EXERCISE_URL_FUNC
} from '../../constants/appConstants'

import ApiUtils from '../ApiUtilities'

import * as PlayerActions from './videoActionCreators'

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
        const statusMessage = (like) ? 'Exercise saved to favorite exercises' : 'Exercise removed from favorite exercises.'
        console.log(statusMessage)
        dispatch(PlayerActions.showStatusModal(statusMessage))
        dispatch(likeExerciseLocal(workoutExerciseId, like))
      })
      .catch((error) => {
        dispatch(PlayerActions.showStatusModal('Unable to Save exercise!! Please try again later.'))
        console.error(error)
        //console.log(EXERCISE_LIKE_URL_FUNC(exerciseId))
        //console.log(error)
      })
  }
}

export const publishExerciseOrder = (exerciseIds, order) => {
  return (dispatch, getStore) => {
    const store = getStore()
    const accessToken = store.login.access_token

    let promisesThatYouMade = order.map(
      (exerciseIndex, index) => {
        const exerciseId = exerciseIds[exerciseIndex]
        const url = WORKOUT_EXERCISE_URL_FUNC(exerciseId)
        const config = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'access-token': accessToken
          },
          body: JSON.stringify({order: index + 1})
        }
        return fetch(url, config)
          .then(ApiUtils.logger)
          .then(ApiUtils.checkStatus2xx)
          .then((response) => {
            console.log(response.json())
            console.log("success")
          })
          .catch((error) => {
            console.error(error)
          })
      }
    )

    return Promise.all(promisesThatYouMade)
      .then((response) => {
        console.log('success')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
