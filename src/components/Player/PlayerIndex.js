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

class VideoScreen extends Component {
  constructor () {
    super()
    this.state = {
      // TODO get present status
      orientationStatus: ORIENTATION.PORTRAIT
    }
  }

  componentDidMount () {
    Orientation.addOrientationListener(this._orientationDidChange.bind(this))
  }

  _orientationDidChange (orientation) {
    if (orientation === ORIENTATION.LANDSCAPE) {
      this.setState({
        orientationStatus: ORIENTATION.LANDSCAPE
      })
    } else if (orientation === ORIENTATION.PORTRAIT) {
      this.setState({
        orientationStatus: ORIENTATION.PORTRAIT
      })
    }
  }

  renderLandScape (props) {
    return (
      <View style={{flex: 1}}>
        <Player
          muted={props.muted}
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
            onNextPressed={props.onNextVideo}
            onPreviousPressed={props.onPreviousVideo}

            title={props.nowPlayingExercise.title}
            remainingTime='00:00'
            seekbarCompletion={props.seekbarCompletion}

          />
        </View>
      </View>
    )
  }

  renderPortrait (props) {
    return (
      <View
        style={styles.container}
      >
        <Player
          onClosePressed={props.onClosePressed}
          onVideoLoaded={props.onVideoLoaded}
          onVideoProgress={props.onVideoProgress}
          onVideoTouch={props.onVideoTouch}

          muted={props.muted}
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
          onNextPressed={props.onNextVideo}
          onPreviousPressed={props.onPreviousVideo}
          title={props.nowPlayingExercise.title}
          remainingTime={props.remainingTime}
          seekbarCompletion={props.seekbarCompletion}
        />
      </View>
    )
  }

  render () {
    if (this.state.orientationStatus === ORIENTATION.LANDSCAPE) {
      return this.renderLandScape(this.props)
    }
    return this.renderPortrait(this.props)
  }
}

//function exerciseListData (state) {
//  let workout = getWorkout(state)
//
//  let exercises = workout.exercises
//  let exercisesData = exercises.map(
//    (exerciseId, index) => {
//      return {...state.exercise[exerciseId], index: index}
//    }
//  )
//  return exercisesData
//}

//function playerControllerData (state) {
//  let exercise = getExercise(state)
//  if (!exercise) {
//    return {}
//  }
//
//  let duration = exercise.duration
//
//  let progress = 0
//  if (state.player.currentTime > 0) {
//    progress = parseFloat(state.player.currentTime) / parseFloat(duration)
//  } else {
//    progress = 0
//  }
//
//  let showTime = exercise.mode === 'time'
//
//  let exerciseIndex = getNowPlaying(state)
//  let workout = getWorkout(state)
//  const totalExercises = workout.exercises.length
//  const totalProgress = exerciseIndex / totalExercises
//
//  return {
//    title: exercise.title,
//    progress: progress,
//    duration: duration,
//    showTime: showTime,
//
//    totalProgress: totalProgress
//  }
//}

//function getNowPlaying (state) {
//  let exerciseIndex = state.player.nowPlaying
//  if (exerciseIndex === undefined) {
//    return 0
//  }
//  return exerciseIndex
//}

//function getExercise (state) {
//  let workout = getWorkout(state)
//  let exerciseIndex = state.player.nowPlaying
//  if (exerciseIndex === undefined){
//    exerciseIndex = 0
//  }
//  let exerciseId = workout.exercises[exerciseIndex]
//  return state.exercise[exerciseId]
//}

//function getWorkout (state) {
//  let workoutId = state.player.workoutId
//  let workout = state.workout[workoutId]
//  if (workout === undefined) {
//    return {}
//  }
//  return workout
//}

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
