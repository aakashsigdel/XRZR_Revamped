import React, { Component } from 'react-native'
import {connect} from 'react-redux'

import ExercisePropertiesIndex from '../components/ExerciseProperties/ExercisePropertiesIndex'

class ExerciseProperties extends Component {
  render () {
    const exerciseId = 27
    const exercise = exerciseManager(exerciseId, this.props.exercises)

    const onCloseButton = () => this.props.navigator.pop()

    return (
      <ExercisePropertiesIndex
        exercise={exercise}
        onCloseButton={onCloseButton}
        isNewExercise={false}
      />
    )
  }
}

function exerciseManager (exerciseId, exercises) {
  return exercises[exerciseId]
}

ExerciseProperties.propTypes = {}
export default connect(
  (state) => {
    return {
      exercises: state.exercise
    }
  },
  (dispatch) => {
    return {}
  }
)(ExerciseProperties)
