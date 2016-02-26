import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import VideoPlayer from '../Common/VideoPlayer'
import PropertyList from './PropertyList'

const ExerciseDetails = (props) => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        muted
        videoUri={props.exercise.videoUri}
        height={211}
      />
      <PropertyList
        exercise={props.exercise}
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
