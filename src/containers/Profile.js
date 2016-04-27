'use strict'

import React, {
  Alert,
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
import { fetchUserWorkouts } from '../redux_x/actions/userDataActionCreators'

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
      instagramPhotos: [],
      isFetching: true
    }
  }
  componentDidMount () {
    let promiseArray = []
    promiseArray[0] = this.props.userActionDispatchers.fetchUser(this.props.userId)
    promiseArray[1] = this.props.fetchUserWorkouts(this.props.userId)
    Promise.all(promiseArray)
    .then(() => {
      if (this.props.user[this.props.userId].instagramToken) {
        this.fetchInstagramPhotos(this.props.user[this.props.userId].instagramToken)
      } else {
        this.setState({
          isFetching: false
        })
      }
    }, () => {
      Alert.alert(
        'Error Fetching Data',
        'Please make sure you are connected to the internet'
      )
    })
  }

  fetchInstagramPhotos (instagramToken) {
    this.props.userActionDispatchers.fetchInstagramPhotos(
      this.props.user[this.props.userId].instagramId,
      this.props.userId
    )
    .then(() => {
      this.setState({
        isFetching: false
      })
    })
    .catch(error => {
      this.setState({
        isFetching: false
      })
      alert('Couldn\'t fetch instagram photos')
    })
  }

  render () {
    if (this.state.isFetching)
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
        instagramPhotos={this.props.user[this.props.userId].instagramPhotos}
        isFetchingInstagram={this.state.isFetching}
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
    workouts: state.workout.data,
    login: state.login,
    favouriteWorkouts: state.userData.userWorkouts.data
  }
}
export default connect(
  (state) => mapStateToProps(state),
    (dispatch) => ({
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch),
      fetchUserWorkouts: bindActionCreators(fetchUserWorkouts, dispatch),
      userActionDispatchers: bindActionCreators(UserActions, dispatch)
    })
)(Profile)
