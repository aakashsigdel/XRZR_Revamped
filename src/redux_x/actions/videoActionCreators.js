import {
  TOGGLE_PAUSE_MODAL,
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
  LOAD_WORKOUT,

  FETCH_WORKOUT_EXERCISES
} from './actionTypes'

import * as ExerciseActions from '../actions/exerciseActionCreators'
import * as WorkoutActions from '../actions/workoutActionCreators'
import {WORKOUT_EXERCISES_URL} from '../../constants/appConstants'
import UrlBuilder, {Filter} from '../../utilities/UrlBuilder'
import ApiUtils from '../ApiUtilities'

export const pauseVideo = () => {
  return {
    type: PAUSE_VIDEO
  }
}

export const changeVideo = (videoIndex) => {
  return {
    type: CHANGE_VIDEO,
    videoIndex
  }
}

export const videoLoaded = (data) => {
  return {
    type: VIDEO_LOADED,
    duration: data.duration
  }
}

export const videoProgress = (data) => {
  return {
    type: VIDEO_PROGRESS,
    currentTime: data.currentTime
  }
}

export const loadWorkout = (workoutId) => {
  return {
    type: LOAD_WORKOUT,
    workoutId: workoutId
  }
}

export const togglePauseModal = () => {
  return {
    type: TOGGLE_PAUSE_MODAL
  }
}

const workoutExercisesRequest = () => {
  return {
    type: FETCH_WORKOUT_EXERCISES,
    status: 'fetch'
  }
}
const workoutExercisesFetchSuccess = (receivedTime) => {
  return {
    type: FETCH_WORKOUT_EXERCISES,
    status: 'success',
    receivedTime
  }
}

const workoutExercisesFetchError = (errorMessage, receivedTime) => {
  return {
    type: FETCH_WORKOUT_EXERCISES,
    status: 'error',
    receivedTime,
    errorMessage
  }
}

export const fetchWorkoutExercises = (workoutId) => {
  let workout_exercise_url = new UrlBuilder(WORKOUT_EXERCISES_URL)
    .addWithClause(['exercise'])
    .addFilter(new Filter('workout', workoutId))
    .toString()

  return (dispatch) => {
    dispatch(workoutExercisesRequest())
    return fetch(workout_exercise_url)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertExercisesFromWorkoutExercises)
      .then((exercises) => {
        let exerciseIds = Object.keys(exercises)
        dispatch(ExerciseActions.addExercise(exercises))
        dispatch(WorkoutActions.populateWorkoutExercises(workoutId, exerciseIds))
        dispatch(workoutExercisesFetchSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.log(ex)
        console.error('Maintainance Please')
        dispatch(workoutExercisesFetchError(ex.response, new Date().getTime()))
      }
    )
  }
}

