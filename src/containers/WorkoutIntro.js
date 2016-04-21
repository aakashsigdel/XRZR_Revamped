import React, {
  Image,
  PropTypes,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorkoutIntroIndex from '../components/WorkoutIntro/WorkoutIntroIndex'
import * as PlayerActionCreators from '../redux_x/actions/videoActionCreators'
import * as WorkoutActionCreators from '../redux_x/actions/workoutActionCreators'
import Icon from 'react-native-vector-icons/Ionicons'

class WorkoutIntro extends React.Component {
  componentWillMount () {
    this.props.playerActions.fetchWorkoutExercises(this.props.player.workoutId)
    this.props.WorkoutDispatchers.fetchWorkout(this.props.player.workoutId)
  }

  render (props = this.props) {
    let workout = _getWorkoutInfo(props.player.workoutId, props.workouts.data)
    let exercises = _getExercises(props.player.workoutId, props.workouts.data, props.exercises, props.instructors)
    let instructor = _getInstructor(props.player.workoutId, props.workouts.data, props.instructors)

    const isLoading = props.player.isFetching

    const statusMessage = props.workouts.statusMessage
    const modalVisibility = props.workouts.statusModal
    const dismissStatusModal = props.WorkoutDispatchers.hideWorkoutStatusModal

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
    let onLikePress = (like) => props.WorkoutDispatchers.likeWorkout({like: like, workoutId: props.player.workoutId})
    const goToProfile = (userId) => props.navigator.push({name: 'profile', userId: userId})

    const onEditWorkout = () => props.navigator.push({name: 'workoutSettings', workoutId: props.player.workoutId})
    const onPublishWorkout = () => props.WorkoutDispatchers.publishWorkout(props.player.workoutId, !workout.published)

    const handlePressOptions = () => {
      props.navigator.push({
        name: 'action',
        actionElements: [
          {
            name: 'SHARE WORKOUT',
            icon: <Icon name='android-share' color='rgba(255, 255, 255, 0.5)' size={30} />
          },
          {
            name: (workout.published) ? 'UNPUBLISH WORKOUT' : 'PUBLISH WORKOUT',
            icon: <Icon name='locked' color='rgba(255, 255, 255, 0.5)' size={11} />,
            border: true,
            action: onPublishWorkout
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
        dismissStatusModal={dismissStatusModal}
        exercises={exercises}
        goToProfile={goToProfile}
        handlePressOptions={handlePressOptions}
        instructor={instructor}
        isLoading={isLoading}
        onBackButton={onBackButton}
        onDownloadButton={onDownloadButton}
        onExerciseSelect={onExerciseSelect}
        onLikePress={onLikePress}
        onStartWorkout={onStartWorkout}
        statusModalVisibility={modalVisibility}
        statusMessage={statusMessage}
        workout={workout}
      />
    )
  }
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

function _getExercises (workoutId, workouts, exercises, instructors) {
  let workout = _getWorkoutInfo(workoutId, workouts)
  let exercisesList = workout.exercises || []
  return exercisesList.map((exerciseId, index) => {
    return {
      ...exercises[exerciseId],
      index: index,
      instructor: instructors[exercises[exerciseId].instructor]
    }
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
      instructors: state.user.data,
      player: state.player
    }
  },
  (dispatch) => {
    return {
      playerActions: bindActionCreators(PlayerActionCreators, dispatch),
      WorkoutDispatchers: bindActionCreators(WorkoutActionCreators, dispatch)
    }
  }
)(WorkoutIntro)
