import React, {
  View,
  StyleSheet,
  PropTypes,
  NativeModules
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { shareOnFacebook } from '../utilities/utility'

import Mixpanel, * as MixpanelConfig from '../constants/MixPanelConfigs'
import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

import WorkoutCompletionIndex from '../components/WorkoutCompletion/WorkoutCompletionIndex'

class WorkoutCompletion extends React.Component {
  componentDidMount() {
    Mixpanel.track(MixpanelConfig.WORKOUT_DONE)
  }
  render (props = this.props) {
    const workout = workoutManager(props.player.workoutId, props.workouts)
    const onCloseButton = () => props.navigator.pop()
    const onLikeButton = () => {
      Mixpanel.track(MixpanelConfig.WORKOUT_LIKE)
      props.WorkoutDispatchers.likeWorkout({workoutId: props.player.workoutId, like: true})
    }

    return (
      <WorkoutCompletionIndex
        onCloseButton={onCloseButton}
        onLikeButton={onLikeButton}
        onShareButton={(options) => shareOnFacebook(options, () => console.log('shared'))}
        workout={workout}
      />
    )
  }
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
