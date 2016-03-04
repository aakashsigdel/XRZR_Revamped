import React from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import VideoScreen from '../components/Player/VideoScreen'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

const Player = (props) => {
  const previousVideoDispatcher = () => {
    const previousVideo = getPreviousVideoId(props.state)
    if (previousVideo === -1) {
      return
    }
    props.playerActions.changeVideo(previousVideo)
  }
  let nextVideoDispatcher = () => {
    const nextVideoId = getNextVideoId(props.state)
    if (nextVideoId === -1) {
      props.navigator.push({name: 'workoutCompletion'})
    }
    props.playerActions.changeVideo(nextVideoId)
  }

  const closeButtonPressed = () => props.navigator.pop()
  const handleEditExercise = (props) => {
    return () => {
      props.navigator.push({
        name: 'exerciseProperties',
        isNewExercise: false
      })
    }
  }
  const onNavigate = (route, exercise) => {
    const actionElements = [
      {
        name: 'EDIT EXERCISE',
        action: handleEditExercise(props),
        icon: <Icon name='android-walk' color='rgba(255, 255, 255, 0.5)' size={25} />
      },
      {name: 'ADD EXERCISE TO A WORKOUT',
        icon: <Icon name='android-add' color='rgba(255, 255, 255, 0.5)' size={30} />,
        action: (_) => props.navigator.push({name: 'addExerciseToWorkout', exerciseId: exercise.id})
      },
      {name: 'SAVE EXERCISE', icon: <FIcon name='heart-o' color='rgba(255, 255, 255, 0.5)' size={30} />},
      {name: 'GO TO RACHEL GREY', icon: <FIcon name='angle-right' color='rgba(255, 255, 255, 0.5)' size={30} />}
    ]
    const actionTitle = {
      title: 'SUN SALUTATION A',
      subText: 'RACHEL GREY',
      image: 'http://www.arsenalsite.cz/imgs/soupiska/200/santi-cazorla.jpg'
    }

    props.navigator.push({name: route, actionElements: actionElements, actionTitle})
    // props.navigator.push({name: route, exerciseId: exerciseId})
  }

  return (
    <VideoScreen
      closePressed={closeButtonPressed}
      nextVideo={nextVideoDispatcher}
      onNavigate={onNavigate}
      previousVideo={previousVideoDispatcher}
      state={props.state}
      {...props.playerActions}
    />
  )
}

function getPreviousVideoId (state) {
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]

  let exerciseId = state.player.nowPlaying

  let previousItem = workout.exercises.indexOf(exerciseId) - 1

  if (previousItem < 0) {
    return -1
  }
  return workout.exercises[previousItem]
}

function getNextVideoId (state) {
  let workoutId = state.player.workoutId
  let workout = state.workout[workoutId]

  let exerciseId = state.player.nowPlaying

  let nextItem = workout.exercises.indexOf(exerciseId) + 1

  if (nextItem > workout.exercises.length) {
    return -1
  }
  return workout.exercises[nextItem]
}

function _bindActionCreators (dispatch) {
  return {
    playerActions: bindActionCreators(VideoActionCreators, dispatch)
  }
}

export default connect(
  (state) => ({ state }),
  _bindActionCreators
)(Player)
