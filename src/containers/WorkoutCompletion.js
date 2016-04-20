import React, {
  View,
  StyleSheet,
  PropTypes,
  NativeModules
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

import WorkoutCompletionIndex from '../components/WorkoutCompletion/WorkoutCompletionIndex'

var KDSocialShare = require('NativeModules').KDSocialShare

const WorkoutCompletion = (props) => {
  const workout = workoutManager(props.player.workoutId, props.workouts)
  const onCloseButton = () => props.navigator.pop()
  const onShareButton = () => KDSocialShare.shareOnFacebook({
    text: 'this is workout',
    link: 'http://facebook.com'
  }, (results) => console.log(results))
  const onLikeButton = () => props.WorkoutDispatchers.likeWorkout({workoutId: props.player.workoutId, like: true})

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
      workouts: state.workout.data,
      player: state.player
    }
  },
  (dispatch) => {
    return {
      WorkoutDispatchers: bindActionCreators(WorkoutActionCreators, dispatch)
    }
  }
)(WorkoutCompletion)
