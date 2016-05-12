import React, {
  Component,
  Image,
  View,
  StyleSheet,
  PropTypes
} from 'react-native'
import Orientation from 'react-native-orientation'

import {
  VIEWPORT,
  ORIENTATION
} from '../../constants/appConstants'

import Player from './VideoScreen'
import ExerciseList from './ExerciseList'
import PlayerController from './PlayerController'
import StatusMessage from '../../components/Common/StatusMessage'

class VideoScreen extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    Orientation.unlockAllOrientations()
  }

  renderLandScape (props) {
    return (
      <View style={styles.containerLandscape}>
        <Player
          landscape
          muted={props.muted}
          onClosePressed={props.onClosePressed}
          onVideoLoaded={props.onVideoLoaded}
          onVideoProgress={props.onVideoProgress}
          onVideoTouch={props.onVideoTouch}
          paused={props.paused}
          repeat={props.repeat}
          videoUri={props.nowPlayingExercise.videoUri}
        />
        <View style={{position: 'absolute', bottom: 1, left: 0, right: 0}}>
          <PlayerController
            backgroundColor='transparent'
            landscape
            onNextPressed={props.onNextButtonPressed}
            onPreviousPressed={props.onPreviousButtonPressed}
            title={props.nowPlayingExercise.title}
            remainingTime={props.remainingTime}
            seekbarCompletion={props.seekbarCompletion}

          />
        </View>
        <StatusMessage
          onExit={props.dismissStatusModal}
          statusMessage={props.statusMessage}
          visible={props.statusModalVisibility}
        />
      </View>
    )
  }

  renderPortrait (props) {
    return (
      <View
        style={styles.container}
      >
        <Player
          muted={props.muted}
          onClosePressed={props.onClosePressed}
          onVideoLoaded={props.onVideoLoaded}
          onVideoProgress={props.onVideoProgress}
          onVideoTouch={props.onVideoTouch}
          paused={props.paused}
          repeat={props.repeat}
          videoUri={props.nowPlayingExercise.videoUri}
        />

        <ExerciseList
          data={props.workout.exercises}
          nowPlaying={props.nowPlayingExercise.index}
          onNavigate={props.onNavigate}
          onVideoSelect={props.onChangeVideo}
        />
        <PlayerController
          onNextPressed={props.onNextButtonPressed}
          onPreviousPressed={props.onPreviousButtonPressed}
          title={props.nowPlayingExercise.title}
          remainingTime={props.remainingTime}
          seekbarCompletion={props.seekbarCompletion}
        />
        <StatusMessage
          onExit={props.dismissStatusModal}
          statusMessage={props.statusMessage}
          visible={props.statusModalVisibility}
        />
      </View>
    )
  }

  render () {
    if (this.props.orientationStatus === ORIENTATION.LANDSCAPE) {
      return this.renderLandScape(this.props)
    }
    return this.renderPortrait(this.props)
  }
}

VideoScreen.propTypes = {
  changeVideo: PropTypes.func,
  closePressed: PropTypes.func,
  nextVideo: PropTypes.func,
  onNavigate: PropTypes.func,
  pauseVideo: PropTypes.func,
  previousVideo: PropTypes.func,
  state: PropTypes.object,
  videoLoaded: PropTypes.func,
  videoProgress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    height: VIEWPORT.height
  },
  containerLandscape: {
    width: VIEWPORT.height,
    height: VIEWPORT.width
  },
  videoContainer: {
    flex: 2.22222
  },
  listView: {
    flex: 3.836
  },
  playerControl: {
    flex: 1
  }
})

export default VideoScreen
