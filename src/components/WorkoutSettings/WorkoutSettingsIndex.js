import React, {
  View,
  StyleSheet,
  PropTypes,
  NativeModules
} from 'react-native'

import NavigationBar from './WSNavbar'
import WorkoutDetails from './WorkoutDetails'
import ActionButtons from './ActionButtons'
import CategoryDropDown from '../Common/CategoryDropDown'
let { ImagePickerManager } = NativeModules

class WorkoutSettingsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.workout.title,
      workout_set: 3,
      pause_between_exercises: 10,
      category: (props.workout.category && props.workout.category.tag) || 'None Selected',
      isModalVisible: false,
      image: props.workout.image_16x9 || '',
      update: false
    }
  }

  onChoosePhoto () {
    var options = {
      title: 'Select Workout Cover',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Start Recording from camera',
      chooseFromLibraryButtonTitle: 'Choose from Library',
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'photo', // 'photo' or 'video'
      storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
        skipBackup: true, // ios only - image will NOT be backed up to icloud
        path: 'images' // ios only - will save image at /Documents/images rather than the root
      }
    }

    ImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')

      } else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);

      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);

      } else {
        const source = response.uri.replace('file://', '')

        this.setState({
          image: source,
          update: true
        })
      }
    })
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
          onChoosePhoto={this.onChoosePhoto.bind(this)}
          coverImage={this.state.image}
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
          selectedCategory={this.state.category}
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
