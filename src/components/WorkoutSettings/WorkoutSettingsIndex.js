import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import NavigationBar from './WSNavbar'
import WorkoutDetails from './WorkoutDetails'
import ActionButtons from './ActionButtons'

class WorkoutSettingsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      workout_set: 3,
      pause_between_exercises: 10,
      category: 'ag5zfmJhY2tsZWN0LWFwcHIVCxIIY2F0ZWdvcnkYgICAgO2xgwoMogEJeHJ6ci54cnpy'
    }
  }

  onWorkoutSetChange (workout_set) {
    this.setState({
      workout_set
    })
  }
  onPBEChange (pause_between_exercises) {
    this.setState({
      pause_between_exercises
    })
  }
  onCategoryChange (category) {
    this.setState({
      category
    })
  }
  onDescriptionChange (description) {
    this.setState({
      description
    })
  }

  render (props = this.props) {
    const onSaveButton = () => props.onSaveButton(this.state)
    return (
      <View style={styles.container}>
        <NavigationBar
          onCloseButton={props.onCloseButton}
          onDeleteButton={props.onDeleteButton}
          title={props.workout.title}
        />
        <WorkoutDetails
          onCategoryChange={this.onCategoryChange.bind(this)}
          onDescriptionChange={this.onDescriptionChange.bind(this)}
          onPBEChange={this.onPBEChange.bind(this)}
          onWorkoutSetChange={this.onWorkoutSetChange.bind(this)}
          workout={props.workout}
        />
        <ActionButtons
          onEditExercises={props.onEditExercises}
          onSaveButton={onSaveButton}
        />
      </View>
    )
  }
}

WorkoutSettingsIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default WorkoutSettingsIndex
