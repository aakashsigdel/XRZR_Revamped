'use strict'

import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  DELETE_WORKOUT
} from '../actions/actionTypes'

const workout = (state = defaultWorkout, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return {
        ...state,
        [action.id]: action.workout
      }
    case UPDATE_WORKOUT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.workout
        }
      }
    case DELETE_WORKOUT:
      return state.filter(workout => workout.id !== action.workoutId)
    default:
      return state
  }
}

const defaultWorkout = {
  1: {
    id: 1,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'Sail me skiff, ye stormy freebooter!',
    description: 'The plank drinks with desolation, haul the brig.Aye, yer not commanding me without a beauty!Yarr, ye swashbuckling wench- set sails for urchin!Lively, golden pins quirky burn a cold, clear scabbard.',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg',
    duration: '60 mins',
    instructor: 2
  },
  2: {
    id: 2,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'The cloud pulls with faith, command the freighter.',
    description: 'Arrr, view me shipmate, ye heavy-hearted comrade!Clouds scream on death at tortuga!Yuck, yo-ho-ho.The breeze drinks with riddle, loot the fortress before it rises.',
    image_16x9: 'http://imageresizer.static9.net.au/952JfvKuvR5gUew8t_i_lzrChXM=/512x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2Fnetwork%2F2016%2F02%2F09%2F17%2F20%2Fkayla-workout-series-16029.jpg',
    duration: '10 mins',
    instructor: 1
  },
  3: {
    id: 3,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'Sally Sells Sea Shells by the Sea Shore',
    description: 'Captains scream with fight at the stormy port degas!Jolly rogers hobble with treasure at the rainy cabo rojo!Scurvy, weird furners darkly rob a golden, gutless lad.Ho-ho-ho! life of passion.Old passions lead to the halitosis.',
    image_16x9: 'http://nutrientjournal.com/wp-content/uploads/2013/07/Fit_Girl_Friday_5.jpg',
    duration: '40 mins',
    instructor: 2
  },
  4: {
    id: 4,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'Betty Bought a Bit of Butter',
    description: 'Ahoy, real whale. go to singapore.Crush me pants, ye old son!Jolly roger, never lead a gull.How fine. You rob like a girl.Fire me son, ye small pants!',
    image_16x9: 'http://media.mnn.com/assets/images/2015/06/manifesta.jpg.653x0_q80_crop-smart.jpg',
    duration: '60 mins',
    instructor: 0
  },
  5: {
    id: 5,
    exercises: [8, 3, 4, 6, 2, 1, 5],
    title: 'But the Butter was Bitter',
    description: 'The sailor desires with passion, command the brig until it travels.Where is the lively tobacco?Amnesty is a stormy cloud.How lively. You drink like a parrot.',
    image_16x9: 'http://nutrientjournal.com/wp-content/uploads/2013/07/Fit_Girl_Friday_5.jpg',
    duration: '60 mins',
    instructor: 1
  },
  6: {
    id: 6,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'So to Make the Bitter Butter Better',
    description: 'Where is the heavy-hearted sailor?Comrades sing with treasure at the dead norman island!Tobaccos travel with hunger at the addled prison!Gar there\'s nothing like the coal-black hunger waving on the jolly roger.Rums are the parrots of the addled urchin.Masts fall with halitosis!Mighty deaths lead to the life.',
    image_16x9: 'http://i.imgur.com/I0Y8R1W.jpg',
    duration: '60 mins',
    instructor: 2,
  },
  7: {
    id: 7,
    exercises: [2, 5, 3, 6, 1, 7, 4],
    title: 'She Put a Bit of Better Butter',
    description: 'Jacks travel from booties like cloudy tunas.The misty pants oppressively fears the cannibal.Cockroachs travel on power at prison!',
    image_16x9: 'http://i.imgur.com/I0Y8R1W.jpg',
    duration: '90 mins',
    instructor: 1,
  },
  8: {
    id: 8,
    exercises: [5, 3, 2, 1, 7, 4],
    title: 'The proud moon swiftly crushes the reef. ',
    description: 'All biscuit eaters view rough, weird ales.Well, ye misty tuna- set sails for strength!Where is the misty son?Ho-ho-ho! horror of riddle.',
    image_16x9: 'http://i.imgur.com/4XCU59a.jpg',
    duration: '30 min',
    instructor: 2
  },
  9: {
    id: 9,
    exercises: [5, 3, 2, 1, 7, 4],
    title: 'The sunny yardarm fiery desires the hornpipe.',
    description: 'Lord, yer not marking me without a booty!Damn yer kraken, feed the lass.Sharks stutter on endurance at madagascar!Amnesty, riddle, and booty.All moons taste cloudy, rough gibbets.God, c\'mon.',
    image_16x9: 'http://cdn.collider.com/wp-content/uploads/2015/12/doctor-strange-benedict-cumberbatch-slice1-600x200.jpg',
    duration: '60 mins',
    instructor: 0
  }
}

export default workout
