import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import NavigationBar from './WSNavbar'
import WorkoutDetails from './WorkoutDetails'
import ActionButtons from './ActionButtons'
import CategoryDropDown from '../Common/CategoryDropDown'

class WorkoutSettingsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.workout.title,
      workout_set: 3,
      pause_between_exercises: 10,
      category: props.workout.category.tag,
      isModalVisible: false
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

  toggleCategoryModal () {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  render (props = this.props) {
    const onSaveButton = () => props.onSaveButton(this.state)
    return (
      <View style={styles.container}>
        <NavigationBar
          onCloseButton={props.onCloseButton}
          onDeleteButton={props.onDeleteButton}
          onPublishIcon={props.onPublishIcon}
          published={props.workout.published}
          title={props.workout.title}
        />
        <WorkoutDetails
          onCategoryChange={this.onCategoryChange.bind(this)}
          category={this.state.category}
          onDescriptionChange={this.onDescriptionChange.bind(this)}
          onPBEChange={this.onPBEChange.bind(this)}
          onWorkoutSetChange={this.onWorkoutSetChange.bind(this)}
          workout={props.workout}
          toggleCategoryModal={this.toggleCategoryModal.bind(this)}
        />
        <ActionButtons
          onEditExercises={props.onEditExercises}
          onSaveButton={onSaveButton}
        />
        <CategoryDropDown
          isModalVisible={this.state.isModalVisible}
          toggleCategoryModal={this.toggleCategoryModal.bind(this)}
          onCategoryChange={this.onCategoryChange.bind(this)}
          categories={this.props.categories}
          selectedCategory={props.workout.category.tag}
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
