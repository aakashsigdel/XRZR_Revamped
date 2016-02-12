import React, {
  View,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import VideoScreen from "../components/Player/VideoScreen"
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

const Player = (props) => {
  const previousVideoDispatcher = ()=>props.playerActions.changeVideo(getPreviousVideoId(props.state))
  const nextVideoDispatcher = ()=>props.playerActions.changeVideo(getNextVideoId(props.state))
  const closeButtonPressed = ()=>props.navigator.pop()

  return (
    <VideoScreen state={props.state}
                 previousVideo={ previousVideoDispatcher }
                 nextVideo={ nextVideoDispatcher }
                 closePressed={ closeButtonPressed }
      {...props.playerActions} />
  )
}

function getPreviousVideoId(state){
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]

  let exerciseId = state.player.nowPlaying

  let previousItem = workout.exercises.indexOf(exerciseId) - 1;

  if (previousItem < 0){
    return -1
  }
  return workout.exercises[previousItem]
}

function getNextVideoId(state){
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]

  let exerciseId = state.player.nowPlaying

  let nextItem = workout.exercises.indexOf(exerciseId) + 1;

  if (nextItem > workout.exercises.length){
    return -1
  }
  return workout.exercises[nextItem]
}


function _bindActionCreators(dispatch) {
  return {
      playerActions: bindActionCreators(VideoActionCreators, dispatch)
  }
}

export default connect(
  state => ({ state }),
  _bindActionCreators
)(Player)