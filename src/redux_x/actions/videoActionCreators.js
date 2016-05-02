import {
  TOGGLE_PAUSE_MODAL,
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
  LOAD_WORKOUT,
  EXERCISE_STATUS_MODAL,
  FETCH_WORKOUT_EXERCISES
} from './actionTypes'

import * as ExerciseActions from '../actions/exerciseActionCreators'
import * as WorkoutActions from '../actions/workoutActionCreators'
import * as UserActions from '../actions/userActionCreators'
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

export const showStatusModal = (statusMessage) => {
  return {
    type: EXERCISE_STATUS_MODAL,
    visible: true,
    statusMessage
  }
}
export const hideStatusModal = () => {
  return {
    type: EXERCISE_STATUS_MODAL,
    visible: false,
    statusMessage: ''
  }
}


export const fetchWorkoutExercises = (workoutId) => {
  let workout_exercise_url = new UrlBuilder(WORKOUT_EXERCISES_URL)
    .addWithClause(['exercise'])
    .addFilter(new Filter('workout', workoutId))
    .addWithMetaDataClause(['created_by'])
    .toString()

  return (dispatch, getStore) => {
    const store = getStore()
    const accessToken = store.login.access_token
    const config = {headers: {'access-token': accessToken}}
    dispatch(workoutExercisesRequest())
    return fetch(workout_exercise_url, config)
      .then(ApiUtils.checkStatus2xx)
      .then((response) => response.json())
      .then(ApiUtils.convertExercisesFromWorkoutExercises)
      .then((decomposedResponse) => {

        const instructors = decomposedResponse.instructors
        const hydratedInstructors = ApiUtils.hydrateInstructors(instructors)
        dispatch(UserActions.populateUsers(hydratedInstructors))

        return decomposedResponse.data
      })
      .then((exercises) => {
        let exerciseIds = Object.keys(exercises).sort((aId, bId) => exercises[aId].order - exercises[bId].order)

        dispatch(ExerciseActions.addExercise(exercises))
        dispatch(WorkoutActions.populateWorkoutExercises(workoutId, exerciseIds))
        dispatch(workoutExercisesFetchSuccess(new Date().getTime()))
      })
      .catch((ex) => {
        console.error('Maintainance Please')
        dispatch(workoutExercisesFetchError(ex.response, new Date().getTime()))
      }
    )
  }
}

