import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import WorkoutSettingsIndex from '../components/WorkoutSettings/WorkoutSettingsIndex'

import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

class WorkoutSettings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render (props = this.props) {
    const onCloseButton = () => console.warn('close button')
    const workoutId = 1
    const workout = workoutManager(workoutId, props.workouts, props.categories)

    const onSaveButton = (workout) => {
      props.workoutDispatchers.updateWorkout({
        id: workoutId,
        ...workout
      })
    }
    return (
      <WorkoutSettingsIndex
        onCloseButton={onCloseButton}
        onSaveButton={onSaveButton}
        workout={workout}
      />
    )
  }
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
    return {
      workoutDispatchers: bindActionCreators(WorkoutActionCreators, dispatch)
    }
  }
)(WorkoutSettings)
