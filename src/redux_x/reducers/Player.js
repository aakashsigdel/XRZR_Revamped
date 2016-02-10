import {
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
} from '../actions/actionTypes'

const defaultState = {
  workoutId: 1,
  nowPlaying: 1,
  paused: false,
  lastKnownTime: 0,
  currentTime: 0,
  duration: 0.0,
}

const player = (state = defaultState, action) => {
  switch (action.type){
    case PAUSE_VIDEO:
      return {
        ...state,
        paused: ! state.paused,
      }
    case CHANGE_VIDEO:
      return {
        ...state,
        nowPlaying: action.videoId
      }
    case VIDEO_LOADED:
      return {
        ...state,
        duration: action.duration
      }
    case VIDEO_PROGRESS:
      return {
        ...state,
        currentTime: state.currentTime + (action.currentTime - state.lastKnownTime),
        lastKnownTime: state.currentTime + (action.currentTime - state.lastKnownTime),
      }
  }
  return state
}

export default player