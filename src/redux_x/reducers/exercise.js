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
    videoUri: 'https://r2---sn-oppb-3uhe.googlevideo.com/videoplayback?mt=1455076636&ratebypass=yes&fexp=9408495%2C9416126%2C9417058%2C9418777%2C9420452%2C9422596%2C9423661%2C9423662%2C9425115%2C9425740%2C9426668%2C9426943%2C9427035%2C9427054%2C9427119%2C9428077%2C9428559&key=yt6&sver=3&requiressl=yes&ip=43.245.85.181&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&expire=1455098286&lmt=1454979145321141&upn=r3a--m4fk9o&id=o-AGAbYR0sxqxeB1B6fHSvA-ifGvdtfsMvbh4VFp3c4g9J&initcwndbps=2271250&pl=23&dur=135.906&mime=video%2Fmp4&signature=7945109C6C6709E577E2426245F5A31C141B66D4.577D7A73CA546C529E55E212EF04E6A899664051&ms=au&source=youtube&mv=m&ipbits=0&mm=31&mn=sn-oppb-3uhe&itag=18'
  },
  2: {
    id: 2,
    title: 'Wow, scurvy strength!',
    mode: 'loop',
    duration: 8,
    videoUri: 'https://r3---sn-oppb-3uhe.googlevideo.com/videoplayback?dur=219.776&initcwndbps=2001250&expire=1455098428&sver=3&pl=23&id=o-AFj8HlOSuUz7prlBElp1UuQGLC5W8OOMwSfM5Y3RyR5i&mime=video%2Fmp4&mn=sn-oppb-3uhe&mm=31&ipbits=0&gcr=np&requiressl=yes&ip=43.245.85.181&ms=au&mv=m&mt=1455076753&ratebypass=yes&upn=gX8Xyq2GgmQ&signature=CD53B011C77162509043307B02AAC2EDE3ED63AE.4AF8DB319E04D61C8FB4183FD180E9C418C373D7&itag=18&lmt=1429970327800139&key=yt6&fexp=9408495%2C9416126%2C9417058%2C9418777%2C9420452%2C9422596%2C9423661%2C9423662%2C9425115%2C9425740%2C9426668%2C9426943%2C9427035%2C9427054%2C9427119%2C9428077%2C9428559&sparams=dur%2Cgcr%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&source=youtube'
  },
  3: {
    id: 3,
    title: 'Amnesty ho! raid to be traded.',
    mode: 'time',
    duration: 60,
    videoUri: 'https://v.cdn.vine.co/r/videos/A1C5B724AA1308948519679414272_499200784be.5.1.7498584904815092792.mp4?versionId=02d2E.0pOr9Z_UnMC5KILTeE5ZPuzuaX'
  },
  4: {
    id: 4,
    title: 'Daggers are the shipmates of the shiny fortune.',
    mode: 'time',
    duration: 60*1.5,
    videoUri: 'https://v.cdn.vine.co/r/videos/6E337D04771308966175849730048_47a18a01f3a.5.1.3372584897536167595.mp4?versionId=Abfss28XUv02Ax2yPxCMObC.fVeokkpU'
  },
  5: {
    id: 5,
    title: 'Fight is a weird mate.',
    mode: 'time',
    duration: 45,
    videoUri: 'https://mtc.cdn.vine.co/r/videos/52557613C11249834593700941824_1440957960c7e86ab2b6.4712.mp4?versionId=yQ8otGAE9eFEF6xDr8lIapI25DnR6nme'
  },
  6: {
    id: 6,
    title: 'Girls wave from halitosis like dead parrots.',
    mode: 'loop',
    duration: 3,
    videoUri: 'https://mtc.cdn.vine.co/r/videos_h264dash/1677F40CD21250296300898226176_SW_WEBM_14410680790623166b14ed1.mp4?versionId=EQWqbYaH4pmUxyAeGlLwui7uE_vXTaKe'
  },
  7: {
    id: 7,
    title: 'Adventure is a weird lad.',
    mode: 'time',
    duration: 30,
    videoUri: 'https://mtc.cdn.vine.co/r/videos_h264dash/D89A93FF0D1268708809799512064_43de1662bcf.2.0.3474774913252738913.mp4?versionId=pjFjRfmpI_voMqG8dOUSrhjGPpGF7K5u'
  },
  8: {
    id: 8,
    title: 'Never fight a woodchuck.',
    mode: 'time',
    duration: 50,
    videoUri: 'https://mtc.cdn.vine.co/r/videos/741B4604C91268457172057399296_497c0a0e242.2.0.2801011693936191031.mp4?versionId=JkCSZPUFQpslQNlE91MJEPrTqbFIsmkp'
  }
}

export default exercise
