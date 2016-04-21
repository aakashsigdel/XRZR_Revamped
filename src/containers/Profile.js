'use strict'

import React, {
  Component,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileIndex from '../components/Profile/ProfileIndex'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import * as UserActions from '../redux_x/actions/userActionCreators'
import Loader from '../components/Common/Loader.ios.js'
import { getAccessTokenFromAsyncStorage } from '../utilities/utility'
import { awesomeFetchWrapper } from '../utilities/utility'
import { fetchFavouriteWorkouts } from '../redux_x/actions/userDataActionCreators'

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
    props.userActionDispatchers.likeUser(props.userId, !props.user[props.userId].like)
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
      isFetchingInstagram: false,
      instagramPhotos: [],
      isFetching: false
    }
  }
  componentDidMount () {
    this.props.userActionDispatchers.fetchUser(this.props.userId)
    this.props.fetchFavouriteWorkouts()
    this.setState({
      isFetching: true
    })
  }

  componentDidUpdate (prevProps) {
    if( this.props.fetchingCompeleteUser && this.props.fetchingCompeleteWorkouts && this.state.isFetching) {
      this.setState({
        isFetching: false
      })
      if (this.props.user[this.props.userId].instagramToken) {
        this.fetchInstagramPhotos(this.props.user[this.props.userId].instagramToken)
      }
    }
  }

  fetchInstagramPhotos (instagramToken) {
    this.setState({
      isFetchingInstagram: true
    })

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
      .catch((error) => {
        this.setState({
          isFetchingInstagram: false
        })
      })
    }
  }

  render () {
    if (!this.props.fetchingCompeleteUser, !this.props.fetchingCompeleteWorkouts)
      return <Loader />
    let rightIcon = 'dot'
    if (this.props.login.id === this.props.userId)
      rightIcon = 'heart'
    const favouriteWorkouts = favouriteWorkoutsManager(
      this.props.favouriteWorkouts,
      this.props.workouts,
      this.props.user
    )
    return (
      <ProfileIndex
        user={this.props.user[this.props.userId]}
        favouriteWorkouts={favouriteWorkouts}
        navigator={this.props.navigator}
        goToWorkoutIntro={(workoutId) => goToWorkoutIntro(this.props, workoutId)}
        handlePressOptions={(buttonType) => handlePressOptions(this.props, buttonType)}
        currentUserId={this.props.login.id}
        rightIcon={rightIcon}
        instagramPhotos={this.state.instagramPhotos}
        isFetchingInstagram={this.state.isFetchingInstagram}
        onExitStatusPage={() => this.onExitStatusPage()}
      />
    )
  }
}

const favouriteWorkoutsManager = (workoutIds, workouts, instructors)  =>{
  return workoutIds.map(
    (workoutId) => {
      const instructor = workouts[workoutId].instructor
      return {
        ...workouts[workoutId],
        instructor: instructors[instructor]
      }
    }
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    fetchingCompeleteUser: state.user.fetchingCompelete,
    workouts: state.workout.data,
    login: state.login,
    fetchingCompeleteWorkouts: state.userData.favouriteWorkouts.fetchingCompelete,
    favouriteWorkouts: state.userData.favouriteWorkouts.data
  }
}
export default connect(
  (state) => mapStateToProps(state),
    (dispatch) => ({
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch),
      fetchFavouriteWorkouts: bindActionCreators(fetchFavouriteWorkouts, dispatch),
      userActionDispatchers: bindActionCreators(UserActions, dispatch)
    })
)(Profile)
