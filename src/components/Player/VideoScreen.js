import React, {
  Component,
  Image,
  View,
TouchableOpacity,
Text,
  StyleSheet,
} from 'react-native'
import Video from 'react-native-video'

import { VIEWPORT } from '../../constants/appConstants'

import Player from './Player'
import ExerciseList from './ExerciseList'
import PlayerController from './PlayerController'

class VideoScreen extends Component {
  render() {
    return (
      <View source={require("../../../assets/images/background.png")}
             style={styles.container}>

        <Player flex={2.2222} {...playerData(this.props.state)}
                onVideoTouch={this.props.pauseVideo}
                onVideoLoaded={this.props.videoLoaded}
                onVideoProgress={this.props.videoProgress}
        />

        <ExerciseList flex={3.836}
                      data={exerciseListData(this.props.state)}
                      onVideoSelect={this.props.changeVideo}
                      nowPlaying={this.props.state.player.nowPlaying}
        />
        <PlayerController flex={1}
                          onPreviousPressed={this.props.previousVideo}
                          onNextPressed={this.props.nextVideo}
                          {...playerControllerData(this.props.state)}
        />
      </View>
    )
  }
}

function playerData(state){
  let exerciseId = state.player.nowPlaying
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
  let exerciseId = state.player.nowPlaying
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

  console.log(progress)

  let showTime = exercise.mode==='time'

  return {
    title: exercise.title,
    progress: progress,
    duration: duration,
    showTime: showTime,
  }

}

const styles = StyleSheet.create({
  container:{
    //width: VIEWPORT.width,
    //height: VIEWPORT.height
    flex: 1,
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