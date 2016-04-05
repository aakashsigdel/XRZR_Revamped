import React, {
  Alert,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loader from '../components/Common/Loader.ios.js'

import WorkoutSettingsIndex from '../components/WorkoutSettings/WorkoutSettingsIndex'

import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

class WorkoutSettings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetching: false
    }
  }
  componentDidUpdate (prevProps) {
    if (!prevProps.workouts.isFetching && this.props.workouts.isFetching) {
      this.setState({
        isFetching: true
      })
    }
    if (prevProps.workouts.isFetching && !this.props.workouts.isFetching) {
      Alert.alert(
        'XRZR',
        'Workout Updated!'
      )
      this.setState({
        isFetching: false
      })
    }
  }

  render (props = this.props) {
    if (this.state.isFetching) {
      return(
        <Loader
          loadingText={'Updating Workout...'}
        />
      )
    }
    const onCloseButton = props.navigator.pop
    const workoutId = props.workoutId
    const workout = workoutManager(workoutId, props.workouts.data, props.categories)

    const onSaveButton = (workout) => {
      props.workoutDispatchers.updateWorkout({
        id: workoutId,
        workout
      })
      // props.navigator.popToTop()
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
    category: categories[workout.category.split('/')[1]]
  }
}

WorkoutSettings.propTypes = {}
export default connect(
  (state) => {
    return {
      categories: state.category.data,
      workouts: state.workout
    }
  },
  (dispatch) => {
    return {
      workoutDispatchers: bindActionCreators(WorkoutActionCreators, dispatch)
    }
  }
)(WorkoutSettings)
