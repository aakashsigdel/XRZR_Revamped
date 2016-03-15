import React, {View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import PlayerIndex from '../components/Player/PlayerIndex'
import PausePlayIndex from '../components/PausePlay/PausePlayIndex'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

class Player extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTime: 0.0,
      lastKnownTime: 0.0
    }
  }

  previousVideoDispatcher () {
    const previousVideo = getPreviousVideoId(this.props.player)
    if (previousVideo === -1) {
      return
    }
    this.props.playerActions.changeVideo(previousVideo)
  }

  nextVideoDispatcher () {
    const nextVideoId = getNextVideoId(this.props.player, this.props.workouts)
    if (nextVideoId === -1) {
      this.props.navigator.replace({name: 'workoutCompletion'})
    }
    this.props.playerActions.changeVideo(nextVideoId)

    this.setState({
      currentTime: 0.0,
      lastKnownTime: 0.0
    })
  }

  onNavigate (route, exercise) {
    const actionElements = [
      {
        name: 'EDIT EXERCISE',
        icon: <Icon name='android-walk' color='rgba(255, 255, 255, 0.5)' size={25}/>,
        action: () => {
          this.props.navigator.push({
            name: 'exerciseProperties',
            isNewExercise: false
          })
        }
      },
      {
        name: 'ADD EXERCISE TO A WORKOUT',
        icon: <Icon name='android-add' color='rgba(255, 255, 255, 0.5)' size={30}/>,
        action: (_) => this.props.navigator.push({ name: 'addExerciseToWorkout', exerciseId: exercise.id })
      },
      { name: 'SAVE EXERCISE', icon: <FIcon name='heart-o' color='rgba(255, 255, 255, 0.5)' size={23}/> },
      { name: 'GO TO RACHEL GREY', icon: <FIcon name='angle-right' color='rgba(255, 255, 255, 0.5)' size={40}/> }
    ]
    const actionTitle = {
      title: 'SUN SALUTATION A',
      subText: 'RACHEL GREY',
      image: 'http://www.arsenalsite.cz/imgs/soupiska/200/santi-cazorla.jpg'
    }

    this.props.navigator.push({ name: route, actionElements: actionElements, actionTitle })
    // props.navigator.push({name: route, exerciseId: exerciseId})
  }

  onVideoProgress (data) {
    let deltaTime = data.currentTime - this.state.lastKnownTime
    if (deltaTime < 0) deltaTime = 0

    this.setState({
      currentTime: this.state.currentTime + (deltaTime),
      lastKnownTime: data.currentTime
    })
  }

  componentWillUpdate (newProps, newState) {
    const workout = getWorkoutExpanded(newProps.player, newProps.workouts, newProps.exercises)
    const nowPlayingExercise = getNowPlayingExercise(newProps.player, workout)
    const remainingTime = getTicker(newState.currentTime, nowPlayingExercise)

    // if we are at end of a video, next Please
    if (remainingTime === undefined) {
       newProps.playerActions.pauseVideo()
       newProps.playerActions.togglePauseModal()
      this.nextVideoDispatcher.bind(this)()
    }
  }

  render (props = this.props) {
    const closeButtonPressed = () => props.navigator.pop()

    const onPauseModalClose = () => {
      props.playerActions.togglePauseModal()
      props.playerActions.pauseVideo()
    }

    const onVideoLoaded = props.playerActions.videoLoaded
    const onVideoProgress = this.onVideoProgress.bind(this)//props.playerActions.videoProgress
    const onVideoTouch = props.playerActions.pauseVideo
    const onChangeVideo = props.playerActions.changeVideo

    const workout = getWorkoutExpanded(props.player, props.workouts, props.exercises)
    const nowPlayingExercise = getNowPlayingExercise(props.player, workout)

    const seekbarCompletion = getSeekbarCompletion(props.player, workout.exercises)
    const remainingTime = getTicker(this.state.currentTime, nowPlayingExercise)

    return (
      <View>
        <PlayerIndex
          onClosePressed={closeButtonPressed}
          onNextVideo={this.nextVideoDispatcher.bind(this)}
          onNavigate={this.onNavigate.bind(this)}
          onPreviousVideo={this.previousVideoDispatcher.bind(this)}

          onVideoLoaded={onVideoLoaded}
          onVideoProgress={onVideoProgress}
          onVideoTouch={onVideoTouch}
          onChangeVideo={onChangeVideo}

          paused={props.player.paused}
          muted
          nowPlayingExercise={nowPlayingExercise}
          repeat

          workout={workout}
          seekbarCompletion={seekbarCompletion}
          remainingTime={remainingTime}
        />
        <PausePlayIndex
          visible={props.player.pauseModalVisibility}
          pauseTime={workout.pause_between_exercises}
          nextExercise={nowPlayingExercise.title}
          onCloseButton={onPauseModalClose}
          onCountCompletion={onPauseModalClose}
          title={"Pause"}
        />
      </View>
    )
  }
}

function getTicker (currentTime, nowPlayingExercise) {
  const exerciseMode = nowPlayingExercise.mode
  const totalTime = nowPlayingExercise.duration

  if (exerciseMode === 'loop') {
    return totalTime
  } else if (exerciseMode === 'time') {
    const remainingTime = totalTime - currentTime

    if (remainingTime <= 0) {
      return
    }

    const remainingMinutes = Math.floor(remainingTime / 60)
    const remainingSeconds = Math.floor(remainingTime - (remainingMinutes * 60))

    let timeString = ('00' + remainingMinutes).slice(-2)
    timeString += ':' + ('00' + remainingSeconds).slice(-2)

    return timeString
  }
  return 'NA'
}

function getSeekbarCompletion (playerData, workoutExercises) {
  const currentIndex = playerData.nowPlaying
  const totalExercises = workoutExercises.length
  return (currentIndex * 100) / totalExercises
}

function getPreviousVideoId (player) {
  let exerciseIndex = player.nowPlaying
  if (exerciseIndex === undefined) {
    exerciseIndex = 0
  }

  let previousItem = exerciseIndex - 1

  if (previousItem < 0) {
    return -1
  }
  return previousItem
}

function getNextVideoId (player, workouts) {
  let workoutId = player.workoutId
  let workout = workouts[workoutId]

  let exerciseIndex = player.nowPlaying
  if (exerciseIndex === undefined) {
    exerciseIndex = 0
  }
  let nextItem = exerciseIndex + 1

  if (nextItem >= workout.exercises.length) {
    return -1
  }
  return nextItem
}

function getNowPlayingExercise (player, workout) {
  let exerciseIndex = player.nowPlaying
  if (exerciseIndex === undefined) {
    exerciseIndex = 0
  }
  let exercise = workout.exercises[exerciseIndex]
  return exercise
}

function getWorkout (player, workouts){
  let workoutId = player.workoutId
  let workout = workouts[workoutId]
  if (workout === undefined) {
    return {}
  }
  return workout
}

function getWorkoutExpanded (player, workouts, exercises) {
  const workout = getWorkout(player, workouts)
  const denormalizedExercises = getExercisesOfWorkout(workout, exercises)
  return {
    ...workout,
    exercises: denormalizedExercises
  }
}

function getExercisesOfWorkout (workout, exercises) {
  return workout.exercises.map(
    (exerciseId, index) => {
      return {
        ...exercises[exerciseId],
        index: index
      }
    }
  )
}

function _bindActionCreators (dispatch) {
  return {
    playerActions: bindActionCreators(VideoActionCreators, dispatch)
  }
}

export default connect(
  (state) => ({
    player: state.player,
    exercises: state.exercise,
    workouts: state.workout
  }),
  _bindActionCreators
)(Player)
