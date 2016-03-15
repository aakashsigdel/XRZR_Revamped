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
      return {
        ...state,
        [action.exerciseId]: undefined
      }
    default:
      return state
  }
}

const defaultExercise = {
  0: {
    'id': 0,
    'title': 'Cat cow',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Cat%20cow.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  1: {
    'id': 1,
    'title': 'Kettlebell deadlifts straight leg',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Kettlebell%20deadlifts%20straight%20leg.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  2: {
    'id': 2,
    'title': 'Kettlebell deadlifts',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Kettlebell%20deadlifts.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  3: {
    'id': 3,
    'title': 'Kettlebell low jumps',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Kettlebell%20low%20jumps.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  4: {
    'id': 4,
    'title': 'Kettlebell squats',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Kettlebell%20squats.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  5: {
    'id': 5,
    'title': 'Leg splits',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Leg%20splits.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  6: {
    'id': 6,
    'title': 'Pilates crunch',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Pilates%20crunch.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  7: {
    'id': 7,
    'title': 'Plank Push-up',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Plank%20Push-up.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  8: {
    'id': 8,
    'title': 'Plank',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Plank.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  9: {
    'id': 9,
    'title': 'Prasarita Padottanasana',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Prasarita%20Padottanasana.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  10: {
    'id': 10,
    'title': 'Pulz',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Pulz.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  11: {
    'id': 11,
    'title': 'Side lunge left',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Side%20lunge%20left.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  12: {
    'id': 12,
    'title': 'Side lunge right',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Side%20lunge%20right.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  13: {
    'id': 13,
    'title': 'Sideplank Twist Left',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Sideplank%20Twist%20Left.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  14: {
    'id': 14,
    'title': 'Sideplank Twist Right',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Sideplank%20Twist%20Right.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  15: {
    'id': 15,
    'title': 'Stairs',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Stairs.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  16: {
    'id': 16,
    'title': 'TRX Hamstring curl',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20Hamstring%20curl.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  17: {
    'id': 17,
    'title': 'TRX Hip drops left',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20Hip%20drops%20left.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  18: {
    'id': 18,
    'title': 'TRX Hip drops right',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20Hip%20drops%20right.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  19: {
    'id': 19,
    'title': 'TRX Y-ups',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20Y-ups.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  20: {
    'id': 20,
    'title': 'TRX ballet side lunge left',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20ballet%20side%20lunge%20left.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  21: {
    'id': 21,
    'title': 'TRX ballet side lunge',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20ballet%20side%20lunge.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  22: {
    'id': 22,
    'title': 'TRX bicep hug',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20bicep%20hug.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  23: {
    'id': 23,
    'title': 'TRX crunches',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20crunches.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  24: {
    'id': 24,
    'title': 'TRX forward lunge',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20forward%20lunge.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  25: {
    'id': 25,
    'title': 'TRX low row',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20low%20row.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  26: {
    'id': 26,
    'title': 'TRX mountain climbers',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20mountain%20climbers.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  27: {
    'id': 27,
    'title': 'TRX oblique crunches',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20oblique%20crunches.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  28: {
    'id': 28,
    'title': 'TRX pike',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20pike.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  29: {
    'id': 29,
    'title': 'TRX row',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/TRX%20row.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  30: {
    'id': 30,
    'title': 'Triceps with chair',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Triceps%20with%20chair.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  31: {
    'id': 31,
    'title': 'Yoga Flow',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/Yoga%20Flow.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  32: {
    'id': 32,
    'title': 'ab circle kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/ab%20circle%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  33: {
    'id': 33,
    'title': 'ab crunch kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/ab%20crunch%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  34: {
    'id': 34,
    'title': 'active armstand 2',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/active%20armstand%202.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  35: {
    'id': 35,
    'title': 'active armstand',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/active%20armstand.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  36: {
    'id': 36,
    'title': 'active plank kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/active%20plank%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  37: {
    'id': 37,
    'title': 'active plank',
    'mode': 'loop',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/active%20plank.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  38: {
    'id': 38,
    'title': 'arm raise kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/arm%20raise%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  39: {
    'id': 39,
    'title': 'chair step',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/chair%20step.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  40: {
    'id': 40,
    'title': 'childpose',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/childpose.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  41: {
    'id': 41,
    'title': 'crunch twist',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/crunch%20twist.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  42: {
    'id': 42,
    'title': 'frog runner',
    'mode': 'time',
    'instructor': 1,
    'duration': 2,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/frog%20runner.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  43: {
    'id': 43,
    'title': 'glute leg raise left',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/glute%20leg%20raise%20left.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  44: {
    'id': 44,
    'title': 'glute leg raise right',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/glute%20leg%20raise%20right.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  45: {
    'id': 45,
    'title': 'half burpee',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/half%20burpee.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  46: {
    'id': 46,
    'title': 'hindu push up',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/hindu%20push%20up.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  47: {
    'id': 47,
    'title': 'Jump arm walk',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/jump%20%2B%20arm%20walk.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  48: {
    'id': 48,
    'title': 'kettlebell sumo squats',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/kettlebell%20sumo%20squats.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  49: {
    'id': 49,
    'title': 'laying glute killer',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/laying%20glute%20killer.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  50: {
    'id': 50,
    'title': 'leg raise kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/leg%20raise%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  51: {
    'id': 51,
    'title': 'low squat',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/low%20squat.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  52: {
    'id': 52,
    'title': 'low walk',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/low%20walk.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  53: {
    'id': 53,
    'title': 'lungexrunning stretch',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/lungexrunning%20stretch.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  54: {
    'id': 54,
    'title': 'mountain climbers',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/mountain%20climbers.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  55: {
    'id': 55,
    'title': 'noname left',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/noname%20left.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  56: {
    'id': 56,
    'title': 'noname',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/noname.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  57: {
    'id': 57,
    'title': 'russian twists kettlebell-1',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/russian%20twists%20kettlebell-1.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  58: {
    'id': 58,
    'title': 'russian twists kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/russian%20twists%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  59: {
    'id': 59,
    'title': 'scissors',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/scissors.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  60: {
    'id': 60,
    'title': 'side lunge kettlebell',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/side%20lunge%20kettlebell.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  61: {
    'id': 61,
    'title': 'side lunge',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/side%20lunge.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  62: {
    'id': 62,
    'title': 'spiderman push up',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/spiderman%20push%20up.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  },
  63: {
    'id': 63,
    'title': 'wall sit',
    'mode': 'time',
    'instructor': 1,
    'duration': 45,
    'videoUri': 'http://aakashsigdel.github.io/XRZR_Files/Exercises/wall%20sit.mov',
    tag: '#yoga, #therapy, #asthanga',
    sound: false,
    description: 'A few word about exercise or guideline.'
  }
}

export default exercise
