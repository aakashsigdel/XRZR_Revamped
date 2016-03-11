import {
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
  LOAD_WORKOUT
} from '../actions/actionTypes'

const defaultState = {
  workoutId: 1,
  nowPlaying: undefined,
  paused: false,
  lastKnownTime: 0,
  currentTime: 0,
  duration: 0.0
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
        currentTime: 0,
        paused: false
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
  }
  return state
}

export default player
