import React, {
  View,
  StyleSheet,
  PropTypes,
  Component,
  ScrollView
} from 'react-native'

import VideoPlayer from '../Common/VideoPlayer'
import PropertyList from './PropertyList'
import Placeholder from './Placeholder'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class ExerciseDetails extends Component {
  setChildTextInputRef (childTextInputRef) {
    this.childTextInputRef = childTextInputRef
  }

  scrollToInput (event) {
    this.refs.scroll.scrollToFocusedInput(event, this.childTextInputRef)
  }

  render (props = this.props) {
    return (
      <KeyboardAwareScrollView
        ref='scroll'
        contentContainerStyle={styles.container}
      >
        {
          (props.isNewExercise && props.videoIsNotSelected)
            ? <Placeholder
              height={211}
              onChooseVideo={props.onChooseVideo}
            />
            : <VideoPlayer
              muted
              videoUri={props.videoUri}
              height={211}
            />
            }
            <PropertyList
              exercise={props.exercise}
              isNewExercise={props.isNewExercise}

              onExerciseDescriptionChange={props.onExerciseDescriptionChange}
              onExerciseSoundSwitchChange={props.onExerciseSoundSwitchChange}
              onExerciseTagsChange={props.onExerciseTagsChange}
              onExerciseTitleChange={props.onExerciseTitleChange}
              setChildTextInputRef={(ref) => this.setChildTextInputRef(ref)}
              scrollToInput={(event) => this.scrollToInput(event)}
            />
          </KeyboardAwareScrollView>
    )
  }
}

ExerciseDetails.propTypes = {}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    paddingLeft: 12.5,
    paddingRight: 12.5
  }
})
