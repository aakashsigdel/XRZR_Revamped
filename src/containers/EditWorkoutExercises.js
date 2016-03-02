import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import EditWorkoutExercisesIndex from '../components/EditWorkoutExercises/EditWorkoutExercisesIndex'
import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

const EditWorkoutExercises = (props) => {
  const workoutId = props.workoutId
  const workout = workoutManager(workoutId, props.workouts, props.exercises)

  const editOnProgress = true

  const onCloseButton = props.navigator.pop
  const onSaveButton = props.workoutDispatchers.updateWorkout
  const onEditButton = () => console.warn("edit")
  const onDoneButton = () => console.warn('done')
  return (
    <EditWorkoutExercisesIndex
      editOnProgress={editOnProgress}
      onCloseButton={onCloseButton}
      onDoneButton={onDoneButton}
      onEditButton={onEditButton}
      onSaveButton={onSaveButton}
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
    return {
      workoutDispatchers: bindActionCreators(WorkoutActionCreators, dispatch)
    }
  }
)(EditWorkoutExercises)
