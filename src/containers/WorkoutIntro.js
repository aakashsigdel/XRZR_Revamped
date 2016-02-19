import React, { PropTypes } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorkoutIntroIndex from '../components/WorkoutIntro/WorkoutIntroIndex'
import * as PlayerActionCreators from '../redux_x/actions/videoActionCreators'
import { updateWorkout } from '../redux_x/actions/workoutActionCreators'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

const WorkoutIntro = (props) => {
  let workout = _getWorkoutInfo(props.player.workoutId, props.workouts)
  let exercises = _getExercises(props.player.workoutId, props.workouts, props.exercises)
  let instructor = _getInstructor(props.player.workoutId, props.workouts, props.instructors)

  let onStartWorkout = () => {
    props.playerActions.loadWorkout(props.player.workoutId)
    props.navigator.push({name: 'player'})
  }

  let onExerciseSelect = (videoId) => {
    props.playerActions.loadWorkout(props.player.workoutId)
    props.playerActions.changeVideo(videoId)
    props.navigator.push({name: 'player'})
  }

  let onBackButton = () => props.navigator.pop()

  let onDownloadButton = () => props.navigator.push({name: 'premium'})
  let onLikePress = (like) => props.updateWorkout({like: like, id: props.player.workoutId})

  const handlePressOptions = () => {
    props.navigator.push({
      name: 'action',
      actionElements: [
        {name: 'UNPUBLISH WORKOUT', icon: <Icon name='locked' color='white' size={11} />, border: true},
          {name: 'EDIT WORKOUT', icon: <FIcon name='history' color='white' size={20} />}
      ]
    })
  }

  return (
    <WorkoutIntroIndex
      workout={workout}
      exercises={exercises}
      instructor={instructor}
      onStartWorkout={onStartWorkout}
      onExerciseSelect={onExerciseSelect}
      onBackButton={onBackButton}
      onDownloadButton={onDownloadButton}
      onLikePress={onLikePress}
      handlePressOptions={handlePressOptions}
    />
  )
}

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
      workouts: state.workout,
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
