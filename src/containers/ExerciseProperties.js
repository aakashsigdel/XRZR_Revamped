import React, { Component } from 'react-native'
import {connect} from 'react-redux'

import ExercisePropertiesIndex from '../components/ExerciseProperties/ExercisePropertiesIndex'
import NewExerciseUploadingIndex from '../components/NewExerciseUploading/NewExerciseUploadingIndex'

class ExerciseProperties extends Component {
  constructor () {
    super()
    this.state = {
      isModalVisible: false
    }
  }

  toggleModalState () {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  render () {
    const exerciseId = 27
    const exercise = exerciseManager(exerciseId, this.props.exercises)

    const onCloseButton = () => this.props.navigator.pop()

    if (this.state.isModalVisible) {
      return (
        <NewExerciseUploadingIndex
          user={this.props.user}
          exercise={exercise}
          toggleModalState={() => this.toggleModalState()}
          navigator={this.props.navigator}
        />
      )
    }
    return (
      <ExercisePropertiesIndex
        exercise={exercise}
        instructor={this.props.instructor}
        onCloseButton={onCloseButton}
        isNewExercise={true}
        toggleModalState={() => this.toggleModalState()}
      />
    )
  }
}

function exerciseManager (exerciseId, exercises) {
  const exercise = exercises[exerciseId]
  return {
    ...exercise
  }
}

ExerciseProperties.propTypes = {}
export default connect(
  (state) => {
    return {
      exercises: state.exercise,
      user: state.user[1]
    }
  },
  (dispatch) => {
    return {}
  }
)(ExerciseProperties)
