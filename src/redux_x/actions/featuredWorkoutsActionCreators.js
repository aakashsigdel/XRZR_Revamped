import {
  ADD_FEATURED_WORKOUTS,
  FETCH_FEATURED_WORKOUTS
} from './actionTypes'

import {
  WORKOUT_BASE_URL
} from '../../constants/appConstants'
import ApiUtils from '../ApiUtilities'
import * as WorkoutActions from './workoutActionCreators'

export function addFeaturedWorkouts (workoutIds) {
  return {
    type: ADD_FEATURED_WORKOUTS,
    workoutIds
  }
}

function featuredWorkoutsRequest () {
  return {
    type: FETCH_FEATURED_WORKOUTS,
    status: 'request'
  }
}
function featuredWorkoutsFetchSuccess (receivedTime) {
  return {
    type: FETCH_FEATURED_WORKOUTS,
    status: 'success',
    receivedTime
  }
}
function featuredWorkoutsFetchError (errorMessage, receivedTime) {
  return {
    type: FETCH_FEATURED_WORKOUTS,
    status: 'error',
    receivedTime,
    errorMessage
  }
}
export function fetchFeaturedWorkouts () {
  return (dispatch) => {
    dispatch(featuredWorkoutsRequest())
    return fetch(WORKOUT_BASE_URL)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertWorkoutsToKeyBasedDict)
      .then((workouts) => {
        let workoutIds = Object.keys(workouts)

        dispatch(WorkoutActions.populateWorkouts(workouts))
        dispatch(addFeaturedWorkouts(workoutIds))
        dispatch(featuredWorkoutsFetchSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.log(ex)
        console.error('Maintainance Please')
        dispatch(featuredWorkoutsFetchError(ex.response, new Date().getTime()))
      })

  }
}