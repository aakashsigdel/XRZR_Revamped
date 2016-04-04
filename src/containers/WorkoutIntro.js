import React, {
  Image,
  PropTypes,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorkoutIntroIndex from '../components/WorkoutIntro/WorkoutIntroIndex'
import * as PlayerActionCreators from '../redux_x/actions/videoActionCreators'
import { updateWorkout } from '../redux_x/actions/workoutActionCreators'
import Icon from 'react-native-vector-icons/Ionicons'

const WorkoutIntro = (props) => {
  let workout = _getWorkoutInfo(props.player.workoutId, props.workouts)
  let exercises = _getExercises(props.player.workoutId, props.workouts, props.exercises)
  let instructor = _getInstructor(props.player.workoutId, props.workouts, props.instructors)

  let onCountCompletion = () => {
    props.navigator.replace({name: 'player'})
  }

  let onAdClose = (exerciseTitle) => {
    props.navigator.replace({
      name: 'pausePlay',
      onCloseButton: onCountCompletion,
      onCountCompletion: onCountCompletion,
      pauseTime: workout.pause_between_exercises,
      title: 'Starting in'
    })
  }

  let onStartWorkout = () => {
    if (exercises[0]) {
      props.playerActions.loadWorkout(props.player.workoutId)
      props.navigator.push({
        name: 'ads',
        onAdClose: () => onAdClose(exercises[ 0 ].title)
      })
    }
  }

  let onExerciseSelect = (videoId) => {
    props.playerActions.loadWorkout(props.player.workoutId)
    props.playerActions.changeVideo(videoId)

    props.navigator.push({
      name: 'pausePlay',
      onCloseButton: onCountCompletion,
      onCountCompletion: onCountCompletion,
      pauseTime: workout.pause_between_exercises,
      title: 'Starting in'
    })
  }

  let onBackButton = () => props.navigator.pop()

  let onDownloadButton = () => props.navigator.push({name: 'premium'})
  let onLikePress = (like) => props.updateWorkout({like: like, id: props.player.workoutId})
  const goToProfile = (userId) => props.navigator.push({name: 'profile', userId: userId})

  const onEditWorkout = () => props.navigator.push({name: 'workoutSettings', workoutId: props.player.workoutId})

  const handlePressOptions = () => {
    props.navigator.push({
      name: 'action',
      actionElements: [
        {
          name: 'SHARE WORKOUT',
          icon: <Icon name='android-share' color='rgba(255, 255, 255, 0.5)' size={30} />
        },
        {
          name: 'UNPUBLISH WORKOUT',
          icon: <Icon name='locked' color='rgba(255, 255, 255, 0.5)' size={11} />,
          border: true
        },
        {
          name: 'EDIT WORKOUT',
          icon: <Image source={require('../../assets/images/history.png')} style={styles.history} />,
          action: onEditWorkout
        }
      ]
    })
  }

  return (
    <WorkoutIntroIndex
      exercises={exercises}
      goToProfile={goToProfile}
      handlePressOptions={handlePressOptions}
      instructor={instructor}
      onBackButton={onBackButton}
      onDownloadButton={onDownloadButton}
      onExerciseSelect={onExerciseSelect}
      onLikePress={onLikePress}
      onStartWorkout={onStartWorkout}
      workout={workout}
    />
  )
}

const styles = StyleSheet.create({
  history: {
    height: 21,
    width: 21,
    resizeMode: 'contain'
  }
})

function _getWorkoutInfo (workoutId, workouts) {
  let workout = workouts[workoutId]
  return workout || {}
}

function _getExercises (workoutId, workouts, exercises) {
  let workout = _getWorkoutInfo(workoutId, workouts)
  let exercisesList = workout.exercises || []
  return exercisesList.map((exerciseId, index) => {
    return {...exercises[exerciseId], index: index}
  })
}

function _getInstructor (workoutId, workouts, instructors) {
  let workout = _getWorkoutInfo(workoutId, workouts)
  let instructorId = workout.instructor
  return instructors[instructorId] || {}
}

// ----
// PropTypes
// -----
WorkoutIntro.propTypes = {
  state: PropTypes.object,
  playerActions: PropTypes.object,
  updateWorkout: PropTypes.func,
  workouts: PropTypes.object,
  exerciese: PropTypes.object,
  instructors: PropTypes.object,
  player: PropTypes.object,
  navigator: PropTypes.object
}

// ----
// connect
// ----
export default connect(
  (state) => {
    return {
      workouts: state.workout.data,
      exercises: state.exercise,
      instructors: state.instructor,
      player: state.player
    }
  },
  (dispatch) => {
    return {
      playerActions: bindActionCreators(PlayerActionCreators, dispatch),
      updateWorkout: bindActionCreators(updateWorkout, dispatch)
    }
  }
)(WorkoutIntro)
