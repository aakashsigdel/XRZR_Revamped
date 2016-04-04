import {
  ADD_TRENDING_WORKOUTS,
  FETCH_TRENDING_WORKOUTS
} from '../actions/actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import ApiUtils from '../ApiUtilities'
import * as WorkoutActions from './workoutActionCreators'

export function addTrendingWorkouts (workoutIds) {
  return {
    type: ADD_TRENDING_WORKOUTS,
    workoutIds
  }
}

export function trendingWorkoutRequest() {
  return {
    type: FETCH_TRENDING_WORKOUTS,
    status: 'request'
  }
}
export function trendingWorkoutsSuccess (receivedTime) {
  return {
    type: FETCH_TRENDING_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
export function trendingWorkoutsError (errorMessage, receivedTime) {
  return {
    type: FETCH_TRENDING_WORKOUTS,
    status: 'error',
    errorMessage,
    receivedTime
  }
}

export function fetchTrendingWorkouts () {
  return (dispatch) => {
    dispatch(trendingWorkoutRequest())
    return fetch(WORKOUT_BASE_URL)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertWorkoutsToKeyBasedDict)
      .then((workouts) => {
        let workoutIds = Object.keys(workouts)
        workoutIds.reverse()

        dispatch(WorkoutActions.populateWorkouts(workouts))
        dispatch(addTrendingWorkouts(workoutIds))
        dispatch(trendingWorkoutsSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.log(ex)
        console.error('Maintainance Please')
        dispatch(trendingWorkoutsError(ex.response, new Date().getTime()))
      })

  }
}
