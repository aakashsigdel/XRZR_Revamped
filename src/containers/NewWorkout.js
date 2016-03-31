'use strict'

import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { postWorkout } from '../redux_x/actions/workoutActionCreators'
import NewWorkoutIndex from '../components/NewWorkout/NewWorkoutIndex'

class NewWorkout extends Component {
  render () {
    const { dispatch } = this.props
    return (
      <NewWorkoutIndex
        navigator={this.props.navigator}
        addWorkout={(title) => dispatch(postWorkout(title))}
      />
    )
  }
}

export default connect(
  (state) => ({state})
)(NewWorkout)
