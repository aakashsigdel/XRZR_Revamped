import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import WorkoutCompletionIndex from '../components/WorkoutCompletion/WorkoutCompletionIndex'

const WorkoutCompletion = (props) => {
  const workout = workoutManager(props.player.workoutId, props.workouts)
  return (
    <WorkoutCompletionIndex
      workout={workout}
    />
  )
}

function workoutManager(workoutId, workouts) {
  return workouts[workoutId]
}

WorkoutCompletion.propTypes = {}

export default connect(
  (state) => {
    return {
      workouts: state.workout,
      player: state.player
    }
  },
  (dispatch) => {
    return {

    }
  }
)(WorkoutCompletion)
