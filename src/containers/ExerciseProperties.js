import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreator} from 'redux'

import ExercisePropertiesIndex from '../components/ExerciseProperties/ExercisePropertiesIndex'

const ExerciseProperties = (props) => {

  const exerciseId = 27
  const exercise = exerciseManager(exerciseId, props.exercises)

  return (
    <ExercisePropertiesIndex
      exercise={exercise}
    />
  )
}

function exerciseManager(exerciseId, exercises){
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
