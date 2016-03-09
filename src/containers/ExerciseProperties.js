import React, { Component } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ExercisePropertiesIndex from '../components/ExerciseProperties/ExercisePropertiesIndex'
import * as ExerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as uiActionCreators from '../redux_x/actions/uiStatesActionCreators'

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

  render (props = this.props) {
    const exerciseId = 27 // @todo
    const exercise = exerciseManager(exerciseId, this.props.exercises)

    const onCloseButton = () => props.navigator.pop()
    const onDeleteConfirm = () => undefined//props.exerciseDispatchers.deleteExercise(exercise.id)
    const onNopeConfirm = () => props.uiDispatchers.changeDeleteExerciseModal(false)
    const onDeleteButton = () => props.uiDispatchers.changeDeleteExerciseModal(true)

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
        isNewExercise={this.props.isNewExercise}
        modalVisibility={props.uiStates.showModalDeleteExercise}
        onCloseButton={onCloseButton}
        onDeleteButton={onDeleteButton}
        onDeleteConfirm={onDeleteConfirm}
        onNopeConfirm={onNopeConfirm}
        toggleModalState={() => this.toggleModalState()}
      />
    )
  }
}

function exerciseManager (exerciseId, exercises){
  return exercises[exerciseId]
}

ExerciseProperties.propTypes = {}
export default connect(
  (state) => {
    return {
      exercises: state.exercise,
      uiStates: state.uiStates,
      user: state.user[1]
    }
  },
  (dispatch) => {
    return {
      exerciseDispatchers: bindActionCreators(ExerciseActionCreators, dispatch),
      uiDispatchers: bindActionCreators(uiActionCreators, dispatch)
    }
  }
)(ExerciseProperties)
