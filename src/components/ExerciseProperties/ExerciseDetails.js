import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import VideoPlayer from '../Common/VideoPlayer'
import PropertyList from './PropertyList'
import Placeholder from './Placeholder'

const ExerciseDetails = (props) => {
  return (
    <View style={styles.container}>
      {
        props.isNewExercise
        ? <Placeholder height={211} />
        : <VideoPlayer
            muted
            videoUri={props.exercise.videoUri}
            height={211}
          />
      }
      <PropertyList
        exercise={props.exercise}
        isNewExercise={props.isNewExercise}
      />
    </View>
  )
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

export default ExerciseDetails
