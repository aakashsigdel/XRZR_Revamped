'use strict'

import React, { Component } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postWorkout } from '../redux_x/actions/workoutActionCreators'
import { loadWorkout } from '../redux_x/actions/videoActionCreators'
import NewWorkoutIndex from '../components/NewWorkout/NewWorkoutIndex'

class NewWorkout extends Component {
  constructor () {
    super()
    this.count = 0
  }
  addWorkout (title) {
    this.props.actions.postWorkout(title)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.state.workout.isFetching && !this.props.state.workout.isFetching) {
      if (this.count === 0) {
        this.props.navigator.replace({name: 'workoutIntro'})
        ++this.count
      }
    }
  }

  render () {
    const { dispatch } = this.props
    return (
      <NewWorkoutIndex
        navigator={this.props.navigator}
        addWorkout={(title) => this.addWorkout(title)}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postWorkout: bindActionCreators(postWorkout, dispatch),
      loadWorkout: bindActionCreators(loadWorkout, dispatch)
    }
  }
}

export default connect(
  (state) => ({state}),
  mapDispatchToProps
)(NewWorkout)
