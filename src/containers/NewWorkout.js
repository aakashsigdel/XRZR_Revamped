'use strict'

import React, { Component } from 'react-native'
import NewWorkoutIndex from '../components/NewWorkout/NewWorkoutIndex'

export default class NewWorkout extends Component {
  render () {
    return (
      <NewWorkoutIndex
        navigator={this.props.navigator}
      />
    )
  }
}
