import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userDataActionCreators from '../redux_x/actions/userDataActionCreators'

import WorkoutCompletionIndex from '../components/WorkoutCompletion/WorkoutCompletionIndex'

const WorkoutCompletion = (props) => {
  const workout = workoutManager(props.player.workoutId, props.workouts)
  const onCloseButton = () => props.navigator.pop()
  const onShareButton = () => undefined
  const onLikeButton = props.userDataDispatchers.likeWorkout

  return (
    <WorkoutCompletionIndex
      onCloseButton={onCloseButton}
      onLikeButton={onLikeButton}
      onShareButton={onShareButton}
      workout={workout}
    />
  )
}

function workoutManager (workoutId, workouts) {
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
      userDataDispatchers: bindActionCreators(userDataActionCreators, dispatch)
    }
  }
)(WorkoutCompletion)
