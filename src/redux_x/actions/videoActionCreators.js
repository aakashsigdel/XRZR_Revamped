import {
  PAUSE_VIDEO,
  CHANGE_VIDEO,
  VIDEO_LOADED,
  VIDEO_PROGRESS,
} from './actionTypes'

export const pauseVideo = () => {
  return {
    type: PAUSE_VIDEO,
  }
}

export const changeVideo = (videoId) => {
  return {
    type: CHANGE_VIDEO,
    videoId: videoId
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
