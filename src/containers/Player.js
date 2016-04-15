import React, {View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import PlayerIndex from '../components/Player/PlayerIndex'
import PausePlayIndex from '../components/PausePlay/PausePlayIndex'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'
import * as ExerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'

class Player extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTime: 0.0,
      lastKnownTime: 0.0
    }
    this.setIntervalRef = undefined
    this.previousVideoDispatcher = this.previousVideoDispatcher.bind(this)
    this.nextVideoDispatcher = this.nextVideoDispatcher.bind(this)
    this.onNavigate = this.onNavigate.bind(this)
    this.onVideoProgress = this.onVideoProgress.bind(this)
    this.onExerciseSelect = this.onExerciseSelect.bind(this)
  }

  resetTimeCounter () {
    this.setState({
      currentTime: 0.0,
      lastKnownTime: 0.0
    })
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
      this.props.lockToPortrait()
      this.props.navigator.replace({name: 'workoutCompletion'})
      return false
    }
    this.props.playerActions.changeVideo(nextVideoId)

    this.resetTimeCounter()
    return true
  }

  onNavigate (route, exercise) {
    const actionElements = [
      {
        name: 'EDIT EXERCISE',
        icon: <Icon name='android-walk' color='rgba(255, 255, 255, 0.5)' size={25}/>,
        action: () => {
          this.props.lockToPortrait()
          this.props.navigator.push({
            name: 'exerciseProperties',
            isNewExercise: false,
            exerciseId: exercise.id
          })
        }
      },
      {
        name: 'ADD EXERCISE TO A WORKOUT',
        icon: <Icon name='android-add' color='rgba(255, 255, 255, 0.5)' size={30}/>,
          action: (_) => {
            this.props.lockToPortrait()
            this.props.navigator.push({ name: 'addExerciseToWorkout', exerciseId: exercise.id })
          }
      },
      {
        name: (exercise.like) ? 'UNSAVE EXERCISE' : 'SAVE EXERCISE',
        icon: <FIcon name='heart-o' color='rgba(255, 255, 255, 0.5)' size={23}/>,
        action: () => {
          this.props.exerciseActions.likeExercise(exercise.exerciseId, !exercise.like, exercise.id)
        }
      },
      {
        name: 'GO TO ' + this.props.instructor[exercise.instructor].name.toUpperCase(),
        icon: <FIcon name='angle-right' color='rgba(255, 255, 255, 0.5)' size={40}/>,
        action: (_) => {
          this.props.navigator.push({ name: 'profile', userId: this.props.instructor[exercise.instructor].id})
        }
      }
    ]
    const actionTitle = {
      title: exercise.title,
      subText: this.props.instructor[exercise.instructor].name,
      image: this.props.instructor[exercise.instructor].image
    }

    this.props.lockToPortrait()
    this.props.navigator.push({ name: route, actionElements: actionElements, actionTitle })
    // props.navigator.push({name: route, exerciseId: exerciseId})
  }

  onVideoProgress (data) {
    //let deltaTime = data.currentTime - this.state.lastKnownTime
    //
    //if (deltaTime < 0 || deltaTime > 1) deltaTime = 0

    this.setState({
      currentTime: this.state.currentTime + 1,//(deltaTime),
      //lastKnownTime: data.currentTime
    })
  }

  componentWillUpdate (newProps, newState) {
    const workout = getWorkoutExpanded(newProps.player, newProps.workouts, newProps.exercises)
    const nowPlayingExercise = getNowPlayingExercise(newProps.player, workout)
    const remainingTime = getTicker(newState.currentTime, nowPlayingExercise)

    // if we are at end of a video, next Please
    if (remainingTime === undefined) {
      newProps.playerActions.pauseVideo()
      const changedVideo = this.nextVideoDispatcher()
      if (!changedVideo) {
        return
      }

      this.pauseTimer()
      this.props.lockToPortrait()

      const nextVideoTitle = getNextVideoTitle(
        this.props.player,
        this.props.workouts,
        this.props.exercises
      )

      newProps.navigator.push({
        name: 'pausePlay',
        nextExercise: nextVideoTitle,
        onCloseButton: () => this.onPauseScreenClose(newProps),
        onCountCompletion: () => this.onPauseScreenClose(newProps),
        pauseTime: workout.pause_between_exercises,
        title: 'Pause'
      })
    }
  }

  pauseTimer () {
    clearInterval(this.setIntervalRef)
  }
  startTimer () {
    this.setIntervalRef = setInterval(this.onVideoProgress, 1000)
  }
  componentWillMount () {
    this.startTimer()
  }
  componentDidMount () {
    console.log('ramilo state', this.props)
    this.props.workoutActions.viewWorkout(this.props.player.workoutId)
  }
  componentWillUnmount () {
    this.props.lockToPortrait()
    this.pauseTimer()
  }

  onPauseScreenClose (props) {
    props.navigator.pop()
    props.playerActions.pauseVideo()
    this.startTimer()
  }

  onExerciseSelect (exerciseIndex) {
    this.props.playerActions.changeVideo(exerciseIndex)
    this.resetTimeCounter()
  }

  render (props = this.props) {
    const closeButtonPressed = () => props.navigator.pop()

    const onVideoLoaded = props.playerActions.videoLoaded
    const onVideoProgress = this.onVideoProgress.bind(this) //props.playerActions.videoProgress
    const onVideoTouch = props.playerActions.pauseVideo
    const onChangeVideo = this.onExerciseSelect

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

function getNextVideoTitle (player, workouts, exercises) {
  const nextVideoId = getNextVideoId(player, workouts)
  const workout = getWorkoutExpanded(player, workouts, exercises)
  if (!workout){
    return ''
  }

  const nextVideo = workout.exercises[nextVideoId]
  if (nextVideo) {
    return nextVideo.title
  }
  return ''
}

function getNowPlayingExercise (player, workout) {
  let exerciseIndex = player.nowPlaying
  if (exerciseIndex === undefined) {
    exerciseIndex = 0
  }
  let exercise = workout.exercises[exerciseIndex]
  return exercise
}

function getWorkout (player, workouts) {
  let workoutId = player.workoutId
  let workout = workouts[workoutId]
  if (workout === undefined) {
    return {}
  }
  return workout
}

function getWorkoutExpanded (player, workouts, exercises) {
  const workout = getWorkout(player, workouts)
  const denormalizedExercises = getExercisesOfWorkout(workout, exercises, player.nowPlaying)
  return {
    ...workout,
    exercises: denormalizedExercises
  }
}

function getExercisesOfWorkout (workout, exercises, nowPlayingIndex) {
  return workout.exercises.map(
    (exerciseId, index) => {
      return {
        ...exercises[exerciseId],
        index: index,
        nowPlaying: nowPlayingIndex
      }
    }
  )
}

function _bindActionCreators (dispatch) {
  return {
    playerActions: bindActionCreators(VideoActionCreators, dispatch),
    exerciseActions: bindActionCreators(ExerciseActionCreators, dispatch),
    workoutActions: bindActionCreators(WorkoutActionCreators, dispatch)
  }
}

export default connect(
  (state) => ({
    player: state.player,
    exercises: state.exercise,
    workouts: state.workout.data,
    instructor: state.instructor
  }),
  _bindActionCreators
)(Player)
