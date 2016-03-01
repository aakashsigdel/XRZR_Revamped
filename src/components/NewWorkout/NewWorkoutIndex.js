'use strict'

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native'
import Navigation from './Navigation'
import Info from './Info'
import WorkoutName from './WorkoutName'
import CreateWorkoutButton from './CreateWorkoutButton'

export default class NewWorkoutIndex extends Component {
  _handleCreateWorkout () {
    this.props.navigator.popToTop()
  }

  render () {
    return (
      <View style={styles.container}>
        <Navigation
          navigator={this.props.navigator}
        />
        <Info />
        <WorkoutName />
        <CreateWorkoutButton
          handleCreateWorkout={this._handleCreateWorkout.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D2022',
    paddingLeft: 12.5,
    paddingRight: 12.5,
    paddingBottom: 5
  }
})
