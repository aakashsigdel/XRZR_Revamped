'use strict'

import React from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileIndex from '../components/Profile/ProfileIndex'
import { getUser } from '../redux_x/actions/userActionCreators'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

const goToWorkoutIntro = (props, workoutId) => {
  props.playerDispatchers.loadWorkout(workoutId)
  props.navigator.push({name: 'workoutIntro'})
}
const Profile = (props) => {
  let workouts = props.user[props.userId].workout.map(workoutId => {
    return props.workouts[workoutId]
  })
  return (
    <ProfileIndex
      user={props.user[props.userId]}
      workouts={props.workouts}
      navigator={props.navigator}
      goToWorkoutIntro={(workoutId) => goToWorkoutIntro(props, workoutId)}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    workouts: state.workout
  }
}
export default connect(
  (state) => mapStateToProps(state),
  (dispatch) => ({playerDispatchers: bindActionCreators(VideoActionCreators, dispatch)})
)(Profile)
