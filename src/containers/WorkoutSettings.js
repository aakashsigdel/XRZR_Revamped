import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreator} from 'redux'

import WorkoutSettingsIndex from '../components/WorkoutSettings/WorkoutSettingsIndex'

const WorkoutSettings = (props) => {
  const onCloseButton = () => console.warn('close button')
  const workoutId = 1
  const workout = workoutManager(workoutId, props.workouts, props.categories)
  return (
    <WorkoutSettingsIndex
      onCloseButton={onCloseButton}
      workout={workout}
    />
  )
}

function workoutManager (workoutId, workouts, categories) {
  const workout = workouts[workoutId]
  return {
    ...workout,
    category: categories[workout.category]
  }
}

WorkoutSettings.propTypes = {}
export default connect(
  (state) => {
    return {
      categories: state.category,
      workouts: state.workout
    }
  },
  (dispatch) => {
    return {}
  }
)(WorkoutSettings)
