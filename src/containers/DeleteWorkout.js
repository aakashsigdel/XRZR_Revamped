import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DeleteWorkoutIndex from '../components/DeleteWorkout/DeleteWorkoutIndex'
import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

const DeleteWorkout = (props) => {
  const onDeleteButton = () => undefined//props.workoutDispatchers.deleteWorkout(props.workoutId)
  const onCancelButton = () => props.navigator.pop()

  const workout = props.workouts[props.workoutId]
  return (
    <DeleteWorkoutIndex
      onCancelButton={onCancelButton}
      onDeleteButton={onDeleteButton}
      workout={workout}
    />
  )
}

DeleteWorkout.propTypes = {}
export default connect(
  (state) => {
    return {
      workouts: state.workout.data
    }
  },
  (dispatch) => {
    return {
      workoutDispatchers: bindActionCreators(WorkoutActionCreators, dispatch)
    }
  }
)(DeleteWorkout)
