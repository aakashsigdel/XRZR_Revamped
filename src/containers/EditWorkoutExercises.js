import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import EditWorkoutExercisesIndex from '../components/EditWorkoutExercises/EditWorkoutExercisesIndex'

const EditWorkoutExercises = (props) => {
  const workoutId = 1
  const workout = workoutManager(workoutId, props.workouts, props.exercises)
  return (
    <EditWorkoutExercisesIndex
      workout={workout}
    />
  )
}

function workoutManager (workoutId, workouts, exercises) {
  const workout = workouts[workoutId]
  return {
    ...workout,
    exercises: workout.exercises.map((exerciseId) => exercises[exerciseId])
  }
}

EditWorkoutExercises.propTypes = {}
export default connect(
  (state) => {
    return {
      workouts: state.workout,
      exercises: state.exercise
    }
  },
  (dispatch) => {
    return {}
  }
)(EditWorkoutExercises)
