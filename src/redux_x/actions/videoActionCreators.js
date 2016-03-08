import {
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
  LOAD_WORKOUT
} from './actionTypes'

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
