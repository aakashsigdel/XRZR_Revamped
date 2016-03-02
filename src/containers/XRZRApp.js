'use strict'

import React, {
  Navigator,
  PropTypes
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as workoutActionCreators from '../redux_x/actions/workoutActionCreators'
import * as exerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as categoryActionCreators from '../redux_x/actions/categoryActionCreators'

import Login from '../components/Login/Login'
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

const XRZRApp = ({ state, actions, store }) => {
  return (
    <Navigator
      initialRoute={{name: 'workoutSettings'}}
      renderScene={_renderScene}
    />
  )
}

const _renderScene = (route, navigator) => {
  switch (route.name) {
    case 'login':
      return <Login
        navigator={navigator}
      />
    case 'player':
      return <Player navigator={navigator} />
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
      />
    case 'addExerciseToWorkout':
      return <AddExerciseToWorkout
        navigator={navigator}
        exerciseId={route.exerciseId}
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
      return <ExerciseProperties navigator={navigator} />
    case 'workoutSettings':
      return <WorkoutSettings
        navigator={navigator}
        workoutId={1/* route.workoutId*/}
      />
    case 'editWorkoutExercises':
      return <EditWorkoutExercises
        navigator={navigator}
        workoutId={route.workoutId}
      />
    case 'profileSettings':
      return <ProfileSettings navigator={navigator} />
    case 'newWorkout':
      return <NewWorkout navigator={navigator} />
    case 'deleteWorkout':
      return <DeleteWorkout
        navigator={navigator}
        workoutId={1/* route.workoutId*/}
      />
    default:
      return <Login
        navigator={navigator}
      />
  }
}

// ----
// PropTypes
// ----
XRZRApp.propTypes = {
  state: PropTypes.object,
  actions: PropTypes.object
}

// ----
// connect
// ----
const _mapDispatchToProps = (dispatch) => {
  const actions = {}
  actions.workoutActions = bindActionCreators(workoutActionCreators, dispatch)
  actions.exerciseActions = bindActionCreators(exerciseActionCreators, dispatch)
  actions.categoryActions = bindActionCreators(categoryActionCreators, dispatch)

  return { actions }
}

export default connect(
  (state) => ({ state }),
  _mapDispatchToProps
)(XRZRApp)
