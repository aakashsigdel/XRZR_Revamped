import {
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
  LOAD_WORKOUT,
  TOGGLE_PAUSE_MODAL,
  FETCH_WORKOUT_EXERCISES,
  EXERCISE_STATUS_MODAL
} from '../actions/actionTypes'
import networkSwitches from './networkSwitches'

const defaultState = {
  workoutId: null,
  nowPlaying: undefined,      // this is the index thing
  paused: false,
  lastKnownTime: 0,
  currentTime: 0,
  duration: 0.0,
  pauseModalVisibility: false,

  statusModalVisibility: false,
  statusMessage: '',

  ...networkSwitches()
}

const player = (state = defaultState, action) => {
  switch (action.type) {
    case PAUSE_VIDEO:
      return {
        ...state,
        paused: !state.paused
      }
    case CHANGE_VIDEO:
      if (action.videoIndex === undefined) {
        return state
      }

      return {
        ...state,
        nowPlaying: action.videoIndex,
        lastKnownTime: 0,
        currentTime: 0
      }
    case VIDEO_LOADED:
      return {
        ...state,
        duration: action.duration
      }
    case VIDEO_PROGRESS:
      let deltaTime = action.currentTime - state.lastKnownTime
      if (deltaTime < 0) deltaTime = 0
      return {
        ...state,
        currentTime: state.currentTime + (deltaTime),
        lastKnownTime: action.currentTime
      }

    case LOAD_WORKOUT:
      return {
        ...state,
        workoutId: action.workoutId,
        nowPlaying: undefined,
        lastKnownTime: 0,
        currentTime: 0,
        duration: 0.0
      }

    case TOGGLE_PAUSE_MODAL:
      return {
        ...state,
        pauseModalVisibility: !state.pauseModalVisibility
      }

    case FETCH_WORKOUT_EXERCISES:
      return {
        ...state,
        ...networkSwitches(state, action)
      }
    case EXERCISE_STATUS_MODAL:
      return {
        ...state,
        statusModalVisibility: action.visible,
        statusMessage: action.statusMessage
      }
  }
  return state
}

export default player
