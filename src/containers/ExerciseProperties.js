import React, {
  Component,
  NativeModules
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ExercisePropertiesIndex from '../components/ExerciseProperties/ExercisePropertiesIndex'
import * as ExerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as uiActionCreators from '../redux_x/actions/uiStatesActionCreators'

//import NewExerciseUploadingIndex from '../components/NewExerciseUploading/NewExerciseUploadingIndex'

let { ImagePickerManager } = NativeModules

class ExerciseProperties extends Component {
  constructor (props) {
    super(props)
    const exercise = props.isNewExercise ? null : props.exercises[props.exerciseId]
    this.state = {
      isModalVisible: false,
      videoSource: props.isNewExercise ? '' : exercise.videoUri,

      exercise_title: props.isNewExercise ? undefined : exercise.title,
      tags: props.isNewExercise ? undefined : exercise.tags,
      description: props.isNewExercise ? undefined : exercise.description,
      sound: props.isNewExercise ? undefined : exercise.sound,
      update: false
    }
    this.onChooseVideo = this.onChooseVideo.bind(this)
    this.onExerciseDescriptionChange = this.onExerciseDescriptionChange.bind(this)
    this.onExerciseSoundSwitchChange = this.onExerciseSoundSwitchChange.bind(this)
    this.onExerciseTagsChange = this.onExerciseTagsChange.bind(this)
    this.onExerciseTitleChange = this.onExerciseTitleChange.bind(this)
  }

  //toggleModalState () {
  //  this.setState({
  //    isModalVisible: !this.state.isModalVisible
  //  })
  //}

  render (props = this.props) {
    const exerciseId = this.props.exerciseId
    const exercise = exerciseManager(exerciseId, this.props.exercises)

    const onCloseButton = () => props.navigator.pop()
    const onDeleteConfirm = () => undefined // @todo props.exerciseDispatchers.deleteExercise(exercise.id)
    const onNopeConfirm = () => props.uiDispatchers.changeDeleteExerciseModal(false)
    const onDeleteButton = () => props.uiDispatchers.changeDeleteExerciseModal(true)
    console.log(this.state, 'katti dherai props')
    const onSaveButton = () => {
      let newExercise = {
        title: this.state.exercise_title,
        description: this.state.description,
        tags: this.state.tags,
        sound: this.state.sound,
        videoUri: this.state.videoSource
      }
      console.log('hello user', props.user)
      props.navigator.push({
        name: 'newExerciseUploading',
        newExercise: newExercise,
        user: props.user,
        update: this.state.update,
        exerciseUpdateId: this.props.exerciseUpdateId,
        isNewExercise: this.props.isNewExercise
      })
    }

    console.log('mai ho mai')
    // let videoUri = exercise.videoUri
    // if (props.isNewExercise && this.state.videoSource) {
    //   videoUri = this.state.videoSource
    // }
    console.log('stash garnu hunna')

    //if (this.state.isModalVisible) {
    //  let newExercise = {
    //    title: this.state.exercise_title,
    //    description: this.state.description,
    //    tags: this.state.tags,
    //    sound: this.state.sound,
    //    videoUri: this.state.videoSource
    //  }
    //  return (
    //    <NewExerciseUploadingIndex
    //      user={this.props.user}
    //      exercise={newExercise}
    //      toggleModalState={() => this.toggleModalState()}
    //      navigator={this.props.navigator}
    //    />
    //  )
    //}
    return (
      <ExercisePropertiesIndex
        exercise={exercise}
        instructor={this.props.instructor}
        isNewExercise={this.props.isNewExercise}
        modalVisibility={props.uiStates.showModalDeleteExercise}
        onCloseButton={onCloseButton}
        onChooseVideo={this.onChooseVideo}
        onDeleteButton={onDeleteButton}
        onDeleteConfirm={onDeleteConfirm}

        onExerciseDescriptionChange={this.onExerciseDescriptionChange}
        onExerciseSoundSwitchChange={this.onExerciseSoundSwitchChange}
        onExerciseTagsChange={this.onExerciseTagsChange}
        onExerciseTitleChange={this.onExerciseTitleChange}

        onNopeConfirm={onNopeConfirm}
        onSaveButton={onSaveButton}
        videoIsNotSelected={ !this.state.videoSource }
        videoUri={this.state.videoSource}
      />
    )
  }

  onExerciseTitleChange (text) {
    this.setState({
      exercise_title: text
    })
  }
  onExerciseTagsChange (text) {
    this.setState({
      tags: text
    })
  }
  onExerciseDescriptionChange(text) {
    this.setState({
      description: text
    })
  }
  onExerciseSoundSwitchChange(status) {
    this.setState({
      sound: status
    })
  }
  onChooseVideo () {
    var options = {
      title: 'Select Exercise Video',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Start Recording from camera',
      chooseFromLibraryButtonTitle: 'Choose from Library',
      customButtons: {
        'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
      },
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'video', // 'photo' or 'video'
      videoQuality: 'high', // 'low', 'medium', or 'high'
      durationLimit: 60 * 60, // video recording max time in seconds
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
          videoSource: source,
          update: true
        })
      }
    })
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
      uiStates: state.uiStates,
      user: state.login
    }
  },
  (dispatch) => {
    return {
      exerciseDispatchers: bindActionCreators(ExerciseActionCreators, dispatch),
      uiDispatchers: bindActionCreators(uiActionCreators, dispatch)
    }
  }
)(ExerciseProperties)
