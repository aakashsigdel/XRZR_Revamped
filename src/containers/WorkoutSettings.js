import React, {
  PropTypes,
  View
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loader from '../components/Common/Loader.ios.js'
import StatusMessage from '../components/Common/StatusMessage'

import WorkoutSettingsIndex from '../components/WorkoutSettings/WorkoutSettingsIndex'

import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

class WorkoutSettings extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.workouts.isFetching && !this.props.workouts.isFetching) {
      this.setState({
        showModal: true
      })
    }
  }

  render (props = this.props) {
    if (this.props.workouts.isFetching) {
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
    }
    const onPublishIcon = () => props.workoutDispatchers.publishWorkout(workoutId, !workout.published)
    const onEditExercises = () => props.navigator.push({name: 'editWorkoutExercises', workoutId: workoutId})
    const onDeleteButton = () => props.navigator.push({name: 'deleteWorkout', workoutId: workoutId})

    return (
      <View style={{flex: 1}}>
        <WorkoutSettingsIndex
          onCloseButton={onCloseButton}
          onDeleteButton={onDeleteButton}
          onEditExercises={onEditExercises}
          onPublishIcon={onPublishIcon}
          onSaveButton={onSaveButton}
          workout={workout}
          categories={props.categories}
        />
        <StatusMessage
          onExit={() => this.setState({ showModal: false })}
          statusMessage={'Workout Updated'}
          transparent
          visible={this.state.showModal}
        />
      </View>
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
