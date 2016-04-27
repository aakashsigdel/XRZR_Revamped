'use strict'

import React, {
  Component,
  Navigator,
  PropTypes,
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Orientation from 'react-native-orientation'

import * as workoutActionCreators from '../redux_x/actions/workoutActionCreators'
import * as exerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as categoryActionCreators from '../redux_x/actions/categoryActionCreators'
import { loginSuccess } from '../redux_x/actions/loginActionCreators'
import {changeOrientation} from '../redux_x/actions/uiStatesActionCreators'

import Login from './Login'
import Player from './Player'
import Browse from './Browse'
import MostPopular from './MostPopular'
import Category from './Category'
import ActionScreen from '../components/ActionScreen/ActionScreenIndex.js'
import AddExerciseToWorkout from '../containers/AddExerciseToWorkout'
import WorkoutIntro from './WorkoutIntro'
import Search from './Search'
import Premium from './Premium'
import Profile from './Profile'
import FavouriteExercises from './FavouriteExercises'
import FavouriteWorkouts from './FavouriteWorkouts'
import WorkoutCompletion from './WorkoutCompletion'
import ExerciseProperties from './ExerciseProperties'
import WorkoutSettings from './WorkoutSettings'
import EditWorkoutExercises from './EditWorkoutExercises'
import ProfileSettings from './ProfileSettings'
import NewWorkout from './NewWorkout'
import DeleteWorkout from './DeleteWorkout'
import Advertisement from './Advertisement'
import PausePlay from './PausePlay'
import NewExerciseUploading from './NewExerciseUploading'
import { getAccessTokenFromAsyncStorage } from '../utilities/utility'
import Test from './Test'

class XRZRApp extends Component {
  componentDidMount () {
    this.lockToPortrait()
    Orientation.addOrientationListener(this.props.actions.changeOrientation)
  }

  componentWillUnmount () {
    Orientation.removeOrientationListener(this.props.actions.changeOrientation)
  }

  lockToPortrait () {
    Orientation.lockToPortrait()
  }

  _renderScene (route, navigator) {
    this.navigator = navigator
    switch (route.name) {
      case 'login':
        return <Login
          navigator={navigator}
        />
      case 'player':
        return <Player
          lockToPortrait={this.lockToPortrait}
          navigator={navigator}
        />
      case 'browse':
        return <Browse navigator={navigator} />
      case 'mostPopular':
        return <MostPopular
          navigator={navigator}
        />
      case 'category':
        return <Category
          navigator={navigator}
        />
      case 'action':
        return <ActionScreen
          actionElements={route.actionElements}
          actionTitle={route.actionTitle}
          navigator={navigator}
          onClose={route.onClose}
        />
      case 'addExerciseToWorkout':
        return <AddExerciseToWorkout
          navigator={navigator}
          exercise={route.exercise}
        />
      case 'workoutIntro':
        return <WorkoutIntro navigator={navigator} />
      case 'search':
        return <Search navigator={navigator} />
      case 'favouriteExercises':
        return <FavouriteExercises navigator={navigator} />
      case 'favouriteWorkouts':
        return <FavouriteWorkouts navigator={navigator} />
      case 'premium':
        return <Premium navigator={navigator} />
      case 'profile':
        return <Profile
          navigator={navigator}
          userId={route.userId}
        />
      case 'workoutCompletion':
        return <WorkoutCompletion navigator={navigator} />
      case 'exerciseProperties':
        return <ExerciseProperties
          navigator={navigator}
          isNewExercise={route.isNewExercise}
          exerciseId={route.exerciseId}
          exerciseUpdateId={route.exerciseUpdateId}
        />
      case 'workoutSettings':
        return <WorkoutSettings
          navigator={navigator}
          workoutId={route.workoutId}
        />
      case 'editWorkoutExercises':
        return <EditWorkoutExercises
          navigator={navigator}
          workoutId={route.workoutId}
        />
      case 'profileSettings':
        return <ProfileSettings
          navigator={navigator}
          userId={route.userId}
        />
      case 'newWorkout':
        return <NewWorkout navigator={navigator} />
      case 'deleteWorkout':
        return <DeleteWorkout
          navigator={navigator}
          workoutId={route.workoutId}
        />
      case 'ads':
        return <Advertisement
          navigator={navigator}
          onClose={route.onAdClose}
        />
      case 'pausePlay':
        return <PausePlay
          navigator={navigator}
          nextExercise={route.nextExercise}
          onCloseButton={route.onCloseButton}
          onCountCompletion={route.onCountCompletion}
          pauseTime={route.pauseTime}
          title={route.title}
        />
      case 'newExerciseUploading':
        return <NewExerciseUploading
          navigator={navigator}
          exercise={route.newExercise}
          user={route.user}
          update={route.update}
          exerciseUpdateId={route.exerciseUpdateId}
          isNewExercise={route.isNewExercise}
        />
      case 'test':
        return <Test />
      default:
        return <Login
          navigator={navigator}
        />
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'login'}}
          renderScene={(navigator, route) => this._renderScene(navigator, route)}
        />
      </View>
    )
  }
}

// ----
// PropTypes
// ----
XRZRApp.propTypes = {
  state: PropTypes.object,
  actions: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,1)',
    flex: 1
  }
})

// ----
// connect
// ----
const _mapDispatchToProps = (dispatch) => {
  const actions = {}
  actions.workoutActions = bindActionCreators(workoutActionCreators, dispatch)
  actions.exerciseActions = bindActionCreators(exerciseActionCreators, dispatch)
  actions.categoryActions = bindActionCreators(categoryActionCreators, dispatch)
  actions.loginSuccess = bindActionCreators(loginSuccess, dispatch)
  actions.changeOrientation = bindActionCreators(changeOrientation, dispatch)

  return { actions }
}

export default connect(
  (state) => ({ state }),
  _mapDispatchToProps
)(XRZRApp)
