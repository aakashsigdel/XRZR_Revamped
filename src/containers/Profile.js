'use strict'

import React, {
  Component,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileIndex from '../components/Profile/ProfileIndex'
// import { getUser } from '../redux_x/actions/userActionCreators'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import { fetchUser } from '../redux_x/actions/userActionCreators'
import Loader from '../components/Common/Loader.ios.js'

const goToWorkoutIntro = (props, workoutId) => {
  props.playerDispatchers.loadWorkout(workoutId)
  props.navigator.push({name: 'workoutIntro'})
}

const handleProfileSettingPress = (props) => {
  return () => {
    props.navigator.push({
      name: 'profileSettings'
    })
  }
}

const handleCreateNewWorkout = (props) => {
  return () => {
    props.navigator.push({
      name: 'newWorkout'
    })
  }
}

const handleCreateNewExercise = (props) => {
  return () => {
    props.navigator.push({
      name: 'exerciseProperties',
      isNewExercise: true
    })
  }
}

const handlePressOptions = (props, buttonType) => {
  let actionElements = {}
  if (props.user[props.userId].isInstructor) {
    actionElements = [
      {
        name: 'CREATE NEW WORKOUT',
        action: handleCreateNewWorkout(props),
        icon: <FIcon name='history' color='rgba(255, 255, 255, 0.5)' size={20} />
      },
      {
        name: 'CREATE NEW EXERCISE',
        action: handleCreateNewExercise(props),
        icon: <Icon name='android-walk' color='rgba(255, 255, 255, 0.5)' size={25} />
      },
      {
        name: 'PROFILE SETTINGS',
        action: handleProfileSettingPress(props),
        icon: <Icon name='gear-b' color='rgba(255, 255, 255, 0.5)' size={25} />
      }
    ]
  } else {
    actionElements = [
      {name: 'PROFILE SETTINGS', icon: <Icon name='gear-b' color='rgba(255, 255, 255, 0.5)' size={25} />}
    ]
  }
  props.navigator.push({
    name: 'action',
    actionElements
  })
}

class Profile extends Component {
  componentDidMount () {
    console.log('tero baje', this.props)
    this.props.fetchUser()
  }

  componentDidUpdate (prevProps) {
  }

  render () {
    console.warn('corw', this.props.isFetching)
    if (this.props.isFetching)
      return <Loader />
    return (
      <ProfileIndex
        user={this.props.user[this.props.userId]}
        workouts={this.props.workouts}
        navigator={this.props.navigator}
        goToWorkoutIntro={(workoutId) => goToWorkoutIntro(this.props, workoutId)}
        handlePressOptions={(buttonType) => handlePressOptions(this.props, buttonType)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    isFetching: state.user.isFetching,
    workouts: state.workout.data
  }
}
export default connect(
  (state) => mapStateToProps(state),
    (dispatch) => ({
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch),
      fetchUser: bindActionCreators(fetchUser, dispatch)
    })
)(Profile)
