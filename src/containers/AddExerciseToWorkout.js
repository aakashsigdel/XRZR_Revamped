'use strict'

import React, { PropTypes } from 'react-native'
import { connect } from 'react-redux'
import AddExerciseToWorkoutIndex from '../components/AddExerciseToWorkout/AddExerciseToWorkoutIndex'
import { updateWorkout } from '../redux_x/actions/workoutActionCreators'

const popRoute = (navigator) => {
  navigator.pop()
}

const AddExerciseToWorkout = (props) => {
  let workouts = Object.keys(props.workouts).map((item) => {
    return props.workouts[item]
  })
  return (
    <AddExerciseToWorkoutIndex
      workouts={workouts}
      exercise={props.exercises[props.exerciseId]}
      navigator={props.navigator}
      updateWorkout={(exercises) => props.dispatch(updateWorkout(exercises))}
      popRoute={() => popRoute(props.navigator)}
    />
  )
}

// -------
// PropTypes
// -------
AddExerciseToWorkout.propTypes = {
  exercises: PropTypes.object,
  workouts: PropTypes.object,
  dispatch: PropTypes.func
}

// -----
// connect
// -----
const mapStateToProps = (state) => {
  return {
    exercises: state.exercise,
    workouts: state.workout
  }
}

export default connect(
  mapStateToProps
)(AddExerciseToWorkout)
