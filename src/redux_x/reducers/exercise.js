'use strict'

import {
  ADD_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE
} from '../actions/actionTypes'

const exercise = (state = defaultExercise, action) => {
  switch (action.type) {
    case ADD_EXERCISE:
    case UPDATE_EXERCISE:
      return {
        ...state,
        ...action.exercise
      }
    case DELETE_EXERCISE:
      return state.filter(exercise => exercise.id !== action.exerciseId)
    default:
      return state
  }
}

const defaultExercise = {
  1: {
    id: 1,
    title: 'Where is the sunny freebooter?',
    mode: 'loop',
    duration: 5,
    instructor: 0,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_1mb.mp4',

  },
  2: {
    id: 2,
    title: 'Wow, scurvy strength!',
    mode: 'loop',
    duration: 8,
    instructor: 2,
    videoUri: 'http://techslides.com/demos/sample-videos/small.mp4'
  },
  3: {
    id: 3,
    title: 'Amnesty ho! raid to be traded.',
    mode: 'time',
    duration: 60,
    instructor: 1,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_5mb.mp4'
  },
  4: {
    id: 4,
    title: 'Daggers are the shipmates of the shiny fortune.',
    mode: 'time',
    duration: 60*1.5,
    instructor: 0,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_1mb.mp4'
  },
  5: {
    id: 5,
    title: 'Fight is a weird mate.',
    mode: 'time',
    duration: 45,
    instructor: 1,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_5mb.mp4'
  },
  6: {
    id: 6,
    title: 'Girls wave from halitosis like dead parrots.',
    mode: 'loop',
    duration: 3,
    instructor: 2,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_1mb.mp4'
  },
  7: {
    id: 7,
    title: 'Adventure is a weird lad.',
    mode: 'time',
    duration: 30,
    instructor: 0,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_1mb.mp4'
  },
  8: {
    id: 8,
    title: 'Never fight a woodchuck.',
    mode: 'time',
    duration: 50,
    instructor: 1,
    videoUri: 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_1mb.mp4'
  }
}

export default exercise
