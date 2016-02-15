import React, {
  Component,
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import Video from 'react-native-video'
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
    super();
    this.state = {
      orientationStatus: ORIENTATION.PORTRAIT
    }
  }

  componentDidMount () {
    console.log('mounted')
    Orientation.addOrientationListener(this._orientationDidChange.bind(this))
  }

  _orientationDidChange ( orientation ) {
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

  render() {
    if (this.state.orientationStatus === ORIENTATION.LANDSCAPE) {
      return (
        <View style={{flex: 1}}>
          <Player flex={1} {...playerData(this.props.state)}
            onVideoTouch={this.props.pauseVideo}
            onVideoLoaded={this.props.videoLoaded}
            onVideoProgress={this.props.videoProgress}
          />
          <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
            <PlayerController 
              backgroundColor='transparent'
              onPreviousPressed={this.props.previousVideo}
              onNextPressed={this.props.nextVideo}
              {...playerControllerData(this.props.state)}
            />
          </View>
        </View>
      )
    }
    return (
      <Image source={require("../../../assets/images/background.png")}
             style={styles.container}>

        <Player flex={2.2222} {...playerData(this.props.state)}
                onVideoTouch={this.props.pauseVideo}
                onVideoLoaded={this.props.videoLoaded}
                onVideoProgress={this.props.videoProgress}
                onClosePressed={this.props.closePressed}
        />

        <ExerciseList flex={3.836}
                      data={exerciseListData(this.props.state)}
                      onVideoSelect={this.props.changeVideo}
                      nowPlaying={getNowPlaying(this.props.state)}
        />
        <PlayerController flex={1}
                          onPreviousPressed={this.props.previousVideo}
                          onNextPressed={this.props.nextVideo}
                          {...playerControllerData(this.props.state)}
        />
      </Image>
    )
  }
}

function playerData(state){
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]
  if (! workout){
    return {}
  }

  let exerciseId = state.player.nowPlaying
  if (exerciseId === undefined){
    exerciseId = workout.exercises[0]
  }
  let exercise = state.exercise[exerciseId]
  if (! exercise)
    return {}

  return {
    paused: state.player.paused == 1,
    muted: true,
    videoUri: exercise.videoUri,
    repeat: true,
  }
}

function exerciseListData(state){
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]
  if (! workout){
    return {}
  }

  let exercises = workout.exercises
  let exercisesData = exercises.map(
    (exerciseId, index)=> {
      return {...state.exercise[exerciseId], index:index}
    }
  )

  return exercisesData
}

function playerControllerData(state){
  let exerciseId = getNowPlaying(state)
  let exercise = state.exercise[exerciseId]
  if (! exercise)
    return {}

  let duration = -1
  if (exercise.mode == 'time')
    duration = exercise.duration

  let progress = 0
  if (state.player.currentTime > 0) {
    progress = parseFloat(state.player.currentTime) / parseFloat(duration)
  } else {
    progress = 0
  }

  let showTime = exercise.mode==='time'

  return {
    title: exercise.title,
    progress: progress,
    duration: duration,
    showTime: showTime,
  }

}

function getNowPlaying(state){
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]
  if (! workout){
    return {}
  }

  let exerciseId = state.player.nowPlaying
  if (exerciseId === undefined){
    return workout.exercises[0]
  }
  return exerciseId
}

const styles = StyleSheet.create({
  container:{
    width: VIEWPORT.width,
    height: VIEWPORT.height
  },
  videoContainer: {
    flex: 2.22222,
  },
  listView: {
    flex: 3.836,
  },
  playerControl: {
    flex: 1,
  }
})

export default VideoScreen
