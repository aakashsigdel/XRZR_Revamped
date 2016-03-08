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

import Player from './Player'
import ExerciseList from './ExerciseList'
import PlayerController from './PlayerController'

class VideoScreen extends Component {
  constructor () {
    super()
    this.state = {
      orientationStatus: ORIENTATION.PORTRAIT
    }
  }

  componentDidMount () {
    console.log('mounted')
    Orientation.addOrientationListener(this._orientationDidChange.bind(this))
  }

  _orientationDidChange (orientation) {
    console.log('changed')
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

  render () {
    if (this.state.orientationStatus === ORIENTATION.LANDSCAPE) {
      return (
        <View style={{flex: 1}}>
          <Player
            flex={1}
            onVideoLoaded={this.props.videoLoaded}
            onVideoProgress={this.props.videoProgress}
            onVideoTouch={this.props.pauseVideo}
            {...playerData(this.props.state)}
          />
          <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
            <PlayerController
              backgroundColor='transparent'
              onNextPressed={this.props.nextVideo}
              onPreviousPressed={this.props.previousVideo}
              {...playerControllerData(this.props.state)}
            />
          </View>
        </View>
      )
    }
    return (
      <View
        style={styles.container}
      >
        <Player
          flex={2.2222}
          onClosePressed={this.props.closePressed}
          onVideoLoaded={this.props.videoLoaded}
          onVideoProgress={this.props.videoProgress}
          onVideoTouch={this.props.pauseVideo}
          {...playerData(this.props.state)}
        />

        <ExerciseList
          data={exerciseListData(this.props.state)}
          flex={3.836}
          nowPlaying={getNowPlaying(this.props.state)}
          onNavigate={this.props.onNavigate}
          onVideoSelect={this.props.changeVideo}
        />
        <PlayerController
          flex={1}
          onNextPressed={this.props.nextVideo}
          onPreviousPressed={this.props.previousVideo}
          {...playerControllerData(this.props.state)}
        />
      </View>
    )
  }
}

function playerData (state) {
  let exercise = getExercise(state)
  if (!exercise) {
    return {}
  }

  return {
    paused: state.player.paused === 1,
    muted: true,
    videoUri: exercise.videoUri,
    repeat: true
  }
}

function exerciseListData (state) {
  let workout = getWorkout(state)

  let exercises = workout.exercises
  let exercisesData = exercises.map(
    (exerciseId, index) => {
      return {...state.exercise[exerciseId], index: index}
    }
  )
  return exercisesData
}

function playerControllerData (state) {
  let exercise = getExercise(state)
  if (!exercise){
    return {}
  }

  let duration = -1
  if (exercise.mode === 'time') {
    duration = exercise.duration
  }

  let progress = 0
  if (state.player.currentTime > 0) {
    progress = parseFloat(state.player.currentTime) / parseFloat(duration)
  } else {
    progress = 0
  }

  let showTime = exercise.mode === 'time'

  return {
    title: exercise.title,
    progress: progress,
    duration: duration,
    showTime: showTime
  }
}

function getNowPlaying (state) {
  let exerciseIndex = state.player.nowPlaying
  if (exerciseIndex === undefined) {
    return 0
  }
  return exerciseIndex
}

function getExercise (state) {
  let workout = getWorkout(state)
  let exerciseIndex = state.player.nowPlaying
  if (exerciseIndex === undefined){
    exerciseIndex = 0
  }
  let exerciseId = workout.exercises[exerciseIndex]
  return state.exercise[exerciseId]
}

function getWorkout (state) {
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]
  if (workout === undefined) {
    return {}
  }
  return workout
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
