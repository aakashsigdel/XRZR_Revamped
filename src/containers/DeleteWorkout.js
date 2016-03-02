import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DeleteWorkoutIndex from '../components/DeleteWorkout/DeleteWorkoutIndex'

const DeleteWorkout = (props) => {
  const onDeleteButton = () => undefined
  const onCancelButton = () => undefined

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
      workouts: state.workout
    }
  },
  (dispatch) => {
    return {}
  }
)(DeleteWorkout)
