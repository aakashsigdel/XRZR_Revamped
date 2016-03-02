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
    const onCloseButton = props.navigator.pop
    const workoutId = props.workoutId
    const workout = workoutManager(workoutId, props.workouts, props.categories)

    const onSaveButton = (workout) => {
      props.workoutDispatchers.updateWorkout({
        id: workoutId,
        ...workout
      })
    }
    const onEditExercises = () => props.navigator.push({name: 'editWorkoutExercises', workoutId: workoutId})
    const onDeleteButton = () => props.navigator.push({name: 'deleteWorkout', workoutId: workoutId})

    return (
      <WorkoutSettingsIndex
        onCloseButton={onCloseButton}
        onDeleteButton={onDeleteButton}
        onEditExercises={onEditExercises}
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
