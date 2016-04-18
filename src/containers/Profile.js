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
import { getAccessTokenFromAsyncStorage } from '../utilities/utility'
import { awesomeFetchWrapper } from '../utilities/utility'

const goToWorkoutIntro = (props, workoutId) => {
  props.playerDispatchers.loadWorkout(workoutId)
  props.navigator.push({name: 'workoutIntro'})
}

const handleProfileSettingPress = (props, userId) => {
  return () => {
    props.navigator.push({
      name: 'profileSettings',
      userId
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
  if (buttonType === 'heart') {
    return
  }
  let actionElements = {}
  if (!props.user[props.userId].isInstructor) {
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
        action: handleProfileSettingPress(props, props.userId),
        icon: <Icon name='gear-b' color='rgba(255, 255, 255, 0.5)' size={25} />
      }
    ]
  } else {
    actionElements = [
      {
        name: 'PROFILE SETTINGS',
        action: handleProfileSettingPress(props, props.userId),
        icon: <Icon name='gear-b' color='rgba(255, 255, 255, 0.5)' size={25} />
      }
    ]
  }
  props.navigator.push({
    name: 'action',
    actionElements
  })
}

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetching: true,
      instagramPhotos: []
    }
  }
  componentDidMount () {
    this.props.fetchUser(this.props.userId)
      if (this.props.user[this.props.userId].instagramToken) {
        this.fetchInstagramPhotos(this.props.user[this.props.userId].instagramToken)
      }
  }

  componentDidUpdate (prevProps) {
    if(prevProps.isFetching && !this.props.isFetching) {
      this.setState({
        isFetching: false,
        isFetchingInstagram: true
      })
    }
  }

  fetchInstagramPhotos (instagramToken) {
    console.log(instagramToken, this.props.user[this.props.userId], 'final test')
    if (instagramToken && this.props.user[this.props.userId].instagramId) {
      const fetchParams = {
        url: 'https://api.instagram.com/v1/users/'
        + this.props.user[this.props.userId].instagramId
        + '/media/recent/?access_token=' + instagramToken + '&count=10',
        method: 'get'
      }
      awesomeFetchWrapper(fetchParams)
      .then(response => {
        this.setState({
          isFetchingInstagram: false,
          instagramPhotos: response.data
        })
      })
    }
  }

  render () {
    if (this.state.isFetching)
      return <Loader />
    let rightIcon = 'dot'
    if (this.currentUserId === this.props.userId)
      rightIcon = 'heart'
    return (
      <ProfileIndex
        user={this.props.user[this.props.userId]}
        workouts={this.props.workouts}
        navigator={this.props.navigator}
        goToWorkoutIntro={(workoutId) => goToWorkoutIntro(this.props, workoutId)}
        handlePressOptions={(buttonType) => handlePressOptions(this.props, buttonType)}
        currentUserId={this.currentUserId}
        rightIcon={rightIcon}
        instagramPhotos={this.state.instagramPhotos}
        isFetchingInstagram={this.state.isFetchingInstagram}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    isFetching: state.user.isFetching,
    workouts: state.workout.data,
    login: state.login
  }
}
export default connect(
  (state) => mapStateToProps(state),
    (dispatch) => ({
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch),
      fetchUser: bindActionCreators(fetchUser, dispatch)
    })
)(Profile)
