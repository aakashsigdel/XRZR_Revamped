import React, { Component } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ExercisePropertiesIndex from '../components/ExerciseProperties/ExercisePropertiesIndex'
import * as ExerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as uiActionCreators from '../redux_x/actions/uiStatesActionCreators'

class ExerciseProperties extends Component {
  render (props = this.props) {
    const exerciseId = 27 // @TODO
    const exercise = exerciseManager(exerciseId, props.exercises)

    const onCloseButton = () => props.navigator.pop()
    const onDeleteConfirm = () => props.exerciseDispatchers.deleteExercise(exercise.id)
    const onNopeConfirm = () => props.uiDispatchers.changeDeleteExerciseModal(false)
    const onDeleteButton = () => props.uiDispatchers.changeDeleteExerciseModal(true)

    return (
      <ExercisePropertiesIndex
        exercise={exercise}
        modalVisibility={props.uiStates.showModalDeleteExercise}
        onCloseButton={onCloseButton}
        onDeleteButton={onDeleteButton}
        onDeleteConfirm={onDeleteConfirm}
        onNopeConfirm={onNopeConfirm}
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
      uiStates: state.uiStates
    }
  },
  (dispatch) => {
    return {
      exerciseDispatchers: bindActionCreators(ExerciseActionCreators, dispatch),
      uiDispatchers: bindActionCreators(uiActionCreators, dispatch)
    }
  }
)(ExerciseProperties)
