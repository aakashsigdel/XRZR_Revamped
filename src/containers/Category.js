import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import CategoryIndex from '../components/Category/CategoryIndex'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

const Category = (props) => {
  let category = 'Yoga'
  denormalizedData = denormalizeExerciseItems(
    category,
    props.categories,
    props.workouts,
    props.instructors
  )
  let catItem = props.categories[category]

  let onWorkoutSelect = (workoutId) => {
    props.playerDispatchers.loadWorkout(workoutId)
    props.navigator.push({name: 'player'})
  }

  return (
    <CategoryIndex catItem={catItem}
                   catData={ denormalizedData }
                   onWorkoutSelect={ onWorkoutSelect }
    />
  )
}

function denormalizeExerciseItems(category, categories, workouts, instructors){
  let categoryItem = categories[category]
  if (! categoryItem)
    return {}

  let workoutItems = categoryItem.workouts.map(
    (workoutId) => {
      let workout = workouts[workoutId]
      let instructorId = workout.instructor
      let instructor = instructors[instructorId]
      return {
        ...workout,
        instructor,
      }
    }
  )
  return workoutItems
}

export default connect(
  (state) => {
    return {
      workouts: state.workout,
      exercises: state.exercise,
      categories: state.category,
      instructors: state.instructor,
    }
  },
  (dispatch) => {
    return {
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch)
    }
})(Category)